import type { Program } from "../../../src/ast.ts";

export default {
  type: "Program",
  range: [0, 104],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 2,
      column: 50,
    },
  },
  body: [
    {
      type: "SQLParseError",
      range: [0, 104],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 2,
          column: 50,
        },
      },
      error: 'syntax error at or near "AND"',
      raw: "-- This SQL has intentional syntax errors for testing\nSELECT * FROM users WHERE id = AND name = 'test'; ",
    },
  ],
  tokens: [
    {
      type: "LineComment",
      value: "-- This SQL has intentional syntax errors for testing",
      range: [0, 53],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 53,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [54, 60],
      loc: {
        start: {
          line: 2,
          column: 0,
        },
        end: {
          line: 2,
          column: 6,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [61, 62],
      loc: {
        start: {
          line: 2,
          column: 7,
        },
        end: {
          line: 2,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [63, 67],
      loc: {
        start: {
          line: 2,
          column: 9,
        },
        end: {
          line: 2,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [68, 73],
      loc: {
        start: {
          line: 2,
          column: 14,
        },
        end: {
          line: 2,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [74, 79],
      loc: {
        start: {
          line: 2,
          column: 20,
        },
        end: {
          line: 2,
          column: 25,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [80, 82],
      loc: {
        start: {
          line: 2,
          column: 26,
        },
        end: {
          line: 2,
          column: 28,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [83, 84],
      loc: {
        start: {
          line: 2,
          column: 29,
        },
        end: {
          line: 2,
          column: 30,
        },
      },
    },
    {
      type: "Keyword",
      value: "AND",
      range: [85, 88],
      loc: {
        start: {
          line: 2,
          column: 31,
        },
        end: {
          line: 2,
          column: 34,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [89, 93],
      loc: {
        start: {
          line: 2,
          column: 35,
        },
        end: {
          line: 2,
          column: 39,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [94, 95],
      loc: {
        start: {
          line: 2,
          column: 40,
        },
        end: {
          line: 2,
          column: 41,
        },
      },
    },
    {
      type: "String",
      value: "'test'",
      range: [96, 102],
      loc: {
        start: {
          line: 2,
          column: 42,
        },
        end: {
          line: 2,
          column: 48,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [102, 103],
      loc: {
        start: {
          line: 2,
          column: 48,
        },
        end: {
          line: 2,
          column: 49,
        },
      },
    },
  ],
  comments: [],
} satisfies Program;
