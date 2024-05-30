import { DeleteOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateCountReviewTasksColumns, {
  TCountReviewTaskDataType,
} from '@/components/Table/hooks/shared-columns/useCreateCountReviewTasksColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import IconButton from '@components/styled/IconButton';

const useDenyCountReviewDataTable = (tasks: TCountReviewTaskDataType[]) => {
  const { t } = useTranslation('components');

  const [data, setData] = useState(tasks);
  const addRemoveTaskAction: TColumnFactory<TCountReviewTaskDataType> = (columnHelper) => {
    return [
      columnHelper.display({
        id: DataTableDisplayColumns.Delete,
        header: '',
        cell: ({ row }) => (
          <Box position="relative" width="100%">
            <IconButton
              onClick={() => {
                setData((_prev) => _prev.filter((_task) => _task.id !== row.original.id));
              }}
              styledVariant="dataGrid"
              size="small"
            >
              <DeleteOutline data-testid="remove-review-task" />
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

  const countReviewTaskColumns = useCreateCountReviewTasksColumns({
    dataTestId: 'deny-counting-review',
    addColumnsToStart: addRemoveTaskAction,
    removeColumns: [
      'taskCode',
      'taskCreatedAt',
      'taskStatus',
      'refCountTaskCode',
      'reviewDuration',
      'refCountTaskCompletedByUserFirstName',
    ],
  });
  const columns = useCreateDataTableColumns(countReviewTaskColumns);

  return {
    selectedTasks: data,
    dataTableProps: validateDataTableProps<TCountReviewTaskDataType>({
      type: 'data',
      tableId: DataTableIds.DenyCountReviewTasks,
      tableHeader: t('common.reviewItems'),
      columns,
      data,
      isDataLoading: false,
    }),
  };
};

export default useDenyCountReviewDataTable;
