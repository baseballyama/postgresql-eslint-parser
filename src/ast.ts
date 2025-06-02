/**
 * SQL ESLint Parser AST Definitions
 * Based on PostgreSQL node definitions from https://github.com/postgres/postgres/tree/master/src/include/nodes
 */

// ================================================================
// Base Types and Location Information
// ================================================================

export interface Location {
  line: number;
  column: number;
}

export interface SourceLocation {
  start: Location;
  end: Location;
}

export type Range = [number, number];

// ================================================================
// Base Node Interface (from nodes.h)
// ================================================================

export interface BaseNode {
  type: string;
  range: Range;
  loc: SourceLocation;
  parent?: SQLStatementNode | Program;
}

// ================================================================
// Node Tag Enums (from nodes.h NodeTag enum)
// ================================================================

export type NodeTag =
  // Base
  | "Invalid"

  // Parse nodes (from parsenodes.h)
  | "Query"
  | "PlannedStmt"
  | "InsertStmt"
  | "DeleteStmt"
  | "UpdateStmt"
  | "MergeStmt"
  | "SelectStmt"
  | "SetOperationStmt"
  | "AlterTableStmt"
  | "AlterTableCmd"
  | "AlterDomainStmt"
  | "GrantStmt"
  | "GrantRoleStmt"
  | "AlterDefaultPrivilegesStmt"
  | "ClosePortalStmt"
  | "ClusterStmt"
  | "CopyStmt"
  | "CreateStmt"
  | "CreateTableAsStmt"
  | "CreateSeqStmt"
  | "AlterSeqStmt"
  | "VariableSetStmt"
  | "VariableShowStmt"
  | "DiscardStmt"
  | "CreateTrigStmt"
  | "CreatePLangStmt"
  | "CreateRoleStmt"
  | "AlterRoleStmt"
  | "DropRoleStmt"
  | "LockStmt"
  | "ConstraintsSetStmt"
  | "ReindexStmt"
  | "CheckPointStmt"
  | "CreateSchemaStmt"
  | "AlterDatabaseStmt"
  | "AlterDatabaseRefreshCollStmt"
  | "AlterDatabaseSetStmt"
  | "AlterRoleSetStmt"
  | "CreateConversionStmt"
  | "CreateCastStmt"
  | "CreateOpClassStmt"
  | "CreateOpFamilyStmt"
  | "AlterOpFamilyStmt"
  | "PrepareStmt"
  | "ExecuteStmt"
  | "DeallocateStmt"
  | "DeclareCursorStmt"
  | "CreateTableSpaceStmt"
  | "DropTableSpaceStmt"
  | "AlterObjectDependsStmt"
  | "AlterObjectSchemaStmt"
  | "AlterOwnerStmt"
  | "AlterOperatorStmt"
  | "AlterTypeStmt"
  | "DropStmt"
  | "TruncateStmt"
  | "CommentStmt"
  | "FetchStmt"
  | "IndexStmt"
  | "CreateFunctionStmt"
  | "AlterFunctionStmt"
  | "DoStmt"
  | "RenameStmt"
  | "RuleStmt"
  | "NotifyStmt"
  | "ListenStmt"
  | "UnlistenStmt"
  | "TransactionStmt"
  | "ViewStmt"
  | "LoadStmt"
  | "CreateDomainStmt"
  | "CreatedbStmt"
  | "DropdbStmt"
  | "VacuumStmt"
  | "ExplainStmt"
  | "RefreshMatViewStmt"
  | "ReplicaIdentityStmt"
  | "AlterSystemStmt"
  | "CreatePolicyStmt"
  | "AlterPolicyStmt"
  | "CreateTransformStmt"
  | "CreateAmStmt"
  | "CreatePublicationStmt"
  | "AlterPublicationStmt"
  | "CreateSubscriptionStmt"
  | "AlterSubscriptionStmt"
  | "DropSubscriptionStmt"
  | "CreateStatsStmt"
  | "AlterCollationStmt"
  | "CallStmt"
  | "AlterStatsStmt"
  | "CreateExtensionStmt"
  | "AlterExtensionStmt"
  | "AlterExtensionContentsStmt"

  // Expression nodes (from primnodes.h)
  | "Var"
  | "Const"
  | "Param"
  | "Aggref"
  | "GroupingFunc"
  | "WindowFunc"
  | "MergeSupportFunc"
  | "SubscriptingRef"
  | "FuncExpr"
  | "NamedArgExpr"
  | "OpExpr"
  | "DistinctExpr"
  | "NullIfExpr"
  | "ScalarArrayOpExpr"
  | "BoolExpr"
  | "SubLink"
  | "SubPlan"
  | "AlternativeSubPlan"
  | "FieldSelect"
  | "FieldStore"
  | "RelabelType"
  | "CoerceViaIO"
  | "ArrayCoerceExpr"
  | "ConvertRowtypeExpr"
  | "CollateExpr"
  | "CaseExpr"
  | "CaseWhen"
  | "CaseTestExpr"
  | "ArrayExpr"
  | "RowExpr"
  | "RowCompareExpr"
  | "CoalesceExpr"
  | "MinMaxExpr"
  | "SQLValueFunction"
  | "XmlExpr"
  | "JsonFormat"
  | "JsonReturning"
  | "JsonValueExpr"
  | "JsonConstructorExpr"
  | "JsonIsPredicate"
  | "JsonBehavior"
  | "JsonExpr"
  | "NullTest"
  | "BooleanTest"
  | "CoerceToDomain"
  | "CoerceToDomainValue"
  | "SetToDefault"
  | "CurrentOfExpr"
  | "NextValueExpr"
  | "InferenceElem"
  | "TargetEntry"
  | "RangeTblRef"
  | "JoinExpr"
  | "FromExpr"
  | "OnConflictExpr"
  | "IntoClause"
  | "MergeAction"
  | "ReturningExpr"

  // Value nodes (from value.h)
  | "Integer"
  | "Float"
  | "Boolean"
  | "String"
  | "BitString"
  | "Null"

  // Parse tree nodes
  | "A_Expr"
  | "A_Const"
  | "A_Star"
  | "A_Indices"
  | "A_Indirection"
  | "A_ArrayExpr"
  | "ResTarget"
  | "MultiAssignRef"
  | "TypeCast"
  | "CollateClause"
  | "SortBy"
  | "WindowDef"
  | "RangeSubselect"
  | "RangeFunction"
  | "RangeTableSample"
  | "RangeTableFunc"
  | "RangeTableFuncCol"
  | "TypeName"
  | "ColumnDef"
  | "IndexElem"
  | "Constraint"
  | "DefElem"
  | "RangeTblEntry"
  | "RangeTblFunction"
  | "TableSampleClause"
  | "WithCheckOption"
  | "SortGroupClause"
  | "GroupingSet"
  | "WindowClause"
  | "ObjectWithArgs"
  | "AccessPriv"
  | "CreateOpClassItem"
  | "TableLikeClause"
  | "FunctionParameter"
  | "LockingClause"
  | "RowMarkClause"
  | "XmlSerialize"
  | "WithClause"
  | "InferClause"
  | "OnConflictClause"
  | "CommonTableExpr"
  | "RoleSpec"
  | "TriggerTransition"
  | "PartitionElem"
  | "PartitionSpec"
  | "PartitionBoundSpec"
  | "PartitionRangeDatum"
  | "PartitionCmd"
  | "VacuumRelation"
  | "InlineCodeBlock"
  | "CallContext"

  // Identifiers and refs
  | "Alias"
  | "RangeVar"
  | "TableFunc"
  | "Expr"
  | "ColumnRef"
  | "ParamRef"
  | "FuncCall"
  | "List";

