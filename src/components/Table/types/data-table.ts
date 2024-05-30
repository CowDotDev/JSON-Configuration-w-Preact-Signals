import {
  ApolloQueryResult,
  LazyQueryHookOptions,
  LazyQueryResult,
  QueryLazyOptions,
} from '@apollo/client';
import {
  Column,
  ColumnDef,
  ColumnOrderState,
  Header,
  OnChangeFn,
  Row,
  RowSelectionState,
  Updater,
  VisibilityState,
} from '@tanstack/react-table';
import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';

import {
  Exact,
  InputMaybe,
  OffsetPageInfo,
  OffsetPaging,
  SortNulls,
  SortDirection,
} from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { IDataTableLayouts } from '@/components/Table/hooks/useDataTableLayouts';
import { SelectionType } from '@/components/Table/hooks/useDataTableSelection';
import { IDropdownMenuItem } from '@components/dropdown-menu';
import {
  ColumnFilter,
  ColumnFilterEnumOption,
  ColumnFilterDefinition,
  LinkedColumnFilter,
} from '@components/filter-builder/filter-definitions';

export enum DataTableVariants {
  Basic = 'basic',
  BasicBordered = 'basic-bordered',
  Collapsible = 'collapsible',
}

/*
Data Table Component Props (Variant Agnostic)
*/
export type DefaultDataType<T = any> = Record<string, T>;
export type DefaultFilterType = Record<string, any>;
export type DefaultFieldNames = string;

export interface IDataTableSort<FieldNames extends DefaultFieldNames = DefaultFieldNames> {
  id: FieldNames;
  desc: boolean;
  nulls?: InputMaybe<SortNulls>;
}

export interface IAPISort<FieldNames extends DefaultFieldNames = DefaultFieldNames> {
  field: FieldNames | string;
  direction: SortDirection;
  nulls?: InputMaybe<SortNulls>;
}

export type TFetchClientSideData = () => void;

export type TOnFetchComplete<DataType extends DefaultDataType = DefaultDataType> = (
  data: DataType[],
) => void;

export interface IFetchResponseData<DataType extends DefaultDataType = DefaultDataType> {
  __typename?: 'Query';
  query: {
    __typename?: string;
    pageInfo?: OffsetPageInfo;
    nodes?: DataType[];
    totalCount?: number;
  };
}

export type TFetchDataVariables<
  FilterType extends DefaultFilterType = DefaultFilterType,
  FieldNames extends DefaultFieldNames = DefaultFieldNames,
> = Exact<{
  filter?: FilterType;
  paging?: OffsetPaging;
  sorting?: IAPISort<FieldNames> | IAPISort<FieldNames>[];
  includePageInfo?: boolean;
  includeNodes?: boolean;
  includeTotalCount?: boolean;
}>;

export type TFetchDataFunction<
  DataType extends DefaultDataType = DefaultDataType,
  FilterType extends DefaultFilterType = DefaultFilterType,
  FieldNames extends DefaultFieldNames = DefaultFieldNames,
> = (
  opts?: QueryLazyOptions<TFetchDataVariables<FilterType, FieldNames>>,
) => Promise<
  LazyQueryResult<IFetchResponseData<DataType>, TFetchDataVariables<FilterType, FieldNames>>
>;

export type TLazyQueryHook<
  DataType extends DefaultDataType = DefaultDataType,
  FilterType extends DefaultFilterType = DefaultFilterType,
  FieldNames extends DefaultFieldNames = DefaultFieldNames,
> = (
  baseOptions?: LazyQueryHookOptions<
    IFetchResponseData<DataType>,
    TFetchDataVariables<FilterType, FieldNames>
  >,
) => [
  TFetchDataFunction<DataType, FilterType, FieldNames>,
  LazyQueryResult<IFetchResponseData<DataType>, TFetchDataVariables<FilterType, FieldNames>>,
];

export type RowSelectionEnabledFilter<DataType extends DefaultDataType = DefaultDataType> = (
  row: Row<DataType>,
) => boolean;

export interface IDataTableRowSelection<DataType extends DefaultDataType = DefaultDataType> {
  setSelectedRowsData: Dispatch<SetStateAction<DataType[]>>;
  selectionDataKey: keyof DataType;
  rowSelectionEnabledFilter?: RowSelectionEnabledFilter<DataType>;
  selectionOverride?: DataType[];
  clearSelectionTrigger: boolean;
  selectionType: SelectionType;
}

export interface IDataTableBaseOptionalProps<
  DataType extends DefaultDataType = DefaultDataType,
  FieldNames extends DefaultFieldNames = DefaultFieldNames,
> {
  variant?: DataTableVariants;
  defaultCollapsed?: boolean;
  tableHeader?: string;
  tableActions?: ReactElement;
  layoutDropdownAddtOptions?: IDropdownMenuItem[];
  layoutDropdownAddtOptionLabel?: string;
  baseFilter?: ColumnFilter<FieldNames>[];
  linkedFilter?: LinkedColumnFilter<FieldNames>[];
  requiredFilter?: ColumnFilter<FieldNames>[];
  defaultSorting?: IDataTableSort<FieldNames>[];
  disableAllControls?: boolean;
  disableColumnControls?: boolean;
  disableDynamicFilters?: boolean;
  disableQuickFilters?: boolean;
  disableLayoutControls?: boolean;
  disableExport?: boolean;
  disablePagination?: boolean;
  disableSorting?: boolean;
  perPageOptions?: number[];
  rowSelection?: IDataTableRowSelection<DataType>;
}

export interface IDataTableBaseProps<
  DataType extends DefaultDataType = DefaultDataType,
  FieldNames extends DefaultFieldNames = DefaultFieldNames,
