---
"postgresql-eslint-parser": patch
---

Fix a TypeScript error when passing `createPlProcessor(...)` to ESLint: `processor` in a flat config (`Linter.Config`), a plugin's `processors`, and `Linter.Processor` now accept it directly, without a cast or a wrapper. Previously its `postprocess` only took and returned `ProcessorMessage`, which ESLint's `LintMessage` is not assignable to.

The exported `PlProcessor` and `ProcessorMessage` types are unchanged. `createPlProcessor` now returns a subtype of `PlProcessor` whose `postprocess` returns the message type it receives: `LintMessage[]` when ESLint calls it, and `ProcessorMessage[]` when you call it with `ProcessorMessage[][]` as before. Runtime behavior is unchanged.
