import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { TaskStatus, ViewTaskSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateTaskColumns, {
  TASKS_HOOK,
  TTasksDataType,
  TTasksFilterType,
  TTasksFieldNames,
} from '@/components/Table/hooks/shared-columns/useCreateTaskColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort, RowSelectionEnabledFilter } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';

const useBinDetailsTasksDataTable = (binId: string, selectionType = SelectionType.single) => {
  const { t } = useTranslation('pages', { keyPrefix: 'bin-details' });
  const { selection, clearSelection, rowSelection } = useDataTableSelection<TTasksDataType>(
    selectionType,
    'id',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const createTaskColumns = useCreateTaskColumns({ dataTestId: 'bin-tasks' });
  const columns = useCreateDataTableColumns(createTaskColumns);

  const baseFilter = useMemo<ColumnFilter<TTasksFieldNames>[]>(
    () => [
      {
        or: [
          {
            columnId: ViewTaskSortFields.SourceBinId,
            operator: FilterOperator.eq,
            value: binId,
          },
          {
            columnId: ViewTaskSortFields.DestinationBinId,
            operator: FilterOperator.eq,
            value: binId,
          },
        ],
      },
    ],
    [binId],
  );

  const defaultSorting: IDataTableSort<TTasksFieldNames>[] = useMemo(
    () => [
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
    triggerBinTasksDataTableRefetch: triggerDataTableRefetch,
    binTasksDataTableProps: validateDataTableProps<
      TTasksDataType,
      TTasksFilterType,
      TTasksFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.BinDetailsTasks,
      tableHeader: t('binTasks'),
      columns,
      queryHook: TASKS_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
      rowSelection: {
        ...rowSelection,
        rowSelectionEnabledFilter,
      },
    }),
  };
};

export default useBinDetailsTasksDataTable;