// ================================================================
// Common Enums from PostgreSQL headers
// ================================================================

// From nodes.h
export type CmdType =
  | "CMD_UNKNOWN"
  | "CMD_SELECT"
  | "CMD_UPDATE"
  | "CMD_INSERT"
  | "CMD_DELETE"
  | "CMD_MERGE"
  | "CMD_UTILITY"
  | "CMD_NOTHING";

export type JoinType =
  | "JOIN_INNER"
  | "JOIN_LEFT"
  | "JOIN_FULL"
  | "JOIN_RIGHT"
  | "JOIN_SEMI"
  | "JOIN_ANTI"
  | "JOIN_RIGHT_SEMI"
  | "JOIN_RIGHT_ANTI"
  | "JOIN_UNIQUE_OUTER"
  | "JOIN_UNIQUE_INNER";

// From parsenodes.h
export type QuerySource =
  | "QSRC_ORIGINAL"
  | "QSRC_PARSER"
  | "QSRC_INSTEAD_RULE"
  | "QSRC_QUAL_INSTEAD_RULE"
  | "QSRC_NON_INSTEAD_RULE";

export type SortByDir =
  | "SORTBY_DEFAULT"
  | "SORTBY_ASC"
  | "SORTBY_DESC"
  | "SORTBY_USING";

export type SortByNulls =
  | "SORTBY_NULLS_DEFAULT"
  | "SORTBY_NULLS_FIRST"
  | "SORTBY_NULLS_LAST";

export type SetQuantifier =
  | "SET_QUANTIFIER_DEFAULT"
  | "SET_QUANTIFIER_ALL"
  | "SET_QUANTIFIER_DISTINCT";

// From parsenodes.h A_Expr_Kind
export type A_Expr_Kind =
  | "AEXPR_OP"
  | "AEXPR_OP_ANY"
  | "AEXPR_OP_ALL"
  | "AEXPR_DISTINCT"
  | "AEXPR_NOT_DISTINCT"
  | "AEXPR_NULLIF"
  | "AEXPR_IN"
  | "AEXPR_LIKE"
  | "AEXPR_ILIKE"
  | "AEXPR_SIMILAR"
  | "AEXPR_BETWEEN"
  | "AEXPR_NOT_BETWEEN"
  | "AEXPR_BETWEEN_SYM"
  | "AEXPR_NOT_BETWEEN_SYM";

// From primnodes.h
export type CoercionForm =
  | "COERCE_EXPLICIT_CALL"
  | "COERCE_EXPLICIT_CAST"
  | "COERCE_IMPLICIT_CAST"
  | "COERCE_SQL_SYNTAX";

export type CoercionContext =
  | "COERCION_IMPLICIT"
  | "COERCION_ASSIGNMENT"
  | "COERCION_PLPGSQL"
  | "COERCION_EXPLICIT";

export type BoolExprType = "AND_EXPR" | "OR_EXPR" | "NOT_EXPR";

export type SubLinkType =
  | "EXISTS_SUBLINK"
  | "ALL_SUBLINK"
  | "ANY_SUBLINK"
  | "ROWCOMPARE_SUBLINK"
  | "EXPR_SUBLINK"
  | "MULTIEXPR_SUBLINK"
  | "ARRAY_SUBLINK"
  | "CTE_SUBLINK"
  | "SCALAR_SUBLINK";

export type DefElemAction =
  | "DEFELEM_UNSPEC"
  | "DEFELEM_SET"
  | "DEFELEM_ADD"
  | "DEFELEM_DROP";

export type ConstraintType =
  | "CONSTR_NULL"
  | "CONSTR_NOTNULL"
  | "CONSTR_DEFAULT"
  | "CONSTR_IDENTITY"
  | "CONSTR_GENERATED"
  | "CONSTR_CHECK"
  | "CONSTR_PRIMARY"
  | "CONSTR_UNIQUE"
  | "CONSTR_EXCLUSION"
  | "CONSTR_FOREIGN"
  | "CONSTR_ATTR_DEFERRABLE"
  | "CONSTR_ATTR_NOT_DEFERRABLE"
  | "CONSTR_ATTR_DEFERRED"
  | "CONSTR_ATTR_IMMEDIATE";

// ================================================================
// Value Node Types (from value.h)
// ================================================================

export interface IntegerNode extends BaseNode {
  type: "Integer";
  ival: number;
}

export interface FloatNode extends BaseNode {
  type: "Float";
  fval: string;
}

export interface BooleanNode extends BaseNode {
  type: "Boolean";
  boolval: boolean;
}

export interface StringNode extends BaseNode {
  type: "String";
  sval: string;
}

export interface BitStringNode extends BaseNode {
  type: "BitString";
  bsval: string;
}

export interface NullNode extends BaseNode {
  type: "Null";
}

