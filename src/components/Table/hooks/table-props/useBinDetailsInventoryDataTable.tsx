import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { InventoryBaseQueryShapeSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateBaseInventoryColumns, {
  BASE_INV_HOOK,
  TBaseInvDataType,
  TBaseInvFieldNames,
  TBaseInvFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateBaseInventoryColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useBinDetailsInventoryDataTable = (binId: string) => {
  const { t } = useTranslation('pages', { keyPrefix: 'bin-details' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createInventoryTableColumns = useCreateBaseInventoryColumns({
    dataTestId: 'bin-inventory',
  });
  const columns = useCreateDataTableColumns<TBaseInvDataType>(createInventoryTableColumns);

  const baseFilter = useMemo<ColumnFilter<TBaseInvFieldNames>[]>(
    () => [
      {
        columnId: InventoryBaseQueryShapeSortFields.BinId,
        operator: FilterOperator.eq,
        value: binId,
      },
      {
        columnId: InventoryBaseQueryShapeSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [binId, selectedWarehouseId],
  );

  const defaultSorting: IDataTableSort<TBaseInvFieldNames>[] = useMemo(
    () => [
      {
        id: InventoryBaseQueryShapeSortFields.ProductCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerBinInventoryDataTableRefetch: triggerDataTableRefetch,
    binInventoryDataTableProps: validateDataTableProps<
      TBaseInvDataType,
      TBaseInvFilterType,
      TBaseInvFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.BinDetailsInventory,
      tableHeader: t('binInventory'),
      columns,
      queryHook: BASE_INV_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useBinDetailsInventoryDataTable;
