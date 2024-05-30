import { Box, Collapse, styled, useTheme } from '@mui/material';
import { Header, Row, RowSelectionState } from '@tanstack/react-table';
import { useState, useEffect } from 'react';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import CurrentlySelected from '@/components/Table/controls/selection/CurrentlySelected';
import { DefaultDataType } from '@/components/Table/types/data-table';
import TableBody from '@/components/Table/table/body/TableBody';
import HeaderRow from '@/components/Table/table/header/HeaderRow';
import LoadingShine from '@components/loading-indicator/LoadingShine';

export interface IDataTableTableProps {
  tableId: DataTableIds;
  tableSize: number;
  headerColumns: Header<DefaultDataType, unknown>[];
  dataRows: Row<DefaultDataType>[];
  selectedRows: RowSelectionState;
  persistedSelectedRows: Record<string, DefaultDataType>;
  clearSelection: () => void;
  isDataTableLoading: boolean;
  hasCompletedFirstFetch: boolean;
}
const DataTableTableStructure = ({
  tableId,
  tableSize,
  headerColumns,
  dataRows,
  selectedRows,
  persistedSelectedRows,
  clearSelection,
  isDataTableLoading,
  hasCompletedFirstFetch,
}: IDataTableTableProps) => {
  const theme = useTheme();

  const [hasLoadedFirstPage, setHasLoadedFirstPage] = useState(false);
  const isLoadingWhileEmpty = hasLoadedFirstPage && isDataTableLoading && dataRows.length === 0;

  const [tableRowsHeight, setTableRowsHeight] = useState(96);
  useEffect(() => {
    if (hasCompletedFirstFetch) {
      if (!hasLoadedFirstPage) setHasLoadedFirstPage(true);
      setTableRowsHeight(dataRows?.length > 0 ? dataRows.length * 48 : 96);
    }
  }, [hasCompletedFirstFetch, dataRows]);

  const persistedSelectedRowsCount = Object.keys(persistedSelectedRows).length;

  return (
    <Box
      position="relative"
      width="100%"
      sx={{ overflowX: !isDataTableLoading ? 'auto' : 'hidden' }}
    >
      <Collapse in={persistedSelectedRowsCount > 0}>
        <CurrentlySelected
          currentlySelected={persistedSelectedRowsCount}
          clearSelection={clearSelection}
        />
      </Collapse>
      <StyledTable
        style={{
          width: hasLoadedFirstPage ? tableSize : '100%',
        }}
        data-testid={`data-table-${tableId}-table`}
      >
        <StyledTableHead>
          <HeaderRow
            hasLoadedFirstPage={hasLoadedFirstPage}
            isDataTableLoading={isDataTableLoading}
            headerColumns={headerColumns}
            selectedRows={selectedRows}
            dataTestId={`data-table-${tableId}`}
          />
        </StyledTableHead>
        <TableBody
          isDataTableLoading={isDataTableLoading}
          hasLoadedFirstPage={hasLoadedFirstPage}
          isLoadingWhileEmpty={isLoadingWhileEmpty}
          tableRowsHeight={tableRowsHeight}
          headerColumns={headerColumns}
          dataRows={dataRows}
          selectedRows={selectedRows}
          dataTestId={`data-table-${tableId}`}
        />
      </StyledTable>
      {(!hasLoadedFirstPage || isDataTableLoading) && (
        <LoadingShine sx={{ top: theme.spacing(12) }} />
      )}
    </Box>
  );
};

export default DataTableTableStructure;

const StyledTable = styled('table')(() => ({
  tableLayout: 'fixed',
  minWidth: '100%',
  borderCollapse: 'collapse',
  whiteSpace: 'nowrap',
}));

const StyledTableHead = styled('thead')(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.gainsboro.main}`,
  textAlign: 'left',
}));
