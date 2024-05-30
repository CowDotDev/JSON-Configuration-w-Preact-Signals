import { DateTime } from 'luxon';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewFulfillmentItemSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateOutboundFulfillmentItemColumns, {
  FULFILLMENT_ITEMS_HOOK,
  TFulfillmentItemsDataType,
  TFulfillmentItemsFieldNames,
} from '@/components/Table/hooks/shared-columns/useCreateOutboundFulfillmentItemColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useCreateLinkedDateRangeFilter from '@/components/Table/hooks/useCreateLinkedDateRangeFilter';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useDeliveriesFulfillmentsOverview_FulfillmentItemsDataTable = (
  linkedDateRange: [DateTime, DateTime],
) => {
  const { t } = useTranslation('pages', { keyPrefix: 'deliveries' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const createOutboundFulfillmentItemColumns = useCreateOutboundFulfillmentItemColumns({
    dataTestId: 'overview-fulfillment-items',
  });
  const columns = useCreateDataTableColumns<TFulfillmentItemsDataType>(
    createOutboundFulfillmentItemColumns,
  );

  const linkedFilter = useCreateLinkedDateRangeFilter<TFulfillmentItemsFieldNames>(
    ViewFulfillmentItemSortFields.FulfillmentDueDate,
    linkedDateRange,
  );

  const baseFilter = useMemo<ColumnFilter<TFulfillmentItemsFieldNames>[]>(
    () => [
      {
        columnId: ViewFulfillmentItemSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TFulfillmentItemsFieldNames>[]>(
    () => [
      {
        id: ViewFulfillmentItemSortFields.FulfillmentCode,
        desc: true,
      },
      {
        id: ViewFulfillmentItemSortFields.Item,
        desc: false,
      },
    ],
    [],
  );

  return validateDataTableProps({
    type: 'query',
    tableId: DataTableIds.DeliveriesFulfillmentsOverview_FulfillmentItems,
    tableHeader: t('fulfillmentItems.fulfillmentItemView'),
    columns,
    queryHook: FULFILLMENT_ITEMS_HOOK,
    linkedFilter,
    baseFilter,
    defaultSorting,
  });
};

export default useDeliveriesFulfillmentsOverview_FulfillmentItemsDataTable;
