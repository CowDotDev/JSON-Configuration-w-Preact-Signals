import { ColumnDef } from '@tanstack/react-table';

import { DefaultDataType } from '@/components/Table/types/data-table';

function filterDataTableColumnDefs<DataType extends DefaultDataType>(removeColumns?: string[]) {
  return (column: ColumnDef<DataType>) => {
    if (!column) return false;
    if (!removeColumns || removeColumns.length === 0) return true;

    // @ts-expect-error - c.accessorKey does not appear valid to TS... but it is.
    const columnIdentifier = column.id ? column.id : column.accessorKey;
    return !removeColumns.includes(columnIdentifier);
  };
}

export default filterDataTableColumnDefs;
