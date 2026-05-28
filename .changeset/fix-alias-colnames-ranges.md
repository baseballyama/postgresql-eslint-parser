---
"postgresql-eslint-parser": patch
---

Fix `Alias` node detection and per-name `range` resolution for `colnames`.

libpg-query emits `Alias` as a bare object — `{ aliasname, colnames? }` — under the `alias` field of its parent (`RangeVar`, `RangeFunction`, `RangeSubselect`, …), without the usual `{ Alias: {...} }` wrapper. The typeKey-detection loop in `addTypes` therefore picked `colnames` (an array) as the synthetic "type", tagged the node `type: "colnames"`, and inlined the array's items into the node under numeric keys. The String children that should represent each alias column were left with no per-name `range` and inherited the parent's range, which for `WITH ORDINALITY AS r(range, r_idx)` covered only the function call and didn't contain the actual column-alias tokens.

Downstream consumers (notably `eslint-plugin-postgresql/prefer-keyword-case`) had no way to tell that identifiers spelled like SQL keywords (`range`, `user`, `order`, `type`, …) inside `AS r(...)` were column-alias positions, and case-folded them as keywords — corrupting the alias column references via autofix.

This release:

- Tags bare `{ aliasname, colnames? }` nodes as `type: "Alias"` explicitly so `colnames` stops being misread as the type.
- Adds a post-pass over the token stream that resolves each `Alias` node's `range` from its aliasname token through the closing paren, and assigns each `colnames[i]` `StringNode` its own per-name `range` / `loc`.
- Updates `Alias.colnames` / `AliasPG.colnames` / `AliasNode.colnames` typings from `string[]` to `StringNode[]` to match the actual emitted structure.

Existing fixtures that previously encoded the inherited (wrong) parent range for alias nodes have been regenerated to the correct per-name positions.
