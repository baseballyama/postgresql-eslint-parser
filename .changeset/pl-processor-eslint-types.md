---
"postgresql-eslint-parser": patch
---

Fix a TypeScript error when passing `createPlProcessor(...)` to ESLint: `processor` in a flat config (`Linter.Config`), a plugin's `processors`, and `Linter.Processor` now accept it directly, without a cast or a wrapper. Previously `postprocess` only took and returned `ProcessorMessage`, which ESLint's `LintMessage` is not assignable to.

`postprocess` is now generic over the message type: it returns the same type it receives. Calling it directly with `ProcessorMessage` still type-checks and still returns `ProcessorMessage[]`. Runtime behavior is unchanged.
