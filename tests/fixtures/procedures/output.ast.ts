import type { Program } from "../../../src/ast.ts";

export default {
  type: "Program",
  range: [0, 1299],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 57,
      column: 21,
    },
  },
  body: [
    {
      type: "CreateFunctionStmt",
      replace: true,
      funcname: [
        {
          type: "String",
          sval: "get_user_count",
          range: [0, 0],
          loc: {
            start: {
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
      parameters: [
        {
          type: "FunctionParameter",
          name: "status_filter",
          argType: {
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
            typemod: -1,
            type: "names",
            range: [96, 103],
            loc: {
              start: {
                line: 2,
                column: 56,
              },
              end: {
                line: 2,
                column: 63,
              },
            },
          },
          mode: "FUNC_PARAM_DEFAULT",
          defexpr: {
            type: "A_Const",
            isnull: true,
            range: [112, 116],
            loc: {
              start: {
                line: 2,
                column: 72,
              },
              end: {
                line: 2,
                column: 76,
              },
            },
          },
          range: [0, 116],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 2,
              column: 76,
            },
          },
        },
      ],
      returnType: {
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
        range: [126, 133],
        loc: {
          start: {
            line: 3,
            column: 8,
          },
          end: {
            line: 3,
            column: 15,
          },
        },
      },
      options: [
        {
          type: "DefElem",
          defname: "as",
          arg: {
            type: "List",
            items: [
              {
                type: "String",
                sval: "\nDECLARE\n    user_count INTEGER;\nBEGIN\n    IF status_filter IS NULL THEN\n        SELECT COUNT(*) INTO user_count FROM users;\n    ELSE\n        SELECT COUNT(*) INTO user_count FROM users WHERE status = status_filter;\n    END IF;\n    \n    RETURN user_count;\nEND;\n",
                range: [0, 0],
                loc: {
                  start: {
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
          defaction: "DEFELEM_UNSPEC",
          range: [134, 136],
          loc: {
            start: {
              line: 3,
              column: 16,
            },
            end: {
              line: 3,
              column: 18,
            },
          },
        },
        {
          type: "DefElem",
          defname: "language",
          arg: {
            type: "String",
            sval: "plpgsql",
            range: [0, 0],
            loc: {
              start: {
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
          range: [402, 410],
          loc: {
            start: {
              line: 15,
              column: 3,
            },
            end: {
              line: 15,
              column: 11,
            },
          },
        },
      ],
      range: [0, 410],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 15,
          column: 11,
        },
      },
    },
    {
      type: "CreateFunctionStmt",
      is_procedure: true,
      replace: true,
      funcname: [
        {
          type: "String",
          sval: "update_user_status",
          range: [0, 0],
          loc: {
            start: {
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
      parameters: [
        {
          type: "FunctionParameter",
          name: "user_id",
          argType: {
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
            range: [481, 488],
            loc: {
              start: {
                line: 18,
                column: 12,
              },
              end: {
                line: 18,
                column: 19,
              },
            },
          },
          mode: "FUNC_PARAM_DEFAULT",
          range: [0, 488],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 18,
              column: 19,
            },
          },
        },
        {
          type: "FunctionParameter",
          name: "new_status",
          argType: {
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
            typemod: -1,
            type: "names",
            range: [505, 512],
            loc: {
              start: {
                line: 19,
                column: 15,
              },
              end: {
                line: 19,
                column: 22,
              },
            },
          },
          mode: "FUNC_PARAM_DEFAULT",
          range: [0, 512],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 19,
              column: 22,
            },
          },
        },
      ],
      options: [
        {
          type: "DefElem",
          defname: "language",
          arg: {
            type: "String",
            sval: "plpgsql",
            range: [0, 0],
            loc: {
              start: {
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
          range: [515, 523],
          loc: {
            start: {
              line: 21,
              column: 0,
            },
            end: {
              line: 21,
              column: 8,
            },
          },
        },
        {
          type: "DefElem",
          defname: "as",
          arg: {
            type: "List",
            items: [
              {
                type: "String",
                sval: "\nBEGIN\n    UPDATE users \n    SET status = new_status, \n        updated_at = CURRENT_TIMESTAMP \n    WHERE id = user_id;\n    \n    IF NOT FOUND THEN\n        RAISE EXCEPTION 'User with id % not found', user_id;\n    END IF;\n    \n    COMMIT;\nEND;\n",
                range: [0, 0],
                loc: {
                  start: {
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
          defaction: "DEFELEM_UNSPEC",
          range: [532, 534],
          loc: {
            start: {
              line: 21,
              column: 17,
            },
            end: {
              line: 21,
              column: 19,
            },
          },
        },
      ],
      range: [0, 534],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 21,
          column: 19,
        },
      },
    },
    {
      type: "CreateFunctionStmt",
      replace: true,
      funcname: [
        {
          type: "String",
          sval: "factorial",
          range: [0, 0],
          loc: {
            start: {
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
      parameters: [
        {
          type: "FunctionParameter",
          name: "n",
          argType: {
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
            range: [844, 851],
            loc: {
              start: {
                line: 37,
                column: 39,
              },
              end: {
                line: 37,
                column: 46,
              },
            },
          },
          mode: "FUNC_PARAM_DEFAULT",
          range: [0, 851],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 37,
              column: 46,
            },
          },
        },
      ],
      returnType: {
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
        range: [861, 868],
        loc: {
          start: {
            line: 38,
            column: 8,
          },
          end: {
            line: 38,
            column: 15,
          },
        },
      },
      options: [
        {
          type: "DefElem",
          defname: "as",
          arg: {
            type: "List",
            items: [
              {
                type: "String",
                sval: "\nBEGIN\n    IF n <= 1 THEN\n        RETURN 1;\n    ELSE\n        RETURN n * factorial(n - 1);\n    END IF;\nEND;\n",
                range: [0, 0],
                loc: {
                  start: {
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
          defaction: "DEFELEM_UNSPEC",
          range: [869, 871],
          loc: {
            start: {
              line: 38,
              column: 16,
            },
            end: {
              line: 38,
              column: 18,
            },
          },
        },
        {
          type: "DefElem",
          defname: "language",
          arg: {
            type: "String",
            sval: "plpgsql",
            range: [0, 0],
            loc: {
              start: {
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
          range: [984, 992],
          loc: {
            start: {
              line: 46,
              column: 3,
            },
            end: {
              line: 46,
              column: 11,
            },
          },
        },
      ],
      range: [0, 992],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 46,
          column: 11,
        },
      },
    },
    {
      type: "CreateFunctionStmt",
      replace: true,
      funcname: [
        {
          type: "String",
          sval: "get_user_info",
          range: [0, 0],
          loc: {
            start: {
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
      parameters: [
        {
          type: "FunctionParameter",
          name: "user_id",
          argType: {
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
            range: [1091, 1098],
            loc: {
              start: {
                line: 49,
                column: 49,
              },
              end: {
                line: 49,
                column: 56,
              },
            },
          },
          mode: "FUNC_PARAM_DEFAULT",
          range: [0, 1098],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 49,
              column: 56,
            },
          },
        },
        {
          type: "FunctionParameter",
          name: "name",
          argType: {
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
            typemod: -1,
            type: "names",
            range: [1119, 1126],
            loc: {
              start: {
                line: 50,
                column: 19,
              },
              end: {
                line: 50,
                column: 26,
              },
            },
          },
          mode: "FUNC_PARAM_TABLE",
          range: [0, 1126],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 50,
              column: 26,
            },
          },
        },
        {
          type: "FunctionParameter",
          name: "email",
          argType: {
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
            typemod: -1,
            type: "names",
            range: [1134, 1141],
            loc: {
              start: {
                line: 50,
                column: 34,
              },
              end: {
                line: 50,
                column: 41,
              },
            },
          },
          mode: "FUNC_PARAM_TABLE",
          range: [0, 1141],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 50,
              column: 41,
            },
          },
        },
        {
          type: "FunctionParameter",
          name: "status",
          argType: {
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
            typemod: -1,
            type: "names",
            range: [1150, 1157],
            loc: {
              start: {
                line: 50,
                column: 50,
              },
              end: {
                line: 50,
                column: 57,
              },
            },
          },
          mode: "FUNC_PARAM_TABLE",
          range: [0, 1157],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 50,
              column: 57,
            },
          },
        },
      ],
      returnType: {
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
          sval: "record",
          range: [0, 0],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 1,
              column: 0,
            },
          },
        },
        setof: true,
        typemod: -1,
        type: "names",
        range: [1108, 1113],
        loc: {
          start: {
            line: 50,
            column: 8,
          },
          end: {
            line: 50,
            column: 13,
          },
        },
      },
      options: [
        {
          type: "DefElem",
          defname: "as",
          arg: {
            type: "List",
            items: [
              {
                type: "String",
                sval: "\nBEGIN\n    RETURN QUERY\n    SELECT u.full_name, u.email, u.status\n    FROM users u\n    WHERE u.id = user_id;\nEND;\n",
                range: [0, 0],
                loc: {
                  start: {
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
          defaction: "DEFELEM_UNSPEC",
          range: [1159, 1161],
          loc: {
            start: {
              line: 50,
              column: 59,
            },
            end: {
              line: 50,
              column: 61,
            },
          },
        },
        {
          type: "DefElem",
          defname: "language",
          arg: {
            type: "String",
            sval: "plpgsql",
            range: [0, 0],
            loc: {
              start: {
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
          range: [1281, 1289],
          loc: {
            start: {
              line: 57,
              column: 3,
            },
            end: {
              line: 57,
              column: 11,
            },
          },
        },
      ],
      range: [0, 1289],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 57,
          column: 11,
        },
      },
    },
  ],
  tokens: [
    {
      type: "LineComment",
      value: "-- Stored procedures and functions test",
      range: [0, 39],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 39,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [40, 46],
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
      value: "OR",
      range: [47, 49],
      loc: {
        start: {
          line: 2,
          column: 7,
        },
        end: {
          line: 2,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "REPLACE",
      range: [50, 57],
      loc: {
        start: {
          line: 2,
          column: 10,
        },
        end: {
          line: 2,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "FUNCTION",
      range: [58, 66],
      loc: {
        start: {
          line: 2,
          column: 18,
        },
        end: {
          line: 2,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "get_user_count",
      range: [67, 81],
      loc: {
        start: {
          line: 2,
          column: 27,
        },
        end: {
          line: 2,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [81, 82],
      loc: {
        start: {
          line: 2,
          column: 41,
        },
        end: {
          line: 2,
          column: 42,
        },
      },
    },
    {
      type: "Identifier",
      value: "status_filter",
      range: [82, 95],
      loc: {
        start: {
          line: 2,
          column: 42,
        },
        end: {
          line: 2,
          column: 55,
        },
      },
    },
    {
      type: "Keyword",
      value: "VARCHAR",
      range: [96, 103],
      loc: {
        start: {
          line: 2,
          column: 56,
        },
        end: {
          line: 2,
          column: 63,
        },
      },
    },
    {
      type: "Keyword",
      value: "DEFAULT",
      range: [104, 111],
      loc: {
        start: {
          line: 2,
          column: 64,
        },
        end: {
          line: 2,
          column: 71,
        },
      },
    },
    {
      type: "Keyword",
      value: "NULL",
      range: [112, 116],
      loc: {
        start: {
          line: 2,
          column: 72,
        },
        end: {
          line: 2,
          column: 76,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [116, 117],
      loc: {
        start: {
          line: 2,
          column: 76,
        },
        end: {
          line: 2,
          column: 77,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURNS",
      range: [118, 125],
      loc: {
        start: {
          line: 3,
          column: 0,
        },
        end: {
          line: 3,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTEGER",
      range: [126, 133],
      loc: {
        start: {
          line: 3,
          column: 8,
        },
        end: {
          line: 3,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [134, 136],
      loc: {
        start: {
          line: 3,
          column: 16,
        },
        end: {
          line: 3,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "DECLARE",
      range: [140, 147],
      loc: {
        start: {
          line: 4,
          column: 0,
        },
        end: {
          line: 4,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_count",
      range: [152, 162],
      loc: {
        start: {
          line: 5,
          column: 4,
        },
        end: {
          line: 5,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTEGER",
      range: [163, 170],
      loc: {
        start: {
          line: 5,
          column: 15,
        },
        end: {
          line: 5,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [170, 171],
      loc: {
        start: {
          line: 5,
          column: 22,
        },
        end: {
          line: 5,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [172, 177],
      loc: {
        start: {
          line: 6,
          column: 0,
        },
        end: {
          line: 6,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [182, 184],
      loc: {
        start: {
          line: 7,
          column: 4,
        },
        end: {
          line: 7,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "status_filter",
      range: [185, 198],
      loc: {
        start: {
          line: 7,
          column: 7,
        },
        end: {
          line: 7,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "IS",
      range: [199, 201],
      loc: {
        start: {
          line: 7,
          column: 21,
        },
        end: {
          line: 7,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "NULL",
      range: [202, 206],
      loc: {
        start: {
          line: 7,
          column: 24,
        },
        end: {
          line: 7,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [207, 211],
      loc: {
        start: {
          line: 7,
          column: 29,
        },
        end: {
          line: 7,
          column: 33,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [220, 226],
      loc: {
        start: {
          line: 8,
          column: 8,
        },
        end: {
          line: 8,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "COUNT",
      range: [227, 232],
      loc: {
        start: {
          line: 8,
          column: 15,
        },
        end: {
          line: 8,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [232, 233],
      loc: {
        start: {
          line: 8,
          column: 20,
        },
        end: {
          line: 8,
          column: 21,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [233, 234],
      loc: {
        start: {
          line: 8,
          column: 21,
        },
        end: {
          line: 8,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [234, 235],
      loc: {
        start: {
          line: 8,
          column: 22,
        },
        end: {
          line: 8,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTO",
      range: [236, 240],
      loc: {
        start: {
          line: 8,
          column: 24,
        },
        end: {
          line: 8,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_count",
      range: [241, 251],
      loc: {
        start: {
          line: 8,
          column: 29,
        },
        end: {
          line: 8,
          column: 39,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [252, 256],
      loc: {
        start: {
          line: 8,
          column: 40,
        },
        end: {
          line: 8,
          column: 44,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [257, 262],
      loc: {
        start: {
          line: 8,
          column: 45,
        },
        end: {
          line: 8,
          column: 50,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [262, 263],
      loc: {
        start: {
          line: 8,
          column: 50,
        },
        end: {
          line: 8,
          column: 51,
        },
      },
    },
    {
      type: "Keyword",
      value: "ELSE",
      range: [268, 272],
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
      type: "Keyword",
      value: "SELECT",
      range: [281, 287],
      loc: {
        start: {
          line: 10,
          column: 8,
        },
        end: {
          line: 10,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "COUNT",
      range: [288, 293],
      loc: {
        start: {
          line: 10,
          column: 15,
        },
        end: {
          line: 10,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [293, 294],
      loc: {
        start: {
          line: 10,
          column: 20,
        },
        end: {
          line: 10,
          column: 21,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [294, 295],
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
      type: "Punctuator",
      value: ")",
      range: [295, 296],
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
      type: "Keyword",
      value: "INTO",
      range: [297, 301],
      loc: {
        start: {
          line: 10,
          column: 24,
        },
        end: {
          line: 10,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_count",
      range: [302, 312],
      loc: {
        start: {
          line: 10,
          column: 29,
        },
        end: {
          line: 10,
          column: 39,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [313, 317],
      loc: {
        start: {
          line: 10,
          column: 40,
        },
        end: {
          line: 10,
          column: 44,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [318, 323],
      loc: {
        start: {
          line: 10,
          column: 45,
        },
        end: {
          line: 10,
          column: 50,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [324, 329],
      loc: {
        start: {
          line: 10,
          column: 51,
        },
        end: {
          line: 10,
          column: 56,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [330, 336],
      loc: {
        start: {
          line: 10,
          column: 57,
        },
        end: {
          line: 10,
          column: 63,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [337, 338],
      loc: {
        start: {
          line: 10,
          column: 64,
        },
        end: {
          line: 10,
          column: 65,
        },
      },
    },
    {
      type: "Identifier",
      value: "status_filter",
      range: [339, 352],
      loc: {
        start: {
          line: 10,
          column: 66,
        },
        end: {
          line: 10,
          column: 79,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [352, 353],
      loc: {
        start: {
          line: 10,
          column: 79,
        },
        end: {
          line: 10,
          column: 80,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [358, 361],
      loc: {
        start: {
          line: 11,
          column: 4,
        },
        end: {
          line: 11,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [362, 364],
      loc: {
        start: {
          line: 11,
          column: 8,
        },
        end: {
          line: 11,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [364, 365],
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
      type: "Keyword",
      value: "RETURN",
      range: [375, 381],
      loc: {
        start: {
          line: 13,
          column: 4,
        },
        end: {
          line: 13,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_count",
      range: [382, 392],
      loc: {
        start: {
          line: 13,
          column: 11,
        },
        end: {
          line: 13,
          column: 21,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [392, 393],
      loc: {
        start: {
          line: 13,
          column: 21,
        },
        end: {
          line: 13,
          column: 22,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [394, 397],
      loc: {
        start: {
          line: 14,
          column: 0,
        },
        end: {
          line: 14,
          column: 3,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [397, 398],
      loc: {
        start: {
          line: 14,
          column: 3,
        },
        end: {
          line: 14,
          column: 4,
        },
      },
    },
    {
      type: "Keyword",
      value: "LANGUAGE",
      range: [402, 410],
      loc: {
        start: {
          line: 15,
          column: 3,
        },
        end: {
          line: 15,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "plpgsql",
      range: [411, 418],
      loc: {
        start: {
          line: 15,
          column: 12,
        },
        end: {
          line: 15,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [418, 419],
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
      type: "Keyword",
      value: "CREATE",
      range: [421, 427],
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
      value: "OR",
      range: [428, 430],
      loc: {
        start: {
          line: 17,
          column: 7,
        },
        end: {
          line: 17,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "REPLACE",
      range: [431, 438],
      loc: {
        start: {
          line: 17,
          column: 10,
        },
        end: {
          line: 17,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "PROCEDURE",
      range: [439, 448],
      loc: {
        start: {
          line: 17,
          column: 18,
        },
        end: {
          line: 17,
          column: 27,
        },
      },
    },
    {
      type: "Identifier",
      value: "update_user_status",
      range: [449, 467],
      loc: {
        start: {
          line: 17,
          column: 28,
        },
        end: {
          line: 17,
          column: 46,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [467, 468],
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
      type: "Identifier",
      value: "user_id",
      range: [473, 480],
      loc: {
        start: {
          line: 18,
          column: 4,
        },
        end: {
          line: 18,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTEGER",
      range: [481, 488],
      loc: {
        start: {
          line: 18,
          column: 12,
        },
        end: {
          line: 18,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [488, 489],
      loc: {
        start: {
          line: 18,
          column: 19,
        },
        end: {
          line: 18,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "new_status",
      range: [494, 504],
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
      type: "Keyword",
      value: "VARCHAR",
      range: [505, 512],
      loc: {
        start: {
          line: 19,
          column: 15,
        },
        end: {
          line: 19,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [513, 514],
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
      value: "LANGUAGE",
      range: [515, 523],
      loc: {
        start: {
          line: 21,
          column: 0,
        },
        end: {
          line: 21,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "plpgsql",
      range: [524, 531],
      loc: {
        start: {
          line: 21,
          column: 9,
        },
        end: {
          line: 21,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [532, 534],
      loc: {
        start: {
          line: 21,
          column: 17,
        },
        end: {
          line: 21,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [538, 543],
      loc: {
        start: {
          line: 22,
          column: 0,
        },
        end: {
          line: 22,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "UPDATE",
      range: [548, 554],
      loc: {
        start: {
          line: 23,
          column: 4,
        },
        end: {
          line: 23,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [555, 560],
      loc: {
        start: {
          line: 23,
          column: 11,
        },
        end: {
          line: 23,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "SET",
      range: [566, 569],
      loc: {
        start: {
          line: 24,
          column: 4,
        },
        end: {
          line: 24,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [570, 576],
      loc: {
        start: {
          line: 24,
          column: 8,
        },
        end: {
          line: 24,
          column: 14,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [577, 578],
      loc: {
        start: {
          line: 24,
          column: 15,
        },
        end: {
          line: 24,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "new_status",
      range: [579, 589],
      loc: {
        start: {
          line: 24,
          column: 17,
        },
        end: {
          line: 24,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [589, 590],
      loc: {
        start: {
          line: 24,
          column: 27,
        },
        end: {
          line: 24,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "updated_at",
      range: [600, 610],
      loc: {
        start: {
          line: 25,
          column: 8,
        },
        end: {
          line: 25,
          column: 18,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [611, 612],
      loc: {
        start: {
          line: 25,
          column: 19,
        },
        end: {
          line: 25,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "CURRENT_TIMESTAMP",
      range: [613, 630],
      loc: {
        start: {
          line: 25,
          column: 21,
        },
        end: {
          line: 25,
          column: 38,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [636, 641],
      loc: {
        start: {
          line: 26,
          column: 4,
        },
        end: {
          line: 26,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [642, 644],
      loc: {
        start: {
          line: 26,
          column: 10,
        },
        end: {
          line: 26,
          column: 12,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [645, 646],
      loc: {
        start: {
          line: 26,
          column: 13,
        },
        end: {
          line: 26,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [647, 654],
      loc: {
        start: {
          line: 26,
          column: 15,
        },
        end: {
          line: 26,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [654, 655],
      loc: {
        start: {
          line: 26,
          column: 22,
        },
        end: {
          line: 26,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [665, 667],
      loc: {
        start: {
          line: 28,
          column: 4,
        },
        end: {
          line: 28,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [668, 671],
      loc: {
        start: {
          line: 28,
          column: 7,
        },
        end: {
          line: 28,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOUND",
      range: [672, 677],
      loc: {
        start: {
          line: 28,
          column: 11,
        },
        end: {
          line: 28,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [678, 682],
      loc: {
        start: {
          line: 28,
          column: 17,
        },
        end: {
          line: 28,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "RAISE",
      range: [691, 696],
      loc: {
        start: {
          line: 29,
          column: 8,
        },
        end: {
          line: 29,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXCEPTION",
      range: [697, 706],
      loc: {
        start: {
          line: 29,
          column: 14,
        },
        end: {
          line: 29,
          column: 23,
        },
      },
    },
    {
      type: "String",
      value: "'User with id % not found'",
      range: [707, 733],
      loc: {
        start: {
          line: 29,
          column: 24,
        },
        end: {
          line: 29,
          column: 50,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [733, 734],
      loc: {
        start: {
          line: 29,
          column: 50,
        },
        end: {
          line: 29,
          column: 51,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [735, 742],
      loc: {
        start: {
          line: 29,
          column: 52,
        },
        end: {
          line: 29,
          column: 59,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [742, 743],
      loc: {
        start: {
          line: 29,
          column: 59,
        },
        end: {
          line: 29,
          column: 60,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [748, 751],
      loc: {
        start: {
          line: 30,
          column: 4,
        },
        end: {
          line: 30,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [752, 754],
      loc: {
        start: {
          line: 30,
          column: 8,
        },
        end: {
          line: 30,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [754, 755],
      loc: {
        start: {
          line: 30,
          column: 10,
        },
        end: {
          line: 30,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "COMMIT",
      range: [765, 771],
      loc: {
        start: {
          line: 32,
          column: 4,
        },
        end: {
          line: 32,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [771, 772],
      loc: {
        start: {
          line: 32,
          column: 10,
        },
        end: {
          line: 32,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [773, 776],
      loc: {
        start: {
          line: 33,
          column: 0,
        },
        end: {
          line: 33,
          column: 3,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [776, 777],
      loc: {
        start: {
          line: 33,
          column: 3,
        },
        end: {
          line: 33,
          column: 4,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [780, 781],
      loc: {
        start: {
          line: 34,
          column: 2,
        },
        end: {
          line: 34,
          column: 3,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Recursive function",
      range: [783, 804],
      loc: {
        start: {
          line: 36,
          column: 0,
        },
        end: {
          line: 36,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [805, 811],
      loc: {
        start: {
          line: 37,
          column: 0,
        },
        end: {
          line: 37,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "OR",
      range: [812, 814],
      loc: {
        start: {
          line: 37,
          column: 7,
        },
        end: {
          line: 37,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "REPLACE",
      range: [815, 822],
      loc: {
        start: {
          line: 37,
          column: 10,
        },
        end: {
          line: 37,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "FUNCTION",
      range: [823, 831],
      loc: {
        start: {
          line: 37,
          column: 18,
        },
        end: {
          line: 37,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "factorial",
      range: [832, 841],
      loc: {
        start: {
          line: 37,
          column: 27,
        },
        end: {
          line: 37,
          column: 36,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [841, 842],
      loc: {
        start: {
          line: 37,
          column: 36,
        },
        end: {
          line: 37,
          column: 37,
        },
      },
    },
    {
      type: "Identifier",
      value: "n",
      range: [842, 843],
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
      type: "Keyword",
      value: "INTEGER",
      range: [844, 851],
      loc: {
        start: {
          line: 37,
          column: 39,
        },
        end: {
          line: 37,
          column: 46,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [851, 852],
      loc: {
        start: {
          line: 37,
          column: 46,
        },
        end: {
          line: 37,
          column: 47,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURNS",
      range: [853, 860],
      loc: {
        start: {
          line: 38,
          column: 0,
        },
        end: {
          line: 38,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTEGER",
      range: [861, 868],
      loc: {
        start: {
          line: 38,
          column: 8,
        },
        end: {
          line: 38,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [869, 871],
      loc: {
        start: {
          line: 38,
          column: 16,
        },
        end: {
          line: 38,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [875, 880],
      loc: {
        start: {
          line: 39,
          column: 0,
        },
        end: {
          line: 39,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [885, 887],
      loc: {
        start: {
          line: 40,
          column: 4,
        },
        end: {
          line: 40,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "n",
      range: [888, 889],
      loc: {
        start: {
          line: 40,
          column: 7,
        },
        end: {
          line: 40,
          column: 8,
        },
      },
    },
    {
      type: "Operator",
      value: "<=",
      range: [890, 892],
      loc: {
        start: {
          line: 40,
          column: 9,
        },
        end: {
          line: 40,
          column: 11,
        },
      },
    },
    {
      type: "Numeric",
      value: "1",
      range: [893, 894],
      loc: {
        start: {
          line: 40,
          column: 12,
        },
        end: {
          line: 40,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [895, 899],
      loc: {
        start: {
          line: 40,
          column: 14,
        },
        end: {
          line: 40,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURN",
      range: [908, 914],
      loc: {
        start: {
          line: 41,
          column: 8,
        },
        end: {
          line: 41,
          column: 14,
        },
      },
    },
    {
      type: "Numeric",
      value: "1",
      range: [915, 916],
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
      type: "Punctuator",
      value: ";",
      range: [916, 917],
      loc: {
        start: {
          line: 41,
          column: 16,
        },
        end: {
          line: 41,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "ELSE",
      range: [922, 926],
      loc: {
        start: {
          line: 42,
          column: 4,
        },
        end: {
          line: 42,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURN",
      range: [935, 941],
      loc: {
        start: {
          line: 43,
          column: 8,
        },
        end: {
          line: 43,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "n",
      range: [942, 943],
      loc: {
        start: {
          line: 43,
          column: 15,
        },
        end: {
          line: 43,
          column: 16,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [944, 945],
      loc: {
        start: {
          line: 43,
          column: 17,
        },
        end: {
          line: 43,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "factorial",
      range: [946, 955],
      loc: {
        start: {
          line: 43,
          column: 19,
        },
        end: {
          line: 43,
          column: 28,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [955, 956],
      loc: {
        start: {
          line: 43,
          column: 28,
        },
        end: {
          line: 43,
          column: 29,
        },
      },
    },
    {
      type: "Identifier",
      value: "n",
      range: [956, 957],
      loc: {
        start: {
          line: 43,
          column: 29,
        },
        end: {
          line: 43,
          column: 30,
        },
      },
    },
    {
      type: "Operator",
      value: "-",
      range: [958, 959],
      loc: {
        start: {
          line: 43,
          column: 31,
        },
        end: {
          line: 43,
          column: 32,
        },
      },
    },
    {
      type: "Numeric",
      value: "1",
      range: [960, 961],
      loc: {
        start: {
          line: 43,
          column: 33,
        },
        end: {
          line: 43,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [961, 962],
      loc: {
        start: {
          line: 43,
          column: 34,
        },
        end: {
          line: 43,
          column: 35,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [962, 963],
      loc: {
        start: {
          line: 43,
          column: 35,
        },
        end: {
          line: 43,
          column: 36,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [968, 971],
      loc: {
        start: {
          line: 44,
          column: 4,
        },
        end: {
          line: 44,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [972, 974],
      loc: {
        start: {
          line: 44,
          column: 8,
        },
        end: {
          line: 44,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [974, 975],
      loc: {
        start: {
          line: 44,
          column: 10,
        },
        end: {
          line: 44,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [976, 979],
      loc: {
        start: {
          line: 45,
          column: 0,
        },
        end: {
          line: 45,
          column: 3,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [979, 980],
      loc: {
        start: {
          line: 45,
          column: 3,
        },
        end: {
          line: 45,
          column: 4,
        },
      },
    },
    {
      type: "Keyword",
      value: "LANGUAGE",
      range: [984, 992],
      loc: {
        start: {
          line: 46,
          column: 3,
        },
        end: {
          line: 46,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "plpgsql",
      range: [993, 1000],
      loc: {
        start: {
          line: 46,
          column: 12,
        },
        end: {
          line: 46,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1000, 1001],
      loc: {
        start: {
          line: 46,
          column: 19,
        },
        end: {
          line: 46,
          column: 20,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Function with multiple return types",
      range: [1003, 1041],
      loc: {
        start: {
          line: 48,
          column: 0,
        },
        end: {
          line: 48,
          column: 38,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [1042, 1048],
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
      type: "Keyword",
      value: "OR",
      range: [1049, 1051],
      loc: {
        start: {
          line: 49,
          column: 7,
        },
        end: {
          line: 49,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "REPLACE",
      range: [1052, 1059],
      loc: {
        start: {
          line: 49,
          column: 10,
        },
        end: {
          line: 49,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "FUNCTION",
      range: [1060, 1068],
      loc: {
        start: {
          line: 49,
          column: 18,
        },
        end: {
          line: 49,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "get_user_info",
      range: [1069, 1082],
      loc: {
        start: {
          line: 49,
          column: 27,
        },
        end: {
          line: 49,
          column: 40,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1082, 1083],
      loc: {
        start: {
          line: 49,
          column: 40,
        },
        end: {
          line: 49,
          column: 41,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [1083, 1090],
      loc: {
        start: {
          line: 49,
          column: 41,
        },
        end: {
          line: 49,
          column: 48,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTEGER",
      range: [1091, 1098],
      loc: {
        start: {
          line: 49,
          column: 49,
        },
        end: {
          line: 49,
          column: 56,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1098, 1099],
      loc: {
        start: {
          line: 49,
          column: 56,
        },
        end: {
          line: 49,
          column: 57,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURNS",
      range: [1100, 1107],
      loc: {
        start: {
          line: 50,
          column: 0,
        },
        end: {
          line: 50,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [1108, 1113],
      loc: {
        start: {
          line: 50,
          column: 8,
        },
        end: {
          line: 50,
          column: 13,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1113, 1114],
      loc: {
        start: {
          line: 50,
          column: 13,
        },
        end: {
          line: 50,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "name",
      range: [1114, 1118],
      loc: {
        start: {
          line: 50,
          column: 14,
        },
        end: {
          line: 50,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "VARCHAR",
      range: [1119, 1126],
      loc: {
        start: {
          line: 50,
          column: 19,
        },
        end: {
          line: 50,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1126, 1127],
      loc: {
        start: {
          line: 50,
          column: 26,
        },
        end: {
          line: 50,
          column: 27,
        },
      },
    },
    {
      type: "Identifier",
      value: "email",
      range: [1128, 1133],
      loc: {
        start: {
          line: 50,
          column: 28,
        },
        end: {
          line: 50,
          column: 33,
        },
      },
    },
    {
      type: "Keyword",
      value: "VARCHAR",
      range: [1134, 1141],
      loc: {
        start: {
          line: 50,
          column: 34,
        },
        end: {
          line: 50,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1141, 1142],
      loc: {
        start: {
          line: 50,
          column: 41,
        },
        end: {
          line: 50,
          column: 42,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [1143, 1149],
      loc: {
        start: {
          line: 50,
          column: 43,
        },
        end: {
          line: 50,
          column: 49,
        },
      },
    },
    {
      type: "Keyword",
      value: "VARCHAR",
      range: [1150, 1157],
      loc: {
        start: {
          line: 50,
          column: 50,
        },
        end: {
          line: 50,
          column: 57,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1157, 1158],
      loc: {
        start: {
          line: 50,
          column: 57,
        },
        end: {
          line: 50,
          column: 58,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [1159, 1161],
      loc: {
        start: {
          line: 50,
          column: 59,
        },
        end: {
          line: 50,
          column: 61,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [1165, 1170],
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
      type: "Keyword",
      value: "RETURN",
      range: [1175, 1181],
      loc: {
        start: {
          line: 52,
          column: 4,
        },
        end: {
          line: 52,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "QUERY",
      range: [1182, 1187],
      loc: {
        start: {
          line: 52,
          column: 11,
        },
        end: {
          line: 52,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1192, 1198],
      loc: {
        start: {
          line: 53,
          column: 4,
        },
        end: {
          line: 53,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [1199, 1200],
      loc: {
        start: {
          line: 53,
          column: 11,
        },
        end: {
          line: 53,
          column: 12,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1200, 1201],
      loc: {
        start: {
          line: 53,
          column: 12,
        },
        end: {
          line: 53,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "full_name",
      range: [1201, 1210],
      loc: {
        start: {
          line: 53,
          column: 13,
        },
        end: {
          line: 53,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1210, 1211],
      loc: {
        start: {
          line: 53,
          column: 22,
        },
        end: {
          line: 53,
          column: 23,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [1212, 1213],
      loc: {
        start: {
          line: 53,
          column: 24,
        },
        end: {
          line: 53,
          column: 25,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1213, 1214],
      loc: {
        start: {
          line: 53,
          column: 25,
        },
        end: {
          line: 53,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "email",
      range: [1214, 1219],
      loc: {
        start: {
          line: 53,
          column: 26,
        },
        end: {
          line: 53,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1219, 1220],
      loc: {
        start: {
          line: 53,
          column: 31,
        },
        end: {
          line: 53,
          column: 32,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [1221, 1222],
      loc: {
        start: {
          line: 53,
          column: 33,
        },
        end: {
          line: 53,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1222, 1223],
      loc: {
        start: {
          line: 53,
          column: 34,
        },
        end: {
          line: 53,
          column: 35,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [1223, 1229],
      loc: {
        start: {
          line: 53,
          column: 35,
        },
        end: {
          line: 53,
          column: 41,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1234, 1238],
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
      type: "Identifier",
      value: "users",
      range: [1239, 1244],
      loc: {
        start: {
          line: 54,
          column: 9,
        },
        end: {
          line: 54,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [1245, 1246],
      loc: {
        start: {
          line: 54,
          column: 15,
        },
        end: {
          line: 54,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [1251, 1256],
      loc: {
        start: {
          line: 55,
          column: 4,
        },
        end: {
          line: 55,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [1257, 1258],
      loc: {
        start: {
          line: 55,
          column: 10,
        },
        end: {
          line: 55,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1258, 1259],
      loc: {
        start: {
          line: 55,
          column: 11,
        },
        end: {
          line: 55,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [1259, 1261],
      loc: {
        start: {
          line: 55,
          column: 12,
        },
        end: {
          line: 55,
          column: 14,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [1262, 1263],
      loc: {
        start: {
          line: 55,
          column: 15,
        },
        end: {
          line: 55,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [1264, 1271],
      loc: {
        start: {
          line: 55,
          column: 17,
        },
        end: {
          line: 55,
          column: 24,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1271, 1272],
      loc: {
        start: {
          line: 55,
          column: 24,
        },
        end: {
          line: 55,
          column: 25,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [1273, 1276],
      loc: {
        start: {
          line: 56,
          column: 0,
        },
        end: {
          line: 56,
          column: 3,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1276, 1277],
      loc: {
        start: {
          line: 56,
          column: 3,
        },
        end: {
          line: 56,
          column: 4,
        },
      },
    },
    {
      type: "Keyword",
      value: "LANGUAGE",
      range: [1281, 1289],
      loc: {
        start: {
          line: 57,
          column: 3,
        },
        end: {
          line: 57,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "plpgsql",
      range: [1290, 1297],
      loc: {
        start: {
          line: 57,
          column: 12,
        },
        end: {
          line: 57,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1297, 1298],
      loc: {
        start: {
          line: 57,
          column: 19,
        },
        end: {
          line: 57,
          column: 20,
        },
      },
    },
  ],
  comments: [],
} satisfies Program;
