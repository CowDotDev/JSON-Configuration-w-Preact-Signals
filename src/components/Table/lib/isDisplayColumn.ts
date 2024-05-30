import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import isStringEnumValue from '@lib/is-string-enum-value';

const isDisplayColumn = (columnId: string) => isStringEnumValue(DataTableDisplayColumns, columnId);

export default isDisplayColumn;
