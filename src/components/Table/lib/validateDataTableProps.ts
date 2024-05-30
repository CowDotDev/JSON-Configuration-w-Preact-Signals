import { ColumnDef } from '@tanstack/react-table';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import isDisplayColumn from '@/components/Table/lib/isDisplayColumn';
import {
  IDataTableQueryBasedProps,
  IDataTableDataBasedProps,
  DefaultDataType,
  DefaultFilterType,
  DefaultFieldNames,
} from '@/components/Table/types/data-table';
import { ColumnType } from '@components/filter-builder/filter-definitions';

function checkColumnForErrors(column: ColumnDef<any>, columnIndex: number, tableId: DataTableIds) {
  // TODO: Need to figure out how the tan-stack react table typing wants the ColumnDef DataType to be typed in able to acknowledge accessorKey as a valid property...
  // @ts-expect-error - c.accessorKey does not appear valid to TS... but it is.
  const columnId = column?.id || column?.accessorKey;
  let errorPrefix = `${tableId} Table Error |`;

  // If columnId is undefined/null, or an empty string, we have a problem.
  if (typeof columnId === 'undefined' || columnId === null || columnId === '') {
    throw new Error(
      `${errorPrefix} Column at index ${columnIndex} does not have id, or accessorKey, set.`,
    );
  }

  errorPrefix = `${errorPrefix} ${columnId} Column Error |`;

  // Verify all columns have a header of string type
  if (typeof column?.header !== 'string') {
    // Honestly the @tan-stack/table-core typing should be strong enough to make sure this never is hit, but it'd cause problems downstream that may be hard to track if this error doesn't bubble.
    throw new Error(
      `${errorPrefix} Column has a malformed header, the header should be set to a string.`,
    );
  }

  // Verify all columns have a columnType set in the meta object.
  if (!column?.meta?.columnType) {
    throw new Error(`${errorPrefix} Column does not have meta.columnType set.`);
  }

  // Verify all enum columns have at least one option set in the meta object.
  if (column?.meta?.columnType === ColumnType.enum && !Array.isArray(column?.meta?.options)) {
    throw new Error(
      `${errorPrefix} Column does not have meta.options set. At least an empty array must be set.`,
    );
  }
}

// These enabled* flags are `undefined` by default, let's verbosely set these to true if the column is not explicitly set to false.
function verboselySetEnabledFlags<DataType extends DefaultDataType>(column: ColumnDef<DataType>) {
  if (column.enableColumnFilter !== false) column.enableColumnFilter = true;
  if (column.enableHiding !== false) column.enableHiding = true;
  if (column.enableSorting !== false) column.enableSorting = true;
  if (column.enableMultiSort !== false) column.enableMultiSort = true;
  if (column.enableResizing !== false) column.enableResizing = true;
  if (column.meta.enableExport !== false) column.meta.enableExport = true;
}

// Query Based Data Table Prop Validation
export function validateDataTableProps<
  DataType extends DefaultDataType,
  FilterType extends DefaultFilterType,
  FieldNames extends DefaultFieldNames,
>(
  props: IDataTableQueryBasedProps<DataType, FilterType, FieldNames>,
): IDataTableQueryBasedProps<DataType, FilterType, FieldNames>;

// Data Based Data Table Prop Validation
export function validateDataTableProps<DataType extends DefaultDataType>(
  props: IDataTableDataBasedProps<DataType>,
): IDataTableDataBasedProps<DataType>;

export function validateDataTableProps<
  DataType extends DefaultDataType,
  FilterType extends DefaultFilterType,
  FieldNames extends DefaultFieldNames,
>(
  props:
    | IDataTableQueryBasedProps<DataType, FilterType, FieldNames>
    | IDataTableDataBasedProps<DataType>,
):
  | IDataTableQueryBasedProps<DataType, FilterType, FieldNames>
  | IDataTableDataBasedProps<DataType> {
  props.columns.forEach((c, index) => {
    // TODO: Need to figure out how the tan-stack react table typing wants the ColumnDef DataType to be typed in able to acknowledge accessorKey as a valid property...
    // @ts-expect-error - c.accessorKey does not appear valid to TS... but it is.
    const columnId = c?.id || c?.accessorKey;

    if (!isDisplayColumn(columnId)) {
      checkColumnForErrors(c, index, props.tableId);
      verboselySetEnabledFlags<DataType>(c);
    }
  });

  return props;
}