export type ValueNode =
  | IntegerNode
  | FloatNode
  | BooleanNode
  | StringNode
  | BitStringNode
  | NullNode;

// ================================================================
// Base Expression Interface (from primnodes.h)
// ================================================================

export type Expr = BaseNode;

// ================================================================
// Core AST Structure
// ================================================================

// SQLParseError for syntax errors
export interface SQLParseError extends BaseNode {
  type: "SQLParseError";
  error: string;
  raw: string;
}

export interface Program extends BaseNode {
  type: "Program";
  body: (SQLStatementNode | SQLParseError)[];
  tokens?: unknown[];
  comments?: unknown[];
}

export interface SQLStatement extends BaseNode {
  type: "SQLStatement";
  statement: SQLStatementNode;
}

// ================================================================
// Statement Node Union Type
// ================================================================

export type SQLStatementNode =
  | CreateExtensionStmt
  | CreateStmt
  | CreateTableAsStmt
  | SelectStmt
  | InsertStmt
  | UpdateStmt
  | DeleteStmt
  | DropStmt
  | AlterTableStmt
  | CreateIndexStmt
  | CreateFunctionStmt
  | CreateViewStmt
  | CreateSequenceStmt
  | TransactionStmt
  | VariableSetStmt
  | VariableShowStmt
  | ExplainStmt
  | VacuumStmt
  | CreateDatabaseStmt
  | DropDatabaseStmt
  | CreateRoleStmt
  | DropRoleStmt
  | GrantStmt
  | RevokeStmt
  | CreateSchemaStmt
  | DropSchemaStmt
  | CommentStmt
  | CopyStmt
  | TruncateStmt
  | AnalyzeStmt
  | ClusterStmt
  | ReindexStmt
  | CheckPointStmt
  | DiscardStmt
  | DoStmt
  | CreateTriggerStmt
  | DropTriggerStmt
  | AlterTriggerStmt
  | CreateRuleStmt
  | DropRuleStmt
  | ListenStmt
  | UnlistenStmt
  | NotifyStmt
  | PrepareStmt
  | ExecuteStmt
  | DeallocateStmt
  | CreateConversionStmt
  | CreateCastStmt
  | CreateOpClassStmt
  | CreateOpFamilyStmt
  | AlterOpFamilyStmt
  | DeclareCursorStmt
  | ClosePortalStmt
  | FetchStmt
  | LockStmt
  | ConstraintsSetStmt
  | AlterDatabaseStmt
  | RefreshMatViewStmt
  | CreatePolicyStmt
  | AlterPolicyStmt
  | CreateTransformStmt
  | CreateAmStmt
  | CreatePublicationStmt
  | AlterPublicationStmt
  | CreateSubscriptionStmt
  | AlterSubscriptionStmt
  | DropSubscriptionStmt
  | CreateStatsStmt
  | CallStmt
  | AlterStatsStmt
  // PostgreSQL specific statement types
  | IndexStmtPG
  | RenameStmtPG
  | CreateEnumStmtPG
  | AlterEnumStmtPG
  | CreateTrigStmtPG
  | CreateForeignServerStmtPG
  | CreateUserMappingStmtPG
  | CreateForeignTableStmtPG
  | ViewStmtPG
  | CreateDomainStmtPG
  | CompositeTypeStmtPG
  | CreateRangeStmtPG;

// ================================================================
// Statement Implementations (Core ones first)
// ================================================================

export interface CreateExtensionStmt extends BaseNode {
  type: "CreateExtensionStmt";
  range: Range;
  loc: SourceLocation;
  extname: string;
  if_not_exists?: boolean;
  cascade?: boolean;
  options?: DefElem[];
}

export interface CreateStmt extends BaseNode {
  type: "CreateStmt";
  relation: RangeVar | RelnamePG | SchemanamePG | RelationNode;
  tableElts?: TableElement[];
  inhRelations?: InheritRelation[];
  partbound?: PartitionBoundSpec;
  partspec?: PartitionSpec;
  ofTypename?: TypeName;
  constraints?: Constraint[];
  options?: DefElem[];
  oncommit?: OnCommitAction | string;
  tablespacename?: string;
  accessMethod?: string;
  if_not_exists?: boolean;
  [key: string]: unknown;
}

export interface SelectStmt extends BaseNode {
  type: "SelectStmt";
  distinctClause?: (DistinctClause | DistinctClauseNode)[];
  intoClause?: IntoClause;
  targetList?: (ResTarget | ListPG)[];
  fromClause?: (FromClause | ListPG)[];
  whereClause?: Node;
  groupClause?: (GroupClause | ListPG)[];
  groupDistinct?: boolean;
  havingClause?: Node;
  windowClause?: WindowClause[];
  sortClause?: SortClause[];
  limitOffset?: Node;
  limitCount?: Node;
  limitOption?: LimitOption | string;
  lockingClause?: LockingClause[];
  withClause?: WithClause;
  op?: SetOperation | string;
  all?: boolean;
  larg?: SelectStmt;
  rarg?: SelectStmt;
  valuesLists?: PostgreSQLValue;
}

export interface InsertStmt extends BaseNode {
  type: "InsertStmt";
  relation: RangeVar | RelnamePG | SchemanamePG | RelationNode;
  cols?: (ResTarget | ListPG)[];
  selectStmt?: SelectStmt;
  onConflictClause?: OnConflictClause;
  returningList?: (ResTarget | ListPG)[];
  withClause?: WithClause;
  override?: OverridingKind;
}

export interface UpdateStmt extends BaseNode {
  type: "UpdateStmt";
  relation: RangeVar | RelnamePG | SchemanamePG | RelationNode;
  targetList: (ResTarget | ListPG)[];
  whereClause?: Node;
  fromClause?: (FromClause | ListPG)[];
  returningList?: (ResTarget | ListPG)[];
  withClause?: WithClause;
}

export interface DeleteStmt extends BaseNode {
  type: "DeleteStmt";
  relation: RangeVar | RelnamePG | SchemanamePG | RelationNode;
  usingClause?: (FromClause | ListPG)[];
  whereClause?: Node;
  returningList?: (ResTarget | ListPG)[];
  withClause?: WithClause;
}

