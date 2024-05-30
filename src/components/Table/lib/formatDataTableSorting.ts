import { ColumnDef } from '@tanstack/react-table';

import { InputMaybe, SortDirection, SortNulls } from '@/graphql/types.generated';
import {
  DefaultDataType,
  DefaultFieldNames,
  IAPISort,
  IDataTableSort,
} from '@/components/Table/types/data-table';

function formatDataTableSorting<FieldNames extends DefaultFieldNames = DefaultFieldNames>(
  sorting: IDataTableSort<FieldNames>[],
  columns: ColumnDef<DefaultDataType>[],
): IAPISort<FieldNames>[] {
  return sorting.map<IAPISort<FieldNames>>((s) => {
    const columnDef = columns.find((c) => {
      // TODO: Need to figure out how the tan-stack react table typing wants the ColumnDef DataType to be typed in able to acknowledge accessorKey as a valid property...
      // @ts-expect-error - c.accessorKey does not appear valid to TS... but it is.
      return c.id === s.id || c.accessorKey === s.id;
    });

    const _direction =
      (s.desc && !columnDef?.meta?.reverseSorting) || (!s.desc && columnDef?.meta?.reverseSorting)
        ? SortDirection.Desc
        : SortDirection.Asc;

    let _nulls: InputMaybe<SortNulls>;
    if (s.nulls) {
      _nulls = s.nulls;
    } else {
      if (_direction === SortDirection.Desc) {
        if (columnDef?.meta?.descSortingNulls) {
          _nulls = columnDef?.meta?.descSortingNulls;
        } else {
          _nulls = SortNulls.NullsFirst;
        }
      } else {
        if (columnDef?.meta?.ascSortingNulls) {
          _nulls = columnDef?.meta?.ascSortingNulls;
        } else {
          _nulls = SortNulls.NullsLast;
        }
      }
    }

    return {
      field: columnDef?.meta?.sortingField ? columnDef?.meta?.sortingField : s.id,
      direction: _direction,
      nulls: _nulls,
    };
  });
}

export default formatDataTableSorting;
