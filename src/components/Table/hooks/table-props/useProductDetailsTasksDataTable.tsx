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
import { useWarehouseUtils } from '@context/warehouse-utils';

const useProductDetailsTasksDataTable = (
  productId: string,
  selectionType = SelectionType.single,
) => {
  const { t } = useTranslation('pages', { keyPrefix: 'product-details' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const { selection, clearSelection, rowSelection } = useDataTableSelection<TTasksDataType>(
    selectionType,
    'id',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const createTaskColumns = useCreateTaskColumns({ dataTestId: 'product-details-tasks' });
  const columns = useCreateDataTableColumns<TTasksDataType>(createTaskColumns);

  const baseFilter = useMemo<ColumnFilter<TTasksFieldNames>[]>(
    () => [
      {
        columnId: ViewTaskSortFields.ProductId,
        operator: FilterOperator.eq,
        value: productId,
      },
      {
        columnId: ViewTaskSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [productId, selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TTasksFieldNames>[]>(
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
    triggerProductDetailsTaskDataTableRefetch: triggerDataTableRefetch,
    productDetailsTaskDataTableProps: validateDataTableProps<
      TTasksDataType,
      TTasksFilterType,
      TTasksFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.ProductDetailsTasks,
      tableHeader: t('productTasks'),
      columns,
      queryHook: TASKS_HOOK,
      baseFilter,
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

export default useProductDetailsTasksDataTable;
