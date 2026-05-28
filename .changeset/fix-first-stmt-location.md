---
"postgresql-eslint-parser": patch
---

Treat libpg-query's omitted `stmt_location` as `0` instead of skipping the top-level statement loc override.

libpg-query omits `stmt_location` from the JSON output when the value is 0 (the default for the first statement in the file). The previous condition `typeof stmt.stmt_location === "number"` rejected `undefined`, so the override path was skipped and the first top-level statement ended up with the `[0, 0]` fallback from `addLocation`. Downstream rules that rely on `node.range` (e.g. `postgresql/require-if-exists`) then reported against `line 1, column 0`, which sits strictly before any inline `eslint-disable` directive and made the directive useless.
