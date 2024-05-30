import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ApproveBinCountTaskQueryModelSortFields, TaskStatus } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateCountReviewTasksColumns, {
  COUNT_REVIEW_TASKS_HOOK,
  TCountReviewTaskDataType,
  TCountReviewTaskFieldNames,
  TCountReviewTaskFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateCountReviewTasksColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useInventoryCountingReviewDataTable = () => {
  const { t } = useTranslation('pages');
  const { selectedWarehouseId } = useWarehouseUtils();

  const { selection, clearSelection, rowSelection } =
    useDataTableSelection<TCountReviewTaskDataType>(SelectionType.multi, 'id');
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const countReviewTaskColumns = useCreateCountReviewTasksColumns({
    dataTestId: 'inventory-counting-review',
  });
  const columns = useCreateDataTableColumns(countReviewTaskColumns);

  const baseFilter = useMemo<ColumnFilter<TCountReviewTaskFieldNames>[]>(
    () => [
      {
        columnId: ApproveBinCountTaskQueryModelSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
      {
        columnId: ApproveBinCountTaskQueryModelSortFields.TaskStatus,
        operator: FilterOperator.notIn,
        value: [TaskStatus.Complete, TaskStatus.Cancelled],
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TCountReviewTaskFieldNames>[]>(
    () => [
      {
        id: ApproveBinCountTaskQueryModelSortFields.TaskCreatedAt,
        desc: false,
      },
    ],
    [],
  );

  return {
    selectedTasks: selection,
    triggerCountInventoryDataTableRefetch: triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<
      TCountReviewTaskDataType,
      TCountReviewTaskFilterType,
      TCountReviewTaskFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InventoryCountingReview,
      tableHeader: t(`inventory.counting.countReviewTasks`),
      columns,
      queryHook: COUNT_REVIEW_TASKS_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection,
      refetchTrigger,
    }),
  };
};

export default useInventoryCountingReviewDataTable;
