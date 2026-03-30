# Guestbook Deployment (Cloudflare Pages + D1)

This project now uses a custom guestbook API at `/api/guestbook` backed by Cloudflare D1.
If D1 is not bound yet, the API automatically falls back to temporary in-memory mode (non-durable).

You can check current runtime mode with:

```bash
curl -sS https://www.huayusha.org/api/guestbook/health
```

## 1) Create D1 database

Use Cloudflare dashboard or Wrangler CLI:

```bash
wrangler d1 create huayusha_guestbook
```

Copy the generated `database_id`.

## 2) Initialize schema

Run:

```bash
wrangler d1 execute huayusha_guestbook --file=scripts/guestbook_schema.sql
```

Note: the runtime also has auto-schema creation on first request when D1 is bound.
Manual migration is still recommended for explicit setup.

## 3) Bind D1 to Pages project

In **Cloudflare Pages → your project → Settings → Functions → D1 bindings**:

- Binding name: `GUESTBOOK_DB`
- Database: `huayusha_guestbook`

## 4) Set IP hash salt

In **Cloudflare Pages → Settings → Environment variables** add:

- `GUESTBOOK_IP_SALT` = a long random secret string

Set for both Preview and Production environments.

## 5) Deploy

- Push to `master` (or your production branch), then wait for Pages build/deploy.
- After deploy, open `/guestbook/` and `/zh/guestbook/` to verify:
  - listing works (`GET /api/guestbook`)
  - submit works (`POST /api/guestbook`)
  - database mode is active (`GET /api/guestbook/health`, `storage_mode` should be `d1`)

You can run quick checks with:

```bash
./scripts/guestbook_d1_check.sh https://www.huayusha.org
```

## 6) Optional moderation

The schema includes `status` field (`visible` / `hidden`).
You can moderate by updating rows in D1:

```sql
UPDATE guestbook_messages SET status = 'hidden' WHERE id = 123;
```
