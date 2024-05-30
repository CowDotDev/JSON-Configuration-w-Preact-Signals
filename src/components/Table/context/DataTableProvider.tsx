import {
  Column,
  ColumnOrderState,
  ColumnSizingState,
  createColumnHelper,
  getCoreRowModel,
  OnChangeFn,
  RowSelectionState,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import createRowSelectionColumnDef from '@/components/Table/columnDefs/rowSelection';
import useDataTableData from '@/components/Table/hooks/useDataTableData';
import useDataTableLayouts from '@/components/Table/hooks/useDataTableLayouts';
import useDebounceDataTableLoading from '@/components/Table/hooks/useDebounceDataTableLoading';
import useHandleDataTableSelection from '@/components/Table/hooks/useHandleDataTableSelection';
import formatDataTableSorting from '@/components/Table/lib/formatDataTableSorting';
import removeLinkedFilters from '@/components/Table/lib/removeLinkedFilters';
import {
  DataTableVariants,
  DefaultDataType,
  IDataTableContext,
  IDataTableProviderProps,
  IDataTableSort,
} from '@/components/Table/types/data-table';
import {
  ColumnFilter,
  ColumnFilterEnumOption,
  ColumnFilterDefinition,
  ColumnType,
} from '@components/filter-builder/filter-definitions';
import useFormatFilter from '@components/filter-builder/format-filter';

const DataTableContext = createContext<IDataTableContext>(null);

const DataTableProvider = ({ dataTableProps: props, children }: IDataTableProviderProps) => {
  const type = props.type;
  const tableId = props.tableId;
  const perPageOptions = props.perPageOptions;
  const queryHook = props.queryHook;

  const memoizedArray = useMemo(() => [], []);

  const [suppressDataFetch, setSuppressDataFetch] = useState(
    props.variant === DataTableVariants.Collapsible ? props.defaultCollapsed : false,
  );
  const updateSuppressDataFetch = (value: boolean) => {
    setSuppressDataFetch(type === 'data' ? true : value);
  };

  const definedColumns = props.columns;
  const fullColumns = useMemo(
    () =>
      props.rowSelection
        ? [createRowSelectionColumnDef(createColumnHelper()), ...definedColumns]
        : definedColumns,
    [definedColumns, props.rowSelection?.selectionType],
  );

  const [columnVisibility, setColumnVisibility] = useState({});
  const setColumnVisibilityWithExportOnly: OnChangeFn<VisibilityState> = (visibility) => {
    const _columnVisibility =
      typeof visibility !== 'function' ? { ...visibility } : visibility(columnVisibility);
    definedColumns.forEach((c) => {
      if (c.meta?.exportOnly) {
        // @ts-expect-error - c.accessorKey does not appear valid to TS... but it is.
        const _columnKey = c.id || c.accessorKey;
        _columnVisibility[_columnKey] = c.meta?.exportOnly ? false : true;
      }
    });
    setColumnVisibility(_columnVisibility);
  };

  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});

  const [selectedVisibleRows, setSelectedVisibleRows] = useState<RowSelectionState>({});

  const baseFilter = props.baseFilter;
  const linkedFilter = props.linkedFilter;

  const requiredFilter = props.requiredFilter;

  const { formatFilter } = useFormatFilter();
  const [filter, setFilter] = useState<ColumnFilter[]>([]);
  const [quickFilter, setQuickFilter] = useState<ColumnFilter>(null);
  const memoizedFormattedFilter = useMemo(() => {
    const _allFilters = [...filter, ...baseFilter];
    if (quickFilter) _allFilters.splice(0, 0, quickFilter);

    const formattedFilters = formatFilter(_allFilters, definedColumns);

    // Adds additional required filters to the query
    if (requiredFilter.length > 0) {
      requiredFilter.forEach((filter) => {
        formattedFilters[filter.columnId] = { [filter.operator]: filter['value'] };
      });
    }

    return formattedFilters;
  }, [definedColumns, baseFilter, filter, quickFilter, requiredFilter]);

  const currentFilterWithoutLinks = useMemo(() => removeLinkedFilters(filter) || [], [filter]);
  useEffect(() => {
    setFilter([...currentFilterWithoutLinks, ...linkedFilter]);
  }, [linkedFilter]);

  const defaultSorting = props.defaultSorting;
  const [sorting, setSorting] = useState<IDataTableSort[]>(defaultSorting);
  const memoizedFormattedSorting = useMemo(
    () => formatDataTableSorting(sorting, definedColumns),
    [definedColumns, sorting],
  );

  const [hasInitializedLayouts, setHasInitializedLayouts] = useState(false);
  const {
    dataTableData: {
      data,
      isDataTableLoading,
      hasCompletedFirstFetch,
      dataLastFetched,
      refetchData,
      refetchTotalCount,
      getExportData,
    },
    pagination,
  } = useDataTableData({
    type,
    tableId,
    clientSideData: props.data || memoizedArray,
    clientSideDataLoading: props.isDataLoading || false,
    queryHook: queryHook,
    suppressDataFetch,
    disablePagination: props.disablePagination,
    perPageOptions: perPageOptions,
    filter: memoizedFormattedFilter,
    sorting: memoizedFormattedSorting,
    onFetchComplete: props.onFetchComplete,
    hasInitializedLayouts,
  });

  const tableInstance = useReactTable({
    data: data,
    columns: fullColumns,
    columnResizeMode: 'onChange',
    defaultColumn: {
      size: 150,
      minSize: 20,
      maxSize: Number.MAX_SAFE_INTEGER,
    },
    state: {
      columnVisibility,
      columnOrder,
      columnSizing,
      rowSelection: selectedVisibleRows,
      sorting: sorting as SortingState,
    },
    onColumnVisibilityChange: setColumnVisibilityWithExportOnly,
    onColumnOrderChange: setColumnOrder,
    onRowSelectionChange: setSelectedVisibleRows,
    onSortingChange: setSorting as OnChangeFn<SortingState>,
    onColumnSizingChange: setColumnSizing,
    getCoreRowModel: getCoreRowModel(),
    manualExpanding: true,
    manualGrouping: true,
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    enableSorting: !props.disableAllControls && !props.disableSorting,
    enableRowSelection:
      !!props.rowSelection && (props.rowSelection.rowSelectionEnabledFilter || true),
    meta: {
      rowSelectionType: props.rowSelection?.selectionType,
    },
  });

  const allTableColumns = tableInstance.getAllLeafColumns();

  const allTableColumnsSorted: Column<DefaultDataType, unknown>[] = useMemo(
    () =>
      [...allTableColumns].sort((a, b) => {
        if (a.columnDef.header < b.columnDef.header) {
          return -1;
        }
        if (a.columnDef.header > b.columnDef.header) {
          return 1;
        }
        return 0;
      }),
    [allTableColumns],
  );
  const allFilterableColumnsSorted = useMemo(
    () =>
      allTableColumnsSorted.reduce<Column<DefaultDataType>[]>((acc, column) => {
        if (column.columnDef.enableColumnFilter) {
          acc.push(column);
        }
        return acc;
      }, []),
    [allTableColumnsSorted],
  );

  const filterableColumnDefintions: ColumnFilterDefinition[] = useMemo(
    () =>
      allFilterableColumnsSorted.map((c) => ({
        id: c.id,
        label: c.columnDef.header as string,
        columnType: c.columnDef.meta?.columnType,
        options:
          c.columnDef.meta?.columnType === ColumnType.enum ? c.columnDef.meta?.options : undefined,
        booleanLabels:
          c.columnDef.meta?.columnType === ColumnType.boolean
            ? c.columnDef.meta?.booleanLabels
            : undefined,
      })),
    [allFilterableColumnsSorted],
  );

  const allEnumColumnOptions = useMemo(
    () =>
      allFilterableColumnsSorted
        .filter((c) => c.columnDef.meta.columnType === ColumnType.enum)
        .reduce<ColumnFilterEnumOption[]>((optionSet, column) => {
          column.columnDef.meta.options.forEach((o) => {
            if (!optionSet.some((oS) => oS.value === o.value)) {
              optionSet.push(o);
            }
          });
          return optionSet;
        }, [])
        .sort((a, b) => {
          const typedA = Number.isNaN(a.display)
            ? a.display
            : Number(a.display) % 1 === 0
            ? parseInt(a.display)
            : parseFloat(a.display);
          const typedB = Number.isNaN(b.display)
            ? b.display
            : Number(b.display) % 1 === 0
            ? parseInt(b.display)
            : parseFloat(b.display);

          if (typedA < typedB) {
            return -1;
          }
          if (typedA > typedB) {
            return 1;
          }
          return 0;
        }),
    [allFilterableColumnsSorted],
  );

  const dataTableLayoutProps = useDataTableLayouts({
    tableId,
    isLayoutsDisabled: props.disableAllControls || props.disableLayoutControls || false,
    allTableColumns,
    linkedFilter: linkedFilter,
    defaultSorting: defaultSorting,
    defaultPageSize: perPageOptions[0],
    currentFilterWithoutLinks,
    currentSorting: sorting,
    currentColumnOrder: columnOrder,
    currentColumnSizing: columnSizing,
    currentPageSize: pagination.limit,
    setFilter: setFilter,
    setSorting: setSorting,
    setColumnOrder: setColumnOrder,
    setColumnVisibility: setColumnVisibilityWithExportOnly,
    setColumnSizing: setColumnSizing,
    setPageSize: pagination.setPageLimit,
    hasInitializedLayouts,
    setHasInitializedLayouts,
  });

  const { persistedSelectedRows, clearSelection } = useHandleDataTableSelection({
    data,
    selectionType: props.rowSelection?.selectionType,
    selectionDataKey: props.rowSelection?.selectionDataKey,
    selectionOverride: props.rowSelection?.selectionOverride,
    selectedVisibleRows,
    setSelectedVisibleRows,
    setSelectedRowsData: props.rowSelection?.setSelectedRowsData,
    hasCompletedFirstFetch,
    clearSelectionTrigger: props.rowSelection?.clearSelectionTrigger,
  });

  const _memoizedHeaderColumns = useMemo(
    () => tableInstance.getHeaderGroups()[0].headers,
    [definedColumns, columnOrder, columnSizing, columnVisibility],
  );
  const [debouncedDataTableLoading, dataRows] = useDebounceDataTableLoading({
    isDataTableLoading,
    dataRows: tableInstance.getRowModel().rows,
  });

  const [pendingRefetch, setPendingRefetch] = useState(false);
  useEffect(() => {
    if (hasCompletedFirstFetch && !suppressDataFetch && typeof refetchData === 'function') {
      refetchData();
      refetchTotalCount();
    } else if (hasCompletedFirstFetch && suppressDataFetch && typeof refetchData === 'function') {
      setPendingRefetch(true);
    }
  }, [props.refetchTrigger]);

  useEffect(() => {
    if (!suppressDataFetch && pendingRefetch && typeof refetchData === 'function') {
      refetchData();
      refetchTotalCount();
      setPendingRefetch(false);
    }
  }, [suppressDataFetch]);

  return (
    <DataTableContext.Provider
      value={{
        type,
        tableId,
        tableSize: tableInstance.getTotalSize(),
        allColumns: allTableColumns,
        filterableColumns: filterableColumnDefintions,
        filterableColumnEnumOptions: allEnumColumnOptions,
        setColumnOrder: setColumnOrder,
        setColumnVisibility: setColumnVisibilityWithExportOnly,
        headerColumns: _memoizedHeaderColumns,
        hasCompletedFirstFetch,
        dataLastFetched,
        isDataTableLoading: debouncedDataTableLoading,
        dataRows,
        selectedRows: selectedVisibleRows,
        persistedSelectedRows,
        clearSelection,
        filter: filter,
        setFilter: setFilter,
        quickFilter: quickFilter,
        setQuickFilter: setQuickFilter,
        layoutProps: dataTableLayoutProps,
        refetchData: refetchData,
        refetchTotalCount: refetchTotalCount,
        getExportData: getExportData,
        pagination,
        setSuppressDataFetch: updateSuppressDataFetch,
      }}
    >
      {children}
    </DataTableContext.Provider>
  );
};

export default DataTableProvider;

export const useDataTable = () => {
  const ctx = useContext(DataTableContext);
  if (ctx === null) {
    throw new Error('useDataTable must be used within DataTableProvider');
  }

  return ctx;
};
