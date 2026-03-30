const DB_BINDING = 'GUESTBOOK_DB';
const TABLE_NAME = 'guestbook_messages';

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'cache-control': 'no-store'
    }
  });
}

export async function onRequestGet(context) {
  const env = context.env || {};

  function looksLikeD1Binding(value) {
    return !!(value && typeof value === 'object' && typeof value.prepare === 'function');
  }

  function resolveDbBinding() {
    const exact = env[DB_BINDING];
    if (looksLikeD1Binding(exact)) {
      return { db: exact, bindingName: DB_BINDING, exactMatch: true };
    }

    for (const [key, value] of Object.entries(env)) {
      if (!looksLikeD1Binding(value)) continue;
      if (key.toUpperCase().includes('GUESTBOOK') || key.toUpperCase().includes('D1')) {
        return { db: value, bindingName: key, exactMatch: false };
      }
    }

    for (const [key, value] of Object.entries(env)) {
      if (looksLikeD1Binding(value)) {
        return { db: value, bindingName: key, exactMatch: false };
      }
    }

    return { db: null, bindingName: null, exactMatch: false };
  }

  const resolved = resolveDbBinding();
  const db = resolved.db;

  if (!db) {
    return json({
      ok: true,
      storage_mode: 'memory',
      has_d1_binding: false,
      d1_binding_name: DB_BINDING,
      detected_binding_name: null,
      exact_binding_match: false,
      timestamp: new Date().toISOString()
    });
  }

  try {
    const count = await db
      .prepare(`SELECT COUNT(1) AS total FROM ${TABLE_NAME} WHERE status = 'visible'`)
      .first();

    return json({
      ok: true,
      storage_mode: 'd1',
      has_d1_binding: true,
      d1_binding_name: DB_BINDING,
      detected_binding_name: resolved.bindingName,
      exact_binding_match: resolved.exactMatch,
      visible_messages: Number(count && count.total ? count.total : 0),
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return json({
      ok: false,
      storage_mode: 'd1',
      has_d1_binding: true,
      d1_binding_name: DB_BINDING,
      detected_binding_name: resolved.bindingName,
      exact_binding_match: resolved.exactMatch,
      error: String(error && error.message ? error.message : error),
      hint: `Run schema migration for table ${TABLE_NAME}.`,
      timestamp: new Date().toISOString()
    }, 500);
  }
}
