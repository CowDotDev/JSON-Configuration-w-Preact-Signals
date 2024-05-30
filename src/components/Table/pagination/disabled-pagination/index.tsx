import { Typography } from '@mui/material';
import { memo } from 'react';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import LoadingIndicator from '@components/loading-indicator';

const PaginationDisabledState = memo(
  ({
    tableId,
    isLoadingTotalCount,
    totalCount,
  }: {
    tableId: DataTableIds;
    isLoadingTotalCount: boolean;
    totalCount: number;
  }) => {
    if (isLoadingTotalCount && !totalCount) return null;
    return isLoadingTotalCount ? (
      <LoadingIndicator iconProps={{ size: 16 }} pl={1} removeBackground />
    ) : (
      <Typography
        variant="body1"
        color="primary"
        fontWeight={600}
        data-testid={`data-table-${tableId}-noPagination`}
      >
        {`1 - ${totalCount} of ${totalCount}`}
      </Typography>
    );
  },
);

export default PaginationDisabledState;
