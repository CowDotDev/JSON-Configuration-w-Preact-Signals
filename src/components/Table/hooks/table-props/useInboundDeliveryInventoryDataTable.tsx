import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  DeliveryCompletionStatus,
  InventoryBaseQueryShapeSortFields,
} from '@/graphql/types.generated';
import DeprecatedWarehouseFeatureFlagToggles from '@/signals/configuration/deprecatedWarehouseFeatureFlagToggles/DeprecatedWarehouseFeatureFlagToggles';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateBaseInventoryColumns, {
  BASE_INV_ALL_HOOK,
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
import { IDropdownMenuItem } from '@components/dropdown-menu';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { InboundDeliveryItemsView } from '@pages/deliveries/inbound-deliveries/tables/InboundDeliveryItemsInvDataTables';

const useInboundDeliveryInventoryDataTable = (
  deliveryId: string,
  pickOrPutawayStatus: DeliveryCompletionStatus,
  deliveryItemViews: IDropdownMenuItem<InboundDeliveryItemsView>[],
) => {
  const { t } = useTranslation('pages');

  // TODO: We need a way to give this table a unique ID from the query response
  const warehouseFeatureFlags = DeprecatedWarehouseFeatureFlagToggles;
  const { selection, clearSelection, rowSelection } = useDataTableSelection<TBaseInvDataType>(
    pickOrPutawayStatus !== DeliveryCompletionStatus.Complete &&
      warehouseFeatureFlags.value.inboundDeliveries.manageInboundLPs
      ? SelectionType.multi
      : undefined,
    pickOrPutawayStatus !== DeliveryCompletionStatus.Complete &&
      warehouseFeatureFlags.value.inboundDeliveries.manageInboundLPs
      ? 'deliveryItemId'
      : undefined,
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const createInventoryColumns = useCreateBaseInventoryColumns({
    dataTestId: 'inbound-delivery-inventory',
    removeColumns: ['binCode', 'areaCode'],
  });
  const columns = useCreateDataTableColumns<TBaseInvDataType>(createInventoryColumns);

  const baseFilter = useMemo<ColumnFilter<TBaseInvFieldNames>[]>(
    () => [
      {
        columnId: InventoryBaseQueryShapeSortFields.StockDeliveryId,
        operator: FilterOperator.eq,
        value: deliveryId,
      },
      {
        columnId: InventoryBaseQueryShapeSortFields.BinType,
        operator: FilterOperator.eq,
        value: 'planned',
      },
    ],
    [deliveryId],
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
    selectedDeliveryInventory: selection,
    triggerIbdDeliveryInventoryDataTableRefetch: triggerDataTableRefetch,
    ibdDeliveryInventoryDataTableProps: validateDataTableProps<
      TBaseInvDataType,
      TBaseInvFilterType,
      TBaseInvFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InboundDeliveryInventory,
      tableHeader: t(`deliveries.deliveryItems.${InboundDeliveryItemsView.Inventory}`),
      layoutDropdownAddtOptions: deliveryItemViews,
      layoutDropdownAddtOptionLabel: t('deliveries.deliveryItemViews'),
      queryHook: BASE_INV_ALL_HOOK,
      columns,
      baseFilter,
      defaultSorting,
      refetchTrigger,
      rowSelection,
    }),
  };
};

export default useInboundDeliveryInventoryDataTable;
