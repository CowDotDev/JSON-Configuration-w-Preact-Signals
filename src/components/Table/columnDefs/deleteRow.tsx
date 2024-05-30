import { DeleteOutline } from '@mui/icons-material';
import { Box, styled } from '@mui/material';
import { ColumnHelper, Table } from '@tanstack/react-table';

import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import { DefaultDataType } from '@/components/Table/types/data-table';
import IconButton from '@components/styled/IconButton';

function createDeleteRowColumnDef<DataType = DefaultDataType>(
  columnHelper: ColumnHelper<DataType>,
  handleOnClick: (row: DataType, table: Table<DataType>) => void,
) {
  return columnHelper.display({
    id: DataTableDisplayColumns.Delete,
    header: null,
    cell: ({ table, row }) => (
      <Box position="relative" width="100%">
        <DeleteButton
          onClick={() => {
            handleOnClick(row.original, table);
          }}
          styledVariant="dataGrid"
          size="small"
          data-testid="delete-modal-button"
        >
          <DeleteOutline />
        </DeleteButton>
      </Box>
    ),
    size: 40,
    enableColumnFilter: false,
    enableHiding: false,
    enableResizing: false,
    enableSorting: false,
    enableMultiSort: false,
  });
}

export default createDeleteRowColumnDef;

const DeleteButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 3,
}));
