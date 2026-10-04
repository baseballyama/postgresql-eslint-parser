---
"postgresql-eslint-parser": patch
---

Fix the parser failing to load with `Unknown libpg-query export symbol: _wasm_parse_query` when `@libpg-query/parser` 17.8.0 is installed. That release is inside the `^17.6.3` range but changes how its Emscripten shim names exports; package managers that resolve the highest matching version (rather than the `latest` dist-tag, which still points at 17.6.10) pick it up.
