---
"postgresql-eslint-parser": patch
---

fix: resolve `@libpg-query/parser` WASM import/export letters dynamically so future rebuilds (e.g. v17.6.10) don't silently corrupt memory
