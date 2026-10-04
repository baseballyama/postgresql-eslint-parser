---
"postgresql-eslint-parser": minor
---

`createPlProcessor(...)` can now be passed to ESLint without a cast or a wrapper: `processor` in a flat config (`Linter.Config`), a plugin's `processors`, and `Linter.Processor` accept it. Previously this was a TypeScript error (TS2322), because its `postprocess` only took and returned `ProcessorMessage`, which ESLint's `LintMessage` is not assignable to. Runtime behavior is unchanged.

The exported `PlProcessor` and `ProcessorMessage` types are unchanged. `createPlProcessor` now returns a subtype of `PlProcessor` whose `postprocess` also accepts `LintMessage[][]` and then returns `LintMessage[]`. Code written against the previous types keeps compiling:

- Calling `postprocess` with messages assignable to `ProcessorMessage` (`ProcessorMessage[][]`, or object literals and type-literal types) still returns `ProcessorMessage[]`. Messages typed by an interface are not assignable to `ProcessorMessage`, because it has an index signature; `LintMessage[][]` goes through the new signature above and returns `LintMessage[]`.
- A variable holding `createPlProcessor(...)` can still be reassigned to a processor you typed as `PlProcessor` yourself.
- Types derived with `Parameters` or `ReturnType` from `postprocess` are the same as before, for example `ReturnType<ReturnType<typeof createPlProcessor>["postprocess"]>` is still `ProcessorMessage[]`.

The only visible difference is that `ReturnType<typeof createPlProcessor>` is now that subtype rather than `PlProcessor` itself, which shows up in exact type-equality checks such as `expectTypeOf(createPlProcessor(options)).toEqualTypeOf<PlProcessor>()`. A processor typed as `PlProcessor` is still not accepted where ESLint expects a processor, so pass the value returned by `createPlProcessor` to ESLint rather than one annotated as `PlProcessor`.
