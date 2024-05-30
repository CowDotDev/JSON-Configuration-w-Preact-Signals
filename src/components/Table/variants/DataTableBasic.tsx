import { Box, Typography } from '@mui/material';

import DataTableControls from '@/components/Table/controls/DataTableControls';
import DataTableQuickFilter from '@/components/Table/controls/filter/quick-filter';
import DataTableLayoutDropdown from '@/components/Table/controls/layout/layout-dropdown';
import TableContainer from '@/components/Table/TableContainer';
import { DataTableVariants, IDataTableProps } from '@/components/Table/types/data-table';
import DataTablePagination from '@/components/Table/pagination/DataTablePagination';
import DataTableTable from '@/components/Table/table/DataTableTable';

interface IDataTableBasic {
  dataTableProps: IDataTableProps;
}
const DataTableBasic = ({ dataTableProps }: IDataTableBasic) => {
  return (
    <TableContainer
      borderedContainer={dataTableProps.variant === DataTableVariants.BasicBordered}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ padding: (theme) => theme.spacing(3, 3, 1) }}
        data-testid={`data-table-${dataTableProps.tableId}-header`}
      >
        {!dataTableProps.disableAllControls && !dataTableProps.disableLayoutControls ? (
          <DataTableLayoutDropdown
            tableHeader={dataTableProps.tableHeader}
            additionalOptions={dataTableProps.layoutDropdownAddtOptions}
            additionalOptionsSectionLabel={
              dataTableProps.layoutDropdownAddtOptionLabel
                ? dataTableProps.layoutDropdownAddtOptionLabel
                : undefined
            }
          />
        ) : (
          <Typography
            variant="h3"
            color={(theme) => theme.palette.primary.main}
            data-testid={`data-table-${dataTableProps.tableId}-header`}
          >
            {dataTableProps.tableHeader}
          </Typography>
        )}
        {!!dataTableProps.tableActions && dataTableProps.tableActions}
      </Box>
      {!dataTableProps.disableAllControls && <DataTableControls dataTableProps={dataTableProps} />}
      {!dataTableProps.disableAllControls && !dataTableProps.disableQuickFilters && (
        <DataTableQuickFilter />
      )}
      <DataTableTable />
      <DataTablePagination />
    </TableContainer>
  );
};

export default DataTableBasic;
