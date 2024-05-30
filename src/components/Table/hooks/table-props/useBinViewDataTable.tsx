import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewBinSortFields } from '@/graphql/types.generated';
import {
  BINS_LAZY_HOOK,
  TBinsDataType,
  TBinsFieldNames,
  TBinsFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateBinColumns';
import useCreateBinZoneColumns from '@/components/Table/hooks/shared-columns/useCreateBinZoneColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';

const useBinsViewZoneDataTable = () => {
  const { t: tP } = useTranslation('pages', { keyPrefix: 'settings.bin-settings' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const createBinColumns = useCreateBinZoneColumns({
    dataTestId: 'bin-zone-settings',
  });
  const columns = useCreateDataTableColumns(createBinColumns);

  const baseFilter = useMemo<ColumnFilter<TBinsFieldNames>[]>(
    () => [
      {
        columnId: ViewBinSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TBinsFieldNames>[]>(
    () => [
      {
        id: ViewBinSortFields.ZoneCode,
        desc: false,
      },
      {
        id: ViewBinSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    dataTableProps: validateDataTableProps<TBinsDataType, TBinsFilterType, TBinsFieldNames>({
      type: 'query',
      tableId: DataTableIds.BinZoneSettings,
      tableHeader: tP('title'),
      columns,
      queryHook: BINS_LAZY_HOOK,
      baseFilter,
      defaultSorting,
    }),
  };
};

export default useBinsViewZoneDataTable;
