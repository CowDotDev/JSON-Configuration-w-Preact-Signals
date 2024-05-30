import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage } from '@mui/icons-material';
import { Box } from '@mui/material';
import { memo } from 'react';

import IconButton from '@components/styled/IconButton';

const PaginationPageControls = memo(
  ({
    tableId,
    canPreviousPage,
    canNextPage,
    goToFirstPage,
    goToPrevPage,
    goToNextPage,
    goToLastPage,
  }: {
    tableId: string;
    canPreviousPage: boolean;
    canNextPage: boolean;
    goToFirstPage: () => void;
    goToPrevPage: () => void;
    goToNextPage: () => void;
    goToLastPage: () => void;
  }) => {
    return (
      <Box display="flex" gap={4}>
        <IconButton
          styledVariant="dataGridFooter"
          disabled={!canPreviousPage}
          onClick={goToFirstPage}
          data-testid={`data-table-${tableId}-goto-first-page`}
        >
          <FirstPage />
        </IconButton>
        <IconButton
          styledVariant="dataGridFooter"
          disabled={!canPreviousPage}
          onClick={goToPrevPage}
          data-testid={`data-table-${tableId}-goto-previous-page`}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          styledVariant="dataGridFooter"
          disabled={!canNextPage}
          onClick={goToNextPage}
          data-testid={`data-table-${tableId}-goto-next-page`}
        >
          <KeyboardArrowRight />
        </IconButton>
        <IconButton
          styledVariant="dataGridFooter"
          disabled={!canNextPage}
          onClick={goToLastPage}
          data-testid={`data-table-${tableId}-goto-last-page`}
        >
          <LastPage />
        </IconButton>
      </Box>
    );
  },
);

export default PaginationPageControls;
