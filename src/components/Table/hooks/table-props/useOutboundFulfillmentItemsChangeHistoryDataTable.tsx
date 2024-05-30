import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ChangeHistoryFulfillmentItemFragment,
  useGetAllFulfillmentItemsForChangeHistoryQuery,
} from '@/graphql/defs/hooks/table-props/__generated__/useOutboundFulfillmentItemsChangeHistoryDataTable.generated';
import { ViewHistoryFieldDiffSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateEntityHistoryColumns, {
  IIdentifierColumn,
  TEntityHistoryDataType,
  TEntityHistoryFieldNames,
  TEntityHistoryFilterType,
  ENTITY_HISTORY_HOOK,
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
import { useSnackbar } from '@context/snackbar';

const useOutboundFulfillmentItemsChangeHistoryDataTable = (fulfillmentId: string) => {
  const { t } = useTranslation('pages');
  const { showMessage } = useSnackbar();

  const [allFulfillmentItems, setAllFulfillmentItems] = useState<
    ChangeHistoryFulfillmentItemFragment[]
  >([]);
  useGetAllFulfillmentItemsForChangeHistoryQuery({
    variables: {
      fulfillmentId,
    },
    onCompleted: ({ fulfillmentItems: { nodes: _allFulfillmentItems } }) => {
      setAllFulfillmentItems(_allFulfillmentItems);
    },
    onError: (error) => {
      showMessage({ type: 'error', message: error.message });
    },
  });

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const identifierColumn = useMemo<IIdentifierColumn<ChangeHistoryFulfillmentItemFragment>>(
    () => ({
      columnHeader: t('deliveries.item'),
      entityDefs: allFulfillmentItems,
      entityIdField: 'id',
      entityLabelField: 'item',
      entityLabelMeta: {
        columnType: ColumnType.enum,
        options: allFulfillmentItems.map(({ id, item }) => ({ value: id, display: item })),
        exportFormatter: (deliveryItemId) =>
          allFulfillmentItems.find(({ id }) => id === deliveryItemId)?.item || '',
      },
    }),
    [allFulfillmentItems],
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
        value: allFulfillmentItems?.length
          ? allFulfillmentItems.map(({ id }) => id)
          : ['noFulfillmentItems'],
      },
      {
        columnId: ViewHistoryFieldDiffSortFields.Field,
        operator: FilterOperator.notIn,
        value: ['id', 'createdAt', 'deletedAt'],
      },
    ],
    [allFulfillmentItems],
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
    triggerFulfillmentItemChangeHistoryDataTableRefetch: triggerDataTableRefetch,
    fulfillmentItemChangeHistoryDataTableProps: validateDataTableProps<
      TEntityHistoryDataType,
      TEntityHistoryFilterType,
      TEntityHistoryFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InboundDeliveryItemsChangeHistory,
      tableHeader: t('deliveries.fulfillmentItemsHistory'),
      queryHook: ENTITY_HISTORY_HOOK,
      columns,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useOutboundFulfillmentItemsChangeHistoryDataTable;
