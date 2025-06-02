import type { Program } from "../../../src/ast.ts";

export default {
  type: "Program",
  range: [0, 20],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 1,
      column: 20,
    },
  },
  body: [
    {
      type: "SelectStmt",
      targetList: [
        {
          type: "ResTarget",
          val: {
            type: "ColumnRef",
            fields: [
              {
                type: "A_Star",
                range: [0, 0],
                loc: {
                  start: {
                    line: 1,
                    column: 0,
                  },
                  end: {
                    line: 1,
                    column: 0,
                  },
                },
              },
            ],
            range: [7, 8],
            loc: {
              start: {
                line: 1,
                column: 7,
              },
              end: {
                line: 1,
                column: 8,
              },
            },
          },
          range: [7, 8],
          loc: {
            start: {
              line: 1,
              column: 7,
            },
            end: {
              line: 1,
              column: 8,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "users",
          inh: true,
          relpersistence: "p",
          range: [14, 19],
          loc: {
            start: {
              line: 1,
              column: 14,
            },
            end: {
              line: 1,
              column: 19,
            },
          },
        },
      ],
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 19],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 19,
        },
      },
    },
  ],
  tokens: [
    {
      type: "Keyword",
      value: "SELECT",
      range: [0, 6],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 6,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [7, 8],
      loc: {
        start: {
          line: 1,
          column: 7,
        },
        end: {
          line: 1,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [9, 13],
      loc: {
        start: {
          line: 1,
          column: 9,
        },
        end: {
          line: 1,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [14, 19],
      loc: {
        start: {
          line: 1,
          column: 14,
        },
        end: {
          line: 1,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [19, 20],
      loc: {
        start: {
          line: 1,
          column: 19,
        },
        end: {
          line: 1,
          column: 20,
        },
      },
    },
  ],
  comments: [],
} satisfies Program;
