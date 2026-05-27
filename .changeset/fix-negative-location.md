---
"postgresql-eslint-parser": patch
---

Treat libpg-query's negative `location` values (most commonly `-1`) as "no location" instead of converting them to a `[-1, -1]` range. libpg-query uses negative locations to mark synthetic / unanchored nodes — e.g. the `selectStmt` that `transformInsertStmt` wraps around an `INSERT INTO ... SELECT ...`. Previously, these nodes ended up with `range: [-1, n]` (where `n` came from sibling/parent bounds), which made downstream rules report at `line 1 column -1` and bypass every inline `eslint-disable` directive.
