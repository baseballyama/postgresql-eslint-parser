import type { Program } from "../../../src/ast.ts";

export default {
  type: "Program",
  range: [0, 2355],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 80,
      column: 3,
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
                type: "String",
                sval: "tu",
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
            range: [587, 589],
            loc: {
              start: {
                line: 22,
                column: 4,
              },
              end: {
                line: 22,
                column: 6,
              },
            },
          },
          range: [587, 589],
          loc: {
            start: {
              line: 22,
              column: 4,
            },
            end: {
              line: 22,
              column: 6,
            },
          },
        },
        {
          type: "ResTarget",
          name: "user_tier",
          val: {
            type: "CaseExpr",
            args: [
              {
                type: "CaseWhen",
                expr: {
                  type: "A_Expr",
                  kind: "AEXPR_OP",
                  name: [
                    {
                      type: "String",
                      sval: "<=",
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
                  lexpr: {
                    type: "ColumnRef",
                    fields: [
                      {
                        type: "String",
                        sval: "spending_rank",
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
                    range: [616, 629],
                    loc: {
                      start: {
                        line: 24,
                        column: 13,
                      },
                      end: {
                        line: 24,
                        column: 26,
                      },
                    },
                  },
                  rexpr: {
                    type: "A_Const",
                    ival: {
                      ival: 10,
                    },
                    range: [633, 635],
                    loc: {
                      start: {
                        line: 24,
                        column: 30,
                      },
                      end: {
                        line: 24,
                        column: 32,
                      },
                    },
                  },
                  range: [630, 632],
                  loc: {
                    start: {
                      line: 24,
                      column: 27,
                    },
                    end: {
                      line: 24,
                      column: 29,
                    },
                  },
                },
                result: {
                  type: "A_Const",
                  sval: {
                    sval: "VIP",
                  },
                  range: [641, 646],
                  loc: {
                    start: {
                      line: 24,
                      column: 38,
                    },
                    end: {
                      line: 24,
                      column: 43,
                    },
                  },
                },
                range: [611, 615],
                loc: {
                  start: {
                    line: 24,
                    column: 8,
                  },
                  end: {
                    line: 24,
                    column: 12,
                  },
                },
              },
              {
                type: "CaseWhen",
                expr: {
                  type: "A_Expr",
                  kind: "AEXPR_OP",
                  name: [
                    {
                      type: "String",
                      sval: ">",
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
                  lexpr: {
                    type: "ColumnRef",
                    fields: [
                      {
                        type: "String",
                        sval: "total_spent",
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
                    range: [660, 671],
                    loc: {
                      start: {
                        line: 25,
                        column: 13,
                      },
                      end: {
                        line: 25,
                        column: 24,
                      },
                    },
                  },
                  rexpr: {
                    type: "ColumnRef",
                    fields: [
                      {
                        type: "String",
                        sval: "median_spent",
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
                    range: [674, 686],
                    loc: {
                      start: {
                        line: 25,
                        column: 27,
                      },
                      end: {
                        line: 25,
                        column: 39,
                      },
                    },
                  },
                  range: [672, 673],
                  loc: {
                    start: {
                      line: 25,
                      column: 25,
                    },
                    end: {
                      line: 25,
                      column: 26,
                    },
                  },
                },
                result: {
                  type: "A_Const",
                  sval: {
                    sval: "Premium",
                  },
                  range: [692, 701],
                  loc: {
                    start: {
                      line: 25,
                      column: 45,
                    },
                    end: {
                      line: 25,
                      column: 54,
                    },
                  },
                },
                range: [655, 659],
                loc: {
                  start: {
                    line: 25,
                    column: 8,
                  },
                  end: {
                    line: 25,
                    column: 12,
                  },
                },
              },
            ],
            defresult: {
              type: "A_Const",
              sval: {
                sval: "Standard",
              },
              range: [715, 725],
              loc: {
                start: {
                  line: 26,
                  column: 13,
                },
                end: {
                  line: 26,
                  column: 23,
                },
              },
            },
            range: [597, 601],
            loc: {
              start: {
                line: 23,
                column: 4,
              },
              end: {
                line: 23,
                column: 8,
              },
            },
          },
          range: [597, 601],
          loc: {
            start: {
              line: 23,
              column: 4,
            },
            end: {
              line: 23,
              column: 8,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "top_users",
          inh: true,
          relpersistence: "p",
          alias: {
            aliasname: "tu",
          },
          range: [752, 761],
          loc: {
            start: {
              line: 28,
              column: 5,
            },
            end: {
              line: 28,
              column: 14,
            },
          },
        },
      ],
      whereClause: {
        type: "A_Expr",
        kind: "AEXPR_OP",
        name: [
          {
            type: "String",
            sval: "<=",
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
        lexpr: {
          type: "ColumnRef",
          fields: [
            {
              type: "String",
              sval: "spending_rank",
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
          range: [771, 784],
          loc: {
            start: {
              line: 29,
              column: 6,
            },
            end: {
              line: 29,
              column: 19,
            },
          },
        },
        rexpr: {
          type: "A_Const",
          ival: {
            ival: 100,
          },
          range: [788, 791],
          loc: {
            start: {
              line: 29,
              column: 23,
            },
            end: {
              line: 29,
              column: 26,
            },
          },
        },
        range: [785, 787],
        loc: {
          start: {
            line: 29,
            column: 20,
          },
          end: {
            line: 29,
            column: 22,
          },
        },
      },
      limitOption: "LIMIT_OPTION_DEFAULT",
      withClause: {
        "0": {
          type: "CommonTableExpr",
          ctename: "user_stats",
          ctematerialized: "CTEMaterializeDefault",
          ctequery: {
            type: "SelectStmt",
            targetList: [
              {
                type: "ResTarget",
                val: {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "u",
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
                    {
                      type: "String",
                      sval: "id",
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
                  range: [65, 66],
                  loc: {
                    start: {
                      line: 4,
                      column: 8,
                    },
                    end: {
                      line: 4,
                      column: 9,
                    },
                  },
                },
                range: [65, 66],
                loc: {
                  start: {
                    line: 4,
                    column: 8,
                  },
                  end: {
                    line: 4,
                    column: 9,
                  },
                },
              },
              {
                type: "ResTarget",
                val: {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "u",
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
                    {
                      type: "String",
                      sval: "full_name",
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
                  range: [79, 80],
                  loc: {
                    start: {
                      line: 5,
                      column: 8,
                    },
                    end: {
                      line: 5,
                      column: 9,
                    },
                  },
                },
                range: [79, 80],
                loc: {
                  start: {
                    line: 5,
                    column: 8,
                  },
                  end: {
                    line: 5,
                    column: 9,
                  },
                },
              },
              {
                type: "ResTarget",
                name: "order_count",
                val: {
                  type: "FuncCall",
                  funcname: [
                    {
                      type: "String",
                      sval: "count",
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
                  args: [
                    {
                      type: "ColumnRef",
                      fields: [
                        {
                          type: "String",
                          sval: "o",
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
                        {
                          type: "String",
                          sval: "id",
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
                      range: [106, 107],
                      loc: {
                        start: {
                          line: 6,
                          column: 14,
                        },
                        end: {
                          line: 6,
                          column: 15,
                        },
                      },
                    },
                  ],
                  funcformat: "COERCE_EXPLICIT_CALL",
                  range: [100, 105],
                  loc: {
                    start: {
                      line: 6,
                      column: 8,
                    },
                    end: {
                      line: 6,
                      column: 13,
                    },
                  },
                },
                range: [100, 105],
                loc: {
                  start: {
                    line: 6,
                    column: 8,
                  },
                  end: {
                    line: 6,
                    column: 13,
                  },
                },
              },
              {
                type: "ResTarget",
                name: "total_spent",
                val: {
                  type: "FuncCall",
                  funcname: [
                    {
                      type: "String",
                      sval: "sum",
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
                  args: [
                    {
                      type: "ColumnRef",
                      fields: [
                        {
                          type: "String",
                          sval: "o",
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
                        {
                          type: "String",
                          sval: "total_amount",
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
                      range: [140, 141],
                      loc: {
                        start: {
                          line: 7,
                          column: 12,
                        },
                        end: {
                          line: 7,
                          column: 13,
                        },
                      },
                    },
                  ],
                  funcformat: "COERCE_EXPLICIT_CALL",
                  range: [136, 139],
                  loc: {
                    start: {
                      line: 7,
                      column: 8,
                    },
                    end: {
                      line: 7,
                      column: 11,
                    },
                  },
                },
                range: [136, 139],
                loc: {
                  start: {
                    line: 7,
                    column: 8,
                  },
                  end: {
                    line: 7,
                    column: 11,
                  },
                },
              },
              {
                type: "ResTarget",
                name: "avg_order_value",
                val: {
                  type: "FuncCall",
                  funcname: [
                    {
                      type: "String",
                      sval: "avg",
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
                  args: [
                    {
                      type: "ColumnRef",
                      fields: [
                        {
                          type: "String",
                          sval: "o",
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
                        {
                          type: "String",
                          sval: "total_amount",
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
                      range: [184, 185],
                      loc: {
                        start: {
                          line: 8,
                          column: 12,
                        },
                        end: {
                          line: 8,
                          column: 13,
                        },
                      },
                    },
                  ],
                  funcformat: "COERCE_EXPLICIT_CALL",
                  range: [180, 183],
                  loc: {
                    start: {
                      line: 8,
                      column: 8,
                    },
                    end: {
                      line: 8,
                      column: 11,
                    },
                  },
                },
                range: [180, 183],
                loc: {
                  start: {
                    line: 8,
                    column: 8,
                  },
                  end: {
                    line: 8,
                    column: 11,
                  },
                },
              },
            ],
            fromClause: [
              {
                type: "JoinExpr",
                jointype: "JOIN_LEFT",
                larg: {
                  type: "RangeVar",
                  relname: "users",
                  inh: true,
                  relpersistence: "p",
                  alias: {
                    aliasname: "u",
                  },
                  range: [228, 233],
                  loc: {
                    start: {
                      line: 9,
                      column: 9,
                    },
                    end: {
                      line: 9,
                      column: 14,
                    },
                  },
                },
                rarg: {
                  type: "RangeVar",
                  relname: "orders",
                  inh: true,
                  relpersistence: "p",
                  alias: {
                    aliasname: "o",
                  },
                  range: [250, 256],
                  loc: {
                    start: {
                      line: 10,
                      column: 14,
                    },
                    end: {
                      line: 10,
                      column: 20,
                    },
                  },
                },
                quals: {
                  type: "A_Expr",
                  kind: "AEXPR_OP",
                  name: [
                    {
                      type: "String",
                      sval: "=",
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
                  lexpr: {
                    type: "ColumnRef",
                    fields: [
                      {
                        type: "String",
                        sval: "u",
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
                      {
                        type: "String",
                        sval: "id",
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
                    range: [262, 263],
                    loc: {
                      start: {
                        line: 10,
                        column: 26,
                      },
                      end: {
                        line: 10,
                        column: 27,
                      },
                    },
                  },
                  rexpr: {
                    type: "ColumnRef",
                    fields: [
                      {
                        type: "String",
                        sval: "o",
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
                      {
                        type: "String",
                        sval: "user_id",
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
                    range: [269, 270],
                    loc: {
                      start: {
                        line: 10,
                        column: 33,
                      },
                      end: {
                        line: 10,
                        column: 34,
                      },
                    },
                  },
                  range: [267, 268],
                  loc: {
                    start: {
                      line: 10,
                      column: 31,
                    },
                    end: {
                      line: 10,
                      column: 32,
                    },
                  },
                },
                range: [0, 270],
                loc: {
                  start: {
                    line: 1,
                    column: 0,
                  },
                  end: {
                    line: 10,
                    column: 34,
                  },
                },
              },
            ],
            whereClause: {
              type: "A_Expr",
              kind: "AEXPR_OP",
              name: [
                {
                  type: "String",
                  sval: "=",
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
              lexpr: {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "u",
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
                  {
                    type: "String",
                    sval: "status",
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
                range: [289, 290],
                loc: {
                  start: {
                    line: 11,
                    column: 10,
                  },
                  end: {
                    line: 11,
                    column: 11,
                  },
                },
              },
              rexpr: {
                type: "A_Const",
                sval: {
                  sval: "active",
                },
                range: [300, 308],
                loc: {
                  start: {
                    line: 11,
                    column: 21,
                  },
                  end: {
                    line: 11,
                    column: 29,
                  },
                },
              },
              range: [298, 299],
              loc: {
                start: {
                  line: 11,
                  column: 19,
                },
                end: {
                  line: 11,
                  column: 20,
                },
              },
            },
            groupClause: [
              {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "u",
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
                  {
                    type: "String",
                    sval: "id",
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
                range: [322, 323],
                loc: {
                  start: {
                    line: 12,
                    column: 13,
                  },
                  end: {
                    line: 12,
                    column: 14,
                  },
                },
              },
              {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "u",
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
                  {
                    type: "String",
                    sval: "full_name",
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
                range: [328, 329],
                loc: {
                  start: {
                    line: 12,
                    column: 19,
                  },
                  end: {
                    line: 12,
                    column: 20,
                  },
                },
              },
            ],
            limitOption: "LIMIT_OPTION_DEFAULT",
            op: "SETOP_NONE",
            range: [0, 329],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 12,
                column: 20,
              },
            },
          },
          range: [29, 39],
          loc: {
            start: {
              line: 2,
              column: 5,
            },
            end: {
              line: 2,
              column: 15,
            },
          },
        },
        "1": {
          type: "CommonTableExpr",
          ctename: "top_users",
          ctematerialized: "CTEMaterializeDefault",
          ctequery: {
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
                  range: [369, 370],
                  loc: {
                    start: {
                      line: 15,
                      column: 11,
                    },
                    end: {
                      line: 15,
                      column: 12,
                    },
                  },
                },
                range: [369, 370],
                loc: {
                  start: {
                    line: 15,
                    column: 11,
                  },
                  end: {
                    line: 15,
                    column: 12,
                  },
                },
              },
              {
                type: "ResTarget",
                name: "spending_rank",
                val: {
                  type: "FuncCall",
                  funcname: [
                    {
                      type: "String",
                      sval: "rank",
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
                  over: {
                    "0": {
                      type: "SortBy",
                      node: {
                        type: "ColumnRef",
                        fields: [
                          {
                            type: "String",
                            sval: "total_spent",
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
                        range: [402, 413],
                        loc: {
                          start: {
                            line: 16,
                            column: 30,
                          },
                          end: {
                            line: 16,
                            column: 41,
                          },
                        },
                      },
                      sortby_dir: "SORTBY_DESC",
                      sortby_nulls: "SORTBY_NULLS_DEFAULT",
                      range: [-1, -1],
                      loc: {
                        start: {
                          line: 1,
                          column: -1,
                        },
                        end: {
                          line: 1,
                          column: -1,
                        },
                      },
                    },
                    frameOptions: 1058,
                    type: "orderClause",
                    range: [392, 393],
                    loc: {
                      start: {
                        line: 16,
                        column: 20,
                      },
                      end: {
                        line: 16,
                        column: 21,
                      },
                    },
                  },
                  funcformat: "COERCE_EXPLICIT_CALL",
                  range: [380, 384],
                  loc: {
                    start: {
                      line: 16,
                      column: 8,
                    },
                    end: {
                      line: 16,
                      column: 12,
                    },
                  },
                },
                range: [380, 384],
                loc: {
                  start: {
                    line: 16,
                    column: 8,
                  },
                  end: {
                    line: 16,
                    column: 12,
                  },
                },
              },
              {
                type: "ResTarget",
                name: "median_spent",
                val: {
                  type: "FuncCall",
                  funcname: [
                    {
                      type: "String",
                      sval: "percentile_cont",
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
                  args: [
                    {
                      type: "A_Const",
                      fval: {
                        fval: "0.5",
                      },
                      range: [462, 465],
                      loc: {
                        start: {
                          line: 17,
                          column: 24,
                        },
                        end: {
                          line: 17,
                          column: 27,
                        },
                      },
                    },
                  ],
                  agg_order: [
                    {
                      type: "SortBy",
                      node: {
                        type: "ColumnRef",
                        fields: [
                          {
                            type: "String",
                            sval: "total_spent",
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
                        range: [490, 501],
                        loc: {
                          start: {
                            line: 17,
                            column: 52,
                          },
                          end: {
                            line: 17,
                            column: 63,
                          },
                        },
                      },
                      sortby_dir: "SORTBY_DEFAULT",
                      sortby_nulls: "SORTBY_NULLS_DEFAULT",
                      range: [-1, -1],
                      loc: {
                        start: {
                          line: 1,
                          column: -1,
                        },
                        end: {
                          line: 1,
                          column: -1,
                        },
                      },
                    },
                  ],
                  over: {
                    frameOptions: 1058,
                    range: [508, 509],
                    loc: {
                      start: {
                        line: 17,
                        column: 70,
                      },
                      end: {
                        line: 17,
                        column: 71,
                      },
                    },
                  },
                  agg_within_group: true,
                  funcformat: "COERCE_EXPLICIT_CALL",
                  range: [446, 461],
                  loc: {
                    start: {
                      line: 17,
                      column: 8,
                    },
                    end: {
                      line: 17,
                      column: 23,
                    },
                  },
                },
                range: [446, 461],
                loc: {
                  start: {
                    line: 17,
                    column: 8,
                  },
                  end: {
                    line: 17,
                    column: 23,
                  },
                },
              },
            ],
            fromClause: [
              {
                type: "RangeVar",
                relname: "user_stats",
                inh: true,
                relpersistence: "p",
                range: [536, 546],
                loc: {
                  start: {
                    line: 18,
                    column: 9,
                  },
                  end: {
                    line: 18,
                    column: 19,
                  },
                },
              },
            ],
            whereClause: {
              type: "A_Expr",
              kind: "AEXPR_OP",
              name: [
                {
                  type: "String",
                  sval: ">",
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
              lexpr: {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "order_count",
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
                range: [557, 568],
                loc: {
                  start: {
                    line: 19,
                    column: 10,
                  },
                  end: {
                    line: 19,
                    column: 21,
                  },
                },
              },
              rexpr: {
                type: "A_Const",
                ival: {},
                range: [571, 572],
                loc: {
                  start: {
                    line: 19,
                    column: 24,
                  },
                  end: {
                    line: 19,
                    column: 25,
                  },
                },
              },
              range: [569, 570],
              loc: {
                start: {
                  line: 19,
                  column: 22,
                },
                end: {
                  line: 19,
                  column: 23,
                },
              },
            },
            limitOption: "LIMIT_OPTION_DEFAULT",
            op: "SETOP_NONE",
            range: [-1, 572],
            loc: {
              start: {
                line: 1,
                column: -1,
              },
              end: {
                line: 19,
                column: 25,
              },
            },
          },
          range: [343, 352],
          loc: {
            start: {
              line: 14,
              column: 0,
            },
            end: {
              line: 14,
              column: 9,
            },
          },
        },
        type: "ctes",
        range: [24, 28],
        loc: {
          start: {
            line: 2,
            column: 0,
          },
          end: {
            line: 2,
            column: 4,
          },
        },
      },
      op: "SETOP_NONE",
      range: [-1, 791],
      loc: {
        start: {
          line: 1,
          column: -1,
        },
        end: {
          line: 29,
          column: 26,
        },
      },
    },
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
            range: [1208, 1209],
            loc: {
              start: {
                line: 46,
                column: 7,
              },
              end: {
                line: 46,
                column: 8,
              },
            },
          },
          range: [1208, 1209],
          loc: {
            start: {
              line: 46,
              column: 7,
            },
            end: {
              line: 46,
              column: 8,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "category_hierarchy",
          inh: true,
          relpersistence: "p",
          range: [1215, 1233],
          loc: {
            start: {
              line: 46,
              column: 14,
            },
            end: {
              line: 46,
              column: 32,
            },
          },
        },
      ],
      sortClause: [
        {
          type: "SortBy",
          node: {
            type: "ColumnRef",
            fields: [
              {
                type: "String",
                sval: "path",
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
            range: [1243, 1247],
            loc: {
              start: {
                line: 46,
                column: 42,
              },
              end: {
                line: 46,
                column: 46,
              },
            },
          },
          sortby_dir: "SORTBY_DEFAULT",
          sortby_nulls: "SORTBY_NULLS_DEFAULT",
          range: [-1, -1],
          loc: {
            start: {
              line: 1,
              column: -1,
            },
            end: {
              line: 1,
              column: -1,
            },
          },
        },
      ],
      limitOption: "LIMIT_OPTION_DEFAULT",
      withClause: {
        "0": {
          type: "CommonTableExpr",
          ctename: "category_hierarchy",
          ctematerialized: "CTEMaterializeDefault",
          ctequery: {
            type: "SelectStmt",
            limitOption: "LIMIT_OPTION_DEFAULT",
            op: "SETOP_UNION",
            all: true,
            larg: {
              "0": {
                type: "ResTarget",
                val: {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "id",
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
                  range: [878, 880],
                  loc: {
                    start: {
                      line: 34,
                      column: 11,
                    },
                    end: {
                      line: 34,
                      column: 13,
                    },
                  },
                },
                range: [878, 880],
                loc: {
                  start: {
                    line: 34,
                    column: 11,
                  },
                  end: {
                    line: 34,
                    column: 13,
                  },
                },
              },
              "1": {
                type: "ResTarget",
                val: {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "name",
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
                  range: [882, 886],
                  loc: {
                    start: {
                      line: 34,
                      column: 15,
                    },
                    end: {
                      line: 34,
                      column: 19,
                    },
                  },
                },
                range: [882, 886],
                loc: {
                  start: {
                    line: 34,
                    column: 15,
                  },
                  end: {
                    line: 34,
                    column: 19,
                  },
                },
              },
              "2": {
                type: "ResTarget",
                val: {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "parent_id",
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
                  range: [888, 897],
                  loc: {
                    start: {
                      line: 34,
                      column: 21,
                    },
                    end: {
                      line: 34,
                      column: 30,
                    },
                  },
                },
                range: [888, 897],
                loc: {
                  start: {
                    line: 34,
                    column: 21,
                  },
                  end: {
                    line: 34,
                    column: 30,
                  },
                },
              },
              "3": {
                type: "ResTarget",
                name: "level",
                val: {
                  type: "A_Const",
                  ival: {},
                  range: [899, 900],
                  loc: {
                    start: {
                      line: 34,
                      column: 32,
                    },
                    end: {
                      line: 34,
                      column: 33,
                    },
                  },
                },
                range: [899, 900],
                loc: {
                  start: {
                    line: 34,
                    column: 32,
                  },
                  end: {
                    line: 34,
                    column: 33,
                  },
                },
              },
              "4": {
                type: "ResTarget",
                name: "path",
                val: {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "name",
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
                  range: [911, 915],
                  loc: {
                    start: {
                      line: 34,
                      column: 44,
                    },
                    end: {
                      line: 34,
                      column: 48,
                    },
                  },
                },
                range: [911, 915],
                loc: {
                  start: {
                    line: 34,
                    column: 44,
                  },
                  end: {
                    line: 34,
                    column: 48,
                  },
                },
              },
              fromClause: [
                {
                  type: "RangeVar",
                  relname: "categories",
                  inh: true,
                  relpersistence: "p",
                  range: [933, 943],
                  loc: {
                    start: {
                      line: 35,
                      column: 9,
                    },
                    end: {
                      line: 35,
                      column: 19,
                    },
                  },
                },
              ],
              whereClause: {
                type: "NullTest",
                arg: {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "parent_id",
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
                  range: [954, 963],
                  loc: {
                    start: {
                      line: 36,
                      column: 10,
                    },
                    end: {
                      line: 36,
                      column: 19,
                    },
                  },
                },
                nulltesttype: "IS_NULL",
                range: [964, 966],
                loc: {
                  start: {
                    line: 36,
                    column: 20,
                  },
                  end: {
                    line: 36,
                    column: 22,
                  },
                },
              },
              limitOption: "LIMIT_OPTION_DEFAULT",
              op: "SETOP_NONE",
              type: "targetList",
              range: [0, 966],
              loc: {
                start: {
                  line: 1,
                  column: 0,
                },
                end: {
                  line: 36,
                  column: 22,
                },
              },
            },
            rarg: {
              "0": {
                type: "ResTarget",
                val: {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "c",
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
                    {
                      type: "String",
                      sval: "id",
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
                  range: [1029, 1030],
                  loc: {
                    start: {
                      line: 41,
                      column: 11,
                    },
                    end: {
                      line: 41,
                      column: 12,
                    },
                  },
                },
                range: [1029, 1030],
                loc: {
                  start: {
                    line: 41,
                    column: 11,
                  },
                  end: {
                    line: 41,
                    column: 12,
                  },
                },
              },
              "1": {
                type: "ResTarget",
                val: {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "c",
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
                    {
                      type: "String",
                      sval: "name",
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
                  range: [1035, 1036],
                  loc: {
                    start: {
                      line: 41,
                      column: 17,
                    },
                    end: {
                      line: 41,
                      column: 18,
                    },
                  },
                },
                range: [1035, 1036],
                loc: {
                  start: {
                    line: 41,
                    column: 17,
                  },
                  end: {
                    line: 41,
                    column: 18,
                  },
                },
              },
              "2": {
                type: "ResTarget",
                val: {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "c",
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
                    {
                      type: "String",
                      sval: "parent_id",
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
                  range: [1043, 1044],
                  loc: {
                    start: {
                      line: 41,
                      column: 25,
                    },
                    end: {
                      line: 41,
                      column: 26,
                    },
                  },
                },
                range: [1043, 1044],
                loc: {
                  start: {
                    line: 41,
                    column: 25,
                  },
                  end: {
                    line: 41,
                    column: 26,
                  },
                },
              },
              "3": {
                type: "ResTarget",
                val: {
                  type: "A_Expr",
                  kind: "AEXPR_OP",
                  name: [
                    {
                      type: "String",
                      sval: "+",
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
                  lexpr: {
                    type: "ColumnRef",
                    fields: [
                      {
                        type: "String",
                        sval: "ch",
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
                      {
                        type: "String",
                        sval: "level",
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
                    range: [1056, 1058],
                    loc: {
                      start: {
                        line: 41,
                        column: 38,
                      },
                      end: {
                        line: 41,
                        column: 40,
                      },
                    },
                  },
                  rexpr: {
                    type: "A_Const",
                    ival: {
                      ival: 1,
                    },
                    range: [1067, 1068],
                    loc: {
                      start: {
                        line: 41,
                        column: 49,
                      },
                      end: {
                        line: 41,
                        column: 50,
                      },
                    },
                  },
                  range: [1065, 1066],
                  loc: {
                    start: {
                      line: 41,
                      column: 47,
                    },
                    end: {
                      line: 41,
                      column: 48,
                    },
                  },
                },
                range: [1056, 1058],
                loc: {
                  start: {
                    line: 41,
                    column: 38,
                  },
                  end: {
                    line: 41,
                    column: 40,
                  },
                },
              },
              "4": {
                type: "ResTarget",
                name: "path",
                val: {
                  type: "A_Expr",
                  kind: "AEXPR_OP",
                  name: [
                    {
                      type: "String",
                      sval: "||",
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
                  lexpr: {
                    type: "A_Expr",
                    kind: "AEXPR_OP",
                    name: [
                      {
                        type: "String",
                        sval: "||",
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
                    lexpr: {
                      type: "ColumnRef",
                      fields: [
                        {
                          type: "String",
                          sval: "ch",
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
                        {
                          type: "String",
                          sval: "path",
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
                      range: [1082, 1084],
                      loc: {
                        start: {
                          line: 42,
                          column: 11,
                        },
                        end: {
                          line: 42,
                          column: 13,
                        },
                      },
                    },
                    rexpr: {
                      type: "A_Const",
                      sval: {
                        sval: " > ",
                      },
                      range: [1093, 1098],
                      loc: {
                        start: {
                          line: 42,
                          column: 22,
                        },
                        end: {
                          line: 42,
                          column: 27,
                        },
                      },
                    },
                    range: [1090, 1092],
                    loc: {
                      start: {
                        line: 42,
                        column: 19,
                      },
                      end: {
                        line: 42,
                        column: 21,
                      },
                    },
                  },
                  rexpr: {
                    type: "ColumnRef",
                    fields: [
                      {
                        type: "String",
                        sval: "c",
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
                      {
                        type: "String",
                        sval: "name",
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
                    range: [1102, 1103],
                    loc: {
                      start: {
                        line: 42,
                        column: 31,
                      },
                      end: {
                        line: 42,
                        column: 32,
                      },
                    },
                  },
                  range: [1099, 1101],
                  loc: {
                    start: {
                      line: 42,
                      column: 28,
                    },
                    end: {
                      line: 42,
                      column: 30,
                    },
                  },
                },
                range: [1082, 1084],
                loc: {
                  start: {
                    line: 42,
                    column: 11,
                  },
                  end: {
                    line: 42,
                    column: 13,
                  },
                },
              },
              fromClause: [
                {
                  type: "JoinExpr",
                  jointype: "JOIN_INNER",
                  larg: {
                    type: "RangeVar",
                    relname: "categories",
                    inh: true,
                    relpersistence: "p",
                    alias: {
                      aliasname: "c",
                    },
                    range: [1126, 1136],
                    loc: {
                      start: {
                        line: 43,
                        column: 9,
                      },
                      end: {
                        line: 43,
                        column: 19,
                      },
                    },
                  },
                  rarg: {
                    type: "RangeVar",
                    relname: "category_hierarchy",
                    inh: true,
                    relpersistence: "p",
                    alias: {
                      aliasname: "ch",
                    },
                    range: [1154, 1172],
                    loc: {
                      start: {
                        line: 44,
                        column: 15,
                      },
                      end: {
                        line: 44,
                        column: 33,
                      },
                    },
                  },
                  quals: {
                    type: "A_Expr",
                    kind: "AEXPR_OP",
                    name: [
                      {
                        type: "String",
                        sval: "=",
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
                    lexpr: {
                      type: "ColumnRef",
                      fields: [
                        {
                          type: "String",
                          sval: "c",
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
                        {
                          type: "String",
                          sval: "parent_id",
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
                      range: [1179, 1180],
                      loc: {
                        start: {
                          line: 44,
                          column: 40,
                        },
                        end: {
                          line: 44,
                          column: 41,
                        },
                      },
                    },
                    rexpr: {
                      type: "ColumnRef",
                      fields: [
                        {
                          type: "String",
                          sval: "ch",
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
                        {
                          type: "String",
                          sval: "id",
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
                      range: [1193, 1195],
                      loc: {
                        start: {
                          line: 44,
                          column: 54,
                        },
                        end: {
                          line: 44,
                          column: 56,
                        },
                      },
                    },
                    range: [1191, 1192],
                    loc: {
                      start: {
                        line: 44,
                        column: 52,
                      },
                      end: {
                        line: 44,
                        column: 53,
                      },
                    },
                  },
                  range: [0, 1195],
                  loc: {
                    start: {
                      line: 1,
                      column: 0,
                    },
                    end: {
                      line: 44,
                      column: 56,
                    },
                  },
                },
              ],
              limitOption: "LIMIT_OPTION_DEFAULT",
              op: "SETOP_NONE",
              type: "targetList",
              range: [0, 1195],
              loc: {
                start: {
                  line: 1,
                  column: 0,
                },
                end: {
                  line: 44,
                  column: 56,
                },
              },
            },
            range: [0, 1195],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 44,
                column: 56,
              },
            },
          },
          range: [826, 844],
          loc: {
            start: {
              line: 32,
              column: 15,
            },
            end: {
              line: 32,
              column: 33,
            },
          },
        },
        recursive: true,
        type: "ctes",
        range: [811, 815],
        loc: {
          start: {
            line: 32,
            column: 0,
          },
          end: {
            line: 32,
            column: 4,
          },
        },
      },
      op: "SETOP_NONE",
      range: [-1, 1247],
      loc: {
        start: {
          line: 1,
          column: -1,
        },
        end: {
          line: 46,
          column: 46,
        },
      },
    },
    {
      type: "SelectStmt",
      targetList: [
        {
          type: "ResTarget",
          val: {
            type: "ColumnRef",
            fields: [
              {
                type: "String",
                sval: "user_id",
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
            range: [1296, 1303],
            loc: {
              start: {
                line: 50,
                column: 4,
              },
              end: {
                line: 50,
                column: 11,
              },
            },
          },
          range: [1296, 1303],
          loc: {
            start: {
              line: 50,
              column: 4,
            },
            end: {
              line: 50,
              column: 11,
            },
          },
        },
        {
          type: "ResTarget",
          val: {
            type: "ColumnRef",
            fields: [
              {
                type: "String",
                sval: "order_date",
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
            range: [1309, 1319],
            loc: {
              start: {
                line: 51,
                column: 4,
              },
              end: {
                line: 51,
                column: 14,
              },
            },
          },
          range: [1309, 1319],
          loc: {
            start: {
              line: 51,
              column: 4,
            },
            end: {
              line: 51,
              column: 14,
            },
          },
        },
        {
          type: "ResTarget",
          val: {
            type: "ColumnRef",
            fields: [
              {
                type: "String",
                sval: "total_amount",
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
            range: [1325, 1337],
            loc: {
              start: {
                line: 52,
                column: 4,
              },
              end: {
                line: 52,
                column: 16,
              },
            },
          },
          range: [1325, 1337],
          loc: {
            start: {
              line: 52,
              column: 4,
            },
            end: {
              line: 52,
              column: 16,
            },
          },
        },
        {
          type: "ResTarget",
          name: "previous_order",
          val: {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "lag",
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
            args: [
              {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "total_amount",
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
                range: [1347, 1359],
                loc: {
                  start: {
                    line: 53,
                    column: 8,
                  },
                  end: {
                    line: 53,
                    column: 20,
                  },
                },
              },
            ],
            over: {
              "0": {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "user_id",
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
                range: [1380, 1387],
                loc: {
                  start: {
                    line: 53,
                    column: 41,
                  },
                  end: {
                    line: 53,
                    column: 48,
                  },
                },
              },
              orderClause: [
                {
                  type: "SortBy",
                  node: {
                    type: "ColumnRef",
                    fields: [
                      {
                        type: "String",
                        sval: "order_date",
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
                    range: [1397, 1407],
                    loc: {
                      start: {
                        line: 53,
                        column: 58,
                      },
                      end: {
                        line: 53,
                        column: 68,
                      },
                    },
                  },
                  sortby_dir: "SORTBY_DEFAULT",
                  sortby_nulls: "SORTBY_NULLS_DEFAULT",
                  range: [-1, -1],
                  loc: {
                    start: {
                      line: 1,
                      column: -1,
                    },
                    end: {
                      line: 1,
                      column: -1,
                    },
                  },
                },
              ],
              frameOptions: 1058,
              type: "partitionClause",
              range: [1366, 1367],
              loc: {
                start: {
                  line: 53,
                  column: 27,
                },
                end: {
                  line: 53,
                  column: 28,
                },
              },
            },
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [1343, 1346],
            loc: {
              start: {
                line: 53,
                column: 4,
              },
              end: {
                line: 53,
                column: 7,
              },
            },
          },
          range: [1343, 1346],
          loc: {
            start: {
              line: 53,
              column: 4,
            },
            end: {
              line: 53,
              column: 7,
            },
          },
        },
        {
          type: "ResTarget",
          name: "next_order",
          val: {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "lead",
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
            args: [
              {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "total_amount",
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
                range: [1437, 1449],
                loc: {
                  start: {
                    line: 54,
                    column: 9,
                  },
                  end: {
                    line: 54,
                    column: 21,
                  },
                },
              },
            ],
            over: {
              "0": {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "user_id",
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
                range: [1470, 1477],
                loc: {
                  start: {
                    line: 54,
                    column: 42,
                  },
                  end: {
                    line: 54,
                    column: 49,
                  },
                },
              },
              orderClause: [
                {
                  type: "SortBy",
                  node: {
                    type: "ColumnRef",
                    fields: [
                      {
                        type: "String",
                        sval: "order_date",
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
                    range: [1487, 1497],
                    loc: {
                      start: {
                        line: 54,
                        column: 59,
                      },
                      end: {
                        line: 54,
                        column: 69,
                      },
                    },
                  },
                  sortby_dir: "SORTBY_DEFAULT",
                  sortby_nulls: "SORTBY_NULLS_DEFAULT",
                  range: [-1, -1],
                  loc: {
                    start: {
                      line: 1,
                      column: -1,
                    },
                    end: {
                      line: 1,
                      column: -1,
                    },
                  },
                },
              ],
              frameOptions: 1058,
              type: "partitionClause",
              range: [1456, 1457],
              loc: {
                start: {
                  line: 54,
                  column: 28,
                },
                end: {
                  line: 54,
                  column: 29,
                },
              },
            },
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [1432, 1436],
            loc: {
              start: {
                line: 54,
                column: 4,
              },
              end: {
                line: 54,
                column: 8,
              },
            },
          },
          range: [1432, 1436],
          loc: {
            start: {
              line: 54,
              column: 4,
            },
            end: {
              line: 54,
              column: 8,
            },
          },
        },
        {
          type: "ResTarget",
          name: "running_total",
          val: {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "sum",
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
            args: [
              {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "total_amount",
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
                range: [1522, 1534],
                loc: {
                  start: {
                    line: 55,
                    column: 8,
                  },
                  end: {
                    line: 55,
                    column: 20,
                  },
                },
              },
            ],
            over: {
              "0": {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "user_id",
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
                range: [1555, 1562],
                loc: {
                  start: {
                    line: 55,
                    column: 41,
                  },
                  end: {
                    line: 55,
                    column: 48,
                  },
                },
              },
              orderClause: [
                {
                  type: "SortBy",
                  node: {
                    type: "ColumnRef",
                    fields: [
                      {
                        type: "String",
                        sval: "order_date",
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
                    range: [1572, 1582],
                    loc: {
                      start: {
                        line: 55,
                        column: 58,
                      },
                      end: {
                        line: 55,
                        column: 68,
                      },
                    },
                  },
                  sortby_dir: "SORTBY_DEFAULT",
                  sortby_nulls: "SORTBY_NULLS_DEFAULT",
                  range: [-1, -1],
                  loc: {
                    start: {
                      line: 1,
                      column: -1,
                    },
                    end: {
                      line: 1,
                      column: -1,
                    },
                  },
                },
              ],
              frameOptions: 1077,
              type: "partitionClause",
              range: [1541, 1542],
              loc: {
                start: {
                  line: 55,
                  column: 27,
                },
                end: {
                  line: 55,
                  column: 28,
                },
              },
            },
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [1518, 1521],
            loc: {
              start: {
                line: 55,
                column: 4,
              },
              end: {
                line: 55,
                column: 7,
              },
            },
          },
          range: [1518, 1521],
          loc: {
            start: {
              line: 55,
              column: 4,
            },
            end: {
              line: 55,
              column: 7,
            },
          },
        },
        {
          type: "ResTarget",
          name: "moving_avg",
          val: {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "avg",
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
            args: [
              {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "total_amount",
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
                range: [1687, 1699],
                loc: {
                  start: {
                    line: 57,
                    column: 8,
                  },
                  end: {
                    line: 57,
                    column: 20,
                  },
                },
              },
            ],
            over: {
              "0": {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "user_id",
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
                range: [1720, 1727],
                loc: {
                  start: {
                    line: 57,
                    column: 41,
                  },
                  end: {
                    line: 57,
                    column: 48,
                  },
                },
              },
              orderClause: [
                {
                  type: "SortBy",
                  node: {
                    type: "ColumnRef",
                    fields: [
                      {
                        type: "String",
                        sval: "order_date",
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
                    range: [1737, 1747],
                    loc: {
                      start: {
                        line: 57,
                        column: 58,
                      },
                      end: {
                        line: 57,
                        column: 68,
                      },
                    },
                  },
                  sortby_dir: "SORTBY_DEFAULT",
                  sortby_nulls: "SORTBY_NULLS_DEFAULT",
                  range: [-1, -1],
                  loc: {
                    start: {
                      line: 1,
                      column: -1,
                    },
                    end: {
                      line: 1,
                      column: -1,
                    },
                  },
                },
              ],
              frameOptions: 18453,
              startOffset: {
                type: "A_Const",
                ival: {
                  ival: 2,
                },
                range: [1789, 1790],
                loc: {
                  start: {
                    line: 58,
                    column: 40,
                  },
                  end: {
                    line: 58,
                    column: 41,
                  },
                },
              },
              endOffset: {
                type: "A_Const",
                ival: {
                  ival: 2,
                },
                range: [1805, 1806],
                loc: {
                  start: {
                    line: 58,
                    column: 56,
                  },
                  end: {
                    line: 58,
                    column: 57,
                  },
                },
              },
              type: "partitionClause",
              range: [1706, 1707],
              loc: {
                start: {
                  line: 57,
                  column: 27,
                },
                end: {
                  line: 57,
                  column: 28,
                },
              },
            },
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [1683, 1686],
            loc: {
              start: {
                line: 57,
                column: 4,
              },
              end: {
                line: 57,
                column: 7,
              },
            },
          },
          range: [1683, 1686],
          loc: {
            start: {
              line: 57,
              column: 4,
            },
            end: {
              line: 57,
              column: 7,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "orders",
          inh: true,
          relpersistence: "p",
          range: [1837, 1843],
          loc: {
            start: {
              line: 59,
              column: 5,
            },
            end: {
              line: 59,
              column: 11,
            },
          },
        },
      ],
      whereClause: {
        type: "A_Expr",
        kind: "AEXPR_OP",
        name: [
          {
            type: "String",
            sval: ">=",
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
        lexpr: {
          type: "ColumnRef",
          fields: [
            {
              type: "String",
              sval: "order_date",
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
          range: [1850, 1860],
          loc: {
            start: {
              line: 60,
              column: 6,
            },
            end: {
              line: 60,
              column: 16,
            },
          },
        },
        rexpr: {
          type: "A_Expr",
          kind: "AEXPR_OP",
          name: [
            {
              type: "String",
              sval: "-",
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
          lexpr: {
            type: "SQLValueFunction",
            op: "SVFOP_CURRENT_DATE",
            typmod: -1,
            range: [1864, 1876],
            loc: {
              start: {
                line: 60,
                column: 20,
              },
              end: {
                line: 60,
                column: 32,
              },
            },
          },
          rexpr: {
            type: "TypeCast",
            arg: {
              type: "A_Const",
              sval: {
                sval: "1 year",
              },
              range: [1888, 1896],
              loc: {
                start: {
                  line: 60,
                  column: 44,
                },
                end: {
                  line: 60,
                  column: 52,
                },
              },
            },
            typeName: {
              "0": {
                type: "String",
                sval: "pg_catalog",
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
              "1": {
                type: "String",
                sval: "interval",
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
              typemod: -1,
              type: "names",
              range: [1879, 1887],
              loc: {
                start: {
                  line: 60,
                  column: 35,
                },
                end: {
                  line: 60,
                  column: 43,
                },
              },
            },
            range: [-1, -1],
            loc: {
              start: {
                line: 1,
                column: -1,
              },
              end: {
                line: 1,
                column: -1,
              },
            },
          },
          range: [1877, 1878],
          loc: {
            start: {
              line: 60,
              column: 33,
            },
            end: {
              line: 60,
              column: 34,
            },
          },
        },
        range: [1861, 1863],
        loc: {
          start: {
            line: 60,
            column: 17,
          },
          end: {
            line: 60,
            column: 19,
          },
        },
      },
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [-1, 1896],
      loc: {
        start: {
          line: 1,
          column: -1,
        },
        end: {
          line: 60,
          column: 52,
        },
      },
    },
    {
      type: "SelectStmt",
      distinctClause: [{}],
      targetList: [
        {
          type: "ResTarget",
          val: {
            type: "ColumnRef",
            fields: [
              {
                type: "String",
                sval: "u",
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
            range: [1948, 1949],
            loc: {
              start: {
                line: 63,
                column: 16,
              },
              end: {
                line: 63,
                column: 17,
              },
            },
          },
          range: [1948, 1949],
          loc: {
            start: {
              line: 63,
              column: 16,
            },
            end: {
              line: 63,
              column: 17,
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
          alias: {
            aliasname: "u",
          },
          range: [1957, 1962],
          loc: {
            start: {
              line: 64,
              column: 5,
            },
            end: {
              line: 64,
              column: 10,
            },
          },
        },
      ],
      whereClause: {
        type: "BoolExpr",
        boolop: "AND_EXPR",
        args: [
          {
            type: "SubLink",
            subLinkType: "EXISTS_SUBLINK",
            subselect: {
              type: "SelectStmt",
              targetList: [
                {
                  type: "ResTarget",
                  val: {
                    type: "A_Const",
                    ival: {
                      ival: 1,
                    },
                    range: [1991, 1992],
                    loc: {
                      start: {
                        line: 66,
                        column: 11,
                      },
                      end: {
                        line: 66,
                        column: 12,
                      },
                    },
                  },
                  range: [1991, 1992],
                  loc: {
                    start: {
                      line: 66,
                      column: 11,
                    },
                    end: {
                      line: 66,
                      column: 12,
                    },
                  },
                },
              ],
              fromClause: [
                {
                  type: "RangeVar",
                  relname: "orders",
                  inh: true,
                  relpersistence: "p",
                  alias: {
                    aliasname: "o",
                  },
                  range: [1998, 2004],
                  loc: {
                    start: {
                      line: 66,
                      column: 18,
                    },
                    end: {
                      line: 66,
                      column: 24,
                    },
                  },
                },
              ],
              whereClause: {
                type: "BoolExpr",
                boolop: "AND_EXPR",
                args: [
                  {
                    type: "A_Expr",
                    kind: "AEXPR_OP",
                    name: [
                      {
                        type: "String",
                        sval: "=",
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
                    lexpr: {
                      type: "ColumnRef",
                      fields: [
                        {
                          type: "String",
                          sval: "o",
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
                        {
                          type: "String",
                          sval: "user_id",
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
                      range: [2017, 2018],
                      loc: {
                        start: {
                          line: 67,
                          column: 10,
                        },
                        end: {
                          line: 67,
                          column: 11,
                        },
                      },
                    },
                    rexpr: {
                      type: "ColumnRef",
                      fields: [
                        {
                          type: "String",
                          sval: "u",
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
                        {
                          type: "String",
                          sval: "id",
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
                      range: [2029, 2030],
                      loc: {
                        start: {
                          line: 67,
                          column: 22,
                        },
                        end: {
                          line: 67,
                          column: 23,
                        },
                      },
                    },
                    range: [2027, 2028],
                    loc: {
                      start: {
                        line: 67,
                        column: 20,
                      },
                      end: {
                        line: 67,
                        column: 21,
                      },
                    },
                  },
                  {
                    type: "A_Expr",
                    kind: "AEXPR_OP",
                    name: [
                      {
                        type: "String",
                        sval: ">=",
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
                    lexpr: {
                      type: "ColumnRef",
                      fields: [
                        {
                          type: "String",
                          sval: "o",
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
                        {
                          type: "String",
                          sval: "order_date",
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
                      range: [2042, 2043],
                      loc: {
                        start: {
                          line: 68,
                          column: 8,
                        },
                        end: {
                          line: 68,
                          column: 9,
                        },
                      },
                    },
                    rexpr: {
                      type: "A_Expr",
                      kind: "AEXPR_OP",
                      name: [
                        {
                          type: "String",
                          sval: "-",
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
                      lexpr: {
                        type: "SQLValueFunction",
                        op: "SVFOP_CURRENT_DATE",
                        typmod: -1,
                        range: [2058, 2070],
                        loc: {
                          start: {
                            line: 68,
                            column: 24,
                          },
                          end: {
                            line: 68,
                            column: 36,
                          },
                        },
                      },
                      rexpr: {
                        type: "TypeCast",
                        arg: {
                          type: "A_Const",
                          sval: {
                            sval: "30 days",
                          },
                          range: [2082, 2091],
                          loc: {
                            start: {
                              line: 68,
                              column: 48,
                            },
                            end: {
                              line: 68,
                              column: 57,
                            },
                          },
                        },
                        typeName: {
                          "0": {
                            type: "String",
                            sval: "pg_catalog",
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
                          "1": {
                            type: "String",
                            sval: "interval",
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
                          typemod: -1,
                          type: "names",
                          range: [2073, 2081],
                          loc: {
                            start: {
                              line: 68,
                              column: 39,
                            },
                            end: {
                              line: 68,
                              column: 47,
                            },
                          },
                        },
                        range: [-1, -1],
                        loc: {
                          start: {
                            line: 1,
                            column: -1,
                          },
                          end: {
                            line: 1,
                            column: -1,
                          },
                        },
                      },
                      range: [2071, 2072],
                      loc: {
                        start: {
                          line: 68,
                          column: 37,
                        },
                        end: {
                          line: 68,
                          column: 38,
                        },
                      },
                    },
                    range: [2055, 2057],
                    loc: {
                      start: {
                        line: 68,
                        column: 21,
                      },
                      end: {
                        line: 68,
                        column: 23,
                      },
                    },
                  },
                ],
                range: [2038, 2041],
                loc: {
                  start: {
                    line: 68,
                    column: 4,
                  },
                  end: {
                    line: 68,
                    column: 7,
                  },
                },
              },
              limitOption: "LIMIT_OPTION_DEFAULT",
              op: "SETOP_NONE",
              range: [-1, 2091],
              loc: {
                start: {
                  line: 1,
                  column: -1,
                },
                end: {
                  line: 68,
                  column: 57,
                },
              },
            },
            range: [1971, 1977],
            loc: {
              start: {
                line: 65,
                column: 6,
              },
              end: {
                line: 65,
                column: 12,
              },
            },
          },
          {
            type: "BoolExpr",
            boolop: "NOT_EXPR",
            args: [
              {
                type: "SubLink",
                subLinkType: "EXISTS_SUBLINK",
                subselect: {
                  type: "SelectStmt",
                  targetList: [
                    {
                      type: "ResTarget",
                      val: {
                        type: "A_Const",
                        ival: {
                          ival: 1,
                        },
                        range: [2122, 2123],
                        loc: {
                          start: {
                            line: 71,
                            column: 11,
                          },
                          end: {
                            line: 71,
                            column: 12,
                          },
                        },
                      },
                      range: [2122, 2123],
                      loc: {
                        start: {
                          line: 71,
                          column: 11,
                        },
                        end: {
                          line: 71,
                          column: 12,
                        },
                      },
                    },
                  ],
                  fromClause: [
                    {
                      type: "RangeVar",
                      relname: "user_complaints",
                      inh: true,
                      relpersistence: "p",
                      alias: {
                        aliasname: "uc",
                      },
                      range: [2129, 2144],
                      loc: {
                        start: {
                          line: 71,
                          column: 18,
                        },
                        end: {
                          line: 71,
                          column: 33,
                        },
                      },
                    },
                  ],
                  whereClause: {
                    type: "BoolExpr",
                    boolop: "AND_EXPR",
                    args: [
                      {
                        type: "A_Expr",
                        kind: "AEXPR_OP",
                        name: [
                          {
                            type: "String",
                            sval: "=",
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
                        lexpr: {
                          type: "ColumnRef",
                          fields: [
                            {
                              type: "String",
                              sval: "uc",
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
                            {
                              type: "String",
                              sval: "user_id",
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
                          range: [2158, 2160],
                          loc: {
                            start: {
                              line: 72,
                              column: 10,
                            },
                            end: {
                              line: 72,
                              column: 12,
                            },
                          },
                        },
                        rexpr: {
                          type: "ColumnRef",
                          fields: [
                            {
                              type: "String",
                              sval: "u",
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
                            {
                              type: "String",
                              sval: "id",
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
                          range: [2171, 2172],
                          loc: {
                            start: {
                              line: 72,
                              column: 23,
                            },
                            end: {
                              line: 72,
                              column: 24,
                            },
                          },
                        },
                        range: [2169, 2170],
                        loc: {
                          start: {
                            line: 72,
                            column: 21,
                          },
                          end: {
                            line: 72,
                            column: 22,
                          },
                        },
                      },
                      {
                        type: "A_Expr",
                        kind: "AEXPR_OP",
                        name: [
                          {
                            type: "String",
                            sval: "=",
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
                        lexpr: {
                          type: "ColumnRef",
                          fields: [
                            {
                              type: "String",
                              sval: "uc",
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
                            {
                              type: "String",
                              sval: "status",
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
                          range: [2184, 2186],
                          loc: {
                            start: {
                              line: 73,
                              column: 8,
                            },
                            end: {
                              line: 73,
                              column: 10,
                            },
                          },
                        },
                        rexpr: {
                          type: "A_Const",
                          sval: {
                            sval: "open",
                          },
                          range: [2196, 2202],
                          loc: {
                            start: {
                              line: 73,
                              column: 20,
                            },
                            end: {
                              line: 73,
                              column: 26,
                            },
                          },
                        },
                        range: [2194, 2195],
                        loc: {
                          start: {
                            line: 73,
                            column: 18,
                          },
                          end: {
                            line: 73,
                            column: 19,
                          },
                        },
                      },
                    ],
                    range: [2180, 2183],
                    loc: {
                      start: {
                        line: 73,
                        column: 4,
                      },
                      end: {
                        line: 73,
                        column: 7,
                      },
                    },
                  },
                  limitOption: "LIMIT_OPTION_DEFAULT",
                  op: "SETOP_NONE",
                  range: [0, 2202],
                  loc: {
                    start: {
                      line: 1,
                      column: 0,
                    },
                    end: {
                      line: 73,
                      column: 26,
                    },
                  },
                },
                range: [2102, 2108],
                loc: {
                  start: {
                    line: 70,
                    column: 8,
                  },
                  end: {
                    line: 70,
                    column: 14,
                  },
                },
              },
            ],
            range: [2098, 2101],
            loc: {
              start: {
                line: 70,
                column: 4,
              },
              end: {
                line: 70,
                column: 7,
              },
            },
          },
          {
            type: "SubLink",
            subLinkType: "ANY_SUBLINK",
            testexpr: {
              type: "ColumnRef",
              fields: [
                {
                  type: "String",
                  sval: "u",
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
                {
                  type: "String",
                  sval: "id",
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
              range: [2209, 2210],
              loc: {
                start: {
                  line: 75,
                  column: 4,
                },
                end: {
                  line: 75,
                  column: 5,
                },
              },
            },
            subselect: {
              type: "SelectStmt",
              distinctClause: [{}],
              targetList: [
                {
                  type: "ResTarget",
                  val: {
                    type: "ColumnRef",
                    fields: [
                      {
                        type: "String",
                        sval: "user_id",
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
                    range: [2239, 2246],
                    loc: {
                      start: {
                        line: 76,
                        column: 20,
                      },
                      end: {
                        line: 76,
                        column: 27,
                      },
                    },
                  },
                  range: [2239, 2246],
                  loc: {
                    start: {
                      line: 76,
                      column: 20,
                    },
                    end: {
                      line: 76,
                      column: 27,
                    },
                  },
                },
              ],
              fromClause: [
                {
                  type: "JoinExpr",
                  jointype: "JOIN_INNER",
                  larg: {
                    type: "RangeVar",
                    relname: "order_items",
                    inh: true,
                    relpersistence: "p",
                    alias: {
                      aliasname: "oi",
                    },
                    range: [2256, 2267],
                    loc: {
                      start: {
                        line: 77,
                        column: 9,
                      },
                      end: {
                        line: 77,
                        column: 20,
                      },
                    },
                  },
                  rarg: {
                    type: "RangeVar",
                    relname: "products",
                    inh: true,
                    relpersistence: "p",
                    alias: {
                      aliasname: "p",
                    },
                    range: [2280, 2288],
                    loc: {
                      start: {
                        line: 78,
                        column: 9,
                      },
                      end: {
                        line: 78,
                        column: 17,
                      },
                    },
                  },
                  quals: {
                    type: "A_Expr",
                    kind: "AEXPR_OP",
                    name: [
                      {
                        type: "String",
                        sval: "=",
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
                    lexpr: {
                      type: "ColumnRef",
                      fields: [
                        {
                          type: "String",
                          sval: "oi",
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
                        {
                          type: "String",
                          sval: "product_id",
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
                      range: [2294, 2296],
                      loc: {
                        start: {
                          line: 78,
                          column: 23,
                        },
                        end: {
                          line: 78,
                          column: 25,
                        },
                      },
                    },
                    rexpr: {
                      type: "ColumnRef",
                      fields: [
                        {
                          type: "String",
                          sval: "p",
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
                        {
                          type: "String",
                          sval: "id",
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
                      range: [2310, 2311],
                      loc: {
                        start: {
                          line: 78,
                          column: 39,
                        },
                        end: {
                          line: 78,
                          column: 40,
                        },
                      },
                    },
                    range: [2308, 2309],
                    loc: {
                      start: {
                        line: 78,
                        column: 37,
                      },
                      end: {
                        line: 78,
                        column: 38,
                      },
                    },
                  },
                  range: [0, 2311],
                  loc: {
                    start: {
                      line: 1,
                      column: 0,
                    },
                    end: {
                      line: 78,
                      column: 40,
                    },
                  },
                },
              ],
              whereClause: {
                type: "A_Expr",
                kind: "AEXPR_IN",
                name: [
                  {
                    type: "String",
                    sval: "=",
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
                lexpr: {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "p",
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
                    {
                      type: "String",
                      sval: "category_id",
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
                  range: [2325, 2326],
                  loc: {
                    start: {
                      line: 79,
                      column: 10,
                    },
                    end: {
                      line: 79,
                      column: 11,
                    },
                  },
                },
                rexpr: {
                  type: "List",
                  items: [
                    {
                      type: "A_Const",
                      ival: {
                        ival: 1,
                      },
                      range: [2343, 2344],
                      loc: {
                        start: {
                          line: 79,
                          column: 28,
                        },
                        end: {
                          line: 79,
                          column: 29,
                        },
                      },
                    },
                    {
                      type: "A_Const",
                      ival: {
                        ival: 2,
                      },
                      range: [2346, 2347],
                      loc: {
                        start: {
                          line: 79,
                          column: 31,
                        },
                        end: {
                          line: 79,
                          column: 32,
                        },
                      },
                    },
                    {
                      type: "A_Const",
                      ival: {
                        ival: 3,
                      },
                      range: [2349, 2350],
                      loc: {
                        start: {
                          line: 79,
                          column: 34,
                        },
                        end: {
                          line: 79,
                          column: 35,
                        },
                      },
                    },
                  ],
                  range: [0, 2350],
                  loc: {
                    start: {
                      line: 1,
                      column: 0,
                    },
                    end: {
                      line: 79,
                      column: 35,
                    },
                  },
                },
                range: [2339, 2341],
                loc: {
                  start: {
                    line: 79,
                    column: 24,
                  },
                  end: {
                    line: 79,
                    column: 26,
                  },
                },
              },
              limitOption: "LIMIT_OPTION_DEFAULT",
              op: "SETOP_NONE",
              range: [0, 2350],
              loc: {
                start: {
                  line: 1,
                  column: 0,
                },
                end: {
                  line: 79,
                  column: 35,
                },
              },
            },
            range: [2214, 2216],
            loc: {
              start: {
                line: 75,
                column: 9,
              },
              end: {
                line: 75,
                column: 11,
              },
            },
          },
        ],
        range: [2094, 2097],
        loc: {
          start: {
            line: 70,
            column: 0,
          },
          end: {
            line: 70,
            column: 3,
          },
        },
      },
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [-1, 2350],
      loc: {
        start: {
          line: 1,
          column: -1,
        },
        end: {
          line: 79,
          column: 35,
        },
      },
    },
  ],
  tokens: [
    {
      type: "LineComment",
      value: "-- Complex queries test",
      range: [0, 23],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "WITH",
      range: [24, 28],
      loc: {
        start: {
          line: 2,
          column: 0,
        },
        end: {
          line: 2,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_stats",
      range: [29, 39],
      loc: {
        start: {
          line: 2,
          column: 5,
        },
        end: {
          line: 2,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [40, 42],
      loc: {
        start: {
          line: 2,
          column: 16,
        },
        end: {
          line: 2,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [43, 44],
      loc: {
        start: {
          line: 2,
          column: 19,
        },
        end: {
          line: 2,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [49, 55],
      loc: {
        start: {
          line: 3,
          column: 4,
        },
        end: {
          line: 3,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [65, 66],
      loc: {
        start: {
          line: 4,
          column: 8,
        },
        end: {
          line: 4,
          column: 9,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [66, 67],
      loc: {
        start: {
          line: 4,
          column: 9,
        },
        end: {
          line: 4,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [67, 69],
      loc: {
        start: {
          line: 4,
          column: 10,
        },
        end: {
          line: 4,
          column: 12,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [69, 70],
      loc: {
        start: {
          line: 4,
          column: 12,
        },
        end: {
          line: 4,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [79, 80],
      loc: {
        start: {
          line: 5,
          column: 8,
        },
        end: {
          line: 5,
          column: 9,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [80, 81],
      loc: {
        start: {
          line: 5,
          column: 9,
        },
        end: {
          line: 5,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "full_name",
      range: [81, 90],
      loc: {
        start: {
          line: 5,
          column: 10,
        },
        end: {
          line: 5,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [90, 91],
      loc: {
        start: {
          line: 5,
          column: 19,
        },
        end: {
          line: 5,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "COUNT",
      range: [100, 105],
      loc: {
        start: {
          line: 6,
          column: 8,
        },
        end: {
          line: 6,
          column: 13,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [105, 106],
      loc: {
        start: {
          line: 6,
          column: 13,
        },
        end: {
          line: 6,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [106, 107],
      loc: {
        start: {
          line: 6,
          column: 14,
        },
        end: {
          line: 6,
          column: 15,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [107, 108],
      loc: {
        start: {
          line: 6,
          column: 15,
        },
        end: {
          line: 6,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [108, 110],
      loc: {
        start: {
          line: 6,
          column: 16,
        },
        end: {
          line: 6,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [110, 111],
      loc: {
        start: {
          line: 6,
          column: 18,
        },
        end: {
          line: 6,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [112, 114],
      loc: {
        start: {
          line: 6,
          column: 20,
        },
        end: {
          line: 6,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_count",
      range: [115, 126],
      loc: {
        start: {
          line: 6,
          column: 23,
        },
        end: {
          line: 6,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [126, 127],
      loc: {
        start: {
          line: 6,
          column: 34,
        },
        end: {
          line: 6,
          column: 35,
        },
      },
    },
    {
      type: "Keyword",
      value: "SUM",
      range: [136, 139],
      loc: {
        start: {
          line: 7,
          column: 8,
        },
        end: {
          line: 7,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [139, 140],
      loc: {
        start: {
          line: 7,
          column: 11,
        },
        end: {
          line: 7,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [140, 141],
      loc: {
        start: {
          line: 7,
          column: 12,
        },
        end: {
          line: 7,
          column: 13,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [141, 142],
      loc: {
        start: {
          line: 7,
          column: 13,
        },
        end: {
          line: 7,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [142, 154],
      loc: {
        start: {
          line: 7,
          column: 14,
        },
        end: {
          line: 7,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [154, 155],
      loc: {
        start: {
          line: 7,
          column: 26,
        },
        end: {
          line: 7,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [156, 158],
      loc: {
        start: {
          line: 7,
          column: 28,
        },
        end: {
          line: 7,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_spent",
      range: [159, 170],
      loc: {
        start: {
          line: 7,
          column: 31,
        },
        end: {
          line: 7,
          column: 42,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [170, 171],
      loc: {
        start: {
          line: 7,
          column: 42,
        },
        end: {
          line: 7,
          column: 43,
        },
      },
    },
    {
      type: "Keyword",
      value: "AVG",
      range: [180, 183],
      loc: {
        start: {
          line: 8,
          column: 8,
        },
        end: {
          line: 8,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [183, 184],
      loc: {
        start: {
          line: 8,
          column: 11,
        },
        end: {
          line: 8,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [184, 185],
      loc: {
        start: {
          line: 8,
          column: 12,
        },
        end: {
          line: 8,
          column: 13,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [185, 186],
      loc: {
        start: {
          line: 8,
          column: 13,
        },
        end: {
          line: 8,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [186, 198],
      loc: {
        start: {
          line: 8,
          column: 14,
        },
        end: {
          line: 8,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [198, 199],
      loc: {
        start: {
          line: 8,
          column: 26,
        },
        end: {
          line: 8,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [200, 202],
      loc: {
        start: {
          line: 8,
          column: 28,
        },
        end: {
          line: 8,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "avg_order_value",
      range: [203, 218],
      loc: {
        start: {
          line: 8,
          column: 31,
        },
        end: {
          line: 8,
          column: 46,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [223, 227],
      loc: {
        start: {
          line: 9,
          column: 4,
        },
        end: {
          line: 9,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [228, 233],
      loc: {
        start: {
          line: 9,
          column: 9,
        },
        end: {
          line: 9,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [234, 235],
      loc: {
        start: {
          line: 9,
          column: 15,
        },
        end: {
          line: 9,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "LEFT",
      range: [240, 244],
      loc: {
        start: {
          line: 10,
          column: 4,
        },
        end: {
          line: 10,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "JOIN",
      range: [245, 249],
      loc: {
        start: {
          line: 10,
          column: 9,
        },
        end: {
          line: 10,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "orders",
      range: [250, 256],
      loc: {
        start: {
          line: 10,
          column: 14,
        },
        end: {
          line: 10,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [257, 258],
      loc: {
        start: {
          line: 10,
          column: 21,
        },
        end: {
          line: 10,
          column: 22,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [259, 261],
      loc: {
        start: {
          line: 10,
          column: 23,
        },
        end: {
          line: 10,
          column: 25,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [262, 263],
      loc: {
        start: {
          line: 10,
          column: 26,
        },
        end: {
          line: 10,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [263, 264],
      loc: {
        start: {
          line: 10,
          column: 27,
        },
        end: {
          line: 10,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [264, 266],
      loc: {
        start: {
          line: 10,
          column: 28,
        },
        end: {
          line: 10,
          column: 30,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [267, 268],
      loc: {
        start: {
          line: 10,
          column: 31,
        },
        end: {
          line: 10,
          column: 32,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [269, 270],
      loc: {
        start: {
          line: 10,
          column: 33,
        },
        end: {
          line: 10,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [270, 271],
      loc: {
        start: {
          line: 10,
          column: 34,
        },
        end: {
          line: 10,
          column: 35,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [271, 278],
      loc: {
        start: {
          line: 10,
          column: 35,
        },
        end: {
          line: 10,
          column: 42,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [283, 288],
      loc: {
        start: {
          line: 11,
          column: 4,
        },
        end: {
          line: 11,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [289, 290],
      loc: {
        start: {
          line: 11,
          column: 10,
        },
        end: {
          line: 11,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [290, 291],
      loc: {
        start: {
          line: 11,
          column: 11,
        },
        end: {
          line: 11,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [291, 297],
      loc: {
        start: {
          line: 11,
          column: 12,
        },
        end: {
          line: 11,
          column: 18,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [298, 299],
      loc: {
        start: {
          line: 11,
          column: 19,
        },
        end: {
          line: 11,
          column: 20,
        },
      },
    },
    {
      type: "String",
      value: "'active'",
      range: [300, 308],
      loc: {
        start: {
          line: 11,
          column: 21,
        },
        end: {
          line: 11,
          column: 29,
        },
      },
    },
    {
      type: "Keyword",
      value: "GROUP",
      range: [313, 318],
      loc: {
        start: {
          line: 12,
          column: 4,
        },
        end: {
          line: 12,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [319, 321],
      loc: {
        start: {
          line: 12,
          column: 10,
        },
        end: {
          line: 12,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [322, 323],
      loc: {
        start: {
          line: 12,
          column: 13,
        },
        end: {
          line: 12,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [323, 324],
      loc: {
        start: {
          line: 12,
          column: 14,
        },
        end: {
          line: 12,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [324, 326],
      loc: {
        start: {
          line: 12,
          column: 15,
        },
        end: {
          line: 12,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [326, 327],
      loc: {
        start: {
          line: 12,
          column: 17,
        },
        end: {
          line: 12,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [328, 329],
      loc: {
        start: {
          line: 12,
          column: 19,
        },
        end: {
          line: 12,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [329, 330],
      loc: {
        start: {
          line: 12,
          column: 20,
        },
        end: {
          line: 12,
          column: 21,
        },
      },
    },
    {
      type: "Identifier",
      value: "full_name",
      range: [330, 339],
      loc: {
        start: {
          line: 12,
          column: 21,
        },
        end: {
          line: 12,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [340, 341],
      loc: {
        start: {
          line: 13,
          column: 0,
        },
        end: {
          line: 13,
          column: 1,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [341, 342],
      loc: {
        start: {
          line: 13,
          column: 1,
        },
        end: {
          line: 13,
          column: 2,
        },
      },
    },
    {
      type: "Identifier",
      value: "top_users",
      range: [343, 352],
      loc: {
        start: {
          line: 14,
          column: 0,
        },
        end: {
          line: 14,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [353, 355],
      loc: {
        start: {
          line: 14,
          column: 10,
        },
        end: {
          line: 14,
          column: 12,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [356, 357],
      loc: {
        start: {
          line: 14,
          column: 13,
        },
        end: {
          line: 14,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [362, 368],
      loc: {
        start: {
          line: 15,
          column: 4,
        },
        end: {
          line: 15,
          column: 10,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [369, 370],
      loc: {
        start: {
          line: 15,
          column: 11,
        },
        end: {
          line: 15,
          column: 12,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [370, 371],
      loc: {
        start: {
          line: 15,
          column: 12,
        },
        end: {
          line: 15,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "RANK",
      range: [380, 384],
      loc: {
        start: {
          line: 16,
          column: 8,
        },
        end: {
          line: 16,
          column: 12,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [384, 385],
      loc: {
        start: {
          line: 16,
          column: 12,
        },
        end: {
          line: 16,
          column: 13,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [385, 386],
      loc: {
        start: {
          line: 16,
          column: 13,
        },
        end: {
          line: 16,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "OVER",
      range: [387, 391],
      loc: {
        start: {
          line: 16,
          column: 15,
        },
        end: {
          line: 16,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [392, 393],
      loc: {
        start: {
          line: 16,
          column: 20,
        },
        end: {
          line: 16,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "ORDER",
      range: [393, 398],
      loc: {
        start: {
          line: 16,
          column: 21,
        },
        end: {
          line: 16,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [399, 401],
      loc: {
        start: {
          line: 16,
          column: 27,
        },
        end: {
          line: 16,
          column: 29,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_spent",
      range: [402, 413],
      loc: {
        start: {
          line: 16,
          column: 30,
        },
        end: {
          line: 16,
          column: 41,
        },
      },
    },
    {
      type: "Keyword",
      value: "DESC",
      range: [414, 418],
      loc: {
        start: {
          line: 16,
          column: 42,
        },
        end: {
          line: 16,
          column: 46,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [418, 419],
      loc: {
        start: {
          line: 16,
          column: 46,
        },
        end: {
          line: 16,
          column: 47,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [420, 422],
      loc: {
        start: {
          line: 16,
          column: 48,
        },
        end: {
          line: 16,
          column: 50,
        },
      },
    },
    {
      type: "Identifier",
      value: "spending_rank",
      range: [423, 436],
      loc: {
        start: {
          line: 16,
          column: 51,
        },
        end: {
          line: 16,
          column: 64,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [436, 437],
      loc: {
        start: {
          line: 16,
          column: 64,
        },
        end: {
          line: 16,
          column: 65,
        },
      },
    },
    {
      type: "Identifier",
      value: "PERCENTILE_CONT",
      range: [446, 461],
      loc: {
        start: {
          line: 17,
          column: 8,
        },
        end: {
          line: 17,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [461, 462],
      loc: {
        start: {
          line: 17,
          column: 23,
        },
        end: {
          line: 17,
          column: 24,
        },
      },
    },
    {
      type: "Numeric",
      value: "0.5",
      range: [462, 465],
      loc: {
        start: {
          line: 17,
          column: 24,
        },
        end: {
          line: 17,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [465, 466],
      loc: {
        start: {
          line: 17,
          column: 27,
        },
        end: {
          line: 17,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "WITHIN",
      range: [467, 473],
      loc: {
        start: {
          line: 17,
          column: 29,
        },
        end: {
          line: 17,
          column: 35,
        },
      },
    },
    {
      type: "Keyword",
      value: "GROUP",
      range: [474, 479],
      loc: {
        start: {
          line: 17,
          column: 36,
        },
        end: {
          line: 17,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [480, 481],
      loc: {
        start: {
          line: 17,
          column: 42,
        },
        end: {
          line: 17,
          column: 43,
        },
      },
    },
    {
      type: "Keyword",
      value: "ORDER",
      range: [481, 486],
      loc: {
        start: {
          line: 17,
          column: 43,
        },
        end: {
          line: 17,
          column: 48,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [487, 489],
      loc: {
        start: {
          line: 17,
          column: 49,
        },
        end: {
          line: 17,
          column: 51,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_spent",
      range: [490, 501],
      loc: {
        start: {
          line: 17,
          column: 52,
        },
        end: {
          line: 17,
          column: 63,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [501, 502],
      loc: {
        start: {
          line: 17,
          column: 63,
        },
        end: {
          line: 17,
          column: 64,
        },
      },
    },
    {
      type: "Keyword",
      value: "OVER",
      range: [503, 507],
      loc: {
        start: {
          line: 17,
          column: 65,
        },
        end: {
          line: 17,
          column: 69,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [508, 509],
      loc: {
        start: {
          line: 17,
          column: 70,
        },
        end: {
          line: 17,
          column: 71,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [509, 510],
      loc: {
        start: {
          line: 17,
          column: 71,
        },
        end: {
          line: 17,
          column: 72,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [511, 513],
      loc: {
        start: {
          line: 17,
          column: 73,
        },
        end: {
          line: 17,
          column: 75,
        },
      },
    },
    {
      type: "Identifier",
      value: "median_spent",
      range: [514, 526],
      loc: {
        start: {
          line: 17,
          column: 76,
        },
        end: {
          line: 17,
          column: 88,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [531, 535],
      loc: {
        start: {
          line: 18,
          column: 4,
        },
        end: {
          line: 18,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_stats",
      range: [536, 546],
      loc: {
        start: {
          line: 18,
          column: 9,
        },
        end: {
          line: 18,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [551, 556],
      loc: {
        start: {
          line: 19,
          column: 4,
        },
        end: {
          line: 19,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_count",
      range: [557, 568],
      loc: {
        start: {
          line: 19,
          column: 10,
        },
        end: {
          line: 19,
          column: 21,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [569, 570],
      loc: {
        start: {
          line: 19,
          column: 22,
        },
        end: {
          line: 19,
          column: 23,
        },
      },
    },
    {
      type: "Numeric",
      value: "0",
      range: [571, 572],
      loc: {
        start: {
          line: 19,
          column: 24,
        },
        end: {
          line: 19,
          column: 25,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [573, 574],
      loc: {
        start: {
          line: 20,
          column: 0,
        },
        end: {
          line: 20,
          column: 1,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [575, 581],
      loc: {
        start: {
          line: 21,
          column: 0,
        },
        end: {
          line: 21,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "tu",
      range: [587, 589],
      loc: {
        start: {
          line: 22,
          column: 4,
        },
        end: {
          line: 22,
          column: 6,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [589, 590],
      loc: {
        start: {
          line: 22,
          column: 6,
        },
        end: {
          line: 22,
          column: 7,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [590, 591],
      loc: {
        start: {
          line: 22,
          column: 7,
        },
        end: {
          line: 22,
          column: 8,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [591, 592],
      loc: {
        start: {
          line: 22,
          column: 8,
        },
        end: {
          line: 22,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "CASE",
      range: [597, 601],
      loc: {
        start: {
          line: 23,
          column: 4,
        },
        end: {
          line: 23,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHEN",
      range: [611, 615],
      loc: {
        start: {
          line: 24,
          column: 8,
        },
        end: {
          line: 24,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "spending_rank",
      range: [616, 629],
      loc: {
        start: {
          line: 24,
          column: 13,
        },
        end: {
          line: 24,
          column: 26,
        },
      },
    },
    {
      type: "Operator",
      value: "<=",
      range: [630, 632],
      loc: {
        start: {
          line: 24,
          column: 27,
        },
        end: {
          line: 24,
          column: 29,
        },
      },
    },
    {
      type: "Numeric",
      value: "10",
      range: [633, 635],
      loc: {
        start: {
          line: 24,
          column: 30,
        },
        end: {
          line: 24,
          column: 32,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [636, 640],
      loc: {
        start: {
          line: 24,
          column: 33,
        },
        end: {
          line: 24,
          column: 37,
        },
      },
    },
    {
      type: "String",
      value: "'VIP'",
      range: [641, 646],
      loc: {
        start: {
          line: 24,
          column: 38,
        },
        end: {
          line: 24,
          column: 43,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHEN",
      range: [655, 659],
      loc: {
        start: {
          line: 25,
          column: 8,
        },
        end: {
          line: 25,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_spent",
      range: [660, 671],
      loc: {
        start: {
          line: 25,
          column: 13,
        },
        end: {
          line: 25,
          column: 24,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [672, 673],
      loc: {
        start: {
          line: 25,
          column: 25,
        },
        end: {
          line: 25,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "median_spent",
      range: [674, 686],
      loc: {
        start: {
          line: 25,
          column: 27,
        },
        end: {
          line: 25,
          column: 39,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [687, 691],
      loc: {
        start: {
          line: 25,
          column: 40,
        },
        end: {
          line: 25,
          column: 44,
        },
      },
    },
    {
      type: "String",
      value: "'Premium'",
      range: [692, 701],
      loc: {
        start: {
          line: 25,
          column: 45,
        },
        end: {
          line: 25,
          column: 54,
        },
      },
    },
    {
      type: "Keyword",
      value: "ELSE",
      range: [710, 714],
      loc: {
        start: {
          line: 26,
          column: 8,
        },
        end: {
          line: 26,
          column: 12,
        },
      },
    },
    {
      type: "String",
      value: "'Standard'",
      range: [715, 725],
      loc: {
        start: {
          line: 26,
          column: 13,
        },
        end: {
          line: 26,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [730, 733],
      loc: {
        start: {
          line: 27,
          column: 4,
        },
        end: {
          line: 27,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [734, 736],
      loc: {
        start: {
          line: 27,
          column: 8,
        },
        end: {
          line: 27,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_tier",
      range: [737, 746],
      loc: {
        start: {
          line: 27,
          column: 11,
        },
        end: {
          line: 27,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [747, 751],
      loc: {
        start: {
          line: 28,
          column: 0,
        },
        end: {
          line: 28,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "top_users",
      range: [752, 761],
      loc: {
        start: {
          line: 28,
          column: 5,
        },
        end: {
          line: 28,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "tu",
      range: [762, 764],
      loc: {
        start: {
          line: 28,
          column: 15,
        },
        end: {
          line: 28,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [765, 770],
      loc: {
        start: {
          line: 29,
          column: 0,
        },
        end: {
          line: 29,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "spending_rank",
      range: [771, 784],
      loc: {
        start: {
          line: 29,
          column: 6,
        },
        end: {
          line: 29,
          column: 19,
        },
      },
    },
    {
      type: "Operator",
      value: "<=",
      range: [785, 787],
      loc: {
        start: {
          line: 29,
          column: 20,
        },
        end: {
          line: 29,
          column: 22,
        },
      },
    },
    {
      type: "Numeric",
      value: "100",
      range: [788, 791],
      loc: {
        start: {
          line: 29,
          column: 23,
        },
        end: {
          line: 29,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [791, 792],
      loc: {
        start: {
          line: 29,
          column: 26,
        },
        end: {
          line: 29,
          column: 27,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Recursive CTE",
      range: [794, 810],
      loc: {
        start: {
          line: 31,
          column: 0,
        },
        end: {
          line: 31,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "WITH",
      range: [811, 815],
      loc: {
        start: {
          line: 32,
          column: 0,
        },
        end: {
          line: 32,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "RECURSIVE",
      range: [816, 825],
      loc: {
        start: {
          line: 32,
          column: 5,
        },
        end: {
          line: 32,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "category_hierarchy",
      range: [826, 844],
      loc: {
        start: {
          line: 32,
          column: 15,
        },
        end: {
          line: 32,
          column: 33,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [845, 847],
      loc: {
        start: {
          line: 32,
          column: 34,
        },
        end: {
          line: 32,
          column: 36,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [848, 849],
      loc: {
        start: {
          line: 32,
          column: 37,
        },
        end: {
          line: 32,
          column: 38,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Base case",
      range: [854, 866],
      loc: {
        start: {
          line: 33,
          column: 4,
        },
        end: {
          line: 33,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [871, 877],
      loc: {
        start: {
          line: 34,
          column: 4,
        },
        end: {
          line: 34,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [878, 880],
      loc: {
        start: {
          line: 34,
          column: 11,
        },
        end: {
          line: 34,
          column: 13,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [880, 881],
      loc: {
        start: {
          line: 34,
          column: 13,
        },
        end: {
          line: 34,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [882, 886],
      loc: {
        start: {
          line: 34,
          column: 15,
        },
        end: {
          line: 34,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [886, 887],
      loc: {
        start: {
          line: 34,
          column: 19,
        },
        end: {
          line: 34,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "parent_id",
      range: [888, 897],
      loc: {
        start: {
          line: 34,
          column: 21,
        },
        end: {
          line: 34,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [897, 898],
      loc: {
        start: {
          line: 34,
          column: 30,
        },
        end: {
          line: 34,
          column: 31,
        },
      },
    },
    {
      type: "Numeric",
      value: "0",
      range: [899, 900],
      loc: {
        start: {
          line: 34,
          column: 32,
        },
        end: {
          line: 34,
          column: 33,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [901, 903],
      loc: {
        start: {
          line: 34,
          column: 34,
        },
        end: {
          line: 34,
          column: 36,
        },
      },
    },
    {
      type: "Identifier",
      value: "level",
      range: [904, 909],
      loc: {
        start: {
          line: 34,
          column: 37,
        },
        end: {
          line: 34,
          column: 42,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [909, 910],
      loc: {
        start: {
          line: 34,
          column: 42,
        },
        end: {
          line: 34,
          column: 43,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [911, 915],
      loc: {
        start: {
          line: 34,
          column: 44,
        },
        end: {
          line: 34,
          column: 48,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [916, 918],
      loc: {
        start: {
          line: 34,
          column: 49,
        },
        end: {
          line: 34,
          column: 51,
        },
      },
    },
    {
      type: "Identifier",
      value: "path",
      range: [919, 923],
      loc: {
        start: {
          line: 34,
          column: 52,
        },
        end: {
          line: 34,
          column: 56,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [928, 932],
      loc: {
        start: {
          line: 35,
          column: 4,
        },
        end: {
          line: 35,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "categories",
      range: [933, 943],
      loc: {
        start: {
          line: 35,
          column: 9,
        },
        end: {
          line: 35,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [948, 953],
      loc: {
        start: {
          line: 36,
          column: 4,
        },
        end: {
          line: 36,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "parent_id",
      range: [954, 963],
      loc: {
        start: {
          line: 36,
          column: 10,
        },
        end: {
          line: 36,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "IS",
      range: [964, 966],
      loc: {
        start: {
          line: 36,
          column: 20,
        },
        end: {
          line: 36,
          column: 22,
        },
      },
    },
    {
      type: "Keyword",
      value: "NULL",
      range: [967, 971],
      loc: {
        start: {
          line: 36,
          column: 23,
        },
        end: {
          line: 36,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "UNION",
      range: [981, 986],
      loc: {
        start: {
          line: 38,
          column: 4,
        },
        end: {
          line: 38,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "ALL",
      range: [987, 990],
      loc: {
        start: {
          line: 38,
          column: 10,
        },
        end: {
          line: 38,
          column: 13,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Recursive case",
      range: [1000, 1017],
      loc: {
        start: {
          line: 40,
          column: 4,
        },
        end: {
          line: 40,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1022, 1028],
      loc: {
        start: {
          line: 41,
          column: 4,
        },
        end: {
          line: 41,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "c",
      range: [1029, 1030],
      loc: {
        start: {
          line: 41,
          column: 11,
        },
        end: {
          line: 41,
          column: 12,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1030, 1031],
      loc: {
        start: {
          line: 41,
          column: 12,
        },
        end: {
          line: 41,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [1031, 1033],
      loc: {
        start: {
          line: 41,
          column: 13,
        },
        end: {
          line: 41,
          column: 15,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1033, 1034],
      loc: {
        start: {
          line: 41,
          column: 15,
        },
        end: {
          line: 41,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "c",
      range: [1035, 1036],
      loc: {
        start: {
          line: 41,
          column: 17,
        },
        end: {
          line: 41,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1036, 1037],
      loc: {
        start: {
          line: 41,
          column: 18,
        },
        end: {
          line: 41,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [1037, 1041],
      loc: {
        start: {
          line: 41,
          column: 19,
        },
        end: {
          line: 41,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1041, 1042],
      loc: {
        start: {
          line: 41,
          column: 23,
        },
        end: {
          line: 41,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "c",
      range: [1043, 1044],
      loc: {
        start: {
          line: 41,
          column: 25,
        },
        end: {
          line: 41,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1044, 1045],
      loc: {
        start: {
          line: 41,
          column: 26,
        },
        end: {
          line: 41,
          column: 27,
        },
      },
    },
    {
      type: "Identifier",
      value: "parent_id",
      range: [1045, 1054],
      loc: {
        start: {
          line: 41,
          column: 27,
        },
        end: {
          line: 41,
          column: 36,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1054, 1055],
      loc: {
        start: {
          line: 41,
          column: 36,
        },
        end: {
          line: 41,
          column: 37,
        },
      },
    },
    {
      type: "Identifier",
      value: "ch",
      range: [1056, 1058],
      loc: {
        start: {
          line: 41,
          column: 38,
        },
        end: {
          line: 41,
          column: 40,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1058, 1059],
      loc: {
        start: {
          line: 41,
          column: 40,
        },
        end: {
          line: 41,
          column: 41,
        },
      },
    },
    {
      type: "Identifier",
      value: "level",
      range: [1059, 1064],
      loc: {
        start: {
          line: 41,
          column: 41,
        },
        end: {
          line: 41,
          column: 46,
        },
      },
    },
    {
      type: "Operator",
      value: "+",
      range: [1065, 1066],
      loc: {
        start: {
          line: 41,
          column: 47,
        },
        end: {
          line: 41,
          column: 48,
        },
      },
    },
    {
      type: "Numeric",
      value: "1",
      range: [1067, 1068],
      loc: {
        start: {
          line: 41,
          column: 49,
        },
        end: {
          line: 41,
          column: 50,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1068, 1069],
      loc: {
        start: {
          line: 41,
          column: 50,
        },
        end: {
          line: 41,
          column: 51,
        },
      },
    },
    {
      type: "Identifier",
      value: "ch",
      range: [1082, 1084],
      loc: {
        start: {
          line: 42,
          column: 11,
        },
        end: {
          line: 42,
          column: 13,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1084, 1085],
      loc: {
        start: {
          line: 42,
          column: 13,
        },
        end: {
          line: 42,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "path",
      range: [1085, 1089],
      loc: {
        start: {
          line: 42,
          column: 14,
        },
        end: {
          line: 42,
          column: 18,
        },
      },
    },
    {
      type: "Operator",
      value: "||",
      range: [1090, 1092],
      loc: {
        start: {
          line: 42,
          column: 19,
        },
        end: {
          line: 42,
          column: 21,
        },
      },
    },
    {
      type: "String",
      value: "' > '",
      range: [1093, 1098],
      loc: {
        start: {
          line: 42,
          column: 22,
        },
        end: {
          line: 42,
          column: 27,
        },
      },
    },
    {
      type: "Operator",
      value: "||",
      range: [1099, 1101],
      loc: {
        start: {
          line: 42,
          column: 28,
        },
        end: {
          line: 42,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "c",
      range: [1102, 1103],
      loc: {
        start: {
          line: 42,
          column: 31,
        },
        end: {
          line: 42,
          column: 32,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1103, 1104],
      loc: {
        start: {
          line: 42,
          column: 32,
        },
        end: {
          line: 42,
          column: 33,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [1104, 1108],
      loc: {
        start: {
          line: 42,
          column: 33,
        },
        end: {
          line: 42,
          column: 37,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1109, 1111],
      loc: {
        start: {
          line: 42,
          column: 38,
        },
        end: {
          line: 42,
          column: 40,
        },
      },
    },
    {
      type: "Identifier",
      value: "path",
      range: [1112, 1116],
      loc: {
        start: {
          line: 42,
          column: 41,
        },
        end: {
          line: 42,
          column: 45,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1121, 1125],
      loc: {
        start: {
          line: 43,
          column: 4,
        },
        end: {
          line: 43,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "categories",
      range: [1126, 1136],
      loc: {
        start: {
          line: 43,
          column: 9,
        },
        end: {
          line: 43,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "c",
      range: [1137, 1138],
      loc: {
        start: {
          line: 43,
          column: 20,
        },
        end: {
          line: 43,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "INNER",
      range: [1143, 1148],
      loc: {
        start: {
          line: 44,
          column: 4,
        },
        end: {
          line: 44,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "JOIN",
      range: [1149, 1153],
      loc: {
        start: {
          line: 44,
          column: 10,
        },
        end: {
          line: 44,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "category_hierarchy",
      range: [1154, 1172],
      loc: {
        start: {
          line: 44,
          column: 15,
        },
        end: {
          line: 44,
          column: 33,
        },
      },
    },
    {
      type: "Identifier",
      value: "ch",
      range: [1173, 1175],
      loc: {
        start: {
          line: 44,
          column: 34,
        },
        end: {
          line: 44,
          column: 36,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [1176, 1178],
      loc: {
        start: {
          line: 44,
          column: 37,
        },
        end: {
          line: 44,
          column: 39,
        },
      },
    },
    {
      type: "Identifier",
      value: "c",
      range: [1179, 1180],
      loc: {
        start: {
          line: 44,
          column: 40,
        },
        end: {
          line: 44,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1180, 1181],
      loc: {
        start: {
          line: 44,
          column: 41,
        },
        end: {
          line: 44,
          column: 42,
        },
      },
    },
    {
      type: "Identifier",
      value: "parent_id",
      range: [1181, 1190],
      loc: {
        start: {
          line: 44,
          column: 42,
        },
        end: {
          line: 44,
          column: 51,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [1191, 1192],
      loc: {
        start: {
          line: 44,
          column: 52,
        },
        end: {
          line: 44,
          column: 53,
        },
      },
    },
    {
      type: "Identifier",
      value: "ch",
      range: [1193, 1195],
      loc: {
        start: {
          line: 44,
          column: 54,
        },
        end: {
          line: 44,
          column: 56,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1195, 1196],
      loc: {
        start: {
          line: 44,
          column: 56,
        },
        end: {
          line: 44,
          column: 57,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [1196, 1198],
      loc: {
        start: {
          line: 44,
          column: 57,
        },
        end: {
          line: 44,
          column: 59,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1199, 1200],
      loc: {
        start: {
          line: 45,
          column: 0,
        },
        end: {
          line: 45,
          column: 1,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1201, 1207],
      loc: {
        start: {
          line: 46,
          column: 0,
        },
        end: {
          line: 46,
          column: 6,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [1208, 1209],
      loc: {
        start: {
          line: 46,
          column: 7,
        },
        end: {
          line: 46,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1210, 1214],
      loc: {
        start: {
          line: 46,
          column: 9,
        },
        end: {
          line: 46,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "category_hierarchy",
      range: [1215, 1233],
      loc: {
        start: {
          line: 46,
          column: 14,
        },
        end: {
          line: 46,
          column: 32,
        },
      },
    },
    {
      type: "Keyword",
      value: "ORDER",
      range: [1234, 1239],
      loc: {
        start: {
          line: 46,
          column: 33,
        },
        end: {
          line: 46,
          column: 38,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [1240, 1242],
      loc: {
        start: {
          line: 46,
          column: 39,
        },
        end: {
          line: 46,
          column: 41,
        },
      },
    },
    {
      type: "Identifier",
      value: "path",
      range: [1243, 1247],
      loc: {
        start: {
          line: 46,
          column: 42,
        },
        end: {
          line: 46,
          column: 46,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1247, 1248],
      loc: {
        start: {
          line: 46,
          column: 46,
        },
        end: {
          line: 46,
          column: 47,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Window functions and analytics",
      range: [1250, 1283],
      loc: {
        start: {
          line: 48,
          column: 0,
        },
        end: {
          line: 48,
          column: 33,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1284, 1290],
      loc: {
        start: {
          line: 49,
          column: 0,
        },
        end: {
          line: 49,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [1296, 1303],
      loc: {
        start: {
          line: 50,
          column: 4,
        },
        end: {
          line: 50,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1303, 1304],
      loc: {
        start: {
          line: 50,
          column: 11,
        },
        end: {
          line: 50,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_date",
      range: [1309, 1319],
      loc: {
        start: {
          line: 51,
          column: 4,
        },
        end: {
          line: 51,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1319, 1320],
      loc: {
        start: {
          line: 51,
          column: 14,
        },
        end: {
          line: 51,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [1325, 1337],
      loc: {
        start: {
          line: 52,
          column: 4,
        },
        end: {
          line: 52,
          column: 16,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1337, 1338],
      loc: {
        start: {
          line: 52,
          column: 16,
        },
        end: {
          line: 52,
          column: 17,
        },
      },
    },
    {
      type: "Identifier",
      value: "LAG",
      range: [1343, 1346],
      loc: {
        start: {
          line: 53,
          column: 4,
        },
        end: {
          line: 53,
          column: 7,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1346, 1347],
      loc: {
        start: {
          line: 53,
          column: 7,
        },
        end: {
          line: 53,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [1347, 1359],
      loc: {
        start: {
          line: 53,
          column: 8,
        },
        end: {
          line: 53,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1359, 1360],
      loc: {
        start: {
          line: 53,
          column: 20,
        },
        end: {
          line: 53,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "OVER",
      range: [1361, 1365],
      loc: {
        start: {
          line: 53,
          column: 22,
        },
        end: {
          line: 53,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1366, 1367],
      loc: {
        start: {
          line: 53,
          column: 27,
        },
        end: {
          line: 53,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "PARTITION",
      range: [1367, 1376],
      loc: {
        start: {
          line: 53,
          column: 28,
        },
        end: {
          line: 53,
          column: 37,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [1377, 1379],
      loc: {
        start: {
          line: 53,
          column: 38,
        },
        end: {
          line: 53,
          column: 40,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [1380, 1387],
      loc: {
        start: {
          line: 53,
          column: 41,
        },
        end: {
          line: 53,
          column: 48,
        },
      },
    },
    {
      type: "Keyword",
      value: "ORDER",
      range: [1388, 1393],
      loc: {
        start: {
          line: 53,
          column: 49,
        },
        end: {
          line: 53,
          column: 54,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [1394, 1396],
      loc: {
        start: {
          line: 53,
          column: 55,
        },
        end: {
          line: 53,
          column: 57,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_date",
      range: [1397, 1407],
      loc: {
        start: {
          line: 53,
          column: 58,
        },
        end: {
          line: 53,
          column: 68,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1407, 1408],
      loc: {
        start: {
          line: 53,
          column: 68,
        },
        end: {
          line: 53,
          column: 69,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1409, 1411],
      loc: {
        start: {
          line: 53,
          column: 70,
        },
        end: {
          line: 53,
          column: 72,
        },
      },
    },
    {
      type: "Identifier",
      value: "previous_order",
      range: [1412, 1426],
      loc: {
        start: {
          line: 53,
          column: 73,
        },
        end: {
          line: 53,
          column: 87,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1426, 1427],
      loc: {
        start: {
          line: 53,
          column: 87,
        },
        end: {
          line: 53,
          column: 88,
        },
      },
    },
    {
      type: "Identifier",
      value: "LEAD",
      range: [1432, 1436],
      loc: {
        start: {
          line: 54,
          column: 4,
        },
        end: {
          line: 54,
          column: 8,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1436, 1437],
      loc: {
        start: {
          line: 54,
          column: 8,
        },
        end: {
          line: 54,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [1437, 1449],
      loc: {
        start: {
          line: 54,
          column: 9,
        },
        end: {
          line: 54,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1449, 1450],
      loc: {
        start: {
          line: 54,
          column: 21,
        },
        end: {
          line: 54,
          column: 22,
        },
      },
    },
    {
      type: "Keyword",
      value: "OVER",
      range: [1451, 1455],
      loc: {
        start: {
          line: 54,
          column: 23,
        },
        end: {
          line: 54,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1456, 1457],
      loc: {
        start: {
          line: 54,
          column: 28,
        },
        end: {
          line: 54,
          column: 29,
        },
      },
    },
    {
      type: "Keyword",
      value: "PARTITION",
      range: [1457, 1466],
      loc: {
        start: {
          line: 54,
          column: 29,
        },
        end: {
          line: 54,
          column: 38,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [1467, 1469],
      loc: {
        start: {
          line: 54,
          column: 39,
        },
        end: {
          line: 54,
          column: 41,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [1470, 1477],
      loc: {
        start: {
          line: 54,
          column: 42,
        },
        end: {
          line: 54,
          column: 49,
        },
      },
    },
    {
      type: "Keyword",
      value: "ORDER",
      range: [1478, 1483],
      loc: {
        start: {
          line: 54,
          column: 50,
        },
        end: {
          line: 54,
          column: 55,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [1484, 1486],
      loc: {
        start: {
          line: 54,
          column: 56,
        },
        end: {
          line: 54,
          column: 58,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_date",
      range: [1487, 1497],
      loc: {
        start: {
          line: 54,
          column: 59,
        },
        end: {
          line: 54,
          column: 69,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1497, 1498],
      loc: {
        start: {
          line: 54,
          column: 69,
        },
        end: {
          line: 54,
          column: 70,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1499, 1501],
      loc: {
        start: {
          line: 54,
          column: 71,
        },
        end: {
          line: 54,
          column: 73,
        },
      },
    },
    {
      type: "Identifier",
      value: "next_order",
      range: [1502, 1512],
      loc: {
        start: {
          line: 54,
          column: 74,
        },
        end: {
          line: 54,
          column: 84,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1512, 1513],
      loc: {
        start: {
          line: 54,
          column: 84,
        },
        end: {
          line: 54,
          column: 85,
        },
      },
    },
    {
      type: "Keyword",
      value: "SUM",
      range: [1518, 1521],
      loc: {
        start: {
          line: 55,
          column: 4,
        },
        end: {
          line: 55,
          column: 7,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1521, 1522],
      loc: {
        start: {
          line: 55,
          column: 7,
        },
        end: {
          line: 55,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [1522, 1534],
      loc: {
        start: {
          line: 55,
          column: 8,
        },
        end: {
          line: 55,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1534, 1535],
      loc: {
        start: {
          line: 55,
          column: 20,
        },
        end: {
          line: 55,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "OVER",
      range: [1536, 1540],
      loc: {
        start: {
          line: 55,
          column: 22,
        },
        end: {
          line: 55,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1541, 1542],
      loc: {
        start: {
          line: 55,
          column: 27,
        },
        end: {
          line: 55,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "PARTITION",
      range: [1542, 1551],
      loc: {
        start: {
          line: 55,
          column: 28,
        },
        end: {
          line: 55,
          column: 37,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [1552, 1554],
      loc: {
        start: {
          line: 55,
          column: 38,
        },
        end: {
          line: 55,
          column: 40,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [1555, 1562],
      loc: {
        start: {
          line: 55,
          column: 41,
        },
        end: {
          line: 55,
          column: 48,
        },
      },
    },
    {
      type: "Keyword",
      value: "ORDER",
      range: [1563, 1568],
      loc: {
        start: {
          line: 55,
          column: 49,
        },
        end: {
          line: 55,
          column: 54,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [1569, 1571],
      loc: {
        start: {
          line: 55,
          column: 55,
        },
        end: {
          line: 55,
          column: 57,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_date",
      range: [1572, 1582],
      loc: {
        start: {
          line: 55,
          column: 58,
        },
        end: {
          line: 55,
          column: 68,
        },
      },
    },
    {
      type: "Keyword",
      value: "ROWS",
      range: [1611, 1615],
      loc: {
        start: {
          line: 56,
          column: 27,
        },
        end: {
          line: 56,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "BETWEEN",
      range: [1616, 1623],
      loc: {
        start: {
          line: 56,
          column: 32,
        },
        end: {
          line: 56,
          column: 39,
        },
      },
    },
    {
      type: "Keyword",
      value: "UNBOUNDED",
      range: [1624, 1633],
      loc: {
        start: {
          line: 56,
          column: 40,
        },
        end: {
          line: 56,
          column: 49,
        },
      },
    },
    {
      type: "Keyword",
      value: "PRECEDING",
      range: [1634, 1643],
      loc: {
        start: {
          line: 56,
          column: 50,
        },
        end: {
          line: 56,
          column: 59,
        },
      },
    },
    {
      type: "Keyword",
      value: "AND",
      range: [1644, 1647],
      loc: {
        start: {
          line: 56,
          column: 60,
        },
        end: {
          line: 56,
          column: 63,
        },
      },
    },
    {
      type: "Keyword",
      value: "CURRENT",
      range: [1648, 1655],
      loc: {
        start: {
          line: 56,
          column: 64,
        },
        end: {
          line: 56,
          column: 71,
        },
      },
    },
    {
      type: "Keyword",
      value: "ROW",
      range: [1656, 1659],
      loc: {
        start: {
          line: 56,
          column: 72,
        },
        end: {
          line: 56,
          column: 75,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1659, 1660],
      loc: {
        start: {
          line: 56,
          column: 75,
        },
        end: {
          line: 56,
          column: 76,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1661, 1663],
      loc: {
        start: {
          line: 56,
          column: 77,
        },
        end: {
          line: 56,
          column: 79,
        },
      },
    },
    {
      type: "Identifier",
      value: "running_total",
      range: [1664, 1677],
      loc: {
        start: {
          line: 56,
          column: 80,
        },
        end: {
          line: 56,
          column: 93,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1677, 1678],
      loc: {
        start: {
          line: 56,
          column: 93,
        },
        end: {
          line: 56,
          column: 94,
        },
      },
    },
    {
      type: "Keyword",
      value: "AVG",
      range: [1683, 1686],
      loc: {
        start: {
          line: 57,
          column: 4,
        },
        end: {
          line: 57,
          column: 7,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1686, 1687],
      loc: {
        start: {
          line: 57,
          column: 7,
        },
        end: {
          line: 57,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [1687, 1699],
      loc: {
        start: {
          line: 57,
          column: 8,
        },
        end: {
          line: 57,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1699, 1700],
      loc: {
        start: {
          line: 57,
          column: 20,
        },
        end: {
          line: 57,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "OVER",
      range: [1701, 1705],
      loc: {
        start: {
          line: 57,
          column: 22,
        },
        end: {
          line: 57,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1706, 1707],
      loc: {
        start: {
          line: 57,
          column: 27,
        },
        end: {
          line: 57,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "PARTITION",
      range: [1707, 1716],
      loc: {
        start: {
          line: 57,
          column: 28,
        },
        end: {
          line: 57,
          column: 37,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [1717, 1719],
      loc: {
        start: {
          line: 57,
          column: 38,
        },
        end: {
          line: 57,
          column: 40,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [1720, 1727],
      loc: {
        start: {
          line: 57,
          column: 41,
        },
        end: {
          line: 57,
          column: 48,
        },
      },
    },
    {
      type: "Keyword",
      value: "ORDER",
      range: [1728, 1733],
      loc: {
        start: {
          line: 57,
          column: 49,
        },
        end: {
          line: 57,
          column: 54,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [1734, 1736],
      loc: {
        start: {
          line: 57,
          column: 55,
        },
        end: {
          line: 57,
          column: 57,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_date",
      range: [1737, 1747],
      loc: {
        start: {
          line: 57,
          column: 58,
        },
        end: {
          line: 57,
          column: 68,
        },
      },
    },
    {
      type: "Keyword",
      value: "ROWS",
      range: [1776, 1780],
      loc: {
        start: {
          line: 58,
          column: 27,
        },
        end: {
          line: 58,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "BETWEEN",
      range: [1781, 1788],
      loc: {
        start: {
          line: 58,
          column: 32,
        },
        end: {
          line: 58,
          column: 39,
        },
      },
    },
    {
      type: "Numeric",
      value: "2",
      range: [1789, 1790],
      loc: {
        start: {
          line: 58,
          column: 40,
        },
        end: {
          line: 58,
          column: 41,
        },
      },
    },
    {
      type: "Keyword",
      value: "PRECEDING",
      range: [1791, 1800],
      loc: {
        start: {
          line: 58,
          column: 42,
        },
        end: {
          line: 58,
          column: 51,
        },
      },
    },
    {
      type: "Keyword",
      value: "AND",
      range: [1801, 1804],
      loc: {
        start: {
          line: 58,
          column: 52,
        },
        end: {
          line: 58,
          column: 55,
        },
      },
    },
    {
      type: "Numeric",
      value: "2",
      range: [1805, 1806],
      loc: {
        start: {
          line: 58,
          column: 56,
        },
        end: {
          line: 58,
          column: 57,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOLLOWING",
      range: [1807, 1816],
      loc: {
        start: {
          line: 58,
          column: 58,
        },
        end: {
          line: 58,
          column: 67,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1816, 1817],
      loc: {
        start: {
          line: 58,
          column: 67,
        },
        end: {
          line: 58,
          column: 68,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1818, 1820],
      loc: {
        start: {
          line: 58,
          column: 69,
        },
        end: {
          line: 58,
          column: 71,
        },
      },
    },
    {
      type: "Identifier",
      value: "moving_avg",
      range: [1821, 1831],
      loc: {
        start: {
          line: 58,
          column: 72,
        },
        end: {
          line: 58,
          column: 82,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1832, 1836],
      loc: {
        start: {
          line: 59,
          column: 0,
        },
        end: {
          line: 59,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "orders",
      range: [1837, 1843],
      loc: {
        start: {
          line: 59,
          column: 5,
        },
        end: {
          line: 59,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [1844, 1849],
      loc: {
        start: {
          line: 60,
          column: 0,
        },
        end: {
          line: 60,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_date",
      range: [1850, 1860],
      loc: {
        start: {
          line: 60,
          column: 6,
        },
        end: {
          line: 60,
          column: 16,
        },
      },
    },
    {
      type: "Operator",
      value: ">=",
      range: [1861, 1863],
      loc: {
        start: {
          line: 60,
          column: 17,
        },
        end: {
          line: 60,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "CURRENT_DATE",
      range: [1864, 1876],
      loc: {
        start: {
          line: 60,
          column: 20,
        },
        end: {
          line: 60,
          column: 32,
        },
      },
    },
    {
      type: "Operator",
      value: "-",
      range: [1877, 1878],
      loc: {
        start: {
          line: 60,
          column: 33,
        },
        end: {
          line: 60,
          column: 34,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTERVAL",
      range: [1879, 1887],
      loc: {
        start: {
          line: 60,
          column: 35,
        },
        end: {
          line: 60,
          column: 43,
        },
      },
    },
    {
      type: "String",
      value: "'1 year'",
      range: [1888, 1896],
      loc: {
        start: {
          line: 60,
          column: 44,
        },
        end: {
          line: 60,
          column: 52,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1896, 1897],
      loc: {
        start: {
          line: 60,
          column: 52,
        },
        end: {
          line: 60,
          column: 53,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Complex EXISTS and NOT EXISTS",
      range: [1899, 1931],
      loc: {
        start: {
          line: 62,
          column: 0,
        },
        end: {
          line: 62,
          column: 32,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1932, 1938],
      loc: {
        start: {
          line: 63,
          column: 0,
        },
        end: {
          line: 63,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "DISTINCT",
      range: [1939, 1947],
      loc: {
        start: {
          line: 63,
          column: 7,
        },
        end: {
          line: 63,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [1948, 1949],
      loc: {
        start: {
          line: 63,
          column: 16,
        },
        end: {
          line: 63,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1949, 1950],
      loc: {
        start: {
          line: 63,
          column: 17,
        },
        end: {
          line: 63,
          column: 18,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [1950, 1951],
      loc: {
        start: {
          line: 63,
          column: 18,
        },
        end: {
          line: 63,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1952, 1956],
      loc: {
        start: {
          line: 64,
          column: 0,
        },
        end: {
          line: 64,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [1957, 1962],
      loc: {
        start: {
          line: 64,
          column: 5,
        },
        end: {
          line: 64,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [1963, 1964],
      loc: {
        start: {
          line: 64,
          column: 11,
        },
        end: {
          line: 64,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [1965, 1970],
      loc: {
        start: {
          line: 65,
          column: 0,
        },
        end: {
          line: 65,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXISTS",
      range: [1971, 1977],
      loc: {
        start: {
          line: 65,
          column: 6,
        },
        end: {
          line: 65,
          column: 12,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1978, 1979],
      loc: {
        start: {
          line: 65,
          column: 13,
        },
        end: {
          line: 65,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1984, 1990],
      loc: {
        start: {
          line: 66,
          column: 4,
        },
        end: {
          line: 66,
          column: 10,
        },
      },
    },
    {
      type: "Numeric",
      value: "1",
      range: [1991, 1992],
      loc: {
        start: {
          line: 66,
          column: 11,
        },
        end: {
          line: 66,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1993, 1997],
      loc: {
        start: {
          line: 66,
          column: 13,
        },
        end: {
          line: 66,
          column: 17,
        },
      },
    },
    {
      type: "Identifier",
      value: "orders",
      range: [1998, 2004],
      loc: {
        start: {
          line: 66,
          column: 18,
        },
        end: {
          line: 66,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [2005, 2006],
      loc: {
        start: {
          line: 66,
          column: 25,
        },
        end: {
          line: 66,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [2011, 2016],
      loc: {
        start: {
          line: 67,
          column: 4,
        },
        end: {
          line: 67,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [2017, 2018],
      loc: {
        start: {
          line: 67,
          column: 10,
        },
        end: {
          line: 67,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2018, 2019],
      loc: {
        start: {
          line: 67,
          column: 11,
        },
        end: {
          line: 67,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [2019, 2026],
      loc: {
        start: {
          line: 67,
          column: 12,
        },
        end: {
          line: 67,
          column: 19,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2027, 2028],
      loc: {
        start: {
          line: 67,
          column: 20,
        },
        end: {
          line: 67,
          column: 21,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [2029, 2030],
      loc: {
        start: {
          line: 67,
          column: 22,
        },
        end: {
          line: 67,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2030, 2031],
      loc: {
        start: {
          line: 67,
          column: 23,
        },
        end: {
          line: 67,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [2031, 2033],
      loc: {
        start: {
          line: 67,
          column: 24,
        },
        end: {
          line: 67,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "AND",
      range: [2038, 2041],
      loc: {
        start: {
          line: 68,
          column: 4,
        },
        end: {
          line: 68,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [2042, 2043],
      loc: {
        start: {
          line: 68,
          column: 8,
        },
        end: {
          line: 68,
          column: 9,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2043, 2044],
      loc: {
        start: {
          line: 68,
          column: 9,
        },
        end: {
          line: 68,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_date",
      range: [2044, 2054],
      loc: {
        start: {
          line: 68,
          column: 10,
        },
        end: {
          line: 68,
          column: 20,
        },
      },
    },
    {
      type: "Operator",
      value: ">=",
      range: [2055, 2057],
      loc: {
        start: {
          line: 68,
          column: 21,
        },
        end: {
          line: 68,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "CURRENT_DATE",
      range: [2058, 2070],
      loc: {
        start: {
          line: 68,
          column: 24,
        },
        end: {
          line: 68,
          column: 36,
        },
      },
    },
    {
      type: "Operator",
      value: "-",
      range: [2071, 2072],
      loc: {
        start: {
          line: 68,
          column: 37,
        },
        end: {
          line: 68,
          column: 38,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTERVAL",
      range: [2073, 2081],
      loc: {
        start: {
          line: 68,
          column: 39,
        },
        end: {
          line: 68,
          column: 47,
        },
      },
    },
    {
      type: "String",
      value: "'30 days'",
      range: [2082, 2091],
      loc: {
        start: {
          line: 68,
          column: 48,
        },
        end: {
          line: 68,
          column: 57,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2092, 2093],
      loc: {
        start: {
          line: 69,
          column: 0,
        },
        end: {
          line: 69,
          column: 1,
        },
      },
    },
    {
      type: "Keyword",
      value: "AND",
      range: [2094, 2097],
      loc: {
        start: {
          line: 70,
          column: 0,
        },
        end: {
          line: 70,
          column: 3,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [2098, 2101],
      loc: {
        start: {
          line: 70,
          column: 4,
        },
        end: {
          line: 70,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXISTS",
      range: [2102, 2108],
      loc: {
        start: {
          line: 70,
          column: 8,
        },
        end: {
          line: 70,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2109, 2110],
      loc: {
        start: {
          line: 70,
          column: 15,
        },
        end: {
          line: 70,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [2115, 2121],
      loc: {
        start: {
          line: 71,
          column: 4,
        },
        end: {
          line: 71,
          column: 10,
        },
      },
    },
    {
      type: "Numeric",
      value: "1",
      range: [2122, 2123],
      loc: {
        start: {
          line: 71,
          column: 11,
        },
        end: {
          line: 71,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [2124, 2128],
      loc: {
        start: {
          line: 71,
          column: 13,
        },
        end: {
          line: 71,
          column: 17,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_complaints",
      range: [2129, 2144],
      loc: {
        start: {
          line: 71,
          column: 18,
        },
        end: {
          line: 71,
          column: 33,
        },
      },
    },
    {
      type: "Identifier",
      value: "uc",
      range: [2145, 2147],
      loc: {
        start: {
          line: 71,
          column: 34,
        },
        end: {
          line: 71,
          column: 36,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [2152, 2157],
      loc: {
        start: {
          line: 72,
          column: 4,
        },
        end: {
          line: 72,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "uc",
      range: [2158, 2160],
      loc: {
        start: {
          line: 72,
          column: 10,
        },
        end: {
          line: 72,
          column: 12,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2160, 2161],
      loc: {
        start: {
          line: 72,
          column: 12,
        },
        end: {
          line: 72,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [2161, 2168],
      loc: {
        start: {
          line: 72,
          column: 13,
        },
        end: {
          line: 72,
          column: 20,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2169, 2170],
      loc: {
        start: {
          line: 72,
          column: 21,
        },
        end: {
          line: 72,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [2171, 2172],
      loc: {
        start: {
          line: 72,
          column: 23,
        },
        end: {
          line: 72,
          column: 24,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2172, 2173],
      loc: {
        start: {
          line: 72,
          column: 24,
        },
        end: {
          line: 72,
          column: 25,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [2173, 2175],
      loc: {
        start: {
          line: 72,
          column: 25,
        },
        end: {
          line: 72,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "AND",
      range: [2180, 2183],
      loc: {
        start: {
          line: 73,
          column: 4,
        },
        end: {
          line: 73,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "uc",
      range: [2184, 2186],
      loc: {
        start: {
          line: 73,
          column: 8,
        },
        end: {
          line: 73,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2186, 2187],
      loc: {
        start: {
          line: 73,
          column: 10,
        },
        end: {
          line: 73,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [2187, 2193],
      loc: {
        start: {
          line: 73,
          column: 11,
        },
        end: {
          line: 73,
          column: 17,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2194, 2195],
      loc: {
        start: {
          line: 73,
          column: 18,
        },
        end: {
          line: 73,
          column: 19,
        },
      },
    },
    {
      type: "String",
      value: "'open'",
      range: [2196, 2202],
      loc: {
        start: {
          line: 73,
          column: 20,
        },
        end: {
          line: 73,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2203, 2204],
      loc: {
        start: {
          line: 74,
          column: 0,
        },
        end: {
          line: 74,
          column: 1,
        },
      },
    },
    {
      type: "Keyword",
      value: "AND",
      range: [2205, 2208],
      loc: {
        start: {
          line: 75,
          column: 0,
        },
        end: {
          line: 75,
          column: 3,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [2209, 2210],
      loc: {
        start: {
          line: 75,
          column: 4,
        },
        end: {
          line: 75,
          column: 5,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2210, 2211],
      loc: {
        start: {
          line: 75,
          column: 5,
        },
        end: {
          line: 75,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [2211, 2213],
      loc: {
        start: {
          line: 75,
          column: 6,
        },
        end: {
          line: 75,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "IN",
      range: [2214, 2216],
      loc: {
        start: {
          line: 75,
          column: 9,
        },
        end: {
          line: 75,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2217, 2218],
      loc: {
        start: {
          line: 75,
          column: 12,
        },
        end: {
          line: 75,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [2223, 2229],
      loc: {
        start: {
          line: 76,
          column: 4,
        },
        end: {
          line: 76,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "DISTINCT",
      range: [2230, 2238],
      loc: {
        start: {
          line: 76,
          column: 11,
        },
        end: {
          line: 76,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [2239, 2246],
      loc: {
        start: {
          line: 76,
          column: 20,
        },
        end: {
          line: 76,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [2251, 2255],
      loc: {
        start: {
          line: 77,
          column: 4,
        },
        end: {
          line: 77,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_items",
      range: [2256, 2267],
      loc: {
        start: {
          line: 77,
          column: 9,
        },
        end: {
          line: 77,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "oi",
      range: [2268, 2270],
      loc: {
        start: {
          line: 77,
          column: 21,
        },
        end: {
          line: 77,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "JOIN",
      range: [2275, 2279],
      loc: {
        start: {
          line: 78,
          column: 4,
        },
        end: {
          line: 78,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "products",
      range: [2280, 2288],
      loc: {
        start: {
          line: 78,
          column: 9,
        },
        end: {
          line: 78,
          column: 17,
        },
      },
    },
    {
      type: "Identifier",
      value: "p",
      range: [2289, 2290],
      loc: {
        start: {
          line: 78,
          column: 18,
        },
        end: {
          line: 78,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [2291, 2293],
      loc: {
        start: {
          line: 78,
          column: 20,
        },
        end: {
          line: 78,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "oi",
      range: [2294, 2296],
      loc: {
        start: {
          line: 78,
          column: 23,
        },
        end: {
          line: 78,
          column: 25,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2296, 2297],
      loc: {
        start: {
          line: 78,
          column: 25,
        },
        end: {
          line: 78,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "product_id",
      range: [2297, 2307],
      loc: {
        start: {
          line: 78,
          column: 26,
        },
        end: {
          line: 78,
          column: 36,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2308, 2309],
      loc: {
        start: {
          line: 78,
          column: 37,
        },
        end: {
          line: 78,
          column: 38,
        },
      },
    },
    {
      type: "Identifier",
      value: "p",
      range: [2310, 2311],
      loc: {
        start: {
          line: 78,
          column: 39,
        },
        end: {
          line: 78,
          column: 40,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2311, 2312],
      loc: {
        start: {
          line: 78,
          column: 40,
        },
        end: {
          line: 78,
          column: 41,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [2312, 2314],
      loc: {
        start: {
          line: 78,
          column: 41,
        },
        end: {
          line: 78,
          column: 43,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [2319, 2324],
      loc: {
        start: {
          line: 79,
          column: 4,
        },
        end: {
          line: 79,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "p",
      range: [2325, 2326],
      loc: {
        start: {
          line: 79,
          column: 10,
        },
        end: {
          line: 79,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2326, 2327],
      loc: {
        start: {
          line: 79,
          column: 11,
        },
        end: {
          line: 79,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "category_id",
      range: [2327, 2338],
      loc: {
        start: {
          line: 79,
          column: 12,
        },
        end: {
          line: 79,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "IN",
      range: [2339, 2341],
      loc: {
        start: {
          line: 79,
          column: 24,
        },
        end: {
          line: 79,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2342, 2343],
      loc: {
        start: {
          line: 79,
          column: 27,
        },
        end: {
          line: 79,
          column: 28,
        },
      },
    },
    {
      type: "Numeric",
      value: "1",
      range: [2343, 2344],
      loc: {
        start: {
          line: 79,
          column: 28,
        },
        end: {
          line: 79,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2344, 2345],
      loc: {
        start: {
          line: 79,
          column: 29,
        },
        end: {
          line: 79,
          column: 30,
        },
      },
    },
    {
      type: "Numeric",
      value: "2",
      range: [2346, 2347],
      loc: {
        start: {
          line: 79,
          column: 31,
        },
        end: {
          line: 79,
          column: 32,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2347, 2348],
      loc: {
        start: {
          line: 79,
          column: 32,
        },
        end: {
          line: 79,
          column: 33,
        },
      },
    },
    {
      type: "Numeric",
      value: "3",
      range: [2349, 2350],
      loc: {
        start: {
          line: 79,
          column: 34,
        },
        end: {
          line: 79,
          column: 35,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2350, 2351],
      loc: {
        start: {
          line: 79,
          column: 35,
        },
        end: {
          line: 79,
          column: 36,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2352, 2353],
      loc: {
        start: {
          line: 80,
          column: 0,
        },
        end: {
          line: 80,
          column: 1,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2353, 2354],
      loc: {
        start: {
          line: 80,
          column: 1,
        },
        end: {
          line: 80,
          column: 2,
        },
      },
    },
  ],
  comments: [],
} satisfies Program;