export interface AlterTableStmt extends BaseNode {
  type: "AlterTableStmt";
  relation: RangeVar | RelnamePG | SchemanamePG | RelationNode;
  cmds: (AlterTableCmd | ListPG)[];
  objtype?: ObjectType;
  missing_ok?: boolean;
}

export interface AlterTableCmd extends BaseNode {
  type: "AlterTableCmd";
  subtype?: AlterTableType;
  name?: string;
  num?: number;
  newowner?: RoleSpec;
  def?: Node | ListPG;
  behavior?: DropBehavior;
  missing_ok?: boolean;
}

export interface DropStmt extends BaseNode {
  type: "DropStmt";
  objects: PostgreSQLValue;
  removeType: ObjectType;
  behavior: DropBehavior;
  missing_ok?: boolean;
  concurrent?: boolean;
}

export interface CreateFunctionStmt extends BaseNode {
  type: "CreateFunctionStmt";
  is_procedure?: boolean;
  replace?: boolean;
  funcname?: (StringNode | ListPG)[];
  parameters?: (FunctionParameter | ListPG)[];
  returnType?: TypeName | NamesPG;
  options?: (DefElem | ListPG)[];
  sql_body?: Node;
}

export interface FunctionParameter extends BaseNode {
  type: "FunctionParameter";
  name?: string;
  argType?: TypeName | NamesPG;
  mode?: FunctionParameterMode;
  defexpr?: Node;
}

export type FunctionParameterMode =
  | "FUNC_PARAM_IN"
  | "FUNC_PARAM_OUT"
  | "FUNC_PARAM_INOUT"
  | "FUNC_PARAM_VARIADIC"
  | "FUNC_PARAM_TABLE"
  | "FUNC_PARAM_DEFAULT";

// ================================================================
// Supporting Type Definitions
// ================================================================

export interface RangeVar extends BaseNode {
  type: "RangeVar" | "schemaname";
  catalogname?: string;
  schemaname?: string;
  relname?: string;
  inh?: boolean;
  relpersistence?: string;
  alias?: Alias | AliasPG | AliasNode;
}

// PostgreSQL actual type name for relation references
export interface RelnamePG extends BaseNode {
  type: "relname" | "schemaname";
  catalogname?: string;
  schemaname?: string;
  relname?: string;
  inh?: boolean;
  relpersistence?: string;
  alias?: Alias | AliasPG | AliasNode;
}

export interface Alias extends BaseNode {
  type: "Alias";
  aliasname: string;
  colnames?: string[];
}

// PostgreSQL actual type name for alias
export interface AliasPG extends BaseNode {
  type: "aliasname";
  aliasname: string;
  colnames?: string[];
}

export interface TypeName extends BaseNode {
  type: "TypeName";
  names: StringNode[];
  typeOid?: number;
  setof?: boolean;
  pct_type?: boolean;
  typmods?: Node[];
  typemod?: number;
  arrayBounds?: ArrayBoundsElement[];
}

// PostgreSQL actual type name for type names (names array)
export interface NamesPG extends BaseNode {
  type: "names";
  names?: StringNode[];
  [key: string]: unknown; // For indexed access like "0", "1", etc.
  typeOid?: number;
  setof?: boolean;
  pct_type?: boolean;
  typmods?: Node[];
  typemod?: number;
  arrayBounds?: ArrayBoundsElement[];
}

export interface DefElem extends BaseNode {
  type: "DefElem";
  defnamespace?: string;
  defname?: string;
  arg?: Node;
  defaction?: DefElemAction;
  [key: string]: unknown; // Allow additional properties
}

export interface ColumnDef extends BaseNode {
  type: "ColumnDef";
  colname?: string;
  typeName?: TypeName | NamesPG;
  compression?: string;
  inhcount?: number;
  is_local?: boolean;
  is_not_null?: boolean;
  is_from_type?: boolean;
  storage?: string;
  storage_name?: string;
  raw_default?: Node;
  cooked_default?: Node;
  identity?: string;
  identitySequence?: RangeVar;
  generated?: string;
  collClause?: CollateClause;
  collOid?: number;
  constraints?: (Constraint | ListPG)[];
  fdwoptions?: DefElem[];
}

export interface ResTarget extends BaseNode {
  type: "ResTarget";
  name?: string;
  indirection?: Node[];
  val?: Node;
}

export interface A_Expr extends BaseNode {
  type: "A_Expr";
  kind: A_Expr_Kind;
  name?: StringNode[];
  lexpr?: Node;
  rexpr?: Node;
}

export interface A_Const extends BaseNode {
  type: "A_Const";
  val?: ValueNode;
  isnull?: boolean;
  ival?: IvalPG;
  fval?: FvalPG;
  sval?: SvalPG;
  boolval?: BoolvalPG;
}

export interface FuncCall extends BaseNode {
  type: "FuncCall";
  funcname?: StringNode[];
  args?: (Node | ListPG)[];
  agg_order?: SortBy[];
  agg_filter?: Node;
  over?: WindowDef;
  agg_within_group?: boolean;
  agg_star?: boolean;
  agg_distinct?: boolean;
  func_variadic?: boolean;
  funcformat?: CoercionForm;
}

export interface FuncCallNameItem extends BaseNode {
  type: "funcnameFuncnameItem";
  String: StringNode;
}

export interface FuncCallArgsItem extends BaseNode {
  type: "funcnameArgsItem";
  A_Const?: A_Const;
  [key: string]: unknown; // For other argument types
}

export interface ColumnRef extends BaseNode {
  type: "ColumnRef";
  fields: (StringNode | A_Star)[];
}

export interface A_Star extends BaseNode {
  type: "A_Star";
}

export interface Constraint extends BaseNode {
  type: "Constraint";
  contype: ConstraintType;
  conname?: string;
  deferrable?: boolean;
  initdeferred?: boolean;
  location?: number;
  is_no_inherit?: boolean;
  raw_expr?: Node;
  cooked_expr?: string;
  generated_when?: string;
  nulls_not_distinct?: boolean;
  keys?: (string | StringNode)[];
  including?: string[];
  exclusions?: (ExclusionConstraint | ListPG)[];
  options?: DefElem[];
  indexname?: string;
  indexspace?: string;
  reset_default_tblspc?: boolean;
  access_method?: string;
  where_clause?: Node;
  pktable?: RangeVar | RelnamePG | RelationNode;
  fk_attrs?: (string | StringNode)[];
  pk_attrs?: (string | StringNode)[];
  fk_matchtype?: string;
  fk_upd_action?: string;
  fk_del_action?: string;
  skip_validation?: boolean;
  initially_valid?: boolean;
}

