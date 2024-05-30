import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewHistoryFieldDiffSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateEntityHistoryColumns, {
  ENTITY_HISTORY_HOOK,
  TEntityHistoryDataType,
  TEntityHistoryFieldNames,
  TEntityHistoryFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateEntityHistoryColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';

const useOutboundFulfillmentChangeHistoryDataTable = (fulfillmentId: string) => {
  const { t } = useTranslation('pages');

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createEntityHistoryColumns = useCreateEntityHistoryColumns({
    removeColumns: ['entity', 'code'],
  });
  const columns = useCreateDataTableColumns<TEntityHistoryDataType>(createEntityHistoryColumns);

  const baseFilter = useMemo<ColumnFilter<TEntityHistoryFieldNames>[]>(
    () => [
      {
        columnId: ViewHistoryFieldDiffSortFields.EntityId,
        operator: FilterOperator.eq,
        value: fulfillmentId,
      },
      {
        columnId: ViewHistoryFieldDiffSortFields.Field,
        operator: FilterOperator.notIn,
        value: ['id', 'createdAt', 'deletedAt'],
      },
    ],
    [fulfillmentId],
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
    triggerFulfillmentChangeHistoryDataTableRefetch: triggerDataTableRefetch,
    fulfillmentChangeHistoryDataTableProps: validateDataTableProps<
      TEntityHistoryDataType,
      TEntityHistoryFilterType,
      TEntityHistoryFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.OutboundFulfillmentChangeHistory,
      tableHeader: t('deliveries.fulfillmentDataHistory'),
      queryHook: ENTITY_HISTORY_HOOK,
      columns,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useOutboundFulfillmentChangeHistoryDataTable;
