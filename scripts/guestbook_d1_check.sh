#!/usr/bin/env bash

set -euo pipefail

BASE_URL="${1:-https://www.huayusha.org}"

echo "[guestbook] checking API health at: ${BASE_URL}"
echo

echo "GET ${BASE_URL}/api/guestbook/health"
curl -sS "${BASE_URL}/api/guestbook/health"
echo
echo

echo "GET ${BASE_URL}/api/guestbook?limit=3"
curl -sS "${BASE_URL}/api/guestbook?limit=3"
echo
echo

echo "If storage_mode is \"d1\", database is active."
