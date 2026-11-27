---
"postgresql-eslint-parser": patch
---

The WASM loader now binds the `invoke_*` imports that the installed `@libpg-query/parser` declares, instead of a fixed list, so a rebuild that adds or drops one no longer fails at load time with "Unknown libpg-query import symbol".
