const DB_BINDING = 'GUESTBOOK_DB';
const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 100;
const NAME_MAX = 80;
const CONTACT_MAX = 120;
const MESSAGE_MAX = 2000;
const USER_AGENT_MAX = 255;
const RATE_LIMIT_SECONDS = 30;

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

function getDb(env) {
  return env && env[DB_BINDING] ? env[DB_BINDING] : null;
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
  const db = getDb(context.env);
  if (!db) {
    return json({ error: `Missing Cloudflare D1 binding: ${DB_BINDING}` }, 500);
  }

  try {
    const limit = pickLimit(new URL(context.request.url));
    const query = db
      .prepare(
        `SELECT id, name, contact, message, created_at
         FROM guestbook_messages
         WHERE status = 'visible'
         ORDER BY id DESC
         LIMIT ?1`
      )
      .bind(limit);

    const result = await query.all();
    return json({ messages: result.results || [] });
  } catch (error) {
    console.error('[guestbook][GET] failed', error);
    return json({ error: 'Failed to load messages.' }, 500);
  }
}

export async function onRequestPost(context) {
  const db = getDb(context.env);
  if (!db) {
    return json({ error: `Missing Cloudflare D1 binding: ${DB_BINDING}` }, 500);
  }

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

  try {
    const rateLimited = await db
      .prepare(
        `SELECT COUNT(1) AS count
         FROM guestbook_messages
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
        `INSERT INTO guestbook_messages
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
         FROM guestbook_messages
         WHERE id = ?1`
      )
      .bind(insertedId)
      .first();

    return json({ ok: true, message: insertedRow || null }, 201);
  } catch (error) {
    console.error('[guestbook][POST] failed', error);
    return json({ error: 'Failed to submit message.' }, 500);
  }
}
