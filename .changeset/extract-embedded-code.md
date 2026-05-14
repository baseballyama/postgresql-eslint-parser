---
"postgresql-eslint-parser": minor
---

Add `extractEmbeddedCode(program)` — a low-level helper that returns every
`EmbeddedCode` node in source order. Intended as the building block for
tooling that maps PL function bodies onto something else (an ESLint
processor's virtual files, a CI audit, a documentation generator, …) without
re-walking the AST manually.
