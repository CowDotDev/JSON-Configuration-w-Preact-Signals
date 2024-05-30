/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type AbcAnalysis = {
  __typename?: 'AbcAnalysis';
  criteria: Scalars['String']['output'];
  indicatorPercentages: Array<Scalars['Float']['output']>;
};

export type AbcAnalysisInput = {
  /** Slotting ABC criteria */
  criteria: AbcCriteria;
  /** Slotting ABC indicator percentages */
  indicatorPercentages: Array<Scalars['Float']['input']>;
};

export enum AbcCriteria {
  SalesOrderLineItems = 'salesOrderLineItems',
  SalesOrderQuantity = 'salesOrderQuantity'
}

export type AdjustLpInventoryItemDto = {
  /** Entity code */
  lotCode?: InputMaybe<Scalars['String']['input']>;
  /** Entity code */
  productCode: Scalars['String']['input'];
  /** Quantity of product */
  quantity: Scalars['String']['input'];
  /** Entity code */
  stockStatusCode: Scalars['String']['input'];
  /** Entity code */
  unitOfMeasureCode: Scalars['String']['input'];
};

export enum AdjustmentType {
  DamagedProduct = 'damagedProduct',
  PhysicalInventory = 'physicalInventory'
}

/** Admin Task */
export type AdminTask = {
  __typename?: 'AdminTask';
  adminTaskType?: Maybe<AdminTaskType>;
  /** Task type ID (foreign key) */
  adminTaskTypeId: Scalars['ID']['output'];
  barcode?: Maybe<Barcode>;
  /** Barcode entity ID */
  barcodeId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Task status, i.e Not Started */
  status: TaskStatus;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's user ID (foreign key) */
  userId?: Maybe<Scalars['ID']['output']>;
};

export type AdminTaskType = {
  __typename?: 'AdminTaskType';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export enum AgentConfigStatus {
  Error = 'error',
  Ok = 'ok'
}

/** Agent configuration model */
export type AgentConfiguration = {
  __typename?: 'AgentConfiguration';
  /** Agent Id */
  agentId: Scalars['ID']['output'];
  /** Agent Name */
  agentName?: Maybe<Scalars['String']['output']>;
  /** Agent Hosts */
  hosts: Array<AgentConfigurationHost>;
  /** Agent status */
  status?: Maybe<AgentConfigStatus>;
  /** Agent version */
  version?: Maybe<Scalars['String']['output']>;
};

export enum AgentConfigurationAccessPolicy {
  AllPaths = 'ALL_PATHS',
  PathOnly = 'PATH_ONLY'
}

/** Agent configuration host */
export type AgentConfigurationHost = {
  __typename?: 'AgentConfigurationHost';
  /** Agent Access Policy */
  accessPolicy: AgentConfigurationAccessPolicy;
  /** Agent Hostname */
  hostname?: Maybe<Scalars['String']['output']>;
  /** Agent Path */
  path: Scalars['String']['output'];
  /** Agent Port */
  port?: Maybe<Scalars['String']['output']>;
};

export type AgentConfigurationHostInput = {
  /** Agent Access Policy */
  accessPolicy: AgentConfigurationAccessPolicy;
  /** Agent Hostname */
  hostname: Scalars['String']['input'];
  /** Agent Path */
  path?: InputMaybe<Scalars['String']['input']>;
  /** Agent Port */
  port: Scalars['String']['input'];
};

export type AgentConfigurationUpdate = {
  /** Agent Name */
  agentName: Scalars['String']['input'];
  /** Agent Hosts */
  hosts: Array<AgentConfigurationHostInput>;
};

/** Aggregate index counts */
export type AggsResults = {
  __typename?: 'AggsResults';
  area: Scalars['Int']['output'];
  bin: Scalars['Int']['output'];
  delivery: Scalars['Int']['output'];
  fulfillment: Scalars['Int']['output'];
  license_plate: Scalars['Int']['output'];
  product: Scalars['Int']['output'];
  task: Scalars['Int']['output'];
};

export type Aisle = {
  __typename?: 'Aisle';
  /** Entity's area ID (foreign key) */
  areaId: Scalars['ID']['output'];
  bins?: Maybe<Array<Bin>>;
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  depth?: Maybe<Scalars['Float']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  facing?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  polygon?: Maybe<Scalars['JSON']['output']>;
  rotation?: Maybe<Scalars['Float']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
  width?: Maybe<Scalars['Float']['output']>;
  /** x coordinate location */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  y?: Maybe<Scalars['Float']['output']>;
  /** Z coordinate location */
  z?: Maybe<Scalars['Float']['output']>;
};

export type AisleColumn = {
  __typename?: 'AisleColumn';
  /** Aisle within the warehouse. */
  aisleId: Scalars['ID']['output'];
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  depth?: Maybe<Scalars['Float']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  facing?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  polygon?: Maybe<Scalars['JSON']['output']>;
  rotation?: Maybe<Scalars['Float']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
  width?: Maybe<Scalars['Float']['output']>;
  /** x coordinate location */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  y?: Maybe<Scalars['Float']['output']>;
  /** Z coordinate location */
  z?: Maybe<Scalars['Float']['output']>;
};

export type AisleColumnCreateInput = {
  /** Aisle within the warehouse. */
  aisleId: Scalars['ID']['input'];
  /** Entity code */
  code: Scalars['String']['input'];
  depth?: InputMaybe<Scalars['Float']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  facing?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  polygon?: InputMaybe<Scalars['JSON']['input']>;
  rotation?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
  width?: InputMaybe<Scalars['Float']['input']>;
  /** x coordinate location */
  x?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  y?: InputMaybe<Scalars['Float']['input']>;
  /** Z coordinate location */
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type AisleColumnCreateOneInput = {
  /** The record to create */
  aisleColumn: AisleColumnCreateInput;
};

export type AisleColumnFilter = {
  aisleId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<AisleColumnFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  depth?: InputMaybe<FloatFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  facing?: InputMaybe<StringFieldComparison>;
  height?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AisleColumnFilter>>;
  polygon?: InputMaybe<JsonFilterComparison>;
  rotation?: InputMaybe<FloatFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  width?: InputMaybe<FloatFieldComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
  z?: InputMaybe<FloatFieldComparison>;
};

export type AisleColumnOffsetConnection = {
  __typename?: 'AisleColumnOffsetConnection';
  /** Array of nodes. */
  nodes: Array<AisleColumn>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type AisleColumnSort = {
  direction: SortDirection;
  field: AisleColumnSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AisleColumnSortFields {
  AisleId = 'aisleId',
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Depth = 'depth',
  Description = 'description',
  Facing = 'facing',
  Height = 'height',
  Id = 'id',
  Name = 'name',
  Polygon = 'polygon',
  Rotation = 'rotation',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId',
  Width = 'width',
  X = 'x',
  Y = 'y',
  Z = 'z'
}

export type AisleColumnUpdateInput = {
  /** Aisle within the warehouse. */
  aisleId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  facing?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  polygon?: InputMaybe<Scalars['JSON']['input']>;
  rotation?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** x coordinate location */
  x?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  y?: InputMaybe<Scalars['Float']['input']>;
  /** Z coordinate location */
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type AisleColumnUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: AisleColumnUpdateInput;
};

export type AisleCreateInput = {
  /** Entity's area ID (foreign key) */
  areaId: Scalars['ID']['input'];
  /** Entity code */
  code: Scalars['String']['input'];
  depth?: InputMaybe<Scalars['Float']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  facing?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  polygon?: InputMaybe<Scalars['JSON']['input']>;
  rotation?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
  width?: InputMaybe<Scalars['Float']['input']>;
  /** x coordinate location */
  x?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  y?: InputMaybe<Scalars['Float']['input']>;
  /** Z coordinate location */
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type AisleCreateOneInput = {
  /** The record to create */
  aisle: AisleCreateInput;
};

export type AisleFilter = {
  and?: InputMaybe<Array<AisleFilter>>;
  areaId?: InputMaybe<IdFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  depth?: InputMaybe<FloatFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  facing?: InputMaybe<StringFieldComparison>;
  height?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AisleFilter>>;
  polygon?: InputMaybe<JsonFilterComparison>;
  rotation?: InputMaybe<FloatFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  width?: InputMaybe<FloatFieldComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
  z?: InputMaybe<FloatFieldComparison>;
};

export type AisleOffsetConnection = {
  __typename?: 'AisleOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Aisle>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type AisleSort = {
  direction: SortDirection;
  field: AisleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AisleSortFields {
  AreaId = 'areaId',
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Depth = 'depth',
  Description = 'description',
  Facing = 'facing',
  Height = 'height',
  Id = 'id',
  Name = 'name',
  Polygon = 'polygon',
  Rotation = 'rotation',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId',
  Width = 'width',
  X = 'x',
  Y = 'y',
  Z = 'z'
}

export type AisleUpdateInput = {
  /** Entity's area ID (foreign key) */
  areaId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  facing?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  polygon?: InputMaybe<Scalars['JSON']['input']>;
  rotation?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** x coordinate location */
  x?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  y?: InputMaybe<Scalars['Float']['input']>;
  /** Z coordinate location */
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type AisleUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: AisleUpdateInput;
};

export type AllBarcodeEntities = {
  __typename?: 'AllBarcodeEntities';
  entity: Scalars['String']['output'];
  fields: Array<Scalars['String']['output']>;
};

export type ApproveBinCountTaskQueryModel = {
  __typename?: 'ApproveBinCountTaskQueryModel';
  baseCountedQuantity: Scalars['String']['output'];
  baseExpectedQuantity: Scalars['String']['output'];
  /** Entity code */
  binCode: Scalars['String']['output'];
  /** Entity ID */
  binId: Scalars['ID']['output'];
  countedQuantity: Scalars['String']['output'];
  /** Due date */
  dueDate: Scalars['DateTime']['output'];
  expectedQuantity: Scalars['String']['output'];
  /** Entity code */
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  lotCode?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  productCode: Scalars['ID']['output'];
  /** Entity ID */
  productId: Scalars['ID']['output'];
  quantityDifference: Scalars['String']['output'];
  /** Entity code */
  quantityUOMCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  quantityUOMId?: Maybe<Scalars['ID']['output']>;
  /** Indicates whether the count should be guided or blind */
  refCountCountType?: Maybe<PhysicalInventoryCountType>;
  /** Entity code */
  refCountTaskCode: Scalars['String']['output'];
  /** Person's first name */
  refCountTaskCompletedByUserFirstName?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  refCountTaskCompletedByUserId?: Maybe<Scalars['ID']['output']>;
  /** Person's last name */
  refCountTaskCompletedByUserLastName?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  refCountTaskId: Scalars['ID']['output'];
  /** Entity code */
  stockStatusCode: Scalars['String']['output'];
  /** Entity ID */
  stockStatusId: Scalars['ID']['output'];
  /** Entity's label */
  stockStatusLabel: Scalars['String']['output'];
  /** Entity code */
  taskCode: Scalars['String']['output'];
  /** Created at date */
  taskCreatedAt: Scalars['DateTime']['output'];
  /** Entity ID */
  taskId: Scalars['ID']['output'];
  /** Task status, i.e Not Started */
  taskStatus: TaskStatus;
  /** Entity code */
  taskTypeCode: Scalars['String']['output'];
  /** Entity ID */
  taskTypeId: Scalars['ID']['output'];
  /** Update at date */
  taskUpdatedAt: Scalars['DateTime']['output'];
  /** Entity ID */
  warehouseId: Scalars['ID']['output'];
};

export type ApproveBinCountTaskQueryModelFilter = {
  and?: InputMaybe<Array<ApproveBinCountTaskQueryModelFilter>>;
  baseCountedQuantity?: InputMaybe<StringFieldComparison>;
  baseExpectedQuantity?: InputMaybe<StringFieldComparison>;
  binCode?: InputMaybe<StringFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  countedQuantity?: InputMaybe<StringFieldComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  expectedQuantity?: InputMaybe<StringFieldComparison>;
  licensePlateCode?: InputMaybe<StringFieldComparison>;
  licensePlateId?: InputMaybe<IdFilterComparison>;
  lotCode?: InputMaybe<IdFilterComparison>;
  lotId?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ApproveBinCountTaskQueryModelFilter>>;
  productCode?: InputMaybe<IdFilterComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  quantityDifference?: InputMaybe<StringFieldComparison>;
  quantityUOMCode?: InputMaybe<StringFieldComparison>;
  quantityUOMId?: InputMaybe<IdFilterComparison>;
  refCountCountType?: InputMaybe<PhysicalInventoryCountTypeFilterComparison>;
  refCountTaskCode?: InputMaybe<StringFieldComparison>;
  refCountTaskCompletedByUserFirstName?: InputMaybe<StringFieldComparison>;
  refCountTaskCompletedByUserId?: InputMaybe<IdFilterComparison>;
  refCountTaskCompletedByUserLastName?: InputMaybe<StringFieldComparison>;
  refCountTaskId?: InputMaybe<IdFilterComparison>;
  stockStatusCode?: InputMaybe<StringFieldComparison>;
  stockStatusId?: InputMaybe<IdFilterComparison>;
  stockStatusLabel?: InputMaybe<StringFieldComparison>;
  taskCode?: InputMaybe<StringFieldComparison>;
  taskCreatedAt?: InputMaybe<DateFieldComparison>;
  taskId?: InputMaybe<IdFilterComparison>;
  taskStatus?: InputMaybe<TaskStatusFilterComparison>;
  taskUpdatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ApproveBinCountTaskQueryModelOffsetConnection = {
  __typename?: 'ApproveBinCountTaskQueryModelOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ApproveBinCountTaskQueryModel>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ApproveBinCountTaskQueryModelSort = {
  direction: SortDirection;
  field: ApproveBinCountTaskQueryModelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ApproveBinCountTaskQueryModelSortFields {
  BaseCountedQuantity = 'baseCountedQuantity',
  BaseExpectedQuantity = 'baseExpectedQuantity',
  BinCode = 'binCode',
  BinId = 'binId',
  CountedQuantity = 'countedQuantity',
  DueDate = 'dueDate',
  ExpectedQuantity = 'expectedQuantity',
  LicensePlateCode = 'licensePlateCode',
  LicensePlateId = 'licensePlateId',
  LotCode = 'lotCode',
  LotId = 'lotId',
  ProductCode = 'productCode',
  ProductId = 'productId',
  QuantityDifference = 'quantityDifference',
  QuantityUomCode = 'quantityUOMCode',
  QuantityUomId = 'quantityUOMId',
  RefCountCountType = 'refCountCountType',
  RefCountTaskCode = 'refCountTaskCode',
  RefCountTaskCompletedByUserFirstName = 'refCountTaskCompletedByUserFirstName',
  RefCountTaskCompletedByUserId = 'refCountTaskCompletedByUserId',
  RefCountTaskCompletedByUserLastName = 'refCountTaskCompletedByUserLastName',
  RefCountTaskId = 'refCountTaskId',
  StockStatusCode = 'stockStatusCode',
  StockStatusId = 'stockStatusId',
  StockStatusLabel = 'stockStatusLabel',
  TaskCode = 'taskCode',
  TaskCreatedAt = 'taskCreatedAt',
  TaskId = 'taskId',
  TaskStatus = 'taskStatus',
  TaskUpdatedAt = 'taskUpdatedAt',
  WarehouseId = 'warehouseId'
}

export type ApprovePiTaskInputDto = {
  /** Dto wrapper */
  physicalInventoryApproval: TaskApprovePiInput;
};

/** Area model */
export type Area = {
  __typename?: 'Area';
  aisles?: Maybe<Array<Aisle>>;
  bins?: Maybe<Array<Bin>>;
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  depth?: Maybe<Scalars['Float']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  doors?: Maybe<Array<Door>>;
  /** Entry point into the warehouse */
  entryPoint: Scalars['Boolean']['output'];
  /** Exit point out of the warehouse */
  exitPoint: Scalars['Boolean']['output'];
  height?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  polygon?: Maybe<Scalars['JSON']['output']>;
  sapStorageLocationPlant?: Maybe<SapStorageLocationPlant>;
  /** Area's status, i.e. ACTIVE, INACTIVE */
  status?: Maybe<AreaStatus>;
  /** Area's type, i.e. TEMP, PERM */
  storageType?: Maybe<AreaStorageType>;
  /** Entity's target temperature, null if entity is not temperature controlled */
  targetTemperature?: Maybe<Scalars['Float']['output']>;
  /** Area's type, i.e. TEMP, PERM */
  type?: Maybe<AreaType>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  warehouse?: Maybe<Warehouse>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
  /** x coordinate location */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  y?: Maybe<Scalars['Float']['output']>;
  /** Z coordinate location */
  z?: Maybe<Scalars['Float']['output']>;
};

export type AreaCreateInput = {
  /** Entity code */
  code: Scalars['String']['input'];
  depth?: InputMaybe<Scalars['Float']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entry point into the warehouse */
  entryPoint?: InputMaybe<Scalars['Boolean']['input']>;
  /** Exit point out of the warehouse */
  exitPoint?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  polygon?: InputMaybe<Scalars['JSON']['input']>;
  /** Entity's SAP storage location plant ID (foreign key) */
  sapStorageLocationPlantId?: InputMaybe<Scalars['ID']['input']>;
  /** Area's status, i.e. ACTIVE, INACTIVE */
  status?: InputMaybe<AreaStatus>;
  /** Entity's target temperature, null if entity is not temperature controlled */
  targetTemperature?: InputMaybe<Scalars['Float']['input']>;
  /** Area's type, i.e. TEMP, PERM */
  type?: InputMaybe<AreaType>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** x coordinate location */
  x?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  y?: InputMaybe<Scalars['Float']['input']>;
  /** Z coordinate location */
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type AreaCreateOneInput = {
  /** The record to create */
  area: AreaCreateInput;
};

export type AreaFilter = {
  and?: InputMaybe<Array<AreaFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  depth?: InputMaybe<FloatFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  entryPoint?: InputMaybe<BooleanFieldComparison>;
  exitPoint?: InputMaybe<BooleanFieldComparison>;
  height?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AreaFilter>>;
  polygon?: InputMaybe<JsonFilterComparison>;
  status?: InputMaybe<AreaStatusFilterComparison>;
  storageType?: InputMaybe<AreaStorageTypeFilterComparison>;
  targetTemperature?: InputMaybe<FloatFieldComparison>;
  type?: InputMaybe<AreaTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  width?: InputMaybe<FloatFieldComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
  z?: InputMaybe<FloatFieldComparison>;
};

export type AreaOffsetConnection = {
  __typename?: 'AreaOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Area>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

/** Area Search results */
export type AreaSearchResults = {
  __typename?: 'AreaSearchResults';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  storageLocation?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  warehouseCode?: Maybe<Scalars['String']['output']>;
};

export type AreaSort = {
  direction: SortDirection;
  field: AreaSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AreaSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Depth = 'depth',
  Description = 'description',
  EntryPoint = 'entryPoint',
  ExitPoint = 'exitPoint',
  Height = 'height',
  Id = 'id',
  Name = 'name',
  Polygon = 'polygon',
  Status = 'status',
  StorageType = 'storageType',
  TargetTemperature = 'targetTemperature',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId',
  Width = 'width',
  X = 'x',
  Y = 'y',
  Z = 'z'
}

export enum AreaStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export type AreaStatusFilterComparison = {
  eq?: InputMaybe<AreaStatus>;
  gt?: InputMaybe<AreaStatus>;
  gte?: InputMaybe<AreaStatus>;
  iLike?: InputMaybe<AreaStatus>;
  in?: InputMaybe<Array<AreaStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<AreaStatus>;
  lt?: InputMaybe<AreaStatus>;
  lte?: InputMaybe<AreaStatus>;
  neq?: InputMaybe<AreaStatus>;
  notILike?: InputMaybe<AreaStatus>;
  notIn?: InputMaybe<Array<AreaStatus>>;
  notLike?: InputMaybe<AreaStatus>;
};

export enum AreaStorageType {
  OutboundStaging = 'outboundStaging',
  Rework = 'rework',
  Staging = 'staging',
  Storage = 'storage'
}

export type AreaStorageTypeFilterComparison = {
  eq?: InputMaybe<AreaStorageType>;
  gt?: InputMaybe<AreaStorageType>;
  gte?: InputMaybe<AreaStorageType>;
  iLike?: InputMaybe<AreaStorageType>;
  in?: InputMaybe<Array<AreaStorageType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<AreaStorageType>;
  lt?: InputMaybe<AreaStorageType>;
  lte?: InputMaybe<AreaStorageType>;
  neq?: InputMaybe<AreaStorageType>;
  notILike?: InputMaybe<AreaStorageType>;
  notIn?: InputMaybe<Array<AreaStorageType>>;
  notLike?: InputMaybe<AreaStorageType>;
};

export enum AreaType {
  Perm = 'perm',
  Temp = 'temp'
}

export type AreaTypeFilterComparison = {
  eq?: InputMaybe<AreaType>;
  gt?: InputMaybe<AreaType>;
  gte?: InputMaybe<AreaType>;
  iLike?: InputMaybe<AreaType>;
  in?: InputMaybe<Array<AreaType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<AreaType>;
  lt?: InputMaybe<AreaType>;
  lte?: InputMaybe<AreaType>;
  neq?: InputMaybe<AreaType>;
  notILike?: InputMaybe<AreaType>;
  notIn?: InputMaybe<Array<AreaType>>;
  notLike?: InputMaybe<AreaType>;
};

export type AreaUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Float']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entry point into the warehouse */
  entryPoint?: InputMaybe<Scalars['Boolean']['input']>;
  /** Exit point out of the warehouse */
  exitPoint?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  polygon?: InputMaybe<Scalars['JSON']['input']>;
  /** Entity's SAP storage location plant ID (foreign key) */
  sapStorageLocationPlantId?: InputMaybe<Scalars['ID']['input']>;
  /** Area's status, i.e. ACTIVE, INACTIVE */
  status?: InputMaybe<AreaStatus>;
  /** Entity's target temperature, null if entity is not temperature controlled */
  targetTemperature?: InputMaybe<Scalars['Float']['input']>;
  /** Area's type, i.e. TEMP, PERM */
  type?: InputMaybe<AreaType>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** x coordinate location */
  x?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  y?: InputMaybe<Scalars['Float']['input']>;
  /** Z coordinate location */
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type AreaUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** update dto */
  update: AreaUpdateInput;
};

export type Barcode = {
  __typename?: 'Barcode';
  adminTask?: Maybe<AdminTask>;
  barcodeMappings?: Maybe<BarcodeMappings>;
  businessPartner?: Maybe<BusinessPartner>;
  /** Entity ID */
  businessPartnerId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  code: Scalars['String']['output'];
  company?: Maybe<Company>;
  /** Entity's company ID (foreign key) */
  companyId: Scalars['ID']['output'];
  /** configuration type */
  configuration: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** scanned data */
  scanData?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type BarcodeCreateInput = {
  businessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  companyId: Scalars['ID']['input'];
  configuration: Scalars['String']['input'];
  scanData: Scalars['String']['input'];
};

export type BarcodeCreateOneInput = {
  /** The record to create */
  barcode: BarcodeCreateInput;
};

export type BarcodeField = {
  /** Barcode application identifier */
  ai: Scalars['String']['input'];
  /** Barcode mapping entity ID */
  barcodeMappingId?: InputMaybe<Scalars['ID']['input']>;
  /** The entity relation for the application identifier */
  entity: Scalars['String']['input'];
  /** The entity field relation for the application identifier */
  entityField: Scalars['String']['input'];
};

export type BarcodeFilter = {
  and?: InputMaybe<Array<BarcodeFilter>>;
  businessPartnerId?: InputMaybe<IdFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  configuration?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<BarcodeFilter>>;
  scanData?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type BarcodeMapping = {
  __typename?: 'BarcodeMapping';
  /** barcode field name */
  ai: Scalars['String']['output'];
  /** barcode id */
  barcodeId: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** data content of barcode application identifier */
  dataContent?: Maybe<Scalars['String']['output']>;
  /** data title of barcode application identifier */
  dataTitle?: Maybe<Scalars['String']['output']>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** barcode field entity relationship */
  entity?: Maybe<Scalars['String']['output']>;
  /** entity field for barcode mapping */
  entityField?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** required identifier in the barcode spec */
  required: Scalars['Boolean']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type BarcodeMappingFilter = {
  ai?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<BarcodeMappingFilter>>;
  barcodeId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dataContent?: InputMaybe<StringFieldComparison>;
  dataTitle?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  entity?: InputMaybe<StringFieldComparison>;
  entityField?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<BarcodeMappingFilter>>;
  required?: InputMaybe<BooleanFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type BarcodeMappingOffsetConnection = {
  __typename?: 'BarcodeMappingOffsetConnection';
  /** Array of nodes. */
  nodes: Array<BarcodeMapping>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BarcodeMappingSort = {
  direction: SortDirection;
  field: BarcodeMappingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BarcodeMappingSortFields {
  Ai = 'ai',
  BarcodeId = 'barcodeId',
  CreatedAt = 'createdAt',
  DataContent = 'dataContent',
  DataTitle = 'dataTitle',
  DeletedAt = 'deletedAt',
  Entity = 'entity',
  EntityField = 'entityField',
  Id = 'id',
  Required = 'required',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type BarcodeMappings = {
  __typename?: 'BarcodeMappings';
  nodes: Array<BarcodeMapping>;
};

export type BarcodeOffsetConnection = {
  __typename?: 'BarcodeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Barcode>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export enum BarcodeScanner {
  Zebra = 'zebra'
}

export type BarcodeSort = {
  direction: SortDirection;
  field: BarcodeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BarcodeSortFields {
  BusinessPartnerId = 'businessPartnerId',
  Code = 'code',
  CompanyId = 'companyId',
  Configuration = 'configuration',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  ScanData = 'scanData',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export enum BarcodeSymbologyType {
  Gs1 = 'gs1',
  Pdf417 = 'pdf417'
}

export type BarcodeSymbologyTypeFilterComparison = {
  eq?: InputMaybe<BarcodeSymbologyType>;
  gt?: InputMaybe<BarcodeSymbologyType>;
  gte?: InputMaybe<BarcodeSymbologyType>;
  iLike?: InputMaybe<BarcodeSymbologyType>;
  in?: InputMaybe<Array<BarcodeSymbologyType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<BarcodeSymbologyType>;
  lt?: InputMaybe<BarcodeSymbologyType>;
  lte?: InputMaybe<BarcodeSymbologyType>;
  neq?: InputMaybe<BarcodeSymbologyType>;
  notILike?: InputMaybe<BarcodeSymbologyType>;
  notIn?: InputMaybe<Array<BarcodeSymbologyType>>;
  notLike?: InputMaybe<BarcodeSymbologyType>;
};

export type BarcodeTemplate = {
  __typename?: 'BarcodeTemplate';
  configurationName: BarcodeSymbologyType;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type BarcodeTemplateFilter = {
  and?: InputMaybe<Array<BarcodeTemplateFilter>>;
  configurationName?: InputMaybe<BarcodeSymbologyTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<BarcodeTemplateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type BarcodeTemplateMapping = {
  __typename?: 'BarcodeTemplateMapping';
  /** barcode application identifier */
  ai: Scalars['String']['output'];
  /** barcode id */
  barcodeTemplateId: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** data content of barcode application identifier */
  dataContent: Scalars['String']['output'];
  /** data title of barcode application identifier */
  dataTitle: Scalars['String']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** barcode field entity relationship */
  entity: Scalars['String']['output'];
  /** entity field for barcode mapping */
  entityField: Scalars['String']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type BarcodeTemplateMappingCreateInput = {
  /** barcode application identifier */
  ai: Scalars['String']['input'];
  /** barcode id */
  barcodeId: Scalars['ID']['input'];
  /** data content of barcode application identifier */
  dataContent: Scalars['String']['input'];
  /** data title of barcode application identifier */
  dataTitle: Scalars['String']['input'];
  /** barcode field entity relationship */
  entity: Scalars['String']['input'];
  /** entity field for barcode mapping */
  entityField: Scalars['String']['input'];
};

export type BarcodeTemplateMappingCreateOneInput = {
  /** The record to create */
  barcodeTemplateMapping: BarcodeTemplateMappingCreateInput;
};

export type BarcodeTemplateMappingFilter = {
  ai?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<BarcodeTemplateMappingFilter>>;
  barcodeTemplateId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dataContent?: InputMaybe<StringFieldComparison>;
  dataTitle?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  entity?: InputMaybe<StringFieldComparison>;
  entityField?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<BarcodeTemplateMappingFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type BarcodeTemplateMappingOffsetConnection = {
  __typename?: 'BarcodeTemplateMappingOffsetConnection';
  /** Array of nodes. */
  nodes: Array<BarcodeTemplateMapping>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BarcodeTemplateMappingSort = {
  direction: SortDirection;
  field: BarcodeTemplateMappingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BarcodeTemplateMappingSortFields {
  Ai = 'ai',
  BarcodeTemplateId = 'barcodeTemplateId',
  CreatedAt = 'createdAt',
  DataContent = 'dataContent',
  DataTitle = 'dataTitle',
  DeletedAt = 'deletedAt',
  Entity = 'entity',
  EntityField = 'entityField',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type BarcodeTemplateMappingUpdateInput = {
  /** barcode application identifier */
  ai?: InputMaybe<Scalars['String']['input']>;
  /** barcode id */
  barcodeId?: InputMaybe<Scalars['ID']['input']>;
  /** data content of barcode application identifier */
  dataContent?: InputMaybe<Scalars['String']['input']>;
  /** data title of barcode application identifier */
  dataTitle?: InputMaybe<Scalars['String']['input']>;
  /** barcode field entity relationship */
  entity?: InputMaybe<Scalars['String']['input']>;
  /** entity field for barcode mapping */
  entityField?: InputMaybe<Scalars['String']['input']>;
};

export type BarcodeTemplateMappingUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: BarcodeTemplateMappingUpdateInput;
};

export type BarcodeTemplateOffsetConnection = {
  __typename?: 'BarcodeTemplateOffsetConnection';
  /** Array of nodes. */
  nodes: Array<BarcodeTemplate>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BarcodeTemplateSort = {
  direction: SortDirection;
  field: BarcodeTemplateSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BarcodeTemplateSortFields {
  ConfigurationName = 'configurationName',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type BarcodeUpdateInput = {
  businessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  companyId?: InputMaybe<Scalars['ID']['input']>;
  configuration?: InputMaybe<Scalars['String']['input']>;
  scanData?: InputMaybe<Scalars['String']['input']>;
};

export type BarcodeUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: BarcodeUpdateInput;
};

export type BaseGraphqlErrorReturnType = {
  __typename?: 'BaseGraphqlErrorReturnType';
  action?: Maybe<Scalars['String']['output']>;
  code?: Maybe<ErrorCodes>;
  duration?: Maybe<Scalars['Float']['output']>;
  log?: Maybe<Scalars['String']['output']>;
  logType?: Maybe<LogType>;
  message: Scalars['String']['output'];
  type?: Maybe<ErrorType>;
};

/** Bin entity model */
export type Bin = {
  __typename?: 'Bin';
  aisle?: Maybe<Aisle>;
  /** Column where the bin is located. */
  aisleColumnId?: Maybe<Scalars['ID']['output']>;
  /** Aisle where the bin is located */
  aisleId?: Maybe<Scalars['ID']['output']>;
  area?: Maybe<Area>;
  /** Entity's area ID (foreign key) */
  areaId?: Maybe<Scalars['ID']['output']>;
  binInventory?: Maybe<Array<InventoryBase>>;
  binSize?: Maybe<BinSize>;
  /** Size and capacity information for a bin */
  binSizeId: Scalars['ID']['output'];
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Delivery ID (foreign key) */
  deliveryId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Timestamp of latest inventory count approval */
  lastCount?: Maybe<Scalars['DateTime']['output']>;
  /** Timestamp of latest movement */
  lastMovement?: Maybe<Scalars['DateTime']['output']>;
  /** Level where the bin is located. */
  level?: Maybe<Scalars['Int']['output']>;
  /** Level where the bin is located. */
  pick_point?: Maybe<Scalars['JSONObject']['output']>;
  /** If Bin is blocked from product being putaway */
  putawayBlock?: Maybe<Scalars['Boolean']['output']>;
  /** Level where the bin is located. */
  putaway_point?: Maybe<Scalars['JSONObject']['output']>;
  rearrangementRecommendations?: Maybe<Array<RearrangementRecommendation>>;
  /** If Bin is blocked from product being removed */
  removalBlock?: Maybe<Scalars['Boolean']['output']>;
  /** Level where the bin is located. */
  rotation?: Maybe<Scalars['Float']['output']>;
  /** Bin type */
  type?: Maybe<BinType>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Verification code from a barcode scan */
  verificationCode?: Maybe<Scalars['String']['output']>;
  vertices?: Maybe<Array<Vertex>>;
  warehouse?: Maybe<Warehouse>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
  /** x coordinate location */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  y?: Maybe<Scalars['Float']['output']>;
  /** Z coordinate location */
  z?: Maybe<Scalars['Float']['output']>;
  zones?: Maybe<Array<Zone>>;
};


/** Bin entity model */
export type BinRearrangementRecommendationsArgs = {
  runId: Scalars['String']['input'];
};

export enum BinActiveState {
  Active = 'active',
  Inactive = 'inactive'
}

export type BinActiveStateFilterComparison = {
  eq?: InputMaybe<BinActiveState>;
  gt?: InputMaybe<BinActiveState>;
  gte?: InputMaybe<BinActiveState>;
  iLike?: InputMaybe<BinActiveState>;
  in?: InputMaybe<Array<BinActiveState>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<BinActiveState>;
  lt?: InputMaybe<BinActiveState>;
  lte?: InputMaybe<BinActiveState>;
  neq?: InputMaybe<BinActiveState>;
  notILike?: InputMaybe<BinActiveState>;
  notIn?: InputMaybe<Array<BinActiveState>>;
  notLike?: InputMaybe<BinActiveState>;
};

export enum BinBlockState {
  Available = 'available',
  Blocked = 'blocked'
}

export type BinBlockStateFilterComparison = {
  eq?: InputMaybe<BinBlockState>;
  gt?: InputMaybe<BinBlockState>;
  gte?: InputMaybe<BinBlockState>;
  iLike?: InputMaybe<BinBlockState>;
  in?: InputMaybe<Array<BinBlockState>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<BinBlockState>;
  lt?: InputMaybe<BinBlockState>;
  lte?: InputMaybe<BinBlockState>;
  neq?: InputMaybe<BinBlockState>;
  notILike?: InputMaybe<BinBlockState>;
  notIn?: InputMaybe<Array<BinBlockState>>;
  notLike?: InputMaybe<BinBlockState>;
};

export type BinCreateInput = {
  /** Column where the bin is located. */
  aisleColumnId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's area ID (foreign key) */
  aisleId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's area ID (foreign key) */
  areaId?: InputMaybe<Scalars['ID']['input']>;
  /** Size and capacity information for a bin */
  binSizeId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity code */
  code: Scalars['String']['input'];
  /** Timestamp of latest inventory count approval */
  lastCount?: InputMaybe<Scalars['DateTime']['input']>;
  /** Level where the bin is located. */
  level?: InputMaybe<Scalars['Int']['input']>;
  pick_point?: InputMaybe<Scalars['JSON']['input']>;
  /** If Bin is blocked from product being putaway */
  putawayBlock?: InputMaybe<Scalars['Boolean']['input']>;
  putaway_point?: InputMaybe<Scalars['JSON']['input']>;
  /** If Bin is blocked from product being removed */
  removalBlock?: InputMaybe<Scalars['Boolean']['input']>;
  rotation?: InputMaybe<Scalars['Float']['input']>;
  /** Verification code from a barcode scan */
  verificationCode?: InputMaybe<Scalars['String']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
  /** x coordinate location */
  x?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  y?: InputMaybe<Scalars['Float']['input']>;
  /** Z coordinate location */
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type BinCreateOneInput = {
  /** The record to create */
  bin: BinCreateInput;
};

export type BinEnrollment = {
  /** x coordinate location */
  x: Scalars['Float']['input'];
  /** Y coordinate location */
  y: Scalars['Float']['input'];
  /** Z coordinate location */
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type BinFilter = {
  aisleColumnId?: InputMaybe<IdFilterComparison>;
  aisleId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<BinFilter>>;
  areaId?: InputMaybe<IdFilterComparison>;
  binSizeId?: InputMaybe<IdFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deliveryId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastCount?: InputMaybe<DateFieldComparison>;
  lastMovement?: InputMaybe<DateFieldComparison>;
  level?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<BinFilter>>;
  pick_point?: InputMaybe<JsonObjectFilterComparison>;
  putawayBlock?: InputMaybe<BooleanFieldComparison>;
  putaway_point?: InputMaybe<JsonObjectFilterComparison>;
  removalBlock?: InputMaybe<BooleanFieldComparison>;
  rotation?: InputMaybe<FloatFieldComparison>;
  type?: InputMaybe<BinTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  verificationCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
  z?: InputMaybe<FloatFieldComparison>;
};

export type BinForPickTask = {
  __typename?: 'BinForPickTask';
  availableQuantity?: Maybe<Scalars['Float']['output']>;
  binCode?: Maybe<Scalars['String']['output']>;
  binId?: Maybe<Scalars['ID']['output']>;
  binLevel?: Maybe<Scalars['String']['output']>;
  lotCode?: Maybe<Scalars['String']['output']>;
  lotExpiration?: Maybe<Scalars['DateTime']['output']>;
  lotId?: Maybe<Scalars['ID']['output']>;
  lotProductionDate?: Maybe<Scalars['DateTime']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type BinOffsetConnection = {
  __typename?: 'BinOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Bin>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

/** Bin Search results */
export type BinSearchResults = {
  __typename?: 'BinSearchResults';
  aisle?: Maybe<Scalars['String']['output']>;
  areaCode?: Maybe<Scalars['String']['output']>;
  areaDescription?: Maybe<Scalars['String']['output']>;
  areaName?: Maybe<Scalars['String']['output']>;
  areaType?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  column?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['String']['output']>;
  lastMoved?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  warehouseCode?: Maybe<Scalars['String']['output']>;
};

export type BinSize = {
  __typename?: 'BinSize';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Created by user */
  createdByUserId?: Maybe<Scalars['String']['output']>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Depth(X) value of storage capacity */
  depth: Scalars['Float']['output'];
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Unit of measure glossary ID */
  distanceUomId: Scalars['ID']['output'];
  /** Height(Z) value of storage capacity */
  height: Scalars['Float']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label: Scalars['String']['output'];
  /** Product's length */
  length?: Maybe<Scalars['Float']['output']>;
  /** Unit of measure glossary ID */
  maximumProductUomId?: Maybe<Scalars['ID']['output']>;
  /** Product's Height */
  productHeightLimit?: Maybe<Scalars['Float']['output']>;
  /** Product's length */
  productLengthLimit?: Maybe<Scalars['Float']['output']>;
  /** Unit of measure glossary ID */
  productLimitUomId?: Maybe<Scalars['ID']['output']>;
  /** Restricts the size of products that can be placed in the bin */
  productSizeRestriction?: Maybe<Scalars['JSONObject']['output']>;
  /** Product's width */
  productWidthLimit?: Maybe<Scalars['Float']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Product's volume */
  volumeCapacity?: Maybe<Scalars['Float']['output']>;
  /** Unit of measure glossary ID */
  volumeCapacityUomId?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
  /** Weight capacity of storage */
  weightCapacity: Scalars['Float']['output'];
  /** Unit of measure glossary ID */
  weightCapacityUomId: Scalars['ID']['output'];
  /** Width(Y) value of storage capacity */
  width: Scalars['Float']['output'];
};

export type BinSizeCopyDto = {
  /** Entity ID */
  binSizeIdToCopy: Scalars['ID']['input'];
  /** Entity code */
  code: Scalars['String']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  label: Scalars['String']['input'];
  /** Entity ID */
  warehouseId: Scalars['ID']['input'];
};

export type BinSizeCreateInput = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Depth(X) value of storage capacity */
  depth: Scalars['Float']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure for volume capacity of storage */
  distanceUomId: Scalars['String']['input'];
  /** Height(Z) value of storage capacity */
  height: Scalars['Float']['input'];
  /** Entity's label */
  label: Scalars['String']['input'];
  /** Unit of measure for volume capacity of storage */
  length?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of measure glossary ID */
  maximumProductUomId?: InputMaybe<Scalars['ID']['input']>;
  /** Unit of measure for volume capacity of storage */
  productHeightLimit?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of measure for volume capacity of storage */
  productLengthLimit?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of measure glossary ID */
  productLimitUomId?: InputMaybe<Scalars['ID']['input']>;
  /** Unit of measure for volume capacity of storage */
  productWidthLimit?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of measure for volume capacity of storage */
  volumeCapacity?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's warehouse (foreign key) */
  volumeCapacityUomId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
  /** Weight capacity of storage */
  weightCapacity: Scalars['Float']['input'];
  /** Entity ID */
  weightCapacityUomId: Scalars['String']['input'];
  /** Width(Y) value of storage capacity */
  width: Scalars['Float']['input'];
};

export type BinSizeCreateOneInput = {
  /** The record to create */
  binSize: BinSizeCreateInput;
};

export type BinSizeFilter = {
  and?: InputMaybe<Array<BinSizeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdByUserId?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  depth?: InputMaybe<FloatFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  distanceUomId?: InputMaybe<IdFilterComparison>;
  height?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  length?: InputMaybe<FloatFieldComparison>;
  maximumProductUomId?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<BinSizeFilter>>;
  productHeightLimit?: InputMaybe<FloatFieldComparison>;
  productLengthLimit?: InputMaybe<FloatFieldComparison>;
  productLimitUomId?: InputMaybe<IdFilterComparison>;
  productSizeRestriction?: InputMaybe<JsonObjectFilterComparison>;
  productWidthLimit?: InputMaybe<FloatFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  volumeCapacity?: InputMaybe<FloatFieldComparison>;
  volumeCapacityUomId?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  weightCapacity?: InputMaybe<FloatFieldComparison>;
  weightCapacityUomId?: InputMaybe<IdFilterComparison>;
  width?: InputMaybe<FloatFieldComparison>;
};

export type BinSizeOffsetConnection = {
  __typename?: 'BinSizeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<BinSize>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BinSizeSort = {
  direction: SortDirection;
  field: BinSizeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BinSizeSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  CreatedByUserId = 'createdByUserId',
  DeletedAt = 'deletedAt',
  Depth = 'depth',
  Description = 'description',
  DistanceUomId = 'distanceUomId',
  Height = 'height',
  Id = 'id',
  Label = 'label',
  Length = 'length',
  MaximumProductUomId = 'maximumProductUomId',
  ProductHeightLimit = 'productHeightLimit',
  ProductLengthLimit = 'productLengthLimit',
  ProductLimitUomId = 'productLimitUomId',
  ProductSizeRestriction = 'productSizeRestriction',
  ProductWidthLimit = 'productWidthLimit',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  VolumeCapacity = 'volumeCapacity',
  VolumeCapacityUomId = 'volumeCapacityUomId',
  WarehouseId = 'warehouseId',
  WeightCapacity = 'weightCapacity',
  WeightCapacityUomId = 'weightCapacityUomId',
  Width = 'width'
}

export type BinSizeUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Depth(X) value of storage capacity */
  depth?: InputMaybe<Scalars['Float']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure for volume capacity of storage */
  distanceUomId?: InputMaybe<Scalars['String']['input']>;
  /** Height(Z) value of storage capacity */
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's label */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure for volume capacity of storage */
  length?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of measure glossary ID */
  maximumProductUomId?: InputMaybe<Scalars['ID']['input']>;
  /** Unit of measure for volume capacity of storage */
  productHeightLimit?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of measure for volume capacity of storage */
  productLengthLimit?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of measure glossary ID */
  productLimitUomId?: InputMaybe<Scalars['ID']['input']>;
  /** Unit of measure for volume capacity of storage */
  productWidthLimit?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of measure for volume capacity of storage */
  volumeCapacity?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's warehouse (foreign key) */
  volumeCapacityUomId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
  /** Weight capacity of storage */
  weightCapacity?: InputMaybe<Scalars['Float']['input']>;
  /** Entity ID */
  weightCapacityUomId?: InputMaybe<Scalars['String']['input']>;
  /** Width(Y) value of storage capacity */
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type BinSizeUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: BinSizeUpdateInput;
};

export type BinSort = {
  direction: SortDirection;
  field: BinSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BinSortFields {
  AisleColumnId = 'aisleColumnId',
  AisleId = 'aisleId',
  AreaId = 'areaId',
  BinSizeId = 'binSizeId',
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DeliveryId = 'deliveryId',
  Id = 'id',
  LastCount = 'lastCount',
  LastMovement = 'lastMovement',
  Level = 'level',
  PickPoint = 'pick_point',
  PutawayBlock = 'putawayBlock',
  PutawayPoint = 'putaway_point',
  RemovalBlock = 'removalBlock',
  Rotation = 'rotation',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  VerificationCode = 'verificationCode',
  WarehouseId = 'warehouseId',
  X = 'x',
  Y = 'y',
  Z = 'z'
}

export type BinStatus = {
  __typename?: 'BinStatus';
  /** Entity code */
  code: BinStatusCode;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export enum BinStatusCode {
  BinStatusDestinationBlock = 'BIN_STATUS_DESTINATION_BLOCK',
  BinStatusInactive = 'BIN_STATUS_INACTIVE',
  BinStatusSourceBlock = 'BIN_STATUS_SOURCE_BLOCK',
  BinStatusTestCode = 'BIN_STATUS_TEST_CODE'
}

export type BinStatusCodeFilterComparison = {
  eq?: InputMaybe<BinStatusCode>;
  gt?: InputMaybe<BinStatusCode>;
  gte?: InputMaybe<BinStatusCode>;
  iLike?: InputMaybe<BinStatusCode>;
  in?: InputMaybe<Array<BinStatusCode>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<BinStatusCode>;
  lt?: InputMaybe<BinStatusCode>;
  lte?: InputMaybe<BinStatusCode>;
  neq?: InputMaybe<BinStatusCode>;
  notILike?: InputMaybe<BinStatusCode>;
  notIn?: InputMaybe<Array<BinStatusCode>>;
  notLike?: InputMaybe<BinStatusCode>;
};

export type BinStatusFilter = {
  and?: InputMaybe<Array<BinStatusFilter>>;
  code?: InputMaybe<BinStatusCodeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BinStatusFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type BinStatusInput = {
  /** Entity code */
  binStatusCode: BinStatusCode;
  /** Bin status detail's active flag */
  on: Scalars['Boolean']['input'];
};

export type BinStatusMapping = {
  __typename?: 'BinStatusMapping';
  /** Entity ID */
  binId: Scalars['ID']['output'];
  /** Entity ID */
  binStatusId: Scalars['ID']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type BinStatusMappingFilter = {
  and?: InputMaybe<Array<BinStatusMappingFilter>>;
  binId?: InputMaybe<IdFilterComparison>;
  binStatusId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<BinStatusMappingFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type BinStatusMappingInput = {
  /** Bin Ids for mapping assignment */
  binIds: Array<Scalars['ID']['input']>;
  /** Bin Status Input */
  binStatus: Array<BinStatusInput>;
};

export type BinStatusMappingInputDto = {
  /** Bin Status mappings */
  binStatusMappings: BinStatusMappingInput;
};

export type BinStatusMappingJson = {
  __typename?: 'BinStatusMappingJson';
  binStatusCode?: Maybe<Scalars['String']['output']>;
  binStatusId?: Maybe<Scalars['ID']['output']>;
  binStatusLabel?: Maybe<Scalars['String']['output']>;
  editable?: Maybe<Scalars['Boolean']['output']>;
  mapped?: Maybe<Scalars['Boolean']['output']>;
};

export type BinStatusMappingOffsetConnection = {
  __typename?: 'BinStatusMappingOffsetConnection';
  /** Array of nodes. */
  nodes: Array<BinStatusMapping>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BinStatusMappingSort = {
  direction: SortDirection;
  field: BinStatusMappingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BinStatusMappingSortFields {
  BinId = 'binId',
  BinStatusId = 'binStatusId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type BinStatusOffsetConnection = {
  __typename?: 'BinStatusOffsetConnection';
  /** Array of nodes. */
  nodes: Array<BinStatus>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BinStatusSort = {
  direction: SortDirection;
  field: BinStatusSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BinStatusSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Label = 'label',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type BinStockDetailDto = {
  /** Entity ID */
  deliveryItemId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  fulfillmentItemId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  lotId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  productId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** Entity ID */
  stockStatusId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  unitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
};

export enum BinType {
  Default = 'default',
  Delivery = 'delivery',
  Disposition = 'disposition',
  Fulfillment = 'fulfillment',
  LostAndFound = 'lostAndFound',
  Planned = 'planned',
  Staging = 'staging'
}

export type BinTypeFilterComparison = {
  eq?: InputMaybe<BinType>;
  gt?: InputMaybe<BinType>;
  gte?: InputMaybe<BinType>;
  iLike?: InputMaybe<BinType>;
  in?: InputMaybe<Array<BinType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<BinType>;
  lt?: InputMaybe<BinType>;
  lte?: InputMaybe<BinType>;
  neq?: InputMaybe<BinType>;
  notILike?: InputMaybe<BinType>;
  notIn?: InputMaybe<Array<BinType>>;
  notLike?: InputMaybe<BinType>;
};

export type BinUpdateInput = {
  /** Column where the bin is located. */
  aisleColumnId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's area ID (foreign key) */
  aisleId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's area ID (foreign key) */
  areaId?: InputMaybe<Scalars['ID']['input']>;
  /** Size and capacity information for a bin */
  binSizeId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp of latest inventory count approval */
  lastCount?: InputMaybe<Scalars['DateTime']['input']>;
  /** Level where the bin is located. */
  level?: InputMaybe<Scalars['Int']['input']>;
  pick_point?: InputMaybe<Scalars['JSON']['input']>;
  /** If Bin is blocked from product being putaway */
  putawayBlock?: InputMaybe<Scalars['Boolean']['input']>;
  putaway_point?: InputMaybe<Scalars['JSON']['input']>;
  /** If Bin is blocked from product being removed */
  removalBlock?: InputMaybe<Scalars['Boolean']['input']>;
  rotation?: InputMaybe<Scalars['Float']['input']>;
  /** Verification code from a barcode scan */
  verificationCode?: InputMaybe<Scalars['String']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
  /** x coordinate location */
  x?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  y?: InputMaybe<Scalars['Float']['input']>;
  /** Z coordinate location */
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type BinUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: BinUpdateInput;
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Business Partner model */
export type BusinessPartner = {
  __typename?: 'BusinessPartner';
  /** Timezone */
  addressTimezone?: Maybe<Scalars['String']['output']>;
  /** SAP address unique identifier */
  addressUUID?: Maybe<Scalars['String']['output']>;
  /** Name of city */
  cityName?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  code: Scalars['String']['output'];
  /** Country */
  country?: Maybe<Scalars['String']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** SAP Customer Code */
  customerCode?: Maybe<Scalars['String']['output']>;
  /** Phone number */
  defaultPhoneNumber?: Maybe<Scalars['String']['output']>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Often used for county, prefecture, etc. */
  district?: Maybe<Scalars['String']['output']>;
  /** Email address */
  email?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Language */
  language?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  name?: Maybe<Scalars['String']['output']>;
  /** Phone number */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Region / State */
  region?: Maybe<Scalars['String']['output']>;
  /** Open text search term */
  searchTerm1?: Maybe<Scalars['String']['output']>;
  /** Open text search term */
  searchTerm2?: Maybe<Scalars['String']['output']>;
  /** house number and street name */
  streetAddress?: Maybe<Scalars['String']['output']>;
  /** SAP Supplier code */
  supplierCode?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Validity end date */
  validityEnd?: Maybe<Scalars['DateTime']['output']>;
  /** Validity start date */
  validityStart?: Maybe<Scalars['DateTime']['output']>;
};

export type BusinessPartnerCreateInput = {
  /** Timezone */
  addressTimezone?: InputMaybe<Scalars['String']['input']>;
  /** SAP address unique identifier */
  addressUUID?: InputMaybe<Scalars['String']['input']>;
  /** Name of city */
  cityName?: InputMaybe<Scalars['String']['input']>;
  /** Entity code */
  code: Scalars['String']['input'];
  /** Country */
  country?: InputMaybe<Scalars['String']['input']>;
  /** SAP Customer Code */
  customerCode?: InputMaybe<Scalars['String']['input']>;
  /** Phone number */
  defaultPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Often used for county, prefecture, etc. */
  district?: InputMaybe<Scalars['String']['input']>;
  /** Email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Language */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Entity's human readable name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Phone number */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Postal code */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Region / State */
  region?: InputMaybe<Scalars['String']['input']>;
  /** Open text search term */
  searchTerm1?: InputMaybe<Scalars['String']['input']>;
  /** Open text search term */
  searchTerm2?: InputMaybe<Scalars['String']['input']>;
  /** house number and street name */
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  /** SAP Supplier code */
  supplierCode?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  /** Validity end date */
  validityEnd?: InputMaybe<Scalars['DateTime']['input']>;
  /** Validity start date */
  validityStart?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BusinessPartnerCreateManyInput = {
  /** Array of records to create */
  businessPartners: Array<BusinessPartnerCreateInput>;
};

export type BusinessPartnerCreateOneInput = {
  /** The record to create */
  businessPartner: BusinessPartnerCreateInput;
};

export type BusinessPartnerFilter = {
  addressTimezone?: InputMaybe<StringFieldComparison>;
  addressUUID?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<BusinessPartnerFilter>>;
  cityName?: InputMaybe<StringFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customerCode?: InputMaybe<StringFieldComparison>;
  defaultPhoneNumber?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  district?: InputMaybe<StringFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  language?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BusinessPartnerFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  postalCode?: InputMaybe<StringFieldComparison>;
  region?: InputMaybe<StringFieldComparison>;
  searchTerm1?: InputMaybe<StringFieldComparison>;
  searchTerm2?: InputMaybe<StringFieldComparison>;
  streetAddress?: InputMaybe<StringFieldComparison>;
  supplierCode?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  validityEnd?: InputMaybe<DateFieldComparison>;
  validityStart?: InputMaybe<DateFieldComparison>;
};

export type BusinessPartnerOffsetConnection = {
  __typename?: 'BusinessPartnerOffsetConnection';
  /** Array of nodes. */
  nodes: Array<BusinessPartner>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BusinessPartnerSort = {
  direction: SortDirection;
  field: BusinessPartnerSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BusinessPartnerSortFields {
  AddressTimezone = 'addressTimezone',
  AddressUuid = 'addressUUID',
  CityName = 'cityName',
  Code = 'code',
  Country = 'country',
  CreatedAt = 'createdAt',
  CustomerCode = 'customerCode',
  DefaultPhoneNumber = 'defaultPhoneNumber',
  DeletedAt = 'deletedAt',
  District = 'district',
  Email = 'email',
  Id = 'id',
  Language = 'language',
  Name = 'name',
  PhoneNumber = 'phoneNumber',
  PostalCode = 'postalCode',
  Region = 'region',
  SearchTerm1 = 'searchTerm1',
  SearchTerm2 = 'searchTerm2',
  StreetAddress = 'streetAddress',
  SupplierCode = 'supplierCode',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  ValidityEnd = 'validityEnd',
  ValidityStart = 'validityStart'
}

export type BusinessPartnerUpdateInput = {
  /** Timezone */
  addressTimezone?: InputMaybe<Scalars['String']['input']>;
  /** SAP address unique identifier */
  addressUUID?: InputMaybe<Scalars['String']['input']>;
  /** Name of city */
  cityName?: InputMaybe<Scalars['String']['input']>;
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Country */
  country?: InputMaybe<Scalars['String']['input']>;
  /** SAP Customer Code */
  customerCode?: InputMaybe<Scalars['String']['input']>;
  /** Phone number */
  defaultPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Often used for county, prefecture, etc. */
  district?: InputMaybe<Scalars['String']['input']>;
  /** Email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Language */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Entity's human readable name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Phone number */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Postal code */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Region / State */
  region?: InputMaybe<Scalars['String']['input']>;
  /** Open text search term */
  searchTerm1?: InputMaybe<Scalars['String']['input']>;
  /** Open text search term */
  searchTerm2?: InputMaybe<Scalars['String']['input']>;
  /** house number and street name */
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  /** SAP Supplier code */
  supplierCode?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  /** Validity end date */
  validityEnd?: InputMaybe<Scalars['DateTime']['input']>;
  /** Validity start date */
  validityStart?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BusinessPartnerUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: BusinessPartnerUpdateInput;
};

export type CancelManyDeliveryItemsDto = {
  /** Entity ID */
  deliveryItemId: Scalars['ID']['input'];
};

export type CancelPutawayTaskInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TaskCancelPutawayInput;
};

/** Company model */
export type Company = {
  __typename?: 'Company';
  /** Entity code */
  code: Scalars['String']['output'];
  contactInfo?: Maybe<ContactInfo>;
  /** Entity's contact info ID (foreign key) */
  contactInfoId?: Maybe<Scalars['ID']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  displayPreference?: Maybe<DisplayPreference>;
  displayPreferenceId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  /** Organization id */
  organizationId?: Maybe<Scalars['ID']['output']>;
  products?: Maybe<ProductNodes>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  warehouses?: Maybe<WarehouseNodes>;
};

export type CompanyCreateInput = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Enity's contact info */
  contactInfoId?: InputMaybe<Scalars['ID']['input']>;
  /** Enity's display preferences */
  displayPreferenceId?: InputMaybe<Scalars['ID']['input']>;
  /** ApiDocs */
  name: Scalars['String']['input'];
  /** Entity's organization ID (foreign key) */
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type CompanyCreateOneInput = {
  /** The record to create */
  company: CompanyCreateInput;
};

export type CompanyFilter = {
  and?: InputMaybe<Array<CompanyFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  contactInfoId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyFilter>>;
  organizationId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type CompanyNodes = {
  __typename?: 'CompanyNodes';
  nodes: Array<Company>;
};

export type CompanyOffsetConnection = {
  __typename?: 'CompanyOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Company>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CompanySort = {
  direction: SortDirection;
  field: CompanySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CompanySortFields {
  Code = 'code',
  ContactInfoId = 'contactInfoId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  OrganizationId = 'organizationId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type CompanyUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Enity's contact info */
  contactInfoId?: InputMaybe<Scalars['ID']['input']>;
  /** Enity's display preferences */
  displayPreferenceId?: InputMaybe<Scalars['ID']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Entity's organization ID (foreign key) */
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type CompanyUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: CompanyUpdateInput;
};

export type CompleteBarcodeEnrollmentDto = {
  /** Barcode entity ID */
  barcodeId: Scalars['ID']['input'];
  /** Entity ID */
  businessPartnerIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Field assignment to application identifiers */
  fields: Array<BarcodeField>;
};

export type CompleteBarcodeEnrollmentInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: CompleteBarcodeEnrollmentDto;
};

export type CompleteBinPiTaskInputDto = {
  /** Bin Stock */
  inventory: Array<BinStockDetailDto>;
  /** Entity ID */
  taskId: Scalars['ID']['input'];
  /** Unknown Bin Stock */
  unknownInventory?: InputMaybe<Array<UnknownBinStockDetailDto>>;
};

export type CompleteBinPiTaskResponseItem = {
  __typename?: 'CompleteBinPITaskResponseItem';
  /** Entity ID */
  deliveryItemId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  fulfillmentItemId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  productId?: Maybe<Scalars['ID']['output']>;
  quantity?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  stockStatusId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  unitOfMeasureId?: Maybe<Scalars['ID']['output']>;
};

export type CompleteBinPiTaskResponseObject = {
  __typename?: 'CompleteBinPITaskResponseObject';
  /** Added Stock */
  additions: Array<CompleteBinPiTaskResponseItem>;
  /** Expected Stock */
  expected: Array<CompleteBinPiTaskResponseItem>;
  /** Missing Stock */
  missing: Array<CompleteBinPiTaskResponseItem>;
};

export type CompleteBinToBinTaskInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TaskCompleteBinToBinInput;
};

export type CompleteManyBinPiApprovalTaskDto = {
  /** Indicates whether the approval tsk is approved or denied */
  approved: Scalars['Boolean']['input'];
  /** Due date */
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Indicates whether the count should be guided or blind */
  recountCountType?: InputMaybe<PhysicalInventoryCountType>;
  /** Entity ID */
  taskId: Scalars['ID']['input'];
};

export type CompleteManyBinPiApprovalTaskInputDto = {
  /** Dto wrapper */
  approvalItems: Array<CompleteManyBinPiApprovalTaskDto>;
};

export type CompleteManyBinPiTaskInputDto = {
  /** Dto Wrapper */
  countItems: Array<CompleteBinPiTaskInputDto>;
};

export type CompletePiTaskInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TaskCompletePiInput;
};

export type CompletePickTaskInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TaskCompletePickInput;
};

export type CompletePickToDockTaskInput = {
  /** Entity's bin ID (foreign key) */
  destinationBinId: Scalars['ID']['input'];
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['input'];
};

export type CompletePickToStagingTaskInput = {
  /** Unit of measure ID */
  completedInUnitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
  /** Source License Plate Id */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Quantity of product */
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** Source bin ID (foreign key) */
  sourceBinId: Scalars['ID']['input'];
  /** Source lot ID (foreign key) */
  sourceLotId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['input'];
};

export type CompletePutawayTaskInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TaskCompletePutawayInput;
};

/** Contact Info model */
export type ContactInfo = {
  __typename?: 'ContactInfo';
  /** Town or City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country */
  country?: Maybe<Scalars['String']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Contact email address */
  email?: Maybe<Scalars['String']['output']>;
  /** Fax Number */
  fax?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Phone number */
  phone?: Maybe<Scalars['String']['output']>;
  /** State */
  state?: Maybe<Scalars['String']['output']>;
  /** Street 1 */
  street1?: Maybe<Scalars['String']['output']>;
  /** Street 2 */
  street2?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Zip code */
  zip?: Maybe<Scalars['String']['output']>;
};

export type ContactInfoCreateOneInput = {
  /** The record to create */
  contactInfo: CreateContactInfoDto;
};

export type ContactInfoFilter = {
  and?: InputMaybe<Array<ContactInfoFilter>>;
  city?: InputMaybe<StringFieldComparison>;
  country?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  fax?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ContactInfoFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street1?: InputMaybe<StringFieldComparison>;
  street2?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  zip?: InputMaybe<StringFieldComparison>;
};

export type ContactInfoOffsetConnection = {
  __typename?: 'ContactInfoOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ContactInfo>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ContactInfoSort = {
  direction: SortDirection;
  field: ContactInfoSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ContactInfoSortFields {
  City = 'city',
  Country = 'country',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  Fax = 'fax',
  Id = 'id',
  Phone = 'phone',
  State = 'state',
  Street1 = 'street1',
  Street2 = 'street2',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  Zip = 'zip'
}

export type ContactInfoUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: UpdateContactInfoDto;
};

export type Contract = {
  __typename?: 'Contract';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  /** Contract type template or contract */
  type: ContractType;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type ContractCreateInput = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Contract type template or contract */
  type: ContractType;
};

export type ContractCreateOneInput = {
  /** The record to create */
  contract: ContractCreateInput;
};

export type ContractFilter = {
  and?: InputMaybe<Array<ContractFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContractFilter>>;
  type?: InputMaybe<ContractTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type ContractOffsetConnection = {
  __typename?: 'ContractOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Contract>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ContractRule = {
  __typename?: 'ContractRule';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Conditional data structure for a contract rule */
  conditions: Array<ContractRuleCondition>;
  /** Contract Id */
  contractId: Scalars['ID']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Fee type of the contract rule */
  feeType: ContractRuleFeeType;
  /** Frequency that the contract rule will be applied */
  frequency: Scalars['String']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Cost of contract rule in USD */
  value: Scalars['Float']['output'];
  /** Rate unit of measure for the contract rule value */
  valueRateUom?: Maybe<Scalars['String']['output']>;
};

export type ContractRuleCondition = {
  __typename?: 'ContractRuleCondition';
  /** Data source(table or query) for the contract rule */
  dataSource: Scalars['String']['output'];
  /** Field in the data source for the contract rule */
  dataSourceField: Scalars['String']['output'];
  /** Value of the data source field to apply the operator towards for a contract rule */
  dataSourceValue: Scalars['String']['output'];
  /** Operator applied to the field and value of a data source for a contract rule */
  operator: Scalars['String']['output'];
};

export type ContractRuleConditionInput = {
  /** Data source(table or query) for the contract rule */
  dataSource: Scalars['String']['input'];
  /** Field in the data source for the contract rule */
  dataSourceField: Scalars['String']['input'];
  /** Value of the data source field to apply the operator towards for a contract rule */
  dataSourceValue: Scalars['String']['input'];
  /** Operator applied to the field and value of a data source for a contract rule */
  operator: Scalars['String']['input'];
};

export type ContractRuleCreateInput = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Conditional data structure for a contract rule */
  conditions: Array<ContractRuleConditionInput>;
  /** Contract Id */
  contractId: Scalars['ID']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Fee type of the contract rule */
  feeType: ContractRuleFeeType;
  /** Frequency that the contract rule will be applied */
  frequency: Scalars['String']['input'];
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Cost of contract rule in USD */
  value: Scalars['Float']['input'];
  /** Rate unit of measure for the contract rule value */
  valueRateUom?: InputMaybe<Scalars['String']['input']>;
};

export type ContractRuleCreateOneInput = {
  /** The record to create */
  contractRule: ContractRuleCreateInput;
};

export enum ContractRuleFeeType {
  Accessorial = 'accessorial',
  Fixed = 'fixed',
  Handling = 'handling',
  Storage = 'storage'
}

export type ContractRuleFeeTypeFilterComparison = {
  eq?: InputMaybe<ContractRuleFeeType>;
  gt?: InputMaybe<ContractRuleFeeType>;
  gte?: InputMaybe<ContractRuleFeeType>;
  iLike?: InputMaybe<ContractRuleFeeType>;
  in?: InputMaybe<Array<ContractRuleFeeType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ContractRuleFeeType>;
  lt?: InputMaybe<ContractRuleFeeType>;
  lte?: InputMaybe<ContractRuleFeeType>;
  neq?: InputMaybe<ContractRuleFeeType>;
  notILike?: InputMaybe<ContractRuleFeeType>;
  notIn?: InputMaybe<Array<ContractRuleFeeType>>;
  notLike?: InputMaybe<ContractRuleFeeType>;
};

export type ContractRuleFilter = {
  and?: InputMaybe<Array<ContractRuleFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  contractId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  feeType?: InputMaybe<ContractRuleFeeTypeFilterComparison>;
  frequency?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContractRuleFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  value?: InputMaybe<FloatFieldComparison>;
  valueRateUom?: InputMaybe<StringFieldComparison>;
};

export type ContractRuleOffsetConnection = {
  __typename?: 'ContractRuleOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ContractRule>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ContractRuleSort = {
  direction: SortDirection;
  field: ContractRuleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ContractRuleSortFields {
  Code = 'code',
  ContractId = 'contractId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  FeeType = 'feeType',
  Frequency = 'frequency',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  Value = 'value',
  ValueRateUom = 'valueRateUom'
}

export type ContractRuleUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Conditional data structure for a contract rule */
  conditions?: InputMaybe<Array<ContractRuleConditionInput>>;
  /** Contract Id */
  contractId?: InputMaybe<Scalars['ID']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Fee type of the contract rule */
  feeType?: InputMaybe<ContractRuleFeeType>;
  /** Frequency that the contract rule will be applied */
  frequency?: InputMaybe<Scalars['String']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Cost of contract rule in USD */
  value?: InputMaybe<Scalars['Float']['input']>;
  /** Rate unit of measure for the contract rule value */
  valueRateUom?: InputMaybe<Scalars['String']['input']>;
};

export type ContractRuleUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: ContractRuleUpdateInput;
};

export type ContractSort = {
  direction: SortDirection;
  field: ContractSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ContractSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export enum ContractType {
  Contract = 'contract',
  Template = 'template'
}

export type ContractTypeFilterComparison = {
  eq?: InputMaybe<ContractType>;
  gt?: InputMaybe<ContractType>;
  gte?: InputMaybe<ContractType>;
  iLike?: InputMaybe<ContractType>;
  in?: InputMaybe<Array<ContractType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ContractType>;
  lt?: InputMaybe<ContractType>;
  lte?: InputMaybe<ContractType>;
  neq?: InputMaybe<ContractType>;
  notILike?: InputMaybe<ContractType>;
  notIn?: InputMaybe<Array<ContractType>>;
  notLike?: InputMaybe<ContractType>;
};

export type ContractUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Contract type template or contract */
  type?: InputMaybe<ContractType>;
};

export type ContractUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: ContractUpdateInput;
};

export type CopyStockStatusTypeInputDto = {
  /** The record to create */
  copyStockStatus: StockStatusTypeCopy;
};

export enum CountArtifactApprovalStatus {
  Approved = 'approved',
  Denied = 'denied'
}

export type CountArtifactApprovalStatusFilterComparison = {
  eq?: InputMaybe<CountArtifactApprovalStatus>;
  gt?: InputMaybe<CountArtifactApprovalStatus>;
  gte?: InputMaybe<CountArtifactApprovalStatus>;
  iLike?: InputMaybe<CountArtifactApprovalStatus>;
  in?: InputMaybe<Array<CountArtifactApprovalStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<CountArtifactApprovalStatus>;
  lt?: InputMaybe<CountArtifactApprovalStatus>;
  lte?: InputMaybe<CountArtifactApprovalStatus>;
  neq?: InputMaybe<CountArtifactApprovalStatus>;
  notILike?: InputMaybe<CountArtifactApprovalStatus>;
  notIn?: InputMaybe<Array<CountArtifactApprovalStatus>>;
  notLike?: InputMaybe<CountArtifactApprovalStatus>;
};

export enum CountArtifactCompleteStatus {
  Canceled = 'canceled',
  Complete = 'complete',
  NotStarted = 'notStarted'
}

export type CountArtifactCompleteStatusFilterComparison = {
  eq?: InputMaybe<CountArtifactCompleteStatus>;
  gt?: InputMaybe<CountArtifactCompleteStatus>;
  gte?: InputMaybe<CountArtifactCompleteStatus>;
  iLike?: InputMaybe<CountArtifactCompleteStatus>;
  in?: InputMaybe<Array<CountArtifactCompleteStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<CountArtifactCompleteStatus>;
  lt?: InputMaybe<CountArtifactCompleteStatus>;
  lte?: InputMaybe<CountArtifactCompleteStatus>;
  neq?: InputMaybe<CountArtifactCompleteStatus>;
  notILike?: InputMaybe<CountArtifactCompleteStatus>;
  notIn?: InputMaybe<Array<CountArtifactCompleteStatus>>;
  notLike?: InputMaybe<CountArtifactCompleteStatus>;
};

export type CountArtifactQueryModel = {
  __typename?: 'CountArtifactQueryModel';
  approvalTaskCode?: Maybe<Scalars['String']['output']>;
  approvalTaskId?: Maybe<Scalars['String']['output']>;
  areaCode?: Maybe<Scalars['String']['output']>;
  areaId?: Maybe<Scalars['String']['output']>;
  baseCountedQuantity: Scalars['String']['output'];
  baseExpectedQuantity: Scalars['String']['output'];
  binCode?: Maybe<Scalars['String']['output']>;
  binId?: Maybe<Scalars['ID']['output']>;
  completionStatus: CountArtifactCompleteStatus;
  countTaskCode?: Maybe<Scalars['String']['output']>;
  countTaskCompletedAt?: Maybe<Scalars['String']['output']>;
  countTaskCompletedByUserFirstName?: Maybe<Scalars['String']['output']>;
  countTaskCompletedByUserId?: Maybe<Scalars['String']['output']>;
  countTaskCompletedByUserLastName?: Maybe<Scalars['String']['output']>;
  countTaskId: Scalars['String']['output'];
  countedQuantity: Scalars['String']['output'];
  countedQuantityUOMCode?: Maybe<Scalars['String']['output']>;
  countedQuantityUOMId: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  expectedQuantity: Scalars['String']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Timestamp of latest inventory count approval */
  licensePlateLastCount?: Maybe<Scalars['DateTime']['output']>;
  /** Status determining if the license plate and its contents are successfully synced with the ERP ledger. */
  licensePlateLedgerSyncStatus?: Maybe<LedgerSyncStatus>;
  /** Reason ledger sync status is not successful. */
  licensePlateLedgerSyncStatusReason?: Maybe<Scalars['String']['output']>;
  licensePlateStockAdjustment?: Maybe<Scalars['Boolean']['output']>;
  lotCode?: Maybe<Scalars['String']['output']>;
  lotId?: Maybe<Scalars['ID']['output']>;
  productCode: Scalars['String']['output'];
  productId: Scalars['ID']['output'];
  quantityDifference: Scalars['String']['output'];
  status?: Maybe<CountArtifactApprovalStatus>;
  stockStatusCode?: Maybe<Scalars['String']['output']>;
  stockStatusId: Scalars['ID']['output'];
  stockStatusLabel?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt: Scalars['DateTime']['output'];
};

export type CountArtifactQueryModelFilter = {
  and?: InputMaybe<Array<CountArtifactQueryModelFilter>>;
  approvalTaskCode?: InputMaybe<StringFieldComparison>;
  approvalTaskId?: InputMaybe<StringFieldComparison>;
  areaCode?: InputMaybe<StringFieldComparison>;
  areaId?: InputMaybe<StringFieldComparison>;
  baseCountedQuantity?: InputMaybe<StringFieldComparison>;
  baseExpectedQuantity?: InputMaybe<StringFieldComparison>;
  binCode?: InputMaybe<StringFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  completionStatus?: InputMaybe<CountArtifactCompleteStatusFilterComparison>;
  countTaskCode?: InputMaybe<StringFieldComparison>;
  countTaskCompletedAt?: InputMaybe<StringFieldComparison>;
  countTaskCompletedByUserFirstName?: InputMaybe<StringFieldComparison>;
  countTaskCompletedByUserId?: InputMaybe<StringFieldComparison>;
  countTaskCompletedByUserLastName?: InputMaybe<StringFieldComparison>;
  countTaskId?: InputMaybe<StringFieldComparison>;
  countedQuantity?: InputMaybe<StringFieldComparison>;
  countedQuantityUOMCode?: InputMaybe<StringFieldComparison>;
  countedQuantityUOMId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  expectedQuantity?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  licensePlateCode?: InputMaybe<StringFieldComparison>;
  licensePlateId?: InputMaybe<IdFilterComparison>;
  licensePlateLastCount?: InputMaybe<DateFieldComparison>;
  licensePlateLedgerSyncStatus?: InputMaybe<LedgerSyncStatusFilterComparison>;
  licensePlateLedgerSyncStatusReason?: InputMaybe<StringFieldComparison>;
  licensePlateStockAdjustment?: InputMaybe<BooleanFieldComparison>;
  lotCode?: InputMaybe<StringFieldComparison>;
  lotId?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CountArtifactQueryModelFilter>>;
  productCode?: InputMaybe<StringFieldComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  quantityDifference?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<CountArtifactApprovalStatusFilterComparison>;
  stockStatusCode?: InputMaybe<StringFieldComparison>;
  stockStatusId?: InputMaybe<IdFilterComparison>;
  stockStatusLabel?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CountArtifactQueryModelOffsetConnection = {
  __typename?: 'CountArtifactQueryModelOffsetConnection';
  /** Array of nodes. */
  nodes: Array<CountArtifactQueryModel>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CountArtifactQueryModelSort = {
  direction: SortDirection;
  field: CountArtifactQueryModelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CountArtifactQueryModelSortFields {
  ApprovalTaskCode = 'approvalTaskCode',
  ApprovalTaskId = 'approvalTaskId',
  AreaCode = 'areaCode',
  AreaId = 'areaId',
  BaseCountedQuantity = 'baseCountedQuantity',
  BaseExpectedQuantity = 'baseExpectedQuantity',
  BinCode = 'binCode',
  BinId = 'binId',
  CompletionStatus = 'completionStatus',
  CountTaskCode = 'countTaskCode',
  CountTaskCompletedAt = 'countTaskCompletedAt',
  CountTaskCompletedByUserFirstName = 'countTaskCompletedByUserFirstName',
  CountTaskCompletedByUserId = 'countTaskCompletedByUserId',
  CountTaskCompletedByUserLastName = 'countTaskCompletedByUserLastName',
  CountTaskId = 'countTaskId',
  CountedQuantity = 'countedQuantity',
  CountedQuantityUomCode = 'countedQuantityUOMCode',
  CountedQuantityUomId = 'countedQuantityUOMId',
  CreatedAt = 'createdAt',
  ExpectedQuantity = 'expectedQuantity',
  Id = 'id',
  LicensePlateCode = 'licensePlateCode',
  LicensePlateId = 'licensePlateId',
  LicensePlateLastCount = 'licensePlateLastCount',
  LicensePlateLedgerSyncStatus = 'licensePlateLedgerSyncStatus',
  LicensePlateLedgerSyncStatusReason = 'licensePlateLedgerSyncStatusReason',
  LicensePlateStockAdjustment = 'licensePlateStockAdjustment',
  LotCode = 'lotCode',
  LotId = 'lotId',
  ProductCode = 'productCode',
  ProductId = 'productId',
  QuantityDifference = 'quantityDifference',
  Status = 'status',
  StockStatusCode = 'stockStatusCode',
  StockStatusId = 'stockStatusId',
  StockStatusLabel = 'stockStatusLabel',
  UpdatedAt = 'updatedAt'
}

export type CountQuery = {
  body: SearchBodyQuery;
  index?: InputMaybe<Array<EsIndices>>;
};

export type CreateAndCompleteOneFoundStockTaskDto = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Delivery or fulfillment erp code */
  fulfillmentCode: Scalars['String']['input'];
  /** Destination license plate description */
  licensePlateDescription?: InputMaybe<Scalars['String']['input']>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** ERP delivery block */
  licensePlateStatus?: InputMaybe<LicensePlateStatusState>;
  /** Source lot ID (foreign key) */
  lotId?: InputMaybe<Scalars['ID']['input']>;
  /** Product code */
  productCode: Scalars['String']['input'];
  /** Quantity of product */
  quantity: Scalars['String']['input'];
  /** Entity's stock status type ID (foreign key) */
  stockStatusId: Scalars['ID']['input'];
};

export type CreateBarcodeEnrollmentInput = {
  /** Entity ID */
  businessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  /** Data payload from a barcode scan */
  payload: Scalars['JSONObject']['input'];
  /** Barcode scanner type */
  scanner: BarcodeScanner;
};

export type CreateBarcodeEnrollmentInputDto = {
  /** barcode enrollment dto */
  enrollment: CreateBarcodeEnrollmentInput;
};

export type CreateBinPiTaskInputDto = {
  /** The record to create */
  physicalInventoryByBin: TaskCreateBinPiInput;
};

export type CreateBinToBinTaskInputDto = {
  /** The record to create */
  binToBinMovement: TaskCreateBinToBinInput;
};

export type CreateContactInfoDto = {
  /** Town or City */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Country */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Contact email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Fax Number */
  fax?: InputMaybe<Scalars['String']['input']>;
  /** Phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** State */
  state?: InputMaybe<Scalars['String']['input']>;
  /** Street 1 */
  street1?: InputMaybe<Scalars['String']['input']>;
  /** Street 2 */
  street2?: InputMaybe<Scalars['String']['input']>;
  /** Zip code */
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOneFulfillmentBlockInput = {
  /** The record to create */
  fulfillmentBlock: FulfillmentBlockCreateInput;
};

export type CreateOneIssueStockTaskDto = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Autocomplete the task on creation */
  autocomplete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Delivery item ID (foreign key) */
  deliveryItemId?: InputMaybe<Scalars['ID']['input']>;
  /** Fulfillment item id (foreign key) */
  fulfillmentItemId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Quantity of product */
  quantity: Scalars['String']['input'];
  /** Entity's bin ID (foreign key) */
  sourceBinId: Scalars['ID']['input'];
  /** Entity's license plate ID (foreign key) */
  sourceLicensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Source lot ID (foreign key) */
  sourceLotId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's stock status type ID (foreign key) */
  sourceStockStatusId: Scalars['ID']['input'];
};

export type CreateOneTaskDispositionInput = {
  /** The record to create */
  taskDisposition: CreateTaskDisposition;
};

export type CreateOneTaskLicensePlateStockStatusInput = {
  /** The record to create */
  taskLicensePlateStockStatus: CreateTaskLicensePlateStockStatus;
};

export type CreatePiTaskInputDto = {
  /** The record to create */
  physicalInventory: TaskCreatePiInput;
};

export type CreatePickTaskInputDto = {
  /** The record to create */
  fulfillment: TaskCreatePickInput;
};

export type CreatePutawayTaskInputDto = {
  /** The record to create */
  delivery: TaskCreatePutawayInput;
};

export type CreateStockFromProductionTaskInputDto = {
  /** Dto Wrapper */
  createStockFromProduction: TaskCreateStockFromProductionDto;
};

export type CreateTaskDisposition = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** ID of stored image */
  images?: InputMaybe<Array<TaskDispositionImages>>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Notes for a submitted disposition */
  notes?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTaskLicensePlateStockStatus = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Autocomplete the task on creation */
  autocomplete?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of stored image */
  images?: InputMaybe<Array<TaskLicensePlateStockStatusImages>>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Notes for a submitted disposition */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** Entity's stock status type ID (foreign key) */
  stockStatusId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreatedOrUpdatedLotsResult = {
  __typename?: 'CreatedOrUpdatedLotsResult';
  createdOrUpdatedLots?: Maybe<Array<Lot>>;
  lotsCreated?: Maybe<Array<Scalars['ID']['output']>>;
  lotsUpdated?: Maybe<Array<Scalars['ID']['output']>>;
};

export enum DataGenerationType {
  Demo = 'demo',
  Random = 'random',
  Testing = 'testing'
}

export type DatasetMaterials = {
  __typename?: 'DatasetMaterials';
  available_stock?: Maybe<Scalars['String']['output']>;
  base_unit_of_measure?: Maybe<Scalars['String']['output']>;
  batch_number?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  ff_dataset_id?: Maybe<Scalars['ID']['output']>;
  material?: Maybe<Scalars['String']['output']>;
  material_description?: Maybe<Scalars['String']['output']>;
  storage_bin?: Maybe<Scalars['String']['output']>;
  total_stock?: Maybe<Scalars['String']['output']>;
};

export type DatasetMaterialsFilter = {
  and?: InputMaybe<Array<DatasetMaterialsFilter>>;
  available_stock?: InputMaybe<StringFieldComparison>;
  base_unit_of_measure?: InputMaybe<StringFieldComparison>;
  batch_number?: InputMaybe<StringFieldComparison>;
  ff_dataset_id?: InputMaybe<IdFilterComparison>;
  material?: InputMaybe<StringFieldComparison>;
  material_description?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DatasetMaterialsFilter>>;
  storage_bin?: InputMaybe<StringFieldComparison>;
  total_stock?: InputMaybe<StringFieldComparison>;
};

export type DatasetMaterialsOffsetConnection = {
  __typename?: 'DatasetMaterialsOffsetConnection';
  /** Array of nodes. */
  nodes: Array<DatasetMaterials>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DatasetMaterialsSort = {
  direction: SortDirection;
  field: DatasetMaterialsSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DatasetMaterialsSortFields {
  AvailableStock = 'available_stock',
  BaseUnitOfMeasure = 'base_unit_of_measure',
  BatchNumber = 'batch_number',
  FfDatasetId = 'ff_dataset_id',
  Material = 'material',
  MaterialDescription = 'material_description',
  StorageBin = 'storage_bin',
  TotalStock = 'total_stock'
}

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']['input'];
  upper: Scalars['DateTime']['input'];
};

export type DeleteOneBarcodeInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
};

export type DeleteOneEntityIdInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
};

export type DeleteOneFulfillmentBlockInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
};

/** Delivery model */
export type Delivery = {
  __typename?: 'Delivery';
  availability?: Maybe<Scalars['Int']['output']>;
  /** Bill of Lading */
  billOfLading?: Maybe<Scalars['String']['output']>;
  /** ERP delivery block */
  blockStatus?: Maybe<Scalars['String']['output']>;
  /** Delivery category */
  category?: Maybe<DeliveryCategory>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Delivery Document Type */
  deliveryDocumentType?: Maybe<Scalars['String']['output']>;
  deliveryItems?: Maybe<DeliveryItemNodes>;
  /** Overall status for the delivery or fulfillment */
  deliveryStatus?: Maybe<DeliveryCompletionStatus>;
  door?: Maybe<Door>;
  /** Entity's door ID (foreign key) */
  doorId?: Maybe<Scalars['ID']['output']>;
  /** Expected delivery date */
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Reason blocked in ERP */
  erpBlockingReason?: Maybe<Scalars['String']['output']>;
  /** Erp Delivery Code */
  erpCode: Scalars['String']['output'];
  /** Date created in ERP */
  erpCreated?: Maybe<Scalars['DateTime']['output']>;
  /** When data was last updated in ERP */
  erpLastChanged?: Maybe<Scalars['DateTime']['output']>;
  erpPurchaseOrder?: Maybe<Scalars['String']['output']>;
  /** Reference document */
  erpSalesOrder?: Maybe<Scalars['String']['output']>;
  /** Export */
  export?: Maybe<Scalars['String']['output']>;
  fulfillmentBlock?: Maybe<FulfillmentBlock>;
  /** Fulfillment Block */
  fulfillmentBlockId?: Maybe<Scalars['ID']['output']>;
  fulfillmentItems?: Maybe<FulfillmentItemNodes>;
  /** Goods receipt or goods issue status */
  goodsReceiptOrIssueStatus?: Maybe<DeliveryCompletionStatus>;
  hasTasks: Scalars['Boolean']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Load/unload status */
  loadOrUnloadStatus?: Maybe<DeliveryCompletionStatus>;
  orderConfirmationFile?: Maybe<WarehouseOpFile>;
  /** ID for a warehouse op file */
  orderConfirmationFileId?: Maybe<Scalars['ID']['output']>;
  /** Picking or putaway status */
  pickOrPutawayStatus?: Maybe<DeliveryCompletionStatus>;
  /** Point of contact */
  pointOfContact?: Maybe<Scalars['String']['output']>;
  progress?: Maybe<Scalars['Float']['output']>;
  progressString?: Maybe<DeliveryCompletionStatus>;
  /** Delivery promise date */
  promiseDate?: Maybe<Scalars['DateTime']['output']>;
  /** Date when all line items are availalbe 100% */
  shipReadyDate?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Ship to party
   * @deprecated Please access this value through business partner relationship shipToBusinessPartnerId or via delivery view.
   */
  shipTo?: Maybe<Scalars['String']['output']>;
  shipToBusinessPartner?: Maybe<BusinessPartner>;
  /** Ship to Business Partner unique Id */
  shipToBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  /**
   * Ship to party name
   * @deprecated Please access this value through business partner relationship soldToBusinessPartnerId or via delivery view.
   */
  shipToName?: Maybe<Scalars['String']['output']>;
  /**
   * Sold to party
   * @deprecated Please access this value through business partner relationship soldToBusinessPartnerId or via delivery view.
   */
  soldTo?: Maybe<Scalars['String']['output']>;
  soldToBusinessPartner?: Maybe<BusinessPartner>;
  /** Sold to Business Partner unique id */
  soldToBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  /**
   * Sold to party name
   * @deprecated Please access this value through business partner relationship soldToBusinessPartnerId or via delivery view.
   */
  soldToName?: Maybe<Scalars['String']['output']>;
  /**
   * Supplier
   * @deprecated Please access this value through business partner relationship supplierBusinessPartnerId or via delivery view.
   */
  supplier?: Maybe<Scalars['String']['output']>;
  supplierBusinessPartner?: Maybe<BusinessPartner>;
  /** Supplier Business Partner unique Id */
  supplierBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  /**
   * Supplier name
   * @deprecated Please access this value through business partner relationship supplierBusinessPartnerId or via delivery view.
   */
  supplierName?: Maybe<Scalars['String']['output']>;
  /** Total gross weight */
  totalGrossWeight?: Maybe<Scalars['Float']['output']>;
  /** Total net weight */
  totalNetWeight?: Maybe<Scalars['Float']['output']>;
  /** Volume */
  totalVolume?: Maybe<Scalars['Float']['output']>;
  totalVolumeUOM?: Maybe<UnitOfMeasureGlossary>;
  /** Volume unit of measure */
  totalVolumeUOMId?: Maybe<Scalars['ID']['output']>;
  totalWeightUOM?: Maybe<UnitOfMeasureGlossary>;
  /** Total gross weight unit of measure */
  totalWeightUOMId?: Maybe<Scalars['ID']['output']>;
  /** Type of delivery (i.e. delivery vs fulfillment) */
  type: DeliveryType;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  warehouse?: Maybe<Warehouse>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export enum DeliveryCategory {
  Return = 'return',
  Vendor = 'vendor'
}

export type DeliveryCategoryFilterComparison = {
  eq?: InputMaybe<DeliveryCategory>;
  gt?: InputMaybe<DeliveryCategory>;
  gte?: InputMaybe<DeliveryCategory>;
  iLike?: InputMaybe<DeliveryCategory>;
  in?: InputMaybe<Array<DeliveryCategory>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<DeliveryCategory>;
  lt?: InputMaybe<DeliveryCategory>;
  lte?: InputMaybe<DeliveryCategory>;
  neq?: InputMaybe<DeliveryCategory>;
  notILike?: InputMaybe<DeliveryCategory>;
  notIn?: InputMaybe<Array<DeliveryCategory>>;
  notLike?: InputMaybe<DeliveryCategory>;
};

export enum DeliveryCompletionStatus {
  Cancelled = 'cancelled',
  Complete = 'complete',
  InProgress = 'inProgress',
  NotStarted = 'notStarted'
}

export type DeliveryCompletionStatusFilterComparison = {
  eq?: InputMaybe<DeliveryCompletionStatus>;
  gt?: InputMaybe<DeliveryCompletionStatus>;
  gte?: InputMaybe<DeliveryCompletionStatus>;
  iLike?: InputMaybe<DeliveryCompletionStatus>;
  in?: InputMaybe<Array<DeliveryCompletionStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<DeliveryCompletionStatus>;
  lt?: InputMaybe<DeliveryCompletionStatus>;
  lte?: InputMaybe<DeliveryCompletionStatus>;
  neq?: InputMaybe<DeliveryCompletionStatus>;
  notILike?: InputMaybe<DeliveryCompletionStatus>;
  notIn?: InputMaybe<Array<DeliveryCompletionStatus>>;
  notLike?: InputMaybe<DeliveryCompletionStatus>;
};

export type DeliveryCreateInput = {
  /** Bill of Lading */
  billOfLading?: InputMaybe<Scalars['String']['input']>;
  /** ERP delivery block */
  blockStatus?: InputMaybe<Scalars['String']['input']>;
  /** Delivery Document Type */
  deliveryDocumentType?: InputMaybe<Scalars['String']['input']>;
  /** Overall status for the delivery or fulfillment */
  deliveryStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Entity's door ID (foreign key) */
  doorId?: InputMaybe<Scalars['ID']['input']>;
  /** Expected delivery date */
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Reason blocked in ERP */
  erpBlockingReason?: InputMaybe<Scalars['String']['input']>;
  /** Erp Delivery Code */
  erpCode?: InputMaybe<Scalars['String']['input']>;
  /** Date created in ERP */
  erpCreated?: InputMaybe<Scalars['DateTime']['input']>;
  /** When data was last updated in ERP */
  erpLastChanged?: InputMaybe<Scalars['DateTime']['input']>;
  /** Reference document */
  erpSalesOrder?: InputMaybe<Scalars['String']['input']>;
  /** Export */
  export?: InputMaybe<Scalars['String']['input']>;
  /** Fulfilment Block ID */
  fulfillmentBlockId?: InputMaybe<Scalars['ID']['input']>;
  /** Goods receipt or goods issue status */
  goodsReceiptOrIssueStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Load/unload status */
  loadOrUnloadStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Picking or putaway status */
  pickOrPutawayStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Person to contact to learn more about delivery */
  pointOfContact?: InputMaybe<Scalars['String']['input']>;
  /** Date delivery has been promised */
  promiseDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date when all items became 100% available */
  shipReadyDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Ship to party */
  shipTo?: InputMaybe<Scalars['String']['input']>;
  /** Ship to Business Partner unique Id */
  shipToBusinessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  /** Ship to party name */
  shipToName?: InputMaybe<Scalars['String']['input']>;
  /** Sold to party */
  soldTo?: InputMaybe<Scalars['String']['input']>;
  /** Sold to Business Partner unique id */
  soldToBusinessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  /** Sold to party name */
  soldToName?: InputMaybe<Scalars['String']['input']>;
  /** Supplier */
  supplier?: InputMaybe<Scalars['String']['input']>;
  /** Supplier Business Partner unique Id */
  supplierBusinessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  /** Supplier name */
  supplierName?: InputMaybe<Scalars['String']['input']>;
  /** Total gross weight */
  totalGrossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Total net weight */
  totalNetWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Volume */
  totalVolume?: InputMaybe<Scalars['Float']['input']>;
  /** Volume unit of measure */
  totalVolumeUOMId?: InputMaybe<Scalars['ID']['input']>;
  /** Total gross weight unit of measure */
  totalWeightUOMId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type DeliveryCreateOneInput = {
  /** The record to create */
  delivery: DeliveryCreateInput;
};

export type DeliveryFilter = {
  and?: InputMaybe<Array<DeliveryFilter>>;
  billOfLading?: InputMaybe<StringFieldComparison>;
  blockStatus?: InputMaybe<StringFieldComparison>;
  category?: InputMaybe<DeliveryCategoryFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deliveryDocumentType?: InputMaybe<StringFieldComparison>;
  deliveryStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  doorId?: InputMaybe<IdFilterComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  erpBlockingReason?: InputMaybe<StringFieldComparison>;
  erpCode?: InputMaybe<StringFieldComparison>;
  erpCreated?: InputMaybe<DateFieldComparison>;
  erpLastChanged?: InputMaybe<DateFieldComparison>;
  erpPurchaseOrder?: InputMaybe<StringFieldComparison>;
  erpSalesOrder?: InputMaybe<StringFieldComparison>;
  export?: InputMaybe<StringFieldComparison>;
  fulfillmentBlockId?: InputMaybe<IdFilterComparison>;
  goodsReceiptOrIssueStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  loadOrUnloadStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  or?: InputMaybe<Array<DeliveryFilter>>;
  orderConfirmationFileId?: InputMaybe<IdFilterComparison>;
  pickOrPutawayStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  pointOfContact?: InputMaybe<StringFieldComparison>;
  promiseDate?: InputMaybe<DateFieldComparison>;
  shipReadyDate?: InputMaybe<DateFieldComparison>;
  shipTo?: InputMaybe<StringFieldComparison>;
  shipToBusinessPartnerId?: InputMaybe<IdFilterComparison>;
  shipToName?: InputMaybe<StringFieldComparison>;
  soldTo?: InputMaybe<StringFieldComparison>;
  soldToBusinessPartnerId?: InputMaybe<IdFilterComparison>;
  soldToName?: InputMaybe<StringFieldComparison>;
  supplier?: InputMaybe<StringFieldComparison>;
  supplierBusinessPartnerId?: InputMaybe<IdFilterComparison>;
  supplierName?: InputMaybe<StringFieldComparison>;
  totalGrossWeight?: InputMaybe<FloatFieldComparison>;
  totalNetWeight?: InputMaybe<FloatFieldComparison>;
  totalVolume?: InputMaybe<FloatFieldComparison>;
  totalVolumeUOMId?: InputMaybe<IdFilterComparison>;
  totalWeightUOMId?: InputMaybe<IdFilterComparison>;
  type?: InputMaybe<DeliveryTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

/** DeliveryItem model */
export type DeliveryItem = {
  __typename?: 'DeliveryItem';
  /** Actual remaining quantity */
  actualRecievedQuantity?: Maybe<Scalars['String']['output']>;
  /** ID for a warehouse op file */
  advancedShipmentNotificationFileId?: Maybe<Scalars['ID']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  delivery?: Maybe<Delivery>;
  /** Delivery Code */
  deliveryCode: Scalars['String']['output'];
  /** Delivery ID (foreign key) */
  deliveryId: Scalars['ID']['output'];
  /** Delivery Item */
  deliveryItem: Scalars['String']['output'];
  /** Delivery Item Description */
  description?: Maybe<Scalars['String']['output']>;
  /** ERP Created Date */
  erpCreated?: Maybe<Scalars['DateTime']['output']>;
  /** Erp last changed date */
  erpLastChanged?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Purchase Order
   * @deprecated Update to reference parent delivery purchase order.
   */
  erpPurchaseOrder?: Maybe<Scalars['String']['output']>;
  /** Purchase Order item */
  erpPurchaseOrderItem?: Maybe<Scalars['String']['output']>;
  /** Gross Weight */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's lot ID (foreign key) */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Entity's lot ID (foreign key) */
  licensePlateLevel?: Maybe<Scalars['ID']['output']>;
  lot?: Maybe<Lot>;
  /** Entity's lot ID (foreign key) */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Net Weight */
  netWeight?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Product>;
  /** Entity's product ID (foreign key) */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Putaway Status */
  putawayStatus?: Maybe<DeliveryCompletionStatus>;
  /** Phone */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Receipt Status */
  receiptStatus?: Maybe<DeliveryCompletionStatus>;
  stockStatusType?: Maybe<StockStatusType>;
  /** Stock Status Type id */
  stockStatusTypeId?: Maybe<Scalars['String']['output']>;
  /** Supplier lot */
  supplierLot?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  unitOfMeasureId: Scalars['ID']['output'];
  /** Unload status */
  unloadStatus?: Maybe<DeliveryCompletionStatus>;
  /** Unit of measure */
  uom?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Volume */
  volume?: Maybe<Scalars['Float']['output']>;
  /** Volume unit of measure */
  volumeUOMId?: Maybe<Scalars['ID']['output']>;
  /** Weight unit of measure */
  weightUOMId?: Maybe<Scalars['ID']['output']>;
};

export type DeliveryItemCreateInput = {
  /** Actual recieved quantity */
  actualRecievedQuantity?: InputMaybe<Scalars['String']['input']>;
  /** Delivery code */
  deliveryCode: Scalars['String']['input'];
  /** Delivery ID (foreign key) */
  deliveryId: Scalars['ID']['input'];
  /** Delivery item */
  deliveryItem: Scalars['String']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** ERP Created */
  erpCreated?: InputMaybe<Scalars['DateTime']['input']>;
  /** When data was last updated in ERP */
  erpLastChanged?: InputMaybe<Scalars['String']['input']>;
  /** Purchase order */
  erpPurchaseOrder?: InputMaybe<Scalars['String']['input']>;
  /** Purchase order item */
  erpPurchaseOrderItem?: InputMaybe<Scalars['String']['input']>;
  /** Gross weight of entity */
  grossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's lot ID (foreign key) */
  lotId?: InputMaybe<Scalars['ID']['input']>;
  /** Net weight of entity */
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Putaway status */
  putawayStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Quantity */
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** Receipt status */
  receiptStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Supplier Lot */
  supplierLot?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure */
  uom?: InputMaybe<Scalars['String']['input']>;
  /** Volume of entity */
  volume?: InputMaybe<Scalars['Float']['input']>;
  /** Volume in unit of measure for entity */
  volumeUomId?: InputMaybe<Scalars['String']['input']>;
  /** Weight UOM, i.e KG */
  weightUomId?: InputMaybe<Scalars['String']['input']>;
};

export type DeliveryItemCreateOneInput = {
  /** The record to create */
  deliveryItem: DeliveryItemCreateInput;
};

export type DeliveryItemDetails = {
  __typename?: 'DeliveryItemDetails';
  /** Delivery item associated with entity */
  deliveryItem: Scalars['String']['output'];
  /** Entity code */
  destinationBinCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  destinationBinId?: Maybe<Scalars['ID']['output']>;
  /** Delivery item ID (foreign key) */
  id: Scalars['ID']['output'];
  /** Entity code */
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  licensePlateDescription?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  lotCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  productCode: Scalars['String']['output'];
  /** Description of entity */
  productDescription?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  productId: Scalars['ID']['output'];
  /** Quantity of product */
  quantity: Scalars['String']['output'];
  /** Entity code */
  sourceBinCode?: Maybe<Scalars['String']['output']>;
  /** Entity's bin ID (foreign key) */
  sourceBinId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  stockStatusCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  stockStatusId?: Maybe<Scalars['ID']['output']>;
};

export type DeliveryItemFilter = {
  actualRecievedQuantity?: InputMaybe<StringFieldComparison>;
  advancedShipmentNotificationFileId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<DeliveryItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deliveryCode?: InputMaybe<StringFieldComparison>;
  deliveryId?: InputMaybe<IdFilterComparison>;
  deliveryItem?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  erpCreated?: InputMaybe<DateFieldComparison>;
  erpLastChanged?: InputMaybe<DateFieldComparison>;
  erpPurchaseOrder?: InputMaybe<StringFieldComparison>;
  erpPurchaseOrderItem?: InputMaybe<StringFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  licensePlateId?: InputMaybe<IdFilterComparison>;
  licensePlateLevel?: InputMaybe<IdFilterComparison>;
  lotId?: InputMaybe<IdFilterComparison>;
  netWeight?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<DeliveryItemFilter>>;
  productId?: InputMaybe<IdFilterComparison>;
  putawayStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  receiptStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  stockStatusTypeId?: InputMaybe<StringFieldComparison>;
  supplierLot?: InputMaybe<StringFieldComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  unloadStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  uom?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  volume?: InputMaybe<FloatFieldComparison>;
  volumeUOMId?: InputMaybe<IdFilterComparison>;
  weightUOMId?: InputMaybe<IdFilterComparison>;
};

export type DeliveryItemNodes = {
  __typename?: 'DeliveryItemNodes';
  nodes: Array<DeliveryItem>;
  totalCount: Scalars['Int']['output'];
};

export type DeliveryItemOffsetConnection = {
  __typename?: 'DeliveryItemOffsetConnection';
  /** Array of nodes. */
  nodes: Array<DeliveryItem>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DeliveryItemSearchResults = {
  __typename?: 'DeliveryItemSearchResults';
  deliveryItem?: Maybe<Scalars['String']['output']>;
  erpPurchaseOrder?: Maybe<Scalars['String']['output']>;
  erpPurchaseOrderItem?: Maybe<Scalars['String']['output']>;
  lot?: Maybe<Scalars['String']['output']>;
  productCode?: Maybe<Scalars['String']['output']>;
  productDescription?: Maybe<Scalars['String']['output']>;
  putawayStatus?: Maybe<Scalars['String']['output']>;
  receiptStatus?: Maybe<Scalars['String']['output']>;
  supplierLot?: Maybe<Scalars['String']['output']>;
};

export type DeliveryItemSort = {
  direction: SortDirection;
  field: DeliveryItemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DeliveryItemSortFields {
  ActualRecievedQuantity = 'actualRecievedQuantity',
  AdvancedShipmentNotificationFileId = 'advancedShipmentNotificationFileId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DeliveryCode = 'deliveryCode',
  DeliveryId = 'deliveryId',
  DeliveryItem = 'deliveryItem',
  Description = 'description',
  ErpCreated = 'erpCreated',
  ErpLastChanged = 'erpLastChanged',
  ErpPurchaseOrder = 'erpPurchaseOrder',
  ErpPurchaseOrderItem = 'erpPurchaseOrderItem',
  GrossWeight = 'grossWeight',
  Id = 'id',
  LicensePlateId = 'licensePlateId',
  LicensePlateLevel = 'licensePlateLevel',
  LotId = 'lotId',
  NetWeight = 'netWeight',
  ProductId = 'productId',
  PutawayStatus = 'putawayStatus',
  Quantity = 'quantity',
  ReceiptStatus = 'receiptStatus',
  StockStatusTypeId = 'stockStatusTypeId',
  SupplierLot = 'supplierLot',
  UnitOfMeasureId = 'unitOfMeasureId',
  UnloadStatus = 'unloadStatus',
  Uom = 'uom',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  Volume = 'volume',
  VolumeUomId = 'volumeUOMId',
  WeightUomId = 'weightUOMId'
}

export type DeliveryItemUpdateInput = {
  /** Actual recieved quantity */
  actualRecievedQuantity?: InputMaybe<Scalars['String']['input']>;
  /** Delivery code */
  deliveryCode?: InputMaybe<Scalars['String']['input']>;
  /** Delivery ID (foreign key) */
  deliveryId?: InputMaybe<Scalars['ID']['input']>;
  /** Delivery item */
  deliveryItem?: InputMaybe<Scalars['String']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** ERP Created */
  erpCreated?: InputMaybe<Scalars['DateTime']['input']>;
  /** When data was last updated in ERP */
  erpLastChanged?: InputMaybe<Scalars['String']['input']>;
  /** Purchase order */
  erpPurchaseOrder?: InputMaybe<Scalars['String']['input']>;
  /** Purchase order item */
  erpPurchaseOrderItem?: InputMaybe<Scalars['String']['input']>;
  /** Gross weight of entity */
  grossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's lot ID (foreign key) */
  lotId?: InputMaybe<Scalars['ID']['input']>;
  /** Net weight of entity */
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's product ID (foreign key) */
  productId?: InputMaybe<Scalars['ID']['input']>;
  /** Putaway status */
  putawayStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Quantity */
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** Receipt status */
  receiptStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Supplier Lot */
  supplierLot?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure */
  uom?: InputMaybe<Scalars['String']['input']>;
  /** Volume of entity */
  volume?: InputMaybe<Scalars['Float']['input']>;
  /** Volume in unit of measure for entity */
  volumeUomId?: InputMaybe<Scalars['String']['input']>;
  /** Weight UOM, i.e KG */
  weightUomId?: InputMaybe<Scalars['String']['input']>;
};

export type DeliveryItemUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: DeliveryItemUpdateInput;
};

export type DeliveryOffsetConnection = {
  __typename?: 'DeliveryOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Delivery>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DeliveryProcessReturnDto = {
  /** Return item */
  returnItems: Array<DeliveryReturnItemDto>;
  /** Unknown return item */
  unknownReturnItems?: InputMaybe<Array<UnknownDeliveryReturnItemDto>>;
  /** Entity ID */
  warehouseId: Scalars['ID']['input'];
};

export type DeliveryReturnItemDto = {
  /** Entity ID */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
};

/** Delivery Search results */
export type DeliverySearchResults = {
  __typename?: 'DeliverySearchResults';
  billOfLading?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  deliveryItems?: Maybe<Array<DeliveryItemSearchResults>>;
  deliveryStatus?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['String']['output']>;
  erpCode?: Maybe<Scalars['String']['output']>;
  erpPurchaseOrder?: Maybe<Scalars['String']['output']>;
  erpSalesOrder?: Maybe<Scalars['String']['output']>;
  goodsReceiptStatus?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['String']['output']>;
  putawayStatus?: Maybe<Scalars['String']['output']>;
  shipTo?: Maybe<Scalars['String']['output']>;
  shipToBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  shipToName?: Maybe<Scalars['String']['output']>;
  soldTo?: Maybe<Scalars['String']['output']>;
  soldToBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  soldToName?: Maybe<Scalars['String']['output']>;
  supplier?: Maybe<Scalars['String']['output']>;
  supplierBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  supplierName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  warehouseCode?: Maybe<Scalars['String']['output']>;
  warehouseName?: Maybe<Scalars['String']['output']>;
};

export type DeliverySort = {
  direction: SortDirection;
  field: DeliverySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DeliverySortFields {
  BillOfLading = 'billOfLading',
  BlockStatus = 'blockStatus',
  Category = 'category',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DeliveryDocumentType = 'deliveryDocumentType',
  DeliveryStatus = 'deliveryStatus',
  DoorId = 'doorId',
  DueDate = 'dueDate',
  ErpBlockingReason = 'erpBlockingReason',
  ErpCode = 'erpCode',
  ErpCreated = 'erpCreated',
  ErpLastChanged = 'erpLastChanged',
  ErpPurchaseOrder = 'erpPurchaseOrder',
  ErpSalesOrder = 'erpSalesOrder',
  Export = 'export',
  FulfillmentBlockId = 'fulfillmentBlockId',
  GoodsReceiptOrIssueStatus = 'goodsReceiptOrIssueStatus',
  Id = 'id',
  LoadOrUnloadStatus = 'loadOrUnloadStatus',
  OrderConfirmationFileId = 'orderConfirmationFileId',
  PickOrPutawayStatus = 'pickOrPutawayStatus',
  PointOfContact = 'pointOfContact',
  PromiseDate = 'promiseDate',
  ShipReadyDate = 'shipReadyDate',
  ShipTo = 'shipTo',
  ShipToBusinessPartnerId = 'shipToBusinessPartnerId',
  ShipToName = 'shipToName',
  SoldTo = 'soldTo',
  SoldToBusinessPartnerId = 'soldToBusinessPartnerId',
  SoldToName = 'soldToName',
  Supplier = 'supplier',
  SupplierBusinessPartnerId = 'supplierBusinessPartnerId',
  SupplierName = 'supplierName',
  TotalGrossWeight = 'totalGrossWeight',
  TotalNetWeight = 'totalNetWeight',
  TotalVolume = 'totalVolume',
  TotalVolumeUomId = 'totalVolumeUOMId',
  TotalWeightUomId = 'totalWeightUOMId',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export enum DeliveryTaskSteps {
  OneStep = 'oneStep',
  TwoStep = 'twoStep'
}

export enum DeliveryType {
  Delivery = 'delivery',
  Fulfillment = 'fulfillment'
}

export type DeliveryTypeFilterComparison = {
  eq?: InputMaybe<DeliveryType>;
  gt?: InputMaybe<DeliveryType>;
  gte?: InputMaybe<DeliveryType>;
  iLike?: InputMaybe<DeliveryType>;
  in?: InputMaybe<Array<DeliveryType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<DeliveryType>;
  lt?: InputMaybe<DeliveryType>;
  lte?: InputMaybe<DeliveryType>;
  neq?: InputMaybe<DeliveryType>;
  notILike?: InputMaybe<DeliveryType>;
  notIn?: InputMaybe<Array<DeliveryType>>;
  notLike?: InputMaybe<DeliveryType>;
};

export type DeliveryUpdateInput = {
  /** Bill of Lading */
  billOfLading?: InputMaybe<Scalars['String']['input']>;
  /** ERP delivery block */
  blockStatus?: InputMaybe<Scalars['String']['input']>;
  /** Delivery Document Type */
  deliveryDocumentType?: InputMaybe<Scalars['String']['input']>;
  /** Overall status for the delivery or fulfillment */
  deliveryStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Entity's door ID (foreign key) */
  doorId?: InputMaybe<Scalars['ID']['input']>;
  /** Expected delivery date */
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Reason blocked in ERP */
  erpBlockingReason?: InputMaybe<Scalars['String']['input']>;
  /** Erp Delivery Code */
  erpCode?: InputMaybe<Scalars['String']['input']>;
  /** Date created in ERP */
  erpCreated?: InputMaybe<Scalars['DateTime']['input']>;
  /** When data was last updated in ERP */
  erpLastChanged?: InputMaybe<Scalars['DateTime']['input']>;
  /** Reference document */
  erpSalesOrder?: InputMaybe<Scalars['String']['input']>;
  /** Export */
  export?: InputMaybe<Scalars['String']['input']>;
  /** Fulfilment Block ID */
  fulfillmentBlockId?: InputMaybe<Scalars['ID']['input']>;
  /** Goods receipt or goods issue status */
  goodsReceiptOrIssueStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Load/unload status */
  loadOrUnloadStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Picking or putaway status */
  pickOrPutawayStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Person to contact to learn more about delivery */
  pointOfContact?: InputMaybe<Scalars['String']['input']>;
  /** Date delivery has been promised */
  promiseDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date when all items became 100% available */
  shipReadyDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Ship to party */
  shipTo?: InputMaybe<Scalars['String']['input']>;
  /** Ship to Business Partner unique Id */
  shipToBusinessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  /** Ship to party name */
  shipToName?: InputMaybe<Scalars['String']['input']>;
  /** Sold to party */
  soldTo?: InputMaybe<Scalars['String']['input']>;
  /** Sold to Business Partner unique id */
  soldToBusinessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  /** Sold to party name */
  soldToName?: InputMaybe<Scalars['String']['input']>;
  /** Supplier */
  supplier?: InputMaybe<Scalars['String']['input']>;
  /** Supplier Business Partner unique Id */
  supplierBusinessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  /** Supplier name */
  supplierName?: InputMaybe<Scalars['String']['input']>;
  /** Total gross weight */
  totalGrossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Total net weight */
  totalNetWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Volume */
  totalVolume?: InputMaybe<Scalars['Float']['input']>;
  /** Volume unit of measure */
  totalVolumeUOMId?: InputMaybe<Scalars['ID']['input']>;
  /** Total gross weight unit of measure */
  totalWeightUOMId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type DemoDataOutputDto = {
  __typename?: 'DemoDataOutputDto';
  bins: Array<Bin>;
  products: Array<Product>;
};

export type DeployRunInput = {
  /** abc analysis */
  abcAnalysisIds: Array<Scalars['String']['input']>;
  /** fixed bin recommendations */
  fixedBinRecommendationIds: Array<Scalars['String']['input']>;
  /** Entity ID */
  runId: Scalars['ID']['input'];
};

/** Display preference model */
export type DisplayPreference = {
  __typename?: 'DisplayPreference';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Preferred currency, i.e. USD */
  currency: Scalars['String']['output'];
  /** Preferred date and time format, i.e. MM/dd/yyyy HH:mm */
  dateTimeFormat: Scalars['String']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Preferred language, i.e. en */
  language: Scalars['String']['output'];
  /** Unit of measure system */
  measurementSystem: StandardUomSystem;
  /** Preferred number format, i.e. wcfp */
  numberFormat?: Maybe<NumberFormat>;
  /** Preferred timezone, i.e. America/Denver */
  timezone: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type DisplayPreferenceCreateInput = {
  /** Preferred currency, i.e. USD */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Preferred date and time format, i.e. MM/dd/yyyy HH:mm */
  dateTimeFormat?: InputMaybe<Scalars['String']['input']>;
  /** Preferred language, i.e. en */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure system */
  measurementSystem: StandardUomSystem;
  /** Preferred number format, i.e. wcfp */
  numberFormat?: InputMaybe<Scalars['String']['input']>;
  /** Preferred timezone, i.e. America/Denver */
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type DisplayPreferenceCreateOneInput = {
  /** The record to create */
  displayPreference: DisplayPreferenceCreateInput;
};

export type DisplayPreferenceFilter = {
  and?: InputMaybe<Array<DisplayPreferenceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<StringFieldComparison>;
  dateTimeFormat?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  language?: InputMaybe<StringFieldComparison>;
  measurementSystem?: InputMaybe<StandardUomSystemFilterComparison>;
  numberFormat?: InputMaybe<NumberFormatFilterComparison>;
  or?: InputMaybe<Array<DisplayPreferenceFilter>>;
  timezone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type DisplayPreferenceOffsetConnection = {
  __typename?: 'DisplayPreferenceOffsetConnection';
  /** Array of nodes. */
  nodes: Array<DisplayPreference>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DisplayPreferenceSort = {
  direction: SortDirection;
  field: DisplayPreferenceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DisplayPreferenceSortFields {
  CreatedAt = 'createdAt',
  Currency = 'currency',
  DateTimeFormat = 'dateTimeFormat',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Language = 'language',
  MeasurementSystem = 'measurementSystem',
  NumberFormat = 'numberFormat',
  Timezone = 'timezone',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type DisplayPreferenceUpdateDto = {
  /** Preferred currency, i.e. USD */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Preferred date and time format, i.e. MM/dd/yyyy HH:mm */
  dateTimeFormat?: InputMaybe<Scalars['String']['input']>;
  /** Preferred language, i.e. en */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure system */
  measurementSystem?: InputMaybe<StandardUomSystem>;
  /** Preferred number format, i.e. wcfp */
  numberFormat?: InputMaybe<Scalars['String']['input']>;
  /** Preferred timezone, i.e. America/Denver */
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type DisplayPreferenceUpdateInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: DisplayPreferenceUpdateDto;
};

export type DisplayPreferenceUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: DisplayPreferenceUpdateDto;
};

/** Disposition model */
export type Disposition = {
  __typename?: 'Disposition';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  images?: Maybe<Array<StoredImage>>;
  /** Notes for a submitted disposition */
  notes: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type DispositionApproveOneDto = {
  /** Disposition approval */
  approval: Scalars['Boolean']['input'];
  /** Disposition ID */
  dispositionId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
};

export type DispositionFilter = {
  and?: InputMaybe<Array<DispositionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  notes?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DispositionFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type DispositionImages = {
  /** ID of stored image */
  imageId: Scalars['ID']['input'];
};

export type DispositionOffsetConnection = {
  __typename?: 'DispositionOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Disposition>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DispositionSort = {
  direction: SortDirection;
  field: DispositionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DispositionSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Notes = 'notes',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type DispositionUpdateOneDto = {
  /** ID of stored image */
  images?: InputMaybe<Array<DispositionImages>>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Notes for a submitted disposition */
  notes?: InputMaybe<Scalars['String']['input']>;
};

export enum DistanceRestrictionEnum {
  Aisle = 'aisle',
  Area = 'area',
  Zone = 'zone'
}

/** Door model */
export type Door = {
  __typename?: 'Door';
  /** Entity's area ID (foreign key) */
  areaId?: Maybe<Scalars['ID']['output']>;
  /** Entity's bin ID (foreign key) */
  binId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Door direction.  inbound outbound or both. */
  direction: DoorDirection;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** x coordinate location */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  y?: Maybe<Scalars['Float']['output']>;
};

export type DoorCreateInput = {
  /** Entity's area ID (foreign key) */
  areaId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's bin ID (foreign key) */
  binId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Door direction.  inbound outbound or both. */
  direction: DoorDirection;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
  /** x coordinate location */
  x?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type DoorCreateOneInput = {
  /** The record to create */
  door: DoorCreateInput;
};

export type DoorDirectionFilterComparison = {
  eq?: InputMaybe<DoorDirection>;
  gt?: InputMaybe<DoorDirection>;
  gte?: InputMaybe<DoorDirection>;
  iLike?: InputMaybe<DoorDirection>;
  in?: InputMaybe<Array<DoorDirection>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<DoorDirection>;
  lt?: InputMaybe<DoorDirection>;
  lte?: InputMaybe<DoorDirection>;
  neq?: InputMaybe<DoorDirection>;
  notILike?: InputMaybe<DoorDirection>;
  notIn?: InputMaybe<Array<DoorDirection>>;
  notLike?: InputMaybe<DoorDirection>;
};

export type DoorFilter = {
  and?: InputMaybe<Array<DoorFilter>>;
  areaId?: InputMaybe<IdFilterComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  direction?: InputMaybe<DoorDirectionFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<DoorFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
};

export type DoorOffsetConnection = {
  __typename?: 'DoorOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Door>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DoorSort = {
  direction: SortDirection;
  field: DoorSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DoorSortFields {
  AreaId = 'areaId',
  BinId = 'binId',
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Direction = 'direction',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId',
  X = 'x',
  Y = 'y'
}

export type DoorUpdateInput = {
  /** Entity's area ID (foreign key) */
  areaId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's bin ID (foreign key) */
  binId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Door direction.  inbound outbound or both. */
  direction?: InputMaybe<DoorDirection>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
  /** x coordinate location */
  x?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type DoorUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: DoorUpdateInput;
};

export enum ErpOptions {
  Aoe = 'aoe',
  Default = 'default',
  Pto = 'pto',
  Sap = 'sap'
}

export enum EsIndices {
  Area = 'area',
  Bin = 'bin',
  Delivery = 'delivery',
  Fulfillment = 'fulfillment',
  LicensePlate = 'license_plate',
  Product = 'product',
  Task = 'task'
}

export enum EwmWarehouseOrderStatusName {
  Canceled = 'canceled',
  Confirmed = 'confirmed',
  Open = 'open'
}

/** Edge model */
export type Edge = {
  __typename?: 'Edge';
  bidirectional: Scalars['Boolean']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type EdgeCreateOneInput = {
  /** The record to create */
  edge: EdgeCreateType;
};

export type EdgeCreateType = {
  bidirectional: Scalars['Boolean']['input'];
  end_vertex_id: Scalars['String']['input'];
  start_vertex_id: Scalars['String']['input'];
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['String']['input'];
};

export type EdgeFilter = {
  and?: InputMaybe<Array<EdgeFilter>>;
  bidirectional?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EdgeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type EdgeOffsetConnection = {
  __typename?: 'EdgeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Edge>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type EdgeSort = {
  direction: SortDirection;
  field: EdgeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EdgeSortFields {
  Bidirectional = 'bidirectional',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export type EffectiveContractMapping = {
  __typename?: 'EffectiveContractMapping';
  /** Business partner ID */
  businessPartnerId: Scalars['ID']['output'];
  /** Contract Id */
  contractId: Scalars['ID']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Effective date of contract */
  effectiveDate: Scalars['DateTime']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Effective contract mapping status */
  status: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type EffectiveContractMappingCreateInput = {
  /** Business partner ID */
  businessPartnerId: Scalars['ID']['input'];
  /** Contract Id */
  contractId: Scalars['ID']['input'];
  /** Effective date of contract */
  effectiveDate: Scalars['DateTime']['input'];
  /** Effective contract mapping status */
  status: Scalars['String']['input'];
};

export type EffectiveContractMappingCreateOneInput = {
  /** The record to create */
  effectiveContractMapping: EffectiveContractMappingCreateInput;
};

export type EffectiveContractMappingFilter = {
  and?: InputMaybe<Array<EffectiveContractMappingFilter>>;
  businessPartnerId?: InputMaybe<IdFilterComparison>;
  contractId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  effectiveDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EffectiveContractMappingFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type EffectiveContractMappingOffsetConnection = {
  __typename?: 'EffectiveContractMappingOffsetConnection';
  /** Array of nodes. */
  nodes: Array<EffectiveContractMapping>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type EffectiveContractMappingSort = {
  direction: SortDirection;
  field: EffectiveContractMappingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EffectiveContractMappingSortFields {
  BusinessPartnerId = 'businessPartnerId',
  ContractId = 'contractId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EffectiveDate = 'effectiveDate',
  Id = 'id',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type EffectiveContractMappingUpdateInput = {
  /** Business partner ID */
  businessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  /** Contract Id */
  contractId?: InputMaybe<Scalars['ID']['input']>;
  /** Effective date of contract */
  effectiveDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Effective contract mapping status */
  status?: InputMaybe<Scalars['String']['input']>;
};

export type EffectiveContractMappingUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: EffectiveContractMappingUpdateInput;
};

/** Empty Search results */
export type EmptySearchResults = {
  __typename?: 'EmptySearchResults';
  x?: Maybe<Scalars['String']['output']>;
};

export enum EntityChangeType {
  Create = 'create',
  Delete = 'delete',
  Insert = 'insert',
  Update = 'update'
}

export type EntityChangeTypeFilterComparison = {
  eq?: InputMaybe<EntityChangeType>;
  gt?: InputMaybe<EntityChangeType>;
  gte?: InputMaybe<EntityChangeType>;
  iLike?: InputMaybe<EntityChangeType>;
  in?: InputMaybe<Array<EntityChangeType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<EntityChangeType>;
  lt?: InputMaybe<EntityChangeType>;
  lte?: InputMaybe<EntityChangeType>;
  neq?: InputMaybe<EntityChangeType>;
  notILike?: InputMaybe<EntityChangeType>;
  notIn?: InputMaybe<Array<EntityChangeType>>;
  notLike?: InputMaybe<EntityChangeType>;
};

export type EquipmentCreateOneInput = {
  /** The record to create */
  equipmentItem: EquipmentCreateType;
};

export type EquipmentCreateType = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  equipmentModelId: Scalars['ID']['input'];
  /** Entity's label */
  label: Scalars['String']['input'];
  /** Entity's label */
  status?: InputMaybe<EquipmentStatus>;
  /** Identifier for Redpoint Tracking Tag. */
  tagId?: InputMaybe<Scalars['String']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

/** Equipment model */
export type EquipmentItem = {
  __typename?: 'EquipmentItem';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Model of equipment */
  equipmentModelId: Scalars['ID']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label: Scalars['String']['output'];
  /** Status of equipment */
  status?: Maybe<EquipmentStatus>;
  /** Identifier for Redpoint Tracking Tag. */
  tagId?: Maybe<Scalars['ID']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type EquipmentItemFilter = {
  and?: InputMaybe<Array<EquipmentItemFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  equipmentModelId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EquipmentItemFilter>>;
  status?: InputMaybe<EquipmentStatusFilterComparison>;
  tagId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type EquipmentItemOffsetConnection = {
  __typename?: 'EquipmentItemOffsetConnection';
  /** Array of nodes. */
  nodes: Array<EquipmentItem>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type EquipmentItemSort = {
  direction: SortDirection;
  field: EquipmentItemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EquipmentItemSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  EquipmentModelId = 'equipmentModelId',
  Id = 'id',
  Label = 'label',
  Status = 'status',
  TagId = 'tagId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export enum EquipmentMobility {
  Dynamic = 'dynamic',
  Static = 'static'
}

export type EquipmentMobilityFilterComparison = {
  eq?: InputMaybe<EquipmentMobility>;
  gt?: InputMaybe<EquipmentMobility>;
  gte?: InputMaybe<EquipmentMobility>;
  iLike?: InputMaybe<EquipmentMobility>;
  in?: InputMaybe<Array<EquipmentMobility>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<EquipmentMobility>;
  lt?: InputMaybe<EquipmentMobility>;
  lte?: InputMaybe<EquipmentMobility>;
  neq?: InputMaybe<EquipmentMobility>;
  notILike?: InputMaybe<EquipmentMobility>;
  notIn?: InputMaybe<Array<EquipmentMobility>>;
  notLike?: InputMaybe<EquipmentMobility>;
};

/** EquipmentModel model */
export type EquipmentModel = {
  __typename?: 'EquipmentModel';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Type of equipment, i.e. forklift */
  equipmentTypeId: Scalars['ID']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Type of equipment, i.e. forklift */
  label: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type EquipmentModelCreateOneInput = {
  /** The record to create */
  equipmentModel: EquipmentModelCreateType;
};

export type EquipmentModelCreateType = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Type of equipment, i.e. forklift */
  equipmentTypeId: Scalars['ID']['input'];
  /** Entity's label */
  label: Scalars['String']['input'];
};

export type EquipmentModelFilter = {
  and?: InputMaybe<Array<EquipmentModelFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  equipmentTypeId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EquipmentModelFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type EquipmentModelOffsetConnection = {
  __typename?: 'EquipmentModelOffsetConnection';
  /** Array of nodes. */
  nodes: Array<EquipmentModel>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type EquipmentModelSort = {
  direction: SortDirection;
  field: EquipmentModelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EquipmentModelSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  EquipmentTypeId = 'equipmentTypeId',
  Id = 'id',
  Label = 'label',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type EquipmentModelUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Type of equipment, i.e. forklift */
  equipmentTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's label */
  label?: InputMaybe<Scalars['String']['input']>;
};

export type EquipmentModelUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: EquipmentModelUpdateInput;
};

export enum EquipmentStatus {
  Active = 'active',
  Inactive = 'inactive',
  Planned = 'planned'
}

export type EquipmentStatusFilterComparison = {
  eq?: InputMaybe<EquipmentStatus>;
  gt?: InputMaybe<EquipmentStatus>;
  gte?: InputMaybe<EquipmentStatus>;
  iLike?: InputMaybe<EquipmentStatus>;
  in?: InputMaybe<Array<EquipmentStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<EquipmentStatus>;
  lt?: InputMaybe<EquipmentStatus>;
  lte?: InputMaybe<EquipmentStatus>;
  neq?: InputMaybe<EquipmentStatus>;
  notILike?: InputMaybe<EquipmentStatus>;
  notIn?: InputMaybe<Array<EquipmentStatus>>;
  notLike?: InputMaybe<EquipmentStatus>;
};

/** EquipmentType model */
export type EquipmentType = {
  __typename?: 'EquipmentType';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Cost */
  cost?: Maybe<Scalars['Float']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Currency */
  currency: Scalars['String']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  equipmentModels?: Maybe<Array<EquipmentModel>>;
  /** Number representing maximum height allowance of equipment model. */
  heightMax?: Maybe<Scalars['Float']['output']>;
  /** Number representing minimum height allowance of equipment model. */
  heightMin?: Maybe<Scalars['Float']['output']>;
  /** Imperial or metric unit of measure for height limit. */
  heightUOMId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Type of equipment, i.e. forklift */
  label: Scalars['String']['output'];
  /** Type of location data for an equipment model (Dynamic/Static) */
  mobility: EquipmentMobility;
  tasks?: Maybe<Array<Task>>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Velocity */
  velocity?: Maybe<Scalars['Float']['output']>;
  /** Velocity unit of measure */
  velocityUOMId?: Maybe<Scalars['ID']['output']>;
  /** Velocity */
  verticalVelocity?: Maybe<Scalars['Float']['output']>;
  /** Cost */
  volumeMax?: Maybe<Scalars['Float']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: Maybe<Scalars['ID']['output']>;
  /** Number representing maximum weight limit for an equipment model. */
  weightMax?: Maybe<Scalars['Float']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: Maybe<Scalars['ID']['output']>;
};

export type EquipmentTypeCreateOneInput = {
  /** The record to create */
  equipmentType: EquipmentTypeCreateType;
};

export type EquipmentTypeCreateType = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Cost */
  cost: Scalars['Float']['input'];
  /** Currency */
  currency: Scalars['String']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Number representing maximum height allowance of equipment model. */
  heightMax: Scalars['Float']['input'];
  /** Number representing minimum height allowance of equipment model. */
  heightMin: Scalars['Float']['input'];
  /** Imperial or metric unit of measure for height limit. */
  heightUOMId: Scalars['ID']['input'];
  /** Type of equipment, i.e. forklift */
  label: Scalars['String']['input'];
  /** Volume of entity */
  mobility: EquipmentMobility;
  /** Velocity */
  velocity: Scalars['Float']['input'];
  /** Velocity unit of measure */
  velocityUOMId: Scalars['ID']['input'];
  /** Velocity of raising and lowering a piece of equipment */
  verticalVelocity?: InputMaybe<Scalars['Float']['input']>;
  /** Volume of entity */
  volumeMax: Scalars['Float']['input'];
  /** Volume in unit of measure for entity */
  volumeUOMId: Scalars['ID']['input'];
  /** Velocity */
  weightMax: Scalars['Float']['input'];
  /** Weight UOM, i.e KG */
  weightUOMId: Scalars['ID']['input'];
};

export type EquipmentTypeFilter = {
  and?: InputMaybe<Array<EquipmentTypeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  cost?: InputMaybe<FloatFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  heightMax?: InputMaybe<FloatFieldComparison>;
  heightMin?: InputMaybe<FloatFieldComparison>;
  heightUOMId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  mobility?: InputMaybe<EquipmentMobilityFilterComparison>;
  or?: InputMaybe<Array<EquipmentTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  velocity?: InputMaybe<FloatFieldComparison>;
  velocityUOMId?: InputMaybe<IdFilterComparison>;
  verticalVelocity?: InputMaybe<FloatFieldComparison>;
  volumeMax?: InputMaybe<FloatFieldComparison>;
  volumeUOMId?: InputMaybe<IdFilterComparison>;
  weightMax?: InputMaybe<FloatFieldComparison>;
  weightUOMId?: InputMaybe<IdFilterComparison>;
};

export type EquipmentTypeOffsetConnection = {
  __typename?: 'EquipmentTypeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<EquipmentType>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type EquipmentTypeQueryShape = {
  __typename?: 'EquipmentTypeQueryShape';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Cost */
  cost?: Maybe<Scalars['Float']['output']>;
  /** Currency */
  currency?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Number representing maximum height allowance of equipment model. */
  heightMax?: Maybe<Scalars['Float']['output']>;
  /** Number representing minimum height allowance of equipment model. */
  heightMin?: Maybe<Scalars['Float']['output']>;
  /** Imperial or metric unit of measure for height limit. */
  heightUOMCode?: Maybe<Scalars['String']['output']>;
  /** Imperial or metric unit of measure for height limit. */
  heightUOMId?: Maybe<Scalars['ID']['output']>;
  /** Imperial or metric unit of measure for height limit. */
  heightUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Type of equipment, i.e. forklift */
  label: Scalars['String']['output'];
  /** Type of location data for an equipment model (Dynamic/Static) */
  mobility: EquipmentMobility;
  /** Velocity */
  velocity?: Maybe<Scalars['Float']['output']>;
  /** Velocity unit of measure */
  velocityUOMCode?: Maybe<Scalars['String']['output']>;
  /** Velocity unit of measure */
  velocityUOMId?: Maybe<Scalars['ID']['output']>;
  /** Velocity unit of measure */
  velocityUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Velocity of raising and lowering a piece of equipment */
  verticalVelocity?: Maybe<Scalars['Float']['output']>;
  /** Max Volume of entity */
  volumeMax?: Maybe<Scalars['Float']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMCode?: Maybe<Scalars['String']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: Maybe<Scalars['ID']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Number representing maximum weight limit for an equipment model. */
  weightMax?: Maybe<Scalars['Float']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMCode?: Maybe<Scalars['String']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: Maybe<Scalars['ID']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMLabel?: Maybe<Scalars['String']['output']>;
};

export type EquipmentTypeQueryShapeFilter = {
  and?: InputMaybe<Array<EquipmentTypeQueryShapeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  cost?: InputMaybe<FloatFieldComparison>;
  currency?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  heightMax?: InputMaybe<FloatFieldComparison>;
  heightMin?: InputMaybe<FloatFieldComparison>;
  heightUOMCode?: InputMaybe<StringFieldComparison>;
  heightUOMId?: InputMaybe<IdFilterComparison>;
  heightUOMLabel?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  mobility?: InputMaybe<EquipmentMobilityFilterComparison>;
  or?: InputMaybe<Array<EquipmentTypeQueryShapeFilter>>;
  velocity?: InputMaybe<FloatFieldComparison>;
  velocityUOMCode?: InputMaybe<StringFieldComparison>;
  velocityUOMId?: InputMaybe<IdFilterComparison>;
  velocityUOMLabel?: InputMaybe<StringFieldComparison>;
  verticalVelocity?: InputMaybe<FloatFieldComparison>;
  volumeMax?: InputMaybe<FloatFieldComparison>;
  volumeUOMCode?: InputMaybe<StringFieldComparison>;
  volumeUOMId?: InputMaybe<IdFilterComparison>;
  volumeUOMLabel?: InputMaybe<StringFieldComparison>;
  weightMax?: InputMaybe<FloatFieldComparison>;
  weightUOMCode?: InputMaybe<StringFieldComparison>;
  weightUOMId?: InputMaybe<IdFilterComparison>;
  weightUOMLabel?: InputMaybe<StringFieldComparison>;
};

export type EquipmentTypeQueryShapeOffsetConnection = {
  __typename?: 'EquipmentTypeQueryShapeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<EquipmentTypeQueryShape>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type EquipmentTypeQueryShapeSort = {
  direction: SortDirection;
  field: EquipmentTypeQueryShapeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EquipmentTypeQueryShapeSortFields {
  Code = 'code',
  Cost = 'cost',
  Currency = 'currency',
  Description = 'description',
  HeightMax = 'heightMax',
  HeightMin = 'heightMin',
  HeightUomCode = 'heightUOMCode',
  HeightUomId = 'heightUOMId',
  HeightUomLabel = 'heightUOMLabel',
  Id = 'id',
  Label = 'label',
  Mobility = 'mobility',
  Velocity = 'velocity',
  VelocityUomCode = 'velocityUOMCode',
  VelocityUomId = 'velocityUOMId',
  VelocityUomLabel = 'velocityUOMLabel',
  VerticalVelocity = 'verticalVelocity',
  VolumeMax = 'volumeMax',
  VolumeUomCode = 'volumeUOMCode',
  VolumeUomId = 'volumeUOMId',
  VolumeUomLabel = 'volumeUOMLabel',
  WeightMax = 'weightMax',
  WeightUomCode = 'weightUOMCode',
  WeightUomId = 'weightUOMId',
  WeightUomLabel = 'weightUOMLabel'
}

export type EquipmentTypeSort = {
  direction: SortDirection;
  field: EquipmentTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EquipmentTypeSortFields {
  Code = 'code',
  Cost = 'cost',
  CreatedAt = 'createdAt',
  Currency = 'currency',
  DeletedAt = 'deletedAt',
  Description = 'description',
  HeightMax = 'heightMax',
  HeightMin = 'heightMin',
  HeightUomId = 'heightUOMId',
  Id = 'id',
  Label = 'label',
  Mobility = 'mobility',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  Velocity = 'velocity',
  VelocityUomId = 'velocityUOMId',
  VerticalVelocity = 'verticalVelocity',
  VolumeMax = 'volumeMax',
  VolumeUomId = 'volumeUOMId',
  WeightMax = 'weightMax',
  WeightUomId = 'weightUOMId'
}

export type EquipmentTypeUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Cost */
  cost?: InputMaybe<Scalars['Float']['input']>;
  /** Currency */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Number representing maximum height allowance of equipment model. */
  heightMax?: InputMaybe<Scalars['Float']['input']>;
  /** Number representing minimum height allowance of equipment model. */
  heightMin?: InputMaybe<Scalars['Float']['input']>;
  /** Imperial or metric unit of measure for height limit. */
  heightUOMId?: InputMaybe<Scalars['ID']['input']>;
  /** Type of equipment, i.e. forklift */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Volume of entity */
  mobility?: InputMaybe<EquipmentMobility>;
  /** Velocity */
  velocity?: InputMaybe<Scalars['Float']['input']>;
  /** Velocity unit of measure */
  velocityUOMId?: InputMaybe<Scalars['ID']['input']>;
  /** Velocity of raising and lowering a piece of equipment */
  verticalVelocity?: InputMaybe<Scalars['Float']['input']>;
  /** Volume of entity */
  volumeMax?: InputMaybe<Scalars['Float']['input']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: InputMaybe<Scalars['ID']['input']>;
  /** Velocity */
  weightMax?: InputMaybe<Scalars['Float']['input']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: InputMaybe<Scalars['ID']['input']>;
};

export type EquipmentTypeUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: EquipmentTypeUpdateInput;
};

export type EquipmentUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  equipmentModelId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's label */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  status?: InputMaybe<EquipmentStatus>;
  /** Identifier for Redpoint Tracking Tag. */
  tagId?: InputMaybe<Scalars['String']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type EquipmentUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: EquipmentUpdateInput;
};

export enum ErrorCodes {
  AnalyticsAdminTokenNotFound = 'ANALYTICS_ADMIN_TOKEN_NOT_FOUND',
  AnalyticsCardsNotFound = 'ANALYTICS_CARDS_NOT_FOUND',
  AnalyticsDashboardNotFound = 'ANALYTICS_DASHBOARD_NOT_FOUND',
  AnalyticsEnvConfigError = 'ANALYTICS_ENV_CONFIG_ERROR',
  AnalyticsErrorCreatingUser = 'ANALYTICS_ERROR_CREATING_USER',
  AnalyticsErrorFetchingCards = 'ANALYTICS_ERROR_FETCHING_CARDS',
  AnalyticsErrorFetchingDashboards = 'ANALYTICS_ERROR_FETCHING_DASHBOARDS',
  AnalyticsLiveboardNamingError = 'ANALYTICS_LIVEBOARD_NAMING_ERROR',
  AnalyticsTenantConfigError = 'ANALYTICS_TENANT_CONFIG_ERROR',
  AnalyticsUserNotFound = 'ANALYTICS_USER_NOT_FOUND',
  AnalyticsUserTokenNotFound = 'ANALYTICS_USER_TOKEN_NOT_FOUND',
  AreaIsSystemDefault = 'AREA_IS_SYSTEM_DEFAULT',
  AreaIsSystemDefaultCannotDelete = 'AREA_IS_SYSTEM_DEFAULT_CANNOT_DELETE',
  AuthenticationBrokerUserDisabled = 'AUTHENTICATION_BROKER_USER_DISABLED',
  AuthenticationConnPaused = 'AUTHENTICATION_CONN_PAUSED',
  AuthenticationExpiredToken = 'AUTHENTICATION_EXPIRED_TOKEN',
  AuthenticationFfLoginError = 'AUTHENTICATION_FF_LOGIN_ERROR',
  AuthenticationFfM2MMismatch = 'AUTHENTICATION_FF_M2M_MISMATCH',
  AuthenticationFfUserNotFound = 'AUTHENTICATION_FF_USER_NOT_FOUND',
  AuthenticationIdpUserNotFound = 'AUTHENTICATION_IDP_USER_NOT_FOUND',
  AuthenticationInvalidAccessToken = 'AUTHENTICATION_INVALID_ACCESS_TOKEN',
  AuthenticationInvalidAuthType = 'AUTHENTICATION_INVALID_AUTH_TYPE',
  AuthenticationInvalidIdToken = 'AUTHENTICATION_INVALID_ID_TOKEN',
  AuthenticationMissingAccessToken = 'AUTHENTICATION_MISSING_ACCESS_TOKEN',
  AuthenticationMissingAuthType = 'AUTHENTICATION_MISSING_AUTH_TYPE',
  AuthenticationMissingIdToken = 'AUTHENTICATION_MISSING_ID_TOKEN',
  AuthenticationRevokedToken = 'AUTHENTICATION_REVOKED_TOKEN',
  AuthenticationSapRefreshTokenExpired = 'AUTHENTICATION_SAP_REFRESH_TOKEN_EXPIRED',
  AuthenticationTokenMappingError = 'AUTHENTICATION_TOKEN_MAPPING_ERROR',
  AuthenticationTokenVerificationError = 'AUTHENTICATION_TOKEN_VERIFICATION_ERROR',
  AuthenticationUnknownError = 'AUTHENTICATION_UNKNOWN_ERROR',
  AuthenticationUserDisabled = 'AUTHENTICATION_USER_DISABLED',
  BadRequest = 'BAD_REQUEST',
  BarcodeEmpty = 'BARCODE_EMPTY',
  BarcodeNonCompliant = 'BARCODE_NON_COMPLIANT',
  BarcodeParseError = 'BARCODE_PARSE_ERROR',
  BinIsSystemDefault = 'BIN_IS_SYSTEM_DEFAULT',
  BinIsSystemDefaultCannotDelete = 'BIN_IS_SYSTEM_DEFAULT_CANNOT_DELETE',
  BinNotEmpty = 'BIN_NOT_EMPTY',
  BinNotFound = 'BIN_NOT_FOUND',
  BinSizeBadInputUpdate = 'BIN_SIZE_BAD_INPUT_UPDATE',
  BinSizeInUseDelete = 'BIN_SIZE_IN_USE_DELETE',
  BinSizeIsSystemDefault = 'BIN_SIZE_IS_SYSTEM_DEFAULT',
  BinSizeIsSystemDefaultCannotDelete = 'BIN_SIZE_IS_SYSTEM_DEFAULT_CANNOT_DELETE',
  BinStatusMappingValidation = 'BIN_STATUS_MAPPING_VALIDATION',
  BusinessPartnerComplianceCheckError = 'BUSINESS_PARTNER_COMPLIANCE_CHECK_ERROR',
  CountBinApprovalStockError = 'COUNT_BIN_APPROVAL_STOCK_ERROR',
  CountBinTaskCompleteBadRequest = 'COUNT_BIN_TASK_COMPLETE_BAD_REQUEST',
  CountBinTaskCreateInvalidStockStatus = 'COUNT_BIN_TASK_CREATE_INVALID_STOCK_STATUS',
  CountBinTaskOpen = 'COUNT_BIN_TASK_OPEN',
  CountBinTaskStartInvalidStockStatus = 'COUNT_BIN_TASK_START_INVALID_STOCK_STATUS',
  CycleCountValidation = 'CYCLE_COUNT_VALIDATION',
  DeleteLayoutVariantError = 'DELETE_LAYOUT_VARIANT_ERROR',
  DeliveryCategoryError = 'DELIVERY_CATEGORY_ERROR',
  DeliveryDeliveryItemsNotFound = 'DELIVERY_DELIVERY_ITEMS_NOT_FOUND',
  DeliveryItemStarted = 'DELIVERY_ITEM_STARTED',
  DeliveryStarted = 'DELIVERY_STARTED',
  DeliveryStatusError = 'DELIVERY_STATUS_ERROR',
  DeliveryTasksAlreadyExist = 'DELIVERY_TASKS_ALREADY_EXIST',
  DeliveryTypeError = 'DELIVERY_TYPE_ERROR',
  DispositionAlreadyOpen = 'DISPOSITION_ALREADY_OPEN',
  DispositionLicensePlateDoesntExist = 'DISPOSITION_LICENSE_PLATE_DOESNT_EXIST',
  DispositionLicensePlateInventoryNotFound = 'DISPOSITION_LICENSE_PLATE_INVENTORY_NOT_FOUND',
  DispositionLicensePlateOrDisposoDoesntExist = 'DISPOSITION_LICENSE_PLATE_OR_DISPOSO_DOESNT_EXIST',
  DispositionOpenTasksExist = 'DISPOSITION_OPEN_TASKS_EXIST',
  DoorIsSystemDefault = 'DOOR_IS_SYSTEM_DEFAULT',
  DoorIsSystemDefaultCannotDelete = 'DOOR_IS_SYSTEM_DEFAULT_CANNOT_DELETE',
  DoorNotAssigned = 'DOOR_NOT_ASSIGNED',
  DoorSelectionRequiresWarehouseSelection = 'DOOR_SELECTION_REQUIRES_WAREHOUSE_SELECTION',
  DoorWarehouseDoesntMatchSelectedWarehouse = 'DOOR_WAREHOUSE_DOESNT_MATCH_SELECTED_WAREHOUSE',
  EquipmentModelDeleteValidation = 'EQUIPMENT_MODEL_DELETE_VALIDATION',
  EquipmentTypeDeleteValidation = 'EQUIPMENT_TYPE_DELETE_VALIDATION',
  EquipmentTypeNotInWarehouse = 'EQUIPMENT_TYPE_NOT_IN_WAREHOUSE',
  EventsWarheouseOpsBusinessPartnerNotFound = 'EVENTS_WARHEOUSE_OPS_BUSINESS_PARTNER_NOT_FOUND',
  EventsWarheouseOpsOpNotFound = 'EVENTS_WARHEOUSE_OPS_OP_NOT_FOUND',
  EwmDeliveryNotFound = 'EWM_DELIVERY_NOT_FOUND',
  EwmDlvTaskInvalidBin = 'EWM_DLV_TASK_INVALID_BIN',
  EwmDlvTaskNotFound = 'EWM_DLV_TASK_NOT_FOUND',
  EwmFieldMappingNotFound = 'EWM_FIELD_MAPPING_NOT_FOUND',
  EwmHuDeconStatus = 'EWM_HU_DECON_STATUS',
  EwmHuNotFound = 'EWM_HU_NOT_FOUND',
  EwmInvalidTaskType = 'EWM_INVALID_TASK_TYPE',
  EwmMalformedTask = 'EWM_MALFORMED_TASK',
  EwmTaskCompleteError = 'EWM_TASK_COMPLETE_ERROR',
  EwmTaskCreateError = 'EWM_TASK_CREATE_ERROR',
  EwmTaskInvalidBin = 'EWM_TASK_INVALID_BIN',
  EwmTaskNotFound = 'EWM_TASK_NOT_FOUND',
  EwmTaskPgrError = 'EWM_TASK_PGR_ERROR',
  FoundStockLicensePlateNotFound = 'FOUND_STOCK_LICENSE_PLATE_NOT_FOUND',
  FulfillmentBlocked = 'FULFILLMENT_BLOCKED',
  FulfillmentBlockValidation = 'FULFILLMENT_BLOCK_VALIDATION',
  FulfillmentDeliveryDocInvalid = 'FULFILLMENT_DELIVERY_DOC_INVALID',
  FulfillmentItemComplete = 'FULFILLMENT_ITEM_COMPLETE',
  FulfillmentItemNotAvailable = 'FULFILLMENT_ITEM_NOT_AVAILABLE',
  FulfillmentItemNotFound = 'FULFILLMENT_ITEM_NOT_FOUND',
  FulfillmentSyncError = 'FULFILLMENT_SYNC_ERROR',
  FulfillmentSyncNoProductsFound = 'FULFILLMENT_SYNC_NO_PRODUCTS_FOUND',
  FulfillmentSyncProductNotFound = 'FULFILLMENT_SYNC_PRODUCT_NOT_FOUND',
  GcpRawError = 'GCP_RAW_ERROR',
  GcpStorageFileNotFound = 'GCP_STORAGE_FILE_NOT_FOUND',
  GcpStorageFolderNotFound = 'GCP_STORAGE_FOLDER_NOT_FOUND',
  GcpStorageNoBucketSelected = 'GCP_STORAGE_NO_BUCKET_SELECTED',
  HistoryIdMistmatch = 'HISTORY_ID_MISTMATCH',
  IntegrationLogCreateError = 'INTEGRATION_LOG_CREATE_ERROR',
  InvalidDateError = 'INVALID_DATE_ERROR',
  InvalidInput = 'INVALID_INPUT',
  InventoryNotFound = 'INVENTORY_NOT_FOUND',
  InvReconMetaNotFound = 'INV_RECON_META_NOT_FOUND',
  InvReconReportInpr = 'INV_RECON_REPORT_INPR',
  IsoItemNotFound = 'ISO_ITEM_NOT_FOUND',
  IsoLpAlreadyAssigned = 'ISO_LP_ALREADY_ASSIGNED',
  IsoLpAssignContentError = 'ISO_LP_ASSIGN_CONTENT_ERROR',
  IsoLpAssignTasksStarted = 'ISO_LP_ASSIGN_TASKS_STARTED',
  ItemsNotComplete = 'ITEMS_NOT_COMPLETE',
  LicensePlateAlreadyExists = 'LICENSE_PLATE_ALREADY_EXISTS',
  LicensePlateContentMismatch = 'LICENSE_PLATE_CONTENT_MISMATCH',
  LicensePlateDoesNotMatchSelectedProduct = 'LICENSE_PLATE_DOES_NOT_MATCH_SELECTED_PRODUCT',
  LicensePlateEmpty = 'LICENSE_PLATE_EMPTY',
  LicensePlateMustBeInPlanningBin = 'LICENSE_PLATE_MUST_BE_IN_PLANNING_BIN',
  LicensePlateNotFound = 'LICENSE_PLATE_NOT_FOUND',
  LicensePlateNotInWarehouse = 'LICENSE_PLATE_NOT_IN_WAREHOUSE',
  LicensePlateStatusInvalid = 'LICENSE_PLATE_STATUS_INVALID',
  LicensePlateSyncStatusUnknown = 'LICENSE_PLATE_SYNC_STATUS_UNKNOWN',
  LoadDeliveryIdNotOnTask = 'LOAD_DELIVERY_ID_NOT_ON_TASK',
  LoadFulfillmentItemNotFound = 'LOAD_FULFILLMENT_ITEM_NOT_FOUND',
  LoadFulfillmentNotFound = 'LOAD_FULFILLMENT_NOT_FOUND',
  LoadNoFulfillmentItems = 'LOAD_NO_FULFILLMENT_ITEMS',
  LoadNoStockInStaging = 'LOAD_NO_STOCK_IN_STAGING',
  LoadTaskCompleteBadRequest = 'LOAD_TASK_COMPLETE_BAD_REQUEST',
  LoadTaskCompleteLpBadRequest = 'LOAD_TASK_COMPLETE_LP_BAD_REQUEST',
  LoadTaskNotCreated = 'LOAD_TASK_NOT_CREATED',
  LoadWarehouseNotOnFulfillment = 'LOAD_WAREHOUSE_NOT_ON_FULFILLMENT',
  LotNotFound = 'LOT_NOT_FOUND',
  LotProductMismatch = 'LOT_PRODUCT_MISMATCH',
  LotSyncError = 'LOT_SYNC_ERROR',
  LotSyncProductNotFound = 'LOT_SYNC_PRODUCT_NOT_FOUND',
  MinMaxReplenishmentquantityUndefined = 'MIN_MAX_REPLENISHMENTQUANTITY_UNDEFINED',
  NotFound = 'NOT_FOUND',
  NotUnique = 'NOT_UNIQUE',
  NoSlottingRunDeployed = 'NO_SLOTTING_RUN_DEPLOYED',
  NoStockFound = 'NO_STOCK_FOUND',
  PhysicalInventoryDocPostError = 'PHYSICAL_INVENTORY_DOC_POST_ERROR',
  PickToStagingDeliveryDoorBinNotAssigned = 'PICK_TO_STAGING_DELIVERY_DOOR_BIN_NOT_ASSIGNED',
  PickToStagingDeliveryDoorNotAssigned = 'PICK_TO_STAGING_DELIVERY_DOOR_NOT_ASSIGNED',
  PickToStagingNoAvailableQuantity = 'PICK_TO_STAGING_NO_AVAILABLE_QUANTITY',
  PickToStagingTaskCompleteBadRequest = 'PICK_TO_STAGING_TASK_COMPLETE_BAD_REQUEST',
  PickToStagingTaskCompleteLpBadRequest = 'PICK_TO_STAGING_TASK_COMPLETE_LP_BAD_REQUEST',
  PlanningBinNotFound = 'PLANNING_BIN_NOT_FOUND',
  ProductIsLotManagedNoLotSelected = 'PRODUCT_IS_LOT_MANAGED_NO_LOT_SELECTED',
  ProductLotSelectionMismatch = 'PRODUCT_LOT_SELECTION_MISMATCH',
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  ProductSyncError = 'PRODUCT_SYNC_ERROR',
  ProductSyncNoErpProductsFound = 'PRODUCT_SYNC_NO_ERP_PRODUCTS_FOUND',
  ProductUomCreateManyError = 'PRODUCT_UOM_CREATE_MANY_ERROR',
  PutawayTaskDeliveryItemsNotFound = 'PUTAWAY_TASK_DELIVERY_ITEMS_NOT_FOUND',
  PutawayTaskValidation = 'PUTAWAY_TASK_VALIDATION',
  SapAuthError = 'SAP_AUTH_ERROR',
  SapGeneral = 'SAP_GENERAL',
  SapHandlingUnitNotFound = 'SAP_HANDLING_UNIT_NOT_FOUND',
  SapInboundDeliveryImport = 'SAP_INBOUND_DELIVERY_IMPORT',
  SapIntegrationHuDetailErr = 'SAP_INTEGRATION_HU_DETAIL_ERR',
  SapInvalidRequest = 'SAP_INVALID_REQUEST',
  SapListProductsById = 'SAP_LIST_PRODUCTS_BY_ID',
  SapListProductsByPlant = 'SAP_LIST_PRODUCTS_BY_PLANT',
  SapMaterialMovementCreate = 'SAP_MATERIAL_MOVEMENT_CREATE',
  SapMaterialToFfError = 'SAP_MATERIAL_TO_FF_ERROR',
  SapNotFound = 'SAP_NOT_FOUND',
  SapPlantStorageLocationsNotFound = 'SAP_PLANT_STORAGE_LOCATIONS_NOT_FOUND',
  SapPostGoodsError = 'SAP_POST_GOODS_ERROR',
  SapStockStatusDefaultUpdate = 'SAP_STOCK_STATUS_DEFAULT_UPDATE',
  SapStockTypeNotFound = 'SAP_STOCK_TYPE_NOT_FOUND',
  SapUnknown = 'SAP_UNKNOWN',
  ServerError = 'SERVER_ERROR',
  SlocSyncError = 'SLOC_SYNC_ERROR',
  SlocSyncNoExitAreas = 'SLOC_SYNC_NO_EXIT_AREAS',
  SlottingDatasetSlocPlantWhError = 'SLOTTING_DATASET_SLOC_PLANT_WH_ERROR',
  SlottingDatasetVariantListError = 'SLOTTING_DATASET_VARIANT_LIST_ERROR',
  SlottingRunAlreadyDeployed = 'SLOTTING_RUN_ALREADY_DEPLOYED',
  SlottingRunNotFound = 'SLOTTING_RUN_NOT_FOUND',
  SmartScanContextNotFound = 'SMART_SCAN_CONTEXT_NOT_FOUND',
  SmartScanLicensePlateNotFound = 'SMART_SCAN_LICENSE_PLATE_NOT_FOUND',
  StockStatusCreateSystemConnectionMissing = 'STOCK_STATUS_CREATE_SYSTEM_CONNECTION_MISSING',
  StockStatusMappingCreateDuplicate = 'STOCK_STATUS_MAPPING_CREATE_DUPLICATE',
  StockStatusMappingCreateDuplicateDefault = 'STOCK_STATUS_MAPPING_CREATE_DUPLICATE_DEFAULT',
  StockStatusMappingNotFound = 'STOCK_STATUS_MAPPING_NOT_FOUND',
  StockStatusSystemConnectionInvalid = 'STOCK_STATUS_SYSTEM_CONNECTION_INVALID',
  StockStatusSystemConnectionMappingError = 'STOCK_STATUS_SYSTEM_CONNECTION_MAPPING_ERROR',
  StockStatusUpdateSystemConnectionMissing = 'STOCK_STATUS_UPDATE_SYSTEM_CONNECTION_MISSING',
  SystemConnectionHuUserStatusUpdateError = 'SYSTEM_CONNECTION_HU_USER_STATUS_UPDATE_ERROR',
  SystemConnectionNotFound = 'SYSTEM_CONNECTION_NOT_FOUND',
  SystemConnectionPaused = 'SYSTEM_CONNECTION_PAUSED',
  TaskBlockInvalid = 'TASK_BLOCK_INVALID',
  TaskBlockStatus = 'TASK_BLOCK_STATUS',
  TaskBlockTaskType = 'TASK_BLOCK_TASK_TYPE',
  TaskCompleteError = 'TASK_COMPLETE_ERROR',
  TaskGroupAiEndpointRequest = 'TASK_GROUP_AI_ENDPOINT_REQUEST',
  TaskGroupAssignMissingUserTeam = 'TASK_GROUP_ASSIGN_MISSING_USER_TEAM',
  TaskGroupEmpty = 'TASK_GROUP_EMPTY',
  TaskGroupNotFound = 'TASK_GROUP_NOT_FOUND',
  TaskGroupOrderingXYCoordinatesUnknown = 'TASK_GROUP_ORDERING_X_Y_COORDINATES_UNKNOWN',
  TaskGroupStatusCancelled = 'TASK_GROUP_STATUS_CANCELLED',
  TaskGroupStatusComplete = 'TASK_GROUP_STATUS_COMPLETE',
  TaskInsufficientQuantity = 'TASK_INSUFFICIENT_QUANTITY',
  TaskInvalidDestBin = 'TASK_INVALID_DEST_BIN',
  TaskLicensePlateStockStatus = 'TASK_LICENSE_PLATE_STOCK_STATUS',
  TaskLicensePlateStockStatusLpOrTaskNotFound = 'TASK_LICENSE_PLATE_STOCK_STATUS_LP_OR_TASK_NOT_FOUND',
  TaskLpStockStatusOpenTasks = 'TASK_LP_STOCK_STATUS_OPEN_TASKS',
  TaskOpenTasks = 'TASK_OPEN_TASKS',
  TaskQuantityInvalid = 'TASK_QUANTITY_INVALID',
  TaskQuantityNotFound = 'TASK_QUANTITY_NOT_FOUND',
  TaskReceiveFromProductionBadRequest = 'TASK_RECEIVE_FROM_PRODUCTION_BAD_REQUEST',
  TaskStatusCancelled = 'TASK_STATUS_CANCELLED',
  TaskStatusComplete = 'TASK_STATUS_COMPLETE',
  TaskStatusPlanned = 'TASK_STATUS_PLANNED',
  TaskTypeBinStatusRestriction = 'TASK_TYPE_BIN_STATUS_RESTRICTION',
  TaskTypeBinStatusUpdate = 'TASK_TYPE_BIN_STATUS_UPDATE',
  TaskTypeBinStatusValidation = 'TASK_TYPE_BIN_STATUS_VALIDATION',
  TaskTypeInvalid = 'TASK_TYPE_INVALID',
  TaskTypeNotFound = 'TASK_TYPE_NOT_FOUND',
  TaskTypeRead = 'TASK_TYPE_READ',
  TaskTypeStockStatusRestriction = 'TASK_TYPE_STOCK_STATUS_RESTRICTION',
  TaskUpdateTask = 'TASK_UPDATE_TASK',
  UnauthorizedError = 'UNAUTHORIZED_ERROR',
  Unhandled = 'UNHANDLED',
  UnitOfMeasureBaseQuantityValidationError = 'UNIT_OF_MEASURE_BASE_QUANTITY_VALIDATION_ERROR',
  UnitOfMeasureCompletionQuantityExceedsCreationQuantity = 'UNIT_OF_MEASURE_COMPLETION_QUANTITY_EXCEEDS_CREATION_QUANTITY',
  UnitOfMeasureInvalidForProduct = 'UNIT_OF_MEASURE_INVALID_FOR_PRODUCT',
  UnitOfMeasureNotFound = 'UNIT_OF_MEASURE_NOT_FOUND',
  UnitOfMeasureProductDoesNotMatchValidationError = 'UNIT_OF_MEASURE_PRODUCT_DOES_NOT_MATCH_VALIDATION_ERROR',
  UnitOfMeasureRequiredForProduct = 'UNIT_OF_MEASURE_REQUIRED_FOR_PRODUCT',
  UnknownBarcodeScanner = 'UNKNOWN_BARCODE_SCANNER',
  UnknownBarcodeSymbology = 'UNKNOWN_BARCODE_SYMBOLOGY',
  UploadEventError = 'UPLOAD_EVENT_ERROR',
  UserCreateError = 'USER_CREATE_ERROR',
  UserDoesNotHaveADefaultWarehouse = 'USER_DOES_NOT_HAVE_A_DEFAULT_WAREHOUSE',
  UserDoesNotHaveAPrimaryTeam = 'USER_DOES_NOT_HAVE_A_PRIMARY_TEAM',
  UserNotFoundError = 'USER_NOT_FOUND_ERROR',
  WarehouseConfigurationNotFound = 'WAREHOUSE_CONFIGURATION_NOT_FOUND',
  WarehouseNotFound = 'WAREHOUSE_NOT_FOUND',
  WarehouseNotInCompany = 'WAREHOUSE_NOT_IN_COMPANY',
  WarehouseOpBpNotFound = 'WAREHOUSE_OP_BP_NOT_FOUND',
  WarehouseOpBpUnsupported = 'WAREHOUSE_OP_BP_UNSUPPORTED',
  WarehouseOpCodeNotCode = 'WAREHOUSE_OP_CODE_NOT_CODE',
  WarehouseOpCodeUnknown = 'WAREHOUSE_OP_CODE_UNKNOWN',
  WarehouseOpDuplicateUploadError = 'WAREHOUSE_OP_DUPLICATE_UPLOAD_ERROR',
  WarehouseOpNoBarcodeProvided = 'WAREHOUSE_OP_NO_BARCODE_PROVIDED',
  WarehouseOpUploadError = 'WAREHOUSE_OP_UPLOAD_ERROR',
  WarehousePathDiffWarehouse = 'WAREHOUSE_PATH_DIFF_WAREHOUSE',
  WarehousePathSameAreaPath = 'WAREHOUSE_PATH_SAME_AREA_PATH',
  WarehousePreferredUnitOfMeasureValidation = 'WAREHOUSE_PREFERRED_UNIT_OF_MEASURE_VALIDATION',
  WarehouseSystemConnectionNotFound = 'WAREHOUSE_SYSTEM_CONNECTION_NOT_FOUND',
  ZoneUpdateInvalidBinType = 'ZONE_UPDATE_INVALID_BIN_TYPE',
  ZoneUpdateInvalidWarehouse = 'ZONE_UPDATE_INVALID_WAREHOUSE'
}

export type ErrorCodesFilterComparison = {
  eq?: InputMaybe<ErrorCodes>;
  gt?: InputMaybe<ErrorCodes>;
  gte?: InputMaybe<ErrorCodes>;
  iLike?: InputMaybe<ErrorCodes>;
  in?: InputMaybe<Array<ErrorCodes>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ErrorCodes>;
  lt?: InputMaybe<ErrorCodes>;
  lte?: InputMaybe<ErrorCodes>;
  neq?: InputMaybe<ErrorCodes>;
  notILike?: InputMaybe<ErrorCodes>;
  notIn?: InputMaybe<Array<ErrorCodes>>;
  notLike?: InputMaybe<ErrorCodes>;
};

export enum ErrorType {
  AnalyticsError = 'ANALYTICS_ERROR',
  Authorization = 'AUTHORIZATION',
  Create = 'CREATE',
  Database = 'DATABASE',
  Delete = 'DELETE',
  Destroy = 'DESTROY',
  NotFound = 'NOT_FOUND',
  Read = 'READ',
  SapError = 'SAP_ERROR',
  ServerError = 'SERVER_ERROR',
  Update = 'UPDATE',
  Validation = 'VALIDATION'
}

export type EwmBinToBinResponse = {
  __typename?: 'EwmBinToBinResponse';
  /** Warehouse task */
  warehouseTask: Scalars['String']['output'];
};

export type EwmCompleteWarehouseOrderTaskDto = {
  handlingUnit?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  warehouse?: InputMaybe<Scalars['String']['input']>;
  warehouseTask: Scalars['String']['input'];
};

export type EwmDelivery = {
  __typename?: 'EwmDelivery';
  /** Advanced Shipping Notification */
  advancedShippingNotification?: Maybe<Scalars['String']['output']>;
  /** Delivery category */
  deliveryCategory?: Maybe<Scalars['String']['output']>;
  /** EWM delivery type */
  deliveryType?: Maybe<Scalars['String']['output']>;
  /** Due date */
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Handling Units */
  handlingUnits?: Maybe<Array<EwmHandlingUnit>>;
  /** Handling Units */
  handlingUnitsCount: Scalars['Int']['output'];
  /** Delivery associated with the entity */
  inboundDeliveryCode?: Maybe<Scalars['String']['output']>;
  /** Lookup method details */
  lookUpMethod?: Maybe<EwmDeliveryLookUpMethod>;
  /** Business partner code */
  partnerCode?: Maybe<Scalars['String']['output']>;
  /** Business partner name */
  partnerDescription?: Maybe<Scalars['String']['output']>;
  /** Warehouse code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
};

export enum EwmDeliveryDetailOption {
  Asn = 'asn',
  Delivery = 'delivery',
  HandlingUnit = 'handlingUnit',
  PurchaseDocument = 'purchaseDocument',
  Unknown = 'unknown'
}

export type EwmDeliveryLookUpMethod = {
  __typename?: 'EwmDeliveryLookUpMethod';
  /** Lookup method */
  method?: Maybe<EwmDeliveryDetailOption>;
  /** Lookup value */
  value?: Maybe<Scalars['String']['output']>;
};

export type EwmHuDeconResponse = {
  __typename?: 'EwmHUDeconResponse';
  /** Warehouse entity belongs to */
  ewmWarehouse: Scalars['String']['output'];
  /** Handling unit */
  handlingUnit: Scalars['String']['output'];
  workCenter: Scalars['String']['output'];
};

export type EwmHandlingUnit = {
  __typename?: 'EwmHandlingUnit';
  /** Entity ID */
  code: Scalars['String']['output'];
  /** Delivery item associated with entity */
  deliveryItem?: Maybe<Scalars['String']['output']>;
  /** Gross weight of entity */
  grossWeight: Scalars['Float']['output'];
  /** Handling unit status */
  handlingUnitStatus: Scalars['String']['output'];
  /** Packaging material type */
  handlingUnitType: Scalars['String']['output'];
  /** Nested handling units */
  handlingUnits?: Maybe<Array<EwmHandlingUnit>>;
  /** Net weight of entity */
  netWeight: Scalars['Float']['output'];
  /** Packaging material */
  packagingMaterial: Scalars['String']['output'];
  pgrStatus?: Maybe<Scalars['String']['output']>;
  /** Product code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Product description */
  productDescription?: Maybe<Scalars['String']['output']>;
  putawayStatus?: Maybe<Scalars['String']['output']>;
  /** Quantity in base unit of measure */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** Unit of measure for entity */
  quantityUnitOfMeasure?: Maybe<Scalars['String']['output']>;
  /** Stock status type entity belongs to */
  stockType?: Maybe<Scalars['String']['output']>;
  /** Handling Unit type */
  type?: Maybe<HandlingUnitType>;
  unloadingStatus?: Maybe<Scalars['String']['output']>;
  warehouseTaskConfirmationStatus?: Maybe<Scalars['String']['output']>;
  warehouseTaskCreateStatus?: Maybe<Scalars['String']['output']>;
  /** Weight UOM, i.e KG */
  weightUnitOfMeasure: Scalars['String']['output'];
};

export type EwmWarehouseOrder = {
  __typename?: 'EwmWarehouseOrder';
  creationDateTime?: Maybe<Scalars['DateTime']['output']>;
  executingResource: Scalars['String']['output'];
  lastChangeDateTime?: Maybe<Scalars['DateTime']['output']>;
  latestStartDateTime?: Maybe<Scalars['DateTime']['output']>;
  warehouseCode: Scalars['String']['output'];
  warehouseOrder?: Maybe<Scalars['String']['output']>;
  warehouseOrderConfirmedDateTime?: Maybe<Scalars['DateTime']['output']>;
  warehouseOrderStartDateTime?: Maybe<Scalars['DateTime']['output']>;
  warehouseOrderStatus: Scalars['String']['output'];
  warehouseOrderStatusName: EwmWarehouseOrderStatusName;
};

export type EwmWarehouseOrderCreationDateTimeFilterComparison = {
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EwmWarehouseOrderFilter = {
  and?: InputMaybe<Array<EwmWarehouseOrderFilter>>;
  creationDateTime?: InputMaybe<EwmWarehouseOrderCreationDateTimeFilterComparison>;
  or?: InputMaybe<Array<EwmWarehouseOrderFilter>>;
  warehouseOrder?: InputMaybe<EwmWarehouseOrderWarehouseOrderFilterComparison>;
  warehouseOrderStatusName?: InputMaybe<EwmWarehouseOrderWarehouseOrderStatusNameFilterComparison>;
};

export type EwmWarehouseOrderOffsetConnection = {
  __typename?: 'EwmWarehouseOrderOffsetConnection';
  /** Array of nodes. */
  nodes: Array<EwmWarehouseOrder>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type EwmWarehouseOrderSort = {
  direction: SortDirection;
  field: EwmWarehouseOrderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EwmWarehouseOrderSortFields {
  CreationDateTime = 'creationDateTime',
  WarehouseOrder = 'warehouseOrder',
  WarehouseOrderStatusName = 'warehouseOrderStatusName'
}

export type EwmWarehouseOrderWarehouseOrderFilterComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type EwmWarehouseOrderWarehouseOrderStatusNameFilterComparison = {
  eq?: InputMaybe<EwmWarehouseOrderStatusName>;
};

export type EwmWarehouseTask = {
  __typename?: 'EwmWarehouseTask';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Bin entity belongs to */
  destinationBin?: Maybe<Scalars['String']['output']>;
  /** Handling unit */
  destinationHandlingUnit?: Maybe<Scalars['String']['output']>;
  destinationStorageType?: Maybe<Scalars['String']['output']>;
  /** Net weight of entity */
  netWeight?: Maybe<Scalars['String']['output']>;
  /** Product code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  productDescription?: Maybe<Scalars['String']['output']>;
  /** Quantity in base unit of measure */
  quantity?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for entity */
  quantityUnitOfMeasure?: Maybe<Scalars['String']['output']>;
  /** Bin entity belongs to */
  sourceBin?: Maybe<Scalars['String']['output']>;
  /** Handling unit */
  sourceHandlingUnit?: Maybe<Scalars['String']['output']>;
  sourceStorageType?: Maybe<Scalars['String']['output']>;
  /** Task status, i.e Not Started */
  status?: Maybe<EwmWarehouseTaskStatus>;
  /** Quantity in base unit of measure */
  targetQuantity?: Maybe<Scalars['String']['output']>;
  /** Task type */
  taskType?: Maybe<Scalars['String']['output']>;
  warehouseOrder: Scalars['String']['output'];
  /** Unit of measure for entity */
  weightUnitOfMeasure?: Maybe<Scalars['String']['output']>;
};

export type EwmWarehouseTaskCodeFilterComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type EwmWarehouseTaskCreatedAtFilterComparison = {
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EwmWarehouseTaskFilter = {
  and?: InputMaybe<Array<EwmWarehouseTaskFilter>>;
  code?: InputMaybe<EwmWarehouseTaskCodeFilterComparison>;
  createdAt?: InputMaybe<EwmWarehouseTaskCreatedAtFilterComparison>;
  or?: InputMaybe<Array<EwmWarehouseTaskFilter>>;
  productCode?: InputMaybe<EwmWarehouseTaskProductCodeFilterComparison>;
  quantity?: InputMaybe<EwmWarehouseTaskQuantityFilterComparison>;
  sourceHandlingUnit?: InputMaybe<EwmWarehouseTaskSourceHandlingUnitFilterComparison>;
  status?: InputMaybe<EwmWarehouseTaskStatusFilterComparison>;
  targetQuantity?: InputMaybe<EwmWarehouseTaskTargetQuantityFilterComparison>;
  warehouseOrder?: InputMaybe<EwmWarehouseTaskWarehouseOrderFilterComparison>;
};

export type EwmWarehouseTaskOffsetConnection = {
  __typename?: 'EwmWarehouseTaskOffsetConnection';
  /** Array of nodes. */
  nodes: Array<EwmWarehouseTask>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type EwmWarehouseTaskProductCodeFilterComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type EwmWarehouseTaskQuantityFilterComparison = {
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
};

export type EwmWarehouseTaskResponse = {
  __typename?: 'EwmWarehouseTaskResponse';
  /** Handling unit */
  handlingUnit: Scalars['String']['output'];
  pgrStatus?: Maybe<Scalars['String']['output']>;
  putawayStatus?: Maybe<Scalars['String']['output']>;
  unloadingStatus?: Maybe<Scalars['String']['output']>;
  /** Warehouse task */
  warehouseTask: Scalars['String']['output'];
  warehouseTaskConfirmationStatus?: Maybe<Scalars['String']['output']>;
  warehouseTaskCreateStatus?: Maybe<Scalars['String']['output']>;
};

export type EwmWarehouseTaskSort = {
  direction: SortDirection;
  field: EwmWarehouseTaskSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EwmWarehouseTaskSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  ProductCode = 'productCode',
  Quantity = 'quantity',
  SourceHandlingUnit = 'sourceHandlingUnit',
  Status = 'status',
  TargetQuantity = 'targetQuantity',
  WarehouseOrder = 'warehouseOrder'
}

export type EwmWarehouseTaskSourceHandlingUnitFilterComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export enum EwmWarehouseTaskStatus {
  Canceled = 'canceled',
  Confirmed = 'confirmed',
  Open = 'open'
}

export type EwmWarehouseTaskStatusFilterComparison = {
  eq?: InputMaybe<EwmWarehouseTaskStatus>;
};

export type EwmWarehouseTaskTargetQuantityFilterComparison = {
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
};

export type EwmWarehouseTaskWarehouseOrderFilterComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export enum FeatureContext {
  App = 'app'
}

export type FloatFieldComparison = {
  between?: InputMaybe<FloatFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<FloatFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatFieldComparisonBetween = {
  lower: Scalars['Float']['input'];
  upper: Scalars['Float']['input'];
};

export enum Forecasting {
  Future = 'future',
  Historical = 'historical'
}

export type ForecastingFilterComparison = {
  eq?: InputMaybe<Forecasting>;
  gt?: InputMaybe<Forecasting>;
  gte?: InputMaybe<Forecasting>;
  iLike?: InputMaybe<Forecasting>;
  in?: InputMaybe<Array<Forecasting>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Forecasting>;
  lt?: InputMaybe<Forecasting>;
  lte?: InputMaybe<Forecasting>;
  neq?: InputMaybe<Forecasting>;
  notILike?: InputMaybe<Forecasting>;
  notIn?: InputMaybe<Array<Forecasting>>;
  notLike?: InputMaybe<Forecasting>;
};

export type FoundStockTaskCreateAndCompleteOneInput = {
  /** The record to create */
  createAndCompleteOneFoundStockTaskDto: CreateAndCompleteOneFoundStockTaskDto;
};

export type FulfilldLpErpConflictStockItemDto = {
  __typename?: 'FulfilldLpErpConflictStockItemDto';
  /** Entity code */
  erpLotCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  erpProductCode?: Maybe<Scalars['String']['output']>;
  /** Quantity of product */
  erpQuantity?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  erpStockStatusCode?: Maybe<Scalars['String']['output']>;
  /** Entity's label */
  erpStockStatusLabel?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  erpUnitOfMeasureCode?: Maybe<Scalars['String']['output']>;
  lotCode?: Maybe<Scalars['String']['output']>;
  lotId?: Maybe<Scalars['String']['output']>;
  productCode: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  quantity: Scalars['String']['output'];
  stockStatusTypeCode: Scalars['String']['output'];
  stockStatusTypeId: Scalars['String']['output'];
  stockStatusTypeLabel: Scalars['String']['output'];
  unitOfMeasureCode: Scalars['String']['output'];
  unitOfMeasureId: Scalars['String']['output'];
};

/** Fulfillment Block model */
export type FulfillmentBlock = {
  __typename?: 'FulfillmentBlock';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type FulfillmentBlockCreateInput = {
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  label: Scalars['String']['input'];
};

export type FulfillmentBlockFilter = {
  and?: InputMaybe<Array<FulfillmentBlockFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FulfillmentBlockFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type FulfillmentBlockInput = {
  /** Created on date */
  fulfillmentBlockId: Scalars['String']['input'];
  /** Bill of lading */
  id: Scalars['String']['input'];
};

export type FulfillmentBlockOffsetConnection = {
  __typename?: 'FulfillmentBlockOffsetConnection';
  /** Array of nodes. */
  nodes: Array<FulfillmentBlock>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FulfillmentBlockSort = {
  direction: SortDirection;
  field: FulfillmentBlockSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FulfillmentBlockSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Label = 'label',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type FulfillmentBlockUpdateInput = {
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  label?: InputMaybe<Scalars['String']['input']>;
};

export type FulfillmentCreateOrUpdateManyDto = {
  /** Bill of lading */
  billOfLading?: InputMaybe<Scalars['String']['input']>;
  /** Overall blocked status */
  blockStatus?: InputMaybe<Scalars['String']['input']>;
  /** Delivery Document Type */
  deliveryDocumentType?: InputMaybe<Scalars['String']['input']>;
  /** Overall status for the delivery or fulfillment */
  deliveryStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Entity's door ID (foreign key) */
  doorId?: InputMaybe<Scalars['ID']['input']>;
  /** Delivery date */
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Erp Delivery code */
  erpCode?: InputMaybe<Scalars['String']['input']>;
  /** Created on date */
  erpCreated?: InputMaybe<Scalars['DateTime']['input']>;
  /** When data was last updated in ERP */
  erpLastChanged?: InputMaybe<Scalars['DateTime']['input']>;
  /** Reference document */
  erpSalesOrder?: InputMaybe<Scalars['String']['input']>;
  /** Export */
  export?: InputMaybe<Scalars['String']['input']>;
  /** Fulfillment item associated with the entity */
  fulfillmentItems?: InputMaybe<Array<FulfillmentItemCreateInput>>;
  /** Goods receipt or goods issue status */
  goodsReceiptOrIssueStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Delivery load or unload status */
  loadOrUnloadStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Picking or putaway status */
  pickOrPutawayStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Point of contact */
  pointOfContact?: InputMaybe<Scalars['String']['input']>;
  /** Date promised */
  promiseDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date ready to ship */
  shipReadyDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Ship to party */
  shipTo?: InputMaybe<Scalars['String']['input']>;
  /** Ship to party name */
  shipToName?: InputMaybe<Scalars['String']['input']>;
  /** Sold to party */
  soldTo?: InputMaybe<Scalars['String']['input']>;
  /** Sold to party name */
  soldToName?: InputMaybe<Scalars['String']['input']>;
  /** Total weight */
  totalGrossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Net weight */
  totalNetWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Volume */
  totalVolume?: InputMaybe<Scalars['Float']['input']>;
  /** Volume unit of measure */
  totalVolumeUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Volume unit of measure */
  totalVolumeUomId?: InputMaybe<Scalars['String']['input']>;
  /** Weight unit of measure */
  totalWeightUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Weight unit of measure */
  totalWeightUomId?: InputMaybe<Scalars['String']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type FulfillmentCreateOrUpdateManyInputDto = {
  /** Array of records to create */
  fulfillments: Array<FulfillmentCreateOrUpdateManyDto>;
};

/** FulfillmentItem model */
export type FulfillmentItem = {
  __typename?: 'FulfillmentItem';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Customer material */
  customerProductCode?: Maybe<Scalars['String']['output']>;
  /** Date the material is available */
  dateMaterialAvailable?: Maybe<Scalars['DateTime']['output']>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  delivery?: Maybe<Delivery>;
  /** Delivery ID (foreign key) */
  deliveryId: Scalars['ID']['output'];
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** When data was last updated in ERP */
  erpLastChanged?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Reference document
   * @deprecated Update to reference sales order on the parent delivery entity
   */
  erpSalesOrder?: Maybe<Scalars['String']['output']>;
  /** Reference item */
  erpSalesOrderItem?: Maybe<Scalars['String']['output']>;
  /** Delivery Document */
  fulfillmentCode?: Maybe<Scalars['String']['output']>;
  /** Fulfillment item associated with the entity */
  fulfillmentItem: Scalars['String']['output'];
  /** Quantity of product */
  fulfillmentQuantity: Scalars['String']['output'];
  /** Unit of measure for entity */
  fulfillmentQuantityUom?: Maybe<Scalars['String']['output']>;
  /** Gross weight of entity */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  issueStatus?: Maybe<DeliveryCompletionStatus>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Level the license plate is in the heiarchy */
  licensePlateLevel?: Maybe<Scalars['String']['output']>;
  /** Load status */
  loadStatus?: Maybe<DeliveryCompletionStatus>;
  lot?: Maybe<Lot>;
  /** Entity's lot ID (foreign key) */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Net weight of entity */
  netWeight?: Maybe<Scalars['Float']['output']>;
  /** Pick status */
  pickStatus?: Maybe<DeliveryCompletionStatus>;
  product?: Maybe<Product>;
  /** Entity's product ID (foreign key) */
  productId?: Maybe<Scalars['ID']['output']>;
  stockStatusType?: Maybe<StockStatusType>;
  /** Entity's stock status type ID (foreign key) */
  stockStatusTypeId?: Maybe<Scalars['ID']['output']>;
  /** Entity's SAP storage location */
  storageLocation?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  unitOfMeasureId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Volume of entity */
  volume?: Maybe<Scalars['Float']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: Maybe<Scalars['ID']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: Maybe<Scalars['ID']['output']>;
};

export type FulfillmentItemCreateInput = {
  /** Customer material */
  customerProductCode?: InputMaybe<Scalars['String']['input']>;
  /** Date the material is available */
  dateMaterialAvailable?: InputMaybe<Scalars['DateTime']['input']>;
  /** Delivery ID (foreign key) */
  deliveryId?: InputMaybe<Scalars['ID']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** When data was last updated in ERP */
  erpLastChanged?: InputMaybe<Scalars['DateTime']['input']>;
  /** Reference document */
  erpSalesOrder?: InputMaybe<Scalars['String']['input']>;
  /** Reference item */
  erpSalesOrderItem?: InputMaybe<Scalars['String']['input']>;
  /** Delivery Document */
  fulfillmentCode?: InputMaybe<Scalars['String']['input']>;
  /** Fulfillment item associated with the entity */
  fulfillmentItem: Scalars['String']['input'];
  /** Quantity of product */
  fulfillmentQuantity?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure for entity */
  fulfillmentQuantityUom?: InputMaybe<Scalars['String']['input']>;
  /** Gross weight of entity */
  grossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Goods receipt or goods issue status */
  issueStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Entity's lot ID (foreign key) */
  lotId?: InputMaybe<Scalars['ID']['input']>;
  /** Net weight of entity */
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Pick status */
  pickStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Entity's product ID (foreign key) */
  productId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's stock status type ID (foreign key) */
  stockStatusTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's SAP storage location */
  storageLocation?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure ID */
  unitOfMeasureId?: InputMaybe<Scalars['String']['input']>;
  /** Volume of entity */
  volume?: InputMaybe<Scalars['Float']['input']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: InputMaybe<Scalars['String']['input']>;
};

export type FulfillmentItemCreateOneInput = {
  /** The record to create */
  fulfillmentItem: FulfillmentItemCreateInput;
};

export type FulfillmentItemDetails = {
  __typename?: 'FulfillmentItemDetails';
  /** Entity code */
  destinationBinCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  destinationBinId?: Maybe<Scalars['ID']['output']>;
  /** Fulfillment item associated with the entity */
  fulfillmentItem: Scalars['String']['output'];
  /** Fulfillment item id (foreign key) */
  id: Scalars['ID']['output'];
  /** Entity code */
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  licensePlateDescription?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  lotCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  productCode: Scalars['String']['output'];
  /** Description of entity */
  productDescription?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  productId: Scalars['ID']['output'];
  /** Quantity of product */
  quantity: Scalars['String']['output'];
  /** Entity code */
  sourceBinCode?: Maybe<Scalars['String']['output']>;
  /** Entity's bin ID (foreign key) */
  sourceBinId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  stockStatusCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  stockStatusId?: Maybe<Scalars['ID']['output']>;
};

export type FulfillmentItemFilter = {
  and?: InputMaybe<Array<FulfillmentItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  customerProductCode?: InputMaybe<StringFieldComparison>;
  dateMaterialAvailable?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deliveryId?: InputMaybe<IdFilterComparison>;
  description?: InputMaybe<StringFieldComparison>;
  erpLastChanged?: InputMaybe<DateFieldComparison>;
  erpSalesOrder?: InputMaybe<StringFieldComparison>;
  erpSalesOrderItem?: InputMaybe<StringFieldComparison>;
  fulfillmentCode?: InputMaybe<StringFieldComparison>;
  fulfillmentItem?: InputMaybe<StringFieldComparison>;
  fulfillmentQuantity?: InputMaybe<StringFieldComparison>;
  fulfillmentQuantityUom?: InputMaybe<StringFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  issueStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  licensePlateId?: InputMaybe<IdFilterComparison>;
  licensePlateLevel?: InputMaybe<StringFieldComparison>;
  loadStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  lotId?: InputMaybe<IdFilterComparison>;
  netWeight?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<FulfillmentItemFilter>>;
  pickStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  stockStatusTypeId?: InputMaybe<IdFilterComparison>;
  storageLocation?: InputMaybe<StringFieldComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  volume?: InputMaybe<FloatFieldComparison>;
  volumeUOMId?: InputMaybe<IdFilterComparison>;
  weightUOMId?: InputMaybe<IdFilterComparison>;
};

export type FulfillmentItemForFulfillmentCreateInput = {
  /** Customer material */
  customerProductCode?: InputMaybe<Scalars['String']['input']>;
  /** Description of entity */
  dateMaterialAvailable?: InputMaybe<Scalars['DateTime']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Description of entity */
  erpLastChanged?: InputMaybe<Scalars['DateTime']['input']>;
  /** Reference document */
  erpSalesOrder?: InputMaybe<Scalars['String']['input']>;
  /** Reference document */
  erpSalesOrderItem?: InputMaybe<Scalars['String']['input']>;
  /** Delivery Document */
  fulfillmentCode?: InputMaybe<Scalars['String']['input']>;
  /** Fulfillment item associated with the entity */
  fulfillmentItem: Scalars['String']['input'];
  /** Quantity of product */
  fulfillmentQuantity: Scalars['String']['input'];
  /** Unit of measure for entity */
  fulfillmentQuantityUom?: InputMaybe<Scalars['String']['input']>;
  /** Gross weight of entity */
  grossWeight?: InputMaybe<Scalars['Float']['input']>;
  issueStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Load status */
  licensePlateLevel?: InputMaybe<DeliveryCompletionStatus>;
  /** Load status */
  loadStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Entity's lot ID (foreign key) */
  lotId?: InputMaybe<Scalars['ID']['input']>;
  /** Pick status */
  pickStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Unit of measure ID */
  unitOfMeasureId: Scalars['ID']['input'];
};

export type FulfillmentItemLicensePlateAssignDto = {
  assign?: InputMaybe<Array<LicensePlateForFulfillmentItemDto>>;
  /** Entity ID */
  fulfillmentItemId: Scalars['ID']['input'];
  unassign?: InputMaybe<Array<LicensePlateForFulfillmentItemDto>>;
};

export type FulfillmentItemNodes = {
  __typename?: 'FulfillmentItemNodes';
  nodes: Array<FulfillmentItem>;
  totalCount: Scalars['Int']['output'];
};

export type FulfillmentItemOffsetConnection = {
  __typename?: 'FulfillmentItemOffsetConnection';
  /** Array of nodes. */
  nodes: Array<FulfillmentItem>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FulfillmentItemSearchResults = {
  __typename?: 'FulfillmentItemSearchResults';
  erpSalesOrder?: Maybe<Scalars['String']['output']>;
  erpSalesOrderItem?: Maybe<Scalars['String']['output']>;
  fulfillmentItem?: Maybe<Scalars['String']['output']>;
  issueStatus?: Maybe<Scalars['String']['output']>;
  lotCode?: Maybe<Scalars['String']['output']>;
  pickStatus?: Maybe<Scalars['String']['output']>;
  productCode?: Maybe<Scalars['String']['output']>;
  productDescription?: Maybe<Scalars['String']['output']>;
};

export type FulfillmentItemSort = {
  direction: SortDirection;
  field: FulfillmentItemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FulfillmentItemSortFields {
  CreatedAt = 'createdAt',
  CustomerProductCode = 'customerProductCode',
  DateMaterialAvailable = 'dateMaterialAvailable',
  DeletedAt = 'deletedAt',
  DeliveryId = 'deliveryId',
  Description = 'description',
  ErpLastChanged = 'erpLastChanged',
  ErpSalesOrder = 'erpSalesOrder',
  ErpSalesOrderItem = 'erpSalesOrderItem',
  FulfillmentCode = 'fulfillmentCode',
  FulfillmentItem = 'fulfillmentItem',
  FulfillmentQuantity = 'fulfillmentQuantity',
  FulfillmentQuantityUom = 'fulfillmentQuantityUom',
  GrossWeight = 'grossWeight',
  Id = 'id',
  IssueStatus = 'issueStatus',
  LicensePlateId = 'licensePlateId',
  LicensePlateLevel = 'licensePlateLevel',
  LoadStatus = 'loadStatus',
  LotId = 'lotId',
  NetWeight = 'netWeight',
  PickStatus = 'pickStatus',
  ProductId = 'productId',
  StockStatusTypeId = 'stockStatusTypeId',
  StorageLocation = 'storageLocation',
  UnitOfMeasureId = 'unitOfMeasureId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  Volume = 'volume',
  VolumeUomId = 'volumeUOMId',
  WeightUomId = 'weightUOMId'
}

export type FulfillmentItemUpdateInput = {
  /** Customer material */
  customerProductCode?: InputMaybe<Scalars['String']['input']>;
  /** Date the material is available */
  dateMaterialAvailable?: InputMaybe<Scalars['DateTime']['input']>;
  /** Delivery ID (foreign key) */
  deliveryId?: InputMaybe<Scalars['ID']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** When data was last updated in ERP */
  erpLastChanged?: InputMaybe<Scalars['DateTime']['input']>;
  /** Reference document */
  erpSalesOrder?: InputMaybe<Scalars['String']['input']>;
  /** Reference item */
  erpSalesOrderItem?: InputMaybe<Scalars['String']['input']>;
  /** Delivery Document */
  fulfillmentCode?: InputMaybe<Scalars['String']['input']>;
  /** Fulfillment item associated with the entity */
  fulfillmentItem?: InputMaybe<Scalars['String']['input']>;
  /** Quantity of product */
  fulfillmentQuantity?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure for entity */
  fulfillmentQuantityUom?: InputMaybe<Scalars['String']['input']>;
  /** Gross weight of entity */
  grossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Goods receipt or goods issue status */
  issueStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Entity's lot ID (foreign key) */
  lotId?: InputMaybe<Scalars['ID']['input']>;
  /** Net weight of entity */
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Pick status */
  pickStatus?: InputMaybe<DeliveryCompletionStatus>;
  /** Entity's product ID (foreign key) */
  productId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's stock status type ID (foreign key) */
  stockStatusTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's SAP storage location */
  storageLocation?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure ID */
  unitOfMeasureId?: InputMaybe<Scalars['String']['input']>;
  /** Volume of entity */
  volume?: InputMaybe<Scalars['Float']['input']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: InputMaybe<Scalars['String']['input']>;
};

export type FulfillmentItemUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: FulfillmentItemUpdateInput;
};

export type FulfillmentItemsForInternalStockOrder = {
  /** Entity ID */
  fulfillmentItemId: Scalars['ID']['input'];
  /** Entity ID */
  licensePlateId: Scalars['ID']['input'];
};

/** Fulfillment Search results */
export type FulfillmentSearchResults = {
  __typename?: 'FulfillmentSearchResults';
  billOfLading?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['String']['output']>;
  erpCode?: Maybe<Scalars['String']['output']>;
  erpPurchaseOrder?: Maybe<Scalars['String']['output']>;
  erpSalesOrder?: Maybe<Scalars['String']['output']>;
  fulfillmentItems?: Maybe<Array<FulfillmentItemSearchResults>>;
  fulfillmentStatus?: Maybe<Scalars['String']['output']>;
  goodsIssueStatus?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['String']['output']>;
  pickStatus?: Maybe<Scalars['String']['output']>;
  shipTo?: Maybe<Scalars['String']['output']>;
  shipToBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  shipToName?: Maybe<Scalars['String']['output']>;
  soldTo?: Maybe<Scalars['String']['output']>;
  soldToBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  soldToName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  warehouseCode?: Maybe<Scalars['String']['output']>;
  warehouseName?: Maybe<Scalars['String']['output']>;
};

export type FulfillmentUnblockInput = {
  /** Bill of lading */
  id: Scalars['String']['input'];
};

export type FulfillmentWithItemsCreateOneDtoInput = {
  billOfLading?: InputMaybe<Scalars['String']['input']>;
  blockStatus?: InputMaybe<Scalars['String']['input']>;
  /** Delivery category */
  category?: InputMaybe<DeliveryCategory>;
  deliveryStatus?: InputMaybe<DeliveryCompletionStatus>;
  doorId: Scalars['ID']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  erpBlockingReason?: InputMaybe<Scalars['String']['input']>;
  erpCode?: InputMaybe<Scalars['String']['input']>;
  erpCreated?: InputMaybe<Scalars['DateTime']['input']>;
  /** When data was last updated in ERP */
  erpLastChanged?: InputMaybe<Scalars['DateTime']['input']>;
  erpPurchaseOrder?: InputMaybe<Scalars['String']['input']>;
  erpSalesOrder?: InputMaybe<Scalars['String']['input']>;
  export?: InputMaybe<Scalars['String']['input']>;
  fulfillmentBlockId?: InputMaybe<Scalars['ID']['input']>;
  /** Fulfillment items to create */
  fulfillmentItems?: InputMaybe<Array<FulfillmentItemForFulfillmentCreateInput>>;
  goodsReceiptOrIssueStatus?: InputMaybe<DeliveryCompletionStatus>;
  loadOrUnloadStatus?: InputMaybe<DeliveryCompletionStatus>;
  pickOrPutawayStatus?: InputMaybe<DeliveryCompletionStatus>;
  pointOfContact?: InputMaybe<Scalars['String']['input']>;
  /** Delivery promise date */
  promiseDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** When data was last updated in ERP */
  shipReadyDate?: InputMaybe<Scalars['DateTime']['input']>;
  shipTo?: InputMaybe<Scalars['String']['input']>;
  shipToBusinessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  shipToName?: InputMaybe<Scalars['String']['input']>;
  soldTo?: InputMaybe<Scalars['String']['input']>;
  soldToBusinessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  soldToName?: InputMaybe<Scalars['String']['input']>;
  supplier?: InputMaybe<Scalars['String']['input']>;
  supplierBusinessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  supplierName?: InputMaybe<Scalars['String']['input']>;
  totalGrossWeight?: InputMaybe<Scalars['Float']['input']>;
  totalNetWeight?: InputMaybe<Scalars['Float']['input']>;
  totalVolume?: InputMaybe<Scalars['Float']['input']>;
  totalVolumeUom?: InputMaybe<Scalars['String']['input']>;
  totalWeightUom?: InputMaybe<Scalars['String']['input']>;
};

export type FulfillmentWithItemsCreateOneInput = {
  /** The record to create */
  fulfillmentWithItems: FulfillmentWithItemsCreateOneDtoInput;
};

export type GenerateBinOutputDto = {
  __typename?: 'GenerateBinOutputDto';
  bins: Array<Bin>;
};

export type GenerateDataOutputDto = {
  __typename?: 'GenerateDataOutputDto';
  deliveries: Array<Delivery>;
  fulfillments: Array<Delivery>;
};

export type GenerateProductOutputDto = {
  __typename?: 'GenerateProductOutputDto';
  products: Array<Product>;
};

export type GlobalSearchResultWithAggs = {
  __typename?: 'GlobalSearchResultWithAggs';
  aggs?: Maybe<AggsResults>;
  hits: Array<GlobalSearchResults>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GlobalSearchResults = AreaSearchResults | BinSearchResults | DeliverySearchResults | EmptySearchResults | FulfillmentSearchResults | LicensePlateSearchResults | ProductSearchResults | TaskSearchResults;

export enum HandlingUnitType {
  Carton = 'carton',
  Mixed = 'mixed',
  Uniform = 'uniform'
}

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  iLike?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  neq?: InputMaybe<Scalars['ID']['input']>;
  notILike?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  notLike?: InputMaybe<Scalars['ID']['input']>;
};

export type IdOrCodeDto = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Entity ID */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type IntFieldComparison = {
  between?: InputMaybe<IntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  notBetween?: InputMaybe<IntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntFieldComparisonBetween = {
  lower: Scalars['Int']['input'];
  upper: Scalars['Int']['input'];
};

/** Integration log model */
export type IntegrationLog = {
  __typename?: 'IntegrationLog';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  entityId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  entityLabel?: Maybe<Scalars['String']['output']>;
  /** Entity's human readable name */
  entityName?: Maybe<Scalars['String']['output']>;
  /** Fulfilld error code */
  errorCode?: Maybe<ErrorCodes>;
  /** Error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity ID */
  jobId?: Maybe<Scalars['ID']['output']>;
  /** Number of rows complete */
  numRowsComplete?: Maybe<Scalars['Int']['output']>;
  /** Number of rows complete */
  numRowsFailed?: Maybe<Scalars['Int']['output']>;
  /** Operation complete date/time */
  operationComplete?: Maybe<Scalars['DateTime']['output']>;
  /** Operation start date/time */
  operationStart?: Maybe<Scalars['DateTime']['output']>;
  /** Processing operation */
  processingOperation?: Maybe<ProcessingOperation>;
  /** Processing status */
  processingStatus?: Maybe<ProcessingStatus>;
  /** Raw errors (as json) */
  rawErrors?: Maybe<Scalars['JSONObject']['output']>;
  /** Total number of rows */
  totalNumRows?: Maybe<Scalars['Int']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's user ID (foreign key) */
  userId?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type IntegrationLogCreateInput = {
  /** Entity ID */
  entityId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity code */
  entityLabel?: InputMaybe<Scalars['String']['input']>;
  /** Entity's human readable name */
  entityName?: InputMaybe<Scalars['String']['input']>;
  /** Fulfilld error code */
  errorCode?: InputMaybe<ErrorCodes>;
  /** Error message */
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** Entity ID */
  jobId?: InputMaybe<Scalars['ID']['input']>;
  /** Number of rows complete */
  numRowsComplete?: InputMaybe<Scalars['Int']['input']>;
  /** number of rows failed */
  numRowsFailed?: InputMaybe<Scalars['Int']['input']>;
  /** Operation complete date/time */
  operationComplete?: InputMaybe<Scalars['DateTime']['input']>;
  /** Operation start date/time */
  operationStart?: InputMaybe<Scalars['DateTime']['input']>;
  /** Processing operation */
  processingOperation?: InputMaybe<ProcessingOperation>;
  /** Processing status */
  processingStatus?: InputMaybe<ProcessingStatus>;
  /** Raw errors (as json) */
  rawErrors?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Total number of rows */
  totalNumRows?: InputMaybe<Scalars['Int']['input']>;
  /** Entity's user ID (foreign key) */
  userId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type IntegrationLogCreateOneInput = {
  /** The record to create */
  integrationLog: IntegrationLogCreateInput;
};

export type IntegrationLogFilter = {
  and?: InputMaybe<Array<IntegrationLogFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  entityId?: InputMaybe<IdFilterComparison>;
  entityLabel?: InputMaybe<StringFieldComparison>;
  entityName?: InputMaybe<StringFieldComparison>;
  errorCode?: InputMaybe<ErrorCodesFilterComparison>;
  errorMessage?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobId?: InputMaybe<IdFilterComparison>;
  numRowsComplete?: InputMaybe<IntFieldComparison>;
  numRowsFailed?: InputMaybe<IntFieldComparison>;
  operationComplete?: InputMaybe<DateFieldComparison>;
  operationStart?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<IntegrationLogFilter>>;
  processingOperation?: InputMaybe<ProcessingOperationFilterComparison>;
  processingStatus?: InputMaybe<ProcessingStatusFilterComparison>;
  rawErrors?: InputMaybe<JsonObjectFilterComparison>;
  totalNumRows?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  userId?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type IntegrationLogOffsetConnection = {
  __typename?: 'IntegrationLogOffsetConnection';
  /** Array of nodes. */
  nodes: Array<IntegrationLog>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type IntegrationLogSort = {
  direction: SortDirection;
  field: IntegrationLogSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum IntegrationLogSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EntityId = 'entityId',
  EntityLabel = 'entityLabel',
  EntityName = 'entityName',
  ErrorCode = 'errorCode',
  ErrorMessage = 'errorMessage',
  Id = 'id',
  JobId = 'jobId',
  NumRowsComplete = 'numRowsComplete',
  NumRowsFailed = 'numRowsFailed',
  OperationComplete = 'operationComplete',
  OperationStart = 'operationStart',
  ProcessingOperation = 'processingOperation',
  ProcessingStatus = 'processingStatus',
  RawErrors = 'rawErrors',
  TotalNumRows = 'totalNumRows',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  UserId = 'userId',
  WarehouseId = 'warehouseId'
}

export type IntegrationLogUpdateInput = {
  /** Entity ID */
  entityId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity code */
  entityLabel?: InputMaybe<Scalars['String']['input']>;
  /** Entity's human readable name */
  entityName?: InputMaybe<Scalars['String']['input']>;
  /** Fulfilld error code */
  errorCode?: InputMaybe<ErrorCodes>;
  /** Error message */
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** Entity ID */
  jobId?: InputMaybe<Scalars['ID']['input']>;
  /** Number of rows complete */
  numRowsComplete?: InputMaybe<Scalars['Int']['input']>;
  /** number of rows failed */
  numRowsFailed?: InputMaybe<Scalars['Int']['input']>;
  /** Operation complete date/time */
  operationComplete?: InputMaybe<Scalars['DateTime']['input']>;
  /** Operation start date/time */
  operationStart?: InputMaybe<Scalars['DateTime']['input']>;
  /** Processing operation */
  processingOperation?: InputMaybe<ProcessingOperation>;
  /** Processing status */
  processingStatus?: InputMaybe<ProcessingStatus>;
  /** Raw errors (as json) */
  rawErrors?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Total number of rows */
  totalNumRows?: InputMaybe<Scalars['Int']['input']>;
  /** Entity's user ID (foreign key) */
  userId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type IntegrationLogUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Integration Log Update Data */
  update: IntegrationLogUpdateInput;
};

export type InternalStockOrder = {
  __typename?: 'InternalStockOrder';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity ID */
  internalStockOrderTypeId: Scalars['String']['output'];
  referenceDocument?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type InternalStockOrderAssignedInventory = {
  __typename?: 'InternalStockOrderAssignedInventory';
  /** Has an active or completed pick task */
  activeOrCompletedPickTask?: Maybe<Scalars['Boolean']['output']>;
  /** Available quantity */
  availableQuantity?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  binCode?: Maybe<Scalars['String']['output']>;
  /** Entity's bin ID (foreign key) */
  binId?: Maybe<Scalars['ID']['output']>;
  /** Fulfillment item id (foreign key) */
  fulfillmentItemId?: Maybe<Scalars['ID']['output']>;
  /** Fulfillment item associated with the entity */
  fulfillmentItemItem?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  internalStockOrderItemId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  licensePlateDescription?: Maybe<Scalars['String']['output']>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  lotCode?: Maybe<Scalars['String']['output']>;
  /** Entity's lot ID (foreign key) */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Number of open tasks */
  openTaskCount?: Maybe<Scalars['Int']['output']>;
  /** Open task quantity */
  openTaskQuantity?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  productDescription?: Maybe<Scalars['String']['output']>;
  /** Product ID */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Quantity of product */
  quantity: Scalars['String']['output'];
  /** I.e. Returns, Available, Lot Restricted etc. */
  stockStatus?: Maybe<Scalars['String']['output']>;
  /** Entity's stock status type ID (foreign key) */
  stockStatusTypeId?: Maybe<Scalars['ID']['output']>;
  /** Unit of measure for entity */
  unitOfMeasure?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  unitOfMeasureId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type InternalStockOrderAssignedInventoryFilter = {
  activeOrCompletedPickTask?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<InternalStockOrderAssignedInventoryFilter>>;
  availableQuantity?: InputMaybe<StringFieldComparison>;
  binCode?: InputMaybe<StringFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  fulfillmentItemId?: InputMaybe<IdFilterComparison>;
  fulfillmentItemItem?: InputMaybe<StringFieldComparison>;
  internalStockOrderItemId?: InputMaybe<IdFilterComparison>;
  licensePlateCode?: InputMaybe<StringFieldComparison>;
  licensePlateDescription?: InputMaybe<StringFieldComparison>;
  licensePlateId?: InputMaybe<IdFilterComparison>;
  lotCode?: InputMaybe<StringFieldComparison>;
  lotId?: InputMaybe<IdFilterComparison>;
  openTaskCount?: InputMaybe<IntFieldComparison>;
  openTaskQuantity?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InternalStockOrderAssignedInventoryFilter>>;
  productCode?: InputMaybe<StringFieldComparison>;
  productDescription?: InputMaybe<StringFieldComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<StringFieldComparison>;
  stockStatus?: InputMaybe<StringFieldComparison>;
  stockStatusTypeId?: InputMaybe<IdFilterComparison>;
  unitOfMeasure?: InputMaybe<StringFieldComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type InternalStockOrderAssignedInventoryOffsetConnection = {
  __typename?: 'InternalStockOrderAssignedInventoryOffsetConnection';
  /** Array of nodes. */
  nodes: Array<InternalStockOrderAssignedInventory>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type InternalStockOrderAssignedInventorySort = {
  direction: SortDirection;
  field: InternalStockOrderAssignedInventorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InternalStockOrderAssignedInventorySortFields {
  ActiveOrCompletedPickTask = 'activeOrCompletedPickTask',
  AvailableQuantity = 'availableQuantity',
  BinCode = 'binCode',
  BinId = 'binId',
  FulfillmentItemId = 'fulfillmentItemId',
  FulfillmentItemItem = 'fulfillmentItemItem',
  InternalStockOrderItemId = 'internalStockOrderItemId',
  LicensePlateCode = 'licensePlateCode',
  LicensePlateDescription = 'licensePlateDescription',
  LicensePlateId = 'licensePlateId',
  LotCode = 'lotCode',
  LotId = 'lotId',
  OpenTaskCount = 'openTaskCount',
  OpenTaskQuantity = 'openTaskQuantity',
  ProductCode = 'productCode',
  ProductDescription = 'productDescription',
  ProductId = 'productId',
  Quantity = 'quantity',
  StockStatus = 'stockStatus',
  StockStatusTypeId = 'stockStatusTypeId',
  UnitOfMeasure = 'unitOfMeasure',
  UnitOfMeasureId = 'unitOfMeasureId',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId'
}

export type InternalStockOrderCreateForFulfillmentDto = {
  /** Fulfillment items for stock order */
  fulfillmentItems: Array<FulfillmentItemsForInternalStockOrder>;
  /** Entity ID */
  internalStockOrderTypeId: Scalars['ID']['input'];
};

export type InternalStockOrderCreateForFulfillmentInput = {
  /** The record to create */
  internalStockOrder: InternalStockOrderCreateForFulfillmentDto;
};

export type InternalStockOrderCreateForLpDto = {
  /** Entity code */
  internalStockOrderTypeCode?: InputMaybe<Scalars['String']['input']>;
  /** Entity ID */
  internalStockOrderTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** License plate ids for stock order */
  licensePlateIds: Array<Scalars['String']['input']>;
  referenceDocument?: InputMaybe<Scalars['String']['input']>;
};

export type InternalStockOrderCreateForLpInput = {
  /** The record to create */
  internalStockOrder: InternalStockOrderCreateForLpDto;
};

export type InternalStockOrderFilter = {
  and?: InputMaybe<Array<InternalStockOrderFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  internalStockOrderTypeId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InternalStockOrderFilter>>;
  referenceDocument?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type InternalStockOrderOffsetConnection = {
  __typename?: 'InternalStockOrderOffsetConnection';
  /** Array of nodes. */
  nodes: Array<InternalStockOrder>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type InternalStockOrderSort = {
  direction: SortDirection;
  field: InternalStockOrderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InternalStockOrderSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  InternalStockOrderTypeId = 'internalStockOrderTypeId',
  ReferenceDocument = 'referenceDocument',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type InternalStockOrderType = {
  __typename?: 'InternalStockOrderType';
  /** Entity code */
  code: InternalStockOrderTypeCode;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export enum InternalStockOrderTypeCode {
  PickToDock = 'pickToDock',
  PutawayFromStorage = 'putawayFromStorage',
  QualityRequest = 'qualityRequest',
  ReworkRequest = 'reworkRequest'
}

export type InternalStockOrderTypeCodeFilterComparison = {
  eq?: InputMaybe<InternalStockOrderTypeCode>;
  gt?: InputMaybe<InternalStockOrderTypeCode>;
  gte?: InputMaybe<InternalStockOrderTypeCode>;
  iLike?: InputMaybe<InternalStockOrderTypeCode>;
  in?: InputMaybe<Array<InternalStockOrderTypeCode>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<InternalStockOrderTypeCode>;
  lt?: InputMaybe<InternalStockOrderTypeCode>;
  lte?: InputMaybe<InternalStockOrderTypeCode>;
  neq?: InputMaybe<InternalStockOrderTypeCode>;
  notILike?: InputMaybe<InternalStockOrderTypeCode>;
  notIn?: InputMaybe<Array<InternalStockOrderTypeCode>>;
  notLike?: InputMaybe<InternalStockOrderTypeCode>;
};

export type InternalStockOrderTypeFilter = {
  and?: InputMaybe<Array<InternalStockOrderTypeFilter>>;
  code?: InputMaybe<InternalStockOrderTypeCodeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InternalStockOrderTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type InternalStockOrderTypeOffsetConnection = {
  __typename?: 'InternalStockOrderTypeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<InternalStockOrderType>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type InternalStockOrderTypeSort = {
  direction: SortDirection;
  field: InternalStockOrderTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InternalStockOrderTypeSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Label = 'label',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type InventoryBase = {
  __typename?: 'InventoryBase';
  /** Open task quantity */
  availableQuantity: Scalars['String']['output'];
  /** Entity's bin ID (foreign key) */
  binId: Scalars['ID']['output'];
  /** Entity ID */
  deliveryItemId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  fulfillmentItemId?: Maybe<Scalars['ID']['output']>;
  hash: Scalars['ID']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's user ID (foreign key) */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Entity's lot ID (foreign key) */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Number of open tasks */
  openTaskCount: Scalars['Float']['output'];
  /** Available quantity */
  openTaskQuantity: Scalars['String']['output'];
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['output'];
  /** Quantity of product moved */
  quantity: Scalars['String']['output'];
  /** Entity's stock status type ID (foreign key) */
  stockStatusTypeId?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type InventoryBaseQueryShape = {
  __typename?: 'InventoryBaseQueryShape';
  /** Entity code */
  aisleCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  aisleId?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  areaCode?: Maybe<Scalars['String']['output']>;
  /** Entity's area ID (foreign key) */
  areaId?: Maybe<Scalars['ID']['output']>;
  /** Area's type, i.e. TEMP, PERM */
  areaStorageType?: Maybe<AreaStorageType>;
  /** Available quantity */
  availableQuantity?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  binCode?: Maybe<Scalars['String']['output']>;
  /** Entity's bin ID (foreign key) */
  binId?: Maybe<Scalars['ID']['output']>;
  /** Bin type */
  binType?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  businessPartnerCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  businessPartnerName?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  deliveryCode?: Maybe<Scalars['String']['output']>;
  /** Delivery ID (foreign key) */
  deliveryId?: Maybe<Scalars['ID']['output']>;
  /** Delivery item ID (foreign key) */
  deliveryItemId?: Maybe<Scalars['ID']['output']>;
  /** Delivery item associated with entity */
  deliveryItemItem?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for dimensions of a license plate */
  dimensionUOM?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment erp code */
  erpSalesOrder?: Maybe<Scalars['String']['output']>;
  /** Fulfillment item id (foreign key) */
  fulfillmentItemId?: Maybe<Scalars['ID']['output']>;
  /** Fulfillment item associated with the entity */
  fulfillmentItemItem?: Maybe<Scalars['String']['output']>;
  /** Gross volume of entity */
  grossVolume?: Maybe<Scalars['Float']['output']>;
  /** Gross weight of entity */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Height of license plate */
  height?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Length of license plate */
  length?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  licensePlateDescription?: Maybe<Scalars['String']['output']>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Status determining if the license plate and its contents are successfully synced with the ERP ledger. */
  licensePlateLedgerSyncStatus?: Maybe<LedgerSyncStatus>;
  /** Status of the quantity of a product within license plate */
  licensePlatePartial?: Maybe<LicensePlatePartial>;
  /** Active/Inactive license plate status flag */
  licensePlateStatus?: Maybe<LicensePlateStatusState>;
  /** Entity's SAP storage location */
  licensePlateStorageLocation?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  lotCode?: Maybe<Scalars['String']['output']>;
  /** Lot expiration date */
  lotExpiration?: Maybe<Scalars['DateTime']['output']>;
  /** Entity's lot ID (foreign key) */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Whether the product is lot managed or not */
  lotManaged?: Maybe<Scalars['Boolean']['output']>;
  /** Lot Restricted */
  lotRestricted?: Maybe<Scalars['Boolean']['output']>;
  /** Net weight of entity */
  netWeight?: Maybe<Scalars['Float']['output']>;
  /** Number of open tasks */
  openTaskCount?: Maybe<Scalars['Int']['output']>;
  /** Open task quantity */
  openTaskQuantity?: Maybe<Scalars['String']['output']>;
  /** License Plate Parent ID */
  parentId?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  productDescription?: Maybe<Scalars['String']['output']>;
  /** Product ID */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Quantity of product */
  quantity: Scalars['String']['output'];
  /** Business partner code */
  soldToBusinessPartnerCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  soldToBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  /** Business partner name */
  soldToBusinessPartnerName?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  stockDeliveryCode?: Maybe<Scalars['String']['output']>;
  /** Delivery ID (foreign key) */
  stockDeliveryId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  stockFulfillmentCode?: Maybe<Scalars['String']['output']>;
  /** Fulfillment Id */
  stockFulfillmentId?: Maybe<Scalars['ID']['output']>;
  /** I.e. Returns, Available, Lot Restricted etc. */
  stockStatus?: Maybe<Scalars['String']['output']>;
  /** Entity's stock status type ID (foreign key) */
  stockStatusTypeId?: Maybe<Scalars['ID']['output']>;
  /** Unit of measure for entity */
  unitOfMeasure?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  unitOfMeasureId?: Maybe<Scalars['ID']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOM?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** Weight UOM, i.e KG */
  weightUOM?: Maybe<Scalars['String']['output']>;
  /** Width of license plate */
  width?: Maybe<Scalars['Float']['output']>;
};

export type InventoryBaseQueryShapeFilter = {
  aisleCode?: InputMaybe<StringFieldComparison>;
  aisleId?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<InventoryBaseQueryShapeFilter>>;
  areaCode?: InputMaybe<StringFieldComparison>;
  areaId?: InputMaybe<IdFilterComparison>;
  areaStorageType?: InputMaybe<AreaStorageTypeFilterComparison>;
  availableQuantity?: InputMaybe<StringFieldComparison>;
  binCode?: InputMaybe<StringFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  binType?: InputMaybe<StringFieldComparison>;
  businessPartnerCode?: InputMaybe<StringFieldComparison>;
  businessPartnerName?: InputMaybe<StringFieldComparison>;
  deliveryCode?: InputMaybe<StringFieldComparison>;
  deliveryId?: InputMaybe<IdFilterComparison>;
  deliveryItemId?: InputMaybe<IdFilterComparison>;
  deliveryItemItem?: InputMaybe<StringFieldComparison>;
  dimensionUOM?: InputMaybe<StringFieldComparison>;
  erpSalesOrder?: InputMaybe<StringFieldComparison>;
  fulfillmentItemId?: InputMaybe<IdFilterComparison>;
  fulfillmentItemItem?: InputMaybe<StringFieldComparison>;
  grossVolume?: InputMaybe<FloatFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  height?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  length?: InputMaybe<FloatFieldComparison>;
  licensePlateCode?: InputMaybe<StringFieldComparison>;
  licensePlateDescription?: InputMaybe<StringFieldComparison>;
  licensePlateId?: InputMaybe<IdFilterComparison>;
  licensePlateLedgerSyncStatus?: InputMaybe<LedgerSyncStatusFilterComparison>;
  licensePlatePartial?: InputMaybe<LicensePlatePartialFilterComparison>;
  licensePlateStatus?: InputMaybe<LicensePlateStatusStateFilterComparison>;
  licensePlateStorageLocation?: InputMaybe<StringFieldComparison>;
  lotCode?: InputMaybe<StringFieldComparison>;
  lotExpiration?: InputMaybe<DateFieldComparison>;
  lotId?: InputMaybe<IdFilterComparison>;
  lotManaged?: InputMaybe<BooleanFieldComparison>;
  lotRestricted?: InputMaybe<BooleanFieldComparison>;
  netWeight?: InputMaybe<FloatFieldComparison>;
  openTaskCount?: InputMaybe<IntFieldComparison>;
  openTaskQuantity?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InventoryBaseQueryShapeFilter>>;
  parentId?: InputMaybe<StringFieldComparison>;
  productCode?: InputMaybe<StringFieldComparison>;
  productDescription?: InputMaybe<StringFieldComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<StringFieldComparison>;
  soldToBusinessPartnerCode?: InputMaybe<StringFieldComparison>;
  soldToBusinessPartnerId?: InputMaybe<IdFilterComparison>;
  soldToBusinessPartnerName?: InputMaybe<StringFieldComparison>;
  stockDeliveryCode?: InputMaybe<StringFieldComparison>;
  stockDeliveryId?: InputMaybe<IdFilterComparison>;
  stockFulfillmentCode?: InputMaybe<StringFieldComparison>;
  stockFulfillmentId?: InputMaybe<IdFilterComparison>;
  stockStatus?: InputMaybe<StringFieldComparison>;
  stockStatusTypeId?: InputMaybe<IdFilterComparison>;
  unitOfMeasure?: InputMaybe<StringFieldComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  volumeUOM?: InputMaybe<StringFieldComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  weightUOM?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<FloatFieldComparison>;
};

export type InventoryBaseQueryShapeOffsetConnection = {
  __typename?: 'InventoryBaseQueryShapeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<InventoryBaseQueryShape>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type InventoryBaseQueryShapeSort = {
  direction: SortDirection;
  field: InventoryBaseQueryShapeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InventoryBaseQueryShapeSortFields {
  AisleCode = 'aisleCode',
  AisleId = 'aisleId',
  AreaCode = 'areaCode',
  AreaId = 'areaId',
  AreaStorageType = 'areaStorageType',
  AvailableQuantity = 'availableQuantity',
  BinCode = 'binCode',
  BinId = 'binId',
  BinType = 'binType',
  BusinessPartnerCode = 'businessPartnerCode',
  BusinessPartnerName = 'businessPartnerName',
  DeliveryCode = 'deliveryCode',
  DeliveryId = 'deliveryId',
  DeliveryItemId = 'deliveryItemId',
  DeliveryItemItem = 'deliveryItemItem',
  DimensionUom = 'dimensionUOM',
  ErpSalesOrder = 'erpSalesOrder',
  FulfillmentItemId = 'fulfillmentItemId',
  FulfillmentItemItem = 'fulfillmentItemItem',
  GrossVolume = 'grossVolume',
  GrossWeight = 'grossWeight',
  Height = 'height',
  Id = 'id',
  Length = 'length',
  LicensePlateCode = 'licensePlateCode',
  LicensePlateDescription = 'licensePlateDescription',
  LicensePlateId = 'licensePlateId',
  LicensePlateLedgerSyncStatus = 'licensePlateLedgerSyncStatus',
  LicensePlatePartial = 'licensePlatePartial',
  LicensePlateStatus = 'licensePlateStatus',
  LicensePlateStorageLocation = 'licensePlateStorageLocation',
  LotCode = 'lotCode',
  LotExpiration = 'lotExpiration',
  LotId = 'lotId',
  LotManaged = 'lotManaged',
  LotRestricted = 'lotRestricted',
  NetWeight = 'netWeight',
  OpenTaskCount = 'openTaskCount',
  OpenTaskQuantity = 'openTaskQuantity',
  ParentId = 'parentId',
  ProductCode = 'productCode',
  ProductDescription = 'productDescription',
  ProductId = 'productId',
  Quantity = 'quantity',
  SoldToBusinessPartnerCode = 'soldToBusinessPartnerCode',
  SoldToBusinessPartnerId = 'soldToBusinessPartnerId',
  SoldToBusinessPartnerName = 'soldToBusinessPartnerName',
  StockDeliveryCode = 'stockDeliveryCode',
  StockDeliveryId = 'stockDeliveryId',
  StockFulfillmentCode = 'stockFulfillmentCode',
  StockFulfillmentId = 'stockFulfillmentId',
  StockStatus = 'stockStatus',
  StockStatusTypeId = 'stockStatusTypeId',
  UnitOfMeasure = 'unitOfMeasure',
  UnitOfMeasureId = 'unitOfMeasureId',
  VolumeUom = 'volumeUOM',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId',
  WeightUom = 'weightUOM',
  Width = 'width'
}

export enum InventoryCategory {
  Executable = 'EXECUTABLE',
  Planned = 'PLANNED'
}

export type InventoryLotQueryShape = {
  __typename?: 'InventoryLotQueryShape';
  /** Available quantity */
  availableQuantity?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  businessPartnerCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  businessPartnerName?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Lot expiration date */
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** Gross weight of entity */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  lotCode?: Maybe<Scalars['String']['output']>;
  /** Entity's lot ID (foreign key) */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Number of open tasks */
  openTaskCount?: Maybe<Scalars['Int']['output']>;
  /** Open task quantity */
  openTaskQuantity?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Product ID */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Lot production date */
  productionDate?: Maybe<Scalars['DateTime']['output']>;
  /** Quantity of product */
  quantity?: Maybe<Scalars['String']['output']>;
  /** I.e. Returns, Available, Lot Restricted etc. */
  stockStatus?: Maybe<Scalars['String']['output']>;
  /** Entity's stock status type ID (foreign key) */
  stockStatusTypeId?: Maybe<Scalars['ID']['output']>;
  /** Weight UOM, i.e KG */
  totalWeightUOM?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for entity */
  unitOfMeasure?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  unitOfMeasureId?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type InventoryLotQueryShapeFilter = {
  and?: InputMaybe<Array<InventoryLotQueryShapeFilter>>;
  availableQuantity?: InputMaybe<StringFieldComparison>;
  businessPartnerCode?: InputMaybe<StringFieldComparison>;
  businessPartnerName?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  expirationDate?: InputMaybe<DateFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  lotCode?: InputMaybe<StringFieldComparison>;
  lotId?: InputMaybe<IdFilterComparison>;
  openTaskCount?: InputMaybe<IntFieldComparison>;
  openTaskQuantity?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InventoryLotQueryShapeFilter>>;
  productCode?: InputMaybe<StringFieldComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  productionDate?: InputMaybe<DateFieldComparison>;
  quantity?: InputMaybe<StringFieldComparison>;
  stockStatus?: InputMaybe<StringFieldComparison>;
  stockStatusTypeId?: InputMaybe<IdFilterComparison>;
  totalWeightUOM?: InputMaybe<StringFieldComparison>;
  unitOfMeasure?: InputMaybe<StringFieldComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type InventoryLotQueryShapeOffsetConnection = {
  __typename?: 'InventoryLotQueryShapeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<InventoryLotQueryShape>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type InventoryLotQueryShapeSort = {
  direction: SortDirection;
  field: InventoryLotQueryShapeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InventoryLotQueryShapeSortFields {
  AvailableQuantity = 'availableQuantity',
  BusinessPartnerCode = 'businessPartnerCode',
  BusinessPartnerName = 'businessPartnerName',
  Description = 'description',
  ExpirationDate = 'expirationDate',
  GrossWeight = 'grossWeight',
  LotCode = 'lotCode',
  LotId = 'lotId',
  OpenTaskCount = 'openTaskCount',
  OpenTaskQuantity = 'openTaskQuantity',
  ProductCode = 'productCode',
  ProductId = 'productId',
  ProductionDate = 'productionDate',
  Quantity = 'quantity',
  StockStatus = 'stockStatus',
  StockStatusTypeId = 'stockStatusTypeId',
  TotalWeightUom = 'totalWeightUOM',
  UnitOfMeasure = 'unitOfMeasure',
  UnitOfMeasureId = 'unitOfMeasureId',
  WarehouseId = 'warehouseId'
}

export type InventoryProductQueryShape = {
  __typename?: 'InventoryProductQueryShape';
  /** Available quantity */
  availableQuantity?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  businessPartnerCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  businessPartnerName?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Gross weight of entity */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Number of open tasks */
  openTaskCount?: Maybe<Scalars['Int']['output']>;
  /** Open task quantity */
  openTaskQuantity?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Product ID */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Quantity of product */
  quantity?: Maybe<Scalars['String']['output']>;
  /** I.e. Returns, Available, Lot Restricted etc. */
  stockStatus?: Maybe<Scalars['String']['output']>;
  /** Entity's stock status type ID (foreign key) */
  stockStatusTypeId?: Maybe<Scalars['ID']['output']>;
  /** Weight UOM, i.e KG */
  totalWeightUOM?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for entity */
  unitOfMeasure?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  unitOfMeasureId?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type InventoryProductQueryShapeFilter = {
  and?: InputMaybe<Array<InventoryProductQueryShapeFilter>>;
  availableQuantity?: InputMaybe<StringFieldComparison>;
  businessPartnerCode?: InputMaybe<StringFieldComparison>;
  businessPartnerName?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  openTaskCount?: InputMaybe<IntFieldComparison>;
  openTaskQuantity?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InventoryProductQueryShapeFilter>>;
  productCode?: InputMaybe<StringFieldComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<StringFieldComparison>;
  stockStatus?: InputMaybe<StringFieldComparison>;
  stockStatusTypeId?: InputMaybe<IdFilterComparison>;
  totalWeightUOM?: InputMaybe<StringFieldComparison>;
  unitOfMeasure?: InputMaybe<StringFieldComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type InventoryProductQueryShapeOffsetConnection = {
  __typename?: 'InventoryProductQueryShapeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<InventoryProductQueryShape>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type InventoryProductQueryShapeSort = {
  direction: SortDirection;
  field: InventoryProductQueryShapeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InventoryProductQueryShapeSortFields {
  AvailableQuantity = 'availableQuantity',
  BusinessPartnerCode = 'businessPartnerCode',
  BusinessPartnerName = 'businessPartnerName',
  Description = 'description',
  GrossWeight = 'grossWeight',
  OpenTaskCount = 'openTaskCount',
  OpenTaskQuantity = 'openTaskQuantity',
  ProductCode = 'productCode',
  ProductId = 'productId',
  Quantity = 'quantity',
  StockStatus = 'stockStatus',
  StockStatusTypeId = 'stockStatusTypeId',
  TotalWeightUom = 'totalWeightUOM',
  UnitOfMeasure = 'unitOfMeasure',
  UnitOfMeasureId = 'unitOfMeasureId',
  WarehouseId = 'warehouseId'
}

export type InventoryReconciliationGenerateDto = {
  holdCodes: Array<Scalars['String']['input']>;
  licensePlateCode: Scalars['String']['input'];
  stock: Array<InventoryReconciliationGenerateStockDto>;
};

export type InventoryReconciliationGenerateStockDto = {
  binCode: Scalars['String']['input'];
  lotCode?: InputMaybe<Scalars['String']['input']>;
  productCode: Scalars['String']['input'];
  quantity: Scalars['String']['input'];
  stockType?: InputMaybe<Scalars['String']['input']>;
  storageLocation: Scalars['String']['input'];
  unitOfMeasureCode: Scalars['String']['input'];
};

export type InventoryReconciliationMetaQueryModel = {
  __typename?: 'InventoryReconciliationMetaQueryModel';
  /** Inventory reconciliation accuracy */
  accuracy: Scalars['Float']['output'];
  /** Bin conflict found during inventory reconciliation */
  binConflicts: Scalars['Int']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Entity ID */
  id: Scalars['String']['output'];
  /** License Plate conflict found during inventory reconciliation */
  licensePlateConflicts: Scalars['Int']['output'];
  /** Lot conflict found during inventory reconciliation */
  lotConflicts: Scalars['Int']['output'];
  /** Product conflict found during inventory reconciliation */
  productConflicts: Scalars['Int']['output'];
  /** Quantity conflict found during inventory reconciliation */
  quantityConflicts: Scalars['Int']['output'];
  /** Inventory reconciliation status */
  status: Scalars['String']['output'];
  /** Stock status conflict found during inventory reconciliation */
  stockStatusConflicts: Scalars['Int']['output'];
  /** Storage Location conflict found during inventory reconciliation */
  storageLocationConflicts?: Maybe<Scalars['Int']['output']>;
  /** Inventory reconciliation total conflicts */
  totalConflicts: Scalars['Int']['output'];
  /** Inventory reconciliation total records */
  totalRecords: Scalars['Int']['output'];
  /** UOM conflict found during inventory reconciliation */
  uomConflicts: Scalars['Int']['output'];
  /** Update at date */
  updatedAt: Scalars['DateTime']['output'];
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['String']['output'];
};

export type InventoryReconciliationMetaQueryModelFilter = {
  accuracy?: InputMaybe<FloatFieldComparison>;
  and?: InputMaybe<Array<InventoryReconciliationMetaQueryModelFilter>>;
  binConflicts?: InputMaybe<IntFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  licensePlateConflicts?: InputMaybe<IntFieldComparison>;
  lotConflicts?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<InventoryReconciliationMetaQueryModelFilter>>;
  productConflicts?: InputMaybe<IntFieldComparison>;
  quantityConflicts?: InputMaybe<IntFieldComparison>;
  status?: InputMaybe<StringFieldComparison>;
  stockStatusConflicts?: InputMaybe<IntFieldComparison>;
  storageLocationConflicts?: InputMaybe<IntFieldComparison>;
  totalConflicts?: InputMaybe<IntFieldComparison>;
  totalRecords?: InputMaybe<IntFieldComparison>;
  uomConflicts?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<StringFieldComparison>;
};

export type InventoryReconciliationMetaQueryModelOffsetConnection = {
  __typename?: 'InventoryReconciliationMetaQueryModelOffsetConnection';
  /** Array of nodes. */
  nodes: Array<InventoryReconciliationMetaQueryModel>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type InventoryReconciliationMetaQueryModelSort = {
  direction: SortDirection;
  field: InventoryReconciliationMetaQueryModelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InventoryReconciliationMetaQueryModelSortFields {
  Accuracy = 'accuracy',
  BinConflicts = 'binConflicts',
  CreatedAt = 'createdAt',
  Id = 'id',
  LicensePlateConflicts = 'licensePlateConflicts',
  LotConflicts = 'lotConflicts',
  ProductConflicts = 'productConflicts',
  QuantityConflicts = 'quantityConflicts',
  Status = 'status',
  StockStatusConflicts = 'stockStatusConflicts',
  StorageLocationConflicts = 'storageLocationConflicts',
  TotalConflicts = 'totalConflicts',
  TotalRecords = 'totalRecords',
  UomConflicts = 'uomConflicts',
  UpdatedAt = 'updatedAt',
  WarehouseId = 'warehouseId'
}

export type InventoryReconciliationQueryModel = {
  __typename?: 'InventoryReconciliationQueryModel';
  /** Entity code */
  binCode?: Maybe<Scalars['String']['output']>;
  /** Bin conflict found during inventory reconciliation */
  binConflict?: Maybe<Scalars['Boolean']['output']>;
  /** Entity ID */
  binId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  erpBinCode?: Maybe<Scalars['String']['output']>;
  /** Array of Hu User Status Codes */
  erpHuHoldCodes?: Maybe<Array<Scalars['String']['output']>>;
  /** License Plate erp code */
  erpLicensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  erpLotCode?: Maybe<Scalars['String']['output']>;
  /** Product code */
  erpProductCode?: Maybe<Scalars['String']['output']>;
  /** Quantity of product */
  erpQuantity?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  erpStockStatusTypeId?: Maybe<Scalars['ID']['output']>;
  /** I.e. Returns, Available, Lot Restricted etc. */
  erpStockStatusTypeLabel?: Maybe<Scalars['String']['output']>;
  /** Stock status type entity belongs to */
  erpStockType?: Maybe<Scalars['String']['output']>;
  /** Entity's SAP storage location */
  erpStorageLocation?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  erpUnitOfMeasureCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity code */
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  /** License Plate conflict found during inventory reconciliation */
  licensePlateConflict?: Maybe<Scalars['Boolean']['output']>;
  /** Entity ID */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  lotCode?: Maybe<Scalars['String']['output']>;
  /** Lot conflict found during inventory reconciliation */
  lotConflict?: Maybe<Scalars['Boolean']['output']>;
  /** Entity ID */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  metaId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Product conflict found during inventory reconciliation */
  productConflict?: Maybe<Scalars['Boolean']['output']>;
  /** Entity ID */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Quantity of product */
  quantity?: Maybe<Scalars['String']['output']>;
  /** Quantity conflict found during inventory reconciliation */
  quantityConflict?: Maybe<Scalars['Boolean']['output']>;
  /** Stock status conflict found during inventory reconciliation */
  stockStatusConflict?: Maybe<Scalars['Boolean']['output']>;
  /** Entity code */
  stockStatusTypeCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  stockStatusTypeId?: Maybe<Scalars['ID']['output']>;
  /** I.e. Returns, Available, Lot Restricted etc. */
  stockStatusTypeLabel?: Maybe<Scalars['String']['output']>;
  /** Entity's SAP storage location */
  storageLocation?: Maybe<Scalars['String']['output']>;
  /** Storage Location conflict found during inventory reconciliation */
  storageLocationConflict?: Maybe<Scalars['Boolean']['output']>;
  /** Unit of measure for entity */
  unitOfMeasureCode?: Maybe<Scalars['String']['output']>;
  /** UOM conflict found during inventory reconciliation */
  unitOfMeasureConflict?: Maybe<Scalars['Boolean']['output']>;
  /** Entity ID */
  unitOfMeasureId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  warehouseId: Scalars['ID']['output'];
};

export type InventoryReconciliationQueryModelFilter = {
  and?: InputMaybe<Array<InventoryReconciliationQueryModelFilter>>;
  binCode?: InputMaybe<StringFieldComparison>;
  binConflict?: InputMaybe<BooleanFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  erpBinCode?: InputMaybe<StringFieldComparison>;
  erpLicensePlateCode?: InputMaybe<StringFieldComparison>;
  erpLotCode?: InputMaybe<StringFieldComparison>;
  erpProductCode?: InputMaybe<StringFieldComparison>;
  erpQuantity?: InputMaybe<StringFieldComparison>;
  erpStockStatusTypeId?: InputMaybe<IdFilterComparison>;
  erpStockStatusTypeLabel?: InputMaybe<StringFieldComparison>;
  erpStockType?: InputMaybe<StringFieldComparison>;
  erpStorageLocation?: InputMaybe<StringFieldComparison>;
  erpUnitOfMeasureCode?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  licensePlateCode?: InputMaybe<StringFieldComparison>;
  licensePlateConflict?: InputMaybe<BooleanFieldComparison>;
  licensePlateId?: InputMaybe<IdFilterComparison>;
  lotCode?: InputMaybe<StringFieldComparison>;
  lotConflict?: InputMaybe<BooleanFieldComparison>;
  lotId?: InputMaybe<IdFilterComparison>;
  metaId?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<InventoryReconciliationQueryModelFilter>>;
  productCode?: InputMaybe<StringFieldComparison>;
  productConflict?: InputMaybe<BooleanFieldComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<StringFieldComparison>;
  quantityConflict?: InputMaybe<BooleanFieldComparison>;
  stockStatusConflict?: InputMaybe<BooleanFieldComparison>;
  stockStatusTypeCode?: InputMaybe<StringFieldComparison>;
  stockStatusTypeId?: InputMaybe<IdFilterComparison>;
  stockStatusTypeLabel?: InputMaybe<StringFieldComparison>;
  storageLocation?: InputMaybe<StringFieldComparison>;
  storageLocationConflict?: InputMaybe<BooleanFieldComparison>;
  unitOfMeasureCode?: InputMaybe<StringFieldComparison>;
  unitOfMeasureConflict?: InputMaybe<BooleanFieldComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<InventoryReconciliationQueryModelWarehouseIdFilterComparison>;
};

export type InventoryReconciliationQueryModelOffsetConnection = {
  __typename?: 'InventoryReconciliationQueryModelOffsetConnection';
  /** Array of nodes. */
  nodes: Array<InventoryReconciliationQueryModel>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type InventoryReconciliationQueryModelSort = {
  direction: SortDirection;
  field: InventoryReconciliationQueryModelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InventoryReconciliationQueryModelSortFields {
  BinCode = 'binCode',
  BinConflict = 'binConflict',
  BinId = 'binId',
  ErpBinCode = 'erpBinCode',
  ErpLicensePlateCode = 'erpLicensePlateCode',
  ErpLotCode = 'erpLotCode',
  ErpProductCode = 'erpProductCode',
  ErpQuantity = 'erpQuantity',
  ErpStockStatusTypeId = 'erpStockStatusTypeId',
  ErpStockStatusTypeLabel = 'erpStockStatusTypeLabel',
  ErpStockType = 'erpStockType',
  ErpStorageLocation = 'erpStorageLocation',
  ErpUnitOfMeasureCode = 'erpUnitOfMeasureCode',
  Id = 'id',
  LicensePlateCode = 'licensePlateCode',
  LicensePlateConflict = 'licensePlateConflict',
  LicensePlateId = 'licensePlateId',
  LotCode = 'lotCode',
  LotConflict = 'lotConflict',
  LotId = 'lotId',
  MetaId = 'metaId',
  ProductCode = 'productCode',
  ProductConflict = 'productConflict',
  ProductId = 'productId',
  Quantity = 'quantity',
  QuantityConflict = 'quantityConflict',
  StockStatusConflict = 'stockStatusConflict',
  StockStatusTypeCode = 'stockStatusTypeCode',
  StockStatusTypeId = 'stockStatusTypeId',
  StockStatusTypeLabel = 'stockStatusTypeLabel',
  StorageLocation = 'storageLocation',
  StorageLocationConflict = 'storageLocationConflict',
  UnitOfMeasureCode = 'unitOfMeasureCode',
  UnitOfMeasureConflict = 'unitOfMeasureConflict',
  UnitOfMeasureId = 'unitOfMeasureId',
  WarehouseId = 'warehouseId'
}

export type InventoryReconciliationQueryModelWarehouseIdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Contract Id */
  contractId: Scalars['ID']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  status: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type InvoiceCreateInput = {
  /** Entity code */
  code: Scalars['String']['input'];
};

export type InvoiceCreateOneInput = {
  /** The record to create */
  invoice: InvoiceCreateInput;
};

export type InvoiceFilter = {
  and?: InputMaybe<Array<InvoiceFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  contractId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InvoiceFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type InvoiceItem = {
  __typename?: 'InvoiceItem';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description: Scalars['String']['output'];
  /** Invoice fee type */
  feeType: Scalars['String']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Invoice ID */
  invoiceId: Scalars['ID']['output'];
  /** Manual change status of invoice item */
  manualChangeStatus?: Maybe<Scalars['String']['output']>;
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Cost of invoice item in USD */
  value: Scalars['Float']['output'];
};

export type InvoiceItemCreateInput = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Description of entity */
  description: Scalars['String']['input'];
  /** Invoice fee type */
  feeType: InvoiceItemFeeType;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Cost of invoice item in USD */
  value: Scalars['Float']['input'];
};

export type InvoiceItemCreateOneInput = {
  /** The record to create */
  invoiceItem: InvoiceItemCreateInput;
};

export enum InvoiceItemFeeType {
  Accessorial = 'accessorial',
  Fixed = 'fixed',
  Handling = 'handling',
  Miscellaneous = 'miscellaneous',
  Storage = 'storage'
}

export type InvoiceItemFilter = {
  and?: InputMaybe<Array<InvoiceItemFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  feeType?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  invoiceId?: InputMaybe<IdFilterComparison>;
  manualChangeStatus?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<InvoiceItemFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  value?: InputMaybe<FloatFieldComparison>;
};

export type InvoiceItemOffsetConnection = {
  __typename?: 'InvoiceItemOffsetConnection';
  /** Array of nodes. */
  nodes: Array<InvoiceItem>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type InvoiceItemSort = {
  direction: SortDirection;
  field: InvoiceItemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InvoiceItemSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  FeeType = 'feeType',
  Id = 'id',
  InvoiceId = 'invoiceId',
  ManualChangeStatus = 'manualChangeStatus',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  Value = 'value'
}

export type InvoiceItemUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Invoice fee type */
  feeType?: InputMaybe<InvoiceItemFeeType>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Cost of invoice item in USD */
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type InvoiceItemUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: InvoiceItemUpdateInput;
};

export type InvoiceOffsetConnection = {
  __typename?: 'InvoiceOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Invoice>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type InvoiceSort = {
  direction: SortDirection;
  field: InvoiceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum InvoiceSortFields {
  Code = 'code',
  ContractId = 'contractId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export type InvoiceUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
};

export type InvoiceUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: InvoiceUpdateInput;
};

export type IssueStockTaskCreateOneInput = {
  /** The record to create */
  createOneIssueStockTaskDto: CreateOneIssueStockTaskDto;
};

export type JsonFilterComparison = {
  eq?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  iLike?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<Scalars['JSON']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  neq?: InputMaybe<Scalars['JSON']['input']>;
  notILike?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<Scalars['JSON']['input']>>;
  notLike?: InputMaybe<Scalars['JSON']['input']>;
};

export type JsonObjectFilterComparison = {
  eq?: InputMaybe<Scalars['JSONObject']['input']>;
  gt?: InputMaybe<Scalars['JSONObject']['input']>;
  gte?: InputMaybe<Scalars['JSONObject']['input']>;
  iLike?: InputMaybe<Scalars['JSONObject']['input']>;
  in?: InputMaybe<Array<Scalars['JSONObject']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSONObject']['input']>;
  lt?: InputMaybe<Scalars['JSONObject']['input']>;
  lte?: InputMaybe<Scalars['JSONObject']['input']>;
  neq?: InputMaybe<Scalars['JSONObject']['input']>;
  notILike?: InputMaybe<Scalars['JSONObject']['input']>;
  notIn?: InputMaybe<Array<Scalars['JSONObject']['input']>>;
  notLike?: InputMaybe<Scalars['JSONObject']['input']>;
};

export enum JobState {
  Disabled = 'disabled',
  Enabled = 'enabled',
  Paused = 'paused',
  StateUnspecified = 'stateUnspecified',
  UpdateFailed = 'updateFailed'
}

export type JobStateFilterComparison = {
  eq?: InputMaybe<JobState>;
  gt?: InputMaybe<JobState>;
  gte?: InputMaybe<JobState>;
  iLike?: InputMaybe<JobState>;
  in?: InputMaybe<Array<JobState>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<JobState>;
  lt?: InputMaybe<JobState>;
  lte?: InputMaybe<JobState>;
  neq?: InputMaybe<JobState>;
  notILike?: InputMaybe<JobState>;
  notIn?: InputMaybe<Array<JobState>>;
  notLike?: InputMaybe<JobState>;
};

export enum JobStatus {
  Completed = 'completed',
  Failed = 'failed',
  Preflight = 'preflight',
  Processing = 'processing',
  Queued = 'queued'
}

export type Layout = {
  __typename?: 'Layout';
  /** Column widths in FE table */
  columnSizes?: Maybe<Scalars['JSON']['output']>;
  /** Columns visible in FE table */
  columns?: Maybe<Scalars['JSON']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Filter for FE table */
  filter?: Maybe<Scalars['JSON']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label: Scalars['String']['output'];
  /** Page size for FE tables */
  pageSize: Scalars['Float']['output'];
  /** Default shared layout for FE tables */
  sharedDefault: Scalars['Boolean']['output'];
  /** Sorting for FE tables */
  sorting?: Maybe<Scalars['JSON']['output']>;
  /** Identifier for front end tables. */
  tableId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** User default for FE tables */
  userDefault: Scalars['Boolean']['output'];
  /** Entity's user ID (foreign key) */
  userId: Scalars['ID']['output'];
  /** User or shared layout for FE table layouts */
  variant: LayoutVariant;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type LayoutDeleteInputType = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type LayoutFilter = {
  and?: InputMaybe<Array<LayoutFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<LayoutFilter>>;
  tableId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  userId?: InputMaybe<IdFilterComparison>;
  variant?: InputMaybe<LayoutVariantFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type LayoutOffsetConnection = {
  __typename?: 'LayoutOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Layout>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type LayoutSharedCreateDto = {
  /** ApiDocs */
  columnSizes: Scalars['JSON']['input'];
  /** ApiDocs */
  columns: Scalars['JSON']['input'];
  /** ApiDocs */
  filter: Scalars['JSON']['input'];
  /** ApiDocs */
  label: Scalars['String']['input'];
  /** Identifier for front end tables. */
  pageSize: Scalars['Float']['input'];
  /** ApiDocs */
  sharedDefault: Scalars['Boolean']['input'];
  /** ApiDocs */
  sorting: Scalars['JSON']['input'];
  /** Identifier for front end tables. */
  tableId: Scalars['String']['input'];
  /** ApiDocs */
  userDefault: Scalars['Boolean']['input'];
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['String']['input'];
};

export type LayoutSharedCreateInput = {
  /** ApiDocs */
  input: LayoutSharedCreateDto;
};

export type LayoutSharedUpdateDto = {
  /** ApiDocs */
  columnSizes?: InputMaybe<Scalars['JSON']['input']>;
  /** ApiDocs */
  columns?: InputMaybe<Scalars['JSON']['input']>;
  /** ApiDocs */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** ApiDocs */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Identifier for front end tables. */
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  /** ApiDocs */
  sharedDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** ApiDocs */
  sorting?: InputMaybe<Scalars['JSON']['input']>;
};

export type LayoutSharedUpdateInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** ApiDocs */
  update: LayoutSharedUpdateDto;
};

export type LayoutSort = {
  direction: SortDirection;
  field: LayoutSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum LayoutSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  TableId = 'tableId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  UserId = 'userId',
  Variant = 'variant',
  WarehouseId = 'warehouseId'
}

export type LayoutUserCreateDto = {
  /** ApiDocs */
  columnSizes: Scalars['JSON']['input'];
  /** ApiDocs */
  columns: Scalars['JSON']['input'];
  /** ApiDocs */
  filter: Scalars['JSON']['input'];
  /** ApiDocs */
  label: Scalars['String']['input'];
  /** Identifier for front end tables. */
  pageSize: Scalars['Float']['input'];
  /** ApiDocs */
  sorting: Scalars['JSON']['input'];
  /** Identifier for front end tables. */
  tableId: Scalars['String']['input'];
  /** ApiDocs */
  userDefault: Scalars['Boolean']['input'];
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['String']['input'];
};

export type LayoutUserCreateInput = {
  /** ApiDocs */
  input: LayoutUserCreateDto;
};

export type LayoutUserSetDefaultDto = {
  /** ApiDocs */
  userDefault: Scalars['Boolean']['input'];
};

export type LayoutUserSetDefaultInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** ApiDocs */
  update: LayoutUserSetDefaultDto;
};

export type LayoutUserUpdateDto = {
  /** ApiDocs */
  columnSizes?: InputMaybe<Scalars['JSON']['input']>;
  /** ApiDocs */
  columns?: InputMaybe<Scalars['JSON']['input']>;
  /** ApiDocs */
  filter?: InputMaybe<Scalars['JSON']['input']>;
  /** ApiDocs */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Identifier for front end tables. */
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  /** ApiDocs */
  sorting?: InputMaybe<Scalars['JSON']['input']>;
};

export type LayoutUserUpdateInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** ApiDocs */
  update: LayoutUserUpdateDto;
};

export enum LayoutVariant {
  Shared = 'Shared',
  User = 'User'
}

export type LayoutVariantFilterComparison = {
  eq?: InputMaybe<LayoutVariant>;
  gt?: InputMaybe<LayoutVariant>;
  gte?: InputMaybe<LayoutVariant>;
  iLike?: InputMaybe<LayoutVariant>;
  in?: InputMaybe<Array<LayoutVariant>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<LayoutVariant>;
  lt?: InputMaybe<LayoutVariant>;
  lte?: InputMaybe<LayoutVariant>;
  neq?: InputMaybe<LayoutVariant>;
  notILike?: InputMaybe<LayoutVariant>;
  notIn?: InputMaybe<Array<LayoutVariant>>;
  notLike?: InputMaybe<LayoutVariant>;
};

export enum LedgerSyncStatus {
  Failed = 'failed',
  Success = 'success',
  Unknown = 'unknown'
}

export type LedgerSyncStatusFilterComparison = {
  eq?: InputMaybe<LedgerSyncStatus>;
  gt?: InputMaybe<LedgerSyncStatus>;
  gte?: InputMaybe<LedgerSyncStatus>;
  iLike?: InputMaybe<LedgerSyncStatus>;
  in?: InputMaybe<Array<LedgerSyncStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<LedgerSyncStatus>;
  lt?: InputMaybe<LedgerSyncStatus>;
  lte?: InputMaybe<LedgerSyncStatus>;
  neq?: InputMaybe<LedgerSyncStatus>;
  notILike?: InputMaybe<LedgerSyncStatus>;
  notIn?: InputMaybe<Array<LedgerSyncStatus>>;
  notLike?: InputMaybe<LedgerSyncStatus>;
};

export type LicensePlate = {
  __typename?: 'LicensePlate';
  /** Gross weight of entity */
  baseGrossWeight?: Maybe<Scalars['Float']['output']>;
  /** Height of license plate */
  baseHeight?: Maybe<Scalars['Float']['output']>;
  /** Height of license plate */
  baseLength?: Maybe<Scalars['Float']['output']>;
  baseNetWeight?: Maybe<Scalars['Float']['output']>;
  /** Height of license plate */
  baseWidth?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for dimensions of a license plate */
  dimensionUOMId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  dispositionId?: Maybe<Scalars['String']['output']>;
  /** License Plate erp code */
  erpCode?: Maybe<Scalars['String']['output']>;
  /** Timestamp representing the moment in time a license plate entered a non-refridgerated space */
  freshnessClock?: Maybe<Scalars['DateTime']['output']>;
  /** Gross weight of entity */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Height of license plate */
  height?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Timestamp of latest inventory count approval */
  lastCount?: Maybe<Scalars['DateTime']['output']>;
  /** Status determining if the license plate and its contents are successfully synced with the ERP ledger. */
  ledgerSyncStatus?: Maybe<LedgerSyncStatus>;
  /** Reason ledger sync status is not successful. */
  ledgerSyncStatusReason?: Maybe<Scalars['String']['output']>;
  /** Length of license plate */
  length?: Maybe<Scalars['Float']['output']>;
  /** Unit of measure ID */
  licensePlateContentsUoMId?: Maybe<Scalars['ID']['output']>;
  /** Material that the license plate is made of */
  licensePlateMaterial?: Maybe<Scalars['String']['output']>;
  /** Material type that the license plate is made of */
  licensePlateMaterialType?: Maybe<Scalars['String']['output']>;
  /** Timestamp of latest movement */
  lpLastMovement?: Maybe<Scalars['DateTime']['output']>;
  /** Net weight of entity */
  netWeight?: Maybe<Scalars['Float']['output']>;
  /** License Plate Parent ID */
  parentId?: Maybe<Scalars['ID']['output']>;
  /** Status of the quantity of a product within license plate */
  partial?: Maybe<LicensePlatePartial>;
  /** Status of license plate */
  processStatus?: Maybe<Scalars['String']['output']>;
  /** Entity's SAP storage location */
  storageLocation?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: Maybe<Scalars['String']['output']>;
  /** Width of license plate */
  width?: Maybe<Scalars['Float']['output']>;
  /** X coordinate location for the license plate */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location for the license plate */
  y?: Maybe<Scalars['Float']['output']>;
};

export type LicensePlateBinToBinTaskMovementCreateDto = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Autocomplete the task on creation */
  autocomplete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Entity ID */
  deliveryItemId?: InputMaybe<Scalars['ID']['input']>;
  /** Destination bin ID */
  destinationBinId: Scalars['ID']['input'];
  /** Entity ID */
  fulfillmentItemId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId: Scalars['ID']['input'];
};

export type LicensePlateBinToBinTaskMovementCreateInputDto = {
  /** The record to create */
  licensePlateBinToBinMovement: LicensePlateBinToBinTaskMovementCreateDto;
};

export type LicensePlateCreateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure for dimensions of a license plate */
  dimensionUOMId?: InputMaybe<Scalars['String']['input']>;
  /** License Plate erp code */
  erpCode?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp representing the moment in time a license plate entered a non-refridgerated space */
  freshnessClock?: InputMaybe<Scalars['DateTime']['input']>;
  /** Gross weight of entity */
  grossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Height of license plate */
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Status determining if the license plate and its contents are successfully synced with the ERP ledger. */
  ledgerSyncStatus?: InputMaybe<LedgerSyncStatus>;
  /** Reason ledger sync status is not successful. */
  ledgerSyncStatusReason?: InputMaybe<Scalars['String']['input']>;
  /** Length of license plate */
  length?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of measure ID */
  licensePlateContentsUoMId?: InputMaybe<Scalars['ID']['input']>;
  /** Timestamp of latest movement */
  lpLastMovement?: InputMaybe<Scalars['DateTime']['input']>;
  /** Net weight of entity */
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  /** License Plate Parent ID */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** Status of the quantity of a product within license plate */
  partial?: InputMaybe<Scalars['String']['input']>;
  /** Entity's SAP storage location */
  storageLocation?: InputMaybe<Scalars['String']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
  /** Weight UOM, i.e KG */
  weightUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Width of license plate */
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type LicensePlateCreateOneInput = {
  /** The record to create */
  licensePlate: LicensePlateCreateInput;
};

export type LicensePlateCreateStockFromProductionDto = {
  /** License Plate erp code */
  code: Scalars['String']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure for dimensions of a license plate */
  dimensionUOMId?: InputMaybe<Scalars['ID']['input']>;
  /** Gross weight of entity */
  grossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Height of license plate */
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Length of license plate */
  length?: InputMaybe<Scalars['Float']['input']>;
  /** Net weight of entity */
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: InputMaybe<Scalars['ID']['input']>;
  /** Width of license plate */
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type LicensePlateDetail = {
  __typename?: 'LicensePlateDetail';
  /**
   * Aisle where the bin is located
   * @deprecated Deprecated field name use aisleCode instead.
   */
  aisle?: Maybe<Scalars['String']['output']>;
  /** Aisle where the bin is located */
  aisleCode?: Maybe<Scalars['String']['output']>;
  /** Column where the bin is located. */
  aisleColumnCode?: Maybe<Scalars['String']['output']>;
  /** Column where the bin is located. */
  aisleColumnId?: Maybe<Scalars['ID']['output']>;
  /** Aisle where the bin is located */
  aisleId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  areaCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  binCode?: Maybe<Scalars['String']['output']>;
  /** Entity's bin ID (foreign key) */
  binId?: Maybe<Scalars['ID']['output']>;
  /** Bin type */
  binType?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  code: Scalars['String']['output'];
  /**
   * Column where the bin is located.
   * @deprecated Deprecated field name use aisleColumnCode instead.
   */
  column?: Maybe<Scalars['String']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  deliveryId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  deliveryItemId?: Maybe<Scalars['ID']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for dimensions of a license plate */
  dimensionUOMId?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  dispositionId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  erpSalesOrder?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  fulfillmentId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  fulfillmentItemId?: Maybe<Scalars['ID']['output']>;
  /** Indicator of open tasks */
  hasOpenTasks?: Maybe<Scalars['Boolean']['output']>;
  /** Height of license plate */
  height?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Active/Inactive bin status flag */
  inactive?: Maybe<LicensePlateStatusState>;
  /** Length of license plate */
  length?: Maybe<Scalars['Float']['output']>;
  /** Level where the bin is located. */
  level?: Maybe<Scalars['Int']['output']>;
  /** Material that the license plate is made of */
  licensePlateMaterial?: Maybe<Scalars['String']['output']>;
  /** Material type that the license plate is made of */
  licensePlateMaterialType?: Maybe<Scalars['String']['output']>;
  /** Array of license plate ids that are nested inside of the license plate */
  lpHierarchy?: Maybe<Scalars['JSON']['output']>;
  /** Number of open tasks */
  openTaskCount?: Maybe<Scalars['Int']['output']>;
  /** License Plate Parent ID */
  parentId?: Maybe<Scalars['ID']['output']>;
  /** Status of license plate */
  processStatus?: Maybe<Scalars['String']['output']>;
  /** Business partner code */
  soldToBusinessPartnerCode?: Maybe<Scalars['String']['output']>;
  /** Business partner name */
  soldToBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  /** Business partner name */
  soldToBusinessPartnerName?: Maybe<Scalars['String']['output']>;
  /** Entity's SAP storage location */
  storageLocation?: Maybe<Scalars['String']['output']>;
  /** Gross volume of entity */
  totalVolume?: Maybe<Scalars['Float']['output']>;
  /** Gross weight of entity */
  totalWeight?: Maybe<Scalars['Float']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse name */
  warehouseName?: Maybe<Scalars['String']['output']>;
  /** Width of license plate */
  width?: Maybe<Scalars['Float']['output']>;
  /** X coordinate location for the license plate */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location for the license plate */
  y?: Maybe<Scalars['Float']['output']>;
};

export type LicensePlateDetailFilter = {
  aisle?: InputMaybe<StringFieldComparison>;
  aisleCode?: InputMaybe<StringFieldComparison>;
  aisleColumnCode?: InputMaybe<StringFieldComparison>;
  aisleColumnId?: InputMaybe<IdFilterComparison>;
  aisleId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<LicensePlateDetailFilter>>;
  areaCode?: InputMaybe<StringFieldComparison>;
  binCode?: InputMaybe<StringFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  binType?: InputMaybe<StringFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  column?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deliveryId?: InputMaybe<IdFilterComparison>;
  deliveryItemId?: InputMaybe<IdFilterComparison>;
  description?: InputMaybe<StringFieldComparison>;
  dimensionUOMId?: InputMaybe<StringFieldComparison>;
  dispositionId?: InputMaybe<IdFilterComparison>;
  erpSalesOrder?: InputMaybe<StringFieldComparison>;
  fulfillmentId?: InputMaybe<IdFilterComparison>;
  fulfillmentItemId?: InputMaybe<IdFilterComparison>;
  hasOpenTasks?: InputMaybe<BooleanFieldComparison>;
  height?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inactive?: InputMaybe<LicensePlateStatusStateFilterComparison>;
  length?: InputMaybe<FloatFieldComparison>;
  level?: InputMaybe<IntFieldComparison>;
  licensePlateMaterial?: InputMaybe<StringFieldComparison>;
  licensePlateMaterialType?: InputMaybe<StringFieldComparison>;
  lpHierarchy?: InputMaybe<JsonFilterComparison>;
  openTaskCount?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<LicensePlateDetailFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  processStatus?: InputMaybe<StringFieldComparison>;
  soldToBusinessPartnerCode?: InputMaybe<StringFieldComparison>;
  soldToBusinessPartnerId?: InputMaybe<IdFilterComparison>;
  soldToBusinessPartnerName?: InputMaybe<StringFieldComparison>;
  storageLocation?: InputMaybe<StringFieldComparison>;
  totalVolume?: InputMaybe<FloatFieldComparison>;
  totalWeight?: InputMaybe<FloatFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  warehouseName?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<FloatFieldComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
};

export type LicensePlateDetailOffsetConnection = {
  __typename?: 'LicensePlateDetailOffsetConnection';
  /** Array of nodes. */
  nodes: Array<LicensePlateDetail>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type LicensePlateDetailQueryModel = {
  __typename?: 'LicensePlateDetailQueryModel';
  /** Entity code */
  areaCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  binCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  binId?: Maybe<Scalars['ID']['output']>;
  /** Level where the bin is located. */
  binLevel?: Maybe<Scalars['Int']['output']>;
  /** Bin type */
  binType?: Maybe<BinType>;
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Created at date */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for dimensions of a license plate */
  dimensionUOMCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  dimensionUOMId?: Maybe<Scalars['ID']['output']>;
  /** Disposition ID */
  dispositionId?: Maybe<Scalars['ID']['output']>;
  /** Reference code in ERP */
  erpCode?: Maybe<Scalars['String']['output']>;
  /** Erp sales order */
  erpSalesOrder?: Maybe<Scalars['String']['output']>;
  /** Timestamp representing the moment in time a license plate entered a non-refridgerated space */
  freshnessClock?: Maybe<Scalars['DateTime']['output']>;
  /** Gross weight of entity */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Number of open tasks */
  hasOpenTasks?: Maybe<Scalars['Boolean']['output']>;
  /** Height(Z) value of storage capacity */
  height?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Timestamp of latest inventory count approval */
  lastCount?: Maybe<Scalars['DateTime']['output']>;
  /** Status determining if the license plate and its contents are successfully synced with the ERP ledger. */
  ledgerSyncStatus?: Maybe<LedgerSyncStatus>;
  /** Reason ledger sync status is not successful. */
  ledgerSyncStatusReason?: Maybe<Scalars['String']['output']>;
  /** Length(X) value of storage capacity */
  length?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  licensePlateContentsUoMCode?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  licensePlateContentsUoMId?: Maybe<Scalars['ID']['output']>;
  /** Material that the license plate is made of */
  licensePlateMaterial?: Maybe<Scalars['String']['output']>;
  /** Material type that the license plate is made of */
  licensePlateMaterialType?: Maybe<Scalars['String']['output']>;
  /** Active/Inactive license plate status flag */
  licensePlateStatus?: Maybe<LicensePlateStatusState>;
  /** Net weight of entity */
  netWeight?: Maybe<Scalars['Float']['output']>;
  /** Number of open tasks */
  openTaskCount?: Maybe<Scalars['Float']['output']>;
  /** License Plate Parent ID */
  parentId?: Maybe<Scalars['ID']['output']>;
  /** Status of the quantity of a product within license plate */
  partial?: Maybe<LicensePlatePartial>;
  /** Status of license plate */
  processStatus?: Maybe<Scalars['String']['output']>;
  /** Entity's SAP storage location */
  storageLocation?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Height(Z) value of storage capacity */
  volume?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  warehouseName?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for weight capacity of storage */
  weightUOMCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  weightUOMId?: Maybe<Scalars['ID']['output']>;
  /** Width(Y) value of storage capacity */
  width?: Maybe<Scalars['Float']['output']>;
  /** X coordinate location for the license plate */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location for the license plate */
  y?: Maybe<Scalars['Float']['output']>;
};

export type LicensePlateDetailQueryModelFilter = {
  and?: InputMaybe<Array<LicensePlateDetailQueryModelFilter>>;
  areaCode?: InputMaybe<StringFieldComparison>;
  binCode?: InputMaybe<StringFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  binLevel?: InputMaybe<IntFieldComparison>;
  binType?: InputMaybe<BinTypeFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  dimensionUOMCode?: InputMaybe<StringFieldComparison>;
  dimensionUOMId?: InputMaybe<IdFilterComparison>;
  dispositionId?: InputMaybe<IdFilterComparison>;
  erpCode?: InputMaybe<StringFieldComparison>;
  erpSalesOrder?: InputMaybe<StringFieldComparison>;
  freshnessClock?: InputMaybe<DateFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  hasOpenTasks?: InputMaybe<BooleanFieldComparison>;
  height?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastCount?: InputMaybe<DateFieldComparison>;
  ledgerSyncStatus?: InputMaybe<LedgerSyncStatusFilterComparison>;
  ledgerSyncStatusReason?: InputMaybe<StringFieldComparison>;
  length?: InputMaybe<FloatFieldComparison>;
  licensePlateContentsUoMCode?: InputMaybe<StringFieldComparison>;
  licensePlateContentsUoMId?: InputMaybe<IdFilterComparison>;
  licensePlateMaterial?: InputMaybe<StringFieldComparison>;
  licensePlateMaterialType?: InputMaybe<StringFieldComparison>;
  licensePlateStatus?: InputMaybe<LicensePlateStatusStateFilterComparison>;
  netWeight?: InputMaybe<FloatFieldComparison>;
  openTaskCount?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<LicensePlateDetailQueryModelFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  partial?: InputMaybe<LicensePlatePartialFilterComparison>;
  processStatus?: InputMaybe<StringFieldComparison>;
  storageLocation?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  volume?: InputMaybe<FloatFieldComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  warehouseName?: InputMaybe<StringFieldComparison>;
  weightUOMCode?: InputMaybe<StringFieldComparison>;
  weightUOMId?: InputMaybe<IdFilterComparison>;
  width?: InputMaybe<FloatFieldComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
};

export type LicensePlateDetailQueryModelOffsetConnection = {
  __typename?: 'LicensePlateDetailQueryModelOffsetConnection';
  /** Array of nodes. */
  nodes: Array<LicensePlateDetailQueryModel>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type LicensePlateDetailQueryModelSort = {
  direction: SortDirection;
  field: LicensePlateDetailQueryModelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum LicensePlateDetailQueryModelSortFields {
  AreaCode = 'areaCode',
  BinCode = 'binCode',
  BinId = 'binId',
  BinLevel = 'binLevel',
  BinType = 'binType',
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  DimensionUomCode = 'dimensionUOMCode',
  DimensionUomId = 'dimensionUOMId',
  DispositionId = 'dispositionId',
  ErpCode = 'erpCode',
  ErpSalesOrder = 'erpSalesOrder',
  FreshnessClock = 'freshnessClock',
  GrossWeight = 'grossWeight',
  HasOpenTasks = 'hasOpenTasks',
  Height = 'height',
  Id = 'id',
  LastCount = 'lastCount',
  LedgerSyncStatus = 'ledgerSyncStatus',
  LedgerSyncStatusReason = 'ledgerSyncStatusReason',
  Length = 'length',
  LicensePlateContentsUoMCode = 'licensePlateContentsUoMCode',
  LicensePlateContentsUoMId = 'licensePlateContentsUoMId',
  LicensePlateMaterial = 'licensePlateMaterial',
  LicensePlateMaterialType = 'licensePlateMaterialType',
  LicensePlateStatus = 'licensePlateStatus',
  NetWeight = 'netWeight',
  OpenTaskCount = 'openTaskCount',
  ParentId = 'parentId',
  Partial = 'partial',
  ProcessStatus = 'processStatus',
  StorageLocation = 'storageLocation',
  UpdatedAt = 'updatedAt',
  Volume = 'volume',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId',
  WarehouseName = 'warehouseName',
  WeightUomCode = 'weightUOMCode',
  WeightUomId = 'weightUOMId',
  Width = 'width',
  X = 'x',
  Y = 'y'
}

export type LicensePlateDetailSort = {
  direction: SortDirection;
  field: LicensePlateDetailSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum LicensePlateDetailSortFields {
  Aisle = 'aisle',
  AisleCode = 'aisleCode',
  AisleColumnCode = 'aisleColumnCode',
  AisleColumnId = 'aisleColumnId',
  AisleId = 'aisleId',
  AreaCode = 'areaCode',
  BinCode = 'binCode',
  BinId = 'binId',
  BinType = 'binType',
  Code = 'code',
  Column = 'column',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DeliveryId = 'deliveryId',
  DeliveryItemId = 'deliveryItemId',
  Description = 'description',
  DimensionUomId = 'dimensionUOMId',
  DispositionId = 'dispositionId',
  ErpSalesOrder = 'erpSalesOrder',
  FulfillmentId = 'fulfillmentId',
  FulfillmentItemId = 'fulfillmentItemId',
  HasOpenTasks = 'hasOpenTasks',
  Height = 'height',
  Id = 'id',
  Inactive = 'inactive',
  Length = 'length',
  Level = 'level',
  LicensePlateMaterial = 'licensePlateMaterial',
  LicensePlateMaterialType = 'licensePlateMaterialType',
  LpHierarchy = 'lpHierarchy',
  OpenTaskCount = 'openTaskCount',
  ParentId = 'parentId',
  ProcessStatus = 'processStatus',
  SoldToBusinessPartnerCode = 'soldToBusinessPartnerCode',
  SoldToBusinessPartnerId = 'soldToBusinessPartnerId',
  SoldToBusinessPartnerName = 'soldToBusinessPartnerName',
  StorageLocation = 'storageLocation',
  TotalVolume = 'totalVolume',
  TotalWeight = 'totalWeight',
  UpdatedAt = 'updatedAt',
  WarehouseId = 'warehouseId',
  WarehouseName = 'warehouseName',
  Width = 'width',
  X = 'x',
  Y = 'y'
}

export type LicensePlateFilter = {
  and?: InputMaybe<Array<LicensePlateFilter>>;
  baseGrossWeight?: InputMaybe<FloatFieldComparison>;
  baseHeight?: InputMaybe<FloatFieldComparison>;
  baseLength?: InputMaybe<FloatFieldComparison>;
  baseNetWeight?: InputMaybe<FloatFieldComparison>;
  baseWidth?: InputMaybe<FloatFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  dimensionUOMId?: InputMaybe<IdFilterComparison>;
  dispositionId?: InputMaybe<StringFieldComparison>;
  erpCode?: InputMaybe<StringFieldComparison>;
  freshnessClock?: InputMaybe<DateFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  height?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastCount?: InputMaybe<DateFieldComparison>;
  ledgerSyncStatus?: InputMaybe<LedgerSyncStatusFilterComparison>;
  ledgerSyncStatusReason?: InputMaybe<StringFieldComparison>;
  length?: InputMaybe<FloatFieldComparison>;
  licensePlateContentsUoMId?: InputMaybe<IdFilterComparison>;
  licensePlateMaterial?: InputMaybe<StringFieldComparison>;
  licensePlateMaterialType?: InputMaybe<StringFieldComparison>;
  lpLastMovement?: InputMaybe<DateFieldComparison>;
  netWeight?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<LicensePlateFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  partial?: InputMaybe<LicensePlatePartialFilterComparison>;
  processStatus?: InputMaybe<StringFieldComparison>;
  storageLocation?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  weightUOMId?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<FloatFieldComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
};

export type LicensePlateForFulfillmentItemDto = {
  /** Entity ID */
  licensePlateId: Scalars['ID']['input'];
};

export type LicensePlateForPickTask = {
  __typename?: 'LicensePlateForPickTask';
  availableQuantity?: Maybe<Scalars['Float']['output']>;
  binCode?: Maybe<Scalars['String']['output']>;
  binId?: Maybe<Scalars['ID']['output']>;
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  lotCode?: Maybe<Scalars['String']['output']>;
  lotExpirationDate?: Maybe<Scalars['DateTime']['output']>;
  lotId?: Maybe<Scalars['ID']['output']>;
  lotProductionDate?: Maybe<Scalars['DateTime']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type LicensePlateMovementCreateInputDto = {
  /** The record to create */
  licensePlateMovement: LicensePlateTaskMovementCreateDto;
};

export type LicensePlateMovementProductInput = {
  /** Entity's bin ID (foreign key) */
  binId: Scalars['ID']['input'];
  /** Unit of measure ID */
  createdInUnitOfMeasureId: Scalars['ID']['input'];
  /** Delivery item ID (foreign key) */
  deliveryItemId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's lot ID (foreign key) */
  lotId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Quantity of product */
  quantity: Scalars['String']['input'];
  /** Entity's stock status type ID (foreign key) */
  stockStatusId: Scalars['ID']['input'];
};

export type LicensePlateOffsetConnection = {
  __typename?: 'LicensePlateOffsetConnection';
  /** Array of nodes. */
  nodes: Array<LicensePlate>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export enum LicensePlatePartial {
  Full = 'full',
  Partial = 'partial',
  Unknown = 'unknown'
}

export type LicensePlatePartialFilterComparison = {
  eq?: InputMaybe<LicensePlatePartial>;
  gt?: InputMaybe<LicensePlatePartial>;
  gte?: InputMaybe<LicensePlatePartial>;
  iLike?: InputMaybe<LicensePlatePartial>;
  in?: InputMaybe<Array<LicensePlatePartial>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<LicensePlatePartial>;
  lt?: InputMaybe<LicensePlatePartial>;
  lte?: InputMaybe<LicensePlatePartial>;
  neq?: InputMaybe<LicensePlatePartial>;
  notILike?: InputMaybe<LicensePlatePartial>;
  notIn?: InputMaybe<Array<LicensePlatePartial>>;
  notLike?: InputMaybe<LicensePlatePartial>;
};

/** License Plate Search results */
export type LicensePlateSearchResults = {
  __typename?: 'LicensePlateSearchResults';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['String']['output']>;
  status?: Maybe<LicensePlateStatusState>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type LicensePlateSort = {
  direction: SortDirection;
  field: LicensePlateSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum LicensePlateSortFields {
  BaseGrossWeight = 'baseGrossWeight',
  BaseHeight = 'baseHeight',
  BaseLength = 'baseLength',
  BaseNetWeight = 'baseNetWeight',
  BaseWidth = 'baseWidth',
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  DimensionUomId = 'dimensionUOMId',
  DispositionId = 'dispositionId',
  ErpCode = 'erpCode',
  FreshnessClock = 'freshnessClock',
  GrossWeight = 'grossWeight',
  Height = 'height',
  Id = 'id',
  LastCount = 'lastCount',
  LedgerSyncStatus = 'ledgerSyncStatus',
  LedgerSyncStatusReason = 'ledgerSyncStatusReason',
  Length = 'length',
  LicensePlateContentsUoMId = 'licensePlateContentsUoMId',
  LicensePlateMaterial = 'licensePlateMaterial',
  LicensePlateMaterialType = 'licensePlateMaterialType',
  LpLastMovement = 'lpLastMovement',
  NetWeight = 'netWeight',
  ParentId = 'parentId',
  Partial = 'partial',
  ProcessStatus = 'processStatus',
  StorageLocation = 'storageLocation',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WeightUomId = 'weightUOMId',
  Width = 'width',
  X = 'x',
  Y = 'y'
}

export type LicensePlateStatus = {
  __typename?: 'LicensePlateStatus';
  /** Entity code */
  code: LicensePlateStatusCode;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export enum LicensePlateStatusCode {
  LpStatusInactive = 'LP_STATUS_INACTIVE'
}

export type LicensePlateStatusCodeFilterComparison = {
  eq?: InputMaybe<LicensePlateStatusCode>;
  gt?: InputMaybe<LicensePlateStatusCode>;
  gte?: InputMaybe<LicensePlateStatusCode>;
  iLike?: InputMaybe<LicensePlateStatusCode>;
  in?: InputMaybe<Array<LicensePlateStatusCode>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<LicensePlateStatusCode>;
  lt?: InputMaybe<LicensePlateStatusCode>;
  lte?: InputMaybe<LicensePlateStatusCode>;
  neq?: InputMaybe<LicensePlateStatusCode>;
  notILike?: InputMaybe<LicensePlateStatusCode>;
  notIn?: InputMaybe<Array<LicensePlateStatusCode>>;
  notLike?: InputMaybe<LicensePlateStatusCode>;
};

export type LicensePlateStatusFilter = {
  and?: InputMaybe<Array<LicensePlateStatusFilter>>;
  code?: InputMaybe<LicensePlateStatusCodeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<LicensePlateStatusFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type LicensePlateStatusInput = {
  /** Entity code */
  licensePlateStatusCode: LicensePlateStatusCode;
  /** License Plate status detail's active flag */
  on: Scalars['Boolean']['input'];
};

export type LicensePlateStatusMapping = {
  __typename?: 'LicensePlateStatusMapping';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity ID */
  licensePlateId: Scalars['ID']['output'];
  /** Entity ID */
  licensePlateStatusId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type LicensePlateStatusMappingFilter = {
  and?: InputMaybe<Array<LicensePlateStatusMappingFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  licensePlateId?: InputMaybe<IdFilterComparison>;
  licensePlateStatusId?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<LicensePlateStatusMappingFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type LicensePlateStatusMappingInput = {
  /** License Plate Ids for mapping assignment */
  licensePlateIds: Array<Scalars['ID']['input']>;
  /** License Plate Status Input */
  licensePlateStatus: Array<LicensePlateStatusInput>;
};

export type LicensePlateStatusMappingInputDto = {
  /** License Plate Status mappings */
  licensePlateStatusMappings: LicensePlateStatusMappingInput;
};

export type LicensePlateStatusMappingOffsetConnection = {
  __typename?: 'LicensePlateStatusMappingOffsetConnection';
  /** Array of nodes. */
  nodes: Array<LicensePlateStatusMapping>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type LicensePlateStatusMappingSort = {
  direction: SortDirection;
  field: LicensePlateStatusMappingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum LicensePlateStatusMappingSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  LicensePlateId = 'licensePlateId',
  LicensePlateStatusId = 'licensePlateStatusId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type LicensePlateStatusOffsetConnection = {
  __typename?: 'LicensePlateStatusOffsetConnection';
  /** Array of nodes. */
  nodes: Array<LicensePlateStatus>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type LicensePlateStatusSort = {
  direction: SortDirection;
  field: LicensePlateStatusSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum LicensePlateStatusSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Label = 'label',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export enum LicensePlateStatusState {
  Active = 'active',
  Inactive = 'inactive'
}

export type LicensePlateStatusStateFilterComparison = {
  eq?: InputMaybe<LicensePlateStatusState>;
  gt?: InputMaybe<LicensePlateStatusState>;
  gte?: InputMaybe<LicensePlateStatusState>;
  iLike?: InputMaybe<LicensePlateStatusState>;
  in?: InputMaybe<Array<LicensePlateStatusState>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<LicensePlateStatusState>;
  lt?: InputMaybe<LicensePlateStatusState>;
  lte?: InputMaybe<LicensePlateStatusState>;
  neq?: InputMaybe<LicensePlateStatusState>;
  notILike?: InputMaybe<LicensePlateStatusState>;
  notIn?: InputMaybe<Array<LicensePlateStatusState>>;
  notLike?: InputMaybe<LicensePlateStatusState>;
};

export type LicensePlateSyncJobUpdateOneDto = {
  /** Handling unit */
  handlingUnit?: InputMaybe<Scalars['String']['input']>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** SAP Storage bin code */
  sapStorageBinCode?: InputMaybe<Scalars['String']['input']>;
  /** SAP Storage Type Code */
  sapStorageTypeCode?: InputMaybe<Scalars['String']['input']>;
  /** Source bin ID */
  sourceBinId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type LicensePlateTaskCreateManyLinkedDto = {
  /** Entity ID */
  destinationBinId: Scalars['ID']['input'];
  /** Entity ID */
  internalStockOrderItemId: Scalars['ID']['input'];
  /** Entity ID */
  licensePlateId: Scalars['ID']['input'];
  /** Entity ID */
  sourceBinId: Scalars['ID']['input'];
  status?: InputMaybe<TaskStatus>;
  /** Entity ID */
  taskTypeCode: TaskTypeCodes;
  /** Entity ID */
  warehouseId: Scalars['ID']['input'];
};

export type LicensePlateTaskMovementCreateDto = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Autocomplete the task on creation */
  autocomplete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Destination bin ID */
  destinationBinId: Scalars['ID']['input'];
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** License Plate Parent ID */
  licensePlateParentId?: InputMaybe<Scalars['ID']['input']>;
  /** ApiDocs */
  products: Array<LicensePlateMovementProductInput>;
};

export type LicensePlateTaskValidationDto = {
  licensePlateId: Scalars['ID']['input'];
};

export type LicensePlateUnpackLicensePlateCompleteDto = {
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['input'];
};

export type LicensePlateUnpackLicensePlateDto = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Autocomplete the task on creation */
  autocomplete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId: Scalars['ID']['input'];
};

export type LicensePlateUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure for dimensions of a license plate */
  dimensionUOMId?: InputMaybe<Scalars['String']['input']>;
  /** License Plate erp code */
  erpCode?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp representing the moment in time a license plate entered a non-refridgerated space */
  freshnessClock?: InputMaybe<Scalars['DateTime']['input']>;
  /** Gross weight of entity */
  grossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Height of license plate */
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Status determining if the license plate and its contents are successfully synced with the ERP ledger. */
  ledgerSyncStatus?: InputMaybe<LedgerSyncStatus>;
  /** Reason ledger sync status is not successful. */
  ledgerSyncStatusReason?: InputMaybe<Scalars['String']['input']>;
  /** Length of license plate */
  length?: InputMaybe<Scalars['Float']['input']>;
  /** Unit of measure ID */
  licensePlateContentsUoMId?: InputMaybe<Scalars['ID']['input']>;
  /** Timestamp of latest movement */
  lpLastMovement?: InputMaybe<Scalars['DateTime']['input']>;
  /** Net weight of entity */
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  /** License Plate Parent ID */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** Status of the quantity of a product within license plate */
  partial?: InputMaybe<Scalars['String']['input']>;
  /** Entity's SAP storage location */
  storageLocation?: InputMaybe<Scalars['String']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Width of license plate */
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type LicensePlateUpdateManySlocDto = {
  licensePlateCode: Scalars['String']['input'];
  sloc: Scalars['String']['input'];
};

export type LicensePlateUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: LicensePlateUpdateInput;
};

export type LoadTaskCompleteInput = {
  /** Unit of measure ID */
  completedInUnitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's task ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Quantity of product */
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** Source bin ID (foreign key) */
  sourceBinId: Scalars['ID']['input'];
  /** Source lot ID (foreign key) */
  sourceLotId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['input'];
};

export enum LogType {
  AdminTask = 'ADMIN_TASK',
  AdminTaskType = 'ADMIN_TASK_TYPE',
  AgentConfiguration = 'AGENT_CONFIGURATION',
  Aisle = 'AISLE',
  AisleColumn = 'AISLE_COLUMN',
  Analytics = 'ANALYTICS',
  Anchor = 'ANCHOR',
  Area = 'AREA',
  Asn = 'ASN',
  Auth = 'AUTH',
  Authorization = 'AUTHORIZATION',
  Barcode = 'BARCODE',
  BarcodeMapping = 'BARCODE_MAPPING',
  BarcodeParse = 'BARCODE_PARSE',
  BarcodeTemplate = 'BARCODE_TEMPLATE',
  BarcodeTemplateMapping = 'BARCODE_TEMPLATE_MAPPING',
  Bin = 'BIN',
  BinSize = 'BIN_SIZE',
  BinStatus = 'BIN_STATUS',
  BinStatusMapping = 'BIN_STATUS_MAPPING',
  BusinessPartner = 'BUSINESS_PARTNER',
  BusinessPartnerCompiance = 'BUSINESS_PARTNER_COMPIANCE',
  Company = 'COMPANY',
  ContactInfo = 'CONTACT_INFO',
  Contract = 'CONTRACT',
  ContractRule = 'CONTRACT_RULE',
  CountArtifact = 'COUNT_ARTIFACT',
  DeadLetter = 'DEAD_LETTER',
  DeadLetterEvent = 'DEAD_LETTER_EVENT',
  Delivery = 'DELIVERY',
  DeliveryItem = 'DELIVERY_ITEM',
  DeliveryJob = 'DELIVERY_JOB',
  DisplayPreferences = 'DISPLAY_PREFERENCES',
  Disposition = 'DISPOSITION',
  Door = 'DOOR',
  EffectiveContractMapping = 'EFFECTIVE_CONTRACT_MAPPING',
  Equipment = 'EQUIPMENT',
  EventService = 'EVENT_SERVICE',
  EwmDelivery = 'EWM_DELIVERY',
  EwmDeliveryHuMapping = 'EWM_DELIVERY_HU_MAPPING',
  EwmFieldMapping = 'EWM_FIELD_MAPPING',
  EwmHu = 'EWM_HU',
  EwmWhsTask = 'EWM_WHS_TASK',
  Floorplan = 'FLOORPLAN',
  Fulfillment = 'FULFILLMENT',
  FulfillmentBlock = 'FULFILLMENT_BLOCK',
  FulfillmentItem = 'FULFILLMENT_ITEM',
  FulfillmentItemInternalStockOrderRecord = 'FULFILLMENT_ITEM_INTERNAL_STOCK_ORDER_RECORD',
  GcpStorage = 'GCP_STORAGE',
  General = 'GENERAL',
  HistoryRecord = 'HISTORY_RECORD',
  InboundDeliveryEvent = 'INBOUND_DELIVERY_EVENT',
  IntegrationLog = 'INTEGRATION_LOG',
  InternalStockOrder = 'INTERNAL_STOCK_ORDER',
  InternalStockOrderItem = 'INTERNAL_STOCK_ORDER_ITEM',
  InternalStockOrderItemFufillmentItemMapping = 'INTERNAL_STOCK_ORDER_ITEM_FUFILLMENT_ITEM_MAPPING',
  InternalStockOrderType = 'INTERNAL_STOCK_ORDER_TYPE',
  InventoryBase = 'INVENTORY_BASE',
  InventoryReconciliation = 'INVENTORY_RECONCILIATION',
  Invoice = 'INVOICE',
  InvoiceItem = 'INVOICE_ITEM',
  Layout = 'LAYOUT',
  LicensePlate = 'LICENSE_PLATE',
  LicensePlateStatus = 'LICENSE_PLATE_STATUS',
  LicensePlateStatusMapping = 'LICENSE_PLATE_STATUS_MAPPING',
  Lot = 'LOT',
  Map = 'MAP',
  Node = 'NODE',
  NonCompliantBarcode = 'NON_COMPLIANT_BARCODE',
  Organization = 'ORGANIZATION',
  Permission = 'PERMISSION',
  PermissionDimension = 'PERMISSION_DIMENSION',
  PickToDock = 'PICK_TO_DOCK',
  Postgres = 'POSTGRES',
  Product = 'PRODUCT',
  ProductMovement = 'PRODUCT_MOVEMENT',
  PtoStockStatusType = 'PTO_STOCK_STATUS_TYPE',
  Redis = 'REDIS',
  Redpoint = 'REDPOINT',
  Replenishment = 'REPLENISHMENT',
  Role = 'ROLE',
  RolePermissionMapping = 'ROLE_PERMISSION_MAPPING',
  SapAuth = 'SAP_AUTH',
  SapBatch = 'SAP_BATCH',
  SapBusinessPartner = 'SAP_BUSINESS_PARTNER',
  SapConnector = 'SAP_CONNECTOR',
  SapDataIntegration = 'SAP_DATA_INTEGRATION',
  SapDelivery = 'SAP_DELIVERY',
  SapDeliveryItem = 'SAP_DELIVERY_ITEM',
  SapHuStatus = 'SAP_HU_STATUS',
  SapHuUserStatus = 'SAP_HU_USER_STATUS',
  SapMaterialMovement = 'SAP_MATERIAL_MOVEMENT',
  SapOdataClient = 'SAP_ODATA_CLIENT',
  SapOutboundDelivery = 'SAP_OUTBOUND_DELIVERY',
  SapOutboundDeliveryItem = 'SAP_OUTBOUND_DELIVERY_ITEM',
  SapPhysicalInventory = 'SAP_PHYSICAL_INVENTORY',
  SapPostgres = 'SAP_POSTGRES',
  SapSalesOrder = 'SAP_SALES_ORDER',
  SapSalesOrderItem = 'SAP_SALES_ORDER_ITEM',
  SapStockStatusType = 'SAP_STOCK_STATUS_TYPE',
  SapStorageLocationPlant = 'SAP_STORAGE_LOCATION_PLANT',
  SapUnitOfMeasure = 'SAP_UNIT_OF_MEASURE',
  ScheduledJob = 'SCHEDULED_JOB',
  ScheduledJobType = 'SCHEDULED_JOB_TYPE',
  Scheduler = 'SCHEDULER',
  SearchQueue = 'SEARCH_QUEUE',
  SlottingDataframe = 'SLOTTING_DATAFRAME',
  SlottingDataset = 'SLOTTING_DATASET',
  SlottingExclusion = 'SLOTTING_EXCLUSION',
  SlottingRuleset = 'SLOTTING_RULESET',
  SlottingSetting = 'SLOTTING_SETTING',
  SlottingSettingItem = 'SLOTTING_SETTING_ITEM',
  StandardUnitOfMeasure = 'STANDARD_UNIT_OF_MEASURE',
  StockStatusMapping = 'STOCK_STATUS_MAPPING',
  StockStatusType = 'STOCK_STATUS_TYPE',
  StoredImage = 'STORED_IMAGE',
  SystemConnection = 'SYSTEM_CONNECTION',
  Task = 'TASK',
  TaskEvent = 'TASK_EVENT',
  TaskFromFulfillment = 'TASK_FROM_FULFILLMENT',
  TaskGroup = 'TASK_GROUP',
  TaskGroupingJob = 'TASK_GROUPING_JOB',
  TaskLoad = 'TASK_LOAD',
  TaskPickToStaging = 'TASK_PICK_TO_STAGING',
  TaskType = 'TASK_TYPE',
  TaskTypeBinStatusMapping = 'TASK_TYPE_BIN_STATUS_MAPPING',
  TaskTypeStockStatusMapping = 'TASK_TYPE_STOCK_STATUS_MAPPING',
  Team = 'TEAM',
  TestLog = 'TEST_LOG',
  Unhandled = 'UNHANDLED',
  UnitOfMeasure = 'UNIT_OF_MEASURE',
  UnitOfMeasureGlossary = 'UNIT_OF_MEASURE_GLOSSARY',
  UploadError = 'UPLOAD_ERROR',
  UserAccount = 'USER_ACCOUNT',
  UserGroup = 'USER_GROUP',
  UserGroupMapping = 'USER_GROUP_MAPPING',
  UserGroupRoleMapping = 'USER_GROUP_ROLE_MAPPING',
  UserTeamMapping = 'USER_TEAM_MAPPING',
  UserWarehouseDefault = 'USER_WAREHOUSE_DEFAULT',
  Warehouse = 'WAREHOUSE',
  WarehouseConfiguration = 'WAREHOUSE_CONFIGURATION',
  WarehouseOp = 'WAREHOUSE_OP',
  WarehouseOpFieldMapping = 'WAREHOUSE_OP_FIELD_MAPPING',
  WarehouseOpJob = 'WAREHOUSE_OP_JOB',
  WarehousePath = 'WAREHOUSE_PATH',
  WarehousePreferredUnitOfMeasure = 'WAREHOUSE_PREFERRED_UNIT_OF_MEASURE',
  WarehouseUserGroupMapping = 'WAREHOUSE_USER_GROUP_MAPPING',
  Zone = 'ZONE',
  ZoneBehaviorMapping = 'ZONE_BEHAVIOR_MAPPING',
  ZoneRule = 'ZONE_RULE',
  ZoneRuleMapping = 'ZONE_RULE_MAPPING'
}

/** Lot model */
export type Lot = {
  __typename?: 'Lot';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** When data was created in ERP */
  erpCreatedOn?: Maybe<Scalars['DateTime']['output']>;
  /** Erp sync status */
  erpSynced: Scalars['Boolean']['output'];
  /** When data was last updated in ERP */
  erpUpdatedOn?: Maybe<Scalars['DateTime']['output']>;
  /** Lot expiration date */
  expiration?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['output'];
  /** Product number in erp */
  productNumber?: Maybe<Scalars['String']['output']>;
  /** Lot production date */
  productionDate?: Maybe<Scalars['DateTime']['output']>;
  /** Lot Restricted */
  restricted: Scalars['Boolean']['output'];
  /** Lot supplier number */
  supplierLotNumber?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Boolean indicating if lot product is in restricted stock status */
  warehouseStatus?: Maybe<Scalars['Boolean']['output']>;
};

export type LotCreateInput = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** When data was created in ERP */
  erpCreatedOn?: InputMaybe<Scalars['DateTime']['input']>;
  /** Erp sync status */
  erpSynced?: InputMaybe<Scalars['Boolean']['input']>;
  /** When data was last updated in ERP */
  erpUpdatedOn?: InputMaybe<Scalars['DateTime']['input']>;
  /** Lot expiration date */
  expiration?: InputMaybe<Scalars['DateTime']['input']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Product number in erp */
  productNumber?: InputMaybe<Scalars['String']['input']>;
  /** Lot production date */
  productionDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Lot Restricted */
  restricted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Lot supplier number */
  supplierLotNumber?: InputMaybe<Scalars['String']['input']>;
  /** Boolean indicating if lot product is in restricted stock status */
  warehouseStatus?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LotCreateOneInput = {
  /** The record to create */
  lot: LotCreateInput;
};

export type LotCreateOrUpdateManyInput = {
  /** Array of records to create */
  lots: Array<LotCreateInput>;
};

export type LotFilter = {
  and?: InputMaybe<Array<LotFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  erpCreatedOn?: InputMaybe<DateFieldComparison>;
  erpSynced?: InputMaybe<BooleanFieldComparison>;
  erpUpdatedOn?: InputMaybe<DateFieldComparison>;
  expiration?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<LotFilter>>;
  productId?: InputMaybe<IdFilterComparison>;
  productNumber?: InputMaybe<StringFieldComparison>;
  productionDate?: InputMaybe<DateFieldComparison>;
  restricted?: InputMaybe<BooleanFieldComparison>;
  supplierLotNumber?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseStatus?: InputMaybe<BooleanFieldComparison>;
};

export type LotNodes = {
  __typename?: 'LotNodes';
  nodes: Array<Lot>;
};

export type LotOffsetConnection = {
  __typename?: 'LotOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Lot>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type LotSort = {
  direction: SortDirection;
  field: LotSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum LotSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  ErpCreatedOn = 'erpCreatedOn',
  ErpSynced = 'erpSynced',
  ErpUpdatedOn = 'erpUpdatedOn',
  Expiration = 'expiration',
  Id = 'id',
  ProductId = 'productId',
  ProductNumber = 'productNumber',
  ProductionDate = 'productionDate',
  Restricted = 'restricted',
  SupplierLotNumber = 'supplierLotNumber',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseStatus = 'warehouseStatus'
}

export type LotUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** When data was created in ERP */
  erpCreatedOn?: InputMaybe<Scalars['DateTime']['input']>;
  /** Erp sync status */
  erpSynced?: InputMaybe<Scalars['Boolean']['input']>;
  /** When data was last updated in ERP */
  erpUpdatedOn?: InputMaybe<Scalars['DateTime']['input']>;
  /** Lot expiration date */
  expiration?: InputMaybe<Scalars['DateTime']['input']>;
  /** Entity's product ID (foreign key) */
  productId?: InputMaybe<Scalars['ID']['input']>;
  /** Product number in erp */
  productNumber?: InputMaybe<Scalars['String']['input']>;
  /** Lot production date */
  productionDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Lot Restricted */
  restricted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Lot supplier number */
  supplierLotNumber?: InputMaybe<Scalars['String']['input']>;
  /** Boolean indicating if lot product is in restricted stock status */
  warehouseStatus?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LotUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: LotUpdateInput;
};

export type LpErpConflictResponseDto = {
  __typename?: 'LpErpConflictResponseDto';
  binCode?: Maybe<Scalars['String']['output']>;
  binId?: Maybe<Scalars['String']['output']>;
  /** Sap bin code */
  erpBinCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  erpHandlingUnitCode?: Maybe<Scalars['String']['output']>;
  /** Entity's SAP storage location ID (foreign key) */
  erpStorageLocation?: Maybe<Scalars['String']['output']>;
  /** Sap bin code */
  ffErpBinMappingCode?: Maybe<Scalars['String']['output']>;
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  licensePlateId?: Maybe<Scalars['String']['output']>;
  licensePlateStorageLocation?: Maybe<Scalars['String']['output']>;
  stock?: Maybe<Array<FulfilldLpErpConflictStockItemDto>>;
};

export type LpForFulfillmentItem = {
  __typename?: 'LpForFulfillmentItem';
  /** Entity code */
  areaCode?: Maybe<Scalars['String']['output']>;
  /** Entity's area ID (foreign key) */
  areaId?: Maybe<Scalars['ID']['output']>;
  /** Available quantity */
  availableQuantity: Scalars['String']['output'];
  /** Entity code */
  binCode: Scalars['String']['output'];
  /** Entity's area ID (foreign key) */
  binId: Scalars['ID']['output'];
  /** Status determining if the license plate and its contents are successfully synced with the ERP ledger. */
  ledgerSyncStatus?: Maybe<LedgerSyncStatus>;
  /** Entity code */
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Active/Inactive license plate status flag */
  licensePlateStatus?: Maybe<LicensePlateStatusState>;
  /** Fulfillment quantity */
  lineItemQuantity?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  lotCode?: Maybe<Scalars['String']['output']>;
  /** Lot expiration date */
  lotExpirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Lot Restricted */
  lotRestricted?: Maybe<Scalars['Boolean']['output']>;
  /** Timestamp of latest movement */
  lpLastMovement?: Maybe<Scalars['DateTime']['output']>;
  /** Number of open tasks */
  openTaskCount: Scalars['Int']['output'];
  /** Entity code */
  productCode: Scalars['String']['output'];
  /** Entity ID */
  productId: Scalars['ID']['output'];
  /** Quantity of product */
  quantity: Scalars['String']['output'];
  /** Entity code */
  quantityUOMCode?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  quantityUOMId?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  stockStatusCode: Scalars['String']['output'];
  /** Entity's stock status type ID (foreign key) */
  stockStatusId: Scalars['String']['output'];
};

/** Map model */
export type Map = {
  __typename?: 'Map';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  mapConfiguration?: Maybe<Scalars['JSONObject']['output']>;
  mapJson: Scalars['JSONObject']['output'];
  /** physical or logical map data */
  mapType?: Maybe<MapType>;
  /** Entity's human readable name */
  name: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type MapCreateOneInput = {
  /** The record to create */
  map: MapCreateType;
};

export type MapCreateType = {
  mapConfiguration?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Json data to generate a warehouse map */
  mapJson: Scalars['JSON']['input'];
  /** physical or logical map data */
  mapType?: InputMaybe<MapType>;
  /** Entity's human readable name */
  name: Scalars['String']['input'];
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['String']['input'];
};

export type MapFilter = {
  and?: InputMaybe<Array<MapFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mapType?: InputMaybe<MapTypeFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MapFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type MapOffsetConnection = {
  __typename?: 'MapOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Map>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type MapQuery = {
  bucket: Scalars['String']['input'];
  endX?: InputMaybe<Scalars['Float']['input']>;
  endY?: InputMaybe<Scalars['Float']['input']>;
  startX: Scalars['Float']['input'];
  startY: Scalars['Float']['input'];
  stops: Array<Stop>;
  warehouse: Scalars['Float']['input'];
};

export type MapSort = {
  direction: SortDirection;
  field: MapSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MapSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  MapType = 'mapType',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export enum MapType {
  Logical = 'logical',
  Physical = 'physical'
}

export type MapTypeFilterComparison = {
  eq?: InputMaybe<MapType>;
  gt?: InputMaybe<MapType>;
  gte?: InputMaybe<MapType>;
  iLike?: InputMaybe<MapType>;
  in?: InputMaybe<Array<MapType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<MapType>;
  lt?: InputMaybe<MapType>;
  lte?: InputMaybe<MapType>;
  neq?: InputMaybe<MapType>;
  notILike?: InputMaybe<MapType>;
  notIn?: InputMaybe<Array<MapType>>;
  notLike?: InputMaybe<MapType>;
};

export type MaterialDocumentItemDocumentInput = {
  Batch?: InputMaybe<Scalars['String']['input']>;
  GoodsMovementType: SapMaterialMovementType;
  IssuingOrReceivingPlant?: InputMaybe<Scalars['String']['input']>;
  IssuingOrReceivingStorageLoc?: InputMaybe<Scalars['String']['input']>;
  Material: Scalars['String']['input'];
  Plant: Scalars['String']['input'];
  QuantityInEntryUnit: Scalars['String']['input'];
  StorageLocation: Scalars['String']['input'];
};

export type MaterialMovmentDtoCreateOneInput = {
  GoodsMovementCode: SapMaterialMovementCode;
  PostingDate: Scalars['String']['input'];
  to_MaterialDocumentItem: Array<MaterialDocumentItemDocumentInput>;
};

/** Mobile configuration model */
export type MobileConfigurationModel = {
  __typename?: 'MobileConfigurationModel';
  /** Data payload from a barcode scan */
  payload: Scalars['JSONObject']['output'];
};

/** Mobile motd model */
export type MobileMotdModel = {
  __typename?: 'MobileMotdModel';
  /** Message of the day payload */
  payload: Scalars['JSONObject']['output'];
};

export type MobileViewTask = {
  __typename?: 'MobileViewTask';
  /** Deleted at date */
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  assignedByUserId?: Maybe<Scalars['ID']['output']>;
  assignedTeamId?: Maybe<Scalars['ID']['output']>;
  assignedUserId?: Maybe<Scalars['ID']['output']>;
  /** Date and time a task is completed */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** x coordinate location */
  completedAtLocationX?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  completedAtLocationY?: Maybe<Scalars['Float']['output']>;
  completedByUserId?: Maybe<Scalars['ID']['output']>;
  /** Date the task was completed */
  completionDate?: Maybe<Scalars['DateTime']['output']>;
  /** Created at date */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Delivery or fulfillment erp code */
  deliveryErpCode?: Maybe<Scalars['String']['output']>;
  /** Delivery ID (foreign key) */
  deliveryId?: Maybe<Scalars['ID']['output']>;
  /** Delivery item associated with entity */
  deliveryItem?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  destinationAreaCode?: Maybe<Scalars['String']['output']>;
  /** Entity's area ID (foreign key) */
  destinationAreaId?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  destinationBinCode?: Maybe<Scalars['String']['output']>;
  /** Entity's bin ID (foreign key) */
  destinationBinId?: Maybe<Scalars['String']['output']>;
  /** Destination license plate code */
  destinationLicensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  destinationLicensePlateDescription?: Maybe<Scalars['String']['output']>;
  /** Destination license plate ID */
  destinationLicensePlateId?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  destinationLotCode?: Maybe<Scalars['String']['output']>;
  /** Source lot ID (foreign key) */
  destinationLotId?: Maybe<Scalars['String']['output']>;
  /** Stock status type entity belongs to */
  destinationStatus?: Maybe<Scalars['String']['output']>;
  /** Due date */
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Delivery or fulfillment erp code */
  erpSalesOrder?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment erp code */
  fulfillmentErpCode?: Maybe<Scalars['String']['output']>;
  /** Fulfillment item associated with the entity */
  fulfillmentItem?: Maybe<Scalars['String']['output']>;
  /** Gross weight of entity */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Boolean for if a record is a task group */
  isTaskGroup?: Maybe<Scalars['Boolean']['output']>;
  /** Net weight of entity */
  netWeight?: Maybe<Scalars['Float']['output']>;
  /** Entity's parent task ID */
  parentTaskId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  productDescription?: Maybe<Scalars['String']['output']>;
  /** Entity's product ID (foreign key) */
  productId?: Maybe<Scalars['String']['output']>;
  /** Whether the product is lot managed or not */
  productLotManaged?: Maybe<Scalars['Boolean']['output']>;
  /** Quantity of product */
  quantity?: Maybe<Scalars['String']['output']>;
  /** Task that is display only */
  readonly?: Maybe<Scalars['Boolean']['output']>;
  /** Reference document */
  referringDoc?: Maybe<Scalars['String']['output']>;
  /** Reference item */
  referringDocItem?: Maybe<Scalars['String']['output']>;
  /** Business partner name */
  shipToName?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  sourceAreaCode?: Maybe<Scalars['String']['output']>;
  /** Entity's area ID (foreign key) */
  sourceAreaId?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  sourceBinCode?: Maybe<Scalars['String']['output']>;
  /** Entity's bin ID (foreign key) */
  sourceBinId?: Maybe<Scalars['String']['output']>;
  /** Source License Plate code */
  sourceLicensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  sourceLicensePlateDescription?: Maybe<Scalars['String']['output']>;
  /** Source License Plate Id */
  sourceLicensePlateId?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  sourceLotCode?: Maybe<Scalars['String']['output']>;
  /** Source lot ID (foreign key) */
  sourceLotId?: Maybe<Scalars['String']['output']>;
  /** Stock status type entity belongs to */
  sourceStatus?: Maybe<Scalars['String']['output']>;
  /** Date and time a task is started */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** x coordinate location */
  startedAtLocationX?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  startedAtLocationY?: Maybe<Scalars['Float']['output']>;
  startedByUserId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  taskCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  taskGroupCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  taskGroupId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  taskGroupPosition?: Maybe<Scalars['Float']['output']>;
  /** Task status, i.e Not Started */
  taskGroupStatus?: Maybe<TaskStatus>;
  taskGroupTaskData: TaskGroupTaskResource;
  /** Entity's task ID (foreign key) */
  taskId?: Maybe<Scalars['String']['output']>;
  /** Task status, i.e Not Started */
  taskStatus?: Maybe<TaskStatus>;
  /** Task type */
  taskType?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  taskTypeCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  teamDescription?: Maybe<Scalars['String']['output']>;
  /**
   * Entity's team ID (foreign key)
   * @deprecated no longer in use
   */
  teamId?: Maybe<Scalars['ID']['output']>;
  /** Entity's team name */
  teamName?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for entity */
  unitOfMeasure?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  unitOfMeasureId?: Maybe<Scalars['ID']['output']>;
  /**
   * Entity's user ID (foreign key)
   * @deprecated no longer in use
   */
  userId?: Maybe<Scalars['ID']['output']>;
  /** Volume of entity */
  volume?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** Warehouse entity belongs to */
  warehouseName?: Maybe<Scalars['String']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: Maybe<Scalars['String']['output']>;
};

export type MobileViewTaskFilter = {
  and?: InputMaybe<Array<MobileViewTaskFilter>>;
  assignedAt?: InputMaybe<DateFieldComparison>;
  assignedByUserId?: InputMaybe<IdFilterComparison>;
  assignedTeamId?: InputMaybe<IdFilterComparison>;
  assignedUserId?: InputMaybe<IdFilterComparison>;
  completedAt?: InputMaybe<DateFieldComparison>;
  completedAtLocationX?: InputMaybe<FloatFieldComparison>;
  completedAtLocationY?: InputMaybe<FloatFieldComparison>;
  completedByUserId?: InputMaybe<IdFilterComparison>;
  completionDate?: InputMaybe<DateFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryErpCode?: InputMaybe<StringFieldComparison>;
  deliveryId?: InputMaybe<IdFilterComparison>;
  deliveryItem?: InputMaybe<StringFieldComparison>;
  destinationAreaCode?: InputMaybe<StringFieldComparison>;
  destinationAreaId?: InputMaybe<StringFieldComparison>;
  destinationBinCode?: InputMaybe<StringFieldComparison>;
  destinationBinId?: InputMaybe<StringFieldComparison>;
  destinationLicensePlateCode?: InputMaybe<StringFieldComparison>;
  destinationLicensePlateDescription?: InputMaybe<StringFieldComparison>;
  destinationLicensePlateId?: InputMaybe<StringFieldComparison>;
  destinationLotCode?: InputMaybe<StringFieldComparison>;
  destinationLotId?: InputMaybe<StringFieldComparison>;
  destinationStatus?: InputMaybe<StringFieldComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  erpSalesOrder?: InputMaybe<StringFieldComparison>;
  fulfillmentErpCode?: InputMaybe<StringFieldComparison>;
  fulfillmentItem?: InputMaybe<StringFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  isTaskGroup?: InputMaybe<BooleanFieldComparison>;
  netWeight?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<MobileViewTaskFilter>>;
  parentTaskId?: InputMaybe<IdFilterComparison>;
  productCode?: InputMaybe<StringFieldComparison>;
  productDescription?: InputMaybe<StringFieldComparison>;
  productId?: InputMaybe<StringFieldComparison>;
  productLotManaged?: InputMaybe<BooleanFieldComparison>;
  quantity?: InputMaybe<StringFieldComparison>;
  readonly?: InputMaybe<BooleanFieldComparison>;
  referringDoc?: InputMaybe<StringFieldComparison>;
  referringDocItem?: InputMaybe<StringFieldComparison>;
  shipToName?: InputMaybe<StringFieldComparison>;
  sourceAreaCode?: InputMaybe<StringFieldComparison>;
  sourceAreaId?: InputMaybe<StringFieldComparison>;
  sourceBinCode?: InputMaybe<StringFieldComparison>;
  sourceBinId?: InputMaybe<StringFieldComparison>;
  sourceLicensePlateCode?: InputMaybe<StringFieldComparison>;
  sourceLicensePlateDescription?: InputMaybe<StringFieldComparison>;
  sourceLicensePlateId?: InputMaybe<StringFieldComparison>;
  sourceLotCode?: InputMaybe<StringFieldComparison>;
  sourceLotId?: InputMaybe<StringFieldComparison>;
  sourceStatus?: InputMaybe<StringFieldComparison>;
  startedAt?: InputMaybe<DateFieldComparison>;
  startedAtLocationX?: InputMaybe<FloatFieldComparison>;
  startedAtLocationY?: InputMaybe<FloatFieldComparison>;
  startedByUserId?: InputMaybe<IdFilterComparison>;
  taskCode?: InputMaybe<StringFieldComparison>;
  taskGroupCode?: InputMaybe<StringFieldComparison>;
  taskGroupId?: InputMaybe<IdFilterComparison>;
  taskGroupPosition?: InputMaybe<FloatFieldComparison>;
  taskGroupStatus?: InputMaybe<TaskStatusFilterComparison>;
  taskId?: InputMaybe<StringFieldComparison>;
  taskStatus?: InputMaybe<TaskStatusFilterComparison>;
  taskType?: InputMaybe<StringFieldComparison>;
  taskTypeCode?: InputMaybe<StringFieldComparison>;
  teamDescription?: InputMaybe<StringFieldComparison>;
  teamId?: InputMaybe<IdFilterComparison>;
  teamName?: InputMaybe<StringFieldComparison>;
  unitOfMeasure?: InputMaybe<StringFieldComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  userId?: InputMaybe<IdFilterComparison>;
  volume?: InputMaybe<FloatFieldComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  warehouseName?: InputMaybe<StringFieldComparison>;
  weightUOMId?: InputMaybe<StringFieldComparison>;
};

export type MobileViewTaskOffsetConnection = {
  __typename?: 'MobileViewTaskOffsetConnection';
  /** Array of nodes. */
  nodes: Array<MobileViewTask>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type MobileViewTaskSort = {
  direction: SortDirection;
  field: MobileViewTaskSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MobileViewTaskSortFields {
  AssignedAt = 'assignedAt',
  AssignedByUserId = 'assignedByUserId',
  AssignedTeamId = 'assignedTeamId',
  AssignedUserId = 'assignedUserId',
  CompletedAt = 'completedAt',
  CompletedAtLocationX = 'completedAtLocationX',
  CompletedAtLocationY = 'completedAtLocationY',
  CompletedByUserId = 'completedByUserId',
  CompletionDate = 'completionDate',
  CreatedAt = 'createdAt',
  DeliveryErpCode = 'deliveryErpCode',
  DeliveryId = 'deliveryId',
  DeliveryItem = 'deliveryItem',
  DestinationAreaCode = 'destinationAreaCode',
  DestinationAreaId = 'destinationAreaId',
  DestinationBinCode = 'destinationBinCode',
  DestinationBinId = 'destinationBinId',
  DestinationLicensePlateCode = 'destinationLicensePlateCode',
  DestinationLicensePlateDescription = 'destinationLicensePlateDescription',
  DestinationLicensePlateId = 'destinationLicensePlateId',
  DestinationLotCode = 'destinationLotCode',
  DestinationLotId = 'destinationLotId',
  DestinationStatus = 'destinationStatus',
  DueDate = 'dueDate',
  ErpSalesOrder = 'erpSalesOrder',
  FulfillmentErpCode = 'fulfillmentErpCode',
  FulfillmentItem = 'fulfillmentItem',
  GrossWeight = 'grossWeight',
  IsTaskGroup = 'isTaskGroup',
  NetWeight = 'netWeight',
  ParentTaskId = 'parentTaskId',
  ProductCode = 'productCode',
  ProductDescription = 'productDescription',
  ProductId = 'productId',
  ProductLotManaged = 'productLotManaged',
  Quantity = 'quantity',
  Readonly = 'readonly',
  ReferringDoc = 'referringDoc',
  ReferringDocItem = 'referringDocItem',
  ShipToName = 'shipToName',
  SourceAreaCode = 'sourceAreaCode',
  SourceAreaId = 'sourceAreaId',
  SourceBinCode = 'sourceBinCode',
  SourceBinId = 'sourceBinId',
  SourceLicensePlateCode = 'sourceLicensePlateCode',
  SourceLicensePlateDescription = 'sourceLicensePlateDescription',
  SourceLicensePlateId = 'sourceLicensePlateId',
  SourceLotCode = 'sourceLotCode',
  SourceLotId = 'sourceLotId',
  SourceStatus = 'sourceStatus',
  StartedAt = 'startedAt',
  StartedAtLocationX = 'startedAtLocationX',
  StartedAtLocationY = 'startedAtLocationY',
  StartedByUserId = 'startedByUserId',
  TaskCode = 'taskCode',
  TaskGroupCode = 'taskGroupCode',
  TaskGroupId = 'taskGroupId',
  TaskGroupPosition = 'taskGroupPosition',
  TaskGroupStatus = 'taskGroupStatus',
  TaskId = 'taskId',
  TaskStatus = 'taskStatus',
  TaskType = 'taskType',
  TaskTypeCode = 'taskTypeCode',
  TeamDescription = 'teamDescription',
  TeamId = 'teamId',
  TeamName = 'teamName',
  UnitOfMeasure = 'unitOfMeasure',
  UnitOfMeasureId = 'unitOfMeasureId',
  UserId = 'userId',
  Volume = 'volume',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId',
  WarehouseName = 'warehouseName',
  WeightUomId = 'weightUOMId'
}

export enum ModelWarehouseType {
  Aoe = 'aoe',
  Cs = 'cs',
  Default = 'default',
  Pto = 'pto',
  Slotting = 'slotting'
}

export type ModelWarehouseTypeFilterComparison = {
  eq?: InputMaybe<ModelWarehouseType>;
  gt?: InputMaybe<ModelWarehouseType>;
  gte?: InputMaybe<ModelWarehouseType>;
  iLike?: InputMaybe<ModelWarehouseType>;
  in?: InputMaybe<Array<ModelWarehouseType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ModelWarehouseType>;
  lt?: InputMaybe<ModelWarehouseType>;
  lte?: InputMaybe<ModelWarehouseType>;
  neq?: InputMaybe<ModelWarehouseType>;
  notILike?: InputMaybe<ModelWarehouseType>;
  notIn?: InputMaybe<Array<ModelWarehouseType>>;
  notLike?: InputMaybe<ModelWarehouseType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adjustLicensePlateInventory: Task;
  approveOneDisposition: Scalars['String']['output'];
  assignLpsToFulfillmentItem: InternalStockOrder;
  assignTask: Task;
  assignTaskGroup: TaskGroup;
  blockBinToBinTask: Task;
  /** Blocks a fulfillment prevent progress or load events */
  blockFulfillment: Delivery;
  blockPickTask: Task;
  /**
   * THIS MUTATION SHOULD NOT BE IMPLEMENTED AS PART OF ANY SOLUTION - DEVELOPMENT HELPER ONLY
   * @deprecated THIS MUTATION SHOULD NOT BE IMPLEMENTED AS PART OF ANY SOLUTION - DEVELOPMENT HELPER ONLY
   */
  cancelAllNotStartedTasks: Array<Scalars['String']['output']>;
  cancelDelivery: Delivery;
  cancelDeliveryTasks: Array<Scalars['String']['output']>;
  cancelManyCountArtifacts: Scalars['String']['output'];
  cancelManyDeliveryItems: Array<DeliveryItem>;
  cancelManyTasks: Array<Task>;
  closeOneSupportTicket: Scalars['String']['output'];
  completeBarcodeEnrollment: AdminTask;
  completeFulfillment: Delivery;
  completeLicensePlateBinToBinSingleTask: Task;
  completeLicensePlateMovementTask: Task;
  completeLicensePlateMovementTaskTaskGroup: Task;
  completeManyCountArtifacts: Scalars['String']['output'];
  completeManyFFUnloadMovementTask: Array<Task>;
  completeManyLicensePlatePutawayTask: TaskCompleteManyLicensePlatePutawayResponse;
  /** @deprecated Deprecated. Please use completeManyLoadTasks mutation. */
  completeManyLoadMovementTask: Array<Task>;
  completeManyLoadTasks: Array<Task>;
  /** @deprecated Deprecated. Please use completeManyLoadTasks mutation. */
  completeManyOneStepLoad: Array<Task>;
  /** @deprecated Deprecated. Please use completeOneFFPutawayTask mutation. */
  completeManyOneStepUnload: TaskCompleteManyLicensePlatePutawayResponse;
  completeManyPhysicalInventoryApprovalTaskByBin: Scalars['String']['output'];
  completeManyPhysicalInventoryTaskByBin: Array<CompleteBinPiTaskResponseObject>;
  completeManyPickToDockTasks: Array<Task>;
  /** @deprecated Deprecated.  Please use completeManyPickToStagingTasks mutation. */
  completeManyPickToStagingMovementTasks: Array<Task>;
  completeManyPickToStagingTasks: Array<Task>;
  /** @deprecated Deprecated. Please use completeManyFFUnloadMovementTask mutation. */
  completeManyUnloadMovementTask: Array<Task>;
  completeOneBinToBinMovementTask: Task;
  completeOneFFPutawayTask: Task;
  completeOneFFUnloadMovementTask: Task;
  completeOneIssueStockTask: Task;
  /** @deprecated Deprecated. Please use completeManyLoadTasks mutation. */
  completeOneLoadMovementTask: Task;
  completeOnePhysicalInventoryApprovalTask: Task;
  completeOnePhysicalInventoryTask: Task;
  completeOnePhysicalInventoryTaskByBin: CompleteBinPiTaskResponseObject;
  completeOnePickTask: Task;
  /** @deprecated Deprecated.  Please use completeManyPickToStagingTasks mutation. */
  completeOnePickToStagingMovementTask: Task;
  completeOnePutawayTask: Task;
  completeOneTaskLicensePlateStockStatus: Task;
  /** @deprecated Deprecated. Please use completeOneFFUnloadMovementTask mutation. */
  completeOneUnloadMovementTask: Task;
  completeOneUnpackLicensePlateTask: Task;
  completeRandomPutaways: RandomPutawayOutputDto;
  completeRandomUnloads: RandomUnloadOutputDto;
  completeWarehouseOrderTask: Scalars['String']['output'];
  copyOneBinSize: BinSize;
  /** @deprecated Deprecated - createOneStockStatusType should be used instead */
  copyOneStockStatusType: StockStatusType;
  createAndCompleteOneDispositionTask: Task;
  createAndCompleteOneFoundStockTask: Task;
  createBarcodeEnrollment: AdminTask;
  createDemoBinsAndProducts: DemoDataOutputDto;
  createLicensePlateBinToBinSingleTask: Task;
  createLicensePlateBinToBinTask: Task;
  /** @deprecated Deprecated.  Awaiting refactor. */
  createLoadTasksForFulfillment: Array<Task>;
  createManyBusinessPartners: Array<BusinessPartner>;
  createManyLicensePlateLinkedTasks: Array<Task>;
  createManyPhysicalInventoryTaskByBin: Scalars['String']['output'];
  createManySlottingExclusion: Array<SlottingExclusion>;
  /** creates a new agent configuration */
  createOneAgentConfiguration: ProxyConfig;
  createOneAisle: Aisle;
  createOneAisleColumn: AisleColumn;
  createOneArea: Area;
  createOneBarcode: Barcode;
  createOneBarcodeTemplateMapping: BarcodeTemplateMapping;
  createOneBin: Bin;
  createOneBinSize: BinSize;
  createOneBinToBinMovementTask: Task;
  createOneBusinessPartner: BusinessPartner;
  createOneCompany: Company;
  createOneContactInfo: ContactInfo;
  createOneContract: Contract;
  createOneContractRule: ContractRule;
  createOneDelivery: Delivery;
  createOneDeliveryItem: DeliveryItem;
  createOneDisplayPreference: DisplayPreference;
  createOneDoor: Door;
  createOneEdge: Edge;
  createOneEffectiveContractMapping: EffectiveContractMapping;
  createOneEquipmentItem: EquipmentItem;
  createOneEquipmentModel: EquipmentModel;
  createOneEquipmentType: EquipmentType;
  createOneFulfillment: Delivery;
  createOneFulfillmentBlock: FulfillmentBlock;
  createOneFulfillmentItem: FulfillmentItem;
  createOneIntegrationLog: IntegrationLog;
  createOneInternalStockOrderForFulfillment: InternalStockOrder;
  createOneInternalStockOrderForLp: InternalStockOrder;
  createOneInvoice: Invoice;
  createOneInvoiceItem: InvoiceItem;
  createOneIssueStockTask: Task;
  createOneLicensePlate: LicensePlate;
  createOneLot: Lot;
  createOneMap: Map;
  /** Create an SAP material movement. */
  createOneMaterialMovement: SapMaterialDocumentHeader;
  createOneOrganization: Organization;
  createOnePhysicalInventoryTask: Task;
  createOnePhysicalInventoryTaskByBin: Task;
  createOnePlanogram: Planogram;
  createOneProduct: Product;
  createOneProductAndUom: Product;
  createOneReplenishment: Replenishment;
  createOneRole: Role;
  createOneSalesOrder: SapSalesOrder;
  createOneSapBinFFArea: SapBinFfArea;
  createOneSapDeliveryDocumentType: SapDeliveryDocumentType;
  createOneSapHuUserStatus: SapHuUserStatus;
  createOneScheduledJob: ScheduledJob;
  createOneSharedLayout: Layout;
  createOneSlottingConfiguration: SlottingConfiguration;
  createOneSlottingDataset: SlottingDataset;
  createOneSlottingExclusion: SlottingExclusion;
  createOneSlottingRuleset: SlottingRuleset;
  createOneSlottingRun: Scalars['Boolean']['output'];
  createOneStockStatusMapping: StockStatusMapping;
  createOneStockStatusType: StockStatusType;
  createOneSupportTicket: Scalars['String']['output'];
  createOneTask: Task;
  createOneTaskGroup: TaskGroup;
  createOneTaskLicensePlateStockStatus: Task;
  createOneTaskType: TaskType;
  createOneTeam: Team;
  createOneUnpackLicensePlateTask: Task;
  createOneUser: User;
  createOneUserGroup: UserGroup;
  createOneUserLayout: Layout;
  createOneUserTeamMapping: UserTeamMapping;
  createOneUserWarehouseDefault: UserWarehouseDefault;
  createOneVertex: Vertex;
  createOneWarehouse: Warehouse;
  createOneWarehouseConfiguration: WarehouseConfiguration;
  createOneWarehousePath: WarehousePath;
  createOneWarehousePreferredUnitOfMeasure: WarehousePreferredUnitOfMeasure;
  createOneWarehouseRoleType: WarehouseRoleType;
  createOneZone: Zone;
  createOrUpdateManyFulfillments: Scalars['String']['output'];
  createOrUpdateManyLots: CreatedOrUpdatedLotsResult;
  createOrUpdateManyProductsAndUoms: Scalars['String']['output'];
  createOrUpdateOneSlottingRulesetDraft: SlottingRuleset;
  createPickTasksForFulfillment: TaskCreatePickToStagingResourceDto;
  /** @deprecated Deprecated.  Please use createPickTasksForFulfillment mutation. */
  createPickToStagingMovementTasks: Array<Task>;
  createStockFromProduction: Scalars['String']['output'];
  createTasksForDelivery: Array<Task>;
  createTasksForFulfillment: Array<Task>;
  /** @deprecated Deprecated. Please use createUnloadTasksForFFDelivery mutation. */
  createUnloadTasksForDelivery: Array<Task>;
  createUnloadTasksForFFDelivery: Array<Task>;
  declineOneSupportTicket: Scalars['String']['output'];
  deleteJob: Scalars['String']['output'];
  deleteManySlottingExlusions: SlottingExclusion;
  /** deletes a single agent configuration by id */
  deleteOneAgentConfiguration: ProxyConfig;
  deleteOneAisle: Aisle;
  deleteOneAisleColumn: AisleColumn;
  deleteOneArea: Area;
  deleteOneBarcode: Barcode;
  deleteOneBarcodeTemplateMapping: BarcodeTemplateMapping;
  deleteOneBin: Bin;
  deleteOneBinSize: BinSize;
  deleteOneBusinessPartner: BusinessPartner;
  deleteOneCompany: Company;
  deleteOneContactInfo: ContactInfo;
  deleteOneContract: Contract;
  deleteOneContractRule: ContractRule;
  deleteOneDelivery: Delivery;
  deleteOneDeliveryItem: DeliveryItem;
  deleteOneDisplayPreference: DisplayPreference;
  deleteOneDoor: Door;
  deleteOneEffectiveContractMapping: EffectiveContractMapping;
  deleteOneEquipmentItem: EquipmentItem;
  deleteOneEquipmentModel: EquipmentModel;
  deleteOneEquipmentType: EquipmentType;
  deleteOneFulfillmentBlock: FulfillmentBlock;
  deleteOneFulfillmentItem: FulfillmentItem;
  deleteOneInvoice: Invoice;
  deleteOneInvoiceItem: InvoiceItem;
  deleteOneLicensePlate: LicensePlate;
  deleteOneLot: Lot;
  deleteOneOrganization: Organization;
  deleteOneProduct: Product;
  deleteOneReplenishment: Replenishment;
  deleteOneRole: Role;
  deleteOneSapBinFFArea: SapBinFfArea;
  deleteOneSapDeliveryDocumentType: SapDeliveryDocumentType;
  deleteOneSapHuUserStatus: SapHuUserStatus;
  deleteOneScheduledJob: ScheduledJob;
  deleteOneSharedLayout: Scalars['String']['output'];
  deleteOneSlottingConfiguration: SlottingConfiguration;
  deleteOneSlottingDataset: SlottingDataset;
  deleteOneSlottingExclusion: SlottingExclusion;
  deleteOneSlottingRuleset: SlottingRuleset;
  deleteOneStockStatusType: StockStatusType;
  deleteOneTask: Task;
  deleteOneTaskGroup: TaskGroup;
  deleteOneTaskType: TaskType;
  deleteOneTeam: Team;
  deleteOneUnitOfMeasureGlossary: UnitOfMeasureGlossary;
  deleteOneUnitOfMeasureProductConversion: UnitOfMeasureProductConversion;
  deleteOneUser: User;
  deleteOneUserGroup: UserGroup;
  deleteOneUserLayout: Scalars['String']['output'];
  deleteOneUserTeamMapping: UserTeamMapping;
  deleteOneUserWarehouseDefault: UserWarehouseDefault;
  deleteOneWarehouse: Warehouse;
  deleteOneWarehouseConfiguration: WarehouseConfiguration;
  deleteOneWarehousePath: WarehousePath;
  deleteOneWarehousePreferredUnitOfMeasure: WarehousePreferredUnitOfMeasure;
  deleteOneWarehouseRoleType: WarehouseRoleType;
  deleteOneZone: Zone;
  deploySlottingRun: Scalars['String']['output'];
  destroyOneAdminTask: AdminTask;
  destroyOneAdminTaskType: AdminTaskType;
  destroyOneAisle: Aisle;
  destroyOneAisleColumn: AisleColumn;
  destroyOneArea: Area;
  destroyOneBarcode: Barcode;
  destroyOneBarcodeMapping: BarcodeMapping;
  destroyOneBin: Bin;
  destroyOneBinSize: BinSize;
  destroyOneBusinessPartner: BusinessPartner;
  destroyOneCompany: Company;
  destroyOneContactInfo: ContactInfo;
  destroyOneContract: Contract;
  destroyOneContractRule: ContractRule;
  destroyOneDelivery: Delivery;
  destroyOneDeliveryItem: DeliveryItem;
  destroyOneDisplayPreference: DisplayPreference;
  destroyOneDoor: Door;
  destroyOneEffectiveContractMapping: EffectiveContractMapping;
  destroyOneEquipmentItem: EquipmentItem;
  destroyOneEquipmentModel: EquipmentModel;
  destroyOneEquipmentType: EquipmentType;
  destroyOneFulfillment: Delivery;
  destroyOneFulfillmentBlock: FulfillmentBlock;
  destroyOneFulfillmentItem: FulfillmentItem;
  destroyOneInvoice: Invoice;
  destroyOneInvoiceItem: InvoiceItem;
  destroyOneLayout: Layout;
  destroyOneLicensePlate: LicensePlate;
  destroyOneLot: Lot;
  destroyOneOrganization: Organization;
  destroyOneProduct: Product;
  destroyOneProductMovement: ProductMovement;
  destroyOneReplenishment: Replenishment;
  destroyOneSapBinFFArea: SapBinFfArea;
  destroyOneSapDeliveryDocumentType: SapDeliveryDocumentType;
  destroyOneSapHuUserStatus: SapHuUserStatus;
  destroyOneSapStockStatusType: SapStockStatusType;
  destroyOneSapStorageLocationPlant: SapStorageLocationPlant;
  destroyOneScheduledJob: ScheduledJob;
  destroyOneSlottingConfiguration: SlottingConfiguration;
  destroyOneSlottingDataset: SlottingDataset;
  destroyOneSlottingExclusion: SlottingExclusion;
  destroyOneSlottingRuleset: SlottingRuleset;
  destroyOneStockStatusType: StockStatusType;
  destroyOneTask: Task;
  destroyOneTaskGroup: TaskGroup;
  destroyOneTaskType: TaskType;
  destroyOneTeam: Team;
  destroyOneUnitOfMeasure: WarehousePreferredUnitOfMeasure;
  destroyOneUnitOfMeasureGlossary: UnitOfMeasureGlossary;
  destroyOneUnitOfMeasureProductConversion: UnitOfMeasureProductConversion;
  destroyOneUser: User;
  destroyOneUserTeamMapping: UserTeamMapping;
  destroyOneUserWarehouseDefault: UserWarehouseDefault;
  destroyOneWarehouse?: Maybe<Warehouse>;
  destroyOneWarehouseConfiguration: WarehouseConfiguration;
  destroyOneWarehouseRoleType: WarehouseRoleType;
  destroyOneZone: Zone;
  destroyOnebarcodeTemplate: BarcodeTemplate;
  destroyOnebarcodeTemplateMapping: BarcodeTemplateMapping;
  destroyOnelicensePlateStatus: LicensePlateStatus;
  destroyOnelicensePlateStatusMapping: LicensePlateStatusMapping;
  destroyOnenonCompliantBarcode: NonCompliantBarcode;
  destroyOnepermission: Permission;
  destroyOnepermissionDimension: PermissionDimension;
  destroyOnerole: Role;
  destroyOnerolePermissionMapping: RolePermissionMapping;
  destroyOneuserGroup: UserGroup;
  destroyOneuserGroupMapping: UserGroupMapping;
  destroyOneuserGroupRoleMapping: UserGroupRoleMapping;
  dispatchTask: Scalars['String']['output'];
  /** Enrolls bin location data in the system. */
  enroll_Bin: Bin;
  ewmCreateWarehouseTask: EwmWarehouseTaskResponse;
  ewmDeconHandlingUnit: EwmHuDeconResponse;
  ewmOneStepBinToBin: EwmBinToBinResponse;
  ewmPostGoodsReceipt: EwmWarehouseTaskResponse;
  ewmTwoStepBinToBinComplete: EwmBinToBinResponse;
  ewmTwoStepBinToBinCreate: EwmBinToBinResponse;
  generateData: GenerateDataOutputDto;
  generateRandomBins: GenerateBinOutputDto;
  generateRandomLicensePlates: Scalars['String']['output'];
  generateRandomProducts: GenerateProductOutputDto;
  inventoryReconciliationGenerate: Scalars['String']['output'];
  moveStockToLicensePlate: LicensePlate;
  moveStockToLicensePlateTaskGroup: LicensePlate;
  pauseOneScheduledJob: ScheduledJob;
  /** Submits an SAP Post Goods Issue for a fulfillment. */
  postGoodsIssue: Delivery;
  /** Submits an SAP Post Goods Receipt for a delivery. */
  postGoodsReceipt: Delivery;
  /** @deprecated Deprecated. Awaiting refactor. */
  processReturnDelivery: Scalars['String']['output'];
  /** Removes a blocks from a fulfillment. */
  removeFulfillmentBlock: Delivery;
  removeStockFromInventory: Array<Task>;
  resolveNonCompliantBarcodes: Scalars['String']['output'];
  resumeOneScheduledJob: ScheduledJob;
  setUserDefaultLayout: Layout;
  shortShipFulfillment: Delivery;
  startOnePhysicalInventoryTaskByBin: Scalars['String']['output'];
  startTask: Task;
  startTaskGroup: TaskGroup;
  sysAdminCreateSapOutboundDeliveries: Scalars['String']['output'];
  updateJobStatus: Scalars['String']['output'];
  updateLPStockStatusByStockTypeHuUserStatus: Array<Task>;
  updateLicensePlateSyncJob: Scalars['String']['output'];
  updateManyActiveSystemConnections: Scalars['String']['output'];
  updateManyBinStatusMappings: Scalars['String']['output'];
  updateManyLicensePlateSLOC: Scalars['String']['output'];
  updateManyLicensePlateStatusMappings: Scalars['String']['output'];
  /** updates a given agent configuration by id */
  updateOneAgentConfiguration: ProxyConfig;
  updateOneAisle: Aisle;
  updateOneAisleColumn: AisleColumn;
  updateOneArea: Area;
  updateOneBarcode: Barcode;
  updateOneBarcodeTemplateMapping: BarcodeTemplateMapping;
  updateOneBin: Bin;
  updateOneBinSize: BinSize;
  updateOneBusinessPartner: BusinessPartner;
  updateOneCompany: Company;
  updateOneContactInfo: ContactInfo;
  /** Update Contact info data on Company by provided Company id and updateData argument. */
  updateOneContactInfoByCompanyId: ContactInfo;
  /** Update Contact info data on Organization by provided Organization id and updateData argument. */
  updateOneContactInfoByOrganizationId: ContactInfo;
  /** Update Contact info data on Warehouse by provided Warehouse id and updateData argument. */
  updateOneContactInfoByWarehouseId: ContactInfo;
  updateOneContract: Contract;
  updateOneContractRule: ContractRule;
  updateOneDelivery: Delivery;
  updateOneDeliveryItem: DeliveryItem;
  updateOneDisplayPreference: DisplayPreference;
  /** Updates display preferences by company id */
  updateOneDisplayPreferenceByCompanyId: DisplayPreference;
  /** Updates display preferences by organization id */
  updateOneDisplayPreferenceByOrganizationId: DisplayPreference;
  /** Updates display preferences by user id */
  updateOneDisplayPreferenceByUserId: DisplayPreference;
  /** Updates display preferences by warehouse id */
  updateOneDisplayPreferenceByWarehouseId: DisplayPreference;
  updateOneDisposition: Disposition;
  updateOneDoor: Door;
  updateOneEffectiveContractMapping: EffectiveContractMapping;
  updateOneEquipmentItem: EquipmentItem;
  updateOneEquipmentModel: EquipmentModel;
  updateOneEquipmentType: EquipmentType;
  updateOneFulfillmentBlock: FulfillmentBlock;
  updateOneFulfillmentItem: FulfillmentItem;
  updateOneIntegrationLog: IntegrationLog;
  updateOneInvoice: Invoice;
  updateOneInvoiceItem: InvoiceItem;
  updateOneLicensePlate: LicensePlate;
  updateOneLot: Lot;
  updateOneOrganization: Organization;
  updateOneProduct: Product;
  updateOneReplenishment: Replenishment;
  updateOneSapBinFFArea: SapBinFfArea;
  updateOneSapDeliveryDocumentType: SapDeliveryDocumentType;
  updateOneSapHuUserStatus: SapHuUserStatus;
  updateOneScheduledJob: ScheduledJob;
  updateOneSharedLayout: Layout;
  updateOneSlottingConfiguration: SlottingConfiguration;
  updateOneSlottingDataset: SlottingDataset;
  updateOneSlottingExclusion: SlottingExclusion;
  updateOneSlottingRuleset: SlottingRuleset;
  updateOneSlottingRulesetDraftToCompleteRuleset: SlottingRuleset;
  updateOneStockStatusType: StockStatusType;
  updateOneTask: Task;
  updateOneTaskGroup: TaskGroup;
  updateOneTaskType: TaskType;
  /** update one bin status mappings for a single task type */
  updateOneTaskTypeBinStatusMapping: ViewTaskTypeBinStatusMapping;
  /** update one stock status mappings for a single task type */
  updateOneTaskTypeStockStatusMapping: ViewTaskTypeStockStatusMapping;
  updateOneTeam: Team;
  updateOneUnitOfMeasureGlossary: UnitOfMeasureGlossary;
  updateOneUser: User;
  updateOneUserGroup: UserGroup;
  updateOneUserLayout: Layout;
  updateOneUserTeamMapping: UserTeamMapping;
  updateOneUserWarehouseDefault: UserWarehouseDefault;
  updateOneWarehouse: Warehouse;
  updateOneWarehouseConfiguration: WarehouseConfiguration;
  updateOneWarehousePath: WarehousePath;
  updateOneWarehousePreferredUnitOfMeasure: WarehousePreferredUnitOfMeasure;
  updateOneWarehouseRoleType: WarehouseRoleType;
  updateOneZone: Zone;
  updatePermissionsForRole: Scalars['String']['output'];
  updatePostTransferOrderJob: Scalars['String']['output'];
  /** updates the proxy url */
  updateProxyUrl: ProxyConfig;
  updateRolesForUserGroup: Scalars['String']['output'];
  updateUsersForUserGroup: Scalars['String']['output'];
};


export type MutationAdjustLicensePlateInventoryArgs = {
  inventory: Array<AdjustLpInventoryItemDto>;
  licensePlateId: Scalars['String']['input'];
  storageLocation?: InputMaybe<Scalars['String']['input']>;
  warehouseId: Scalars['String']['input'];
};


export type MutationApproveOneDispositionArgs = {
  input: DispositionApproveOneDto;
};


export type MutationAssignLpsToFulfillmentItemArgs = {
  input: FulfillmentItemLicensePlateAssignDto;
};


export type MutationAssignTaskArgs = {
  input: TaskAssignDto;
};


export type MutationAssignTaskGroupArgs = {
  assignTeamId?: InputMaybe<Scalars['ID']['input']>;
  assignUserId?: InputMaybe<Scalars['ID']['input']>;
  taskGroupId: Scalars['ID']['input'];
};


export type MutationBlockBinToBinTaskArgs = {
  input: TaskBlockInputDto;
};


export type MutationBlockFulfillmentArgs = {
  input: FulfillmentBlockInput;
};


export type MutationBlockPickTaskArgs = {
  input: TaskBlockInputDto;
};


export type MutationCancelAllNotStartedTasksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCancelDeliveryArgs = {
  deliveryId: Scalars['String']['input'];
};


export type MutationCancelDeliveryTasksArgs = {
  input: CancelPutawayTaskInputDto;
};


export type MutationCancelManyCountArtifactsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationCancelManyDeliveryItemsArgs = {
  cancelManyDeliveryItems: Array<CancelManyDeliveryItemsDto>;
};


export type MutationCancelManyTasksArgs = {
  input: Array<TaskCancelManyDto>;
};


export type MutationCloseOneSupportTicketArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCompleteBarcodeEnrollmentArgs = {
  input: CompleteBarcodeEnrollmentInputDto;
};


export type MutationCompleteFulfillmentArgs = {
  fulfillmentId: Scalars['ID']['input'];
};


export type MutationCompleteLicensePlateBinToBinSingleTaskArgs = {
  input: TaskCompleteLicensePlateBinToBinMovement;
};


export type MutationCompleteLicensePlateMovementTaskArgs = {
  input: TaskCompleteLicensePlateMovementInputDto;
};


export type MutationCompleteLicensePlateMovementTaskTaskGroupArgs = {
  input: TaskCompleteLicensePlateMovementInputDto;
};


export type MutationCompleteManyCountArtifactsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationCompleteManyFfUnloadMovementTaskArgs = {
  completeManyUnloadTasks?: InputMaybe<Array<TaskCompleteOneOfManyUnloadInput>>;
  destinationBinId: Scalars['ID']['input'];
};


export type MutationCompleteManyLicensePlatePutawayTaskArgs = {
  completeLicensePlatePutaways: Array<TaskCompleteManyLicensePlatePutawayInput>;
  destinationBinId: Scalars['ID']['input'];
};


export type MutationCompleteManyLoadMovementTaskArgs = {
  completeLoadTasks?: InputMaybe<Array<TaskCompleteLoadInput>>;
};


export type MutationCompleteManyLoadTasksArgs = {
  completeLoadTasks: Array<LoadTaskCompleteInput>;
  warehouseId: Scalars['ID']['input'];
};


export type MutationCompleteManyOneStepLoadArgs = {
  completePickToStagingTasks?: InputMaybe<Array<TaskCompleteManyPickToStagingInput>>;
};


export type MutationCompleteManyOneStepUnloadArgs = {
  completeUnloadTasks: Array<TaskCompleteUnloadInput>;
  destinationBinId: Scalars['String']['input'];
};


export type MutationCompleteManyPhysicalInventoryApprovalTaskByBinArgs = {
  input: CompleteManyBinPiApprovalTaskInputDto;
};


export type MutationCompleteManyPhysicalInventoryTaskByBinArgs = {
  input: CompleteManyBinPiTaskInputDto;
};


export type MutationCompleteManyPickToDockTasksArgs = {
  completePickToDockTasks: Array<CompletePickToDockTaskInput>;
  warehouseId: Scalars['String']['input'];
};


export type MutationCompleteManyPickToStagingMovementTasksArgs = {
  completePickToStagingTasks?: InputMaybe<Array<TaskCompleteManyPickToStagingInput>>;
};


export type MutationCompleteManyPickToStagingTasksArgs = {
  completePickToStagingTasks: Array<CompletePickToStagingTaskInput>;
  warehouseId: Scalars['String']['input'];
};


export type MutationCompleteManyUnloadMovementTaskArgs = {
  completeUnloadTasks?: InputMaybe<Array<TaskCompleteUnloadInput>>;
};


export type MutationCompleteOneBinToBinMovementTaskArgs = {
  input: CompleteBinToBinTaskInputDto;
};


export type MutationCompleteOneFfPutawayTaskArgs = {
  input: CompletePutawayTaskInputDto;
};


export type MutationCompleteOneFfUnloadMovementTaskArgs = {
  completeUnloadTask: TaskCompleteOneUnloadInput;
};


export type MutationCompleteOneIssueStockTaskArgs = {
  completeOneIssueStockTask: TaskCompleteOneIssueStockInput;
};


export type MutationCompleteOneLoadMovementTaskArgs = {
  completeLoadTask: TaskCompleteOneLoadInput;
};


export type MutationCompleteOnePhysicalInventoryApprovalTaskArgs = {
  input: ApprovePiTaskInputDto;
};


export type MutationCompleteOnePhysicalInventoryTaskArgs = {
  input: CompletePiTaskInputDto;
};


export type MutationCompleteOnePhysicalInventoryTaskByBinArgs = {
  input: CompleteBinPiTaskInputDto;
};


export type MutationCompleteOnePickTaskArgs = {
  input: CompletePickTaskInputDto;
};


export type MutationCompleteOnePickToStagingMovementTaskArgs = {
  completePickToStagingTask: TaskCompleteOnePickToStagingInput;
};


export type MutationCompleteOnePutawayTaskArgs = {
  input: CompletePutawayTaskInputDto;
};


export type MutationCompleteOneTaskLicensePlateStockStatusArgs = {
  input: TaskLicensePlateStockStatusCompleteOneDto;
};


export type MutationCompleteOneUnloadMovementTaskArgs = {
  completeUnloadTask: TaskCompleteOneUnloadInput;
};


export type MutationCompleteOneUnpackLicensePlateTaskArgs = {
  input: TaskLicensePlateUnpackInputCompleteDto;
};


export type MutationCompleteRandomPutawaysArgs = {
  maxToComplete?: InputMaybe<Scalars['Float']['input']>;
  throttleLimit?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationCompleteRandomUnloadsArgs = {
  maxToComplete?: InputMaybe<Scalars['Float']['input']>;
  throttleLimit?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationCompleteWarehouseOrderTaskArgs = {
  completeWarehouseOrderTask: Array<EwmCompleteWarehouseOrderTaskDto>;
};


export type MutationCopyOneBinSizeArgs = {
  copyBinSize: BinSizeCopyDto;
};


export type MutationCopyOneStockStatusTypeArgs = {
  input: CopyStockStatusTypeInputDto;
};


export type MutationCreateAndCompleteOneDispositionTaskArgs = {
  input: CreateOneTaskDispositionInput;
};


export type MutationCreateAndCompleteOneFoundStockTaskArgs = {
  input: FoundStockTaskCreateAndCompleteOneInput;
};


export type MutationCreateBarcodeEnrollmentArgs = {
  input: CreateBarcodeEnrollmentInputDto;
};


export type MutationCreateLicensePlateBinToBinSingleTaskArgs = {
  input: LicensePlateBinToBinTaskMovementCreateInputDto;
};


export type MutationCreateLicensePlateBinToBinTaskArgs = {
  input: LicensePlateBinToBinTaskMovementCreateInputDto;
};


export type MutationCreateLoadTasksForFulfillmentArgs = {
  fulfillmentId: Scalars['ID']['input'];
};


export type MutationCreateManyBusinessPartnersArgs = {
  input: BusinessPartnerCreateManyInput;
};


export type MutationCreateManyLicensePlateLinkedTasksArgs = {
  linkTasks?: InputMaybe<Scalars['Boolean']['input']>;
  linkedTaskCreate: Array<LicensePlateTaskCreateManyLinkedDto>;
};


export type MutationCreateManyPhysicalInventoryTaskByBinArgs = {
  input: TaskCreateManyBinPiInput;
};


export type MutationCreateManySlottingExclusionArgs = {
  input: Array<SlottingExclusionCreateInput>;
};


export type MutationCreateOneAgentConfigurationArgs = {
  agentName: Scalars['String']['input'];
  hosts: Array<AgentConfigurationHostInput>;
};


export type MutationCreateOneAisleArgs = {
  input: AisleCreateOneInput;
};


export type MutationCreateOneAisleColumnArgs = {
  input: AisleColumnCreateOneInput;
};


export type MutationCreateOneAreaArgs = {
  input: AreaCreateOneInput;
};


export type MutationCreateOneBarcodeArgs = {
  input: BarcodeCreateOneInput;
};


export type MutationCreateOneBarcodeTemplateMappingArgs = {
  input: BarcodeTemplateMappingCreateOneInput;
};


export type MutationCreateOneBinArgs = {
  input: BinCreateOneInput;
};


export type MutationCreateOneBinSizeArgs = {
  input: BinSizeCreateOneInput;
};


export type MutationCreateOneBinToBinMovementTaskArgs = {
  input: CreateBinToBinTaskInputDto;
};


export type MutationCreateOneBusinessPartnerArgs = {
  input: BusinessPartnerCreateOneInput;
};


export type MutationCreateOneCompanyArgs = {
  input: CompanyCreateOneInput;
};


export type MutationCreateOneContactInfoArgs = {
  input: ContactInfoCreateOneInput;
};


export type MutationCreateOneContractArgs = {
  input: ContractCreateOneInput;
};


export type MutationCreateOneContractRuleArgs = {
  input: ContractRuleCreateOneInput;
};


export type MutationCreateOneDeliveryArgs = {
  input: DeliveryCreateOneInput;
};


export type MutationCreateOneDeliveryItemArgs = {
  input: DeliveryItemCreateOneInput;
};


export type MutationCreateOneDisplayPreferenceArgs = {
  input: DisplayPreferenceCreateOneInput;
};


export type MutationCreateOneDoorArgs = {
  input: DoorCreateOneInput;
};


export type MutationCreateOneEdgeArgs = {
  input: EdgeCreateOneInput;
};


export type MutationCreateOneEffectiveContractMappingArgs = {
  input: EffectiveContractMappingCreateOneInput;
};


export type MutationCreateOneEquipmentItemArgs = {
  input: EquipmentCreateOneInput;
};


export type MutationCreateOneEquipmentModelArgs = {
  input: EquipmentModelCreateOneInput;
};


export type MutationCreateOneEquipmentTypeArgs = {
  input: EquipmentTypeCreateOneInput;
};


export type MutationCreateOneFulfillmentArgs = {
  input: FulfillmentWithItemsCreateOneInput;
};


export type MutationCreateOneFulfillmentBlockArgs = {
  input: CreateOneFulfillmentBlockInput;
};


export type MutationCreateOneFulfillmentItemArgs = {
  input: FulfillmentItemCreateOneInput;
};


export type MutationCreateOneIntegrationLogArgs = {
  input: IntegrationLogCreateOneInput;
};


export type MutationCreateOneInternalStockOrderForFulfillmentArgs = {
  input: InternalStockOrderCreateForFulfillmentInput;
};


export type MutationCreateOneInternalStockOrderForLpArgs = {
  input: InternalStockOrderCreateForLpInput;
};


export type MutationCreateOneInvoiceArgs = {
  input: InvoiceCreateOneInput;
};


export type MutationCreateOneInvoiceItemArgs = {
  input: InvoiceItemCreateOneInput;
};


export type MutationCreateOneIssueStockTaskArgs = {
  input: IssueStockTaskCreateOneInput;
};


export type MutationCreateOneLicensePlateArgs = {
  input: LicensePlateCreateOneInput;
};


export type MutationCreateOneLotArgs = {
  input: LotCreateOneInput;
};


export type MutationCreateOneMapArgs = {
  input: MapCreateOneInput;
};


export type MutationCreateOneMaterialMovementArgs = {
  materialMovementDto: MaterialMovmentDtoCreateOneInput;
};


export type MutationCreateOneOrganizationArgs = {
  input: OrganizationCreateOneInput;
};


export type MutationCreateOnePhysicalInventoryTaskArgs = {
  input: CreatePiTaskInputDto;
};


export type MutationCreateOnePhysicalInventoryTaskByBinArgs = {
  input: CreateBinPiTaskInputDto;
};


export type MutationCreateOnePlanogramArgs = {
  input: PlanogramCreateOneInput;
};


export type MutationCreateOneProductArgs = {
  input: ProductCreateOneInput;
};


export type MutationCreateOneProductAndUomArgs = {
  input: ProductUomCreateOrUpdateOneInput;
};


export type MutationCreateOneReplenishmentArgs = {
  input: ReplenishmentCreateOneInput;
};


export type MutationCreateOneRoleArgs = {
  input: RoleCreateInput;
};


export type MutationCreateOneSalesOrderArgs = {
  salesOrderData: SapSalesOrderCreateOneInput;
};


export type MutationCreateOneSapBinFfAreaArgs = {
  input: SapBinFfAreaCreateOneInput;
};


export type MutationCreateOneSapDeliveryDocumentTypeArgs = {
  input: SapDeliveryDocumentTypeCreateOneInput;
};


export type MutationCreateOneSapHuUserStatusArgs = {
  input: SapHuUserStatusCreateOneInput;
};


export type MutationCreateOneScheduledJobArgs = {
  input: ScheduledJobCreateInputDto;
};


export type MutationCreateOneSharedLayoutArgs = {
  input: LayoutSharedCreateInput;
};


export type MutationCreateOneSlottingConfigurationArgs = {
  input: SlottingConfigurationCreateOneInput;
};


export type MutationCreateOneSlottingDatasetArgs = {
  input: SlottingDatasetCreateOneInput;
};


export type MutationCreateOneSlottingExclusionArgs = {
  input: SlottingExclusionCreateOneInput;
};


export type MutationCreateOneSlottingRulesetArgs = {
  input: SlottingRulesetCreateOneInput;
};


export type MutationCreateOneSlottingRunArgs = {
  input: SlottingRunCreateOneInput;
};


export type MutationCreateOneStockStatusMappingArgs = {
  input: StockStatusMappingCreateOneInput;
};


export type MutationCreateOneStockStatusTypeArgs = {
  input: StockStatusTypeCreateOneInput;
};


export type MutationCreateOneSupportTicketArgs = {
  description: Scalars['String']['input'];
  senderEmail: Scalars['String']['input'];
  senderName: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateOneTaskArgs = {
  input: TaskCreateOneInput;
};


export type MutationCreateOneTaskGroupArgs = {
  input: TaskGroupCreateOneInput;
};


export type MutationCreateOneTaskLicensePlateStockStatusArgs = {
  input: CreateOneTaskLicensePlateStockStatusInput;
};


export type MutationCreateOneTaskTypeArgs = {
  input: TaskTypeCreateOneInput;
};


export type MutationCreateOneTeamArgs = {
  input: TeamCreateOneInput;
};


export type MutationCreateOneUnpackLicensePlateTaskArgs = {
  input: TaskLicensePlateUnpackInputCreateDto;
};


export type MutationCreateOneUserArgs = {
  input: UserCreateOneInput;
};


export type MutationCreateOneUserGroupArgs = {
  input: UserGroupCreateInputDto;
};


export type MutationCreateOneUserLayoutArgs = {
  input: LayoutUserCreateInput;
};


export type MutationCreateOneUserTeamMappingArgs = {
  input: UserTeamMappingCreateOneInput;
};


export type MutationCreateOneUserWarehouseDefaultArgs = {
  input: UserWarehouseDefaultCreateOneInput;
};


export type MutationCreateOneVertexArgs = {
  input: VertexCreateOneInput;
};


export type MutationCreateOneWarehouseArgs = {
  input: WarehouseCreateOneInput;
};


export type MutationCreateOneWarehouseConfigurationArgs = {
  input: WarehouseConfigurationCreateOneInput;
};


export type MutationCreateOneWarehousePathArgs = {
  input: WarehousePathCreateOneInput;
};


export type MutationCreateOneWarehousePreferredUnitOfMeasureArgs = {
  input: WarehousePreferredUnitOfMeasureCreateOneInput;
};


export type MutationCreateOneWarehouseRoleTypeArgs = {
  input: WarehouseRoleTypeCreateOneInput;
};


export type MutationCreateOneZoneArgs = {
  input: ZoneCreateOneInput;
};


export type MutationCreateOrUpdateManyFulfillmentsArgs = {
  input: FulfillmentCreateOrUpdateManyInputDto;
};


export type MutationCreateOrUpdateManyLotsArgs = {
  input: LotCreateOrUpdateManyInput;
};


export type MutationCreateOrUpdateManyProductsAndUomsArgs = {
  input: ProductUomCreateOrUpdateManyInput;
};


export type MutationCreateOrUpdateOneSlottingRulesetDraftArgs = {
  input: SlottingRulesetCreateOneInput;
};


export type MutationCreatePickTasksForFulfillmentArgs = {
  fulfillmentId: Scalars['ID']['input'];
};


export type MutationCreatePickToStagingMovementTasksArgs = {
  createManyPickToStagingTasks: Array<TaskCreateOnePickToStagingInput>;
};


export type MutationCreateStockFromProductionArgs = {
  input: CreateStockFromProductionTaskInputDto;
};


export type MutationCreateTasksForDeliveryArgs = {
  input: CreatePutawayTaskInputDto;
};


export type MutationCreateTasksForFulfillmentArgs = {
  input: CreatePickTaskInputDto;
};


export type MutationCreateUnloadTasksForDeliveryArgs = {
  deliveryId: Scalars['ID']['input'];
};


export type MutationCreateUnloadTasksForFfDeliveryArgs = {
  deliveryId: Scalars['ID']['input'];
};


export type MutationDeclineOneSupportTicketArgs = {
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationDeleteJobArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteManySlottingExlusionsArgs = {
  input: Array<Scalars['String']['input']>;
};


export type MutationDeleteOneAgentConfigurationArgs = {
  agentId: Scalars['ID']['input'];
};


export type MutationDeleteOneAisleArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneAisleColumnArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneAreaArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneBarcodeArgs = {
  input: DeleteOneBarcodeInput;
};


export type MutationDeleteOneBarcodeTemplateMappingArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneBinArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneBinSizeArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneBusinessPartnerArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneCompanyArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneContactInfoArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneContractArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneContractRuleArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneDeliveryArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneDeliveryItemArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneDisplayPreferenceArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneDoorArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneEffectiveContractMappingArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneEquipmentItemArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneEquipmentModelArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneEquipmentTypeArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneFulfillmentBlockArgs = {
  input: DeleteOneFulfillmentBlockInput;
};


export type MutationDeleteOneFulfillmentItemArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneInvoiceArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneInvoiceItemArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneLicensePlateArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneLotArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneOrganizationArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneProductArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneReplenishmentArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneRoleArgs = {
  input: RoleDeleteInputType;
};


export type MutationDeleteOneSapBinFfAreaArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneSapDeliveryDocumentTypeArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneSapHuUserStatusArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneScheduledJobArgs = {
  input: UpdateScheduledJobByIdInputDto;
};


export type MutationDeleteOneSharedLayoutArgs = {
  input: LayoutDeleteInputType;
};


export type MutationDeleteOneSlottingConfigurationArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneSlottingDatasetArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneSlottingExclusionArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneSlottingRulesetArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneStockStatusTypeArgs = {
  input: StockStatusTypeDeleteOneInput;
};


export type MutationDeleteOneTaskArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneTaskGroupArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneTaskTypeArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneTeamArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneUnitOfMeasureGlossaryArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneUnitOfMeasureProductConversionArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneUserGroupArgs = {
  input: UserGroupDeleteOneDto;
};


export type MutationDeleteOneUserLayoutArgs = {
  input: LayoutDeleteInputType;
};


export type MutationDeleteOneUserTeamMappingArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneUserWarehouseDefaultArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneWarehouseArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneWarehouseConfigurationArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneWarehousePathArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneWarehousePreferredUnitOfMeasureArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneWarehouseRoleTypeArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeleteOneZoneArgs = {
  input: DeleteOneEntityIdInput;
};


export type MutationDeploySlottingRunArgs = {
  input: DeployRunInput;
};


export type MutationDestroyOneAdminTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneAdminTaskTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneAisleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneAisleColumnArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneAreaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneBarcodeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneBarcodeMappingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneBinArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneBinSizeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneBusinessPartnerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneContactInfoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneContractArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneContractRuleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneDeliveryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneDeliveryItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneDisplayPreferenceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneDoorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneEffectiveContractMappingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneEquipmentItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneEquipmentModelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneEquipmentTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneFulfillmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneFulfillmentBlockArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneFulfillmentItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneInvoiceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneInvoiceItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneLayoutArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneLicensePlateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneLotArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneProductMovementArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneReplenishmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneSapBinFfAreaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneSapDeliveryDocumentTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneSapHuUserStatusArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneSapStockStatusTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneSapStorageLocationPlantArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneScheduledJobArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneSlottingConfigurationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneSlottingDatasetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneSlottingExclusionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneSlottingRulesetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneStockStatusTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneTaskGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneTaskTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneTeamArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneUnitOfMeasureArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneUnitOfMeasureGlossaryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneUnitOfMeasureProductConversionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneUserTeamMappingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneUserWarehouseDefaultArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneWarehouseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneWarehouseConfigurationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneWarehouseRoleTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneZoneArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOnebarcodeTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOnebarcodeTemplateMappingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOnelicensePlateStatusArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOnelicensePlateStatusMappingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOnenonCompliantBarcodeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOnepermissionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOnepermissionDimensionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneroleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOnerolePermissionMappingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneuserGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneuserGroupMappingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyOneuserGroupRoleMappingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDispatchTaskArgs = {
  input: TaskDispatchDtoInput;
};


export type MutationEnroll_BinArgs = {
  coordinates: BinEnrollment;
  id: Scalars['ID']['input'];
};


export type MutationEwmCreateWarehouseTaskArgs = {
  delivery: Scalars['String']['input'];
  handlingUnit: Scalars['String']['input'];
};


export type MutationEwmDeconHandlingUnitArgs = {
  handlingUnit: Scalars['String']['input'];
};


export type MutationEwmOneStepBinToBinArgs = {
  bin: Scalars['String']['input'];
  handlingUnit: Scalars['String']['input'];
};


export type MutationEwmPostGoodsReceiptArgs = {
  bin: Scalars['String']['input'];
  handlingUnit: Scalars['String']['input'];
};


export type MutationEwmTwoStepBinToBinCompleteArgs = {
  destinationBin: Scalars['String']['input'];
  warehouseTask: Scalars['String']['input'];
};


export type MutationEwmTwoStepBinToBinCreateArgs = {
  destinationBin: Scalars['String']['input'];
  handlingUnit: Scalars['String']['input'];
};


export type MutationGenerateDataArgs = {
  deliveryDateSpread?: InputMaybe<Scalars['Float']['input']>;
  generateTasks?: InputMaybe<Scalars['Boolean']['input']>;
  maxLineItems?: InputMaybe<Scalars['Float']['input']>;
  maxQuantity?: InputMaybe<Scalars['Float']['input']>;
  minLineItems?: InputMaybe<Scalars['Float']['input']>;
  minQuantity?: InputMaybe<Scalars['Float']['input']>;
  numberOfDeliveries?: InputMaybe<Scalars['Float']['input']>;
  scopedData?: InputMaybe<Array<ScopedData>>;
  throttleLimit?: InputMaybe<Scalars['Float']['input']>;
  type: DataGenerationType;
};


export type MutationGenerateRandomBinsArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  numberOfBins?: InputMaybe<Scalars['Float']['input']>;
  throttleLimit?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationGenerateRandomLicensePlatesArgs = {
  numberOfLicensePlates?: InputMaybe<Scalars['Float']['input']>;
  throttleLimit?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationGenerateRandomProductsArgs = {
  numberOfProducts?: InputMaybe<Scalars['Float']['input']>;
  throttleLimit?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationInventoryReconciliationGenerateArgs = {
  final?: InputMaybe<Scalars['Boolean']['input']>;
  init?: InputMaybe<Scalars['Boolean']['input']>;
  licensePlates: Array<InventoryReconciliationGenerateDto>;
  warehouseId: Scalars['ID']['input'];
};


export type MutationMoveStockToLicensePlateArgs = {
  input: LicensePlateMovementCreateInputDto;
};


export type MutationMoveStockToLicensePlateTaskGroupArgs = {
  input: LicensePlateMovementCreateInputDto;
};


export type MutationPauseOneScheduledJobArgs = {
  input: UpdateScheduledJobByIdInputDto;
};


export type MutationPostGoodsIssueArgs = {
  fulfillmentId: Scalars['ID']['input'];
};


export type MutationPostGoodsReceiptArgs = {
  deliveryId: Scalars['ID']['input'];
};


export type MutationProcessReturnDeliveryArgs = {
  input: DeliveryProcessReturnDto;
};


export type MutationRemoveFulfillmentBlockArgs = {
  input: FulfillmentUnblockInput;
};


export type MutationRemoveStockFromInventoryArgs = {
  licensePlatesToRemove: Array<StockRemoveDto>;
};


export type MutationResolveNonCompliantBarcodesArgs = {
  input: NonCompliantBarcodeResolveInputType;
};


export type MutationResumeOneScheduledJobArgs = {
  input: UpdateScheduledJobByIdInputDto;
};


export type MutationSetUserDefaultLayoutArgs = {
  input: LayoutUserSetDefaultInput;
};


export type MutationShortShipFulfillmentArgs = {
  fulfillmentId: Scalars['ID']['input'];
};


export type MutationStartOnePhysicalInventoryTaskByBinArgs = {
  taskId: Scalars['String']['input'];
};


export type MutationStartTaskArgs = {
  input: TaskStartDto;
};


export type MutationStartTaskGroupArgs = {
  input: TaskGroupStartDto;
};


export type MutationSysAdminCreateSapOutboundDeliveriesArgs = {
  outboundDeliveryData: SysAdminOutboundDeliveryCreateDtoInput;
};


export type MutationUpdateJobStatusArgs = {
  id: Scalars['ID']['input'];
  status: JobStatus;
};


export type MutationUpdateLpStockStatusByStockTypeHuUserStatusArgs = {
  input: Array<TaskLpStockStatusHuUserStatusUpdateDto>;
};


export type MutationUpdateLicensePlateSyncJobArgs = {
  id: Scalars['ID']['input'];
  updateLicensePlateSyncJob: LicensePlateSyncJobUpdateOneDto;
};


export type MutationUpdateManyActiveSystemConnectionsArgs = {
  input: SystemConnectionUpdateActiveDto;
};


export type MutationUpdateManyBinStatusMappingsArgs = {
  input: BinStatusMappingInputDto;
};


export type MutationUpdateManyLicensePlateSlocArgs = {
  input: Array<LicensePlateUpdateManySlocDto>;
};


export type MutationUpdateManyLicensePlateStatusMappingsArgs = {
  input: LicensePlateStatusMappingInputDto;
};


export type MutationUpdateOneAgentConfigurationArgs = {
  agentId: Scalars['ID']['input'];
  update: AgentConfigurationUpdate;
};


export type MutationUpdateOneAisleArgs = {
  input: AisleUpdateOneInput;
};


export type MutationUpdateOneAisleColumnArgs = {
  input: AisleColumnUpdateOneInput;
};


export type MutationUpdateOneAreaArgs = {
  input: AreaUpdateOneInput;
};


export type MutationUpdateOneBarcodeArgs = {
  input: BarcodeUpdateOneInput;
};


export type MutationUpdateOneBarcodeTemplateMappingArgs = {
  input: BarcodeTemplateMappingUpdateOneInput;
};


export type MutationUpdateOneBinArgs = {
  input: BinUpdateOneInput;
};


export type MutationUpdateOneBinSizeArgs = {
  input: BinSizeUpdateOneInput;
};


export type MutationUpdateOneBusinessPartnerArgs = {
  input: BusinessPartnerUpdateOneInput;
};


export type MutationUpdateOneCompanyArgs = {
  input: CompanyUpdateOneInput;
};


export type MutationUpdateOneContactInfoArgs = {
  input: ContactInfoUpdateOneInput;
};


export type MutationUpdateOneContactInfoByCompanyIdArgs = {
  input: UpdateContactInfoInputDto;
};


export type MutationUpdateOneContactInfoByOrganizationIdArgs = {
  input: UpdateContactInfoInputDto;
};


export type MutationUpdateOneContactInfoByWarehouseIdArgs = {
  input: UpdateContactInfoInputDto;
};


export type MutationUpdateOneContractArgs = {
  input: ContractUpdateOneInput;
};


export type MutationUpdateOneContractRuleArgs = {
  input: ContractRuleUpdateOneInput;
};


export type MutationUpdateOneDeliveryArgs = {
  input: UpdateOneDeliveryInput;
};


export type MutationUpdateOneDeliveryItemArgs = {
  input: DeliveryItemUpdateOneInput;
};


export type MutationUpdateOneDisplayPreferenceArgs = {
  input: DisplayPreferenceUpdateOneInput;
};


export type MutationUpdateOneDisplayPreferenceByCompanyIdArgs = {
  input: DisplayPreferenceUpdateInputDto;
};


export type MutationUpdateOneDisplayPreferenceByOrganizationIdArgs = {
  input: DisplayPreferenceUpdateInputDto;
};


export type MutationUpdateOneDisplayPreferenceByUserIdArgs = {
  input: DisplayPreferenceUpdateInputDto;
};


export type MutationUpdateOneDisplayPreferenceByWarehouseIdArgs = {
  input: DisplayPreferenceUpdateInputDto;
};


export type MutationUpdateOneDispositionArgs = {
  input: UpdateOneDispositionInput;
};


export type MutationUpdateOneDoorArgs = {
  input: DoorUpdateOneInput;
};


export type MutationUpdateOneEffectiveContractMappingArgs = {
  input: EffectiveContractMappingUpdateOneInput;
};


export type MutationUpdateOneEquipmentItemArgs = {
  input: EquipmentUpdateOneInput;
};


export type MutationUpdateOneEquipmentModelArgs = {
  input: EquipmentModelUpdateOneInput;
};


export type MutationUpdateOneEquipmentTypeArgs = {
  input: EquipmentTypeUpdateOneInput;
};


export type MutationUpdateOneFulfillmentBlockArgs = {
  input: UpdateOneFulfillmentBlockInput;
};


export type MutationUpdateOneFulfillmentItemArgs = {
  input: FulfillmentItemUpdateOneInput;
};


export type MutationUpdateOneIntegrationLogArgs = {
  input: IntegrationLogUpdateOneInput;
};


export type MutationUpdateOneInvoiceArgs = {
  input: InvoiceUpdateOneInput;
};


export type MutationUpdateOneInvoiceItemArgs = {
  input: InvoiceItemUpdateOneInput;
};


export type MutationUpdateOneLicensePlateArgs = {
  input: LicensePlateUpdateOneInput;
};


export type MutationUpdateOneLotArgs = {
  input: LotUpdateOneInput;
};


export type MutationUpdateOneOrganizationArgs = {
  input: OrganizationUpdateOneInput;
};


export type MutationUpdateOneProductArgs = {
  input: ProductUpdateOneInput;
};


export type MutationUpdateOneReplenishmentArgs = {
  input: ReplenishmentUpdateOneInput;
};


export type MutationUpdateOneSapBinFfAreaArgs = {
  input: SapBinFfAreaUpdateOneInput;
};


export type MutationUpdateOneSapDeliveryDocumentTypeArgs = {
  input: SapDeliveryDocumentTypeUpdateOneInput;
};


export type MutationUpdateOneSapHuUserStatusArgs = {
  input: SapHuUserStatusUpdateOneInput;
};


export type MutationUpdateOneScheduledJobArgs = {
  input: UpdateScheduledJobInputDto;
};


export type MutationUpdateOneSharedLayoutArgs = {
  input: LayoutSharedUpdateInput;
};


export type MutationUpdateOneSlottingConfigurationArgs = {
  input: SlottingConfigurationUpdateOneInput;
};


export type MutationUpdateOneSlottingDatasetArgs = {
  input: SlottingDatasetUpdateOneInput;
};


export type MutationUpdateOneSlottingExclusionArgs = {
  input: SlottingExclusionUpdateOneInput;
};


export type MutationUpdateOneSlottingRulesetArgs = {
  input: SlottingRulesetUpdateOneInput;
};


export type MutationUpdateOneSlottingRulesetDraftToCompleteRulesetArgs = {
  input: SlottingRulesetUpdateOneInput;
};


export type MutationUpdateOneStockStatusTypeArgs = {
  input: UpdateStockStatusTypeInputDto;
};


export type MutationUpdateOneTaskArgs = {
  input: UpdateOneTaskInput;
};


export type MutationUpdateOneTaskGroupArgs = {
  input: TaskGroupUpdateOneInput;
};


export type MutationUpdateOneTaskTypeArgs = {
  input: TaskTypeUpdateOneInput;
};


export type MutationUpdateOneTaskTypeBinStatusMappingArgs = {
  input: TaskTypeBinStatusReplaceInputDto;
};


export type MutationUpdateOneTaskTypeStockStatusMappingArgs = {
  input: TaskTypeStockStatusMappingReplaceInputDto;
};


export type MutationUpdateOneTeamArgs = {
  input: TeamUpdateOneInput;
};


export type MutationUpdateOneUnitOfMeasureGlossaryArgs = {
  input: UnitOfMeasureGlossaryUpdateOneInput;
};


export type MutationUpdateOneUserArgs = {
  input: UserUpdateOneInput;
};


export type MutationUpdateOneUserGroupArgs = {
  input: UserGroupUpdateInput;
};


export type MutationUpdateOneUserLayoutArgs = {
  input: LayoutUserUpdateInput;
};


export type MutationUpdateOneUserTeamMappingArgs = {
  input: UserTeamMappingUpdateOneInput;
};


export type MutationUpdateOneUserWarehouseDefaultArgs = {
  input: UserWarehouseDefaultUpdateOneInput;
};


export type MutationUpdateOneWarehouseArgs = {
  input: WarehouseUpdateOneInput;
};


export type MutationUpdateOneWarehouseConfigurationArgs = {
  input: WarehouseConfigurationUpdateOneInput;
};


export type MutationUpdateOneWarehousePathArgs = {
  input: WarehousePathUpdateOneInput;
};


export type MutationUpdateOneWarehousePreferredUnitOfMeasureArgs = {
  input: WarehousePreferredUnitOfMeasureUpdateOneInput;
};


export type MutationUpdateOneWarehouseRoleTypeArgs = {
  input: WarehouseRoleTypeUpdateOneInput;
};


export type MutationUpdateOneZoneArgs = {
  input: ZoneUpdateOneInput;
};


export type MutationUpdatePermissionsForRoleArgs = {
  input: UpdatePermissionsForRoleDto;
};


export type MutationUpdatePostTransferOrderJobArgs = {
  id: Scalars['ID']['input'];
  updatePostTransferOrderJob: PostTransferOrderJobUpdateOneDto;
};


export type MutationUpdateProxyUrlArgs = {
  proxyUrl: Scalars['String']['input'];
};


export type MutationUpdateRolesForUserGroupArgs = {
  input: UpdateRolesForUserGroupDto;
};


export type MutationUpdateUsersForUserGroupArgs = {
  input: UpdateUsersForUserGroupMappingInput;
};

export type NonCompliantBarcode = {
  __typename?: 'NonCompliantBarcode';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Delivery associated with the entity */
  deliveryCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Non compliant barcode resolution status */
  resolved: Scalars['Boolean']['output'];
  /** Raw barcode scan data */
  scanData: Scalars['String']['output'];
  /** Barcode symbology */
  symbology: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Business partner name */
  vendor?: Maybe<Scalars['String']['output']>;
  /** Business partner code */
  vendorCode?: Maybe<Scalars['String']['output']>;
};

export type NonCompliantBarcodeFilter = {
  and?: InputMaybe<Array<NonCompliantBarcodeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deliveryCode?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<NonCompliantBarcodeFilter>>;
  resolved?: InputMaybe<BooleanFieldComparison>;
  scanData?: InputMaybe<StringFieldComparison>;
  symbology?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  vendor?: InputMaybe<StringFieldComparison>;
  vendorCode?: InputMaybe<StringFieldComparison>;
};

export type NonCompliantBarcodeOffsetConnection = {
  __typename?: 'NonCompliantBarcodeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<NonCompliantBarcode>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type NonCompliantBarcodeResolveInput = {
  /** list of ids to update */
  ids: Array<Scalars['ID']['input']>;
};

export type NonCompliantBarcodeResolveInputType = {
  resolveNonCompliantBarcodes: NonCompliantBarcodeResolveInput;
};

export type NonCompliantBarcodeSort = {
  direction: SortDirection;
  field: NonCompliantBarcodeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum NonCompliantBarcodeSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DeliveryCode = 'deliveryCode',
  Id = 'id',
  Resolved = 'resolved',
  ScanData = 'scanData',
  Symbology = 'symbology',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  Vendor = 'vendor',
  VendorCode = 'vendorCode'
}

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float']['input'];
  upper: Scalars['Float']['input'];
};

export enum NumberFormat {
  WholeCommasFractionalPeriod = 'WHOLE_COMMAS_FRACTIONAL_PERIOD',
  WholePeriodFractionalComma = 'WHOLE_PERIOD_FRACTIONAL_COMMA',
  WholeSpaceFractionalComma = 'WHOLE_SPACE_FRACTIONAL_COMMA'
}

export type NumberFormatFilterComparison = {
  eq?: InputMaybe<NumberFormat>;
  gt?: InputMaybe<NumberFormat>;
  gte?: InputMaybe<NumberFormat>;
  iLike?: InputMaybe<NumberFormat>;
  in?: InputMaybe<Array<NumberFormat>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<NumberFormat>;
  lt?: InputMaybe<NumberFormat>;
  lte?: InputMaybe<NumberFormat>;
  neq?: InputMaybe<NumberFormat>;
  notILike?: InputMaybe<NumberFormat>;
  notIn?: InputMaybe<Array<NumberFormat>>;
  notLike?: InputMaybe<NumberFormat>;
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderedTaskGroupResponse = {
  __typename?: 'OrderedTaskGroupResponse';
  /** Task group with steps in recommended completion order */
  orderedTaskGroupSteps: Array<OrderedTaskGroupStep>;
};

export type OrderedTaskGroupStep = {
  __typename?: 'OrderedTaskGroupStep';
  /** Identifies if a task is being started or completed */
  startOrFinish: StartOrFinish;
  /** Position in order within a task group */
  stepNumber: Scalars['Int']['output'];
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['output'];
  /** Task type code */
  taskTypeCode: Scalars['String']['output'];
  /** Total number of steps within a task group */
  totalSteps: Scalars['Int']['output'];
};

/** Organization model */
export type Organization = {
  __typename?: 'Organization';
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  companies?: Maybe<CompanyNodes>;
  contactInfo?: Maybe<ContactInfo>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  displayPreference?: Maybe<DisplayPreference>;
  displayPreferenceId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Number of users allowed in an organization */
  userLimit: Scalars['Int']['output'];
};

export type OrganizationCreateInput = {
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** ApiDocs */
  name: Scalars['String']['input'];
  /** Number of users allowed in an organization */
  userLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationCreateOneInput = {
  /** The record to create */
  organization: OrganizationCreateInput;
};

export type OrganizationFilter = {
  and?: InputMaybe<Array<OrganizationFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrganizationFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  userLimit?: InputMaybe<IntFieldComparison>;
};

export type OrganizationOffsetConnection = {
  __typename?: 'OrganizationOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Organization>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrganizationSort = {
  direction: SortDirection;
  field: OrganizationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrganizationSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  UserLimit = 'userLimit'
}

export type OrganizationUpdateInput = {
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Number of users allowed in an organization */
  userLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: OrganizationUpdateInput;
};

export enum PmInventoryCategory {
  Executable = 'EXECUTABLE',
  Planned = 'PLANNED'
}

export type PmInventoryCategoryFilterComparison = {
  eq?: InputMaybe<PmInventoryCategory>;
  gt?: InputMaybe<PmInventoryCategory>;
  gte?: InputMaybe<PmInventoryCategory>;
  iLike?: InputMaybe<PmInventoryCategory>;
  in?: InputMaybe<Array<PmInventoryCategory>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<PmInventoryCategory>;
  lt?: InputMaybe<PmInventoryCategory>;
  lte?: InputMaybe<PmInventoryCategory>;
  neq?: InputMaybe<PmInventoryCategory>;
  notILike?: InputMaybe<PmInventoryCategory>;
  notIn?: InputMaybe<Array<PmInventoryCategory>>;
  notLike?: InputMaybe<PmInventoryCategory>;
};

export type Permission = {
  __typename?: 'Permission';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description: Scalars['String']['output'];
  grouping: PermissionGrouping;
  /** Entity ID */
  id: Scalars['ID']['output'];
  subject: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type PermissionDimension = {
  __typename?: 'PermissionDimension';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  field: Scalars['String']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity ID */
  permissionId: Scalars['ID']['output'];
  /** Entity ID */
  roleId: Scalars['ID']['output'];
  subject: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  value: Scalars['String']['output'];
};

export type PermissionFilter = {
  and?: InputMaybe<Array<PermissionFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  grouping?: InputMaybe<PermissionGroupingFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PermissionFilter>>;
  subject?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export enum PermissionGrouping {
  AgentConfiguration = 'AGENT_CONFIGURATION',
  Aisle = 'AISLE',
  AisleColumn = 'AISLE_COLUMN',
  Area = 'AREA',
  Barcode = 'BARCODE',
  Bin = 'BIN',
  BinSize = 'BIN_SIZE',
  BinStatus = 'BIN_STATUS',
  BinStatusMapping = 'BIN_STATUS_MAPPING',
  BusinessPartner = 'BUSINESS_PARTNER',
  Company = 'COMPANY',
  ContactInfo = 'CONTACT_INFO',
  Contract = 'CONTRACT',
  ContractRule = 'CONTRACT_RULE',
  CountArtifact = 'COUNT_ARTIFACT',
  Delivery = 'DELIVERY',
  DeliveryItem = 'DELIVERY_ITEM',
  DisplayPreference = 'DISPLAY_PREFERENCE',
  Disposition = 'DISPOSITION',
  Door = 'DOOR',
  EffectiveContractMapping = 'EFFECTIVE_CONTRACT_MAPPING',
  Equipment = 'EQUIPMENT',
  EquipmentModel = 'EQUIPMENT_MODEL',
  EquipmentType = 'EQUIPMENT_TYPE',
  Fulfillment = 'FULFILLMENT',
  FulfillmentBlock = 'FULFILLMENT_BLOCK',
  FulfillmentItem = 'FULFILLMENT_ITEM',
  History = 'HISTORY',
  IntegrationLog = 'INTEGRATION_LOG',
  InternalStockOrder = 'INTERNAL_STOCK_ORDER',
  Inventory = 'INVENTORY',
  InventoryReconciliation = 'INVENTORY_RECONCILIATION',
  Invoice = 'INVOICE',
  InvoiceItem = 'INVOICE_ITEM',
  Layout = 'LAYOUT',
  LicensePlate = 'LICENSE_PLATE',
  LicensePlateStatus = 'LICENSE_PLATE_STATUS',
  LicensePlateStatusMapping = 'LICENSE_PLATE_STATUS_MAPPING',
  Lot = 'LOT',
  Map = 'MAP',
  NonCompliantBarcode = 'NON_COMPLIANT_BARCODE',
  Organization = 'ORGANIZATION',
  Page = 'PAGE',
  Permission = 'PERMISSION',
  Product = 'PRODUCT',
  Role = 'ROLE',
  RolePermissionMapping = 'ROLE_PERMISSION_MAPPING',
  SapBinFfArea = 'SAP_BIN_FF_AREA',
  SapDeliveryDocumentType = 'SAP_DELIVERY_DOCUMENT_TYPE',
  SapStockStatus = 'SAP_STOCK_STATUS',
  SapStorageLocationPlant = 'SAP_STORAGE_LOCATION_PLANT',
  SlottingConfiguration = 'SLOTTING_CONFIGURATION',
  SlottingDataframe = 'SLOTTING_DATAFRAME',
  SlottingDataset = 'SLOTTING_DATASET',
  SlottingExclusion = 'SLOTTING_EXCLUSION',
  SlottingRuleset = 'SLOTTING_RULESET',
  SlottingRun = 'SLOTTING_RUN',
  StockStatusType = 'STOCK_STATUS_TYPE',
  SystemConnection = 'SYSTEM_CONNECTION',
  Task = 'TASK',
  TaskType = 'TASK_TYPE',
  TaskTypeBinStatusMapping = 'TASK_TYPE_BIN_STATUS_MAPPING',
  TaskTypeStockStatusMapping = 'TASK_TYPE_STOCK_STATUS_MAPPING',
  Team = 'TEAM',
  UnitOfMeasure = 'UNIT_OF_MEASURE',
  UnitOfMeasureGlossary = 'UNIT_OF_MEASURE_GLOSSARY',
  User = 'USER',
  UserGroup = 'USER_GROUP',
  UserTeamMapping = 'USER_TEAM_MAPPING',
  Warehouse = 'WAREHOUSE',
  WarehouseConfiguration = 'WAREHOUSE_CONFIGURATION',
  WarehouseOpFileRow = 'WAREHOUSE_OP_FILE_ROW',
  WarehousePath = 'WAREHOUSE_PATH',
  WarehousePreferredUom = 'WAREHOUSE_PREFERRED_UOM',
  WarehouseRoleType = 'WAREHOUSE_ROLE_TYPE',
  Zone = 'ZONE'
}

export type PermissionGroupingFilterComparison = {
  eq?: InputMaybe<PermissionGrouping>;
  gt?: InputMaybe<PermissionGrouping>;
  gte?: InputMaybe<PermissionGrouping>;
  iLike?: InputMaybe<PermissionGrouping>;
  in?: InputMaybe<Array<PermissionGrouping>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<PermissionGrouping>;
  lt?: InputMaybe<PermissionGrouping>;
  lte?: InputMaybe<PermissionGrouping>;
  neq?: InputMaybe<PermissionGrouping>;
  notILike?: InputMaybe<PermissionGrouping>;
  notIn?: InputMaybe<Array<PermissionGrouping>>;
  notLike?: InputMaybe<PermissionGrouping>;
};

export type PermissionOffsetConnection = {
  __typename?: 'PermissionOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Permission>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PermissionSort = {
  direction: SortDirection;
  field: PermissionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PermissionSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Grouping = 'grouping',
  Id = 'id',
  Subject = 'subject',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export enum PhysicalInventoryCountType {
  BlindCount = 'blindCount',
  DetailCount = 'detailCount',
  GuidedCount = 'guidedCount'
}

export type PhysicalInventoryCountTypeFilterComparison = {
  eq?: InputMaybe<PhysicalInventoryCountType>;
  gt?: InputMaybe<PhysicalInventoryCountType>;
  gte?: InputMaybe<PhysicalInventoryCountType>;
  iLike?: InputMaybe<PhysicalInventoryCountType>;
  in?: InputMaybe<Array<PhysicalInventoryCountType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<PhysicalInventoryCountType>;
  lt?: InputMaybe<PhysicalInventoryCountType>;
  lte?: InputMaybe<PhysicalInventoryCountType>;
  neq?: InputMaybe<PhysicalInventoryCountType>;
  notILike?: InputMaybe<PhysicalInventoryCountType>;
  notIn?: InputMaybe<Array<PhysicalInventoryCountType>>;
  notLike?: InputMaybe<PhysicalInventoryCountType>;
};

/** Planogram model */
export type Planogram = {
  __typename?: 'Planogram';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  planogramToBins?: Maybe<Array<PlanogramToBin>>;
  /** Entity code */
  radius: Scalars['Float']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
  /** Entity code */
  x: Scalars['Float']['output'];
};

export type PlanogramBinMaterials = {
  __typename?: 'PlanogramBinMaterials';
  destination_bin: Scalars['String']['output'];
  destination_zone_code?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  line_items: Scalars['String']['output'];
  material: Scalars['String']['output'];
  /** Entity ID */
  run_id?: Maybe<Scalars['ID']['output']>;
  source_bin: Scalars['String']['output'];
  source_zone_code?: Maybe<Scalars['String']['output']>;
};

export type PlanogramBinMaterialsFilter = {
  and?: InputMaybe<Array<PlanogramBinMaterialsFilter>>;
  destination_bin?: InputMaybe<StringFieldComparison>;
  destination_zone_code?: InputMaybe<StringFieldComparison>;
  distance?: InputMaybe<FloatFieldComparison>;
  line_items?: InputMaybe<StringFieldComparison>;
  material?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PlanogramBinMaterialsFilter>>;
  run_id?: InputMaybe<IdFilterComparison>;
  source_bin?: InputMaybe<StringFieldComparison>;
  source_zone_code?: InputMaybe<StringFieldComparison>;
};

export type PlanogramBinMaterialsOffsetConnection = {
  __typename?: 'PlanogramBinMaterialsOffsetConnection';
  /** Array of nodes. */
  nodes: Array<PlanogramBinMaterials>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PlanogramBinMaterialsSort = {
  direction: SortDirection;
  field: PlanogramBinMaterialsSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PlanogramBinMaterialsSortFields {
  DestinationBin = 'destination_bin',
  DestinationZoneCode = 'destination_zone_code',
  Distance = 'distance',
  LineItems = 'line_items',
  Material = 'material',
  RunId = 'run_id',
  SourceBin = 'source_bin',
  SourceZoneCode = 'source_zone_code'
}

export type PlanogramCreateOneInput = {
  /** The record to create */
  planogram: PlanogramCreateType;
};

export type PlanogramCreateType = {
  /** Entity's human readable name */
  code: Scalars['String']['input'];
  /** Entity's human readable name */
  description: Scalars['String']['input'];
  /** Json data to generate a warehouse planogram */
  warehouseId: Scalars['JSON']['input'];
};

export type PlanogramFilter = {
  and?: InputMaybe<Array<PlanogramFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PlanogramFilter>>;
  radius?: InputMaybe<FloatFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  x?: InputMaybe<FloatFieldComparison>;
};

export type PlanogramOffsetConnection = {
  __typename?: 'PlanogramOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Planogram>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PlanogramSort = {
  direction: SortDirection;
  field: PlanogramSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PlanogramSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Radius = 'radius',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId',
  X = 'x'
}

export type PlanogramToBin = {
  __typename?: 'PlanogramToBin';
  bin?: Maybe<Bin>;
  /** Entity's warehouse (foreign key) */
  binId: Scalars['ID']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's warehouse (foreign key) */
  order?: Maybe<Scalars['Int']['output']>;
  /** Entity's warehouse (foreign key) */
  planogramId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  x?: Maybe<Scalars['Float']['output']>;
};

export type PostTransferOrderJobUpdateOneDto = {
  /** Entity's area ID (foreign key) */
  areaId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's bin ID (foreign key) */
  binId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's door ID (foreign key) */
  doorId?: InputMaybe<Scalars['ID']['input']>;
  /** Internal Stock Order Type ID */
  exitPoint?: InputMaybe<Scalars['Boolean']['input']>;
  /** Internal Stock Order Type Code */
  internalStockOrderTypeCode?: InputMaybe<Scalars['String']['input']>;
  /** Internal Stock Order Type ID */
  internalStockOrderTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  userId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export enum ProcessingOperation {
  DatasetFetch = 'datasetFetch',
  FulfillmentSync = 'fulfillmentSync',
  InventoryReconciliation = 'inventoryReconciliation',
  LicensePlateRemoval = 'licensePlateRemoval',
  LicensePlateSync = 'licensePlateSync',
  LotMasterSync = 'lotMasterSync',
  PhysicalInventoryPost = 'physicalInventoryPost',
  PickToDockWorkflow = 'pickToDockWorkflow',
  ProductUomMasterSync = 'productUomMasterSync',
  PutawayWorkfow = 'putawayWorkfow',
  ReworkAndQualityWorkflow = 'reworkAndQualityWorkflow',
  SeegridAgvDispatch = 'seegridAgvDispatch',
  SlottingRun = 'slottingRun',
  StockStatusSync = 'stockStatusSync',
  StorageLocationSync = 'storageLocationSync',
  StorageUnitEnqueue = 'storageUnitEnqueue',
  TransferOrderPost = 'transferOrderPost'
}

export type ProcessingOperationFilterComparison = {
  eq?: InputMaybe<ProcessingOperation>;
  gt?: InputMaybe<ProcessingOperation>;
  gte?: InputMaybe<ProcessingOperation>;
  iLike?: InputMaybe<ProcessingOperation>;
  in?: InputMaybe<Array<ProcessingOperation>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ProcessingOperation>;
  lt?: InputMaybe<ProcessingOperation>;
  lte?: InputMaybe<ProcessingOperation>;
  neq?: InputMaybe<ProcessingOperation>;
  notILike?: InputMaybe<ProcessingOperation>;
  notIn?: InputMaybe<Array<ProcessingOperation>>;
  notLike?: InputMaybe<ProcessingOperation>;
};

export enum ProcessingStatus {
  Complete = 'complete',
  Failed = 'failed',
  PartialComplete = 'partialComplete',
  PreFlight = 'preFlight',
  Processing = 'processing',
  Queued = 'queued',
  Unknown = 'unknown'
}

export type ProcessingStatusFilterComparison = {
  eq?: InputMaybe<ProcessingStatus>;
  gt?: InputMaybe<ProcessingStatus>;
  gte?: InputMaybe<ProcessingStatus>;
  iLike?: InputMaybe<ProcessingStatus>;
  in?: InputMaybe<Array<ProcessingStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ProcessingStatus>;
  lt?: InputMaybe<ProcessingStatus>;
  lte?: InputMaybe<ProcessingStatus>;
  neq?: InputMaybe<ProcessingStatus>;
  notILike?: InputMaybe<ProcessingStatus>;
  notIn?: InputMaybe<Array<ProcessingStatus>>;
  notLike?: InputMaybe<ProcessingStatus>;
};

/** Product model */
export type Product = {
  __typename?: 'Product';
  active?: Maybe<Scalars['Boolean']['output']>;
  /** Business partner ID */
  businessPartnerId: Scalars['ID']['output'];
  /** Entity code */
  code: Scalars['String']['output'];
  company?: Maybe<Company>;
  /** Entity's company ID (foreign key) */
  companyId: Scalars['ID']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** When data was created in ERP */
  erpCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** When data was last updated in ERP */
  erpUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Gross weight of entity */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Product GTIN */
  gtin?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Whether the product is lot managed or not */
  lotManaged?: Maybe<Scalars['Boolean']['output']>;
  lots?: Maybe<LotNodes>;
  /** Name of product */
  name?: Maybe<Scalars['String']['output']>;
  /** Net weight of entity */
  netWeight?: Maybe<Scalars['Float']['output']>;
  /** Status of product */
  status?: Maybe<ProductAvailability>;
  /** Entity's total weight in the unit of measure */
  totalWeightUOMId?: Maybe<Scalars['String']['output']>;
  /** Type of product */
  type?: Maybe<Scalars['String']['output']>;
  unitOfMeasures?: Maybe<UnitOfMeasureProductConversionNodes>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Volume of entity */
  volume?: Maybe<Scalars['Float']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: Maybe<Scalars['String']['output']>;
};

export enum ProductAvailability {
  Available = 'available',
  Blocked = 'blocked'
}

export type ProductAvailabilityFilterComparison = {
  eq?: InputMaybe<ProductAvailability>;
  gt?: InputMaybe<ProductAvailability>;
  gte?: InputMaybe<ProductAvailability>;
  iLike?: InputMaybe<ProductAvailability>;
  in?: InputMaybe<Array<ProductAvailability>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ProductAvailability>;
  lt?: InputMaybe<ProductAvailability>;
  lte?: InputMaybe<ProductAvailability>;
  neq?: InputMaybe<ProductAvailability>;
  notILike?: InputMaybe<ProductAvailability>;
  notIn?: InputMaybe<Array<ProductAvailability>>;
  notLike?: InputMaybe<ProductAvailability>;
};

export type ProductCreateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Business partner ID */
  businessPartnerId: Scalars['ID']['input'];
  /** Entity code */
  code: Scalars['String']['input'];
  /** Entity's company ID (foreign key) */
  companyId: Scalars['ID']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** When data was created in ERP */
  erpCreatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** When data was last updated in ERP */
  erpUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Gross weight of entity */
  grossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Product GTIN */
  gtin?: InputMaybe<Scalars['String']['input']>;
  /** Whether the product is lot managed or not */
  lotManaged?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of product */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Net weight of entity */
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Status of product */
  status?: InputMaybe<ProductAvailability>;
  /** Entity's total weight in the unit of measure */
  totalWeightUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Type of product */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Volume of entity */
  volume?: InputMaybe<Scalars['Float']['input']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type ProductCreateOneInput = {
  /** The record to create */
  product: ProductCreateInput;
};

export type ProductFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<ProductFilter>>;
  businessPartnerId?: InputMaybe<IdFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  erpCreatedAt?: InputMaybe<DateFieldComparison>;
  erpUpdatedAt?: InputMaybe<DateFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  gtin?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lotManaged?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  netWeight?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<ProductFilter>>;
  status?: InputMaybe<ProductAvailabilityFilterComparison>;
  totalWeightUOMId?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  volume?: InputMaybe<FloatFieldComparison>;
  volumeUOMId?: InputMaybe<StringFieldComparison>;
};

/** Product Movement model */
export type ProductMovement = {
  __typename?: 'ProductMovement';
  /** Entity's bin ID (foreign key) */
  binId: Scalars['ID']['output'];
  category: InventoryCategory;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  deliveryItemId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  fulfillmentItemId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's user ID (foreign key) */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Entity's lot ID (foreign key) */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['output'];
  /** Quantity of product moved */
  quantity: Scalars['String']['output'];
  /** Entity's stock status type ID (foreign key) */
  stockStatusTypeId?: Maybe<Scalars['ID']['output']>;
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's user ID (foreign key) */
  userId: Scalars['ID']['output'];
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type ProductNodes = {
  __typename?: 'ProductNodes';
  nodes: Array<Product>;
};

export type ProductOffsetConnection = {
  __typename?: 'ProductOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Product>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductQueryShape = {
  __typename?: 'ProductQueryShape';
  /** Entity code */
  baseUOMCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  baseUOMId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  code: Scalars['String']['output'];
  /** Entity's company ID (foreign key) */
  companyId: Scalars['ID']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** When data was created in ERP */
  erpCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** When data was last updated in ERP */
  erpUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Gross weight of entity */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Product GTIN */
  gtin?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Whether the product is lot managed or not */
  lotManaged?: Maybe<Scalars['Boolean']['output']>;
  /** Name of product */
  name?: Maybe<Scalars['String']['output']>;
  /** Net weight of entity */
  netWeight?: Maybe<Scalars['Float']['output']>;
  /** Status of product */
  status?: Maybe<ProductAvailability>;
  /** Volume in unit of measure for entity */
  totalWeightUOMCode?: Maybe<Scalars['String']['output']>;
  /** Entity's total weight in the unit of measure */
  totalWeightUOMId?: Maybe<Scalars['String']['output']>;
  /** Volume in unit of measure for entity */
  totalWeightUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Type of product */
  type?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Volume of entity */
  volume?: Maybe<Scalars['Float']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMCode?: Maybe<Scalars['String']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: Maybe<Scalars['String']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMLabel?: Maybe<Scalars['String']['output']>;
};

export type ProductQueryShapeFilter = {
  and?: InputMaybe<Array<ProductQueryShapeFilter>>;
  baseUOMCode?: InputMaybe<StringFieldComparison>;
  baseUOMId?: InputMaybe<IdFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  erpCreatedAt?: InputMaybe<DateFieldComparison>;
  erpUpdatedAt?: InputMaybe<DateFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  gtin?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lotManaged?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  netWeight?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<ProductQueryShapeFilter>>;
  status?: InputMaybe<ProductAvailabilityFilterComparison>;
  totalWeightUOMCode?: InputMaybe<StringFieldComparison>;
  totalWeightUOMId?: InputMaybe<StringFieldComparison>;
  totalWeightUOMLabel?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  volume?: InputMaybe<FloatFieldComparison>;
  volumeUOMCode?: InputMaybe<StringFieldComparison>;
  volumeUOMId?: InputMaybe<StringFieldComparison>;
  volumeUOMLabel?: InputMaybe<StringFieldComparison>;
};

export type ProductQueryShapeOffsetConnection = {
  __typename?: 'ProductQueryShapeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ProductQueryShape>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProductQueryShapeSort = {
  direction: SortDirection;
  field: ProductQueryShapeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductQueryShapeSortFields {
  BaseUomCode = 'baseUOMCode',
  BaseUomId = 'baseUOMId',
  Code = 'code',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Description = 'description',
  ErpCreatedAt = 'erpCreatedAt',
  ErpUpdatedAt = 'erpUpdatedAt',
  GrossWeight = 'grossWeight',
  Gtin = 'gtin',
  Id = 'id',
  LotManaged = 'lotManaged',
  Name = 'name',
  NetWeight = 'netWeight',
  Status = 'status',
  TotalWeightUomCode = 'totalWeightUOMCode',
  TotalWeightUomId = 'totalWeightUOMId',
  TotalWeightUomLabel = 'totalWeightUOMLabel',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Volume = 'volume',
  VolumeUomCode = 'volumeUOMCode',
  VolumeUomId = 'volumeUOMId',
  VolumeUomLabel = 'volumeUOMLabel'
}

/** Product Search results */
export type ProductSearchResults = {
  __typename?: 'ProductSearchResults';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  erpUpdatedAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  index?: Maybe<Scalars['String']['output']>;
  lotManaged?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ProductSort = {
  direction: SortDirection;
  field: ProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductSortFields {
  Active = 'active',
  BusinessPartnerId = 'businessPartnerId',
  Code = 'code',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  ErpCreatedAt = 'erpCreatedAt',
  ErpUpdatedAt = 'erpUpdatedAt',
  GrossWeight = 'grossWeight',
  Gtin = 'gtin',
  Id = 'id',
  LotManaged = 'lotManaged',
  Name = 'name',
  NetWeight = 'netWeight',
  Status = 'status',
  TotalWeightUomId = 'totalWeightUOMId',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  Volume = 'volume',
  VolumeUomId = 'volumeUOMId'
}

export type ProductUomCreateOrUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Business partner ID */
  businessPartnerId: Scalars['ID']['input'];
  /** Entity code */
  code: Scalars['String']['input'];
  /** Entity's company ID (foreign key) */
  companyId: Scalars['ID']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** When data was created in ERP */
  erpCreatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** When data was last updated in ERP */
  erpUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Gross weight of entity */
  grossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Product GTIN */
  gtin?: InputMaybe<Scalars['String']['input']>;
  /** Whether the product is lot managed or not */
  lotManaged?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of product */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Net weight of entity */
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Status of product */
  status?: InputMaybe<ProductAvailability>;
  /** Entity's total weight in the unit of measure */
  totalWeightUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Type of product */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Product unit of measure conversions */
  unitOfMeasureConversions: Array<UnitOfMeasureProductConversionCreateForProductDto>;
  /** Volume of entity */
  volume?: InputMaybe<Scalars['Float']['input']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: InputMaybe<Scalars['String']['input']>;
};

export type ProductUomCreateOrUpdateManyInput = {
  /** Array of records to create */
  productsUoms: Array<ProductUomCreateOrUpdateInput>;
  /** Entity ID */
  warehouseId: Scalars['ID']['input'];
};

export type ProductUomCreateOrUpdateOneInput = {
  /** The record to create */
  productUoms: ProductUomCreateOrUpdateInput;
  /** Entity ID */
  warehouseId: Scalars['ID']['input'];
};

export type ProductUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Business partner ID */
  businessPartnerId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Entity's company ID (foreign key) */
  companyId?: InputMaybe<Scalars['ID']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** When data was created in ERP */
  erpCreatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** When data was last updated in ERP */
  erpUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Gross weight of entity */
  grossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Product GTIN */
  gtin?: InputMaybe<Scalars['String']['input']>;
  /** Whether the product is lot managed or not */
  lotManaged?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of product */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Net weight of entity */
  netWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Status of product */
  status?: InputMaybe<ProductAvailability>;
  /** Entity's total weight in the unit of measure */
  totalWeightUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Type of product */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Volume of entity */
  volume?: InputMaybe<Scalars['Float']['input']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: ProductUpdateInput;
};

/** Proxy configuration model */
export type ProxyConfig = {
  __typename?: 'ProxyConfig';
  /** Agent configurations */
  agents: Array<AgentConfiguration>;
  /** Proxy URL */
  proxyUrl?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  adminTaskType: AdminTaskType;
  /** Get all agent configurations */
  agentConfigurations: ProxyConfig;
  aisle: Aisle;
  aisleColumn: AisleColumn;
  aisleColumns: AisleColumnOffsetConnection;
  aisles: AisleOffsetConnection;
  allBarcodeEntities: Array<AllBarcodeEntities>;
  area: Area;
  areas: AreaOffsetConnection;
  barcode: Barcode;
  barcodeMapping: BarcodeMapping;
  barcodeMappings: BarcodeMappingOffsetConnection;
  barcodeTemplate: BarcodeTemplate;
  barcodeTemplateMapping: BarcodeTemplateMapping;
  barcodeTemplateMappings: BarcodeTemplateMappingOffsetConnection;
  barcodeTemplates: BarcodeTemplateOffsetConnection;
  barcodes: BarcodeOffsetConnection;
  baseInventory: InventoryBaseQueryShapeOffsetConnection;
  baseInventoryAll: InventoryBaseQueryShapeOffsetConnection;
  bin: Bin;
  binCountApprovalTasks: ApproveBinCountTaskQueryModelOffsetConnection;
  binSize: BinSize;
  binSizes: BinSizeOffsetConnection;
  binStatus: BinStatus;
  binStatusMapping: BinStatusMapping;
  binStatusMappings: BinStatusMappingOffsetConnection;
  binStatuses: BinStatusOffsetConnection;
  bins: BinOffsetConnection;
  binsForPickTask: Array<BinForPickTask>;
  binsTest: Array<Scalars['String']['output']>;
  businessPartner: BusinessPartner;
  businessPartners: BusinessPartnerOffsetConnection;
  companies: CompanyOffsetConnection;
  company: Company;
  contactInfo: ContactInfo;
  contactInfos: ContactInfoOffsetConnection;
  contract: Contract;
  contractRule: ContractRule;
  contractRules: ContractRuleOffsetConnection;
  contracts: ContractOffsetConnection;
  convertQuantityToAllUoM: UnitOfMeasureConversionResource;
  datasetMaterials: DatasetMaterialsOffsetConnection;
  deliveries: DeliveryOffsetConnection;
  delivery: Delivery;
  deliveryItem: DeliveryItem;
  deliveryItems: DeliveryItemOffsetConnection;
  deliveryItemsToPutaway: Array<DeliveryItemDetails>;
  deliveryItemsToUnload: Array<DeliveryItemDetails>;
  deployedRun?: Maybe<SlottingRun>;
  /** returns a list of valid destination bins by task type */
  destinationBinsForTaskType: TaskTypeBinStatusDestinationBins;
  displayPreference: DisplayPreference;
  displayPreferences: DisplayPreferenceOffsetConnection;
  disposition: Disposition;
  dispositions: DispositionOffsetConnection;
  door: Door;
  doors: DoorOffsetConnection;
  edge: Edge;
  edges: EdgeOffsetConnection;
  effectiveContractMapping: EffectiveContractMapping;
  effectiveContractMappings: EffectiveContractMappingOffsetConnection;
  equipmentItem: EquipmentItem;
  equipmentItems: EquipmentItemOffsetConnection;
  equipmentModel: EquipmentModel;
  equipmentModels: EquipmentModelOffsetConnection;
  equipmentType: EquipmentType;
  equipmentTypes: EquipmentTypeOffsetConnection;
  erpConflictByLicensePlate: LpErpConflictResponseDto;
  /** count products by partial string. */
  esCountQuery: Scalars['Int']['output'];
  /** Search products by partial string. */
  esSearchQuery: GlobalSearchResultWithAggs;
  ewmDeliveryFromDetails: EwmDelivery;
  ewmDeliveryFromScan: EwmDelivery;
  ewmWarehouseOrders: EwmWarehouseOrderOffsetConnection;
  ewmWarehouseTasks: EwmWarehouseTaskOffsetConnection;
  fulfillmentBlock: FulfillmentBlock;
  fulfillmentBlocks: FulfillmentBlockOffsetConnection;
  fulfillmentItem: FulfillmentItem;
  fulfillmentItems: FulfillmentItemOffsetConnection;
  fulfillmentItemsToLoad: Array<FulfillmentItemDetails>;
  fulfillmentItemsToPick: Array<FulfillmentItemDetails>;
  getBinToBinWarehousePaths: Array<Array<Scalars['String']['output']>>;
  /** Get directions for shortest path for several picks */
  getDirections: Array<Array<Array<Scalars['Float']['output']>>>;
  getLpsForFulfillmentItem: Array<LpForFulfillmentItem>;
  getPlanogramBinInventory: PlanogramBinMaterialsOffsetConnection;
  getSapHuDetailsByCode: SapHuDetailsResponse;
  /** Get warehouse mapping data by shipping point */
  getSapWarehouseMapping: Array<SapWarehouseMapping>;
  /** Get slotting suggestions */
  getSlotting: Scalars['JSON']['output'];
  getTaskTypeAnalytics: TaskTypeAnalyticsResponse;
  integrationLog: IntegrationLog;
  integrationLogs: IntegrationLogOffsetConnection;
  internalStockOrder: InternalStockOrder;
  internalStockOrderAssignedInventory: InternalStockOrderAssignedInventoryOffsetConnection;
  internalStockOrderType: InternalStockOrderType;
  internalStockOrderTypes: InternalStockOrderTypeOffsetConnection;
  internalStockOrders: InternalStockOrderOffsetConnection;
  invalidStockStatusForBinCount: Array<StockStatusType>;
  invoice: Invoice;
  invoiceItem: InvoiceItem;
  invoiceItems: InvoiceItemOffsetConnection;
  invoices: InvoiceOffsetConnection;
  isTaskAssignedToTeam: Scalars['Boolean']['output'];
  latestInventoryReconciliation: InventoryReconciliationQueryModelOffsetConnection;
  latestInventoryReconciliationMetadata: InventoryReconciliationMetaQueryModelOffsetConnection;
  layout: Layout;
  layouts: LayoutOffsetConnection;
  licensePlate: LicensePlate;
  licensePlateDetails: LicensePlateDetailOffsetConnection;
  licensePlateDetailsAllBins: LicensePlateDetailOffsetConnection;
  licensePlateInventory: LicensePlateDetailQueryModelOffsetConnection;
  licensePlateInventoryAll: LicensePlateDetailQueryModelOffsetConnection;
  licensePlateStatus: LicensePlateStatus;
  licensePlateStatusMapping: LicensePlateStatusMapping;
  licensePlateStatusMappings: LicensePlateStatusMappingOffsetConnection;
  licensePlateStatuses: LicensePlateStatusOffsetConnection;
  licensePlates: LicensePlateOffsetConnection;
  licensePlatesForPickTask: Array<LicensePlateForPickTask>;
  lot: Lot;
  lotInventory: InventoryLotQueryShapeOffsetConnection;
  lots: LotOffsetConnection;
  map: Map;
  maps: MapOffsetConnection;
  mobileConfiguration: MobileConfigurationModel;
  mobileMotd: MobileMotdModel;
  mobileViewTasks: MobileViewTaskOffsetConnection;
  nonCompliantBarcodes: NonCompliantBarcodeOffsetConnection;
  orderStepsForTaskGroup: OrderedTaskGroupResponse;
  organization: Organization;
  organizations: OrganizationOffsetConnection;
  permissions: PermissionOffsetConnection;
  permittedWarehouses: Array<UserPermittedWarehousesResponseDto>;
  planogram: Planogram;
  planograms: PlanogramOffsetConnection;
  product: Product;
  productInventory: InventoryProductQueryShapeOffsetConnection;
  products: ProductOffsetConnection;
  queueJob?: Maybe<QueueJobModel>;
  randomBin: Bin;
  randomBinFromArea: Bin;
  randomStorageAreaForWarehouse: Area;
  readByCode: StockStatusType;
  /** Reads a fulfillment by provided delivery code.  If the fulfillment is not within the fulfilld system it is retrieved from SAP */
  readByDeliveryCode: Scalars['String']['output'];
  /** Reads a delivery by provided delivery code.  If the delivery is not within the fulfilld system it is retrieved from SAP. */
  readDeliveryByDeliveryCode: Delivery;
  rearrangementRecommendations: RearrangementRecommendationOffsetConnection;
  replenishment: Replenishment;
  replenishments: ReplenishmentOffsetConnection;
  role: Role;
  rolePermissionMappings: RolePermissionMappingOffsetConnection;
  roles: RoleOffsetConnection;
  salesOrder: SapSalesOrder;
  salesOrderItems: Array<SapSalesOrderItem>;
  sapBinFFArea: SapBinFfArea;
  sapBinFFAreas: SapBinFfAreaOffsetConnection;
  sapBinMappingsByBinId: Array<SapBinFfArea>;
  sapDatasetVariants: SlottingDatasetVariants;
  sapDeliveryDocumentType: SapDeliveryDocumentType;
  sapDeliveryDocumentTypes: SapDeliveryDocumentTypeOffsetConnection;
  sapHuStatus: SapHuStatus;
  sapHuStatuss: SapHuStatusOffsetConnection;
  sapHuUserStatus: SapHuUserStatus;
  sapHuUserStatuss: SapHuUserStatusOffsetConnection;
  sapLogicalBinMappings: SapLogicalBinMappingOffsetConnection;
  sapSSOEnabled: Scalars['Boolean']['output'];
  sapStockStatusByCode: SapStockStatusType;
  sapStockStatusType: SapStockStatusType;
  sapStockStatusTypes: SapStockStatusTypeOffsetConnection;
  sapStorageLocationPlant: SapStorageLocationPlant;
  sapStorageLocationPlants: SapStorageLocationPlantOffsetConnection;
  sapVariantPlantSlocWarehouse: SlottingDatasetVariantPlantSlocWh;
  /** Get warehouse mapping data by warehouse ID */
  sapWarehousePlantMappings: Array<SapWarehouseMapping>;
  scheduledJob: ScheduledJob;
  scheduledJobType: ScheduledJobType;
  scheduledJobTypes: ScheduledJobTypeOffsetConnection;
  scheduledJobs: ScheduledJobOffsetConnection;
  slottingAbcAnalysis: SlottingAbcAnalysisOffsetConnection;
  slottingConfiguration: SlottingConfiguration;
  slottingConfigurations: SlottingConfigurationOffsetConnection;
  slottingDataFrames: SlottingDataFrameOffsetConnection;
  slottingDataset: SlottingDataset;
  slottingDatasets: SlottingDatasetOffsetConnection;
  slottingExclusion: SlottingExclusion;
  slottingExclusions: SlottingExclusionOffsetConnection;
  slottingInventory: SlottingInventoryOffsetConnection;
  slottingRuleset: SlottingRuleset;
  slottingRulesets: SlottingRulesetOffsetConnection;
  slottingRun: SlottingRun;
  slottingRuns: SlottingRunOffsetConnection;
  smartScan: SmartScanResource;
  /** returns a list of valid bins by task type */
  sourceBinsForTaskType: TaskTypeBinStatusSourceBins;
  stockStatusType: StockStatusType;
  stockStatusTypes: StockStatusTypeOffsetConnection;
  stuckSyncJob?: Maybe<QueueJobModel>;
  supportTicket: Scalars['String']['output'];
  supportTickets: Scalars['String']['output'];
  systemConnection: SystemConnection;
  systemConnections: SystemConnectionOffsetConnection;
  task: Task;
  taskGroup: TaskGroup;
  taskGroups: TaskGroupOffsetConnection;
  taskType: TaskType;
  taskTypes: TaskTypeOffsetConnection;
  tasks: TaskOffsetConnection;
  team: Team;
  teams: TeamOffsetConnection;
  unitOfMeasureGlossaries: UnitOfMeasureGlossaryOffsetConnection;
  unitOfMeasureGlossary: UnitOfMeasureGlossary;
  unitOfMeasureProductConversion: UnitOfMeasureProductConversion;
  unitOfMeasureProductConversions: UnitOfMeasureProductConversionOffsetConnection;
  unitOfMeasureWarehousePreference: Array<UnitOfMeasureGlossary>;
  user: User;
  userGroupMappings: UserGroupMappingOffsetConnection;
  userGroups: UserGroupOffsetConnection;
  userInfo: User;
  userPermissions: Array<UserPermissionsResponseDto>;
  userTeamMapping: UserTeamMapping;
  userTeamMappings: UserTeamMappingOffsetConnection;
  userWarehouseDefault: UserWarehouseDefault;
  userWarehouseDefaults: UserWarehouseDefaultOffsetConnection;
  users: UserOffsetConnection;
  validateTask: TaskValidationErrorModel;
  /** @deprecated obsolete - move to validateTask */
  validateTaskType: TaskValidationErrorModel;
  vertex: Vertex;
  vertices: VertexOffsetConnection;
  viewAreas: ViewAreaOffsetConnection;
  viewBarcodes: ViewBarcodeOffsetConnection;
  viewBinSizes: ViewBinSizeOffsetConnection;
  viewBins: ViewBinOffsetConnection;
  viewCountArtifacts: CountArtifactQueryModelOffsetConnection;
  viewDeliveries: ViewDeliveryOffsetConnection;
  viewDelivery: ViewDelivery;
  viewDeliveryItem: ViewDeliveryItem;
  viewDeliveryItems: ViewDeliveryItemOffsetConnection;
  viewDoors: ViewDoorOffsetConnection;
  viewEquipmentModels: ViewEquipmentModelOffsetConnection;
  viewEquipmentTypes: EquipmentTypeQueryShapeOffsetConnection;
  viewEquipments: ViewEquipmentOffsetConnection;
  viewFulfillmentItem: ViewFulfillmentItem;
  viewFulfillmentItems: ViewFulfillmentItemOffsetConnection;
  viewHistoryFieldDiffs: ViewHistoryFieldDiffOffsetConnection;
  viewLostAndFoundInventory: ViewLostAndFoundOffsetConnection;
  viewLots: ViewLotOffsetConnection;
  viewMapAisles: ViewMapAisleOffsetConnection;
  viewMapBins: ViewMapBinOffsetConnection;
  viewProducts: ProductQueryShapeOffsetConnection;
  viewSapBinFFArea: ViewSapBinFfArea;
  viewSapBinFFAreas: ViewSapBinFfAreaOffsetConnection;
  viewSlottingExclusions: ViewSlottingExclusionOffsetConnection;
  viewSlottingRulesets: ViewSlottingRulesetOffsetConnection;
  viewStockStatuses: ViewStockStatusOffsetConnection;
  viewTaskGroups: ViewTaskGroupOffsetConnection;
  viewTaskTypeBinStatusMappings: ViewTaskTypeBinStatusMappingOffsetConnection;
  viewTaskTypeStockStatusMappings: ViewTaskTypeStockStatusMappingOffsetConnection;
  viewTasks: ViewTaskOffsetConnection;
  viewTasksForTeam: ViewTaskOffsetConnection;
  viewTeam: ViewTeam;
  viewTeams: ViewTeamOffsetConnection;
  viewUnitOfMeasureProductConversions: ViewUnitOfMeasureProductConversionOffsetConnection;
  viewUserGroups: ViewUserGroupOffsetConnection;
  viewUsers: ViewUserOffsetConnection;
  viewWarehousePaths: WarehousePathQueryModelOffsetConnection;
  viewWarehouseRoleTypes: WarehouseRoleTypeQueryShapeOffsetConnection;
  viewZoneAisleColumns: ViewZoneAisleColumnOffsetConnection;
  viewZoneAisles: ViewZoneAisleOffsetConnection;
  viewZoneAreas: ViewZoneAreaOffsetConnection;
  viewZoneBinsMapped: ViewZoneBinMappedOffsetConnection;
  viewZoneBinsUnmapped: ViewZoneBinUnmappedOffsetConnection;
  viewZones: ViewZoneOffsetConnection;
  warehouse: Warehouse;
  warehouseConfiguration: WarehouseConfiguration;
  warehouseCountTypes: Array<PhysicalInventoryCountType>;
  warehouseOpFile: WarehouseOpFile;
  warehouseOpFileRow: WarehouseOpFileRow;
  warehouseOpFileRows: WarehouseOpFileRowOffsetConnection;
  warehouseOpFiles: WarehouseOpFileOffsetConnection;
  warehousePath: WarehousePath;
  warehousePaths: WarehousePathOffsetConnection;
  warehousePreferredUnitOfMeasure: WarehousePreferredUnitOfMeasure;
  warehousePreferredUnitOfMeasures: WarehousePreferredUnitOfMeasureOffsetConnection;
  warehouseRoleType: WarehouseRoleType;
  warehouseRoleTypes: WarehouseRoleTypeOffsetConnection;
  warehouses: WarehouseOffsetConnection;
  zone: Zone;
  zones: ZoneOffsetConnection;
};


export type QueryAdminTaskTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAisleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAisleColumnArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAisleColumnsArgs = {
  filter?: InputMaybe<AisleColumnFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<AisleColumnSort>>;
};


export type QueryAislesArgs = {
  filter?: InputMaybe<AisleFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<AisleSort>>;
};


export type QueryAreaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAreasArgs = {
  filter?: InputMaybe<AreaFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<AreaSort>>;
};


export type QueryBarcodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBarcodeMappingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBarcodeMappingsArgs = {
  filter?: InputMaybe<BarcodeMappingFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<BarcodeMappingSort>>;
};


export type QueryBarcodeTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBarcodeTemplateMappingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBarcodeTemplateMappingsArgs = {
  filter?: InputMaybe<BarcodeTemplateMappingFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<BarcodeTemplateMappingSort>>;
};


export type QueryBarcodeTemplatesArgs = {
  filter?: InputMaybe<BarcodeTemplateFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<BarcodeTemplateSort>>;
};


export type QueryBarcodesArgs = {
  filter?: InputMaybe<BarcodeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<BarcodeSort>>;
};


export type QueryBaseInventoryArgs = {
  filter?: InputMaybe<InventoryBaseQueryShapeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<InventoryBaseQueryShapeSort>>;
};


export type QueryBaseInventoryAllArgs = {
  filter?: InputMaybe<InventoryBaseQueryShapeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<InventoryBaseQueryShapeSort>>;
};


export type QueryBinArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBinCountApprovalTasksArgs = {
  filter?: InputMaybe<ApproveBinCountTaskQueryModelFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ApproveBinCountTaskQueryModelSort>>;
};


export type QueryBinSizeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBinSizesArgs = {
  filter?: InputMaybe<BinSizeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<BinSizeSort>>;
};


export type QueryBinStatusArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBinStatusMappingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBinStatusMappingsArgs = {
  filter?: InputMaybe<BinStatusMappingFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<BinStatusMappingSort>>;
};


export type QueryBinStatusesArgs = {
  filter?: InputMaybe<BinStatusFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<BinStatusSort>>;
};


export type QueryBinsArgs = {
  filter?: InputMaybe<BinFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<BinSort>>;
};


export type QueryBinsForPickTaskArgs = {
  taskId: Scalars['ID']['input'];
};


export type QueryBinsTestArgs = {
  limit: Scalars['Int']['input'];
};


export type QueryBusinessPartnerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBusinessPartnersArgs = {
  filter?: InputMaybe<BusinessPartnerFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<BusinessPartnerSort>>;
};


export type QueryCompaniesArgs = {
  filter?: InputMaybe<CompanyFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<CompanySort>>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContactInfoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContactInfosArgs = {
  filter?: InputMaybe<ContactInfoFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ContactInfoSort>>;
};


export type QueryContractArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContractRuleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContractRulesArgs = {
  filter?: InputMaybe<ContractRuleFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ContractRuleSort>>;
};


export type QueryContractsArgs = {
  filter?: InputMaybe<ContractFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ContractSort>>;
};


export type QueryConvertQuantityToAllUoMArgs = {
  quantity: Scalars['String']['input'];
  unitOfMeasureId: Scalars['ID']['input'];
};


export type QueryDatasetMaterialsArgs = {
  filter?: InputMaybe<DatasetMaterialsFilter>;
  paging?: InputMaybe<OffsetPaging>;
  run_id: Scalars['String']['input'];
  sorting?: InputMaybe<Array<DatasetMaterialsSort>>;
};


export type QueryDeliveriesArgs = {
  filter?: InputMaybe<DeliveryFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DeliverySort>>;
};


export type QueryDeliveryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDeliveryItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDeliveryItemsArgs = {
  filter?: InputMaybe<DeliveryItemFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DeliveryItemSort>>;
};


export type QueryDeliveryItemsToPutawayArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDeliveryItemsToUnloadArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDestinationBinsForTaskTypeArgs = {
  filter?: InputMaybe<TaskTypeBinStatusBinsQueryDtoFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<TaskTypeBinStatusBinsQueryDtoSort>>;
  taskTypeCode?: InputMaybe<Scalars['String']['input']>;
  taskTypeId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDisplayPreferenceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDisplayPreferencesArgs = {
  filter?: InputMaybe<DisplayPreferenceFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DisplayPreferenceSort>>;
};


export type QueryDispositionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDispositionsArgs = {
  filter?: InputMaybe<DispositionFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DispositionSort>>;
};


export type QueryDoorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDoorsArgs = {
  filter?: InputMaybe<DoorFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DoorSort>>;
};


export type QueryEdgeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEdgesArgs = {
  filter?: InputMaybe<EdgeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<EdgeSort>>;
};


export type QueryEffectiveContractMappingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEffectiveContractMappingsArgs = {
  filter?: InputMaybe<EffectiveContractMappingFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<EffectiveContractMappingSort>>;
};


export type QueryEquipmentItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEquipmentItemsArgs = {
  filter?: InputMaybe<EquipmentItemFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<EquipmentItemSort>>;
};


export type QueryEquipmentModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEquipmentModelsArgs = {
  filter?: InputMaybe<EquipmentModelFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<EquipmentModelSort>>;
};


export type QueryEquipmentTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEquipmentTypesArgs = {
  filter?: InputMaybe<EquipmentTypeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<EquipmentTypeSort>>;
};


export type QueryErpConflictByLicensePlateArgs = {
  licensePlateId: Scalars['ID']['input'];
  warehouseId: Scalars['ID']['input'];
};


export type QueryEsCountQueryArgs = {
  count: CountQuery;
};


export type QueryEsSearchQueryArgs = {
  search: SearchQuery;
};


export type QueryEwmDeliveryFromDetailsArgs = {
  input: Scalars['String']['input'];
  type: EwmDeliveryDetailOption;
};


export type QueryEwmDeliveryFromScanArgs = {
  companyId?: InputMaybe<Scalars['ID']['input']>;
  payload: Scalars['JSONObject']['input'];
  scanner: BarcodeScanner;
};


export type QueryEwmWarehouseOrdersArgs = {
  filter?: InputMaybe<EwmWarehouseOrderFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<EwmWarehouseOrderSort>>;
};


export type QueryEwmWarehouseTasksArgs = {
  filter?: InputMaybe<EwmWarehouseTaskFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<EwmWarehouseTaskSort>>;
};


export type QueryFulfillmentBlockArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFulfillmentBlocksArgs = {
  filter?: InputMaybe<FulfillmentBlockFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<FulfillmentBlockSort>>;
};


export type QueryFulfillmentItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFulfillmentItemsArgs = {
  filter?: InputMaybe<FulfillmentItemFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<FulfillmentItemSort>>;
};


export type QueryFulfillmentItemsToLoadArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFulfillmentItemsToPickArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetBinToBinWarehousePathsArgs = {
  destinationBinId: Scalars['ID']['input'];
  internalStockOrderTypeCode: Scalars['String']['input'];
  sourceBinId: Scalars['ID']['input'];
};


export type QueryGetDirectionsArgs = {
  mapping: MapQuery;
};


export type QueryGetLpsForFulfillmentItemArgs = {
  fulfillmentItemId: Scalars['String']['input'];
  warehouseId: Scalars['String']['input'];
};


export type QueryGetPlanogramBinInventoryArgs = {
  filter?: InputMaybe<PlanogramBinMaterialsFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<PlanogramBinMaterialsSort>>;
};


export type QueryGetSapHuDetailsByCodeArgs = {
  licensePlateCode: Scalars['String']['input'];
  warehouseId: Scalars['String']['input'];
};


export type QueryGetSlottingArgs = {
  createSlottingConfig: SlottingQuery;
};


export type QueryGetTaskTypeAnalyticsArgs = {
  filter: TaskTypeAnalyticsFilter;
};


export type QueryIntegrationLogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryIntegrationLogsArgs = {
  filter?: InputMaybe<IntegrationLogFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<IntegrationLogSort>>;
};


export type QueryInternalStockOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInternalStockOrderAssignedInventoryArgs = {
  filter?: InputMaybe<InternalStockOrderAssignedInventoryFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<InternalStockOrderAssignedInventorySort>>;
};


export type QueryInternalStockOrderTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInternalStockOrderTypesArgs = {
  filter?: InputMaybe<InternalStockOrderTypeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<InternalStockOrderTypeSort>>;
};


export type QueryInternalStockOrdersArgs = {
  filter?: InputMaybe<InternalStockOrderFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<InternalStockOrderSort>>;
};


export type QueryInvalidStockStatusForBinCountArgs = {
  warehouseId: Scalars['String']['input'];
};


export type QueryInvoiceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInvoiceItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInvoiceItemsArgs = {
  filter?: InputMaybe<InvoiceItemFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<InvoiceItemSort>>;
};


export type QueryInvoicesArgs = {
  filter?: InputMaybe<InvoiceFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<InvoiceSort>>;
};


export type QueryIsTaskAssignedToTeamArgs = {
  taskId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};


export type QueryLatestInventoryReconciliationArgs = {
  filter?: InputMaybe<InventoryReconciliationQueryModelFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<InventoryReconciliationQueryModelSort>>;
};


export type QueryLatestInventoryReconciliationMetadataArgs = {
  filter?: InputMaybe<InventoryReconciliationMetaQueryModelFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<InventoryReconciliationMetaQueryModelSort>>;
  warehouseId: Scalars['String']['input'];
};


export type QueryLayoutArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLayoutsArgs = {
  filter?: InputMaybe<LayoutFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<LayoutSort>>;
};


export type QueryLicensePlateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLicensePlateDetailsArgs = {
  filter?: InputMaybe<LicensePlateDetailFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<LicensePlateDetailSort>>;
};


export type QueryLicensePlateDetailsAllBinsArgs = {
  filter?: InputMaybe<LicensePlateDetailFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<LicensePlateDetailSort>>;
};


export type QueryLicensePlateInventoryArgs = {
  filter?: InputMaybe<LicensePlateDetailQueryModelFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<LicensePlateDetailQueryModelSort>>;
};


export type QueryLicensePlateInventoryAllArgs = {
  filter?: InputMaybe<LicensePlateDetailQueryModelFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<LicensePlateDetailQueryModelSort>>;
};


export type QueryLicensePlateStatusArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLicensePlateStatusMappingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLicensePlateStatusMappingsArgs = {
  filter?: InputMaybe<LicensePlateStatusMappingFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<LicensePlateStatusMappingSort>>;
};


export type QueryLicensePlateStatusesArgs = {
  filter?: InputMaybe<LicensePlateStatusFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<LicensePlateStatusSort>>;
};


export type QueryLicensePlatesArgs = {
  filter?: InputMaybe<LicensePlateFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<LicensePlateSort>>;
};


export type QueryLicensePlatesForPickTaskArgs = {
  taskId: Scalars['ID']['input'];
};


export type QueryLotArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLotInventoryArgs = {
  filter?: InputMaybe<InventoryLotQueryShapeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<InventoryLotQueryShapeSort>>;
};


export type QueryLotsArgs = {
  filter?: InputMaybe<LotFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<LotSort>>;
};


export type QueryMapArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMapsArgs = {
  filter?: InputMaybe<MapFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<MapSort>>;
};


export type QueryMobileConfigurationArgs = {
  context?: InputMaybe<FeatureContext>;
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMobileViewTasksArgs = {
  filter?: InputMaybe<MobileViewTaskFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<MobileViewTaskSort>>;
};


export type QueryNonCompliantBarcodesArgs = {
  filter?: InputMaybe<NonCompliantBarcodeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<NonCompliantBarcodeSort>>;
};


export type QueryOrderStepsForTaskGroupArgs = {
  binCode: Scalars['String']['input'];
  taskGroupId: Scalars['ID']['input'];
};


export type QueryOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrganizationsArgs = {
  filter?: InputMaybe<OrganizationFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<OrganizationSort>>;
};


export type QueryPermissionsArgs = {
  filter?: InputMaybe<PermissionFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<PermissionSort>>;
};


export type QueryPlanogramArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlanogramsArgs = {
  filter?: InputMaybe<PlanogramFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<PlanogramSort>>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductInventoryArgs = {
  filter?: InputMaybe<InventoryProductQueryShapeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<InventoryProductQueryShapeSort>>;
};


export type QueryProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProductSort>>;
};


export type QueryQueueJobArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRandomBinArgs = {
  warehouseId: Scalars['ID']['input'];
};


export type QueryRandomBinFromAreaArgs = {
  areaId: Scalars['ID']['input'];
};


export type QueryRandomStorageAreaForWarehouseArgs = {
  warehouseId: Scalars['ID']['input'];
};


export type QueryReadByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryReadByDeliveryCodeArgs = {
  deliveryCode: Scalars['String']['input'];
};


export type QueryReadDeliveryByDeliveryCodeArgs = {
  deliveryCode: Scalars['String']['input'];
};


export type QueryRearrangementRecommendationsArgs = {
  filter?: InputMaybe<RearrangementRecommendationFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<RearrangementRecommendationSort>>;
};


export type QueryReplenishmentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReplenishmentsArgs = {
  filter?: InputMaybe<ReplenishmentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ReplenishmentSort>>;
};


export type QueryRoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRolePermissionMappingsArgs = {
  filter?: InputMaybe<RolePermissionMappingFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<RolePermissionMappingSort>>;
};


export type QueryRolesArgs = {
  filter?: InputMaybe<RoleFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<RoleSort>>;
};


export type QuerySalesOrderArgs = {
  salesOrderNumber: Scalars['String']['input'];
};


export type QuerySalesOrderItemsArgs = {
  salesOrderNumber: Scalars['String']['input'];
};


export type QuerySapBinFfAreaArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySapBinFfAreasArgs = {
  filter?: InputMaybe<SapBinFfAreaFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SapBinFfAreaSort>>;
};


export type QuerySapBinMappingsByBinIdArgs = {
  binId: Scalars['String']['input'];
  warehouseId: Scalars['String']['input'];
};


export type QuerySapDeliveryDocumentTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySapDeliveryDocumentTypesArgs = {
  filter?: InputMaybe<SapDeliveryDocumentTypeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SapDeliveryDocumentTypeSort>>;
};


export type QuerySapHuStatusArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySapHuStatussArgs = {
  filter?: InputMaybe<SapHuStatusFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SapHuStatusSort>>;
};


export type QuerySapHuUserStatusArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySapHuUserStatussArgs = {
  filter?: InputMaybe<SapHuUserStatusFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SapHuUserStatusSort>>;
};


export type QuerySapLogicalBinMappingsArgs = {
  filter?: InputMaybe<SapLogicalBinMappingFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SapLogicalBinMappingSort>>;
};


export type QuerySapStockStatusByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QuerySapStockStatusTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySapStockStatusTypesArgs = {
  filter?: InputMaybe<SapStockStatusTypeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SapStockStatusTypeSort>>;
};


export type QuerySapStorageLocationPlantArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySapStorageLocationPlantsArgs = {
  filter?: InputMaybe<SapStorageLocationPlantFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SapStorageLocationPlantSort>>;
};


export type QuerySapVariantPlantSlocWarehouseArgs = {
  variantName: Scalars['String']['input'];
};


export type QuerySapWarehousePlantMappingsArgs = {
  warehouseId: Scalars['ID']['input'];
};


export type QueryScheduledJobArgs = {
  id: Scalars['ID']['input'];
};


export type QueryScheduledJobTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryScheduledJobTypesArgs = {
  filter?: InputMaybe<ScheduledJobTypeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ScheduledJobTypeSort>>;
};


export type QueryScheduledJobsArgs = {
  filter?: InputMaybe<ScheduledJobFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ScheduledJobSort>>;
};


export type QuerySlottingAbcAnalysisArgs = {
  filter?: InputMaybe<SlottingAbcAnalysisFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SlottingAbcAnalysisSort>>;
};


export type QuerySlottingConfigurationArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySlottingConfigurationsArgs = {
  filter?: InputMaybe<SlottingConfigurationFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SlottingConfigurationSort>>;
};


export type QuerySlottingDataFramesArgs = {
  filter?: InputMaybe<SlottingDataFrameFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SlottingDataFrameSort>>;
};


export type QuerySlottingDatasetArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySlottingDatasetsArgs = {
  filter?: InputMaybe<SlottingDatasetFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SlottingDatasetSort>>;
};


export type QuerySlottingExclusionArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySlottingExclusionsArgs = {
  filter?: InputMaybe<SlottingExclusionFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SlottingExclusionSort>>;
};


export type QuerySlottingInventoryArgs = {
  filter?: InputMaybe<SlottingInventoryFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SlottingInventorySort>>;
};


export type QuerySlottingRulesetArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySlottingRulesetsArgs = {
  filter?: InputMaybe<SlottingRulesetFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SlottingRulesetSort>>;
};


export type QuerySlottingRunArgs = {
  runId: Scalars['String']['input'];
};


export type QuerySlottingRunsArgs = {
  filter?: InputMaybe<SlottingRunFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SlottingRunSort>>;
};


export type QuerySmartScanArgs = {
  payload: Scalars['String']['input'];
  smartScanContext: SmartScanContext;
};


export type QuerySourceBinsForTaskTypeArgs = {
  filter?: InputMaybe<TaskTypeBinStatusBinsQueryDtoFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<TaskTypeBinStatusBinsQueryDtoSort>>;
  taskTypeCode?: InputMaybe<Scalars['String']['input']>;
  taskTypeId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStockStatusTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStockStatusTypesArgs = {
  filter?: InputMaybe<StockStatusTypeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<StockStatusTypeSort>>;
};


export type QuerySupportTicketArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemConnectionArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemConnectionsArgs = {
  filter?: InputMaybe<SystemConnectionFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SystemConnectionSort>>;
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskGroupsArgs = {
  filter?: InputMaybe<TaskGroupFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<TaskGroupSort>>;
};


export type QueryTaskTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskTypesArgs = {
  filter?: InputMaybe<TaskTypeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<TaskTypeSort>>;
};


export type QueryTasksArgs = {
  filter?: InputMaybe<TaskFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<TaskSort>>;
};


export type QueryTeamArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeamsArgs = {
  filter?: InputMaybe<TeamFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<TeamSort>>;
};


export type QueryUnitOfMeasureGlossariesArgs = {
  filter?: InputMaybe<UnitOfMeasureGlossaryFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UnitOfMeasureGlossarySort>>;
};


export type QueryUnitOfMeasureGlossaryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUnitOfMeasureProductConversionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUnitOfMeasureProductConversionsArgs = {
  filter?: InputMaybe<UnitOfMeasureProductConversionFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UnitOfMeasureProductConversionSort>>;
};


export type QueryUnitOfMeasureWarehousePreferenceArgs = {
  category: StandardUomCategory;
  warehouseId: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserGroupMappingsArgs = {
  filter?: InputMaybe<UserGroupMappingFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserGroupMappingSort>>;
};


export type QueryUserGroupsArgs = {
  filter?: InputMaybe<UserGroupFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserGroupSort>>;
};


export type QueryUserPermissionsArgs = {
  warehouseId: Scalars['ID']['input'];
};


export type QueryUserTeamMappingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserTeamMappingsArgs = {
  filter?: InputMaybe<UserTeamMappingFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserTeamMappingSort>>;
};


export type QueryUserWarehouseDefaultArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserWarehouseDefaultsArgs = {
  filter?: InputMaybe<UserWarehouseDefaultFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserWarehouseDefaultSort>>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};


export type QueryValidateTaskArgs = {
  openTasksForLicensePlate?: InputMaybe<LicensePlateTaskValidationDto>;
  taskTypeBinStatus?: InputMaybe<TaskTypeBinStatusValidationInput>;
  taskTypeBinStatusForLicensePlate?: InputMaybe<TaskTypeBinStatusForLicensePlateValidationInput>;
  taskTypeCode?: InputMaybe<Scalars['String']['input']>;
  taskTypeId?: InputMaybe<Scalars['ID']['input']>;
  taskTypeStockStatus?: InputMaybe<TaskTypeStockStatusValidationInput>;
  taskTypeStockStatusForLicensePlate?: InputMaybe<TaskTypeStockStatusForLicensePlateValidationInput>;
  warehouseId: Scalars['ID']['input'];
};


export type QueryValidateTaskTypeArgs = {
  openTasksForLicensePlate?: InputMaybe<LicensePlateTaskValidationDto>;
  taskTypeBinStatus?: InputMaybe<TaskTypeBinStatusValidationInput>;
  taskTypeBinStatusForLicensePlate?: InputMaybe<TaskTypeBinStatusForLicensePlateValidationInput>;
  taskTypeCode?: InputMaybe<Scalars['String']['input']>;
  taskTypeId?: InputMaybe<Scalars['ID']['input']>;
  taskTypeStockStatus?: InputMaybe<TaskTypeStockStatusValidationInput>;
  taskTypeStockStatusForLicensePlate?: InputMaybe<TaskTypeStockStatusForLicensePlateValidationInput>;
  warehouseId: Scalars['ID']['input'];
};


export type QueryVertexArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVerticesArgs = {
  filter?: InputMaybe<VertexFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<VertexSort>>;
};


export type QueryViewAreasArgs = {
  filter?: InputMaybe<ViewAreaFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewAreaSort>>;
};


export type QueryViewBarcodesArgs = {
  filter?: InputMaybe<ViewBarcodeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewBarcodeSort>>;
};


export type QueryViewBinSizesArgs = {
  filter?: InputMaybe<ViewBinSizeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewBinSizeSort>>;
};


export type QueryViewBinsArgs = {
  filter?: InputMaybe<ViewBinFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewBinSort>>;
};


export type QueryViewCountArtifactsArgs = {
  filter?: InputMaybe<CountArtifactQueryModelFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<CountArtifactQueryModelSort>>;
};


export type QueryViewDeliveriesArgs = {
  filter?: InputMaybe<ViewDeliveryFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewDeliverySort>>;
};


export type QueryViewDeliveryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryViewDeliveryItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryViewDeliveryItemsArgs = {
  filter?: InputMaybe<ViewDeliveryItemFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewDeliveryItemSort>>;
};


export type QueryViewDoorsArgs = {
  filter?: InputMaybe<ViewDoorFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewDoorSort>>;
};


export type QueryViewEquipmentModelsArgs = {
  filter?: InputMaybe<ViewEquipmentModelFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewEquipmentModelSort>>;
};


export type QueryViewEquipmentTypesArgs = {
  filter?: InputMaybe<EquipmentTypeQueryShapeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<EquipmentTypeQueryShapeSort>>;
};


export type QueryViewEquipmentsArgs = {
  filter?: InputMaybe<ViewEquipmentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewEquipmentSort>>;
};


export type QueryViewFulfillmentItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryViewFulfillmentItemsArgs = {
  filter?: InputMaybe<ViewFulfillmentItemFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewFulfillmentItemSort>>;
};


export type QueryViewHistoryFieldDiffsArgs = {
  filter?: InputMaybe<ViewHistoryFieldDiffFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewHistoryFieldDiffSort>>;
};


export type QueryViewLostAndFoundInventoryArgs = {
  filter?: InputMaybe<ViewLostAndFoundFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewLostAndFoundSort>>;
};


export type QueryViewLotsArgs = {
  filter?: InputMaybe<ViewLotFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewLotSort>>;
};


export type QueryViewMapAislesArgs = {
  filter?: InputMaybe<ViewMapAisleFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewMapAisleSort>>;
};


export type QueryViewMapBinsArgs = {
  filter?: InputMaybe<ViewMapBinFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewMapBinSort>>;
};


export type QueryViewProductsArgs = {
  filter?: InputMaybe<ProductQueryShapeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProductQueryShapeSort>>;
};


export type QueryViewSapBinFfAreaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryViewSapBinFfAreasArgs = {
  filter?: InputMaybe<ViewSapBinFfAreaFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewSapBinFfAreaSort>>;
};


export type QueryViewSlottingExclusionsArgs = {
  filter?: InputMaybe<ViewSlottingExclusionFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewSlottingExclusionSort>>;
};


export type QueryViewSlottingRulesetsArgs = {
  filter?: InputMaybe<ViewSlottingRulesetFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewSlottingRulesetSort>>;
};


export type QueryViewStockStatusesArgs = {
  filter?: InputMaybe<ViewStockStatusFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewStockStatusSort>>;
};


export type QueryViewTaskGroupsArgs = {
  filter?: InputMaybe<ViewTaskGroupFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewTaskGroupSort>>;
};


export type QueryViewTaskTypeBinStatusMappingsArgs = {
  filter?: InputMaybe<ViewTaskTypeBinStatusMappingFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewTaskTypeBinStatusMappingSort>>;
};


export type QueryViewTaskTypeStockStatusMappingsArgs = {
  filter?: InputMaybe<ViewTaskTypeStockStatusMappingFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewTaskTypeStockStatusMappingSort>>;
};


export type QueryViewTasksArgs = {
  filter?: InputMaybe<ViewTaskFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewTaskSort>>;
};


export type QueryViewTasksForTeamArgs = {
  filter?: InputMaybe<ViewTaskFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewTaskSort>>;
  teamId: Scalars['ID']['input'];
};


export type QueryViewTeamArgs = {
  id: Scalars['ID']['input'];
};


export type QueryViewTeamsArgs = {
  filter?: InputMaybe<ViewTeamFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewTeamSort>>;
};


export type QueryViewUnitOfMeasureProductConversionsArgs = {
  filter?: InputMaybe<ViewUnitOfMeasureProductConversionFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewUnitOfMeasureProductConversionSort>>;
};


export type QueryViewUserGroupsArgs = {
  filter?: InputMaybe<ViewUserGroupFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewUserGroupSort>>;
};


export type QueryViewUsersArgs = {
  filter?: InputMaybe<ViewUserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewUserSort>>;
};


export type QueryViewWarehousePathsArgs = {
  filter?: InputMaybe<WarehousePathQueryModelFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<WarehousePathQueryModelSort>>;
};


export type QueryViewWarehouseRoleTypesArgs = {
  filter?: InputMaybe<WarehouseRoleTypeQueryShapeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<WarehouseRoleTypeQueryShapeSort>>;
};


export type QueryViewZoneAisleColumnsArgs = {
  filter?: InputMaybe<ViewZoneAisleColumnFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewZoneAisleColumnSort>>;
};


export type QueryViewZoneAislesArgs = {
  filter?: InputMaybe<ViewZoneAisleFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewZoneAisleSort>>;
};


export type QueryViewZoneAreasArgs = {
  filter?: InputMaybe<ViewZoneAreaFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewZoneAreaSort>>;
};


export type QueryViewZoneBinsMappedArgs = {
  filter?: InputMaybe<ViewZoneBinMappedFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewZoneBinMappedSort>>;
};


export type QueryViewZoneBinsUnmappedArgs = {
  filter?: InputMaybe<ViewZoneBinUnmappedFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewZoneBinUnmappedSort>>;
};


export type QueryViewZonesArgs = {
  filter?: InputMaybe<ViewZoneFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ViewZoneSort>>;
};


export type QueryWarehouseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWarehouseConfigurationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWarehouseCountTypesArgs = {
  warehouseId: Scalars['String']['input'];
};


export type QueryWarehouseOpFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWarehouseOpFileRowArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWarehouseOpFileRowsArgs = {
  filter?: InputMaybe<WarehouseOpFileRowFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<WarehouseOpFileRowSort>>;
};


export type QueryWarehouseOpFilesArgs = {
  filter?: InputMaybe<WarehouseOpFileFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<WarehouseOpFileSort>>;
};


export type QueryWarehousePathArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWarehousePathsArgs = {
  filter?: InputMaybe<WarehousePathFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<WarehousePathSort>>;
};


export type QueryWarehousePreferredUnitOfMeasureArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWarehousePreferredUnitOfMeasuresArgs = {
  filter?: InputMaybe<WarehousePreferredUnitOfMeasureFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<WarehousePreferredUnitOfMeasureSort>>;
};


export type QueryWarehouseRoleTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWarehouseRoleTypesArgs = {
  filter?: InputMaybe<WarehouseRoleTypeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<WarehouseRoleTypeSort>>;
};


export type QueryWarehousesArgs = {
  filter?: InputMaybe<WarehouseFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<WarehouseSort>>;
};


export type QueryZoneArgs = {
  id: Scalars['ID']['input'];
};


export type QueryZonesArgs = {
  filter?: InputMaybe<ZoneFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ZoneSort>>;
};

/** QueueJob model */
export type QueueJobModel = {
  __typename?: 'QueueJobModel';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  handler?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  jobType?: Maybe<Scalars['String']['output']>;
  lastAttempt?: Maybe<Scalars['DateTime']['output']>;
  markedPreflight?: Maybe<Scalars['DateTime']['output']>;
  nextAttempt?: Maybe<Scalars['DateTime']['output']>;
  numResets?: Maybe<Scalars['Int']['output']>;
  processingStarted?: Maybe<Scalars['DateTime']['output']>;
  retries?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<JobStatus>;
};

export type RandomPutawayOutputDto = {
  __typename?: 'RandomPutawayOutputDto';
  completedTaskIds: Array<Scalars['String']['output']>;
};

export type RandomUnloadOutputDto = {
  __typename?: 'RandomUnloadOutputDto';
  completedTaskIds: Array<Scalars['String']['output']>;
};

export type RearrangementRecommendation = {
  __typename?: 'RearrangementRecommendation';
  avoid_congestion_score?: Maybe<Scalars['Float']['output']>;
  cost_saved: Scalars['Float']['output'];
  cost_uom: Scalars['String']['output'];
  current_max_quantity?: Maybe<Scalars['Float']['output']>;
  current_min_quantity?: Maybe<Scalars['Float']['output']>;
  dataset_end_date?: Maybe<Scalars['DateTime']['output']>;
  dataset_id?: Maybe<Scalars['String']['output']>;
  dataset_start_date?: Maybe<Scalars['DateTime']['output']>;
  deployed: Scalars['Boolean']['output'];
  deployed_at?: Maybe<Scalars['DateTime']['output']>;
  destination_bin: Scalars['String']['output'];
  destination_column: Scalars['String']['output'];
  destination_zone_code?: Maybe<Scalars['String']['output']>;
  destination_zone_id: Scalars['String']['output'];
  distance_saved: Scalars['Float']['output'];
  distance_uom: Scalars['String']['output'];
  fitness_score?: Maybe<Scalars['Float']['output']>;
  ground_level_score?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  lighter_to_staging_score?: Maybe<Scalars['Float']['output']>;
  material: Scalars['String']['output'];
  material_description: Scalars['String']['output'];
  movement_reason?: Maybe<Scalars['String']['output']>;
  pick_density_score?: Maybe<Scalars['Float']['output']>;
  pick_efficiency_score?: Maybe<Scalars['Float']['output']>;
  process_dt?: Maybe<Scalars['DateTime']['output']>;
  proposed_max_quantity?: Maybe<Scalars['Float']['output']>;
  proposed_min_quantity?: Maybe<Scalars['Float']['output']>;
  putaway_density_score?: Maybe<Scalars['Float']['output']>;
  putaway_efficiency_score?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  ruleset_id?: Maybe<Scalars['String']['output']>;
  ruleset_name?: Maybe<Scalars['String']['output']>;
  run_id: Scalars['String']['output'];
  run_name?: Maybe<Scalars['String']['output']>;
  source_bin: Scalars['String']['output'];
  source_column: Scalars['String']['output'];
  source_zone_code?: Maybe<Scalars['String']['output']>;
  source_zone_id: Scalars['String']['output'];
  swap_id?: Maybe<Scalars['String']['output']>;
  swap_source?: Maybe<Scalars['String']['output']>;
  task_type?: Maybe<Scalars['String']['output']>;
  time_saved: Scalars['Float']['output'];
  time_uom: Scalars['String']['output'];
  trend_7_day_line_items?: Maybe<Scalars['Float']['output']>;
  trend_7_day_quantity?: Maybe<Scalars['Float']['output']>;
  trend_all_line_items?: Maybe<Scalars['Float']['output']>;
  trend_all_quantity?: Maybe<Scalars['Float']['output']>;
  trend_uom?: Maybe<Scalars['String']['output']>;
  warehouse_id: Scalars['String']['output'];
};

export type RearrangementRecommendationFilter = {
  and?: InputMaybe<Array<RearrangementRecommendationFilter>>;
  avoid_congestion_score?: InputMaybe<FloatFieldComparison>;
  cost_saved?: InputMaybe<FloatFieldComparison>;
  cost_uom?: InputMaybe<StringFieldComparison>;
  current_max_quantity?: InputMaybe<FloatFieldComparison>;
  current_min_quantity?: InputMaybe<FloatFieldComparison>;
  dataset_end_date?: InputMaybe<DateFieldComparison>;
  dataset_id?: InputMaybe<StringFieldComparison>;
  dataset_start_date?: InputMaybe<DateFieldComparison>;
  deployed?: InputMaybe<BooleanFieldComparison>;
  deployed_at?: InputMaybe<DateFieldComparison>;
  destination_bin?: InputMaybe<StringFieldComparison>;
  destination_column?: InputMaybe<StringFieldComparison>;
  destination_zone_code?: InputMaybe<StringFieldComparison>;
  destination_zone_id?: InputMaybe<StringFieldComparison>;
  distance_saved?: InputMaybe<FloatFieldComparison>;
  distance_uom?: InputMaybe<StringFieldComparison>;
  fitness_score?: InputMaybe<FloatFieldComparison>;
  ground_level_score?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lighter_to_staging_score?: InputMaybe<FloatFieldComparison>;
  material?: InputMaybe<StringFieldComparison>;
  material_description?: InputMaybe<StringFieldComparison>;
  movement_reason?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<RearrangementRecommendationFilter>>;
  pick_density_score?: InputMaybe<FloatFieldComparison>;
  pick_efficiency_score?: InputMaybe<FloatFieldComparison>;
  process_dt?: InputMaybe<DateFieldComparison>;
  proposed_max_quantity?: InputMaybe<FloatFieldComparison>;
  proposed_min_quantity?: InputMaybe<FloatFieldComparison>;
  putaway_density_score?: InputMaybe<FloatFieldComparison>;
  putaway_efficiency_score?: InputMaybe<FloatFieldComparison>;
  quantity?: InputMaybe<FloatFieldComparison>;
  ruleset_id?: InputMaybe<StringFieldComparison>;
  ruleset_name?: InputMaybe<StringFieldComparison>;
  run_id?: InputMaybe<StringFieldComparison>;
  run_name?: InputMaybe<StringFieldComparison>;
  source_bin?: InputMaybe<StringFieldComparison>;
  source_column?: InputMaybe<StringFieldComparison>;
  source_zone_code?: InputMaybe<StringFieldComparison>;
  source_zone_id?: InputMaybe<StringFieldComparison>;
  swap_id?: InputMaybe<StringFieldComparison>;
  swap_source?: InputMaybe<StringFieldComparison>;
  task_type?: InputMaybe<StringFieldComparison>;
  time_saved?: InputMaybe<FloatFieldComparison>;
  time_uom?: InputMaybe<StringFieldComparison>;
  trend_7_day_line_items?: InputMaybe<FloatFieldComparison>;
  trend_7_day_quantity?: InputMaybe<FloatFieldComparison>;
  trend_all_line_items?: InputMaybe<FloatFieldComparison>;
  trend_all_quantity?: InputMaybe<FloatFieldComparison>;
  trend_uom?: InputMaybe<StringFieldComparison>;
  warehouse_id?: InputMaybe<StringFieldComparison>;
};

export type RearrangementRecommendationOffsetConnection = {
  __typename?: 'RearrangementRecommendationOffsetConnection';
  /** Array of nodes. */
  nodes: Array<RearrangementRecommendation>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RearrangementRecommendationSort = {
  direction: SortDirection;
  field: RearrangementRecommendationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RearrangementRecommendationSortFields {
  AvoidCongestionScore = 'avoid_congestion_score',
  CostSaved = 'cost_saved',
  CostUom = 'cost_uom',
  CurrentMaxQuantity = 'current_max_quantity',
  CurrentMinQuantity = 'current_min_quantity',
  DatasetEndDate = 'dataset_end_date',
  DatasetId = 'dataset_id',
  DatasetStartDate = 'dataset_start_date',
  Deployed = 'deployed',
  DeployedAt = 'deployed_at',
  DestinationBin = 'destination_bin',
  DestinationColumn = 'destination_column',
  DestinationZoneCode = 'destination_zone_code',
  DestinationZoneId = 'destination_zone_id',
  DistanceSaved = 'distance_saved',
  DistanceUom = 'distance_uom',
  FitnessScore = 'fitness_score',
  GroundLevelScore = 'ground_level_score',
  Id = 'id',
  LighterToStagingScore = 'lighter_to_staging_score',
  Material = 'material',
  MaterialDescription = 'material_description',
  MovementReason = 'movement_reason',
  PickDensityScore = 'pick_density_score',
  PickEfficiencyScore = 'pick_efficiency_score',
  ProcessDt = 'process_dt',
  ProposedMaxQuantity = 'proposed_max_quantity',
  ProposedMinQuantity = 'proposed_min_quantity',
  PutawayDensityScore = 'putaway_density_score',
  PutawayEfficiencyScore = 'putaway_efficiency_score',
  Quantity = 'quantity',
  RulesetId = 'ruleset_id',
  RulesetName = 'ruleset_name',
  RunId = 'run_id',
  RunName = 'run_name',
  SourceBin = 'source_bin',
  SourceColumn = 'source_column',
  SourceZoneCode = 'source_zone_code',
  SourceZoneId = 'source_zone_id',
  SwapId = 'swap_id',
  SwapSource = 'swap_source',
  TaskType = 'task_type',
  TimeSaved = 'time_saved',
  TimeUom = 'time_uom',
  Trend_7DayLineItems = 'trend_7_day_line_items',
  Trend_7DayQuantity = 'trend_7_day_quantity',
  TrendAllLineItems = 'trend_all_line_items',
  TrendAllQuantity = 'trend_all_quantity',
  TrendUom = 'trend_uom',
  WarehouseId = 'warehouse_id'
}

/** Replenishment entity model */
export type Replenishment = {
  __typename?: 'Replenishment';
  /** Maximum quantity threshold for a replenishment setting */
  autoMax?: Maybe<Scalars['Float']['output']>;
  /** Minimum quantity threshold for a replenishment setting */
  autoMin?: Maybe<Scalars['Float']['output']>;
  /** Quantity to replenish when a replenishment setting threshold is triggered */
  autoReplenishmentQuantity?: Maybe<Scalars['Float']['output']>;
  /** Entity's bin ID (foreign key) */
  binId: Scalars['ID']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Maximum quantity threshold for a manual replenishment setting */
  manualMax?: Maybe<Scalars['Float']['output']>;
  /** Minimum quantity threshold for a manual replenishment setting */
  manualMin?: Maybe<Scalars['Float']['output']>;
  /** Quantity to replenish when a manual replenishment setting threshold is triggered */
  manualReplenishmentQuantity?: Maybe<Scalars['Float']['output']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['output'];
  /** // TODO-REPLENISHMENT - figure out what this means */
  replenishmentType: ReplenishmentType;
  /** Unit of measure ID */
  unitOfMeasureId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type ReplenishmentCreateInput = {
  /** Maximum quantity threshold for a replenishment setting */
  autoMax?: InputMaybe<Scalars['Float']['input']>;
  /** Minimum quantity threshold for a replenishment setting */
  autoMin?: InputMaybe<Scalars['Float']['input']>;
  /** Quantity to replenish when a replenishment setting threshold is triggered */
  autoReplenishmentQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's bin ID (foreign key) */
  binId: Scalars['ID']['input'];
  /** Maximum quantity threshold for a manual replenishment setting */
  manualMax?: InputMaybe<Scalars['Float']['input']>;
  /** Minimum quantity threshold for a manual replenishment setting */
  manualMin?: InputMaybe<Scalars['Float']['input']>;
  /** Quantity to replenish when a manual replenishment setting threshold is triggered */
  manualReplenishmentQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Entity's warehouse (foreign key) */
  replenishmentType: ReplenishmentType;
  /** Unit of measure ID */
  unitOfMeasureId: Scalars['ID']['input'];
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type ReplenishmentCreateOneInput = {
  /** The record to create */
  replenishment: ReplenishmentCreateInput;
};

export type ReplenishmentFilter = {
  and?: InputMaybe<Array<ReplenishmentFilter>>;
  autoMax?: InputMaybe<FloatFieldComparison>;
  autoMin?: InputMaybe<FloatFieldComparison>;
  autoReplenishmentQuantity?: InputMaybe<FloatFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  manualMax?: InputMaybe<FloatFieldComparison>;
  manualMin?: InputMaybe<FloatFieldComparison>;
  manualReplenishmentQuantity?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<ReplenishmentFilter>>;
  productId?: InputMaybe<IdFilterComparison>;
  replenishmentType?: InputMaybe<ReplenishmentTypeFilterComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ReplenishmentOffsetConnection = {
  __typename?: 'ReplenishmentOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Replenishment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ReplenishmentSort = {
  direction: SortDirection;
  field: ReplenishmentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ReplenishmentSortFields {
  AutoMax = 'autoMax',
  AutoMin = 'autoMin',
  AutoReplenishmentQuantity = 'autoReplenishmentQuantity',
  BinId = 'binId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  ManualMax = 'manualMax',
  ManualMin = 'manualMin',
  ManualReplenishmentQuantity = 'manualReplenishmentQuantity',
  ProductId = 'productId',
  ReplenishmentType = 'replenishmentType',
  UnitOfMeasureId = 'unitOfMeasureId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export enum ReplenishmentType {
  Auto = 'auto',
  Manual = 'manual',
  Off = 'off'
}

export type ReplenishmentTypeFilterComparison = {
  eq?: InputMaybe<ReplenishmentType>;
  gt?: InputMaybe<ReplenishmentType>;
  gte?: InputMaybe<ReplenishmentType>;
  iLike?: InputMaybe<ReplenishmentType>;
  in?: InputMaybe<Array<ReplenishmentType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ReplenishmentType>;
  lt?: InputMaybe<ReplenishmentType>;
  lte?: InputMaybe<ReplenishmentType>;
  neq?: InputMaybe<ReplenishmentType>;
  notILike?: InputMaybe<ReplenishmentType>;
  notIn?: InputMaybe<Array<ReplenishmentType>>;
  notLike?: InputMaybe<ReplenishmentType>;
};

export type ReplenishmentUpdateInput = {
  /** Maximum quantity threshold for a replenishment setting */
  autoMax?: InputMaybe<Scalars['Float']['input']>;
  /** Minimum quantity threshold for a replenishment setting */
  autoMin?: InputMaybe<Scalars['Float']['input']>;
  /** Quantity to replenish when a replenishment setting threshold is triggered */
  autoReplenishmentQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's bin ID (foreign key) */
  binId?: InputMaybe<Scalars['ID']['input']>;
  /** Maximum quantity threshold for a manual replenishment setting */
  manualMax?: InputMaybe<Scalars['Float']['input']>;
  /** Minimum quantity threshold for a manual replenishment setting */
  manualMin?: InputMaybe<Scalars['Float']['input']>;
  /** Quantity to replenish when a manual replenishment setting threshold is triggered */
  manualReplenishmentQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's product ID (foreign key) */
  productId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  replenishmentType?: InputMaybe<ReplenishmentType>;
  /** Unit of measure ID */
  unitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type ReplenishmentUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: ReplenishmentUpdateInput;
};

export type Role = {
  __typename?: 'Role';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Determines if a roles is default */
  default: Scalars['Boolean']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type RoleCreateDto = {
  /** ApiDocs */
  name: Scalars['String']['input'];
};

export type RoleCreateInput = {
  /** ApiDocs */
  role: RoleCreateDto;
};

export type RoleDeleteInputType = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type RoleFilter = {
  and?: InputMaybe<Array<RoleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  default?: InputMaybe<BooleanFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<RoleFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type RoleOffsetConnection = {
  __typename?: 'RoleOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Role>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RolePermissionMapping = {
  __typename?: 'RolePermissionMapping';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity ID */
  permissionId: Scalars['ID']['output'];
  /** Entity ID */
  roleId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type RolePermissionMappingFilter = {
  and?: InputMaybe<Array<RolePermissionMappingFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RolePermissionMappingFilter>>;
  permissionId?: InputMaybe<IdFilterComparison>;
  roleId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type RolePermissionMappingOffsetConnection = {
  __typename?: 'RolePermissionMappingOffsetConnection';
  /** Array of nodes. */
  nodes: Array<RolePermissionMapping>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RolePermissionMappingSort = {
  direction: SortDirection;
  field: RolePermissionMappingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RolePermissionMappingSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  PermissionId = 'permissionId',
  RoleId = 'roleId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type RoleSort = {
  direction: SortDirection;
  field: RoleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RoleSortFields {
  CreatedAt = 'createdAt',
  Default = 'default',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export enum RulesetStatus {
  Complete = 'complete',
  Draft = 'draft'
}

export type RulesetStatusFilterComparison = {
  eq?: InputMaybe<RulesetStatus>;
  gt?: InputMaybe<RulesetStatus>;
  gte?: InputMaybe<RulesetStatus>;
  iLike?: InputMaybe<RulesetStatus>;
  in?: InputMaybe<Array<RulesetStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<RulesetStatus>;
  lt?: InputMaybe<RulesetStatus>;
  lte?: InputMaybe<RulesetStatus>;
  neq?: InputMaybe<RulesetStatus>;
  notILike?: InputMaybe<RulesetStatus>;
  notIn?: InputMaybe<Array<RulesetStatus>>;
  notLike?: InputMaybe<RulesetStatus>;
};

export enum RunStatus {
  Complete = 'complete',
  Deployed = 'deployed',
  Failed = 'failed',
  InProgress = 'inProgress'
}

export type RunStatusFilterComparison = {
  eq?: InputMaybe<RunStatus>;
  gt?: InputMaybe<RunStatus>;
  gte?: InputMaybe<RunStatus>;
  iLike?: InputMaybe<RunStatus>;
  in?: InputMaybe<Array<RunStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<RunStatus>;
  lt?: InputMaybe<RunStatus>;
  lte?: InputMaybe<RunStatus>;
  neq?: InputMaybe<RunStatus>;
  notILike?: InputMaybe<RunStatus>;
  notIn?: InputMaybe<Array<RunStatus>>;
  notLike?: InputMaybe<RunStatus>;
};

/** SAP sales order */
export type SapSalesOrder = {
  __typename?: 'SAPSalesOrder';
  DistributionChannel: Scalars['String']['output'];
  OrganizationDivision: Scalars['String']['output'];
  SalesOrder: Scalars['String']['output'];
  SalesOrderType: Scalars['String']['output'];
  SalesOrganization: Scalars['String']['output'];
  SoldToParty: Scalars['String']['output'];
};

export type SapSalesOrderCreateOneInput = {
  /** Date string for requested delivery date */
  requestedDeliveryDate: Scalars['String']['input'];
  /** Erp sales order */
  salesOrderNumber: Scalars['String']['input'];
};

/** SAP sales order item */
export type SapSalesOrderItem = {
  __typename?: 'SAPSalesOrderItem';
  Material: Scalars['String']['output'];
  ReferenceSDDocument: Scalars['String']['output'];
  ReferenceSDDocumentItem: Scalars['String']['output'];
  RequestedQuantity: Scalars['String']['output'];
};

export type SapBinFfArea = {
  __typename?: 'SapBinFFArea';
  /** Entity's area ID (foreign key) */
  areaId: Scalars['ID']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Sap bin code */
  sapBinCode: Scalars['String']['output'];
  /** Sap storage type code */
  sapStorageTypeCode: Scalars['String']['output'];
  /** System connection ID */
  systemConnectionId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['String']['output'];
};

export type SapBinFfAreaCreateInput = {
  /** Entity's area ID (foreign key) */
  areaId: Scalars['ID']['input'];
  /** Sap bin code */
  sapBinCode: Scalars['String']['input'];
  /** Sap storage type code */
  sapStorageTypeCode: Scalars['String']['input'];
  /** System connection ID */
  systemConnectionId: Scalars['ID']['input'];
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type SapBinFfAreaCreateOneInput = {
  /** The record to create */
  sapBinFFArea: SapBinFfAreaCreateInput;
};

export type SapBinFfAreaFilter = {
  and?: InputMaybe<Array<SapBinFfAreaFilter>>;
  areaId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SapBinFfAreaFilter>>;
  sapBinCode?: InputMaybe<StringFieldComparison>;
  sapStorageTypeCode?: InputMaybe<StringFieldComparison>;
  systemConnectionId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<StringFieldComparison>;
};

export type SapBinFfAreaOffsetConnection = {
  __typename?: 'SapBinFFAreaOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SapBinFfArea>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SapBinFfAreaSort = {
  direction: SortDirection;
  field: SapBinFfAreaSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SapBinFfAreaSortFields {
  AreaId = 'areaId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  SapBinCode = 'sapBinCode',
  SapStorageTypeCode = 'sapStorageTypeCode',
  SystemConnectionId = 'systemConnectionId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export type SapBinFfAreaUpdateInput = {
  /** Entity's area ID (foreign key) */
  areaId?: InputMaybe<Scalars['ID']['input']>;
  /** Sap bin code */
  sapBinCode?: InputMaybe<Scalars['String']['input']>;
  /** Sap storage type code */
  sapStorageTypeCode?: InputMaybe<Scalars['String']['input']>;
  /** System connection ID */
  systemConnectionId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type SapBinFfAreaUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: SapBinFfAreaUpdateInput;
};

export type SapDeliveryDocumentType = {
  __typename?: 'SapDeliveryDocumentType';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Delivery type */
  deliveryType: Scalars['String']['output'];
  /** Delivery Document Type */
  documentType: Scalars['String']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** System connection ID */
  systemConnectionId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type SapDeliveryDocumentTypeCreateInput = {
  /** Delivery type */
  deliveryType: Scalars['String']['input'];
  /** Delivery Document Type */
  documentType: Scalars['String']['input'];
  /** System connection ID */
  systemConnectionId: Scalars['ID']['input'];
};

export type SapDeliveryDocumentTypeCreateOneInput = {
  /** The record to create */
  sapDeliveryDocumentType: SapDeliveryDocumentTypeCreateInput;
};

export type SapDeliveryDocumentTypeFilter = {
  and?: InputMaybe<Array<SapDeliveryDocumentTypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deliveryType?: InputMaybe<StringFieldComparison>;
  documentType?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SapDeliveryDocumentTypeFilter>>;
  systemConnectionId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type SapDeliveryDocumentTypeOffsetConnection = {
  __typename?: 'SapDeliveryDocumentTypeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SapDeliveryDocumentType>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SapDeliveryDocumentTypeSort = {
  direction: SortDirection;
  field: SapDeliveryDocumentTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SapDeliveryDocumentTypeSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DeliveryType = 'deliveryType',
  DocumentType = 'documentType',
  Id = 'id',
  SystemConnectionId = 'systemConnectionId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type SapDeliveryDocumentTypeUpdateInput = {
  /** Delivery type */
  deliveryType?: InputMaybe<Scalars['String']['input']>;
  /** Delivery Document Type */
  documentType?: InputMaybe<Scalars['String']['input']>;
  /** System connection ID */
  systemConnectionId?: InputMaybe<Scalars['ID']['input']>;
};

export type SapDeliveryDocumentTypeUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: SapDeliveryDocumentTypeUpdateInput;
};

export type SapHuStatus = {
  __typename?: 'SapHUStatus';
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  include: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  systemConnectionId: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type SapHuStatusFilter = {
  and?: InputMaybe<Array<SapHuStatusFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  include?: InputMaybe<BooleanFieldComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SapHuStatusFilter>>;
  systemConnectionId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type SapHuStatusOffsetConnection = {
  __typename?: 'SapHUStatusOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SapHuStatus>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SapHuStatusSort = {
  direction: SortDirection;
  field: SapHuStatusSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SapHuStatusSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Include = 'include',
  Label = 'label',
  SystemConnectionId = 'systemConnectionId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type SapHuDetailsResponse = {
  __typename?: 'SapHuDetailsResponse';
  /** Sap bin code */
  erpBinCode: Scalars['String']['output'];
  /** Entity code */
  licensePlateCode: Scalars['String']['output'];
  stock?: Maybe<Array<SapHuDetailsStockResponse>>;
  /** Entity's SAP storage location ID (foreign key) */
  storageLocation: Scalars['String']['output'];
};

export type SapHuDetailsStockResponse = {
  __typename?: 'SapHuDetailsStockResponse';
  /** Entity code */
  lotCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  productCode: Scalars['String']['output'];
  /** Quantity of product */
  quantity: Scalars['String']['output'];
  /** Entity code */
  stockStatusCode: Scalars['String']['output'];
  /** Entity's label */
  stockStatusLabel: Scalars['String']['output'];
  /** Entity code */
  unitOfMeasureCode: Scalars['String']['output'];
};

export type SapHuUserStatus = {
  __typename?: 'SapHuUserStatus';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label: Scalars['String']['output'];
  /** Hu User Status Priority */
  priority?: Maybe<Scalars['Int']['output']>;
  /** System connection ID */
  systemConnectionId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type SapHuUserStatusCreateInput = {
  /** System connection ID */
  systemConnectionId: Scalars['ID']['input'];
};

export type SapHuUserStatusCreateOneInput = {
  /** The record to create */
  sapHuUserStatus: SapHuUserStatusCreateInput;
};

export type SapHuUserStatusFilter = {
  and?: InputMaybe<Array<SapHuUserStatusFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SapHuUserStatusFilter>>;
  priority?: InputMaybe<IntFieldComparison>;
  systemConnectionId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type SapHuUserStatusOffsetConnection = {
  __typename?: 'SapHuUserStatusOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SapHuUserStatus>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SapHuUserStatusSort = {
  direction: SortDirection;
  field: SapHuUserStatusSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SapHuUserStatusSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Label = 'label',
  Priority = 'priority',
  SystemConnectionId = 'systemConnectionId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type SapHuUserStatusUpdateInput = {
  /** System connection ID */
  systemConnectionId?: InputMaybe<Scalars['ID']['input']>;
};

export type SapHuUserStatusUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: SapHuUserStatusUpdateInput;
};

export type SapLogicalBinMapping = {
  __typename?: 'SapLogicalBinMapping';
  /** Entity's area ID (foreign key) */
  areaId?: Maybe<Scalars['ID']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity's door ID (foreign key) */
  doorId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  internalStockOrderTypeId?: Maybe<Scalars['ID']['output']>;
  /** Sap bin code */
  sapBinCode: Scalars['String']['output'];
  /** Sap storage type code */
  sapStorageTypeCode: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['String']['output'];
};

export type SapLogicalBinMappingFilter = {
  and?: InputMaybe<Array<SapLogicalBinMappingFilter>>;
  areaId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  doorId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  internalStockOrderTypeId?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SapLogicalBinMappingFilter>>;
  sapBinCode?: InputMaybe<StringFieldComparison>;
  sapStorageTypeCode?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<StringFieldComparison>;
};

export type SapLogicalBinMappingOffsetConnection = {
  __typename?: 'SapLogicalBinMappingOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SapLogicalBinMapping>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SapLogicalBinMappingSort = {
  direction: SortDirection;
  field: SapLogicalBinMappingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SapLogicalBinMappingSortFields {
  AreaId = 'areaId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DoorId = 'doorId',
  Id = 'id',
  InternalStockOrderTypeId = 'internalStockOrderTypeId',
  SapBinCode = 'sapBinCode',
  SapStorageTypeCode = 'sapStorageTypeCode',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

/** SAP material document header */
export type SapMaterialDocumentHeader = {
  __typename?: 'SapMaterialDocumentHeader';
  MaterialDocument: Scalars['String']['output'];
};

export enum SapMaterialMovementCode {
  GoodsIssue = 'GOODS_ISSUE',
  GoodsRecieptProductionOrder = 'GOODS_RECIEPT_PRODUCTION_ORDER',
  GoodsRecieptPurchaseOrder = 'GOODS_RECIEPT_PURCHASE_ORDER',
  OtherGoodsReceipts = 'OTHER_GOODS_RECEIPTS',
  ReversalGoodsMovement = 'REVERSAL_GOODS_MOVEMENT',
  SubsequentAdjustmentSubcontractOrder = 'SUBSEQUENT_ADJUSTMENT_SUBCONTRACT_ORDER',
  TransferPosting = 'TRANSFER_POSTING'
}

export enum SapMaterialMovementType {
  GoodsRecieptWithoutPurchaseOrder = 'GOODS_RECIEPT_WITHOUT_PURCHASE_ORDER'
}

export type SapStockStatusType = {
  __typename?: 'SapStockStatusType';
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  /** System connection ID */
  systemConnectionId?: Maybe<Scalars['ID']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type SapStockStatusTypeFilter = {
  and?: InputMaybe<Array<SapStockStatusTypeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SapStockStatusTypeFilter>>;
  systemConnectionId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type SapStockStatusTypeOffsetConnection = {
  __typename?: 'SapStockStatusTypeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SapStockStatusType>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SapStockStatusTypeSort = {
  direction: SortDirection;
  field: SapStockStatusTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SapStockStatusTypeSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Label = 'label',
  SystemConnectionId = 'systemConnectionId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type SapStorageLocationPlant = {
  __typename?: 'SapStorageLocationPlant';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** plant */
  plant: Scalars['String']['output'];
  /** Storage Location */
  storageLocation: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type SapStorageLocationPlantFilter = {
  and?: InputMaybe<Array<SapStorageLocationPlantFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SapStorageLocationPlantFilter>>;
  plant?: InputMaybe<StringFieldComparison>;
  storageLocation?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type SapStorageLocationPlantOffsetConnection = {
  __typename?: 'SapStorageLocationPlantOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SapStorageLocationPlant>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SapStorageLocationPlantSort = {
  direction: SortDirection;
  field: SapStorageLocationPlantSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SapStorageLocationPlantSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Plant = 'plant',
  StorageLocation = 'storageLocation',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type SapWarehouseMapping = {
  __typename?: 'SapWarehouseMapping';
  erpWarehouseCode?: Maybe<Scalars['String']['output']>;
  plant: Scalars['String']['output'];
  shippingPoints: Array<Scalars['String']['output']>;
  storageLocations: Array<Scalars['String']['output']>;
  warehouseId: Scalars['ID']['output'];
};

/** Scheduled Job model */
export type ScheduledJob = {
  __typename?: 'ScheduledJob';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  jobJson: Scalars['JSON']['output'];
  lastRun?: Maybe<Scalars['DateTime']['output']>;
  /** ApiDocs */
  name: Scalars['String']['output'];
  /** Entity ID */
  scheduledJobTypeId: Scalars['ID']['output'];
  /** Job state */
  state: JobState;
  /** Interval in min. should should execute */
  updateInterval: Scalars['Int']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type ScheduledJobCreateInput = {
  /** ApiDocs */
  name: Scalars['String']['input'];
  scheduledJobTypeId: Scalars['ID']['input'];
  state: JobState;
  /** Interval in min. should should execute */
  updateInterval: Scalars['Int']['input'];
};

export type ScheduledJobCreateInputDto = {
  /** The record to create */
  scheduledJob: ScheduledJobCreateInput;
};

export type ScheduledJobFilter = {
  and?: InputMaybe<Array<ScheduledJobFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastRun?: InputMaybe<DateFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ScheduledJobFilter>>;
  scheduledJobTypeId?: InputMaybe<IdFilterComparison>;
  state?: InputMaybe<JobStateFilterComparison>;
  updateInterval?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type ScheduledJobOffsetConnection = {
  __typename?: 'ScheduledJobOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ScheduledJob>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export enum ScheduledJobSchedulerType {
  New = 'NEW',
  Update = 'UPDATE'
}

export type ScheduledJobSchedulerTypeFilterComparison = {
  eq?: InputMaybe<ScheduledJobSchedulerType>;
  gt?: InputMaybe<ScheduledJobSchedulerType>;
  gte?: InputMaybe<ScheduledJobSchedulerType>;
  iLike?: InputMaybe<ScheduledJobSchedulerType>;
  in?: InputMaybe<Array<ScheduledJobSchedulerType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ScheduledJobSchedulerType>;
  lt?: InputMaybe<ScheduledJobSchedulerType>;
  lte?: InputMaybe<ScheduledJobSchedulerType>;
  neq?: InputMaybe<ScheduledJobSchedulerType>;
  notILike?: InputMaybe<ScheduledJobSchedulerType>;
  notIn?: InputMaybe<Array<ScheduledJobSchedulerType>>;
  notLike?: InputMaybe<ScheduledJobSchedulerType>;
};

export type ScheduledJobSort = {
  direction: SortDirection;
  field: ScheduledJobSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ScheduledJobSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  LastRun = 'lastRun',
  Name = 'name',
  ScheduledJobTypeId = 'scheduledJobTypeId',
  State = 'state',
  UpdateInterval = 'updateInterval',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

/** Scheduled Job Type Model */
export type ScheduledJobType = {
  __typename?: 'ScheduledJobType';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Fulfilld controller, i.e. "delivery" */
  controller: ScheduledJobTypeControllerName;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of job being executed */
  description: Scalars['String']['output'];
  /** Meta data for http call executed by GCP job */
  httpTargetJson: Scalars['JSON']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Type of job being executed, i.e. "new" */
  type: ScheduledJobSchedulerType;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export enum ScheduledJobTypeControllerName {
  Delivery = 'DELIVERY',
  Fulfillment = 'FULFILLMENT',
  Inventory = 'INVENTORY',
  Lot = 'LOT',
  Product = 'PRODUCT',
  Search = 'SEARCH',
  TaskFromFulfillment = 'TASK_FROM_FULFILLMENT',
  TaskGrouping = 'TASK_GROUPING',
  Test = 'TEST',
  WarehouseOp = 'WAREHOUSE_OP'
}

export type ScheduledJobTypeControllerNameFilterComparison = {
  eq?: InputMaybe<ScheduledJobTypeControllerName>;
  gt?: InputMaybe<ScheduledJobTypeControllerName>;
  gte?: InputMaybe<ScheduledJobTypeControllerName>;
  iLike?: InputMaybe<ScheduledJobTypeControllerName>;
  in?: InputMaybe<Array<ScheduledJobTypeControllerName>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ScheduledJobTypeControllerName>;
  lt?: InputMaybe<ScheduledJobTypeControllerName>;
  lte?: InputMaybe<ScheduledJobTypeControllerName>;
  neq?: InputMaybe<ScheduledJobTypeControllerName>;
  notILike?: InputMaybe<ScheduledJobTypeControllerName>;
  notIn?: InputMaybe<Array<ScheduledJobTypeControllerName>>;
  notLike?: InputMaybe<ScheduledJobTypeControllerName>;
};

export type ScheduledJobTypeFilter = {
  and?: InputMaybe<Array<ScheduledJobTypeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  controller?: InputMaybe<ScheduledJobTypeControllerNameFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  httpTargetJson?: InputMaybe<JsonFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ScheduledJobTypeFilter>>;
  type?: InputMaybe<ScheduledJobSchedulerTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type ScheduledJobTypeOffsetConnection = {
  __typename?: 'ScheduledJobTypeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ScheduledJobType>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ScheduledJobTypeSort = {
  direction: SortDirection;
  field: ScheduledJobTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ScheduledJobTypeSortFields {
  Code = 'code',
  Controller = 'controller',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  HttpTargetJson = 'httpTargetJson',
  Id = 'id',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type ScheduledJobUpdateInput = {
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  scheduledJobTypeId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<JobState>;
  /** Interval in min. should should execute */
  updateInterval?: InputMaybe<Scalars['Int']['input']>;
};

export type ScheduledJobUpdateStatusInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ScopedData = {
  binCode: Scalars['String']['input'];
  productCode: Scalars['String']['input'];
};

export type SearchAggTerms = {
  terms: SearchAggTermsField;
};

export type SearchAggTermsAgg = {
  termsAggregation: SearchAggTerms;
};

export type SearchAggTermsField = {
  field: Scalars['String']['input'];
};

export type SearchBodyBool = {
  bool: SearchBodyBoolBody;
};

export type SearchBodyBoolBody = {
  filter?: InputMaybe<Array<Scalars['JSONObject']['input']>>;
  minimum_should_match?: InputMaybe<Scalars['Int']['input']>;
  must?: InputMaybe<Array<SearchBodyQueryString>>;
  should?: InputMaybe<Array<SearchBodyQueryString>>;
};

export type SearchBodyNested = {
  ignore_unmapped: Scalars['Boolean']['input'];
  path: Scalars['String']['input'];
  query: SearchBodyBool;
};

export type SearchBodyQuery = {
  aggs?: InputMaybe<SearchAggTermsAgg>;
  query: SearchBodyBool;
};

export type SearchBodyQueryString = {
  bool?: InputMaybe<SearchBodyBoolBody>;
  nested?: InputMaybe<SearchBodyNested>;
  query_string?: InputMaybe<SearchBodyQueryStringBody>;
};

export type SearchBodyQueryStringBody = {
  analyze_wildcard?: InputMaybe<Scalars['Boolean']['input']>;
  default_operator?: InputMaybe<Scalars['String']['input']>;
  escape?: InputMaybe<Scalars['Boolean']['input']>;
  fields?: InputMaybe<Array<Scalars['String']['input']>>;
  query: Scalars['String']['input'];
};

export type SearchQuery = {
  body: SearchBodyQuery;
  from?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Array<EsIndices>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type SlottingAbcAnalysis = {
  __typename?: 'SlottingAbcAnalysis';
  /** Current ABC indicator */
  current_abc_indicator: Scalars['String']['output'];
  /** Date processed */
  dataset_end_date: Scalars['DateTime']['output'];
  dataset_id?: Maybe<Scalars['String']['output']>;
  /** Date processed */
  dataset_start_date: Scalars['DateTime']['output'];
  /** Deployed state */
  deployed: Scalars['Boolean']['output'];
  deployed_at?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Material */
  material: Scalars['String']['output'];
  /** Material Description */
  material_description?: Maybe<Scalars['String']['output']>;
  /** Slotting Plant (ERP) */
  plant?: Maybe<Scalars['String']['output']>;
  /** Date processed */
  process_dt: Scalars['DateTime']['output'];
  /** Proposed ABC indicator */
  proposed_abc_indicator: Scalars['String']['output'];
  ruleset_id?: Maybe<Scalars['String']['output']>;
  ruleset_name?: Maybe<Scalars['String']['output']>;
  /** Slotting run ID */
  run_id?: Maybe<Scalars['ID']['output']>;
  run_name?: Maybe<Scalars['String']['output']>;
};

export type SlottingAbcAnalysisFilter = {
  and?: InputMaybe<Array<SlottingAbcAnalysisFilter>>;
  current_abc_indicator?: InputMaybe<StringFieldComparison>;
  dataset_end_date?: InputMaybe<DateFieldComparison>;
  dataset_id?: InputMaybe<StringFieldComparison>;
  dataset_start_date?: InputMaybe<DateFieldComparison>;
  deployed?: InputMaybe<BooleanFieldComparison>;
  deployed_at?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  material?: InputMaybe<StringFieldComparison>;
  material_description?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SlottingAbcAnalysisFilter>>;
  plant?: InputMaybe<StringFieldComparison>;
  process_dt?: InputMaybe<DateFieldComparison>;
  proposed_abc_indicator?: InputMaybe<StringFieldComparison>;
  ruleset_id?: InputMaybe<StringFieldComparison>;
  ruleset_name?: InputMaybe<StringFieldComparison>;
  run_id?: InputMaybe<IdFilterComparison>;
  run_name?: InputMaybe<StringFieldComparison>;
};

export type SlottingAbcAnalysisOffsetConnection = {
  __typename?: 'SlottingAbcAnalysisOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SlottingAbcAnalysis>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SlottingAbcAnalysisSort = {
  direction: SortDirection;
  field: SlottingAbcAnalysisSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SlottingAbcAnalysisSortFields {
  CurrentAbcIndicator = 'current_abc_indicator',
  DatasetEndDate = 'dataset_end_date',
  DatasetId = 'dataset_id',
  DatasetStartDate = 'dataset_start_date',
  Deployed = 'deployed',
  DeployedAt = 'deployed_at',
  Id = 'id',
  Material = 'material',
  MaterialDescription = 'material_description',
  Plant = 'plant',
  ProcessDt = 'process_dt',
  ProposedAbcIndicator = 'proposed_abc_indicator',
  RulesetId = 'ruleset_id',
  RulesetName = 'ruleset_name',
  RunId = 'run_id',
  RunName = 'run_name'
}

export enum SlottingAnalysisStatus {
  Cancelled = 'cancelled',
  Complete = 'complete',
  Failed = 'failed',
  InProgress = 'inProgress',
  NotStarted = 'notStarted'
}

export type SlottingAnalysisStatusFilterComparison = {
  eq?: InputMaybe<SlottingAnalysisStatus>;
  gt?: InputMaybe<SlottingAnalysisStatus>;
  gte?: InputMaybe<SlottingAnalysisStatus>;
  iLike?: InputMaybe<SlottingAnalysisStatus>;
  in?: InputMaybe<Array<SlottingAnalysisStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<SlottingAnalysisStatus>;
  lt?: InputMaybe<SlottingAnalysisStatus>;
  lte?: InputMaybe<SlottingAnalysisStatus>;
  neq?: InputMaybe<SlottingAnalysisStatus>;
  notILike?: InputMaybe<SlottingAnalysisStatus>;
  notIn?: InputMaybe<Array<SlottingAnalysisStatus>>;
  notLike?: InputMaybe<SlottingAnalysisStatus>;
};

export type SlottingConfiguration = {
  __typename?: 'SlottingConfiguration';
  configuration?: Maybe<Scalars['JSON']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type SlottingConfigurationCreateInput = {
  configuration?: InputMaybe<Scalars['JSON']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type SlottingConfigurationCreateOneInput = {
  /** The record to create */
  slottingConfiguration: SlottingConfigurationCreateInput;
};

export type SlottingConfigurationFilter = {
  and?: InputMaybe<Array<SlottingConfigurationFilter>>;
  configuration?: InputMaybe<JsonFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SlottingConfigurationFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type SlottingConfigurationOffsetConnection = {
  __typename?: 'SlottingConfigurationOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SlottingConfiguration>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SlottingConfigurationSort = {
  direction: SortDirection;
  field: SlottingConfigurationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SlottingConfigurationSortFields {
  Configuration = 'configuration',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export type SlottingConfigurationUpdateInput = {
  configuration?: InputMaybe<Scalars['JSON']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type SlottingConfigurationUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: SlottingConfigurationUpdateInput;
};

export type SlottingDataFrame = {
  __typename?: 'SlottingDataFrame';
  abc_indicator_count: Scalars['Float']['output'];
  batches_count: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  /** End date of the dataset */
  import_date: Scalars['DateTime']['output'];
  /** Start date of the dataset */
  last_import: Scalars['DateTime']['output'];
  material_data_for_storage_type_count: Scalars['Float']['output'];
  material_inventory_count: Scalars['Float']['output'];
  material_metadata_count: Scalars['Float']['output'];
  open_transfer_orders_count: Scalars['Float']['output'];
  sales_orders_count: Scalars['Float']['output'];
  /** A String representing the status of the slotting dataframe entry */
  status: Scalars['String']['output'];
  uom_of_material_count: Scalars['Float']['output'];
  /** Entity's warehouse (foreign key) */
  warehouse_id: Scalars['ID']['output'];
};

export type SlottingDataFrameFilter = {
  and?: InputMaybe<Array<SlottingDataFrameFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SlottingDataFrameFilter>>;
  warehouse_id?: InputMaybe<IdFilterComparison>;
};

export type SlottingDataFrameOffsetConnection = {
  __typename?: 'SlottingDataFrameOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SlottingDataFrame>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SlottingDataFrameSort = {
  direction: SortDirection;
  field: SlottingDataFrameSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SlottingDataFrameSortFields {
  Id = 'id',
  WarehouseId = 'warehouse_id'
}

/** SlottingDataset entity model */
export type SlottingDataset = {
  __typename?: 'SlottingDataset';
  /** Current status when processing a slotting dataset */
  analysisStatus: SlottingAnalysisStatus;
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Entity's user ID (foreign key) */
  createdByUserId: Scalars['ID']['output'];
  /** Person's full name */
  createdByUserName: Scalars['String']['output'];
  /** Date range for data pulled from ERP system */
  dateRangeEnd: Scalars['DateTime']['output'];
  /** Date range for data pulled from ERP system */
  dateRangeStart: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Current status when loading a slotting dataset from ERP system */
  loadStatus: SlottingLoadStatus;
  /** Lock setting for a slotting dataset */
  locked: Scalars['Boolean']['output'];
  /** Tag Identifier */
  name: Scalars['String']['output'];
  /** Slotting dataset process type */
  processType: SlottingDatasetProcessType;
  /** Date the slotting data was pulled from ERP system */
  pullDate: Scalars['DateTime']['output'];
  /** Tag Identifier */
  runCount: Scalars['Int']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Description for SAP variant */
  variantDescription: Scalars['String']['output'];
  /** Name for SAP variant */
  variantName: Scalars['String']['output'];
  warehouse?: Maybe<Warehouse>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type SlottingDatasetCreateInput = {
  /** Date range for data pulled from ERP system */
  dateRangeEnd: Scalars['DateTime']['input'];
  /** Date range for data pulled from ERP system */
  dateRangeStart: Scalars['DateTime']['input'];
  /** Lock setting for a slotting dataset */
  locked: Scalars['Boolean']['input'];
  /** ApiDocs */
  name: Scalars['String']['input'];
  /** ApiDocs */
  numCount?: InputMaybe<Scalars['String']['input']>;
  /** Description for SAP variant */
  variantDescription: Scalars['String']['input'];
  /** Name for SAP variant */
  variantName: Scalars['String']['input'];
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type SlottingDatasetCreateOneInput = {
  /** The record to create */
  SlottingDataset: SlottingDatasetCreateInput;
};

export type SlottingDatasetFilter = {
  analysisStatus?: InputMaybe<SlottingAnalysisStatusFilterComparison>;
  and?: InputMaybe<Array<SlottingDatasetFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdByUserId?: InputMaybe<IdFilterComparison>;
  createdByUserName?: InputMaybe<StringFieldComparison>;
  dateRangeEnd?: InputMaybe<DateFieldComparison>;
  dateRangeStart?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  loadStatus?: InputMaybe<SlottingLoadStatusFilterComparison>;
  locked?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SlottingDatasetFilter>>;
  processType?: InputMaybe<SlottingDatasetProcessTypeFilterComparison>;
  pullDate?: InputMaybe<DateFieldComparison>;
  runCount?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  variantDescription?: InputMaybe<StringFieldComparison>;
  variantName?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type SlottingDatasetOffsetConnection = {
  __typename?: 'SlottingDatasetOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SlottingDataset>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export enum SlottingDatasetProcessType {
  Manual = 'manual'
}

export type SlottingDatasetProcessTypeFilterComparison = {
  eq?: InputMaybe<SlottingDatasetProcessType>;
  gt?: InputMaybe<SlottingDatasetProcessType>;
  gte?: InputMaybe<SlottingDatasetProcessType>;
  iLike?: InputMaybe<SlottingDatasetProcessType>;
  in?: InputMaybe<Array<SlottingDatasetProcessType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<SlottingDatasetProcessType>;
  lt?: InputMaybe<SlottingDatasetProcessType>;
  lte?: InputMaybe<SlottingDatasetProcessType>;
  neq?: InputMaybe<SlottingDatasetProcessType>;
  notILike?: InputMaybe<SlottingDatasetProcessType>;
  notIn?: InputMaybe<Array<SlottingDatasetProcessType>>;
  notLike?: InputMaybe<SlottingDatasetProcessType>;
};

export type SlottingDatasetSort = {
  direction: SortDirection;
  field: SlottingDatasetSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SlottingDatasetSortFields {
  AnalysisStatus = 'analysisStatus',
  Code = 'code',
  CreatedAt = 'createdAt',
  CreatedByUserId = 'createdByUserId',
  CreatedByUserName = 'createdByUserName',
  DateRangeEnd = 'dateRangeEnd',
  DateRangeStart = 'dateRangeStart',
  DeletedAt = 'deletedAt',
  Id = 'id',
  LoadStatus = 'loadStatus',
  Locked = 'locked',
  Name = 'name',
  ProcessType = 'processType',
  PullDate = 'pullDate',
  RunCount = 'runCount',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  VariantDescription = 'variantDescription',
  VariantName = 'variantName',
  WarehouseId = 'warehouseId'
}

export type SlottingDatasetUpdateInput = {
  /** Current status when loading a slotting dataset from ERP system */
  loadStatus?: InputMaybe<SlottingLoadStatus>;
  /** Lock setting for a slotting dataset */
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  /** Description of entity */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Description of entity */
  variantDescription?: InputMaybe<Scalars['String']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type SlottingDatasetUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: SlottingDatasetUpdateInput;
};

export type SlottingDatasetVariantPlantSlocWh = {
  __typename?: 'SlottingDatasetVariantPlantSlocWh';
  /** SAP plants for an SAP variant */
  plants: Array<Scalars['String']['output']>;
  /** SAP storage locations for an SAP variant */
  storageLocations: Array<Scalars['String']['output']>;
  /** SAP Warehouses for an SAP variant */
  warehouses: Array<Scalars['String']['output']>;
};

export type SlottingDatasetVariants = {
  __typename?: 'SlottingDatasetVariants';
  /** Name for SAP variant */
  variants: Array<Scalars['String']['output']>;
};

export type SlottingEquipment = {
  __typename?: 'SlottingEquipment';
  id: Scalars['ID']['output'];
  quantity: Scalars['Float']['output'];
};

export type SlottingEquipmentInput = {
  id: Scalars['ID']['input'];
  quantity: Scalars['Float']['input'];
};

export type SlottingExclusion = {
  __typename?: 'SlottingExclusion';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity's user ID (foreign key) */
  excludedById?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type SlottingExclusionCreateInput = {
  /** Entity's user ID (foreign key) */
  excludedById?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type SlottingExclusionCreateOneInput = {
  /** The record to create */
  slottingExclusion: SlottingExclusionCreateInput;
};

export type SlottingExclusionFilter = {
  and?: InputMaybe<Array<SlottingExclusionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  excludedById?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SlottingExclusionFilter>>;
  productId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type SlottingExclusionOffsetConnection = {
  __typename?: 'SlottingExclusionOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SlottingExclusion>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SlottingExclusionSort = {
  direction: SortDirection;
  field: SlottingExclusionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SlottingExclusionSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  ExcludedById = 'excludedById',
  Id = 'id',
  ProductId = 'productId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export type SlottingExclusionUpdateInput = {
  /** Entity's user ID (foreign key) */
  excludedById?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's product ID (foreign key) */
  productId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type SlottingExclusionUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** update dto */
  update: SlottingExclusionUpdateInput;
};

export type SlottingInventory = {
  __typename?: 'SlottingInventory';
  binCode?: Maybe<Scalars['String']['output']>;
  eaQtyPerCase?: Maybe<Scalars['String']['output']>;
  productGroup?: Maybe<Scalars['String']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
  productNumber?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Scalars['String']['output']>;
  uom?: Maybe<Scalars['String']['output']>;
  zone?: Maybe<Scalars['String']['output']>;
};

export type SlottingInventoryFilter = {
  and?: InputMaybe<Array<SlottingInventoryFilter>>;
  binCode?: InputMaybe<StringFieldComparison>;
  eaQtyPerCase?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SlottingInventoryFilter>>;
  productGroup?: InputMaybe<StringFieldComparison>;
  productName?: InputMaybe<StringFieldComparison>;
  productNumber?: InputMaybe<StringFieldComparison>;
  quantity?: InputMaybe<StringFieldComparison>;
  rank?: InputMaybe<StringFieldComparison>;
  uom?: InputMaybe<StringFieldComparison>;
  zone?: InputMaybe<StringFieldComparison>;
};

export type SlottingInventoryOffsetConnection = {
  __typename?: 'SlottingInventoryOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SlottingInventory>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SlottingInventorySort = {
  direction: SortDirection;
  field: SlottingInventorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SlottingInventorySortFields {
  BinCode = 'binCode',
  EaQtyPerCase = 'eaQtyPerCase',
  ProductGroup = 'productGroup',
  ProductName = 'productName',
  ProductNumber = 'productNumber',
  Quantity = 'quantity',
  Rank = 'rank',
  Uom = 'uom',
  Zone = 'zone'
}

export enum SlottingLoadStatus {
  Complete = 'complete',
  Deleted = 'deleted',
  Failed = 'failed',
  InProgress = 'inProgress',
  NotStarted = 'notStarted'
}

export type SlottingLoadStatusFilterComparison = {
  eq?: InputMaybe<SlottingLoadStatus>;
  gt?: InputMaybe<SlottingLoadStatus>;
  gte?: InputMaybe<SlottingLoadStatus>;
  iLike?: InputMaybe<SlottingLoadStatus>;
  in?: InputMaybe<Array<SlottingLoadStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<SlottingLoadStatus>;
  lt?: InputMaybe<SlottingLoadStatus>;
  lte?: InputMaybe<SlottingLoadStatus>;
  neq?: InputMaybe<SlottingLoadStatus>;
  notILike?: InputMaybe<SlottingLoadStatus>;
  notIn?: InputMaybe<Array<SlottingLoadStatus>>;
  notLike?: InputMaybe<SlottingLoadStatus>;
};

export type SlottingQuery = {
  avoidCongestion: Scalars['Float']['input'];
  enforceZones: Scalars['Boolean']['input'];
  favorGroundLevel: Scalars['Float']['input'];
  forecasting: Scalars['String']['input'];
  heaviestToLightestPicks: Scalars['Boolean']['input'];
  mixedBinStorage: Scalars['Boolean']['input'];
  pickDensity: Scalars['Float']['input'];
  pickEfficiency: Scalars['Float']['input'];
  putawayDensity: Scalars['Float']['input'];
  putawayEfficiency: Scalars['Float']['input'];
  warehouseId: Scalars['Boolean']['input'];
};

export type SlottingRestrictions = {
  __typename?: 'SlottingRestrictions';
  enforceSingleOrderPicks: Scalars['Boolean']['output'];
  fefoFifoPicking: Scalars['Boolean']['output'];
  fifoPicking: Scalars['Boolean']['output'];
  heaviestToLightestPicks: Scalars['Boolean']['output'];
  preventMixedExpirationDatesInBins: Scalars['Boolean']['output'];
  preventMixedLotsInBins: Scalars['Boolean']['output'];
  preventMixedProductsInBins: Scalars['Boolean']['output'];
  preventSimilarProductsInAdjacentBins: Scalars['Boolean']['output'];
  restrictDistance: Scalars['Boolean']['output'];
  restrictDistanceBy?: Maybe<DistanceRestrictionEnum>;
  restrictedDistance?: Maybe<Scalars['Float']['output']>;
};

export type SlottingRestrictionsInput = {
  /** Slotting restriction field */
  enforceSingleOrderPicks: Scalars['Boolean']['input'];
  /** Slotting restriction field */
  fefoFifoPicking: Scalars['Boolean']['input'];
  /** Slotting restriction field */
  fifoPicking: Scalars['Boolean']['input'];
  /** Slotting restriction field */
  heaviestToLightestPicks: Scalars['Boolean']['input'];
  /** Slotting restriction field */
  preventMixedExpirationDatesInBins: Scalars['Boolean']['input'];
  /** Slotting restriction field */
  preventMixedLotsInBins: Scalars['Boolean']['input'];
  /** Slotting restriction field */
  preventMixedProductsInBins: Scalars['Boolean']['input'];
  /** Slotting restriction field */
  preventSimilarProductsInAdjacentBins: Scalars['Boolean']['input'];
  /** Slotting restriction field */
  restrictDistance: Scalars['Boolean']['input'];
  /** Slotting restriction field */
  restrictDistanceBy?: InputMaybe<DistanceRestrictionEnum>;
  /** Slotting restriction field */
  restrictedDistance?: InputMaybe<Scalars['Int']['input']>;
};

export type SlottingRuleset = {
  __typename?: 'SlottingRuleset';
  abcAnalysis?: Maybe<AbcAnalysis>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Entity ID */
  createdByUserId?: Maybe<Scalars['ID']['output']>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  equipment?: Maybe<Array<SlottingEquipment>>;
  forecasting?: Maybe<Forecasting>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Slotting config last run */
  lastRun?: Maybe<Scalars['DateTime']['output']>;
  maxMovements?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  /** Slotting config private indicator */
  privateRuleset?: Maybe<Scalars['Boolean']['output']>;
  restrictions?: Maybe<SlottingRestrictions>;
  /** ruleset status, i.e. COMPLETE, DRAFT */
  rulesetStatus?: Maybe<RulesetStatus>;
  runCount?: Maybe<Scalars['Int']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  warehouseId: Scalars['String']['output'];
  weights?: Maybe<SlottingWeights>;
  workers?: Maybe<Array<SlottingWorker>>;
  zoneGroups?: Maybe<Array<SlottingZoneGroup>>;
  zones?: Maybe<Array<SlottingZone>>;
};

export type SlottingRulesetCreateInput = {
  abcAnalysis?: InputMaybe<AbcAnalysisInput>;
  /** Created by user */
  createdByUserId?: InputMaybe<Scalars['ID']['input']>;
  equipment?: InputMaybe<Array<SlottingEquipmentInput>>;
  forecasting?: InputMaybe<Forecasting>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxMovements?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  /** Slotting config private indicator */
  privateRuleset?: InputMaybe<Scalars['Boolean']['input']>;
  restrictions?: InputMaybe<SlottingRestrictionsInput>;
  /** ruleset status, i.e. COMPLETE, DRAFT */
  rulesetStatus?: InputMaybe<RulesetStatus>;
  warehouseId: Scalars['String']['input'];
  weights?: InputMaybe<SlottingWeightsInput>;
  workers?: InputMaybe<Array<SlottingWorkerInput>>;
  zoneGroups?: InputMaybe<Array<SlottingZoneGroupInput>>;
  zones?: InputMaybe<Array<SlottingZoneInput>>;
};

export type SlottingRulesetCreateOneInput = {
  /** The record to create */
  slottingRuleset: SlottingRulesetCreateInput;
};

export type SlottingRulesetFilter = {
  and?: InputMaybe<Array<SlottingRulesetFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdByUserId?: InputMaybe<IdFilterComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  forecasting?: InputMaybe<ForecastingFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastRun?: InputMaybe<DateFieldComparison>;
  maxMovements?: InputMaybe<IntFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SlottingRulesetFilter>>;
  privateRuleset?: InputMaybe<BooleanFieldComparison>;
  rulesetStatus?: InputMaybe<RulesetStatusFilterComparison>;
  runCount?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<StringFieldComparison>;
};

export type SlottingRulesetOffsetConnection = {
  __typename?: 'SlottingRulesetOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SlottingRuleset>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SlottingRulesetSort = {
  direction: SortDirection;
  field: SlottingRulesetSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SlottingRulesetSortFields {
  CreatedAt = 'createdAt',
  CreatedByUserId = 'createdByUserId',
  DeletedAt = 'deletedAt',
  Forecasting = 'forecasting',
  Id = 'id',
  LastRun = 'lastRun',
  MaxMovements = 'maxMovements',
  Name = 'name',
  PrivateRuleset = 'privateRuleset',
  RulesetStatus = 'rulesetStatus',
  RunCount = 'runCount',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export type SlottingRulesetUpdateInput = {
  abcAnalysis?: InputMaybe<AbcAnalysisInput>;
  /** Created by user */
  createdByUserId?: InputMaybe<Scalars['ID']['input']>;
  equipment?: InputMaybe<Array<SlottingEquipmentInput>>;
  forecasting?: InputMaybe<Forecasting>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxMovements?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Slotting config private indicator */
  privateRuleset?: InputMaybe<Scalars['Boolean']['input']>;
  restrictions?: InputMaybe<SlottingRestrictionsInput>;
  /** ruleset status, i.e. COMPLETE, DRAFT */
  rulesetStatus?: InputMaybe<RulesetStatus>;
  warehouseId?: InputMaybe<Scalars['String']['input']>;
  weights?: InputMaybe<SlottingWeightsInput>;
  workers?: InputMaybe<Array<SlottingWorkerInput>>;
  zoneGroups?: InputMaybe<Array<SlottingZoneGroupInput>>;
  zones?: InputMaybe<Array<SlottingZoneInput>>;
};

export type SlottingRulesetUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: SlottingRulesetUpdateInput;
};

export type SlottingRun = {
  __typename?: 'SlottingRun';
  cost_saved?: Maybe<Scalars['Float']['output']>;
  /** Date slotting run was deployed */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  created_by_user_id: Scalars['ID']['output'];
  created_by_user_name: Scalars['String']['output'];
  /** End date of the dataset */
  dataset_end?: Maybe<Scalars['DateTime']['output']>;
  dataset_id: Scalars['ID']['output'];
  dataset_name: Scalars['String']['output'];
  /** Start date of the dataset */
  dataset_start?: Maybe<Scalars['DateTime']['output']>;
  density?: Maybe<Scalars['Float']['output']>;
  /** Date slotting run was deployed */
  deployed_at?: Maybe<Scalars['DateTime']['output']>;
  deployed_by_user_id?: Maybe<Scalars['ID']['output']>;
  deployed_by_user_name?: Maybe<Scalars['String']['output']>;
  /** Date slotting run was deployed */
  deployment_ended_at?: Maybe<Scalars['DateTime']['output']>;
  distance_saved?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  efficiency?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** slotting run */
  input: Scalars['JSONObject']['output'];
  name: Scalars['String']['output'];
  overall?: Maybe<Scalars['Float']['output']>;
  ruleset_id: Scalars['ID']['output'];
  ruleset_name: Scalars['String']['output'];
  run_duration?: Maybe<Scalars['Float']['output']>;
  status: RunStatus;
  status_description: Scalars['String']['output'];
  /** Date slotting run was deployed */
  updated_dt?: Maybe<Scalars['DateTime']['output']>;
  variant: Scalars['String']['output'];
  warehouse_id: Scalars['ID']['output'];
};

export type SlottingRunCreateInput = {
  /** the dataset end time */
  datasetEnd: Scalars['DateTime']['input'];
  /** the dataset start time */
  datasetStart: Scalars['DateTime']['input'];
  name: Scalars['ID']['input'];
  rulesetId?: InputMaybe<Scalars['ID']['input']>;
  warehouseId: Scalars['ID']['input'];
};

export type SlottingRunCreateOneInput = {
  /** The record to create */
  slottingRun: SlottingRunCreateInput;
};

export type SlottingRunFilter = {
  and?: InputMaybe<Array<SlottingRunFilter>>;
  cost_saved?: InputMaybe<NumberFieldComparison>;
  created_at?: InputMaybe<DateFieldComparison>;
  created_by_user_id?: InputMaybe<IdFilterComparison>;
  created_by_user_name?: InputMaybe<StringFieldComparison>;
  dataset_end?: InputMaybe<DateFieldComparison>;
  dataset_id?: InputMaybe<IdFilterComparison>;
  dataset_name?: InputMaybe<StringFieldComparison>;
  dataset_start?: InputMaybe<DateFieldComparison>;
  density?: InputMaybe<NumberFieldComparison>;
  deployed_at?: InputMaybe<DateFieldComparison>;
  deployed_by_user_id?: InputMaybe<IdFilterComparison>;
  deployed_by_user_name?: InputMaybe<StringFieldComparison>;
  deployment_ended_at?: InputMaybe<DateFieldComparison>;
  distance_saved?: InputMaybe<NumberFieldComparison>;
  duration?: InputMaybe<NumberFieldComparison>;
  efficiency?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  input?: InputMaybe<JsonObjectFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SlottingRunFilter>>;
  overall?: InputMaybe<NumberFieldComparison>;
  ruleset_id?: InputMaybe<IdFilterComparison>;
  ruleset_name?: InputMaybe<StringFieldComparison>;
  run_duration?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<RunStatusFilterComparison>;
  status_description?: InputMaybe<StringFieldComparison>;
  updated_dt?: InputMaybe<DateFieldComparison>;
  variant?: InputMaybe<StringFieldComparison>;
  warehouse_id?: InputMaybe<IdFilterComparison>;
};

export type SlottingRunOffsetConnection = {
  __typename?: 'SlottingRunOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SlottingRun>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SlottingRunSort = {
  direction: SortDirection;
  field: SlottingRunSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SlottingRunSortFields {
  CostSaved = 'cost_saved',
  CreatedAt = 'created_at',
  CreatedByUserId = 'created_by_user_id',
  CreatedByUserName = 'created_by_user_name',
  DatasetEnd = 'dataset_end',
  DatasetId = 'dataset_id',
  DatasetName = 'dataset_name',
  DatasetStart = 'dataset_start',
  Density = 'density',
  DeployedAt = 'deployed_at',
  DeployedByUserId = 'deployed_by_user_id',
  DeployedByUserName = 'deployed_by_user_name',
  DeploymentEndedAt = 'deployment_ended_at',
  DistanceSaved = 'distance_saved',
  Duration = 'duration',
  Efficiency = 'efficiency',
  Id = 'id',
  Input = 'input',
  Name = 'name',
  Overall = 'overall',
  RulesetId = 'ruleset_id',
  RulesetName = 'ruleset_name',
  RunDuration = 'run_duration',
  Status = 'status',
  StatusDescription = 'status_description',
  UpdatedDt = 'updated_dt',
  Variant = 'variant',
  WarehouseId = 'warehouse_id'
}

export type SlottingWeights = {
  __typename?: 'SlottingWeights';
  avoidCongestion: Scalars['Float']['output'];
  favorGroundLevel: Scalars['Float']['output'];
  pickDensity: Scalars['Float']['output'];
  pickEfficiency: Scalars['Float']['output'];
  putawayDensity: Scalars['Float']['output'];
  putawayEfficiency: Scalars['Float']['output'];
};

export type SlottingWeightsInput = {
  avoidCongestion: Scalars['Float']['input'];
  favorGroundLevel: Scalars['Float']['input'];
  pickDensity: Scalars['Float']['input'];
  pickEfficiency: Scalars['Float']['input'];
  putawayDensity: Scalars['Float']['input'];
  putawayEfficiency: Scalars['Float']['input'];
};

export type SlottingWorker = {
  __typename?: 'SlottingWorker';
  id: Scalars['ID']['output'];
  quantity: Scalars['Float']['output'];
};

export type SlottingWorkerInput = {
  id: Scalars['ID']['input'];
  quantity: Scalars['Float']['input'];
};

export type SlottingZone = {
  __typename?: 'SlottingZone';
  fixedBins?: Maybe<Scalars['Boolean']['output']>;
  groupId?: Maybe<Scalars['String']['output']>;
  maxFixedBinsPerProduct: Scalars['Float']['output'];
  optimizeZone: Scalars['Boolean']['output'];
  parentZoneId?: Maybe<Scalars['String']['output']>;
  restrictions: SlottingRestrictions;
  useMaxMovements?: Maybe<Scalars['Boolean']['output']>;
  weights: SlottingWeights;
  zoneConfiguration: ZoneConfiguration;
  zoneId: Scalars['String']['output'];
};

export type SlottingZoneGroup = {
  __typename?: 'SlottingZoneGroup';
  fixedBins?: Maybe<Scalars['Boolean']['output']>;
  groupId: Scalars['String']['output'];
  maxFixedBinsPerProduct: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  optimizeZone: Scalars['Boolean']['output'];
  restrictions: SlottingRestrictions;
  useMaxMovements?: Maybe<Scalars['Boolean']['output']>;
  weights: SlottingWeights;
  zoneConfiguration: ZoneConfiguration;
  zonesInGroup?: Maybe<Array<Scalars['String']['output']>>;
};

export type SlottingZoneGroupInput = {
  fixedBins?: InputMaybe<Scalars['Boolean']['input']>;
  groupId: Scalars['String']['input'];
  maxFixedBinsPerProduct: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  optimizeZone: Scalars['Boolean']['input'];
  restrictions: SlottingRestrictionsInput;
  useMaxMovements?: InputMaybe<Scalars['Boolean']['input']>;
  weights: SlottingWeightsInput;
  zoneConfiguration: ZoneConfiguration;
  zonesInGroup?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SlottingZoneInput = {
  fixedBins?: InputMaybe<Scalars['Boolean']['input']>;
  groupId?: InputMaybe<Scalars['String']['input']>;
  maxFixedBinsPerProduct: Scalars['Float']['input'];
  optimizeZone: Scalars['Boolean']['input'];
  parentZoneId?: InputMaybe<Scalars['String']['input']>;
  restrictions: SlottingRestrictionsInput;
  useMaxMovements?: InputMaybe<Scalars['Boolean']['input']>;
  weights: SlottingWeightsInput;
  zoneConfiguration: ZoneConfiguration;
  zoneId?: InputMaybe<Scalars['String']['input']>;
};

export enum SmartScanContext {
  TaskAgenda = 'taskAgenda'
}

export type SmartScanMetaData = {
  __typename?: 'SmartScanMetaData';
  /** Bin entity belongs to */
  bin?: Maybe<Bin>;
  /** License Plate Detail view record */
  licensePlate?: Maybe<LicensePlateDetail>;
  /** Mobile view task record */
  task?: Maybe<MobileViewTask>;
  /** Task type */
  taskType?: Maybe<TaskType>;
};

export type SmartScanResource = {
  __typename?: 'SmartScanResource';
  /** Suggestion of action to be carried out in a smart scan response */
  action: Scalars['String']['output'];
  /** Metadata json object providing relevant data to carry out the provided action */
  metaData: Array<SmartScanMetaData>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type SourceDestinationArea = {
  __typename?: 'SourceDestinationArea';
  destinationCode?: Maybe<Scalars['String']['output']>;
  sourceCode?: Maybe<Scalars['String']['output']>;
};

export enum StandardUomCategory {
  Distance = 'distance',
  Quantity = 'quantity',
  SurfaceArea = 'surfaceArea',
  Velocity = 'velocity',
  Volume = 'volume',
  Weight = 'weight'
}

export type StandardUomCategoryFilterComparison = {
  eq?: InputMaybe<StandardUomCategory>;
  gt?: InputMaybe<StandardUomCategory>;
  gte?: InputMaybe<StandardUomCategory>;
  iLike?: InputMaybe<StandardUomCategory>;
  in?: InputMaybe<Array<StandardUomCategory>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<StandardUomCategory>;
  lt?: InputMaybe<StandardUomCategory>;
  lte?: InputMaybe<StandardUomCategory>;
  neq?: InputMaybe<StandardUomCategory>;
  notILike?: InputMaybe<StandardUomCategory>;
  notIn?: InputMaybe<Array<StandardUomCategory>>;
  notLike?: InputMaybe<StandardUomCategory>;
};

export enum StandardUomSystem {
  Imperial = 'imperial',
  Metric = 'metric'
}

export type StandardUomSystemFilterComparison = {
  eq?: InputMaybe<StandardUomSystem>;
  gt?: InputMaybe<StandardUomSystem>;
  gte?: InputMaybe<StandardUomSystem>;
  iLike?: InputMaybe<StandardUomSystem>;
  in?: InputMaybe<Array<StandardUomSystem>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<StandardUomSystem>;
  lt?: InputMaybe<StandardUomSystem>;
  lte?: InputMaybe<StandardUomSystem>;
  neq?: InputMaybe<StandardUomSystem>;
  notILike?: InputMaybe<StandardUomSystem>;
  notIn?: InputMaybe<Array<StandardUomSystem>>;
  notLike?: InputMaybe<StandardUomSystem>;
};

export enum StartOrFinish {
  Finish = 'finish',
  Start = 'start'
}

export type StockCreateStockFromProductionDto = {
  /** Entity code */
  lotCode?: InputMaybe<Scalars['String']['input']>;
  /** Entity code */
  productCode: Scalars['String']['input'];
  /** Quantity of product */
  quantity: Scalars['String']['input'];
  /** Entity code */
  stockStatusCode?: InputMaybe<Scalars['String']['input']>;
  /** Entity code */
  unitOfMeasureCode: Scalars['String']['input'];
};

export type StockRemoveDto = {
  /** Entity ID */
  licensePlateId: Scalars['ID']['input'];
};

export type StockStatusMapping = {
  __typename?: 'StockStatusMapping';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Stock status used when converting ERP stock status to Fulfilld stock status */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity ID */
  sapHuUserStatusId?: Maybe<Scalars['ID']['output']>;
  /** Entity's SAP stock status type ID (foreign key) */
  sapStockStatusTypeId: Scalars['ID']['output'];
  /** Entity's stock status type ID (foreign key) */
  stockStatusTypeId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type StockStatusMappingByWarehouseDto = {
  __typename?: 'StockStatusMappingByWarehouseDto';
  sapHuUserStatus?: Maybe<SapHuUserStatus>;
  sapStockStatusType?: Maybe<SapStockStatusType>;
};

export type StockStatusMappingCreateInput = {
  /** Stock status used when converting ERP stock status to Fulfilld stock status */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Entity ID */
  sapHuUserStatusId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's SAP stock status type ID (foreign key) */
  sapStockStatusTypeId: Scalars['ID']['input'];
  /** Entity's stock status type ID (foreign key) */
  stockStatusTypeId: Scalars['ID']['input'];
  /** Entity ID */
  warehouseId: Scalars['String']['input'];
};

export type StockStatusMappingCreateOneInput = {
  /** The record to create */
  stockStatusMapping: StockStatusMappingCreateInput;
};

/** Stock Status Type model */
export type StockStatusType = {
  __typename?: 'StockStatusType';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /**
   * Stock status used when converting ERP stock status to Fulfilld stock status
   * @deprecated Deprecated - default moved to stock status mapping
   */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description: Scalars['String']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label: Scalars['String']['output'];
  sapStockStatusTypeMappings?: Maybe<StockStatusMappingByWarehouseDto>;
  /** Determines if stock status type is in use */
  stockStatusTypeStatus?: Maybe<StockStatusTypeStatus>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};


/** Stock Status Type model */
export type StockStatusTypeSapStockStatusTypeMappingsArgs = {
  warehouseId: Scalars['String']['input'];
};

export type StockStatusTypeCopy = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Description of entity */
  description: Scalars['String']['input'];
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Entity's label */
  label: Scalars['String']['input'];
  /** Entity's SAP stock status type ID (foreign key) */
  sapStockStatusTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Determines if stock status type is in use */
  stockStatusTypeStatus?: InputMaybe<StockStatusTypeStatus>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type StockStatusTypeCreate = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Description of entity */
  description: Scalars['String']['input'];
  /** Entity's label */
  label: Scalars['String']['input'];
  /** Entity's SAP stock status type ID (foreign key) */
  sapHuUserStatusId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's SAP stock status type ID (foreign key) */
  sapStockStatusTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Determines if stock status type is in use */
  stockStatusTypeStatus?: InputMaybe<StockStatusTypeStatus>;
};

export type StockStatusTypeCreateOneInput = {
  /** The record to create */
  stockStatusType: StockStatusTypeCreate;
};

export type StockStatusTypeDeleteOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
};

export type StockStatusTypeFilter = {
  and?: InputMaybe<Array<StockStatusTypeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  default?: InputMaybe<BooleanFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StockStatusTypeFilter>>;
  stockStatusTypeStatus?: InputMaybe<StockStatusTypeStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type StockStatusTypeOffsetConnection = {
  __typename?: 'StockStatusTypeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<StockStatusType>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type StockStatusTypeSort = {
  direction: SortDirection;
  field: StockStatusTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum StockStatusTypeSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  Default = 'default',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Label = 'label',
  StockStatusTypeStatus = 'stockStatusTypeStatus',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export enum StockStatusTypeStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export type StockStatusTypeStatusFilterComparison = {
  eq?: InputMaybe<StockStatusTypeStatus>;
  gt?: InputMaybe<StockStatusTypeStatus>;
  gte?: InputMaybe<StockStatusTypeStatus>;
  iLike?: InputMaybe<StockStatusTypeStatus>;
  in?: InputMaybe<Array<StockStatusTypeStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<StockStatusTypeStatus>;
  lt?: InputMaybe<StockStatusTypeStatus>;
  lte?: InputMaybe<StockStatusTypeStatus>;
  neq?: InputMaybe<StockStatusTypeStatus>;
  notILike?: InputMaybe<StockStatusTypeStatus>;
  notIn?: InputMaybe<Array<StockStatusTypeStatus>>;
  notLike?: InputMaybe<StockStatusTypeStatus>;
};

export type StockStatusTypeUpdate = {
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Update dto for stock status mapping */
  mapping?: InputMaybe<StockStatusTypeUpdateMappingDto>;
  /** Determines if stock status type is in use */
  stockStatusTypeStatus?: InputMaybe<StockStatusTypeStatus>;
};

export type StockStatusTypeUpdateMappingDto = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update dto for stock status mapping */
  update: StockStatusTypeUpdateMappingUpdateDto;
};

export type StockStatusTypeUpdateMappingUpdateDto = {
  /** Stock status used when converting ERP stock status to Fulfilld stock status */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Entity's SAP stock status type ID (foreign key) */
  sapHuUserStatusId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's SAP stock status type ID (foreign key) */
  sapStockStatusTypeId?: InputMaybe<Scalars['ID']['input']>;
};

export type Stop = {
  aisle: Scalars['String']['input'];
  column: Scalars['String']['input'];
};

/** Stored image model */
export type StoredImage = {
  __typename?: 'StoredImage';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Original image file uploaded */
  original: Scalars['String']['output'];
  /** Thumbnail version of image */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Web optimized version of image */
  web: Scalars['String']['output'];
};

export type StringFieldComparison = {
  between?: InputMaybe<StringNumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notBetween?: InputMaybe<StringNumberFieldComparisonBetween>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type StringNumberFieldComparisonBetween = {
  lower: Scalars['String']['input'];
  upper: Scalars['String']['input'];
};

export type SysAdminOutboundDeliveryCreateDtoInput = {
  plant: Scalars['String']['input'];
  requestedDeliveryDate: Scalars['String']['input'];
  storageLocation: Scalars['String']['input'];
};

export type SystemConnection = {
  __typename?: 'SystemConnection';
  /** System connection active */
  active: Scalars['Boolean']['output'];
  /** System connection url */
  baseUrl: Scalars['String']['output'];
  /** Request Batch Size */
  batchSize?: Maybe<Scalars['Int']['output']>;
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** System connection timezone */
  stockStatusSetting: SystemStockStatusSetting;
  /** System connection type */
  systemType: SystemConnectionType;
  /** System connection timezone */
  timezone: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** System connection url headers to include in requests to the system. */
  urlHeaders?: Maybe<Scalars['JSONObject']['output']>;
};

export type SystemConnectionFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<SystemConnectionFilter>>;
  baseUrl?: InputMaybe<StringFieldComparison>;
  batchSize?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SystemConnectionFilter>>;
  stockStatusSetting?: InputMaybe<SystemStockStatusSettingFilterComparison>;
  systemType?: InputMaybe<SystemConnectionTypeFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  urlHeaders?: InputMaybe<JsonObjectFilterComparison>;
};

export type SystemConnectionOffsetConnection = {
  __typename?: 'SystemConnectionOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SystemConnection>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SystemConnectionSort = {
  direction: SortDirection;
  field: SystemConnectionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SystemConnectionSortFields {
  Active = 'active',
  BaseUrl = 'baseUrl',
  BatchSize = 'batchSize',
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  StockStatusSetting = 'stockStatusSetting',
  SystemType = 'systemType',
  Timezone = 'timezone',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  UrlHeaders = 'urlHeaders'
}

export enum SystemConnectionType {
  Sap = 'SAP'
}

export type SystemConnectionTypeFilterComparison = {
  eq?: InputMaybe<SystemConnectionType>;
  gt?: InputMaybe<SystemConnectionType>;
  gte?: InputMaybe<SystemConnectionType>;
  iLike?: InputMaybe<SystemConnectionType>;
  in?: InputMaybe<Array<SystemConnectionType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<SystemConnectionType>;
  lt?: InputMaybe<SystemConnectionType>;
  lte?: InputMaybe<SystemConnectionType>;
  neq?: InputMaybe<SystemConnectionType>;
  notILike?: InputMaybe<SystemConnectionType>;
  notIn?: InputMaybe<Array<SystemConnectionType>>;
  notLike?: InputMaybe<SystemConnectionType>;
};

export type SystemConnectionUpdateActiveDto = {
  /** System connection active */
  active: Scalars['Boolean']['input'];
  /** Entity ID */
  ids: Array<Scalars['String']['input']>;
};

export enum SystemStockStatusSetting {
  StockStatus = 'stockStatus',
  StockStatusAndHuStatus = 'stockStatusAndHuStatus'
}

export type SystemStockStatusSettingFilterComparison = {
  eq?: InputMaybe<SystemStockStatusSetting>;
  gt?: InputMaybe<SystemStockStatusSetting>;
  gte?: InputMaybe<SystemStockStatusSetting>;
  iLike?: InputMaybe<SystemStockStatusSetting>;
  in?: InputMaybe<Array<SystemStockStatusSetting>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<SystemStockStatusSetting>;
  lt?: InputMaybe<SystemStockStatusSetting>;
  lte?: InputMaybe<SystemStockStatusSetting>;
  neq?: InputMaybe<SystemStockStatusSetting>;
  notILike?: InputMaybe<SystemStockStatusSetting>;
  notIn?: InputMaybe<Array<SystemStockStatusSetting>>;
  notLike?: InputMaybe<SystemStockStatusSetting>;
};

/** Task model */
export type Task = {
  __typename?: 'Task';
  /** Deleted at date */
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  assignedByUserId?: Maybe<Scalars['ID']['output']>;
  assignedTeam?: Maybe<Team>;
  assignedTeamId?: Maybe<Scalars['ID']['output']>;
  assignedUserId?: Maybe<Scalars['ID']['output']>;
  /** Quantity of product */
  baseQuantity?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  code: Scalars['String']['output'];
  /** Date and time a task is completed */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** x coordinate location */
  completedAtLocationX?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  completedAtLocationY?: Maybe<Scalars['Float']['output']>;
  completedByTeamId?: Maybe<Scalars['ID']['output']>;
  completedByUserId?: Maybe<Scalars['ID']['output']>;
  /** Unit of measure ID */
  completedInUnitOfMeasureId?: Maybe<Scalars['ID']['output']>;
  /**
   * Date the task was completed
   * @deprecated no longer in use
   */
  completionDate?: Maybe<Scalars['DateTime']['output']>;
  /** Count accuracy */
  countAccuracy?: Maybe<Scalars['Float']['output']>;
  /** Indicates whether the count should be guided or blind */
  countType?: Maybe<PhysicalInventoryCountType>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Unit of measure ID */
  createdInUnitOfMeasureId?: Maybe<Scalars['ID']['output']>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  delivery?: Maybe<Delivery>;
  /** Delivery ID (foreign key) */
  deliveryId?: Maybe<Scalars['ID']['output']>;
  deliveryItem?: Maybe<DeliveryItem>;
  /** Delivery item ID (foreign key) */
  deliveryItemId?: Maybe<Scalars['ID']['output']>;
  destinationBin?: Maybe<Bin>;
  /** Destination bin ID (foreign key) */
  destinationBinId?: Maybe<Scalars['ID']['output']>;
  destinationLicensePlate?: Maybe<LicensePlate>;
  /** Destination license plate ID */
  destinationLicensePlateId?: Maybe<Scalars['ID']['output']>;
  destinationLot?: Maybe<Lot>;
  /** Destination lot ID (foreign key) */
  destinationLotId?: Maybe<Scalars['ID']['output']>;
  destinationStockStatus?: Maybe<StockStatusType>;
  /** Destination stock status type ID (foreign key) */
  destinationStockStatusId?: Maybe<Scalars['ID']['output']>;
  /** Date the task is or was due */
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Type of equipment, i.e. forklift */
  equipmentTypeId?: Maybe<Scalars['ID']['output']>;
  fulfillmentItem?: Maybe<FulfillmentItem>;
  /** Fulfillment item id (foreign key) */
  fulfillmentItemId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity ID */
  internalStockOrderItemId?: Maybe<Scalars['ID']['output']>;
  inventoryCategory: PmInventoryCategory;
  linkedTaskId?: Maybe<Scalars['ID']['output']>;
  /** Meta data stored on the entity in json format */
  metaData?: Maybe<Scalars['JSON']['output']>;
  /** Entity's parent task ID */
  parentTaskId?: Maybe<Scalars['ID']['output']>;
  product?: Maybe<Product>;
  /** Entity's product ID (foreign key) */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Quantity of product */
  quantity?: Maybe<Scalars['String']['output']>;
  /** Task that is display only */
  readonly?: Maybe<Scalars['Boolean']['output']>;
  /** Referring doc */
  referringDoc?: Maybe<Scalars['String']['output']>;
  /** Reference item */
  referringDocItem?: Maybe<Scalars['String']['output']>;
  sourceBin?: Maybe<Bin>;
  /** Source bin ID (foreign key) */
  sourceBinId?: Maybe<Scalars['ID']['output']>;
  sourceLicensePlate?: Maybe<LicensePlate>;
  /** Source License Plate Id */
  sourceLicensePlateId?: Maybe<Scalars['ID']['output']>;
  sourceLot?: Maybe<Lot>;
  /** Source lot ID (foreign key) */
  sourceLotId?: Maybe<Scalars['ID']['output']>;
  sourceStockStatus?: Maybe<StockStatusType>;
  /** Source stock status type ID (foreign key) */
  sourceStockStatusId?: Maybe<Scalars['ID']['output']>;
  /** Date and time a task is started */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** x coordinate location */
  startedAtLocationX?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  startedAtLocationY?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  startedByTeamId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  startedByUserId?: Maybe<Scalars['ID']['output']>;
  /** Task status, i.e Not Started */
  status?: Maybe<TaskStatus>;
  /** Entity ID */
  taskGroupId?: Maybe<Scalars['ID']['output']>;
  /** Position in order within a task group */
  taskGroupPosition?: Maybe<Scalars['Float']['output']>;
  taskType?: Maybe<TaskType>;
  /** Task type ID (foreign key) */
  taskTypeId: Scalars['ID']['output'];
  /** @deprecated deprecated - use assignedTeam */
  team?: Maybe<Team>;
  /**
   * Entity's team ID (foreign key)
   * @deprecated no longer in use
   */
  teamId?: Maybe<Scalars['ID']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /**
   * Entity's user ID (foreign key)
   * @deprecated no longer in use
   */
  userId?: Maybe<Scalars['ID']['output']>;
  warehouse?: Maybe<Warehouse>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type TaskApprovePiInput = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  taskId: Scalars['ID']['input'];
};

export type TaskAssignDto = {
  /** Entity's team ID (foreign key) */
  assignTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['input'];
};

export type TaskBlockInput = {
  /** Entity's bin ID (foreign key) */
  binId: Scalars['String']['input'];
  /** Entity's task ID (foreign key) */
  taskId: Scalars['String']['input'];
};

export type TaskBlockInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TaskBlockInput;
};

export type TaskCancelManyDto = {
  /** Entity ID */
  id: Scalars['String']['input'];
};

export type TaskCancelPutawayInput = {
  /** Delivery ID (foreign key) */
  id: Scalars['ID']['input'];
};

export type TaskCompleteBinToBinInput = {
  /** Unit of measure ID */
  completedInUnitOfMeasureId: Scalars['ID']['input'];
  /** Quantity of product */
  quantity: Scalars['String']['input'];
  /** Entity's task ID (foreign key) */
  taskId?: InputMaybe<Scalars['ID']['input']>;
};

export type TaskCompleteLicensePlateBinToBinMovement = {
  /** Entity's bin ID (foreign key) */
  overrideDestinationBinId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['input'];
};

export type TaskCompleteLicensePlateMovement = {
  /** Unit of measure ID */
  completedInUnitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
  /** Quantity of product */
  quantity: Scalars['String']['input'];
  /** Entity's user ID (foreign key) */
  taskId?: InputMaybe<Scalars['ID']['input']>;
};

export type TaskCompleteLicensePlateMovementInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TaskCompleteLicensePlateMovement;
};

export type TaskCompleteLoadInput = {
  /** Entity's task ID (foreign key) */
  licensePlateId: Scalars['ID']['input'];
};

export type TaskCompleteManyLicensePlatePutawayInput = {
  /** Entity ID */
  licensePlateId: Scalars['ID']['input'];
};

export type TaskCompleteManyLicensePlatePutawayResponse = {
  __typename?: 'TaskCompleteManyLicensePlatePutawayResponse';
  /** Successful license plates */
  successful: Array<LicensePlate>;
  /** Unsuccessful license plates */
  unsuccessful: Array<LicensePlate>;
};

export type TaskCompleteManyPickToStagingInput = {
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['input'];
};

export type TaskCompleteOneIssueStockInput = {
  /** Entity's task ID (foreign key) */
  taskId?: InputMaybe<Scalars['ID']['input']>;
};

export type TaskCompleteOneLoadInput = {
  /** Entity's task ID (foreign key) */
  licensePlateId: Scalars['ID']['input'];
  /** Entity's task ID (foreign key) */
  taskId?: InputMaybe<Scalars['ID']['input']>;
};

export type TaskCompleteOneOfManyUnloadInput = {
  /** Unit of measure ID */
  completedInUnitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Quantity of product */
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['input'];
};

export type TaskCompleteOnePickToStagingInput = {
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['input'];
};

export type TaskCompleteOneUnloadInput = {
  /** Unit of measure ID */
  completedInUnitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
  /** Destination bin ID */
  destinationBinId: Scalars['ID']['input'];
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Quantity of product */
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['input'];
};

export type TaskCompletePiInput = {
  /** Type of physical inventory adjustment */
  adjustmentType: AdjustmentType;
  /** Unit of measure ID */
  completedInUnitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
  /** Damaged quantity during cycle count */
  damagedCount?: InputMaybe<Scalars['String']['input']>;
  /** New quantity during cycle count */
  newCount?: InputMaybe<Scalars['String']['input']>;
};

export type TaskCompletePickInput = {
  /** Unit of measure ID */
  completedInUnitOfMeasureId: Scalars['ID']['input'];
  /** Source License Plate Id */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Quantity of product */
  quantity: Scalars['String']['input'];
  /** Source bin ID (foreign key) */
  sourceBinId: Scalars['ID']['input'];
  /** Source lot ID (foreign key) */
  sourceLotId?: InputMaybe<Scalars['ID']['input']>;
};

export type TaskCompletePutawayInput = {
  /** Unit of measure ID */
  completedInUnitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
  /** Destination bin ID (foreign key) */
  destinationBinId: Scalars['ID']['input'];
  /** Quantity of product */
  quantity?: InputMaybe<Scalars['String']['input']>;
};

export type TaskCompleteUnloadInput = {
  /** Entity's task ID (foreign key) */
  licensePlateId: Scalars['ID']['input'];
  /** Entity's task ID (foreign key) */
  taskId?: InputMaybe<Scalars['ID']['input']>;
};

export type TaskCreateBinPiInput = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  binId: Scalars['ID']['input'];
  /** Indicates whether the count should be guided or blind */
  countType?: InputMaybe<PhysicalInventoryCountType>;
  /** Date the task is or was due */
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreateBinToBinInput = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Autocomplete the task on creation */
  autocomplete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Unit of measure ID */
  createdInUnitOfMeasureId: Scalars['ID']['input'];
  /** Entity ID */
  deliveryItemId?: InputMaybe<Scalars['ID']['input']>;
  /** Destination bin ID */
  destinationBinId: Scalars['ID']['input'];
  /** Destination lot ID (foreign key) */
  destinationLotId?: InputMaybe<Scalars['ID']['input']>;
  /** Destination stock status type ID (foreign key) */
  destinationStockStatusId?: InputMaybe<Scalars['ID']['input']>;
  /** Date the task is or was due */
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Entity ID */
  fulfillmentItemId?: InputMaybe<Scalars['ID']['input']>;
  /** Meta data stored on the entity in json format */
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Quantity of product */
  quantity: Scalars['String']['input'];
  /** Source bin ID */
  sourceBinId: Scalars['ID']['input'];
  /** Source lot ID (foreign key) */
  sourceLotId?: InputMaybe<Scalars['ID']['input']>;
  /** Source stock status type ID (foreign key) */
  sourceStockStatusId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type TaskCreateInput = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
};

export type TaskCreateManyBinPiInput = {
  countItems: Array<TaskCreateBinPiInput>;
};

export type TaskCreateOneInput = {
  /** The record to create */
  task: TaskCreateInput;
};

export type TaskCreateOnePickToStagingInput = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Fulfillment item id (foreign key) */
  fulfillmentItemId: Scalars['ID']['input'];
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Quantity of product */
  quantity: Scalars['String']['input'];
  /** Entity's bin ID (foreign key) */
  sourceBinId: Scalars['ID']['input'];
  /** Entity's license plate ID (foreign key) */
  sourceLicensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Source lot ID (foreign key) */
  sourceLotId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's stock status type ID (foreign key) */
  sourceStockStatusId: Scalars['ID']['input'];
};

export type TaskCreatePiInput = {
  /** Type of physical inventory adjustment */
  adjustmentType?: InputMaybe<AdjustmentType>;
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Autocomplete the task on creation */
  autocomplete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Entity's bin ID (foreign key) */
  binId: Scalars['ID']['input'];
  /** Unit of measure ID */
  createdInUnitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
  /** Damaged quantity during cycle count */
  damagedCount?: InputMaybe<Scalars['String']['input']>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's lot ID (foreign key) */
  lotId?: InputMaybe<Scalars['ID']['input']>;
  /** New quantity during cycle count */
  newCount?: InputMaybe<Scalars['String']['input']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Entity's stock status type ID (foreign key) */
  stockStatusId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type TaskCreatePickInput = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Fulfillment Id */
  fulfillmentItemsToPick: Array<TaskPickFulfillmentItem>;
  /** Fulfillment Id */
  id: Scalars['ID']['input'];
};

export type TaskCreatePickToStagingResourceDto = {
  __typename?: 'TaskCreatePickToStagingResourceDto';
  /** Fulfillment items with a pick to staging task being created */
  created: Array<FulfillmentItem>;
  /** Fulfillment items with a pick to staging that has already been created */
  hasTask: Array<FulfillmentItem>;
  /** Fulfillment items with no stock available to create pick to staging tasks */
  noStockFound: Array<FulfillmentItem>;
};

export type TaskCreatePutawayInput = {
  /** Entity's team ID (foreign key) */
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Delivery ID (foreign key) */
  id: Scalars['ID']['input'];
  looseProducts?: InputMaybe<Array<TaskLooseProductsInput>>;
};

export type TaskCreateStockFromProductionDto = {
  /** Entity code */
  binCode: Scalars['String']['input'];
  /** License Plate To Create */
  licensePlate?: InputMaybe<LicensePlateCreateStockFromProductionDto>;
  referenceDocument?: InputMaybe<Scalars['String']['input']>;
  /** Stock to create */
  stock: Array<StockCreateStockFromProductionDto>;
  /** Entity code */
  warehouseCode: Scalars['String']['input'];
};

export type TaskDispatchDto = {
  /** Entity code */
  binCode: Scalars['String']['input'];
  /** Entity code */
  destinationBinCode?: InputMaybe<Scalars['String']['input']>;
  /** Entity code */
  erpCode: Scalars['String']['input'];
  /** Entity code */
  warehouseCode: Scalars['String']['input'];
};

export type TaskDispatchDtoInput = {
  /** Dto wrapper */
  dispatchTask: TaskDispatchDto;
};

export type TaskDispositionImages = {
  /** ID of stored image */
  imageId: Scalars['ID']['input'];
};

export type TaskFilter = {
  and?: InputMaybe<Array<TaskFilter>>;
  assignedAt?: InputMaybe<DateFieldComparison>;
  assignedByUserId?: InputMaybe<IdFilterComparison>;
  assignedTeamId?: InputMaybe<IdFilterComparison>;
  assignedUserId?: InputMaybe<IdFilterComparison>;
  baseQuantity?: InputMaybe<StringFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  completedAt?: InputMaybe<DateFieldComparison>;
  completedAtLocationX?: InputMaybe<FloatFieldComparison>;
  completedAtLocationY?: InputMaybe<FloatFieldComparison>;
  completedByTeamId?: InputMaybe<IdFilterComparison>;
  completedByUserId?: InputMaybe<IdFilterComparison>;
  completionDate?: InputMaybe<DateFieldComparison>;
  countAccuracy?: InputMaybe<FloatFieldComparison>;
  countType?: InputMaybe<PhysicalInventoryCountTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deliveryId?: InputMaybe<IdFilterComparison>;
  deliveryItemId?: InputMaybe<IdFilterComparison>;
  destinationBinId?: InputMaybe<IdFilterComparison>;
  destinationLicensePlateId?: InputMaybe<IdFilterComparison>;
  destinationLotId?: InputMaybe<IdFilterComparison>;
  destinationStockStatusId?: InputMaybe<IdFilterComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  equipmentTypeId?: InputMaybe<IdFilterComparison>;
  fulfillmentItemId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  internalStockOrderItemId?: InputMaybe<IdFilterComparison>;
  inventoryCategory?: InputMaybe<PmInventoryCategoryFilterComparison>;
  linkedTaskId?: InputMaybe<IdFilterComparison>;
  metaData?: InputMaybe<JsonFilterComparison>;
  or?: InputMaybe<Array<TaskFilter>>;
  parentTaskId?: InputMaybe<IdFilterComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<StringFieldComparison>;
  readonly?: InputMaybe<BooleanFieldComparison>;
  referringDoc?: InputMaybe<StringFieldComparison>;
  referringDocItem?: InputMaybe<StringFieldComparison>;
  sourceBinId?: InputMaybe<IdFilterComparison>;
  sourceLicensePlateId?: InputMaybe<IdFilterComparison>;
  sourceLotId?: InputMaybe<IdFilterComparison>;
  sourceStockStatusId?: InputMaybe<IdFilterComparison>;
  startedAt?: InputMaybe<DateFieldComparison>;
  startedAtLocationX?: InputMaybe<FloatFieldComparison>;
  startedAtLocationY?: InputMaybe<FloatFieldComparison>;
  startedByTeamId?: InputMaybe<IdFilterComparison>;
  startedByUserId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<TaskStatusFilterComparison>;
  taskGroupId?: InputMaybe<IdFilterComparison>;
  taskGroupPosition?: InputMaybe<FloatFieldComparison>;
  taskType?: InputMaybe<TaskFilterTaskTypeFilter>;
  taskTypeId?: InputMaybe<IdFilterComparison>;
  teamId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  userId?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type TaskFilterTaskTypeFilter = {
  and?: InputMaybe<Array<TaskFilterTaskTypeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskFilterTaskTypeFilter>>;
  referenceCategory?: InputMaybe<TaskTypeReferenceCategoryFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

/** Task group model */
export type TaskGroup = {
  __typename?: 'TaskGroup';
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  assignedByUserId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  assignedTeamId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  assignedUserId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  code: Scalars['String']['output'];
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** x coordinate location */
  completedAtLocationX?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  completedAtLocationY?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  completedByUserId?: Maybe<Scalars['ID']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  plannedCompletionAt?: Maybe<Scalars['DateTime']['output']>;
  plannedStartAt?: Maybe<Scalars['DateTime']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** x coordinate location */
  startedAtLocationX?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  startedAtLocationY?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  startedByUserId?: Maybe<Scalars['ID']['output']>;
  /** Task status, i.e Not Started */
  status: TaskGroupTaskStatus;
  /** Entity ID */
  taskTypeId?: Maybe<Scalars['ID']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  warehouse: Warehouse;
  /** Entity ID */
  warehouseId: Scalars['ID']['output'];
};

export type TaskGroupCreateInput = {
  /** Task status, i.e Not Started */
  status: TaskStatus;
  /** Entity ID */
  taskTypeId: Scalars['ID']['input'];
  /** Entity ID */
  teamId: Scalars['ID']['input'];
  /** Entity ID */
  userId: Scalars['ID']['input'];
  /** Entity ID */
  warehouseId: Scalars['ID']['input'];
};

export type TaskGroupCreateOneInput = {
  /** The record to create */
  taskGroup: TaskGroupCreateInput;
};

export type TaskGroupFilter = {
  and?: InputMaybe<Array<TaskGroupFilter>>;
  assignedAt?: InputMaybe<DateFieldComparison>;
  assignedByUserId?: InputMaybe<IdFilterComparison>;
  assignedTeamId?: InputMaybe<IdFilterComparison>;
  assignedUserId?: InputMaybe<IdFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  completedAt?: InputMaybe<DateFieldComparison>;
  completedAtLocationX?: InputMaybe<FloatFieldComparison>;
  completedAtLocationY?: InputMaybe<FloatFieldComparison>;
  completedByUserId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskGroupFilter>>;
  plannedCompletionAt?: InputMaybe<DateFieldComparison>;
  plannedStartAt?: InputMaybe<DateFieldComparison>;
  startedAt?: InputMaybe<DateFieldComparison>;
  startedAtLocationX?: InputMaybe<FloatFieldComparison>;
  startedAtLocationY?: InputMaybe<FloatFieldComparison>;
  startedByUserId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<TaskGroupTaskStatusFilterComparison>;
  taskTypeId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type TaskGroupOffsetConnection = {
  __typename?: 'TaskGroupOffsetConnection';
  /** Array of nodes. */
  nodes: Array<TaskGroup>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type TaskGroupSort = {
  direction: SortDirection;
  field: TaskGroupSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TaskGroupSortFields {
  AssignedAt = 'assignedAt',
  AssignedByUserId = 'assignedByUserId',
  AssignedTeamId = 'assignedTeamId',
  AssignedUserId = 'assignedUserId',
  Code = 'code',
  CompletedAt = 'completedAt',
  CompletedAtLocationX = 'completedAtLocationX',
  CompletedAtLocationY = 'completedAtLocationY',
  CompletedByUserId = 'completedByUserId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  PlannedCompletionAt = 'plannedCompletionAt',
  PlannedStartAt = 'plannedStartAt',
  StartedAt = 'startedAt',
  StartedAtLocationX = 'startedAtLocationX',
  StartedAtLocationY = 'startedAtLocationY',
  StartedByUserId = 'startedByUserId',
  Status = 'status',
  TaskTypeId = 'taskTypeId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export type TaskGroupStartDto = {
  /** x coordinate location */
  startedAtLocationX?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  startedAtLocationY?: InputMaybe<Scalars['Float']['input']>;
  /** Task Group Id */
  taskGroupId: Scalars['ID']['input'];
};

export type TaskGroupTaskResource = {
  __typename?: 'TaskGroupTaskResource';
  estimatedTimeToComplete: Scalars['Float']['output'];
  taskCount: Scalars['Int']['output'];
};

export enum TaskGroupTaskStatus {
  Cancelled = 'cancelled',
  Complete = 'complete',
  InProgress = 'inProgress',
  NotStarted = 'notStarted',
  Planned = 'planned'
}

export type TaskGroupTaskStatusFilterComparison = {
  eq?: InputMaybe<TaskGroupTaskStatus>;
  gt?: InputMaybe<TaskGroupTaskStatus>;
  gte?: InputMaybe<TaskGroupTaskStatus>;
  iLike?: InputMaybe<TaskGroupTaskStatus>;
  in?: InputMaybe<Array<TaskGroupTaskStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<TaskGroupTaskStatus>;
  lt?: InputMaybe<TaskGroupTaskStatus>;
  lte?: InputMaybe<TaskGroupTaskStatus>;
  neq?: InputMaybe<TaskGroupTaskStatus>;
  notILike?: InputMaybe<TaskGroupTaskStatus>;
  notIn?: InputMaybe<Array<TaskGroupTaskStatus>>;
  notLike?: InputMaybe<TaskGroupTaskStatus>;
};

export type TaskGroupUpdateInput = {
  /** Task status, i.e Not Started */
  status?: InputMaybe<TaskStatus>;
  /** Entity ID */
  taskTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  teamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  userId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type TaskGroupUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: TaskGroupUpdateInput;
};

export type TaskLpStockStatusHuUserStatusUpdateDto = {
  /** Array of Hu User Status Codes */
  huUserCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Entity ID or Code Dto */
  licensePlate: IdOrCodeDto;
  /** License plate stock */
  stock: Array<TaskLpStockStatusStockDetailDto>;
};

export type TaskLpStockStatusStockDetailDto = {
  /** Entity ID or Code Dto */
  lot?: InputMaybe<IdOrCodeDto>;
  /** Entity ID or Code Dto */
  product: IdOrCodeDto;
  /** Quantity of product */
  quantity: Scalars['String']['input'];
  sapStockType: Scalars['String']['input'];
  /** Entity ID or Code Dto */
  unitOfMeasure: IdOrCodeDto;
};

export type TaskLicensePlateStockStatusCompleteOneDto = {
  licensePlateId?: InputMaybe<Scalars['ID']['input']>;
  taskId?: InputMaybe<Scalars['ID']['input']>;
};

export type TaskLicensePlateStockStatusImages = {
  /** ID of stored image */
  imageId: Scalars['ID']['input'];
};

export type TaskLicensePlateUnpackInputCompleteDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: LicensePlateUnpackLicensePlateCompleteDto;
};

export type TaskLicensePlateUnpackInputCreateDto = {
  /** The record to create */
  licensePlateUnpack: LicensePlateUnpackLicensePlateDto;
};

export type TaskLooseProductsInput = {
  /** Entity's bin ID (foreign key) */
  binId: Scalars['ID']['input'];
  /** Unit of measure ID */
  createdInUnitOfMeasureId: Scalars['ID']['input'];
  /** Entity's lot ID (foreign key) */
  lotId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Quantity of product */
  quantity: Scalars['String']['input'];
  /** Entity's stock status type ID (foreign key) */
  stockStatusTypeId: Scalars['ID']['input'];
};

export type TaskOffsetConnection = {
  __typename?: 'TaskOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Task>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type TaskPickFulfillmentItem = {
  /** Unit of measure ID */
  createdInUnitOfMeasureId: Scalars['ID']['input'];
  /** Fulfillment item id (foreign key) */
  fulfillmentItemId: Scalars['ID']['input'];
  /** Entity's lot ID (foreign key) */
  lotId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Quantity of product */
  quantity: Scalars['String']['input'];
};

/** Task Search results */
export type TaskSearchResults = {
  __typename?: 'TaskSearchResults';
  childrenTasks?: Maybe<Array<TaskSearchResults>>;
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Created at date */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['String']['output']>;
  /** Destination bin code */
  destinationBinCode?: Maybe<Scalars['String']['output']>;
  /** Destination license plate code */
  destinationLicensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Destination lot associated with the entity */
  destinationLotCode?: Maybe<Scalars['String']['output']>;
  /** Due date */
  dueDate?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Elasticsearch index name */
  index?: Maybe<Scalars['String']['output']>;
  /** Product code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Product entity belongs to */
  productDescription?: Maybe<Scalars['String']['output']>;
  shipTo?: Maybe<Scalars['String']['output']>;
  shipToBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  shipToName?: Maybe<Scalars['String']['output']>;
  soldTo?: Maybe<Scalars['String']['output']>;
  soldToBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  soldToName?: Maybe<Scalars['String']['output']>;
  /** Source lot code associated with the entity */
  sourcLotCode?: Maybe<Scalars['String']['output']>;
  /** Source bin code */
  sourceBinCode?: Maybe<Scalars['String']['output']>;
  /** Source License Plate code */
  sourceLicensePlateCode?: Maybe<Scalars['String']['output']>;
  supplier?: Maybe<Scalars['String']['output']>;
  supplierBusinessPartnerId?: Maybe<Scalars['ID']['output']>;
  supplierName?: Maybe<Scalars['String']['output']>;
  /** Task type code */
  taskType?: Maybe<Scalars['String']['output']>;
  /** Task type label */
  taskTypeLabel?: Maybe<Scalars['String']['output']>;
  /** Entity's team description */
  teamDescription?: Maybe<Scalars['String']['output']>;
  /** Entity's team name */
  teamName?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Warehouse code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse name */
  warehouseName?: Maybe<Scalars['String']['output']>;
};

export type TaskSort = {
  direction: SortDirection;
  field: TaskSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TaskSortFields {
  AssignedAt = 'assignedAt',
  AssignedByUserId = 'assignedByUserId',
  AssignedTeamId = 'assignedTeamId',
  AssignedUserId = 'assignedUserId',
  BaseQuantity = 'baseQuantity',
  Code = 'code',
  CompletedAt = 'completedAt',
  CompletedAtLocationX = 'completedAtLocationX',
  CompletedAtLocationY = 'completedAtLocationY',
  CompletedByTeamId = 'completedByTeamId',
  CompletedByUserId = 'completedByUserId',
  CompletionDate = 'completionDate',
  CountAccuracy = 'countAccuracy',
  CountType = 'countType',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DeliveryId = 'deliveryId',
  DeliveryItemId = 'deliveryItemId',
  DestinationBinId = 'destinationBinId',
  DestinationLicensePlateId = 'destinationLicensePlateId',
  DestinationLotId = 'destinationLotId',
  DestinationStockStatusId = 'destinationStockStatusId',
  DueDate = 'dueDate',
  EquipmentTypeId = 'equipmentTypeId',
  FulfillmentItemId = 'fulfillmentItemId',
  Id = 'id',
  InternalStockOrderItemId = 'internalStockOrderItemId',
  InventoryCategory = 'inventoryCategory',
  LinkedTaskId = 'linkedTaskId',
  MetaData = 'metaData',
  ParentTaskId = 'parentTaskId',
  ProductId = 'productId',
  Quantity = 'quantity',
  Readonly = 'readonly',
  ReferringDoc = 'referringDoc',
  ReferringDocItem = 'referringDocItem',
  SourceBinId = 'sourceBinId',
  SourceLicensePlateId = 'sourceLicensePlateId',
  SourceLotId = 'sourceLotId',
  SourceStockStatusId = 'sourceStockStatusId',
  StartedAt = 'startedAt',
  StartedAtLocationX = 'startedAtLocationX',
  StartedAtLocationY = 'startedAtLocationY',
  StartedByTeamId = 'startedByTeamId',
  StartedByUserId = 'startedByUserId',
  Status = 'status',
  TaskGroupId = 'taskGroupId',
  TaskGroupPosition = 'taskGroupPosition',
  TaskTypeId = 'taskTypeId',
  TeamId = 'teamId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  UserId = 'userId',
  WarehouseId = 'warehouseId'
}

export type TaskStartDto = {
  /** x coordinate location */
  startedAtLocationX?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  startedAtLocationY?: InputMaybe<Scalars['Float']['input']>;
  /** Entity's task ID (foreign key) */
  taskId: Scalars['ID']['input'];
};

export enum TaskStatus {
  Cancelled = 'cancelled',
  Complete = 'complete',
  InProgress = 'inProgress',
  NotStarted = 'notStarted',
  Planned = 'planned'
}

export type TaskStatusFilterComparison = {
  eq?: InputMaybe<TaskStatus>;
  gt?: InputMaybe<TaskStatus>;
  gte?: InputMaybe<TaskStatus>;
  iLike?: InputMaybe<TaskStatus>;
  in?: InputMaybe<Array<TaskStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<TaskStatus>;
  lt?: InputMaybe<TaskStatus>;
  lte?: InputMaybe<TaskStatus>;
  neq?: InputMaybe<TaskStatus>;
  notILike?: InputMaybe<TaskStatus>;
  notIn?: InputMaybe<Array<TaskStatus>>;
  notLike?: InputMaybe<TaskStatus>;
};

/** Task Type model */
export type TaskType = {
  __typename?: 'TaskType';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label: Scalars['String']['output'];
  /** Task type reference category */
  referenceCategory?: Maybe<TaskTypeReferenceCategory>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type TaskTypeAnalyticsFilter = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  warehouseId: Scalars['ID']['input'];
};

export type TaskTypeAnalyticsResponse = {
  __typename?: 'TaskTypeAnalyticsResponse';
  taskTypeAndFrequency: Array<TaskTypeWithFrequency>;
  total: Scalars['Float']['output'];
};

export type TaskTypeBinStatusBinsQueryDto = {
  __typename?: 'TaskTypeBinStatusBinsQueryDto';
  /** Aisle where the bin is located */
  aisle?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  areaCode?: Maybe<Scalars['String']['output']>;
  /** Entity's area ID (foreign key) */
  areaId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Column where the bin is located. */
  column?: Maybe<Scalars['String']['output']>;
  containsProducts?: Maybe<Scalars['Boolean']['output']>;
  /** Destination bin block flag */
  destinationBinBlock?: Maybe<BinBlockState>;
  hasOpenTasks?: Maybe<Scalars['Boolean']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Active/Inactive bin status flag */
  inactive?: Maybe<BinActiveState>;
  /** Timestamp of latest inventory count approval */
  lastCount?: Maybe<Scalars['DateTime']['output']>;
  /** Timestamp of latest movement */
  lastMovement?: Maybe<Scalars['DateTime']['output']>;
  /** Level where the bin is located. */
  level?: Maybe<Scalars['Float']['output']>;
  /** Source bin block flag */
  sourceBinBlock?: Maybe<BinBlockState>;
  /** Verification code from a barcode scan */
  verificationCode?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** x coordinate location */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  y?: Maybe<Scalars['Float']['output']>;
};

export type TaskTypeBinStatusBinsQueryDtoFilter = {
  aisle?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<TaskTypeBinStatusBinsQueryDtoFilter>>;
  areaCode?: InputMaybe<StringFieldComparison>;
  areaId?: InputMaybe<IdFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  column?: InputMaybe<StringFieldComparison>;
  containsProducts?: InputMaybe<BooleanFieldComparison>;
  hasOpenTasks?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastCount?: InputMaybe<DateFieldComparison>;
  lastMovement?: InputMaybe<DateFieldComparison>;
  level?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<TaskTypeBinStatusBinsQueryDtoFilter>>;
  verificationCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
};

export type TaskTypeBinStatusBinsQueryDtoSort = {
  direction: SortDirection;
  field: TaskTypeBinStatusBinsQueryDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TaskTypeBinStatusBinsQueryDtoSortFields {
  Aisle = 'aisle',
  AreaCode = 'areaCode',
  AreaId = 'areaId',
  Code = 'code',
  Column = 'column',
  ContainsProducts = 'containsProducts',
  HasOpenTasks = 'hasOpenTasks',
  Id = 'id',
  LastCount = 'lastCount',
  LastMovement = 'lastMovement',
  Level = 'level',
  VerificationCode = 'verificationCode',
  WarehouseId = 'warehouseId',
  X = 'x',
  Y = 'y'
}

export type TaskTypeBinStatusDestinationBins = {
  __typename?: 'TaskTypeBinStatusDestinationBins';
  /** Array of valid destination bins */
  destinationBins: Array<ViewBin>;
};

export type TaskTypeBinStatusForLicensePlateValidationInput = {
  destinationLicensePlateId?: InputMaybe<Scalars['ID']['input']>;
  sourceLicensePlateId?: InputMaybe<Scalars['ID']['input']>;
};

export type TaskTypeBinStatusMappingReplaceInput = {
  /** Bin status mappings for the task type */
  binStatusMappings?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type TaskTypeBinStatusReplaceInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TaskTypeBinStatusMappingReplaceInput;
};

export type TaskTypeBinStatusSourceBins = {
  __typename?: 'TaskTypeBinStatusSourceBins';
  /** Array of valid source bins */
  sourceBins: Array<ViewBin>;
};

export type TaskTypeBinStatusValidationInput = {
  destinationBinId?: InputMaybe<Scalars['ID']['input']>;
  sourceBinId?: InputMaybe<Scalars['ID']['input']>;
};

export enum TaskTypeCodes {
  AdjustStock = 'adjustStock',
  BinToBinMovement = 'binToBinMovement',
  ChangeStockStatus = 'changeStockStatus',
  CountBin = 'countBin',
  DeliveryBinImport = 'deliveryBinImport',
  DeliveryPutawayTask = 'deliveryPutawayTask',
  FoundStock = 'foundStock',
  FulfillmentPickTask = 'fulfillmentPickTask',
  InitialImport = 'initialImport',
  InventoryCount = 'inventoryCount',
  InventoryCountApproval = 'inventoryCountApproval',
  IssueStock = 'issueStock',
  LicensePlateBinToBinMovement = 'licensePlateBinToBinMovement',
  LicensePlateLoad = 'licensePlateLoad',
  LicensePlateMerge = 'licensePlateMerge',
  LicensePlateMovement = 'licensePlateMovement',
  LicensePlatePick = 'licensePlatePick',
  LicensePlatePutaway = 'licensePlatePutaway',
  LicensePlateUnpackTask = 'licensePlateUnpackTask',
  Load = 'load',
  PickToStaging = 'pickToStaging',
  ReceiptFromProduction = 'receiptFromProduction',
  SoPickToDock = 'soPickToDock',
  StoPickToDock = 'stoPickToDock',
  Unload = 'unload'
}

export type TaskTypeCreateInput = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  label: Scalars['String']['input'];
};

export type TaskTypeCreateOneInput = {
  /** The record to create */
  taskType: TaskTypeCreateInput;
};

export type TaskTypeFilter = {
  and?: InputMaybe<Array<TaskTypeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskTypeFilter>>;
  referenceCategory?: InputMaybe<TaskTypeReferenceCategoryFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type TaskTypeOffsetConnection = {
  __typename?: 'TaskTypeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<TaskType>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export enum TaskTypeReferenceCategory {
  Count = 'count',
  InboundDelivery = 'inboundDelivery',
  OutboundFulfillment = 'outboundFulfillment'
}

export type TaskTypeReferenceCategoryFilterComparison = {
  eq?: InputMaybe<TaskTypeReferenceCategory>;
  gt?: InputMaybe<TaskTypeReferenceCategory>;
  gte?: InputMaybe<TaskTypeReferenceCategory>;
  iLike?: InputMaybe<TaskTypeReferenceCategory>;
  in?: InputMaybe<Array<TaskTypeReferenceCategory>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<TaskTypeReferenceCategory>;
  lt?: InputMaybe<TaskTypeReferenceCategory>;
  lte?: InputMaybe<TaskTypeReferenceCategory>;
  neq?: InputMaybe<TaskTypeReferenceCategory>;
  notILike?: InputMaybe<TaskTypeReferenceCategory>;
  notIn?: InputMaybe<Array<TaskTypeReferenceCategory>>;
  notLike?: InputMaybe<TaskTypeReferenceCategory>;
};

export type TaskTypeSort = {
  direction: SortDirection;
  field: TaskTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TaskTypeSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Label = 'label',
  ReferenceCategory = 'referenceCategory',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type TaskTypeStatusCount = {
  __typename?: 'TaskTypeStatusCount';
  complete: Scalars['Float']['output'];
  inProgress: Scalars['Float']['output'];
  notStarted: Scalars['Float']['output'];
};

export type TaskTypeStockStatusForLicensePlateValidationInput = {
  licensePlateId: Scalars['ID']['input'];
};

export type TaskTypeStockStatusMappingReplaceInput = {
  /** Stock status mappings for the task type */
  stockStatusMappings?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type TaskTypeStockStatusMappingReplaceInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TaskTypeStockStatusMappingReplaceInput;
};

export type TaskTypeStockStatusValidationInput = {
  stockStatusId: Scalars['ID']['input'];
};

export type TaskTypeUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  label?: InputMaybe<Scalars['String']['input']>;
};

export type TaskTypeUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: TaskTypeUpdateInput;
};

export type TaskTypeWithFrequency = {
  __typename?: 'TaskTypeWithFrequency';
  count: Scalars['Int']['output'];
  statusCount: TaskTypeStatusCount;
  taskType: TaskType;
};

export type TaskUpdateInput = {
  /** Deleted at date */
  assignedAt?: InputMaybe<Scalars['DateTime']['input']>;
  assignedByUserId?: InputMaybe<Scalars['ID']['input']>;
  assignedTeamId?: InputMaybe<Scalars['ID']['input']>;
  assignedUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Autocomplete the task on creation */
  autocomplete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Date and time a task is completed */
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** x coordinate location */
  completedAtLocationX?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  completedAtLocationY?: InputMaybe<Scalars['Float']['input']>;
  completedByUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Date the task was completed */
  completionDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Unit of measure ID */
  createdInUnitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
  /** Delivery ID (foreign key) */
  deliveryId?: InputMaybe<Scalars['ID']['input']>;
  /** Delivery item ID (foreign key) */
  deliveryItemId?: InputMaybe<Scalars['ID']['input']>;
  /** Destination bin ID (foreign key) */
  destinationBinId?: InputMaybe<Scalars['ID']['input']>;
  /** Destination license plate ID */
  destinationLicensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Destination lot ID (foreign key) */
  destinationLotId?: InputMaybe<Scalars['ID']['input']>;
  /** Destination stock status type ID (foreign key) */
  destinationStockStatusId?: InputMaybe<Scalars['ID']['input']>;
  /** Date the task is or was due */
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Fulfillment item id (foreign key) */
  fulfillmentItemId?: InputMaybe<Scalars['ID']['input']>;
  /** License Plate Parent ID */
  licensePlateParentId?: InputMaybe<Scalars['ID']['input']>;
  /** Meta data stored on the entity in json format */
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  /** Entity's parent task ID */
  parentTaskId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's product ID (foreign key) */
  productId?: InputMaybe<Scalars['ID']['input']>;
  /** Quantity of product */
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** Referring doc */
  referringDoc?: InputMaybe<Scalars['String']['input']>;
  /** Reference item */
  referringDocItem?: InputMaybe<Scalars['String']['input']>;
  /** Source bin ID (foreign key) */
  sourceBinId?: InputMaybe<Scalars['ID']['input']>;
  /** Source License Plate Id */
  sourceLicensePlateId?: InputMaybe<Scalars['ID']['input']>;
  /** Source lot ID (foreign key) */
  sourceLotId?: InputMaybe<Scalars['ID']['input']>;
  /** Source stock status type ID (foreign key) */
  sourceStockStatusId?: InputMaybe<Scalars['ID']['input']>;
  /** Date and time a task is started */
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** x coordinate location */
  startedAtLocationX?: InputMaybe<Scalars['Float']['input']>;
  /** Y coordinate location */
  startedAtLocationY?: InputMaybe<Scalars['Float']['input']>;
  startedByUserId?: InputMaybe<Scalars['ID']['input']>;
  /** Task status, i.e Not Started */
  status?: InputMaybe<TaskStatus>;
  /** Task type ID (foreign key) */
  taskTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's team ID (foreign key) */
  teamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type TaskValidationErrorModel = {
  __typename?: 'TaskValidationErrorModel';
  errors?: Maybe<Array<BaseGraphqlErrorReturnType>>;
  valid: Scalars['Boolean']['output'];
};

/** Team model */
export type Team = {
  __typename?: 'Team';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Is the entity a default entity that cant be deleted */
  default: Scalars['Boolean']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description: Scalars['String']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name: Scalars['String']['output'];
  /** Team's status */
  status: TeamStatus;
  /** Team's Task Filter as an object in json format as GraphQL Query Requests expect. */
  taskFilter?: Maybe<Scalars['JSON']['output']>;
  /** Team's Task Filter as an array of filter objects */
  taskFilterArray?: Maybe<Scalars['JSON']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  users?: Maybe<Users>;
  warehouse?: Maybe<Warehouse>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type TeamCreateInput = {
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** ApiDocs */
  name: Scalars['String']['input'];
  /** Team's status */
  status?: InputMaybe<TeamStatus>;
  /** Team's Task Filter as an object in json format as GraphQL Query Requests expect. */
  taskFilter?: InputMaybe<Scalars['JSON']['input']>;
  /** Team's Task Filter as an array of filter objects */
  taskFilterArray?: InputMaybe<Scalars['JSON']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type TeamCreateOneInput = {
  /** The record to create */
  team: TeamCreateInput;
};

export type TeamFilter = {
  and?: InputMaybe<Array<TeamFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  default?: InputMaybe<BooleanFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TeamFilter>>;
  status?: InputMaybe<TeamStatusFilterComparison>;
  taskFilter?: InputMaybe<JsonFilterComparison>;
  taskFilterArray?: InputMaybe<JsonFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type TeamOffsetConnection = {
  __typename?: 'TeamOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Team>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type TeamSort = {
  direction: SortDirection;
  field: TeamSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TeamSortFields {
  CreatedAt = 'createdAt',
  Default = 'default',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  TaskFilter = 'taskFilter',
  TaskFilterArray = 'taskFilterArray',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export enum TeamStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export type TeamStatusFilterComparison = {
  eq?: InputMaybe<TeamStatus>;
  gt?: InputMaybe<TeamStatus>;
  gte?: InputMaybe<TeamStatus>;
  iLike?: InputMaybe<TeamStatus>;
  in?: InputMaybe<Array<TeamStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<TeamStatus>;
  lt?: InputMaybe<TeamStatus>;
  lte?: InputMaybe<TeamStatus>;
  neq?: InputMaybe<TeamStatus>;
  notILike?: InputMaybe<TeamStatus>;
  notIn?: InputMaybe<Array<TeamStatus>>;
  notLike?: InputMaybe<TeamStatus>;
};

export type TeamUpdateInput = {
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Team's status */
  status?: InputMaybe<TeamStatus>;
  /** Team's Task Filter as an object in json format as GraphQL Query Requests expect. */
  taskFilter?: InputMaybe<Scalars['JSON']['input']>;
  /** Team's Task Filter as an array of filter objects */
  taskFilterArray?: InputMaybe<Scalars['JSON']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type TeamUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: TeamUpdateInput;
};

/** Unit Of Measure Conversion Resource */
export type UnitOfMeasureConversion = {
  __typename?: 'UnitOfMeasureConversion';
  /** Quantity of product */
  quantity: Scalars['String']['output'];
  /** Unit of measure for entity */
  unitOfMeasure: UnitOfMeasureConversionItemResource;
};

export type UnitOfMeasureConversionItemResource = {
  __typename?: 'UnitOfMeasureConversionItemResource';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Conversion factor to convert units of measure -> Multiply against base UOM */
  conversionFactor: Scalars['Float']['output'];
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Boolean for base unit of measure if true UOM is base */
  isBaseUom: Scalars['Boolean']['output'];
  /** Entity's label */
  label?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  productId: Scalars['ID']['output'];
};

/** Unit Of Measure Conversion Resource */
export type UnitOfMeasureConversionResource = {
  __typename?: 'UnitOfMeasureConversionResource';
  /** Unit of measure for entity */
  unitOfMeasureConversions: Array<UnitOfMeasureConversion>;
};

/** Unit Of Measure Glossary model */
export type UnitOfMeasureGlossary = {
  __typename?: 'UnitOfMeasureGlossary';
  category: StandardUomCategory;
  /** Entity code */
  code: Scalars['String']['output'];
  /** Entity's company ID (foreign key) */
  companyId?: Maybe<Scalars['ID']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity code */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity code */
  internalCode: Scalars['String']['output'];
  isBaseUom?: Maybe<Scalars['Boolean']['output']>;
  /** Entity's label */
  label: Scalars['String']['output'];
  /** Unit of measure system */
  measurementSystem: StandardUomSystem;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type UnitOfMeasureGlossaryFilter = {
  and?: InputMaybe<Array<UnitOfMeasureGlossaryFilter>>;
  category?: InputMaybe<StandardUomCategoryFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  internalCode?: InputMaybe<StringFieldComparison>;
  isBaseUom?: InputMaybe<BooleanFieldComparison>;
  label?: InputMaybe<StringFieldComparison>;
  measurementSystem?: InputMaybe<StandardUomSystemFilterComparison>;
  or?: InputMaybe<Array<UnitOfMeasureGlossaryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type UnitOfMeasureGlossaryOffsetConnection = {
  __typename?: 'UnitOfMeasureGlossaryOffsetConnection';
  /** Array of nodes. */
  nodes: Array<UnitOfMeasureGlossary>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UnitOfMeasureGlossarySort = {
  direction: SortDirection;
  field: UnitOfMeasureGlossarySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UnitOfMeasureGlossarySortFields {
  Category = 'category',
  Code = 'code',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  InternalCode = 'internalCode',
  IsBaseUom = 'isBaseUom',
  Label = 'label',
  MeasurementSystem = 'measurementSystem',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type UnitOfMeasureGlossaryUpdateInput = {
  category?: InputMaybe<StandardUomCategory>;
  /** Entity's label */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Entity's company ID (foreign key) */
  companyId?: InputMaybe<Scalars['ID']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  internalCode?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  label?: InputMaybe<Scalars['String']['input']>;
};

export type UnitOfMeasureGlossaryUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: UnitOfMeasureGlossaryUpdateInput;
};

/** Unit Of Measure Product Conversion model */
export type UnitOfMeasureProductConversion = {
  __typename?: 'UnitOfMeasureProductConversion';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Conversion factor to convert units of measure -> Multiply against base UOM */
  conversionFactor: Scalars['Float']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Unit of measure for product dimensions */
  dimensionUOMId?: Maybe<Scalars['String']['output']>;
  /** Gross weight of entity */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Product's Height */
  height?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Boolean for base unit of measure if true UOM is base */
  isBaseUom: Scalars['Boolean']['output'];
  /** Product's length */
  length?: Maybe<Scalars['Float']['output']>;
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['output'];
  /** Unit of measure glossary ID */
  unitOfMeasureGlossaryId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Volume of entity */
  volume?: Maybe<Scalars['Float']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: Maybe<Scalars['String']['output']>;
  /** Boolean for base unit of measure if true UOM is base */
  warehouseUnitOfMeasure?: Maybe<Scalars['JSON']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: Maybe<Scalars['String']['output']>;
  /** Product's width */
  width?: Maybe<Scalars['Float']['output']>;
};

export type UnitOfMeasureProductConversionCreateForProductDto = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Conversion factor to convert units of measure -> Multiply against base UOM */
  conversionFactor: Scalars['Float']['input'];
  /** Unit of measure for product dimensions */
  dimensionsUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Gross weight of entity */
  grossWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Product's Height */
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Boolean for base unit of measure if true UOM is base */
  isBaseUom: Scalars['Boolean']['input'];
  /** Product's length */
  length?: InputMaybe<Scalars['Float']['input']>;
  /** Volume of entity */
  volume?: InputMaybe<Scalars['Float']['input']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: InputMaybe<Scalars['String']['input']>;
  /** Product's width */
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UnitOfMeasureProductConversionFilter = {
  and?: InputMaybe<Array<UnitOfMeasureProductConversionFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  conversionFactor?: InputMaybe<FloatFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  dimensionUOMId?: InputMaybe<StringFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  height?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isBaseUom?: InputMaybe<BooleanFieldComparison>;
  length?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<UnitOfMeasureProductConversionFilter>>;
  productId?: InputMaybe<IdFilterComparison>;
  unitOfMeasureGlossaryId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  volume?: InputMaybe<FloatFieldComparison>;
  volumeUOMId?: InputMaybe<StringFieldComparison>;
  warehouseUnitOfMeasure?: InputMaybe<JsonFilterComparison>;
  weightUOMId?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<FloatFieldComparison>;
};

export type UnitOfMeasureProductConversionNodes = {
  __typename?: 'UnitOfMeasureProductConversionNodes';
  nodes: Array<UnitOfMeasureProductConversion>;
};

export type UnitOfMeasureProductConversionOffsetConnection = {
  __typename?: 'UnitOfMeasureProductConversionOffsetConnection';
  /** Array of nodes. */
  nodes: Array<UnitOfMeasureProductConversion>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UnitOfMeasureProductConversionSort = {
  direction: SortDirection;
  field: UnitOfMeasureProductConversionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UnitOfMeasureProductConversionSortFields {
  Code = 'code',
  ConversionFactor = 'conversionFactor',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DimensionUomId = 'dimensionUOMId',
  GrossWeight = 'grossWeight',
  Height = 'height',
  Id = 'id',
  IsBaseUom = 'isBaseUom',
  Length = 'length',
  ProductId = 'productId',
  UnitOfMeasureGlossaryId = 'unitOfMeasureGlossaryId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  Volume = 'volume',
  VolumeUomId = 'volumeUOMId',
  WarehouseUnitOfMeasure = 'warehouseUnitOfMeasure',
  WeightUomId = 'weightUOMId',
  Width = 'width'
}

export type UnknownBinStockDetailDto = {
  /** Entity ID */
  licensePlateCode?: InputMaybe<Scalars['String']['input']>;
  /** Entity ID */
  lotId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  productId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** Entity ID */
  stockStatusId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  unitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
};

export type UnknownDeliveryReturnItemDto = {
  /** Entity ID */
  licensePlateCode: Scalars['String']['input'];
};

export type UpdateContactInfoDto = {
  /** Town or City */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Country */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Contact email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Fax Number */
  fax?: InputMaybe<Scalars['String']['input']>;
  /** Phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** State */
  state?: InputMaybe<Scalars['String']['input']>;
  /** Street 1 */
  street1?: InputMaybe<Scalars['String']['input']>;
  /** Street 2 */
  street2?: InputMaybe<Scalars['String']['input']>;
  /** Zip code */
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContactInfoInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateContactInfoDto;
};

export type UpdateOneDeliveryInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: DeliveryUpdateInput;
};

export type UpdateOneDispositionInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: DispositionUpdateOneDto;
};

export type UpdateOneFulfillmentBlockInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: FulfillmentBlockUpdateInput;
};

export type UpdateOneTaskInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: TaskUpdateInput;
};

export type UpdatePermissionsForRoleDto = {
  permissionIds: Array<Scalars['String']['input']>;
  /** Entity ID */
  roleId: Scalars['String']['input'];
};

export type UpdateRolesForUserGroupDto = {
  /** List of role ids to add to user group */
  roleIds: Array<Scalars['String']['input']>;
  /** Entity ID */
  userGroupId: Scalars['ID']['input'];
  /** Entity ID */
  warehouseIds: Array<Scalars['String']['input']>;
};

export type UpdateScheduledJobByIdInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ScheduledJobUpdateStatusInput;
};

export type UpdateScheduledJobInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ScheduledJobUpdateInput;
};

export type UpdateStockStatusTypeInputDto = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: StockStatusTypeUpdate;
};

export type UpdateUsersForUserGroupDto = {
  /** On or off */
  status: UserGroupMappingStatus;
  /** Entity ID */
  userGroupId: Scalars['ID']['input'];
  /** Entity ID */
  userId: Scalars['ID']['input'];
};

export type UpdateUsersForUserGroupMappingInput = {
  userGroupMappings: Array<UpdateUsersForUserGroupDto>;
};

/** User model */
export type User = {
  __typename?: 'User';
  allTeams?: Maybe<Array<Team>>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  defaultWarehouse?: Maybe<Warehouse>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  displayPreference?: Maybe<DisplayPreference>;
  displayPreferenceId?: Maybe<Scalars['ID']['output']>;
  /** Email address */
  email: Scalars['String']['output'];
  /** User's firebase auth Id */
  firebaseAuthUid?: Maybe<Scalars['String']['output']>;
  /** Person's first name */
  firstName: Scalars['String']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Person's last name */
  lastName: Scalars['String']['output'];
  mobileDetails?: Maybe<Scalars['JSON']['output']>;
  /** Phone number */
  phone?: Maybe<Scalars['String']['output']>;
  primaryTeams?: Maybe<Array<Team>>;
  /** If true entire mobileDetails object will be replaced on update otherwise update fields will merge with the object */
  refreshMobileDetails?: Maybe<Scalars['Boolean']['output']>;
  sapAuthToken?: Maybe<Scalars['String']['output']>;
  /** User's account status */
  status: UserStatus;
  type: UserType;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type UserCreateInput = {
  /** Email address */
  email: Scalars['String']['input'];
  /** User's firebase auth Id */
  firebaseAuthUid?: InputMaybe<Scalars['String']['input']>;
  /** Person's first name */
  firstName: Scalars['String']['input'];
  /** Person's last name */
  lastName: Scalars['String']['input'];
  mobileDetails?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** If true entire mobileDetails object will be replaced on update otherwise update fields will merge with the object */
  refreshMobileDetails?: InputMaybe<Scalars['Boolean']['input']>;
  /** User's account status */
  status: UserStatus;
};

export type UserCreateOneInput = {
  /** The record to create */
  user: UserCreateInput;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  firebaseAuthUid?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  mobileDetails?: InputMaybe<JsonFilterComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<UserStatusFilterComparison>;
  type?: InputMaybe<UserTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type UserGroup = {
  __typename?: 'UserGroup';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Default entity */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type UserGroupCreateInput = {
  /** ApiDocs */
  name: Scalars['String']['input'];
};

export type UserGroupCreateInputDto = {
  /** dto wrapper */
  userGroup: UserGroupCreateInput;
};

export type UserGroupDeleteOneDto = {
  /** Entity ID */
  id: Scalars['ID']['input'];
};

export type UserGroupFilter = {
  and?: InputMaybe<Array<UserGroupFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  default?: InputMaybe<BooleanFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserGroupFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type UserGroupMapping = {
  __typename?: 'UserGroupMapping';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  userGroupId: Scalars['ID']['output'];
  /** Entity ID */
  userId: Scalars['ID']['output'];
};

export type UserGroupMappingFilter = {
  and?: InputMaybe<Array<UserGroupMappingFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserGroupMappingFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  userGroupId?: InputMaybe<IdFilterComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type UserGroupMappingOffsetConnection = {
  __typename?: 'UserGroupMappingOffsetConnection';
  /** Array of nodes. */
  nodes: Array<UserGroupMapping>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserGroupMappingSort = {
  direction: SortDirection;
  field: UserGroupMappingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserGroupMappingSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  UserGroupId = 'userGroupId',
  UserId = 'userId'
}

export enum UserGroupMappingStatus {
  Off = 'off',
  On = 'on'
}

export type UserGroupOffsetConnection = {
  __typename?: 'UserGroupOffsetConnection';
  /** Array of nodes. */
  nodes: Array<UserGroup>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserGroupRoleMapping = {
  __typename?: 'UserGroupRoleMapping';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity ID */
  roleId?: Maybe<Scalars['ID']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  userGroupId: Scalars['ID']['output'];
  /** Entity ID */
  warehouseId: Scalars['ID']['output'];
};

export type UserGroupSort = {
  direction: SortDirection;
  field: UserGroupSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserGroupSortFields {
  CreatedAt = 'createdAt',
  Default = 'default',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export type UserGroupUpdateDto = {
  /** ApiDocs */
  name: Scalars['String']['input'];
};

export type UserGroupUpdateInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Fields to update */
  update: UserGroupUpdateDto;
};

export type UserOffsetConnection = {
  __typename?: 'UserOffsetConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserPermissionsResponseDto = {
  __typename?: 'UserPermissionsResponseDto';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Description of entity */
  description: Scalars['String']['output'];
  grouping: PermissionGrouping;
  /** Entity ID */
  id: Scalars['ID']['output'];
};

export type UserPermittedWarehousesResponseDto = {
  __typename?: 'UserPermittedWarehousesResponseDto';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  systemConnectionCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  systemConnectionId?: Maybe<Scalars['String']['output']>;
  /** System connection type */
  systemConnectionSystemType?: Maybe<SystemConnectionType>;
  /** Configuration Model for the Warehouse */
  type?: Maybe<ModelWarehouseType>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  FirebaseAuthUid = 'firebaseAuthUid',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  MobileDetails = 'mobileDetails',
  Phone = 'phone',
  Status = 'status',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById'
}

export enum UserStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export type UserStatusFilterComparison = {
  eq?: InputMaybe<UserStatus>;
  gt?: InputMaybe<UserStatus>;
  gte?: InputMaybe<UserStatus>;
  iLike?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<UserStatus>;
  lt?: InputMaybe<UserStatus>;
  lte?: InputMaybe<UserStatus>;
  neq?: InputMaybe<UserStatus>;
  notILike?: InputMaybe<UserStatus>;
  notIn?: InputMaybe<Array<UserStatus>>;
  notLike?: InputMaybe<UserStatus>;
};

export type UserTeamMapping = {
  __typename?: 'UserTeamMapping';
  /** Entity's team ID (foreign key) */
  active: Scalars['Boolean']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's team ID (foreign key) */
  teamId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's team ID (foreign key) */
  userId: Scalars['ID']['output'];
};

export type UserTeamMappingCreateInput = {
  /** Entity's team ID (foreign key) */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Entity's team ID (foreign key) */
  teamId: Scalars['ID']['input'];
  /** Entity's user ID (foreign key) */
  userId: Scalars['ID']['input'];
};

export type UserTeamMappingCreateOneInput = {
  /** The record to create */
  userTeamMapping: UserTeamMappingCreateInput;
};

export type UserTeamMappingFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<UserTeamMappingFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserTeamMappingFilter>>;
  teamId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type UserTeamMappingOffsetConnection = {
  __typename?: 'UserTeamMappingOffsetConnection';
  /** Array of nodes. */
  nodes: Array<UserTeamMapping>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserTeamMappingSort = {
  direction: SortDirection;
  field: UserTeamMappingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserTeamMappingSortFields {
  Active = 'active',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  TeamId = 'teamId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  UserId = 'userId'
}

export type UserTeamMappingUpdateInput = {
  /** Entity's team ID (foreign key) */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Entity's team ID (foreign key) */
  teamId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's user ID (foreign key) */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserTeamMappingUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: UserTeamMappingUpdateInput;
};

export enum UserType {
  Standard = 'standard',
  System = 'system'
}

export type UserTypeFilterComparison = {
  eq?: InputMaybe<UserType>;
  gt?: InputMaybe<UserType>;
  gte?: InputMaybe<UserType>;
  iLike?: InputMaybe<UserType>;
  in?: InputMaybe<Array<UserType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<UserType>;
  lt?: InputMaybe<UserType>;
  lte?: InputMaybe<UserType>;
  neq?: InputMaybe<UserType>;
  notILike?: InputMaybe<UserType>;
  notIn?: InputMaybe<Array<UserType>>;
  notLike?: InputMaybe<UserType>;
};

export type UserUpdateInput = {
  /** User's firebase auth Id */
  firebaseAuthUid?: InputMaybe<Scalars['String']['input']>;
  /** Person's first name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Person's last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileDetails?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** If true entire mobileDetails object will be replaced on update otherwise update fields will merge with the object */
  refreshMobileDetails?: InputMaybe<Scalars['Boolean']['input']>;
  /** User's account status */
  status?: InputMaybe<UserStatus>;
};

export type UserUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: UserUpdateInput;
};

export type UserWarehouseDefault = {
  __typename?: 'UserWarehouseDefault';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Entity's team ID (foreign key) */
  default: Scalars['Boolean']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's user ID (foreign key) */
  userId: Scalars['String']['output'];
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['String']['output'];
};

export type UserWarehouseDefaultCreateInput = {
  /** Default entity */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Entity's user ID (foreign key) */
  userId: Scalars['ID']['input'];
  /** Entity's team ID (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type UserWarehouseDefaultCreateOneInput = {
  /** The record to create */
  userWarehouseDefault: UserWarehouseDefaultCreateInput;
};

export type UserWarehouseDefaultFilter = {
  and?: InputMaybe<Array<UserWarehouseDefaultFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  default?: InputMaybe<BooleanFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserWarehouseDefaultFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  userId?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<StringFieldComparison>;
};

export type UserWarehouseDefaultOffsetConnection = {
  __typename?: 'UserWarehouseDefaultOffsetConnection';
  /** Array of nodes. */
  nodes: Array<UserWarehouseDefault>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserWarehouseDefaultSort = {
  direction: SortDirection;
  field: UserWarehouseDefaultSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserWarehouseDefaultSortFields {
  CreatedAt = 'createdAt',
  Default = 'default',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  UserId = 'userId',
  WarehouseId = 'warehouseId'
}

export type UserWarehouseDefaultUpdateInput = {
  /** Default entity */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Entity's user ID (foreign key) */
  userId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's team ID (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserWarehouseDefaultUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update DTO */
  update: UserWarehouseDefaultUpdateInput;
};

export type Users = {
  __typename?: 'Users';
  nodes: Array<User>;
};

/** Vertex model */
export type Vertex = {
  __typename?: 'Vertex';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  type: VertexType;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
  z: Scalars['Float']['output'];
};

export type VertexCreateOneInput = {
  /** The record to create */
  vertex: VertexCreateType;
};

export type VertexCreateType = {
  type: VertexType;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['String']['input'];
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
  z: Scalars['Float']['input'];
};

export type VertexFilter = {
  and?: InputMaybe<Array<VertexFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<VertexFilter>>;
  type?: InputMaybe<VertexTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
  z?: InputMaybe<FloatFieldComparison>;
};

export type VertexOffsetConnection = {
  __typename?: 'VertexOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Vertex>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type VertexSort = {
  direction: SortDirection;
  field: VertexSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum VertexSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId',
  X = 'x',
  Y = 'y',
  Z = 'z'
}

export enum VertexType {
  Inbound = 'inbound',
  Outbound = 'outbound',
  Path = 'path',
  Pick = 'pick',
  Putaway = 'putaway'
}

export type VertexTypeFilterComparison = {
  eq?: InputMaybe<VertexType>;
  gt?: InputMaybe<VertexType>;
  gte?: InputMaybe<VertexType>;
  iLike?: InputMaybe<VertexType>;
  in?: InputMaybe<Array<VertexType>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<VertexType>;
  lt?: InputMaybe<VertexType>;
  lte?: InputMaybe<VertexType>;
  neq?: InputMaybe<VertexType>;
  notILike?: InputMaybe<VertexType>;
  notIn?: InputMaybe<Array<VertexType>>;
  notLike?: InputMaybe<VertexType>;
};

export type ViewArea = {
  __typename?: 'ViewArea';
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entry point into the warehouse */
  entryPoint: Scalars['Boolean']['output'];
  /** Exit point out of the warehouse */
  exitPoint: Scalars['Boolean']['output'];
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Is the area empty of stock */
  isEmpty?: Maybe<Scalars['Boolean']['output']>;
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  /** Area's status, i.e. ACTIVE, INACTIVE */
  status?: Maybe<AreaStatus>;
  /** Entity's SAP storage location */
  storageLocation?: Maybe<Scalars['String']['output']>;
  /** Entity's SAP storage location ID (foreign key) */
  storageLocationId?: Maybe<Scalars['ID']['output']>;
  /** Entity's target temperature, null if entity is not temperature controlled */
  targetTemperature?: Maybe<Scalars['Float']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type ViewAreaFilter = {
  and?: InputMaybe<Array<ViewAreaFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  entryPoint?: InputMaybe<BooleanFieldComparison>;
  exitPoint?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isEmpty?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ViewAreaFilter>>;
  status?: InputMaybe<AreaStatusFilterComparison>;
  storageLocation?: InputMaybe<StringFieldComparison>;
  storageLocationId?: InputMaybe<IdFilterComparison>;
  targetTemperature?: InputMaybe<FloatFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ViewAreaOffsetConnection = {
  __typename?: 'ViewAreaOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewArea>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewAreaSort = {
  direction: SortDirection;
  field: ViewAreaSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewAreaSortFields {
  Code = 'code',
  Description = 'description',
  EntryPoint = 'entryPoint',
  ExitPoint = 'exitPoint',
  Id = 'id',
  IsEmpty = 'isEmpty',
  Name = 'name',
  Status = 'status',
  StorageLocation = 'storageLocation',
  StorageLocationId = 'storageLocationId',
  TargetTemperature = 'targetTemperature',
  WarehouseId = 'warehouseId'
}

export type ViewBarcode = {
  __typename?: 'ViewBarcode';
  /** Entity ID */
  adminTaskId?: Maybe<Scalars['ID']['output']>;
  /** Task status, i.e Not Started */
  adminTaskStatus?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  barcodeCode?: Maybe<Scalars['String']['output']>;
  /** Created at date */
  barcodeCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Barcode entity ID */
  barcodeId?: Maybe<Scalars['ID']['output']>;
  /** Business partner code */
  businessPartnerCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  businessPartnerId?: Maybe<Scalars['ID']['output']>;
  /** Business partner name */
  businessPartnerName?: Maybe<Scalars['String']['output']>;
  /** Person's first name */
  userFirstName?: Maybe<Scalars['String']['output']>;
  /** Person's last name */
  userLastName?: Maybe<Scalars['String']['output']>;
};

export type ViewBarcodeFilter = {
  adminTaskId?: InputMaybe<IdFilterComparison>;
  adminTaskStatus?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<ViewBarcodeFilter>>;
  barcodeCode?: InputMaybe<StringFieldComparison>;
  barcodeCreatedAt?: InputMaybe<DateFieldComparison>;
  barcodeId?: InputMaybe<IdFilterComparison>;
  businessPartnerCode?: InputMaybe<StringFieldComparison>;
  businessPartnerId?: InputMaybe<IdFilterComparison>;
  businessPartnerName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ViewBarcodeFilter>>;
  userFirstName?: InputMaybe<StringFieldComparison>;
  userLastName?: InputMaybe<StringFieldComparison>;
};

export type ViewBarcodeOffsetConnection = {
  __typename?: 'ViewBarcodeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewBarcode>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewBarcodeSort = {
  direction: SortDirection;
  field: ViewBarcodeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewBarcodeSortFields {
  AdminTaskId = 'adminTaskId',
  AdminTaskStatus = 'adminTaskStatus',
  BarcodeCode = 'barcodeCode',
  BarcodeCreatedAt = 'barcodeCreatedAt',
  BarcodeId = 'barcodeId',
  BusinessPartnerCode = 'businessPartnerCode',
  BusinessPartnerId = 'businessPartnerId',
  BusinessPartnerName = 'businessPartnerName',
  UserFirstName = 'userFirstName',
  UserLastName = 'userLastName'
}

export type ViewBin = {
  __typename?: 'ViewBin';
  /** Entity code */
  aisleCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  aisleColumnCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  aisleColumnId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  aisleId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  areaCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  areaId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  areaName?: Maybe<Scalars['String']['output']>;
  /** Area's type, i.e. TEMP, PERM */
  areaStorageType?: Maybe<AreaStorageType>;
  /** Entity code */
  binSizeCode?: Maybe<Scalars['String']['output']>;
  /** Depth(X) value of storage capacity */
  binSizeDepth?: Maybe<Scalars['Float']['output']>;
  /** Height(Z) value of storage capacity */
  binSizeHeight?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  binSizeId?: Maybe<Scalars['String']['output']>;
  /** Weight capacity of storage */
  binSizeWeightCapacity?: Maybe<Scalars['Float']['output']>;
  /** Width(Y) value of storage capacity */
  binSizeWidth?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  containsProducts?: Maybe<Scalars['Boolean']['output']>;
  /** Entity code */
  countTaskCode?: Maybe<Scalars['String']['output']>;
  /** Entity's task ID (foreign key) */
  countTaskId?: Maybe<Scalars['ID']['output']>;
  /** Destination bin block flag */
  destinationBinBlock?: Maybe<BinBlockState>;
  /** Entity code */
  distanceUomCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  distanceUomId?: Maybe<Scalars['ID']['output']>;
  empty?: Maybe<Scalars['Boolean']['output']>;
  /** hasOpenTasks */
  hasOpenTasks?: Maybe<Scalars['Boolean']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Active/Inactive bin status flag */
  inactive?: Maybe<BinActiveState>;
  /** Bin has been assigned to a door */
  isAssignedToDoor?: Maybe<Scalars['Boolean']['output']>;
  /** Timestamp of latest inventory count approval */
  lastCount?: Maybe<Scalars['DateTime']['output']>;
  /** Timestamp of latest movement */
  lastMovement?: Maybe<Scalars['DateTime']['output']>;
  /** Level where the bin is located. */
  level?: Maybe<Scalars['Float']['output']>;
  /** Source bin block flag */
  sourceBinBlock?: Maybe<BinBlockState>;
  /** Bin type */
  type?: Maybe<BinType>;
  /** Verification code from a barcode scan */
  verificationCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  weightCapacityUomCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  weightCapacityUomId?: Maybe<Scalars['ID']['output']>;
  /** x coordinate location */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  y?: Maybe<Scalars['Float']['output']>;
  /** Z coordinate location */
  z?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  zoneCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  zoneId?: Maybe<Scalars['String']['output']>;
};

export type ViewBinFilter = {
  aisleCode?: InputMaybe<StringFieldComparison>;
  aisleColumnCode?: InputMaybe<StringFieldComparison>;
  aisleColumnId?: InputMaybe<IdFilterComparison>;
  aisleId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<ViewBinFilter>>;
  areaCode?: InputMaybe<StringFieldComparison>;
  areaId?: InputMaybe<IdFilterComparison>;
  areaName?: InputMaybe<StringFieldComparison>;
  areaStorageType?: InputMaybe<AreaStorageTypeFilterComparison>;
  binSizeCode?: InputMaybe<StringFieldComparison>;
  binSizeDepth?: InputMaybe<FloatFieldComparison>;
  binSizeHeight?: InputMaybe<FloatFieldComparison>;
  binSizeId?: InputMaybe<StringFieldComparison>;
  binSizeWeightCapacity?: InputMaybe<FloatFieldComparison>;
  binSizeWidth?: InputMaybe<FloatFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  containsProducts?: InputMaybe<BooleanFieldComparison>;
  countTaskCode?: InputMaybe<StringFieldComparison>;
  countTaskId?: InputMaybe<IdFilterComparison>;
  destinationBinBlock?: InputMaybe<BinBlockStateFilterComparison>;
  distanceUomCode?: InputMaybe<StringFieldComparison>;
  distanceUomId?: InputMaybe<IdFilterComparison>;
  empty?: InputMaybe<BooleanFieldComparison>;
  hasOpenTasks?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  inactive?: InputMaybe<BinActiveStateFilterComparison>;
  isAssignedToDoor?: InputMaybe<BooleanFieldComparison>;
  lastCount?: InputMaybe<DateFieldComparison>;
  lastMovement?: InputMaybe<DateFieldComparison>;
  level?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<ViewBinFilter>>;
  sourceBinBlock?: InputMaybe<BinBlockStateFilterComparison>;
  type?: InputMaybe<BinTypeFilterComparison>;
  verificationCode?: InputMaybe<StringFieldComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  weightCapacityUomCode?: InputMaybe<StringFieldComparison>;
  weightCapacityUomId?: InputMaybe<IdFilterComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
  z?: InputMaybe<FloatFieldComparison>;
  zoneCode?: InputMaybe<StringFieldComparison>;
  zoneId?: InputMaybe<StringFieldComparison>;
};

export type ViewBinOffsetConnection = {
  __typename?: 'ViewBinOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewBin>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewBinSize = {
  __typename?: 'ViewBinSize';
  /** The number of bins assigned to a bin size */
  binCount?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Created by user */
  createdByUserFirstName?: Maybe<Scalars['ID']['output']>;
  /** Created by user */
  createdByUserLastName?: Maybe<Scalars['ID']['output']>;
  /** Depth(X) value of storage capacity */
  depth?: Maybe<Scalars['Float']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for entity */
  distanceUomCode?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  distanceUomId?: Maybe<Scalars['ID']['output']>;
  /** Height(Z) value of storage capacity */
  height?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Entity's label */
  label?: Maybe<Scalars['String']['output']>;
  /** Product's length */
  length?: Maybe<Scalars['Float']['output']>;
  /** Unit of measure for entity */
  maximumProductUomUomCode?: Maybe<Scalars['String']['output']>;
  /** Height(Z) value of storage capacity */
  productHeightLimit?: Maybe<Scalars['Float']['output']>;
  /** Product's length */
  productLengthLimit?: Maybe<Scalars['Float']['output']>;
  /** Unit of measure for entity */
  productLimitUomCode?: Maybe<Scalars['String']['output']>;
  /** Restricts the size of products that can be placed in the bin */
  productSizeRestriction?: Maybe<Scalars['JSONObject']['output']>;
  /** Product's width */
  productWidthLimit?: Maybe<Scalars['Float']['output']>;
  /** Volume of entity */
  volumeCapacity?: Maybe<Scalars['Float']['output']>;
  /** Unit of measure ID */
  volumeCapacityUomId?: Maybe<Scalars['ID']['output']>;
  /** Unit of measure for entity */
  volumeUomCode?: Maybe<Scalars['String']['output']>;
  /** Warehouse code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** Weight capacity of storage */
  weightCapacity?: Maybe<Scalars['Float']['output']>;
  /** Unit of measure for entity */
  weightCapacityUomCode?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  weightCapacityUomId?: Maybe<Scalars['ID']['output']>;
  /** Width(Y) value of storage capacity */
  width?: Maybe<Scalars['Float']['output']>;
};

export type ViewBinSizeFilter = {
  and?: InputMaybe<Array<ViewBinSizeFilter>>;
  binCount?: InputMaybe<FloatFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdByUserFirstName?: InputMaybe<IdFilterComparison>;
  createdByUserLastName?: InputMaybe<IdFilterComparison>;
  depth?: InputMaybe<FloatFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  distanceUomCode?: InputMaybe<StringFieldComparison>;
  distanceUomId?: InputMaybe<IdFilterComparison>;
  height?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  length?: InputMaybe<FloatFieldComparison>;
  maximumProductUomUomCode?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ViewBinSizeFilter>>;
  productHeightLimit?: InputMaybe<FloatFieldComparison>;
  productLengthLimit?: InputMaybe<FloatFieldComparison>;
  productLimitUomCode?: InputMaybe<StringFieldComparison>;
  productSizeRestriction?: InputMaybe<JsonObjectFilterComparison>;
  productWidthLimit?: InputMaybe<FloatFieldComparison>;
  volumeCapacity?: InputMaybe<FloatFieldComparison>;
  volumeCapacityUomId?: InputMaybe<IdFilterComparison>;
  volumeUomCode?: InputMaybe<StringFieldComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  weightCapacity?: InputMaybe<FloatFieldComparison>;
  weightCapacityUomCode?: InputMaybe<StringFieldComparison>;
  weightCapacityUomId?: InputMaybe<IdFilterComparison>;
  width?: InputMaybe<FloatFieldComparison>;
};

export type ViewBinSizeOffsetConnection = {
  __typename?: 'ViewBinSizeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewBinSize>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewBinSizeSort = {
  direction: SortDirection;
  field: ViewBinSizeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewBinSizeSortFields {
  BinCount = 'binCount',
  Code = 'code',
  CreatedByUserFirstName = 'createdByUserFirstName',
  CreatedByUserLastName = 'createdByUserLastName',
  Depth = 'depth',
  Description = 'description',
  DistanceUomCode = 'distanceUomCode',
  DistanceUomId = 'distanceUomId',
  Height = 'height',
  Id = 'id',
  Label = 'label',
  Length = 'length',
  MaximumProductUomUomCode = 'maximumProductUomUomCode',
  ProductHeightLimit = 'productHeightLimit',
  ProductLengthLimit = 'productLengthLimit',
  ProductLimitUomCode = 'productLimitUomCode',
  ProductSizeRestriction = 'productSizeRestriction',
  ProductWidthLimit = 'productWidthLimit',
  VolumeCapacity = 'volumeCapacity',
  VolumeCapacityUomId = 'volumeCapacityUomId',
  VolumeUomCode = 'volumeUomCode',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId',
  WeightCapacity = 'weightCapacity',
  WeightCapacityUomCode = 'weightCapacityUomCode',
  WeightCapacityUomId = 'weightCapacityUomId',
  Width = 'width'
}

export type ViewBinSort = {
  direction: SortDirection;
  field: ViewBinSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewBinSortFields {
  AisleCode = 'aisleCode',
  AisleColumnCode = 'aisleColumnCode',
  AisleColumnId = 'aisleColumnId',
  AisleId = 'aisleId',
  AreaCode = 'areaCode',
  AreaId = 'areaId',
  AreaName = 'areaName',
  AreaStorageType = 'areaStorageType',
  BinSizeCode = 'binSizeCode',
  BinSizeDepth = 'binSizeDepth',
  BinSizeHeight = 'binSizeHeight',
  BinSizeId = 'binSizeId',
  BinSizeWeightCapacity = 'binSizeWeightCapacity',
  BinSizeWidth = 'binSizeWidth',
  Code = 'code',
  ContainsProducts = 'containsProducts',
  CountTaskCode = 'countTaskCode',
  CountTaskId = 'countTaskId',
  DestinationBinBlock = 'destinationBinBlock',
  DistanceUomCode = 'distanceUomCode',
  DistanceUomId = 'distanceUomId',
  Empty = 'empty',
  HasOpenTasks = 'hasOpenTasks',
  Id = 'id',
  Inactive = 'inactive',
  IsAssignedToDoor = 'isAssignedToDoor',
  LastCount = 'lastCount',
  LastMovement = 'lastMovement',
  Level = 'level',
  SourceBinBlock = 'sourceBinBlock',
  Type = 'type',
  VerificationCode = 'verificationCode',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId',
  WeightCapacityUomCode = 'weightCapacityUomCode',
  WeightCapacityUomId = 'weightCapacityUomId',
  X = 'x',
  Y = 'y',
  Z = 'z',
  ZoneCode = 'zoneCode',
  ZoneId = 'zoneId'
}

export type ViewDelivery = {
  __typename?: 'ViewDelivery';
  /** A deliveries overall availability */
  availability?: Maybe<Scalars['Int']['output']>;
  /** Bill of lading */
  billOfLading?: Maybe<Scalars['String']['output']>;
  /** ERP delivery block */
  blockStatus?: Maybe<Scalars['String']['output']>;
  /** Delivery category */
  category?: Maybe<DeliveryCategory>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Delivery Document Type */
  deliveryDocumentType?: Maybe<Scalars['String']['output']>;
  /** Overall status for the delivery or fulfillment */
  deliveryStatus?: Maybe<DeliveryCompletionStatus>;
  /** Entity code */
  doorCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  doorId?: Maybe<Scalars['ID']['output']>;
  /** Due date */
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Reason blocked in ERP */
  erpBlockingReason?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment erp code */
  erpCode?: Maybe<Scalars['String']['output']>;
  /** When data was created in ERP */
  erpCreated?: Maybe<Scalars['DateTime']['output']>;
  /** When data was last updated in ERP */
  erpLastChanged?: Maybe<Scalars['DateTime']['output']>;
  /** Erp purchase order */
  erpPurchaseOrder?: Maybe<Scalars['String']['output']>;
  /** Erp sales order */
  erpSalesOrder?: Maybe<Scalars['String']['output']>;
  /** Export */
  export?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  fulfillmentBlockId?: Maybe<Scalars['ID']['output']>;
  /** Entity's label */
  fulfillmentBlockLabel?: Maybe<Scalars['String']['output']>;
  /** Goods receipt or goods issue status */
  goodsReceiptOrIssueStatus?: Maybe<DeliveryCompletionStatus>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Delivery Item count */
  itemCount?: Maybe<Scalars['Int']['output']>;
  /** Delivery load or unload status */
  loadOrUnloadStatus?: Maybe<DeliveryCompletionStatus>;
  /** ID for a warehouse op file */
  orderConfirmationFileId?: Maybe<Scalars['ID']['output']>;
  /** Picking or putaway status */
  pickOrPutawayStatus?: Maybe<DeliveryCompletionStatus>;
  /** Point of contact */
  pointOfContact?: Maybe<Scalars['String']['output']>;
  /** Progress of delivery */
  progress: Scalars['Int']['output'];
  /** Progress string */
  progressString: DeliveryCompletionStatus;
  /** Delivery promise date */
  promiseDate?: Maybe<Scalars['DateTime']['output']>;
  /** Date when all line items are availalbe 100% */
  shipReadyDate?: Maybe<Scalars['DateTime']['output']>;
  /** Delivery or fulfillment ship to code */
  shipToBusinessPartnerCode?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment ship to code */
  shipToBusinessPartnerName?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment ship to code */
  shipToCode?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment ship to code */
  shipToId?: Maybe<Scalars['ID']['output']>;
  /** Ship to party name */
  shipToName?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment sold to code */
  soldToBusinessPartnerCode?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment sold to code */
  soldToBusinessPartnerName?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment sold to code */
  soldToCode?: Maybe<Scalars['String']['output']>;
  /** Delivery or Fulfillment sold to Business Partner Entity ID (foreign key) */
  soldToId?: Maybe<Scalars['ID']['output']>;
  /** Sold to party name */
  soldToName?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment supplier */
  supplierBusinessPartnerCode?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment supplier */
  supplierBusinessPartnerName?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment supplier */
  supplierCode?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment supplier */
  supplierId?: Maybe<Scalars['ID']['output']>;
  /** Delivery or fulfillment supplier Name */
  supplierName?: Maybe<Scalars['String']['output']>;
  /** Gross weight of entity */
  totalGrossWeight?: Maybe<Scalars['Float']['output']>;
  /** Net weight of entity */
  totalNetWeight?: Maybe<Scalars['Float']['output']>;
  /** Volume of entity */
  totalVolume?: Maybe<Scalars['Float']['output']>;
  /** Volume in unit of measure for entity */
  totalVolumeUOMCode?: Maybe<Scalars['String']['output']>;
  /** Volume in unit of measure for entity */
  totalVolumeUOMId?: Maybe<Scalars['ID']['output']>;
  /** Volume in unit of measure for entity */
  totalVolumeUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for entity */
  totalWeightUOMCode?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for entity */
  totalWeightUOMId?: Maybe<Scalars['ID']['output']>;
  /** Unit of measure for entity */
  totalWeightUOMLabel?: Maybe<Scalars['String']['output']>;
  /** fulfillment or delivery */
  type?: Maybe<DeliveryType>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type ViewDeliveryFilter = {
  and?: InputMaybe<Array<ViewDeliveryFilter>>;
  availability?: InputMaybe<IntFieldComparison>;
  billOfLading?: InputMaybe<StringFieldComparison>;
  blockStatus?: InputMaybe<StringFieldComparison>;
  category?: InputMaybe<DeliveryCategoryFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryDocumentType?: InputMaybe<StringFieldComparison>;
  deliveryStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  doorCode?: InputMaybe<StringFieldComparison>;
  doorId?: InputMaybe<IdFilterComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  erpBlockingReason?: InputMaybe<StringFieldComparison>;
  erpCode?: InputMaybe<StringFieldComparison>;
  erpCreated?: InputMaybe<DateFieldComparison>;
  erpLastChanged?: InputMaybe<DateFieldComparison>;
  erpPurchaseOrder?: InputMaybe<StringFieldComparison>;
  erpSalesOrder?: InputMaybe<StringFieldComparison>;
  export?: InputMaybe<StringFieldComparison>;
  fulfillmentBlockId?: InputMaybe<IdFilterComparison>;
  fulfillmentBlockLabel?: InputMaybe<StringFieldComparison>;
  goodsReceiptOrIssueStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  itemCount?: InputMaybe<IntFieldComparison>;
  loadOrUnloadStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  or?: InputMaybe<Array<ViewDeliveryFilter>>;
  orderConfirmationFileId?: InputMaybe<IdFilterComparison>;
  pickOrPutawayStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  pointOfContact?: InputMaybe<StringFieldComparison>;
  progress?: InputMaybe<IntFieldComparison>;
  progressString?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  promiseDate?: InputMaybe<DateFieldComparison>;
  shipReadyDate?: InputMaybe<DateFieldComparison>;
  shipToBusinessPartnerCode?: InputMaybe<StringFieldComparison>;
  shipToBusinessPartnerName?: InputMaybe<StringFieldComparison>;
  shipToCode?: InputMaybe<StringFieldComparison>;
  shipToId?: InputMaybe<IdFilterComparison>;
  shipToName?: InputMaybe<StringFieldComparison>;
  soldToBusinessPartnerCode?: InputMaybe<StringFieldComparison>;
  soldToBusinessPartnerName?: InputMaybe<StringFieldComparison>;
  soldToCode?: InputMaybe<StringFieldComparison>;
  soldToId?: InputMaybe<IdFilterComparison>;
  soldToName?: InputMaybe<StringFieldComparison>;
  supplierBusinessPartnerCode?: InputMaybe<StringFieldComparison>;
  supplierBusinessPartnerName?: InputMaybe<StringFieldComparison>;
  supplierCode?: InputMaybe<StringFieldComparison>;
  supplierId?: InputMaybe<IdFilterComparison>;
  supplierName?: InputMaybe<StringFieldComparison>;
  totalGrossWeight?: InputMaybe<FloatFieldComparison>;
  totalNetWeight?: InputMaybe<FloatFieldComparison>;
  totalVolume?: InputMaybe<FloatFieldComparison>;
  totalVolumeUOMCode?: InputMaybe<StringFieldComparison>;
  totalVolumeUOMId?: InputMaybe<IdFilterComparison>;
  totalVolumeUOMLabel?: InputMaybe<StringFieldComparison>;
  totalWeightUOMCode?: InputMaybe<StringFieldComparison>;
  totalWeightUOMId?: InputMaybe<IdFilterComparison>;
  totalWeightUOMLabel?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<DeliveryTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ViewDeliveryItem = {
  __typename?: 'ViewDeliveryItem';
  /** Entity code */
  advancedShipmentNotificationFileCode?: Maybe<Scalars['String']['output']>;
  /** ID for a warehouse op file */
  advancedShipmentNotificationFileId?: Maybe<Scalars['ID']['output']>;
  /** Delivery or fulfillment erp code */
  deliveryCode?: Maybe<Scalars['String']['output']>;
  /** Due date */
  deliveryDueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Delivery ID (foreign key) */
  deliveryId: Scalars['ID']['output'];
  /** Erp last changed date */
  erpLastChanged?: Maybe<Scalars['DateTime']['output']>;
  /** Purchase Order */
  erpPurchaseOrder?: Maybe<Scalars['String']['output']>;
  /** Purchase Order item */
  erpPurchaseOrderItem?: Maybe<Scalars['String']['output']>;
  /** Gross Weight */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Delivery item ID (foreign key) */
  id?: Maybe<Scalars['ID']['output']>;
  /** Delivery item associated with entity */
  item?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  licensePlateDescription?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  lotCode?: Maybe<Scalars['String']['output']>;
  /** Lot id */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Net Weight */
  netWeight?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Product description */
  productDescription?: Maybe<Scalars['String']['output']>;
  /** Product id */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Putaway Status */
  putawayStatus?: Maybe<DeliveryCompletionStatus>;
  /** Quantity of product */
  quantity?: Maybe<Scalars['String']['output']>;
  /** Receipt Status */
  receiptStatus?: Maybe<DeliveryCompletionStatus>;
  /** Actual received quantity */
  recievedQuantity?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  stockStatusCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  stockStatusId?: Maybe<Scalars['String']['output']>;
  /** Stock status type entity belongs to */
  stockStatusLabel?: Maybe<Scalars['String']['output']>;
  /** Supplier lot code */
  supplierLotCode?: Maybe<Scalars['String']['output']>;
  /** Unit of measure */
  unitOfMeasure?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  unitOfMeasureId?: Maybe<Scalars['ID']['output']>;
  /** Unload status */
  unloadStatus?: Maybe<DeliveryCompletionStatus>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Volume */
  volume?: Maybe<Scalars['Float']['output']>;
  /** Volume unit of measure */
  volumeUOMCode?: Maybe<Scalars['String']['output']>;
  /** Volume unit of measure */
  volumeUOMId?: Maybe<Scalars['ID']['output']>;
  /** Volume unit of measure */
  volumeUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
  /** Weight unit of measure */
  weightUOMCode?: Maybe<Scalars['String']['output']>;
  /** Weight unit of measure */
  weightUOMId?: Maybe<Scalars['ID']['output']>;
  /** Weight unit of measure */
  weightUOMLabel?: Maybe<Scalars['String']['output']>;
};

export type ViewDeliveryItemFilter = {
  advancedShipmentNotificationFileCode?: InputMaybe<StringFieldComparison>;
  advancedShipmentNotificationFileId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<ViewDeliveryItemFilter>>;
  deliveryCode?: InputMaybe<StringFieldComparison>;
  deliveryDueDate?: InputMaybe<DateFieldComparison>;
  deliveryId?: InputMaybe<IdFilterComparison>;
  erpLastChanged?: InputMaybe<DateFieldComparison>;
  erpPurchaseOrder?: InputMaybe<StringFieldComparison>;
  erpPurchaseOrderItem?: InputMaybe<StringFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  item?: InputMaybe<StringFieldComparison>;
  licensePlateCode?: InputMaybe<StringFieldComparison>;
  licensePlateDescription?: InputMaybe<StringFieldComparison>;
  licensePlateId?: InputMaybe<IdFilterComparison>;
  lotCode?: InputMaybe<StringFieldComparison>;
  lotId?: InputMaybe<IdFilterComparison>;
  netWeight?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<ViewDeliveryItemFilter>>;
  productCode?: InputMaybe<StringFieldComparison>;
  productDescription?: InputMaybe<StringFieldComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  putawayStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  quantity?: InputMaybe<StringFieldComparison>;
  receiptStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  recievedQuantity?: InputMaybe<StringFieldComparison>;
  stockStatusCode?: InputMaybe<StringFieldComparison>;
  stockStatusId?: InputMaybe<StringFieldComparison>;
  stockStatusLabel?: InputMaybe<StringFieldComparison>;
  supplierLotCode?: InputMaybe<StringFieldComparison>;
  unitOfMeasure?: InputMaybe<StringFieldComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  unloadStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  volume?: InputMaybe<FloatFieldComparison>;
  volumeUOMCode?: InputMaybe<StringFieldComparison>;
  volumeUOMId?: InputMaybe<IdFilterComparison>;
  volumeUOMLabel?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  weightUOMCode?: InputMaybe<StringFieldComparison>;
  weightUOMId?: InputMaybe<IdFilterComparison>;
  weightUOMLabel?: InputMaybe<StringFieldComparison>;
};

export type ViewDeliveryItemOffsetConnection = {
  __typename?: 'ViewDeliveryItemOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewDeliveryItem>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewDeliveryItemSort = {
  direction: SortDirection;
  field: ViewDeliveryItemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewDeliveryItemSortFields {
  AdvancedShipmentNotificationFileCode = 'advancedShipmentNotificationFileCode',
  AdvancedShipmentNotificationFileId = 'advancedShipmentNotificationFileId',
  DeliveryCode = 'deliveryCode',
  DeliveryDueDate = 'deliveryDueDate',
  DeliveryId = 'deliveryId',
  ErpLastChanged = 'erpLastChanged',
  ErpPurchaseOrder = 'erpPurchaseOrder',
  ErpPurchaseOrderItem = 'erpPurchaseOrderItem',
  GrossWeight = 'grossWeight',
  Id = 'id',
  Item = 'item',
  LicensePlateCode = 'licensePlateCode',
  LicensePlateDescription = 'licensePlateDescription',
  LicensePlateId = 'licensePlateId',
  LotCode = 'lotCode',
  LotId = 'lotId',
  NetWeight = 'netWeight',
  ProductCode = 'productCode',
  ProductDescription = 'productDescription',
  ProductId = 'productId',
  PutawayStatus = 'putawayStatus',
  Quantity = 'quantity',
  ReceiptStatus = 'receiptStatus',
  RecievedQuantity = 'recievedQuantity',
  StockStatusCode = 'stockStatusCode',
  StockStatusId = 'stockStatusId',
  StockStatusLabel = 'stockStatusLabel',
  SupplierLotCode = 'supplierLotCode',
  UnitOfMeasure = 'unitOfMeasure',
  UnitOfMeasureId = 'unitOfMeasureId',
  UnloadStatus = 'unloadStatus',
  UpdatedAt = 'updatedAt',
  Volume = 'volume',
  VolumeUomCode = 'volumeUOMCode',
  VolumeUomId = 'volumeUOMId',
  VolumeUomLabel = 'volumeUOMLabel',
  WarehouseId = 'warehouseId',
  WeightUomCode = 'weightUOMCode',
  WeightUomId = 'weightUOMId',
  WeightUomLabel = 'weightUOMLabel'
}

export type ViewDeliveryOffsetConnection = {
  __typename?: 'ViewDeliveryOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewDelivery>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewDeliverySort = {
  direction: SortDirection;
  field: ViewDeliverySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewDeliverySortFields {
  Availability = 'availability',
  BillOfLading = 'billOfLading',
  BlockStatus = 'blockStatus',
  Category = 'category',
  CreatedAt = 'createdAt',
  DeliveryDocumentType = 'deliveryDocumentType',
  DeliveryStatus = 'deliveryStatus',
  DoorCode = 'doorCode',
  DoorId = 'doorId',
  DueDate = 'dueDate',
  ErpBlockingReason = 'erpBlockingReason',
  ErpCode = 'erpCode',
  ErpCreated = 'erpCreated',
  ErpLastChanged = 'erpLastChanged',
  ErpPurchaseOrder = 'erpPurchaseOrder',
  ErpSalesOrder = 'erpSalesOrder',
  Export = 'export',
  FulfillmentBlockId = 'fulfillmentBlockId',
  FulfillmentBlockLabel = 'fulfillmentBlockLabel',
  GoodsReceiptOrIssueStatus = 'goodsReceiptOrIssueStatus',
  Id = 'id',
  ItemCount = 'itemCount',
  LoadOrUnloadStatus = 'loadOrUnloadStatus',
  OrderConfirmationFileId = 'orderConfirmationFileId',
  PickOrPutawayStatus = 'pickOrPutawayStatus',
  PointOfContact = 'pointOfContact',
  Progress = 'progress',
  ProgressString = 'progressString',
  PromiseDate = 'promiseDate',
  ShipReadyDate = 'shipReadyDate',
  ShipToBusinessPartnerCode = 'shipToBusinessPartnerCode',
  ShipToBusinessPartnerName = 'shipToBusinessPartnerName',
  ShipToCode = 'shipToCode',
  ShipToId = 'shipToId',
  ShipToName = 'shipToName',
  SoldToBusinessPartnerCode = 'soldToBusinessPartnerCode',
  SoldToBusinessPartnerName = 'soldToBusinessPartnerName',
  SoldToCode = 'soldToCode',
  SoldToId = 'soldToId',
  SoldToName = 'soldToName',
  SupplierBusinessPartnerCode = 'supplierBusinessPartnerCode',
  SupplierBusinessPartnerName = 'supplierBusinessPartnerName',
  SupplierCode = 'supplierCode',
  SupplierId = 'supplierId',
  SupplierName = 'supplierName',
  TotalGrossWeight = 'totalGrossWeight',
  TotalNetWeight = 'totalNetWeight',
  TotalVolume = 'totalVolume',
  TotalVolumeUomCode = 'totalVolumeUOMCode',
  TotalVolumeUomId = 'totalVolumeUOMId',
  TotalVolumeUomLabel = 'totalVolumeUOMLabel',
  TotalWeightUomCode = 'totalWeightUOMCode',
  TotalWeightUomId = 'totalWeightUOMId',
  TotalWeightUomLabel = 'totalWeightUOMLabel',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId'
}

export type ViewDoor = {
  __typename?: 'ViewDoor';
  /** Entity code */
  areaCode?: Maybe<Scalars['String']['output']>;
  /** Entity's area ID (foreign key) */
  areaId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  binCode?: Maybe<Scalars['String']['output']>;
  /** Entity's bin ID (foreign key) */
  binId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Door direction.  inbound outbound or both. */
  direction?: Maybe<DoorDirection>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** x coordinate location */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  y?: Maybe<Scalars['Float']['output']>;
};

export type ViewDoorFilter = {
  and?: InputMaybe<Array<ViewDoorFilter>>;
  areaCode?: InputMaybe<StringFieldComparison>;
  areaId?: InputMaybe<IdFilterComparison>;
  binCode?: InputMaybe<StringFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  direction?: InputMaybe<DoorDirectionFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ViewDoorFilter>>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
};

export type ViewDoorOffsetConnection = {
  __typename?: 'ViewDoorOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewDoor>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewDoorSort = {
  direction: SortDirection;
  field: ViewDoorSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewDoorSortFields {
  AreaCode = 'areaCode',
  AreaId = 'areaId',
  BinCode = 'binCode',
  BinId = 'binId',
  Code = 'code',
  Direction = 'direction',
  Id = 'id',
  WarehouseId = 'warehouseId',
  X = 'x',
  Y = 'y'
}

export type ViewEquipment = {
  __typename?: 'ViewEquipment';
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Model of equipment */
  equipmentModelId?: Maybe<Scalars['String']['output']>;
  /** Type of equipment, i.e. forklift */
  equipmentTypeId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Entity's label */
  label?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  modelCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  modelDescription?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  modelLabel?: Maybe<Scalars['String']['output']>;
  /** Status of equipment */
  status?: Maybe<EquipmentStatus>;
  /** Identifier for Redpoint Tracking Tag. */
  tagId?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  typeCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  typeDescription?: Maybe<Scalars['String']['output']>;
  /** Number representing maximum height allowance of equipment model. */
  typeHeightMax?: Maybe<Scalars['Float']['output']>;
  /** Number representing minimum height allowance of equipment model. */
  typeHeightMin?: Maybe<Scalars['Float']['output']>;
  /** Imperial or metric unit of measure for height limit. */
  typeHeightUOMCode?: Maybe<Scalars['String']['output']>;
  /** Imperial or metric unit of measure for height limit. */
  typeHeightUOMId?: Maybe<Scalars['ID']['output']>;
  /** Imperial or metric unit of measure for height limit. */
  typeHeightUOMLabel?: Maybe<Scalars['ID']['output']>;
  /** Entity's label */
  typeLabel?: Maybe<Scalars['String']['output']>;
  /** Type of location data for an equipment model (Dynamic/Static) */
  typeMobility?: Maybe<EquipmentMobility>;
  /** Velocity */
  typeVelocity?: Maybe<Scalars['Float']['output']>;
  /** Velocity unit of measure */
  typeVelocityUOMCode?: Maybe<Scalars['String']['output']>;
  /** Velocity unit of measure */
  typeVelocityUOMId?: Maybe<Scalars['String']['output']>;
  /** Velocity unit of measure */
  typeVelocityUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Velocity */
  typeVerticalVelocity?: Maybe<Scalars['Float']['output']>;
  /** Max Volume of entity */
  typeVolumeMax?: Maybe<Scalars['Float']['output']>;
  /** Volume in unit of measure for entity */
  typeVolumeUOMCode?: Maybe<Scalars['String']['output']>;
  /** Volume in unit of measure for entity */
  typeVolumeUOMId?: Maybe<Scalars['ID']['output']>;
  /** Volume in unit of measure for entity */
  typeVolumeUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Number representing maximum weight limit for an equipment model. */
  typeWeightMax?: Maybe<Scalars['Float']['output']>;
  /** Weight UOM, i.e KG */
  typeWeightUOMCode?: Maybe<Scalars['String']['output']>;
  /** Weight UOM, i.e KG */
  typeWeightUOMId?: Maybe<Scalars['ID']['output']>;
  /** Weight UOM, i.e KG */
  typeWeightUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type ViewEquipmentFilter = {
  and?: InputMaybe<Array<ViewEquipmentFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  equipmentModelId?: InputMaybe<StringFieldComparison>;
  equipmentTypeId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  modelCode?: InputMaybe<StringFieldComparison>;
  modelDescription?: InputMaybe<StringFieldComparison>;
  modelLabel?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ViewEquipmentFilter>>;
  status?: InputMaybe<EquipmentStatusFilterComparison>;
  tagId?: InputMaybe<StringFieldComparison>;
  typeCode?: InputMaybe<StringFieldComparison>;
  typeDescription?: InputMaybe<StringFieldComparison>;
  typeHeightMax?: InputMaybe<FloatFieldComparison>;
  typeHeightMin?: InputMaybe<FloatFieldComparison>;
  typeHeightUOMCode?: InputMaybe<StringFieldComparison>;
  typeHeightUOMId?: InputMaybe<IdFilterComparison>;
  typeHeightUOMLabel?: InputMaybe<IdFilterComparison>;
  typeLabel?: InputMaybe<StringFieldComparison>;
  typeMobility?: InputMaybe<EquipmentMobilityFilterComparison>;
  typeVelocity?: InputMaybe<FloatFieldComparison>;
  typeVelocityUOMCode?: InputMaybe<StringFieldComparison>;
  typeVelocityUOMId?: InputMaybe<StringFieldComparison>;
  typeVelocityUOMLabel?: InputMaybe<StringFieldComparison>;
  typeVerticalVelocity?: InputMaybe<FloatFieldComparison>;
  typeVolumeMax?: InputMaybe<FloatFieldComparison>;
  typeVolumeUOMCode?: InputMaybe<StringFieldComparison>;
  typeVolumeUOMId?: InputMaybe<IdFilterComparison>;
  typeVolumeUOMLabel?: InputMaybe<StringFieldComparison>;
  typeWeightMax?: InputMaybe<FloatFieldComparison>;
  typeWeightUOMCode?: InputMaybe<StringFieldComparison>;
  typeWeightUOMId?: InputMaybe<IdFilterComparison>;
  typeWeightUOMLabel?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ViewEquipmentModel = {
  __typename?: 'ViewEquipmentModel';
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Type of equipment, i.e. forklift */
  equipmentTypeId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Entity's label */
  label?: Maybe<Scalars['String']['output']>;
  /** Entity's label */
  typeLabel?: Maybe<Scalars['String']['output']>;
};

export type ViewEquipmentModelFilter = {
  and?: InputMaybe<Array<ViewEquipmentModelFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  equipmentTypeId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ViewEquipmentModelFilter>>;
  typeLabel?: InputMaybe<StringFieldComparison>;
};

export type ViewEquipmentModelOffsetConnection = {
  __typename?: 'ViewEquipmentModelOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewEquipmentModel>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewEquipmentModelSort = {
  direction: SortDirection;
  field: ViewEquipmentModelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewEquipmentModelSortFields {
  Code = 'code',
  Description = 'description',
  EquipmentTypeId = 'equipmentTypeId',
  Id = 'id',
  Label = 'label',
  TypeLabel = 'typeLabel'
}

export type ViewEquipmentOffsetConnection = {
  __typename?: 'ViewEquipmentOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewEquipment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewEquipmentSort = {
  direction: SortDirection;
  field: ViewEquipmentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewEquipmentSortFields {
  Code = 'code',
  Description = 'description',
  EquipmentModelId = 'equipmentModelId',
  EquipmentTypeId = 'equipmentTypeId',
  Id = 'id',
  Label = 'label',
  ModelCode = 'modelCode',
  ModelDescription = 'modelDescription',
  ModelLabel = 'modelLabel',
  Status = 'status',
  TagId = 'tagId',
  TypeCode = 'typeCode',
  TypeDescription = 'typeDescription',
  TypeHeightMax = 'typeHeightMax',
  TypeHeightMin = 'typeHeightMin',
  TypeHeightUomCode = 'typeHeightUOMCode',
  TypeHeightUomId = 'typeHeightUOMId',
  TypeHeightUomLabel = 'typeHeightUOMLabel',
  TypeLabel = 'typeLabel',
  TypeMobility = 'typeMobility',
  TypeVelocity = 'typeVelocity',
  TypeVelocityUomCode = 'typeVelocityUOMCode',
  TypeVelocityUomId = 'typeVelocityUOMId',
  TypeVelocityUomLabel = 'typeVelocityUOMLabel',
  TypeVerticalVelocity = 'typeVerticalVelocity',
  TypeVolumeMax = 'typeVolumeMax',
  TypeVolumeUomCode = 'typeVolumeUOMCode',
  TypeVolumeUomId = 'typeVolumeUOMId',
  TypeVolumeUomLabel = 'typeVolumeUOMLabel',
  TypeWeightMax = 'typeWeightMax',
  TypeWeightUomCode = 'typeWeightUOMCode',
  TypeWeightUomId = 'typeWeightUOMId',
  TypeWeightUomLabel = 'typeWeightUOMLabel',
  WarehouseId = 'warehouseId'
}

export type ViewFulfillmentItem = {
  __typename?: 'ViewFulfillmentItem';
  /** A delivery or fulfillment items availability */
  availability?: Maybe<Scalars['Int']['output']>;
  /** Availability date */
  dateAvailable?: Maybe<Scalars['DateTime']['output']>;
  /** Deliery id */
  deliveryId?: Maybe<Scalars['ID']['output']>;
  /** When data was last updated in ERP */
  erpLastChanged?: Maybe<Scalars['DateTime']['output']>;
  /** Delivery associated with the entity */
  fulfillmentCode?: Maybe<Scalars['String']['output']>;
  /** Due date */
  fulfillmentDueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Gross Weight */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Fulfillment item id (foreign key) */
  id?: Maybe<Scalars['ID']['output']>;
  /** Fulfillment item associated with the entity */
  item?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  licensePlateDescription?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Load status */
  loadStatus?: Maybe<DeliveryCompletionStatus>;
  /** Entity code */
  lotCode?: Maybe<Scalars['String']['output']>;
  /** Lot id */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Net Weight */
  netWeight?: Maybe<Scalars['Float']['output']>;
  /** Pick status */
  pickStatus?: Maybe<DeliveryCompletionStatus>;
  /** Entity code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Product description */
  productDescription?: Maybe<Scalars['String']['output']>;
  /** Product id */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Quantity of product */
  quantity?: Maybe<Scalars['String']['output']>;
  /** Reference document */
  salesOrderCode?: Maybe<Scalars['String']['output']>;
  /** Reference item */
  salesOrderItem?: Maybe<Scalars['String']['output']>;
  /** Stock status type entity belongs to */
  stockStatus?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  stockStatusCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  stockStatusId?: Maybe<Scalars['String']['output']>;
  /** Entity's SAP storage location */
  storageLocation?: Maybe<Scalars['String']['output']>;
  /** Unit of measure */
  unitOfMeasure?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  unitOfMeasureId?: Maybe<Scalars['ID']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Volume */
  volume?: Maybe<Scalars['Float']['output']>;
  /** Volume unit of measure */
  volumeUOMCode?: Maybe<Scalars['String']['output']>;
  /** Volume unit of measure */
  volumeUOMId?: Maybe<Scalars['ID']['output']>;
  /** Volume unit of measure */
  volumeUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
  /** Weight unit of measure */
  weightUOMCode?: Maybe<Scalars['String']['output']>;
  /** Weight unit of measure */
  weightUOMId?: Maybe<Scalars['ID']['output']>;
  /** Weight unit of measure */
  weightUOMLabel?: Maybe<Scalars['String']['output']>;
};

export type ViewFulfillmentItemFilter = {
  and?: InputMaybe<Array<ViewFulfillmentItemFilter>>;
  availability?: InputMaybe<IntFieldComparison>;
  dateAvailable?: InputMaybe<DateFieldComparison>;
  deliveryId?: InputMaybe<IdFilterComparison>;
  erpLastChanged?: InputMaybe<DateFieldComparison>;
  fulfillmentCode?: InputMaybe<StringFieldComparison>;
  fulfillmentDueDate?: InputMaybe<DateFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  item?: InputMaybe<StringFieldComparison>;
  licensePlateCode?: InputMaybe<StringFieldComparison>;
  licensePlateDescription?: InputMaybe<StringFieldComparison>;
  licensePlateId?: InputMaybe<IdFilterComparison>;
  loadStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  lotCode?: InputMaybe<StringFieldComparison>;
  lotId?: InputMaybe<IdFilterComparison>;
  netWeight?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<ViewFulfillmentItemFilter>>;
  pickStatus?: InputMaybe<DeliveryCompletionStatusFilterComparison>;
  productCode?: InputMaybe<StringFieldComparison>;
  productDescription?: InputMaybe<StringFieldComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<StringFieldComparison>;
  salesOrderCode?: InputMaybe<StringFieldComparison>;
  salesOrderItem?: InputMaybe<StringFieldComparison>;
  stockStatus?: InputMaybe<StringFieldComparison>;
  stockStatusCode?: InputMaybe<StringFieldComparison>;
  stockStatusId?: InputMaybe<StringFieldComparison>;
  storageLocation?: InputMaybe<StringFieldComparison>;
  unitOfMeasure?: InputMaybe<StringFieldComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  volume?: InputMaybe<FloatFieldComparison>;
  volumeUOMCode?: InputMaybe<StringFieldComparison>;
  volumeUOMId?: InputMaybe<IdFilterComparison>;
  volumeUOMLabel?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  weightUOMCode?: InputMaybe<StringFieldComparison>;
  weightUOMId?: InputMaybe<IdFilterComparison>;
  weightUOMLabel?: InputMaybe<StringFieldComparison>;
};

export type ViewFulfillmentItemOffsetConnection = {
  __typename?: 'ViewFulfillmentItemOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewFulfillmentItem>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewFulfillmentItemSort = {
  direction: SortDirection;
  field: ViewFulfillmentItemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewFulfillmentItemSortFields {
  Availability = 'availability',
  DateAvailable = 'dateAvailable',
  DeliveryId = 'deliveryId',
  ErpLastChanged = 'erpLastChanged',
  FulfillmentCode = 'fulfillmentCode',
  FulfillmentDueDate = 'fulfillmentDueDate',
  GrossWeight = 'grossWeight',
  Id = 'id',
  Item = 'item',
  LicensePlateCode = 'licensePlateCode',
  LicensePlateDescription = 'licensePlateDescription',
  LicensePlateId = 'licensePlateId',
  LoadStatus = 'loadStatus',
  LotCode = 'lotCode',
  LotId = 'lotId',
  NetWeight = 'netWeight',
  PickStatus = 'pickStatus',
  ProductCode = 'productCode',
  ProductDescription = 'productDescription',
  ProductId = 'productId',
  Quantity = 'quantity',
  SalesOrderCode = 'salesOrderCode',
  SalesOrderItem = 'salesOrderItem',
  StockStatus = 'stockStatus',
  StockStatusCode = 'stockStatusCode',
  StockStatusId = 'stockStatusId',
  StorageLocation = 'storageLocation',
  UnitOfMeasure = 'unitOfMeasure',
  UnitOfMeasureId = 'unitOfMeasureId',
  UpdatedAt = 'updatedAt',
  Volume = 'volume',
  VolumeUomCode = 'volumeUOMCode',
  VolumeUomId = 'volumeUOMId',
  VolumeUomLabel = 'volumeUOMLabel',
  WarehouseId = 'warehouseId',
  WeightUomCode = 'weightUOMCode',
  WeightUomId = 'weightUOMId',
  WeightUomLabel = 'weightUOMLabel'
}

export type ViewHistoryFieldDiff = {
  __typename?: 'ViewHistoryFieldDiff';
  /** Which change occured, i.e. UPDATE, CREATE */
  changeType?: Maybe<EntityChangeType>;
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** Entity's human readable name */
  entity?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  entityId?: Maybe<Scalars['ID']['output']>;
  /** Name of the column changing values */
  field?: Maybe<Scalars['String']['output']>;
  /** Diff field type */
  fieldType?: Maybe<Scalars['String']['output']>;
  /** The history field diff ID */
  historyId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Person's first name */
  name?: Maybe<Scalars['String']['output']>;
  /** New value of the history field diff */
  new?: Maybe<Scalars['String']['output']>;
  /** Entity version */
  newVersion?: Maybe<Scalars['Int']['output']>;
  /** Old value of the history field diff */
  old?: Maybe<Scalars['String']['output']>;
  /** Entity version */
  oldVersion?: Maybe<Scalars['Int']['output']>;
  /** Entity's user ID (foreign key) */
  userId?: Maybe<Scalars['String']['output']>;
};

export type ViewHistoryFieldDiffFilter = {
  and?: InputMaybe<Array<ViewHistoryFieldDiffFilter>>;
  changeType?: InputMaybe<EntityChangeTypeFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  entity?: InputMaybe<StringFieldComparison>;
  entityId?: InputMaybe<IdFilterComparison>;
  field?: InputMaybe<StringFieldComparison>;
  fieldType?: InputMaybe<StringFieldComparison>;
  historyId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  new?: InputMaybe<StringFieldComparison>;
  newVersion?: InputMaybe<IntFieldComparison>;
  old?: InputMaybe<StringFieldComparison>;
  oldVersion?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<ViewHistoryFieldDiffFilter>>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type ViewHistoryFieldDiffOffsetConnection = {
  __typename?: 'ViewHistoryFieldDiffOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewHistoryFieldDiff>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewHistoryFieldDiffSort = {
  direction: SortDirection;
  field: ViewHistoryFieldDiffSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewHistoryFieldDiffSortFields {
  ChangeType = 'changeType',
  Code = 'code',
  Date = 'date',
  Entity = 'entity',
  EntityId = 'entityId',
  Field = 'field',
  FieldType = 'fieldType',
  HistoryId = 'historyId',
  Id = 'id',
  Name = 'name',
  New = 'new',
  NewVersion = 'newVersion',
  Old = 'old',
  OldVersion = 'oldVersion',
  UserId = 'userId'
}

export type ViewLostAndFound = {
  __typename?: 'ViewLostAndFound';
  /** Entity code */
  areaCode?: Maybe<Scalars['String']['output']>;
  /** Entity's area ID (foreign key) */
  areaId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  binCode?: Maybe<Scalars['String']['output']>;
  /** Entity's bin ID (foreign key) */
  binId?: Maybe<Scalars['ID']['output']>;
  /** Bin type */
  binType?: Maybe<Scalars['String']['output']>;
  /** Delivery item associated with entity */
  deliveryItem?: Maybe<Scalars['String']['output']>;
  /** Delivery item ID (foreign key) */
  deliveryItemId?: Maybe<Scalars['ID']['output']>;
  /** Fulfillment item associated with the entity */
  fulfillmentItem?: Maybe<Scalars['String']['output']>;
  /** Fulfillment item id (foreign key) */
  fulfillmentItemId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  licensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  licensePlateDescription?: Maybe<Scalars['String']['output']>;
  /** Entity's license plate ID (foreign key) */
  licensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Active/Inactive bin status flag */
  licensePlateStatus?: Maybe<LicensePlateStatusState>;
  /** Entity code */
  lotCode?: Maybe<Scalars['String']['output']>;
  /** Entity's lot ID (foreign key) */
  lotId?: Maybe<Scalars['ID']['output']>;
  /** Whether the product is lot managed or not */
  lotManaged?: Maybe<Scalars['Boolean']['output']>;
  /** Entity code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  productDescription?: Maybe<Scalars['String']['output']>;
  /** Product ID */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Quantity of product */
  quantity: Scalars['String']['output'];
  /** Entity code */
  stockDeliveryCode?: Maybe<Scalars['String']['output']>;
  /** Delivery ID (foreign key) */
  stockDeliveryId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  stockFulfillmentCode?: Maybe<Scalars['String']['output']>;
  /** Fulfillment Id */
  stockFulfillmentId?: Maybe<Scalars['ID']['output']>;
  /** Entity's stock status type ID (foreign key) */
  stockStatusId?: Maybe<Scalars['ID']['output']>;
  /** I.e. Returns, Available, Lot Restricted etc. */
  stockStatusLabel?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for entity */
  unitOfMeasureCode?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  unitOfMeasureId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type ViewLostAndFoundFilter = {
  and?: InputMaybe<Array<ViewLostAndFoundFilter>>;
  areaCode?: InputMaybe<StringFieldComparison>;
  areaId?: InputMaybe<IdFilterComparison>;
  binCode?: InputMaybe<StringFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  binType?: InputMaybe<StringFieldComparison>;
  deliveryItem?: InputMaybe<StringFieldComparison>;
  deliveryItemId?: InputMaybe<IdFilterComparison>;
  fulfillmentItem?: InputMaybe<StringFieldComparison>;
  fulfillmentItemId?: InputMaybe<IdFilterComparison>;
  licensePlateCode?: InputMaybe<StringFieldComparison>;
  licensePlateDescription?: InputMaybe<StringFieldComparison>;
  licensePlateId?: InputMaybe<IdFilterComparison>;
  licensePlateStatus?: InputMaybe<LicensePlateStatusStateFilterComparison>;
  lotCode?: InputMaybe<StringFieldComparison>;
  lotId?: InputMaybe<IdFilterComparison>;
  lotManaged?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ViewLostAndFoundFilter>>;
  productCode?: InputMaybe<StringFieldComparison>;
  productDescription?: InputMaybe<StringFieldComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<StringFieldComparison>;
  stockDeliveryCode?: InputMaybe<StringFieldComparison>;
  stockDeliveryId?: InputMaybe<IdFilterComparison>;
  stockFulfillmentCode?: InputMaybe<StringFieldComparison>;
  stockFulfillmentId?: InputMaybe<IdFilterComparison>;
  stockStatusId?: InputMaybe<IdFilterComparison>;
  stockStatusLabel?: InputMaybe<StringFieldComparison>;
  unitOfMeasureCode?: InputMaybe<StringFieldComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ViewLostAndFoundOffsetConnection = {
  __typename?: 'ViewLostAndFoundOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewLostAndFound>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewLostAndFoundSort = {
  direction: SortDirection;
  field: ViewLostAndFoundSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewLostAndFoundSortFields {
  AreaCode = 'areaCode',
  AreaId = 'areaId',
  BinCode = 'binCode',
  BinId = 'binId',
  BinType = 'binType',
  DeliveryItem = 'deliveryItem',
  DeliveryItemId = 'deliveryItemId',
  FulfillmentItem = 'fulfillmentItem',
  FulfillmentItemId = 'fulfillmentItemId',
  LicensePlateCode = 'licensePlateCode',
  LicensePlateDescription = 'licensePlateDescription',
  LicensePlateId = 'licensePlateId',
  LicensePlateStatus = 'licensePlateStatus',
  LotCode = 'lotCode',
  LotId = 'lotId',
  LotManaged = 'lotManaged',
  ProductCode = 'productCode',
  ProductDescription = 'productDescription',
  ProductId = 'productId',
  Quantity = 'quantity',
  StockDeliveryCode = 'stockDeliveryCode',
  StockDeliveryId = 'stockDeliveryId',
  StockFulfillmentCode = 'stockFulfillmentCode',
  StockFulfillmentId = 'stockFulfillmentId',
  StockStatusId = 'stockStatusId',
  StockStatusLabel = 'stockStatusLabel',
  UnitOfMeasureCode = 'unitOfMeasureCode',
  UnitOfMeasureId = 'unitOfMeasureId',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId'
}

export type ViewLot = {
  __typename?: 'ViewLot';
  /** Entity code */
  code: Scalars['String']['output'];
  /** When data was created in ERP */
  erpCreatedOn?: Maybe<Scalars['DateTime']['output']>;
  /** When data was last updated in ERP */
  erpUpdatedOn?: Maybe<Scalars['DateTime']['output']>;
  /** Lot expiration date */
  expiration?: Maybe<Scalars['DateTime']['output']>;
  /** Lot ID */
  id: Scalars['ID']['output'];
  /** Product entity belongs to */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Entity's product ID (foreign key) */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Lot production date */
  productionDate?: Maybe<Scalars['DateTime']['output']>;
  /** Lot Restricted */
  restricted?: Maybe<Scalars['Boolean']['output']>;
  /** Lot supplier number */
  supplierLotNumber?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ViewLotFilter = {
  and?: InputMaybe<Array<ViewLotFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  erpCreatedOn?: InputMaybe<DateFieldComparison>;
  erpUpdatedOn?: InputMaybe<DateFieldComparison>;
  expiration?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ViewLotFilter>>;
  productCode?: InputMaybe<StringFieldComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  productionDate?: InputMaybe<DateFieldComparison>;
  restricted?: InputMaybe<BooleanFieldComparison>;
  supplierLotNumber?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ViewLotOffsetConnection = {
  __typename?: 'ViewLotOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewLot>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewLotSort = {
  direction: SortDirection;
  field: ViewLotSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewLotSortFields {
  Code = 'code',
  ErpCreatedOn = 'erpCreatedOn',
  ErpUpdatedOn = 'erpUpdatedOn',
  Expiration = 'expiration',
  Id = 'id',
  ProductCode = 'productCode',
  ProductId = 'productId',
  ProductionDate = 'productionDate',
  Restricted = 'restricted',
  SupplierLotNumber = 'supplierLotNumber',
  UpdatedAt = 'updatedAt'
}

export type ViewMapAisle = {
  __typename?: 'ViewMapAisle';
  /** Entity code */
  areaCode?: Maybe<Scalars['String']['output']>;
  /** Entity's area ID (foreign key) */
  areaId?: Maybe<Scalars['ID']['output']>;
  /** Area's name */
  areaName?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Volume capacity of storage */
  dimensionCapacity?: Maybe<Scalars['Int']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  /** Area's status, i.e. ACTIVE, INACTIVE */
  status?: Maybe<AreaStatus>;
  /** Entity's SAP storage location */
  storageLocation?: Maybe<Scalars['String']['output']>;
  /** Entity's SAP storage location ID (foreign key) */
  storageLocationId?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** Weight capacity of storage */
  weightCapacity?: Maybe<Scalars['Int']['output']>;
};

export type ViewMapAisleFilter = {
  and?: InputMaybe<Array<ViewMapAisleFilter>>;
  areaCode?: InputMaybe<StringFieldComparison>;
  areaId?: InputMaybe<IdFilterComparison>;
  areaName?: InputMaybe<StringFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  dimensionCapacity?: InputMaybe<IntFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ViewMapAisleFilter>>;
  status?: InputMaybe<AreaStatusFilterComparison>;
  storageLocation?: InputMaybe<StringFieldComparison>;
  storageLocationId?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  weightCapacity?: InputMaybe<IntFieldComparison>;
};

export type ViewMapAisleOffsetConnection = {
  __typename?: 'ViewMapAisleOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewMapAisle>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewMapAisleSort = {
  direction: SortDirection;
  field: ViewMapAisleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewMapAisleSortFields {
  AreaCode = 'areaCode',
  AreaId = 'areaId',
  AreaName = 'areaName',
  Code = 'code',
  Description = 'description',
  DimensionCapacity = 'dimensionCapacity',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  StorageLocation = 'storageLocation',
  StorageLocationId = 'storageLocationId',
  WarehouseId = 'warehouseId',
  WeightCapacity = 'weightCapacity'
}

export type ViewMapBin = {
  __typename?: 'ViewMapBin';
  /** Aisle within the warehouse. */
  aisleCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  aisleColumnCode?: Maybe<Scalars['String']['output']>;
  /** Column where the bin is located. */
  aisleColumnId?: Maybe<Scalars['ID']['output']>;
  /** Aisle within the warehouse. */
  aisleId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  areaCode?: Maybe<Scalars['String']['output']>;
  /** Entity's area ID (foreign key) */
  areaId?: Maybe<Scalars['ID']['output']>;
  /** Area's name */
  areaName?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  binCode?: Maybe<Scalars['String']['output']>;
  /** Entity's bin ID (foreign key) */
  binId?: Maybe<Scalars['ID']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Destination bin block flag */
  destinationBinBlock?: Maybe<BinBlockState>;
  /** Volume capacity of storage */
  dimensionCapacity?: Maybe<Scalars['Float']['output']>;
  /** Timestamp of latest inventory count approval */
  lastCount?: Maybe<Scalars['DateTime']['output']>;
  /** Timestamp of latest movement */
  lastMovement?: Maybe<Scalars['DateTime']['output']>;
  /** Level where the bin is located. */
  level?: Maybe<Scalars['String']['output']>;
  /** Weight capacity of storage */
  maxVolumeCapacity?: Maybe<Scalars['Float']['output']>;
  /** Weight capacity of storage */
  maxWeightCapacity?: Maybe<Scalars['Float']['output']>;
  /** Weight capacity of storage */
  productVolume?: Maybe<Scalars['Float']['output']>;
  /** Weight capacity of storage */
  productWeight?: Maybe<Scalars['Float']['output']>;
  /** Source bin block flag */
  sourceBinBlock?: Maybe<BinBlockState>;
  /** Area's status, i.e. ACTIVE, INACTIVE */
  status?: Maybe<AreaStatus>;
  /** Entity's SAP storage location */
  storageLocation?: Maybe<Scalars['String']['output']>;
  /** Entity's SAP storage location ID (foreign key) */
  storageLocationId?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** Weight capacity of storage */
  weightCapacity?: Maybe<Scalars['Float']['output']>;
};

export type ViewMapBinFilter = {
  aisleCode?: InputMaybe<StringFieldComparison>;
  aisleColumnCode?: InputMaybe<StringFieldComparison>;
  aisleColumnId?: InputMaybe<IdFilterComparison>;
  aisleId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<ViewMapBinFilter>>;
  areaCode?: InputMaybe<StringFieldComparison>;
  areaId?: InputMaybe<IdFilterComparison>;
  areaName?: InputMaybe<StringFieldComparison>;
  binCode?: InputMaybe<StringFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  description?: InputMaybe<StringFieldComparison>;
  destinationBinBlock?: InputMaybe<BinBlockStateFilterComparison>;
  dimensionCapacity?: InputMaybe<FloatFieldComparison>;
  lastCount?: InputMaybe<DateFieldComparison>;
  lastMovement?: InputMaybe<DateFieldComparison>;
  level?: InputMaybe<StringFieldComparison>;
  maxVolumeCapacity?: InputMaybe<FloatFieldComparison>;
  maxWeightCapacity?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<ViewMapBinFilter>>;
  productVolume?: InputMaybe<FloatFieldComparison>;
  productWeight?: InputMaybe<FloatFieldComparison>;
  sourceBinBlock?: InputMaybe<BinBlockStateFilterComparison>;
  status?: InputMaybe<AreaStatusFilterComparison>;
  storageLocation?: InputMaybe<StringFieldComparison>;
  storageLocationId?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  weightCapacity?: InputMaybe<FloatFieldComparison>;
};

export type ViewMapBinOffsetConnection = {
  __typename?: 'ViewMapBinOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewMapBin>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewMapBinSort = {
  direction: SortDirection;
  field: ViewMapBinSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewMapBinSortFields {
  AisleCode = 'aisleCode',
  AisleColumnCode = 'aisleColumnCode',
  AisleColumnId = 'aisleColumnId',
  AisleId = 'aisleId',
  AreaCode = 'areaCode',
  AreaId = 'areaId',
  AreaName = 'areaName',
  BinCode = 'binCode',
  BinId = 'binId',
  Description = 'description',
  DestinationBinBlock = 'destinationBinBlock',
  DimensionCapacity = 'dimensionCapacity',
  LastCount = 'lastCount',
  LastMovement = 'lastMovement',
  Level = 'level',
  MaxVolumeCapacity = 'maxVolumeCapacity',
  MaxWeightCapacity = 'maxWeightCapacity',
  ProductVolume = 'productVolume',
  ProductWeight = 'productWeight',
  SourceBinBlock = 'sourceBinBlock',
  Status = 'status',
  StorageLocation = 'storageLocation',
  StorageLocationId = 'storageLocationId',
  WarehouseId = 'warehouseId',
  WeightCapacity = 'weightCapacity'
}

export type ViewSapBinFfArea = {
  __typename?: 'ViewSapBinFFArea';
  /** Entity code */
  areaCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  areaId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Is the area empty of stock */
  isAreaEmpty?: Maybe<Scalars['Boolean']['output']>;
  /** Sap bin code */
  sapBinCode?: Maybe<Scalars['String']['output']>;
  /** Sap storage type code */
  sapStorageTypeCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  systemConnectionId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type ViewSapBinFfAreaFilter = {
  and?: InputMaybe<Array<ViewSapBinFfAreaFilter>>;
  areaCode?: InputMaybe<StringFieldComparison>;
  areaId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isAreaEmpty?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ViewSapBinFfAreaFilter>>;
  sapBinCode?: InputMaybe<StringFieldComparison>;
  sapStorageTypeCode?: InputMaybe<StringFieldComparison>;
  systemConnectionId?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ViewSapBinFfAreaOffsetConnection = {
  __typename?: 'ViewSapBinFFAreaOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewSapBinFfArea>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewSapBinFfAreaSort = {
  direction: SortDirection;
  field: ViewSapBinFfAreaSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewSapBinFfAreaSortFields {
  AreaCode = 'areaCode',
  AreaId = 'areaId',
  Id = 'id',
  IsAreaEmpty = 'isAreaEmpty',
  SapBinCode = 'sapBinCode',
  SapStorageTypeCode = 'sapStorageTypeCode',
  SystemConnectionId = 'systemConnectionId',
  WarehouseId = 'warehouseId'
}

export type ViewSlottingExclusion = {
  __typename?: 'ViewSlottingExclusion';
  /** Unit of measure for entity */
  baseUOM?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Created by user */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Created by user */
  excludedBy?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  /** Entity's product ID (foreign key) */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Created by user */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type ViewSlottingExclusionFilter = {
  and?: InputMaybe<Array<ViewSlottingExclusionFilter>>;
  baseUOM?: InputMaybe<StringFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  excludedBy?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ViewSlottingExclusionFilter>>;
  productId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ViewSlottingExclusionOffsetConnection = {
  __typename?: 'ViewSlottingExclusionOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewSlottingExclusion>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewSlottingExclusionSort = {
  direction: SortDirection;
  field: ViewSlottingExclusionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewSlottingExclusionSortFields {
  BaseUom = 'baseUOM',
  Code = 'code',
  CreatedAt = 'createdAt',
  Description = 'description',
  ExcludedBy = 'excludedBy',
  Id = 'id',
  Name = 'name',
  ProductId = 'productId',
  UpdatedAt = 'updatedAt',
  WarehouseId = 'warehouseId'
}

export type ViewSlottingRuleset = {
  __typename?: 'ViewSlottingRuleset';
  /** Created by user */
  createdBy?: Maybe<Scalars['String']['output']>;
  /** Created by user */
  createdByUserId?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Timestamp of latest movement */
  lastUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  /** ruleset status, i.e. COMPLETE, DRAFT */
  rulesetStatus: RulesetStatus;
  /** Person's last name */
  runCount?: Maybe<Scalars['Float']['output']>;
  /** Skip ABC Anlysis */
  skipAbc?: Maybe<Scalars['Boolean']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type ViewSlottingRulesetFilter = {
  and?: InputMaybe<Array<ViewSlottingRulesetFilter>>;
  createdBy?: InputMaybe<StringFieldComparison>;
  createdByUserId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastUpdated?: InputMaybe<DateFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ViewSlottingRulesetFilter>>;
  rulesetStatus?: InputMaybe<RulesetStatusFilterComparison>;
  runCount?: InputMaybe<NumberFieldComparison>;
  skipAbc?: InputMaybe<BooleanFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ViewSlottingRulesetOffsetConnection = {
  __typename?: 'ViewSlottingRulesetOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewSlottingRuleset>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewSlottingRulesetSort = {
  direction: SortDirection;
  field: ViewSlottingRulesetSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewSlottingRulesetSortFields {
  CreatedBy = 'createdBy',
  CreatedByUserId = 'createdByUserId',
  Id = 'id',
  LastUpdated = 'lastUpdated',
  Name = 'name',
  RulesetStatus = 'rulesetStatus',
  RunCount = 'runCount',
  SkipAbc = 'skipAbc',
  WarehouseId = 'warehouseId'
}

export type ViewStockStatus = {
  __typename?: 'ViewStockStatus';
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Stock status used when converting ERP stock status to Fulfilld stock status */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Entity's label */
  label?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  sapHuUserStatusCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  sapHuUserStatusId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  sapStockStatusCode?: Maybe<Scalars['String']['output']>;
  /** Entity's SAP stock status type ID (foreign key) */
  sapStockStatusId?: Maybe<Scalars['ID']['output']>;
  /** I.e. Returns, Available, Lot Restricted etc. */
  sapStockStatusLabel?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  stockStatusMappingId?: Maybe<Scalars['String']['output']>;
  /** Determines if stock status type is in use */
  stockStatusTypeStatus?: Maybe<StockStatusTypeStatus>;
  /** Entity ID */
  systemConnectionId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type ViewStockStatusFilter = {
  and?: InputMaybe<Array<ViewStockStatusFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  default?: InputMaybe<BooleanFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ViewStockStatusFilter>>;
  sapHuUserStatusCode?: InputMaybe<StringFieldComparison>;
  sapHuUserStatusId?: InputMaybe<IdFilterComparison>;
  sapStockStatusCode?: InputMaybe<StringFieldComparison>;
  sapStockStatusId?: InputMaybe<IdFilterComparison>;
  sapStockStatusLabel?: InputMaybe<StringFieldComparison>;
  stockStatusMappingId?: InputMaybe<StringFieldComparison>;
  stockStatusTypeStatus?: InputMaybe<StockStatusTypeStatusFilterComparison>;
  systemConnectionId?: InputMaybe<IdFilterComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ViewStockStatusOffsetConnection = {
  __typename?: 'ViewStockStatusOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewStockStatus>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewStockStatusSort = {
  direction: SortDirection;
  field: ViewStockStatusSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewStockStatusSortFields {
  Code = 'code',
  Default = 'default',
  Description = 'description',
  Id = 'id',
  Label = 'label',
  SapHuUserStatusCode = 'sapHuUserStatusCode',
  SapHuUserStatusId = 'sapHuUserStatusId',
  SapStockStatusCode = 'sapStockStatusCode',
  SapStockStatusId = 'sapStockStatusId',
  SapStockStatusLabel = 'sapStockStatusLabel',
  StockStatusMappingId = 'stockStatusMappingId',
  StockStatusTypeStatus = 'stockStatusTypeStatus',
  SystemConnectionId = 'systemConnectionId',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId'
}

export type ViewTask = {
  __typename?: 'ViewTask';
  /** Deleted at date */
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  assignedByUserId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  assignedTeamId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  assignedTeamName?: Maybe<Scalars['String']['output']>;
  /** Email address */
  assignedUserEmail?: Maybe<Scalars['String']['output']>;
  /** Person's first name */
  assignedUserFirstName?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  assignedUserId?: Maybe<Scalars['ID']['output']>;
  /** Person's last name */
  assignedUserLastName?: Maybe<Scalars['String']['output']>;
  /** Date and time a task is completed */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** x coordinate location */
  completedAtLocationX?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  completedAtLocationY?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  completedByTeamId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  completedByTeamName?: Maybe<Scalars['String']['output']>;
  /** Email address */
  completedByUserEmail?: Maybe<Scalars['String']['output']>;
  /** Person's first name */
  completedByUserFirstName?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  completedByUserId?: Maybe<Scalars['ID']['output']>;
  /** Person's last name */
  completedByUserLastName?: Maybe<Scalars['String']['output']>;
  /** Date the task was completed */
  completionDate?: Maybe<Scalars['DateTime']['output']>;
  /** Count accuracy */
  countAccuracy?: Maybe<Scalars['Float']['output']>;
  /** Indicates whether the count should be guided or blind */
  countType?: Maybe<PhysicalInventoryCountType>;
  /** Created at date */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Delivery code and line item code */
  deliveryAndLineItemCode?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment erp code */
  deliveryErpCode?: Maybe<Scalars['String']['output']>;
  /** Delivery ID (foreign key) */
  deliveryId?: Maybe<Scalars['ID']['output']>;
  /** Delivery item associated with entity */
  deliveryItem?: Maybe<Scalars['String']['output']>;
  /** Delivery item ID (foreign key) */
  deliveryItemId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  destinationAreaCode?: Maybe<Scalars['String']['output']>;
  /** Entity's area ID (foreign key) */
  destinationAreaId?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  destinationBinCode?: Maybe<Scalars['String']['output']>;
  /** Entity's bin ID (foreign key) */
  destinationBinId?: Maybe<Scalars['String']['output']>;
  /** Destination license plate code */
  destinationLicensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Destination license plate description */
  destinationLicensePlateDescription?: Maybe<Scalars['String']['output']>;
  /** Destination license plate ID */
  destinationLicensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  destinationLotCode?: Maybe<Scalars['String']['output']>;
  /** Source lot ID (foreign key) */
  destinationLotId?: Maybe<Scalars['String']['output']>;
  /** Stock status type entity belongs to */
  destinationStatus?: Maybe<Scalars['String']['output']>;
  /** Destination stock status type ID (foreign key) */
  destinationStockStatusId?: Maybe<Scalars['ID']['output']>;
  /** Date the task is or was due */
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Fulfillment code and line item code */
  fulfillmentAndLineItemCode?: Maybe<Scalars['String']['output']>;
  /** Delivery or fulfillment erp code */
  fulfillmentErpCode?: Maybe<Scalars['String']['output']>;
  /** Fulfillment item associated with the entity */
  fulfillmentItem?: Maybe<Scalars['String']['output']>;
  /** Fulfillment item id (foreign key) */
  fulfillmentItemId?: Maybe<Scalars['ID']['output']>;
  /** Gross weight of entity */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  internalStockOrderCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  internalStockOrderId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  internalStockOrderItemId?: Maybe<Scalars['ID']['output']>;
  internalStockOrderReferenceDocument?: Maybe<Scalars['String']['output']>;
  /** Boolean for if a record is a task group */
  isTaskGroup?: Maybe<Scalars['Boolean']['output']>;
  /** Entity ID */
  linkedTaskId?: Maybe<Scalars['ID']['output']>;
  /** Net weight of entity */
  netWeight?: Maybe<Scalars['Float']['output']>;
  /** Entity's parent task ID */
  parentTaskId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  productCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  productDescription?: Maybe<Scalars['String']['output']>;
  /** Entity's product ID (foreign key) */
  productId?: Maybe<Scalars['String']['output']>;
  /** Whether the product is lot managed or not */
  productLotManaged?: Maybe<Scalars['Boolean']['output']>;
  /** Quantity of product */
  quantity?: Maybe<Scalars['String']['output']>;
  /** Task that is display only */
  readonly?: Maybe<Scalars['Boolean']['output']>;
  /** Reference document */
  referringDoc?: Maybe<Scalars['String']['output']>;
  /** Reference item */
  referringDocItem?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  sourceAreaCode?: Maybe<Scalars['String']['output']>;
  /** Entity's area ID (foreign key) */
  sourceAreaId?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  sourceBinCode?: Maybe<Scalars['String']['output']>;
  /** Entity's bin ID (foreign key) */
  sourceBinId?: Maybe<Scalars['String']['output']>;
  /** Source License Plate code */
  sourceLicensePlateCode?: Maybe<Scalars['String']['output']>;
  /** Source License Plate description */
  sourceLicensePlateDescription?: Maybe<Scalars['String']['output']>;
  /** Source License Plate Id */
  sourceLicensePlateId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  sourceLotCode?: Maybe<Scalars['String']['output']>;
  /** Source lot ID (foreign key) */
  sourceLotId?: Maybe<Scalars['String']['output']>;
  /** Stock status type entity belongs to */
  sourceStatus?: Maybe<Scalars['String']['output']>;
  /** Source stock status type ID (foreign key) */
  sourceStockStatusId?: Maybe<Scalars['String']['output']>;
  /** Date and time a task is started */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** x coordinate location */
  startedAtLocationX?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  startedAtLocationY?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  startedByTeamId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  startedByTeamName?: Maybe<Scalars['String']['output']>;
  /** Email address */
  startedByUserEmail?: Maybe<Scalars['String']['output']>;
  /** Person's first name */
  startedByUserFirstName?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  startedByUserId?: Maybe<Scalars['ID']['output']>;
  /** Person's last name */
  startedByUserLastName?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  taskCode?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  taskGroupCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  taskGroupId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  taskGroupPosition?: Maybe<Scalars['Float']['output']>;
  /** Task status, i.e Not Started */
  taskGroupStatus?: Maybe<TaskStatus>;
  taskGroupTaskData: TaskGroupTaskResource;
  /** Entity's task ID (foreign key) */
  taskId?: Maybe<Scalars['String']['output']>;
  /** Task status, i.e Not Started */
  taskStatus?: Maybe<TaskStatus>;
  /** Task type */
  taskType?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  taskTypeCode?: Maybe<Scalars['String']['output']>;
  /** Task type reference category */
  taskTypeReferenceCategory?: Maybe<TaskTypeReferenceCategory>;
  /** Description of entity */
  teamDescription?: Maybe<Scalars['String']['output']>;
  /**
   * Entity's team ID (foreign key)
   * @deprecated no longer in use
   */
  teamId?: Maybe<Scalars['ID']['output']>;
  /** Entity's team name */
  teamName?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for entity */
  unitOfMeasure?: Maybe<Scalars['String']['output']>;
  /** Unit of measure ID */
  unitOfMeasureId?: Maybe<Scalars['ID']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Volume of entity */
  volume?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** Warehouse entity belongs to */
  warehouseName?: Maybe<Scalars['String']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: Maybe<Scalars['String']['output']>;
};

export type ViewTaskFilter = {
  and?: InputMaybe<Array<ViewTaskFilter>>;
  assignedAt?: InputMaybe<DateFieldComparison>;
  assignedByUserId?: InputMaybe<IdFilterComparison>;
  assignedTeamId?: InputMaybe<IdFilterComparison>;
  assignedTeamName?: InputMaybe<StringFieldComparison>;
  assignedUserEmail?: InputMaybe<StringFieldComparison>;
  assignedUserFirstName?: InputMaybe<StringFieldComparison>;
  assignedUserId?: InputMaybe<IdFilterComparison>;
  assignedUserLastName?: InputMaybe<StringFieldComparison>;
  completedAt?: InputMaybe<DateFieldComparison>;
  completedAtLocationX?: InputMaybe<FloatFieldComparison>;
  completedAtLocationY?: InputMaybe<FloatFieldComparison>;
  completedByTeamId?: InputMaybe<IdFilterComparison>;
  completedByTeamName?: InputMaybe<StringFieldComparison>;
  completedByUserEmail?: InputMaybe<StringFieldComparison>;
  completedByUserFirstName?: InputMaybe<StringFieldComparison>;
  completedByUserId?: InputMaybe<IdFilterComparison>;
  completedByUserLastName?: InputMaybe<StringFieldComparison>;
  completionDate?: InputMaybe<DateFieldComparison>;
  countAccuracy?: InputMaybe<FloatFieldComparison>;
  countType?: InputMaybe<PhysicalInventoryCountTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAndLineItemCode?: InputMaybe<StringFieldComparison>;
  deliveryErpCode?: InputMaybe<StringFieldComparison>;
  deliveryId?: InputMaybe<IdFilterComparison>;
  deliveryItem?: InputMaybe<StringFieldComparison>;
  deliveryItemId?: InputMaybe<IdFilterComparison>;
  destinationAreaCode?: InputMaybe<StringFieldComparison>;
  destinationAreaId?: InputMaybe<StringFieldComparison>;
  destinationBinCode?: InputMaybe<StringFieldComparison>;
  destinationBinId?: InputMaybe<StringFieldComparison>;
  destinationLicensePlateCode?: InputMaybe<StringFieldComparison>;
  destinationLicensePlateDescription?: InputMaybe<StringFieldComparison>;
  destinationLicensePlateId?: InputMaybe<IdFilterComparison>;
  destinationLotCode?: InputMaybe<StringFieldComparison>;
  destinationLotId?: InputMaybe<StringFieldComparison>;
  destinationStatus?: InputMaybe<StringFieldComparison>;
  destinationStockStatusId?: InputMaybe<IdFilterComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  fulfillmentAndLineItemCode?: InputMaybe<StringFieldComparison>;
  fulfillmentErpCode?: InputMaybe<StringFieldComparison>;
  fulfillmentItem?: InputMaybe<StringFieldComparison>;
  fulfillmentItemId?: InputMaybe<IdFilterComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  internalStockOrderCode?: InputMaybe<StringFieldComparison>;
  internalStockOrderId?: InputMaybe<IdFilterComparison>;
  internalStockOrderItemId?: InputMaybe<IdFilterComparison>;
  internalStockOrderReferenceDocument?: InputMaybe<StringFieldComparison>;
  isTaskGroup?: InputMaybe<BooleanFieldComparison>;
  linkedTaskId?: InputMaybe<IdFilterComparison>;
  netWeight?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<ViewTaskFilter>>;
  parentTaskId?: InputMaybe<IdFilterComparison>;
  productCode?: InputMaybe<StringFieldComparison>;
  productDescription?: InputMaybe<StringFieldComparison>;
  productId?: InputMaybe<StringFieldComparison>;
  productLotManaged?: InputMaybe<BooleanFieldComparison>;
  quantity?: InputMaybe<StringFieldComparison>;
  readonly?: InputMaybe<BooleanFieldComparison>;
  referringDoc?: InputMaybe<StringFieldComparison>;
  referringDocItem?: InputMaybe<StringFieldComparison>;
  sourceAreaCode?: InputMaybe<StringFieldComparison>;
  sourceAreaId?: InputMaybe<StringFieldComparison>;
  sourceBinCode?: InputMaybe<StringFieldComparison>;
  sourceBinId?: InputMaybe<StringFieldComparison>;
  sourceLicensePlateCode?: InputMaybe<StringFieldComparison>;
  sourceLicensePlateDescription?: InputMaybe<StringFieldComparison>;
  sourceLicensePlateId?: InputMaybe<IdFilterComparison>;
  sourceLotCode?: InputMaybe<StringFieldComparison>;
  sourceLotId?: InputMaybe<StringFieldComparison>;
  sourceStatus?: InputMaybe<StringFieldComparison>;
  sourceStockStatusId?: InputMaybe<StringFieldComparison>;
  startedAt?: InputMaybe<DateFieldComparison>;
  startedAtLocationX?: InputMaybe<FloatFieldComparison>;
  startedAtLocationY?: InputMaybe<FloatFieldComparison>;
  startedByTeamId?: InputMaybe<IdFilterComparison>;
  startedByTeamName?: InputMaybe<StringFieldComparison>;
  startedByUserEmail?: InputMaybe<StringFieldComparison>;
  startedByUserFirstName?: InputMaybe<StringFieldComparison>;
  startedByUserId?: InputMaybe<IdFilterComparison>;
  startedByUserLastName?: InputMaybe<StringFieldComparison>;
  taskCode?: InputMaybe<StringFieldComparison>;
  taskGroupCode?: InputMaybe<StringFieldComparison>;
  taskGroupId?: InputMaybe<IdFilterComparison>;
  taskGroupPosition?: InputMaybe<FloatFieldComparison>;
  taskGroupStatus?: InputMaybe<TaskStatusFilterComparison>;
  taskId?: InputMaybe<StringFieldComparison>;
  taskStatus?: InputMaybe<TaskStatusFilterComparison>;
  taskType?: InputMaybe<StringFieldComparison>;
  taskTypeCode?: InputMaybe<StringFieldComparison>;
  taskTypeReferenceCategory?: InputMaybe<TaskTypeReferenceCategoryFilterComparison>;
  teamDescription?: InputMaybe<StringFieldComparison>;
  teamId?: InputMaybe<IdFilterComparison>;
  teamName?: InputMaybe<StringFieldComparison>;
  unitOfMeasure?: InputMaybe<StringFieldComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  volume?: InputMaybe<FloatFieldComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  warehouseName?: InputMaybe<StringFieldComparison>;
  weightUOMId?: InputMaybe<StringFieldComparison>;
};

export type ViewTaskGroup = {
  __typename?: 'ViewTaskGroup';
  areaCodes?: Maybe<Array<SourceDestinationArea>>;
  /** Entity ID */
  assignedTeamId?: Maybe<Scalars['ID']['output']>;
  /** Entity's team name */
  assignedTeamName?: Maybe<Scalars['String']['output']>;
  /** Person's first name */
  assignedUserFirstName?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  assignedUserId?: Maybe<Scalars['ID']['output']>;
  /** Person's last name */
  assignedUserLastName?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Date and time a task is completed */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  completedUserId?: Maybe<Scalars['ID']['output']>;
  /** Person's last name */
  completedUserLastName?: Maybe<Scalars['String']['output']>;
  /** Person's first name */
  completedUserserFirstName?: Maybe<Scalars['String']['output']>;
  /** Date and time a task is completed */
  plannedCompletionAt?: Maybe<Scalars['DateTime']['output']>;
  /** Date and time a task is completed */
  plannedStartAt?: Maybe<Scalars['DateTime']['output']>;
  progress: Scalars['Int']['output'];
  /** Date and time a task is completed */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  taskGroupId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  warehouseName?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  workingTeamId?: Maybe<Scalars['ID']['output']>;
  /** Entity's team name */
  workingTeamName?: Maybe<Scalars['String']['output']>;
};

export type ViewTaskGroupFilter = {
  and?: InputMaybe<Array<ViewTaskGroupFilter>>;
  assignedTeamId?: InputMaybe<IdFilterComparison>;
  assignedTeamName?: InputMaybe<StringFieldComparison>;
  assignedUserFirstName?: InputMaybe<StringFieldComparison>;
  assignedUserId?: InputMaybe<IdFilterComparison>;
  assignedUserLastName?: InputMaybe<StringFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  completedAt?: InputMaybe<DateFieldComparison>;
  completedUserId?: InputMaybe<IdFilterComparison>;
  completedUserLastName?: InputMaybe<StringFieldComparison>;
  completedUserserFirstName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ViewTaskGroupFilter>>;
  plannedCompletionAt?: InputMaybe<DateFieldComparison>;
  plannedStartAt?: InputMaybe<DateFieldComparison>;
  startedAt?: InputMaybe<DateFieldComparison>;
  taskGroupId?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  warehouseName?: InputMaybe<StringFieldComparison>;
  workingTeamId?: InputMaybe<IdFilterComparison>;
  workingTeamName?: InputMaybe<StringFieldComparison>;
};

export type ViewTaskGroupOffsetConnection = {
  __typename?: 'ViewTaskGroupOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewTaskGroup>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewTaskGroupSort = {
  direction: SortDirection;
  field: ViewTaskGroupSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewTaskGroupSortFields {
  AssignedTeamId = 'assignedTeamId',
  AssignedTeamName = 'assignedTeamName',
  AssignedUserFirstName = 'assignedUserFirstName',
  AssignedUserId = 'assignedUserId',
  AssignedUserLastName = 'assignedUserLastName',
  Code = 'code',
  CompletedAt = 'completedAt',
  CompletedUserId = 'completedUserId',
  CompletedUserLastName = 'completedUserLastName',
  CompletedUserserFirstName = 'completedUserserFirstName',
  PlannedCompletionAt = 'plannedCompletionAt',
  PlannedStartAt = 'plannedStartAt',
  StartedAt = 'startedAt',
  TaskGroupId = 'taskGroupId',
  WarehouseId = 'warehouseId',
  WarehouseName = 'warehouseName',
  WorkingTeamId = 'workingTeamId',
  WorkingTeamName = 'workingTeamName'
}

export type ViewTaskOffsetConnection = {
  __typename?: 'ViewTaskOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewTask>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewTaskSort = {
  direction: SortDirection;
  field: ViewTaskSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewTaskSortFields {
  AssignedAt = 'assignedAt',
  AssignedByUserId = 'assignedByUserId',
  AssignedTeamId = 'assignedTeamId',
  AssignedTeamName = 'assignedTeamName',
  AssignedUserEmail = 'assignedUserEmail',
  AssignedUserFirstName = 'assignedUserFirstName',
  AssignedUserId = 'assignedUserId',
  AssignedUserLastName = 'assignedUserLastName',
  CompletedAt = 'completedAt',
  CompletedAtLocationX = 'completedAtLocationX',
  CompletedAtLocationY = 'completedAtLocationY',
  CompletedByTeamId = 'completedByTeamId',
  CompletedByTeamName = 'completedByTeamName',
  CompletedByUserEmail = 'completedByUserEmail',
  CompletedByUserFirstName = 'completedByUserFirstName',
  CompletedByUserId = 'completedByUserId',
  CompletedByUserLastName = 'completedByUserLastName',
  CompletionDate = 'completionDate',
  CountAccuracy = 'countAccuracy',
  CountType = 'countType',
  CreatedAt = 'createdAt',
  DeliveryAndLineItemCode = 'deliveryAndLineItemCode',
  DeliveryErpCode = 'deliveryErpCode',
  DeliveryId = 'deliveryId',
  DeliveryItem = 'deliveryItem',
  DeliveryItemId = 'deliveryItemId',
  DestinationAreaCode = 'destinationAreaCode',
  DestinationAreaId = 'destinationAreaId',
  DestinationBinCode = 'destinationBinCode',
  DestinationBinId = 'destinationBinId',
  DestinationLicensePlateCode = 'destinationLicensePlateCode',
  DestinationLicensePlateDescription = 'destinationLicensePlateDescription',
  DestinationLicensePlateId = 'destinationLicensePlateId',
  DestinationLotCode = 'destinationLotCode',
  DestinationLotId = 'destinationLotId',
  DestinationStatus = 'destinationStatus',
  DestinationStockStatusId = 'destinationStockStatusId',
  DueDate = 'dueDate',
  FulfillmentAndLineItemCode = 'fulfillmentAndLineItemCode',
  FulfillmentErpCode = 'fulfillmentErpCode',
  FulfillmentItem = 'fulfillmentItem',
  FulfillmentItemId = 'fulfillmentItemId',
  GrossWeight = 'grossWeight',
  InternalStockOrderCode = 'internalStockOrderCode',
  InternalStockOrderId = 'internalStockOrderId',
  InternalStockOrderItemId = 'internalStockOrderItemId',
  InternalStockOrderReferenceDocument = 'internalStockOrderReferenceDocument',
  IsTaskGroup = 'isTaskGroup',
  LinkedTaskId = 'linkedTaskId',
  NetWeight = 'netWeight',
  ParentTaskId = 'parentTaskId',
  ProductCode = 'productCode',
  ProductDescription = 'productDescription',
  ProductId = 'productId',
  ProductLotManaged = 'productLotManaged',
  Quantity = 'quantity',
  Readonly = 'readonly',
  ReferringDoc = 'referringDoc',
  ReferringDocItem = 'referringDocItem',
  SourceAreaCode = 'sourceAreaCode',
  SourceAreaId = 'sourceAreaId',
  SourceBinCode = 'sourceBinCode',
  SourceBinId = 'sourceBinId',
  SourceLicensePlateCode = 'sourceLicensePlateCode',
  SourceLicensePlateDescription = 'sourceLicensePlateDescription',
  SourceLicensePlateId = 'sourceLicensePlateId',
  SourceLotCode = 'sourceLotCode',
  SourceLotId = 'sourceLotId',
  SourceStatus = 'sourceStatus',
  SourceStockStatusId = 'sourceStockStatusId',
  StartedAt = 'startedAt',
  StartedAtLocationX = 'startedAtLocationX',
  StartedAtLocationY = 'startedAtLocationY',
  StartedByTeamId = 'startedByTeamId',
  StartedByTeamName = 'startedByTeamName',
  StartedByUserEmail = 'startedByUserEmail',
  StartedByUserFirstName = 'startedByUserFirstName',
  StartedByUserId = 'startedByUserId',
  StartedByUserLastName = 'startedByUserLastName',
  TaskCode = 'taskCode',
  TaskGroupCode = 'taskGroupCode',
  TaskGroupId = 'taskGroupId',
  TaskGroupPosition = 'taskGroupPosition',
  TaskGroupStatus = 'taskGroupStatus',
  TaskId = 'taskId',
  TaskStatus = 'taskStatus',
  TaskType = 'taskType',
  TaskTypeCode = 'taskTypeCode',
  TaskTypeReferenceCategory = 'taskTypeReferenceCategory',
  TeamDescription = 'teamDescription',
  TeamId = 'teamId',
  TeamName = 'teamName',
  UnitOfMeasure = 'unitOfMeasure',
  UnitOfMeasureId = 'unitOfMeasureId',
  UpdatedAt = 'updatedAt',
  Volume = 'volume',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId',
  WarehouseName = 'warehouseName',
  WeightUomId = 'weightUOMId'
}

export type ViewTaskTypeBinStatusMapping = {
  __typename?: 'ViewTaskTypeBinStatusMapping';
  /** Bin status mappings for the task type */
  binStatusMappings?: Maybe<Array<BinStatusMappingJson>>;
  /** Task type code */
  taskTypeCode?: Maybe<Scalars['String']['output']>;
  /** Task type ID (foreign key) */
  taskTypeId?: Maybe<Scalars['ID']['output']>;
  /** Task type label */
  taskTypeLabel?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type ViewTaskTypeBinStatusMappingFilter = {
  and?: InputMaybe<Array<ViewTaskTypeBinStatusMappingFilter>>;
  or?: InputMaybe<Array<ViewTaskTypeBinStatusMappingFilter>>;
  taskTypeCode?: InputMaybe<StringFieldComparison>;
  taskTypeId?: InputMaybe<IdFilterComparison>;
  taskTypeLabel?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ViewTaskTypeBinStatusMappingOffsetConnection = {
  __typename?: 'ViewTaskTypeBinStatusMappingOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewTaskTypeBinStatusMapping>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewTaskTypeBinStatusMappingSort = {
  direction: SortDirection;
  field: ViewTaskTypeBinStatusMappingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewTaskTypeBinStatusMappingSortFields {
  TaskTypeCode = 'taskTypeCode',
  TaskTypeId = 'taskTypeId',
  TaskTypeLabel = 'taskTypeLabel',
  WarehouseId = 'warehouseId'
}

export type ViewTaskTypeStockStatusMapping = {
  __typename?: 'ViewTaskTypeStockStatusMapping';
  /** Stock status mappings for the task type */
  stockStatusMappings?: Maybe<Array<ViewTaskTypeStockStatusMappingMappings>>;
  /** Task type code */
  taskTypeCode?: Maybe<Scalars['String']['output']>;
  /** Task type ID (foreign key) */
  taskTypeId?: Maybe<Scalars['ID']['output']>;
  /** Task type label */
  taskTypeLabel?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type ViewTaskTypeStockStatusMappingFilter = {
  and?: InputMaybe<Array<ViewTaskTypeStockStatusMappingFilter>>;
  or?: InputMaybe<Array<ViewTaskTypeStockStatusMappingFilter>>;
  taskTypeCode?: InputMaybe<StringFieldComparison>;
  taskTypeId?: InputMaybe<IdFilterComparison>;
  taskTypeLabel?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ViewTaskTypeStockStatusMappingMappings = {
  __typename?: 'ViewTaskTypeStockStatusMappingMappings';
  editable?: Maybe<Scalars['Boolean']['output']>;
  mapped?: Maybe<Scalars['Boolean']['output']>;
  stockStatusCode?: Maybe<Scalars['String']['output']>;
  stockStatusId?: Maybe<Scalars['ID']['output']>;
  stockStatusLabel?: Maybe<Scalars['String']['output']>;
};

export type ViewTaskTypeStockStatusMappingOffsetConnection = {
  __typename?: 'ViewTaskTypeStockStatusMappingOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewTaskTypeStockStatusMapping>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewTaskTypeStockStatusMappingSort = {
  direction: SortDirection;
  field: ViewTaskTypeStockStatusMappingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewTaskTypeStockStatusMappingSortFields {
  TaskTypeCode = 'taskTypeCode',
  TaskTypeId = 'taskTypeId',
  TaskTypeLabel = 'taskTypeLabel',
  WarehouseId = 'warehouseId'
}

export type ViewTeam = {
  __typename?: 'ViewTeam';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Is the entity a default entity that cant be deleted */
  default: Scalars['Boolean']['output'];
  /** Description of entity */
  description: Scalars['ID']['output'];
  /** Entity's team ID (foreign key) */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name: Scalars['ID']['output'];
  /** Team's status */
  status: TeamStatus;
  /** Team's Task Filter as an object in json format as GraphQL Query Requests expect. */
  taskFilter?: Maybe<Scalars['JSON']['output']>;
  /** Team's Task Filter as an array of filter objects */
  taskFilterArray?: Maybe<Scalars['JSON']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Team's user count */
  userCount?: Maybe<Scalars['Int']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type ViewTeamFilter = {
  and?: InputMaybe<Array<ViewTeamFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  default?: InputMaybe<BooleanFieldComparison>;
  description?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ViewTeamFilter>>;
  status?: InputMaybe<TeamStatusFilterComparison>;
  taskFilter?: InputMaybe<JsonFilterComparison>;
  taskFilterArray?: InputMaybe<JsonFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userCount?: InputMaybe<IntFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ViewTeamOffsetConnection = {
  __typename?: 'ViewTeamOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewTeam>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewTeamSort = {
  direction: SortDirection;
  field: ViewTeamSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewTeamSortFields {
  CreatedAt = 'createdAt',
  Default = 'default',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  TaskFilter = 'taskFilter',
  TaskFilterArray = 'taskFilterArray',
  UpdatedAt = 'updatedAt',
  UserCount = 'userCount',
  WarehouseId = 'warehouseId'
}

export type ViewUnitOfMeasureProductConversion = {
  __typename?: 'ViewUnitOfMeasureProductConversion';
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Conversion factor to convert units of measure -> Multiply against base UOM */
  conversionFactor?: Maybe<Scalars['Float']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for product dimensions */
  dimensionUOMCode?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for product dimensions */
  dimensionUOMId?: Maybe<Scalars['ID']['output']>;
  /** Unit of measure for product dimensions */
  dimensionUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Gross weight of entity */
  grossWeight?: Maybe<Scalars['Float']['output']>;
  /** Product's Height */
  height?: Maybe<Scalars['Float']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Boolean for base unit of measure if true UOM is base */
  isBaseUom?: Maybe<Scalars['Boolean']['output']>;
  /** Entity's label */
  label?: Maybe<Scalars['String']['output']>;
  /** Product's length */
  length?: Maybe<Scalars['Float']['output']>;
  /** Entity's warehouse (foreign key) */
  productId?: Maybe<Scalars['ID']['output']>;
  /** Volume of entity */
  volume?: Maybe<Scalars['Float']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMCode?: Maybe<Scalars['String']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMId?: Maybe<Scalars['ID']['output']>;
  /** Volume in unit of measure for entity */
  volumeUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMCode?: Maybe<Scalars['String']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: Maybe<Scalars['ID']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Product's width */
  width?: Maybe<Scalars['Float']['output']>;
};

export type ViewUnitOfMeasureProductConversionFilter = {
  and?: InputMaybe<Array<ViewUnitOfMeasureProductConversionFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  conversionFactor?: InputMaybe<FloatFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  dimensionUOMCode?: InputMaybe<StringFieldComparison>;
  dimensionUOMId?: InputMaybe<IdFilterComparison>;
  dimensionUOMLabel?: InputMaybe<StringFieldComparison>;
  grossWeight?: InputMaybe<FloatFieldComparison>;
  height?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isBaseUom?: InputMaybe<BooleanFieldComparison>;
  label?: InputMaybe<StringFieldComparison>;
  length?: InputMaybe<FloatFieldComparison>;
  or?: InputMaybe<Array<ViewUnitOfMeasureProductConversionFilter>>;
  productId?: InputMaybe<IdFilterComparison>;
  volume?: InputMaybe<FloatFieldComparison>;
  volumeUOMCode?: InputMaybe<StringFieldComparison>;
  volumeUOMId?: InputMaybe<IdFilterComparison>;
  volumeUOMLabel?: InputMaybe<StringFieldComparison>;
  weightUOMCode?: InputMaybe<StringFieldComparison>;
  weightUOMId?: InputMaybe<IdFilterComparison>;
  weightUOMLabel?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<FloatFieldComparison>;
};

export type ViewUnitOfMeasureProductConversionOffsetConnection = {
  __typename?: 'ViewUnitOfMeasureProductConversionOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewUnitOfMeasureProductConversion>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewUnitOfMeasureProductConversionSort = {
  direction: SortDirection;
  field: ViewUnitOfMeasureProductConversionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewUnitOfMeasureProductConversionSortFields {
  Code = 'code',
  ConversionFactor = 'conversionFactor',
  Description = 'description',
  DimensionUomCode = 'dimensionUOMCode',
  DimensionUomId = 'dimensionUOMId',
  DimensionUomLabel = 'dimensionUOMLabel',
  GrossWeight = 'grossWeight',
  Height = 'height',
  Id = 'id',
  IsBaseUom = 'isBaseUom',
  Label = 'label',
  Length = 'length',
  ProductId = 'productId',
  Volume = 'volume',
  VolumeUomCode = 'volumeUOMCode',
  VolumeUomId = 'volumeUOMId',
  VolumeUomLabel = 'volumeUOMLabel',
  WeightUomCode = 'weightUOMCode',
  WeightUomId = 'weightUOMId',
  WeightUomLabel = 'weightUOMLabel',
  Width = 'width'
}

export type ViewUser = {
  __typename?: 'ViewUser';
  /** Email address */
  email?: Maybe<Scalars['String']['output']>;
  /** Person's first name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Person's last name */
  lastName?: Maybe<Scalars['ID']['output']>;
  /** Phone number */
  phone?: Maybe<Scalars['ID']['output']>;
  /** User's account status */
  status?: Maybe<Scalars['String']['output']>;
  userGroups?: Maybe<Array<ViewUserUserGroups>>;
  /** Entity ID */
  userId?: Maybe<Scalars['ID']['output']>;
  /** User's teams */
  userTeams?: Maybe<Array<ViewUserUserTeam>>;
};

export type ViewUserFilter = {
  and?: InputMaybe<Array<ViewUserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  lastName?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ViewUserFilter>>;
  phone?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<StringFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ViewUserGroup = {
  __typename?: 'ViewUserGroup';
  /** Determines if a roles is default */
  roleDefault?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  roleId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  roleName?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  userGroupId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  userGroupName?: Maybe<Scalars['String']['output']>;
  /** Entity code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  warehouseName?: Maybe<Scalars['String']['output']>;
};

export type ViewUserGroupFilter = {
  and?: InputMaybe<Array<ViewUserGroupFilter>>;
  or?: InputMaybe<Array<ViewUserGroupFilter>>;
  roleDefault?: InputMaybe<StringFieldComparison>;
  roleId?: InputMaybe<IdFilterComparison>;
  roleName?: InputMaybe<StringFieldComparison>;
  userGroupId?: InputMaybe<IdFilterComparison>;
  userGroupName?: InputMaybe<StringFieldComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  warehouseName?: InputMaybe<StringFieldComparison>;
};

export type ViewUserGroupOffsetConnection = {
  __typename?: 'ViewUserGroupOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewUserGroup>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewUserGroupSort = {
  direction: SortDirection;
  field: ViewUserGroupSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewUserGroupSortFields {
  RoleDefault = 'roleDefault',
  RoleId = 'roleId',
  RoleName = 'roleName',
  UserGroupId = 'userGroupId',
  UserGroupName = 'userGroupName',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId',
  WarehouseName = 'warehouseName'
}

export type ViewUserOffsetConnection = {
  __typename?: 'ViewUserOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewUser>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewUserSort = {
  direction: SortDirection;
  field: ViewUserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewUserSortFields {
  Email = 'email',
  FirstName = 'firstName',
  LastName = 'lastName',
  Phone = 'phone',
  Status = 'status',
  UserId = 'userId'
}

export type ViewUserUserGroups = {
  __typename?: 'ViewUserUserGroups';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ViewUserUserTeam = {
  __typename?: 'ViewUserUserTeam';
  teamId?: Maybe<Scalars['String']['output']>;
  teamName?: Maybe<Scalars['String']['output']>;
  teamWarehouseId?: Maybe<Scalars['String']['output']>;
};

export type ViewZone = {
  __typename?: 'ViewZone';
  /** Number of aisle columns a zone contains */
  aisleColumnCount?: Maybe<Scalars['Int']['output']>;
  /** Number of aisles a zone contains */
  aisleCount?: Maybe<Scalars['Int']['output']>;
  /** Number of areas a zone contains */
  areaCount?: Maybe<Scalars['Int']['output']>;
  /** Number of bins a zone contains */
  binCount?: Maybe<Scalars['Int']['output']>;
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  /** Unit of measure for entity */
  pickingUomRestrictionCode?: Maybe<Scalars['String']['output']>;
  /** Unit of measure glossary ID */
  pickingUomRestrictionId?: Maybe<Scalars['ID']['output']>;
  /** Unit of measure for entity */
  pickingUomRestrictionLabel?: Maybe<Scalars['String']['output']>;
  /** Warehouse code */
  warehouseCode?: Maybe<Scalars['String']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse name */
  warehouseName?: Maybe<Scalars['String']['output']>;
};

export type ViewZoneAisle = {
  __typename?: 'ViewZoneAisle';
  /** Entity code */
  aisleCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  aisleDescription?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  aisleId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  aisleName?: Maybe<Scalars['String']['output']>;
  /** The zone and entity mapping exists */
  mapped?: Maybe<Scalars['Boolean']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  zoneCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  zoneDescription?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  zoneId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  zoneName?: Maybe<Scalars['String']['output']>;
};

export type ViewZoneAisleColumn = {
  __typename?: 'ViewZoneAisleColumn';
  /** Entity code */
  aisleColumnCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  aisleColumnDescription?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  aisleColumnId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  aisleColumnName?: Maybe<Scalars['String']['output']>;
  /** The zone and entity mapping exists */
  mapped?: Maybe<Scalars['Boolean']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  zoneCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  zoneDescription?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  zoneId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  zoneName?: Maybe<Scalars['String']['output']>;
};

export type ViewZoneAisleColumnFilter = {
  aisleColumnCode?: InputMaybe<StringFieldComparison>;
  aisleColumnDescription?: InputMaybe<StringFieldComparison>;
  aisleColumnId?: InputMaybe<IdFilterComparison>;
  aisleColumnName?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<ViewZoneAisleColumnFilter>>;
  mapped?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ViewZoneAisleColumnFilter>>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  zoneCode?: InputMaybe<StringFieldComparison>;
  zoneDescription?: InputMaybe<StringFieldComparison>;
  zoneId?: InputMaybe<IdFilterComparison>;
  zoneName?: InputMaybe<StringFieldComparison>;
};

export type ViewZoneAisleColumnOffsetConnection = {
  __typename?: 'ViewZoneAisleColumnOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewZoneAisleColumn>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewZoneAisleColumnSort = {
  direction: SortDirection;
  field: ViewZoneAisleColumnSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewZoneAisleColumnSortFields {
  AisleColumnCode = 'aisleColumnCode',
  AisleColumnDescription = 'aisleColumnDescription',
  AisleColumnId = 'aisleColumnId',
  AisleColumnName = 'aisleColumnName',
  Mapped = 'mapped',
  WarehouseId = 'warehouseId',
  ZoneCode = 'zoneCode',
  ZoneDescription = 'zoneDescription',
  ZoneId = 'zoneId',
  ZoneName = 'zoneName'
}

export type ViewZoneAisleFilter = {
  aisleCode?: InputMaybe<StringFieldComparison>;
  aisleDescription?: InputMaybe<StringFieldComparison>;
  aisleId?: InputMaybe<IdFilterComparison>;
  aisleName?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<ViewZoneAisleFilter>>;
  mapped?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ViewZoneAisleFilter>>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  zoneCode?: InputMaybe<StringFieldComparison>;
  zoneDescription?: InputMaybe<StringFieldComparison>;
  zoneId?: InputMaybe<IdFilterComparison>;
  zoneName?: InputMaybe<StringFieldComparison>;
};

export type ViewZoneAisleOffsetConnection = {
  __typename?: 'ViewZoneAisleOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewZoneAisle>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewZoneAisleSort = {
  direction: SortDirection;
  field: ViewZoneAisleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewZoneAisleSortFields {
  AisleCode = 'aisleCode',
  AisleDescription = 'aisleDescription',
  AisleId = 'aisleId',
  AisleName = 'aisleName',
  Mapped = 'mapped',
  WarehouseId = 'warehouseId',
  ZoneCode = 'zoneCode',
  ZoneDescription = 'zoneDescription',
  ZoneId = 'zoneId',
  ZoneName = 'zoneName'
}

export type ViewZoneArea = {
  __typename?: 'ViewZoneArea';
  /** Entity code */
  areaCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  areaId?: Maybe<Scalars['ID']['output']>;
  /** Area's name */
  areaName?: Maybe<Scalars['String']['output']>;
  /** The zone and entity mapping exists */
  mapped?: Maybe<Scalars['Boolean']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** Entity code */
  zoneCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  zoneDescription?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  zoneId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  zoneName?: Maybe<Scalars['String']['output']>;
};

export type ViewZoneAreaFilter = {
  and?: InputMaybe<Array<ViewZoneAreaFilter>>;
  areaCode?: InputMaybe<StringFieldComparison>;
  areaId?: InputMaybe<IdFilterComparison>;
  areaName?: InputMaybe<StringFieldComparison>;
  mapped?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ViewZoneAreaFilter>>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  zoneCode?: InputMaybe<StringFieldComparison>;
  zoneDescription?: InputMaybe<StringFieldComparison>;
  zoneId?: InputMaybe<IdFilterComparison>;
  zoneName?: InputMaybe<StringFieldComparison>;
};

export type ViewZoneAreaOffsetConnection = {
  __typename?: 'ViewZoneAreaOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewZoneArea>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewZoneAreaSort = {
  direction: SortDirection;
  field: ViewZoneAreaSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewZoneAreaSortFields {
  AreaCode = 'areaCode',
  AreaId = 'areaId',
  AreaName = 'areaName',
  Mapped = 'mapped',
  WarehouseId = 'warehouseId',
  ZoneCode = 'zoneCode',
  ZoneDescription = 'zoneDescription',
  ZoneId = 'zoneId',
  ZoneName = 'zoneName'
}

export type ViewZoneBinMapped = {
  __typename?: 'ViewZoneBinMapped';
  /** Entity code */
  binCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  binId?: Maybe<Scalars['ID']['output']>;
  /** Bin type */
  binType?: Maybe<BinType>;
  /** Destination bin block flag */
  destinationBinBlock?: Maybe<BinBlockState>;
  /** Active/Inactive bin status flag */
  inactive?: Maybe<BinActiveState>;
  /** Level where the bin is located. */
  level?: Maybe<Scalars['Int']['output']>;
  /** Source bin block flag */
  sourceBinBlock?: Maybe<BinBlockState>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** x coordinate location */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  y?: Maybe<Scalars['Float']['output']>;
  /** Z coordinate location */
  z?: Maybe<Scalars['Float']['output']>;
  /** Entity code */
  zoneCode?: Maybe<Scalars['String']['output']>;
  /** Description of entity */
  zoneDescription?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  zoneId?: Maybe<Scalars['ID']['output']>;
  /** ApiDocs */
  zoneName?: Maybe<Scalars['String']['output']>;
};

export type ViewZoneBinMappedFilter = {
  and?: InputMaybe<Array<ViewZoneBinMappedFilter>>;
  binCode?: InputMaybe<StringFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  binType?: InputMaybe<BinTypeFilterComparison>;
  destinationBinBlock?: InputMaybe<BinBlockStateFilterComparison>;
  inactive?: InputMaybe<BinActiveStateFilterComparison>;
  level?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<ViewZoneBinMappedFilter>>;
  sourceBinBlock?: InputMaybe<BinBlockStateFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
  z?: InputMaybe<FloatFieldComparison>;
  zoneCode?: InputMaybe<StringFieldComparison>;
  zoneDescription?: InputMaybe<StringFieldComparison>;
  zoneId?: InputMaybe<IdFilterComparison>;
  zoneName?: InputMaybe<StringFieldComparison>;
};

export type ViewZoneBinMappedOffsetConnection = {
  __typename?: 'ViewZoneBinMappedOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewZoneBinMapped>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewZoneBinMappedSort = {
  direction: SortDirection;
  field: ViewZoneBinMappedSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewZoneBinMappedSortFields {
  BinCode = 'binCode',
  BinId = 'binId',
  BinType = 'binType',
  DestinationBinBlock = 'destinationBinBlock',
  Inactive = 'inactive',
  Level = 'level',
  SourceBinBlock = 'sourceBinBlock',
  WarehouseId = 'warehouseId',
  X = 'x',
  Y = 'y',
  Z = 'z',
  ZoneCode = 'zoneCode',
  ZoneDescription = 'zoneDescription',
  ZoneId = 'zoneId',
  ZoneName = 'zoneName'
}

export type ViewZoneBinUnmapped = {
  __typename?: 'ViewZoneBinUnmapped';
  /** Entity code */
  binCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  binId?: Maybe<Scalars['ID']['output']>;
  /** Bin type */
  binType?: Maybe<BinType>;
  /** Destination bin block flag */
  destinationBinBlock?: Maybe<BinBlockState>;
  /** Active/Inactive bin status flag */
  inactive?: Maybe<BinActiveState>;
  /** Level where the bin is located. */
  level?: Maybe<Scalars['Int']['output']>;
  /** Source bin block flag */
  sourceBinBlock?: Maybe<BinBlockState>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
  /** x coordinate location */
  x?: Maybe<Scalars['Float']['output']>;
  /** Y coordinate location */
  y?: Maybe<Scalars['Float']['output']>;
  /** Z coordinate location */
  z?: Maybe<Scalars['Float']['output']>;
};

export type ViewZoneBinUnmappedFilter = {
  and?: InputMaybe<Array<ViewZoneBinUnmappedFilter>>;
  binCode?: InputMaybe<StringFieldComparison>;
  binId?: InputMaybe<IdFilterComparison>;
  binType?: InputMaybe<BinTypeFilterComparison>;
  destinationBinBlock?: InputMaybe<BinBlockStateFilterComparison>;
  inactive?: InputMaybe<BinActiveStateFilterComparison>;
  level?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<ViewZoneBinUnmappedFilter>>;
  sourceBinBlock?: InputMaybe<BinBlockStateFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  x?: InputMaybe<FloatFieldComparison>;
  y?: InputMaybe<FloatFieldComparison>;
  z?: InputMaybe<FloatFieldComparison>;
};

export type ViewZoneBinUnmappedOffsetConnection = {
  __typename?: 'ViewZoneBinUnmappedOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewZoneBinUnmapped>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewZoneBinUnmappedSort = {
  direction: SortDirection;
  field: ViewZoneBinUnmappedSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewZoneBinUnmappedSortFields {
  BinCode = 'binCode',
  BinId = 'binId',
  BinType = 'binType',
  DestinationBinBlock = 'destinationBinBlock',
  Inactive = 'inactive',
  Level = 'level',
  SourceBinBlock = 'sourceBinBlock',
  WarehouseId = 'warehouseId',
  X = 'x',
  Y = 'y',
  Z = 'z'
}

export type ViewZoneFilter = {
  aisleColumnCount?: InputMaybe<IntFieldComparison>;
  aisleCount?: InputMaybe<IntFieldComparison>;
  and?: InputMaybe<Array<ViewZoneFilter>>;
  areaCount?: InputMaybe<IntFieldComparison>;
  binCount?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ViewZoneFilter>>;
  pickingUomRestrictionCode?: InputMaybe<StringFieldComparison>;
  pickingUomRestrictionId?: InputMaybe<IdFilterComparison>;
  pickingUomRestrictionLabel?: InputMaybe<StringFieldComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
  warehouseName?: InputMaybe<StringFieldComparison>;
};

export type ViewZoneOffsetConnection = {
  __typename?: 'ViewZoneOffsetConnection';
  /** Array of nodes. */
  nodes: Array<ViewZone>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ViewZoneSort = {
  direction: SortDirection;
  field: ViewZoneSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ViewZoneSortFields {
  AisleColumnCount = 'aisleColumnCount',
  AisleCount = 'aisleCount',
  AreaCount = 'areaCount',
  BinCount = 'binCount',
  Code = 'code',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  PickingUomRestrictionCode = 'pickingUomRestrictionCode',
  PickingUomRestrictionId = 'pickingUomRestrictionId',
  PickingUomRestrictionLabel = 'pickingUomRestrictionLabel',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId',
  WarehouseName = 'warehouseName'
}

export type WhAsnDeliveryConfiguration = {
  __typename?: 'WHAsnDeliveryConfiguration';
  createPutawayTasks: Scalars['Boolean']['output'];
  createUnloadTasks: Scalars['Boolean']['output'];
  enabled: Scalars['Boolean']['output'];
  fields: WhAsnDeliveryFieldsConfiguration;
};

export type WhAsnDeliveryConfigurationInput = {
  createPutawayTasks: Scalars['Boolean']['input'];
  createUnloadTasks: Scalars['Boolean']['input'];
  enabled: Scalars['Boolean']['input'];
  fields: WhAsnDeliveryFieldsConfigurationInput;
};

export type WhAsnDeliveryFieldConfiguration = {
  __typename?: 'WHAsnDeliveryFieldConfiguration';
  mappingName?: Maybe<Scalars['String']['output']>;
  required: Scalars['Boolean']['output'];
};

export type WhAsnDeliveryFieldConfigurationInput = {
  mappingName?: InputMaybe<Scalars['String']['input']>;
  required: Scalars['Boolean']['input'];
};

export type WhAsnDeliveryFieldsConfiguration = {
  __typename?: 'WHAsnDeliveryFieldsConfiguration';
  billOfLading: WhAsnDeliveryFieldConfiguration;
  blockStatus: WhAsnDeliveryFieldConfiguration;
  category: WhAsnDeliveryFieldConfiguration;
  deliveryStatus: WhAsnDeliveryFieldConfiguration;
  doorCode: WhAsnDeliveryFieldConfiguration;
  dueDate: WhAsnDeliveryFieldConfiguration;
  erpBlockingReason: WhAsnDeliveryFieldConfiguration;
  erpCreated: WhAsnDeliveryFieldConfiguration;
  erpLastChanged: WhAsnDeliveryFieldConfiguration;
  erpPurchaseOrder: WhAsnDeliveryFieldConfiguration;
  erpSalesOrder: WhAsnDeliveryFieldConfiguration;
  export: WhAsnDeliveryFieldConfiguration;
  fulfillmentBlockCode: WhAsnDeliveryFieldConfiguration;
  goodsReceiptOrIssueStatus: WhAsnDeliveryFieldConfiguration;
  loadOrUnloadStatus: WhAsnDeliveryFieldConfiguration;
  pickOrPutawayStatus: WhAsnDeliveryFieldConfiguration;
  pointOfContact: WhAsnDeliveryFieldConfiguration;
  promiseDate: WhAsnDeliveryFieldConfiguration;
  shipReadyDate: WhAsnDeliveryFieldConfiguration;
  shipTo: WhAsnDeliveryFieldConfiguration;
  shipToName: WhAsnDeliveryFieldConfiguration;
  soldTo: WhAsnDeliveryFieldConfiguration;
  soldToName: WhAsnDeliveryFieldConfiguration;
  supplier: WhAsnDeliveryFieldConfiguration;
  supplierBusinessPartnerCode: WhAsnDeliveryFieldConfiguration;
  supplierName: WhAsnDeliveryFieldConfiguration;
  totalGrossWeight: WhAsnDeliveryFieldConfiguration;
  totalNetWeight: WhAsnDeliveryFieldConfiguration;
  totalVolume: WhAsnDeliveryFieldConfiguration;
  totalVolumeUom: WhAsnDeliveryFieldConfiguration;
  totalWeightUom: WhAsnDeliveryFieldConfiguration;
};

export type WhAsnDeliveryFieldsConfigurationInput = {
  billOfLading: WhAsnDeliveryFieldConfigurationInput;
  blockStatus: WhAsnDeliveryFieldConfigurationInput;
  category: WhAsnDeliveryFieldConfigurationInput;
  deliveryStatus: WhAsnDeliveryFieldConfigurationInput;
  doorCode: WhAsnDeliveryFieldConfigurationInput;
  dueDate: WhAsnDeliveryFieldConfigurationInput;
  erpBlockingReason: WhAsnDeliveryFieldConfigurationInput;
  erpCreated: WhAsnDeliveryFieldConfigurationInput;
  erpLastChanged: WhAsnDeliveryFieldConfigurationInput;
  erpPurchaseOrder: WhAsnDeliveryFieldConfigurationInput;
  erpSalesOrder: WhAsnDeliveryFieldConfigurationInput;
  export: WhAsnDeliveryFieldConfigurationInput;
  fulfillmentBlockCode: WhAsnDeliveryFieldConfigurationInput;
  goodsReceiptOrIssueStatus: WhAsnDeliveryFieldConfigurationInput;
  loadOrUnloadStatus: WhAsnDeliveryFieldConfigurationInput;
  pickOrPutawayStatus: WhAsnDeliveryFieldConfigurationInput;
  pointOfContact: WhAsnDeliveryFieldConfigurationInput;
  promiseDate: WhAsnDeliveryFieldConfigurationInput;
  shipReadyDate: WhAsnDeliveryFieldConfigurationInput;
  shipTo: WhAsnDeliveryFieldConfigurationInput;
  shipToName: WhAsnDeliveryFieldConfigurationInput;
  soldTo: WhAsnDeliveryFieldConfigurationInput;
  soldToName: WhAsnDeliveryFieldConfigurationInput;
  supplier: WhAsnDeliveryFieldConfigurationInput;
  supplierBusinessPartnerCode: WhAsnDeliveryFieldConfigurationInput;
  supplierName: WhAsnDeliveryFieldConfigurationInput;
  totalGrossWeight: WhAsnDeliveryFieldConfigurationInput;
  totalNetWeight: WhAsnDeliveryFieldConfigurationInput;
  totalVolume: WhAsnDeliveryFieldConfigurationInput;
  totalVolumeUom: WhAsnDeliveryFieldConfigurationInput;
  totalWeightUom: WhAsnDeliveryFieldConfigurationInput;
};

export type WhAsnDeliveryItemConfiguration = {
  __typename?: 'WHAsnDeliveryItemConfiguration';
  enabled: Scalars['Boolean']['output'];
  fields: WhAsnDeliveryItemFieldsConfiguration;
  plannedStockBinCode: Scalars['String']['output'];
};

export type WhAsnDeliveryItemConfigurationInput = {
  enabled: Scalars['Boolean']['input'];
  fields: WhAsnDeliveryItemFieldsConfigurationInput;
  plannedStockBinCode: Scalars['String']['input'];
};

export type WhAsnDeliveryItemFieldConfiguration = {
  __typename?: 'WHAsnDeliveryItemFieldConfiguration';
  create: Scalars['Boolean']['output'];
  mappingName?: Maybe<Scalars['String']['output']>;
  required: Scalars['Boolean']['output'];
};

export type WhAsnDeliveryItemFieldConfigurationInput = {
  create: Scalars['Boolean']['input'];
  mappingName?: InputMaybe<Scalars['String']['input']>;
  required: Scalars['Boolean']['input'];
};

export type WhAsnDeliveryItemFieldsConfiguration = {
  __typename?: 'WHAsnDeliveryItemFieldsConfiguration';
  actualRecievedQuantity: WhAsnDeliveryItemFieldConfiguration;
  deliveryItem: WhAsnDeliveryItemFieldConfiguration;
  description: WhAsnDeliveryItemFieldConfiguration;
  erpCreated: WhAsnDeliveryItemFieldConfiguration;
  erpLastChanged: WhAsnDeliveryItemFieldConfiguration;
  erpPurchaseOrder: WhAsnDeliveryItemFieldConfiguration;
  erpPurchaseOrderItem: WhAsnDeliveryItemFieldConfiguration;
  grossWeight: WhAsnDeliveryItemFieldConfiguration;
  isBaseUoM: WhAsnDeliveryItemFieldConfiguration;
  licensePlateCode: WhAsnDeliveryItemFieldConfiguration;
  lotCode: WhAsnDeliveryItemFieldConfiguration;
  netWeight: WhAsnDeliveryItemFieldConfiguration;
  productCode: WhAsnDeliveryItemFieldConfiguration;
  putawayStatus: WhAsnDeliveryItemFieldConfiguration;
  receiptStatus: WhAsnDeliveryItemFieldConfiguration;
  stockStatusTypeCode: WhAsnDeliveryItemFieldConfiguration;
  supplierLot: WhAsnDeliveryItemFieldConfiguration;
  unloadStatus: WhAsnDeliveryItemFieldConfiguration;
  uom: WhAsnDeliveryItemFieldConfiguration;
  uomConversionFactor: WhAsnDeliveryItemFieldConfiguration;
  volume: WhAsnDeliveryItemFieldConfiguration;
  volumeUom: WhAsnDeliveryItemFieldConfiguration;
  weightUom: WhAsnDeliveryItemFieldConfiguration;
};

export type WhAsnDeliveryItemFieldsConfigurationInput = {
  actualRecievedQuantity: WhAsnDeliveryItemFieldConfigurationInput;
  deliveryItem: WhAsnDeliveryItemFieldConfigurationInput;
  description: WhAsnDeliveryItemFieldConfigurationInput;
  erpCreated: WhAsnDeliveryItemFieldConfigurationInput;
  erpLastChanged: WhAsnDeliveryItemFieldConfigurationInput;
  erpPurchaseOrder: WhAsnDeliveryItemFieldConfigurationInput;
  erpPurchaseOrderItem: WhAsnDeliveryItemFieldConfigurationInput;
  grossWeight: WhAsnDeliveryItemFieldConfigurationInput;
  isBaseUoM: WhAsnDeliveryItemFieldConfigurationInput;
  licensePlateCode: WhAsnDeliveryItemFieldConfigurationInput;
  lotCode: WhAsnDeliveryItemFieldConfigurationInput;
  netWeight: WhAsnDeliveryItemFieldConfigurationInput;
  productCode: WhAsnDeliveryItemFieldConfigurationInput;
  putawayStatus: WhAsnDeliveryItemFieldConfigurationInput;
  receiptStatus: WhAsnDeliveryItemFieldConfigurationInput;
  stockStatusTypeCode: WhAsnDeliveryItemFieldConfigurationInput;
  supplierLot: WhAsnDeliveryItemFieldConfigurationInput;
  unloadStatus: WhAsnDeliveryItemFieldConfigurationInput;
  uom: WhAsnDeliveryItemFieldConfigurationInput;
  uomConversionFactor: WhAsnDeliveryItemFieldConfigurationInput;
  volume: WhAsnDeliveryItemFieldConfigurationInput;
  volumeUom: WhAsnDeliveryItemFieldConfigurationInput;
  weightUom: WhAsnDeliveryItemFieldConfigurationInput;
};

export type WhBusinessPartnerConfiguration = {
  __typename?: 'WHBusinessPartnerConfiguration';
  master: WhMasterBusinessPartnerConfiguration;
};

export type WhBusinessPartnerConfigurationInput = {
  master: WhMasterBusinessPartnerConfigurationInput;
};

export type WhConfigBinCountTask = {
  __typename?: 'WHConfigBinCountTask';
  countTypes?: Maybe<Array<PhysicalInventoryCountType>>;
  invalidStockStatus?: Maybe<Array<Scalars['String']['output']>>;
};

export type WhConfigBinCountTaskInput = {
  countTypes?: InputMaybe<Array<PhysicalInventoryCountType>>;
  invalidStockStatus?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type WhConfigCountApprovalTask = {
  __typename?: 'WHConfigCountApprovalTask';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  enabledForStockStatus?: Maybe<Array<Scalars['String']['output']>>;
};

export type WhConfigCountApprovalTaskInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabledForStockStatus?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type WhConfiguration = {
  __typename?: 'WHConfiguration';
  businessPartner?: Maybe<WhBusinessPartnerConfiguration>;
  delivery?: Maybe<WhDeliveryConfiguration>;
  deliveryItem?: Maybe<WhDeliveryItemConfiguration>;
  erp?: Maybe<ErpOptions>;
  fulfillment?: Maybe<WhFulfillmentConfiguration>;
  fulfillmentItem?: Maybe<WhFulfillmentItemConfiguration>;
  hooks?: Maybe<WhDeliveryHookConfig>;
  product?: Maybe<WhProductConfiguration>;
  task?: Maybe<WhTaskConfiguration>;
  unitOfMeasure?: Maybe<WhUnitOfMeasureConfiguration>;
};

export type WhConfigurationInput = {
  businessPartner?: InputMaybe<WhBusinessPartnerConfigurationInput>;
  delivery?: InputMaybe<WhDeliveryConfigurationInput>;
  deliveryItem?: InputMaybe<WhDeliveryItemConfigurationInput>;
  erp?: InputMaybe<ErpOptions>;
  fulfillment?: InputMaybe<WhFulfillmentConfigurationInput>;
  fulfillmentItem?: InputMaybe<WhFulfillmentItemConfigurationInput>;
  hooks?: InputMaybe<WhDeliveryHookConfigInput>;
  product?: InputMaybe<WhProductConfigurationInput>;
  task?: InputMaybe<WhTaskConfigurationInput>;
  unitOfMeasure?: InputMaybe<WhUnitOfMeasureConfigurationInput>;
};

export type WhDeliveryConfiguration = {
  __typename?: 'WHDeliveryConfiguration';
  asn: WhAsnDeliveryConfiguration;
  etaDateOffset?: Maybe<Scalars['Int']['output']>;
};

export type WhDeliveryConfigurationInput = {
  asn: WhAsnDeliveryConfigurationInput;
  etaDateOffset?: InputMaybe<Scalars['Int']['input']>;
};

export type WhDeliveryHookConfig = {
  __typename?: 'WHDeliveryHookConfig';
  delivery_pgi?: Maybe<WhHookConfigOptions>;
  task_binToBin?: Maybe<WhHookConfigOptions>;
  task_pick?: Maybe<WhHookConfigOptions>;
  task_putaway?: Maybe<WhHookConfigOptions>;
};

export type WhDeliveryHookConfigInput = {
  delivery_pgi?: InputMaybe<WhHookConfigOptionsInput>;
  task_binToBin?: InputMaybe<WhHookConfigOptionsInput>;
  task_pick?: InputMaybe<WhHookConfigOptionsInput>;
  task_putaway?: InputMaybe<WhHookConfigOptionsInput>;
};

export type WhDeliveryItemConfiguration = {
  __typename?: 'WHDeliveryItemConfiguration';
  asn: WhAsnDeliveryItemConfiguration;
};

export type WhDeliveryItemConfigurationInput = {
  asn: WhAsnDeliveryItemConfigurationInput;
};

export type WhFulfillmentConfiguration = {
  __typename?: 'WHFulfillmentConfiguration';
  so: WhSoFulfillmentConfiguration;
};

export type WhFulfillmentConfigurationInput = {
  so: WhSoFulfillmentConfigurationInput;
};

export type WhFulfillmentItemConfiguration = {
  __typename?: 'WHFulfillmentItemConfiguration';
  so: WhSoFulfillmentItemConfiguration;
};

export type WhFulfillmentItemConfigurationInput = {
  so: WhSoFulfillmentItemConfigurationInput;
};

export type WhHookConfigOptions = {
  __typename?: 'WHHookConfigOptions';
  async?: Maybe<Scalars['Boolean']['output']>;
  on?: Maybe<Scalars['Boolean']['output']>;
};

export type WhHookConfigOptionsInput = {
  async?: InputMaybe<Scalars['Boolean']['input']>;
  on?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WhMasterBusinessPartnerConfiguration = {
  __typename?: 'WHMasterBusinessPartnerConfiguration';
  enabled: Scalars['Boolean']['output'];
  fields: WhMasterBusinessPartnerFieldsConfiguration;
};

export type WhMasterBusinessPartnerConfigurationInput = {
  enabled: Scalars['Boolean']['input'];
  fields: WhMasterBusinessPartnerFieldsConfigurationInput;
};

export type WhMasterBusinessPartnerFieldConfiguration = {
  __typename?: 'WHMasterBusinessPartnerFieldConfiguration';
  create: Scalars['Boolean']['output'];
  mappingName?: Maybe<Scalars['String']['output']>;
  required: Scalars['Boolean']['output'];
};

export type WhMasterBusinessPartnerFieldConfigurationInput = {
  create: Scalars['Boolean']['input'];
  mappingName?: InputMaybe<Scalars['String']['input']>;
  required: Scalars['Boolean']['input'];
};

export type WhMasterBusinessPartnerFieldsConfiguration = {
  __typename?: 'WHMasterBusinessPartnerFieldsConfiguration';
  addressTimezone: WhMasterBusinessPartnerFieldConfiguration;
  addressUUID: WhMasterBusinessPartnerFieldConfiguration;
  cityName: WhMasterBusinessPartnerFieldConfiguration;
  country: WhMasterBusinessPartnerFieldConfiguration;
  customerCode: WhMasterBusinessPartnerFieldConfiguration;
  defaultPhoneNumber: WhMasterBusinessPartnerFieldConfiguration;
  district: WhMasterBusinessPartnerFieldConfiguration;
  email: WhMasterBusinessPartnerFieldConfiguration;
  language: WhMasterBusinessPartnerFieldConfiguration;
  name: WhMasterBusinessPartnerFieldConfiguration;
  phoneNumber: WhMasterBusinessPartnerFieldConfiguration;
  postalCode: WhMasterBusinessPartnerFieldConfiguration;
  region: WhMasterBusinessPartnerFieldConfiguration;
  searchTerm1: WhMasterBusinessPartnerFieldConfiguration;
  searchTerm2: WhMasterBusinessPartnerFieldConfiguration;
  streetAddress: WhMasterBusinessPartnerFieldConfiguration;
  supplierCode: WhMasterBusinessPartnerFieldConfiguration;
  type: WhMasterBusinessPartnerFieldConfiguration;
  validityEnd: WhMasterBusinessPartnerFieldConfiguration;
  validityStart: WhMasterBusinessPartnerFieldConfiguration;
};

export type WhMasterBusinessPartnerFieldsConfigurationInput = {
  addressTimezone: WhMasterBusinessPartnerFieldConfigurationInput;
  addressUUID: WhMasterBusinessPartnerFieldConfigurationInput;
  cityName: WhMasterBusinessPartnerFieldConfigurationInput;
  country: WhMasterBusinessPartnerFieldConfigurationInput;
  customerCode: WhMasterBusinessPartnerFieldConfigurationInput;
  defaultPhoneNumber: WhMasterBusinessPartnerFieldConfigurationInput;
  district: WhMasterBusinessPartnerFieldConfigurationInput;
  email: WhMasterBusinessPartnerFieldConfigurationInput;
  language: WhMasterBusinessPartnerFieldConfigurationInput;
  name: WhMasterBusinessPartnerFieldConfigurationInput;
  phoneNumber: WhMasterBusinessPartnerFieldConfigurationInput;
  postalCode: WhMasterBusinessPartnerFieldConfigurationInput;
  region: WhMasterBusinessPartnerFieldConfigurationInput;
  searchTerm1: WhMasterBusinessPartnerFieldConfigurationInput;
  searchTerm2: WhMasterBusinessPartnerFieldConfigurationInput;
  streetAddress: WhMasterBusinessPartnerFieldConfigurationInput;
  supplierCode: WhMasterBusinessPartnerFieldConfigurationInput;
  type: WhMasterBusinessPartnerFieldConfigurationInput;
  validityEnd: WhMasterBusinessPartnerFieldConfigurationInput;
  validityStart: WhMasterBusinessPartnerFieldConfigurationInput;
};

export type WhMasterProductConfiguration = {
  __typename?: 'WHMasterProductConfiguration';
  enabled: Scalars['Boolean']['output'];
  fields: WhMasterProductFieldsConfiguration;
};

export type WhMasterProductConfigurationInput = {
  enabled: Scalars['Boolean']['input'];
  fields: WhMasterProductFieldsConfigurationInput;
};

export type WhMasterProductFieldConfiguration = {
  __typename?: 'WHMasterProductFieldConfiguration';
  create: Scalars['Boolean']['output'];
  mappingName?: Maybe<Scalars['String']['output']>;
  required: Scalars['Boolean']['output'];
};

export type WhMasterProductFieldConfigurationInput = {
  create: Scalars['Boolean']['input'];
  mappingName?: InputMaybe<Scalars['String']['input']>;
  required: Scalars['Boolean']['input'];
};

export type WhMasterProductFieldsConfiguration = {
  __typename?: 'WHMasterProductFieldsConfiguration';
  description: WhMasterProductFieldConfiguration;
  dimensionUnitOfMeasure: WhMasterProductFieldConfiguration;
  height: WhMasterProductFieldConfiguration;
  length: WhMasterProductFieldConfiguration;
  lotManaged: WhMasterProductFieldConfiguration;
  name: WhMasterProductFieldConfiguration;
  weight: WhMasterProductFieldConfiguration;
  weightUnitOfMeasure: WhMasterProductFieldConfiguration;
  width: WhMasterProductFieldConfiguration;
};

export type WhMasterProductFieldsConfigurationInput = {
  description: WhMasterProductFieldConfigurationInput;
  dimensionUnitOfMeasure: WhMasterProductFieldConfigurationInput;
  height: WhMasterProductFieldConfigurationInput;
  length: WhMasterProductFieldConfigurationInput;
  lotManaged: WhMasterProductFieldConfigurationInput;
  name: WhMasterProductFieldConfigurationInput;
  weight: WhMasterProductFieldConfigurationInput;
  weightUnitOfMeasure: WhMasterProductFieldConfigurationInput;
  width: WhMasterProductFieldConfigurationInput;
};

export type WhMasterUnitOfMeasureConfiguration = {
  __typename?: 'WHMasterUnitOfMeasureConfiguration';
  enabled: Scalars['Boolean']['output'];
};

export type WhMasterUnitOfMeasureConfigurationInput = {
  enabled: Scalars['Boolean']['input'];
};

export type WhProductConfiguration = {
  __typename?: 'WHProductConfiguration';
  master: WhMasterProductConfiguration;
};

export type WhProductConfigurationInput = {
  master: WhMasterProductConfigurationInput;
};

export type WhSoFulfillmentConfiguration = {
  __typename?: 'WHSoFulfillmentConfiguration';
  enabled: Scalars['Boolean']['output'];
  fields: WhSoFulfillmentFieldsConfiguration;
};

export type WhSoFulfillmentConfigurationInput = {
  enabled: Scalars['Boolean']['input'];
  fields: WhSoFulfillmentFieldsConfigurationInput;
};

export type WhSoFulfillmentFieldConfiguration = {
  __typename?: 'WHSoFulfillmentFieldConfiguration';
  mappingName?: Maybe<Scalars['String']['output']>;
  required: Scalars['Boolean']['output'];
};

export type WhSoFulfillmentFieldConfigurationInput = {
  mappingName?: InputMaybe<Scalars['String']['input']>;
  required: Scalars['Boolean']['input'];
};

export type WhSoFulfillmentFieldsConfiguration = {
  __typename?: 'WHSoFulfillmentFieldsConfiguration';
  blockStatus: WhSoFulfillmentFieldConfiguration;
  category: WhSoFulfillmentFieldConfiguration;
  deliveryStatus: WhSoFulfillmentFieldConfiguration;
  doorCode: WhSoFulfillmentFieldConfiguration;
  dueDate: WhSoFulfillmentFieldConfiguration;
  erpBlockingReason: WhSoFulfillmentFieldConfiguration;
  erpCreated: WhSoFulfillmentFieldConfiguration;
  erpLastChanged: WhSoFulfillmentFieldConfiguration;
  erpPurchaseOrder: WhSoFulfillmentFieldConfiguration;
  erpSalesOrder: WhSoFulfillmentFieldConfiguration;
  export: WhSoFulfillmentFieldConfiguration;
  fulfillmentBlockCode: WhSoFulfillmentFieldConfiguration;
  goodsReceiptOrIssueStatus: WhSoFulfillmentFieldConfiguration;
  loadOrUnloadStatus: WhSoFulfillmentFieldConfiguration;
  pickOrPutawayStatus: WhSoFulfillmentFieldConfiguration;
  pointOfContact: WhSoFulfillmentFieldConfiguration;
  promiseDate: WhSoFulfillmentFieldConfiguration;
  shipReadyDate: WhSoFulfillmentFieldConfiguration;
  shipTo: WhSoFulfillmentFieldConfiguration;
  shipToBusinessPartnerCode: WhSoFulfillmentFieldConfiguration;
  shipToName: WhSoFulfillmentFieldConfiguration;
  soldTo: WhSoFulfillmentFieldConfiguration;
  soldToBusinessPartnerCode: WhSoFulfillmentFieldConfiguration;
  soldToName: WhSoFulfillmentFieldConfiguration;
  supplier: WhSoFulfillmentFieldConfiguration;
  supplierName: WhSoFulfillmentFieldConfiguration;
  totalGrossWeight: WhSoFulfillmentFieldConfiguration;
  totalNetWeight: WhSoFulfillmentFieldConfiguration;
  totalVolume: WhSoFulfillmentFieldConfiguration;
  totalVolumeUom: WhSoFulfillmentFieldConfiguration;
  totalWeightUom: WhSoFulfillmentFieldConfiguration;
};

export type WhSoFulfillmentFieldsConfigurationInput = {
  blockStatus: WhSoFulfillmentFieldConfigurationInput;
  category: WhSoFulfillmentFieldConfigurationInput;
  deliveryStatus: WhSoFulfillmentFieldConfigurationInput;
  doorCode: WhSoFulfillmentFieldConfigurationInput;
  dueDate: WhSoFulfillmentFieldConfigurationInput;
  erpBlockingReason: WhSoFulfillmentFieldConfigurationInput;
  erpCreated: WhSoFulfillmentFieldConfigurationInput;
  erpLastChanged: WhSoFulfillmentFieldConfigurationInput;
  erpPurchaseOrder: WhSoFulfillmentFieldConfigurationInput;
  erpSalesOrder: WhSoFulfillmentFieldConfigurationInput;
  export: WhSoFulfillmentFieldConfigurationInput;
  fulfillmentBlockCode: WhSoFulfillmentFieldConfigurationInput;
  goodsReceiptOrIssueStatus: WhSoFulfillmentFieldConfigurationInput;
  loadOrUnloadStatus: WhSoFulfillmentFieldConfigurationInput;
  pickOrPutawayStatus: WhSoFulfillmentFieldConfigurationInput;
  pointOfContact: WhSoFulfillmentFieldConfigurationInput;
  promiseDate: WhSoFulfillmentFieldConfigurationInput;
  shipReadyDate: WhSoFulfillmentFieldConfigurationInput;
  shipTo: WhSoFulfillmentFieldConfigurationInput;
  shipToBusinessPartnerCode: WhSoFulfillmentFieldConfigurationInput;
  shipToName: WhSoFulfillmentFieldConfigurationInput;
  soldTo: WhSoFulfillmentFieldConfigurationInput;
  soldToBusinessPartnerCode: WhSoFulfillmentFieldConfigurationInput;
  soldToName: WhSoFulfillmentFieldConfigurationInput;
  supplier: WhSoFulfillmentFieldConfigurationInput;
  supplierName: WhSoFulfillmentFieldConfigurationInput;
  totalGrossWeight: WhSoFulfillmentFieldConfigurationInput;
  totalNetWeight: WhSoFulfillmentFieldConfigurationInput;
  totalVolume: WhSoFulfillmentFieldConfigurationInput;
  totalVolumeUom: WhSoFulfillmentFieldConfigurationInput;
  totalWeightUom: WhSoFulfillmentFieldConfigurationInput;
};

export type WhSoFulfillmentItemConfiguration = {
  __typename?: 'WHSoFulfillmentItemConfiguration';
  enabled: Scalars['Boolean']['output'];
  fields: WhSoFulfillmentItemFieldsConfiguration;
};

export type WhSoFulfillmentItemConfigurationInput = {
  enabled: Scalars['Boolean']['input'];
  fields: WhSoFulfillmentItemFieldsConfigurationInput;
};

export type WhSoFulfillmentItemFieldConfiguration = {
  __typename?: 'WHSoFulfillmentItemFieldConfiguration';
  create: Scalars['Boolean']['output'];
  mappingName?: Maybe<Scalars['String']['output']>;
  required: Scalars['Boolean']['output'];
};

export type WhSoFulfillmentItemFieldConfigurationInput = {
  create: Scalars['Boolean']['input'];
  mappingName?: InputMaybe<Scalars['String']['input']>;
  required: Scalars['Boolean']['input'];
};

export type WhSoFulfillmentItemFieldsConfiguration = {
  __typename?: 'WHSoFulfillmentItemFieldsConfiguration';
  customerProductCode: WhSoFulfillmentItemFieldConfiguration;
  dateMaterialAvailable: WhSoFulfillmentItemFieldConfiguration;
  description: WhSoFulfillmentItemFieldConfiguration;
  erpLastChanged: WhSoFulfillmentItemFieldConfiguration;
  erpSalesOrder: WhSoFulfillmentItemFieldConfiguration;
  erpSalesOrderItem: WhSoFulfillmentItemFieldConfiguration;
  fulfillmentItem: WhSoFulfillmentItemFieldConfiguration;
  grossWeight: WhSoFulfillmentItemFieldConfiguration;
  issueStatus: WhSoFulfillmentItemFieldConfiguration;
  loadStatus: WhSoFulfillmentItemFieldConfiguration;
  lotCode: WhSoFulfillmentItemFieldConfiguration;
  netWeight: WhSoFulfillmentItemFieldConfiguration;
  pickStatus: WhSoFulfillmentItemFieldConfiguration;
  productCode: WhSoFulfillmentItemFieldConfiguration;
  stockStatusTypeCode: WhSoFulfillmentItemFieldConfiguration;
  uom: WhSoFulfillmentItemFieldConfiguration;
  volume: WhSoFulfillmentItemFieldConfiguration;
  volumeUom: WhSoFulfillmentItemFieldConfiguration;
  weightUom: WhSoFulfillmentItemFieldConfiguration;
};

export type WhSoFulfillmentItemFieldsConfigurationInput = {
  customerProductCode: WhSoFulfillmentItemFieldConfigurationInput;
  dateMaterialAvailable: WhSoFulfillmentItemFieldConfigurationInput;
  description: WhSoFulfillmentItemFieldConfigurationInput;
  erpLastChanged: WhSoFulfillmentItemFieldConfigurationInput;
  erpSalesOrder: WhSoFulfillmentItemFieldConfigurationInput;
  erpSalesOrderItem: WhSoFulfillmentItemFieldConfigurationInput;
  fulfillmentItem: WhSoFulfillmentItemFieldConfigurationInput;
  grossWeight: WhSoFulfillmentItemFieldConfigurationInput;
  issueStatus: WhSoFulfillmentItemFieldConfigurationInput;
  loadStatus: WhSoFulfillmentItemFieldConfigurationInput;
  lotCode: WhSoFulfillmentItemFieldConfigurationInput;
  netWeight: WhSoFulfillmentItemFieldConfigurationInput;
  pickStatus: WhSoFulfillmentItemFieldConfigurationInput;
  productCode: WhSoFulfillmentItemFieldConfigurationInput;
  stockStatusTypeCode: WhSoFulfillmentItemFieldConfigurationInput;
  uom: WhSoFulfillmentItemFieldConfigurationInput;
  volume: WhSoFulfillmentItemFieldConfigurationInput;
  volumeUom: WhSoFulfillmentItemFieldConfigurationInput;
  weightUom: WhSoFulfillmentItemFieldConfigurationInput;
};

export type WhTaskConfiguration = {
  __typename?: 'WHTaskConfiguration';
  delivery?: Maybe<WhTaskDeliveryConfiguration>;
  fulfillment?: Maybe<WhTaskFulfillmentConfiguration>;
  grouping?: Maybe<WhTaskGroupingConfiguration>;
  inventoryBinCount?: Maybe<WhConfigBinCountTask>;
  inventoryCountApproval?: Maybe<WhConfigCountApprovalTask>;
};

export type WhTaskConfigurationInput = {
  delivery?: InputMaybe<WhTaskDeliveryConfigurationInput>;
  fulfillment?: InputMaybe<WhTaskFulfillmentConfigurationInput>;
  grouping?: InputMaybe<WhTaskGroupingConfigurationInput>;
  inventoryBinCount?: InputMaybe<WhConfigBinCountTaskInput>;
  inventoryCountApproval?: InputMaybe<WhConfigCountApprovalTaskInput>;
};

export type WhTaskDeliveryConfiguration = {
  __typename?: 'WHTaskDeliveryConfiguration';
  putawaySteps?: Maybe<DeliveryTaskSteps>;
};

export type WhTaskDeliveryConfigurationInput = {
  putawaySteps?: InputMaybe<DeliveryTaskSteps>;
};

export type WhTaskFulfillmentConfiguration = {
  __typename?: 'WHTaskFulfillmentConfiguration';
  pickSteps?: Maybe<DeliveryTaskSteps>;
};

export type WhTaskFulfillmentConfigurationInput = {
  pickSteps?: InputMaybe<DeliveryTaskSteps>;
};

export type WhTaskGroupingConfiguration = {
  __typename?: 'WHTaskGroupingConfiguration';
  maxTaskGroupSize?: Maybe<Scalars['Int']['output']>;
};

export type WhTaskGroupingConfigurationInput = {
  maxTaskGroupSize?: InputMaybe<Scalars['Int']['input']>;
};

export type WhUnitOfMeasureConfiguration = {
  __typename?: 'WHUnitOfMeasureConfiguration';
  master: WhMasterUnitOfMeasureConfiguration;
};

export type WhUnitOfMeasureConfigurationInput = {
  master: WhMasterUnitOfMeasureConfigurationInput;
};

/** Warehouse model */
export type Warehouse = {
  __typename?: 'Warehouse';
  /** Entity code */
  code: Scalars['String']['output'];
  company?: Maybe<Company>;
  /** Entity's company ID (foreign key) */
  companyId: Scalars['ID']['output'];
  contactInfo?: Maybe<ContactInfo>;
  /** Entity ID */
  contactInfoId?: Maybe<Scalars['String']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  displayPreference?: Maybe<DisplayPreference>;
  displayPreferenceId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  indices?: Maybe<Scalars['JSON']['output']>;
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['JSON']['output']>;
  polygon?: Maybe<Scalars['JSON']['output']>;
  sapMappings?: Maybe<Array<SapWarehouseMapping>>;
  systemConnection?: Maybe<SystemConnection>;
  /** System connection ID */
  systemConnectionId?: Maybe<Scalars['String']['output']>;
  /** Configuration Model for the Warehouse */
  type?: Maybe<ModelWarehouseType>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  vertices?: Maybe<Scalars['JSON']['output']>;
};

/** WarehouseConfiguration entity model */
export type WarehouseConfiguration = {
  __typename?: 'WarehouseConfiguration';
  configuration: WhConfiguration;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type WarehouseConfigurationCreateInput = {
  configuration: WhConfigurationInput;
  warehouseId: Scalars['ID']['input'];
};

export type WarehouseConfigurationCreateOneInput = {
  /** The record to create */
  warehouseConfiguration: WarehouseConfigurationCreateInput;
};

export type WarehouseConfigurationUpdateInput = {
  configuration?: InputMaybe<WhConfigurationInput>;
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type WarehouseConfigurationUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: WarehouseConfigurationUpdateInput;
};

export type WarehouseCreateInput = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Entity's company ID (foreign key) */
  companyId: Scalars['ID']['input'];
  indices?: InputMaybe<Scalars['JSON']['input']>;
  /** Entity's human readable name */
  name: Scalars['String']['input'];
  points?: InputMaybe<Scalars['JSON']['input']>;
  /** Configuration Model for the Warehouse */
  type?: InputMaybe<ModelWarehouseType>;
  vertices?: InputMaybe<Scalars['JSON']['input']>;
};

export type WarehouseCreateOneInput = {
  /** The record to create */
  warehouse: WarehouseCreateInput;
};

export type WarehouseFilter = {
  and?: InputMaybe<Array<WarehouseFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  company?: InputMaybe<WarehouseFilterCompanyFilter>;
  companyId?: InputMaybe<IdFilterComparison>;
  contactInfoId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  indices?: InputMaybe<JsonFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<WarehouseFilter>>;
  points?: InputMaybe<JsonFilterComparison>;
  polygon?: InputMaybe<JsonFilterComparison>;
  systemConnectionId?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ModelWarehouseTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  vertices?: InputMaybe<JsonFilterComparison>;
};

export type WarehouseFilterCompanyFilter = {
  and?: InputMaybe<Array<WarehouseFilterCompanyFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  contactInfoId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<WarehouseFilterCompanyFilter>>;
  organizationId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
};

export type WarehouseNodes = {
  __typename?: 'WarehouseNodes';
  nodes: Array<Warehouse>;
};

export type WarehouseOffsetConnection = {
  __typename?: 'WarehouseOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Warehouse>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export enum WarehouseOpCode {
  Asn = 'asn',
  AsnDelivery = 'asnDelivery',
  AsnDeliveryItem = 'asnDeliveryItem',
  MasterBusinessPartner = 'masterBusinessPartner',
  MasterProduct = 'masterProduct',
  MasterUnitOfMeasure = 'masterUnitOfMeasure',
  Oc = 'oc',
  SoFulfillment = 'soFulfillment',
  SoFulfillmentItem = 'soFulfillmentItem'
}

export type WarehouseOpCodeFilterComparison = {
  eq?: InputMaybe<WarehouseOpCode>;
  gt?: InputMaybe<WarehouseOpCode>;
  gte?: InputMaybe<WarehouseOpCode>;
  iLike?: InputMaybe<WarehouseOpCode>;
  in?: InputMaybe<Array<WarehouseOpCode>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<WarehouseOpCode>;
  lt?: InputMaybe<WarehouseOpCode>;
  lte?: InputMaybe<WarehouseOpCode>;
  neq?: InputMaybe<WarehouseOpCode>;
  notILike?: InputMaybe<WarehouseOpCode>;
  notIn?: InputMaybe<Array<WarehouseOpCode>>;
  notLike?: InputMaybe<WarehouseOpCode>;
};

/** Warehouse op file */
export type WarehouseOpFile = {
  __typename?: 'WarehouseOpFile';
  /** Business partner ID */
  businessPartnerId: Scalars['ID']['output'];
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Date the file finished processing */
  processedDate?: Maybe<Scalars['DateTime']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Date file was uploaded */
  uploadedDate?: Maybe<Scalars['DateTime']['output']>;
  /** Which type operation that triggers flow, i.e. oc, asn */
  warehouseOpCode: WarehouseOpCode;
  /** Enum indicating file processing status, i.e. queued, processed */
  warehouseOpFileStatus: WarehouseOpFileStatus;
};

export type WarehouseOpFileFilter = {
  and?: InputMaybe<Array<WarehouseOpFileFilter>>;
  businessPartnerId?: InputMaybe<IdFilterComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<WarehouseOpFileFilter>>;
  processedDate?: InputMaybe<DateFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  uploadedDate?: InputMaybe<DateFieldComparison>;
  warehouseOpCode?: InputMaybe<WarehouseOpCodeFilterComparison>;
  warehouseOpFileStatus?: InputMaybe<WarehouseOpFileStatusFilterComparison>;
};

export type WarehouseOpFileOffsetConnection = {
  __typename?: 'WarehouseOpFileOffsetConnection';
  /** Array of nodes. */
  nodes: Array<WarehouseOpFile>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

/** Warehouse op file row */
export type WarehouseOpFileRow = {
  __typename?: 'WarehouseOpFileRow';
  /** Warehouse op file row barcode */
  barcode?: Maybe<Scalars['String']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Delivery item ID (foreign key) */
  deliveryItemId?: Maybe<Scalars['ID']['output']>;
  /** Error message from a failed row processing */
  errors?: Maybe<Scalars['JSONObject']['output']>;
  /** Fulfillment item id (foreign key) */
  fulfillmentItemId?: Maybe<Scalars['ID']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Raw row data from the uploaded file */
  rowData: Scalars['JSONObject']['output'];
  /** Which row in the processed file the row is connected with */
  rowNumber: Scalars['Int']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** ID for a warehouse op file */
  warehouseOpFileId: Scalars['String']['output'];
  /** Enum indicating if the row was processed successfully */
  warehouseOpFileRowStatus: WarehouseOpFileRowStatus;
  /** Type of warehouse op file (OC or ASN) */
  warehouseOpFileType?: Maybe<WarehouseOpCode>;
};

export type WarehouseOpFileRowFilter = {
  and?: InputMaybe<Array<WarehouseOpFileRowFilter>>;
  barcode?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deliveryItemId?: InputMaybe<IdFilterComparison>;
  errors?: InputMaybe<JsonObjectFilterComparison>;
  fulfillmentItemId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<WarehouseOpFileRowFilter>>;
  rowData?: InputMaybe<JsonObjectFilterComparison>;
  rowNumber?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseOpFileId?: InputMaybe<StringFieldComparison>;
  warehouseOpFileRowStatus?: InputMaybe<WarehouseOpFileRowStatusFilterComparison>;
  warehouseOpFileType?: InputMaybe<WarehouseOpCodeFilterComparison>;
};

export type WarehouseOpFileRowOffsetConnection = {
  __typename?: 'WarehouseOpFileRowOffsetConnection';
  /** Array of nodes. */
  nodes: Array<WarehouseOpFileRow>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type WarehouseOpFileRowSort = {
  direction: SortDirection;
  field: WarehouseOpFileRowSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum WarehouseOpFileRowSortFields {
  Barcode = 'barcode',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DeliveryItemId = 'deliveryItemId',
  Errors = 'errors',
  FulfillmentItemId = 'fulfillmentItemId',
  Id = 'id',
  RowData = 'rowData',
  RowNumber = 'rowNumber',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseOpFileId = 'warehouseOpFileId',
  WarehouseOpFileRowStatus = 'warehouseOpFileRowStatus',
  WarehouseOpFileType = 'warehouseOpFileType'
}

export enum WarehouseOpFileRowStatus {
  Failed = 'failed',
  Processed = 'processed',
  Queued = 'queued',
  Received = 'received'
}

export type WarehouseOpFileRowStatusFilterComparison = {
  eq?: InputMaybe<WarehouseOpFileRowStatus>;
  gt?: InputMaybe<WarehouseOpFileRowStatus>;
  gte?: InputMaybe<WarehouseOpFileRowStatus>;
  iLike?: InputMaybe<WarehouseOpFileRowStatus>;
  in?: InputMaybe<Array<WarehouseOpFileRowStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<WarehouseOpFileRowStatus>;
  lt?: InputMaybe<WarehouseOpFileRowStatus>;
  lte?: InputMaybe<WarehouseOpFileRowStatus>;
  neq?: InputMaybe<WarehouseOpFileRowStatus>;
  notILike?: InputMaybe<WarehouseOpFileRowStatus>;
  notIn?: InputMaybe<Array<WarehouseOpFileRowStatus>>;
  notLike?: InputMaybe<WarehouseOpFileRowStatus>;
};

export type WarehouseOpFileSort = {
  direction: SortDirection;
  field: WarehouseOpFileSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum WarehouseOpFileSortFields {
  BusinessPartnerId = 'businessPartnerId',
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  ProcessedDate = 'processedDate',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  UploadedDate = 'uploadedDate',
  WarehouseOpCode = 'warehouseOpCode',
  WarehouseOpFileStatus = 'warehouseOpFileStatus'
}

export enum WarehouseOpFileStatus {
  Failed = 'failed',
  PartialFailure = 'partial_failure',
  Processed = 'processed',
  Processing = 'processing',
  Queued = 'queued',
  Recieved = 'recieved'
}

export type WarehouseOpFileStatusFilterComparison = {
  eq?: InputMaybe<WarehouseOpFileStatus>;
  gt?: InputMaybe<WarehouseOpFileStatus>;
  gte?: InputMaybe<WarehouseOpFileStatus>;
  iLike?: InputMaybe<WarehouseOpFileStatus>;
  in?: InputMaybe<Array<WarehouseOpFileStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<WarehouseOpFileStatus>;
  lt?: InputMaybe<WarehouseOpFileStatus>;
  lte?: InputMaybe<WarehouseOpFileStatus>;
  neq?: InputMaybe<WarehouseOpFileStatus>;
  notILike?: InputMaybe<WarehouseOpFileStatus>;
  notIn?: InputMaybe<Array<WarehouseOpFileStatus>>;
  notLike?: InputMaybe<WarehouseOpFileStatus>;
};

export type WarehousePath = {
  __typename?: 'WarehousePath';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  destinationAreaId: Scalars['ID']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  internalStockOrderTypeId: Scalars['ID']['output'];
  sourceAreaId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  warehouseId: Scalars['ID']['output'];
};

export type WarehousePathCreateInput = {
  /** Entity ID */
  destinationAreaId: Scalars['ID']['input'];
  /** Entity ID */
  internalStockOrderTypeId: Scalars['ID']['input'];
  /** Entity ID */
  sourceAreaId: Scalars['ID']['input'];
  /** Entity ID */
  warehouseId: Scalars['ID']['input'];
};

export type WarehousePathCreateOneInput = {
  /** The record to create */
  warehousePath: WarehousePathCreateInput;
};

export type WarehousePathFilter = {
  and?: InputMaybe<Array<WarehousePathFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  destinationAreaId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  internalStockOrderTypeId?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<WarehousePathFilter>>;
  sourceAreaId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type WarehousePathOffsetConnection = {
  __typename?: 'WarehousePathOffsetConnection';
  /** Array of nodes. */
  nodes: Array<WarehousePath>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type WarehousePathQueryModel = {
  __typename?: 'WarehousePathQueryModel';
  /** Entity code */
  destinationAreaCode: Scalars['String']['output'];
  /** Entity ID */
  destinationAreaId: Scalars['ID']['output'];
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity code */
  internalStockOrderTypeCode: Scalars['String']['output'];
  /** Entity ID */
  internalStockOrderTypeId: Scalars['ID']['output'];
  /** Entity's label */
  internalStockOrderTypeLabel: Scalars['String']['output'];
  /** Entity code */
  sourceAreaCode: Scalars['String']['output'];
  /** Entity ID */
  sourceAreaId: Scalars['ID']['output'];
  /** Entity code */
  warehouseCode: Scalars['String']['output'];
  /** Entity ID */
  warehouseId: Scalars['ID']['output'];
};

export type WarehousePathQueryModelFilter = {
  and?: InputMaybe<Array<WarehousePathQueryModelFilter>>;
  destinationAreaCode?: InputMaybe<StringFieldComparison>;
  destinationAreaId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  internalStockOrderTypeCode?: InputMaybe<StringFieldComparison>;
  internalStockOrderTypeId?: InputMaybe<IdFilterComparison>;
  internalStockOrderTypeLabel?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<WarehousePathQueryModelFilter>>;
  sourceAreaCode?: InputMaybe<StringFieldComparison>;
  sourceAreaId?: InputMaybe<IdFilterComparison>;
  warehouseCode?: InputMaybe<StringFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type WarehousePathQueryModelOffsetConnection = {
  __typename?: 'WarehousePathQueryModelOffsetConnection';
  /** Array of nodes. */
  nodes: Array<WarehousePathQueryModel>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type WarehousePathQueryModelSort = {
  direction: SortDirection;
  field: WarehousePathQueryModelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum WarehousePathQueryModelSortFields {
  DestinationAreaCode = 'destinationAreaCode',
  DestinationAreaId = 'destinationAreaId',
  Id = 'id',
  InternalStockOrderTypeCode = 'internalStockOrderTypeCode',
  InternalStockOrderTypeId = 'internalStockOrderTypeId',
  InternalStockOrderTypeLabel = 'internalStockOrderTypeLabel',
  SourceAreaCode = 'sourceAreaCode',
  SourceAreaId = 'sourceAreaId',
  WarehouseCode = 'warehouseCode',
  WarehouseId = 'warehouseId'
}

export type WarehousePathSort = {
  direction: SortDirection;
  field: WarehousePathSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum WarehousePathSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  DestinationAreaId = 'destinationAreaId',
  Id = 'id',
  InternalStockOrderTypeId = 'internalStockOrderTypeId',
  SourceAreaId = 'sourceAreaId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export type WarehousePathUpdateInput = {
  /** Entity ID */
  destinationAreaId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  internalStockOrderTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity ID */
  sourceAreaId?: InputMaybe<Scalars['ID']['input']>;
};

export type WarehousePathUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: WarehousePathUpdateInput;
};

/** Warehouse Preferred Unit Of Measure model */
export type WarehousePreferredUnitOfMeasure = {
  __typename?: 'WarehousePreferredUnitOfMeasure';
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
  /** Entity's product ID (foreign key) */
  productId?: Maybe<Scalars['ID']['output']>;
  unitOfMeasure?: Maybe<UnitOfMeasureProductConversion>;
  /** Unit of measure ID */
  unitOfMeasureId: Scalars['ID']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: Maybe<Scalars['ID']['output']>;
};

export type WarehousePreferredUnitOfMeasureCreateInput = {
  /** Entity's product ID (foreign key) */
  productId: Scalars['ID']['input'];
  /** Unit of measure ID */
  unitOfMeasureId: Scalars['ID']['input'];
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type WarehousePreferredUnitOfMeasureCreateOneInput = {
  /** The record to create */
  warehousePreferredUnitOfMeasure: WarehousePreferredUnitOfMeasureCreateInput;
};

export type WarehousePreferredUnitOfMeasureFilter = {
  and?: InputMaybe<Array<WarehousePreferredUnitOfMeasureFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<WarehousePreferredUnitOfMeasureFilter>>;
  productId?: InputMaybe<IdFilterComparison>;
  unitOfMeasureId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type WarehousePreferredUnitOfMeasureOffsetConnection = {
  __typename?: 'WarehousePreferredUnitOfMeasureOffsetConnection';
  /** Array of nodes. */
  nodes: Array<WarehousePreferredUnitOfMeasure>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type WarehousePreferredUnitOfMeasureSort = {
  direction: SortDirection;
  field: WarehousePreferredUnitOfMeasureSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum WarehousePreferredUnitOfMeasureSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  ProductId = 'productId',
  UnitOfMeasureId = 'unitOfMeasureId',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export type WarehousePreferredUnitOfMeasureUpdateInput = {
  /** Entity's product ID (foreign key) */
  productId?: InputMaybe<Scalars['ID']['input']>;
  /** Unit of measure ID */
  unitOfMeasureId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId?: InputMaybe<Scalars['ID']['input']>;
};

export type WarehousePreferredUnitOfMeasureUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: WarehousePreferredUnitOfMeasureUpdateInput;
};

/** WarehouseRoleType entity model */
export type WarehouseRoleType = {
  __typename?: 'WarehouseRoleType';
  /** Entity code */
  code: Scalars['String']['output'];
  /** Cost */
  cost?: Maybe<Scalars['Float']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Currency */
  currency: Scalars['String']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label: Scalars['String']['output'];
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Velocity */
  velocity?: Maybe<Scalars['Float']['output']>;
  /** Velocity unit of measure */
  velocityUOMId?: Maybe<Scalars['String']['output']>;
  /** Number representing maximum weight limit for an equipment model. */
  weightMax?: Maybe<Scalars['Float']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMId: Scalars['String']['output'];
};

export type WarehouseRoleTypeCreateOneInput = {
  /** The record to create */
  warehouseRoleType: WarehouseRoleTypeCreateType;
};

export type WarehouseRoleTypeCreateType = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Cost */
  cost: Scalars['Float']['input'];
  /** Currency */
  currency: Scalars['String']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  label: Scalars['String']['input'];
  /** Velocity */
  velocity: Scalars['Float']['input'];
  /** Velocity unit of measure */
  velocityUOMId: Scalars['ID']['input'];
  /** Number representing maximum weight limit for an equipment model. */
  weightMax: Scalars['Float']['input'];
  /** Weight UOM, i.e KG */
  weightUOMId: Scalars['ID']['input'];
};

export type WarehouseRoleTypeFilter = {
  and?: InputMaybe<Array<WarehouseRoleTypeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  cost?: InputMaybe<FloatFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<WarehouseRoleTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  velocity?: InputMaybe<FloatFieldComparison>;
  velocityUOMId?: InputMaybe<StringFieldComparison>;
  weightMax?: InputMaybe<FloatFieldComparison>;
  weightUOMId?: InputMaybe<StringFieldComparison>;
};

export type WarehouseRoleTypeOffsetConnection = {
  __typename?: 'WarehouseRoleTypeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<WarehouseRoleType>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type WarehouseRoleTypeQueryShape = {
  __typename?: 'WarehouseRoleTypeQueryShape';
  /** Entity code */
  code?: Maybe<Scalars['String']['output']>;
  /** Currency */
  cost?: Maybe<Scalars['Float']['output']>;
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Currency */
  currency?: Maybe<Scalars['String']['output']>;
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** Entity's label */
  label?: Maybe<Scalars['String']['output']>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Velocity */
  velocity?: Maybe<Scalars['Float']['output']>;
  /** Velocity unit of measure */
  velocityUOMCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  velocityUOMId?: Maybe<Scalars['String']['output']>;
  /** Velocity unit of measure */
  velocityUOMLabel?: Maybe<Scalars['String']['output']>;
  /** Number representing maximum weight limit for an equipment model. */
  weightMax?: Maybe<Scalars['Float']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMCode?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  weightUOMId?: Maybe<Scalars['ID']['output']>;
  /** Weight UOM, i.e KG */
  weightUOMLabel?: Maybe<Scalars['String']['output']>;
};

export type WarehouseRoleTypeQueryShapeFilter = {
  and?: InputMaybe<Array<WarehouseRoleTypeQueryShapeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  cost?: InputMaybe<FloatFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<WarehouseRoleTypeQueryShapeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  velocity?: InputMaybe<FloatFieldComparison>;
  velocityUOMCode?: InputMaybe<StringFieldComparison>;
  velocityUOMId?: InputMaybe<StringFieldComparison>;
  velocityUOMLabel?: InputMaybe<StringFieldComparison>;
  weightMax?: InputMaybe<FloatFieldComparison>;
  weightUOMCode?: InputMaybe<StringFieldComparison>;
  weightUOMId?: InputMaybe<IdFilterComparison>;
  weightUOMLabel?: InputMaybe<StringFieldComparison>;
};

export type WarehouseRoleTypeQueryShapeOffsetConnection = {
  __typename?: 'WarehouseRoleTypeQueryShapeOffsetConnection';
  /** Array of nodes. */
  nodes: Array<WarehouseRoleTypeQueryShape>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type WarehouseRoleTypeQueryShapeSort = {
  direction: SortDirection;
  field: WarehouseRoleTypeQueryShapeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum WarehouseRoleTypeQueryShapeSortFields {
  Code = 'code',
  Cost = 'cost',
  CreatedAt = 'createdAt',
  Currency = 'currency',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Label = 'label',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  Velocity = 'velocity',
  VelocityUomCode = 'velocityUOMCode',
  VelocityUomId = 'velocityUOMId',
  VelocityUomLabel = 'velocityUOMLabel',
  WeightMax = 'weightMax',
  WeightUomCode = 'weightUOMCode',
  WeightUomId = 'weightUOMId',
  WeightUomLabel = 'weightUOMLabel'
}

export type WarehouseRoleTypeSort = {
  direction: SortDirection;
  field: WarehouseRoleTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum WarehouseRoleTypeSortFields {
  Code = 'code',
  Cost = 'cost',
  CreatedAt = 'createdAt',
  Currency = 'currency',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Label = 'label',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  Velocity = 'velocity',
  VelocityUomId = 'velocityUOMId',
  WeightMax = 'weightMax',
  WeightUomId = 'weightUOMId'
}

export type WarehouseRoleTypeUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Cost */
  cost?: InputMaybe<Scalars['Float']['input']>;
  /** Currency */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Entity's label */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Velocity */
  velocity?: InputMaybe<Scalars['Float']['input']>;
  /** Velocity unit of measure */
  velocityUOMId?: InputMaybe<Scalars['ID']['input']>;
  /** Number representing maximum weight limit for an equipment model. */
  weightMax?: InputMaybe<Scalars['Float']['input']>;
  /** Weight UOM, i.e KG */
  weightUOMId?: InputMaybe<Scalars['ID']['input']>;
};

export type WarehouseRoleTypeUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: WarehouseRoleTypeUpdateInput;
};

export type WarehouseSort = {
  direction: SortDirection;
  field: WarehouseSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum WarehouseSortFields {
  Code = 'code',
  CompanyId = 'companyId',
  ContactInfoId = 'contactInfoId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Indices = 'indices',
  Name = 'name',
  Points = 'points',
  Polygon = 'polygon',
  SystemConnectionId = 'systemConnectionId',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  Vertices = 'vertices'
}

export type WarehouseUpdateInput = {
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Entity's company ID (foreign key) */
  companyId?: InputMaybe<Scalars['ID']['input']>;
  indices?: InputMaybe<Scalars['JSON']['input']>;
  /** Entity's human readable name */
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['JSON']['input']>;
  /** Configuration Model for the Warehouse */
  type?: InputMaybe<ModelWarehouseType>;
  vertices?: InputMaybe<Scalars['JSON']['input']>;
};

export type WarehouseUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: WarehouseUpdateInput;
};

export type Zone = {
  __typename?: 'Zone';
  bins?: Maybe<Array<Bin>>;
  /** Entity code */
  code: Scalars['String']['output'];
  /** Created at date */
  createdAt: Scalars['DateTime']['output'];
  /** Deleted at date */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Description of entity */
  description?: Maybe<Scalars['String']['output']>;
  /** Entity ID */
  id: Scalars['ID']['output'];
  /** ApiDocs */
  name?: Maybe<Scalars['String']['output']>;
  pickingUomRestriction?: Maybe<UnitOfMeasureGlossary>;
  /** Update at date */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Update by email */
  updatedByEmail?: Maybe<Scalars['String']['output']>;
  /** Update by id */
  updatedById?: Maybe<Scalars['ID']['output']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['output'];
};

export type ZoneAddRemoveBlock = {
  /** Relation IDs to add */
  add: Array<Scalars['ID']['input']>;
  /** Relation IDs to remove */
  remove: Array<Scalars['ID']['input']>;
};

export enum ZoneConfiguration {
  Custom = 'custom',
  Group = 'group',
  Warehouse = 'warehouse'
}

export type ZoneCreateInput = {
  /** Entity code */
  code: Scalars['String']['input'];
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure glossary ID */
  pickingUomRestrictionId?: InputMaybe<Scalars['ID']['input']>;
  /** Entity's warehouse (foreign key) */
  warehouseId: Scalars['ID']['input'];
};

export type ZoneCreateOneInput = {
  /** The record to create */
  zone: ZoneCreateInput;
};

export type ZoneFilter = {
  and?: InputMaybe<Array<ZoneFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ZoneFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedByEmail?: InputMaybe<StringFieldComparison>;
  updatedById?: InputMaybe<IdFilterComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type ZoneOffsetConnection = {
  __typename?: 'ZoneOffsetConnection';
  /** Array of nodes. */
  nodes: Array<Zone>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ZoneSort = {
  direction: SortDirection;
  field: ZoneSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ZoneSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UpdatedByEmail = 'updatedByEmail',
  UpdatedById = 'updatedById',
  WarehouseId = 'warehouseId'
}

export type ZoneUpdateInput = {
  /** Entity ID */
  aisleColumnIds?: InputMaybe<ZoneAddRemoveBlock>;
  /** Entity ID */
  aisleIds?: InputMaybe<ZoneAddRemoveBlock>;
  /** Entity ID */
  areaIds?: InputMaybe<ZoneAddRemoveBlock>;
  /** Entity ID */
  binIds?: InputMaybe<ZoneAddRemoveBlock>;
  /** Entity code */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Description of entity */
  description?: InputMaybe<Scalars['String']['input']>;
  /** ApiDocs */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Unit of measure glossary ID */
  pickingUomRestrictionId?: InputMaybe<Scalars['ID']['input']>;
};

export type ZoneUpdateOneInput = {
  /** Entity ID */
  id: Scalars['ID']['input'];
  /** Update Dto */
  update: ZoneUpdateInput;
};

export enum DoorDirection {
  Both = 'both',
  Inbound = 'inbound',
  Outbound = 'outbound'
}