// ================================================================
// Supporting interface definitions for complex types
// ================================================================

export interface SortBy extends BaseNode {
  type: "SortBy";
  node: Node;
  sortby_dir: SortByDir;
  sortby_nulls: SortByNulls;
  useOp?: StringNode[];
  name?: string;
  ordering?: string;
  nulls_ordering?: string;
}

export interface WindowDef extends BaseNode {
  type: "WindowDef";
  name?: string;
  refname?: string;
  partitionClause?: Node[];
  orderClause?: SortBy[];
  frameOptions?: number;
  startOffset?: Node;
  endOffset?: Node;
  [key: string]: unknown;
}

export interface CollateClause extends BaseNode {
  type: "CollateClause";
  arg: Node;
  collname: StringNode[];
}

export interface ArrayBounds extends BaseNode {
  type: "ArrayBounds";
  length?: number;
  location?: number;
}

export interface ExclusionConstraint extends BaseNode {
  type: "ExclusionConstraint";
  elem?: IndexElem;
  operator?: StringNode[];
}

export interface JoinExpr extends BaseNode {
  type: "JoinExpr";
  jointype: JoinType;
  isNatural?: boolean;
  larg: Node;
  rarg: Node;
  usingClause?: StringNode[];
  join_using_alias?: Alias;
  quals?: Node;
  alias?: Alias;
  rtindex?: number;
}

export interface RangeSubselect extends BaseNode {
  type: "RangeSubselect";
  lateral?: boolean;
  subquery: Node;
  alias?: Alias;
}

export interface RangeFunction extends BaseNode {
  type: "RangeFunction";
  lateral?: boolean;
  ordinality?: boolean;
  is_rowsfrom?: boolean;
  functions: Node[];
  alias?: Alias;
  coldeflist?: ColumnDef[];
}

// ================================================================
// Type aliases for complex types that need proper definitions later
// ================================================================

export type Node =
  | Expr
  | ValueNode
  | SQLStatementNode
  | RangeVar
  | RelnamePG
  | SchemanamePG
  | Alias
  | AliasPG
  | TypeName
  | NamesPG
  | DefElem
  | ColumnDef
  | ResTarget
  | A_Expr
  | A_ExprPG
  | A_Const
  | FuncCall
  | ColumnRef
  | A_Star
  | Constraint
  | SortBy
  | WindowDef
  | WindowDefPG
  | CollateClause
  | ArrayBounds
  | ExclusionConstraint
  | JoinExpr
  | RangeSubselect
  | RangeFunction
  | ListPG
  | SvalPG
  | IvalPG
  | FvalPG
  | BoolvalPG
  | BoolExprPG
  | SubLink
  | SQLValueFunctionPG
  | FlexibleNode;

// Create flexible types for PostgreSQL arrays that can contain List objects
export type PostgreSQLValue =
  | Node
  | ListPG
  | (Node | ListPG)[]
  | (Node | ListPG)[][];

// Update ListPG to be more flexible
export interface ListPG extends BaseNode {
  type: "List";
  items?: PostgreSQLValue;
  [key: string]: unknown; // Allow additional indexed properties
}

export type TableElement = ColumnDef | Constraint;
export type FromClause =
  | RangeVar
  | RelnamePG
  | SchemanamePG
  | JoinExpr
  | RangeSubselect
  | RangeFunction;

export interface DistinctClause extends BaseNode {
  type: "DistinctClause" | "Unknown";
}

export interface GroupClause extends BaseNode {
  type: "GroupClause" | "ColumnRef" | "FuncCall";
  fields?: (StringNode | A_Star)[];
  funcname?: StringNode[];
  args?: Node[];
  [key: string]: unknown;
}

export interface WindowClause extends BaseNode {
  type: "WindowClause" | "ctes";
}

export interface SortClause extends BaseNode {
  type: "SortClause" | "SortBy";
  node?: Node;
  sortby_dir?: SortByDir;
  sortby_nulls?: SortByNulls;
  useOp?: StringNode[];
  name?: string;
  ordering?: string;
  nulls_ordering?: string;
}

export interface LimitOption extends BaseNode {
  type: "LimitOption";
}

export interface LockingClause extends BaseNode {
  type: "LockingClause";
}

export interface WithClause extends BaseNode {
  type: "WithClause" | "ctes";
  [key: string]: unknown;
}

export interface SetOperation extends BaseNode {
  type: "SetOperation";
}

export interface InheritRelation extends BaseNode {
  type: "InheritRelation" | "RangeVar";
  catalogname?: string;
  schemaname?: string;
  relname?: string;
  inh?: boolean;
  relpersistence?: string;
  alias?: Alias;
}

export interface PartitionBoundSpec extends BaseNode {
  type: "PartitionBoundSpec" | "lowerdatums";
  [key: string]: unknown;
}

export interface PartitionSpec extends BaseNode {
  type: "PartitionSpec";
}

export interface OnCommitAction extends BaseNode {
  type: "OnCommitAction";
}

export interface IntoClause extends BaseNode {
  type: "IntoClause";
}

