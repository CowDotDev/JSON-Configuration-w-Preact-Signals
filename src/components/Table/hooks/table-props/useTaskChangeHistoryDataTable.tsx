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

const useTaskChangeHistoryDataTable = (taskId: string) => {
  const { t } = useTranslation('pages', { keyPrefix: 'tasks' });

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createChangeHistoryColumns = useCreateEntityHistoryColumns({
    removeColumns: ['entity', 'code'],
  });
  const columns = useCreateDataTableColumns<TEntityHistoryDataType>(createChangeHistoryColumns);

  const baseFilter = useMemo<ColumnFilter<TEntityHistoryFieldNames>[]>(
    () => [
      {
        columnId: ViewHistoryFieldDiffSortFields.EntityId,
        operator: FilterOperator.eq,
        value: taskId,
      },
      {
        columnId: ViewHistoryFieldDiffSortFields.Field,
        operator: FilterOperator.notIn,
        value: ['readonly', 'visible', 'id', 'metaData', 'createdAt', 'deletedAt'],
      },
    ],
    [taskId],
  );

  const defaultSorting = useMemo<IDataTableSort<TEntityHistoryFieldNames>[]>(
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
    triggerTaskChangeHistoryDataTableRefetch: triggerDataTableRefetch,
    taskChangeHistoryDataTableProps: validateDataTableProps<
      TEntityHistoryDataType,
      TEntityHistoryFilterType,
      TEntityHistoryFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.TaskChangeHistory,
      tableHeader: t('taskHistory'),
      columns,
      queryHook: ENTITY_HISTORY_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useTaskChangeHistoryDataTable;
