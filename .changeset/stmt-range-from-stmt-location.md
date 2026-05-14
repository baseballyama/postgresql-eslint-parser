---
"postgresql-eslint-parser": minor
---

Use `stmt_location` and `stmt_len` from libpg-query to set the absolute
`range` and `loc` of every top-level statement.

Previously, the parser derived each top-level node's range by aggregating
the min/max positions of its descendants. When a descendant lacked
`location` info, the `[0, 0]` fallback dragged `range[0]` down to 0 for
every statement after the first, and `range[1]` was set to the start of
the rightmost-located token rather than its end. Token-walking lint
rules (`require-trailing-semicolon`, statement-boundary checks) relied
on the stmt range and false-positived as a result.

libpg-query already returns `stmt_location` (absolute byte offset) and
`stmt_len` (byte length) per top-level statement; we now use them
directly. Inner nodes (e.g. the `selectStmt` of an `InsertStmt`) still
go through the aggregate path — that's a separate bug.
