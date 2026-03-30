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
  const db = context.env && context.env[DB_BINDING] ? context.env[DB_BINDING] : null;

  if (!db) {
    return json({
      ok: true,
      storage_mode: 'memory',
      has_d1_binding: false,
      d1_binding_name: DB_BINDING,
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
      visible_messages: Number(count && count.total ? count.total : 0),
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return json({
      ok: false,
      storage_mode: 'd1',
      has_d1_binding: true,
      d1_binding_name: DB_BINDING,
      error: String(error && error.message ? error.message : error),
      hint: `Run schema migration for table ${TABLE_NAME}.`,
      timestamp: new Date().toISOString()
    }, 500);
  }
}
