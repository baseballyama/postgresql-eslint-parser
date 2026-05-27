---
"postgresql-eslint-parser": patch
---

Fix `[0, 0]` fallback locations for nodes nested in a statement that lack their own `location` from libpg-query (most commonly the `SelectStmt` wrapped inside an `InsertStmt`).

Previously, those nodes resolved to `range: [0, 0]` / `loc: { line: 1, column: 0 }`, which made every inline `eslint-disable` directive useless — downstream rules (e.g. `postgresql/require-limit`) reported against `line 1, column 0`, strictly before any comment-based directive could take effect.

After this fix, when `manipulate` knows the true bounds of the top-level statement (from `stmt_location` / `stmt_len`), it walks back down and replaces the `[0, 0]` fallbacks with the nearest ancestor's `range` / `loc`. The result is an over-approximation of each child's true range, but it sits strictly inside the enclosing statement and is large enough that `/* eslint-disable */` directives at the file head suppress reports against it as expected.