// Placeholder interfaces for other statement types
export interface CreateIndexStmt extends BaseNode {
  type: "CreateIndexStmt";
}
export interface CreateViewStmt extends BaseNode {
  type: "CreateViewStmt";
}
export interface CreateSequenceStmt extends BaseNode {
  type: "CreateSequenceStmt";
}
export interface TransactionStmt extends BaseNode {
  type: "TransactionStmt";
  kind?: string;
  [key: string]: unknown;
}
export interface VariableSetStmt extends BaseNode {
  type: "VariableSetStmt";
  kind?: string;
  [key: string]: unknown;
}
export interface VariableShowStmt extends BaseNode {
  type: "VariableShowStmt";
}
export interface ExplainStmt extends BaseNode {
  type: "ExplainStmt";
}
export interface VacuumStmt extends BaseNode {
  type: "VacuumStmt";
}
export interface CreateDatabaseStmt extends BaseNode {
  type: "CreateDatabaseStmt";
}
export interface DropDatabaseStmt extends BaseNode {
  type: "DropDatabaseStmt";
}
export interface CreateRoleStmt extends BaseNode {
  type: "CreateRoleStmt";
}
export interface DropRoleStmt extends BaseNode {
  type: "DropRoleStmt";
}
export interface GrantStmt extends BaseNode {
  type: "GrantStmt";
  is_grant?: boolean;
  [key: string]: unknown;
}
export interface RevokeStmt extends BaseNode {
  type: "RevokeStmt";
}
export interface CreateSchemaStmt extends BaseNode {
  type: "CreateSchemaStmt";
  schemaname?: string;
  [key: string]: unknown;
}
export interface DropSchemaStmt extends BaseNode {
  type: "DropSchemaStmt";
}
export interface CommentStmt extends BaseNode {
  type: "CommentStmt";
}
export interface CopyStmt extends BaseNode {
  type: "CopyStmt";
}
export interface TruncateStmt extends BaseNode {
  type: "TruncateStmt";
}
export interface AnalyzeStmt extends BaseNode {
  type: "AnalyzeStmt";
}
export interface ClusterStmt extends BaseNode {
  type: "ClusterStmt";
}
export interface ReindexStmt extends BaseNode {
  type: "ReindexStmt";
}
export interface CheckPointStmt extends BaseNode {
  type: "CheckPointStmt";
}
export interface DiscardStmt extends BaseNode {
  type: "DiscardStmt";
}
export interface DoStmt extends BaseNode {
  type: "DoStmt";
  args?: Node[];
  [key: string]: unknown;
}
export interface CreateTriggerStmt extends BaseNode {
  type: "CreateTriggerStmt";
}
export interface DropTriggerStmt extends BaseNode {
  type: "DropTriggerStmt";
}
export interface AlterTriggerStmt extends BaseNode {
  type: "AlterTriggerStmt";
}
export interface CreateRuleStmt extends BaseNode {
  type: "CreateRuleStmt";
}
export interface DropRuleStmt extends BaseNode {
  type: "DropRuleStmt";
}
export interface ListenStmt extends BaseNode {
  type: "ListenStmt";
}
export interface UnlistenStmt extends BaseNode {
  type: "UnlistenStmt";
}
export interface NotifyStmt extends BaseNode {
  type: "NotifyStmt";
}
export interface PrepareStmt extends BaseNode {
  type: "PrepareStmt";
}
export interface ExecuteStmt extends BaseNode {
  type: "ExecuteStmt";
}
export interface DeallocateStmt extends BaseNode {
  type: "DeallocateStmt";
}
export interface CreateConversionStmt extends BaseNode {
  type: "CreateConversionStmt";
}
export interface CreateCastStmt extends BaseNode {
  type: "CreateCastStmt";
}
export interface CreateOpClassStmt extends BaseNode {
  type: "CreateOpClassStmt";
}
export interface CreateOpFamilyStmt extends BaseNode {
  type: "CreateOpFamilyStmt";
}
export interface AlterOpFamilyStmt extends BaseNode {
  type: "AlterOpFamilyStmt";
}
export interface DeclareCursorStmt extends BaseNode {
  type: "DeclareCursorStmt";
}
export interface ClosePortalStmt extends BaseNode {
  type: "ClosePortalStmt";
}
export interface FetchStmt extends BaseNode {
  type: "FetchStmt";
}
export interface LockStmt extends BaseNode {
  type: "LockStmt";
  relations?: Node[];
  [key: string]: unknown;
}
export interface ConstraintsSetStmt extends BaseNode {
  type: "ConstraintsSetStmt";
}
export interface AlterDatabaseStmt extends BaseNode {
  type: "AlterDatabaseStmt";
}
export interface RefreshMatViewStmt extends BaseNode {
  type: "RefreshMatViewStmt";
}
export interface CreatePolicyStmt extends BaseNode {
  type: "CreatePolicyStmt";
  policy_name?: string;
  [key: string]: unknown;
}
export interface AlterPolicyStmt extends BaseNode {
  type: "AlterPolicyStmt";
}
export interface CreateTransformStmt extends BaseNode {
  type: "CreateTransformStmt";
}
export interface CreateAmStmt extends BaseNode {
  type: "CreateAmStmt";
}
export interface CreatePublicationStmt extends BaseNode {
  type: "CreatePublicationStmt";
}
export interface AlterPublicationStmt extends BaseNode {
  type: "AlterPublicationStmt";
}
export interface CreateSubscriptionStmt extends BaseNode {
  type: "CreateSubscriptionStmt";
}
export interface AlterSubscriptionStmt extends BaseNode {
  type: "AlterSubscriptionStmt";
}
export interface DropSubscriptionStmt extends BaseNode {
  type: "DropSubscriptionStmt";
}
export interface CreateStatsStmt extends BaseNode {
  type: "CreateStatsStmt";
}
export interface CallStmt extends BaseNode {
  type: "CallStmt";
}
export interface AlterStatsStmt extends BaseNode {
  type: "AlterStatsStmt";
}
export interface CreateTableAsStmt extends BaseNode {
  type: "CreateTableAsStmt";
  query?: SelectStmt;
  [key: string]: unknown;
}

export type OverridingKind =
  | "OVERRIDING_NOT_SET"
  | "OVERRIDING_USER_VALUE"
  | "OVERRIDING_SYSTEM_VALUE";

