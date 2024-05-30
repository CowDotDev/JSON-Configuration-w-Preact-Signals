import { ColumnHelper } from '@tanstack/react-table';

import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import { DefaultDataType } from '@/components/Table/types/data-table';
import { ColumnType } from '@components/filter-builder/filter-definitions';

function currencyColumn<DataType = DefaultDataType>(
  columnHelper: ColumnHelper<DataType>,
  header: string = null,
  size: number = 100,
  currency: string,
) {
  return columnHelper.display({
    id: DataTableDisplayColumns.External,
    header,
    cell: () => currency,
    size,
    meta: {
      columnType: ColumnType.string,
      enableExport: true,
    },
    enableColumnFilter: false,
    enableHiding: false,
    enableResizing: false,
    enableSorting: true,
    enableMultiSort: false,
  });
}

export default currencyColumn;
