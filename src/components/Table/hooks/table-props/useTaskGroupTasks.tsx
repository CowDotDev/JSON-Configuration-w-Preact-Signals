import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewTaskSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateTaskColumns, {
  TASKS_HOOK,
  TTasksDataType,
  TTasksFieldNames,
  TTasksFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateTaskColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';

const useTaskGroupTasksDataTable = (taskGroupId: string) => {
  const { t } = useTranslation('pages', { keyPrefix: 'taskGroup' });

  const createTaskColumns = useCreateTaskColumns({
    dataTestId: 'task-group-tasks',
    removeColumns: ['taskGroupId', 'taskGroupCode', 'taskGroupStatus'],
  });
  const columns = useCreateDataTableColumns(createTaskColumns);

  const baseFilter = useMemo<ColumnFilter<TTasksFieldNames>[]>(
    () => [
      {
        columnId: ViewTaskSortFields.TaskGroupId,
        operator: FilterOperator.eq,
        value: taskGroupId,
      },
      {
        columnId: ViewTaskSortFields.IsTaskGroup,
        operator: FilterOperator.is,
        value: false,
      },
    ],
    [taskGroupId],
  );

  const defaultSorting = useMemo<IDataTableSort<TTasksFieldNames>[]>(
    () => [{ id: ViewTaskSortFields.TaskCode, desc: true }],
    [],
  );

  return {
    taskGroupTasksDataTableProps: validateDataTableProps<
      TTasksDataType,
      TTasksFilterType,
      TTasksFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.TaskGroupTasks,
      tableHeader: t('taskGroupTasks'),
      columns,
      queryHook: TASKS_HOOK,
      baseFilter,
      defaultSorting,
    }),
  };
};

export default useTaskGroupTasksDataTable;
