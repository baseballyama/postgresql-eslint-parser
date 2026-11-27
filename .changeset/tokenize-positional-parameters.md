---
"postgresql-eslint-parser": minor
---

Positional parameters (`$1`, `$12`, ...) are now one `Parameter` token covering the `$` and the digits, the same range as their `ParamRef`. Before, the `$` had no token and the digits were a `Numeric`, so `sourceCode.getTokenByRangeStart(node.range[0])` found nothing for a `ParamRef`, or for an expression starting with one. As libpg-query reads it, the parameter ends at its last digit: `$1a` is `$1` followed by the identifier `a`.
