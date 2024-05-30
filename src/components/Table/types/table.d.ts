import '@tanstack/react-table';

import { SelectionType } from '@/components/Table/hooks/useDataTableSelection';
import { ColumnType, ColumnFilterEnumOption } from '@components/filter-builder/filter-definitions';

declare module '@tanstack/table-core' {
  interface TableMeta {
    rowSelectionType: SelectionType;
  }
  interface ColumnMeta<TData extends RowData, TValue> {
    columnType: ColumnType;
    enableExport?: boolean;
    exportOnly?: boolean;
    exportFormatter?: (value: TValue, rowData: TData) => string | number | boolean;
    options?: ColumnFilterEnumOption[];
    booleanLabels?: string[];
    filterField?: string;
    sortingField?: string;
    reverseSorting?: boolean;
    descSortingNulls?: InputMaybe<SortNulls>;
    ascSortingNulls?: InputMaybe<SortNulls>;
  }
}
