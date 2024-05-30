import { Refresh } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import IconButton from '@components/styled/IconButton';
import useDateTime from '@hooks/useDateTime';

const PaginationLastFetched = memo(
  ({
    dataLastFetched,
    isDataTableLoading,
    refetchData,
    refetchTotalCount,
    dataTestId,
  }: {
    dataLastFetched: number;
    isDataTableLoading: boolean;
    refetchData: () => void;
    refetchTotalCount: () => void;
    dataTestId: string;
  }) => {
    const { t } = useTranslation('components');
    const { displayDateTime } = useDateTime();

    return typeof dataLastFetched !== 'undefined' && dataLastFetched !== null ? (
      <Box
        display="flex"
        alignItems="center"
        gap={(theme) => theme.spacing(2)}
        mr="auto"
        data-testid={`${dataTestId}-last-fetched-container`}
      >
        <IconButton
          styledVariant="dataGridFooter"
          disabled={isDataTableLoading}
          onClick={() => {
            refetchData();
            refetchTotalCount();
          }}
          data-testid={`${dataTestId}-last-fetched-refresh-button`}
        >
          <Refresh />
        </IconButton>
        <Typography variant="body3" data-testid={`${dataTestId}-last-fetched-date-time`}>
          {`${t('dataTable.lastUpdated')}: ${displayDateTime({
            date: dataLastFetched,
            timezone: DateTime.now().zoneName,
          })}`}
        </Typography>
      </Box>
    ) : null;
  },
);

export default PaginationLastFetched;
