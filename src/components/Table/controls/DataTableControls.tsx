import DataTableColumnControls from '@/components/Table/controls/column';
import DataTableControlsWrapper from '@/components/Table/controls/ControlsWrapper';
import DataTableExportControls from '@/components/Table/controls/export/DataTableExport';
import DataTableFilterControls from '@/components/Table/controls/filter';
import DataTableSaveLayoutControls from '@/components/Table/controls/layout/save-layout';
import { IDataTableProps } from '@/components/Table/types/data-table';

interface IDataTableControls {
  dataTableProps: IDataTableProps;
}
const DataTableControls = ({ dataTableProps }: IDataTableControls) => {
  return (
    <DataTableControlsWrapper data-testid="data-table-controls-container">
      {!dataTableProps.disableColumnControls && <DataTableColumnControls />}
      {!dataTableProps.disableDynamicFilters && <DataTableFilterControls />}
      {!dataTableProps.disableExport && <DataTableExportControls />}
      {!dataTableProps.disableLayoutControls && <DataTableSaveLayoutControls />}
    </DataTableControlsWrapper>
  );
};

export default DataTableControls;
