const DB_BINDING = 'GUESTBOOK_DB';
const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 100;
const NAME_MAX = 80;
const CONTACT_MAX = 120;
const MESSAGE_MAX = 2000;
const USER_AGENT_MAX = 255;
const RATE_LIMIT_SECONDS = 30;
const FALLBACK_MAX_MESSAGES = 300;
const TABLE_NAME = 'guestbook_messages';

let schemaEnsured = false;

const fallbackState = globalThis.__guestbookMemoryState || {
  messages: [],
  idSequence: 1,
  lastPostByIp: new Map()
};

globalThis.__guestbookMemoryState = fallbackState;

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'cache-control': 'no-store'
    }
  });
}

function normalizeText(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function pickIp(request) {
  const cfIp = request.headers.get('CF-Connecting-IP');
  if (cfIp) return cfIp.trim();

  const forwarded = request.headers.get('x-forwarded-for');
  if (!forwarded) return '0.0.0.0';
  return forwarded.split(',')[0].trim() || '0.0.0.0';
}

async function sha256Hex(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function pickLimit(url) {
  const limitRaw = Number.parseInt(url.searchParams.get('limit') || `${DEFAULT_LIMIT}`, 10);
  if (!Number.isFinite(limitRaw)) return DEFAULT_LIMIT;
  return Math.max(1, Math.min(MAX_LIMIT, limitRaw));
}

function looksLikeD1Binding(value) {
  return !!(value && typeof value === 'object' && typeof value.prepare === 'function');
}

function resolveDbBinding(env) {
  if (!env) return { db: null, bindingName: null };

  const exact = env[DB_BINDING];
  if (looksLikeD1Binding(exact)) {
    return { db: exact, bindingName: DB_BINDING };
  }

  for (const [key, value] of Object.entries(env)) {
    if (!looksLikeD1Binding(value)) continue;
    if (key.toUpperCase().includes('GUESTBOOK') || key.toUpperCase().includes('D1')) {
      return { db: value, bindingName: key };
    }
  }

  for (const [key, value] of Object.entries(env)) {
    if (looksLikeD1Binding(value)) {
      return { db: value, bindingName: key };
    }
  }

  return { db: null, bindingName: null };
}

function getDb(env) {
  return resolveDbBinding(env).db;
}

function getStorageMode(env) {
  return getDb(env) ? 'd1' : 'memory';
}

async function ensureSchema(db) {
  if (!db || schemaEnsured) return;

  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL CHECK(length(name) <= 80),
        contact TEXT CHECK(contact IS NULL OR length(contact) <= 120),
        message TEXT NOT NULL CHECK(length(message) <= 2000),
        created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
        ip_hash TEXT,
        user_agent TEXT,
        status TEXT NOT NULL DEFAULT 'visible' CHECK(status IN ('visible', 'hidden'))
      )`
    )
    .run();

  await db
    .prepare(`CREATE INDEX IF NOT EXISTS idx_guestbook_created_at ON ${TABLE_NAME}(created_at DESC)`)
    .run();
  await db
    .prepare(`CREATE INDEX IF NOT EXISTS idx_guestbook_status ON ${TABLE_NAME}(status, id DESC)`)
    .run();
  await db
    .prepare(`CREATE INDEX IF NOT EXISTS idx_guestbook_ip_hash ON ${TABLE_NAME}(ip_hash)`)
    .run();

  schemaEnsured = true;
}

function nowIso() {
  return new Date().toISOString();
}

function listMemoryMessages(limit) {
  return fallbackState.messages
    .filter((item) => item.status === 'visible')
    .slice(-limit)
    .reverse()
    .map(({ id, name, contact, message, created_at }) => ({
      id,
      name,
      contact,
      message,
      created_at
    }));
}

function isRateLimitedInMemory(ipHash) {
  const now = Date.now();
  const last = fallbackState.lastPostByIp.get(ipHash);
  if (last && now - last < RATE_LIMIT_SECONDS * 1000) {
    return true;
  }
  fallbackState.lastPostByIp.set(ipHash, now);
  return false;
}

function insertMemoryMessage({ name, contact, message, ipHash, userAgent }) {
  const item = {
    id: fallbackState.idSequence++,
    name,
    contact: contact || null,
    message,
    created_at: nowIso(),
    ip_hash: ipHash,
    user_agent: userAgent || null,
    status: 'visible'
  };

  fallbackState.messages.push(item);
  if (fallbackState.messages.length > FALLBACK_MAX_MESSAGES) {
    fallbackState.messages.splice(0, fallbackState.messages.length - FALLBACK_MAX_MESSAGES);
  }

  return {
    id: item.id,
    name: item.name,
    contact: item.contact,
    message: item.message,
    created_at: item.created_at
  };
}

export function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      allow: 'GET, POST, OPTIONS'
    }
  });
}

export async function onRequestGet(context) {
  const limit = pickLimit(new URL(context.request.url));
  const resolved = resolveDbBinding(context.env);
  const db = resolved.db;
  if (!db) {
    return json({
      messages: listMemoryMessages(limit),
      storage_mode: getStorageMode(context.env),
      binding_name: null
    });
  }

  try {
    await ensureSchema(db);

    const query = db
      .prepare(
        `SELECT id, name, contact, message, created_at
         FROM ${TABLE_NAME}
         WHERE status = 'visible'
         ORDER BY id DESC
         LIMIT ?1`
      )
      .bind(limit);

    const result = await query.all();
    return json({
      messages: result.results || [],
      storage_mode: getStorageMode(context.env),
      binding_name: resolved.bindingName || DB_BINDING
    });
  } catch (error) {
    console.error('[guestbook][GET] failed', error);
    return json({ error: 'Failed to load messages.' }, 500);
  }
}

export async function onRequestPost(context) {
  const resolved = resolveDbBinding(context.env);
  const db = resolved.db;

  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  const honeypot = normalizeText(body.website, 200);
  if (honeypot) {
    return json({ ok: true });
  }

  const name = normalizeText(body.name, NAME_MAX);
  const contact = normalizeText(body.contact, CONTACT_MAX);
  const message = normalizeText(body.message, MESSAGE_MAX);

  if (!name) return json({ error: 'Name is required.' }, 400);
  if (!message) return json({ error: 'Message is required.' }, 400);

  const userAgent = normalizeText(context.request.headers.get('user-agent'), USER_AGENT_MAX);
  const ip = pickIp(context.request);
  const ipSalt = String(context.env.GUESTBOOK_IP_SALT || 'guestbook-default-salt');
  const ipHash = await sha256Hex(`${ipSalt}:${ip}`);
  const storageMode = getStorageMode(context.env);

  if (!db) {
    if (isRateLimitedInMemory(ipHash)) {
      return json({ error: 'Too many requests. Please retry later.' }, 429);
    }

    const inserted = insertMemoryMessage({
      name,
      contact,
      message,
      ipHash,
      userAgent
    });

    return json({
      ok: true,
      message: inserted,
      storage_mode: storageMode,
      binding_name: null
    }, 201);
  }

  try {
    await ensureSchema(db);

    const rateLimited = await db
      .prepare(
        `SELECT COUNT(1) AS count
         FROM ${TABLE_NAME}
         WHERE ip_hash = ?1
           AND created_at > datetime('now', ?2)`
      )
      .bind(ipHash, `-${RATE_LIMIT_SECONDS} seconds`)
      .first();

    if ((rateLimited && Number(rateLimited.count)) > 0) {
      return json({ error: 'Too many requests. Please retry later.' }, 429);
    }

    const insertResult = await db
      .prepare(
        `INSERT INTO ${TABLE_NAME}
         (name, contact, message, ip_hash, user_agent, status)
         VALUES (?1, ?2, ?3, ?4, ?5, 'visible')`
      )
      .bind(name, contact || null, message, ipHash, userAgent || null)
      .run();

    const insertedId = insertResult.meta && insertResult.meta.last_row_id
      ? Number(insertResult.meta.last_row_id)
      : null;

    if (!insertedId) {
      return json({ ok: true });
    }

    const insertedRow = await db
      .prepare(
        `SELECT id, name, contact, message, created_at
         FROM ${TABLE_NAME}
         WHERE id = ?1`
      )
      .bind(insertedId)
      .first();

    return json({
      ok: true,
      message: insertedRow || null,
      storage_mode: storageMode,
      binding_name: resolved.bindingName || DB_BINDING
    }, 201);
  } catch (error) {
    console.error('[guestbook][POST] failed', error);
    return json({ error: 'Failed to submit message.' }, 500);
  }
}
