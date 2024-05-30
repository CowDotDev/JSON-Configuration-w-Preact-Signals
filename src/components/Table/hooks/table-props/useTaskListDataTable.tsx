import { DateTime } from 'luxon';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { TaskStatus, ViewTaskSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateTaskColumns, {
  TASKS_HOOK,
  TTasksDataType,
  TTasksFieldNames,
  TTasksFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateTaskColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useCreateLinkedDateRangeFilter from '@/components/Table/hooks/useCreateLinkedDateRangeFilter';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort, RowSelectionEnabledFilter } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useTaskListDataTable = (
  linkedDateRange: [DateTime, DateTime],
  selectionType = SelectionType.multi,
) => {
  const { t } = useTranslation('pages', { keyPrefix: 'tasks' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const { selection, clearSelection, rowSelection } = useDataTableSelection<TTasksDataType>(
    selectionType,
    'id',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const createTaskColumns = useCreateTaskColumns({ dataTestId: 'task-list' });
  const columns = useCreateDataTableColumns<TTasksDataType>(createTaskColumns);

  const baseFilter = useMemo<ColumnFilter<TTasksFieldNames>[]>(
    () => [
      {
        columnId: ViewTaskSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const linkedFilter = useCreateLinkedDateRangeFilter<TTasksFieldNames>(
    ViewTaskSortFields.DueDate,
    linkedDateRange,
  );

  const defaultSorting = useMemo<IDataTableSort<TTasksFieldNames>[]>(
    () => [
      {
        id: ViewTaskSortFields.DueDate,
        desc: false,
      },
    ],
    [],
  );

  const rowSelectionEnabledFilter = useCallback<RowSelectionEnabledFilter<TTasksDataType>>(
    (row) => row.original.taskStatus === TaskStatus.NotStarted,
    [],
  );

  return {
    selectedTasks: selection,
    triggerTaskListDataTableRefetch: triggerDataTableRefetch,
    taskListDataTableProps: validateDataTableProps<
      TTasksDataType,
      TTasksFilterType,
      TTasksFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.TaskList,
      tableHeader: t('title'),
      columns,
      queryHook: TASKS_HOOK,
      baseFilter,
      linkedFilter,
      defaultSorting,
      rowSelection: {
        selectionType,
        ...rowSelection,
        rowSelectionEnabledFilter,
      },
      refetchTrigger,
    }),
  };
};

export default useTaskListDataTable;
