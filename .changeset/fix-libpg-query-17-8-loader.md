---
"postgresql-eslint-parser": patch
---

Fix the parser failing to load with `Unknown libpg-query export symbol: _wasm_parse_query` when `@libpg-query/parser` 17.8.0 is installed. That release changes how its Emscripten shim names exports, and package managers that resolve the highest matching version (rather than the `latest` dist-tag, which still points at 17.6.10) pick it up.

The parser now requires `@libpg-query/parser` 17.6.6 or later (the dependency range moves from `^17.6.3` to `^17.6.6`), because it reads parse errors through an export that 17.6.3–17.6.5 do not have. If your lockfile pins one of those versions, your package manager updates it when you upgrade the parser. If an older copy is still loaded, the parser now fails at load time with a message that names the missing exports and the required version.
