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
import { IDropdownMenuItem } from '@components/dropdown-menu';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { OutboundDeliveryItemsView } from '@pages/deliveries/outbound-fulfillments/tables/OutboundFulfillmentItemsInvDataTables';

const useOutboundFulfillmentInventoryDataTable = (
  fulfillmentBinCode: string,
  fulfillmentItemViews: IDropdownMenuItem<OutboundDeliveryItemsView>[],
) => {
  const { t } = useTranslation('pages');

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createInventoryColumns = useCreateBaseInventoryColumns({
    dataTestId: 'outbound-fulfillment-inventory',
    removeColumns: ['binCode', 'areaCode'],
  });
  const columns = useCreateDataTableColumns<TBaseInvDataType>(createInventoryColumns);

  const baseFilter = useMemo<ColumnFilter<TBaseInvFieldNames>[]>(
    () => [
      {
        columnId: InventoryBaseQueryShapeSortFields.BinCode,
        operator: FilterOperator.eq,
        value: fulfillmentBinCode,
      },
    ],
    [fulfillmentBinCode],
  );

  const defaultSorting = useMemo<IDataTableSort<TBaseInvFieldNames>[]>(
    () => [
      {
        id: InventoryBaseQueryShapeSortFields.ProductCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerInventoryDataTableRefetch: triggerDataTableRefetch,
    fulfillmentInventoryDataTableProps: validateDataTableProps<
      TBaseInvDataType,
      TBaseInvFilterType,
      TBaseInvFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.OutboundFulfillmentInventory,
      tableHeader: t(`deliveries.fulfillmentItems.${OutboundDeliveryItemsView.Inventory}`),
      layoutDropdownAddtOptions: fulfillmentItemViews,
      layoutDropdownAddtOptionLabel: t('deliveries.fulfillmentItemViews'),
      columns,
      queryHook: BASE_INV_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useOutboundFulfillmentInventoryDataTable;