export type AlterTableType =
  | "AT_AddColumn"
  | "AT_AddColumnRecurse"
  | "AT_AddColumnToView"
  | "AT_ColumnDefault"
  | "AT_CookedColumnDefault"
  | "AT_DropNotNull"
  | "AT_SetNotNull"
  | "AT_DropExpression"
  | "AT_CheckNotNull"
  | "AT_SetStatistics"
  | "AT_SetOptions"
  | "AT_ResetOptions"
  | "AT_SetStorage"
  | "AT_SetCompression"
  | "AT_DropColumn"
  | "AT_DropColumnRecurse"
  | "AT_AddIndex"
  | "AT_ReAddIndex"
  | "AT_AddConstraint"
  | "AT_AddConstraintRecurse"
  | "AT_ReAddConstraint"
  | "AT_ReAddDomainConstraint"
  | "AT_AlterConstraint"
  | "AT_ValidateConstraint"
  | "AT_ValidateConstraintRecurse"
  | "AT_DropConstraint"
  | "AT_DropConstraintRecurse"
  | "AT_ReAddComment"
  | "AT_AlterColumnType"
  | "AT_AlterColumnGenericOptions"
  | "AT_ChangeOwner"
  | "AT_ClusterOn"
  | "AT_DropCluster"
  | "AT_SetLogged"
  | "AT_SetUnLogged"
  | "AT_DropOids"
  | "AT_SetAccessMethod"
  | "AT_SetTableSpace"
  | "AT_SetRelOptions"
  | "AT_ResetRelOptions"
  | "AT_ReplaceRelOptions"
  | "AT_EnableTrig"
  | "AT_EnableAlwaysTrig"
  | "AT_EnableReplicaTrig"
  | "AT_DisableTrig"
  | "AT_EnableTrigAll"
  | "AT_DisableTrigAll"
  | "AT_EnableTrigUser"
  | "AT_DisableTrigUser"
  | "AT_EnableRule"
  | "AT_EnableAlwaysRule"
  | "AT_EnableReplicaRule"
  | "AT_DisableRule"
  | "AT_AddInherit"
  | "AT_DropInherit"
  | "AT_AddOf"
  | "AT_DropOf"
  | "AT_ReplicaIdentity"
  | "AT_EnableRowSecurity"
  | "AT_DisableRowSecurity"
  | "AT_ForceRowSecurity"
  | "AT_NoForceRowSecurity"
  | "AT_GenericOptions"
  | "AT_AttachPartition"
  | "AT_DetachPartition"
  | "AT_DetachPartitionFinalize"
  | "AT_AddIdentity"
  | "AT_SetIdentity"
  | "AT_DropIdentity";

export type ObjectType =
  | "OBJECT_ACCESS_METHOD"
  | "OBJECT_AGGREGATE"
  | "OBJECT_AMOP"
  | "OBJECT_AMPROC"
  | "OBJECT_ATTRIBUTE"
  | "OBJECT_CAST"
  | "OBJECT_COLUMN"
  | "OBJECT_COLLATION"
  | "OBJECT_CONVERSION"
  | "OBJECT_DATABASE"
  | "OBJECT_DEFAULT"
  | "OBJECT_DEFACL"
  | "OBJECT_DOMAIN"
  | "OBJECT_DOMCONSTRAINT"
  | "OBJECT_EVENT_TRIGGER"
  | "OBJECT_EXTENSION"
  | "OBJECT_FDW"
  | "OBJECT_FOREIGN_SERVER"
  | "OBJECT_FOREIGN_TABLE"
  | "OBJECT_FUNCTION"
  | "OBJECT_INDEX"
  | "OBJECT_LANGUAGE"
  | "OBJECT_LARGEOBJECT"
  | "OBJECT_MATVIEW"
  | "OBJECT_OPCLASS"
  | "OBJECT_OPERATOR"
  | "OBJECT_OPFAMILY"
  | "OBJECT_POLICY"
  | "OBJECT_PROCEDURE"
  | "OBJECT_PUBLICATION"
  | "OBJECT_PUBLICATION_REL"
  | "OBJECT_ROLE"
  | "OBJECT_ROUTINE"
  | "OBJECT_RULE"
  | "OBJECT_SCHEMA"
  | "OBJECT_SEQUENCE"
  | "OBJECT_SUBSCRIPTION"
  | "OBJECT_STATISTIC_EXT"
  | "OBJECT_TABCONSTRAINT"
  | "OBJECT_TABLE"
  | "OBJECT_TABLESPACE"
  | "OBJECT_TRANSFORM"
  | "OBJECT_TRIGGER"
  | "OBJECT_TSCONFIGURATION"
  | "OBJECT_TSDICTIONARY"
  | "OBJECT_TSPARSER"
  | "OBJECT_TSTEMPLATE"
  | "OBJECT_TYPE"
  | "OBJECT_USER_MAPPING"
  | "OBJECT_VIEW";

export type DropBehavior = "DROP_RESTRICT" | "DROP_CASCADE";

export interface RoleSpec extends BaseNode {
  type: "RoleSpec";
  roletype: RoleSpecType;
  rolename?: string;
  location?: number;
}

export type RoleSpecType =
  | "ROLESPEC_CSTRING"
  | "ROLESPEC_CURRENT_ROLE"
  | "ROLESPEC_CURRENT_USER"
  | "ROLESPEC_SESSION_USER"
  | "ROLESPEC_PUBLIC";

export interface OnConflictClause extends BaseNode {
  type: "OnConflictClause";
  action: OnConflictAction;
  arbiter?: InferClause;
  targetList?: ResTarget[];
  whereClause?: Node;
}

export type OnConflictAction = "ONCONFLICT_NOTHING" | "ONCONFLICT_UPDATE";

export interface InferClause extends BaseNode {
  type: "InferClause";
  indexElems?: IndexElem[];
  whereClause?: Node;
  conname?: string;
}

export interface IndexElem extends BaseNode {
  type: "IndexElem";
  name?: string;
  expr?: Node;
  indexcolname?: string;
  collation?: StringNode[];
  opclass?: StringNode[];
  opclassopts?: DefElem[];
  ordering?: SortByDir;
  nulls_ordering?: SortByNulls;
}

// PostgreSQL specific statement interfaces
export interface IndexStmtPG extends BaseNode {
  type: "IndexStmt";
  relation?: RangeVar | RelnamePG | RelationNode;
  [key: string]: unknown;
}

export interface RenameStmtPG extends BaseNode {
  type: "RenameStmt";
  relation?: RangeVar | RelnamePG | RelationNode;
  [key: string]: unknown;
}

export interface CreateEnumStmtPG extends BaseNode {
  type: "CreateEnumStmt";
  [key: string]: unknown;
}

export interface AlterEnumStmtPG extends BaseNode {
  type: "AlterEnumStmt";
  [key: string]: unknown;
}

export interface CreateTrigStmtPG extends BaseNode {
  type: "CreateTrigStmt";
  [key: string]: unknown;
}

