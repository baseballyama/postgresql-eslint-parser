---
"postgresql-eslint-parser": minor
---

Add `SQLParseError.errorPosition` (`{ index, line, column }`) with the position PostgreSQL reports for a syntax error, converted to the same units as `range` / `loc`. The node's own `range` / `loc` still span the whole program.
