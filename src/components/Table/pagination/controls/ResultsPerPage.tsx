import { Box, SxProps, Theme, Typography } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import DropdownMenu, { IDropdownMenuItem } from '@components/dropdown-menu';

const PaginationResultsPerPage = memo(
  ({
    tableId,
    perPageOptions,
    limit,
    setPageLimit,
  }: {
    tableId: DataTableIds;
    perPageOptions: number[];
    limit: number;
    setPageLimit: (limit: number) => void;
  }) => {
    const { t } = useTranslation('components');

    const pageLimitOptions = useMemo(
      () => [
        {
          options: perPageOptions.map((opt) => ({
            value: opt,
            component: (
              <Typography
                variant="body1"
                color="primary"
                fontWeight={600}
                data-testid={`data-table-${tableId}-resultsPerPage`}
              >
                {opt}
              </Typography>
            ),
            selected: opt === limit,
          })),
        },
      ],
      [perPageOptions, limit],
    );

    const expandIconSx = useMemo<SxProps<Theme>>(
      () => ({
        fontSize: '24px',
      }),
      [],
    );

    const handleOptionSelect = useCallback((option: IDropdownMenuItem<number>) => {
      setPageLimit(option.value);
    }, []);

    return (
      <Box display="flex" alignItems="center">
        <Typography
          variant="body1"
          color="primary"
          fontWeight={600}
          paddingRight={1}
          data-testid={`data-table-${tableId}-resultsPerPage`}
        >
          {t('dataTable.resultsPerPage')}
          {':'}
        </Typography>
        <DropdownMenu
          optionSections={pageLimitOptions}
          handleSelect={handleOptionSelect}
          expandIconSx={expandIconSx}
          dataTestId={`data-table-${tableId}-resultsPerPage-dropdown`}
        />
      </Box>
    );
  },
);

export default PaginationResultsPerPage;
