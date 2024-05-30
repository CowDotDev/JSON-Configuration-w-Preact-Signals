import { FilterList, HighlightOff } from '@mui/icons-material';
import { Badge, Dialog, Box, DialogTitle, styled } from '@mui/material';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useDataTable } from '@/components/Table/context/DataTableProvider';
import FilterBuilder from '@components/filter-builder';
import {
  ColumnFilter,
  ColumnFilterEnumOption,
  ColumnFilterDefinition,
  ColumnType,
  DEFAULT_FILTER,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';
import Button from '@components/styled/Button';

const FilterButton = memo(
  ({
    filterPopoverId,
    handleClick,
    hasCompletedFirstFetch,
    filterLength,
    dataTestId,
  }: {
    filterPopoverId?: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    hasCompletedFirstFetch: boolean;
    filterLength: number;
    dataTestId: string;
  }) => {
    const { t } = useTranslation('components', { keyPrefix: 'filter' });

    return (
      <Button
        aria-describedby={filterPopoverId}
        variant="text"
        styledVariant="tableControl"
        onClick={handleClick}
        disabled={!hasCompletedFirstFetch}
        data-testid={dataTestId}
      >
        <FilterList />
        <Badge
          color="info"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          badgeContent={filterLength}
        >
          {t('filter').toUpperCase()}
        </Badge>
      </Button>
    );
  },
);

const FilterDialogContent = memo(
  ({
    filterableColumns,
    filterableColumnEnumOptions,
    tempLocalFilter,
    handleClose,
    setInputAtIndex,
    removeFilter,
    addInput,
    clearFilter,
    applyFilter,
    dataTestId,
  }: {
    filterableColumns: ColumnFilterDefinition[];
    filterableColumnEnumOptions: ColumnFilterEnumOption[];
    tempLocalFilter: ColumnFilter<string>[];
    handleClose: () => void;
    setInputAtIndex: (index: number, input: ColumnFilter<string>) => void;
    removeFilter: (index: number) => void;
    addInput: () => void;
    clearFilter: () => void;
    applyFilter: () => void;
    dataTestId: string;
  }) => {
    const { t } = useTranslation('components', { keyPrefix: 'filter' });

    return (
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh',
          maxHeight: '650px',
          minWidth: '450px',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
        data-testid={`${dataTestId}-filter-popup-content`}
      >
        <Box>
          <DialogTitle>{t('filter')}</DialogTitle>
          <StyledClearIcon onClick={handleClose} />
          <Box sx={{ padding: (theme) => theme.spacing(0, 6) }}>
            <FilterBuilder
              filters={tempLocalFilter}
              filterableColumns={filterableColumns}
              filterableColumnEnumOptions={filterableColumnEnumOptions}
              includeAnyFilter={true}
              setInputAtIndex={(index, input) => setInputAtIndex(index, input)}
              addInput={addInput}
              removeFilter={(index) => removeFilter(index)}
              dataTestId={dataTestId}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: (theme) => theme.spacing(0, 4, 8),
            gap: (theme) => theme.spacing(4),
          }}
        >
          <Button
            size="large"
            variant="outlined"
            color="primary"
            onClick={clearFilter}
            data-testid={`${dataTestId}-clear-filters`}
          >
            {t('clearAll')}
          </Button>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={applyFilter}
            data-testid={`${dataTestId}-apply-filters`}
          >
            {t('apply')}
          </Button>
        </Box>
      </Box>
    );
  },
);

