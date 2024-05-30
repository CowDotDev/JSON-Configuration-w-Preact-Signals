import { SxProps, Theme } from '@mui/material';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';

import { useDataTable } from '@/components/Table/context/DataTableProvider';
import FilterControl from '@components/filter-builder/filter-control';
import { ANY_COLUMN_FILTER, ColumnFilter } from '@components/filter-builder/filter-definitions';
import { getAnyColumnTypeOperator } from '@components/filter-builder/format-filter';
import useDebouncedEffect from '@hooks/useDebouncedEffect';

const MemoizedFilterControl = memo(FilterControl, isEqual);

const DataTableQuickFilter = () => {
  const {
    tableId,
    hasCompletedFirstFetch,
    filterableColumns,
    filterableColumnEnumOptions,
    quickFilter,
    setQuickFilter,
    layoutProps: { activeLayout },
  } = useDataTable();

  const [localQuickFilter, setLocalQuickFilter] = useState<ColumnFilter<string>>(ANY_COLUMN_FILTER);
  const filterControlSx = useMemo<SxProps<Theme>>(
    () => ({ marginBottom: 0, padding: (theme) => theme.spacing(2, 3, 2) }),
    [],
  );

  const removeQuickFilter = useCallback(() => {
    setQuickFilter(null);
    setLocalQuickFilter(ANY_COLUMN_FILTER);
  }, []);

  const setInput = useCallback((input: ColumnFilter<string>) => {
    setLocalQuickFilter(input);
  }, []);

  useDebouncedEffect(
    () => {
      if (isEqual(localQuickFilter, quickFilter)) return;
      if (localQuickFilter.value !== null && localQuickFilter.value !== '') {
        setQuickFilter(localQuickFilter);
      } else {
        setQuickFilter(null);
      }
    },
    250,
    [localQuickFilter],
    {
      shouldRun:
        !!quickFilter || (localQuickFilter.value !== null && localQuickFilter.value !== ''),
    },
  );

  useEffect(() => {
    removeQuickFilter();
  }, [activeLayout?.id]);

  return (
    <MemoizedFilterControl
      key={`quickFilterControl`}
      isDisabled={!hasCompletedFirstFetch}
      input={localQuickFilter}
      setInput={setInput}
      removeFilter={removeQuickFilter}
      hideRemoveFilterIcon={!quickFilter}
      forceColumnOperator={getAnyColumnTypeOperator}
      removeOperatorInput={true}
      filterableColumns={filterableColumns}
      filterableColumnEnumOptions={filterableColumnEnumOptions}
      includeAnyFilter={true}
      sx={filterControlSx}
      dataTestId={`data-table-${tableId}-quick-filter`}
    />
  );
};

export default DataTableQuickFilter;
