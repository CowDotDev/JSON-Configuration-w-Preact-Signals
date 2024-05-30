import { styled } from '@mui/material';
import { flexRender, Header, Row, RowSelectionState } from '@tanstack/react-table';
import { memo } from 'react';

import { DefaultDataType } from '@/components/Table/types/data-table';
import DataTableEmptyLoading from '@/components/Table/table/body/EmptyLoading';
import DataTableNoResults from '@/components/Table/table/body/NoResults';
import CellLoading from '@/components/Table/table/cells/CellLoading';
import StyledCell from '@/components/Table/table/shared-styled/StyledCell';
import StyledRow from '@/components/Table/table/shared-styled/StyledRow';

interface ITableBody {
  isDataTableLoading: boolean;
  hasLoadedFirstPage: boolean;
  isLoadingWhileEmpty: boolean;
  headerColumns: Header<DefaultDataType, unknown>[];
  dataRows: Row<DefaultDataType>[];
  tableRowsHeight: number;
  selectedRows: RowSelectionState;
  dataTestId: string;
}

const TableBody = memo(
  ({
    isDataTableLoading,
    hasLoadedFirstPage,
    isLoadingWhileEmpty,
    headerColumns,
    dataRows,
    tableRowsHeight,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- used purely for memo equality check (as the selected rows changes the selection cell, and potentially other's enabled state, and we want to re-render that change)
    selectedRows,
    dataTestId,
  }: ITableBody) => {
    return (
      <StyledTableBody
        sx={{ height: `${tableRowsHeight}px` }}
        data-testid={`${dataTestId}-table-body`}
      >
        {hasLoadedFirstPage &&
          dataRows.map((row) => (
            <StyledRow key={row.id} data-testid={`${dataTestId}-row-${row.id}`}>
              {row.getVisibleCells().map((cell) => (
                <StyledCell
                  key={cell.id}
                  style={{
                    width: cell.column.getSize(),
                  }}
                  data-testid={`${dataTestId}-cell-${cell.id}`}
                >
                  {!isDataTableLoading ? (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  ) : (
                    <CellLoading />
                  )}
                </StyledCell>
              ))}
            </StyledRow>
          ))}

        {(!hasLoadedFirstPage || isLoadingWhileEmpty) && (
          <DataTableEmptyLoading
            numberOfColumns={
              hasLoadedFirstPage
                ? headerColumns.filter((header) => header.column.getIsVisible()).length
                : 4
            }
          />
        )}
        {hasLoadedFirstPage && !isDataTableLoading && dataRows.length === 0 && (
          <DataTableNoResults dataTestId={dataTestId} />
        )}
      </StyledTableBody>
    );
  },
);

export default TableBody;

const StyledTableBody = styled('tbody')(() => ({
  position: 'relative',
}));
