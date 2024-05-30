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
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort, RowSelectionEnabledFilter } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';

const useOutboundFulfillmentTasksDataTable = (
  fulfillmentId: string,
  selectionType = SelectionType.multi,
) => {
  const { t } = useTranslation('pages');
  const { selection, clearSelection, rowSelection } = useDataTableSelection<TTasksDataType>(
    selectionType,
    'id',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const createTaskColumns = useCreateTaskColumns({ dataTestId: 'fulfillment-tasks' });
  const columns = useCreateDataTableColumns<TTasksDataType>(createTaskColumns);

  const baseFilter = useMemo<ColumnFilter<TTasksFieldNames>[]>(
    () => [
      {
        columnId: ViewTaskSortFields.DeliveryId,
        operator: FilterOperator.eq,
        value: fulfillmentId,
      },
    ],
    [fulfillmentId],
  );

  const defaultSorting: IDataTableSort<TTasksFieldNames>[] = useMemo(
    () => [
      {
        id: ViewTaskSortFields.TaskStatus,
        desc: true,
      },
      {
        id: ViewTaskSortFields.TaskCode,
        desc: true,
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
    triggerFulfillmentTaskDataTableRefetch: triggerDataTableRefetch,
    fulfillmentTaskDataTableProps: validateDataTableProps<
      TTasksDataType,
      TTasksFilterType,
      TTasksFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.OutboundFulfillmentTasks,
      tableHeader: t('deliveries.fulfillmentTasks'),
      queryHook: TASKS_HOOK,
      columns,
      baseFilter,
      defaultSorting,
      rowSelection: {
        ...rowSelection,
        rowSelectionEnabledFilter,
      },
      refetchTrigger,
    }),
  };
};

export default useOutboundFulfillmentTasksDataTable;
