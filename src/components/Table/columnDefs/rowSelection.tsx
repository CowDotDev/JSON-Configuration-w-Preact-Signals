import { Box, Checkbox, styled } from '@mui/material';
import { ColumnHelper } from '@tanstack/react-table';

import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import { SelectionType } from '@/components/Table/hooks/useDataTableSelection';
import { DefaultDataType } from '@/components/Table/types/data-table';

function createRowSelectionColumnDef<DataType = DefaultDataType>(
  columnHelper: ColumnHelper<DataType>,
) {
  return columnHelper.display({
    id: DataTableDisplayColumns.Selection,
    header: ({ table }) =>
      table.options.meta.rowSelectionType === SelectionType.multi && (
        <Box position="relative" width="100%">
          <SelectionBox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
            size="small"
          />
        </Box>
      ),
    cell: ({ table, row }) => (
      <Box position="relative" width="100%">
        <SelectionBox
          checked={row.getIsSelected()}
          onChange={() => {
            if (
              table.options.meta.rowSelectionType === SelectionType.single &&
              !row.getIsSelected()
            ) {
              table.toggleAllRowsSelected(false);
            }
            row.toggleSelected();
          }}
          disabled={
            !row.getCanSelect() ||
            table.options.meta.rowSelectionType === SelectionType.disabled ||
            (table.options.meta.rowSelectionType === SelectionType.disabledAllowDeselect &&
              !row.getIsSelected())
          }
          size="small"
        />
      </Box>
    ),
    size: 50,
    maxSize: 50,
    enableColumnFilter: false,
    enableHiding: false,
    enableResizing: false,
    enableSorting: false,
    enableMultiSort: false,
  });
}

export default createRowSelectionColumnDef;

export const SelectionBox = styled(Checkbox)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 3,
}));
