import { Typography } from '@mui/material';

import Collapse from '@components/collapse';
import { useDataTable } from '@/components/Table/context/DataTableProvider';
import DataTableControls from '@/components/Table/controls/DataTableControls';
import DataTableQuickFilter from '@/components/Table/controls/filter/quick-filter';
import DataTableLayoutDropdown from '@/components/Table/controls/layout/layout-dropdown';
import { IDataTableProps } from '@/components/Table/types/data-table';
import DataTablePagination from '@/components/Table/pagination/DataTablePagination';
import DataTableTable from '@/components/Table/table/DataTableTable';

interface IDataTableCollapse {
  dataTableProps: IDataTableProps;
}
const DataTableCollapsible = ({ dataTableProps }: IDataTableCollapse) => {
  const { setSuppressDataFetch } = useDataTable();

  const onOpen = () => {
    setSuppressDataFetch(false);
  };
  const onClose = () => {
    setSuppressDataFetch(true);
  };

  return (
    <Collapse
      onOpen={onOpen}
      onClose={onClose}
      bodySx={{ padding: 0 }}
      title={
        !dataTableProps.disableAllControls && !dataTableProps.disableLayoutControls ? (
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
        )
      }
      action={dataTableProps.tableActions ? dataTableProps.tableActions : undefined}
      defaultCollapsed={dataTableProps.defaultCollapsed}
    >
      {!dataTableProps.disableAllControls && <DataTableControls dataTableProps={dataTableProps} />}
      {!dataTableProps.disableAllControls && !dataTableProps.disableQuickFilters && (
        <DataTableQuickFilter />
      )}
      <DataTableTable />
      <DataTablePagination />
    </Collapse>
  );
};

export default DataTableCollapsible;
