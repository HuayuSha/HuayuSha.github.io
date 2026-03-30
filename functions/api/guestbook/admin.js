const DB_BINDING = 'GUESTBOOK_DB';
const TABLE_NAME = 'guestbook_messages';
const AUDIT_TABLE_NAME = 'guestbook_message_audit';
const DEFAULT_LIMIT = 30;
const MAX_LIMIT = 100;

let schemaEnsured = false;

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'cache-control': 'no-store'
    }
  });
}

function parseLimit(url) {
  const raw = Number.parseInt(url.searchParams.get('limit') || `${DEFAULT_LIMIT}`, 10);
  if (!Number.isFinite(raw)) return DEFAULT_LIMIT;
  return Math.max(1, Math.min(MAX_LIMIT, raw));
}

function looksLikeD1Binding(value) {
  return !!(value && typeof value === 'object' && typeof value.prepare === 'function');
}

function resolveDbBinding(env) {
  if (!env) return null;
  if (looksLikeD1Binding(env[DB_BINDING])) return env[DB_BINDING];
  for (const [key, value] of Object.entries(env)) {
    if (!looksLikeD1Binding(value)) continue;
    if (key.toUpperCase().includes('GUESTBOOK') || key.toUpperCase().includes('D1')) return value;
  }
  for (const value of Object.values(env)) {
    if (looksLikeD1Binding(value)) return value;
  }
  return null;
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
    .prepare(
      `CREATE TABLE IF NOT EXISTS ${AUDIT_TABLE_NAME} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        message_id INTEGER,
        ip_plain TEXT,
        ip_hash TEXT,
        country TEXT,
        user_agent TEXT,
        created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
      )`
    )
    .run();

  schemaEnsured = true;
}

function extractToken(request) {
  const auth = request.headers.get('Authorization') || '';
  if (auth.toLowerCase().startsWith('bearer ')) {
    return auth.slice(7).trim();
  }
  return '';
}

export async function onRequestGet(context) {
  const env = context.env || {};
  const expectedToken = String(env.GUESTBOOK_ADMIN_TOKEN || '').trim();
  if (!expectedToken) {
    return json({
      ok: false,
      error: 'Admin token not configured.',
      hint: 'Set GUESTBOOK_ADMIN_TOKEN in Cloudflare Pages environment variables.'
    }, 500);
  }

  const providedToken = extractToken(context.request);
  if (!providedToken || providedToken !== expectedToken) {
    return json({
      ok: false,
      error: 'Unauthorized.'
    }, 401);
  }

  const db = resolveDbBinding(env);
  if (!db) {
    return json({
      ok: false,
      error: 'D1 binding not found.'
    }, 500);
  }

  try {
    await ensureSchema(db);
    const limit = parseLimit(new URL(context.request.url));

    const result = await db
      .prepare(
        `SELECT
           a.id AS audit_id,
           a.message_id,
           m.name,
           m.contact,
           m.message,
           m.created_at AS message_created_at,
           a.ip_plain,
           a.ip_hash,
           a.country,
           a.user_agent,
           a.created_at AS audit_created_at
         FROM ${AUDIT_TABLE_NAME} a
         LEFT JOIN ${TABLE_NAME} m ON m.id = a.message_id
         ORDER BY a.id DESC
         LIMIT ?1`
      )
      .bind(limit)
      .all();

    return json({
      ok: true,
      storage_mode: 'd1',
      records: result.results || []
    });
  } catch (error) {
    return json({
      ok: false,
      error: String(error && error.message ? error.message : error)
    }, 500);
  }
}
