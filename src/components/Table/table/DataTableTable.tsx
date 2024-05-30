import { useDataTable } from '@/components/Table/context/DataTableProvider';
import DataTableTableStructure from '@/components/Table/table/TableStructure';

const DataTableTable = () => {
  const {
    tableId,
    tableSize,
    headerColumns,
    dataRows,
    selectedRows,
    persistedSelectedRows,
    clearSelection,
    hasCompletedFirstFetch,
    isDataTableLoading,
  } = useDataTable();

  return (
    <DataTableTableStructure
      tableId={tableId}
      tableSize={tableSize}
      headerColumns={headerColumns}
      dataRows={dataRows}
      selectedRows={selectedRows}
      persistedSelectedRows={persistedSelectedRows}
      clearSelection={clearSelection}
      hasCompletedFirstFetch={hasCompletedFirstFetch}
      isDataTableLoading={isDataTableLoading}
    />
  );
};

export default DataTableTable;
