CREATE TABLE IF NOT EXISTS guestbook_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL CHECK(length(name) <= 80),
  contact TEXT CHECK(contact IS NULL OR length(contact) <= 120),
  message TEXT NOT NULL CHECK(length(message) <= 2000),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  ip_hash TEXT,
  user_agent TEXT,
  status TEXT NOT NULL DEFAULT 'visible' CHECK(status IN ('visible', 'hidden'))
);

CREATE INDEX IF NOT EXISTS idx_guestbook_created_at
  ON guestbook_messages(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_guestbook_status
  ON guestbook_messages(status, id DESC);

CREATE INDEX IF NOT EXISTS idx_guestbook_ip_hash
  ON guestbook_messages(ip_hash);

CREATE TABLE IF NOT EXISTS guestbook_message_audit (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  message_id INTEGER,
  ip_plain TEXT,
  ip_hash TEXT,
  country TEXT,
  user_agent TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_guestbook_audit_message_id
  ON guestbook_message_audit(message_id DESC);

CREATE INDEX IF NOT EXISTS idx_guestbook_audit_created_at
  ON guestbook_message_audit(created_at DESC);
