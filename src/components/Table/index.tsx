import { LazyQueryResult } from '@apollo/client';
import { useCallback, useMemo } from 'react';

import DataTableProvider from '@/components/Table/context/DataTableProvider';
import {
  DataTableVariants,
  DefaultDataType,
  DefaultFilterType,
  DefaultFieldNames,
  IDataTableProps,
  TLazyQueryHook,
  TFetchDataVariables,
  IFetchResponseData,
  TFetchDataFunction,
} from '@/components/Table/types/data-table';
import DataTableBasic from '@/components/Table/variants/DataTableBasic';
import DataTableCollapsible from '@/components/Table/variants/DataTableCollapsible';

function DataTable<
  DataType extends DefaultDataType = DefaultDataType,
  FilterType extends DefaultFilterType = DefaultFilterType,
  FieldNames extends DefaultFieldNames = DefaultFieldNames,
>(props: IDataTableProps<DataType, FilterType, FieldNames>) {
  const memoizedArray = useMemo(() => [], []);
  const defaultQueryHook = useCallback<TLazyQueryHook>(
    () => {
      return [
        (() => {}) as TFetchDataFunction<DataType, FilterType, FieldNames>,
        {} as LazyQueryResult<
          IFetchResponseData<DataType>,
          TFetchDataVariables<FilterType, FieldNames>
        >,
      ];
    },
    [],
  );

  // We de-generize props because having generics after the initial Component Definition doesn't provide any benefit.
  // Plus, it makes managing types further down the line a lot more difficult.
  const propsUntyped = {
    variant: DataTableVariants.Basic,
    perPageOptions: [10, 25, 50, 100],
    queryHook: defaultQueryHook,
    data: memoizedArray,
    baseFilter: memoizedArray,
    linkedFilter: memoizedArray,
    requiredFilter: memoizedArray,
    defaultSorting: memoizedArray,
    layoutDropdownAddtOptions: memoizedArray,
    ...props,
  } as IDataTableProps;

  return (
    <DataTableProvider dataTableProps={propsUntyped}>
      {(propsUntyped.variant === DataTableVariants.Basic ||
        propsUntyped.variant === DataTableVariants.BasicBordered) && (
        <DataTableBasic dataTableProps={propsUntyped} />
      )}
      {propsUntyped.variant === DataTableVariants.Collapsible && (
        <DataTableCollapsible dataTableProps={propsUntyped} />
      )}
    </DataTableProvider>
  );
}

export default DataTable;
