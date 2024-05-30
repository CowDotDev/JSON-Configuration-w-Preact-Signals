import { ColumnDef, ColumnHelper, createColumnHelper } from '@tanstack/react-table';
import { DependencyList, useMemo } from 'react';

import { DefaultDataType } from '@/components/Table/types/data-table';

export type TColumnFactory<DataType extends DefaultDataType = DefaultDataType> = (
  columnHelper: ColumnHelper<DataType>,
) => ColumnDef<DataType>[];

function useCreateDataTableColumns<DataType extends DefaultDataType = DefaultDataType>(
  columnFactory: TColumnFactory<DataType>,
  columnDeps?: DependencyList,
) {
  const columnHelper = useMemo(() => createColumnHelper<DataType>(), []);

  // We dynamically set our dep array so that way we can pass an anonymous function to useCreateDataTableColumns,
  // When passing an anonymous function we'll need to provide a columnDeps argument to define when the columns should re-memoize.
  // An empty array will work the same way as wrapping the anonymous function in a useCallback, but without having to do so.
  const dynamicColumnsDep =
    typeof columnDeps !== 'undefined'
      ? [columnHelper, ...columnDeps]
      : [columnHelper, columnFactory];
  const columns = useMemo(() => columnFactory(columnHelper), dynamicColumnsDep);
  return columns;
}

export default useCreateDataTableColumns;
