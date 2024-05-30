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
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useInventoryLevelAdditionalOptions } from '@components/inventory/inventory-level-additional-options';
import { useWarehouseUtils } from '@context/warehouse-utils';
import { InventoryLevel } from '@models/inventory';

const useInventoryBinLevelDataTable = (setInventoryLevel: (level: InventoryLevel) => void) => {
  const { t } = useTranslation('components', { keyPrefix: 'inventory' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const inventoryLevelViews = useInventoryLevelAdditionalOptions(
    InventoryLevel.Bin,
    setInventoryLevel,
  );

  // TODO: We need a way to give this table a unique ID from the query response
  const { selection, clearSelection, rowSelection } = useDataTableSelection<TBaseInvDataType>(
    SelectionType.multi,
    'id',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const createInventoryColumns = useCreateBaseInventoryColumns({ dataTestId: 'bin-level-inv' });
  const columns = useCreateDataTableColumns<TBaseInvDataType>(createInventoryColumns);

  const baseFilter = useMemo<ColumnFilter<TBaseInvFieldNames>[]>(
    () => [
      {
        columnId: InventoryBaseQueryShapeSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting: IDataTableSort<TBaseInvFieldNames>[] = useMemo(
    () => [
      {
        id: InventoryBaseQueryShapeSortFields.BinCode,
        desc: false,
      },
      {
        id: InventoryBaseQueryShapeSortFields.ProductCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    selectedInventory: selection,
    triggerBinLevelDataTableRefetch: triggerDataTableRefetch,
    invBinLevelDataTableProps: validateDataTableProps<
      TBaseInvDataType,
      TBaseInvFilterType,
      TBaseInvFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InventoryBinLevel,
      tableHeader: t(`${InventoryLevel.Bin}Level`),
      layoutDropdownAddtOptions: inventoryLevelViews,
      layoutDropdownAddtOptionLabel: t('inventoryLevels'),
      columns,
      queryHook: BASE_INV_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection,
      refetchTrigger,
    }),
  };
};

export default useInventoryBinLevelDataTable;
