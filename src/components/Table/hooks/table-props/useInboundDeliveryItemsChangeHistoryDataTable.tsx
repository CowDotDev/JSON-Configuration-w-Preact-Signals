import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewHistoryFieldDiffSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateEntityHistoryColumns, {
  ENTITY_HISTORY_HOOK,
  IIdentifierColumn,
  TEntityHistoryDataType,
  TEntityHistoryFieldNames,
  TEntityHistoryFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateEntityHistoryColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  ColumnFilter,
  ColumnType,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';

export interface IAllDeliveryItems {
  id: string;
  item: string;
}
const useInboundDeliveryItemsChangeHistoryDataTable = (allDeliveryItems: IAllDeliveryItems[]) => {
  const { t } = useTranslation('pages');

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const identifierColumn = useMemo<IIdentifierColumn<IAllDeliveryItems>>(
    () => ({
      columnHeader: t('deliveries.item'),
      entityDefs: allDeliveryItems,
      entityIdField: 'id',
      entityLabelField: 'item',
      entityLabelMeta: {
        columnType: ColumnType.enum,
        options: allDeliveryItems.map(({ id, item }) => ({ value: id, display: item })),
        exportFormatter: (deliveryItemId) =>
          allDeliveryItems.find(({ id }) => id === deliveryItemId)?.item || '',
      },
    }),
    [allDeliveryItems],
  );
  const createEntityHistoryColumns = useCreateEntityHistoryColumns({
    removeColumns: ['entity', 'code'],
    identifierColumn,
  });
  const columns = useCreateDataTableColumns<TEntityHistoryDataType>(createEntityHistoryColumns);

  const baseFilter = useMemo<ColumnFilter<TEntityHistoryFieldNames>[]>(
    () => [
      {
        columnId: ViewHistoryFieldDiffSortFields.EntityId,
        operator: FilterOperator.in,
        value: allDeliveryItems?.length
          ? allDeliveryItems.map(({ id }) => id)
          : ['noDeliveryItems'],
      },
      {
        columnId: ViewHistoryFieldDiffSortFields.Field,
        operator: FilterOperator.notIn,
        value: ['id', 'createdAt', 'deletedAt'],
      },
    ],
    [allDeliveryItems],
  );

  const defaultSorting: IDataTableSort<TEntityHistoryFieldNames>[] = useMemo(
    () => [
      {
        id: ViewHistoryFieldDiffSortFields.Date,
        desc: true,
      },
      {
        id: ViewHistoryFieldDiffSortFields.FieldType,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDeliveryItemChangeHistoryDataTableRefetch: triggerDataTableRefetch,
    deliveryItemChangeHistoryDataTableProps: validateDataTableProps<
      TEntityHistoryDataType,
      TEntityHistoryFilterType,
      TEntityHistoryFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InboundDeliveryItemsChangeHistory,
      tableHeader: t('deliveries.deliveryItemsHistory'),
      queryHook: ENTITY_HISTORY_HOOK,
      columns,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useInboundDeliveryItemsChangeHistoryDataTable;