> extends IDataTableBaseOptionalProps<DataType, FieldNames> {
  tableId: DataTableIds;
  columns: ColumnDef<DataType, any>[];
}

export interface IDataTableQueryBasedProps<
  DataType extends DefaultDataType = DefaultDataType,
  FilterType extends DefaultFilterType = DefaultFilterType,
  FieldNames extends DefaultFieldNames = DefaultFieldNames,
> extends IDataTableBaseProps<DataType, FieldNames> {
  type: 'query';
  queryHook: TLazyQueryHook<DataType, FilterType, FieldNames>;
  onFetchComplete?: TOnFetchComplete<DataType>;
  refetchTrigger?: boolean;
  data?: never;
  isDataLoading?: never;
}

export interface IDataTableDataBasedProps<
  DataType extends DefaultDataType = DefaultDataType,
  FieldNames extends DefaultFieldNames = DefaultFieldNames,
> extends IDataTableBaseProps<DataType, FieldNames> {
  type: 'data';
  data: DataType[];
  isDataLoading: boolean;
  queryHook?: never;
  onFetchComplete?: never;
  refetchTrigger?: never;
}

export type IDataTableProps<
  DataType extends DefaultDataType = DefaultDataType,
  FilterType extends DefaultFilterType = DefaultFilterType,
  FieldNames extends DefaultFieldNames = DefaultFieldNames,
> =
  | IDataTableQueryBasedProps<DataType, FilterType, FieldNames>
  | IDataTableDataBasedProps<DataType, FieldNames>;

/*
Data Table Fetch Data / Pagination (useDataTableData)
*/
export type TRefetchDataTableData<
  DataType extends DefaultDataType,
  FilterType extends DefaultFilterType,
  FieldNames extends DefaultFieldNames,
> = (
  variables?: TFetchDataVariables<FilterType, FieldNames>,
) => Promise<ApolloQueryResult<IFetchResponseData<DataType>>>;
export type TRefetchDataTableTotalCount<
  DataType extends DefaultDataType,
  FilterType extends DefaultFilterType,
  FieldNames extends DefaultFieldNames,
> = (
  variables?: TFetchDataVariables<FilterType, FieldNames>,
) => Promise<ApolloQueryResult<IFetchResponseData<DataType>>>;
export interface IDataTableData<
  DataType extends DefaultDataType = DefaultDataType,
  FilterType extends DefaultFilterType = DefaultFilterType,
  FieldNames extends DefaultFieldNames = DefaultFieldNames,
> {
  data: DataType[];
  isDataTableLoading: boolean;
  hasCompletedFirstFetch: boolean;
  dataLastFetched: number;
  refetchData: TRefetchDataTableData<DataType, FilterType, FieldNames> | TFetchClientSideData;
  refetchTotalCount: TRefetchDataTableTotalCount<DataType, FilterType, FieldNames> | (() => void);
  getExportData: () => Promise<DataType[]>;
}

export type TGoToPageActions = 'first' | 'prev' | 'next' | 'last';
export interface IDataTablePagination {
  disablePagination: boolean;
  offset: number;
  limit: number;
  startIndex: number;
  endIndex: number;
  pageCount: number;
  totalCount: number;
  isLoadingTotalCount: boolean;
  perPageOptions: number[];
  goToPage: (action: TGoToPageActions) => void;
  setPageLimit: (limit: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  goToFirstPage: () => void;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  goToLastPage: () => void;
}

/*
Data Table Context Provider
*/
export type TFilterSetter = (filter: ColumnFilter<string>[]) => void;

export type TQuickFilterSetter = (filter: ColumnFilter<string>) => void;

export type TDataTableRefetch = (
  variables?: TFetchDataVariables<DefaultFilterType, string>,
) => Promise<ApolloQueryResult<IFetchResponseData<DefaultDataType>>>;

export interface IDataTableContext {
  type: 'query' | 'data';
  tableId: DataTableIds;
  tableSize: number;
  allColumns: Column<DefaultDataType, unknown>[];
  filterableColumns: ColumnFilterDefinition[];
  filterableColumnEnumOptions: ColumnFilterEnumOption[];
  setColumnOrder: (updater: Updater<ColumnOrderState>) => void;
  setColumnVisibility: OnChangeFn<VisibilityState>;
  headerColumns: Header<DefaultDataType, unknown>[];
  dataRows: Row<DefaultDataType>[];
  selectedRows: RowSelectionState;
  persistedSelectedRows: Record<string, DefaultDataType>;
  clearSelection: () => void;
  filter: ColumnFilter<string>[];
  setFilter: TFilterSetter;
  quickFilter: ColumnFilter<string>;
  setQuickFilter: TQuickFilterSetter;
  refetchData: TDataTableRefetch | TFetchClientSideData;
  refetchTotalCount: TDataTableRefetch | (() => void);
  getExportData: () => Promise<DefaultDataType[]>;
  pagination: IDataTablePagination;
  dataLastFetched: number;
  isDataTableLoading: boolean;
  hasCompletedFirstFetch: boolean;
  layoutProps: IDataTableLayouts;
  setSuppressDataFetch: Dispatch<SetStateAction<boolean>>;
}

export interface IDataTableProviderProps<
  DataType extends DefaultDataType = DefaultDataType,
  FilterType extends DefaultFilterType = DefaultFilterType,
  FieldNames extends DefaultFieldNames = DefaultFieldNames,
> {
  dataTableProps:
    | IDataTableQueryBasedProps<DataType, FilterType, FieldNames>
    | IDataTableDataBasedProps<DataType, FieldNames>;
  children: ReactNode | ReactNode[];
}
