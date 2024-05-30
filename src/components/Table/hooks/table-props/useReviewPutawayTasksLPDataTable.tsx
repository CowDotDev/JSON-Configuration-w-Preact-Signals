import { DeleteOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PutawayTaskDetailsFragment } from '@/graphql/defs/components/modals/__generated__/putaway-task-review-modal.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateReviewPutawayTasksLPColumns, {
  TTaskDataType,
} from '@/components/Table/hooks/shared-columns/useCreateReviewPutawayTasksLPColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import IconButton from '@components/styled/IconButton';

const useReviewPutawayTasksLPDataTable = (
  tasks: PutawayTaskDetailsFragment[],
  handleRemoveTask?: (id: string) => void,
) => {
  const { t } = useTranslation('components');

  const [data, setData] = useState(tasks);

  const addRemoveTaskAction: TColumnFactory<TTaskDataType> = (columnHelper) => {
    return [
      columnHelper.display({
        id: DataTableDisplayColumns.Delete,
        header: '',
        cell: ({ row }) => (
          <Box position="relative" width="100%">
            <IconButton
              onClick={() => {
                handleRemoveTask(row.original.taskId);

                setData((_prev) => _prev.filter((_data) => _data.taskId !== row.original.taskId));
              }}
              styledVariant="dataGrid"
              size="small"
            >
              <DeleteOutline data-testid="remove-approved-abc-analysis" />
            </IconButton>
          </Box>
        ),
        size: 40,
        enableColumnFilter: false,
        enableHiding: false,
        enableResizing: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
    ];
  };

  const createReviewPutawayTasksColumns = useCreateReviewPutawayTasksLPColumns({
    dataTestId: 'review-putaway-tasks-lp',
    addColumnsToStart: addRemoveTaskAction,
  });
  const columns = useCreateDataTableColumns<TTaskDataType>(createReviewPutawayTasksColumns);

  useEffect(() => {
    setData(tasks);
  }, [tasks]);

  return {
    selectedTasks: data,
    dataTableProps: validateDataTableProps<TTaskDataType>({
      type: 'data',
      tableId: DataTableIds.LicensePlateReviewPutawayTasks,
      tableHeader: t('licensePlateActions.putaway.review.putawayTasks'),
      columns,
      data,
      isDataLoading: false,
    }),
  };
};

export default useReviewPutawayTasksLPDataTable;
