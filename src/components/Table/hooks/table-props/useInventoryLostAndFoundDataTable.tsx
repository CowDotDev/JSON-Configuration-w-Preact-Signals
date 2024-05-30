import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewLostAndFoundSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateLostAndFoundInventoryColumns, {
  TLostAndFoundInvDataType,
  TLostAndFoundInvFilterType,
  TLostAndFoundInvFieldNames,
  LOST_AND_FOUND_INV_HOOK,
} from '@/components/Table/hooks/shared-columns/useCreateLostAndFoundInventoryColumns';
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

const useInventoryLostAndFoundDataTable = (setInventoryLevel?: (level: InventoryLevel) => void) => {
  const { t } = useTranslation('components', { keyPrefix: 'inventory' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const inventoryLevelViews = useInventoryLevelAdditionalOptions(
    InventoryLevel.LostAndFound,
    setInventoryLevel,
  );

  // TODO: We need a way to give this table a unique ID from the query response
  const { selection, clearSelection, rowSelection } =
    useDataTableSelection<TLostAndFoundInvDataType>(SelectionType.single, 'productId');
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const createLostAndFoundInventoryColumns = useCreateLostAndFoundInventoryColumns({
    dataTestId: 'lost-and-found-inventory',
  });
  const columns = useCreateDataTableColumns<TLostAndFoundInvDataType>(
    createLostAndFoundInventoryColumns,
  );

  const baseFilter = useMemo<ColumnFilter<TLostAndFoundInvFieldNames>[]>(
    () => [
      {
        columnId: ViewLostAndFoundSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TLostAndFoundInvFieldNames>[]>(
    () => [
      {
        id: ViewLostAndFoundSortFields.BinCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    selectedLostAndFoundList: selection,
    triggerLostAndFoundDataTableRefetch: triggerDataTableRefetch,
    lostAndFoundDataTableProps: validateDataTableProps<
      TLostAndFoundInvDataType,
      TLostAndFoundInvFilterType,
      TLostAndFoundInvFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InventoryLostAndFound,
      tableHeader: t(`${InventoryLevel.LostAndFound}Level`),
      layoutDropdownAddtOptions: setInventoryLevel ? inventoryLevelViews : undefined,
      layoutDropdownAddtOptionLabel: setInventoryLevel ? t('inventoryLevels') : undefined,
      columns,
      queryHook: LOST_AND_FOUND_INV_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection,
      refetchTrigger,
    }),
  };
};

export default useInventoryLostAndFoundDataTable;
