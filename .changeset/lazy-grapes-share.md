---
"postgresql-eslint-parser": patch
---

Fix synchronous parsing by loading the WASM binary synchronously via `new WebAssembly.Module()` + `new WebAssembly.Instance()`, removing the need for the async `loadModule()` call that was incompatible with ESLint's synchronous parser API.
