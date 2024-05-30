import { Box, styled } from '@mui/material';
import { flexRender, Header, RowSelectionState } from '@tanstack/react-table';

import { SortIcon } from '@/components/Table/controls/column/sort-icon';
import isDisplayColumn from '@/components/Table/lib/isDisplayColumn';
import { DefaultDataType } from '@/components/Table/types/data-table';
import DataTableHeaderResizer from '@/components/Table/table/header/Resizer';
import StyledRow from '@/components/Table/table/shared-styled/StyledRow';

interface IHeaderRow {
  isDataTableLoading: boolean;
  hasLoadedFirstPage: boolean;
  headerColumns: Header<DefaultDataType, unknown>[];
  selectedRows: RowSelectionState; // used purely for memo equality check
  dataTestId: string;
}
const HeaderRow = ({
  headerColumns,
  isDataTableLoading,
  hasLoadedFirstPage,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- used purely for memo equality check (as the selected rows changes the selection header cell, and we want to re-render that change)
  selectedRows,
  dataTestId,
}: IHeaderRow) => {
  const visibleHeaderColumns = headerColumns.filter((header) => header.column.getIsVisible());

  return (
    hasLoadedFirstPage && (
      <StyledRow data-testid={`${dataTestId}-header-row`}>
        {visibleHeaderColumns.map((header) => (
          <StyledHeadCell
            key={header.id}
            style={{
              width: header.getSize(),
            }}
            data-testid={`${dataTestId}-header-cell-${header.id}`}
          >
            <Box
              onClick={header.column.getToggleSortingHandler()}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: (theme) => theme.spacing(2),
                cursor: header.column.getCanSort() ? 'pointer' : undefined,
              }}
            >
              {!isDisplayColumn(header.column.id) ? (
                <>
                  <StyledHeadSpan
                    title={header.column.columnDef.header as string}
                    data-testid={`${dataTestId}-header-cell-${header.id}-content`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </StyledHeadSpan>
                  <SortIcon
                    isSorted={header.column.getIsSorted()}
                    sortIndex={header.column.getSortIndex()}
                    dataTestId={`${dataTestId}-header-cell-${header.id}-sort`}
                  />
                </>
              ) : !isDataTableLoading ? (
                flexRender(header.column.columnDef.header, header.getContext())
              ) : null}
            </Box>
            <DataTableHeaderResizer
              canResize={header.column.getCanResize()}
              handleMouseDown={header.getResizeHandler()}
              handleTouchStart={header.getResizeHandler()}
              dataTestId={`${dataTestId}-header-cell-${header.id}-resizer`}
            />
          </StyledHeadCell>
        ))}
      </StyledRow>
    )
  );
};

export default HeaderRow;

const StyledHeadCell = styled('th')(({ theme }) => ({
  ...theme.typography.h4,
  boxSizing: 'content-box',
  position: 'relative',
  fontWeight: 600,
  padding: theme.spacing(3, 2),
  '&:first-of-type': {
    paddingLeft: theme.spacing(6),
  },
  '&:last-of-type': {
    paddingRight: theme.spacing(6),
    '.data-table-resizer': {
      right: theme.spacing(4),
    },
  },
}));

const StyledHeadSpan = styled('span')(() => ({
  display: 'block',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));
