---
"postgresql-eslint-parser": minor
---

Add `createPlProcessor` (exported from the new `postgresql-eslint-parser/processor` subpath) — a generic ESLint processor that emits one virtual file per PL function body so ESLint can lint each body with whatever parser and rules the user has configured for that language. The processor itself is language-agnostic: it takes a `{ languages: Record<string, string> }` map from `LANGUAGE` name to virtual-file extension. Plug in `.js` for plv8, `.py` for plpython3u, `.plpgsql` for plpgsql, etc.

`preprocess` returns blocks named `0.<ext>`, `1.<ext>`, … so user configs can target them with patterns like `**/*.sql/*.js`. `postprocess` maps message line/column back to the SQL coordinate system. Fix ranges are translated only for dollar-quoted bodies; single-quoted bodies (with `''` escapes) drop fixes to avoid reporting incorrect ranges. `unknown: "error"` flips the default skip behaviour so unhandled languages fail loudly.