const DataTableFilterControls = () => {
  const {
    tableId,
    filterableColumns,
    filterableColumnEnumOptions,
    hasCompletedFirstFetch,
    filter,
    setFilter,
  } = useDataTable();

  const [tempLocalFilter, setTempLocalFilter] = useState(filter);
  const sortedTempLocalFilter = useMemo(
    () =>
      [...tempLocalFilter].sort((a, b) => {
        if ('linked' in a && !('linked' in b)) {
          return -1;
        } else if (!('linked' in a) && 'linked' in b) {
          return 1;
        }
        return 0;
      }),
    [tempLocalFilter],
  );

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const filterPopoverId = open ? 'filter-popover' : undefined;

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const addInput = useCallback(() => {
    setTempLocalFilter([...tempLocalFilter, DEFAULT_FILTER]);
  }, [tempLocalFilter]);

  const setInputAtIndex = useCallback(
    (index: number, input) => {
      const newLocalFilter = [...tempLocalFilter];
      newLocalFilter[index] = input;
      setTempLocalFilter(newLocalFilter);
    },
    [tempLocalFilter],
  );

  const applyFilter = useCallback(() => {
    // Remove null values that will cause the query to fail
    const cleanedFilter = tempLocalFilter.filter((filter) => {
      //Trims the trailing and leading whitespace after hitting submit
      const filterValue = typeof filter.value === 'string' ? filter.value.trim() : filter.value;
      if (filterValue === null) {
        return false;
      }

      const filterColumnType = filterableColumns.find(
        (column) => column.id === filter.columnId,
      )?.columnType;
      if (!filterColumnType) {
        return false;
      }

      if ([FilterOperator.between, FilterOperator.notBetween].includes(filter.operator)) {
        if (
          typeof filterValue !== 'object' ||
          !('lower' in filterValue) ||
          !('upper' in filterValue)
        ) {
          return false;
        }
        if (filterValue.lower === null || filterValue.upper === null) {
          return false;
        }
        if (
          filterColumnType === ColumnType.number &&
          (isNaN(Number(filterValue.lower)) || isNaN(Number(filterValue.upper)))
        ) {
          return false;
        }
      } else if (filterColumnType === ColumnType.number && typeof filterValue !== 'number') {
        return false;
      }

      return true;
    });

    setFilter(cleanedFilter);
    handleClose();
  }, [tempLocalFilter]);

  const removeFilter = useCallback(
    (index) => {
      const newFilter = [...tempLocalFilter];
      newFilter.splice(index, 1);
      setTempLocalFilter(newFilter);
    },
    [tempLocalFilter],
  );

  const clearFilter = useCallback(() => {
    const _currentFilterOnlyLinks = [...filter].filter((filter) => 'linked' in filter);
    setTempLocalFilter(_currentFilterOnlyLinks);
    setFilter(_currentFilterOnlyLinks);
    handleClose();
  }, [filter]);

  useEffect(() => {
    setTempLocalFilter(filter);
  }, [filter]);

  useEffect(() => {
    if (tempLocalFilter.length === 0) setTempLocalFilter([DEFAULT_FILTER]);
  }, [tempLocalFilter]);

  return (
    <Box>
      <FilterButton
        filterPopoverId={filterPopoverId}
        handleClick={handleClick}
        hasCompletedFirstFetch={hasCompletedFirstFetch}
        filterLength={filter?.length}
        dataTestId={`data-table-${tableId}-filter-control-button`}
      />
      <Dialog
        open={!!open}
        onClose={handleClose}
        maxWidth="xl"
        data-testid={`data-table-${tableId}-filter-popup`}
        data-testkey="isPopupVisible"
        data-testvalue={!!open}
      >
        <FilterDialogContent
          filterableColumns={filterableColumns}
          filterableColumnEnumOptions={filterableColumnEnumOptions}
          tempLocalFilter={sortedTempLocalFilter}
          setInputAtIndex={setInputAtIndex}
          addInput={addInput}
          applyFilter={applyFilter}
          removeFilter={removeFilter}
          clearFilter={clearFilter}
          handleClose={handleClose}
          dataTestId={`data-table-${tableId}`}
        />
      </Dialog>
    </Box>
  );
};

export default DataTableFilterControls;

const StyledClearIcon = styled(HighlightOff)(({ theme }) => ({
  color: theme.palette.primary.main,
  position: 'absolute',
  top: '30px',
  right: '30px',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  cursor: 'pointer',
}));
