import type { Program } from "../../../src/ast.ts";

export default {
  type: "Program",
  range: [0, 2815],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 114,
      column: 8,
    },
  },
  body: [
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_BEGIN",
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
    {
      type: "InsertStmt",
      relation: {
        relname: "users",
        inh: true,
        relpersistence: "p",
        range: [48, 53],
        loc: {
          start: {
            line: 4,
            column: 12,
          },
          end: {
            line: 4,
            column: 17,
          },
        },
      },
      cols: [
        {
          type: "ResTarget",
          name: "full_name",
          range: [55, 64],
          loc: {
            start: {
              line: 4,
              column: 19,
            },
            end: {
              line: 4,
              column: 28,
            },
          },
        },
        {
          type: "ResTarget",
          name: "email",
          range: [66, 71],
          loc: {
            start: {
              line: 4,
              column: 30,
            },
            end: {
              line: 4,
              column: 35,
            },
          },
        },
        {
          type: "ResTarget",
          name: "status",
          range: [73, 79],
          loc: {
            start: {
              line: 4,
              column: 37,
            },
            end: {
              line: 4,
              column: 43,
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
                  sval: "John Doe",
                },
                range: [90, 100],
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
                type: "A_Const",
                sval: {
                  sval: "john@example.com",
                },
                range: [102, 120],
                loc: {
                  start: {
                    line: 5,
                    column: 20,
                  },
                  end: {
                    line: 5,
                    column: 38,
                  },
                },
              },
              {
                type: "A_Const",
                sval: {
                  sval: "active",
                },
                range: [122, 130],
                loc: {
                  start: {
                    line: 5,
                    column: 40,
                  },
                  end: {
                    line: 5,
                    column: 48,
                  },
                },
              },
            ],
            range: [0, 130],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 5,
                column: 48,
              },
            },
          },
        ],
        limitOption: "LIMIT_OPTION_DEFAULT",
        op: "SETOP_NONE",
        range: [0, 130],
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 5,
            column: 48,
          },
        },
      },
      override: "OVERRIDING_NOT_SET",
      range: [0, 130],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 5,
          column: 48,
        },
      },
    },
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_SAVEPOINT",
      savepoint_name: "user_created",
      range: [144, 156],
      loc: {
        start: {
          line: 7,
          column: 10,
        },
        end: {
          line: 7,
          column: 22,
        },
      },
    },
    {
      type: "InsertStmt",
      relation: {
        relname: "orders",
        inh: true,
        relpersistence: "p",
        range: [171, 177],
        loc: {
          start: {
            line: 9,
            column: 12,
          },
          end: {
            line: 9,
            column: 18,
          },
        },
      },
      cols: [
        {
          type: "ResTarget",
          name: "user_id",
          range: [179, 186],
          loc: {
            start: {
              line: 9,
              column: 20,
            },
            end: {
              line: 9,
              column: 27,
            },
          },
        },
        {
          type: "ResTarget",
          name: "total_amount",
          range: [188, 200],
          loc: {
            start: {
              line: 9,
              column: 29,
            },
            end: {
              line: 9,
              column: 41,
            },
          },
        },
        {
          type: "ResTarget",
          name: "order_date",
          range: [202, 212],
          loc: {
            start: {
              line: 9,
              column: 43,
            },
            end: {
              line: 9,
              column: 53,
            },
          },
        },
      ],
      selectStmt: {
        type: "SelectStmt",
        targetList: [
          {
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
              range: [221, 223],
              loc: {
                start: {
                  line: 10,
                  column: 7,
                },
                end: {
                  line: 10,
                  column: 9,
                },
              },
            },
            range: [221, 223],
            loc: {
              start: {
                line: 10,
                column: 7,
              },
              end: {
                line: 10,
                column: 9,
              },
            },
          },
          {
            type: "ResTarget",
            val: {
              type: "A_Const",
              fval: {
                fval: "99.99",
              },
              range: [225, 230],
              loc: {
                start: {
                  line: 10,
                  column: 11,
                },
                end: {
                  line: 10,
                  column: 16,
                },
              },
            },
            range: [225, 230],
            loc: {
              start: {
                line: 10,
                column: 11,
              },
              end: {
                line: 10,
                column: 16,
              },
            },
          },
          {
            type: "ResTarget",
            val: {
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
              range: [232, 235],
              loc: {
                start: {
                  line: 10,
                  column: 18,
                },
                end: {
                  line: 10,
                  column: 21,
                },
              },
            },
            range: [232, 235],
            loc: {
              start: {
                line: 10,
                column: 18,
              },
              end: {
                line: 10,
                column: 21,
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
            range: [243, 248],
            loc: {
              start: {
                line: 11,
                column: 5,
              },
              end: {
                line: 11,
                column: 10,
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
            range: [256, 261],
            loc: {
              start: {
                line: 12,
                column: 6,
              },
              end: {
                line: 12,
                column: 11,
              },
            },
          },
          rexpr: {
            type: "A_Const",
            sval: {
              sval: "john@example.com",
            },
            range: [264, 282],
            loc: {
              start: {
                line: 12,
                column: 14,
              },
              end: {
                line: 12,
                column: 32,
              },
            },
          },
          range: [262, 263],
          loc: {
            start: {
              line: 12,
              column: 12,
            },
            end: {
              line: 12,
              column: 13,
            },
          },
        },
        limitOption: "LIMIT_OPTION_DEFAULT",
        op: "SETOP_NONE",
        range: [0, 282],
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 12,
            column: 32,
          },
        },
      },
      override: "OVERRIDING_NOT_SET",
      range: [0, 282],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 12,
          column: 32,
        },
      },
    },
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_SAVEPOINT",
      savepoint_name: "order_created",
      range: [295, 308],
      loc: {
        start: {
          line: 14,
          column: 10,
        },
        end: {
          line: 14,
          column: 23,
        },
      },
    },
    {
      type: "InsertStmt",
      relation: {
        relname: "order_items",
        inh: true,
        relpersistence: "p",
        range: [342, 353],
        loc: {
          start: {
            line: 17,
            column: 12,
          },
          end: {
            line: 17,
            column: 23,
          },
        },
      },
      cols: [
        {
          type: "ResTarget",
          name: "order_id",
          range: [355, 363],
          loc: {
            start: {
              line: 17,
              column: 25,
            },
            end: {
              line: 17,
              column: 33,
            },
          },
        },
        {
          type: "ResTarget",
          name: "product_id",
          range: [365, 375],
          loc: {
            start: {
              line: 17,
              column: 35,
            },
            end: {
              line: 17,
              column: 45,
            },
          },
        },
        {
          type: "ResTarget",
          name: "quantity",
          range: [377, 385],
          loc: {
            start: {
              line: 17,
              column: 47,
            },
            end: {
              line: 17,
              column: 55,
            },
          },
        },
        {
          type: "ResTarget",
          name: "price",
          range: [387, 392],
          loc: {
            start: {
              line: 17,
              column: 57,
            },
            end: {
              line: 17,
              column: 62,
            },
          },
        },
      ],
      selectStmt: {
        type: "SelectStmt",
        targetList: [
          {
            type: "ResTarget",
            val: {
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
              range: [401, 402],
              loc: {
                start: {
                  line: 18,
                  column: 7,
                },
                end: {
                  line: 18,
                  column: 8,
                },
              },
            },
            range: [401, 402],
            loc: {
              start: {
                line: 18,
                column: 7,
              },
              end: {
                line: 18,
                column: 8,
              },
            },
          },
          {
            type: "ResTarget",
            val: {
              type: "A_Const",
              ival: {
                ival: 1,
              },
              range: [407, 408],
              loc: {
                start: {
                  line: 18,
                  column: 13,
                },
                end: {
                  line: 18,
                  column: 14,
                },
              },
            },
            range: [407, 408],
            loc: {
              start: {
                line: 18,
                column: 13,
              },
              end: {
                line: 18,
                column: 14,
              },
            },
          },
          {
            type: "ResTarget",
            val: {
              type: "A_Const",
              ival: {
                ival: 2,
              },
              range: [410, 411],
              loc: {
                start: {
                  line: 18,
                  column: 16,
                },
                end: {
                  line: 18,
                  column: 17,
                },
              },
            },
            range: [410, 411],
            loc: {
              start: {
                line: 18,
                column: 16,
              },
              end: {
                line: 18,
                column: 17,
              },
            },
          },
          {
            type: "ResTarget",
            val: {
              type: "A_Const",
              fval: {
                fval: "49.99",
              },
              range: [413, 418],
              loc: {
                start: {
                  line: 18,
                  column: 19,
                },
                end: {
                  line: 18,
                  column: 24,
                },
              },
            },
            range: [413, 418],
            loc: {
              start: {
                line: 18,
                column: 19,
              },
              end: {
                line: 18,
                column: 24,
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
              relname: "orders",
              inh: true,
              relpersistence: "p",
              alias: {
                aliasname: "o",
              },
              range: [424, 430],
              loc: {
                start: {
                  line: 19,
                  column: 5,
                },
                end: {
                  line: 19,
                  column: 11,
                },
              },
            },
            rarg: {
              type: "RangeVar",
              relname: "users",
              inh: true,
              relpersistence: "p",
              alias: {
                aliasname: "u",
              },
              range: [438, 443],
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
                range: [449, 450],
                loc: {
                  start: {
                    line: 20,
                    column: 16,
                  },
                  end: {
                    line: 20,
                    column: 17,
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
                range: [461, 462],
                loc: {
                  start: {
                    line: 20,
                    column: 28,
                  },
                  end: {
                    line: 20,
                    column: 29,
                  },
                },
              },
              range: [459, 460],
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
            range: [0, 462],
            loc: {
              start: {
                line: 1,
                column: 0,
              },
              end: {
                line: 20,
                column: 29,
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
            range: [472, 473],
            loc: {
              start: {
                line: 21,
                column: 6,
              },
              end: {
                line: 21,
                column: 7,
              },
            },
          },
          rexpr: {
            type: "A_Const",
            sval: {
              sval: "john@example.com",
            },
            range: [482, 500],
            loc: {
              start: {
                line: 21,
                column: 16,
              },
              end: {
                line: 21,
                column: 34,
              },
            },
          },
          range: [480, 481],
          loc: {
            start: {
              line: 21,
              column: 14,
            },
            end: {
              line: 21,
              column: 15,
            },
          },
        },
        limitOption: "LIMIT_OPTION_DEFAULT",
        op: "SETOP_NONE",
        range: [0, 500],
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 21,
            column: 34,
          },
        },
      },
      override: "OVERRIDING_NOT_SET",
      range: [0, 500],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 21,
          column: 34,
        },
      },
    },
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_COMMIT",
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
    {
      type: "DoStmt",
      args: [
        {
          type: "DefElem",
          defname: "as",
          arg: {
            type: "String",
            sval: "\nDECLARE\n    user_id INTEGER;\n    order_id INTEGER;\n    error_msg TEXT;\nBEGIN\n    -- Start transaction block\n    BEGIN\n        INSERT INTO users (full_name, email, status) \n        VALUES ('Jane Doe', 'jane@example.com', 'active')\n        RETURNING id INTO user_id;\n        \n        INSERT INTO orders (user_id, total_amount, order_date)\n        VALUES (user_id, 150.00, NOW())\n        RETURNING id INTO order_id;\n        \n        -- Simulate error\n        IF random() > 0.5 THEN\n            RAISE EXCEPTION 'Simulated error';\n        END IF;\n        \n        INSERT INTO order_items (order_id, product_id, quantity, price)\n        VALUES (order_id, 2, 1, 150.00);\n        \n        RAISE NOTICE 'Transaction completed successfully';\n        \n    EXCEPTION \n        WHEN OTHERS THEN\n            GET STACKED DIAGNOSTICS error_msg = MESSAGE_TEXT;\n            RAISE NOTICE 'Transaction failed: %', error_msg;\n            -- Transaction is automatically rolled back\n            RAISE;\n    END;\nEND ",
            range: [0, 0],
            loc: {
              start: {
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
          range: [652, 652],
          loc: {
            start: {
              line: 29,
              column: 3,
            },
            end: {
              line: 29,
              column: 3,
            },
          },
        },
      ],
      range: [0, 652],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 29,
          column: 3,
        },
      },
    },
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_BEGIN",
      options: [
        {
          type: "DefElem",
          defname: "transaction_isolation",
          arg: {
            type: "A_Const",
            sval: {
              sval: "serializable",
            },
            range: [1694, 1706],
            loc: {
              start: {
                line: 65,
                column: 22,
              },
              end: {
                line: 65,
                column: 34,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [1678, 1687],
          loc: {
            start: {
              line: 65,
              column: 6,
            },
            end: {
              line: 65,
              column: 15,
            },
          },
        },
      ],
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
    {
      type: "UpdateStmt",
      relation: {
        relname: "users",
        inh: true,
        relpersistence: "p",
        range: [1719, 1724],
        loc: {
          start: {
            line: 66,
            column: 11,
          },
          end: {
            line: 66,
            column: 16,
          },
        },
      },
      targetList: [
        {
          type: "ResTarget",
          name: "status",
          val: {
            type: "A_Const",
            sval: {
              sval: "premium",
            },
            range: [1738, 1747],
            loc: {
              start: {
                line: 66,
                column: 30,
              },
              end: {
                line: 66,
                column: 39,
              },
            },
          },
          range: [1729, 1735],
          loc: {
            start: {
              line: 66,
              column: 21,
            },
            end: {
              line: 66,
              column: 27,
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
          range: [1754, 1756],
          loc: {
            start: {
              line: 66,
              column: 46,
            },
            end: {
              line: 66,
              column: 48,
            },
          },
        },
        rexpr: {
          type: "A_Const",
          ival: {
            ival: 1,
          },
          range: [1759, 1760],
          loc: {
            start: {
              line: 66,
              column: 51,
            },
            end: {
              line: 66,
              column: 52,
            },
          },
        },
        range: [1757, 1758],
        loc: {
          start: {
            line: 66,
            column: 49,
          },
          end: {
            line: 66,
            column: 50,
          },
        },
      },
      range: [0, 1760],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 66,
          column: 52,
        },
      },
    },
    {
      type: "SelectStmt",
      targetList: [
        {
          type: "ResTarget",
          val: {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "pg_sleep",
                range: [0, 0],
                loc: {
                  start: {
                    line: 1,
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
                ival: {
                  ival: 2,
                },
                range: [1782, 1783],
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
            ],
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [1773, 1781],
            loc: {
              start: {
                line: 67,
                column: 11,
              },
              end: {
                line: 67,
                column: 19,
              },
            },
          },
          range: [1773, 1781],
          loc: {
            start: {
              line: 67,
              column: 11,
            },
            end: {
              line: 67,
              column: 19,
            },
          },
        },
      ],
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 1783],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 67,
          column: 21,
        },
      },
    },
    {
      type: "UpdateStmt",
      relation: {
        relname: "orders",
        inh: true,
        relpersistence: "p",
        range: [1797, 1803],
        loc: {
          start: {
            line: 68,
            column: 11,
          },
          end: {
            line: 68,
            column: 17,
          },
        },
      },
      targetList: [
        {
          type: "ResTarget",
          name: "total_amount",
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
              range: [1823, 1835],
              loc: {
                start: {
                  line: 68,
                  column: 37,
                },
                end: {
                  line: 68,
                  column: 49,
                },
              },
            },
            rexpr: {
              type: "A_Const",
              fval: {
                fval: "0.9",
              },
              range: [1838, 1841],
              loc: {
                start: {
                  line: 68,
                  column: 52,
                },
                end: {
                  line: 68,
                  column: 55,
                },
              },
            },
            range: [1836, 1837],
            loc: {
              start: {
                line: 68,
                column: 50,
              },
              end: {
                line: 68,
                column: 51,
              },
            },
          },
          range: [1808, 1820],
          loc: {
            start: {
              line: 68,
              column: 22,
            },
            end: {
              line: 68,
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
          range: [1848, 1855],
          loc: {
            start: {
              line: 68,
              column: 62,
            },
            end: {
              line: 68,
              column: 69,
            },
          },
        },
        rexpr: {
          type: "A_Const",
          ival: {
            ival: 1,
          },
          range: [1858, 1859],
          loc: {
            start: {
              line: 68,
              column: 72,
            },
            end: {
              line: 68,
              column: 73,
            },
          },
        },
        range: [1856, 1857],
        loc: {
          start: {
            line: 68,
            column: 70,
          },
          end: {
            line: 68,
            column: 71,
          },
        },
      },
      range: [0, 1859],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 68,
          column: 73,
        },
      },
    },
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_COMMIT",
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
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_BEGIN",
      options: [
        {
          type: "DefElem",
          defname: "transaction_read_only",
          arg: {
            type: "A_Const",
            ival: {
              ival: 1,
            },
            range: [1901, 1905],
            loc: {
              start: {
                line: 72,
                column: 6,
              },
              end: {
                line: 72,
                column: 10,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [1901, 1905],
          loc: {
            start: {
              line: 72,
              column: 6,
            },
            end: {
              line: 72,
              column: 10,
            },
          },
        },
      ],
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
    {
      type: "SelectStmt",
      targetList: [
        {
          type: "ResTarget",
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
            range: [1923, 1928],
            loc: {
              start: {
                line: 73,
                column: 11,
              },
              end: {
                line: 73,
                column: 16,
              },
            },
          },
          range: [1923, 1928],
          loc: {
            start: {
              line: 73,
              column: 11,
            },
            end: {
              line: 73,
              column: 16,
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
          range: [1937, 1942],
          loc: {
            start: {
              line: 73,
              column: 25,
            },
            end: {
              line: 73,
              column: 30,
            },
          },
        },
      ],
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 1942],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 73,
          column: 30,
        },
      },
    },
    {
      type: "SelectStmt",
      targetList: [
        {
          type: "ResTarget",
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
                range: [1959, 1971],
                loc: {
                  start: {
                    line: 74,
                    column: 15,
                  },
                  end: {
                    line: 74,
                    column: 27,
                  },
                },
              },
            ],
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [1955, 1958],
            loc: {
              start: {
                line: 74,
                column: 11,
              },
              end: {
                line: 74,
                column: 14,
              },
            },
          },
          range: [1955, 1958],
          loc: {
            start: {
              line: 74,
              column: 11,
            },
            end: {
              line: 74,
              column: 14,
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
          range: [1978, 1984],
          loc: {
            start: {
              line: 74,
              column: 34,
            },
            end: {
              line: 74,
              column: 40,
            },
          },
        },
      ],
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 1984],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 74,
          column: 40,
        },
      },
    },
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_COMMIT",
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
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_BEGIN",
      options: [
        {
          type: "DefElem",
          defname: "transaction_isolation",
          arg: {
            type: "A_Const",
            sval: {
              sval: "serializable",
            },
            range: [2043, 2055],
            loc: {
              start: {
                line: 78,
                column: 22,
              },
              end: {
                line: 78,
                column: 34,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [2027, 2036],
          loc: {
            start: {
              line: 78,
              column: 6,
            },
            end: {
              line: 78,
              column: 15,
            },
          },
        },
        {
          type: "DefElem",
          defname: "transaction_read_only",
          arg: {
            type: "A_Const",
            ival: {
              ival: 1,
            },
            range: [2056, 2060],
            loc: {
              start: {
                line: 78,
                column: 35,
              },
              end: {
                line: 78,
                column: 39,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [2056, 2060],
          loc: {
            start: {
              line: 78,
              column: 35,
            },
            end: {
              line: 78,
              column: 39,
            },
          },
        },
        {
          type: "DefElem",
          defname: "transaction_deferrable",
          arg: {
            type: "A_Const",
            ival: {
              ival: 1,
            },
            range: [2066, 2076],
            loc: {
              start: {
                line: 78,
                column: 45,
              },
              end: {
                line: 78,
                column: 55,
              },
            },
          },
          defaction: "DEFELEM_UNSPEC",
          range: [2066, 2076],
          loc: {
            start: {
              line: 78,
              column: 45,
            },
            end: {
              line: 78,
              column: 55,
            },
          },
        },
      ],
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
            range: [2089, 2090],
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
          range: [2089, 2090],
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
                range: [2108, 2109],
                loc: {
                  start: {
                    line: 79,
                    column: 30,
                  },
                  end: {
                    line: 79,
                    column: 31,
                  },
                },
              },
            ],
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [2102, 2107],
            loc: {
              start: {
                line: 79,
                column: 24,
              },
              end: {
                line: 79,
                column: 29,
              },
            },
          },
          range: [2102, 2107],
          loc: {
            start: {
              line: 79,
              column: 24,
            },
            end: {
              line: 79,
              column: 29,
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
            range: [2138, 2143],
            loc: {
              start: {
                line: 80,
                column: 9,
              },
              end: {
                line: 80,
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
            range: [2160, 2166],
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
              range: [2172, 2173],
              loc: {
                start: {
                  line: 81,
                  column: 26,
                },
                end: {
                  line: 81,
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
              range: [2179, 2180],
              loc: {
                start: {
                  line: 81,
                  column: 33,
                },
                end: {
                  line: 81,
                  column: 34,
                },
              },
            },
            range: [2177, 2178],
            loc: {
              start: {
                line: 81,
                column: 31,
              },
              end: {
                line: 81,
                column: 32,
              },
            },
          },
          range: [0, 2180],
          loc: {
            start: {
              line: 1,
              column: 0,
            },
            end: {
              line: 81,
              column: 34,
            },
          },
        },
      ],
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
          range: [2202, 2203],
          loc: {
            start: {
              line: 82,
              column: 13,
            },
            end: {
              line: 82,
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
          range: [2208, 2209],
          loc: {
            start: {
              line: 82,
              column: 19,
            },
            end: {
              line: 82,
              column: 20,
            },
          },
        },
      ],
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 2209],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 82,
          column: 20,
        },
      },
    },
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_COMMIT",
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
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_PREPARE",
      gid: "transfer_funds_1",
      range: [2281, 2299],
      loc: {
        start: {
          line: 86,
          column: 20,
        },
        end: {
          line: 86,
          column: 38,
        },
      },
    },
    {
      type: "SelectStmt",
      targetList: [
        {
          type: "ResTarget",
          val: {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "pg_advisory_lock",
                range: [0, 0],
                loc: {
                  start: {
                    line: 1,
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
                ival: {
                  ival: 12345,
                },
                range: [2443, 2448],
                loc: {
                  start: {
                    line: 94,
                    column: 24,
                  },
                  end: {
                    line: 94,
                    column: 29,
                  },
                },
              },
            ],
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [2426, 2442],
            loc: {
              start: {
                line: 94,
                column: 7,
              },
              end: {
                line: 94,
                column: 23,
              },
            },
          },
          range: [2426, 2442],
          loc: {
            start: {
              line: 94,
              column: 7,
            },
            end: {
              line: 94,
              column: 23,
            },
          },
        },
      ],
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 2448],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 94,
          column: 29,
        },
      },
    },
    {
      type: "UpdateStmt",
      relation: {
        relname: "accounts",
        inh: true,
        relpersistence: "p",
        range: [2479, 2487],
        loc: {
          start: {
            line: 97,
            column: 7,
          },
          end: {
            line: 97,
            column: 15,
          },
        },
      },
      targetList: [
        {
          type: "ResTarget",
          name: "balance",
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
                  sval: "balance",
                  range: [0, 0],
                  loc: {
                    start: {
                      line: 1,
                      column: 0,
                    },
                    end: {
                      line: 1,
                      column: 0,
                    },
                  },
                },
              ],
              range: [2503, 2510],
              loc: {
                start: {
                  line: 98,
                  column: 14,
                },
                end: {
                  line: 98,
                  column: 21,
                },
              },
            },
            rexpr: {
              type: "A_Const",
              ival: {
                ival: 100,
              },
              range: [2513, 2516],
              loc: {
                start: {
                  line: 98,
                  column: 24,
                },
                end: {
                  line: 98,
                  column: 27,
                },
              },
            },
            range: [2511, 2512],
            loc: {
              start: {
                line: 98,
                column: 22,
              },
              end: {
                line: 98,
                column: 23,
              },
            },
          },
          range: [2493, 2500],
          loc: {
            start: {
              line: 98,
              column: 4,
            },
            end: {
              line: 98,
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
          range: [2524, 2526],
          loc: {
            start: {
              line: 99,
              column: 6,
            },
            end: {
              line: 99,
              column: 8,
            },
          },
        },
        rexpr: {
          type: "A_Const",
          ival: {
            ival: 1,
          },
          range: [2529, 2530],
          loc: {
            start: {
              line: 99,
              column: 11,
            },
            end: {
              line: 99,
              column: 12,
            },
          },
        },
        range: [2527, 2528],
        loc: {
          start: {
            line: 99,
            column: 9,
          },
          end: {
            line: 99,
            column: 10,
          },
        },
      },
      range: [0, 2530],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 99,
          column: 12,
        },
      },
    },
    {
      type: "UpdateStmt",
      relation: {
        relname: "accounts",
        inh: true,
        relpersistence: "p",
        range: [2540, 2548],
        loc: {
          start: {
            line: 101,
            column: 7,
          },
          end: {
            line: 101,
            column: 15,
          },
        },
      },
      targetList: [
        {
          type: "ResTarget",
          name: "balance",
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
                  sval: "balance",
                  range: [0, 0],
                  loc: {
                    start: {
                      line: 1,
                      column: 0,
                    },
                    end: {
                      line: 1,
                      column: 0,
                    },
                  },
                },
              ],
              range: [2564, 2571],
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
            rexpr: {
              type: "A_Const",
              ival: {
                ival: 100,
              },
              range: [2574, 2577],
              loc: {
                start: {
                  line: 102,
                  column: 24,
                },
                end: {
                  line: 102,
                  column: 27,
                },
              },
            },
            range: [2572, 2573],
            loc: {
              start: {
                line: 102,
                column: 22,
              },
              end: {
                line: 102,
                column: 23,
              },
            },
          },
          range: [2554, 2561],
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
          range: [2585, 2587],
          loc: {
            start: {
              line: 103,
              column: 6,
            },
            end: {
              line: 103,
              column: 8,
            },
          },
        },
        rexpr: {
          type: "A_Const",
          ival: {
            ival: 2,
          },
          range: [2590, 2591],
          loc: {
            start: {
              line: 103,
              column: 11,
            },
            end: {
              line: 103,
              column: 12,
            },
          },
        },
        range: [2588, 2589],
        loc: {
          start: {
            line: 103,
            column: 9,
          },
          end: {
            line: 103,
            column: 10,
          },
        },
      },
      range: [0, 2591],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 103,
          column: 12,
        },
      },
    },
    {
      type: "SelectStmt",
      targetList: [
        {
          type: "ResTarget",
          val: {
            type: "FuncCall",
            funcname: [
              {
                type: "String",
                sval: "pg_advisory_unlock",
                range: [0, 0],
                loc: {
                  start: {
                    line: 1,
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
                ival: {
                  ival: 12345,
                },
                range: [2620, 2625],
                loc: {
                  start: {
                    line: 105,
                    column: 26,
                  },
                  end: {
                    line: 105,
                    column: 31,
                  },
                },
              },
            ],
            funcformat: "COERCE_EXPLICIT_CALL",
            range: [2601, 2619],
            loc: {
              start: {
                line: 105,
                column: 7,
              },
              end: {
                line: 105,
                column: 25,
              },
            },
          },
          range: [2601, 2619],
          loc: {
            start: {
              line: 105,
              column: 7,
            },
            end: {
              line: 105,
              column: 25,
            },
          },
        },
      ],
      limitOption: "LIMIT_OPTION_DEFAULT",
      op: "SETOP_NONE",
      range: [0, 2625],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 105,
          column: 31,
        },
      },
    },
    {
      type: "VariableSetStmt",
      kind: "VAR_SET_VALUE",
      name: "lock_timeout",
      args: [
        {
          type: "A_Const",
          sval: {
            sval: "5s",
          },
          range: [2664, 2668],
          loc: {
            start: {
              line: 108,
              column: 19,
            },
            end: {
              line: 108,
              column: 23,
            },
          },
        },
      ],
      range: [0, 2668],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 108,
          column: 23,
        },
      },
    },
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_BEGIN",
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
    {
      type: "LockStmt",
      relations: [
        {
          type: "RangeVar",
          relname: "users",
          inh: true,
          relpersistence: "p",
          range: [2693, 2698],
          loc: {
            start: {
              line: 111,
              column: 15,
            },
            end: {
              line: 111,
              column: 20,
            },
          },
        },
      ],
      mode: 7,
      range: [2693, 2698],
      loc: {
        start: {
          line: 111,
          column: 15,
        },
        end: {
          line: 111,
          column: 20,
        },
      },
    },
    {
      type: "UpdateStmt",
      relation: {
        relname: "users",
        inh: true,
        relpersistence: "p",
        range: [2749, 2754],
        loc: {
          start: {
            line: 113,
            column: 11,
          },
          end: {
            line: 113,
            column: 16,
          },
        },
      },
      targetList: [
        {
          type: "ResTarget",
          name: "status",
          val: {
            type: "A_Const",
            sval: {
              sval: "maintenance",
            },
            range: [2768, 2781],
            loc: {
              start: {
                line: 113,
                column: 30,
              },
              end: {
                line: 113,
                column: 43,
              },
            },
          },
          range: [2759, 2765],
          loc: {
            start: {
              line: 113,
              column: 21,
            },
            end: {
              line: 113,
              column: 27,
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
          range: [2788, 2794],
          loc: {
            start: {
              line: 113,
              column: 50,
            },
            end: {
              line: 113,
              column: 56,
            },
          },
        },
        rexpr: {
          type: "A_Const",
          sval: {
            sval: "active",
          },
          range: [2797, 2805],
          loc: {
            start: {
              line: 113,
              column: 59,
            },
            end: {
              line: 113,
              column: 67,
            },
          },
        },
        range: [2795, 2796],
        loc: {
          start: {
            line: 113,
            column: 57,
          },
          end: {
            line: 113,
            column: 58,
          },
        },
      },
      range: [0, 2805],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 113,
          column: 67,
        },
      },
    },
    {
      type: "TransactionStmt",
      kind: "TRANS_STMT_COMMIT",
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
  tokens: [
    {
      type: "LineComment",
      value: "-- Transaction control test",
      range: [0, 27],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [28, 33],
      loc: {
        start: {
          line: 2,
          column: 0,
        },
        end: {
          line: 2,
          column: 5,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [33, 34],
      loc: {
        start: {
          line: 2,
          column: 5,
        },
        end: {
          line: 2,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [36, 42],
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
      value: "INTO",
      range: [43, 47],
      loc: {
        start: {
          line: 4,
          column: 7,
        },
        end: {
          line: 4,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [48, 53],
      loc: {
        start: {
          line: 4,
          column: 12,
        },
        end: {
          line: 4,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [54, 55],
      loc: {
        start: {
          line: 4,
          column: 18,
        },
        end: {
          line: 4,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "full_name",
      range: [55, 64],
      loc: {
        start: {
          line: 4,
          column: 19,
        },
        end: {
          line: 4,
          column: 28,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [64, 65],
      loc: {
        start: {
          line: 4,
          column: 28,
        },
        end: {
          line: 4,
          column: 29,
        },
      },
    },
    {
      type: "Identifier",
      value: "email",
      range: [66, 71],
      loc: {
        start: {
          line: 4,
          column: 30,
        },
        end: {
          line: 4,
          column: 35,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [71, 72],
      loc: {
        start: {
          line: 4,
          column: 35,
        },
        end: {
          line: 4,
          column: 36,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [73, 79],
      loc: {
        start: {
          line: 4,
          column: 37,
        },
        end: {
          line: 4,
          column: 43,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [79, 80],
      loc: {
        start: {
          line: 4,
          column: 43,
        },
        end: {
          line: 4,
          column: 44,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [82, 88],
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
      type: "Punctuator",
      value: "(",
      range: [89, 90],
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
      type: "String",
      value: "'John Doe'",
      range: [90, 100],
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
      type: "Punctuator",
      value: ",",
      range: [100, 101],
      loc: {
        start: {
          line: 5,
          column: 18,
        },
        end: {
          line: 5,
          column: 19,
        },
      },
    },
    {
      type: "String",
      value: "'john@example.com'",
      range: [102, 120],
      loc: {
        start: {
          line: 5,
          column: 20,
        },
        end: {
          line: 5,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [120, 121],
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
      type: "String",
      value: "'active'",
      range: [122, 130],
      loc: {
        start: {
          line: 5,
          column: 40,
        },
        end: {
          line: 5,
          column: 48,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [130, 131],
      loc: {
        start: {
          line: 5,
          column: 48,
        },
        end: {
          line: 5,
          column: 49,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [131, 132],
      loc: {
        start: {
          line: 5,
          column: 49,
        },
        end: {
          line: 5,
          column: 50,
        },
      },
    },
    {
      type: "Keyword",
      value: "SAVEPOINT",
      range: [134, 143],
      loc: {
        start: {
          line: 7,
          column: 0,
        },
        end: {
          line: 7,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_created",
      range: [144, 156],
      loc: {
        start: {
          line: 7,
          column: 10,
        },
        end: {
          line: 7,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [156, 157],
      loc: {
        start: {
          line: 7,
          column: 22,
        },
        end: {
          line: 7,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [159, 165],
      loc: {
        start: {
          line: 9,
          column: 0,
        },
        end: {
          line: 9,
          column: 6,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTO",
      range: [166, 170],
      loc: {
        start: {
          line: 9,
          column: 7,
        },
        end: {
          line: 9,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "orders",
      range: [171, 177],
      loc: {
        start: {
          line: 9,
          column: 12,
        },
        end: {
          line: 9,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [178, 179],
      loc: {
        start: {
          line: 9,
          column: 19,
        },
        end: {
          line: 9,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [179, 186],
      loc: {
        start: {
          line: 9,
          column: 20,
        },
        end: {
          line: 9,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [186, 187],
      loc: {
        start: {
          line: 9,
          column: 27,
        },
        end: {
          line: 9,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [188, 200],
      loc: {
        start: {
          line: 9,
          column: 29,
        },
        end: {
          line: 9,
          column: 41,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [200, 201],
      loc: {
        start: {
          line: 9,
          column: 41,
        },
        end: {
          line: 9,
          column: 42,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_date",
      range: [202, 212],
      loc: {
        start: {
          line: 9,
          column: 43,
        },
        end: {
          line: 9,
          column: 53,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [212, 213],
      loc: {
        start: {
          line: 9,
          column: 53,
        },
        end: {
          line: 9,
          column: 54,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [214, 220],
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
      type: "Identifier",
      value: "id",
      range: [221, 223],
      loc: {
        start: {
          line: 10,
          column: 7,
        },
        end: {
          line: 10,
          column: 9,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [223, 224],
      loc: {
        start: {
          line: 10,
          column: 9,
        },
        end: {
          line: 10,
          column: 10,
        },
      },
    },
    {
      type: "Numeric",
      value: "99.99",
      range: [225, 230],
      loc: {
        start: {
          line: 10,
          column: 11,
        },
        end: {
          line: 10,
          column: 16,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [230, 231],
      loc: {
        start: {
          line: 10,
          column: 16,
        },
        end: {
          line: 10,
          column: 17,
        },
      },
    },
    {
      type: "Identifier",
      value: "NOW",
      range: [232, 235],
      loc: {
        start: {
          line: 10,
          column: 18,
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
      range: [235, 236],
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
      range: [236, 237],
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
      value: "FROM",
      range: [238, 242],
      loc: {
        start: {
          line: 11,
          column: 0,
        },
        end: {
          line: 11,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [243, 248],
      loc: {
        start: {
          line: 11,
          column: 5,
        },
        end: {
          line: 11,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [250, 255],
      loc: {
        start: {
          line: 12,
          column: 0,
        },
        end: {
          line: 12,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "email",
      range: [256, 261],
      loc: {
        start: {
          line: 12,
          column: 6,
        },
        end: {
          line: 12,
          column: 11,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [262, 263],
      loc: {
        start: {
          line: 12,
          column: 12,
        },
        end: {
          line: 12,
          column: 13,
        },
      },
    },
    {
      type: "String",
      value: "'john@example.com'",
      range: [264, 282],
      loc: {
        start: {
          line: 12,
          column: 14,
        },
        end: {
          line: 12,
          column: 32,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [282, 283],
      loc: {
        start: {
          line: 12,
          column: 32,
        },
        end: {
          line: 12,
          column: 33,
        },
      },
    },
    {
      type: "Keyword",
      value: "SAVEPOINT",
      range: [285, 294],
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
      type: "Identifier",
      value: "order_created",
      range: [295, 308],
      loc: {
        start: {
          line: 14,
          column: 10,
        },
        end: {
          line: 14,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [308, 309],
      loc: {
        start: {
          line: 14,
          column: 23,
        },
        end: {
          line: 14,
          column: 24,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- This might fail",
      range: [311, 329],
      loc: {
        start: {
          line: 16,
          column: 0,
        },
        end: {
          line: 16,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [330, 336],
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
      value: "INTO",
      range: [337, 341],
      loc: {
        start: {
          line: 17,
          column: 7,
        },
        end: {
          line: 17,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_items",
      range: [342, 353],
      loc: {
        start: {
          line: 17,
          column: 12,
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
      range: [354, 355],
      loc: {
        start: {
          line: 17,
          column: 24,
        },
        end: {
          line: 17,
          column: 25,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_id",
      range: [355, 363],
      loc: {
        start: {
          line: 17,
          column: 25,
        },
        end: {
          line: 17,
          column: 33,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [363, 364],
      loc: {
        start: {
          line: 17,
          column: 33,
        },
        end: {
          line: 17,
          column: 34,
        },
      },
    },
    {
      type: "Identifier",
      value: "product_id",
      range: [365, 375],
      loc: {
        start: {
          line: 17,
          column: 35,
        },
        end: {
          line: 17,
          column: 45,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [375, 376],
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
      type: "Identifier",
      value: "quantity",
      range: [377, 385],
      loc: {
        start: {
          line: 17,
          column: 47,
        },
        end: {
          line: 17,
          column: 55,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [385, 386],
      loc: {
        start: {
          line: 17,
          column: 55,
        },
        end: {
          line: 17,
          column: 56,
        },
      },
    },
    {
      type: "Identifier",
      value: "price",
      range: [387, 392],
      loc: {
        start: {
          line: 17,
          column: 57,
        },
        end: {
          line: 17,
          column: 62,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [392, 393],
      loc: {
        start: {
          line: 17,
          column: 62,
        },
        end: {
          line: 17,
          column: 63,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [394, 400],
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
      type: "Identifier",
      value: "o",
      range: [401, 402],
      loc: {
        start: {
          line: 18,
          column: 7,
        },
        end: {
          line: 18,
          column: 8,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [402, 403],
      loc: {
        start: {
          line: 18,
          column: 8,
        },
        end: {
          line: 18,
          column: 9,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [403, 405],
      loc: {
        start: {
          line: 18,
          column: 9,
        },
        end: {
          line: 18,
          column: 11,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [405, 406],
      loc: {
        start: {
          line: 18,
          column: 11,
        },
        end: {
          line: 18,
          column: 12,
        },
      },
    },
    {
      type: "Numeric",
      value: "1",
      range: [407, 408],
      loc: {
        start: {
          line: 18,
          column: 13,
        },
        end: {
          line: 18,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [408, 409],
      loc: {
        start: {
          line: 18,
          column: 14,
        },
        end: {
          line: 18,
          column: 15,
        },
      },
    },
    {
      type: "Numeric",
      value: "2",
      range: [410, 411],
      loc: {
        start: {
          line: 18,
          column: 16,
        },
        end: {
          line: 18,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [411, 412],
      loc: {
        start: {
          line: 18,
          column: 17,
        },
        end: {
          line: 18,
          column: 18,
        },
      },
    },
    {
      type: "Numeric",
      value: "49.99",
      range: [413, 418],
      loc: {
        start: {
          line: 18,
          column: 19,
        },
        end: {
          line: 18,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [419, 423],
      loc: {
        start: {
          line: 19,
          column: 0,
        },
        end: {
          line: 19,
          column: 4,
        },
      },
    },
    {
      type: "Identifier",
      value: "orders",
      range: [424, 430],
      loc: {
        start: {
          line: 19,
          column: 5,
        },
        end: {
          line: 19,
          column: 11,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [431, 432],
      loc: {
        start: {
          line: 19,
          column: 12,
        },
        end: {
          line: 19,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "JOIN",
      range: [433, 437],
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
      type: "Identifier",
      value: "users",
      range: [438, 443],
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
      type: "Identifier",
      value: "u",
      range: [444, 445],
      loc: {
        start: {
          line: 20,
          column: 11,
        },
        end: {
          line: 20,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [446, 448],
      loc: {
        start: {
          line: 20,
          column: 13,
        },
        end: {
          line: 20,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [449, 450],
      loc: {
        start: {
          line: 20,
          column: 16,
        },
        end: {
          line: 20,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [450, 451],
      loc: {
        start: {
          line: 20,
          column: 17,
        },
        end: {
          line: 20,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [451, 458],
      loc: {
        start: {
          line: 20,
          column: 18,
        },
        end: {
          line: 20,
          column: 25,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [459, 460],
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
      value: "u",
      range: [461, 462],
      loc: {
        start: {
          line: 20,
          column: 28,
        },
        end: {
          line: 20,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [462, 463],
      loc: {
        start: {
          line: 20,
          column: 29,
        },
        end: {
          line: 20,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [463, 465],
      loc: {
        start: {
          line: 20,
          column: 30,
        },
        end: {
          line: 20,
          column: 32,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [466, 471],
      loc: {
        start: {
          line: 21,
          column: 0,
        },
        end: {
          line: 21,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [472, 473],
      loc: {
        start: {
          line: 21,
          column: 6,
        },
        end: {
          line: 21,
          column: 7,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [473, 474],
      loc: {
        start: {
          line: 21,
          column: 7,
        },
        end: {
          line: 21,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "email",
      range: [474, 479],
      loc: {
        start: {
          line: 21,
          column: 8,
        },
        end: {
          line: 21,
          column: 13,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [480, 481],
      loc: {
        start: {
          line: 21,
          column: 14,
        },
        end: {
          line: 21,
          column: 15,
        },
      },
    },
    {
      type: "String",
      value: "'john@example.com'",
      range: [482, 500],
      loc: {
        start: {
          line: 21,
          column: 16,
        },
        end: {
          line: 21,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [500, 501],
      loc: {
        start: {
          line: 21,
          column: 34,
        },
        end: {
          line: 21,
          column: 35,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- If something went wrong, rollback to savepoint",
      range: [503, 552],
      loc: {
        start: {
          line: 23,
          column: 0,
        },
        end: {
          line: 23,
          column: 49,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- ROLLBACK TO SAVEPOINT order_created;",
      range: [553, 592],
      loc: {
        start: {
          line: 24,
          column: 0,
        },
        end: {
          line: 24,
          column: 39,
        },
      },
    },
    {
      type: "Keyword",
      value: "COMMIT",
      range: [594, 600],
      loc: {
        start: {
          line: 26,
          column: 0,
        },
        end: {
          line: 26,
          column: 6,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [600, 601],
      loc: {
        start: {
          line: 26,
          column: 6,
        },
        end: {
          line: 26,
          column: 7,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Transaction with error handling in plpgsql",
      range: [603, 648],
      loc: {
        start: {
          line: 28,
          column: 0,
        },
        end: {
          line: 28,
          column: 45,
        },
      },
    },
    {
      type: "Keyword",
      value: "DO",
      range: [649, 651],
      loc: {
        start: {
          line: 29,
          column: 0,
        },
        end: {
          line: 29,
          column: 2,
        },
      },
    },
    {
      type: "Keyword",
      value: "DECLARE",
      range: [655, 662],
      loc: {
        start: {
          line: 30,
          column: 0,
        },
        end: {
          line: 30,
          column: 7,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [667, 674],
      loc: {
        start: {
          line: 31,
          column: 4,
        },
        end: {
          line: 31,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTEGER",
      range: [675, 682],
      loc: {
        start: {
          line: 31,
          column: 12,
        },
        end: {
          line: 31,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [682, 683],
      loc: {
        start: {
          line: 31,
          column: 19,
        },
        end: {
          line: 31,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_id",
      range: [688, 696],
      loc: {
        start: {
          line: 32,
          column: 4,
        },
        end: {
          line: 32,
          column: 12,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTEGER",
      range: [697, 704],
      loc: {
        start: {
          line: 32,
          column: 13,
        },
        end: {
          line: 32,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [704, 705],
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
      type: "Identifier",
      value: "error_msg",
      range: [710, 719],
      loc: {
        start: {
          line: 33,
          column: 4,
        },
        end: {
          line: 33,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "TEXT",
      range: [720, 724],
      loc: {
        start: {
          line: 33,
          column: 14,
        },
        end: {
          line: 33,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [724, 725],
      loc: {
        start: {
          line: 33,
          column: 18,
        },
        end: {
          line: 33,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [726, 731],
      loc: {
        start: {
          line: 34,
          column: 0,
        },
        end: {
          line: 34,
          column: 5,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Start transaction block",
      range: [736, 762],
      loc: {
        start: {
          line: 35,
          column: 4,
        },
        end: {
          line: 35,
          column: 30,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [767, 772],
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
      type: "Keyword",
      value: "INSERT",
      range: [781, 787],
      loc: {
        start: {
          line: 37,
          column: 8,
        },
        end: {
          line: 37,
          column: 14,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTO",
      range: [788, 792],
      loc: {
        start: {
          line: 37,
          column: 15,
        },
        end: {
          line: 37,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [793, 798],
      loc: {
        start: {
          line: 37,
          column: 20,
        },
        end: {
          line: 37,
          column: 25,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [799, 800],
      loc: {
        start: {
          line: 37,
          column: 26,
        },
        end: {
          line: 37,
          column: 27,
        },
      },
    },
    {
      type: "Identifier",
      value: "full_name",
      range: [800, 809],
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
      value: ",",
      range: [809, 810],
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
      value: "email",
      range: [811, 816],
      loc: {
        start: {
          line: 37,
          column: 38,
        },
        end: {
          line: 37,
          column: 43,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [816, 817],
      loc: {
        start: {
          line: 37,
          column: 43,
        },
        end: {
          line: 37,
          column: 44,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [818, 824],
      loc: {
        start: {
          line: 37,
          column: 45,
        },
        end: {
          line: 37,
          column: 51,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [824, 825],
      loc: {
        start: {
          line: 37,
          column: 51,
        },
        end: {
          line: 37,
          column: 52,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [835, 841],
      loc: {
        start: {
          line: 38,
          column: 8,
        },
        end: {
          line: 38,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [842, 843],
      loc: {
        start: {
          line: 38,
          column: 15,
        },
        end: {
          line: 38,
          column: 16,
        },
      },
    },
    {
      type: "String",
      value: "'Jane Doe'",
      range: [843, 853],
      loc: {
        start: {
          line: 38,
          column: 16,
        },
        end: {
          line: 38,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [853, 854],
      loc: {
        start: {
          line: 38,
          column: 26,
        },
        end: {
          line: 38,
          column: 27,
        },
      },
    },
    {
      type: "String",
      value: "'jane@example.com'",
      range: [855, 873],
      loc: {
        start: {
          line: 38,
          column: 28,
        },
        end: {
          line: 38,
          column: 46,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [873, 874],
      loc: {
        start: {
          line: 38,
          column: 46,
        },
        end: {
          line: 38,
          column: 47,
        },
      },
    },
    {
      type: "String",
      value: "'active'",
      range: [875, 883],
      loc: {
        start: {
          line: 38,
          column: 48,
        },
        end: {
          line: 38,
          column: 56,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [883, 884],
      loc: {
        start: {
          line: 38,
          column: 56,
        },
        end: {
          line: 38,
          column: 57,
        },
      },
    },
    {
      type: "Identifier",
      value: "RETURNING",
      range: [893, 902],
      loc: {
        start: {
          line: 39,
          column: 8,
        },
        end: {
          line: 39,
          column: 17,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [903, 905],
      loc: {
        start: {
          line: 39,
          column: 18,
        },
        end: {
          line: 39,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTO",
      range: [906, 910],
      loc: {
        start: {
          line: 39,
          column: 21,
        },
        end: {
          line: 39,
          column: 25,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [911, 918],
      loc: {
        start: {
          line: 39,
          column: 26,
        },
        end: {
          line: 39,
          column: 33,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [918, 919],
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
      type: "Keyword",
      value: "INSERT",
      range: [937, 943],
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
      type: "Keyword",
      value: "INTO",
      range: [944, 948],
      loc: {
        start: {
          line: 41,
          column: 15,
        },
        end: {
          line: 41,
          column: 19,
        },
      },
    },
    {
      type: "Identifier",
      value: "orders",
      range: [949, 955],
      loc: {
        start: {
          line: 41,
          column: 20,
        },
        end: {
          line: 41,
          column: 26,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [956, 957],
      loc: {
        start: {
          line: 41,
          column: 27,
        },
        end: {
          line: 41,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [957, 964],
      loc: {
        start: {
          line: 41,
          column: 28,
        },
        end: {
          line: 41,
          column: 35,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [964, 965],
      loc: {
        start: {
          line: 41,
          column: 35,
        },
        end: {
          line: 41,
          column: 36,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [966, 978],
      loc: {
        start: {
          line: 41,
          column: 37,
        },
        end: {
          line: 41,
          column: 49,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [978, 979],
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
      type: "Identifier",
      value: "order_date",
      range: [980, 990],
      loc: {
        start: {
          line: 41,
          column: 51,
        },
        end: {
          line: 41,
          column: 61,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [990, 991],
      loc: {
        start: {
          line: 41,
          column: 61,
        },
        end: {
          line: 41,
          column: 62,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [1000, 1006],
      loc: {
        start: {
          line: 42,
          column: 8,
        },
        end: {
          line: 42,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1007, 1008],
      loc: {
        start: {
          line: 42,
          column: 15,
        },
        end: {
          line: 42,
          column: 16,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [1008, 1015],
      loc: {
        start: {
          line: 42,
          column: 16,
        },
        end: {
          line: 42,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1015, 1016],
      loc: {
        start: {
          line: 42,
          column: 23,
        },
        end: {
          line: 42,
          column: 24,
        },
      },
    },
    {
      type: "Numeric",
      value: "150.00",
      range: [1017, 1023],
      loc: {
        start: {
          line: 42,
          column: 25,
        },
        end: {
          line: 42,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1023, 1024],
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
      type: "Identifier",
      value: "NOW",
      range: [1025, 1028],
      loc: {
        start: {
          line: 42,
          column: 33,
        },
        end: {
          line: 42,
          column: 36,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1028, 1029],
      loc: {
        start: {
          line: 42,
          column: 36,
        },
        end: {
          line: 42,
          column: 37,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1029, 1030],
      loc: {
        start: {
          line: 42,
          column: 37,
        },
        end: {
          line: 42,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1030, 1031],
      loc: {
        start: {
          line: 42,
          column: 38,
        },
        end: {
          line: 42,
          column: 39,
        },
      },
    },
    {
      type: "Identifier",
      value: "RETURNING",
      range: [1040, 1049],
      loc: {
        start: {
          line: 43,
          column: 8,
        },
        end: {
          line: 43,
          column: 17,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [1050, 1052],
      loc: {
        start: {
          line: 43,
          column: 18,
        },
        end: {
          line: 43,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "INTO",
      range: [1053, 1057],
      loc: {
        start: {
          line: 43,
          column: 21,
        },
        end: {
          line: 43,
          column: 25,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_id",
      range: [1058, 1066],
      loc: {
        start: {
          line: 43,
          column: 26,
        },
        end: {
          line: 43,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1066, 1067],
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
      type: "LineComment",
      value: "-- Simulate error",
      range: [1085, 1102],
      loc: {
        start: {
          line: 45,
          column: 8,
        },
        end: {
          line: 45,
          column: 25,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [1111, 1113],
      loc: {
        start: {
          line: 46,
          column: 8,
        },
        end: {
          line: 46,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "random",
      range: [1114, 1120],
      loc: {
        start: {
          line: 46,
          column: 11,
        },
        end: {
          line: 46,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1120, 1121],
      loc: {
        start: {
          line: 46,
          column: 17,
        },
        end: {
          line: 46,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1121, 1122],
      loc: {
        start: {
          line: 46,
          column: 18,
        },
        end: {
          line: 46,
          column: 19,
        },
      },
    },
    {
      type: "Operator",
      value: ">",
      range: [1123, 1124],
      loc: {
        start: {
          line: 46,
          column: 20,
        },
        end: {
          line: 46,
          column: 21,
        },
      },
    },
    {
      type: "Numeric",
      value: "0.5",
      range: [1125, 1128],
      loc: {
        start: {
          line: 46,
          column: 22,
        },
        end: {
          line: 46,
          column: 25,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [1129, 1133],
      loc: {
        start: {
          line: 46,
          column: 26,
        },
        end: {
          line: 46,
          column: 30,
        },
      },
    },
    {
      type: "Keyword",
      value: "RAISE",
      range: [1146, 1151],
      loc: {
        start: {
          line: 47,
          column: 12,
        },
        end: {
          line: 47,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXCEPTION",
      range: [1152, 1161],
      loc: {
        start: {
          line: 47,
          column: 18,
        },
        end: {
          line: 47,
          column: 27,
        },
      },
    },
    {
      type: "String",
      value: "'Simulated error'",
      range: [1162, 1179],
      loc: {
        start: {
          line: 47,
          column: 28,
        },
        end: {
          line: 47,
          column: 45,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1179, 1180],
      loc: {
        start: {
          line: 47,
          column: 45,
        },
        end: {
          line: 47,
          column: 46,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [1189, 1192],
      loc: {
        start: {
          line: 48,
          column: 8,
        },
        end: {
          line: 48,
          column: 11,
        },
      },
    },
    {
      type: "Keyword",
      value: "IF",
      range: [1193, 1195],
      loc: {
        start: {
          line: 48,
          column: 12,
        },
        end: {
          line: 48,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1195, 1196],
      loc: {
        start: {
          line: 48,
          column: 14,
        },
        end: {
          line: 48,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "INSERT",
      range: [1214, 1220],
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
      range: [1221, 1225],
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
      value: "order_items",
      range: [1226, 1237],
      loc: {
        start: {
          line: 50,
          column: 20,
        },
        end: {
          line: 50,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1238, 1239],
      loc: {
        start: {
          line: 50,
          column: 32,
        },
        end: {
          line: 50,
          column: 33,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_id",
      range: [1239, 1247],
      loc: {
        start: {
          line: 50,
          column: 33,
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
      range: [1247, 1248],
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
      value: "product_id",
      range: [1249, 1259],
      loc: {
        start: {
          line: 50,
          column: 43,
        },
        end: {
          line: 50,
          column: 53,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1259, 1260],
      loc: {
        start: {
          line: 50,
          column: 53,
        },
        end: {
          line: 50,
          column: 54,
        },
      },
    },
    {
      type: "Identifier",
      value: "quantity",
      range: [1261, 1269],
      loc: {
        start: {
          line: 50,
          column: 55,
        },
        end: {
          line: 50,
          column: 63,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1269, 1270],
      loc: {
        start: {
          line: 50,
          column: 63,
        },
        end: {
          line: 50,
          column: 64,
        },
      },
    },
    {
      type: "Identifier",
      value: "price",
      range: [1271, 1276],
      loc: {
        start: {
          line: 50,
          column: 65,
        },
        end: {
          line: 50,
          column: 70,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1276, 1277],
      loc: {
        start: {
          line: 50,
          column: 70,
        },
        end: {
          line: 50,
          column: 71,
        },
      },
    },
    {
      type: "Keyword",
      value: "VALUES",
      range: [1286, 1292],
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
      range: [1293, 1294],
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
      value: "order_id",
      range: [1294, 1302],
      loc: {
        start: {
          line: 51,
          column: 16,
        },
        end: {
          line: 51,
          column: 24,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1302, 1303],
      loc: {
        start: {
          line: 51,
          column: 24,
        },
        end: {
          line: 51,
          column: 25,
        },
      },
    },
    {
      type: "Numeric",
      value: "2",
      range: [1304, 1305],
      loc: {
        start: {
          line: 51,
          column: 26,
        },
        end: {
          line: 51,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1305, 1306],
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
      type: "Numeric",
      value: "1",
      range: [1307, 1308],
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
      value: ",",
      range: [1308, 1309],
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
      type: "Numeric",
      value: "150.00",
      range: [1310, 1316],
      loc: {
        start: {
          line: 51,
          column: 32,
        },
        end: {
          line: 51,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1316, 1317],
      loc: {
        start: {
          line: 51,
          column: 38,
        },
        end: {
          line: 51,
          column: 39,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1317, 1318],
      loc: {
        start: {
          line: 51,
          column: 39,
        },
        end: {
          line: 51,
          column: 40,
        },
      },
    },
    {
      type: "Keyword",
      value: "RAISE",
      range: [1336, 1341],
      loc: {
        start: {
          line: 53,
          column: 8,
        },
        end: {
          line: 53,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOTICE",
      range: [1342, 1348],
      loc: {
        start: {
          line: 53,
          column: 14,
        },
        end: {
          line: 53,
          column: 20,
        },
      },
    },
    {
      type: "String",
      value: "'Transaction completed successfully'",
      range: [1349, 1385],
      loc: {
        start: {
          line: 53,
          column: 21,
        },
        end: {
          line: 53,
          column: 57,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1385, 1386],
      loc: {
        start: {
          line: 53,
          column: 57,
        },
        end: {
          line: 53,
          column: 58,
        },
      },
    },
    {
      type: "Keyword",
      value: "EXCEPTION",
      range: [1400, 1409],
      loc: {
        start: {
          line: 55,
          column: 4,
        },
        end: {
          line: 55,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHEN",
      range: [1419, 1423],
      loc: {
        start: {
          line: 56,
          column: 8,
        },
        end: {
          line: 56,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "OTHERS",
      range: [1424, 1430],
      loc: {
        start: {
          line: 56,
          column: 13,
        },
        end: {
          line: 56,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "THEN",
      range: [1431, 1435],
      loc: {
        start: {
          line: 56,
          column: 20,
        },
        end: {
          line: 56,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "GET",
      range: [1448, 1451],
      loc: {
        start: {
          line: 57,
          column: 12,
        },
        end: {
          line: 57,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "STACKED",
      range: [1452, 1459],
      loc: {
        start: {
          line: 57,
          column: 16,
        },
        end: {
          line: 57,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "DIAGNOSTICS",
      range: [1460, 1471],
      loc: {
        start: {
          line: 57,
          column: 24,
        },
        end: {
          line: 57,
          column: 35,
        },
      },
    },
    {
      type: "Identifier",
      value: "error_msg",
      range: [1472, 1481],
      loc: {
        start: {
          line: 57,
          column: 36,
        },
        end: {
          line: 57,
          column: 45,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [1482, 1483],
      loc: {
        start: {
          line: 57,
          column: 46,
        },
        end: {
          line: 57,
          column: 47,
        },
      },
    },
    {
      type: "Keyword",
      value: "MESSAGE_TEXT",
      range: [1484, 1496],
      loc: {
        start: {
          line: 57,
          column: 48,
        },
        end: {
          line: 57,
          column: 60,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1496, 1497],
      loc: {
        start: {
          line: 57,
          column: 60,
        },
        end: {
          line: 57,
          column: 61,
        },
      },
    },
    {
      type: "Keyword",
      value: "RAISE",
      range: [1510, 1515],
      loc: {
        start: {
          line: 58,
          column: 12,
        },
        end: {
          line: 58,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "NOTICE",
      range: [1516, 1522],
      loc: {
        start: {
          line: 58,
          column: 18,
        },
        end: {
          line: 58,
          column: 24,
        },
      },
    },
    {
      type: "String",
      value: "'Transaction failed: %'",
      range: [1523, 1546],
      loc: {
        start: {
          line: 58,
          column: 25,
        },
        end: {
          line: 58,
          column: 48,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [1546, 1547],
      loc: {
        start: {
          line: 58,
          column: 48,
        },
        end: {
          line: 58,
          column: 49,
        },
      },
    },
    {
      type: "Identifier",
      value: "error_msg",
      range: [1548, 1557],
      loc: {
        start: {
          line: 58,
          column: 50,
        },
        end: {
          line: 58,
          column: 59,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1557, 1558],
      loc: {
        start: {
          line: 58,
          column: 59,
        },
        end: {
          line: 58,
          column: 60,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Transaction is automatically rolled back",
      range: [1571, 1614],
      loc: {
        start: {
          line: 59,
          column: 12,
        },
        end: {
          line: 59,
          column: 55,
        },
      },
    },
    {
      type: "Keyword",
      value: "RAISE",
      range: [1627, 1632],
      loc: {
        start: {
          line: 60,
          column: 12,
        },
        end: {
          line: 60,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1632, 1633],
      loc: {
        start: {
          line: 60,
          column: 17,
        },
        end: {
          line: 60,
          column: 18,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [1638, 1641],
      loc: {
        start: {
          line: 61,
          column: 4,
        },
        end: {
          line: 61,
          column: 7,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1641, 1642],
      loc: {
        start: {
          line: 61,
          column: 7,
        },
        end: {
          line: 61,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "END",
      range: [1643, 1646],
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
      type: "Punctuator",
      value: ";",
      range: [1649, 1650],
      loc: {
        start: {
          line: 62,
          column: 6,
        },
        end: {
          line: 62,
          column: 7,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Isolation levels",
      range: [1652, 1671],
      loc: {
        start: {
          line: 64,
          column: 0,
        },
        end: {
          line: 64,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [1672, 1677],
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
      type: "Identifier",
      value: "ISOLATION",
      range: [1678, 1687],
      loc: {
        start: {
          line: 65,
          column: 6,
        },
        end: {
          line: 65,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "LEVEL",
      range: [1688, 1693],
      loc: {
        start: {
          line: 65,
          column: 16,
        },
        end: {
          line: 65,
          column: 21,
        },
      },
    },
    {
      type: "Identifier",
      value: "SERIALIZABLE",
      range: [1694, 1706],
      loc: {
        start: {
          line: 65,
          column: 22,
        },
        end: {
          line: 65,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1706, 1707],
      loc: {
        start: {
          line: 65,
          column: 34,
        },
        end: {
          line: 65,
          column: 35,
        },
      },
    },
    {
      type: "Keyword",
      value: "UPDATE",
      range: [1712, 1718],
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
      type: "Identifier",
      value: "users",
      range: [1719, 1724],
      loc: {
        start: {
          line: 66,
          column: 11,
        },
        end: {
          line: 66,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "SET",
      range: [1725, 1728],
      loc: {
        start: {
          line: 66,
          column: 17,
        },
        end: {
          line: 66,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [1729, 1735],
      loc: {
        start: {
          line: 66,
          column: 21,
        },
        end: {
          line: 66,
          column: 27,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [1736, 1737],
      loc: {
        start: {
          line: 66,
          column: 28,
        },
        end: {
          line: 66,
          column: 29,
        },
      },
    },
    {
      type: "String",
      value: "'premium'",
      range: [1738, 1747],
      loc: {
        start: {
          line: 66,
          column: 30,
        },
        end: {
          line: 66,
          column: 39,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [1748, 1753],
      loc: {
        start: {
          line: 66,
          column: 40,
        },
        end: {
          line: 66,
          column: 45,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [1754, 1756],
      loc: {
        start: {
          line: 66,
          column: 46,
        },
        end: {
          line: 66,
          column: 48,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [1757, 1758],
      loc: {
        start: {
          line: 66,
          column: 49,
        },
        end: {
          line: 66,
          column: 50,
        },
      },
    },
    {
      type: "Numeric",
      value: "1",
      range: [1759, 1760],
      loc: {
        start: {
          line: 66,
          column: 51,
        },
        end: {
          line: 66,
          column: 52,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1760, 1761],
      loc: {
        start: {
          line: 66,
          column: 52,
        },
        end: {
          line: 66,
          column: 53,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1766, 1772],
      loc: {
        start: {
          line: 67,
          column: 4,
        },
        end: {
          line: 67,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "pg_sleep",
      range: [1773, 1781],
      loc: {
        start: {
          line: 67,
          column: 11,
        },
        end: {
          line: 67,
          column: 19,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1781, 1782],
      loc: {
        start: {
          line: 67,
          column: 19,
        },
        end: {
          line: 67,
          column: 20,
        },
      },
    },
    {
      type: "Numeric",
      value: "2",
      range: [1782, 1783],
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
      type: "Punctuator",
      value: ")",
      range: [1783, 1784],
      loc: {
        start: {
          line: 67,
          column: 21,
        },
        end: {
          line: 67,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1784, 1785],
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
      type: "Keyword",
      value: "UPDATE",
      range: [1790, 1796],
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
      value: "orders",
      range: [1797, 1803],
      loc: {
        start: {
          line: 68,
          column: 11,
        },
        end: {
          line: 68,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "SET",
      range: [1804, 1807],
      loc: {
        start: {
          line: 68,
          column: 18,
        },
        end: {
          line: 68,
          column: 21,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [1808, 1820],
      loc: {
        start: {
          line: 68,
          column: 22,
        },
        end: {
          line: 68,
          column: 34,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [1821, 1822],
      loc: {
        start: {
          line: 68,
          column: 35,
        },
        end: {
          line: 68,
          column: 36,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [1823, 1835],
      loc: {
        start: {
          line: 68,
          column: 37,
        },
        end: {
          line: 68,
          column: 49,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [1836, 1837],
      loc: {
        start: {
          line: 68,
          column: 50,
        },
        end: {
          line: 68,
          column: 51,
        },
      },
    },
    {
      type: "Numeric",
      value: "0.9",
      range: [1838, 1841],
      loc: {
        start: {
          line: 68,
          column: 52,
        },
        end: {
          line: 68,
          column: 55,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [1842, 1847],
      loc: {
        start: {
          line: 68,
          column: 56,
        },
        end: {
          line: 68,
          column: 61,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [1848, 1855],
      loc: {
        start: {
          line: 68,
          column: 62,
        },
        end: {
          line: 68,
          column: 69,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [1856, 1857],
      loc: {
        start: {
          line: 68,
          column: 70,
        },
        end: {
          line: 68,
          column: 71,
        },
      },
    },
    {
      type: "Numeric",
      value: "1",
      range: [1858, 1859],
      loc: {
        start: {
          line: 68,
          column: 72,
        },
        end: {
          line: 68,
          column: 73,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1859, 1860],
      loc: {
        start: {
          line: 68,
          column: 73,
        },
        end: {
          line: 68,
          column: 74,
        },
      },
    },
    {
      type: "Keyword",
      value: "COMMIT",
      range: [1861, 1867],
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
      type: "Punctuator",
      value: ";",
      range: [1867, 1868],
      loc: {
        start: {
          line: 69,
          column: 6,
        },
        end: {
          line: 69,
          column: 7,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Read-only transaction",
      range: [1870, 1894],
      loc: {
        start: {
          line: 71,
          column: 0,
        },
        end: {
          line: 71,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [1895, 1900],
      loc: {
        start: {
          line: 72,
          column: 0,
        },
        end: {
          line: 72,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "READ",
      range: [1901, 1905],
      loc: {
        start: {
          line: 72,
          column: 6,
        },
        end: {
          line: 72,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "ONLY",
      range: [1906, 1910],
      loc: {
        start: {
          line: 72,
          column: 11,
        },
        end: {
          line: 72,
          column: 15,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1910, 1911],
      loc: {
        start: {
          line: 72,
          column: 15,
        },
        end: {
          line: 72,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1916, 1922],
      loc: {
        start: {
          line: 73,
          column: 4,
        },
        end: {
          line: 73,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "COUNT",
      range: [1923, 1928],
      loc: {
        start: {
          line: 73,
          column: 11,
        },
        end: {
          line: 73,
          column: 16,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1928, 1929],
      loc: {
        start: {
          line: 73,
          column: 16,
        },
        end: {
          line: 73,
          column: 17,
        },
      },
    },
    {
      type: "Operator",
      value: "*",
      range: [1929, 1930],
      loc: {
        start: {
          line: 73,
          column: 17,
        },
        end: {
          line: 73,
          column: 18,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1930, 1931],
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
      type: "Keyword",
      value: "FROM",
      range: [1932, 1936],
      loc: {
        start: {
          line: 73,
          column: 20,
        },
        end: {
          line: 73,
          column: 24,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [1937, 1942],
      loc: {
        start: {
          line: 73,
          column: 25,
        },
        end: {
          line: 73,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1942, 1943],
      loc: {
        start: {
          line: 73,
          column: 30,
        },
        end: {
          line: 73,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [1948, 1954],
      loc: {
        start: {
          line: 74,
          column: 4,
        },
        end: {
          line: 74,
          column: 10,
        },
      },
    },
    {
      type: "Keyword",
      value: "AVG",
      range: [1955, 1958],
      loc: {
        start: {
          line: 74,
          column: 11,
        },
        end: {
          line: 74,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [1958, 1959],
      loc: {
        start: {
          line: 74,
          column: 14,
        },
        end: {
          line: 74,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "total_amount",
      range: [1959, 1971],
      loc: {
        start: {
          line: 74,
          column: 15,
        },
        end: {
          line: 74,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [1971, 1972],
      loc: {
        start: {
          line: 74,
          column: 27,
        },
        end: {
          line: 74,
          column: 28,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [1973, 1977],
      loc: {
        start: {
          line: 74,
          column: 29,
        },
        end: {
          line: 74,
          column: 33,
        },
      },
    },
    {
      type: "Identifier",
      value: "orders",
      range: [1978, 1984],
      loc: {
        start: {
          line: 74,
          column: 34,
        },
        end: {
          line: 74,
          column: 40,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [1984, 1985],
      loc: {
        start: {
          line: 74,
          column: 40,
        },
        end: {
          line: 74,
          column: 41,
        },
      },
    },
    {
      type: "Keyword",
      value: "COMMIT",
      range: [1986, 1992],
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
      type: "Punctuator",
      value: ";",
      range: [1992, 1993],
      loc: {
        start: {
          line: 75,
          column: 6,
        },
        end: {
          line: 75,
          column: 7,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Deferrable transaction",
      range: [1995, 2020],
      loc: {
        start: {
          line: 77,
          column: 0,
        },
        end: {
          line: 77,
          column: 25,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [2021, 2026],
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
      value: "ISOLATION",
      range: [2027, 2036],
      loc: {
        start: {
          line: 78,
          column: 6,
        },
        end: {
          line: 78,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "LEVEL",
      range: [2037, 2042],
      loc: {
        start: {
          line: 78,
          column: 16,
        },
        end: {
          line: 78,
          column: 21,
        },
      },
    },
    {
      type: "Identifier",
      value: "SERIALIZABLE",
      range: [2043, 2055],
      loc: {
        start: {
          line: 78,
          column: 22,
        },
        end: {
          line: 78,
          column: 34,
        },
      },
    },
    {
      type: "Identifier",
      value: "READ",
      range: [2056, 2060],
      loc: {
        start: {
          line: 78,
          column: 35,
        },
        end: {
          line: 78,
          column: 39,
        },
      },
    },
    {
      type: "Keyword",
      value: "ONLY",
      range: [2061, 2065],
      loc: {
        start: {
          line: 78,
          column: 40,
        },
        end: {
          line: 78,
          column: 44,
        },
      },
    },
    {
      type: "Keyword",
      value: "DEFERRABLE",
      range: [2066, 2076],
      loc: {
        start: {
          line: 78,
          column: 45,
        },
        end: {
          line: 78,
          column: 55,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2076, 2077],
      loc: {
        start: {
          line: 78,
          column: 55,
        },
        end: {
          line: 78,
          column: 56,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [2082, 2088],
      loc: {
        start: {
          line: 79,
          column: 4,
        },
        end: {
          line: 79,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [2089, 2090],
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
      type: "Punctuator",
      value: ".",
      range: [2090, 2091],
      loc: {
        start: {
          line: 79,
          column: 12,
        },
        end: {
          line: 79,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "full_name",
      range: [2091, 2100],
      loc: {
        start: {
          line: 79,
          column: 13,
        },
        end: {
          line: 79,
          column: 22,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2100, 2101],
      loc: {
        start: {
          line: 79,
          column: 22,
        },
        end: {
          line: 79,
          column: 23,
        },
      },
    },
    {
      type: "Keyword",
      value: "COUNT",
      range: [2102, 2107],
      loc: {
        start: {
          line: 79,
          column: 24,
        },
        end: {
          line: 79,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2107, 2108],
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
      type: "Identifier",
      value: "o",
      range: [2108, 2109],
      loc: {
        start: {
          line: 79,
          column: 30,
        },
        end: {
          line: 79,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2109, 2110],
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
      type: "Identifier",
      value: "id",
      range: [2110, 2112],
      loc: {
        start: {
          line: 79,
          column: 32,
        },
        end: {
          line: 79,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2112, 2113],
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
      type: "Keyword",
      value: "as",
      range: [2114, 2116],
      loc: {
        start: {
          line: 79,
          column: 36,
        },
        end: {
          line: 79,
          column: 38,
        },
      },
    },
    {
      type: "Identifier",
      value: "order_count",
      range: [2117, 2128],
      loc: {
        start: {
          line: 79,
          column: 39,
        },
        end: {
          line: 79,
          column: 50,
        },
      },
    },
    {
      type: "Keyword",
      value: "FROM",
      range: [2133, 2137],
      loc: {
        start: {
          line: 80,
          column: 4,
        },
        end: {
          line: 80,
          column: 8,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [2138, 2143],
      loc: {
        start: {
          line: 80,
          column: 9,
        },
        end: {
          line: 80,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [2144, 2145],
      loc: {
        start: {
          line: 80,
          column: 15,
        },
        end: {
          line: 80,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "LEFT",
      range: [2150, 2154],
      loc: {
        start: {
          line: 81,
          column: 4,
        },
        end: {
          line: 81,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "JOIN",
      range: [2155, 2159],
      loc: {
        start: {
          line: 81,
          column: 9,
        },
        end: {
          line: 81,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "orders",
      range: [2160, 2166],
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
      type: "Identifier",
      value: "o",
      range: [2167, 2168],
      loc: {
        start: {
          line: 81,
          column: 21,
        },
        end: {
          line: 81,
          column: 22,
        },
      },
    },
    {
      type: "Keyword",
      value: "ON",
      range: [2169, 2171],
      loc: {
        start: {
          line: 81,
          column: 23,
        },
        end: {
          line: 81,
          column: 25,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [2172, 2173],
      loc: {
        start: {
          line: 81,
          column: 26,
        },
        end: {
          line: 81,
          column: 27,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2173, 2174],
      loc: {
        start: {
          line: 81,
          column: 27,
        },
        end: {
          line: 81,
          column: 28,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [2174, 2176],
      loc: {
        start: {
          line: 81,
          column: 28,
        },
        end: {
          line: 81,
          column: 30,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2177, 2178],
      loc: {
        start: {
          line: 81,
          column: 31,
        },
        end: {
          line: 81,
          column: 32,
        },
      },
    },
    {
      type: "Identifier",
      value: "o",
      range: [2179, 2180],
      loc: {
        start: {
          line: 81,
          column: 33,
        },
        end: {
          line: 81,
          column: 34,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2180, 2181],
      loc: {
        start: {
          line: 81,
          column: 34,
        },
        end: {
          line: 81,
          column: 35,
        },
      },
    },
    {
      type: "Identifier",
      value: "user_id",
      range: [2181, 2188],
      loc: {
        start: {
          line: 81,
          column: 35,
        },
        end: {
          line: 81,
          column: 42,
        },
      },
    },
    {
      type: "Keyword",
      value: "GROUP",
      range: [2193, 2198],
      loc: {
        start: {
          line: 82,
          column: 4,
        },
        end: {
          line: 82,
          column: 9,
        },
      },
    },
    {
      type: "Keyword",
      value: "BY",
      range: [2199, 2201],
      loc: {
        start: {
          line: 82,
          column: 10,
        },
        end: {
          line: 82,
          column: 12,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [2202, 2203],
      loc: {
        start: {
          line: 82,
          column: 13,
        },
        end: {
          line: 82,
          column: 14,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2203, 2204],
      loc: {
        start: {
          line: 82,
          column: 14,
        },
        end: {
          line: 82,
          column: 15,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [2204, 2206],
      loc: {
        start: {
          line: 82,
          column: 15,
        },
        end: {
          line: 82,
          column: 17,
        },
      },
    },
    {
      type: "Punctuator",
      value: ",",
      range: [2206, 2207],
      loc: {
        start: {
          line: 82,
          column: 17,
        },
        end: {
          line: 82,
          column: 18,
        },
      },
    },
    {
      type: "Identifier",
      value: "u",
      range: [2208, 2209],
      loc: {
        start: {
          line: 82,
          column: 19,
        },
        end: {
          line: 82,
          column: 20,
        },
      },
    },
    {
      type: "Punctuator",
      value: ".",
      range: [2209, 2210],
      loc: {
        start: {
          line: 82,
          column: 20,
        },
        end: {
          line: 82,
          column: 21,
        },
      },
    },
    {
      type: "Identifier",
      value: "full_name",
      range: [2210, 2219],
      loc: {
        start: {
          line: 82,
          column: 21,
        },
        end: {
          line: 82,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2219, 2220],
      loc: {
        start: {
          line: 82,
          column: 30,
        },
        end: {
          line: 82,
          column: 31,
        },
      },
    },
    {
      type: "Keyword",
      value: "COMMIT",
      range: [2221, 2227],
      loc: {
        start: {
          line: 83,
          column: 0,
        },
        end: {
          line: 83,
          column: 6,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2227, 2228],
      loc: {
        start: {
          line: 83,
          column: 6,
        },
        end: {
          line: 83,
          column: 7,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Prepared transactions (2PC)",
      range: [2230, 2260],
      loc: {
        start: {
          line: 85,
          column: 0,
        },
        end: {
          line: 85,
          column: 30,
        },
      },
    },
    {
      type: "Identifier",
      value: "PREPARE",
      range: [2261, 2268],
      loc: {
        start: {
          line: 86,
          column: 0,
        },
        end: {
          line: 86,
          column: 7,
        },
      },
    },
    {
      type: "Keyword",
      value: "TRANSACTION",
      range: [2269, 2280],
      loc: {
        start: {
          line: 86,
          column: 8,
        },
        end: {
          line: 86,
          column: 19,
        },
      },
    },
    {
      type: "String",
      value: "'transfer_funds_1'",
      range: [2281, 2299],
      loc: {
        start: {
          line: 86,
          column: 20,
        },
        end: {
          line: 86,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2299, 2300],
      loc: {
        start: {
          line: 86,
          column: 38,
        },
        end: {
          line: 86,
          column: 39,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Later...",
      range: [2302, 2313],
      loc: {
        start: {
          line: 88,
          column: 0,
        },
        end: {
          line: 88,
          column: 11,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- COMMIT PREPARED 'transfer_funds_1';",
      range: [2314, 2352],
      loc: {
        start: {
          line: 89,
          column: 0,
        },
        end: {
          line: 89,
          column: 38,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- or",
      range: [2353, 2358],
      loc: {
        start: {
          line: 90,
          column: 0,
        },
        end: {
          line: 90,
          column: 5,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- ROLLBACK PREPARED 'transfer_funds_1';",
      range: [2359, 2399],
      loc: {
        start: {
          line: 91,
          column: 0,
        },
        end: {
          line: 91,
          column: 40,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Advisory locks",
      range: [2401, 2418],
      loc: {
        start: {
          line: 93,
          column: 0,
        },
        end: {
          line: 93,
          column: 17,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [2419, 2425],
      loc: {
        start: {
          line: 94,
          column: 0,
        },
        end: {
          line: 94,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "pg_advisory_lock",
      range: [2426, 2442],
      loc: {
        start: {
          line: 94,
          column: 7,
        },
        end: {
          line: 94,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2442, 2443],
      loc: {
        start: {
          line: 94,
          column: 23,
        },
        end: {
          line: 94,
          column: 24,
        },
      },
    },
    {
      type: "Numeric",
      value: "12345",
      range: [2443, 2448],
      loc: {
        start: {
          line: 94,
          column: 24,
        },
        end: {
          line: 94,
          column: 29,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2448, 2449],
      loc: {
        start: {
          line: 94,
          column: 29,
        },
        end: {
          line: 94,
          column: 30,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2449, 2450],
      loc: {
        start: {
          line: 94,
          column: 30,
        },
        end: {
          line: 94,
          column: 31,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Critical section",
      range: [2452, 2471],
      loc: {
        start: {
          line: 96,
          column: 0,
        },
        end: {
          line: 96,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "UPDATE",
      range: [2472, 2478],
      loc: {
        start: {
          line: 97,
          column: 0,
        },
        end: {
          line: 97,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "accounts",
      range: [2479, 2487],
      loc: {
        start: {
          line: 97,
          column: 7,
        },
        end: {
          line: 97,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "SET",
      range: [2489, 2492],
      loc: {
        start: {
          line: 98,
          column: 0,
        },
        end: {
          line: 98,
          column: 3,
        },
      },
    },
    {
      type: "Identifier",
      value: "balance",
      range: [2493, 2500],
      loc: {
        start: {
          line: 98,
          column: 4,
        },
        end: {
          line: 98,
          column: 11,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2501, 2502],
      loc: {
        start: {
          line: 98,
          column: 12,
        },
        end: {
          line: 98,
          column: 13,
        },
      },
    },
    {
      type: "Identifier",
      value: "balance",
      range: [2503, 2510],
      loc: {
        start: {
          line: 98,
          column: 14,
        },
        end: {
          line: 98,
          column: 21,
        },
      },
    },
    {
      type: "Operator",
      value: "-",
      range: [2511, 2512],
      loc: {
        start: {
          line: 98,
          column: 22,
        },
        end: {
          line: 98,
          column: 23,
        },
      },
    },
    {
      type: "Numeric",
      value: "100",
      range: [2513, 2516],
      loc: {
        start: {
          line: 98,
          column: 24,
        },
        end: {
          line: 98,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [2518, 2523],
      loc: {
        start: {
          line: 99,
          column: 0,
        },
        end: {
          line: 99,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [2524, 2526],
      loc: {
        start: {
          line: 99,
          column: 6,
        },
        end: {
          line: 99,
          column: 8,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2527, 2528],
      loc: {
        start: {
          line: 99,
          column: 9,
        },
        end: {
          line: 99,
          column: 10,
        },
      },
    },
    {
      type: "Numeric",
      value: "1",
      range: [2529, 2530],
      loc: {
        start: {
          line: 99,
          column: 11,
        },
        end: {
          line: 99,
          column: 12,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2530, 2531],
      loc: {
        start: {
          line: 99,
          column: 12,
        },
        end: {
          line: 99,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "UPDATE",
      range: [2533, 2539],
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
      value: "accounts",
      range: [2540, 2548],
      loc: {
        start: {
          line: 101,
          column: 7,
        },
        end: {
          line: 101,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "SET",
      range: [2550, 2553],
      loc: {
        start: {
          line: 102,
          column: 0,
        },
        end: {
          line: 102,
          column: 3,
        },
      },
    },
    {
      type: "Identifier",
      value: "balance",
      range: [2554, 2561],
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
      range: [2562, 2563],
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
      type: "Identifier",
      value: "balance",
      range: [2564, 2571],
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
      type: "Operator",
      value: "+",
      range: [2572, 2573],
      loc: {
        start: {
          line: 102,
          column: 22,
        },
        end: {
          line: 102,
          column: 23,
        },
      },
    },
    {
      type: "Numeric",
      value: "100",
      range: [2574, 2577],
      loc: {
        start: {
          line: 102,
          column: 24,
        },
        end: {
          line: 102,
          column: 27,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [2579, 2584],
      loc: {
        start: {
          line: 103,
          column: 0,
        },
        end: {
          line: 103,
          column: 5,
        },
      },
    },
    {
      type: "Identifier",
      value: "id",
      range: [2585, 2587],
      loc: {
        start: {
          line: 103,
          column: 6,
        },
        end: {
          line: 103,
          column: 8,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2588, 2589],
      loc: {
        start: {
          line: 103,
          column: 9,
        },
        end: {
          line: 103,
          column: 10,
        },
      },
    },
    {
      type: "Numeric",
      value: "2",
      range: [2590, 2591],
      loc: {
        start: {
          line: 103,
          column: 11,
        },
        end: {
          line: 103,
          column: 12,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2591, 2592],
      loc: {
        start: {
          line: 103,
          column: 12,
        },
        end: {
          line: 103,
          column: 13,
        },
      },
    },
    {
      type: "Keyword",
      value: "SELECT",
      range: [2594, 2600],
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
      value: "pg_advisory_unlock",
      range: [2601, 2619],
      loc: {
        start: {
          line: 105,
          column: 7,
        },
        end: {
          line: 105,
          column: 25,
        },
      },
    },
    {
      type: "Punctuator",
      value: "(",
      range: [2619, 2620],
      loc: {
        start: {
          line: 105,
          column: 25,
        },
        end: {
          line: 105,
          column: 26,
        },
      },
    },
    {
      type: "Numeric",
      value: "12345",
      range: [2620, 2625],
      loc: {
        start: {
          line: 105,
          column: 26,
        },
        end: {
          line: 105,
          column: 31,
        },
      },
    },
    {
      type: "Punctuator",
      value: ")",
      range: [2625, 2626],
      loc: {
        start: {
          line: 105,
          column: 31,
        },
        end: {
          line: 105,
          column: 32,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2626, 2627],
      loc: {
        start: {
          line: 105,
          column: 32,
        },
        end: {
          line: 105,
          column: 33,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Lock timeout",
      range: [2629, 2644],
      loc: {
        start: {
          line: 107,
          column: 0,
        },
        end: {
          line: 107,
          column: 15,
        },
      },
    },
    {
      type: "Keyword",
      value: "SET",
      range: [2645, 2648],
      loc: {
        start: {
          line: 108,
          column: 0,
        },
        end: {
          line: 108,
          column: 3,
        },
      },
    },
    {
      type: "Identifier",
      value: "lock_timeout",
      range: [2649, 2661],
      loc: {
        start: {
          line: 108,
          column: 4,
        },
        end: {
          line: 108,
          column: 16,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2662, 2663],
      loc: {
        start: {
          line: 108,
          column: 17,
        },
        end: {
          line: 108,
          column: 18,
        },
      },
    },
    {
      type: "String",
      value: "'5s'",
      range: [2664, 2668],
      loc: {
        start: {
          line: 108,
          column: 19,
        },
        end: {
          line: 108,
          column: 23,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2668, 2669],
      loc: {
        start: {
          line: 108,
          column: 23,
        },
        end: {
          line: 108,
          column: 24,
        },
      },
    },
    {
      type: "Keyword",
      value: "BEGIN",
      range: [2671, 2676],
      loc: {
        start: {
          line: 110,
          column: 0,
        },
        end: {
          line: 110,
          column: 5,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2676, 2677],
      loc: {
        start: {
          line: 110,
          column: 5,
        },
        end: {
          line: 110,
          column: 6,
        },
      },
    },
    {
      type: "Identifier",
      value: "LOCK",
      range: [2682, 2686],
      loc: {
        start: {
          line: 111,
          column: 4,
        },
        end: {
          line: 111,
          column: 8,
        },
      },
    },
    {
      type: "Keyword",
      value: "TABLE",
      range: [2687, 2692],
      loc: {
        start: {
          line: 111,
          column: 9,
        },
        end: {
          line: 111,
          column: 14,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [2693, 2698],
      loc: {
        start: {
          line: 111,
          column: 15,
        },
        end: {
          line: 111,
          column: 20,
        },
      },
    },
    {
      type: "Keyword",
      value: "IN",
      range: [2699, 2701],
      loc: {
        start: {
          line: 111,
          column: 21,
        },
        end: {
          line: 111,
          column: 23,
        },
      },
    },
    {
      type: "Identifier",
      value: "EXCLUSIVE",
      range: [2702, 2711],
      loc: {
        start: {
          line: 111,
          column: 24,
        },
        end: {
          line: 111,
          column: 33,
        },
      },
    },
    {
      type: "Identifier",
      value: "MODE",
      range: [2712, 2716],
      loc: {
        start: {
          line: 111,
          column: 34,
        },
        end: {
          line: 111,
          column: 38,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2716, 2717],
      loc: {
        start: {
          line: 111,
          column: 38,
        },
        end: {
          line: 111,
          column: 39,
        },
      },
    },
    {
      type: "LineComment",
      value: "-- Do some work",
      range: [2722, 2737],
      loc: {
        start: {
          line: 112,
          column: 4,
        },
        end: {
          line: 112,
          column: 19,
        },
      },
    },
    {
      type: "Keyword",
      value: "UPDATE",
      range: [2742, 2748],
      loc: {
        start: {
          line: 113,
          column: 4,
        },
        end: {
          line: 113,
          column: 10,
        },
      },
    },
    {
      type: "Identifier",
      value: "users",
      range: [2749, 2754],
      loc: {
        start: {
          line: 113,
          column: 11,
        },
        end: {
          line: 113,
          column: 16,
        },
      },
    },
    {
      type: "Keyword",
      value: "SET",
      range: [2755, 2758],
      loc: {
        start: {
          line: 113,
          column: 17,
        },
        end: {
          line: 113,
          column: 20,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [2759, 2765],
      loc: {
        start: {
          line: 113,
          column: 21,
        },
        end: {
          line: 113,
          column: 27,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2766, 2767],
      loc: {
        start: {
          line: 113,
          column: 28,
        },
        end: {
          line: 113,
          column: 29,
        },
      },
    },
    {
      type: "String",
      value: "'maintenance'",
      range: [2768, 2781],
      loc: {
        start: {
          line: 113,
          column: 30,
        },
        end: {
          line: 113,
          column: 43,
        },
      },
    },
    {
      type: "Keyword",
      value: "WHERE",
      range: [2782, 2787],
      loc: {
        start: {
          line: 113,
          column: 44,
        },
        end: {
          line: 113,
          column: 49,
        },
      },
    },
    {
      type: "Identifier",
      value: "status",
      range: [2788, 2794],
      loc: {
        start: {
          line: 113,
          column: 50,
        },
        end: {
          line: 113,
          column: 56,
        },
      },
    },
    {
      type: "Operator",
      value: "=",
      range: [2795, 2796],
      loc: {
        start: {
          line: 113,
          column: 57,
        },
        end: {
          line: 113,
          column: 58,
        },
      },
    },
    {
      type: "String",
      value: "'active'",
      range: [2797, 2805],
      loc: {
        start: {
          line: 113,
          column: 59,
        },
        end: {
          line: 113,
          column: 67,
        },
      },
    },
    {
      type: "Punctuator",
      value: ";",
      range: [2805, 2806],
      loc: {
        start: {
          line: 113,
          column: 67,
        },
        end: {
          line: 113,
          column: 68,
        },
      },
    },
    {
      type: "Keyword",
      value: "COMMIT",
      range: [2807, 2813],
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
      type: "Punctuator",
      value: ";",
      range: [2813, 2814],
      loc: {
        start: {
          line: 114,
          column: 6,
        },
        end: {
          line: 114,
          column: 7,
        },
      },
    },
  ],
  comments: [],
} satisfies Program;
