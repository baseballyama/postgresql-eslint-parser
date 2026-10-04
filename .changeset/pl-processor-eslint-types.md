---
"postgresql-eslint-parser": minor
---

`createPlProcessor(...)` can now be passed to ESLint without a cast or a wrapper: `processor` in a flat config (`Linter.Config`), a plugin's `processors`, and `Linter.Processor` accept it. Previously this was a TypeScript error (TS2322), because its `postprocess` only took and returned `ProcessorMessage`, which ESLint's `LintMessage` is not assignable to. Runtime behavior is unchanged.

The exported `PlProcessor` and `ProcessorMessage` types are unchanged. `createPlProcessor` now returns a subtype of `PlProcessor` whose `postprocess` also accepts `LintMessage[][]` and then returns `LintMessage[]`. Calling it with `ProcessorMessage[][]` (or any message objects) still returns `ProcessorMessage[]`.

**Type change:** a variable whose type is inferred from `createPlProcessor(...)` can no longer be reassigned to a processor you typed as `PlProcessor` yourself, and `ReturnType<typeof createPlProcessor>` now names the subtype. Annotate the variable as `PlProcessor` if you swap processors:

```ts
import { createPlProcessor, type PlProcessor } from "postgresql-eslint-parser/processor";

// Before: `let processor = createPlProcessor(options);` then `processor = myProcessor;`
let processor: PlProcessor = createPlProcessor(options);
processor = myProcessor; // OK
```

Keep the inferred type (no annotation) where you pass the processor to ESLint, since a value typed as `PlProcessor` is still not accepted by ESLint's `Processor` type.
