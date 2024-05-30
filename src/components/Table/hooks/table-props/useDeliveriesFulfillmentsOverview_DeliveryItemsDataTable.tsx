import { DateTime } from 'luxon';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewDeliveryItemSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateInboundDeliveryItemColumns, {
  DELIVERY_ITEMS_HOOK,
  TDeliveryItemsDataType,
  TDeliveryItemsFieldNames,
  TDeliveryItemsFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateInboundDeliveryItemColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useCreateLinkedDateRangeFilter from '@/components/Table/hooks/useCreateLinkedDateRangeFilter';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useDeliveriesFulfillmentsOverview_DeliveryItemsDataTable = (
  linkedDateRange: [DateTime, DateTime],
) => {
  const { t } = useTranslation('pages', { keyPrefix: 'deliveries' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const createInboundDeliveryItemColumns = useCreateInboundDeliveryItemColumns({
    dataTestId: 'overview-delivery-items',
  });
  const columns = useCreateDataTableColumns<TDeliveryItemsDataType>(
    createInboundDeliveryItemColumns,
  );

  const linkedFilter = useCreateLinkedDateRangeFilter<TDeliveryItemsFieldNames>(
    ViewDeliveryItemSortFields.DeliveryDueDate,
    linkedDateRange,
  );

  const baseFilter = useMemo<ColumnFilter<TDeliveryItemsFieldNames>[]>(
    () => [
      {
        columnId: ViewDeliveryItemSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TDeliveryItemsFieldNames>[]>(
    () => [
      {
        id: ViewDeliveryItemSortFields.DeliveryCode,
        desc: true,
      },
      {
        id: ViewDeliveryItemSortFields.Item,
        desc: false,
      },
    ],
    [],
  );

  return validateDataTableProps<
    TDeliveryItemsDataType,
    TDeliveryItemsFilterType,
    TDeliveryItemsFieldNames
  >({
    type: 'query',
    tableId: DataTableIds.DeliveriesFulfillmentsOverview_DeliveryItems,
    tableHeader: t('deliveryItems.deliveryItemView'),
    columns,
    queryHook: DELIVERY_ITEMS_HOOK,
    linkedFilter,
    baseFilter,
    defaultSorting,
  });
};

export default useDeliveriesFulfillmentsOverview_DeliveryItemsDataTable;
