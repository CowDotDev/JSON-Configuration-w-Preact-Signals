import { EditOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import { ColumnHelper, Table } from '@tanstack/react-table';

import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import { DefaultDataType } from '@/components/Table/types/data-table';
import IconButton from '@components/styled/IconButton';

function createEditRowColumnDef<DataType = DefaultDataType>(
  columnHelper: ColumnHelper<DataType>,
  handleOnClick: (row: DataType, table: Table<DataType>) => void,
  header: string = null,
  size: number = 40,
) {
  return columnHelper.display({
    id: DataTableDisplayColumns.Edit,
    header,
    cell: ({ table, row }) => (
      <Box position="relative" width="100%">
        <IconButton
          onClick={() => {
            handleOnClick(row.original, table);
          }}
          styledVariant="dataGrid"
          size="small"
          data-testid="edit-modal-button"
        >
          <EditOutlined />
        </IconButton>
      </Box>
    ),
    size,
    enableColumnFilter: false,
    enableHiding: false,
    enableResizing: false,
    enableSorting: false,
    enableMultiSort: false,
  });
}

export default createEditRowColumnDef;
