import { useTranslation } from 'react-i18next';

import { TaskDetailsFragment } from '@/graphql/defs/pages/__generated__/task.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateTaskColumns from '@/components/Table/hooks/shared-columns/useCreateTaskColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';

const useTaskDetailsDataTable = (
  taskDetails: TaskDetailsFragment,
  isLoadingTaskDetails: boolean,
) => {
  const { t } = useTranslation('pages', { keyPrefix: 'tasks' });

  const createTaskColumns = useCreateTaskColumns({ dataTestId: 'task-details' });
  const columns = useCreateDataTableColumns<TaskDetailsFragment>(createTaskColumns);

  return {
    taskDetailsDataTableProps: validateDataTableProps<TaskDetailsFragment>({
      type: 'data',
      tableId: DataTableIds.TaskDetails,
      tableHeader: t('taskItems'),
      columns,
      data: [taskDetails],
      isDataLoading: isLoadingTaskDetails,
    }),
  };
};

export default useTaskDetailsDataTable;
