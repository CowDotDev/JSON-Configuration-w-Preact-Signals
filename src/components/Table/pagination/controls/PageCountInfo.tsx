import { Box, Typography } from '@mui/material';
import { memo } from 'react';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import LoadingIndicator from '@components/loading-indicator';

const PaginationPageCountInfo = memo(
  ({
    tableId,
    hasCompletedFirstFetch,
    startIndex,
    endIndex,
    isLoadingTotalCount,
    totalCount,
  }: {
    tableId: DataTableIds;
    hasCompletedFirstFetch: boolean;
    startIndex: number;
    endIndex: number;
    isLoadingTotalCount: boolean;
    totalCount: number;
  }) => {
    return (
      <Box display="flex" alignItems="center" px={8}>
        <Typography
          variant="body1"
          color="primary"
          fontWeight={600}
          data-testid={`data-table-${tableId}-paginationCount`}
          component="div"
        >
          {!hasCompletedFirstFetch ? (
            <LoadingIndicator iconProps={{ size: 16 }} pl={1} removeBackground />
          ) : (
            `${startIndex} - ${endIndex}`
          )}
        </Typography>
        {(!!totalCount || isLoadingTotalCount) && (
          <Typography
            variant="body1"
            color="primary"
            fontWeight={600}
            data-testid={`data-table-${tableId}-paginationCount`}
            component="div"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <span>&nbsp;of&nbsp;</span>
            <span>
              {isLoadingTotalCount && !totalCount ? (
                <LoadingIndicator iconProps={{ size: 16 }} pl={1} removeBackground />
              ) : (
                totalCount
              )}
            </span>
          </Typography>
        )}
      </Box>
    );
  },
);

export default PaginationPageCountInfo;
