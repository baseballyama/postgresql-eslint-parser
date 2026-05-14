---
"postgresql-eslint-parser": minor
---

Stop the descendant-aggregation in `addLocation` from emitting a
default `{position: 0}` for subtrees with no observed locations.

Previously, `addLocation` returned `createDefaultLocation()` (which is
position 0) when neither a child nor the node itself had a location.
That default bubbled into the ancestor's `updateCurrentMinMax` and
dragged its `range[0]` down to 0 — most visibly for the `selectStmt`
wrapped inside an `InsertStmt`, whose range came out as `[0, 63]`
instead of the correct `[34, 41]` for `INSERT INTO t (col) VALUES ('x')`.

The function now returns `{ minLocation: null, maxLocation: null }` when
nothing was found, and `updateCurrentMinMax` already treats null as a
no-op. Top-level statement ranges are unaffected (they were already
overridden via `stmt_location` / `stmt_len` in PR #182).
