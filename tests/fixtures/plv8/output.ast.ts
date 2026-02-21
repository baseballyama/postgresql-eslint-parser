import type { Program } from '../../../src/ast.ts';

export default {
  "type": "Program",
  "range": [
    0,
    2015
  ],
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 68,
      "column": 18
    }
  },
  "body": [
    {
      "type": "CreateFunctionStmt",
      "replace": true,
      "funcname": [
        {
          "type": "String",
          "sval": "plv8_test",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        }
      ],
      "returnType": {
        "0": {
          "type": "String",
          "sval": "text",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        },
        "typemod": -1,
        "type": "names",
        "range": [
          81,
          85
        ],
        "loc": {
          "start": {
            "line": 2,
            "column": 47
          },
          "end": {
            "line": 2,
            "column": 51
          }
        }
      },
      "options": [
        {
          "type": "DefElem",
          "defname": "as",
          "arg": {
            "type": "List",
            "items": [
              {
                "type": "String",
                "sval": "\n    return \"Hello from PLV8!\";\n",
                "range": [
                  0,
                  0
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                }
              }
            ],
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            86,
            88
          ],
          "loc": {
            "start": {
              "line": 2,
              "column": 52
            },
            "end": {
              "line": 2,
              "column": 54
            }
          }
        },
        {
          "type": "DefElem",
          "defname": "language",
          "arg": {
            "type": "String",
            "sval": "plv8",
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            126,
            134
          ],
          "loc": {
            "start": {
              "line": 4,
              "column": 3
            },
            "end": {
              "line": 4,
              "column": 11
            }
          }
        },
        {
          "type": "DefElem",
          "defname": "volatility",
          "arg": {
            "type": "String",
            "sval": "immutable",
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            140,
            149
          ],
          "loc": {
            "start": {
              "line": 4,
              "column": 17
            },
            "end": {
              "line": 4,
              "column": 26
            }
          }
        },
        {
          "type": "DefElem",
          "defname": "strict",
          "arg": {
            "type": "Boolean",
            "boolval": true,
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            150,
            156
          ],
          "loc": {
            "start": {
              "line": 4,
              "column": 27
            },
            "end": {
              "line": 4,
              "column": 33
            }
          }
        }
      ],
      "range": [
        0,
        156
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 4,
          "column": 33
        }
      }
    },
    {
      "type": "CreateFunctionStmt",
      "replace": true,
      "funcname": [
        {
          "type": "String",
          "sval": "json_manipulate",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        }
      ],
      "parameters": [
        {
          "type": "FunctionParameter",
          "name": "input_json",
          "argType": {
            "0": {
              "type": "String",
              "sval": "pg_catalog",
              "range": [
                0,
                0
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 0
                }
              }
            },
            "1": {
              "type": "String",
              "sval": "json",
              "range": [
                0,
                0
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 0
                }
              }
            },
            "typemod": -1,
            "type": "names",
            "range": [
              213,
              217
            ],
            "loc": {
              "start": {
                "line": 6,
                "column": 54
              },
              "end": {
                "line": 6,
                "column": 58
              }
            }
          },
          "mode": "FUNC_PARAM_DEFAULT",
          "range": [
            0,
            217
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 58
            }
          }
        }
      ],
      "returnType": {
        "0": {
          "type": "String",
          "sval": "pg_catalog",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        },
        "1": {
          "type": "String",
          "sval": "json",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        },
        "typemod": -1,
        "type": "names",
        "range": [
          227,
          231
        ],
        "loc": {
          "start": {
            "line": 7,
            "column": 8
          },
          "end": {
            "line": 7,
            "column": 12
          }
        }
      },
      "options": [
        {
          "type": "DefElem",
          "defname": "as",
          "arg": {
            "type": "List",
            "items": [
              {
                "type": "String",
                "sval": "\n    var obj = JSON.parse(input_json);\n    obj.processed = true;\n    obj.timestamp = new Date().toISOString();\n    return JSON.stringify(obj);\n",
                "range": [
                  0,
                  0
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                }
              }
            ],
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            232,
            234
          ],
          "loc": {
            "start": {
              "line": 7,
              "column": 13
            },
            "end": {
              "line": 7,
              "column": 15
            }
          }
        },
        {
          "type": "DefElem",
          "defname": "language",
          "arg": {
            "type": "String",
            "sval": "plv8",
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            383,
            391
          ],
          "loc": {
            "start": {
              "line": 12,
              "column": 3
            },
            "end": {
              "line": 12,
              "column": 11
            }
          }
        }
      ],
      "range": [
        0,
        391
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 12,
          "column": 11
        }
      }
    },
    {
      "type": "CreateFunctionStmt",
      "replace": true,
      "funcname": [
        {
          "type": "String",
          "sval": "calculate_distance",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        }
      ],
      "parameters": [
        {
          "type": "FunctionParameter",
          "name": "lat1",
          "argType": {
            "0": {
              "type": "String",
              "sval": "pg_catalog",
              "range": [
                0,
                0
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 0
                }
              }
            },
            "1": {
              "type": "String",
              "sval": "float8",
              "range": [
                0,
                0
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 0
                }
              }
            },
            "typemod": -1,
            "type": "names",
            "range": [
              450,
              455
            ],
            "loc": {
              "start": {
                "line": 14,
                "column": 51
              },
              "end": {
                "line": 14,
                "column": 56
              }
            }
          },
          "mode": "FUNC_PARAM_DEFAULT",
          "range": [
            0,
            455
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 56
            }
          }
        },
        {
          "type": "FunctionParameter",
          "name": "lon1",
          "argType": {
            "0": {
              "type": "String",
              "sval": "pg_catalog",
              "range": [
                0,
                0
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 0
                }
              }
            },
            "1": {
              "type": "String",
              "sval": "float8",
              "range": [
                0,
                0
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 0
                }
              }
            },
            "typemod": -1,
            "type": "names",
            "range": [
              462,
              467
            ],
            "loc": {
              "start": {
                "line": 14,
                "column": 63
              },
              "end": {
                "line": 14,
                "column": 68
              }
            }
          },
          "mode": "FUNC_PARAM_DEFAULT",
          "range": [
            0,
            467
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 68
            }
          }
        },
        {
          "type": "FunctionParameter",
          "name": "lat2",
          "argType": {
            "0": {
              "type": "String",
              "sval": "pg_catalog",
              "range": [
                0,
                0
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 0
                }
              }
            },
            "1": {
              "type": "String",
              "sval": "float8",
              "range": [
                0,
                0
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 0
                }
              }
            },
            "typemod": -1,
            "type": "names",
            "range": [
              474,
              479
            ],
            "loc": {
              "start": {
                "line": 14,
                "column": 75
              },
              "end": {
                "line": 14,
                "column": 80
              }
            }
          },
          "mode": "FUNC_PARAM_DEFAULT",
          "range": [
            0,
            479
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 80
            }
          }
        },
        {
          "type": "FunctionParameter",
          "name": "lon2",
          "argType": {
            "0": {
              "type": "String",
              "sval": "pg_catalog",
              "range": [
                0,
                0
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 0
                }
              }
            },
            "1": {
              "type": "String",
              "sval": "float8",
              "range": [
                0,
                0
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 0
                }
              }
            },
            "typemod": -1,
            "type": "names",
            "range": [
              486,
              491
            ],
            "loc": {
              "start": {
                "line": 14,
                "column": 87
              },
              "end": {
                "line": 14,
                "column": 92
              }
            }
          },
          "mode": "FUNC_PARAM_DEFAULT",
          "range": [
            0,
            491
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 92
            }
          }
        }
      ],
      "returnType": {
        "0": {
          "type": "String",
          "sval": "pg_catalog",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        },
        "1": {
          "type": "String",
          "sval": "float8",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        },
        "typemod": -1,
        "type": "names",
        "range": [
          501,
          506
        ],
        "loc": {
          "start": {
            "line": 15,
            "column": 8
          },
          "end": {
            "line": 15,
            "column": 13
          }
        }
      },
      "options": [
        {
          "type": "DefElem",
          "defname": "as",
          "arg": {
            "type": "List",
            "items": [
              {
                "type": "String",
                "sval": "\n    function toRadians(degrees) {\n        return degrees * (Math.PI / 180);\n    }\n    \n    var R = 6371; // Earth's radius in kilometers\n    var dLat = toRadians(lat2 - lat1);\n    var dLon = toRadians(lon2 - lon1);\n    \n    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +\n            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *\n            Math.sin(dLon/2) * Math.sin(dLon/2);\n    \n    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));\n    var distance = R * c;\n    \n    return distance;\n",
                "range": [
                  0,
                  0
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                }
              }
            ],
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            507,
            509
          ],
          "loc": {
            "start": {
              "line": 15,
              "column": 14
            },
            "end": {
              "line": 15,
              "column": 16
            }
          }
        },
        {
          "type": "DefElem",
          "defname": "language",
          "arg": {
            "type": "String",
            "sval": "plv8",
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            1018,
            1018
          ],
          "loc": {
            "start": {
              "line": 32,
              "column": 3
            },
            "end": {
              "line": 32,
              "column": 3
            }
          }
        },
        {
          "type": "DefElem",
          "defname": "volatility",
          "arg": {
            "type": "String",
            "sval": "immutable",
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            1032,
            1032
          ],
          "loc": {
            "start": {
              "line": 32,
              "column": 17
            },
            "end": {
              "line": 32,
              "column": 17
            }
          }
        },
        {
          "type": "DefElem",
          "defname": "strict",
          "arg": {
            "type": "Boolean",
            "boolval": true,
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            1042,
            1042
          ],
          "loc": {
            "start": {
              "line": 32,
              "column": 27
            },
            "end": {
              "line": 32,
              "column": 27
            }
          }
        }
      ],
      "range": [
        0,
        1042
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 32,
          "column": 27
        }
      }
    },
    {
      "type": "CreateFunctionStmt",
      "replace": true,
      "funcname": [
        {
          "type": "String",
          "sval": "get_user_stats",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        }
      ],
      "returnType": {
        "0": {
          "type": "String",
          "sval": "pg_catalog",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        },
        "1": {
          "type": "String",
          "sval": "json",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        },
        "typemod": -1,
        "type": "names",
        "range": [
          1132,
          1132
        ],
        "loc": {
          "start": {
            "line": 36,
            "column": 8
          },
          "end": {
            "line": 36,
            "column": 8
          }
        }
      },
      "options": [
        {
          "type": "DefElem",
          "defname": "as",
          "arg": {
            "type": "List",
            "items": [
              {
                "type": "String",
                "sval": "\n    var result = plv8.execute('SELECT status, COUNT(*) as count FROM users GROUP BY status');\n    var stats = {};\n    \n    for (var i = 0; i < result.length; i++) {\n        stats[result[i].status] = result[i].count;\n    }\n    \n    return JSON.stringify({\n        total_users: result.reduce(function(sum, row) { return sum + row.count; }, 0),\n        by_status: stats,\n        generated_at: new Date().toISOString()\n    });\n",
                "range": [
                  0,
                  0
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                }
              }
            ],
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            1137,
            1137
          ],
          "loc": {
            "start": {
              "line": 36,
              "column": 13
            },
            "end": {
              "line": 36,
              "column": 13
            }
          }
        },
        {
          "type": "DefElem",
          "defname": "language",
          "arg": {
            "type": "String",
            "sval": "plv8",
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            1569,
            1569
          ],
          "loc": {
            "start": {
              "line": 49,
              "column": 3
            },
            "end": {
              "line": 49,
              "column": 3
            }
          }
        }
      ],
      "range": [
        0,
        1569
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 49,
          "column": 3
        }
      }
    },
    {
      "type": "CreateFunctionStmt",
      "replace": true,
      "funcname": [
        {
          "type": "String",
          "sval": "audit_trigger",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        }
      ],
      "returnType": {
        "0": {
          "type": "String",
          "sval": "trigger",
          "range": [
            0,
            0
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 0
            }
          }
        },
        "typemod": -1,
        "type": "names",
        "range": [
          1661,
          1661
        ],
        "loc": {
          "start": {
            "line": 53,
            "column": 8
          },
          "end": {
            "line": 53,
            "column": 8
          }
        }
      },
      "options": [
        {
          "type": "DefElem",
          "defname": "as",
          "arg": {
            "type": "List",
            "items": [
              {
                "type": "String",
                "sval": "\n    var audit_data = {\n        table_name: TG_TABLE_NAME,\n        operation: TG_OP,\n        timestamp: new Date().toISOString(),\n        old_data: OLD,\n        new_data: NEW\n    };\n    \n    plv8.execute(\n        'INSERT INTO audit_log (data) VALUES ($1)',\n        [JSON.stringify(audit_data)]\n    );\n    \n    return null;\n",
                "range": [
                  0,
                  0
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 0
                  }
                }
              }
            ],
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            1669,
            1669
          ],
          "loc": {
            "start": {
              "line": 53,
              "column": 16
            },
            "end": {
              "line": 53,
              "column": 16
            }
          }
        },
        {
          "type": "DefElem",
          "defname": "language",
          "arg": {
            "type": "String",
            "sval": "plv8",
            "range": [
              0,
              0
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 0
              }
            }
          },
          "defaction": "DEFELEM_UNSPEC",
          "range": [
            2000,
            2000
          ],
          "loc": {
            "start": {
              "line": 68,
              "column": 3
            },
            "end": {
              "line": 68,
              "column": 3
            }
          }
        }
      ],
      "range": [
        0,
        2000
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 68,
          "column": 3
        }
      }
    }
  ],
  "tokens": [
    {
      "type": "Keyword",
      "value": "CREATE",
      "range": [
        34,
        40
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 6
        }
      }
    },
    {
      "type": "Keyword",
      "value": "OR",
      "range": [
        41,
        43
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 7
        },
        "end": {
          "line": 2,
          "column": 9
        }
      }
    },
    {
      "type": "Identifier",
      "value": "REPLACE",
      "range": [
        44,
        51
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 10
        },
        "end": {
          "line": 2,
          "column": 17
        }
      }
    },
    {
      "type": "Keyword",
      "value": "FUNCTION",
      "range": [
        52,
        60
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 18
        },
        "end": {
          "line": 2,
          "column": 26
        }
      }
    },
    {
      "type": "Identifier",
      "value": "plv8_test",
      "range": [
        61,
        70
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 27
        },
        "end": {
          "line": 2,
          "column": 36
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        70,
        71
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 36
        },
        "end": {
          "line": 2,
          "column": 37
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        71,
        72
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 37
        },
        "end": {
          "line": 2,
          "column": 38
        }
      }
    },
    {
      "type": "Keyword",
      "value": "RETURNS",
      "range": [
        73,
        80
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 39
        },
        "end": {
          "line": 2,
          "column": 46
        }
      }
    },
    {
      "type": "Keyword",
      "value": "text",
      "range": [
        81,
        85
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 47
        },
        "end": {
          "line": 2,
          "column": 51
        }
      }
    },
    {
      "type": "Keyword",
      "value": "AS",
      "range": [
        86,
        88
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 52
        },
        "end": {
          "line": 2,
          "column": 54
        }
      }
    },
    {
      "type": "Keyword",
      "value": "return",
      "range": [
        96,
        102
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 4
        },
        "end": {
          "line": 3,
          "column": 10
        }
      }
    },
    {
      "type": "String",
      "value": "\"Hello from PLV8!\"",
      "range": [
        103,
        121
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 11
        },
        "end": {
          "line": 3,
          "column": 29
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        121,
        122
      ],
      "loc": {
        "start": {
          "line": 3,
          "column": 29
        },
        "end": {
          "line": 3,
          "column": 30
        }
      }
    },
    {
      "type": "Keyword",
      "value": "LANGUAGE",
      "range": [
        126,
        134
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 3
        },
        "end": {
          "line": 4,
          "column": 11
        }
      }
    },
    {
      "type": "Identifier",
      "value": "plv8",
      "range": [
        135,
        139
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 12
        },
        "end": {
          "line": 4,
          "column": 16
        }
      }
    },
    {
      "type": "Keyword",
      "value": "IMMUTABLE",
      "range": [
        140,
        149
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 17
        },
        "end": {
          "line": 4,
          "column": 26
        }
      }
    },
    {
      "type": "Keyword",
      "value": "STRICT",
      "range": [
        150,
        156
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 27
        },
        "end": {
          "line": 4,
          "column": 33
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        156,
        157
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 33
        },
        "end": {
          "line": 4,
          "column": 34
        }
      }
    },
    {
      "type": "Keyword",
      "value": "CREATE",
      "range": [
        159,
        165
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 0
        },
        "end": {
          "line": 6,
          "column": 6
        }
      }
    },
    {
      "type": "Keyword",
      "value": "OR",
      "range": [
        166,
        168
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 7
        },
        "end": {
          "line": 6,
          "column": 9
        }
      }
    },
    {
      "type": "Identifier",
      "value": "REPLACE",
      "range": [
        169,
        176
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 10
        },
        "end": {
          "line": 6,
          "column": 17
        }
      }
    },
    {
      "type": "Keyword",
      "value": "FUNCTION",
      "range": [
        177,
        185
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 18
        },
        "end": {
          "line": 6,
          "column": 26
        }
      }
    },
    {
      "type": "Identifier",
      "value": "json_manipulate",
      "range": [
        186,
        201
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 27
        },
        "end": {
          "line": 6,
          "column": 42
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        201,
        202
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 42
        },
        "end": {
          "line": 6,
          "column": 43
        }
      }
    },
    {
      "type": "Identifier",
      "value": "input_json",
      "range": [
        202,
        212
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 43
        },
        "end": {
          "line": 6,
          "column": 53
        }
      }
    },
    {
      "type": "Keyword",
      "value": "JSON",
      "range": [
        213,
        217
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 54
        },
        "end": {
          "line": 6,
          "column": 58
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        217,
        218
      ],
      "loc": {
        "start": {
          "line": 6,
          "column": 58
        },
        "end": {
          "line": 6,
          "column": 59
        }
      }
    },
    {
      "type": "Keyword",
      "value": "RETURNS",
      "range": [
        219,
        226
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 0
        },
        "end": {
          "line": 7,
          "column": 7
        }
      }
    },
    {
      "type": "Keyword",
      "value": "JSON",
      "range": [
        227,
        231
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 8
        },
        "end": {
          "line": 7,
          "column": 12
        }
      }
    },
    {
      "type": "Keyword",
      "value": "AS",
      "range": [
        232,
        234
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 13
        },
        "end": {
          "line": 7,
          "column": 15
        }
      }
    },
    {
      "type": "Identifier",
      "value": "var",
      "range": [
        242,
        245
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 4
        },
        "end": {
          "line": 8,
          "column": 7
        }
      }
    },
    {
      "type": "Identifier",
      "value": "obj",
      "range": [
        246,
        249
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 8
        },
        "end": {
          "line": 8,
          "column": 11
        }
      }
    },
    {
      "type": "Operator",
      "value": "=",
      "range": [
        250,
        251
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 12
        },
        "end": {
          "line": 8,
          "column": 13
        }
      }
    },
    {
      "type": "Keyword",
      "value": "JSON",
      "range": [
        252,
        256
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 14
        },
        "end": {
          "line": 8,
          "column": 18
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        256,
        257
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 18
        },
        "end": {
          "line": 8,
          "column": 19
        }
      }
    },
    {
      "type": "Identifier",
      "value": "parse",
      "range": [
        257,
        262
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 19
        },
        "end": {
          "line": 8,
          "column": 24
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        262,
        263
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 24
        },
        "end": {
          "line": 8,
          "column": 25
        }
      }
    },
    {
      "type": "Identifier",
      "value": "input_json",
      "range": [
        263,
        273
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 25
        },
        "end": {
          "line": 8,
          "column": 35
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        273,
        274
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 35
        },
        "end": {
          "line": 8,
          "column": 36
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        274,
        275
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 36
        },
        "end": {
          "line": 8,
          "column": 37
        }
      }
    },
    {
      "type": "Identifier",
      "value": "obj",
      "range": [
        280,
        283
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 4
        },
        "end": {
          "line": 9,
          "column": 7
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        283,
        284
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 7
        },
        "end": {
          "line": 9,
          "column": 8
        }
      }
    },
    {
      "type": "Identifier",
      "value": "processed",
      "range": [
        284,
        293
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 8
        },
        "end": {
          "line": 9,
          "column": 17
        }
      }
    },
    {
      "type": "Operator",
      "value": "=",
      "range": [
        294,
        295
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 18
        },
        "end": {
          "line": 9,
          "column": 19
        }
      }
    },
    {
      "type": "Keyword",
      "value": "true",
      "range": [
        296,
        300
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 20
        },
        "end": {
          "line": 9,
          "column": 24
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        300,
        301
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 24
        },
        "end": {
          "line": 9,
          "column": 25
        }
      }
    },
    {
      "type": "Identifier",
      "value": "obj",
      "range": [
        306,
        309
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 4
        },
        "end": {
          "line": 10,
          "column": 7
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        309,
        310
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 7
        },
        "end": {
          "line": 10,
          "column": 8
        }
      }
    },
    {
      "type": "Keyword",
      "value": "timestamp",
      "range": [
        310,
        319
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 8
        },
        "end": {
          "line": 10,
          "column": 17
        }
      }
    },
    {
      "type": "Operator",
      "value": "=",
      "range": [
        320,
        321
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 18
        },
        "end": {
          "line": 10,
          "column": 19
        }
      }
    },
    {
      "type": "Identifier",
      "value": "new",
      "range": [
        322,
        325
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 20
        },
        "end": {
          "line": 10,
          "column": 23
        }
      }
    },
    {
      "type": "Keyword",
      "value": "Date",
      "range": [
        326,
        330
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 24
        },
        "end": {
          "line": 10,
          "column": 28
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        330,
        331
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 28
        },
        "end": {
          "line": 10,
          "column": 29
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        331,
        332
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 29
        },
        "end": {
          "line": 10,
          "column": 30
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        332,
        333
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 30
        },
        "end": {
          "line": 10,
          "column": 31
        }
      }
    },
    {
      "type": "Identifier",
      "value": "toISOString",
      "range": [
        333,
        344
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 31
        },
        "end": {
          "line": 10,
          "column": 42
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        344,
        345
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 42
        },
        "end": {
          "line": 10,
          "column": 43
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        345,
        346
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 43
        },
        "end": {
          "line": 10,
          "column": 44
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        346,
        347
      ],
      "loc": {
        "start": {
          "line": 10,
          "column": 44
        },
        "end": {
          "line": 10,
          "column": 45
        }
      }
    },
    {
      "type": "Keyword",
      "value": "return",
      "range": [
        352,
        358
      ],
      "loc": {
        "start": {
          "line": 11,
          "column": 4
        },
        "end": {
          "line": 11,
          "column": 10
        }
      }
    },
    {
      "type": "Keyword",
      "value": "JSON",
      "range": [
        359,
        363
      ],
      "loc": {
        "start": {
          "line": 11,
          "column": 11
        },
        "end": {
          "line": 11,
          "column": 15
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        363,
        364
      ],
      "loc": {
        "start": {
          "line": 11,
          "column": 15
        },
        "end": {
          "line": 11,
          "column": 16
        }
      }
    },
    {
      "type": "Identifier",
      "value": "stringify",
      "range": [
        364,
        373
      ],
      "loc": {
        "start": {
          "line": 11,
          "column": 16
        },
        "end": {
          "line": 11,
          "column": 25
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        373,
        374
      ],
      "loc": {
        "start": {
          "line": 11,
          "column": 25
        },
        "end": {
          "line": 11,
          "column": 26
        }
      }
    },
    {
      "type": "Identifier",
      "value": "obj",
      "range": [
        374,
        377
      ],
      "loc": {
        "start": {
          "line": 11,
          "column": 26
        },
        "end": {
          "line": 11,
          "column": 29
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        377,
        378
      ],
      "loc": {
        "start": {
          "line": 11,
          "column": 29
        },
        "end": {
          "line": 11,
          "column": 30
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        378,
        379
      ],
      "loc": {
        "start": {
          "line": 11,
          "column": 30
        },
        "end": {
          "line": 11,
          "column": 31
        }
      }
    },
    {
      "type": "Keyword",
      "value": "LANGUAGE",
      "range": [
        383,
        391
      ],
      "loc": {
        "start": {
          "line": 12,
          "column": 3
        },
        "end": {
          "line": 12,
          "column": 11
        }
      }
    },
    {
      "type": "Identifier",
      "value": "plv8",
      "range": [
        392,
        396
      ],
      "loc": {
        "start": {
          "line": 12,
          "column": 12
        },
        "end": {
          "line": 12,
          "column": 16
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        396,
        397
      ],
      "loc": {
        "start": {
          "line": 12,
          "column": 16
        },
        "end": {
          "line": 12,
          "column": 17
        }
      }
    },
    {
      "type": "Keyword",
      "value": "CREATE",
      "range": [
        399,
        405
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 0
        },
        "end": {
          "line": 14,
          "column": 6
        }
      }
    },
    {
      "type": "Keyword",
      "value": "OR",
      "range": [
        406,
        408
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 7
        },
        "end": {
          "line": 14,
          "column": 9
        }
      }
    },
    {
      "type": "Identifier",
      "value": "REPLACE",
      "range": [
        409,
        416
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 10
        },
        "end": {
          "line": 14,
          "column": 17
        }
      }
    },
    {
      "type": "Keyword",
      "value": "FUNCTION",
      "range": [
        417,
        425
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 18
        },
        "end": {
          "line": 14,
          "column": 26
        }
      }
    },
    {
      "type": "Identifier",
      "value": "calculate_distance",
      "range": [
        426,
        444
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 27
        },
        "end": {
          "line": 14,
          "column": 45
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        444,
        445
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 45
        },
        "end": {
          "line": 14,
          "column": 46
        }
      }
    },
    {
      "type": "Identifier",
      "value": "lat1",
      "range": [
        445,
        449
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 46
        },
        "end": {
          "line": 14,
          "column": 50
        }
      }
    },
    {
      "type": "Keyword",
      "value": "FLOAT",
      "range": [
        450,
        455
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 51
        },
        "end": {
          "line": 14,
          "column": 56
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        455,
        456
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 56
        },
        "end": {
          "line": 14,
          "column": 57
        }
      }
    },
    {
      "type": "Identifier",
      "value": "lon1",
      "range": [
        457,
        461
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 58
        },
        "end": {
          "line": 14,
          "column": 62
        }
      }
    },
    {
      "type": "Keyword",
      "value": "FLOAT",
      "range": [
        462,
        467
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 63
        },
        "end": {
          "line": 14,
          "column": 68
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        467,
        468
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 68
        },
        "end": {
          "line": 14,
          "column": 69
        }
      }
    },
    {
      "type": "Identifier",
      "value": "lat2",
      "range": [
        469,
        473
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 70
        },
        "end": {
          "line": 14,
          "column": 74
        }
      }
    },
    {
      "type": "Keyword",
      "value": "FLOAT",
      "range": [
        474,
        479
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 75
        },
        "end": {
          "line": 14,
          "column": 80
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        479,
        480
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 80
        },
        "end": {
          "line": 14,
          "column": 81
        }
      }
    },
    {
      "type": "Identifier",
      "value": "lon2",
      "range": [
        481,
        485
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 82
        },
        "end": {
          "line": 14,
          "column": 86
        }
      }
    },
    {
      "type": "Keyword",
      "value": "FLOAT",
      "range": [
        486,
        491
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 87
        },
        "end": {
          "line": 14,
          "column": 92
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        491,
        492
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 92
        },
        "end": {
          "line": 14,
          "column": 93
        }
      }
    },
    {
      "type": "Keyword",
      "value": "RETURNS",
      "range": [
        493,
        500
      ],
      "loc": {
        "start": {
          "line": 15,
          "column": 0
        },
        "end": {
          "line": 15,
          "column": 7
        }
      }
    },
    {
      "type": "Keyword",
      "value": "FLOAT",
      "range": [
        501,
        506
      ],
      "loc": {
        "start": {
          "line": 15,
          "column": 8
        },
        "end": {
          "line": 15,
          "column": 13
        }
      }
    },
    {
      "type": "Keyword",
      "value": "AS",
      "range": [
        507,
        509
      ],
      "loc": {
        "start": {
          "line": 15,
          "column": 14
        },
        "end": {
          "line": 15,
          "column": 16
        }
      }
    },
    {
      "type": "Keyword",
      "value": "function",
      "range": [
        517,
        525
      ],
      "loc": {
        "start": {
          "line": 16,
          "column": 4
        },
        "end": {
          "line": 16,
          "column": 12
        }
      }
    },
    {
      "type": "Identifier",
      "value": "toRadians",
      "range": [
        526,
        535
      ],
      "loc": {
        "start": {
          "line": 16,
          "column": 13
        },
        "end": {
          "line": 16,
          "column": 22
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        535,
        536
      ],
      "loc": {
        "start": {
          "line": 16,
          "column": 22
        },
        "end": {
          "line": 16,
          "column": 23
        }
      }
    },
    {
      "type": "Identifier",
      "value": "degrees",
      "range": [
        536,
        543
      ],
      "loc": {
        "start": {
          "line": 16,
          "column": 23
        },
        "end": {
          "line": 16,
          "column": 30
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        543,
        544
      ],
      "loc": {
        "start": {
          "line": 16,
          "column": 30
        },
        "end": {
          "line": 16,
          "column": 31
        }
      }
    },
    {
      "type": "Keyword",
      "value": "return",
      "range": [
        555,
        561
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 8
        },
        "end": {
          "line": 17,
          "column": 14
        }
      }
    },
    {
      "type": "Identifier",
      "value": "degrees",
      "range": [
        562,
        569
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 15
        },
        "end": {
          "line": 17,
          "column": 22
        }
      }
    },
    {
      "type": "Operator",
      "value": "*",
      "range": [
        570,
        571
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 23
        },
        "end": {
          "line": 17,
          "column": 24
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        572,
        573
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 25
        },
        "end": {
          "line": 17,
          "column": 26
        }
      }
    },
    {
      "type": "Identifier",
      "value": "Math",
      "range": [
        573,
        577
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 26
        },
        "end": {
          "line": 17,
          "column": 30
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ".",
      "range": [
        577,
        578
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 30
        },
        "end": {
          "line": 17,
          "column": 31
        }
      }
    },
    {
      "type": "Identifier",
      "value": "PI",
      "range": [
        578,
        580
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 31
        },
        "end": {
          "line": 17,
          "column": 33
        }
      }
    },
    {
      "type": "Operator",
      "value": "/",
      "range": [
        581,
        582
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 34
        },
        "end": {
          "line": 17,
          "column": 35
        }
      }
    },
    {
      "type": "Numeric",
      "value": "180",
      "range": [
        583,
        586
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 36
        },
        "end": {
          "line": 17,
          "column": 39
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        586,
        587
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 39
        },
        "end": {
          "line": 17,
          "column": 40
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        587,
        588
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 40
        },
        "end": {
          "line": 17,
          "column": 41
        }
      }
    },
    {
      "type": "Identifier",
      "value": "var",
      "range": [
        604,
        607
      ],
      "loc": {
        "start": {
          "line": 20,
          "column": 4
        },
        "end": {
          "line": 20,
          "column": 7
        }
      }
    },
    {
      "type": "Identifier",
      "value": "R",
      "range": [
        608,
        609
      ],
      "loc": {
        "start": {
          "line": 20,
          "column": 8
        },
        "end": {
          "line": 20,
          "column": 9
        }
      }
    },
    {
      "type": "Operator",
      "value": "=",
      "range": [
        610,
        611
      ],
      "loc": {
        "start": {
          "line": 20,
          "column": 10
        },
        "end": {
          "line": 20,
          "column": 11
        }
      }
    },
    {
      "type": "Numeric",
      "value": "6371",
      "range": [
        612,
        616
      ],
      "loc": {
        "start": {
          "line": 20,
          "column": 12
        },
        "end": {
          "line": 20,
          "column": 16
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ";",
      "range": [
        616,
        617
      ],
      "loc": {
        "start": {
          "line": 20,
          "column": 16
        },
        "end": {
          "line": 20,
          "column": 17
        }
      }
    },
    {
      "type": "Operator",
      "value": "/",
      "range": [
        618,
        619
      ],
      "loc": {
        "start": {
          "line": 20,
          "column": 18
        },
        "end": {
          "line": 20,
          "column": 19
        }
      }
    },
    {
      "type": "Operator",
      "value": "/",
      "range": [
        619,
        620
      ],
      "loc": {
        "start": {
          "line": 20,
          "column": 19
        },
        "end": {
          "line": 20,
          "column": 20
        }
      }
    },
    {
      "type": "Identifier",
      "value": "Earth",
      "range": [
        621,
        626
      ],
      "loc": {
        "start": {
          "line": 20,
          "column": 21
        },
        "end": {
          "line": 20,
          "column": 26
        }
      }
    },
    {
      "type": "String",
      "value": "'s radius in kilometers\n    var dLat = toRadians(lat2 - lat1);\n    var dLon = toRadians(lon2 - lon1);\n    \n    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +\n            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *\n            Math.sin(dLon/2) * Math.sin(dLon/2);\n    \n    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));\n    var distance = R * c;\n    \n    return distance;\n$$ LANGUAGE plv8 IMMUTABLE STRICT;\n\n-- PLV8 with database access\nCREATE OR REPLACE FUNCTION get_user_stats()\nRETURNS JSON AS $$\n    var result = plv8.execute('",
      "range": [
        626,
        1174
      ],
      "loc": {
        "start": {
          "line": 20,
          "column": 26
        },
        "end": {
          "line": 37,
          "column": 31
        }
      }
    },
    {
      "type": "Keyword",
      "value": "SELECT",
      "range": [
        1174,
        1180
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 31
        },
        "end": {
          "line": 37,
          "column": 37
        }
      }
    },
    {
      "type": "Identifier",
      "value": "status",
      "range": [
        1181,
        1187
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 38
        },
        "end": {
          "line": 37,
          "column": 44
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ",",
      "range": [
        1187,
        1188
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 44
        },
        "end": {
          "line": 37,
          "column": 45
        }
      }
    },
    {
      "type": "Keyword",
      "value": "COUNT",
      "range": [
        1189,
        1194
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 46
        },
        "end": {
          "line": 37,
          "column": 51
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        1194,
        1195
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 51
        },
        "end": {
          "line": 37,
          "column": 52
        }
      }
    },
    {
      "type": "Operator",
      "value": "*",
      "range": [
        1195,
        1196
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 52
        },
        "end": {
          "line": 37,
          "column": 53
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        1196,
        1197
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 53
        },
        "end": {
          "line": 37,
          "column": 54
        }
      }
    },
    {
      "type": "Keyword",
      "value": "as",
      "range": [
        1198,
        1200
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 55
        },
        "end": {
          "line": 37,
          "column": 57
        }
      }
    },
    {
      "type": "Keyword",
      "value": "count",
      "range": [
        1201,
        1206
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 58
        },
        "end": {
          "line": 37,
          "column": 63
        }
      }
    },
    {
      "type": "Keyword",
      "value": "FROM",
      "range": [
        1207,
        1211
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 64
        },
        "end": {
          "line": 37,
          "column": 68
        }
      }
    },
    {
      "type": "Identifier",
      "value": "users",
      "range": [
        1212,
        1217
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 69
        },
        "end": {
          "line": 37,
          "column": 74
        }
      }
    },
    {
      "type": "Keyword",
      "value": "GROUP",
      "range": [
        1218,
        1223
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 75
        },
        "end": {
          "line": 37,
          "column": 80
        }
      }
    },
    {
      "type": "Keyword",
      "value": "BY",
      "range": [
        1224,
        1226
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 81
        },
        "end": {
          "line": 37,
          "column": 83
        }
      }
    },
    {
      "type": "Identifier",
      "value": "status",
      "range": [
        1227,
        1233
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 84
        },
        "end": {
          "line": 37,
          "column": 90
        }
      }
    },
    {
      "type": "String",
      "value": "');\n    var stats = {};\n    \n    for (var i = 0; i < result.length; i++) {\n        stats[result[i].status] = result[i].count;\n    }\n    \n    return JSON.stringify({\n        total_users: result.reduce(function(sum, row) { return sum + row.count; }, 0),\n        by_status: stats,\n        generated_at: new Date().toISOString()\n    });\n$$ LANGUAGE plv8;\n\n-- PLV8 trigger function\nCREATE OR REPLACE FUNCTION audit_trigger()\nRETURNS TRIGGER AS $$\n    var audit_data = {\n        table_name: TG_TABLE_NAME,\n        operation: TG_OP,\n        timestamp: new Date().toISOString(),\n        old_data: OLD,\n        new_data: NEW\n    };\n    \n    plv8.execute(\n        '",
      "range": [
        1233,
        1888
      ],
      "loc": {
        "start": {
          "line": 37,
          "column": 90
        },
        "end": {
          "line": 63,
          "column": 9
        }
      }
    },
    {
      "type": "Keyword",
      "value": "INSERT",
      "range": [
        1888,
        1894
      ],
      "loc": {
        "start": {
          "line": 63,
          "column": 9
        },
        "end": {
          "line": 63,
          "column": 15
        }
      }
    },
    {
      "type": "Keyword",
      "value": "INTO",
      "range": [
        1895,
        1899
      ],
      "loc": {
        "start": {
          "line": 63,
          "column": 16
        },
        "end": {
          "line": 63,
          "column": 20
        }
      }
    },
    {
      "type": "Identifier",
      "value": "audit_log",
      "range": [
        1900,
        1909
      ],
      "loc": {
        "start": {
          "line": 63,
          "column": 21
        },
        "end": {
          "line": 63,
          "column": 30
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        1910,
        1911
      ],
      "loc": {
        "start": {
          "line": 63,
          "column": 31
        },
        "end": {
          "line": 63,
          "column": 32
        }
      }
    },
    {
      "type": "Identifier",
      "value": "data",
      "range": [
        1911,
        1915
      ],
      "loc": {
        "start": {
          "line": 63,
          "column": 32
        },
        "end": {
          "line": 63,
          "column": 36
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        1915,
        1916
      ],
      "loc": {
        "start": {
          "line": 63,
          "column": 36
        },
        "end": {
          "line": 63,
          "column": 37
        }
      }
    },
    {
      "type": "Keyword",
      "value": "VALUES",
      "range": [
        1917,
        1923
      ],
      "loc": {
        "start": {
          "line": 63,
          "column": 38
        },
        "end": {
          "line": 63,
          "column": 44
        }
      }
    },
    {
      "type": "Punctuator",
      "value": "(",
      "range": [
        1924,
        1925
      ],
      "loc": {
        "start": {
          "line": 63,
          "column": 45
        },
        "end": {
          "line": 63,
          "column": 46
        }
      }
    },
    {
      "type": "Numeric",
      "value": "1",
      "range": [
        1926,
        1927
      ],
      "loc": {
        "start": {
          "line": 63,
          "column": 47
        },
        "end": {
          "line": 63,
          "column": 48
        }
      }
    },
    {
      "type": "Punctuator",
      "value": ")",
      "range": [
        1927,
        1928
      ],
      "loc": {
        "start": {
          "line": 63,
          "column": 48
        },
        "end": {
          "line": 63,
          "column": 49
        }
      }
    },
    {
      "type": "String",
      "value": "',\n        [JSON.stringify(audit_data)]\n    );\n    \n    return null;\n$$ LANGUAGE plv8; ",
      "range": [
        1928,
        2015
      ],
      "loc": {
        "start": {
          "line": 63,
          "column": 49
        },
        "end": {
          "line": 68,
          "column": 18
        }
      }
    }
  ],
  "comments": [
    {
      "type": "Line",
      "value": " PLV8 JavaScript functions test",
      "range": [
        0,
        33
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 33
        }
      }
    }
  ]
} satisfies Program;
