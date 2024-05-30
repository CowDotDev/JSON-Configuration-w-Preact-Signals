import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { DeliveryCompletionStatus, ViewDeliveryItemSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateInboundDeliveryItemColumns, {
  DELIVERY_ITEMS_HOOK,
  TDeliveryItemsDataType,
  TDeliveryItemsFieldNames,
  TDeliveryItemsFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateInboundDeliveryItemColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort, RowSelectionEnabledFilter } from '@/components/Table/types/data-table';
import { IDropdownMenuItem } from '@components/dropdown-menu';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { InboundDeliveryItemsView } from '@pages/deliveries/inbound-deliveries/tables/InboundDeliveryItemsInvDataTables';

const useInboundDeliveryItemsDataTable = (
  deliveryId: string,
  deliveryItemViews: IDropdownMenuItem<InboundDeliveryItemsView>[] | undefined,
  disableSelection?: boolean,
  selectionType = SelectionType.multi,
) => {
  const { t } = useTranslation('pages');
  const { selection, clearSelection, rowSelection } = useDataTableSelection<TDeliveryItemsDataType>(
    selectionType,
    'id',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const createInboundDeliveryItemColumns = useCreateInboundDeliveryItemColumns({
    dataTestId: 'delivery-items',
    removeColumns: ['deliveryCode', 'deliveryDueDate'],
  });
  const columns = useCreateDataTableColumns<TDeliveryItemsDataType>(
    createInboundDeliveryItemColumns,
  );

  const baseFilter = useMemo<ColumnFilter<TDeliveryItemsFieldNames>[]>(
    () => [
      {
        columnId: ViewDeliveryItemSortFields.DeliveryId,
        operator: FilterOperator.eq,
        value: deliveryId,
      },
    ],
    [deliveryId],
  );

  const defaultSorting: IDataTableSort<TDeliveryItemsFieldNames>[] = useMemo(
    () => [
      {
        id: ViewDeliveryItemSortFields.Item,
        desc: false,
      },
      {
        id: ViewDeliveryItemSortFields.ProductCode,
        desc: false,
      },
    ],
    [],
  );

  const rowSelectionEnabledFilter = useCallback<RowSelectionEnabledFilter<TDeliveryItemsDataType>>(
    (row) =>
      row.original.unloadStatus === DeliveryCompletionStatus.NotStarted &&
      row.original.putawayStatus === DeliveryCompletionStatus.NotStarted,
    [],
  );

  return {
    selectedDeliveryItems: selection,
    triggerIbdDeliveryItemDataTableRefetch: triggerDataTableRefetch,
    ibdDeliveryItemDataTableProps: validateDataTableProps<
      TDeliveryItemsDataType,
      TDeliveryItemsFilterType,
      TDeliveryItemsFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InboundDeliveryItems,
      tableHeader: t(`deliveries.deliveryItems.${InboundDeliveryItemsView.DeliveryItem}`),
      layoutDropdownAddtOptions: deliveryItemViews || undefined,
      layoutDropdownAddtOptionLabel: deliveryItemViews
        ? t('deliveries.deliveryItemViews')
        : undefined,
      queryHook: DELIVERY_ITEMS_HOOK,
      columns,
      baseFilter,
      defaultSorting,
      refetchTrigger,
      rowSelection: !disableSelection
        ? {
            ...rowSelection,
            rowSelectionEnabledFilter,
          }
        : undefined,
    }),
  };
};

export default useInboundDeliveryItemsDataTable;
