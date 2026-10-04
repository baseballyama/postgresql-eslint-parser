#!/usr/bin/env bash
# Publish step for changesets/action v2 (its `publish-script`).
#
# changesets/action v1 wrote NPM_TOKEN to ~/.npmrc right before publishing,
# unless the file already held a token for the npm registry; v2 no longer
# does. Keep that behaviour, and with an empty NPM_TOKEN write nothing so npm
# falls back to trusted publishing (OIDC). Never echo the token.
set -euo pipefail

npmrc="$HOME/.npmrc"
if [ -n "${NPM_TOKEN:-}" ] &&
  ! grep -qiE '^\s*//registry\.npmjs\.org/:[_-]authToken=' "$npmrc" 2>/dev/null; then
  printf '\n//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" >> "$npmrc"
fi

exec pnpm release
