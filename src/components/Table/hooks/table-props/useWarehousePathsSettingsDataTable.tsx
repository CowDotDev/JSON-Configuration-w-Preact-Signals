import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { WarehousePathQueryModelSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateWarehousePathsColumns, {
  TWarehousePathsDataType,
  TWarehousePathsFieldNames,
  TWarehousePathsFilterType,
  WAREHOUSE_PATHS_HOOK,
} from '@/components/Table/hooks/shared-columns/useCreateWarehousePathsColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useWarehousePathsSettingsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.warehouse-paths' });

  const { selectedWarehouseId } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createWarehousePathsColumns = useCreateWarehousePathsColumns({
    dataTestId: 'warehouse-paths-settings',
    triggerDataTableRefetch,
  });
  const columns = useCreateDataTableColumns<TWarehousePathsDataType>(createWarehousePathsColumns);

  const baseFilter = useMemo<ColumnFilter<TWarehousePathsFieldNames>[]>(
    () => [
      {
        columnId: WarehousePathQueryModelSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting: IDataTableSort<TWarehousePathsFieldNames>[] = useMemo(
    () => [
      {
        id: WarehousePathQueryModelSortFields.WarehouseId,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    warehousePathsSettingsTableProps: validateDataTableProps<
      TWarehousePathsDataType,
      TWarehousePathsFilterType,
      TWarehousePathsFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.WarehousePathsSettings,
      tableHeader: t('title'),
      columns,
      queryHook: WAREHOUSE_PATHS_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useWarehousePathsSettingsDataTable;