export interface CreateForeignServerStmtPG extends BaseNode {
  type: "CreateForeignServerStmt";
  [key: string]: unknown;
}

export interface CreateUserMappingStmtPG extends BaseNode {
  type: "CreateUserMappingStmt";
  [key: string]: unknown;
}

export interface CreateForeignTableStmtPG extends BaseNode {
  type: "CreateForeignTableStmt";
  [key: string]: unknown;
}

export interface ViewStmtPG extends BaseNode {
  type: "ViewStmt";
  [key: string]: unknown;
}

export interface CreateDomainStmtPG extends BaseNode {
  type: "CreateDomainStmt";
  [key: string]: unknown;
}

export interface CompositeTypeStmtPG extends BaseNode {
  type: "CompositeTypeStmt";
  [key: string]: unknown;
}

export interface CreateRangeStmtPG extends BaseNode {
  type: "CreateRangeStmt";
  [key: string]: unknown;
}

// Additional PostgreSQL-specific statement types
export interface TransactionStmtPG extends BaseNode {
  type: "TransactionStmt";
  kind?: string; // PostgreSQL uses string values like "TRANS_STMT_BEGIN"
  [key: string]: unknown;
}

export interface VariableSetStmtPG extends BaseNode {
  type: "VariableSetStmt";
  kind?: string; // PostgreSQL uses string values like "VAR_SET_VALUE"
  [key: string]: unknown;
}

export interface DoStmtPG extends BaseNode {
  type: "DoStmt";
  args?: Node[];
  [key: string]: unknown;
}

export interface LockStmtPG extends BaseNode {
  type: "LockStmt";
  relations?: Node[];
  [key: string]: unknown;
}

export interface GrantStmtPG extends BaseNode {
  type: "GrantStmt";
  is_grant?: boolean;
  [key: string]: unknown;
}

export interface CreateSchemaStmtPG extends BaseNode {
  type: "CreateSchemaStmt";
  schemaname?: string;
  [key: string]: unknown;
}

export interface CreatePolicyStmtPG extends BaseNode {
  type: "CreatePolicyStmt";
  policy_name?: string;
  [key: string]: unknown;
}

// Update A_Expr to support more PostgreSQL specific properties
export interface A_ExprPG extends BaseNode {
  type: "A_Expr";
  kind: string; // PostgreSQL uses various string values
  name?: StringNode[];
  lexpr?: Node;
  rexpr?: Node;
  op?: string; // for SQLValueFunction operations
}

// Update BoolExpr for PostgreSQL
export interface BoolExprPG extends BaseNode {
  type: "BoolExpr";
  boolop?: string; // PostgreSQL uses string values
  args?: Node[];
}

// Schemaname type for PostgreSQL
export interface SchemanamePG extends BaseNode {
  type: "schemaname";
  catalogname?: string;
  schemaname?: string;
  relname?: string;
  inh?: boolean;
  relpersistence?: string;
  alias?: Alias;
}

// PostgreSQL-specific value types
export interface SvalPG extends BaseNode {
  type: "sval";
  sval: string;
  [key: string]: unknown;
}

export interface IvalPG extends BaseNode {
  type: "ival";
  ival: number;
  [key: string]: unknown;
}

export interface FvalPG extends BaseNode {
  type: "fval";
  fval: string;
  [key: string]: unknown;
}

export interface BoolvalPG extends BaseNode {
  type: "boolval";
  boolval: boolean;
  [key: string]: unknown;
}

// Add PostgreSQL-specific node types for better compatibility
export interface SubLink extends BaseNode {
  type: "SubLink";
  subLinkType?: string;
  subselect?: Node;
  testexpr?: Node;
  operName?: StringNode[];
  [key: string]: unknown;
}

export interface SQLValueFunctionPG extends BaseNode {
  type: "SQLValueFunction";
  op?: string; // PostgreSQL uses op for SQLValueFunction operations
  typmod?: number;
  [key: string]: unknown;
}

// Add flexible A_Expr node that can handle more properties
export interface A_ExprFlexible extends BaseNode {
  type: "A_Expr";
  kind?: string;
  name?: StringNode[];
  lexpr?: Node;
  rexpr?: Node;
  op?: string;
  arg?: Node;
  [key: string]: unknown;
}

// Add flexible function call node
export interface FuncCallFlexible extends BaseNode {
  type: "FuncCall";
  funcname?: StringNode[];
  args?: Node[];
  agg_order?: SortBy[];
  agg_filter?: Node;
  over?: WindowDef | WindowDefPG;
  agg_within_group?: boolean;
  agg_star?: boolean;
  agg_distinct?: boolean;
  func_variadic?: boolean;
  funcformat?: CoercionForm;
  [key: string]: unknown;
}

// Generic flexible node for various PostgreSQL types
export interface FlexibleNode extends BaseNode {
  type: string;
  name?: string;
  ordering?: string;
  nulls_ordering?: string;
  subLinkType?: string;
  subselect?: Node;
  testexpr?: Node;
  operName?: StringNode[];
  arg?: Node;
  op?: string;
  [key: string]: unknown;
}

// Update WindowDef to support partitionClause type
export interface WindowDefPG extends BaseNode {
  type: "WindowDef" | "partitionClause";
  name?: string;
  refname?: string;
  partitionClause?: Node[];
  orderClause?: SortBy[];
  frameOptions?: number;
  startOffset?: Node;
  endOffset?: Node;
  [key: string]: unknown; // Allow indexed properties like "0", "1", etc.
}

// Flexible relation interface for parsed relations without explicit type
export interface RelationNode {
  catalogname?: string;
  schemaname?: string;
  relname?: string;
  inh?: boolean;
  relpersistence?: string;
  alias?: Alias | AliasPG;
  range?: Range;
  loc?: SourceLocation;
}

// Allow ArrayBounds to be a value node or a specific bounds object
export type ArrayBoundsElement = ArrayBounds | IntegerNode | ValueNode;

// Flexible alias interface for parsed aliases without explicit type
export interface AliasNode {
  aliasname: string;
  colnames?: string[];
  range?: Range;
  loc?: SourceLocation;
}

// Flexible distinct clause interface
export interface DistinctClauseNode {
  range?: Range;
  loc?: SourceLocation;
}
