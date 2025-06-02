import type { Program } from "../../../src/ast.ts";

export default {
  type: "Program",
  range: [0, 609],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 24,
      column: 46,
    },
  },
  body: [
    {
      type: "CreateStmt",
      relation: {
        relname: "users",
        inh: true,
        relpersistence: "p",
        range: [36, 41],
        loc: {
          start: {
            line: 2,
            column: 13,
          },
          end: {
            line: 2,
            column: 18,
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
            range: [51, 57],
            loc: {
              start: {
                line: 3,
                column: 7,
              },
              end: {
                line: 3,
                column: 13,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_PRIMARY",
              range: [58, 65],
              loc: {
                start: {
                  line: 3,
                  column: 14,
                },
                end: {
                  line: 3,
                  column: 21,
                },
              },
            },
          ],
          range: [48, 50],
          loc: {
            start: {
              line: 3,
              column: 4,
            },
            end: {
              line: 3,
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
                  ival: 100,
                },
                range: [88, 91],
                loc: {
                  start: {
                    line: 4,
                    column: 17,
                  },
                  end: {
                    line: 4,
                    column: 20,
                  },
                },
              },
            ],
            typemod: -1,
            type: "names",
            range: [80, 87],
            loc: {
              start: {
                line: 4,
                column: 9,
              },
              end: {
                line: 4,
                column: 16,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_NOTNULL",
              range: [93, 96],
              loc: {
                start: {
                  line: 4,
                  column: 22,
                },
                end: {
                  line: 4,
                  column: 25,
                },
              },
            },
          ],
          range: [75, 79],
          loc: {
            start: {
              line: 4,
              column: 4,
            },
            end: {
              line: 4,
              column: 8,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "email",
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
                range: [121, 124],
                loc: {
                  start: {
                    line: 5,
                    column: 18,
                  },
                  end: {
                    line: 5,
                    column: 21,
                  },
                },
              },
            ],
            typemod: -1,
            type: "names",
            range: [113, 120],
            loc: {
              start: {
                line: 5,
                column: 10,
              },
              end: {
                line: 5,
                column: 17,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_UNIQUE",
              range: [126, 132],
              loc: {
                start: {
                  line: 5,
                  column: 23,
                },
                end: {
                  line: 5,
                  column: 29,
                },
              },
            },
          ],
          range: [107, 112],
          loc: {
            start: {
              line: 5,
              column: 4,
            },
            end: {
              line: 5,
              column: 9,
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
            range: [149, 158],
            loc: {
              start: {
                line: 6,
                column: 15,
              },
              end: {
                line: 6,
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
                type: "SQLValueFunction",
                op: "SVFOP_CURRENT_TIMESTAMP",
                typmod: -1,
                range: [167, 184],
                loc: {
                  start: {
                    line: 6,
                    column: 33,
                  },
                  end: {
                    line: 6,
                    column: 50,
                  },
                },
              },
              range: [159, 166],
              loc: {
                start: {
                  line: 6,
                  column: 25,
                },
                end: {
                  line: 6,
                  column: 32,
                },
              },
            },
          ],
          range: [138, 148],
          loc: {
            start: {
              line: 6,
              column: 4,
            },
            end: {
              line: 6,
              column: 14,
            },
          },
        },
      ],
      oncommit: "ONCOMMIT_NOOP",
      range: [0, 184],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 6,
          column: 50,
        },
      },
    },
    {
      type: "AlterTableStmt",
      relation: {
        relname: "users",
        inh: true,
        relpersistence: "p",
        range: [201, 206],
        loc: {
          start: {
            line: 9,
            column: 12,
          },
          end: {
            line: 9,
            column: 17,
          },
        },
      },
      cmds: [
        {
          type: "AlterTableCmd",
          subtype: "AT_AddColumn",
          def: {
            type: "ColumnDef",
            colname: "last_login",
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
              range: [229, 238],
              loc: {
                start: {
                  line: 10,
                  column: 22,
                },
                end: {
                  line: 10,
                  column: 31,
                },
              },
            },
            is_local: true,
            range: [218, 228],
            loc: {
              start: {
                line: 10,
                column: 11,
              },
              end: {
                line: 10,
                column: 21,
              },
            },
          },
          behavior: "DROP_RESTRICT",
          range: [0, 238],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 10,
              column: 31,
            },
          },
        },
        {
          type: "AlterTableCmd",
          subtype: "AT_AddColumn",
          def: {
            type: "ColumnDef",
            colname: "status",
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
                    ival: 20,
                  },
                  range: [266, 268],
                  loc: {
                    start: {
                      line: 11,
                      column: 26,
                    },
                    end: {
                      line: 11,
                      column: 28,
                    },
                  },
                },
              ],
              typemod: -1,
              type: "names",
              range: [258, 265],
              loc: {
                start: {
                  line: 11,
                  column: 18,
                },
                end: {
                  line: 11,
                  column: 25,
                },
              },
            },
            is_local: true,
            constraints: [
              {
                type: "Constraint",
                contype: "CONSTR_DEFAULT",
                raw_expr: {
                  type: "A_Const",
                  sval: {
                    sval: "active",
                  },
                  range: [278, 286],
                  loc: {
                    start: {
                      line: 11,
                      column: 38,
                    },
                    end: {
                      line: 11,
                      column: 46,
                    },
                  },
                },
                range: [270, 277],
                loc: {
                  start: {
                    line: 11,
                    column: 30,
                  },
                  end: {
                    line: 11,
                    column: 37,
                  },
                },
              },
            ],
            range: [251, 257],
            loc: {
              start: {
                line: 11,
                column: 11,
              },
              end: {
                line: 11,
                column: 17,
              },
            },
          },
          behavior: "DROP_RESTRICT",
          range: [0, 286],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 11,
              column: 46,
            },
          },
        },
        {
          type: "AlterTableCmd",
          subtype: "AT_DropColumn",
          name: "email",
          behavior: "DROP_RESTRICT",
          range: [0, 0],
          loc: {
            start: {
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
      objtype: "OBJECT_TABLE",
      range: [0, 286],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 11,
          column: 46,
        },
      },
    },
    {
      type: "RenameStmt",
      renameType: "OBJECT_COLUMN",
      relationType: "OBJECT_TABLE",
      relation: {
        relname: "users",
        inh: true,
        relpersistence: "p",
        range: [320, 325],
        loc: {
          start: {
            line: 14,
            column: 12,
          },
          end: {
            line: 14,
            column: 17,
          },
        },
      },
      subname: "name",
      newname: "full_name",
      behavior: "DROP_RESTRICT",
      range: [320, 325],
      loc: {
        start: {
          line: 14,
          column: 12,
        },
        end: {
          line: 14,
          column: 17,
        },
      },
    },
    {
      type: "IndexStmt",
      idxname: "idx_users_status",
      relation: {
        relname: "users",
        inh: true,
        relpersistence: "p",
        range: [393, 398],
        loc: {
          start: {
            line: 17,
            column: 33,
          },
          end: {
            line: 17,
            column: 38,
          },
        },
      },
      accessMethod: "btree",
      indexParams: [
        {
          type: "IndexElem",
          name: "status",
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
      range: [0, 398],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 17,
          column: 38,
        },
      },
    },
    {
      type: "IndexStmt",
      idxname: "idx_users_email",
      relation: {
        relname: "users",
        inh: true,
        relpersistence: "p",
        range: [447, 452],
        loc: {
          start: {
            line: 18,
            column: 39,
          },
          end: {
            line: 18,
            column: 44,
          },
        },
      },
      accessMethod: "btree",
      indexParams: [
        {
          type: "IndexElem",
          name: "email",
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
      unique: true,
      range: [0, 452],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 18,
          column: 44,
        },
      },
    },
    {
      type: "DropStmt",
      objects: [
        {
          type: "List",
          items: [
            {
              type: "String",
              sval: "old_table",
              range: [0, 0],
              loc: {
                start: {
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
      removeType: "OBJECT_TABLE",
      behavior: "DROP_RESTRICT",
      missing_ok: true,
      range: [0, 0],
      loc: {
        start: {
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
      type: "CreateEnumStmt",
      typeName: [
        {
          type: "String",
          sval: "user_status",
          range: [0, 0],
          loc: {
            start: {
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
      vals: [
        {
          type: "String",
          sval: "active",
          range: [0, 0],
          loc: {
            start: {
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
          sval: "inactive",
          range: [0, 0],
          loc: {
            start: {
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
          sval: "pending",
          range: [0, 0],
          loc: {
            start: {
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
      type: "AlterEnumStmt",
      typeName: [
        {
          type: "String",
          sval: "user_status",
          range: [0, 0],
          loc: {
            start: {
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
      newVal: "suspended",
      newValIsAfter: true,
      range: [0, 0],
      loc: {
        start: {
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
  tokens: [
    {
      type: "LineComment",
      value: "-- DDL operations test",
      range: [0, 22],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 22,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [23, 29],
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
      type: "Keyword",
      value: "TABLE",
      range: [30, 35],
      loc: {
        start: {
          line: 2,
          column: 7,
        },
        end: {
          line: 2,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [36, 41],
      loc: {
        start: {
          line: 2,
          column: 13,
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
      range: [42, 43],
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
      type: "Identifier",
      value: "id",
      range: [48, 50],
      loc: {
        start: {
          line: 3,
          column: 4,
        },
        end: {
          line: 3,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "SERIAL",
      range: [51, 57],
      loc: {
        start: {
          line: 3,
          column: 7,
        },
        end: {
          line: 3,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "PRIMARY",
      range: [58, 65],
      loc: {
        start: {
          line: 3,
          column: 14,
        },
        end: {
          line: 3,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "KEY",
      range: [66, 69],
      loc: {
        start: {
          line: 3,
          column: 22,
        },
        end: {
          line: 3,
          column: 25,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [69, 70],
      loc: {
        start: {
          line: 3,
          column: 25,
        },
        end: {
          line: 3,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [75, 79],
      loc: {
        start: {
          line: 4,
          column: 4,
        },
        end: {
          line: 4,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "VARCHAR",
      range: [80, 87],
      loc: {
        start: {
          line: 4,
          column: 9,
        },
        end: {
          line: 4,
          column: 16,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [87, 88],
      loc: {
        start: {
          line: 4,
          column: 16,
        },
        end: {
          line: 4,
          column: 17,
        },
      },
    },
    {
      type: "Numeric",
      value: "100",
      range: [88, 91],
      loc: {
        start: {
          line: 4,
          column: 17,
        },
        end: {
          line: 4,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [91, 92],
      loc: {
        start: {
          line: 4,
          column: 20,
        },
        end: {
          line: 4,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [93, 96],
      loc: {
        start: {
          line: 4,
          column: 22,
        },
        end: {
          line: 4,
          column: 25,
        },
      },
    },
    {
      type: "Keyword",
      value: "NULL",
      range: [97, 101],
      loc: {
        start: {
          line: 4,
          column: 26,
        },
        end: {
          line: 4,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [101, 102],
      loc: {
        start: {
          line: 4,
          column: 30,
        },
        end: {
          line: 4,
          column: 31,
        },
      },
    },
    {
      type: "Identifier",
      value: "email",
      range: [107, 112],
      loc: {
        start: {
          line: 5,
          column: 4,
        },
        end: {
          line: 5,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "VARCHAR",
      range: [113, 120],
      loc: {
        start: {
          line: 5,
          column: 10,
        },
        end: {
          line: 5,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [120, 121],
      loc: {
        start: {
          line: 5,
          column: 17,
        },
        end: {
          line: 5,
          column: 18,
        },
      },
    },
    {
      type: "Numeric",
      value: "255",
      range: [121, 124],
      loc: {
        start: {
          line: 5,
          column: 18,
        },
        end: {
          line: 5,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [124, 125],
      loc: {
        start: {
          line: 5,
          column: 21,
        },
        end: {
          line: 5,
          column: 22,
        },
      },
    },
    {
      type: "Keyword",
      value: "UNIQUE",
      range: [126, 132],
      loc: {
        start: {
          line: 5,
          column: 23,
        },
        end: {
          line: 5,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [132, 133],
      loc: {
        start: {
          line: 5,
          column: 29,
        },
        end: {
          line: 5,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "created_at",
      range: [138, 148],
      loc: {
        start: {
          line: 6,
          column: 4,
        },
        end: {
          line: 6,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "TIMESTAMP",
      range: [149, 158],
      loc: {
        start: {
          line: 6,
          column: 15,
        },
        end: {
          line: 6,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "DEFAULT",
      range: [159, 166],
      loc: {
        start: {
          line: 6,
          column: 25,
        },
        end: {
          line: 6,
          column: 32,
        },
      },
    },
    {
      type: "Keyword",
      value: "CURRENT_TIMESTAMP",
      range: [167, 184],
      loc: {
        start: {
          line: 6,
          column: 33,
        },
        end: {
          line: 6,
          column: 50,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [185, 186],
      loc: {
        start: {
          line: 7,
          column: 0,
        },
        end: {
          line: 7,
          column: 1,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [186, 187],
      loc: {
        start: {
          line: 7,
          column: 1,
        },
        end: {
          line: 7,
          column: 2,
        },
      },
    },
    {
      type: "Keyword",
      value: "ALTER",
      range: [189, 194],
      loc: {
        start: {
          line: 9,
          column: 0,
        },
        end: {
          line: 9,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [195, 200],
      loc: {
        start: {
          line: 9,
          column: 6,
        },
        end: {
          line: 9,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [201, 206],
      loc: {
        start: {
          line: 9,
          column: 12,
        },
        end: {
          line: 9,
          column: 17,
        },
      },
    },
    {
      type: "Identifier",
      value: "ADD",
      range: [207, 210],
      loc: {
        start: {
          line: 10,
          column: 0,
        },
        end: {
          line: 10,
          column: 3,
        },
      },
    },
    {
      type: "Keyword",
      value: "COLUMN",
      range: [211, 217],
      loc: {
        start: {
          line: 10,
          column: 4,
        },
        end: {
          line: 10,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "last_login",
      range: [218, 228],
      loc: {
        start: {
          line: 10,
          column: 11,
        },
        end: {
          line: 10,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "TIMESTAMP",
      range: [229, 238],
      loc: {
        start: {
          line: 10,
          column: 22,
        },
        end: {
          line: 10,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [238, 239],
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
      value: "ADD",
      range: [240, 243],
      loc: {
        start: {
          line: 11,
          column: 0,
        },
        end: {
          line: 11,
          column: 3,
        },
      },
    },
    {
      type: "Keyword",
      value: "COLUMN",
      range: [244, 250],
      loc: {
        start: {
          line: 11,
          column: 4,
        },
        end: {
          line: 11,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [251, 257],
      loc: {
        start: {
          line: 11,
          column: 11,
        },
        end: {
          line: 11,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "VARCHAR",
      range: [258, 265],
      loc: {
        start: {
          line: 11,
          column: 18,
        },
        end: {
          line: 11,
          column: 25,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [265, 266],
      loc: {
        start: {
          line: 11,
          column: 25,
        },
        end: {
          line: 11,
          column: 26,
        },
      },
    },
    {
      type: "Numeric",
      value: "20",
      range: [266, 268],
      loc: {
        start: {
          line: 11,
          column: 26,
        },
        end: {
          line: 11,
          column: 28,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [268, 269],
      loc: {
        start: {
          line: 11,
          column: 28,
        },
        end: {
          line: 11,
          column: 29,
        },
      },
    },
    {
      type: "Keyword",
      value: "DEFAULT",
      range: [270, 277],
      loc: {
        start: {
          line: 11,
          column: 30,
        },
        end: {
          line: 11,
          column: 37,
        },
      },
    },
    {
      type: "String",
      value: "'active'",
      range: [278, 286],
      loc: {
        start: {
          line: 11,
          column: 38,
        },
        end: {
          line: 11,
          column: 46,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [286, 287],
      loc: {
        start: {
          line: 11,
          column: 46,
        },
        end: {
          line: 11,
          column: 47,
        },
      },
    },
    {
      type: "Keyword",
      value: "DROP",
      range: [288, 292],
      loc: {
        start: {
          line: 12,
          column: 0,
        },
        end: {
          line: 12,
          column: 4,
        },
      },
    },
    {
      type: "Keyword",
      value: "COLUMN",
      range: [293, 299],
      loc: {
        start: {
          line: 12,
          column: 5,
        },
        end: {
          line: 12,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "email",
      range: [300, 305],
      loc: {
        start: {
          line: 12,
          column: 12,
        },
        end: {
          line: 12,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [305, 306],
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
      type: "Keyword",
      value: "ALTER",
      range: [308, 313],
      loc: {
        start: {
          line: 14,
          column: 0,
        },
        end: {
          line: 14,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [314, 319],
      loc: {
        start: {
          line: 14,
          column: 6,
        },
        end: {
          line: 14,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [320, 325],
      loc: {
        start: {
          line: 14,
          column: 12,
        },
        end: {
          line: 14,
          column: 17,
        },
      },
    },
    {
      type: "Identifier",
      value: "RENAME",
      range: [326, 332],
      loc: {
        start: {
          line: 15,
          column: 0,
        },
        end: {
          line: 15,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "COLUMN",
      range: [333, 339],
      loc: {
        start: {
          line: 15,
          column: 7,
        },
        end: {
          line: 15,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [340, 344],
      loc: {
        start: {
          line: 15,
          column: 14,
        },
        end: {
          line: 15,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "TO",
      range: [345, 347],
      loc: {
        start: {
          line: 15,
          column: 19,
        },
        end: {
          line: 15,
          column: 21,
        },
      },
    },
    {
      type: "Identifier",
      value: "full_name",
      range: [348, 357],
      loc: {
        start: {
          line: 15,
          column: 22,
        },
        end: {
          line: 15,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [357, 358],
      loc: {
        start: {
          line: 15,
          column: 31,
        },
        end: {
          line: 15,
          column: 32,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [360, 366],
      loc: {
        start: {
          line: 17,
          column: 0,
        },
        end: {
          line: 17,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "INDEX",
      range: [367, 372],
      loc: {
        start: {
          line: 17,
          column: 7,
        },
        end: {
          line: 17,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "idx_users_status",
      range: [373, 389],
      loc: {
        start: {
          line: 17,
          column: 13,
        },
        end: {
          line: 17,
          column: 29,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [390, 392],
      loc: {
        start: {
          line: 17,
          column: 30,
        },
        end: {
          line: 17,
          column: 32,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [393, 398],
      loc: {
        start: {
          line: 17,
          column: 33,
        },
        end: {
          line: 17,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [398, 399],
      loc: {
        start: {
          line: 17,
          column: 38,
        },
        end: {
          line: 17,
          column: 39,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [399, 405],
      loc: {
        start: {
          line: 17,
          column: 39,
        },
        end: {
          line: 17,
          column: 45,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [405, 406],
      loc: {
        start: {
          line: 17,
          column: 45,
        },
        end: {
          line: 17,
          column: 46,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [406, 407],
      loc: {
        start: {
          line: 17,
          column: 46,
        },
        end: {
          line: 17,
          column: 47,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [408, 414],
      loc: {
        start: {
          line: 18,
          column: 0,
        },
        end: {
          line: 18,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "UNIQUE",
      range: [415, 421],
      loc: {
        start: {
          line: 18,
          column: 7,
        },
        end: {
          line: 18,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "INDEX",
      range: [422, 427],
      loc: {
        start: {
          line: 18,
          column: 14,
        },
        end: {
          line: 18,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "idx_users_email",
      range: [428, 443],
      loc: {
        start: {
          line: 18,
          column: 20,
        },
        end: {
          line: 18,
          column: 35,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [444, 446],
      loc: {
        start: {
          line: 18,
          column: 36,
        },
        end: {
          line: 18,
          column: 38,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [447, 452],
      loc: {
        start: {
          line: 18,
          column: 39,
        },
        end: {
          line: 18,
          column: 44,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [452, 453],
      loc: {
        start: {
          line: 18,
          column: 44,
        },
        end: {
          line: 18,
          column: 45,
        },
      },
    },
    {
      type: "Identifier",
      value: "email",
      range: [453, 458],
      loc: {
        start: {
          line: 18,
          column: 45,
        },
        end: {
          line: 18,
          column: 50,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [458, 459],
      loc: {
        start: {
          line: 18,
          column: 50,
        },
        end: {
          line: 18,
          column: 51,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [459, 460],
      loc: {
        start: {
          line: 18,
          column: 51,
        },
        end: {
          line: 18,
          column: 52,
        },
      },
    },
    {
      type: "Keyword",
      value: "DROP",
      range: [462, 466],
      loc: {
        start: {
          line: 20,
          column: 0,
        },
        end: {
          line: 20,
          column: 4,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [467, 472],
      loc: {
        start: {
          line: 20,
          column: 5,
        },
        end: {
          line: 20,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [473, 475],
      loc: {
        start: {
          line: 20,
          column: 11,
        },
        end: {
          line: 20,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXISTS",
      range: [476, 482],
      loc: {
        start: {
          line: 20,
          column: 14,
        },
        end: {
          line: 20,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "old_table",
      range: [483, 492],
      loc: {
        start: {
          line: 20,
          column: 21,
        },
        end: {
          line: 20,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [492, 493],
      loc: {
        start: {
          line: 20,
          column: 30,
        },
        end: {
          line: 20,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [495, 501],
      loc: {
        start: {
          line: 22,
          column: 0,
        },
        end: {
          line: 22,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "TYPE",
      range: [502, 506],
      loc: {
        start: {
          line: 22,
          column: 7,
        },
        end: {
          line: 22,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_status",
      range: [507, 518],
      loc: {
        start: {
          line: 22,
          column: 12,
        },
        end: {
          line: 22,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [519, 521],
      loc: {
        start: {
          line: 22,
          column: 24,
        },
        end: {
          line: 22,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "ENUM",
      range: [522, 526],
      loc: {
        start: {
          line: 22,
          column: 27,
        },
        end: {
          line: 22,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [527, 528],
      loc: {
        start: {
          line: 22,
          column: 32,
        },
        end: {
          line: 22,
          column: 33,
        },
      },
    },
    {
      type: "String",
      value: "'active'",
      range: [528, 536],
      loc: {
        start: {
          line: 22,
          column: 33,
        },
        end: {
          line: 22,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [536, 537],
      loc: {
        start: {
          line: 22,
          column: 41,
        },
        end: {
          line: 22,
          column: 42,
        },
      },
    },
    {
      type: "String",
      value: "'inactive'",
      range: [538, 548],
      loc: {
        start: {
          line: 22,
          column: 43,
        },
        end: {
          line: 22,
          column: 53,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [548, 549],
      loc: {
        start: {
          line: 22,
          column: 53,
        },
        end: {
          line: 22,
          column: 54,
        },
      },
    },
    {
      type: "String",
      value: "'pending'",
      range: [550, 559],
      loc: {
        start: {
          line: 22,
          column: 55,
        },
        end: {
          line: 22,
          column: 64,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [559, 560],
      loc: {
        start: {
          line: 22,
          column: 64,
        },
        end: {
          line: 22,
          column: 65,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [560, 561],
      loc: {
        start: {
          line: 22,
          column: 65,
        },
        end: {
          line: 22,
          column: 66,
        },
      },
    },
    {
      type: "Keyword",
      value: "ALTER",
      range: [563, 568],
      loc: {
        start: {
          line: 24,
          column: 0,
        },
        end: {
          line: 24,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "TYPE",
      range: [569, 573],
      loc: {
        start: {
          line: 24,
          column: 6,
        },
        end: {
          line: 24,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_status",
      range: [574, 585],
      loc: {
        start: {
          line: 24,
          column: 11,
        },
        end: {
          line: 24,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "ADD",
      range: [586, 589],
      loc: {
        start: {
          line: 24,
          column: 23,
        },
        end: {
          line: 24,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "VALUE",
      range: [590, 595],
      loc: {
        start: {
          line: 24,
          column: 27,
        },
        end: {
          line: 24,
          column: 32,
        },
      },
    },
    {
      type: "String",
      value: "'suspended'",
      range: [596, 607],
      loc: {
        start: {
          line: 24,
          column: 33,
        },
        end: {
          line: 24,
          column: 44,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [607, 608],
      loc: {
        start: {
          line: 24,
          column: 44,
        },
        end: {
          line: 24,
          column: 45,
        },
      },
    },
  ],
  comments: [],
} satisfies Program;
