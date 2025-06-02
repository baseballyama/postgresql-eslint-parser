import type { Program } from "../../../src/ast.ts";

export default {
  type: "Program",
  range: [0, 3214],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 104,
      column: 3,
    },
  },
  body: [
    {
      type: "CreateSchemaStmt",
      schemaname: "analytics",
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
      type: "CreateSchemaStmt",
      schemaname: "reporting",
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
      type: "VariableSetStmt",
      kind: "VAR_SET_VALUE",
      name: "search_path",
      args: [
        {
          type: "A_Const",
          sval: {
            sval: "analytics",
          },
          range: [157, 166],
          loc: {
            start: {
              line: 7,
              column: 19,
            },
            end: {
              line: 7,
              column: 28,
            },
          },
        },
        {
          type: "A_Const",
          sval: {
            sval: "public",
          },
          range: [168, 174],
          loc: {
            start: {
              line: 7,
              column: 30,
            },
            end: {
              line: 7,
              column: 36,
            },
          },
        },
      ],
      range: [0, 174],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 7,
          column: 36,
        },
      },
    },
    {
      type: "CreateStmt",
      relation: {
        schemaname: "analytics",
        relname: "user_events",
        inh: true,
        relpersistence: "p",
        range: [231, 240],
        loc: {
          start: {
            line: 10,
            column: 13,
          },
          end: {
            line: 10,
            column: 22,
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
              sval: "bigserial",
              range: [0, 0],
              loc: {
                start: {
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
            range: [262, 271],
            loc: {
              start: {
                line: 11,
                column: 7,
              },
              end: {
                line: 11,
                column: 16,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_PRIMARY",
              range: [272, 279],
              loc: {
                start: {
                  line: 11,
                  column: 17,
                },
                end: {
                  line: 11,
                  column: 24,
                },
              },
            },
          ],
          range: [259, 261],
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
            range: [297, 304],
            loc: {
              start: {
                line: 12,
                column: 12,
              },
              end: {
                line: 12,
                column: 19,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_NOTNULL",
              range: [305, 308],
              loc: {
                start: {
                  line: 12,
                  column: 20,
                },
                end: {
                  line: 12,
                  column: 23,
                },
              },
            },
            {
              type: "Constraint",
              contype: "CONSTR_FOREIGN",
              initially_valid: true,
              pktable: {
                schemaname: "public",
                relname: "users",
                inh: true,
                relpersistence: "p",
                range: [325, 331],
                loc: {
                  start: {
                    line: 12,
                    column: 40,
                  },
                  end: {
                    line: 12,
                    column: 46,
                  },
                },
              },
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
              fk_del_action: "c",
              range: [314, 324],
              loc: {
                start: {
                  line: 12,
                  column: 29,
                },
                end: {
                  line: 12,
                  column: 39,
                },
              },
            },
          ],
          range: [289, 296],
          loc: {
            start: {
              line: 12,
              column: 4,
            },
            end: {
              line: 12,
              column: 11,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "event_type",
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
                  ival: 50,
                },
                range: [384, 386],
                loc: {
                  start: {
                    line: 13,
                    column: 23,
                  },
                  end: {
                    line: 13,
                    column: 25,
                  },
                },
              },
            ],
            typemod: -1,
            type: "names",
            range: [376, 383],
            loc: {
              start: {
                line: 13,
                column: 15,
              },
              end: {
                line: 13,
                column: 22,
              },
            },
          },
          is_local: true,
          constraints: [
            {
              type: "Constraint",
              contype: "CONSTR_NOTNULL",
              range: [388, 391],
              loc: {
                start: {
                  line: 13,
                  column: 27,
                },
                end: {
                  line: 13,
                  column: 30,
                },
              },
            },
          ],
          range: [365, 375],
          loc: {
            start: {
              line: 13,
              column: 4,
            },
            end: {
              line: 13,
              column: 14,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "event_data",
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
            range: [413, 418],
            loc: {
              start: {
                line: 14,
                column: 15,
              },
              end: {
                line: 14,
                column: 20,
              },
            },
          },
          is_local: true,
          range: [402, 412],
          loc: {
            start: {
              line: 14,
              column: 4,
            },
            end: {
              line: 14,
              column: 14,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "ip_address",
          typeName: {
            "0": {
              type: "String",
              sval: "inet",
              range: [0, 0],
              loc: {
                start: {
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
            range: [435, 439],
            loc: {
              start: {
                line: 15,
                column: 15,
              },
              end: {
                line: 15,
                column: 19,
              },
            },
          },
          is_local: true,
          range: [424, 434],
          loc: {
            start: {
              line: 15,
              column: 4,
            },
            end: {
              line: 15,
              column: 14,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "user_agent",
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
            type: "names",
            range: [456, 460],
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
          is_local: true,
          range: [445, 455],
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
              sval: "timestamptz",
              range: [0, 0],
              loc: {
                start: {
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
            range: [477, 486],
            loc: {
              start: {
                line: 17,
                column: 15,
              },
              end: {
                line: 17,
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
                range: [510, 513],
                loc: {
                  start: {
                    line: 17,
                    column: 48,
                  },
                  end: {
                    line: 17,
                    column: 51,
                  },
                },
              },
              range: [502, 509],
              loc: {
                start: {
                  line: 17,
                  column: 40,
                },
                end: {
                  line: 17,
                  column: 47,
                },
              },
            },
          ],
          range: [466, 476],
          loc: {
            start: {
              line: 17,
              column: 4,
            },
            end: {
              line: 17,
              column: 14,
            },
          },
        },
        {
          type: "Constraint",
          contype: "CONSTR_CHECK",
          conname: "valid_event_type",
          initially_valid: true,
          raw_expr: {
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
                  sval: "event_type",
                  range: [0, 0],
                  loc: {
                    start: {
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
              range: [561, 571],
              loc: {
                start: {
                  line: 19,
                  column: 39,
                },
                end: {
                  line: 19,
                  column: 49,
                },
              },
            },
            rexpr: {
              type: "List",
              items: [
                {
                  type: "A_Const",
                  sval: {
                    sval: "login",
                  },
                  range: [576, 583],
                  loc: {
                    start: {
                      line: 19,
                      column: 54,
                    },
                    end: {
                      line: 19,
                      column: 61,
                    },
                  },
                },
                {
                  type: "A_Const",
                  sval: {
                    sval: "logout",
                  },
                  range: [585, 593],
                  loc: {
                    start: {
                      line: 19,
                      column: 63,
                    },
                    end: {
                      line: 19,
                      column: 71,
                    },
                  },
                },
                {
                  type: "A_Const",
                  sval: {
                    sval: "purchase",
                  },
                  range: [595, 605],
                  loc: {
                    start: {
                      line: 19,
                      column: 73,
                    },
                    end: {
                      line: 19,
                      column: 83,
                    },
                  },
                },
                {
                  type: "A_Const",
                  sval: {
                    sval: "view",
                  },
                  range: [607, 613],
                  loc: {
                    start: {
                      line: 19,
                      column: 85,
                    },
                    end: {
                      line: 19,
                      column: 91,
                    },
                  },
                },
                {
                  type: "A_Const",
                  sval: {
                    sval: "click",
                  },
                  range: [615, 622],
                  loc: {
                    start: {
                      line: 19,
                      column: 93,
                    },
                    end: {
                      line: 19,
                      column: 100,
                    },
                  },
                },
              ],
              range: [0, 622],
              loc: {
                start: {
                  line: 1,
                  column: 0,
                },
                end: {
                  line: 19,
                  column: 100,
                },
              },
            },
            range: [572, 574],
            loc: {
              start: {
                line: 19,
                column: 50,
              },
              end: {
                line: 19,
                column: 52,
              },
            },
          },
          range: [526, 536],
          loc: {
            start: {
              line: 19,
              column: 4,
            },
            end: {
              line: 19,
              column: 14,
            },
          },
        },
        {
          type: "Constraint",
          contype: "CONSTR_CHECK",
          conname: "valid_ip",
          initially_valid: true,
          raw_expr: {
            type: "NullTest",
            arg: {
              type: "ColumnRef",
              fields: [
                {
                  type: "String",
                  sval: "ip_address",
                  range: [0, 0],
                  loc: {
                    start: {
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
              range: [657, 667],
              loc: {
                start: {
                  line: 20,
                  column: 31,
                },
                end: {
                  line: 20,
                  column: 41,
                },
              },
            },
            nulltesttype: "IS_NOT_NULL",
            range: [668, 670],
            loc: {
              start: {
                line: 20,
                column: 42,
              },
              end: {
                line: 20,
                column: 44,
              },
            },
          },
          range: [630, 640],
          loc: {
            start: {
              line: 20,
              column: 4,
            },
            end: {
              line: 20,
              column: 14,
            },
          },
        },
        {
          type: "Constraint",
          contype: "CONSTR_CHECK",
          conname: "non_empty_user_agent",
          initially_valid: true,
          raw_expr: {
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
              type: "FuncCall",
              funcname: [
                {
                  type: "String",
                  sval: "length",
                  range: [0, 0],
                  loc: {
                    start: {
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
                      sval: "user_agent",
                      range: [0, 0],
                      loc: {
                        start: {
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
                  range: [732, 742],
                  loc: {
                    start: {
                      line: 21,
                      column: 50,
                    },
                    end: {
                      line: 21,
                      column: 60,
                    },
                  },
                },
              ],
              funcformat: "COERCE_EXPLICIT_CALL",
              range: [725, 731],
              loc: {
                start: {
                  line: 21,
                  column: 43,
                },
                end: {
                  line: 21,
                  column: 49,
                },
              },
            },
            rexpr: {
              type: "A_Const",
              ival: {},
              range: [746, 747],
              loc: {
                start: {
                  line: 21,
                  column: 64,
                },
                end: {
                  line: 21,
                  column: 65,
                },
              },
            },
            range: [744, 745],
            loc: {
              start: {
                line: 21,
                column: 62,
              },
              end: {
                line: 21,
                column: 63,
              },
            },
          },
          range: [686, 696],
          loc: {
            start: {
              line: 21,
              column: 4,
            },
            end: {
              line: 21,
              column: 14,
            },
          },
        },
      ],
      oncommit: "ONCOMMIT_NOOP",
      range: [0, 747],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 21,
          column: 65,
        },
      },
    },
    {
      type: "CreateStmt",
      relation: {
        schemaname: "analytics",
        relname: "user_events_y2024m01",
        inh: true,
        relpersistence: "p",
        range: [782, 791],
        loc: {
          start: {
            line: 25,
            column: 13,
          },
          end: {
            line: 25,
            column: 22,
          },
        },
      },
      inhRelations: [
        {
          type: "RangeVar",
          schemaname: "analytics",
          relname: "user_events",
          inh: true,
          relpersistence: "p",
          range: [826, 835],
          loc: {
            start: {
              line: 25,
              column: 57,
            },
            end: {
              line: 25,
              column: 66,
            },
          },
        },
      ],
      partbound: {
        "0": {
          type: "A_Const",
          sval: {
            sval: "2024-01-01",
          },
          range: [865, 877],
          loc: {
            start: {
              line: 26,
              column: 17,
            },
            end: {
              line: 26,
              column: 29,
            },
          },
        },
        strategy: "r",
        upperdatums: [
          {
            type: "A_Const",
            sval: {
              sval: "2024-02-01",
            },
            range: [883, 895],
            loc: {
              start: {
                line: 26,
                column: 35,
              },
              end: {
                line: 26,
                column: 47,
              },
            },
          },
        ],
        type: "lowerdatums",
        range: [859, 863],
        loc: {
          start: {
            line: 26,
            column: 11,
          },
          end: {
            line: 26,
            column: 15,
          },
        },
      },
      oncommit: "ONCOMMIT_NOOP",
      range: [0, 895],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 26,
          column: 47,
        },
      },
    },
    {
      type: "CreateStmt",
      relation: {
        schemaname: "analytics",
        relname: "user_events_y2024m02",
        inh: true,
        relpersistence: "p",
        range: [912, 921],
        loc: {
          start: {
            line: 28,
            column: 13,
          },
          end: {
            line: 28,
            column: 22,
          },
        },
      },
      inhRelations: [
        {
          type: "RangeVar",
          schemaname: "analytics",
          relname: "user_events",
          inh: true,
          relpersistence: "p",
          range: [956, 965],
          loc: {
            start: {
              line: 28,
              column: 57,
            },
            end: {
              line: 28,
              column: 66,
            },
          },
        },
      ],
      partbound: {
        "0": {
          type: "A_Const",
          sval: {
            sval: "2024-02-01",
          },
          range: [995, 1007],
          loc: {
            start: {
              line: 29,
              column: 17,
            },
            end: {
              line: 29,
              column: 29,
            },
          },
        },
        strategy: "r",
        upperdatums: [
          {
            type: "A_Const",
            sval: {
              sval: "2024-03-01",
            },
            range: [1013, 1025],
            loc: {
              start: {
                line: 29,
                column: 35,
              },
              end: {
                line: 29,
                column: 47,
              },
            },
          },
        ],
        type: "lowerdatums",
        range: [989, 993],
        loc: {
          start: {
            line: 29,
            column: 11,
          },
          end: {
            line: 29,
            column: 15,
          },
        },
      },
      oncommit: "ONCOMMIT_NOOP",
      range: [0, 1025],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 29,
          column: 47,
        },
      },
    },
    {
      type: "CreateExtensionStmt",
      extname: "postgres_fdw",
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
      type: "CreateForeignServerStmt",
      servername: "remote_server",
      fdwname: "postgres_fdw",
      options: [
        {
          type: "DefElem",
          defname: "host",
          arg: {
            type: "String",
            sval: "remote-db.example.com",
            range: [0, 0],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 1,
                column: 0,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [1176, 1180],
          loc: {
            start: {
              line: 36,
              column: 9,
            },
            end: {
              line: 36,
              column: 13,
            },
          },
        },
        {
          type: "DefElem",
          defname: "port",
          arg: {
            type: "String",
            sval: "5432",
            range: [0, 0],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 1,
                column: 0,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [1206, 1210],
          loc: {
            start: {
              line: 36,
              column: 39,
            },
            end: {
              line: 36,
              column: 43,
            },
          },
        },
        {
          type: "DefElem",
          defname: "dbname",
          arg: {
            type: "String",
            sval: "external_db",
            range: [0, 0],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 1,
                column: 0,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [1219, 1225],
          loc: {
            start: {
              line: 36,
              column: 52,
            },
            end: {
              line: 36,
              column: 58,
            },
          },
        },
      ],
      range: [0, 1225],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 36,
          column: 58,
        },
      },
    },
    {
      type: "CreateUserMappingStmt",
      user: {
        roletype: "ROLESPEC_CURRENT_USER",
        range: [1267, 1279],
        loc: {
          start: {
            line: 38,
            column: 24,
          },
          end: {
            line: 38,
            column: 36,
          },
        },
      },
      servername: "remote_server",
      options: [
        {
          type: "DefElem",
          defname: "user",
          arg: {
            type: "String",
            sval: "remote_user",
            range: [0, 0],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 1,
                column: 0,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [1310, 1314],
          loc: {
            start: {
              line: 40,
              column: 9,
            },
            end: {
              line: 40,
              column: 13,
            },
          },
        },
        {
          type: "DefElem",
          defname: "password",
          arg: {
            type: "String",
            sval: "remote_password",
            range: [0, 0],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 1,
                column: 0,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [1330, 1338],
          loc: {
            start: {
              line: 40,
              column: 29,
            },
            end: {
              line: 40,
              column: 37,
            },
          },
        },
      ],
      range: [0, 1338],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 40,
          column: 37,
        },
      },
    },
    {
      type: "CreateForeignTableStmt",
      base: {
        tableElts: [
          {
            type: "ColumnDef",
            colname: "id",
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
              range: [1414, 1421],
              loc: {
                start: {
                  line: 43,
                  column: 7,
                },
                end: {
                  line: 43,
                  column: 14,
                },
              },
            },
            is_local: true,
            range: [1411, 1413],
            loc: {
              start: {
                line: 43,
                column: 4,
              },
              end: {
                line: 43,
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
              type: "names",
              range: [1432, 1436],
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
            is_local: true,
            range: [1427, 1431],
            loc: {
              start: {
                line: 44,
                column: 4,
              },
              end: {
                line: 44,
                column: 8,
              },
            },
          },
          {
            type: "ColumnDef",
            colname: "value",
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
                sval: "numeric",
                range: [0, 0],
                loc: {
                  start: {
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
              range: [1448, 1455],
              loc: {
                start: {
                  line: 45,
                  column: 10,
                },
                end: {
                  line: 45,
                  column: 17,
                },
              },
            },
            is_local: true,
            range: [1442, 1447],
            loc: {
              start: {
                line: 45,
                column: 4,
              },
              end: {
                line: 45,
                column: 9,
              },
            },
          },
        ],
        oncommit: "ONCOMMIT_NOOP",
        type: "relation",
        schemaname: "analytics",
        relname: "external_data",
        inh: true,
        relpersistence: "p",
        range: [1381, 1390],
        loc: {
          start: {
            line: 42,
            column: 21,
          },
          end: {
            line: 42,
            column: 30,
          },
        },
      },
      servername: "remote_server",
      options: [
        {
          type: "DefElem",
          defname: "schema_name",
          arg: {
            type: "String",
            sval: "public",
            range: [0, 0],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 1,
                column: 0,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [1488, 1499],
          loc: {
            start: {
              line: 47,
              column: 9,
            },
            end: {
              line: 47,
              column: 20,
            },
          },
        },
        {
          type: "DefElem",
          defname: "table_name",
          arg: {
            type: "String",
            sval: "external_table",
            range: [0, 0],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 1,
                column: 0,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [1510, 1520],
          loc: {
            start: {
              line: 47,
              column: 31,
            },
            end: {
              line: 47,
              column: 41,
            },
          },
        },
      ],
      range: [0, 1520],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 47,
          column: 41,
        },
      },
    },
    {
      type: "ViewStmt",
      view: {
        schemaname: "analytics",
        relname: "daily_user_activity",
        inh: true,
        relpersistence: "p",
        range: [1585, 1594],
        loc: {
          start: {
            line: 50,
            column: 12,
          },
          end: {
            line: 50,
            column: 21,
          },
        },
      },
      query: {
        type: "SelectStmt",
        targetList: [
          {
            type: "ResTarget",
            name: "activity_date",
            val: {
              type: "FuncCall",
              funcname: [
                {
                  type: "String",
                  sval: "date",
                  range: [0, 0],
                  loc: {
                    start: {
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
                      sval: "created_at",
                      range: [0, 0],
                      loc: {
                        start: {
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
                  range: [1635, 1645],
                  loc: {
                    start: {
                      line: 52,
                      column: 9,
                    },
                    end: {
                      line: 52,
                      column: 19,
                    },
                  },
                },
              ],
              funcformat: "COERCE_EXPLICIT_CALL",
              range: [1630, 1634],
              loc: {
                start: {
                  line: 52,
                  column: 4,
                },
                end: {
                  line: 52,
                  column: 8,
                },
              },
            },
            range: [1630, 1634],
            loc: {
              start: {
                line: 52,
                column: 4,
              },
              end: {
                line: 52,
                column: 8,
              },
            },
          },
          {
            type: "ResTarget",
            name: "unique_users",
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
                  range: [1684, 1691],
                  loc: {
                    start: {
                      line: 53,
                      column: 19,
                    },
                    end: {
                      line: 53,
                      column: 26,
                    },
                  },
                },
              ],
              agg_distinct: true,
              funcformat: "COERCE_EXPLICIT_CALL",
              range: [1669, 1674],
              loc: {
                start: {
                  line: 53,
                  column: 4,
                },
                end: {
                  line: 53,
                  column: 9,
                },
              },
            },
            range: [1669, 1674],
            loc: {
              start: {
                line: 53,
                column: 4,
              },
              end: {
                line: 53,
                column: 9,
              },
            },
          },
          {
            type: "ResTarget",
            name: "total_events",
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
              agg_star: true,
              funcformat: "COERCE_EXPLICIT_CALL",
              range: [1714, 1719],
              loc: {
                start: {
                  line: 54,
                  column: 4,
                },
                end: {
                  line: 54,
                  column: 9,
                },
              },
            },
            range: [1714, 1719],
            loc: {
              start: {
                line: 54,
                column: 4,
              },
              end: {
                line: 54,
                column: 9,
              },
            },
          },
        ],
        fromClause: [
          {
            type: "RangeVar",
            schemaname: "analytics",
            relname: "user_events",
            inh: true,
            relpersistence: "p",
            range: [1744, 1753],
            loc: {
              start: {
                line: 55,
                column: 5,
              },
              end: {
                line: 55,
                column: 14,
              },
            },
          },
        ],
        groupClause: [
          {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "date",
                range: [0, 0],
                loc: {
                  start: {
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
                    sval: "created_at",
                    range: [0, 0],
                    loc: {
                      start: {
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
                range: [1780, 1790],
                loc: {
                  start: {
                    line: 56,
                    column: 14,
                  },
                  end: {
                    line: 56,
                    column: 24,
                  },
                },
              },
            ],
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [1775, 1779],
            loc: {
              start: {
                line: 56,
                column: 9,
              },
              end: {
                line: 56,
                column: 13,
              },
            },
          },
        ],
        limitOption: "LIMIT_OPTION_DEFAULT",
        op: "SETOP_NONE",
        range: [0, 1790],
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 56,
            column: 24,
          },
        },
      },
      withCheckOption: "NO_CHECK_OPTION",
      range: [0, 1790],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 56,
          column: 24,
        },
      },
    },
    {
      type: "CreateTableAsStmt",
      query: {
        type: "SelectStmt",
        targetList: [
          {
            type: "ResTarget",
            name: "month",
            val: {
              type: "FuncCall",
              funcname: [
                {
                  type: "String",
                  sval: "date_trunc",
                  range: [0, 0],
                  loc: {
                    start: {
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
                    sval: "month",
                  },
                  range: [1874, 1881],
                  loc: {
                    start: {
                      line: 60,
                      column: 15,
                    },
                    end: {
                      line: 60,
                      column: 22,
                    },
                  },
                },
                {
                  type: "ColumnRef",
                  fields: [
                    {
                      type: "String",
                      sval: "created_at",
                      range: [0, 0],
                      loc: {
                        start: {
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
                  range: [1883, 1893],
                  loc: {
                    start: {
                      line: 60,
                      column: 24,
                    },
                    end: {
                      line: 60,
                      column: 34,
                    },
                  },
                },
              ],
              funcformat: "COERCE_EXPLICIT_CALL",
              range: [1863, 1873],
              loc: {
                start: {
                  line: 60,
                  column: 4,
                },
                end: {
                  line: 60,
                  column: 14,
                },
              },
            },
            range: [1863, 1873],
            loc: {
              start: {
                line: 60,
                column: 4,
              },
              end: {
                line: 60,
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
                  sval: "event_type",
                  range: [0, 0],
                  loc: {
                    start: {
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
              range: [1909, 1919],
              loc: {
                start: {
                  line: 61,
                  column: 4,
                },
                end: {
                  line: 61,
                  column: 14,
                },
              },
            },
            range: [1909, 1919],
            loc: {
              start: {
                line: 61,
                column: 4,
              },
              end: {
                line: 61,
                column: 14,
              },
            },
          },
          {
            type: "ResTarget",
            name: "event_count",
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
              agg_star: true,
              funcformat: "COERCE_EXPLICIT_CALL",
              range: [1925, 1930],
              loc: {
                start: {
                  line: 62,
                  column: 4,
                },
                end: {
                  line: 62,
                  column: 9,
                },
              },
            },
            range: [1925, 1930],
            loc: {
              start: {
                line: 62,
                column: 4,
              },
              end: {
                line: 62,
                column: 9,
              },
            },
          },
          {
            type: "ResTarget",
            name: "unique_users",
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
                  range: [1969, 1976],
                  loc: {
                    start: {
                      line: 63,
                      column: 19,
                    },
                    end: {
                      line: 63,
                      column: 26,
                    },
                  },
                },
              ],
              agg_distinct: true,
              funcformat: "COERCE_EXPLICIT_CALL",
              range: [1954, 1959],
              loc: {
                start: {
                  line: 63,
                  column: 4,
                },
                end: {
                  line: 63,
                  column: 9,
                },
              },
            },
            range: [1954, 1959],
            loc: {
              start: {
                line: 63,
                column: 4,
              },
              end: {
                line: 63,
                column: 9,
              },
            },
          },
        ],
        fromClause: [
          {
            type: "RangeVar",
            schemaname: "analytics",
            relname: "user_events",
            inh: true,
            relpersistence: "p",
            range: [1999, 2008],
            loc: {
              start: {
                line: 64,
                column: 5,
              },
              end: {
                line: 64,
                column: 14,
              },
            },
          },
        ],
        groupClause: [
          {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "date_trunc",
                range: [0, 0],
                loc: {
                  start: {
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
                  sval: "month",
                },
                range: [2041, 2048],
                loc: {
                  start: {
                    line: 65,
                    column: 20,
                  },
                  end: {
                    line: 65,
                    column: 27,
                  },
                },
              },
              {
                type: "ColumnRef",
                fields: [
                  {
                    type: "String",
                    sval: "created_at",
                    range: [0, 0],
                    loc: {
                      start: {
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
                range: [2050, 2060],
                loc: {
                  start: {
                    line: 65,
                    column: 29,
                  },
                  end: {
                    line: 65,
                    column: 39,
                  },
                },
              },
            ],
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [2030, 2040],
            loc: {
              start: {
                line: 65,
                column: 9,
              },
              end: {
                line: 65,
                column: 19,
              },
            },
          },
          {
            type: "ColumnRef",
            fields: [
              {
                type: "String",
                sval: "event_type",
                range: [0, 0],
                loc: {
                  start: {
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
            range: [2063, 2073],
            loc: {
              start: {
                line: 65,
                column: 42,
              },
              end: {
                line: 65,
                column: 52,
              },
            },
          },
        ],
        limitOption: "LIMIT_OPTION_DEFAULT",
        op: "SETOP_NONE",
        range: [0, 2073],
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 65,
            column: 52,
          },
        },
      },
      into: {
        onCommit: "ONCOMMIT_NOOP",
        type: "rel",
        schemaname: "analytics",
        relname: "monthly_user_stats",
        inh: true,
        relpersistence: "p",
        range: [1819, 1828],
        loc: {
          start: {
            line: 58,
            column: 25,
          },
          end: {
            line: 58,
            column: 34,
          },
        },
      },
      objtype: "OBJECT_MATVIEW",
      range: [0, 2073],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 65,
          column: 52,
        },
      },
    },
    {
      type: "IndexStmt",
      idxname: "idx_monthly_stats_month",
      relation: {
        schemaname: "analytics",
        relname: "monthly_user_stats",
        inh: true,
        relpersistence: "p",
        range: [2158, 2167],
        loc: {
          start: {
            line: 69,
            column: 40,
          },
          end: {
            line: 69,
            column: 49,
          },
        },
      },
      accessMethod: "btree",
      indexParams: [
        {
          type: "IndexElem",
          name: "month",
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
      range: [0, 2167],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 69,
          column: 49,
        },
      },
    },
    {
      type: "IndexStmt",
      idxname: "idx_monthly_stats_type",
      relation: {
        schemaname: "analytics",
        relname: "monthly_user_stats",
        inh: true,
        relpersistence: "p",
        range: [2234, 2243],
        loc: {
          start: {
            line: 70,
            column: 39,
          },
          end: {
            line: 70,
            column: 48,
          },
        },
      },
      accessMethod: "btree",
      indexParams: [
        {
          type: "IndexElem",
          name: "event_type",
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
      range: [0, 2243],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 70,
          column: 48,
        },
      },
    },
    {
      type: "AlterTableStmt",
      relation: {
        schemaname: "analytics",
        relname: "user_events",
        inh: true,
        relpersistence: "p",
        range: [2311, 2320],
        loc: {
          start: {
            line: 73,
            column: 12,
          },
          end: {
            line: 73,
            column: 21,
          },
        },
      },
      cmds: [
        {
          type: "AlterTableCmd",
          subtype: "AT_EnableRowSecurity",
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
      range: [0, 2320],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 73,
          column: 21,
        },
      },
    },
    {
      type: "CreatePolicyStmt",
      policy_name: "user_events_policy",
      table: {
        schemaname: "analytics",
        relname: "user_events",
        inh: true,
        relpersistence: "p",
        range: [2397, 2406],
        loc: {
          start: {
            line: 75,
            column: 36,
          },
          end: {
            line: 75,
            column: 45,
          },
        },
      },
      cmd_name: "all",
      permissive: true,
      roles: [
        {
          type: "RoleSpec",
          roletype: "ROLESPEC_CSTRING",
          rolename: "analytics_role",
          range: [2430, 2444],
          loc: {
            start: {
              line: 76,
              column: 11,
            },
            end: {
              line: 76,
              column: 25,
            },
          },
        },
      ],
      qual: {
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
          range: [2452, 2459],
          loc: {
            start: {
              line: 77,
              column: 7,
            },
            end: {
              line: 77,
              column: 14,
            },
          },
        },
        rexpr: {
          type: "TypeCast",
          arg: {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "current_setting",
                range: [0, 0],
                loc: {
                  start: {
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
                  sval: "app.current_user_id",
                },
                range: [2478, 2499],
                loc: {
                  start: {
                    line: 77,
                    column: 33,
                  },
                  end: {
                    line: 77,
                    column: 54,
                  },
                },
              },
            ],
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [2462, 2477],
            loc: {
              start: {
                line: 77,
                column: 17,
              },
              end: {
                line: 77,
                column: 32,
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
            range: [2502, 2509],
            loc: {
              start: {
                line: 77,
                column: 57,
              },
              end: {
                line: 77,
                column: 64,
              },
            },
          },
          range: [2500, 2502],
          loc: {
            start: {
              line: 77,
              column: 55,
            },
            end: {
              line: 77,
              column: 57,
            },
          },
        },
        range: [2460, 2461],
        loc: {
          start: {
            line: 77,
            column: 15,
          },
          end: {
            line: 77,
            column: 16,
          },
        },
      },
      range: [0, 2509],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 77,
          column: 64,
        },
      },
    },
    {
      type: "GrantStmt",
      is_grant: true,
      targtype: "ACL_TARGET_OBJECT",
      objtype: "OBJECT_SCHEMA",
      objects: [
        {
          type: "String",
          sval: "analytics",
          range: [0, 0],
          loc: {
            start: {
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
      privileges: [
        {
          type: "AccessPriv",
          priv_name: "usage",
          range: [0, 0],
          loc: {
            start: {
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
      grantees: [
        {
          type: "RoleSpec",
          roletype: "ROLESPEC_CSTRING",
          rolename: "analytics_role",
          range: [2569, 2583],
          loc: {
            start: {
              line: 80,
              column: 35,
            },
            end: {
              line: 80,
              column: 49,
            },
          },
        },
      ],
      behavior: "DROP_RESTRICT",
      range: [0, 2583],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 80,
          column: 49,
        },
      },
    },
    {
      type: "GrantStmt",
      is_grant: true,
      targtype: "ACL_TARGET_ALL_IN_SCHEMA",
      objtype: "OBJECT_TABLE",
      objects: [
        {
          type: "String",
          sval: "analytics",
          range: [0, 0],
          loc: {
            start: {
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
      privileges: [
        {
          type: "AccessPriv",
          priv_name: "select",
          range: [0, 0],
          loc: {
            start: {
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
          type: "AccessPriv",
          priv_name: "insert",
          range: [0, 0],
          loc: {
            start: {
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
          type: "AccessPriv",
          priv_name: "update",
          range: [0, 0],
          loc: {
            start: {
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
      grantees: [
        {
          type: "RoleSpec",
          roletype: "ROLESPEC_CSTRING",
          rolename: "analytics_role",
          range: [2651, 2665],
          loc: {
            start: {
              line: 81,
              column: 66,
            },
            end: {
              line: 81,
              column: 80,
            },
          },
        },
      ],
      behavior: "DROP_RESTRICT",
      range: [0, 2665],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 81,
          column: 80,
        },
      },
    },
    {
      type: "GrantStmt",
      is_grant: true,
      targtype: "ACL_TARGET_ALL_IN_SCHEMA",
      objtype: "OBJECT_SEQUENCE",
      objects: [
        {
          type: "String",
          sval: "analytics",
          range: [0, 0],
          loc: {
            start: {
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
      privileges: [
        {
          type: "AccessPriv",
          priv_name: "usage",
          range: [0, 0],
          loc: {
            start: {
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
      grantees: [
        {
          type: "RoleSpec",
          roletype: "ROLESPEC_CSTRING",
          rolename: "analytics_role",
          range: [2719, 2733],
          loc: {
            start: {
              line: 82,
              column: 52,
            },
            end: {
              line: 82,
              column: 66,
            },
          },
        },
      ],
      behavior: "DROP_RESTRICT",
      range: [0, 2733],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 82,
          column: 66,
        },
      },
    },
    {
      type: "CreateDomainStmt",
      domainname: [
        {
          type: "String",
          sval: "analytics",
          range: [0, 0],
          loc: {
            start: {
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
          sval: "email",
          range: [0, 0],
          loc: {
            start: {
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
            range: [2793, 2796],
            loc: {
              start: {
                line: 85,
                column: 41,
              },
              end: {
                line: 85,
                column: 44,
              },
            },
          },
        ],
        typemod: -1,
        type: "names",
        range: [2785, 2792],
        loc: {
          start: {
            line: 85,
            column: 33,
          },
          end: {
            line: 85,
            column: 40,
          },
        },
      },
      constraints: [
        {
          type: "Constraint",
          contype: "CONSTR_CHECK",
          initially_valid: true,
          raw_expr: {
            type: "A_Expr",
            kind: "AEXPR_OP",
            name: [
              {
                type: "String",
                sval: "~*",
                range: [0, 0],
                loc: {
                  start: {
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
                  sval: "value",
                  range: [0, 0],
                  loc: {
                    start: {
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
              range: [2805, 2810],
              loc: {
                start: {
                  line: 86,
                  column: 7,
                },
                end: {
                  line: 86,
                  column: 12,
                },
              },
            },
            rexpr: {
              type: "A_Const",
              sval: {
                sval: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$",
              },
              range: [2814, 2864],
              loc: {
                start: {
                  line: 86,
                  column: 16,
                },
                end: {
                  line: 86,
                  column: 66,
                },
              },
            },
            range: [2811, 2811],
            loc: {
              start: {
                line: 86,
                column: 13,
              },
              end: {
                line: 86,
                column: 13,
              },
            },
          },
          range: [2798, 2803],
          loc: {
            start: {
              line: 86,
              column: 0,
            },
            end: {
              line: 86,
              column: 5,
            },
          },
        },
      ],
      range: [0, 2864],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 86,
          column: 66,
        },
      },
    },
    {
      type: "CreateDomainStmt",
      domainname: [
        {
          type: "String",
          sval: "analytics",
          range: [0, 0],
          loc: {
            start: {
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
          sval: "positive_integer",
          range: [0, 0],
          loc: {
            start: {
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
        range: [2912, 2919],
        loc: {
          start: {
            line: 88,
            column: 44,
          },
          end: {
            line: 88,
            column: 51,
          },
        },
      },
      constraints: [
        {
          type: "Constraint",
          contype: "CONSTR_CHECK",
          initially_valid: true,
          raw_expr: {
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
                  sval: "value",
                  range: [0, 0],
                  loc: {
                    start: {
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
              range: [2927, 2932],
              loc: {
                start: {
                  line: 89,
                  column: 7,
                },
                end: {
                  line: 89,
                  column: 12,
                },
              },
            },
            rexpr: {
              type: "A_Const",
              ival: {},
              range: [2935, 2936],
              loc: {
                start: {
                  line: 89,
                  column: 15,
                },
                end: {
                  line: 89,
                  column: 16,
                },
              },
            },
            range: [2933, 2934],
            loc: {
              start: {
                line: 89,
                column: 13,
              },
              end: {
                line: 89,
                column: 14,
              },
            },
          },
          range: [2920, 2925],
          loc: {
            start: {
              line: 89,
              column: 0,
            },
            end: {
              line: 89,
              column: 5,
            },
          },
        },
      ],
      range: [0, 2936],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 89,
          column: 16,
        },
      },
    },
    {
      type: "CompositeTypeStmt",
      typevar: {
        schemaname: "analytics",
        relname: "address_type",
        relpersistence: "p",
        range: [2971, 2980],
        loc: {
          start: {
            line: 92,
            column: 12,
          },
          end: {
            line: 92,
            column: 21,
          },
        },
      },
      coldeflist: [
        {
          type: "ColumnDef",
          colname: "street",
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
            type: "names",
            range: [3010, 3014],
            loc: {
              start: {
                line: 93,
                column: 11,
              },
              end: {
                line: 93,
                column: 15,
              },
            },
          },
          is_local: true,
          range: [3003, 3009],
          loc: {
            start: {
              line: 93,
              column: 4,
            },
            end: {
              line: 93,
              column: 10,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "city",
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
            type: "names",
            range: [3025, 3029],
            loc: {
              start: {
                line: 94,
                column: 9,
              },
              end: {
                line: 94,
                column: 13,
              },
            },
          },
          is_local: true,
          range: [3020, 3024],
          loc: {
            start: {
              line: 94,
              column: 4,
            },
            end: {
              line: 94,
              column: 8,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "state",
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
            type: "names",
            range: [3041, 3045],
            loc: {
              start: {
                line: 95,
                column: 10,
              },
              end: {
                line: 95,
                column: 14,
              },
            },
          },
          is_local: true,
          range: [3035, 3040],
          loc: {
            start: {
              line: 95,
              column: 4,
            },
            end: {
              line: 95,
              column: 9,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "zip_code",
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
            type: "names",
            range: [3060, 3064],
            loc: {
              start: {
                line: 96,
                column: 13,
              },
              end: {
                line: 96,
                column: 17,
              },
            },
          },
          is_local: true,
          range: [3051, 3059],
          loc: {
            start: {
              line: 96,
              column: 4,
            },
            end: {
              line: 96,
              column: 12,
            },
          },
        },
        {
          type: "ColumnDef",
          colname: "country",
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
            type: "names",
            range: [3078, 3082],
            loc: {
              start: {
                line: 97,
                column: 12,
              },
              end: {
                line: 97,
                column: 16,
              },
            },
          },
          is_local: true,
          range: [3070, 3077],
          loc: {
            start: {
              line: 97,
              column: 4,
            },
            end: {
              line: 97,
              column: 11,
            },
          },
        },
      ],
      range: [0, 3082],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 97,
          column: 16,
        },
      },
    },
    {
      type: "CreateRangeStmt",
      typeName: [
        {
          type: "String",
          sval: "analytics",
          range: [0, 0],
          loc: {
            start: {
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
          sval: "price_range",
          range: [0, 0],
          loc: {
            start: {
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
      params: [
        {
          type: "DefElem",
          defname: "subtype",
          arg: {
            type: "TypeName",
            names: [
              {
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
              {
                type: "String",
                sval: "numeric",
                range: [0, 0],
                loc: {
                  start: {
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
            typemod: -1,
            range: [3161, 3168],
            loc: {
              start: {
                line: 102,
                column: 14,
              },
              end: {
                line: 102,
                column: 21,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [3151, 3158],
          loc: {
            start: {
              line: 102,
              column: 4,
            },
            end: {
              line: 102,
              column: 11,
            },
          },
        },
        {
          type: "DefElem",
          defname: "subtype_diff",
          arg: {
            type: "TypeName",
            names: [
              {
                type: "String",
                sval: "numeric_range_subdiff",
                range: [0, 0],
                loc: {
                  start: {
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
            typemod: -1,
            range: [3189, 3210],
            loc: {
              start: {
                line: 103,
                column: 19,
              },
              end: {
                line: 103,
                column: 40,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [3174, 3186],
          loc: {
            start: {
              line: 103,
              column: 4,
            },
            end: {
              line: 103,
              column: 16,
            },
          },
        },
      ],
      range: [0, 3210],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 103,
          column: 40,
        },
      },
    },
  ],
  tokens: [
    {
      type: "LineComment",
      value: "-- Schema changes test",
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
      type: "LineComment",
      value: "-- Create schema",
      range: [23, 39],
      loc: {
        start: {
          line: 2,
          column: 0,
        },
        end: {
          line: 2,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [40, 46],
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
      type: "Keyword",
      value: "SCHEMA",
      range: [47, 53],
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
      value: "IF",
      range: [54, 56],
      loc: {
        start: {
          line: 3,
          column: 14,
        },
        end: {
          line: 3,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [57, 60],
      loc: {
        start: {
          line: 3,
          column: 17,
        },
        end: {
          line: 3,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXISTS",
      range: [61, 67],
      loc: {
        start: {
          line: 3,
          column: 21,
        },
        end: {
          line: 3,
          column: 27,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [68, 77],
      loc: {
        start: {
          line: 3,
          column: 28,
        },
        end: {
          line: 3,
          column: 37,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [77, 78],
      loc: {
        start: {
          line: 3,
          column: 37,
        },
        end: {
          line: 3,
          column: 38,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [79, 85],
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
      type: "Keyword",
      value: "SCHEMA",
      range: [86, 92],
      loc: {
        start: {
          line: 4,
          column: 7,
        },
        end: {
          line: 4,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [93, 95],
      loc: {
        start: {
          line: 4,
          column: 14,
        },
        end: {
          line: 4,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [96, 99],
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
      type: "Keyword",
      value: "EXISTS",
      range: [100, 106],
      loc: {
        start: {
          line: 4,
          column: 21,
        },
        end: {
          line: 4,
          column: 27,
        },
      },
    },
    {
      type: "Identifier",
      value: "reporting",
      range: [107, 116],
      loc: {
        start: {
          line: 4,
          column: 28,
        },
        end: {
          line: 4,
          column: 37,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [116, 117],
      loc: {
        start: {
          line: 4,
          column: 37,
        },
        end: {
          line: 4,
          column: 38,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Set search path",
      range: [119, 137],
      loc: {
        start: {
          line: 6,
          column: 0,
        },
        end: {
          line: 6,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "SET",
      range: [138, 141],
      loc: {
        start: {
          line: 7,
          column: 0,
        },
        end: {
          line: 7,
          column: 3,
        },
      },
    },
    {
      type: "Identifier",
      value: "search_path",
      range: [142, 153],
      loc: {
        start: {
          line: 7,
          column: 4,
        },
        end: {
          line: 7,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "TO",
      range: [154, 156],
      loc: {
        start: {
          line: 7,
          column: 16,
        },
        end: {
          line: 7,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [157, 166],
      loc: {
        start: {
          line: 7,
          column: 19,
        },
        end: {
          line: 7,
          column: 28,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [166, 167],
      loc: {
        start: {
          line: 7,
          column: 28,
        },
        end: {
          line: 7,
          column: 29,
        },
      },
    },
    {
      type: "Identifier",
      value: "public",
      range: [168, 174],
      loc: {
        start: {
          line: 7,
          column: 30,
        },
        end: {
          line: 7,
          column: 36,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [174, 175],
      loc: {
        start: {
          line: 7,
          column: 36,
        },
        end: {
          line: 7,
          column: 37,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Create table with various constraints",
      range: [177, 217],
      loc: {
        start: {
          line: 9,
          column: 0,
        },
        end: {
          line: 9,
          column: 40,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [218, 224],
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
      range: [225, 230],
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
      value: "analytics",
      range: [231, 240],
      loc: {
        start: {
          line: 10,
          column: 13,
        },
        end: {
          line: 10,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [240, 241],
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
      value: "user_events",
      range: [241, 252],
      loc: {
        start: {
          line: 10,
          column: 23,
        },
        end: {
          line: 10,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [253, 254],
      loc: {
        start: {
          line: 10,
          column: 35,
        },
        end: {
          line: 10,
          column: 36,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [259, 261],
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
      type: "Identifier",
      value: "BIGSERIAL",
      range: [262, 271],
      loc: {
        start: {
          line: 11,
          column: 7,
        },
        end: {
          line: 11,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "PRIMARY",
      range: [272, 279],
      loc: {
        start: {
          line: 11,
          column: 17,
        },
        end: {
          line: 11,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "KEY",
      range: [280, 283],
      loc: {
        start: {
          line: 11,
          column: 25,
        },
        end: {
          line: 11,
          column: 28,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [283, 284],
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
      type: "Identifier",
      value: "user_id",
      range: [289, 296],
      loc: {
        start: {
          line: 12,
          column: 4,
        },
        end: {
          line: 12,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTEGER",
      range: [297, 304],
      loc: {
        start: {
          line: 12,
          column: 12,
        },
        end: {
          line: 12,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [305, 308],
      loc: {
        start: {
          line: 12,
          column: 20,
        },
        end: {
          line: 12,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "NULL",
      range: [309, 313],
      loc: {
        start: {
          line: 12,
          column: 24,
        },
        end: {
          line: 12,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "REFERENCES",
      range: [314, 324],
      loc: {
        start: {
          line: 12,
          column: 29,
        },
        end: {
          line: 12,
          column: 39,
        },
      },
    },
    {
      type: "Identifier",
      value: "public",
      range: [325, 331],
      loc: {
        start: {
          line: 12,
          column: 40,
        },
        end: {
          line: 12,
          column: 46,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [331, 332],
      loc: {
        start: {
          line: 12,
          column: 46,
        },
        end: {
          line: 12,
          column: 47,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [332, 337],
      loc: {
        start: {
          line: 12,
          column: 47,
        },
        end: {
          line: 12,
          column: 52,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [337, 338],
      loc: {
        start: {
          line: 12,
          column: 52,
        },
        end: {
          line: 12,
          column: 53,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [338, 340],
      loc: {
        start: {
          line: 12,
          column: 53,
        },
        end: {
          line: 12,
          column: 55,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [340, 341],
      loc: {
        start: {
          line: 12,
          column: 55,
        },
        end: {
          line: 12,
          column: 56,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [342, 344],
      loc: {
        start: {
          line: 12,
          column: 57,
        },
        end: {
          line: 12,
          column: 59,
        },
      },
    },
    {
      type: "Keyword",
      value: "DELETE",
      range: [345, 351],
      loc: {
        start: {
          line: 12,
          column: 60,
        },
        end: {
          line: 12,
          column: 66,
        },
      },
    },
    {
      type: "Identifier",
      value: "CASCADE",
      range: [352, 359],
      loc: {
        start: {
          line: 12,
          column: 67,
        },
        end: {
          line: 12,
          column: 74,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [359, 360],
      loc: {
        start: {
          line: 12,
          column: 74,
        },
        end: {
          line: 12,
          column: 75,
        },
      },
    },
    {
      type: "Identifier",
      value: "event_type",
      range: [365, 375],
      loc: {
        start: {
          line: 13,
          column: 4,
        },
        end: {
          line: 13,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "VARCHAR",
      range: [376, 383],
      loc: {
        start: {
          line: 13,
          column: 15,
        },
        end: {
          line: 13,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [383, 384],
      loc: {
        start: {
          line: 13,
          column: 22,
        },
        end: {
          line: 13,
          column: 23,
        },
      },
    },
    {
      type: "Numeric",
      value: "50",
      range: [384, 386],
      loc: {
        start: {
          line: 13,
          column: 23,
        },
        end: {
          line: 13,
          column: 25,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [386, 387],
      loc: {
        start: {
          line: 13,
          column: 25,
        },
        end: {
          line: 13,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [388, 391],
      loc: {
        start: {
          line: 13,
          column: 27,
        },
        end: {
          line: 13,
          column: 30,
        },
      },
    },
    {
      type: "Keyword",
      value: "NULL",
      range: [392, 396],
      loc: {
        start: {
          line: 13,
          column: 31,
        },
        end: {
          line: 13,
          column: 35,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [396, 397],
      loc: {
        start: {
          line: 13,
          column: 35,
        },
        end: {
          line: 13,
          column: 36,
        },
      },
    },
    {
      type: "Identifier",
      value: "event_data",
      range: [402, 412],
      loc: {
        start: {
          line: 14,
          column: 4,
        },
        end: {
          line: 14,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "JSONB",
      range: [413, 418],
      loc: {
        start: {
          line: 14,
          column: 15,
        },
        end: {
          line: 14,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [418, 419],
      loc: {
        start: {
          line: 14,
          column: 20,
        },
        end: {
          line: 14,
          column: 21,
        },
      },
    },
    {
      type: "Identifier",
      value: "ip_address",
      range: [424, 434],
      loc: {
        start: {
          line: 15,
          column: 4,
        },
        end: {
          line: 15,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "INET",
      range: [435, 439],
      loc: {
        start: {
          line: 15,
          column: 15,
        },
        end: {
          line: 15,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [439, 440],
      loc: {
        start: {
          line: 15,
          column: 19,
        },
        end: {
          line: 15,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_agent",
      range: [445, 455],
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
      value: "TEXT",
      range: [456, 460],
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
      value: ",",
      range: [460, 461],
      loc: {
        start: {
          line: 16,
          column: 19,
        },
        end: {
          line: 16,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "created_at",
      range: [466, 476],
      loc: {
        start: {
          line: 17,
          column: 4,
        },
        end: {
          line: 17,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "TIMESTAMP",
      range: [477, 486],
      loc: {
        start: {
          line: 17,
          column: 15,
        },
        end: {
          line: 17,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "WITH",
      range: [487, 491],
      loc: {
        start: {
          line: 17,
          column: 25,
        },
        end: {
          line: 17,
          column: 29,
        },
      },
    },
    {
      type: "Keyword",
      value: "TIME",
      range: [492, 496],
      loc: {
        start: {
          line: 17,
          column: 30,
        },
        end: {
          line: 17,
          column: 34,
        },
      },
    },
    {
      type: "Identifier",
      value: "ZONE",
      range: [497, 501],
      loc: {
        start: {
          line: 17,
          column: 35,
        },
        end: {
          line: 17,
          column: 39,
        },
      },
    },
    {
      type: "Keyword",
      value: "DEFAULT",
      range: [502, 509],
      loc: {
        start: {
          line: 17,
          column: 40,
        },
        end: {
          line: 17,
          column: 47,
        },
      },
    },
    {
      type: "Identifier",
      value: "NOW",
      range: [510, 513],
      loc: {
        start: {
          line: 17,
          column: 48,
        },
        end: {
          line: 17,
          column: 51,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [513, 514],
      loc: {
        start: {
          line: 17,
          column: 51,
        },
        end: {
          line: 17,
          column: 52,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [514, 515],
      loc: {
        start: {
          line: 17,
          column: 52,
        },
        end: {
          line: 17,
          column: 53,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [515, 516],
      loc: {
        start: {
          line: 17,
          column: 53,
        },
        end: {
          line: 17,
          column: 54,
        },
      },
    },
    {
      type: "Keyword",
      value: "CONSTRAINT",
      range: [526, 536],
      loc: {
        start: {
          line: 19,
          column: 4,
        },
        end: {
          line: 19,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "valid_event_type",
      range: [537, 553],
      loc: {
        start: {
          line: 19,
          column: 15,
        },
        end: {
          line: 19,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "CHECK",
      range: [554, 559],
      loc: {
        start: {
          line: 19,
          column: 32,
        },
        end: {
          line: 19,
          column: 37,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [560, 561],
      loc: {
        start: {
          line: 19,
          column: 38,
        },
        end: {
          line: 19,
          column: 39,
        },
      },
    },
    {
      type: "Identifier",
      value: "event_type",
      range: [561, 571],
      loc: {
        start: {
          line: 19,
          column: 39,
        },
        end: {
          line: 19,
          column: 49,
        },
      },
    },
    {
      type: "Keyword",
      value: "IN",
      range: [572, 574],
      loc: {
        start: {
          line: 19,
          column: 50,
        },
        end: {
          line: 19,
          column: 52,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [575, 576],
      loc: {
        start: {
          line: 19,
          column: 53,
        },
        end: {
          line: 19,
          column: 54,
        },
      },
    },
    {
      type: "String",
      value: "'login'",
      range: [576, 583],
      loc: {
        start: {
          line: 19,
          column: 54,
        },
        end: {
          line: 19,
          column: 61,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [583, 584],
      loc: {
        start: {
          line: 19,
          column: 61,
        },
        end: {
          line: 19,
          column: 62,
        },
      },
    },
    {
      type: "String",
      value: "'logout'",
      range: [585, 593],
      loc: {
        start: {
          line: 19,
          column: 63,
        },
        end: {
          line: 19,
          column: 71,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [593, 594],
      loc: {
        start: {
          line: 19,
          column: 71,
        },
        end: {
          line: 19,
          column: 72,
        },
      },
    },
    {
      type: "String",
      value: "'purchase'",
      range: [595, 605],
      loc: {
        start: {
          line: 19,
          column: 73,
        },
        end: {
          line: 19,
          column: 83,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [605, 606],
      loc: {
        start: {
          line: 19,
          column: 83,
        },
        end: {
          line: 19,
          column: 84,
        },
      },
    },
    {
      type: "String",
      value: "'view'",
      range: [607, 613],
      loc: {
        start: {
          line: 19,
          column: 85,
        },
        end: {
          line: 19,
          column: 91,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [613, 614],
      loc: {
        start: {
          line: 19,
          column: 91,
        },
        end: {
          line: 19,
          column: 92,
        },
      },
    },
    {
      type: "String",
      value: "'click'",
      range: [615, 622],
      loc: {
        start: {
          line: 19,
          column: 93,
        },
        end: {
          line: 19,
          column: 100,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [622, 623],
      loc: {
        start: {
          line: 19,
          column: 100,
        },
        end: {
          line: 19,
          column: 101,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [623, 624],
      loc: {
        start: {
          line: 19,
          column: 101,
        },
        end: {
          line: 19,
          column: 102,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [624, 625],
      loc: {
        start: {
          line: 19,
          column: 102,
        },
        end: {
          line: 19,
          column: 103,
        },
      },
    },
    {
      type: "Keyword",
      value: "CONSTRAINT",
      range: [630, 640],
      loc: {
        start: {
          line: 20,
          column: 4,
        },
        end: {
          line: 20,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "valid_ip",
      range: [641, 649],
      loc: {
        start: {
          line: 20,
          column: 15,
        },
        end: {
          line: 20,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "CHECK",
      range: [650, 655],
      loc: {
        start: {
          line: 20,
          column: 24,
        },
        end: {
          line: 20,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [656, 657],
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
      type: "Identifier",
      value: "ip_address",
      range: [657, 667],
      loc: {
        start: {
          line: 20,
          column: 31,
        },
        end: {
          line: 20,
          column: 41,
        },
      },
    },
    {
      type: "Keyword",
      value: "IS",
      range: [668, 670],
      loc: {
        start: {
          line: 20,
          column: 42,
        },
        end: {
          line: 20,
          column: 44,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [671, 674],
      loc: {
        start: {
          line: 20,
          column: 45,
        },
        end: {
          line: 20,
          column: 48,
        },
      },
    },
    {
      type: "Keyword",
      value: "NULL",
      range: [675, 679],
      loc: {
        start: {
          line: 20,
          column: 49,
        },
        end: {
          line: 20,
          column: 53,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [679, 680],
      loc: {
        start: {
          line: 20,
          column: 53,
        },
        end: {
          line: 20,
          column: 54,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [680, 681],
      loc: {
        start: {
          line: 20,
          column: 54,
        },
        end: {
          line: 20,
          column: 55,
        },
      },
    },
    {
      type: "Keyword",
      value: "CONSTRAINT",
      range: [686, 696],
      loc: {
        start: {
          line: 21,
          column: 4,
        },
        end: {
          line: 21,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "non_empty_user_agent",
      range: [697, 717],
      loc: {
        start: {
          line: 21,
          column: 15,
        },
        end: {
          line: 21,
          column: 35,
        },
      },
    },
    {
      type: "Keyword",
      value: "CHECK",
      range: [718, 723],
      loc: {
        start: {
          line: 21,
          column: 36,
        },
        end: {
          line: 21,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [724, 725],
      loc: {
        start: {
          line: 21,
          column: 42,
        },
        end: {
          line: 21,
          column: 43,
        },
      },
    },
    {
      type: "Identifier",
      value: "LENGTH",
      range: [725, 731],
      loc: {
        start: {
          line: 21,
          column: 43,
        },
        end: {
          line: 21,
          column: 49,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [731, 732],
      loc: {
        start: {
          line: 21,
          column: 49,
        },
        end: {
          line: 21,
          column: 50,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_agent",
      range: [732, 742],
      loc: {
        start: {
          line: 21,
          column: 50,
        },
        end: {
          line: 21,
          column: 60,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [742, 743],
      loc: {
        start: {
          line: 21,
          column: 60,
        },
        end: {
          line: 21,
          column: 61,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [744, 745],
      loc: {
        start: {
          line: 21,
          column: 62,
        },
        end: {
          line: 21,
          column: 63,
        },
      },
    },
    {
      type: "Numeric",
      value: "0",
      range: [746, 747],
      loc: {
        start: {
          line: 21,
          column: 64,
        },
        end: {
          line: 21,
          column: 65,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [747, 748],
      loc: {
        start: {
          line: 21,
          column: 65,
        },
        end: {
          line: 21,
          column: 66,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [749, 750],
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
      type: "Punctuator",
      value: ";",
      range: [750, 751],
      loc: {
        start: {
          line: 22,
          column: 1,
        },
        end: {
          line: 22,
          column: 2,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Partitioning",
      range: [753, 768],
      loc: {
        start: {
          line: 24,
          column: 0,
        },
        end: {
          line: 24,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [769, 775],
      loc: {
        start: {
          line: 25,
          column: 0,
        },
        end: {
          line: 25,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [776, 781],
      loc: {
        start: {
          line: 25,
          column: 7,
        },
        end: {
          line: 25,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [782, 791],
      loc: {
        start: {
          line: 25,
          column: 13,
        },
        end: {
          line: 25,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [791, 792],
      loc: {
        start: {
          line: 25,
          column: 22,
        },
        end: {
          line: 25,
          column: 23,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_events_y2024m01",
      range: [792, 812],
      loc: {
        start: {
          line: 25,
          column: 23,
        },
        end: {
          line: 25,
          column: 43,
        },
      },
    },
    {
      type: "Keyword",
      value: "PARTITION",
      range: [813, 822],
      loc: {
        start: {
          line: 25,
          column: 44,
        },
        end: {
          line: 25,
          column: 53,
        },
      },
    },
    {
      type: "Identifier",
      value: "OF",
      range: [823, 825],
      loc: {
        start: {
          line: 25,
          column: 54,
        },
        end: {
          line: 25,
          column: 56,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [826, 835],
      loc: {
        start: {
          line: 25,
          column: 57,
        },
        end: {
          line: 25,
          column: 66,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [835, 836],
      loc: {
        start: {
          line: 25,
          column: 66,
        },
        end: {
          line: 25,
          column: 67,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_events",
      range: [836, 847],
      loc: {
        start: {
          line: 25,
          column: 67,
        },
        end: {
          line: 25,
          column: 78,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOR",
      range: [848, 851],
      loc: {
        start: {
          line: 26,
          column: 0,
        },
        end: {
          line: 26,
          column: 3,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [852, 858],
      loc: {
        start: {
          line: 26,
          column: 4,
        },
        end: {
          line: 26,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [859, 863],
      loc: {
        start: {
          line: 26,
          column: 11,
        },
        end: {
          line: 26,
          column: 15,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [864, 865],
      loc: {
        start: {
          line: 26,
          column: 16,
        },
        end: {
          line: 26,
          column: 17,
        },
      },
    },
    {
      type: "String",
      value: "'2024-01-01'",
      range: [865, 877],
      loc: {
        start: {
          line: 26,
          column: 17,
        },
        end: {
          line: 26,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [877, 878],
      loc: {
        start: {
          line: 26,
          column: 29,
        },
        end: {
          line: 26,
          column: 30,
        },
      },
    },
    {
      type: "Keyword",
      value: "TO",
      range: [879, 881],
      loc: {
        start: {
          line: 26,
          column: 31,
        },
        end: {
          line: 26,
          column: 33,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [882, 883],
      loc: {
        start: {
          line: 26,
          column: 34,
        },
        end: {
          line: 26,
          column: 35,
        },
      },
    },
    {
      type: "String",
      value: "'2024-02-01'",
      range: [883, 895],
      loc: {
        start: {
          line: 26,
          column: 35,
        },
        end: {
          line: 26,
          column: 47,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [895, 896],
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
      type: "Punctuator",
      value: ";",
      range: [896, 897],
      loc: {
        start: {
          line: 26,
          column: 48,
        },
        end: {
          line: 26,
          column: 49,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [899, 905],
      loc: {
        start: {
          line: 28,
          column: 0,
        },
        end: {
          line: 28,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [906, 911],
      loc: {
        start: {
          line: 28,
          column: 7,
        },
        end: {
          line: 28,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [912, 921],
      loc: {
        start: {
          line: 28,
          column: 13,
        },
        end: {
          line: 28,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [921, 922],
      loc: {
        start: {
          line: 28,
          column: 22,
        },
        end: {
          line: 28,
          column: 23,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_events_y2024m02",
      range: [922, 942],
      loc: {
        start: {
          line: 28,
          column: 23,
        },
        end: {
          line: 28,
          column: 43,
        },
      },
    },
    {
      type: "Keyword",
      value: "PARTITION",
      range: [943, 952],
      loc: {
        start: {
          line: 28,
          column: 44,
        },
        end: {
          line: 28,
          column: 53,
        },
      },
    },
    {
      type: "Identifier",
      value: "OF",
      range: [953, 955],
      loc: {
        start: {
          line: 28,
          column: 54,
        },
        end: {
          line: 28,
          column: 56,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [956, 965],
      loc: {
        start: {
          line: 28,
          column: 57,
        },
        end: {
          line: 28,
          column: 66,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [965, 966],
      loc: {
        start: {
          line: 28,
          column: 66,
        },
        end: {
          line: 28,
          column: 67,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_events",
      range: [966, 977],
      loc: {
        start: {
          line: 28,
          column: 67,
        },
        end: {
          line: 28,
          column: 78,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOR",
      range: [978, 981],
      loc: {
        start: {
          line: 29,
          column: 0,
        },
        end: {
          line: 29,
          column: 3,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [982, 988],
      loc: {
        start: {
          line: 29,
          column: 4,
        },
        end: {
          line: 29,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [989, 993],
      loc: {
        start: {
          line: 29,
          column: 11,
        },
        end: {
          line: 29,
          column: 15,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [994, 995],
      loc: {
        start: {
          line: 29,
          column: 16,
        },
        end: {
          line: 29,
          column: 17,
        },
      },
    },
    {
      type: "String",
      value: "'2024-02-01'",
      range: [995, 1007],
      loc: {
        start: {
          line: 29,
          column: 17,
        },
        end: {
          line: 29,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1007, 1008],
      loc: {
        start: {
          line: 29,
          column: 29,
        },
        end: {
          line: 29,
          column: 30,
        },
      },
    },
    {
      type: "Keyword",
      value: "TO",
      range: [1009, 1011],
      loc: {
        start: {
          line: 29,
          column: 31,
        },
        end: {
          line: 29,
          column: 33,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1012, 1013],
      loc: {
        start: {
          line: 29,
          column: 34,
        },
        end: {
          line: 29,
          column: 35,
        },
      },
    },
    {
      type: "String",
      value: "'2024-03-01'",
      range: [1013, 1025],
      loc: {
        start: {
          line: 29,
          column: 35,
        },
        end: {
          line: 29,
          column: 47,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1025, 1026],
      loc: {
        start: {
          line: 29,
          column: 47,
        },
        end: {
          line: 29,
          column: 48,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1026, 1027],
      loc: {
        start: {
          line: 29,
          column: 48,
        },
        end: {
          line: 29,
          column: 49,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Foreign data wrapper setup",
      range: [1029, 1058],
      loc: {
        start: {
          line: 31,
          column: 0,
        },
        end: {
          line: 31,
          column: 29,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [1059, 1065],
      loc: {
        start: {
          line: 32,
          column: 0,
        },
        end: {
          line: 32,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "EXTENSION",
      range: [1066, 1075],
      loc: {
        start: {
          line: 32,
          column: 7,
        },
        end: {
          line: 32,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [1076, 1078],
      loc: {
        start: {
          line: 32,
          column: 17,
        },
        end: {
          line: 32,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [1079, 1082],
      loc: {
        start: {
          line: 32,
          column: 20,
        },
        end: {
          line: 32,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXISTS",
      range: [1083, 1089],
      loc: {
        start: {
          line: 32,
          column: 24,
        },
        end: {
          line: 32,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "postgres_fdw",
      range: [1090, 1102],
      loc: {
        start: {
          line: 32,
          column: 31,
        },
        end: {
          line: 32,
          column: 43,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1102, 1103],
      loc: {
        start: {
          line: 32,
          column: 43,
        },
        end: {
          line: 32,
          column: 44,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [1105, 1111],
      loc: {
        start: {
          line: 34,
          column: 0,
        },
        end: {
          line: 34,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "SERVER",
      range: [1112, 1118],
      loc: {
        start: {
          line: 34,
          column: 7,
        },
        end: {
          line: 34,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "remote_server",
      range: [1119, 1132],
      loc: {
        start: {
          line: 34,
          column: 14,
        },
        end: {
          line: 34,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOREIGN",
      range: [1133, 1140],
      loc: {
        start: {
          line: 35,
          column: 0,
        },
        end: {
          line: 35,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "DATA",
      range: [1141, 1145],
      loc: {
        start: {
          line: 35,
          column: 8,
        },
        end: {
          line: 35,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "WRAPPER",
      range: [1146, 1153],
      loc: {
        start: {
          line: 35,
          column: 13,
        },
        end: {
          line: 35,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "postgres_fdw",
      range: [1154, 1166],
      loc: {
        start: {
          line: 35,
          column: 21,
        },
        end: {
          line: 35,
          column: 33,
        },
      },
    },
    {
      type: "Identifier",
      value: "OPTIONS",
      range: [1167, 1174],
      loc: {
        start: {
          line: 36,
          column: 0,
        },
        end: {
          line: 36,
          column: 7,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1175, 1176],
      loc: {
        start: {
          line: 36,
          column: 8,
        },
        end: {
          line: 36,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "host",
      range: [1176, 1180],
      loc: {
        start: {
          line: 36,
          column: 9,
        },
        end: {
          line: 36,
          column: 13,
        },
      },
    },
    {
      type: "String",
      value: "'remote-db.example.com'",
      range: [1181, 1204],
      loc: {
        start: {
          line: 36,
          column: 14,
        },
        end: {
          line: 36,
          column: 37,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1204, 1205],
      loc: {
        start: {
          line: 36,
          column: 37,
        },
        end: {
          line: 36,
          column: 38,
        },
      },
    },
    {
      type: "Identifier",
      value: "port",
      range: [1206, 1210],
      loc: {
        start: {
          line: 36,
          column: 39,
        },
        end: {
          line: 36,
          column: 43,
        },
      },
    },
    {
      type: "String",
      value: "'5432'",
      range: [1211, 1217],
      loc: {
        start: {
          line: 36,
          column: 44,
        },
        end: {
          line: 36,
          column: 50,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1217, 1218],
      loc: {
        start: {
          line: 36,
          column: 50,
        },
        end: {
          line: 36,
          column: 51,
        },
      },
    },
    {
      type: "Identifier",
      value: "dbname",
      range: [1219, 1225],
      loc: {
        start: {
          line: 36,
          column: 52,
        },
        end: {
          line: 36,
          column: 58,
        },
      },
    },
    {
      type: "String",
      value: "'external_db'",
      range: [1226, 1239],
      loc: {
        start: {
          line: 36,
          column: 59,
        },
        end: {
          line: 36,
          column: 72,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1239, 1240],
      loc: {
        start: {
          line: 36,
          column: 72,
        },
        end: {
          line: 36,
          column: 73,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1240, 1241],
      loc: {
        start: {
          line: 36,
          column: 73,
        },
        end: {
          line: 36,
          column: 74,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [1243, 1249],
      loc: {
        start: {
          line: 38,
          column: 0,
        },
        end: {
          line: 38,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "USER",
      range: [1250, 1254],
      loc: {
        start: {
          line: 38,
          column: 7,
        },
        end: {
          line: 38,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "MAPPING",
      range: [1255, 1262],
      loc: {
        start: {
          line: 38,
          column: 12,
        },
        end: {
          line: 38,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOR",
      range: [1263, 1266],
      loc: {
        start: {
          line: 38,
          column: 20,
        },
        end: {
          line: 38,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "current_user",
      range: [1267, 1279],
      loc: {
        start: {
          line: 38,
          column: 24,
        },
        end: {
          line: 38,
          column: 36,
        },
      },
    },
    {
      type: "Identifier",
      value: "SERVER",
      range: [1280, 1286],
      loc: {
        start: {
          line: 39,
          column: 0,
        },
        end: {
          line: 39,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "remote_server",
      range: [1287, 1300],
      loc: {
        start: {
          line: 39,
          column: 7,
        },
        end: {
          line: 39,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "OPTIONS",
      range: [1301, 1308],
      loc: {
        start: {
          line: 40,
          column: 0,
        },
        end: {
          line: 40,
          column: 7,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1309, 1310],
      loc: {
        start: {
          line: 40,
          column: 8,
        },
        end: {
          line: 40,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "user",
      range: [1310, 1314],
      loc: {
        start: {
          line: 40,
          column: 9,
        },
        end: {
          line: 40,
          column: 13,
        },
      },
    },
    {
      type: "String",
      value: "'remote_user'",
      range: [1315, 1328],
      loc: {
        start: {
          line: 40,
          column: 14,
        },
        end: {
          line: 40,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1328, 1329],
      loc: {
        start: {
          line: 40,
          column: 27,
        },
        end: {
          line: 40,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "password",
      range: [1330, 1338],
      loc: {
        start: {
          line: 40,
          column: 29,
        },
        end: {
          line: 40,
          column: 37,
        },
      },
    },
    {
      type: "String",
      value: "'remote_password'",
      range: [1339, 1356],
      loc: {
        start: {
          line: 40,
          column: 38,
        },
        end: {
          line: 40,
          column: 55,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1356, 1357],
      loc: {
        start: {
          line: 40,
          column: 55,
        },
        end: {
          line: 40,
          column: 56,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1357, 1358],
      loc: {
        start: {
          line: 40,
          column: 56,
        },
        end: {
          line: 40,
          column: 57,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [1360, 1366],
      loc: {
        start: {
          line: 42,
          column: 0,
        },
        end: {
          line: 42,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOREIGN",
      range: [1367, 1374],
      loc: {
        start: {
          line: 42,
          column: 7,
        },
        end: {
          line: 42,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [1375, 1380],
      loc: {
        start: {
          line: 42,
          column: 15,
        },
        end: {
          line: 42,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [1381, 1390],
      loc: {
        start: {
          line: 42,
          column: 21,
        },
        end: {
          line: 42,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1390, 1391],
      loc: {
        start: {
          line: 42,
          column: 30,
        },
        end: {
          line: 42,
          column: 31,
        },
      },
    },
    {
      type: "Identifier",
      value: "external_data",
      range: [1391, 1404],
      loc: {
        start: {
          line: 42,
          column: 31,
        },
        end: {
          line: 42,
          column: 44,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1405, 1406],
      loc: {
        start: {
          line: 42,
          column: 45,
        },
        end: {
          line: 42,
          column: 46,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [1411, 1413],
      loc: {
        start: {
          line: 43,
          column: 4,
        },
        end: {
          line: 43,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTEGER",
      range: [1414, 1421],
      loc: {
        start: {
          line: 43,
          column: 7,
        },
        end: {
          line: 43,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1421, 1422],
      loc: {
        start: {
          line: 43,
          column: 14,
        },
        end: {
          line: 43,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [1427, 1431],
      loc: {
        start: {
          line: 44,
          column: 4,
        },
        end: {
          line: 44,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "TEXT",
      range: [1432, 1436],
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
      type: "Punctuator",
      value: ",",
      range: [1436, 1437],
      loc: {
        start: {
          line: 44,
          column: 13,
        },
        end: {
          line: 44,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "value",
      range: [1442, 1447],
      loc: {
        start: {
          line: 45,
          column: 4,
        },
        end: {
          line: 45,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "NUMERIC",
      range: [1448, 1455],
      loc: {
        start: {
          line: 45,
          column: 10,
        },
        end: {
          line: 45,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1456, 1457],
      loc: {
        start: {
          line: 46,
          column: 0,
        },
        end: {
          line: 46,
          column: 1,
        },
      },
    },
    {
      type: "Identifier",
      value: "SERVER",
      range: [1458, 1464],
      loc: {
        start: {
          line: 46,
          column: 2,
        },
        end: {
          line: 46,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "remote_server",
      range: [1465, 1478],
      loc: {
        start: {
          line: 46,
          column: 9,
        },
        end: {
          line: 46,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "OPTIONS",
      range: [1479, 1486],
      loc: {
        start: {
          line: 47,
          column: 0,
        },
        end: {
          line: 47,
          column: 7,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1487, 1488],
      loc: {
        start: {
          line: 47,
          column: 8,
        },
        end: {
          line: 47,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "schema_name",
      range: [1488, 1499],
      loc: {
        start: {
          line: 47,
          column: 9,
        },
        end: {
          line: 47,
          column: 20,
        },
      },
    },
    {
      type: "String",
      value: "'public'",
      range: [1500, 1508],
      loc: {
        start: {
          line: 47,
          column: 21,
        },
        end: {
          line: 47,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1508, 1509],
      loc: {
        start: {
          line: 47,
          column: 29,
        },
        end: {
          line: 47,
          column: 30,
        },
      },
    },
    {
      type: "Keyword",
      value: "table_name",
      range: [1510, 1520],
      loc: {
        start: {
          line: 47,
          column: 31,
        },
        end: {
          line: 47,
          column: 41,
        },
      },
    },
    {
      type: "String",
      value: "'external_table'",
      range: [1521, 1537],
      loc: {
        start: {
          line: 47,
          column: 42,
        },
        end: {
          line: 47,
          column: 58,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1537, 1538],
      loc: {
        start: {
          line: 47,
          column: 58,
        },
        end: {
          line: 47,
          column: 59,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1538, 1539],
      loc: {
        start: {
          line: 47,
          column: 59,
        },
        end: {
          line: 47,
          column: 60,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Views and materialized views",
      range: [1541, 1572],
      loc: {
        start: {
          line: 49,
          column: 0,
        },
        end: {
          line: 49,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [1573, 1579],
      loc: {
        start: {
          line: 50,
          column: 0,
        },
        end: {
          line: 50,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "VIEW",
      range: [1580, 1584],
      loc: {
        start: {
          line: 50,
          column: 7,
        },
        end: {
          line: 50,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [1585, 1594],
      loc: {
        start: {
          line: 50,
          column: 12,
        },
        end: {
          line: 50,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1594, 1595],
      loc: {
        start: {
          line: 50,
          column: 21,
        },
        end: {
          line: 50,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "daily_user_activity",
      range: [1595, 1614],
      loc: {
        start: {
          line: 50,
          column: 22,
        },
        end: {
          line: 50,
          column: 41,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [1615, 1617],
      loc: {
        start: {
          line: 50,
          column: 42,
        },
        end: {
          line: 50,
          column: 44,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1618, 1624],
      loc: {
        start: {
          line: 51,
          column: 0,
        },
        end: {
          line: 51,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "DATE",
      range: [1630, 1634],
      loc: {
        start: {
          line: 52,
          column: 4,
        },
        end: {
          line: 52,
          column: 8,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1634, 1635],
      loc: {
        start: {
          line: 52,
          column: 8,
        },
        end: {
          line: 52,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "created_at",
      range: [1635, 1645],
      loc: {
        start: {
          line: 52,
          column: 9,
        },
        end: {
          line: 52,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1645, 1646],
      loc: {
        start: {
          line: 52,
          column: 19,
        },
        end: {
          line: 52,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1647, 1649],
      loc: {
        start: {
          line: 52,
          column: 21,
        },
        end: {
          line: 52,
          column: 23,
        },
      },
    },
    {
      type: "Identifier",
      value: "activity_date",
      range: [1650, 1663],
      loc: {
        start: {
          line: 52,
          column: 24,
        },
        end: {
          line: 52,
          column: 37,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1663, 1664],
      loc: {
        start: {
          line: 52,
          column: 37,
        },
        end: {
          line: 52,
          column: 38,
        },
      },
    },
    {
      type: "Keyword",
      value: "COUNT",
      range: [1669, 1674],
      loc: {
        start: {
          line: 53,
          column: 4,
        },
        end: {
          line: 53,
          column: 9,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1674, 1675],
      loc: {
        start: {
          line: 53,
          column: 9,
        },
        end: {
          line: 53,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "DISTINCT",
      range: [1675, 1683],
      loc: {
        start: {
          line: 53,
          column: 10,
        },
        end: {
          line: 53,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [1684, 1691],
      loc: {
        start: {
          line: 53,
          column: 19,
        },
        end: {
          line: 53,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1691, 1692],
      loc: {
        start: {
          line: 53,
          column: 26,
        },
        end: {
          line: 53,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1693, 1695],
      loc: {
        start: {
          line: 53,
          column: 28,
        },
        end: {
          line: 53,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "unique_users",
      range: [1696, 1708],
      loc: {
        start: {
          line: 53,
          column: 31,
        },
        end: {
          line: 53,
          column: 43,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1708, 1709],
      loc: {
        start: {
          line: 53,
          column: 43,
        },
        end: {
          line: 53,
          column: 44,
        },
      },
    },
    {
      type: "Keyword",
      value: "COUNT",
      range: [1714, 1719],
      loc: {
        start: {
          line: 54,
          column: 4,
        },
        end: {
          line: 54,
          column: 9,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1719, 1720],
      loc: {
        start: {
          line: 54,
          column: 9,
        },
        end: {
          line: 54,
          column: 10,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [1720, 1721],
      loc: {
        start: {
          line: 54,
          column: 10,
        },
        end: {
          line: 54,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1721, 1722],
      loc: {
        start: {
          line: 54,
          column: 11,
        },
        end: {
          line: 54,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1723, 1725],
      loc: {
        start: {
          line: 54,
          column: 13,
        },
        end: {
          line: 54,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_events",
      range: [1726, 1738],
      loc: {
        start: {
          line: 54,
          column: 16,
        },
        end: {
          line: 54,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1739, 1743],
      loc: {
        start: {
          line: 55,
          column: 0,
        },
        end: {
          line: 55,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [1744, 1753],
      loc: {
        start: {
          line: 55,
          column: 5,
        },
        end: {
          line: 55,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1753, 1754],
      loc: {
        start: {
          line: 55,
          column: 14,
        },
        end: {
          line: 55,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_events",
      range: [1754, 1765],
      loc: {
        start: {
          line: 55,
          column: 15,
        },
        end: {
          line: 55,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "GROUP",
      range: [1766, 1771],
      loc: {
        start: {
          line: 56,
          column: 0,
        },
        end: {
          line: 56,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [1772, 1774],
      loc: {
        start: {
          line: 56,
          column: 6,
        },
        end: {
          line: 56,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "DATE",
      range: [1775, 1779],
      loc: {
        start: {
          line: 56,
          column: 9,
        },
        end: {
          line: 56,
          column: 13,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1779, 1780],
      loc: {
        start: {
          line: 56,
          column: 13,
        },
        end: {
          line: 56,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "created_at",
      range: [1780, 1790],
      loc: {
        start: {
          line: 56,
          column: 14,
        },
        end: {
          line: 56,
          column: 24,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1790, 1791],
      loc: {
        start: {
          line: 56,
          column: 24,
        },
        end: {
          line: 56,
          column: 25,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1791, 1792],
      loc: {
        start: {
          line: 56,
          column: 25,
        },
        end: {
          line: 56,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [1794, 1800],
      loc: {
        start: {
          line: 58,
          column: 0,
        },
        end: {
          line: 58,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "MATERIALIZED",
      range: [1801, 1813],
      loc: {
        start: {
          line: 58,
          column: 7,
        },
        end: {
          line: 58,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "VIEW",
      range: [1814, 1818],
      loc: {
        start: {
          line: 58,
          column: 20,
        },
        end: {
          line: 58,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [1819, 1828],
      loc: {
        start: {
          line: 58,
          column: 25,
        },
        end: {
          line: 58,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1828, 1829],
      loc: {
        start: {
          line: 58,
          column: 34,
        },
        end: {
          line: 58,
          column: 35,
        },
      },
    },
    {
      type: "Identifier",
      value: "monthly_user_stats",
      range: [1829, 1847],
      loc: {
        start: {
          line: 58,
          column: 35,
        },
        end: {
          line: 58,
          column: 53,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [1848, 1850],
      loc: {
        start: {
          line: 58,
          column: 54,
        },
        end: {
          line: 58,
          column: 56,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1851, 1857],
      loc: {
        start: {
          line: 59,
          column: 0,
        },
        end: {
          line: 59,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "DATE_TRUNC",
      range: [1863, 1873],
      loc: {
        start: {
          line: 60,
          column: 4,
        },
        end: {
          line: 60,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1873, 1874],
      loc: {
        start: {
          line: 60,
          column: 14,
        },
        end: {
          line: 60,
          column: 15,
        },
      },
    },
    {
      type: "String",
      value: "'month'",
      range: [1874, 1881],
      loc: {
        start: {
          line: 60,
          column: 15,
        },
        end: {
          line: 60,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1881, 1882],
      loc: {
        start: {
          line: 60,
          column: 22,
        },
        end: {
          line: 60,
          column: 23,
        },
      },
    },
    {
      type: "Identifier",
      value: "created_at",
      range: [1883, 1893],
      loc: {
        start: {
          line: 60,
          column: 24,
        },
        end: {
          line: 60,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1893, 1894],
      loc: {
        start: {
          line: 60,
          column: 34,
        },
        end: {
          line: 60,
          column: 35,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1895, 1897],
      loc: {
        start: {
          line: 60,
          column: 36,
        },
        end: {
          line: 60,
          column: 38,
        },
      },
    },
    {
      type: "Identifier",
      value: "month",
      range: [1898, 1903],
      loc: {
        start: {
          line: 60,
          column: 39,
        },
        end: {
          line: 60,
          column: 44,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1903, 1904],
      loc: {
        start: {
          line: 60,
          column: 44,
        },
        end: {
          line: 60,
          column: 45,
        },
      },
    },
    {
      type: "Identifier",
      value: "event_type",
      range: [1909, 1919],
      loc: {
        start: {
          line: 61,
          column: 4,
        },
        end: {
          line: 61,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1919, 1920],
      loc: {
        start: {
          line: 61,
          column: 14,
        },
        end: {
          line: 61,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "COUNT",
      range: [1925, 1930],
      loc: {
        start: {
          line: 62,
          column: 4,
        },
        end: {
          line: 62,
          column: 9,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1930, 1931],
      loc: {
        start: {
          line: 62,
          column: 9,
        },
        end: {
          line: 62,
          column: 10,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [1931, 1932],
      loc: {
        start: {
          line: 62,
          column: 10,
        },
        end: {
          line: 62,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1932, 1933],
      loc: {
        start: {
          line: 62,
          column: 11,
        },
        end: {
          line: 62,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1934, 1936],
      loc: {
        start: {
          line: 62,
          column: 13,
        },
        end: {
          line: 62,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "event_count",
      range: [1937, 1948],
      loc: {
        start: {
          line: 62,
          column: 16,
        },
        end: {
          line: 62,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1948, 1949],
      loc: {
        start: {
          line: 62,
          column: 27,
        },
        end: {
          line: 62,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "COUNT",
      range: [1954, 1959],
      loc: {
        start: {
          line: 63,
          column: 4,
        },
        end: {
          line: 63,
          column: 9,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1959, 1960],
      loc: {
        start: {
          line: 63,
          column: 9,
        },
        end: {
          line: 63,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "DISTINCT",
      range: [1960, 1968],
      loc: {
        start: {
          line: 63,
          column: 10,
        },
        end: {
          line: 63,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [1969, 1976],
      loc: {
        start: {
          line: 63,
          column: 19,
        },
        end: {
          line: 63,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1976, 1977],
      loc: {
        start: {
          line: 63,
          column: 26,
        },
        end: {
          line: 63,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "as",
      range: [1978, 1980],
      loc: {
        start: {
          line: 63,
          column: 28,
        },
        end: {
          line: 63,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "unique_users",
      range: [1981, 1993],
      loc: {
        start: {
          line: 63,
          column: 31,
        },
        end: {
          line: 63,
          column: 43,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1994, 1998],
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
      value: "analytics",
      range: [1999, 2008],
      loc: {
        start: {
          line: 64,
          column: 5,
        },
        end: {
          line: 64,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2008, 2009],
      loc: {
        start: {
          line: 64,
          column: 14,
        },
        end: {
          line: 64,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_events",
      range: [2009, 2020],
      loc: {
        start: {
          line: 64,
          column: 15,
        },
        end: {
          line: 64,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "GROUP",
      range: [2021, 2026],
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
      value: "BY",
      range: [2027, 2029],
      loc: {
        start: {
          line: 65,
          column: 6,
        },
        end: {
          line: 65,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "DATE_TRUNC",
      range: [2030, 2040],
      loc: {
        start: {
          line: 65,
          column: 9,
        },
        end: {
          line: 65,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2040, 2041],
      loc: {
        start: {
          line: 65,
          column: 19,
        },
        end: {
          line: 65,
          column: 20,
        },
      },
    },
    {
      type: "String",
      value: "'month'",
      range: [2041, 2048],
      loc: {
        start: {
          line: 65,
          column: 20,
        },
        end: {
          line: 65,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2048, 2049],
      loc: {
        start: {
          line: 65,
          column: 27,
        },
        end: {
          line: 65,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "created_at",
      range: [2050, 2060],
      loc: {
        start: {
          line: 65,
          column: 29,
        },
        end: {
          line: 65,
          column: 39,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2060, 2061],
      loc: {
        start: {
          line: 65,
          column: 39,
        },
        end: {
          line: 65,
          column: 40,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2061, 2062],
      loc: {
        start: {
          line: 65,
          column: 40,
        },
        end: {
          line: 65,
          column: 41,
        },
      },
    },
    {
      type: "Identifier",
      value: "event_type",
      range: [2063, 2073],
      loc: {
        start: {
          line: 65,
          column: 42,
        },
        end: {
          line: 65,
          column: 52,
        },
      },
    },
    {
      type: "Keyword",
      value: "WITH",
      range: [2074, 2078],
      loc: {
        start: {
          line: 66,
          column: 0,
        },
        end: {
          line: 66,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "DATA",
      range: [2079, 2083],
      loc: {
        start: {
          line: 66,
          column: 5,
        },
        end: {
          line: 66,
          column: 9,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2083, 2084],
      loc: {
        start: {
          line: 66,
          column: 9,
        },
        end: {
          line: 66,
          column: 10,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Indexes on materialized view",
      range: [2086, 2117],
      loc: {
        start: {
          line: 68,
          column: 0,
        },
        end: {
          line: 68,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [2118, 2124],
      loc: {
        start: {
          line: 69,
          column: 0,
        },
        end: {
          line: 69,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "INDEX",
      range: [2125, 2130],
      loc: {
        start: {
          line: 69,
          column: 7,
        },
        end: {
          line: 69,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "idx_monthly_stats_month",
      range: [2131, 2154],
      loc: {
        start: {
          line: 69,
          column: 13,
        },
        end: {
          line: 69,
          column: 36,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [2155, 2157],
      loc: {
        start: {
          line: 69,
          column: 37,
        },
        end: {
          line: 69,
          column: 39,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [2158, 2167],
      loc: {
        start: {
          line: 69,
          column: 40,
        },
        end: {
          line: 69,
          column: 49,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2167, 2168],
      loc: {
        start: {
          line: 69,
          column: 49,
        },
        end: {
          line: 69,
          column: 50,
        },
      },
    },
    {
      type: "Identifier",
      value: "monthly_user_stats",
      range: [2168, 2186],
      loc: {
        start: {
          line: 69,
          column: 50,
        },
        end: {
          line: 69,
          column: 68,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2186, 2187],
      loc: {
        start: {
          line: 69,
          column: 68,
        },
        end: {
          line: 69,
          column: 69,
        },
      },
    },
    {
      type: "Identifier",
      value: "month",
      range: [2187, 2192],
      loc: {
        start: {
          line: 69,
          column: 69,
        },
        end: {
          line: 69,
          column: 74,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2192, 2193],
      loc: {
        start: {
          line: 69,
          column: 74,
        },
        end: {
          line: 69,
          column: 75,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2193, 2194],
      loc: {
        start: {
          line: 69,
          column: 75,
        },
        end: {
          line: 69,
          column: 76,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [2195, 2201],
      loc: {
        start: {
          line: 70,
          column: 0,
        },
        end: {
          line: 70,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "INDEX",
      range: [2202, 2207],
      loc: {
        start: {
          line: 70,
          column: 7,
        },
        end: {
          line: 70,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "idx_monthly_stats_type",
      range: [2208, 2230],
      loc: {
        start: {
          line: 70,
          column: 13,
        },
        end: {
          line: 70,
          column: 35,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [2231, 2233],
      loc: {
        start: {
          line: 70,
          column: 36,
        },
        end: {
          line: 70,
          column: 38,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [2234, 2243],
      loc: {
        start: {
          line: 70,
          column: 39,
        },
        end: {
          line: 70,
          column: 48,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2243, 2244],
      loc: {
        start: {
          line: 70,
          column: 48,
        },
        end: {
          line: 70,
          column: 49,
        },
      },
    },
    {
      type: "Identifier",
      value: "monthly_user_stats",
      range: [2244, 2262],
      loc: {
        start: {
          line: 70,
          column: 49,
        },
        end: {
          line: 70,
          column: 67,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2262, 2263],
      loc: {
        start: {
          line: 70,
          column: 67,
        },
        end: {
          line: 70,
          column: 68,
        },
      },
    },
    {
      type: "Identifier",
      value: "event_type",
      range: [2263, 2273],
      loc: {
        start: {
          line: 70,
          column: 68,
        },
        end: {
          line: 70,
          column: 78,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2273, 2274],
      loc: {
        start: {
          line: 70,
          column: 78,
        },
        end: {
          line: 70,
          column: 79,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2274, 2275],
      loc: {
        start: {
          line: 70,
          column: 79,
        },
        end: {
          line: 70,
          column: 80,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Row Level Security",
      range: [2277, 2298],
      loc: {
        start: {
          line: 72,
          column: 0,
        },
        end: {
          line: 72,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "ALTER",
      range: [2299, 2304],
      loc: {
        start: {
          line: 73,
          column: 0,
        },
        end: {
          line: 73,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [2305, 2310],
      loc: {
        start: {
          line: 73,
          column: 6,
        },
        end: {
          line: 73,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [2311, 2320],
      loc: {
        start: {
          line: 73,
          column: 12,
        },
        end: {
          line: 73,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2320, 2321],
      loc: {
        start: {
          line: 73,
          column: 21,
        },
        end: {
          line: 73,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_events",
      range: [2321, 2332],
      loc: {
        start: {
          line: 73,
          column: 22,
        },
        end: {
          line: 73,
          column: 33,
        },
      },
    },
    {
      type: "Identifier",
      value: "ENABLE",
      range: [2333, 2339],
      loc: {
        start: {
          line: 73,
          column: 34,
        },
        end: {
          line: 73,
          column: 40,
        },
      },
    },
    {
      type: "Keyword",
      value: "ROW",
      range: [2340, 2343],
      loc: {
        start: {
          line: 73,
          column: 41,
        },
        end: {
          line: 73,
          column: 44,
        },
      },
    },
    {
      type: "Identifier",
      value: "LEVEL",
      range: [2344, 2349],
      loc: {
        start: {
          line: 73,
          column: 45,
        },
        end: {
          line: 73,
          column: 50,
        },
      },
    },
    {
      type: "Keyword",
      value: "SECURITY",
      range: [2350, 2358],
      loc: {
        start: {
          line: 73,
          column: 51,
        },
        end: {
          line: 73,
          column: 59,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2358, 2359],
      loc: {
        start: {
          line: 73,
          column: 59,
        },
        end: {
          line: 73,
          column: 60,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [2361, 2367],
      loc: {
        start: {
          line: 75,
          column: 0,
        },
        end: {
          line: 75,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "POLICY",
      range: [2368, 2374],
      loc: {
        start: {
          line: 75,
          column: 7,
        },
        end: {
          line: 75,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_events_policy",
      range: [2375, 2393],
      loc: {
        start: {
          line: 75,
          column: 14,
        },
        end: {
          line: 75,
          column: 32,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [2394, 2396],
      loc: {
        start: {
          line: 75,
          column: 33,
        },
        end: {
          line: 75,
          column: 35,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [2397, 2406],
      loc: {
        start: {
          line: 75,
          column: 36,
        },
        end: {
          line: 75,
          column: 45,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2406, 2407],
      loc: {
        start: {
          line: 75,
          column: 45,
        },
        end: {
          line: 75,
          column: 46,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_events",
      range: [2407, 2418],
      loc: {
        start: {
          line: 75,
          column: 46,
        },
        end: {
          line: 75,
          column: 57,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOR",
      range: [2419, 2422],
      loc: {
        start: {
          line: 76,
          column: 0,
        },
        end: {
          line: 76,
          column: 3,
        },
      },
    },
    {
      type: "Keyword",
      value: "ALL",
      range: [2423, 2426],
      loc: {
        start: {
          line: 76,
          column: 4,
        },
        end: {
          line: 76,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "TO",
      range: [2427, 2429],
      loc: {
        start: {
          line: 76,
          column: 8,
        },
        end: {
          line: 76,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics_role",
      range: [2430, 2444],
      loc: {
        start: {
          line: 76,
          column: 11,
        },
        end: {
          line: 76,
          column: 25,
        },
      },
    },
    {
      type: "Keyword",
      value: "USING",
      range: [2445, 2450],
      loc: {
        start: {
          line: 77,
          column: 0,
        },
        end: {
          line: 77,
          column: 5,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2451, 2452],
      loc: {
        start: {
          line: 77,
          column: 6,
        },
        end: {
          line: 77,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [2452, 2459],
      loc: {
        start: {
          line: 77,
          column: 7,
        },
        end: {
          line: 77,
          column: 14,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2460, 2461],
      loc: {
        start: {
          line: 77,
          column: 15,
        },
        end: {
          line: 77,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "current_setting",
      range: [2462, 2477],
      loc: {
        start: {
          line: 77,
          column: 17,
        },
        end: {
          line: 77,
          column: 32,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2477, 2478],
      loc: {
        start: {
          line: 77,
          column: 32,
        },
        end: {
          line: 77,
          column: 33,
        },
      },
    },
    {
      type: "String",
      value: "'app.current_user_id'",
      range: [2478, 2499],
      loc: {
        start: {
          line: 77,
          column: 33,
        },
        end: {
          line: 77,
          column: 54,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2499, 2500],
      loc: {
        start: {
          line: 77,
          column: 54,
        },
        end: {
          line: 77,
          column: 55,
        },
      },
    },
    {
      type: "Operator",
      value: "::",
      range: [2500, 2502],
      loc: {
        start: {
          line: 77,
          column: 55,
        },
        end: {
          line: 77,
          column: 57,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTEGER",
      range: [2502, 2509],
      loc: {
        start: {
          line: 77,
          column: 57,
        },
        end: {
          line: 77,
          column: 64,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2509, 2510],
      loc: {
        start: {
          line: 77,
          column: 64,
        },
        end: {
          line: 77,
          column: 65,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2510, 2511],
      loc: {
        start: {
          line: 77,
          column: 65,
        },
        end: {
          line: 77,
          column: 66,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Grant permissions",
      range: [2513, 2533],
      loc: {
        start: {
          line: 79,
          column: 0,
        },
        end: {
          line: 79,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "GRANT",
      range: [2534, 2539],
      loc: {
        start: {
          line: 80,
          column: 0,
        },
        end: {
          line: 80,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "USAGE",
      range: [2540, 2545],
      loc: {
        start: {
          line: 80,
          column: 6,
        },
        end: {
          line: 80,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [2546, 2548],
      loc: {
        start: {
          line: 80,
          column: 12,
        },
        end: {
          line: 80,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "SCHEMA",
      range: [2549, 2555],
      loc: {
        start: {
          line: 80,
          column: 15,
        },
        end: {
          line: 80,
          column: 21,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [2556, 2565],
      loc: {
        start: {
          line: 80,
          column: 22,
        },
        end: {
          line: 80,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "TO",
      range: [2566, 2568],
      loc: {
        start: {
          line: 80,
          column: 32,
        },
        end: {
          line: 80,
          column: 34,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics_role",
      range: [2569, 2583],
      loc: {
        start: {
          line: 80,
          column: 35,
        },
        end: {
          line: 80,
          column: 49,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2583, 2584],
      loc: {
        start: {
          line: 80,
          column: 49,
        },
        end: {
          line: 80,
          column: 50,
        },
      },
    },
    {
      type: "Keyword",
      value: "GRANT",
      range: [2585, 2590],
      loc: {
        start: {
          line: 81,
          column: 0,
        },
        end: {
          line: 81,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [2591, 2597],
      loc: {
        start: {
          line: 81,
          column: 6,
        },
        end: {
          line: 81,
          column: 12,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2597, 2598],
      loc: {
        start: {
          line: 81,
          column: 12,
        },
        end: {
          line: 81,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [2599, 2605],
      loc: {
        start: {
          line: 81,
          column: 14,
        },
        end: {
          line: 81,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2605, 2606],
      loc: {
        start: {
          line: 81,
          column: 20,
        },
        end: {
          line: 81,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "UPDATE",
      range: [2607, 2613],
      loc: {
        start: {
          line: 81,
          column: 22,
        },
        end: {
          line: 81,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [2614, 2616],
      loc: {
        start: {
          line: 81,
          column: 29,
        },
        end: {
          line: 81,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "ALL",
      range: [2617, 2620],
      loc: {
        start: {
          line: 81,
          column: 32,
        },
        end: {
          line: 81,
          column: 35,
        },
      },
    },
    {
      type: "Identifier",
      value: "TABLES",
      range: [2621, 2627],
      loc: {
        start: {
          line: 81,
          column: 36,
        },
        end: {
          line: 81,
          column: 42,
        },
      },
    },
    {
      type: "Keyword",
      value: "IN",
      range: [2628, 2630],
      loc: {
        start: {
          line: 81,
          column: 43,
        },
        end: {
          line: 81,
          column: 45,
        },
      },
    },
    {
      type: "Keyword",
      value: "SCHEMA",
      range: [2631, 2637],
      loc: {
        start: {
          line: 81,
          column: 46,
        },
        end: {
          line: 81,
          column: 52,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [2638, 2647],
      loc: {
        start: {
          line: 81,
          column: 53,
        },
        end: {
          line: 81,
          column: 62,
        },
      },
    },
    {
      type: "Keyword",
      value: "TO",
      range: [2648, 2650],
      loc: {
        start: {
          line: 81,
          column: 63,
        },
        end: {
          line: 81,
          column: 65,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics_role",
      range: [2651, 2665],
      loc: {
        start: {
          line: 81,
          column: 66,
        },
        end: {
          line: 81,
          column: 80,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2665, 2666],
      loc: {
        start: {
          line: 81,
          column: 80,
        },
        end: {
          line: 81,
          column: 81,
        },
      },
    },
    {
      type: "Keyword",
      value: "GRANT",
      range: [2667, 2672],
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
      type: "Keyword",
      value: "USAGE",
      range: [2673, 2678],
      loc: {
        start: {
          line: 82,
          column: 6,
        },
        end: {
          line: 82,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [2679, 2681],
      loc: {
        start: {
          line: 82,
          column: 12,
        },
        end: {
          line: 82,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "ALL",
      range: [2682, 2685],
      loc: {
        start: {
          line: 82,
          column: 15,
        },
        end: {
          line: 82,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "SEQUENCES",
      range: [2686, 2695],
      loc: {
        start: {
          line: 82,
          column: 19,
        },
        end: {
          line: 82,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "IN",
      range: [2696, 2698],
      loc: {
        start: {
          line: 82,
          column: 29,
        },
        end: {
          line: 82,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "SCHEMA",
      range: [2699, 2705],
      loc: {
        start: {
          line: 82,
          column: 32,
        },
        end: {
          line: 82,
          column: 38,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [2706, 2715],
      loc: {
        start: {
          line: 82,
          column: 39,
        },
        end: {
          line: 82,
          column: 48,
        },
      },
    },
    {
      type: "Keyword",
      value: "TO",
      range: [2716, 2718],
      loc: {
        start: {
          line: 82,
          column: 49,
        },
        end: {
          line: 82,
          column: 51,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics_role",
      range: [2719, 2733],
      loc: {
        start: {
          line: 82,
          column: 52,
        },
        end: {
          line: 82,
          column: 66,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2733, 2734],
      loc: {
        start: {
          line: 82,
          column: 66,
        },
        end: {
          line: 82,
          column: 67,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Domain types",
      range: [2736, 2751],
      loc: {
        start: {
          line: 84,
          column: 0,
        },
        end: {
          line: 84,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [2752, 2758],
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
      value: "DOMAIN",
      range: [2759, 2765],
      loc: {
        start: {
          line: 85,
          column: 7,
        },
        end: {
          line: 85,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [2766, 2775],
      loc: {
        start: {
          line: 85,
          column: 14,
        },
        end: {
          line: 85,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2775, 2776],
      loc: {
        start: {
          line: 85,
          column: 23,
        },
        end: {
          line: 85,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "email",
      range: [2776, 2781],
      loc: {
        start: {
          line: 85,
          column: 24,
        },
        end: {
          line: 85,
          column: 29,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [2782, 2784],
      loc: {
        start: {
          line: 85,
          column: 30,
        },
        end: {
          line: 85,
          column: 32,
        },
      },
    },
    {
      type: "Keyword",
      value: "VARCHAR",
      range: [2785, 2792],
      loc: {
        start: {
          line: 85,
          column: 33,
        },
        end: {
          line: 85,
          column: 40,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2792, 2793],
      loc: {
        start: {
          line: 85,
          column: 40,
        },
        end: {
          line: 85,
          column: 41,
        },
      },
    },
    {
      type: "Numeric",
      value: "255",
      range: [2793, 2796],
      loc: {
        start: {
          line: 85,
          column: 41,
        },
        end: {
          line: 85,
          column: 44,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2796, 2797],
      loc: {
        start: {
          line: 85,
          column: 44,
        },
        end: {
          line: 85,
          column: 45,
        },
      },
    },
    {
      type: "Keyword",
      value: "CHECK",
      range: [2798, 2803],
      loc: {
        start: {
          line: 86,
          column: 0,
        },
        end: {
          line: 86,
          column: 5,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2804, 2805],
      loc: {
        start: {
          line: 86,
          column: 6,
        },
        end: {
          line: 86,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "VALUE",
      range: [2805, 2810],
      loc: {
        start: {
          line: 86,
          column: 7,
        },
        end: {
          line: 86,
          column: 12,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [2812, 2813],
      loc: {
        start: {
          line: 86,
          column: 14,
        },
        end: {
          line: 86,
          column: 15,
        },
      },
    },
    {
      type: "String",
      value: "'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'",
      range: [2814, 2864],
      loc: {
        start: {
          line: 86,
          column: 16,
        },
        end: {
          line: 86,
          column: 66,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2864, 2865],
      loc: {
        start: {
          line: 86,
          column: 66,
        },
        end: {
          line: 86,
          column: 67,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2865, 2866],
      loc: {
        start: {
          line: 86,
          column: 67,
        },
        end: {
          line: 86,
          column: 68,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [2868, 2874],
      loc: {
        start: {
          line: 88,
          column: 0,
        },
        end: {
          line: 88,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "DOMAIN",
      range: [2875, 2881],
      loc: {
        start: {
          line: 88,
          column: 7,
        },
        end: {
          line: 88,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [2882, 2891],
      loc: {
        start: {
          line: 88,
          column: 14,
        },
        end: {
          line: 88,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2891, 2892],
      loc: {
        start: {
          line: 88,
          column: 23,
        },
        end: {
          line: 88,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "positive_integer",
      range: [2892, 2908],
      loc: {
        start: {
          line: 88,
          column: 24,
        },
        end: {
          line: 88,
          column: 40,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [2909, 2911],
      loc: {
        start: {
          line: 88,
          column: 41,
        },
        end: {
          line: 88,
          column: 43,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTEGER",
      range: [2912, 2919],
      loc: {
        start: {
          line: 88,
          column: 44,
        },
        end: {
          line: 88,
          column: 51,
        },
      },
    },
    {
      type: "Keyword",
      value: "CHECK",
      range: [2920, 2925],
      loc: {
        start: {
          line: 89,
          column: 0,
        },
        end: {
          line: 89,
          column: 5,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2926, 2927],
      loc: {
        start: {
          line: 89,
          column: 6,
        },
        end: {
          line: 89,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "VALUE",
      range: [2927, 2932],
      loc: {
        start: {
          line: 89,
          column: 7,
        },
        end: {
          line: 89,
          column: 12,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [2933, 2934],
      loc: {
        start: {
          line: 89,
          column: 13,
        },
        end: {
          line: 89,
          column: 14,
        },
      },
    },
    {
      type: "Numeric",
      value: "0",
      range: [2935, 2936],
      loc: {
        start: {
          line: 89,
          column: 15,
        },
        end: {
          line: 89,
          column: 16,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2936, 2937],
      loc: {
        start: {
          line: 89,
          column: 16,
        },
        end: {
          line: 89,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2937, 2938],
      loc: {
        start: {
          line: 89,
          column: 17,
        },
        end: {
          line: 89,
          column: 18,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Composite types",
      range: [2940, 2958],
      loc: {
        start: {
          line: 91,
          column: 0,
        },
        end: {
          line: 91,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [2959, 2965],
      loc: {
        start: {
          line: 92,
          column: 0,
        },
        end: {
          line: 92,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "TYPE",
      range: [2966, 2970],
      loc: {
        start: {
          line: 92,
          column: 7,
        },
        end: {
          line: 92,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [2971, 2980],
      loc: {
        start: {
          line: 92,
          column: 12,
        },
        end: {
          line: 92,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2980, 2981],
      loc: {
        start: {
          line: 92,
          column: 21,
        },
        end: {
          line: 92,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "address_type",
      range: [2981, 2993],
      loc: {
        start: {
          line: 92,
          column: 22,
        },
        end: {
          line: 92,
          column: 34,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [2994, 2996],
      loc: {
        start: {
          line: 92,
          column: 35,
        },
        end: {
          line: 92,
          column: 37,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2997, 2998],
      loc: {
        start: {
          line: 92,
          column: 38,
        },
        end: {
          line: 92,
          column: 39,
        },
      },
    },
    {
      type: "Identifier",
      value: "street",
      range: [3003, 3009],
      loc: {
        start: {
          line: 93,
          column: 4,
        },
        end: {
          line: 93,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "TEXT",
      range: [3010, 3014],
      loc: {
        start: {
          line: 93,
          column: 11,
        },
        end: {
          line: 93,
          column: 15,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3014, 3015],
      loc: {
        start: {
          line: 93,
          column: 15,
        },
        end: {
          line: 93,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "city",
      range: [3020, 3024],
      loc: {
        start: {
          line: 94,
          column: 4,
        },
        end: {
          line: 94,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "TEXT",
      range: [3025, 3029],
      loc: {
        start: {
          line: 94,
          column: 9,
        },
        end: {
          line: 94,
          column: 13,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3029, 3030],
      loc: {
        start: {
          line: 94,
          column: 13,
        },
        end: {
          line: 94,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "state",
      range: [3035, 3040],
      loc: {
        start: {
          line: 95,
          column: 4,
        },
        end: {
          line: 95,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "TEXT",
      range: [3041, 3045],
      loc: {
        start: {
          line: 95,
          column: 10,
        },
        end: {
          line: 95,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3045, 3046],
      loc: {
        start: {
          line: 95,
          column: 14,
        },
        end: {
          line: 95,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "zip_code",
      range: [3051, 3059],
      loc: {
        start: {
          line: 96,
          column: 4,
        },
        end: {
          line: 96,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "TEXT",
      range: [3060, 3064],
      loc: {
        start: {
          line: 96,
          column: 13,
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
      range: [3064, 3065],
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
      value: "country",
      range: [3070, 3077],
      loc: {
        start: {
          line: 97,
          column: 4,
        },
        end: {
          line: 97,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "TEXT",
      range: [3078, 3082],
      loc: {
        start: {
          line: 97,
          column: 12,
        },
        end: {
          line: 97,
          column: 16,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [3083, 3084],
      loc: {
        start: {
          line: 98,
          column: 0,
        },
        end: {
          line: 98,
          column: 1,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [3084, 3085],
      loc: {
        start: {
          line: 98,
          column: 1,
        },
        end: {
          line: 98,
          column: 2,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Range types",
      range: [3087, 3101],
      loc: {
        start: {
          line: 100,
          column: 0,
        },
        end: {
          line: 100,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [3102, 3108],
      loc: {
        start: {
          line: 101,
          column: 0,
        },
        end: {
          line: 101,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "TYPE",
      range: [3109, 3113],
      loc: {
        start: {
          line: 101,
          column: 7,
        },
        end: {
          line: 101,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "analytics",
      range: [3114, 3123],
      loc: {
        start: {
          line: 101,
          column: 12,
        },
        end: {
          line: 101,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [3123, 3124],
      loc: {
        start: {
          line: 101,
          column: 21,
        },
        end: {
          line: 101,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "price_range",
      range: [3124, 3135],
      loc: {
        start: {
          line: 101,
          column: 22,
        },
        end: {
          line: 101,
          column: 33,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [3136, 3138],
      loc: {
        start: {
          line: 101,
          column: 34,
        },
        end: {
          line: 101,
          column: 36,
        },
      },
    },
    {
      type: "Keyword",
      value: "RANGE",
      range: [3139, 3144],
      loc: {
        start: {
          line: 101,
          column: 37,
        },
        end: {
          line: 101,
          column: 42,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [3145, 3146],
      loc: {
        start: {
          line: 101,
          column: 43,
        },
        end: {
          line: 101,
          column: 44,
        },
      },
    },
    {
      type: "Identifier",
      value: "subtype",
      range: [3151, 3158],
      loc: {
        start: {
          line: 102,
          column: 4,
        },
        end: {
          line: 102,
          column: 11,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [3159, 3160],
      loc: {
        start: {
          line: 102,
          column: 12,
        },
        end: {
          line: 102,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "NUMERIC",
      range: [3161, 3168],
      loc: {
        start: {
          line: 102,
          column: 14,
        },
        end: {
          line: 102,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [3168, 3169],
      loc: {
        start: {
          line: 102,
          column: 21,
        },
        end: {
          line: 102,
          column: 22,
        },
      },
    },
    {
      type: "Identifier",
      value: "subtype_diff",
      range: [3174, 3186],
      loc: {
        start: {
          line: 103,
          column: 4,
        },
        end: {
          line: 103,
          column: 16,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [3187, 3188],
      loc: {
        start: {
          line: 103,
          column: 17,
        },
        end: {
          line: 103,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "numeric_range_subdiff",
      range: [3189, 3210],
      loc: {
        start: {
          line: 103,
          column: 19,
        },
        end: {
          line: 103,
          column: 40,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [3211, 3212],
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
      type: "Punctuator",
      value: ";",
      range: [3212, 3213],
      loc: {
        start: {
          line: 104,
          column: 1,
        },
        end: {
          line: 104,
          column: 2,
        },
      },
    },
  ],
  comments: [],
} satisfies Program;
