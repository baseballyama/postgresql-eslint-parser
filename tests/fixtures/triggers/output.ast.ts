import type { Program } from "../../../src/ast.ts";

export default {
  type: "Program",
  range: [0, 2380],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 83,
      column: 50,
    },
  },
  body: [
    {
      type: "CreateFunctionStmt",
      replace: true,
      funcname: [
        {
          type: "String",
          sval: "update_modified_column",
          range: [0, 0],
          loc: {
            start: {
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
      returnType: {
        "0": {
          type: "String",
          sval: "trigger",
          range: [0, 0],
          loc: {
            start: {
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
        range: [77, 84],
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
                sval: "\nBEGIN\n    NEW.updated_at = NOW();\n    RETURN NEW;\nEND;\n",
                range: [0, 0],
                loc: {
                  start: {
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
          range: [85, 87],
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
          range: [149, 157],
          loc: {
            start: {
              line: 8,
              column: 3,
            },
            end: {
              line: 8,
              column: 11,
            },
          },
        },
      ],
      range: [0, 157],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 8,
          column: 11,
        },
      },
    },
    {
      type: "CreateTrigStmt",
      trigname: "update_users_modtime",
      relation: {
        relname: "users",
        inh: true,
        relpersistence: "p",
        range: [225, 230],
        loc: {
          start: {
            line: 11,
            column: 21,
          },
          end: {
            line: 11,
            column: 26,
          },
        },
      },
      funcname: [
        {
          type: "String",
          sval: "update_modified_column",
          range: [0, 0],
          loc: {
            start: {
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
      row: true,
      timing: 2,
      events: 16,
      range: [0, 230],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 11,
          column: 26,
        },
      },
    },
    {
      type: "CreateFunctionStmt",
      replace: true,
      funcname: [
        {
          type: "String",
          sval: "audit_changes",
          range: [0, 0],
          loc: {
            start: {
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
      returnType: {
        "0": {
          type: "String",
          sval: "trigger",
          range: [0, 0],
          loc: {
            start: {
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
        range: [364, 371],
        loc: {
          start: {
            line: 17,
            column: 8,
          },
          end: {
            line: 17,
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
                sval: "\nBEGIN\n    IF TG_OP = 'DELETE' THEN\n        INSERT INTO audit_log (table_name, operation, old_data, changed_at, changed_by)\n        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD), NOW(), current_user);\n        RETURN OLD;\n    ELSIF TG_OP = 'UPDATE' THEN\n        INSERT INTO audit_log (table_name, operation, old_data, new_data, changed_at, changed_by)\n        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD), row_to_json(NEW), NOW(), current_user);\n        RETURN NEW;\n    ELSIF TG_OP = 'INSERT' THEN\n        INSERT INTO audit_log (table_name, operation, new_data, changed_at, changed_by)\n        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(NEW), NOW(), current_user);\n        RETURN NEW;\n    END IF;\n    RETURN NULL;\nEND;\n",
                range: [0, 0],
                loc: {
                  start: {
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
          range: [372, 374],
          loc: {
            start: {
              line: 17,
              column: 16,
            },
            end: {
              line: 17,
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
          range: [1100, 1108],
          loc: {
            start: {
              line: 34,
              column: 3,
            },
            end: {
              line: 34,
              column: 11,
            },
          },
        },
      ],
      range: [0, 1108],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 34,
          column: 11,
        },
      },
    },
    {
      type: "CreateTrigStmt",
      trigname: "audit_users_changes",
      relation: {
        relname: "users",
        inh: true,
        relpersistence: "p",
        range: [1194, 1199],
        loc: {
          start: {
            line: 37,
            column: 40,
          },
          end: {
            line: 37,
            column: 45,
          },
        },
      },
      funcname: [
        {
          type: "String",
          sval: "audit_changes",
          range: [0, 0],
          loc: {
            start: {
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
      row: true,
      events: 28,
      range: [0, 1199],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 37,
          column: 45,
        },
      },
    },
    {
      type: "CreateFunctionStmt",
      replace: true,
      funcname: [
        {
          type: "String",
          sval: "check_order_total",
          range: [0, 0],
          loc: {
            start: {
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
      returnType: {
        "0": {
          type: "String",
          sval: "trigger",
          range: [0, 0],
          loc: {
            start: {
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
        range: [1334, 1341],
        loc: {
          start: {
            line: 43,
            column: 8,
          },
          end: {
            line: 43,
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
                sval: "\nBEGIN\n    IF NEW.total_amount < 0 THEN\n        RAISE EXCEPTION 'Order total cannot be negative';\n    END IF;\n    \n    IF NEW.total_amount > 10000 THEN\n        INSERT INTO high_value_orders (order_id, flagged_at)\n        VALUES (NEW.id, NOW());\n    END IF;\n    \n    RETURN NEW;\nEND;\n",
                range: [0, 0],
                loc: {
                  start: {
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
          range: [1342, 1344],
          loc: {
            start: {
              line: 43,
              column: 16,
            },
            end: {
              line: 43,
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
          range: [1633, 1641],
          loc: {
            start: {
              line: 56,
              column: 3,
            },
            end: {
              line: 56,
              column: 11,
            },
          },
        },
      ],
      range: [0, 1641],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 56,
          column: 11,
        },
      },
    },
    {
      type: "CreateTrigStmt",
      trigname: "check_order_total_trigger",
      relation: {
        relname: "orders",
        inh: true,
        relpersistence: "p",
        range: [1724, 1730],
        loc: {
          start: {
            line: 59,
            column: 31,
          },
          end: {
            line: 59,
            column: 37,
          },
        },
      },
      funcname: [
        {
          type: "String",
          sval: "check_order_total",
          range: [0, 0],
          loc: {
            start: {
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
      row: true,
      timing: 2,
      events: 20,
      whenClause: {
        type: "NullTest",
        arg: {
          type: "ColumnRef",
          fields: [
            {
              type: "String",
              sval: "new",
              range: [0, 0],
              loc: {
                start: {
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
          range: [1758, 1761],
          loc: {
            start: {
              line: 61,
              column: 10,
            },
            end: {
              line: 61,
              column: 13,
            },
          },
        },
        nulltesttype: "IS_NOT_NULL",
        range: [1775, 1777],
        loc: {
          start: {
            line: 61,
            column: 27,
          },
          end: {
            line: 61,
            column: 29,
          },
        },
      },
      range: [0, 1777],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 61,
          column: 29,
        },
      },
    },
    {
      type: "CreateFunctionStmt",
      replace: true,
      funcname: [
        {
          type: "String",
          sval: "user_order_summary_update",
          range: [0, 0],
          loc: {
            start: {
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
      returnType: {
        "0": {
          type: "String",
          sval: "trigger",
          range: [0, 0],
          loc: {
            start: {
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
        range: [1926, 1933],
        loc: {
          start: {
            line: 66,
            column: 8,
          },
          end: {
            line: 66,
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
                sval: "\nBEGIN\n    UPDATE users \n    SET full_name = NEW.user_name\n    WHERE id = NEW.user_id;\n    \n    IF NEW.order_count <> OLD.order_count THEN\n        RAISE NOTICE 'Cannot directly update order count through this view';\n    END IF;\n    \n    RETURN NEW;\nEND;\n",
                range: [0, 0],
                loc: {
                  start: {
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
          range: [1934, 1936],
          loc: {
            start: {
              line: 66,
              column: 16,
            },
            end: {
              line: 66,
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
          range: [2196, 2204],
          loc: {
            start: {
              line: 78,
              column: 3,
            },
            end: {
              line: 78,
              column: 11,
            },
          },
        },
      ],
      range: [0, 2204],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 78,
          column: 11,
        },
      },
    },
    {
      type: "CreateTrigStmt",
      trigname: "user_order_summary_update_trigger",
      relation: {
        relname: "user_order_summary_view",
        inh: true,
        relpersistence: "p",
        range: [2289, 2312],
        loc: {
          start: {
            line: 81,
            column: 25,
          },
          end: {
            line: 81,
            column: 48,
          },
        },
      },
      funcname: [
        {
          type: "String",
          sval: "user_order_summary_update",
          range: [0, 0],
          loc: {
            start: {
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
      row: true,
      timing: 64,
      events: 16,
      range: [0, 2312],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 81,
          column: 48,
        },
      },
    },
  ],
  tokens: [
    {
      type: "LineComment",
      value: "-- Triggers test",
      range: [0, 16],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [17, 23],
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
      range: [24, 26],
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
      range: [27, 34],
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
      range: [35, 43],
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
      value: "update_modified_column",
      range: [44, 66],
      loc: {
        start: {
          line: 2,
          column: 27,
        },
        end: {
          line: 2,
          column: 49,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [66, 67],
      loc: {
        start: {
          line: 2,
          column: 49,
        },
        end: {
          line: 2,
          column: 50,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [67, 68],
      loc: {
        start: {
          line: 2,
          column: 50,
        },
        end: {
          line: 2,
          column: 51,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURNS",
      range: [69, 76],
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
      value: "TRIGGER",
      range: [77, 84],
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
      range: [85, 87],
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
      value: "BEGIN",
      range: [91, 96],
      loc: {
        start: {
          line: 4,
          column: 0,
        },
        end: {
          line: 4,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [101, 104],
      loc: {
        start: {
          line: 5,
          column: 4,
        },
        end: {
          line: 5,
          column: 7,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [104, 105],
      loc: {
        start: {
          line: 5,
          column: 7,
        },
        end: {
          line: 5,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "updated_at",
      range: [105, 115],
      loc: {
        start: {
          line: 5,
          column: 8,
        },
        end: {
          line: 5,
          column: 18,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [116, 117],
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
      type: "Identifier",
      value: "NOW",
      range: [118, 121],
      loc: {
        start: {
          line: 5,
          column: 21,
        },
        end: {
          line: 5,
          column: 24,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [121, 122],
      loc: {
        start: {
          line: 5,
          column: 24,
        },
        end: {
          line: 5,
          column: 25,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [122, 123],
      loc: {
        start: {
          line: 5,
          column: 25,
        },
        end: {
          line: 5,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [123, 124],
      loc: {
        start: {
          line: 5,
          column: 26,
        },
        end: {
          line: 5,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURN",
      range: [129, 135],
      loc: {
        start: {
          line: 6,
          column: 4,
        },
        end: {
          line: 6,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [136, 139],
      loc: {
        start: {
          line: 6,
          column: 11,
        },
        end: {
          line: 6,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [139, 140],
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
      type: "Keyword",
      value: "END",
      range: [141, 144],
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
      type: "Punctuator",
      value: ";",
      range: [144, 145],
      loc: {
        start: {
          line: 7,
          column: 3,
        },
        end: {
          line: 7,
          column: 4,
        },
      },
    },
    {
      type: "Keyword",
      value: "LANGUAGE",
      range: [149, 157],
      loc: {
        start: {
          line: 8,
          column: 3,
        },
        end: {
          line: 8,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "plpgsql",
      range: [158, 165],
      loc: {
        start: {
          line: 8,
          column: 12,
        },
        end: {
          line: 8,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [165, 166],
      loc: {
        start: {
          line: 8,
          column: 19,
        },
        end: {
          line: 8,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [168, 174],
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
      value: "TRIGGER",
      range: [175, 182],
      loc: {
        start: {
          line: 10,
          column: 7,
        },
        end: {
          line: 10,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "update_users_modtime",
      range: [183, 203],
      loc: {
        start: {
          line: 10,
          column: 15,
        },
        end: {
          line: 10,
          column: 35,
        },
      },
    },
    {
      type: "Identifier",
      value: "BEFORE",
      range: [208, 214],
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
      type: "Keyword",
      value: "UPDATE",
      range: [215, 221],
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
      value: "ON",
      range: [222, 224],
      loc: {
        start: {
          line: 11,
          column: 18,
        },
        end: {
          line: 11,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [225, 230],
      loc: {
        start: {
          line: 11,
          column: 21,
        },
        end: {
          line: 11,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOR",
      range: [235, 238],
      loc: {
        start: {
          line: 12,
          column: 4,
        },
        end: {
          line: 12,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "EACH",
      range: [239, 243],
      loc: {
        start: {
          line: 12,
          column: 8,
        },
        end: {
          line: 12,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "ROW",
      range: [244, 247],
      loc: {
        start: {
          line: 12,
          column: 13,
        },
        end: {
          line: 12,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXECUTE",
      range: [252, 259],
      loc: {
        start: {
          line: 13,
          column: 4,
        },
        end: {
          line: 13,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "FUNCTION",
      range: [260, 268],
      loc: {
        start: {
          line: 13,
          column: 12,
        },
        end: {
          line: 13,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "update_modified_column",
      range: [269, 291],
      loc: {
        start: {
          line: 13,
          column: 21,
        },
        end: {
          line: 13,
          column: 43,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [291, 292],
      loc: {
        start: {
          line: 13,
          column: 43,
        },
        end: {
          line: 13,
          column: 44,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [292, 293],
      loc: {
        start: {
          line: 13,
          column: 44,
        },
        end: {
          line: 13,
          column: 45,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [293, 294],
      loc: {
        start: {
          line: 13,
          column: 45,
        },
        end: {
          line: 13,
          column: 46,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Audit trigger",
      range: [296, 312],
      loc: {
        start: {
          line: 15,
          column: 0,
        },
        end: {
          line: 15,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [313, 319],
      loc: {
        start: {
          line: 16,
          column: 0,
        },
        end: {
          line: 16,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "OR",
      range: [320, 322],
      loc: {
        start: {
          line: 16,
          column: 7,
        },
        end: {
          line: 16,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "REPLACE",
      range: [323, 330],
      loc: {
        start: {
          line: 16,
          column: 10,
        },
        end: {
          line: 16,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "FUNCTION",
      range: [331, 339],
      loc: {
        start: {
          line: 16,
          column: 18,
        },
        end: {
          line: 16,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "audit_changes",
      range: [340, 353],
      loc: {
        start: {
          line: 16,
          column: 27,
        },
        end: {
          line: 16,
          column: 40,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [353, 354],
      loc: {
        start: {
          line: 16,
          column: 40,
        },
        end: {
          line: 16,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [354, 355],
      loc: {
        start: {
          line: 16,
          column: 41,
        },
        end: {
          line: 16,
          column: 42,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURNS",
      range: [356, 363],
      loc: {
        start: {
          line: 17,
          column: 0,
        },
        end: {
          line: 17,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "TRIGGER",
      range: [364, 371],
      loc: {
        start: {
          line: 17,
          column: 8,
        },
        end: {
          line: 17,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [372, 374],
      loc: {
        start: {
          line: 17,
          column: 16,
        },
        end: {
          line: 17,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [378, 383],
      loc: {
        start: {
          line: 18,
          column: 0,
        },
        end: {
          line: 18,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [388, 390],
      loc: {
        start: {
          line: 19,
          column: 4,
        },
        end: {
          line: 19,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "TG_OP",
      range: [391, 396],
      loc: {
        start: {
          line: 19,
          column: 7,
        },
        end: {
          line: 19,
          column: 12,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [397, 398],
      loc: {
        start: {
          line: 19,
          column: 13,
        },
        end: {
          line: 19,
          column: 14,
        },
      },
    },
    {
      type: "String",
      value: "'DELETE'",
      range: [399, 407],
      loc: {
        start: {
          line: 19,
          column: 15,
        },
        end: {
          line: 19,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [408, 412],
      loc: {
        start: {
          line: 19,
          column: 24,
        },
        end: {
          line: 19,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [421, 427],
      loc: {
        start: {
          line: 20,
          column: 8,
        },
        end: {
          line: 20,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTO",
      range: [428, 432],
      loc: {
        start: {
          line: 20,
          column: 15,
        },
        end: {
          line: 20,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "audit_log",
      range: [433, 442],
      loc: {
        start: {
          line: 20,
          column: 20,
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
      range: [443, 444],
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
      value: "table_name",
      range: [444, 454],
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
      type: "Punctuator",
      value: ",",
      range: [454, 455],
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
      value: "operation",
      range: [456, 465],
      loc: {
        start: {
          line: 20,
          column: 43,
        },
        end: {
          line: 20,
          column: 52,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [465, 466],
      loc: {
        start: {
          line: 20,
          column: 52,
        },
        end: {
          line: 20,
          column: 53,
        },
      },
    },
    {
      type: "Identifier",
      value: "old_data",
      range: [467, 475],
      loc: {
        start: {
          line: 20,
          column: 54,
        },
        end: {
          line: 20,
          column: 62,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [475, 476],
      loc: {
        start: {
          line: 20,
          column: 62,
        },
        end: {
          line: 20,
          column: 63,
        },
      },
    },
    {
      type: "Identifier",
      value: "changed_at",
      range: [477, 487],
      loc: {
        start: {
          line: 20,
          column: 64,
        },
        end: {
          line: 20,
          column: 74,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [487, 488],
      loc: {
        start: {
          line: 20,
          column: 74,
        },
        end: {
          line: 20,
          column: 75,
        },
      },
    },
    {
      type: "Identifier",
      value: "changed_by",
      range: [489, 499],
      loc: {
        start: {
          line: 20,
          column: 76,
        },
        end: {
          line: 20,
          column: 86,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [499, 500],
      loc: {
        start: {
          line: 20,
          column: 86,
        },
        end: {
          line: 20,
          column: 87,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [509, 515],
      loc: {
        start: {
          line: 21,
          column: 8,
        },
        end: {
          line: 21,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [516, 517],
      loc: {
        start: {
          line: 21,
          column: 15,
        },
        end: {
          line: 21,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "TG_TABLE_NAME",
      range: [517, 530],
      loc: {
        start: {
          line: 21,
          column: 16,
        },
        end: {
          line: 21,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [530, 531],
      loc: {
        start: {
          line: 21,
          column: 29,
        },
        end: {
          line: 21,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "TG_OP",
      range: [532, 537],
      loc: {
        start: {
          line: 21,
          column: 31,
        },
        end: {
          line: 21,
          column: 36,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [537, 538],
      loc: {
        start: {
          line: 21,
          column: 36,
        },
        end: {
          line: 21,
          column: 37,
        },
      },
    },
    {
      type: "Identifier",
      value: "row_to_json",
      range: [539, 550],
      loc: {
        start: {
          line: 21,
          column: 38,
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
      range: [550, 551],
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
      value: "OLD",
      range: [551, 554],
      loc: {
        start: {
          line: 21,
          column: 50,
        },
        end: {
          line: 21,
          column: 53,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [554, 555],
      loc: {
        start: {
          line: 21,
          column: 53,
        },
        end: {
          line: 21,
          column: 54,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [555, 556],
      loc: {
        start: {
          line: 21,
          column: 54,
        },
        end: {
          line: 21,
          column: 55,
        },
      },
    },
    {
      type: "Identifier",
      value: "NOW",
      range: [557, 560],
      loc: {
        start: {
          line: 21,
          column: 56,
        },
        end: {
          line: 21,
          column: 59,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [560, 561],
      loc: {
        start: {
          line: 21,
          column: 59,
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
      range: [561, 562],
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
      type: "Punctuator",
      value: ",",
      range: [562, 563],
      loc: {
        start: {
          line: 21,
          column: 61,
        },
        end: {
          line: 21,
          column: 62,
        },
      },
    },
    {
      type: "Keyword",
      value: "current_user",
      range: [564, 576],
      loc: {
        start: {
          line: 21,
          column: 63,
        },
        end: {
          line: 21,
          column: 75,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [576, 577],
      loc: {
        start: {
          line: 21,
          column: 75,
        },
        end: {
          line: 21,
          column: 76,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [577, 578],
      loc: {
        start: {
          line: 21,
          column: 76,
        },
        end: {
          line: 21,
          column: 77,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURN",
      range: [587, 593],
      loc: {
        start: {
          line: 22,
          column: 8,
        },
        end: {
          line: 22,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "OLD",
      range: [594, 597],
      loc: {
        start: {
          line: 22,
          column: 15,
        },
        end: {
          line: 22,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [597, 598],
      loc: {
        start: {
          line: 22,
          column: 18,
        },
        end: {
          line: 22,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "ELSIF",
      range: [603, 608],
      loc: {
        start: {
          line: 23,
          column: 4,
        },
        end: {
          line: 23,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "TG_OP",
      range: [609, 614],
      loc: {
        start: {
          line: 23,
          column: 10,
        },
        end: {
          line: 23,
          column: 15,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [615, 616],
      loc: {
        start: {
          line: 23,
          column: 16,
        },
        end: {
          line: 23,
          column: 17,
        },
      },
    },
    {
      type: "String",
      value: "'UPDATE'",
      range: [617, 625],
      loc: {
        start: {
          line: 23,
          column: 18,
        },
        end: {
          line: 23,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [626, 630],
      loc: {
        start: {
          line: 23,
          column: 27,
        },
        end: {
          line: 23,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [639, 645],
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
      type: "Keyword",
      value: "INTO",
      range: [646, 650],
      loc: {
        start: {
          line: 24,
          column: 15,
        },
        end: {
          line: 24,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "audit_log",
      range: [651, 660],
      loc: {
        start: {
          line: 24,
          column: 20,
        },
        end: {
          line: 24,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [661, 662],
      loc: {
        start: {
          line: 24,
          column: 30,
        },
        end: {
          line: 24,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "table_name",
      range: [662, 672],
      loc: {
        start: {
          line: 24,
          column: 31,
        },
        end: {
          line: 24,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [672, 673],
      loc: {
        start: {
          line: 24,
          column: 41,
        },
        end: {
          line: 24,
          column: 42,
        },
      },
    },
    {
      type: "Identifier",
      value: "operation",
      range: [674, 683],
      loc: {
        start: {
          line: 24,
          column: 43,
        },
        end: {
          line: 24,
          column: 52,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [683, 684],
      loc: {
        start: {
          line: 24,
          column: 52,
        },
        end: {
          line: 24,
          column: 53,
        },
      },
    },
    {
      type: "Identifier",
      value: "old_data",
      range: [685, 693],
      loc: {
        start: {
          line: 24,
          column: 54,
        },
        end: {
          line: 24,
          column: 62,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [693, 694],
      loc: {
        start: {
          line: 24,
          column: 62,
        },
        end: {
          line: 24,
          column: 63,
        },
      },
    },
    {
      type: "Identifier",
      value: "new_data",
      range: [695, 703],
      loc: {
        start: {
          line: 24,
          column: 64,
        },
        end: {
          line: 24,
          column: 72,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [703, 704],
      loc: {
        start: {
          line: 24,
          column: 72,
        },
        end: {
          line: 24,
          column: 73,
        },
      },
    },
    {
      type: "Identifier",
      value: "changed_at",
      range: [705, 715],
      loc: {
        start: {
          line: 24,
          column: 74,
        },
        end: {
          line: 24,
          column: 84,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [715, 716],
      loc: {
        start: {
          line: 24,
          column: 84,
        },
        end: {
          line: 24,
          column: 85,
        },
      },
    },
    {
      type: "Identifier",
      value: "changed_by",
      range: [717, 727],
      loc: {
        start: {
          line: 24,
          column: 86,
        },
        end: {
          line: 24,
          column: 96,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [727, 728],
      loc: {
        start: {
          line: 24,
          column: 96,
        },
        end: {
          line: 24,
          column: 97,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [737, 743],
      loc: {
        start: {
          line: 25,
          column: 8,
        },
        end: {
          line: 25,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [744, 745],
      loc: {
        start: {
          line: 25,
          column: 15,
        },
        end: {
          line: 25,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "TG_TABLE_NAME",
      range: [745, 758],
      loc: {
        start: {
          line: 25,
          column: 16,
        },
        end: {
          line: 25,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [758, 759],
      loc: {
        start: {
          line: 25,
          column: 29,
        },
        end: {
          line: 25,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "TG_OP",
      range: [760, 765],
      loc: {
        start: {
          line: 25,
          column: 31,
        },
        end: {
          line: 25,
          column: 36,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [765, 766],
      loc: {
        start: {
          line: 25,
          column: 36,
        },
        end: {
          line: 25,
          column: 37,
        },
      },
    },
    {
      type: "Identifier",
      value: "row_to_json",
      range: [767, 778],
      loc: {
        start: {
          line: 25,
          column: 38,
        },
        end: {
          line: 25,
          column: 49,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [778, 779],
      loc: {
        start: {
          line: 25,
          column: 49,
        },
        end: {
          line: 25,
          column: 50,
        },
      },
    },
    {
      type: "Identifier",
      value: "OLD",
      range: [779, 782],
      loc: {
        start: {
          line: 25,
          column: 50,
        },
        end: {
          line: 25,
          column: 53,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [782, 783],
      loc: {
        start: {
          line: 25,
          column: 53,
        },
        end: {
          line: 25,
          column: 54,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [783, 784],
      loc: {
        start: {
          line: 25,
          column: 54,
        },
        end: {
          line: 25,
          column: 55,
        },
      },
    },
    {
      type: "Identifier",
      value: "row_to_json",
      range: [785, 796],
      loc: {
        start: {
          line: 25,
          column: 56,
        },
        end: {
          line: 25,
          column: 67,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [796, 797],
      loc: {
        start: {
          line: 25,
          column: 67,
        },
        end: {
          line: 25,
          column: 68,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [797, 800],
      loc: {
        start: {
          line: 25,
          column: 68,
        },
        end: {
          line: 25,
          column: 71,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [800, 801],
      loc: {
        start: {
          line: 25,
          column: 71,
        },
        end: {
          line: 25,
          column: 72,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [801, 802],
      loc: {
        start: {
          line: 25,
          column: 72,
        },
        end: {
          line: 25,
          column: 73,
        },
      },
    },
    {
      type: "Identifier",
      value: "NOW",
      range: [803, 806],
      loc: {
        start: {
          line: 25,
          column: 74,
        },
        end: {
          line: 25,
          column: 77,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [806, 807],
      loc: {
        start: {
          line: 25,
          column: 77,
        },
        end: {
          line: 25,
          column: 78,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [807, 808],
      loc: {
        start: {
          line: 25,
          column: 78,
        },
        end: {
          line: 25,
          column: 79,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [808, 809],
      loc: {
        start: {
          line: 25,
          column: 79,
        },
        end: {
          line: 25,
          column: 80,
        },
      },
    },
    {
      type: "Keyword",
      value: "current_user",
      range: [810, 822],
      loc: {
        start: {
          line: 25,
          column: 81,
        },
        end: {
          line: 25,
          column: 93,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [822, 823],
      loc: {
        start: {
          line: 25,
          column: 93,
        },
        end: {
          line: 25,
          column: 94,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [823, 824],
      loc: {
        start: {
          line: 25,
          column: 94,
        },
        end: {
          line: 25,
          column: 95,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURN",
      range: [833, 839],
      loc: {
        start: {
          line: 26,
          column: 8,
        },
        end: {
          line: 26,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [840, 843],
      loc: {
        start: {
          line: 26,
          column: 15,
        },
        end: {
          line: 26,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [843, 844],
      loc: {
        start: {
          line: 26,
          column: 18,
        },
        end: {
          line: 26,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "ELSIF",
      range: [849, 854],
      loc: {
        start: {
          line: 27,
          column: 4,
        },
        end: {
          line: 27,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "TG_OP",
      range: [855, 860],
      loc: {
        start: {
          line: 27,
          column: 10,
        },
        end: {
          line: 27,
          column: 15,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [861, 862],
      loc: {
        start: {
          line: 27,
          column: 16,
        },
        end: {
          line: 27,
          column: 17,
        },
      },
    },
    {
      type: "String",
      value: "'INSERT'",
      range: [863, 871],
      loc: {
        start: {
          line: 27,
          column: 18,
        },
        end: {
          line: 27,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [872, 876],
      loc: {
        start: {
          line: 27,
          column: 27,
        },
        end: {
          line: 27,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [885, 891],
      loc: {
        start: {
          line: 28,
          column: 8,
        },
        end: {
          line: 28,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTO",
      range: [892, 896],
      loc: {
        start: {
          line: 28,
          column: 15,
        },
        end: {
          line: 28,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "audit_log",
      range: [897, 906],
      loc: {
        start: {
          line: 28,
          column: 20,
        },
        end: {
          line: 28,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [907, 908],
      loc: {
        start: {
          line: 28,
          column: 30,
        },
        end: {
          line: 28,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "table_name",
      range: [908, 918],
      loc: {
        start: {
          line: 28,
          column: 31,
        },
        end: {
          line: 28,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [918, 919],
      loc: {
        start: {
          line: 28,
          column: 41,
        },
        end: {
          line: 28,
          column: 42,
        },
      },
    },
    {
      type: "Identifier",
      value: "operation",
      range: [920, 929],
      loc: {
        start: {
          line: 28,
          column: 43,
        },
        end: {
          line: 28,
          column: 52,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [929, 930],
      loc: {
        start: {
          line: 28,
          column: 52,
        },
        end: {
          line: 28,
          column: 53,
        },
      },
    },
    {
      type: "Identifier",
      value: "new_data",
      range: [931, 939],
      loc: {
        start: {
          line: 28,
          column: 54,
        },
        end: {
          line: 28,
          column: 62,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [939, 940],
      loc: {
        start: {
          line: 28,
          column: 62,
        },
        end: {
          line: 28,
          column: 63,
        },
      },
    },
    {
      type: "Identifier",
      value: "changed_at",
      range: [941, 951],
      loc: {
        start: {
          line: 28,
          column: 64,
        },
        end: {
          line: 28,
          column: 74,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [951, 952],
      loc: {
        start: {
          line: 28,
          column: 74,
        },
        end: {
          line: 28,
          column: 75,
        },
      },
    },
    {
      type: "Identifier",
      value: "changed_by",
      range: [953, 963],
      loc: {
        start: {
          line: 28,
          column: 76,
        },
        end: {
          line: 28,
          column: 86,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [963, 964],
      loc: {
        start: {
          line: 28,
          column: 86,
        },
        end: {
          line: 28,
          column: 87,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [973, 979],
      loc: {
        start: {
          line: 29,
          column: 8,
        },
        end: {
          line: 29,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [980, 981],
      loc: {
        start: {
          line: 29,
          column: 15,
        },
        end: {
          line: 29,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "TG_TABLE_NAME",
      range: [981, 994],
      loc: {
        start: {
          line: 29,
          column: 16,
        },
        end: {
          line: 29,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [994, 995],
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
      type: "Identifier",
      value: "TG_OP",
      range: [996, 1001],
      loc: {
        start: {
          line: 29,
          column: 31,
        },
        end: {
          line: 29,
          column: 36,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1001, 1002],
      loc: {
        start: {
          line: 29,
          column: 36,
        },
        end: {
          line: 29,
          column: 37,
        },
      },
    },
    {
      type: "Identifier",
      value: "row_to_json",
      range: [1003, 1014],
      loc: {
        start: {
          line: 29,
          column: 38,
        },
        end: {
          line: 29,
          column: 49,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1014, 1015],
      loc: {
        start: {
          line: 29,
          column: 49,
        },
        end: {
          line: 29,
          column: 50,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [1015, 1018],
      loc: {
        start: {
          line: 29,
          column: 50,
        },
        end: {
          line: 29,
          column: 53,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1018, 1019],
      loc: {
        start: {
          line: 29,
          column: 53,
        },
        end: {
          line: 29,
          column: 54,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1019, 1020],
      loc: {
        start: {
          line: 29,
          column: 54,
        },
        end: {
          line: 29,
          column: 55,
        },
      },
    },
    {
      type: "Identifier",
      value: "NOW",
      range: [1021, 1024],
      loc: {
        start: {
          line: 29,
          column: 56,
        },
        end: {
          line: 29,
          column: 59,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1024, 1025],
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
      type: "Punctuator",
      value: ")",
      range: [1025, 1026],
      loc: {
        start: {
          line: 29,
          column: 60,
        },
        end: {
          line: 29,
          column: 61,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1026, 1027],
      loc: {
        start: {
          line: 29,
          column: 61,
        },
        end: {
          line: 29,
          column: 62,
        },
      },
    },
    {
      type: "Keyword",
      value: "current_user",
      range: [1028, 1040],
      loc: {
        start: {
          line: 29,
          column: 63,
        },
        end: {
          line: 29,
          column: 75,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1040, 1041],
      loc: {
        start: {
          line: 29,
          column: 75,
        },
        end: {
          line: 29,
          column: 76,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1041, 1042],
      loc: {
        start: {
          line: 29,
          column: 76,
        },
        end: {
          line: 29,
          column: 77,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURN",
      range: [1051, 1057],
      loc: {
        start: {
          line: 30,
          column: 8,
        },
        end: {
          line: 30,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [1058, 1061],
      loc: {
        start: {
          line: 30,
          column: 15,
        },
        end: {
          line: 30,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1061, 1062],
      loc: {
        start: {
          line: 30,
          column: 18,
        },
        end: {
          line: 30,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [1067, 1070],
      loc: {
        start: {
          line: 31,
          column: 4,
        },
        end: {
          line: 31,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [1071, 1073],
      loc: {
        start: {
          line: 31,
          column: 8,
        },
        end: {
          line: 31,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1073, 1074],
      loc: {
        start: {
          line: 31,
          column: 10,
        },
        end: {
          line: 31,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURN",
      range: [1079, 1085],
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
      type: "Keyword",
      value: "NULL",
      range: [1086, 1090],
      loc: {
        start: {
          line: 32,
          column: 11,
        },
        end: {
          line: 32,
          column: 15,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1090, 1091],
      loc: {
        start: {
          line: 32,
          column: 15,
        },
        end: {
          line: 32,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [1092, 1095],
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
      range: [1095, 1096],
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
      type: "Keyword",
      value: "LANGUAGE",
      range: [1100, 1108],
      loc: {
        start: {
          line: 34,
          column: 3,
        },
        end: {
          line: 34,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "plpgsql",
      range: [1109, 1116],
      loc: {
        start: {
          line: 34,
          column: 12,
        },
        end: {
          line: 34,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1116, 1117],
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
      type: "Keyword",
      value: "CREATE",
      range: [1119, 1125],
      loc: {
        start: {
          line: 36,
          column: 0,
        },
        end: {
          line: 36,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "TRIGGER",
      range: [1126, 1133],
      loc: {
        start: {
          line: 36,
          column: 7,
        },
        end: {
          line: 36,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "audit_users_changes",
      range: [1134, 1153],
      loc: {
        start: {
          line: 36,
          column: 15,
        },
        end: {
          line: 36,
          column: 34,
        },
      },
    },
    {
      type: "Identifier",
      value: "AFTER",
      range: [1158, 1163],
      loc: {
        start: {
          line: 37,
          column: 4,
        },
        end: {
          line: 37,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [1164, 1170],
      loc: {
        start: {
          line: 37,
          column: 10,
        },
        end: {
          line: 37,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "OR",
      range: [1171, 1173],
      loc: {
        start: {
          line: 37,
          column: 17,
        },
        end: {
          line: 37,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "UPDATE",
      range: [1174, 1180],
      loc: {
        start: {
          line: 37,
          column: 20,
        },
        end: {
          line: 37,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "OR",
      range: [1181, 1183],
      loc: {
        start: {
          line: 37,
          column: 27,
        },
        end: {
          line: 37,
          column: 29,
        },
      },
    },
    {
      type: "Keyword",
      value: "DELETE",
      range: [1184, 1190],
      loc: {
        start: {
          line: 37,
          column: 30,
        },
        end: {
          line: 37,
          column: 36,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [1191, 1193],
      loc: {
        start: {
          line: 37,
          column: 37,
        },
        end: {
          line: 37,
          column: 39,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [1194, 1199],
      loc: {
        start: {
          line: 37,
          column: 40,
        },
        end: {
          line: 37,
          column: 45,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOR",
      range: [1204, 1207],
      loc: {
        start: {
          line: 38,
          column: 4,
        },
        end: {
          line: 38,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "EACH",
      range: [1208, 1212],
      loc: {
        start: {
          line: 38,
          column: 8,
        },
        end: {
          line: 38,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "ROW",
      range: [1213, 1216],
      loc: {
        start: {
          line: 38,
          column: 13,
        },
        end: {
          line: 38,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXECUTE",
      range: [1221, 1228],
      loc: {
        start: {
          line: 39,
          column: 4,
        },
        end: {
          line: 39,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "FUNCTION",
      range: [1229, 1237],
      loc: {
        start: {
          line: 39,
          column: 12,
        },
        end: {
          line: 39,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "audit_changes",
      range: [1238, 1251],
      loc: {
        start: {
          line: 39,
          column: 21,
        },
        end: {
          line: 39,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1251, 1252],
      loc: {
        start: {
          line: 39,
          column: 34,
        },
        end: {
          line: 39,
          column: 35,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1252, 1253],
      loc: {
        start: {
          line: 39,
          column: 35,
        },
        end: {
          line: 39,
          column: 36,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1253, 1254],
      loc: {
        start: {
          line: 39,
          column: 36,
        },
        end: {
          line: 39,
          column: 37,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Conditional trigger",
      range: [1256, 1278],
      loc: {
        start: {
          line: 41,
          column: 0,
        },
        end: {
          line: 41,
          column: 22,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [1279, 1285],
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
      value: "OR",
      range: [1286, 1288],
      loc: {
        start: {
          line: 42,
          column: 7,
        },
        end: {
          line: 42,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "REPLACE",
      range: [1289, 1296],
      loc: {
        start: {
          line: 42,
          column: 10,
        },
        end: {
          line: 42,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "FUNCTION",
      range: [1297, 1305],
      loc: {
        start: {
          line: 42,
          column: 18,
        },
        end: {
          line: 42,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "check_order_total",
      range: [1306, 1323],
      loc: {
        start: {
          line: 42,
          column: 27,
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
      range: [1323, 1324],
      loc: {
        start: {
          line: 42,
          column: 44,
        },
        end: {
          line: 42,
          column: 45,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1324, 1325],
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
      type: "Keyword",
      value: "RETURNS",
      range: [1326, 1333],
      loc: {
        start: {
          line: 43,
          column: 0,
        },
        end: {
          line: 43,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "TRIGGER",
      range: [1334, 1341],
      loc: {
        start: {
          line: 43,
          column: 8,
        },
        end: {
          line: 43,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [1342, 1344],
      loc: {
        start: {
          line: 43,
          column: 16,
        },
        end: {
          line: 43,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [1348, 1353],
      loc: {
        start: {
          line: 44,
          column: 0,
        },
        end: {
          line: 44,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [1358, 1360],
      loc: {
        start: {
          line: 45,
          column: 4,
        },
        end: {
          line: 45,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [1361, 1364],
      loc: {
        start: {
          line: 45,
          column: 7,
        },
        end: {
          line: 45,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1364, 1365],
      loc: {
        start: {
          line: 45,
          column: 10,
        },
        end: {
          line: 45,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [1365, 1377],
      loc: {
        start: {
          line: 45,
          column: 11,
        },
        end: {
          line: 45,
          column: 23,
        },
      },
    },
    {
      type: "Operator",
      value: "<",
      range: [1378, 1379],
      loc: {
        start: {
          line: 45,
          column: 24,
        },
        end: {
          line: 45,
          column: 25,
        },
      },
    },
    {
      type: "Numeric",
      value: "0",
      range: [1380, 1381],
      loc: {
        start: {
          line: 45,
          column: 26,
        },
        end: {
          line: 45,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [1382, 1386],
      loc: {
        start: {
          line: 45,
          column: 28,
        },
        end: {
          line: 45,
          column: 32,
        },
      },
    },
    {
      type: "Keyword",
      value: "RAISE",
      range: [1395, 1400],
      loc: {
        start: {
          line: 46,
          column: 8,
        },
        end: {
          line: 46,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXCEPTION",
      range: [1401, 1410],
      loc: {
        start: {
          line: 46,
          column: 14,
        },
        end: {
          line: 46,
          column: 23,
        },
      },
    },
    {
      type: "String",
      value: "'Order total cannot be negative'",
      range: [1411, 1443],
      loc: {
        start: {
          line: 46,
          column: 24,
        },
        end: {
          line: 46,
          column: 56,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1443, 1444],
      loc: {
        start: {
          line: 46,
          column: 56,
        },
        end: {
          line: 46,
          column: 57,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [1449, 1452],
      loc: {
        start: {
          line: 47,
          column: 4,
        },
        end: {
          line: 47,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [1453, 1455],
      loc: {
        start: {
          line: 47,
          column: 8,
        },
        end: {
          line: 47,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1455, 1456],
      loc: {
        start: {
          line: 47,
          column: 10,
        },
        end: {
          line: 47,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [1466, 1468],
      loc: {
        start: {
          line: 49,
          column: 4,
        },
        end: {
          line: 49,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [1469, 1472],
      loc: {
        start: {
          line: 49,
          column: 7,
        },
        end: {
          line: 49,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1472, 1473],
      loc: {
        start: {
          line: 49,
          column: 10,
        },
        end: {
          line: 49,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [1473, 1485],
      loc: {
        start: {
          line: 49,
          column: 11,
        },
        end: {
          line: 49,
          column: 23,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [1486, 1487],
      loc: {
        start: {
          line: 49,
          column: 24,
        },
        end: {
          line: 49,
          column: 25,
        },
      },
    },
    {
      type: "Numeric",
      value: "10000",
      range: [1488, 1493],
      loc: {
        start: {
          line: 49,
          column: 26,
        },
        end: {
          line: 49,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [1494, 1498],
      loc: {
        start: {
          line: 49,
          column: 32,
        },
        end: {
          line: 49,
          column: 36,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [1507, 1513],
      loc: {
        start: {
          line: 50,
          column: 8,
        },
        end: {
          line: 50,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTO",
      range: [1514, 1518],
      loc: {
        start: {
          line: 50,
          column: 15,
        },
        end: {
          line: 50,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "high_value_orders",
      range: [1519, 1536],
      loc: {
        start: {
          line: 50,
          column: 20,
        },
        end: {
          line: 50,
          column: 37,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1537, 1538],
      loc: {
        start: {
          line: 50,
          column: 38,
        },
        end: {
          line: 50,
          column: 39,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_id",
      range: [1538, 1546],
      loc: {
        start: {
          line: 50,
          column: 39,
        },
        end: {
          line: 50,
          column: 47,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1546, 1547],
      loc: {
        start: {
          line: 50,
          column: 47,
        },
        end: {
          line: 50,
          column: 48,
        },
      },
    },
    {
      type: "Identifier",
      value: "flagged_at",
      range: [1548, 1558],
      loc: {
        start: {
          line: 50,
          column: 49,
        },
        end: {
          line: 50,
          column: 59,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1558, 1559],
      loc: {
        start: {
          line: 50,
          column: 59,
        },
        end: {
          line: 50,
          column: 60,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [1568, 1574],
      loc: {
        start: {
          line: 51,
          column: 8,
        },
        end: {
          line: 51,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1575, 1576],
      loc: {
        start: {
          line: 51,
          column: 15,
        },
        end: {
          line: 51,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [1576, 1579],
      loc: {
        start: {
          line: 51,
          column: 16,
        },
        end: {
          line: 51,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1579, 1580],
      loc: {
        start: {
          line: 51,
          column: 19,
        },
        end: {
          line: 51,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [1580, 1582],
      loc: {
        start: {
          line: 51,
          column: 20,
        },
        end: {
          line: 51,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1582, 1583],
      loc: {
        start: {
          line: 51,
          column: 22,
        },
        end: {
          line: 51,
          column: 23,
        },
      },
    },
    {
      type: "Identifier",
      value: "NOW",
      range: [1584, 1587],
      loc: {
        start: {
          line: 51,
          column: 24,
        },
        end: {
          line: 51,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1587, 1588],
      loc: {
        start: {
          line: 51,
          column: 27,
        },
        end: {
          line: 51,
          column: 28,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1588, 1589],
      loc: {
        start: {
          line: 51,
          column: 28,
        },
        end: {
          line: 51,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1589, 1590],
      loc: {
        start: {
          line: 51,
          column: 29,
        },
        end: {
          line: 51,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1590, 1591],
      loc: {
        start: {
          line: 51,
          column: 30,
        },
        end: {
          line: 51,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [1596, 1599],
      loc: {
        start: {
          line: 52,
          column: 4,
        },
        end: {
          line: 52,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [1600, 1602],
      loc: {
        start: {
          line: 52,
          column: 8,
        },
        end: {
          line: 52,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1602, 1603],
      loc: {
        start: {
          line: 52,
          column: 10,
        },
        end: {
          line: 52,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURN",
      range: [1613, 1619],
      loc: {
        start: {
          line: 54,
          column: 4,
        },
        end: {
          line: 54,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [1620, 1623],
      loc: {
        start: {
          line: 54,
          column: 11,
        },
        end: {
          line: 54,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1623, 1624],
      loc: {
        start: {
          line: 54,
          column: 14,
        },
        end: {
          line: 54,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [1625, 1628],
      loc: {
        start: {
          line: 55,
          column: 0,
        },
        end: {
          line: 55,
          column: 3,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1628, 1629],
      loc: {
        start: {
          line: 55,
          column: 3,
        },
        end: {
          line: 55,
          column: 4,
        },
      },
    },
    {
      type: "Keyword",
      value: "LANGUAGE",
      range: [1633, 1641],
      loc: {
        start: {
          line: 56,
          column: 3,
        },
        end: {
          line: 56,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "plpgsql",
      range: [1642, 1649],
      loc: {
        start: {
          line: 56,
          column: 12,
        },
        end: {
          line: 56,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1649, 1650],
      loc: {
        start: {
          line: 56,
          column: 19,
        },
        end: {
          line: 56,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [1652, 1658],
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
      type: "Keyword",
      value: "TRIGGER",
      range: [1659, 1666],
      loc: {
        start: {
          line: 58,
          column: 7,
        },
        end: {
          line: 58,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "check_order_total_trigger",
      range: [1667, 1692],
      loc: {
        start: {
          line: 58,
          column: 15,
        },
        end: {
          line: 58,
          column: 40,
        },
      },
    },
    {
      type: "Identifier",
      value: "BEFORE",
      range: [1697, 1703],
      loc: {
        start: {
          line: 59,
          column: 4,
        },
        end: {
          line: 59,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [1704, 1710],
      loc: {
        start: {
          line: 59,
          column: 11,
        },
        end: {
          line: 59,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "OR",
      range: [1711, 1713],
      loc: {
        start: {
          line: 59,
          column: 18,
        },
        end: {
          line: 59,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "UPDATE",
      range: [1714, 1720],
      loc: {
        start: {
          line: 59,
          column: 21,
        },
        end: {
          line: 59,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [1721, 1723],
      loc: {
        start: {
          line: 59,
          column: 28,
        },
        end: {
          line: 59,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "orders",
      range: [1724, 1730],
      loc: {
        start: {
          line: 59,
          column: 31,
        },
        end: {
          line: 59,
          column: 37,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOR",
      range: [1735, 1738],
      loc: {
        start: {
          line: 60,
          column: 4,
        },
        end: {
          line: 60,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "EACH",
      range: [1739, 1743],
      loc: {
        start: {
          line: 60,
          column: 8,
        },
        end: {
          line: 60,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "ROW",
      range: [1744, 1747],
      loc: {
        start: {
          line: 60,
          column: 13,
        },
        end: {
          line: 60,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHEN",
      range: [1752, 1756],
      loc: {
        start: {
          line: 61,
          column: 4,
        },
        end: {
          line: 61,
          column: 8,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1757, 1758],
      loc: {
        start: {
          line: 61,
          column: 9,
        },
        end: {
          line: 61,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [1758, 1761],
      loc: {
        start: {
          line: 61,
          column: 10,
        },
        end: {
          line: 61,
          column: 13,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1761, 1762],
      loc: {
        start: {
          line: 61,
          column: 13,
        },
        end: {
          line: 61,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [1762, 1774],
      loc: {
        start: {
          line: 61,
          column: 14,
        },
        end: {
          line: 61,
          column: 26,
        },
      },
    },
    {
      type: "Keyword",
      value: "IS",
      range: [1775, 1777],
      loc: {
        start: {
          line: 61,
          column: 27,
        },
        end: {
          line: 61,
          column: 29,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOT",
      range: [1778, 1781],
      loc: {
        start: {
          line: 61,
          column: 30,
        },
        end: {
          line: 61,
          column: 33,
        },
      },
    },
    {
      type: "Keyword",
      value: "NULL",
      range: [1782, 1786],
      loc: {
        start: {
          line: 61,
          column: 34,
        },
        end: {
          line: 61,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1786, 1787],
      loc: {
        start: {
          line: 61,
          column: 38,
        },
        end: {
          line: 61,
          column: 39,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXECUTE",
      range: [1792, 1799],
      loc: {
        start: {
          line: 62,
          column: 4,
        },
        end: {
          line: 62,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "FUNCTION",
      range: [1800, 1808],
      loc: {
        start: {
          line: 62,
          column: 12,
        },
        end: {
          line: 62,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "check_order_total",
      range: [1809, 1826],
      loc: {
        start: {
          line: 62,
          column: 21,
        },
        end: {
          line: 62,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1826, 1827],
      loc: {
        start: {
          line: 62,
          column: 38,
        },
        end: {
          line: 62,
          column: 39,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1827, 1828],
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
      type: "Punctuator",
      value: ";",
      range: [1828, 1829],
      loc: {
        start: {
          line: 62,
          column: 40,
        },
        end: {
          line: 62,
          column: 41,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- INSTEAD OF trigger for views",
      range: [1831, 1862],
      loc: {
        start: {
          line: 64,
          column: 0,
        },
        end: {
          line: 64,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [1863, 1869],
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
      value: "OR",
      range: [1870, 1872],
      loc: {
        start: {
          line: 65,
          column: 7,
        },
        end: {
          line: 65,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "REPLACE",
      range: [1873, 1880],
      loc: {
        start: {
          line: 65,
          column: 10,
        },
        end: {
          line: 65,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "FUNCTION",
      range: [1881, 1889],
      loc: {
        start: {
          line: 65,
          column: 18,
        },
        end: {
          line: 65,
          column: 26,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_order_summary_update",
      range: [1890, 1915],
      loc: {
        start: {
          line: 65,
          column: 27,
        },
        end: {
          line: 65,
          column: 52,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1915, 1916],
      loc: {
        start: {
          line: 65,
          column: 52,
        },
        end: {
          line: 65,
          column: 53,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1916, 1917],
      loc: {
        start: {
          line: 65,
          column: 53,
        },
        end: {
          line: 65,
          column: 54,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURNS",
      range: [1918, 1925],
      loc: {
        start: {
          line: 66,
          column: 0,
        },
        end: {
          line: 66,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "TRIGGER",
      range: [1926, 1933],
      loc: {
        start: {
          line: 66,
          column: 8,
        },
        end: {
          line: 66,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "AS",
      range: [1934, 1936],
      loc: {
        start: {
          line: 66,
          column: 16,
        },
        end: {
          line: 66,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [1940, 1945],
      loc: {
        start: {
          line: 67,
          column: 0,
        },
        end: {
          line: 67,
          column: 5,
        },
      },
    },
    {
      type: "Keyword",
      value: "UPDATE",
      range: [1950, 1956],
      loc: {
        start: {
          line: 68,
          column: 4,
        },
        end: {
          line: 68,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [1957, 1962],
      loc: {
        start: {
          line: 68,
          column: 11,
        },
        end: {
          line: 68,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "SET",
      range: [1968, 1971],
      loc: {
        start: {
          line: 69,
          column: 4,
        },
        end: {
          line: 69,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "full_name",
      range: [1972, 1981],
      loc: {
        start: {
          line: 69,
          column: 8,
        },
        end: {
          line: 69,
          column: 17,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [1982, 1983],
      loc: {
        start: {
          line: 69,
          column: 18,
        },
        end: {
          line: 69,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [1984, 1987],
      loc: {
        start: {
          line: 69,
          column: 20,
        },
        end: {
          line: 69,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [1987, 1988],
      loc: {
        start: {
          line: 69,
          column: 23,
        },
        end: {
          line: 69,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_name",
      range: [1988, 1997],
      loc: {
        start: {
          line: 69,
          column: 24,
        },
        end: {
          line: 69,
          column: 33,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [2002, 2007],
      loc: {
        start: {
          line: 70,
          column: 4,
        },
        end: {
          line: 70,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [2008, 2010],
      loc: {
        start: {
          line: 70,
          column: 10,
        },
        end: {
          line: 70,
          column: 12,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2011, 2012],
      loc: {
        start: {
          line: 70,
          column: 13,
        },
        end: {
          line: 70,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [2013, 2016],
      loc: {
        start: {
          line: 70,
          column: 15,
        },
        end: {
          line: 70,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2016, 2017],
      loc: {
        start: {
          line: 70,
          column: 18,
        },
        end: {
          line: 70,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [2017, 2024],
      loc: {
        start: {
          line: 70,
          column: 19,
        },
        end: {
          line: 70,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2024, 2025],
      loc: {
        start: {
          line: 70,
          column: 26,
        },
        end: {
          line: 70,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [2035, 2037],
      loc: {
        start: {
          line: 72,
          column: 4,
        },
        end: {
          line: 72,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "NEW",
      range: [2038, 2041],
      loc: {
        start: {
          line: 72,
          column: 7,
        },
        end: {
          line: 72,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2041, 2042],
      loc: {
        start: {
          line: 72,
          column: 10,
        },
        end: {
          line: 72,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_count",
      range: [2042, 2053],
      loc: {
        start: {
          line: 72,
          column: 11,
        },
        end: {
          line: 72,
          column: 22,
        },
      },
    },
    {
      type: "Operator",
      value: "<>",
      range: [2054, 2056],
      loc: {
        start: {
          line: 72,
          column: 23,
        },
        end: {
          line: 72,
          column: 25,
        },
      },
    },
    {
      type: "Identifier",
      value: "OLD",
      range: [2057, 2060],
      loc: {
        start: {
          line: 72,
          column: 26,
        },
        end: {
          line: 72,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2060, 2061],
      loc: {
        start: {
          line: 72,
          column: 29,
        },
        end: {
          line: 72,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_count",
      range: [2061, 2072],
      loc: {
        start: {
          line: 72,
          column: 30,
        },
        end: {
          line: 72,
          column: 41,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [2073, 2077],
      loc: {
        start: {
          line: 72,
          column: 42,
        },
        end: {
          line: 72,
          column: 46,
        },
      },
    },
    {
      type: "Keyword",
      value: "RAISE",
      range: [2086, 2091],
      loc: {
        start: {
          line: 73,
          column: 8,
        },
        end: {
          line: 73,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOTICE",
      range: [2092, 2098],
      loc: {
        start: {
          line: 73,
          column: 14,
        },
        end: {
          line: 73,
          column: 20,
        },
      },
    },
    {
      type: "String",
      value: "'Cannot directly update order count through this view'",
      range: [2099, 2153],
      loc: {
        start: {
          line: 73,
          column: 21,
        },
        end: {
          line: 73,
          column: 75,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2153, 2154],
      loc: {
        start: {
          line: 73,
          column: 75,
        },
        end: {
          line: 73,
          column: 76,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [2159, 2162],
      loc: {
        start: {
          line: 74,
          column: 4,
        },
        end: {
          line: 74,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [2163, 2165],
      loc: {
        start: {
          line: 74,
          column: 8,
        },
        end: {
          line: 74,
          column: 10,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2165, 2166],
      loc: {
        start: {
          line: 74,
          column: 10,
        },
        end: {
          line: 74,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "RETURN",
      range: [2176, 2182],
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
      type: "Identifier",
      value: "NEW",
      range: [2183, 2186],
      loc: {
        start: {
          line: 76,
          column: 11,
        },
        end: {
          line: 76,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2186, 2187],
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
      type: "Keyword",
      value: "END",
      range: [2188, 2191],
      loc: {
        start: {
          line: 77,
          column: 0,
        },
        end: {
          line: 77,
          column: 3,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2191, 2192],
      loc: {
        start: {
          line: 77,
          column: 3,
        },
        end: {
          line: 77,
          column: 4,
        },
      },
    },
    {
      type: "Keyword",
      value: "LANGUAGE",
      range: [2196, 2204],
      loc: {
        start: {
          line: 78,
          column: 3,
        },
        end: {
          line: 78,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "plpgsql",
      range: [2205, 2212],
      loc: {
        start: {
          line: 78,
          column: 12,
        },
        end: {
          line: 78,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2212, 2213],
      loc: {
        start: {
          line: 78,
          column: 19,
        },
        end: {
          line: 78,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "CREATE",
      range: [2215, 2221],
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
      type: "Keyword",
      value: "TRIGGER",
      range: [2222, 2229],
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
      type: "Identifier",
      value: "user_order_summary_update_trigger",
      range: [2230, 2263],
      loc: {
        start: {
          line: 80,
          column: 15,
        },
        end: {
          line: 80,
          column: 48,
        },
      },
    },
    {
      type: "Identifier",
      value: "INSTEAD",
      range: [2268, 2275],
      loc: {
        start: {
          line: 81,
          column: 4,
        },
        end: {
          line: 81,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "OF",
      range: [2276, 2278],
      loc: {
        start: {
          line: 81,
          column: 12,
        },
        end: {
          line: 81,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "UPDATE",
      range: [2279, 2285],
      loc: {
        start: {
          line: 81,
          column: 15,
        },
        end: {
          line: 81,
          column: 21,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [2286, 2288],
      loc: {
        start: {
          line: 81,
          column: 22,
        },
        end: {
          line: 81,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_order_summary_view",
      range: [2289, 2312],
      loc: {
        start: {
          line: 81,
          column: 25,
        },
        end: {
          line: 81,
          column: 48,
        },
      },
    },
    {
      type: "Keyword",
      value: "FOR",
      range: [2317, 2320],
      loc: {
        start: {
          line: 82,
          column: 4,
        },
        end: {
          line: 82,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "EACH",
      range: [2321, 2325],
      loc: {
        start: {
          line: 82,
          column: 8,
        },
        end: {
          line: 82,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "ROW",
      range: [2326, 2329],
      loc: {
        start: {
          line: 82,
          column: 13,
        },
        end: {
          line: 82,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXECUTE",
      range: [2334, 2341],
      loc: {
        start: {
          line: 83,
          column: 4,
        },
        end: {
          line: 83,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "FUNCTION",
      range: [2342, 2350],
      loc: {
        start: {
          line: 83,
          column: 12,
        },
        end: {
          line: 83,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_order_summary_update",
      range: [2351, 2376],
      loc: {
        start: {
          line: 83,
          column: 21,
        },
        end: {
          line: 83,
          column: 46,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2376, 2377],
      loc: {
        start: {
          line: 83,
          column: 46,
        },
        end: {
          line: 83,
          column: 47,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2377, 2378],
      loc: {
        start: {
          line: 83,
          column: 47,
        },
        end: {
          line: 83,
          column: 48,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2378, 2379],
      loc: {
        start: {
          line: 83,
          column: 48,
        },
        end: {
          line: 83,
          column: 49,
        },
      },
    },
  ],
  comments: [],
} satisfies Program;
