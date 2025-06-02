import type { Program } from "../../../src/ast.ts";

export default {
  type: "Program",
  range: [0, 4102],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 131,
      column: 31,
    },
  },
  body: [
    {
      type: "CreateExtensionStmt",
      extname: "uuid-ossp",
      if_not_exists: true,
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
      type: "CreateExtensionStmt",
      extname: "hstore",
      if_not_exists: true,
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
      type: "CreateExtensionStmt",
      extname: "ltree",
      if_not_exists: true,
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
      type: "CreateExtensionStmt",
      extname: "pg_trgm",
      if_not_exists: true,
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
      type: "CreateExtensionStmt",
      extname: "postgis",
      if_not_exists: true,
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
      type: "CreateStmt",
      relation: {
        relname: "products",
        inh: true,
        relpersistence: "p",
        range: [288, 296],
        loc: {
          start: {
            line: 10,
            column: 13,
          },
          end: {
            line: 10,
            column: 21,
          },
        },
      },
      tableElts: [
        {
          type: "ColumnDef",
          colname: "id",
          typeName: {
            "0": {
              type: "String",
              sval: "uuid",
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
            range: [306, 310],
            loc: {
              start: {
                line: 11,
                column: 7,
              },
              end: {
                line: 11,
                column: 11,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_PRIMARY",
              range: [311, 318],
              loc: {
                start: {
                  line: 11,
                  column: 12,
                },
                end: {
                  line: 11,
                  column: 19,
                },
              },
            },
            {
              type: "Constraint",
              contype: "CONSTR_DEFAULT",
              raw_expr: {
                type: "FuncCall",
                funcname: [
                  {
                    type: "String",
                    sval: "uuid_generate_v4",
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
                funcformat: "COERCE_EXPLICIT_CALL",
                range: [331, 347],
                loc: {
                  start: {
                    line: 11,
                    column: 32,
                  },
                  end: {
                    line: 11,
                    column: 48,
                  },
                },
              },
              range: [323, 330],
              loc: {
                start: {
                  line: 11,
                  column: 24,
                },
                end: {
                  line: 11,
                  column: 31,
                },
              },
            },
          ],
          range: [303, 305],
          loc: {
            start: {
              line: 11,
              column: 4,
            },
            end: {
              line: 11,
              column: 6,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "name",
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
              sval: "varchar",
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
            typmods: [
              {
                type: "A_Const",
                ival: {
                  ival: 255,
                },
                range: [368, 371],
                loc: {
                  start: {
                    line: 12,
                    column: 17,
                  },
                  end: {
                    line: 12,
                    column: 20,
                  },
                },
              },
            ],
            typemod: -1,
            type: "names",
            range: [360, 367],
            loc: {
              start: {
                line: 12,
                column: 9,
              },
              end: {
                line: 12,
                column: 16,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_NOTNULL",
              range: [373, 376],
              loc: {
                start: {
                  line: 12,
                  column: 22,
                },
                end: {
                  line: 12,
                  column: 25,
                },
              },
            },
          ],
          range: [355, 359],
          loc: {
            start: {
              line: 12,
              column: 4,
            },
            end: {
              line: 12,
              column: 8,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "sku",
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
              sval: "varchar",
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
            typmods: [
              {
                type: "A_Const",
                ival: {
                  ival: 100,
                },
                range: [399, 402],
                loc: {
                  start: {
                    line: 13,
                    column: 16,
                  },
                  end: {
                    line: 13,
                    column: 19,
                  },
                },
              },
            ],
            typemod: -1,
            type: "names",
            range: [391, 398],
            loc: {
              start: {
                line: 13,
                column: 8,
              },
              end: {
                line: 13,
                column: 15,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_UNIQUE",
              range: [404, 410],
              loc: {
                start: {
                  line: 13,
                  column: 21,
                },
                end: {
                  line: 13,
                  column: 27,
                },
              },
            },
          ],
          range: [387, 390],
          loc: {
            start: {
              line: 13,
              column: 4,
            },
            end: {
              line: 13,
              column: 7,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "metadata",
          typeName: {
            "0": {
              type: "String",
              sval: "hstore",
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
            range: [425, 431],
            loc: {
              start: {
                line: 14,
                column: 13,
              },
              end: {
                line: 14,
                column: 19,
              },
            },
          },
          is_local: true,
          range: [416, 424],
          loc: {
            start: {
              line: 14,
              column: 4,
            },
            end: {
              line: 14,
              column: 12,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "location",
          typeName: {
            "0": {
              type: "String",
              sval: "geometry",
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
            typmods: [
              {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "point",
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
                range: [455, 460],
                loc: {
                  start: {
                    line: 15,
                    column: 22,
                  },
                  end: {
                    line: 15,
                    column: 27,
                  },
                },
              },
              {
                type: "A_Const",
                ival: {
                  ival: 4326,
                },
                range: [462, 466],
                loc: {
                  start: {
                    line: 15,
                    column: 29,
                  },
                  end: {
                    line: 15,
                    column: 33,
                  },
                },
              },
            ],
            typemod: -1,
            type: "names",
            range: [446, 454],
            loc: {
              start: {
                line: 15,
                column: 13,
              },
              end: {
                line: 15,
                column: 21,
              },
            },
          },
          is_local: true,
          range: [437, 445],
          loc: {
            start: {
              line: 15,
              column: 4,
            },
            end: {
              line: 15,
              column: 12,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "created_at",
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
              sval: "timestamp",
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
            range: [484, 493],
            loc: {
              start: {
                line: 16,
                column: 15,
              },
              end: {
                line: 16,
                column: 24,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_DEFAULT",
              raw_expr: {
                type: "FuncCall",
                funcname: [
                  {
                    type: "String",
                    sval: "now",
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
                funcformat: "COERCE_EXPLICIT_CALL",
                range: [502, 505],
                loc: {
                  start: {
                    line: 16,
                    column: 33,
                  },
                  end: {
                    line: 16,
                    column: 36,
                  },
                },
              },
              range: [494, 501],
              loc: {
                start: {
                  line: 16,
                  column: 25,
                },
                end: {
                  line: 16,
                  column: 32,
                },
              },
            },
          ],
          range: [473, 483],
          loc: {
            start: {
              line: 16,
              column: 4,
            },
            end: {
              line: 16,
              column: 14,
            },
          },
        },
      ],
      oncommit: "ONCOMMIT_NOOP",
      range: [0, 505],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 16,
          column: 36,
        },
      },
    },
    {
      type: "InsertStmt",
      relation: {
        relname: "products",
        inh: true,
        relpersistence: "p",
        range: [545, 553],
        loc: {
          start: {
            line: 20,
            column: 12,
          },
          end: {
            line: 20,
            column: 20,
          },
        },
      },
      cols: [
        {
          type: "ResTarget",
          name: "name",
          range: [555, 559],
          loc: {
            start: {
              line: 20,
              column: 22,
            },
            end: {
              line: 20,
              column: 26,
            },
          },
        },
        {
          type: "ResTarget",
          name: "sku",
          range: [561, 564],
          loc: {
            start: {
              line: 20,
              column: 28,
            },
            end: {
              line: 20,
              column: 31,
            },
          },
        },
        {
          type: "ResTarget",
          name: "metadata",
          range: [566, 574],
          loc: {
            start: {
              line: 20,
              column: 33,
            },
            end: {
              line: 20,
              column: 41,
            },
          },
        },
        {
          type: "ResTarget",
          name: "location",
          range: [576, 584],
          loc: {
            start: {
              line: 20,
              column: 43,
            },
            end: {
              line: 20,
              column: 51,
            },
          },
        },
      ],
      selectStmt: {
        type: "SelectStmt",
        valuesLists: [
          {
            type: "List",
            items: [
              {
                type: "A_Const",
                sval: {
                  sval: "Laptop",
                },
                range: [595, 603],
                loc: {
                  start: {
                    line: 21,
                    column: 1,
                  },
                  end: {
                    line: 21,
                    column: 9,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: "LAPTOP001",
                },
                range: [605, 616],
                loc: {
                  start: {
                    line: 21,
                    column: 11,
                  },
                  end: {
                    line: 21,
                    column: 22,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: '"brand"=>"Dell", "model"=>"XPS13", "color"=>"Silver"',
                },
                range: [618, 672],
                loc: {
                  start: {
                    line: 21,
                    column: 24,
                  },
                  end: {
                    line: 21,
                    column: 78,
                  },
                },
              },
              {
                type: "FuncCall",
                funcname: [
                  {
                    type: "String",
                    sval: "st_geomfromtext",
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
                    sval: {
                      sval: "POINT(-74.006 40.7128)",
                    },
                    range: [690, 714],
                    loc: {
                      start: {
                        line: 21,
                        column: 96,
                      },
                      end: {
                        line: 21,
                        column: 120,
                      },
                    },
                  },
                  {
                    type: "A_Const",
                    ival: {
                      ival: 4326,
                    },
                    range: [716, 720],
                    loc: {
                      start: {
                        line: 21,
                        column: 122,
                      },
                      end: {
                        line: 21,
                        column: 126,
                      },
                    },
                  },
                ],
                funcformat: "COERCE_EXPLICIT_CALL",
                range: [674, 689],
                loc: {
                  start: {
                    line: 21,
                    column: 80,
                  },
                  end: {
                    line: 21,
                    column: 95,
                  },
                },
              },
            ],
            range: [0, 720],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 21,
                column: 126,
              },
            },
          },
          {
            type: "List",
            items: [
              {
                type: "A_Const",
                sval: {
                  sval: "Mouse",
                },
                range: [725, 732],
                loc: {
                  start: {
                    line: 22,
                    column: 1,
                  },
                  end: {
                    line: 22,
                    column: 8,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: "MOUSE001",
                },
                range: [734, 744],
                loc: {
                  start: {
                    line: 22,
                    column: 10,
                  },
                  end: {
                    line: 22,
                    column: 20,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: '"brand"=>"Logitech", "wireless"=>"true", "dpi"=>"1600"',
                },
                range: [746, 802],
                loc: {
                  start: {
                    line: 22,
                    column: 22,
                  },
                  end: {
                    line: 22,
                    column: 78,
                  },
                },
              },
              {
                type: "FuncCall",
                funcname: [
                  {
                    type: "String",
                    sval: "st_geomfromtext",
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
                    sval: {
                      sval: "POINT(-73.935 40.730)",
                    },
                    range: [820, 843],
                    loc: {
                      start: {
                        line: 22,
                        column: 96,
                      },
                      end: {
                        line: 22,
                        column: 119,
                      },
                    },
                  },
                  {
                    type: "A_Const",
                    ival: {
                      ival: 4326,
                    },
                    range: [845, 849],
                    loc: {
                      start: {
                        line: 22,
                        column: 121,
                      },
                      end: {
                        line: 22,
                        column: 125,
                      },
                    },
                  },
                ],
                funcformat: "COERCE_EXPLICIT_CALL",
                range: [804, 819],
                loc: {
                  start: {
                    line: 22,
                    column: 80,
                  },
                  end: {
                    line: 22,
                    column: 95,
                  },
                },
              },
            ],
            range: [0, 849],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 22,
                column: 125,
              },
            },
          },
        ],
        limitOption: "LIMIT_OPTION_DEFAULT",
        op: "SETOP_NONE",
        range: [0, 849],
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 22,
            column: 125,
          },
        },
      },
      override: "OVERRIDING_NOT_SET",
      range: [0, 849],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 22,
          column: 125,
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
            range: [861, 865],
            loc: {
              start: {
                line: 24,
                column: 7,
              },
              end: {
                line: 24,
                column: 11,
              },
            },
          },
          range: [861, 865],
          loc: {
            start: {
              line: 24,
              column: 7,
            },
            end: {
              line: 24,
              column: 11,
            },
          },
        },
        {
          type: "ResTarget",
          name: "brand",
          val: {
            type: "A_Expr",
            kind: "AEXPR_OP",
            name: [
              {
                type: "String",
                sval: "->",
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
                  sval: "metadata",
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
              range: [867, 875],
              loc: {
                start: {
                  line: 24,
                  column: 13,
                },
                end: {
                  line: 24,
                  column: 21,
                },
              },
            },
            rexpr: {
              type: "A_Const",
              sval: {
                sval: "brand",
              },
              range: [877, 884],
              loc: {
                start: {
                  line: 24,
                  column: 23,
                },
                end: {
                  line: 24,
                  column: 30,
                },
              },
            },
            range: [875, 876],
            loc: {
              start: {
                line: 24,
                column: 21,
              },
              end: {
                line: 24,
                column: 22,
              },
            },
          },
          range: [867, 875],
          loc: {
            start: {
              line: 24,
              column: 13,
            },
            end: {
              line: 24,
              column: 21,
            },
          },
        },
        {
          type: "ResTarget",
          name: "model",
          val: {
            type: "A_Expr",
            kind: "AEXPR_OP",
            name: [
              {
                type: "String",
                sval: "->",
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
                  sval: "metadata",
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
              range: [895, 903],
              loc: {
                start: {
                  line: 24,
                  column: 41,
                },
                end: {
                  line: 24,
                  column: 49,
                },
              },
            },
            rexpr: {
              type: "A_Const",
              sval: {
                sval: "model",
              },
              range: [905, 912],
              loc: {
                start: {
                  line: 24,
                  column: 51,
                },
                end: {
                  line: 24,
                  column: 58,
                },
              },
            },
            range: [903, 904],
            loc: {
              start: {
                line: 24,
                column: 49,
              },
              end: {
                line: 24,
                column: 50,
              },
            },
          },
          range: [895, 903],
          loc: {
            start: {
              line: 24,
              column: 41,
            },
            end: {
              line: 24,
              column: 49,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "products",
          inh: true,
          relpersistence: "p",
          range: [927, 935],
          loc: {
            start: {
              line: 25,
              column: 5,
            },
            end: {
              line: 25,
              column: 13,
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
                sval: "?",
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
                  sval: "metadata",
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
              range: [942, 950],
              loc: {
                start: {
                  line: 26,
                  column: 6,
                },
                end: {
                  line: 26,
                  column: 14,
                },
              },
            },
            rexpr: {
              type: "A_Const",
              sval: {
                sval: "brand",
              },
              range: [953, 960],
              loc: {
                start: {
                  line: 26,
                  column: 17,
                },
                end: {
                  line: 26,
                  column: 24,
                },
              },
            },
            range: [951, 951],
            loc: {
              start: {
                line: 26,
                column: 15,
              },
              end: {
                line: 26,
                column: 15,
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
              type: "A_Expr",
              kind: "AEXPR_OP",
              name: [
                {
                  type: "String",
                  sval: "->",
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
                    sval: "metadata",
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
                range: [965, 973],
                loc: {
                  start: {
                    line: 26,
                    column: 29,
                  },
                  end: {
                    line: 26,
                    column: 37,
                  },
                },
              },
              rexpr: {
                type: "A_Const",
                sval: {
                  sval: "brand",
                },
                range: [975, 982],
                loc: {
                  start: {
                    line: 26,
                    column: 39,
                  },
                  end: {
                    line: 26,
                    column: 46,
                  },
                },
              },
              range: [973, 974],
              loc: {
                start: {
                  line: 26,
                  column: 37,
                },
                end: {
                  line: 26,
                  column: 38,
                },
              },
            },
            rexpr: {
              type: "A_Const",
              sval: {
                sval: "Dell",
              },
              range: [985, 991],
              loc: {
                start: {
                  line: 26,
                  column: 49,
                },
                end: {
                  line: 26,
                  column: 55,
                },
              },
            },
            range: [983, 984],
            loc: {
              start: {
                line: 26,
                column: 47,
              },
              end: {
                line: 26,
                column: 48,
              },
            },
          },
        ],
        range: [961, 964],
        loc: {
          start: {
            line: 26,
            column: 25,
          },
          end: {
            line: 26,
            column: 28,
          },
        },
      },
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 991],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 26,
          column: 55,
        },
      },
    },
    {
      type: "CreateStmt",
      relation: {
        relname: "categories",
        inh: true,
        relpersistence: "p",
        range: [1038, 1048],
        loc: {
          start: {
            line: 29,
            column: 13,
          },
          end: {
            line: 29,
            column: 23,
          },
        },
      },
      tableElts: [
        {
          type: "ColumnDef",
          colname: "id",
          typeName: {
            "0": {
              type: "String",
              sval: "serial",
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
            range: [1058, 1064],
            loc: {
              start: {
                line: 30,
                column: 7,
              },
              end: {
                line: 30,
                column: 13,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_PRIMARY",
              range: [1065, 1072],
              loc: {
                start: {
                  line: 30,
                  column: 14,
                },
                end: {
                  line: 30,
                  column: 21,
                },
              },
            },
          ],
          range: [1055, 1057],
          loc: {
            start: {
              line: 30,
              column: 4,
            },
            end: {
              line: 30,
              column: 6,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "path",
          typeName: {
            "0": {
              type: "String",
              sval: "ltree",
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
            range: [1087, 1092],
            loc: {
              start: {
                line: 31,
                column: 9,
              },
              end: {
                line: 31,
                column: 14,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_NOTNULL",
              range: [1093, 1096],
              loc: {
                start: {
                  line: 31,
                  column: 15,
                },
                end: {
                  line: 31,
                  column: 18,
                },
              },
            },
          ],
          range: [1082, 1086],
          loc: {
            start: {
              line: 31,
              column: 4,
            },
            end: {
              line: 31,
              column: 8,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "name",
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
              sval: "varchar",
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
            typmods: [
              {
                type: "A_Const",
                ival: {
                  ival: 255,
                },
                range: [1120, 1123],
                loc: {
                  start: {
                    line: 32,
                    column: 17,
                  },
                  end: {
                    line: 32,
                    column: 20,
                  },
                },
              },
            ],
            typemod: -1,
            type: "names",
            range: [1112, 1119],
            loc: {
              start: {
                line: 32,
                column: 9,
              },
              end: {
                line: 32,
                column: 16,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_NOTNULL",
              range: [1125, 1128],
              loc: {
                start: {
                  line: 32,
                  column: 22,
                },
                end: {
                  line: 32,
                  column: 25,
                },
              },
            },
          ],
          range: [1107, 1111],
          loc: {
            start: {
              line: 32,
              column: 4,
            },
            end: {
              line: 32,
              column: 8,
            },
          },
        },
      ],
      oncommit: "ONCOMMIT_NOOP",
      range: [0, 1128],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 32,
          column: 25,
        },
      },
    },
    {
      type: "InsertStmt",
      relation: {
        relname: "categories",
        inh: true,
        relpersistence: "p",
        range: [1150, 1160],
        loc: {
          start: {
            line: 35,
            column: 12,
          },
          end: {
            line: 35,
            column: 22,
          },
        },
      },
      cols: [
        {
          type: "ResTarget",
          name: "path",
          range: [1162, 1166],
          loc: {
            start: {
              line: 35,
              column: 24,
            },
            end: {
              line: 35,
              column: 28,
            },
          },
        },
        {
          type: "ResTarget",
          name: "name",
          range: [1168, 1172],
          loc: {
            start: {
              line: 35,
              column: 30,
            },
            end: {
              line: 35,
              column: 34,
            },
          },
        },
      ],
      selectStmt: {
        type: "SelectStmt",
        valuesLists: [
          {
            type: "List",
            items: [
              {
                type: "A_Const",
                sval: {
                  sval: "electronics",
                },
                range: [1182, 1195],
                loc: {
                  start: {
                    line: 36,
                    column: 1,
                  },
                  end: {
                    line: 36,
                    column: 14,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: "Electronics",
                },
                range: [1197, 1210],
                loc: {
                  start: {
                    line: 36,
                    column: 16,
                  },
                  end: {
                    line: 36,
                    column: 29,
                  },
                },
              },
            ],
            range: [0, 1210],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 36,
                column: 29,
              },
            },
          },
          {
            type: "List",
            items: [
              {
                type: "A_Const",
                sval: {
                  sval: "electronics.computers",
                },
                range: [1214, 1237],
                loc: {
                  start: {
                    line: 37,
                    column: 1,
                  },
                  end: {
                    line: 37,
                    column: 24,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: "Computers",
                },
                range: [1239, 1250],
                loc: {
                  start: {
                    line: 37,
                    column: 26,
                  },
                  end: {
                    line: 37,
                    column: 37,
                  },
                },
              },
            ],
            range: [0, 1250],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 37,
                column: 37,
              },
            },
          },
          {
            type: "List",
            items: [
              {
                type: "A_Const",
                sval: {
                  sval: "electronics.computers.laptops",
                },
                range: [1254, 1285],
                loc: {
                  start: {
                    line: 38,
                    column: 1,
                  },
                  end: {
                    line: 38,
                    column: 32,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: "Laptops",
                },
                range: [1287, 1296],
                loc: {
                  start: {
                    line: 38,
                    column: 34,
                  },
                  end: {
                    line: 38,
                    column: 43,
                  },
                },
              },
            ],
            range: [0, 1296],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 38,
                column: 43,
              },
            },
          },
          {
            type: "List",
            items: [
              {
                type: "A_Const",
                sval: {
                  sval: "electronics.computers.desktops",
                },
                range: [1300, 1332],
                loc: {
                  start: {
                    line: 39,
                    column: 1,
                  },
                  end: {
                    line: 39,
                    column: 33,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: "Desktops",
                },
                range: [1334, 1344],
                loc: {
                  start: {
                    line: 39,
                    column: 35,
                  },
                  end: {
                    line: 39,
                    column: 45,
                  },
                },
              },
            ],
            range: [0, 1344],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 39,
                column: 45,
              },
            },
          },
          {
            type: "List",
            items: [
              {
                type: "A_Const",
                sval: {
                  sval: "electronics.accessories",
                },
                range: [1348, 1373],
                loc: {
                  start: {
                    line: 40,
                    column: 1,
                  },
                  end: {
                    line: 40,
                    column: 26,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: "Accessories",
                },
                range: [1375, 1388],
                loc: {
                  start: {
                    line: 40,
                    column: 28,
                  },
                  end: {
                    line: 40,
                    column: 41,
                  },
                },
              },
            ],
            range: [0, 1388],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 40,
                column: 41,
              },
            },
          },
        ],
        limitOption: "LIMIT_OPTION_DEFAULT",
        op: "SETOP_NONE",
        range: [0, 1388],
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 40,
            column: 41,
          },
        },
      },
      override: "OVERRIDING_NOT_SET",
      range: [0, 1388],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 40,
          column: 41,
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
            range: [1416, 1417],
            loc: {
              start: {
                line: 43,
                column: 7,
              },
              end: {
                line: 43,
                column: 8,
              },
            },
          },
          range: [1416, 1417],
          loc: {
            start: {
              line: 43,
              column: 7,
            },
            end: {
              line: 43,
              column: 8,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "categories",
          inh: true,
          relpersistence: "p",
          range: [1423, 1433],
          loc: {
            start: {
              line: 43,
              column: 14,
            },
            end: {
              line: 43,
              column: 24,
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
            sval: "~",
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
          range: [1440, 1444],
          loc: {
            start: {
              line: 43,
              column: 31,
            },
            end: {
              line: 43,
              column: 35,
            },
          },
        },
        rexpr: {
          type: "A_Const",
          sval: {
            sval: "*.computers.*",
          },
          range: [1447, 1462],
          loc: {
            start: {
              line: 43,
              column: 38,
            },
            end: {
              line: 43,
              column: 53,
            },
          },
        },
        range: [1445, 1445],
        loc: {
          start: {
            line: 43,
            column: 36,
          },
          end: {
            line: 43,
            column: 36,
          },
        },
      },
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 1462],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 43,
          column: 53,
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
            range: [1471, 1472],
            loc: {
              start: {
                line: 44,
                column: 7,
              },
              end: {
                line: 44,
                column: 8,
              },
            },
          },
          range: [1471, 1472],
          loc: {
            start: {
              line: 44,
              column: 7,
            },
            end: {
              line: 44,
              column: 8,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "categories",
          inh: true,
          relpersistence: "p",
          range: [1478, 1488],
          loc: {
            start: {
              line: 44,
              column: 14,
            },
            end: {
              line: 44,
              column: 24,
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
            sval: "<@",
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
          range: [1495, 1499],
          loc: {
            start: {
              line: 44,
              column: 31,
            },
            end: {
              line: 44,
              column: 35,
            },
          },
        },
        rexpr: {
          type: "A_Const",
          sval: {
            sval: "electronics.computers",
          },
          range: [1503, 1526],
          loc: {
            start: {
              line: 44,
              column: 39,
            },
            end: {
              line: 44,
              column: 62,
            },
          },
        },
        range: [1500, 1501],
        loc: {
          start: {
            line: 44,
            column: 36,
          },
          end: {
            line: 44,
            column: 37,
          },
        },
      },
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 1526],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 44,
          column: 62,
        },
      },
    },
    {
      type: "IndexStmt",
      idxname: "idx_products_name_gin",
      relation: {
        relname: "products",
        inh: true,
        relpersistence: "p",
        range: [1600, 1608],
        loc: {
          start: {
            line: 47,
            column: 38,
          },
          end: {
            line: 47,
            column: 46,
          },
        },
      },
      accessMethod: "gin",
      indexParams: [
        {
          type: "IndexElem",
          name: "name",
          opclass: [
            {
              type: "String",
              sval: "gin_trgm_ops",
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
          ordering: "SORTBY_DEFAULT",
          nulls_ordering: "SORTBY_NULLS_DEFAULT",
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
      range: [0, 1608],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 47,
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
            range: [1648, 1652],
            loc: {
              start: {
                line: 49,
                column: 7,
              },
              end: {
                line: 49,
                column: 11,
              },
            },
          },
          range: [1648, 1652],
          loc: {
            start: {
              line: 49,
              column: 7,
            },
            end: {
              line: 49,
              column: 11,
            },
          },
        },
        {
          type: "ResTarget",
          name: "sim",
          val: {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "similarity",
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
                range: [1665, 1669],
                loc: {
                  start: {
                    line: 49,
                    column: 24,
                  },
                  end: {
                    line: 49,
                    column: 28,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: "laptop",
                },
                range: [1671, 1679],
                loc: {
                  start: {
                    line: 49,
                    column: 30,
                  },
                  end: {
                    line: 49,
                    column: 38,
                  },
                },
              },
            ],
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [1654, 1664],
            loc: {
              start: {
                line: 49,
                column: 13,
              },
              end: {
                line: 49,
                column: 23,
              },
            },
          },
          range: [1654, 1664],
          loc: {
            start: {
              line: 49,
              column: 13,
            },
            end: {
              line: 49,
              column: 23,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "products",
          inh: true,
          relpersistence: "p",
          range: [1693, 1701],
          loc: {
            start: {
              line: 50,
              column: 5,
            },
            end: {
              line: 50,
              column: 13,
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
            sval: "%",
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
          range: [1708, 1712],
          loc: {
            start: {
              line: 51,
              column: 6,
            },
            end: {
              line: 51,
              column: 10,
            },
          },
        },
        rexpr: {
          type: "A_Const",
          sval: {
            sval: "laptop",
          },
          range: [1715, 1723],
          loc: {
            start: {
              line: 51,
              column: 13,
            },
            end: {
              line: 51,
              column: 21,
            },
          },
        },
        range: [1713, 1714],
        loc: {
          start: {
            line: 51,
            column: 11,
          },
          end: {
            line: 51,
            column: 12,
          },
        },
      },
      sortClause: [
        {
          type: "SortBy",
          node: {
            type: "ColumnRef",
            fields: [
              {
                type: "String",
                sval: "sim",
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
            range: [1733, 1736],
            loc: {
              start: {
                line: 52,
                column: 9,
              },
              end: {
                line: 52,
                column: 12,
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
      ],
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [-1, 1736],
      loc: {
        start: {
          line: 1,
          column: -1,
        },
        end: {
          line: 52,
          column: 12,
        },
      },
    },
    {
      type: "SelectStmt",
      targetList: [
        {
          type: "ResTarget",
          name: "product1",
          val: {
            type: "ColumnRef",
            fields: [
              {
                type: "String",
                sval: "p1",
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
            range: [1783, 1785],
            loc: {
              start: {
                line: 56,
                column: 4,
              },
              end: {
                line: 56,
                column: 6,
              },
            },
          },
          range: [1783, 1785],
          loc: {
            start: {
              line: 56,
              column: 4,
            },
            end: {
              line: 56,
              column: 6,
            },
          },
        },
        {
          type: "ResTarget",
          name: "product2",
          val: {
            type: "ColumnRef",
            fields: [
              {
                type: "String",
                sval: "p2",
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
            range: [1808, 1810],
            loc: {
              start: {
                line: 57,
                column: 4,
              },
              end: {
                line: 57,
                column: 6,
              },
            },
          },
          range: [1808, 1810],
          loc: {
            start: {
              line: 57,
              column: 4,
            },
            end: {
              line: 57,
              column: 6,
            },
          },
        },
        {
          type: "ResTarget",
          name: "distance_meters",
          val: {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "st_distance",
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
                    sval: "p1",
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
                    sval: "location",
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
                range: [1845, 1847],
                loc: {
                  start: {
                    line: 58,
                    column: 16,
                  },
                  end: {
                    line: 58,
                    column: 18,
                  },
                },
              },
              {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "p2",
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
                    sval: "location",
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
                range: [1858, 1860],
                loc: {
                  start: {
                    line: 58,
                    column: 29,
                  },
                  end: {
                    line: 58,
                    column: 31,
                  },
                },
              },
            ],
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [1833, 1844],
            loc: {
              start: {
                line: 58,
                column: 4,
              },
              end: {
                line: 58,
                column: 15,
              },
            },
          },
          range: [1833, 1844],
          loc: {
            start: {
              line: 58,
              column: 4,
            },
            end: {
              line: 58,
              column: 15,
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
            relname: "products",
            inh: true,
            relpersistence: "p",
            alias: {
              aliasname: "p1",
            },
            range: [1895, 1903],
            loc: {
              start: {
                line: 59,
                column: 5,
              },
              end: {
                line: 59,
                column: 13,
              },
            },
          },
          rarg: {
            type: "RangeVar",
            relname: "products",
            inh: true,
            relpersistence: "p",
            alias: {
              aliasname: "p2",
            },
            range: [1918, 1926],
            loc: {
              start: {
                line: 60,
                column: 11,
              },
              end: {
                line: 60,
                column: 19,
              },
            },
          },
          range: [0, 1926],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 60,
              column: 19,
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
                sval: "<>",
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
                  sval: "p1",
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
              range: [1936, 1938],
              loc: {
                start: {
                  line: 61,
                  column: 6,
                },
                end: {
                  line: 61,
                  column: 8,
                },
              },
            },
            rexpr: {
              type: "ColumnRef",
              fields: [
                {
                  type: "String",
                  sval: "p2",
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
              range: [1945, 1947],
              loc: {
                start: {
                  line: 61,
                  column: 15,
                },
                end: {
                  line: 61,
                  column: 17,
                },
              },
            },
            range: [1942, 1944],
            loc: {
              start: {
                line: 61,
                column: 12,
              },
              end: {
                line: 61,
                column: 14,
              },
            },
          },
          {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "st_dwithin",
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
                    sval: "p1",
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
                    sval: "location",
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
                range: [1966, 1968],
                loc: {
                  start: {
                    line: 62,
                    column: 15,
                  },
                  end: {
                    line: 62,
                    column: 17,
                  },
                },
              },
              {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "p2",
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
                    sval: "location",
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
                range: [1979, 1981],
                loc: {
                  start: {
                    line: 62,
                    column: 28,
                  },
                  end: {
                    line: 62,
                    column: 30,
                  },
                },
              },
              {
                type: "A_Const",
                ival: {
                  ival: 1000,
                },
                range: [1992, 1996],
                loc: {
                  start: {
                    line: 62,
                    column: 41,
                  },
                  end: {
                    line: 62,
                    column: 45,
                  },
                },
              },
            ],
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [1955, 1965],
            loc: {
              start: {
                line: 62,
                column: 4,
              },
              end: {
                line: 62,
                column: 14,
              },
            },
          },
        ],
        range: [1951, 1954],
        loc: {
          start: {
            line: 62,
            column: 0,
          },
          end: {
            line: 62,
            column: 3,
          },
        },
      },
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 1996],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 62,
          column: 45,
        },
      },
    },
    {
      type: "CreateStmt",
      relation: {
        relname: "user_preferences",
        inh: true,
        relpersistence: "p",
        range: [2056, 2072],
        loc: {
          start: {
            line: 65,
            column: 13,
          },
          end: {
            line: 65,
            column: 29,
          },
        },
      },
      tableElts: [
        {
          type: "ColumnDef",
          colname: "user_id",
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
              sval: "int4",
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
            range: [2087, 2094],
            loc: {
              start: {
                line: 66,
                column: 12,
              },
              end: {
                line: 66,
                column: 19,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_PRIMARY",
              range: [2095, 2102],
              loc: {
                start: {
                  line: 66,
                  column: 20,
                },
                end: {
                  line: 66,
                  column: 27,
                },
              },
            },
          ],
          range: [2079, 2086],
          loc: {
            start: {
              line: 66,
              column: 4,
            },
            end: {
              line: 66,
              column: 11,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "settings",
          typeName: {
            "0": {
              type: "String",
              sval: "jsonb",
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
            range: [2121, 2126],
            loc: {
              start: {
                line: 67,
                column: 13,
              },
              end: {
                line: 67,
                column: 18,
              },
            },
          },
          is_local: true,
          range: [2112, 2120],
          loc: {
            start: {
              line: 67,
              column: 4,
            },
            end: {
              line: 67,
              column: 12,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "tags",
          typeName: {
            "0": {
              type: "String",
              sval: "text",
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
            arrayBounds: [
              {
                type: "Integer",
                ival: -1,
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
            type: "names",
            range: [2137, 2141],
            loc: {
              start: {
                line: 68,
                column: 9,
              },
              end: {
                line: 68,
                column: 13,
              },
            },
          },
          is_local: true,
          range: [2132, 2136],
          loc: {
            start: {
              line: 68,
              column: 4,
            },
            end: {
              line: 68,
              column: 8,
            },
          },
        },
      ],
      oncommit: "ONCOMMIT_NOOP",
      range: [0, 2141],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 68,
          column: 13,
        },
      },
    },
    {
      type: "InsertStmt",
      relation: {
        relname: "user_preferences",
        inh: true,
        relpersistence: "p",
        range: [2160, 2176],
        loc: {
          start: {
            line: 71,
            column: 12,
          },
          end: {
            line: 71,
            column: 28,
          },
        },
      },
      cols: [
        {
          type: "ResTarget",
          name: "user_id",
          range: [2178, 2185],
          loc: {
            start: {
              line: 71,
              column: 30,
            },
            end: {
              line: 71,
              column: 37,
            },
          },
        },
        {
          type: "ResTarget",
          name: "settings",
          range: [2187, 2195],
          loc: {
            start: {
              line: 71,
              column: 39,
            },
            end: {
              line: 71,
              column: 47,
            },
          },
        },
        {
          type: "ResTarget",
          name: "tags",
          range: [2197, 2201],
          loc: {
            start: {
              line: 71,
              column: 49,
            },
            end: {
              line: 71,
              column: 53,
            },
          },
        },
      ],
      selectStmt: {
        type: "SelectStmt",
        valuesLists: [
          {
            type: "List",
            items: [
              {
                type: "A_Const",
                ival: {
                  ival: 1,
                },
                range: [2211, 2212],
                loc: {
                  start: {
                    line: 72,
                    column: 1,
                  },
                  end: {
                    line: 72,
                    column: 2,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: '{"theme": "dark", "language": "en", "notifications": {"email": true, "push": false}}',
                },
                range: [2214, 2300],
                loc: {
                  start: {
                    line: 72,
                    column: 4,
                  },
                  end: {
                    line: 72,
                    column: 90,
                  },
                },
              },
              {
                type: "A_ArrayExpr",
                elements: [
                  {
                    type: "A_Const",
                    sval: {
                      sval: "premium",
                    },
                    range: [2308, 2317],
                    loc: {
                      start: {
                        line: 72,
                        column: 98,
                      },
                      end: {
                        line: 72,
                        column: 107,
                      },
                    },
                  },
                  {
                    type: "A_Const",
                    sval: {
                      sval: "beta",
                    },
                    range: [2319, 2325],
                    loc: {
                      start: {
                        line: 72,
                        column: 109,
                      },
                      end: {
                        line: 72,
                        column: 115,
                      },
                    },
                  },
                ],
                range: [2302, 2307],
                loc: {
                  start: {
                    line: 72,
                    column: 92,
                  },
                  end: {
                    line: 72,
                    column: 97,
                  },
                },
              },
            ],
            range: [0, 2325],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 72,
                column: 115,
              },
            },
          },
          {
            type: "List",
            items: [
              {
                type: "A_Const",
                ival: {
                  ival: 2,
                },
                range: [2330, 2331],
                loc: {
                  start: {
                    line: 73,
                    column: 1,
                  },
                  end: {
                    line: 73,
                    column: 2,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: '{"theme": "light", "language": "ja", "notifications": {"email": false, "push": true}}',
                },
                range: [2333, 2420],
                loc: {
                  start: {
                    line: 73,
                    column: 4,
                  },
                  end: {
                    line: 73,
                    column: 91,
                  },
                },
              },
              {
                type: "A_ArrayExpr",
                elements: [
                  {
                    type: "A_Const",
                    sval: {
                      sval: "standard",
                    },
                    range: [2428, 2438],
                    loc: {
                      start: {
                        line: 73,
                        column: 99,
                      },
                      end: {
                        line: 73,
                        column: 109,
                      },
                    },
                  },
                ],
                range: [2422, 2427],
                loc: {
                  start: {
                    line: 73,
                    column: 93,
                  },
                  end: {
                    line: 73,
                    column: 98,
                  },
                },
              },
            ],
            range: [0, 2438],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 73,
                column: 109,
              },
            },
          },
        ],
        limitOption: "LIMIT_OPTION_DEFAULT",
        op: "SETOP_NONE",
        range: [0, 2438],
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 73,
            column: 109,
          },
        },
      },
      override: "OVERRIDING_NOT_SET",
      range: [0, 2438],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 73,
          column: 109,
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
            range: [2467, 2474],
            loc: {
              start: {
                line: 76,
                column: 7,
              },
              end: {
                line: 76,
                column: 14,
              },
            },
          },
          range: [2467, 2474],
          loc: {
            start: {
              line: 76,
              column: 7,
            },
            end: {
              line: 76,
              column: 14,
            },
          },
        },
        {
          type: "ResTarget",
          name: "theme",
          val: {
            type: "A_Expr",
            kind: "AEXPR_OP",
            name: [
              {
                type: "String",
                sval: "->",
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
                  sval: "settings",
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
              range: [2476, 2484],
              loc: {
                start: {
                  line: 76,
                  column: 16,
                },
                end: {
                  line: 76,
                  column: 24,
                },
              },
            },
            rexpr: {
              type: "A_Const",
              sval: {
                sval: "theme",
              },
              range: [2486, 2493],
              loc: {
                start: {
                  line: 76,
                  column: 26,
                },
                end: {
                  line: 76,
                  column: 33,
                },
              },
            },
            range: [2484, 2485],
            loc: {
              start: {
                line: 76,
                column: 24,
              },
              end: {
                line: 76,
                column: 25,
              },
            },
          },
          range: [2476, 2484],
          loc: {
            start: {
              line: 76,
              column: 16,
            },
            end: {
              line: 76,
              column: 24,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "user_preferences",
          inh: true,
          relpersistence: "p",
          range: [2508, 2524],
          loc: {
            start: {
              line: 77,
              column: 5,
            },
            end: {
              line: 77,
              column: 21,
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
          type: "A_Expr",
          kind: "AEXPR_OP",
          name: [
            {
              type: "String",
              sval: "->>",
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
                sval: "settings",
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
            range: [2531, 2539],
            loc: {
              start: {
                line: 78,
                column: 6,
              },
              end: {
                line: 78,
                column: 14,
              },
            },
          },
          rexpr: {
            type: "A_Const",
            sval: {
              sval: "language",
            },
            range: [2542, 2552],
            loc: {
              start: {
                line: 78,
                column: 17,
              },
              end: {
                line: 78,
                column: 27,
              },
            },
          },
          range: [2539, 2540],
          loc: {
            start: {
              line: 78,
              column: 14,
            },
            end: {
              line: 78,
              column: 15,
            },
          },
        },
        rexpr: {
          type: "A_Const",
          sval: {
            sval: "en",
          },
          range: [2555, 2559],
          loc: {
            start: {
              line: 78,
              column: 30,
            },
            end: {
              line: 78,
              column: 34,
            },
          },
        },
        range: [2553, 2554],
        loc: {
          start: {
            line: 78,
            column: 28,
          },
          end: {
            line: 78,
            column: 29,
          },
        },
      },
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 2559],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 78,
          column: 34,
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
            range: [2569, 2576],
            loc: {
              start: {
                line: 80,
                column: 7,
              },
              end: {
                line: 80,
                column: 14,
              },
            },
          },
          range: [2569, 2576],
          loc: {
            start: {
              line: 80,
              column: 7,
            },
            end: {
              line: 80,
              column: 14,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "user_preferences",
          inh: true,
          relpersistence: "p",
          range: [2582, 2598],
          loc: {
            start: {
              line: 81,
              column: 5,
            },
            end: {
              line: 81,
              column: 21,
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
            sval: "@>",
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
              sval: "settings",
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
          range: [2605, 2613],
          loc: {
            start: {
              line: 82,
              column: 6,
            },
            end: {
              line: 82,
              column: 14,
            },
          },
        },
        rexpr: {
          type: "A_Const",
          sval: {
            sval: '{"notifications": {"email": true}}',
          },
          range: [2617, 2653],
          loc: {
            start: {
              line: 82,
              column: 18,
            },
            end: {
              line: 82,
              column: 54,
            },
          },
        },
        range: [2614, 2614],
        loc: {
          start: {
            line: 82,
            column: 15,
          },
          end: {
            line: 82,
            column: 15,
          },
        },
      },
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 2653],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 82,
          column: 54,
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
            range: [2683, 2690],
            loc: {
              start: {
                line: 85,
                column: 7,
              },
              end: {
                line: 85,
                column: 14,
              },
            },
          },
          range: [2683, 2690],
          loc: {
            start: {
              line: 85,
              column: 7,
            },
            end: {
              line: 85,
              column: 14,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "user_preferences",
          inh: true,
          relpersistence: "p",
          range: [2696, 2712],
          loc: {
            start: {
              line: 86,
              column: 5,
            },
            end: {
              line: 86,
              column: 21,
            },
          },
        },
      ],
      whereClause: {
        type: "A_Expr",
        kind: "AEXPR_OP_ANY",
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
          type: "A_Const",
          sval: {
            sval: "premium",
          },
          range: [2719, 2728],
          loc: {
            start: {
              line: 87,
              column: 6,
            },
            end: {
              line: 87,
              column: 15,
            },
          },
        },
        rexpr: {
          type: "ColumnRef",
          fields: [
            {
              type: "String",
              sval: "tags",
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
          range: [2735, 2739],
          loc: {
            start: {
              line: 87,
              column: 22,
            },
            end: {
              line: 87,
              column: 26,
            },
          },
        },
        range: [2729, 2730],
        loc: {
          start: {
            line: 87,
            column: 16,
          },
          end: {
            line: 87,
            column: 17,
          },
        },
      },
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 2739],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 87,
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
            range: [2750, 2757],
            loc: {
              start: {
                line: 89,
                column: 7,
              },
              end: {
                line: 89,
                column: 14,
              },
            },
          },
          range: [2750, 2757],
          loc: {
            start: {
              line: 89,
              column: 7,
            },
            end: {
              line: 89,
              column: 14,
            },
          },
        },
        {
          type: "ResTarget",
          name: "tag",
          val: {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "unnest",
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
                    sval: "tags",
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
                range: [2766, 2770],
                loc: {
                  start: {
                    line: 89,
                    column: 23,
                  },
                  end: {
                    line: 89,
                    column: 27,
                  },
                },
              },
            ],
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [2759, 2765],
            loc: {
              start: {
                line: 89,
                column: 16,
              },
              end: {
                line: 89,
                column: 22,
              },
            },
          },
          range: [2759, 2765],
          loc: {
            start: {
              line: 89,
              column: 16,
            },
            end: {
              line: 89,
              column: 22,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "user_preferences",
          inh: true,
          relpersistence: "p",
          range: [2784, 2800],
          loc: {
            start: {
              line: 90,
              column: 5,
            },
            end: {
              line: 90,
              column: 21,
            },
          },
        },
      ],
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 2800],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 90,
          column: 21,
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
            range: [3399, 3409],
            loc: {
              start: {
                line: 106,
                column: 4,
              },
              end: {
                line: 106,
                column: 14,
              },
            },
          },
          range: [3399, 3409],
          loc: {
            start: {
              line: 106,
              column: 4,
            },
            end: {
              line: 106,
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
                sval: "amount",
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
            range: [3415, 3421],
            loc: {
              start: {
                line: 107,
                column: 4,
              },
              end: {
                line: 107,
                column: 10,
              },
            },
          },
          range: [3415, 3421],
          loc: {
            start: {
              line: 107,
              column: 4,
            },
            end: {
              line: 107,
              column: 10,
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
                sval: "prev_amount",
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
            range: [3427, 3438],
            loc: {
              start: {
                line: 108,
                column: 4,
              },
              end: {
                line: 108,
                column: 15,
              },
            },
          },
          range: [3427, 3438],
          loc: {
            start: {
              line: 108,
              column: 4,
            },
            end: {
              line: 108,
              column: 15,
            },
          },
        },
        {
          type: "ResTarget",
          name: "growth",
          val: {
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
              type: "ColumnRef",
              fields: [
                {
                  type: "String",
                  sval: "amount",
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
              range: [3444, 3450],
              loc: {
                start: {
                  line: 109,
                  column: 4,
                },
                end: {
                  line: 109,
                  column: 10,
                },
              },
            },
            rexpr: {
              type: "ColumnRef",
              fields: [
                {
                  type: "String",
                  sval: "prev_amount",
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
              range: [3453, 3464],
              loc: {
                start: {
                  line: 109,
                  column: 13,
                },
                end: {
                  line: 109,
                  column: 24,
                },
              },
            },
            range: [3451, 3452],
            loc: {
              start: {
                line: 109,
                column: 11,
              },
              end: {
                line: 109,
                column: 12,
              },
            },
          },
          range: [3444, 3450],
          loc: {
            start: {
              line: 109,
              column: 4,
            },
            end: {
              line: 109,
              column: 10,
            },
          },
        },
        {
          type: "ResTarget",
          name: "total_growth_percent",
          val: {
            type: "A_Expr",
            kind: "AEXPR_OP",
            name: [
              {
                type: "String",
                sval: "*",
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
                  sval: "/",
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
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "amount",
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
                  range: [3481, 3487],
                  loc: {
                    start: {
                      line: 110,
                      column: 5,
                    },
                    end: {
                      line: 110,
                      column: 11,
                    },
                  },
                },
                rexpr: {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "first_sale",
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
                  range: [3490, 3500],
                  loc: {
                    start: {
                      line: 110,
                      column: 14,
                    },
                    end: {
                      line: 110,
                      column: 24,
                    },
                  },
                },
                range: [3488, 3489],
                loc: {
                  start: {
                    line: 110,
                    column: 12,
                  },
                  end: {
                    line: 110,
                    column: 13,
                  },
                },
              },
              rexpr: {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "first_sale",
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
                range: [3504, 3514],
                loc: {
                  start: {
                    line: 110,
                    column: 28,
                  },
                  end: {
                    line: 110,
                    column: 38,
                  },
                },
              },
              range: [3502, 3503],
              loc: {
                start: {
                  line: 110,
                  column: 26,
                },
                end: {
                  line: 110,
                  column: 27,
                },
              },
            },
            rexpr: {
              type: "A_Const",
              ival: {
                ival: 100,
              },
              range: [3517, 3520],
              loc: {
                start: {
                  line: 110,
                  column: 41,
                },
                end: {
                  line: 110,
                  column: 44,
                },
              },
            },
            range: [3515, 3516],
            loc: {
              start: {
                line: 110,
                column: 39,
              },
              end: {
                line: 110,
                column: 40,
              },
            },
          },
          range: [3480, 3481],
          loc: {
            start: {
              line: 110,
              column: 4,
            },
            end: {
              line: 110,
              column: 5,
            },
          },
        },
      ],
      fromClause: [
        {
          type: "RangeVar",
          relname: "sales_data",
          inh: true,
          relpersistence: "p",
          range: [3550, 3560],
          loc: {
            start: {
              line: 111,
              column: 5,
            },
            end: {
              line: 111,
              column: 15,
            },
          },
        },
      ],
      limitOption: "LIMIT_OPTION_DEFAULT",
      withClause: {
        "0": {
          type: "CommonTableExpr",
          ctename: "sales_data",
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
                  range: [2873, 2883],
                  loc: {
                    start: {
                      line: 95,
                      column: 8,
                    },
                    end: {
                      line: 95,
                      column: 18,
                    },
                  },
                },
                range: [2873, 2883],
                loc: {
                  start: {
                    line: 95,
                    column: 8,
                  },
                  end: {
                    line: 95,
                    column: 18,
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
                      sval: "sale_date",
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
                  range: [2893, 2902],
                  loc: {
                    start: {
                      line: 96,
                      column: 8,
                    },
                    end: {
                      line: 96,
                      column: 17,
                    },
                  },
                },
                range: [2893, 2902],
                loc: {
                  start: {
                    line: 96,
                    column: 8,
                  },
                  end: {
                    line: 96,
                    column: 17,
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
                      sval: "amount",
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
                  range: [2912, 2918],
                  loc: {
                    start: {
                      line: 97,
                      column: 8,
                    },
                    end: {
                      line: 97,
                      column: 14,
                    },
                  },
                },
                range: [2912, 2918],
                loc: {
                  start: {
                    line: 97,
                    column: 8,
                  },
                  end: {
                    line: 97,
                    column: 14,
                  },
                },
              },
              {
                type: "ResTarget",
                name: "prev_amount",
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
                          sval: "amount",
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
                      range: [2932, 2938],
                      loc: {
                        start: {
                          line: 98,
                          column: 12,
                        },
                        end: {
                          line: 98,
                          column: 18,
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
                      range: [2959, 2969],
                      loc: {
                        start: {
                          line: 98,
                          column: 39,
                        },
                        end: {
                          line: 98,
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
                              sval: "sale_date",
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
                          range: [2979, 2988],
                          loc: {
                            start: {
                              line: 98,
                              column: 59,
                            },
                            end: {
                              line: 98,
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
                    range: [2945, 2946],
                    loc: {
                      start: {
                        line: 98,
                        column: 25,
                      },
                      end: {
                        line: 98,
                        column: 26,
                      },
                    },
                  },
                  funcformat: "COERCE_EXPLICIT_CALL",
                  range: [2928, 2931],
                  loc: {
                    start: {
                      line: 98,
                      column: 8,
                    },
                    end: {
                      line: 98,
                      column: 11,
                    },
                  },
                },
                range: [2928, 2931],
                loc: {
                  start: {
                    line: 98,
                    column: 8,
                  },
                  end: {
                    line: 98,
                    column: 11,
                  },
                },
              },
              {
                type: "ResTarget",
                name: "first_sale",
                val: {
                  type: "FuncCall",
                  funcname: [
                    {
                      type: "String",
                      sval: "first_value",
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
                          sval: "amount",
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
                      range: [3026, 3032],
                      loc: {
                        start: {
                          line: 99,
                          column: 20,
                        },
                        end: {
                          line: 99,
                          column: 26,
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
                      range: [3053, 3063],
                      loc: {
                        start: {
                          line: 99,
                          column: 47,
                        },
                        end: {
                          line: 99,
                          column: 57,
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
                              sval: "sale_date",
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
                          range: [3073, 3082],
                          loc: {
                            start: {
                              line: 99,
                              column: 67,
                            },
                            end: {
                              line: 99,
                              column: 76,
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
                    frameOptions: 309,
                    type: "partitionClause",
                    range: [3039, 3040],
                    loc: {
                      start: {
                        line: 99,
                        column: 33,
                      },
                      end: {
                        line: 99,
                        column: 34,
                      },
                    },
                  },
                  funcformat: "COERCE_EXPLICIT_CALL",
                  range: [3014, 3025],
                  loc: {
                    start: {
                      line: 99,
                      column: 8,
                    },
                    end: {
                      line: 99,
                      column: 19,
                    },
                  },
                },
                range: [3014, 3025],
                loc: {
                  start: {
                    line: 99,
                    column: 8,
                  },
                  end: {
                    line: 99,
                    column: 19,
                  },
                },
              },
              {
                type: "ResTarget",
                name: "last_sale",
                val: {
                  type: "FuncCall",
                  funcname: [
                    {
                      type: "String",
                      sval: "last_value",
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
                          sval: "amount",
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
                      range: [3209, 3215],
                      loc: {
                        start: {
                          line: 101,
                          column: 19,
                        },
                        end: {
                          line: 101,
                          column: 25,
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
                      range: [3236, 3246],
                      loc: {
                        start: {
                          line: 101,
                          column: 46,
                        },
                        end: {
                          line: 101,
                          column: 56,
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
                              sval: "sale_date",
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
                          range: [3256, 3265],
                          loc: {
                            start: {
                              line: 101,
                              column: 66,
                            },
                            end: {
                              line: 101,
                              column: 75,
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
                    frameOptions: 309,
                    type: "partitionClause",
                    range: [3222, 3223],
                    loc: {
                      start: {
                        line: 101,
                        column: 32,
                      },
                      end: {
                        line: 101,
                        column: 33,
                      },
                    },
                  },
                  funcformat: "COERCE_EXPLICIT_CALL",
                  range: [3198, 3208],
                  loc: {
                    start: {
                      line: 101,
                      column: 8,
                    },
                    end: {
                      line: 101,
                      column: 18,
                    },
                  },
                },
                range: [3198, 3208],
                loc: {
                  start: {
                    line: 101,
                    column: 8,
                  },
                  end: {
                    line: 101,
                    column: 18,
                  },
                },
              },
            ],
            fromClause: [
              {
                type: "RangeVar",
                relname: "sales",
                inh: true,
                relpersistence: "p",
                range: [3379, 3384],
                loc: {
                  start: {
                    line: 103,
                    column: 9,
                  },
                  end: {
                    line: 103,
                    column: 14,
                  },
                },
              },
            ],
            limitOption: "LIMIT_OPTION_DEFAULT",
            op: "SETOP_NONE",
            range: [-1, 3384],
            loc: {
              start: {
                line: 1,
                column: -1,
              },
              end: {
                line: 103,
                column: 14,
              },
            },
          },
          range: [2837, 2847],
          loc: {
            start: {
              line: 93,
              column: 5,
            },
            end: {
              line: 93,
              column: 15,
            },
          },
        },
        type: "ctes",
        range: [2832, 2836],
        loc: {
          start: {
            line: 93,
            column: 0,
          },
          end: {
            line: 93,
            column: 4,
          },
        },
      },
      op: "SETOP_NONE",
      range: [-1, 3560],
      loc: {
        start: {
          line: 1,
          column: -1,
        },
        end: {
          line: 111,
          column: 15,
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
            range: [3587, 3588],
            loc: {
              start: {
                line: 114,
                column: 7,
              },
              end: {
                line: 114,
                column: 8,
              },
            },
          },
          range: [3587, 3588],
          loc: {
            start: {
              line: 114,
              column: 7,
            },
            end: {
              line: 114,
              column: 8,
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
            range: [3593, 3594],
            loc: {
              start: {
                line: 114,
                column: 13,
              },
              end: {
                line: 114,
                column: 14,
              },
            },
          },
          range: [3593, 3594],
          loc: {
            start: {
              line: 114,
              column: 13,
            },
            end: {
              line: 114,
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
                sval: "recent_orders",
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
            range: [3601, 3614],
            loc: {
              start: {
                line: 114,
                column: 21,
              },
              end: {
                line: 114,
                column: 34,
              },
            },
          },
          range: [3601, 3614],
          loc: {
            start: {
              line: 114,
              column: 21,
            },
            end: {
              line: 114,
              column: 34,
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
            relname: "users",
            inh: true,
            relpersistence: "p",
            alias: {
              aliasname: "u",
            },
            range: [3622, 3627],
            loc: {
              start: {
                line: 115,
                column: 5,
              },
              end: {
                line: 115,
                column: 10,
              },
            },
          },
          rarg: {
            type: "RangeSubselect",
            lateral: true,
            subquery: {
              type: "SelectStmt",
              targetList: [
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
                    range: [3662, 3672],
                    loc: {
                      start: {
                        line: 117,
                        column: 11,
                      },
                      end: {
                        line: 117,
                        column: 21,
                      },
                    },
                  },
                  range: [3662, 3672],
                  loc: {
                    start: {
                      line: 117,
                      column: 11,
                    },
                    end: {
                      line: 117,
                      column: 21,
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
                    range: [3674, 3686],
                    loc: {
                      start: {
                        line: 117,
                        column: 23,
                      },
                      end: {
                        line: 117,
                        column: 35,
                      },
                    },
                  },
                  range: [3674, 3686],
                  loc: {
                    start: {
                      line: 117,
                      column: 23,
                    },
                    end: {
                      line: 117,
                      column: 35,
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
                  range: [3696, 3702],
                  loc: {
                    start: {
                      line: 118,
                      column: 9,
                    },
                    end: {
                      line: 118,
                      column: 15,
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
                  range: [3715, 3716],
                  loc: {
                    start: {
                      line: 119,
                      column: 10,
                    },
                    end: {
                      line: 119,
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
                  range: [3727, 3728],
                  loc: {
                    start: {
                      line: 119,
                      column: 22,
                    },
                    end: {
                      line: 119,
                      column: 23,
                    },
                  },
                },
                range: [3725, 3726],
                loc: {
                  start: {
                    line: 119,
                    column: 20,
                  },
                  end: {
                    line: 119,
                    column: 21,
                  },
                },
              },
              sortClause: [
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
                    range: [3745, 3755],
                    loc: {
                      start: {
                        line: 120,
                        column: 13,
                      },
                      end: {
                        line: 120,
                        column: 23,
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
              ],
              limitCount: {
                type: "A_Const",
                ival: {
                  ival: 3,
                },
                range: [3771, 3772],
                loc: {
                  start: {
                    line: 121,
                    column: 10,
                  },
                  end: {
                    line: 121,
                    column: 11,
                  },
                },
              },
              limitOption: "LIMIT_OPTION_COUNT",
              op: "SETOP_NONE",
              range: [-1, 3772],
              loc: {
                start: {
                  line: 1,
                  column: -1,
                },
                end: {
                  line: 121,
                  column: 11,
                },
              },
            },
            alias: {
              aliasname: "recent_orders",
            },
            range: [-1, 3772],
            loc: {
              start: {
                line: 1,
                column: -1,
              },
              end: {
                line: 121,
                column: 11,
              },
            },
          },
          range: [-1, 3772],
          loc: {
            start: {
              line: 1,
              column: -1,
            },
            end: {
              line: 121,
              column: 11,
            },
          },
        },
      ],
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [-1, 3772],
      loc: {
        start: {
          line: 1,
          column: -1,
        },
        end: {
          line: 121,
          column: 11,
        },
      },
    },
    {
      type: "AlterTableStmt",
      relation: {
        relname: "bookings",
        inh: true,
        relpersistence: "p",
        range: [3828, 3836],
        loc: {
          start: {
            line: 125,
            column: 12,
          },
          end: {
            line: 125,
            column: 20,
          },
        },
      },
      cmds: [
        {
          type: "AlterTableCmd",
          subtype: "AT_AddConstraint",
          def: {
            type: "Constraint",
            contype: "CONSTR_EXCLUSION",
            conname: "no_overlapping_bookings",
            exclusions: [
              {
                type: "List",
                items: [
                  {
                    type: "IndexElem",
                    name: "resource_id",
                    ordering: "SORTBY_DEFAULT",
                    nulls_ordering: "SORTBY_NULLS_DEFAULT",
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
                    type: "List",
                    items: [
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
                type: "List",
                items: [
                  {
                    type: "IndexElem",
                    expr: {
                      type: "FuncCall",
                      funcname: [
                        {
                          type: "String",
                          sval: "tsrange",
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
                              sval: "start_time",
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
                          range: [3924, 3934],
                          loc: {
                            start: {
                              line: 126,
                              column: 48,
                            },
                            end: {
                              line: 126,
                              column: 58,
                            },
                          },
                        },
                        {
                          type: "ColumnRef",
                          fields: [
                            {
                              type: "String",
                              sval: "end_time",
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
                          range: [3936, 3944],
                          loc: {
                            start: {
                              line: 126,
                              column: 60,
                            },
                            end: {
                              line: 126,
                              column: 68,
                            },
                          },
                        },
                      ],
                      funcformat: "COERCE_EXPLICIT_CALL",
                      range: [3916, 3923],
                      loc: {
                        start: {
                          line: 126,
                          column: 40,
                        },
                        end: {
                          line: 126,
                          column: 47,
                        },
                      },
                    },
                    ordering: "SORTBY_DEFAULT",
                    nulls_ordering: "SORTBY_NULLS_DEFAULT",
                    range: [0, 3944],
                    loc: {
                      start: {
                        line: 1,
                        column: 0,
                      },
                      end: {
                        line: 126,
                        column: 68,
                      },
                    },
                  },
                  {
                    type: "List",
                    items: [
                      {
                        type: "String",
                        sval: "&&",
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
                range: [0, 3944],
                loc: {
                  start: {
                    line: 1,
                    column: 0,
                  },
                  end: {
                    line: 126,
                    column: 68,
                  },
                },
              },
            ],
            access_method: "gist",
            range: [3841, 3851],
            loc: {
              start: {
                line: 125,
                column: 25,
              },
              end: {
                line: 125,
                column: 35,
              },
            },
          },
          behavior: "DROP_RESTRICT",
          range: [0, 3944],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 126,
              column: 68,
            },
          },
        },
      ],
      objtype: "OBJECT_TABLE",
      range: [0, 3944],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 126,
          column: 68,
        },
      },
    },
    {
      type: "AlterTableStmt",
      relation: {
        relname: "orders",
        inh: true,
        relpersistence: "p",
        range: [3995, 4001],
        loc: {
          start: {
            line: 129,
            column: 12,
          },
          end: {
            line: 129,
            column: 18,
          },
        },
      },
      cmds: [
        {
          type: "AlterTableCmd",
          subtype: "AT_AddConstraint",
          def: {
            type: "Constraint",
            contype: "CONSTR_FOREIGN",
            conname: "fk_user_id",
            deferrable: true,
            initdeferred: true,
            initially_valid: true,
            pktable: {
              relname: "users",
              inh: true,
              relpersistence: "p",
              range: [4061, 4066],
              loc: {
                start: {
                  line: 130,
                  column: 33,
                },
                end: {
                  line: 130,
                  column: 38,
                },
              },
            },
            fk_attrs: [
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
            pk_attrs: [
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
            fk_matchtype: "s",
            fk_upd_action: "a",
            fk_del_action: "a",
            range: [4006, 4016],
            loc: {
              start: {
                line: 129,
                column: 23,
              },
              end: {
                line: 129,
                column: 33,
              },
            },
          },
          behavior: "DROP_RESTRICT",
          range: [0, 4066],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 130,
              column: 38,
            },
          },
        },
      ],
      objtype: "OBJECT_TABLE",
      range: [0, 4066],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 130,
          column: 38,
        },
      },
    },
  ],
  tokens: [
    {
      type: "LineComment",
      value: "-- Advanced PostgreSQL features test",
      range: [0, 36],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 36,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Extensions",
      range: [37, 50],
      loc: {
        start: {
          line: 2,
          column: 0,
        },
        end: {
          line: 2,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [51, 57],
      loc: {
        start: {
          line: 3,
          column: 0,
        },
        end: {
          line: 3,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "EXTENSION",
      range: [58, 67],
      loc: {
        start: {
          line: 3,
          column: 7,
        },
        end: {
          line: 3,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [68, 70],
      loc: {
        start: {
          line: 3,
          column: 17,
        },
        end: {
          line: 3,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [71, 74],
      loc: {
        start: {
          line: 3,
          column: 20,
        },
        end: {
          line: 3,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXISTS",
      range: [75, 81],
      loc: {
        start: {
          line: 3,
          column: 24,
        },
        end: {
          line: 3,
          column: 30,
        },
      },
    },
    {
      type: "String",
      value: '"uuid-ossp"',
      range: [82, 93],
      loc: {
        start: {
          line: 3,
          column: 31,
        },
        end: {
          line: 3,
          column: 42,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [93, 94],
      loc: {
        start: {
          line: 3,
          column: 42,
        },
        end: {
          line: 3,
          column: 43,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [95, 101],
      loc: {
        start: {
          line: 4,
          column: 0,
        },
        end: {
          line: 4,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "EXTENSION",
      range: [102, 111],
      loc: {
        start: {
          line: 4,
          column: 7,
        },
        end: {
          line: 4,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [112, 114],
      loc: {
        start: {
          line: 4,
          column: 17,
        },
        end: {
          line: 4,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [115, 118],
      loc: {
        start: {
          line: 4,
          column: 20,
        },
        end: {
          line: 4,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXISTS",
      range: [119, 125],
      loc: {
        start: {
          line: 4,
          column: 24,
        },
        end: {
          line: 4,
          column: 30,
        },
      },
    },
    {
      type: "String",
      value: '"hstore"',
      range: [126, 134],
      loc: {
        start: {
          line: 4,
          column: 31,
        },
        end: {
          line: 4,
          column: 39,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [134, 135],
      loc: {
        start: {
          line: 4,
          column: 39,
        },
        end: {
          line: 4,
          column: 40,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [136, 142],
      loc: {
        start: {
          line: 5,
          column: 0,
        },
        end: {
          line: 5,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "EXTENSION",
      range: [143, 152],
      loc: {
        start: {
          line: 5,
          column: 7,
        },
        end: {
          line: 5,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [153, 155],
      loc: {
        start: {
          line: 5,
          column: 17,
        },
        end: {
          line: 5,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [156, 159],
      loc: {
        start: {
          line: 5,
          column: 20,
        },
        end: {
          line: 5,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXISTS",
      range: [160, 166],
      loc: {
        start: {
          line: 5,
          column: 24,
        },
        end: {
          line: 5,
          column: 30,
        },
      },
    },
    {
      type: "String",
      value: '"ltree"',
      range: [167, 174],
      loc: {
        start: {
          line: 5,
          column: 31,
        },
        end: {
          line: 5,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [174, 175],
      loc: {
        start: {
          line: 5,
          column: 38,
        },
        end: {
          line: 5,
          column: 39,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [176, 182],
      loc: {
        start: {
          line: 6,
          column: 0,
        },
        end: {
          line: 6,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "EXTENSION",
      range: [183, 192],
      loc: {
        start: {
          line: 6,
          column: 7,
        },
        end: {
          line: 6,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [193, 195],
      loc: {
        start: {
          line: 6,
          column: 17,
        },
        end: {
          line: 6,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [196, 199],
      loc: {
        start: {
          line: 6,
          column: 20,
        },
        end: {
          line: 6,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXISTS",
      range: [200, 206],
      loc: {
        start: {
          line: 6,
          column: 24,
        },
        end: {
          line: 6,
          column: 30,
        },
      },
    },
    {
      type: "String",
      value: '"pg_trgm"',
      range: [207, 216],
      loc: {
        start: {
          line: 6,
          column: 31,
        },
        end: {
          line: 6,
          column: 40,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [216, 217],
      loc: {
        start: {
          line: 6,
          column: 40,
        },
        end: {
          line: 6,
          column: 41,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [218, 224],
      loc: {
        start: {
          line: 7,
          column: 0,
        },
        end: {
          line: 7,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "EXTENSION",
      range: [225, 234],
      loc: {
        start: {
          line: 7,
          column: 7,
        },
        end: {
          line: 7,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [235, 237],
      loc: {
        start: {
          line: 7,
          column: 17,
        },
        end: {
          line: 7,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [238, 241],
      loc: {
        start: {
          line: 7,
          column: 20,
        },
        end: {
          line: 7,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXISTS",
      range: [242, 248],
      loc: {
        start: {
          line: 7,
          column: 24,
        },
        end: {
          line: 7,
          column: 30,
        },
      },
    },
    {
      type: "String",
      value: '"postgis"',
      range: [249, 258],
      loc: {
        start: {
          line: 7,
          column: 31,
        },
        end: {
          line: 7,
          column: 40,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [258, 259],
      loc: {
        start: {
          line: 7,
          column: 40,
        },
        end: {
          line: 7,
          column: 41,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- UUID usage",
      range: [261, 274],
      loc: {
        start: {
          line: 9,
          column: 0,
        },
        end: {
          line: 9,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [275, 281],
      loc: {
        start: {
          line: 10,
          column: 0,
        },
        end: {
          line: 10,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [282, 287],
      loc: {
        start: {
          line: 10,
          column: 7,
        },
        end: {
          line: 10,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "products",
      range: [288, 296],
      loc: {
        start: {
          line: 10,
          column: 13,
        },
        end: {
          line: 10,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [297, 298],
      loc: {
        start: {
          line: 10,
          column: 22,
        },
        end: {
          line: 10,
          column: 23,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [303, 305],
      loc: {
        start: {
          line: 11,
          column: 4,
        },
        end: {
          line: 11,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "UUID",
      range: [306, 310],
      loc: {
        start: {
          line: 11,
          column: 7,
        },
        end: {
          line: 11,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "PRIMARY",
      range: [311, 318],
      loc: {
        start: {
          line: 11,
          column: 12,
        },
        end: {
          line: 11,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "KEY",
      range: [319, 322],
      loc: {
        start: {
          line: 11,
          column: 20,
        },
        end: {
          line: 11,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "DEFAULT",
      range: [323, 330],
      loc: {
        start: {
          line: 11,
          column: 24,
        },
        end: {
          line: 11,
          column: 31,
        },
      },
    },
    {
      type: "Identifier",
      value: "uuid_generate_v4",
      range: [331, 347],
      loc: {
        start: {
          line: 11,
          column: 32,
        },
        end: {
          line: 11,
          column: 48,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [347, 348],
      loc: {
        start: {
          line: 11,
          column: 48,
        },
        end: {
          line: 11,
          column: 49,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [348, 349],
      loc: {
        start: {
          line: 11,
          column: 49,
        },
        end: {
          line: 11,
          column: 50,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [349, 350],
      loc: {
        start: {
          line: 11,
          column: 50,
        },
        end: {
          line: 11,
          column: 51,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [355, 359],
      loc: {
        start: {
          line: 12,
          column: 4,
        },
        end: {
          line: 12,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "VARCHAR",
      range: [360, 367],
      loc: {
        start: {
          line: 12,
          column: 9,
        },
        end: {
          line: 12,
          column: 16,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [367, 368],
      loc: {
        start: {
          line: 12,
          column: 16,
        },
        end: {
          line: 12,
          column: 17,
        },
      },
    },
    {
      type: "Numeric",
      value: "255",
      range: [368, 371],
      loc: {
        start: {
          line: 12,
          column: 17,
        },
        end: {
          line: 12,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [371, 372],
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
      type: "Keyword",
      value: "NOT",
      range: [373, 376],
      loc: {
        start: {
          line: 12,
          column: 22,
        },
        end: {
          line: 12,
          column: 25,
        },
      },
    },
    {
      type: "Keyword",
      value: "NULL",
      range: [377, 381],
      loc: {
        start: {
          line: 12,
          column: 26,
        },
        end: {
          line: 12,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [381, 382],
      loc: {
        start: {
          line: 12,
          column: 30,
        },
        end: {
          line: 12,
          column: 31,
        },
      },
    },
    {
      type: "Identifier",
      value: "sku",
      range: [387, 390],
      loc: {
        start: {
          line: 13,
          column: 4,
        },
        end: {
          line: 13,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "VARCHAR",
      range: [391, 398],
      loc: {
        start: {
          line: 13,
          column: 8,
        },
        end: {
          line: 13,
          column: 15,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [398, 399],
      loc: {
        start: {
          line: 13,
          column: 15,
        },
        end: {
          line: 13,
          column: 16,
        },
      },
    },
    {
      type: "Numeric",
      value: "100",
      range: [399, 402],
      loc: {
        start: {
          line: 13,
          column: 16,
        },
        end: {
          line: 13,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [402, 403],
      loc: {
        start: {
          line: 13,
          column: 19,
        },
        end: {
          line: 13,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "UNIQUE",
      range: [404, 410],
      loc: {
        start: {
          line: 13,
          column: 21,
        },
        end: {
          line: 13,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [410, 411],
      loc: {
        start: {
          line: 13,
          column: 27,
        },
        end: {
          line: 13,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "metadata",
      range: [416, 424],
      loc: {
        start: {
          line: 14,
          column: 4,
        },
        end: {
          line: 14,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "HSTORE",
      range: [425, 431],
      loc: {
        start: {
          line: 14,
          column: 13,
        },
        end: {
          line: 14,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [431, 432],
      loc: {
        start: {
          line: 14,
          column: 19,
        },
        end: {
          line: 14,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "location",
      range: [437, 445],
      loc: {
        start: {
          line: 15,
          column: 4,
        },
        end: {
          line: 15,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "GEOMETRY",
      range: [446, 454],
      loc: {
        start: {
          line: 15,
          column: 13,
        },
        end: {
          line: 15,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [454, 455],
      loc: {
        start: {
          line: 15,
          column: 21,
        },
        end: {
          line: 15,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "POINT",
      range: [455, 460],
      loc: {
        start: {
          line: 15,
          column: 22,
        },
        end: {
          line: 15,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [460, 461],
      loc: {
        start: {
          line: 15,
          column: 27,
        },
        end: {
          line: 15,
          column: 28,
        },
      },
    },
    {
      type: "Numeric",
      value: "4326",
      range: [462, 466],
      loc: {
        start: {
          line: 15,
          column: 29,
        },
        end: {
          line: 15,
          column: 33,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [466, 467],
      loc: {
        start: {
          line: 15,
          column: 33,
        },
        end: {
          line: 15,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [467, 468],
      loc: {
        start: {
          line: 15,
          column: 34,
        },
        end: {
          line: 15,
          column: 35,
        },
      },
    },
    {
      type: "Identifier",
      value: "created_at",
      range: [473, 483],
      loc: {
        start: {
          line: 16,
          column: 4,
        },
        end: {
          line: 16,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "TIMESTAMP",
      range: [484, 493],
      loc: {
        start: {
          line: 16,
          column: 15,
        },
        end: {
          line: 16,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "DEFAULT",
      range: [494, 501],
      loc: {
        start: {
          line: 16,
          column: 25,
        },
        end: {
          line: 16,
          column: 32,
        },
      },
    },
    {
      type: "Identifier",
      value: "NOW",
      range: [502, 505],
      loc: {
        start: {
          line: 16,
          column: 33,
        },
        end: {
          line: 16,
          column: 36,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [505, 506],
      loc: {
        start: {
          line: 16,
          column: 36,
        },
        end: {
          line: 16,
          column: 37,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [506, 507],
      loc: {
        start: {
          line: 16,
          column: 37,
        },
        end: {
          line: 16,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [508, 509],
      loc: {
        start: {
          line: 17,
          column: 0,
        },
        end: {
          line: 17,
          column: 1,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [509, 510],
      loc: {
        start: {
          line: 17,
          column: 1,
        },
        end: {
          line: 17,
          column: 2,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- HSTORE operations",
      range: [512, 532],
      loc: {
        start: {
          line: 19,
          column: 0,
        },
        end: {
          line: 19,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [533, 539],
      loc: {
        start: {
          line: 20,
          column: 0,
        },
        end: {
          line: 20,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTO",
      range: [540, 544],
      loc: {
        start: {
          line: 20,
          column: 7,
        },
        end: {
          line: 20,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "products",
      range: [545, 553],
      loc: {
        start: {
          line: 20,
          column: 12,
        },
        end: {
          line: 20,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [554, 555],
      loc: {
        start: {
          line: 20,
          column: 21,
        },
        end: {
          line: 20,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [555, 559],
      loc: {
        start: {
          line: 20,
          column: 22,
        },
        end: {
          line: 20,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [559, 560],
      loc: {
        start: {
          line: 20,
          column: 26,
        },
        end: {
          line: 20,
          column: 27,
        },
      },
    },
    {
      type: "Identifier",
      value: "sku",
      range: [561, 564],
      loc: {
        start: {
          line: 20,
          column: 28,
        },
        end: {
          line: 20,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [564, 565],
      loc: {
        start: {
          line: 20,
          column: 31,
        },
        end: {
          line: 20,
          column: 32,
        },
      },
    },
    {
      type: "Identifier",
      value: "metadata",
      range: [566, 574],
      loc: {
        start: {
          line: 20,
          column: 33,
        },
        end: {
          line: 20,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [574, 575],
      loc: {
        start: {
          line: 20,
          column: 41,
        },
        end: {
          line: 20,
          column: 42,
        },
      },
    },
    {
      type: "Identifier",
      value: "location",
      range: [576, 584],
      loc: {
        start: {
          line: 20,
          column: 43,
        },
        end: {
          line: 20,
          column: 51,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [584, 585],
      loc: {
        start: {
          line: 20,
          column: 51,
        },
        end: {
          line: 20,
          column: 52,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [586, 592],
      loc: {
        start: {
          line: 20,
          column: 53,
        },
        end: {
          line: 20,
          column: 59,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [594, 595],
      loc: {
        start: {
          line: 21,
          column: 0,
        },
        end: {
          line: 21,
          column: 1,
        },
      },
    },
    {
      type: "String",
      value: "'Laptop'",
      range: [595, 603],
      loc: {
        start: {
          line: 21,
          column: 1,
        },
        end: {
          line: 21,
          column: 9,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [603, 604],
      loc: {
        start: {
          line: 21,
          column: 9,
        },
        end: {
          line: 21,
          column: 10,
        },
      },
    },
    {
      type: "String",
      value: "'LAPTOP001'",
      range: [605, 616],
      loc: {
        start: {
          line: 21,
          column: 11,
        },
        end: {
          line: 21,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [616, 617],
      loc: {
        start: {
          line: 21,
          column: 22,
        },
        end: {
          line: 21,
          column: 23,
        },
      },
    },
    {
      type: "String",
      value: '\'"brand"=>"Dell", "model"=>"XPS13", "color"=>"Silver"\'',
      range: [618, 672],
      loc: {
        start: {
          line: 21,
          column: 24,
        },
        end: {
          line: 21,
          column: 78,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [672, 673],
      loc: {
        start: {
          line: 21,
          column: 78,
        },
        end: {
          line: 21,
          column: 79,
        },
      },
    },
    {
      type: "Identifier",
      value: "ST_GeomFromText",
      range: [674, 689],
      loc: {
        start: {
          line: 21,
          column: 80,
        },
        end: {
          line: 21,
          column: 95,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [689, 690],
      loc: {
        start: {
          line: 21,
          column: 95,
        },
        end: {
          line: 21,
          column: 96,
        },
      },
    },
    {
      type: "String",
      value: "'POINT(-74.006 40.7128)'",
      range: [690, 714],
      loc: {
        start: {
          line: 21,
          column: 96,
        },
        end: {
          line: 21,
          column: 120,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [714, 715],
      loc: {
        start: {
          line: 21,
          column: 120,
        },
        end: {
          line: 21,
          column: 121,
        },
      },
    },
    {
      type: "Numeric",
      value: "4326",
      range: [716, 720],
      loc: {
        start: {
          line: 21,
          column: 122,
        },
        end: {
          line: 21,
          column: 126,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [720, 721],
      loc: {
        start: {
          line: 21,
          column: 126,
        },
        end: {
          line: 21,
          column: 127,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [721, 722],
      loc: {
        start: {
          line: 21,
          column: 127,
        },
        end: {
          line: 21,
          column: 128,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [722, 723],
      loc: {
        start: {
          line: 21,
          column: 128,
        },
        end: {
          line: 21,
          column: 129,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [724, 725],
      loc: {
        start: {
          line: 22,
          column: 0,
        },
        end: {
          line: 22,
          column: 1,
        },
      },
    },
    {
      type: "String",
      value: "'Mouse'",
      range: [725, 732],
      loc: {
        start: {
          line: 22,
          column: 1,
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
      range: [732, 733],
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
      type: "String",
      value: "'MOUSE001'",
      range: [734, 744],
      loc: {
        start: {
          line: 22,
          column: 10,
        },
        end: {
          line: 22,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [744, 745],
      loc: {
        start: {
          line: 22,
          column: 20,
        },
        end: {
          line: 22,
          column: 21,
        },
      },
    },
    {
      type: "String",
      value: '\'"brand"=>"Logitech", "wireless"=>"true", "dpi"=>"1600"\'',
      range: [746, 802],
      loc: {
        start: {
          line: 22,
          column: 22,
        },
        end: {
          line: 22,
          column: 78,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [802, 803],
      loc: {
        start: {
          line: 22,
          column: 78,
        },
        end: {
          line: 22,
          column: 79,
        },
      },
    },
    {
      type: "Identifier",
      value: "ST_GeomFromText",
      range: [804, 819],
      loc: {
        start: {
          line: 22,
          column: 80,
        },
        end: {
          line: 22,
          column: 95,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [819, 820],
      loc: {
        start: {
          line: 22,
          column: 95,
        },
        end: {
          line: 22,
          column: 96,
        },
      },
    },
    {
      type: "String",
      value: "'POINT(-73.935 40.730)'",
      range: [820, 843],
      loc: {
        start: {
          line: 22,
          column: 96,
        },
        end: {
          line: 22,
          column: 119,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [843, 844],
      loc: {
        start: {
          line: 22,
          column: 119,
        },
        end: {
          line: 22,
          column: 120,
        },
      },
    },
    {
      type: "Numeric",
      value: "4326",
      range: [845, 849],
      loc: {
        start: {
          line: 22,
          column: 121,
        },
        end: {
          line: 22,
          column: 125,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [849, 850],
      loc: {
        start: {
          line: 22,
          column: 125,
        },
        end: {
          line: 22,
          column: 126,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [850, 851],
      loc: {
        start: {
          line: 22,
          column: 126,
        },
        end: {
          line: 22,
          column: 127,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [851, 852],
      loc: {
        start: {
          line: 22,
          column: 127,
        },
        end: {
          line: 22,
          column: 128,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [854, 860],
      loc: {
        start: {
          line: 24,
          column: 0,
        },
        end: {
          line: 24,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [861, 865],
      loc: {
        start: {
          line: 24,
          column: 7,
        },
        end: {
          line: 24,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [865, 866],
      loc: {
        start: {
          line: 24,
          column: 11,
        },
        end: {
          line: 24,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "metadata",
      range: [867, 875],
      loc: {
        start: {
          line: 24,
          column: 13,
        },
        end: {
          line: 24,
          column: 21,
        },
      },
    },
    {
      type: "Operator",
      value: "-",
      range: [875, 876],
      loc: {
        start: {
          line: 24,
          column: 21,
        },
        end: {
          line: 24,
          column: 22,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [876, 877],
      loc: {
        start: {
          line: 24,
          column: 22,
        },
        end: {
          line: 24,
          column: 23,
        },
      },
    },
    {
      type: "String",
      value: "'brand'",
      range: [877, 884],
      loc: {
        start: {
          line: 24,
          column: 23,
        },
        end: {
          line: 24,
          column: 30,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [885, 887],
      loc: {
        start: {
          line: 24,
          column: 31,
        },
        end: {
          line: 24,
          column: 33,
        },
      },
    },
    {
      type: "Identifier",
      value: "brand",
      range: [888, 893],
      loc: {
        start: {
          line: 24,
          column: 34,
        },
        end: {
          line: 24,
          column: 39,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [893, 894],
      loc: {
        start: {
          line: 24,
          column: 39,
        },
        end: {
          line: 24,
          column: 40,
        },
      },
    },
    {
      type: "Identifier",
      value: "metadata",
      range: [895, 903],
      loc: {
        start: {
          line: 24,
          column: 41,
        },
        end: {
          line: 24,
          column: 49,
        },
      },
    },
    {
      type: "Operator",
      value: "-",
      range: [903, 904],
      loc: {
        start: {
          line: 24,
          column: 49,
        },
        end: {
          line: 24,
          column: 50,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [904, 905],
      loc: {
        start: {
          line: 24,
          column: 50,
        },
        end: {
          line: 24,
          column: 51,
        },
      },
    },
    {
      type: "String",
      value: "'model'",
      range: [905, 912],
      loc: {
        start: {
          line: 24,
          column: 51,
        },
        end: {
          line: 24,
          column: 58,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [913, 915],
      loc: {
        start: {
          line: 24,
          column: 59,
        },
        end: {
          line: 24,
          column: 61,
        },
      },
    },
    {
      type: "Identifier",
      value: "model",
      range: [916, 921],
      loc: {
        start: {
          line: 24,
          column: 62,
        },
        end: {
          line: 24,
          column: 67,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [922, 926],
      loc: {
        start: {
          line: 25,
          column: 0,
        },
        end: {
          line: 25,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "products",
      range: [927, 935],
      loc: {
        start: {
          line: 25,
          column: 5,
        },
        end: {
          line: 25,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [936, 941],
      loc: {
        start: {
          line: 26,
          column: 0,
        },
        end: {
          line: 26,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "metadata",
      range: [942, 950],
      loc: {
        start: {
          line: 26,
          column: 6,
        },
        end: {
          line: 26,
          column: 14,
        },
      },
    },
    {
      type: "String",
      value: "'brand'",
      range: [953, 960],
      loc: {
        start: {
          line: 26,
          column: 17,
        },
        end: {
          line: 26,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "AND",
      range: [961, 964],
      loc: {
        start: {
          line: 26,
          column: 25,
        },
        end: {
          line: 26,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "metadata",
      range: [965, 973],
      loc: {
        start: {
          line: 26,
          column: 29,
        },
        end: {
          line: 26,
          column: 37,
        },
      },
    },
    {
      type: "Operator",
      value: "-",
      range: [973, 974],
      loc: {
        start: {
          line: 26,
          column: 37,
        },
        end: {
          line: 26,
          column: 38,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [974, 975],
      loc: {
        start: {
          line: 26,
          column: 38,
        },
        end: {
          line: 26,
          column: 39,
        },
      },
    },
    {
      type: "String",
      value: "'brand'",
      range: [975, 982],
      loc: {
        start: {
          line: 26,
          column: 39,
        },
        end: {
          line: 26,
          column: 46,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [983, 984],
      loc: {
        start: {
          line: 26,
          column: 47,
        },
        end: {
          line: 26,
          column: 48,
        },
      },
    },
    {
      type: "String",
      value: "'Dell'",
      range: [985, 991],
      loc: {
        start: {
          line: 26,
          column: 49,
        },
        end: {
          line: 26,
          column: 55,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [991, 992],
      loc: {
        start: {
          line: 26,
          column: 55,
        },
        end: {
          line: 26,
          column: 56,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- ltree for hierarchical data",
      range: [994, 1024],
      loc: {
        start: {
          line: 28,
          column: 0,
        },
        end: {
          line: 28,
          column: 30,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [1025, 1031],
      loc: {
        start: {
          line: 29,
          column: 0,
        },
        end: {
          line: 29,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [1032, 1037],
      loc: {
        start: {
          line: 29,
          column: 7,
        },
        end: {
          line: 29,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "categories",
      range: [1038, 1048],
      loc: {
        start: {
          line: 29,
          column: 13,
        },
        end: {
          line: 29,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1049, 1050],
      loc: {
        start: {
          line: 29,
          column: 24,
        },
        end: {
          line: 29,
          column: 25,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [1055, 1057],
      loc: {
        start: {
          line: 30,
          column: 4,
        },
        end: {
          line: 30,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "SERIAL",
      range: [1058, 1064],
      loc: {
        start: {
          line: 30,
          column: 7,
        },
        end: {
          line: 30,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "PRIMARY",
      range: [1065, 1072],
      loc: {
        start: {
          line: 30,
          column: 14,
        },
        end: {
          line: 30,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "KEY",
      range: [1073, 1076],
      loc: {
        start: {
          line: 30,
          column: 22,
        },
        end: {
          line: 30,
          column: 25,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1076, 1077],
      loc: {
        start: {
          line: 30,
          column: 25,
        },
        end: {
          line: 30,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "path",
      range: [1082, 1086],
      loc: {
        start: {
          line: 31,
          column: 4,
        },
        end: {
          line: 31,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "LTREE",
      range: [1087, 1092],
      loc: {
        start: {
          line: 31,
          column: 9,
        },
        end: {
          line: 31,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [1093, 1096],
      loc: {
        start: {
          line: 31,
          column: 15,
        },
        end: {
          line: 31,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "NULL",
      range: [1097, 1101],
      loc: {
        start: {
          line: 31,
          column: 19,
        },
        end: {
          line: 31,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1101, 1102],
      loc: {
        start: {
          line: 31,
          column: 23,
        },
        end: {
          line: 31,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [1107, 1111],
      loc: {
        start: {
          line: 32,
          column: 4,
        },
        end: {
          line: 32,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "VARCHAR",
      range: [1112, 1119],
      loc: {
        start: {
          line: 32,
          column: 9,
        },
        end: {
          line: 32,
          column: 16,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1119, 1120],
      loc: {
        start: {
          line: 32,
          column: 16,
        },
        end: {
          line: 32,
          column: 17,
        },
      },
    },
    {
      type: "Numeric",
      value: "255",
      range: [1120, 1123],
      loc: {
        start: {
          line: 32,
          column: 17,
        },
        end: {
          line: 32,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1123, 1124],
      loc: {
        start: {
          line: 32,
          column: 20,
        },
        end: {
          line: 32,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [1125, 1128],
      loc: {
        start: {
          line: 32,
          column: 22,
        },
        end: {
          line: 32,
          column: 25,
        },
      },
    },
    {
      type: "Keyword",
      value: "NULL",
      range: [1129, 1133],
      loc: {
        start: {
          line: 32,
          column: 26,
        },
        end: {
          line: 32,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1134, 1135],
      loc: {
        start: {
          line: 33,
          column: 0,
        },
        end: {
          line: 33,
          column: 1,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1135, 1136],
      loc: {
        start: {
          line: 33,
          column: 1,
        },
        end: {
          line: 33,
          column: 2,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [1138, 1144],
      loc: {
        start: {
          line: 35,
          column: 0,
        },
        end: {
          line: 35,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTO",
      range: [1145, 1149],
      loc: {
        start: {
          line: 35,
          column: 7,
        },
        end: {
          line: 35,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "categories",
      range: [1150, 1160],
      loc: {
        start: {
          line: 35,
          column: 12,
        },
        end: {
          line: 35,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1161, 1162],
      loc: {
        start: {
          line: 35,
          column: 23,
        },
        end: {
          line: 35,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "path",
      range: [1162, 1166],
      loc: {
        start: {
          line: 35,
          column: 24,
        },
        end: {
          line: 35,
          column: 28,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1166, 1167],
      loc: {
        start: {
          line: 35,
          column: 28,
        },
        end: {
          line: 35,
          column: 29,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [1168, 1172],
      loc: {
        start: {
          line: 35,
          column: 30,
        },
        end: {
          line: 35,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1172, 1173],
      loc: {
        start: {
          line: 35,
          column: 34,
        },
        end: {
          line: 35,
          column: 35,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [1174, 1180],
      loc: {
        start: {
          line: 35,
          column: 36,
        },
        end: {
          line: 35,
          column: 42,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1181, 1182],
      loc: {
        start: {
          line: 36,
          column: 0,
        },
        end: {
          line: 36,
          column: 1,
        },
      },
    },
    {
      type: "String",
      value: "'electronics'",
      range: [1182, 1195],
      loc: {
        start: {
          line: 36,
          column: 1,
        },
        end: {
          line: 36,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1195, 1196],
      loc: {
        start: {
          line: 36,
          column: 14,
        },
        end: {
          line: 36,
          column: 15,
        },
      },
    },
    {
      type: "String",
      value: "'Electronics'",
      range: [1197, 1210],
      loc: {
        start: {
          line: 36,
          column: 16,
        },
        end: {
          line: 36,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1210, 1211],
      loc: {
        start: {
          line: 36,
          column: 29,
        },
        end: {
          line: 36,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1211, 1212],
      loc: {
        start: {
          line: 36,
          column: 30,
        },
        end: {
          line: 36,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1213, 1214],
      loc: {
        start: {
          line: 37,
          column: 0,
        },
        end: {
          line: 37,
          column: 1,
        },
      },
    },
    {
      type: "String",
      value: "'electronics.computers'",
      range: [1214, 1237],
      loc: {
        start: {
          line: 37,
          column: 1,
        },
        end: {
          line: 37,
          column: 24,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1237, 1238],
      loc: {
        start: {
          line: 37,
          column: 24,
        },
        end: {
          line: 37,
          column: 25,
        },
      },
    },
    {
      type: "String",
      value: "'Computers'",
      range: [1239, 1250],
      loc: {
        start: {
          line: 37,
          column: 26,
        },
        end: {
          line: 37,
          column: 37,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1250, 1251],
      loc: {
        start: {
          line: 37,
          column: 37,
        },
        end: {
          line: 37,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1251, 1252],
      loc: {
        start: {
          line: 37,
          column: 38,
        },
        end: {
          line: 37,
          column: 39,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1253, 1254],
      loc: {
        start: {
          line: 38,
          column: 0,
        },
        end: {
          line: 38,
          column: 1,
        },
      },
    },
    {
      type: "String",
      value: "'electronics.computers.laptops'",
      range: [1254, 1285],
      loc: {
        start: {
          line: 38,
          column: 1,
        },
        end: {
          line: 38,
          column: 32,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1285, 1286],
      loc: {
        start: {
          line: 38,
          column: 32,
        },
        end: {
          line: 38,
          column: 33,
        },
      },
    },
    {
      type: "String",
      value: "'Laptops'",
      range: [1287, 1296],
      loc: {
        start: {
          line: 38,
          column: 34,
        },
        end: {
          line: 38,
          column: 43,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1296, 1297],
      loc: {
        start: {
          line: 38,
          column: 43,
        },
        end: {
          line: 38,
          column: 44,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1297, 1298],
      loc: {
        start: {
          line: 38,
          column: 44,
        },
        end: {
          line: 38,
          column: 45,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1299, 1300],
      loc: {
        start: {
          line: 39,
          column: 0,
        },
        end: {
          line: 39,
          column: 1,
        },
      },
    },
    {
      type: "String",
      value: "'electronics.computers.desktops'",
      range: [1300, 1332],
      loc: {
        start: {
          line: 39,
          column: 1,
        },
        end: {
          line: 39,
          column: 33,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1332, 1333],
      loc: {
        start: {
          line: 39,
          column: 33,
        },
        end: {
          line: 39,
          column: 34,
        },
      },
    },
    {
      type: "String",
      value: "'Desktops'",
      range: [1334, 1344],
      loc: {
        start: {
          line: 39,
          column: 35,
        },
        end: {
          line: 39,
          column: 45,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1344, 1345],
      loc: {
        start: {
          line: 39,
          column: 45,
        },
        end: {
          line: 39,
          column: 46,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1345, 1346],
      loc: {
        start: {
          line: 39,
          column: 46,
        },
        end: {
          line: 39,
          column: 47,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1347, 1348],
      loc: {
        start: {
          line: 40,
          column: 0,
        },
        end: {
          line: 40,
          column: 1,
        },
      },
    },
    {
      type: "String",
      value: "'electronics.accessories'",
      range: [1348, 1373],
      loc: {
        start: {
          line: 40,
          column: 1,
        },
        end: {
          line: 40,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1373, 1374],
      loc: {
        start: {
          line: 40,
          column: 26,
        },
        end: {
          line: 40,
          column: 27,
        },
      },
    },
    {
      type: "String",
      value: "'Accessories'",
      range: [1375, 1388],
      loc: {
        start: {
          line: 40,
          column: 28,
        },
        end: {
          line: 40,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1388, 1389],
      loc: {
        start: {
          line: 40,
          column: 41,
        },
        end: {
          line: 40,
          column: 42,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1389, 1390],
      loc: {
        start: {
          line: 40,
          column: 42,
        },
        end: {
          line: 40,
          column: 43,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- ltree queries",
      range: [1392, 1408],
      loc: {
        start: {
          line: 42,
          column: 0,
        },
        end: {
          line: 42,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1409, 1415],
      loc: {
        start: {
          line: 43,
          column: 0,
        },
        end: {
          line: 43,
          column: 6,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [1416, 1417],
      loc: {
        start: {
          line: 43,
          column: 7,
        },
        end: {
          line: 43,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1418, 1422],
      loc: {
        start: {
          line: 43,
          column: 9,
        },
        end: {
          line: 43,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "categories",
      range: [1423, 1433],
      loc: {
        start: {
          line: 43,
          column: 14,
        },
        end: {
          line: 43,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [1434, 1439],
      loc: {
        start: {
          line: 43,
          column: 25,
        },
        end: {
          line: 43,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "path",
      range: [1440, 1444],
      loc: {
        start: {
          line: 43,
          column: 31,
        },
        end: {
          line: 43,
          column: 35,
        },
      },
    },
    {
      type: "String",
      value: "'*.computers.*'",
      range: [1447, 1462],
      loc: {
        start: {
          line: 43,
          column: 38,
        },
        end: {
          line: 43,
          column: 53,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1462, 1463],
      loc: {
        start: {
          line: 43,
          column: 53,
        },
        end: {
          line: 43,
          column: 54,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1464, 1470],
      loc: {
        start: {
          line: 44,
          column: 0,
        },
        end: {
          line: 44,
          column: 6,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [1471, 1472],
      loc: {
        start: {
          line: 44,
          column: 7,
        },
        end: {
          line: 44,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1473, 1477],
      loc: {
        start: {
          line: 44,
          column: 9,
        },
        end: {
          line: 44,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "categories",
      range: [1478, 1488],
      loc: {
        start: {
          line: 44,
          column: 14,
        },
        end: {
          line: 44,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [1489, 1494],
      loc: {
        start: {
          line: 44,
          column: 25,
        },
        end: {
          line: 44,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "path",
      range: [1495, 1499],
      loc: {
        start: {
          line: 44,
          column: 31,
        },
        end: {
          line: 44,
          column: 35,
        },
      },
    },
    {
      type: "Operator",
      value: "<",
      range: [1500, 1501],
      loc: {
        start: {
          line: 44,
          column: 36,
        },
        end: {
          line: 44,
          column: 37,
        },
      },
    },
    {
      type: "String",
      value: "'electronics.computers'",
      range: [1503, 1526],
      loc: {
        start: {
          line: 44,
          column: 39,
        },
        end: {
          line: 44,
          column: 62,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1526, 1527],
      loc: {
        start: {
          line: 44,
          column: 62,
        },
        end: {
          line: 44,
          column: 63,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Full-text search with pg_trgm",
      range: [1529, 1561],
      loc: {
        start: {
          line: 46,
          column: 0,
        },
        end: {
          line: 46,
          column: 32,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [1562, 1568],
      loc: {
        start: {
          line: 47,
          column: 0,
        },
        end: {
          line: 47,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "INDEX",
      range: [1569, 1574],
      loc: {
        start: {
          line: 47,
          column: 7,
        },
        end: {
          line: 47,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "idx_products_name_gin",
      range: [1575, 1596],
      loc: {
        start: {
          line: 47,
          column: 13,
        },
        end: {
          line: 47,
          column: 34,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [1597, 1599],
      loc: {
        start: {
          line: 47,
          column: 35,
        },
        end: {
          line: 47,
          column: 37,
        },
      },
    },
    {
      type: "Identifier",
      value: "products",
      range: [1600, 1608],
      loc: {
        start: {
          line: 47,
          column: 38,
        },
        end: {
          line: 47,
          column: 46,
        },
      },
    },
    {
      type: "Keyword",
      value: "USING",
      range: [1609, 1614],
      loc: {
        start: {
          line: 47,
          column: 47,
        },
        end: {
          line: 47,
          column: 52,
        },
      },
    },
    {
      type: "Identifier",
      value: "GIN",
      range: [1615, 1618],
      loc: {
        start: {
          line: 47,
          column: 53,
        },
        end: {
          line: 47,
          column: 56,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1619, 1620],
      loc: {
        start: {
          line: 47,
          column: 57,
        },
        end: {
          line: 47,
          column: 58,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [1620, 1624],
      loc: {
        start: {
          line: 47,
          column: 58,
        },
        end: {
          line: 47,
          column: 62,
        },
      },
    },
    {
      type: "Identifier",
      value: "gin_trgm_ops",
      range: [1625, 1637],
      loc: {
        start: {
          line: 47,
          column: 63,
        },
        end: {
          line: 47,
          column: 75,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1637, 1638],
      loc: {
        start: {
          line: 47,
          column: 75,
        },
        end: {
          line: 47,
          column: 76,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1638, 1639],
      loc: {
        start: {
          line: 47,
          column: 76,
        },
        end: {
          line: 47,
          column: 77,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1641, 1647],
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
      value: "name",
      range: [1648, 1652],
      loc: {
        start: {
          line: 49,
          column: 7,
        },
        end: {
          line: 49,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1652, 1653],
      loc: {
        start: {
          line: 49,
          column: 11,
        },
        end: {
          line: 49,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "similarity",
      range: [1654, 1664],
      loc: {
        start: {
          line: 49,
          column: 13,
        },
        end: {
          line: 49,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1664, 1665],
      loc: {
        start: {
          line: 49,
          column: 23,
        },
        end: {
          line: 49,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [1665, 1669],
      loc: {
        start: {
          line: 49,
          column: 24,
        },
        end: {
          line: 49,
          column: 28,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1669, 1670],
      loc: {
        start: {
          line: 49,
          column: 28,
        },
        end: {
          line: 49,
          column: 29,
        },
      },
    },
    {
      type: "String",
      value: "'laptop'",
      range: [1671, 1679],
      loc: {
        start: {
          line: 49,
          column: 30,
        },
        end: {
          line: 49,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1679, 1680],
      loc: {
        start: {
          line: 49,
          column: 38,
        },
        end: {
          line: 49,
          column: 39,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1681, 1683],
      loc: {
        start: {
          line: 49,
          column: 40,
        },
        end: {
          line: 49,
          column: 42,
        },
      },
    },
    {
      type: "Identifier",
      value: "sim",
      range: [1684, 1687],
      loc: {
        start: {
          line: 49,
          column: 43,
        },
        end: {
          line: 49,
          column: 46,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1688, 1692],
      loc: {
        start: {
          line: 50,
          column: 0,
        },
        end: {
          line: 50,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "products",
      range: [1693, 1701],
      loc: {
        start: {
          line: 50,
          column: 5,
        },
        end: {
          line: 50,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [1702, 1707],
      loc: {
        start: {
          line: 51,
          column: 0,
        },
        end: {
          line: 51,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [1708, 1712],
      loc: {
        start: {
          line: 51,
          column: 6,
        },
        end: {
          line: 51,
          column: 10,
        },
      },
    },
    {
      type: "Operator",
      value: "%",
      range: [1713, 1714],
      loc: {
        start: {
          line: 51,
          column: 11,
        },
        end: {
          line: 51,
          column: 12,
        },
      },
    },
    {
      type: "String",
      value: "'laptop'",
      range: [1715, 1723],
      loc: {
        start: {
          line: 51,
          column: 13,
        },
        end: {
          line: 51,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "ORDER",
      range: [1724, 1729],
      loc: {
        start: {
          line: 52,
          column: 0,
        },
        end: {
          line: 52,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [1730, 1732],
      loc: {
        start: {
          line: 52,
          column: 6,
        },
        end: {
          line: 52,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "sim",
      range: [1733, 1736],
      loc: {
        start: {
          line: 52,
          column: 9,
        },
        end: {
          line: 52,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "DESC",
      range: [1737, 1741],
      loc: {
        start: {
          line: 52,
          column: 13,
        },
        end: {
          line: 52,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1741, 1742],
      loc: {
        start: {
          line: 52,
          column: 17,
        },
        end: {
          line: 52,
          column: 18,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- PostGIS spatial queries",
      range: [1744, 1770],
      loc: {
        start: {
          line: 54,
          column: 0,
        },
        end: {
          line: 54,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1771, 1777],
      loc: {
        start: {
          line: 55,
          column: 0,
        },
        end: {
          line: 55,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "p1",
      range: [1783, 1785],
      loc: {
        start: {
          line: 56,
          column: 4,
        },
        end: {
          line: 56,
          column: 6,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1785, 1786],
      loc: {
        start: {
          line: 56,
          column: 6,
        },
        end: {
          line: 56,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [1786, 1790],
      loc: {
        start: {
          line: 56,
          column: 7,
        },
        end: {
          line: 56,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1791, 1793],
      loc: {
        start: {
          line: 56,
          column: 12,
        },
        end: {
          line: 56,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "product1",
      range: [1794, 1802],
      loc: {
        start: {
          line: 56,
          column: 15,
        },
        end: {
          line: 56,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1802, 1803],
      loc: {
        start: {
          line: 56,
          column: 23,
        },
        end: {
          line: 56,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "p2",
      range: [1808, 1810],
      loc: {
        start: {
          line: 57,
          column: 4,
        },
        end: {
          line: 57,
          column: 6,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1810, 1811],
      loc: {
        start: {
          line: 57,
          column: 6,
        },
        end: {
          line: 57,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [1811, 1815],
      loc: {
        start: {
          line: 57,
          column: 7,
        },
        end: {
          line: 57,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1816, 1818],
      loc: {
        start: {
          line: 57,
          column: 12,
        },
        end: {
          line: 57,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "product2",
      range: [1819, 1827],
      loc: {
        start: {
          line: 57,
          column: 15,
        },
        end: {
          line: 57,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1827, 1828],
      loc: {
        start: {
          line: 57,
          column: 23,
        },
        end: {
          line: 57,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "ST_Distance",
      range: [1833, 1844],
      loc: {
        start: {
          line: 58,
          column: 4,
        },
        end: {
          line: 58,
          column: 15,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1844, 1845],
      loc: {
        start: {
          line: 58,
          column: 15,
        },
        end: {
          line: 58,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "p1",
      range: [1845, 1847],
      loc: {
        start: {
          line: 58,
          column: 16,
        },
        end: {
          line: 58,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1847, 1848],
      loc: {
        start: {
          line: 58,
          column: 18,
        },
        end: {
          line: 58,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "location",
      range: [1848, 1856],
      loc: {
        start: {
          line: 58,
          column: 19,
        },
        end: {
          line: 58,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1856, 1857],
      loc: {
        start: {
          line: 58,
          column: 27,
        },
        end: {
          line: 58,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "p2",
      range: [1858, 1860],
      loc: {
        start: {
          line: 58,
          column: 29,
        },
        end: {
          line: 58,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1860, 1861],
      loc: {
        start: {
          line: 58,
          column: 31,
        },
        end: {
          line: 58,
          column: 32,
        },
      },
    },
    {
      type: "Identifier",
      value: "location",
      range: [1861, 1869],
      loc: {
        start: {
          line: 58,
          column: 32,
        },
        end: {
          line: 58,
          column: 40,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1869, 1870],
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
      value: "as",
      range: [1871, 1873],
      loc: {
        start: {
          line: 58,
          column: 42,
        },
        end: {
          line: 58,
          column: 44,
        },
      },
    },
    {
      type: "Identifier",
      value: "distance_meters",
      range: [1874, 1889],
      loc: {
        start: {
          line: 58,
          column: 45,
        },
        end: {
          line: 58,
          column: 60,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1890, 1894],
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
      value: "products",
      range: [1895, 1903],
      loc: {
        start: {
          line: 59,
          column: 5,
        },
        end: {
          line: 59,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "p1",
      range: [1904, 1906],
      loc: {
        start: {
          line: 59,
          column: 14,
        },
        end: {
          line: 59,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "CROSS",
      range: [1907, 1912],
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
      type: "Keyword",
      value: "JOIN",
      range: [1913, 1917],
      loc: {
        start: {
          line: 60,
          column: 6,
        },
        end: {
          line: 60,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "products",
      range: [1918, 1926],
      loc: {
        start: {
          line: 60,
          column: 11,
        },
        end: {
          line: 60,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "p2",
      range: [1927, 1929],
      loc: {
        start: {
          line: 60,
          column: 20,
        },
        end: {
          line: 60,
          column: 22,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [1930, 1935],
      loc: {
        start: {
          line: 61,
          column: 0,
        },
        end: {
          line: 61,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "p1",
      range: [1936, 1938],
      loc: {
        start: {
          line: 61,
          column: 6,
        },
        end: {
          line: 61,
          column: 8,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1938, 1939],
      loc: {
        start: {
          line: 61,
          column: 8,
        },
        end: {
          line: 61,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [1939, 1941],
      loc: {
        start: {
          line: 61,
          column: 9,
        },
        end: {
          line: 61,
          column: 11,
        },
      },
    },
    {
      type: "Operator",
      value: "!=",
      range: [1942, 1944],
      loc: {
        start: {
          line: 61,
          column: 12,
        },
        end: {
          line: 61,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "p2",
      range: [1945, 1947],
      loc: {
        start: {
          line: 61,
          column: 15,
        },
        end: {
          line: 61,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1947, 1948],
      loc: {
        start: {
          line: 61,
          column: 17,
        },
        end: {
          line: 61,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [1948, 1950],
      loc: {
        start: {
          line: 61,
          column: 18,
        },
        end: {
          line: 61,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "AND",
      range: [1951, 1954],
      loc: {
        start: {
          line: 62,
          column: 0,
        },
        end: {
          line: 62,
          column: 3,
        },
      },
    },
    {
      type: "Identifier",
      value: "ST_DWithin",
      range: [1955, 1965],
      loc: {
        start: {
          line: 62,
          column: 4,
        },
        end: {
          line: 62,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1965, 1966],
      loc: {
        start: {
          line: 62,
          column: 14,
        },
        end: {
          line: 62,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "p1",
      range: [1966, 1968],
      loc: {
        start: {
          line: 62,
          column: 15,
        },
        end: {
          line: 62,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1968, 1969],
      loc: {
        start: {
          line: 62,
          column: 17,
        },
        end: {
          line: 62,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "location",
      range: [1969, 1977],
      loc: {
        start: {
          line: 62,
          column: 18,
        },
        end: {
          line: 62,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1977, 1978],
      loc: {
        start: {
          line: 62,
          column: 26,
        },
        end: {
          line: 62,
          column: 27,
        },
      },
    },
    {
      type: "Identifier",
      value: "p2",
      range: [1979, 1981],
      loc: {
        start: {
          line: 62,
          column: 28,
        },
        end: {
          line: 62,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1981, 1982],
      loc: {
        start: {
          line: 62,
          column: 30,
        },
        end: {
          line: 62,
          column: 31,
        },
      },
    },
    {
      type: "Identifier",
      value: "location",
      range: [1982, 1990],
      loc: {
        start: {
          line: 62,
          column: 31,
        },
        end: {
          line: 62,
          column: 39,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1990, 1991],
      loc: {
        start: {
          line: 62,
          column: 39,
        },
        end: {
          line: 62,
          column: 40,
        },
      },
    },
    {
      type: "Numeric",
      value: "1000",
      range: [1992, 1996],
      loc: {
        start: {
          line: 62,
          column: 41,
        },
        end: {
          line: 62,
          column: 45,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1996, 1997],
      loc: {
        start: {
          line: 62,
          column: 45,
        },
        end: {
          line: 62,
          column: 46,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1997, 1998],
      loc: {
        start: {
          line: 62,
          column: 46,
        },
        end: {
          line: 62,
          column: 47,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- within 1km",
      range: [1999, 2012],
      loc: {
        start: {
          line: 62,
          column: 48,
        },
        end: {
          line: 62,
          column: 61,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- JSON and JSONB operations",
      range: [2014, 2042],
      loc: {
        start: {
          line: 64,
          column: 0,
        },
        end: {
          line: 64,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [2043, 2049],
      loc: {
        start: {
          line: 65,
          column: 0,
        },
        end: {
          line: 65,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [2050, 2055],
      loc: {
        start: {
          line: 65,
          column: 7,
        },
        end: {
          line: 65,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_preferences",
      range: [2056, 2072],
      loc: {
        start: {
          line: 65,
          column: 13,
        },
        end: {
          line: 65,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2073, 2074],
      loc: {
        start: {
          line: 65,
          column: 30,
        },
        end: {
          line: 65,
          column: 31,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [2079, 2086],
      loc: {
        start: {
          line: 66,
          column: 4,
        },
        end: {
          line: 66,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTEGER",
      range: [2087, 2094],
      loc: {
        start: {
          line: 66,
          column: 12,
        },
        end: {
          line: 66,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "PRIMARY",
      range: [2095, 2102],
      loc: {
        start: {
          line: 66,
          column: 20,
        },
        end: {
          line: 66,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "KEY",
      range: [2103, 2106],
      loc: {
        start: {
          line: 66,
          column: 28,
        },
        end: {
          line: 66,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2106, 2107],
      loc: {
        start: {
          line: 66,
          column: 31,
        },
        end: {
          line: 66,
          column: 32,
        },
      },
    },
    {
      type: "Identifier",
      value: "settings",
      range: [2112, 2120],
      loc: {
        start: {
          line: 67,
          column: 4,
        },
        end: {
          line: 67,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "JSONB",
      range: [2121, 2126],
      loc: {
        start: {
          line: 67,
          column: 13,
        },
        end: {
          line: 67,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2126, 2127],
      loc: {
        start: {
          line: 67,
          column: 18,
        },
        end: {
          line: 67,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "tags",
      range: [2132, 2136],
      loc: {
        start: {
          line: 68,
          column: 4,
        },
        end: {
          line: 68,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "TEXT",
      range: [2137, 2141],
      loc: {
        start: {
          line: 68,
          column: 9,
        },
        end: {
          line: 68,
          column: 13,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2144, 2145],
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
      type: "Punctuator",
      value: ";",
      range: [2145, 2146],
      loc: {
        start: {
          line: 69,
          column: 1,
        },
        end: {
          line: 69,
          column: 2,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [2148, 2154],
      loc: {
        start: {
          line: 71,
          column: 0,
        },
        end: {
          line: 71,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTO",
      range: [2155, 2159],
      loc: {
        start: {
          line: 71,
          column: 7,
        },
        end: {
          line: 71,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_preferences",
      range: [2160, 2176],
      loc: {
        start: {
          line: 71,
          column: 12,
        },
        end: {
          line: 71,
          column: 28,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2177, 2178],
      loc: {
        start: {
          line: 71,
          column: 29,
        },
        end: {
          line: 71,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [2178, 2185],
      loc: {
        start: {
          line: 71,
          column: 30,
        },
        end: {
          line: 71,
          column: 37,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2185, 2186],
      loc: {
        start: {
          line: 71,
          column: 37,
        },
        end: {
          line: 71,
          column: 38,
        },
      },
    },
    {
      type: "Identifier",
      value: "settings",
      range: [2187, 2195],
      loc: {
        start: {
          line: 71,
          column: 39,
        },
        end: {
          line: 71,
          column: 47,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2195, 2196],
      loc: {
        start: {
          line: 71,
          column: 47,
        },
        end: {
          line: 71,
          column: 48,
        },
      },
    },
    {
      type: "Identifier",
      value: "tags",
      range: [2197, 2201],
      loc: {
        start: {
          line: 71,
          column: 49,
        },
        end: {
          line: 71,
          column: 53,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2201, 2202],
      loc: {
        start: {
          line: 71,
          column: 53,
        },
        end: {
          line: 71,
          column: 54,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [2203, 2209],
      loc: {
        start: {
          line: 71,
          column: 55,
        },
        end: {
          line: 71,
          column: 61,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2210, 2211],
      loc: {
        start: {
          line: 72,
          column: 0,
        },
        end: {
          line: 72,
          column: 1,
        },
      },
    },
    {
      type: "Numeric",
      value: "1",
      range: [2211, 2212],
      loc: {
        start: {
          line: 72,
          column: 1,
        },
        end: {
          line: 72,
          column: 2,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2212, 2213],
      loc: {
        start: {
          line: 72,
          column: 2,
        },
        end: {
          line: 72,
          column: 3,
        },
      },
    },
    {
      type: "String",
      value:
        '\'{"theme": "dark", "language": "en", "notifications": {"email": true, "push": false}}\'',
      range: [2214, 2300],
      loc: {
        start: {
          line: 72,
          column: 4,
        },
        end: {
          line: 72,
          column: 90,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2300, 2301],
      loc: {
        start: {
          line: 72,
          column: 90,
        },
        end: {
          line: 72,
          column: 91,
        },
      },
    },
    {
      type: "Keyword",
      value: "ARRAY",
      range: [2302, 2307],
      loc: {
        start: {
          line: 72,
          column: 92,
        },
        end: {
          line: 72,
          column: 97,
        },
      },
    },
    {
      type: "String",
      value: "'premium'",
      range: [2308, 2317],
      loc: {
        start: {
          line: 72,
          column: 98,
        },
        end: {
          line: 72,
          column: 107,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2317, 2318],
      loc: {
        start: {
          line: 72,
          column: 107,
        },
        end: {
          line: 72,
          column: 108,
        },
      },
    },
    {
      type: "String",
      value: "'beta'",
      range: [2319, 2325],
      loc: {
        start: {
          line: 72,
          column: 109,
        },
        end: {
          line: 72,
          column: 115,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2326, 2327],
      loc: {
        start: {
          line: 72,
          column: 116,
        },
        end: {
          line: 72,
          column: 117,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2327, 2328],
      loc: {
        start: {
          line: 72,
          column: 117,
        },
        end: {
          line: 72,
          column: 118,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2329, 2330],
      loc: {
        start: {
          line: 73,
          column: 0,
        },
        end: {
          line: 73,
          column: 1,
        },
      },
    },
    {
      type: "Numeric",
      value: "2",
      range: [2330, 2331],
      loc: {
        start: {
          line: 73,
          column: 1,
        },
        end: {
          line: 73,
          column: 2,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2331, 2332],
      loc: {
        start: {
          line: 73,
          column: 2,
        },
        end: {
          line: 73,
          column: 3,
        },
      },
    },
    {
      type: "String",
      value:
        '\'{"theme": "light", "language": "ja", "notifications": {"email": false, "push": true}}\'',
      range: [2333, 2420],
      loc: {
        start: {
          line: 73,
          column: 4,
        },
        end: {
          line: 73,
          column: 91,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2420, 2421],
      loc: {
        start: {
          line: 73,
          column: 91,
        },
        end: {
          line: 73,
          column: 92,
        },
      },
    },
    {
      type: "Keyword",
      value: "ARRAY",
      range: [2422, 2427],
      loc: {
        start: {
          line: 73,
          column: 93,
        },
        end: {
          line: 73,
          column: 98,
        },
      },
    },
    {
      type: "String",
      value: "'standard'",
      range: [2428, 2438],
      loc: {
        start: {
          line: 73,
          column: 99,
        },
        end: {
          line: 73,
          column: 109,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2439, 2440],
      loc: {
        start: {
          line: 73,
          column: 110,
        },
        end: {
          line: 73,
          column: 111,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2440, 2441],
      loc: {
        start: {
          line: 73,
          column: 111,
        },
        end: {
          line: 73,
          column: 112,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- JSONB queries",
      range: [2443, 2459],
      loc: {
        start: {
          line: 75,
          column: 0,
        },
        end: {
          line: 75,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [2460, 2466],
      loc: {
        start: {
          line: 76,
          column: 0,
        },
        end: {
          line: 76,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [2467, 2474],
      loc: {
        start: {
          line: 76,
          column: 7,
        },
        end: {
          line: 76,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2474, 2475],
      loc: {
        start: {
          line: 76,
          column: 14,
        },
        end: {
          line: 76,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "settings",
      range: [2476, 2484],
      loc: {
        start: {
          line: 76,
          column: 16,
        },
        end: {
          line: 76,
          column: 24,
        },
      },
    },
    {
      type: "Operator",
      value: "-",
      range: [2484, 2485],
      loc: {
        start: {
          line: 76,
          column: 24,
        },
        end: {
          line: 76,
          column: 25,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [2485, 2486],
      loc: {
        start: {
          line: 76,
          column: 25,
        },
        end: {
          line: 76,
          column: 26,
        },
      },
    },
    {
      type: "String",
      value: "'theme'",
      range: [2486, 2493],
      loc: {
        start: {
          line: 76,
          column: 26,
        },
        end: {
          line: 76,
          column: 33,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [2494, 2496],
      loc: {
        start: {
          line: 76,
          column: 34,
        },
        end: {
          line: 76,
          column: 36,
        },
      },
    },
    {
      type: "Identifier",
      value: "theme",
      range: [2497, 2502],
      loc: {
        start: {
          line: 76,
          column: 37,
        },
        end: {
          line: 76,
          column: 42,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [2503, 2507],
      loc: {
        start: {
          line: 77,
          column: 0,
        },
        end: {
          line: 77,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_preferences",
      range: [2508, 2524],
      loc: {
        start: {
          line: 77,
          column: 5,
        },
        end: {
          line: 77,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [2525, 2530],
      loc: {
        start: {
          line: 78,
          column: 0,
        },
        end: {
          line: 78,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "settings",
      range: [2531, 2539],
      loc: {
        start: {
          line: 78,
          column: 6,
        },
        end: {
          line: 78,
          column: 14,
        },
      },
    },
    {
      type: "Operator",
      value: "-",
      range: [2539, 2540],
      loc: {
        start: {
          line: 78,
          column: 14,
        },
        end: {
          line: 78,
          column: 15,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [2540, 2541],
      loc: {
        start: {
          line: 78,
          column: 15,
        },
        end: {
          line: 78,
          column: 16,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [2541, 2542],
      loc: {
        start: {
          line: 78,
          column: 16,
        },
        end: {
          line: 78,
          column: 17,
        },
      },
    },
    {
      type: "String",
      value: "'language'",
      range: [2542, 2552],
      loc: {
        start: {
          line: 78,
          column: 17,
        },
        end: {
          line: 78,
          column: 27,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2553, 2554],
      loc: {
        start: {
          line: 78,
          column: 28,
        },
        end: {
          line: 78,
          column: 29,
        },
      },
    },
    {
      type: "String",
      value: "'en'",
      range: [2555, 2559],
      loc: {
        start: {
          line: 78,
          column: 30,
        },
        end: {
          line: 78,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2559, 2560],
      loc: {
        start: {
          line: 78,
          column: 34,
        },
        end: {
          line: 78,
          column: 35,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [2562, 2568],
      loc: {
        start: {
          line: 80,
          column: 0,
        },
        end: {
          line: 80,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [2569, 2576],
      loc: {
        start: {
          line: 80,
          column: 7,
        },
        end: {
          line: 80,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [2577, 2581],
      loc: {
        start: {
          line: 81,
          column: 0,
        },
        end: {
          line: 81,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_preferences",
      range: [2582, 2598],
      loc: {
        start: {
          line: 81,
          column: 5,
        },
        end: {
          line: 81,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [2599, 2604],
      loc: {
        start: {
          line: 82,
          column: 0,
        },
        end: {
          line: 82,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "settings",
      range: [2605, 2613],
      loc: {
        start: {
          line: 82,
          column: 6,
        },
        end: {
          line: 82,
          column: 14,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [2615, 2616],
      loc: {
        start: {
          line: 82,
          column: 16,
        },
        end: {
          line: 82,
          column: 17,
        },
      },
    },
    {
      type: "String",
      value: '\'{"notifications": {"email": true}}\'',
      range: [2617, 2653],
      loc: {
        start: {
          line: 82,
          column: 18,
        },
        end: {
          line: 82,
          column: 54,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2653, 2654],
      loc: {
        start: {
          line: 82,
          column: 54,
        },
        end: {
          line: 82,
          column: 55,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Array operations",
      range: [2656, 2675],
      loc: {
        start: {
          line: 84,
          column: 0,
        },
        end: {
          line: 84,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [2676, 2682],
      loc: {
        start: {
          line: 85,
          column: 0,
        },
        end: {
          line: 85,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [2683, 2690],
      loc: {
        start: {
          line: 85,
          column: 7,
        },
        end: {
          line: 85,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [2691, 2695],
      loc: {
        start: {
          line: 86,
          column: 0,
        },
        end: {
          line: 86,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_preferences",
      range: [2696, 2712],
      loc: {
        start: {
          line: 86,
          column: 5,
        },
        end: {
          line: 86,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [2713, 2718],
      loc: {
        start: {
          line: 87,
          column: 0,
        },
        end: {
          line: 87,
          column: 5,
        },
      },
    },
    {
      type: "String",
      value: "'premium'",
      range: [2719, 2728],
      loc: {
        start: {
          line: 87,
          column: 6,
        },
        end: {
          line: 87,
          column: 15,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2729, 2730],
      loc: {
        start: {
          line: 87,
          column: 16,
        },
        end: {
          line: 87,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "ANY",
      range: [2731, 2734],
      loc: {
        start: {
          line: 87,
          column: 18,
        },
        end: {
          line: 87,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2734, 2735],
      loc: {
        start: {
          line: 87,
          column: 21,
        },
        end: {
          line: 87,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "tags",
      range: [2735, 2739],
      loc: {
        start: {
          line: 87,
          column: 22,
        },
        end: {
          line: 87,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2739, 2740],
      loc: {
        start: {
          line: 87,
          column: 26,
        },
        end: {
          line: 87,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2740, 2741],
      loc: {
        start: {
          line: 87,
          column: 27,
        },
        end: {
          line: 87,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [2743, 2749],
      loc: {
        start: {
          line: 89,
          column: 0,
        },
        end: {
          line: 89,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [2750, 2757],
      loc: {
        start: {
          line: 89,
          column: 7,
        },
        end: {
          line: 89,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2757, 2758],
      loc: {
        start: {
          line: 89,
          column: 14,
        },
        end: {
          line: 89,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "unnest",
      range: [2759, 2765],
      loc: {
        start: {
          line: 89,
          column: 16,
        },
        end: {
          line: 89,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2765, 2766],
      loc: {
        start: {
          line: 89,
          column: 22,
        },
        end: {
          line: 89,
          column: 23,
        },
      },
    },
    {
      type: "Identifier",
      value: "tags",
      range: [2766, 2770],
      loc: {
        start: {
          line: 89,
          column: 23,
        },
        end: {
          line: 89,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2770, 2771],
      loc: {
        start: {
          line: 89,
          column: 27,
        },
        end: {
          line: 89,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [2772, 2774],
      loc: {
        start: {
          line: 89,
          column: 29,
        },
        end: {
          line: 89,
          column: 31,
        },
      },
    },
    {
      type: "Identifier",
      value: "tag",
      range: [2775, 2778],
      loc: {
        start: {
          line: 89,
          column: 32,
        },
        end: {
          line: 89,
          column: 35,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [2779, 2783],
      loc: {
        start: {
          line: 90,
          column: 0,
        },
        end: {
          line: 90,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_preferences",
      range: [2784, 2800],
      loc: {
        start: {
          line: 90,
          column: 5,
        },
        end: {
          line: 90,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2800, 2801],
      loc: {
        start: {
          line: 90,
          column: 21,
        },
        end: {
          line: 90,
          column: 22,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Advanced window functions",
      range: [2803, 2831],
      loc: {
        start: {
          line: 92,
          column: 0,
        },
        end: {
          line: 92,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "WITH",
      range: [2832, 2836],
      loc: {
        start: {
          line: 93,
          column: 0,
        },
        end: {
          line: 93,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "sales_data",
      range: [2837, 2847],
      loc: {
        start: {
          line: 93,
          column: 5,
        },
        end: {
          line: 93,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [2848, 2850],
      loc: {
        start: {
          line: 93,
          column: 16,
        },
        end: {
          line: 93,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2851, 2852],
      loc: {
        start: {
          line: 93,
          column: 19,
        },
        end: {
          line: 93,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [2857, 2863],
      loc: {
        start: {
          line: 94,
          column: 4,
        },
        end: {
          line: 94,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "product_id",
      range: [2873, 2883],
      loc: {
        start: {
          line: 95,
          column: 8,
        },
        end: {
          line: 95,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2883, 2884],
      loc: {
        start: {
          line: 95,
          column: 18,
        },
        end: {
          line: 95,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "sale_date",
      range: [2893, 2902],
      loc: {
        start: {
          line: 96,
          column: 8,
        },
        end: {
          line: 96,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2902, 2903],
      loc: {
        start: {
          line: 96,
          column: 17,
        },
        end: {
          line: 96,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "amount",
      range: [2912, 2918],
      loc: {
        start: {
          line: 97,
          column: 8,
        },
        end: {
          line: 97,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2918, 2919],
      loc: {
        start: {
          line: 97,
          column: 14,
        },
        end: {
          line: 97,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "LAG",
      range: [2928, 2931],
      loc: {
        start: {
          line: 98,
          column: 8,
        },
        end: {
          line: 98,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2931, 2932],
      loc: {
        start: {
          line: 98,
          column: 11,
        },
        end: {
          line: 98,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "amount",
      range: [2932, 2938],
      loc: {
        start: {
          line: 98,
          column: 12,
        },
        end: {
          line: 98,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2938, 2939],
      loc: {
        start: {
          line: 98,
          column: 18,
        },
        end: {
          line: 98,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "OVER",
      range: [2940, 2944],
      loc: {
        start: {
          line: 98,
          column: 20,
        },
        end: {
          line: 98,
          column: 24,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2945, 2946],
      loc: {
        start: {
          line: 98,
          column: 25,
        },
        end: {
          line: 98,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "PARTITION",
      range: [2946, 2955],
      loc: {
        start: {
          line: 98,
          column: 26,
        },
        end: {
          line: 98,
          column: 35,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [2956, 2958],
      loc: {
        start: {
          line: 98,
          column: 36,
        },
        end: {
          line: 98,
          column: 38,
        },
      },
    },
    {
      type: "Identifier",
      value: "product_id",
      range: [2959, 2969],
      loc: {
        start: {
          line: 98,
          column: 39,
        },
        end: {
          line: 98,
          column: 49,
        },
      },
    },
    {
      type: "Keyword",
      value: "ORDER",
      range: [2970, 2975],
      loc: {
        start: {
          line: 98,
          column: 50,
        },
        end: {
          line: 98,
          column: 55,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [2976, 2978],
      loc: {
        start: {
          line: 98,
          column: 56,
        },
        end: {
          line: 98,
          column: 58,
        },
      },
    },
    {
      type: "Identifier",
      value: "sale_date",
      range: [2979, 2988],
      loc: {
        start: {
          line: 98,
          column: 59,
        },
        end: {
          line: 98,
          column: 68,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2988, 2989],
      loc: {
        start: {
          line: 98,
          column: 68,
        },
        end: {
          line: 98,
          column: 69,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [2990, 2992],
      loc: {
        start: {
          line: 98,
          column: 70,
        },
        end: {
          line: 98,
          column: 72,
        },
      },
    },
    {
      type: "Identifier",
      value: "prev_amount",
      range: [2993, 3004],
      loc: {
        start: {
          line: 98,
          column: 73,
        },
        end: {
          line: 98,
          column: 84,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3004, 3005],
      loc: {
        start: {
          line: 98,
          column: 84,
        },
        end: {
          line: 98,
          column: 85,
        },
      },
    },
    {
      type: "Identifier",
      value: "FIRST_VALUE",
      range: [3014, 3025],
      loc: {
        start: {
          line: 99,
          column: 8,
        },
        end: {
          line: 99,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [3025, 3026],
      loc: {
        start: {
          line: 99,
          column: 19,
        },
        end: {
          line: 99,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "amount",
      range: [3026, 3032],
      loc: {
        start: {
          line: 99,
          column: 20,
        },
        end: {
          line: 99,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [3032, 3033],
      loc: {
        start: {
          line: 99,
          column: 26,
        },
        end: {
          line: 99,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "OVER",
      range: [3034, 3038],
      loc: {
        start: {
          line: 99,
          column: 28,
        },
        end: {
          line: 99,
          column: 32,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [3039, 3040],
      loc: {
        start: {
          line: 99,
          column: 33,
        },
        end: {
          line: 99,
          column: 34,
        },
      },
    },
    {
      type: "Keyword",
      value: "PARTITION",
      range: [3040, 3049],
      loc: {
        start: {
          line: 99,
          column: 34,
        },
        end: {
          line: 99,
          column: 43,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [3050, 3052],
      loc: {
        start: {
          line: 99,
          column: 44,
        },
        end: {
          line: 99,
          column: 46,
        },
      },
    },
    {
      type: "Identifier",
      value: "product_id",
      range: [3053, 3063],
      loc: {
        start: {
          line: 99,
          column: 47,
        },
        end: {
          line: 99,
          column: 57,
        },
      },
    },
    {
      type: "Keyword",
      value: "ORDER",
      range: [3064, 3069],
      loc: {
        start: {
          line: 99,
          column: 58,
        },
        end: {
          line: 99,
          column: 63,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [3070, 3072],
      loc: {
        start: {
          line: 99,
          column: 64,
        },
        end: {
          line: 99,
          column: 66,
        },
      },
    },
    {
      type: "Identifier",
      value: "sale_date",
      range: [3073, 3082],
      loc: {
        start: {
          line: 99,
          column: 67,
        },
        end: {
          line: 99,
          column: 76,
        },
      },
    },
    {
      type: "Keyword",
      value: "ROWS",
      range: [3117, 3121],
      loc: {
        start: {
          line: 100,
          column: 33,
        },
        end: {
          line: 100,
          column: 37,
        },
      },
    },
    {
      type: "Keyword",
      value: "BETWEEN",
      range: [3122, 3129],
      loc: {
        start: {
          line: 100,
          column: 38,
        },
        end: {
          line: 100,
          column: 45,
        },
      },
    },
    {
      type: "Keyword",
      value: "UNBOUNDED",
      range: [3130, 3139],
      loc: {
        start: {
          line: 100,
          column: 46,
        },
        end: {
          line: 100,
          column: 55,
        },
      },
    },
    {
      type: "Keyword",
      value: "PRECEDING",
      range: [3140, 3149],
      loc: {
        start: {
          line: 100,
          column: 56,
        },
        end: {
          line: 100,
          column: 65,
        },
      },
    },
    {
      type: "Keyword",
      value: "AND",
      range: [3150, 3153],
      loc: {
        start: {
          line: 100,
          column: 66,
        },
        end: {
          line: 100,
          column: 69,
        },
      },
    },
    {
      type: "Keyword",
      value: "UNBOUNDED",
      range: [3154, 3163],
      loc: {
        start: {
          line: 100,
          column: 70,
        },
        end: {
          line: 100,
          column: 79,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOLLOWING",
      range: [3164, 3173],
      loc: {
        start: {
          line: 100,
          column: 80,
        },
        end: {
          line: 100,
          column: 89,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [3173, 3174],
      loc: {
        start: {
          line: 100,
          column: 89,
        },
        end: {
          line: 100,
          column: 90,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [3175, 3177],
      loc: {
        start: {
          line: 100,
          column: 91,
        },
        end: {
          line: 100,
          column: 93,
        },
      },
    },
    {
      type: "Identifier",
      value: "first_sale",
      range: [3178, 3188],
      loc: {
        start: {
          line: 100,
          column: 94,
        },
        end: {
          line: 100,
          column: 104,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3188, 3189],
      loc: {
        start: {
          line: 100,
          column: 104,
        },
        end: {
          line: 100,
          column: 105,
        },
      },
    },
    {
      type: "Identifier",
      value: "LAST_VALUE",
      range: [3198, 3208],
      loc: {
        start: {
          line: 101,
          column: 8,
        },
        end: {
          line: 101,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [3208, 3209],
      loc: {
        start: {
          line: 101,
          column: 18,
        },
        end: {
          line: 101,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "amount",
      range: [3209, 3215],
      loc: {
        start: {
          line: 101,
          column: 19,
        },
        end: {
          line: 101,
          column: 25,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [3215, 3216],
      loc: {
        start: {
          line: 101,
          column: 25,
        },
        end: {
          line: 101,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "OVER",
      range: [3217, 3221],
      loc: {
        start: {
          line: 101,
          column: 27,
        },
        end: {
          line: 101,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [3222, 3223],
      loc: {
        start: {
          line: 101,
          column: 32,
        },
        end: {
          line: 101,
          column: 33,
        },
      },
    },
    {
      type: "Keyword",
      value: "PARTITION",
      range: [3223, 3232],
      loc: {
        start: {
          line: 101,
          column: 33,
        },
        end: {
          line: 101,
          column: 42,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [3233, 3235],
      loc: {
        start: {
          line: 101,
          column: 43,
        },
        end: {
          line: 101,
          column: 45,
        },
      },
    },
    {
      type: "Identifier",
      value: "product_id",
      range: [3236, 3246],
      loc: {
        start: {
          line: 101,
          column: 46,
        },
        end: {
          line: 101,
          column: 56,
        },
      },
    },
    {
      type: "Keyword",
      value: "ORDER",
      range: [3247, 3252],
      loc: {
        start: {
          line: 101,
          column: 57,
        },
        end: {
          line: 101,
          column: 62,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [3253, 3255],
      loc: {
        start: {
          line: 101,
          column: 63,
        },
        end: {
          line: 101,
          column: 65,
        },
      },
    },
    {
      type: "Identifier",
      value: "sale_date",
      range: [3256, 3265],
      loc: {
        start: {
          line: 101,
          column: 66,
        },
        end: {
          line: 101,
          column: 75,
        },
      },
    },
    {
      type: "Keyword",
      value: "ROWS",
      range: [3299, 3303],
      loc: {
        start: {
          line: 102,
          column: 32,
        },
        end: {
          line: 102,
          column: 36,
        },
      },
    },
    {
      type: "Keyword",
      value: "BETWEEN",
      range: [3304, 3311],
      loc: {
        start: {
          line: 102,
          column: 37,
        },
        end: {
          line: 102,
          column: 44,
        },
      },
    },
    {
      type: "Keyword",
      value: "UNBOUNDED",
      range: [3312, 3321],
      loc: {
        start: {
          line: 102,
          column: 45,
        },
        end: {
          line: 102,
          column: 54,
        },
      },
    },
    {
      type: "Keyword",
      value: "PRECEDING",
      range: [3322, 3331],
      loc: {
        start: {
          line: 102,
          column: 55,
        },
        end: {
          line: 102,
          column: 64,
        },
      },
    },
    {
      type: "Keyword",
      value: "AND",
      range: [3332, 3335],
      loc: {
        start: {
          line: 102,
          column: 65,
        },
        end: {
          line: 102,
          column: 68,
        },
      },
    },
    {
      type: "Keyword",
      value: "UNBOUNDED",
      range: [3336, 3345],
      loc: {
        start: {
          line: 102,
          column: 69,
        },
        end: {
          line: 102,
          column: 78,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOLLOWING",
      range: [3346, 3355],
      loc: {
        start: {
          line: 102,
          column: 79,
        },
        end: {
          line: 102,
          column: 88,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [3355, 3356],
      loc: {
        start: {
          line: 102,
          column: 88,
        },
        end: {
          line: 102,
          column: 89,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [3357, 3359],
      loc: {
        start: {
          line: 102,
          column: 90,
        },
        end: {
          line: 102,
          column: 92,
        },
      },
    },
    {
      type: "Identifier",
      value: "last_sale",
      range: [3360, 3369],
      loc: {
        start: {
          line: 102,
          column: 93,
        },
        end: {
          line: 102,
          column: 102,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [3374, 3378],
      loc: {
        start: {
          line: 103,
          column: 4,
        },
        end: {
          line: 103,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "sales",
      range: [3379, 3384],
      loc: {
        start: {
          line: 103,
          column: 9,
        },
        end: {
          line: 103,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [3385, 3386],
      loc: {
        start: {
          line: 104,
          column: 0,
        },
        end: {
          line: 104,
          column: 1,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [3387, 3393],
      loc: {
        start: {
          line: 105,
          column: 0,
        },
        end: {
          line: 105,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "product_id",
      range: [3399, 3409],
      loc: {
        start: {
          line: 106,
          column: 4,
        },
        end: {
          line: 106,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3409, 3410],
      loc: {
        start: {
          line: 106,
          column: 14,
        },
        end: {
          line: 106,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "amount",
      range: [3415, 3421],
      loc: {
        start: {
          line: 107,
          column: 4,
        },
        end: {
          line: 107,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3421, 3422],
      loc: {
        start: {
          line: 107,
          column: 10,
        },
        end: {
          line: 107,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "prev_amount",
      range: [3427, 3438],
      loc: {
        start: {
          line: 108,
          column: 4,
        },
        end: {
          line: 108,
          column: 15,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3438, 3439],
      loc: {
        start: {
          line: 108,
          column: 15,
        },
        end: {
          line: 108,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "amount",
      range: [3444, 3450],
      loc: {
        start: {
          line: 109,
          column: 4,
        },
        end: {
          line: 109,
          column: 10,
        },
      },
    },
    {
      type: "Operator",
      value: "-",
      range: [3451, 3452],
      loc: {
        start: {
          line: 109,
          column: 11,
        },
        end: {
          line: 109,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "prev_amount",
      range: [3453, 3464],
      loc: {
        start: {
          line: 109,
          column: 13,
        },
        end: {
          line: 109,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [3465, 3467],
      loc: {
        start: {
          line: 109,
          column: 25,
        },
        end: {
          line: 109,
          column: 27,
        },
      },
    },
    {
      type: "Identifier",
      value: "growth",
      range: [3468, 3474],
      loc: {
        start: {
          line: 109,
          column: 28,
        },
        end: {
          line: 109,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3474, 3475],
      loc: {
        start: {
          line: 109,
          column: 34,
        },
        end: {
          line: 109,
          column: 35,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [3480, 3481],
      loc: {
        start: {
          line: 110,
          column: 4,
        },
        end: {
          line: 110,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "amount",
      range: [3481, 3487],
      loc: {
        start: {
          line: 110,
          column: 5,
        },
        end: {
          line: 110,
          column: 11,
        },
      },
    },
    {
      type: "Operator",
      value: "-",
      range: [3488, 3489],
      loc: {
        start: {
          line: 110,
          column: 12,
        },
        end: {
          line: 110,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "first_sale",
      range: [3490, 3500],
      loc: {
        start: {
          line: 110,
          column: 14,
        },
        end: {
          line: 110,
          column: 24,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [3500, 3501],
      loc: {
        start: {
          line: 110,
          column: 24,
        },
        end: {
          line: 110,
          column: 25,
        },
      },
    },
    {
      type: "Operator",
      value: "/",
      range: [3502, 3503],
      loc: {
        start: {
          line: 110,
          column: 26,
        },
        end: {
          line: 110,
          column: 27,
        },
      },
    },
    {
      type: "Identifier",
      value: "first_sale",
      range: [3504, 3514],
      loc: {
        start: {
          line: 110,
          column: 28,
        },
        end: {
          line: 110,
          column: 38,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [3515, 3516],
      loc: {
        start: {
          line: 110,
          column: 39,
        },
        end: {
          line: 110,
          column: 40,
        },
      },
    },
    {
      type: "Numeric",
      value: "100",
      range: [3517, 3520],
      loc: {
        start: {
          line: 110,
          column: 41,
        },
        end: {
          line: 110,
          column: 44,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [3521, 3523],
      loc: {
        start: {
          line: 110,
          column: 45,
        },
        end: {
          line: 110,
          column: 47,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_growth_percent",
      range: [3524, 3544],
      loc: {
        start: {
          line: 110,
          column: 48,
        },
        end: {
          line: 110,
          column: 68,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [3545, 3549],
      loc: {
        start: {
          line: 111,
          column: 0,
        },
        end: {
          line: 111,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "sales_data",
      range: [3550, 3560],
      loc: {
        start: {
          line: 111,
          column: 5,
        },
        end: {
          line: 111,
          column: 15,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [3560, 3561],
      loc: {
        start: {
          line: 111,
          column: 15,
        },
        end: {
          line: 111,
          column: 16,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- LATERAL joins",
      range: [3563, 3579],
      loc: {
        start: {
          line: 113,
          column: 0,
        },
        end: {
          line: 113,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [3580, 3586],
      loc: {
        start: {
          line: 114,
          column: 0,
        },
        end: {
          line: 114,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [3587, 3588],
      loc: {
        start: {
          line: 114,
          column: 7,
        },
        end: {
          line: 114,
          column: 8,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [3588, 3589],
      loc: {
        start: {
          line: 114,
          column: 8,
        },
        end: {
          line: 114,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [3589, 3591],
      loc: {
        start: {
          line: 114,
          column: 9,
        },
        end: {
          line: 114,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3591, 3592],
      loc: {
        start: {
          line: 114,
          column: 11,
        },
        end: {
          line: 114,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [3593, 3594],
      loc: {
        start: {
          line: 114,
          column: 13,
        },
        end: {
          line: 114,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [3594, 3595],
      loc: {
        start: {
          line: 114,
          column: 14,
        },
        end: {
          line: 114,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [3595, 3599],
      loc: {
        start: {
          line: 114,
          column: 15,
        },
        end: {
          line: 114,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3599, 3600],
      loc: {
        start: {
          line: 114,
          column: 19,
        },
        end: {
          line: 114,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "recent_orders",
      range: [3601, 3614],
      loc: {
        start: {
          line: 114,
          column: 21,
        },
        end: {
          line: 114,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [3614, 3615],
      loc: {
        start: {
          line: 114,
          column: 34,
        },
        end: {
          line: 114,
          column: 35,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [3615, 3616],
      loc: {
        start: {
          line: 114,
          column: 35,
        },
        end: {
          line: 114,
          column: 36,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [3617, 3621],
      loc: {
        start: {
          line: 115,
          column: 0,
        },
        end: {
          line: 115,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [3622, 3627],
      loc: {
        start: {
          line: 115,
          column: 5,
        },
        end: {
          line: 115,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [3628, 3629],
      loc: {
        start: {
          line: 115,
          column: 11,
        },
        end: {
          line: 115,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "CROSS",
      range: [3630, 3635],
      loc: {
        start: {
          line: 116,
          column: 0,
        },
        end: {
          line: 116,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "JOIN",
      range: [3636, 3640],
      loc: {
        start: {
          line: 116,
          column: 6,
        },
        end: {
          line: 116,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "LATERAL",
      range: [3641, 3648],
      loc: {
        start: {
          line: 116,
          column: 11,
        },
        end: {
          line: 116,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [3649, 3650],
      loc: {
        start: {
          line: 116,
          column: 19,
        },
        end: {
          line: 116,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [3655, 3661],
      loc: {
        start: {
          line: 117,
          column: 4,
        },
        end: {
          line: 117,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_date",
      range: [3662, 3672],
      loc: {
        start: {
          line: 117,
          column: 11,
        },
        end: {
          line: 117,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3672, 3673],
      loc: {
        start: {
          line: 117,
          column: 21,
        },
        end: {
          line: 117,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [3674, 3686],
      loc: {
        start: {
          line: 117,
          column: 23,
        },
        end: {
          line: 117,
          column: 35,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [3691, 3695],
      loc: {
        start: {
          line: 118,
          column: 4,
        },
        end: {
          line: 118,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "orders",
      range: [3696, 3702],
      loc: {
        start: {
          line: 118,
          column: 9,
        },
        end: {
          line: 118,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [3703, 3704],
      loc: {
        start: {
          line: 118,
          column: 16,
        },
        end: {
          line: 118,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [3709, 3714],
      loc: {
        start: {
          line: 119,
          column: 4,
        },
        end: {
          line: 119,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [3715, 3716],
      loc: {
        start: {
          line: 119,
          column: 10,
        },
        end: {
          line: 119,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [3716, 3717],
      loc: {
        start: {
          line: 119,
          column: 11,
        },
        end: {
          line: 119,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [3717, 3724],
      loc: {
        start: {
          line: 119,
          column: 12,
        },
        end: {
          line: 119,
          column: 19,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [3725, 3726],
      loc: {
        start: {
          line: 119,
          column: 20,
        },
        end: {
          line: 119,
          column: 21,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [3727, 3728],
      loc: {
        start: {
          line: 119,
          column: 22,
        },
        end: {
          line: 119,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [3728, 3729],
      loc: {
        start: {
          line: 119,
          column: 23,
        },
        end: {
          line: 119,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [3729, 3731],
      loc: {
        start: {
          line: 119,
          column: 24,
        },
        end: {
          line: 119,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "ORDER",
      range: [3736, 3741],
      loc: {
        start: {
          line: 120,
          column: 4,
        },
        end: {
          line: 120,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [3742, 3744],
      loc: {
        start: {
          line: 120,
          column: 10,
        },
        end: {
          line: 120,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_date",
      range: [3745, 3755],
      loc: {
        start: {
          line: 120,
          column: 13,
        },
        end: {
          line: 120,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "DESC",
      range: [3756, 3760],
      loc: {
        start: {
          line: 120,
          column: 24,
        },
        end: {
          line: 120,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "LIMIT",
      range: [3765, 3770],
      loc: {
        start: {
          line: 121,
          column: 4,
        },
        end: {
          line: 121,
          column: 9,
        },
      },
    },
    {
      type: "Numeric",
      value: "3",
      range: [3771, 3772],
      loc: {
        start: {
          line: 121,
          column: 10,
        },
        end: {
          line: 121,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [3773, 3774],
      loc: {
        start: {
          line: 122,
          column: 0,
        },
        end: {
          line: 122,
          column: 1,
        },
      },
    },
    {
      type: "Identifier",
      value: "recent_orders",
      range: [3775, 3788],
      loc: {
        start: {
          line: 122,
          column: 2,
        },
        end: {
          line: 122,
          column: 15,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [3788, 3789],
      loc: {
        start: {
          line: 122,
          column: 15,
        },
        end: {
          line: 122,
          column: 16,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Exclusion constraints",
      range: [3791, 3815],
      loc: {
        start: {
          line: 124,
          column: 0,
        },
        end: {
          line: 124,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "ALTER",
      range: [3816, 3821],
      loc: {
        start: {
          line: 125,
          column: 0,
        },
        end: {
          line: 125,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [3822, 3827],
      loc: {
        start: {
          line: 125,
          column: 6,
        },
        end: {
          line: 125,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "bookings",
      range: [3828, 3836],
      loc: {
        start: {
          line: 125,
          column: 12,
        },
        end: {
          line: 125,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "ADD",
      range: [3837, 3840],
      loc: {
        start: {
          line: 125,
          column: 21,
        },
        end: {
          line: 125,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "CONSTRAINT",
      range: [3841, 3851],
      loc: {
        start: {
          line: 125,
          column: 25,
        },
        end: {
          line: 125,
          column: 35,
        },
      },
    },
    {
      type: "Identifier",
      value: "no_overlapping_bookings",
      range: [3852, 3875],
      loc: {
        start: {
          line: 125,
          column: 36,
        },
        end: {
          line: 125,
          column: 59,
        },
      },
    },
    {
      type: "Identifier",
      value: "EXCLUDE",
      range: [3876, 3883],
      loc: {
        start: {
          line: 126,
          column: 0,
        },
        end: {
          line: 126,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "USING",
      range: [3884, 3889],
      loc: {
        start: {
          line: 126,
          column: 8,
        },
        end: {
          line: 126,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "gist",
      range: [3890, 3894],
      loc: {
        start: {
          line: 126,
          column: 14,
        },
        end: {
          line: 126,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [3895, 3896],
      loc: {
        start: {
          line: 126,
          column: 19,
        },
        end: {
          line: 126,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "resource_id",
      range: [3896, 3907],
      loc: {
        start: {
          line: 126,
          column: 20,
        },
        end: {
          line: 126,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "WITH",
      range: [3908, 3912],
      loc: {
        start: {
          line: 126,
          column: 32,
        },
        end: {
          line: 126,
          column: 36,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [3913, 3914],
      loc: {
        start: {
          line: 126,
          column: 37,
        },
        end: {
          line: 126,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3914, 3915],
      loc: {
        start: {
          line: 126,
          column: 38,
        },
        end: {
          line: 126,
          column: 39,
        },
      },
    },
    {
      type: "Identifier",
      value: "tsrange",
      range: [3916, 3923],
      loc: {
        start: {
          line: 126,
          column: 40,
        },
        end: {
          line: 126,
          column: 47,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [3923, 3924],
      loc: {
        start: {
          line: 126,
          column: 47,
        },
        end: {
          line: 126,
          column: 48,
        },
      },
    },
    {
      type: "Identifier",
      value: "start_time",
      range: [3924, 3934],
      loc: {
        start: {
          line: 126,
          column: 48,
        },
        end: {
          line: 126,
          column: 58,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3934, 3935],
      loc: {
        start: {
          line: 126,
          column: 58,
        },
        end: {
          line: 126,
          column: 59,
        },
      },
    },
    {
      type: "Identifier",
      value: "end_time",
      range: [3936, 3944],
      loc: {
        start: {
          line: 126,
          column: 60,
        },
        end: {
          line: 126,
          column: 68,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [3944, 3945],
      loc: {
        start: {
          line: 126,
          column: 68,
        },
        end: {
          line: 126,
          column: 69,
        },
      },
    },
    {
      type: "Keyword",
      value: "WITH",
      range: [3946, 3950],
      loc: {
        start: {
          line: 126,
          column: 70,
        },
        end: {
          line: 126,
          column: 74,
        },
      },
    },
    {
      type: "Operator",
      value: "&&",
      range: [3951, 3953],
      loc: {
        start: {
          line: 126,
          column: 75,
        },
        end: {
          line: 126,
          column: 77,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [3953, 3954],
      loc: {
        start: {
          line: 126,
          column: 77,
        },
        end: {
          line: 126,
          column: 78,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [3954, 3955],
      loc: {
        start: {
          line: 126,
          column: 78,
        },
        end: {
          line: 126,
          column: 79,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Deferrable constraints",
      range: [3957, 3982],
      loc: {
        start: {
          line: 128,
          column: 0,
        },
        end: {
          line: 128,
          column: 25,
        },
      },
    },
    {
      type: "Keyword",
      value: "ALTER",
      range: [3983, 3988],
      loc: {
        start: {
          line: 129,
          column: 0,
        },
        end: {
          line: 129,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [3989, 3994],
      loc: {
        start: {
          line: 129,
          column: 6,
        },
        end: {
          line: 129,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "orders",
      range: [3995, 4001],
      loc: {
        start: {
          line: 129,
          column: 12,
        },
        end: {
          line: 129,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "ADD",
      range: [4002, 4005],
      loc: {
        start: {
          line: 129,
          column: 19,
        },
        end: {
          line: 129,
          column: 22,
        },
      },
    },
    {
      type: "Keyword",
      value: "CONSTRAINT",
      range: [4006, 4016],
      loc: {
        start: {
          line: 129,
          column: 23,
        },
        end: {
          line: 129,
          column: 33,
        },
      },
    },
    {
      type: "Identifier",
      value: "fk_user_id",
      range: [4017, 4027],
      loc: {
        start: {
          line: 129,
          column: 34,
        },
        end: {
          line: 129,
          column: 44,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOREIGN",
      range: [4028, 4035],
      loc: {
        start: {
          line: 130,
          column: 0,
        },
        end: {
          line: 130,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "KEY",
      range: [4036, 4039],
      loc: {
        start: {
          line: 130,
          column: 8,
        },
        end: {
          line: 130,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [4040, 4041],
      loc: {
        start: {
          line: 130,
          column: 12,
        },
        end: {
          line: 130,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [4041, 4048],
      loc: {
        start: {
          line: 130,
          column: 13,
        },
        end: {
          line: 130,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [4048, 4049],
      loc: {
        start: {
          line: 130,
          column: 20,
        },
        end: {
          line: 130,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "REFERENCES",
      range: [4050, 4060],
      loc: {
        start: {
          line: 130,
          column: 22,
        },
        end: {
          line: 130,
          column: 32,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [4061, 4066],
      loc: {
        start: {
          line: 130,
          column: 33,
        },
        end: {
          line: 130,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [4066, 4067],
      loc: {
        start: {
          line: 130,
          column: 38,
        },
        end: {
          line: 130,
          column: 39,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [4067, 4069],
      loc: {
        start: {
          line: 130,
          column: 39,
        },
        end: {
          line: 130,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [4069, 4070],
      loc: {
        start: {
          line: 130,
          column: 41,
        },
        end: {
          line: 130,
          column: 42,
        },
      },
    },
    {
      type: "Keyword",
      value: "DEFERRABLE",
      range: [4071, 4081],
      loc: {
        start: {
          line: 131,
          column: 0,
        },
        end: {
          line: 131,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "INITIALLY",
      range: [4082, 4091],
      loc: {
        start: {
          line: 131,
          column: 11,
        },
        end: {
          line: 131,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "DEFERRED",
      range: [4092, 4100],
      loc: {
        start: {
          line: 131,
          column: 21,
        },
        end: {
          line: 131,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [4100, 4101],
      loc: {
        start: {
          line: 131,
          column: 29,
        },
        end: {
          line: 131,
          column: 30,
        },
      },
    },
  ],
  comments: [],
} satisfies Program;
