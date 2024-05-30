import { useMemo } from 'react';
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
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { TaskTypeCode } from '@constants/task-type-config';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useInventoryCountingTasksDataTable = () => {
  const { t } = useTranslation('pages');
  const { selectedWarehouseId } = useWarehouseUtils();

  const { selection, clearSelection, rowSelection } = useDataTableSelection<TTasksDataType>(
    SelectionType.multi,
    'id',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const createCountInventoryColumns = useCreateTaskColumns({
    dataTestId: 'bin-count-tasks',
    removeColumns: [
      'taskTypeReferenceCategory',
      'productCode',
      'unitOfMeasure',
      'quantity',
      'sourceStatus',
      'sourceLotCode',
      'sourceLicensePlateCode',
      'sourceLicensePlateDescription',
      'destinationStatus',
      'destinationLotCode',
      'destinationLicensePlateCode',
      'destinationLicensePlateDescription',
    ],
  });
  const columns = useCreateDataTableColumns<TTasksDataType>(createCountInventoryColumns);

  const baseFilter = useMemo<ColumnFilter<TTasksFieldNames>[]>(
    () => [
      {
        columnId: ViewTaskSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
      {
        columnId: ViewTaskSortFields.TaskTypeCode,
        operator: FilterOperator.eq,
        value: TaskTypeCode.countBin,
      },
      {
        columnId: ViewTaskSortFields.TaskStatus,
        operator: FilterOperator.notIn,
        value: [TaskStatus.Complete, TaskStatus.Cancelled],
      },
    ],
    [selectedWarehouseId],
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

  return {
    selectedTasks: selection,
    triggerCountInventoryDataTableRefetch: triggerDataTableRefetch,
    countInventoryDataTableProps: validateDataTableProps<
      TTasksDataType,
      TTasksFilterType,
      TTasksFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InventoryCountingTasks,
      tableHeader: t(`inventory.counting.countTasks`),
      columns,
      queryHook: TASKS_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection,
      refetchTrigger,
    }),
  };
};

export default useInventoryCountingTasksDataTable;
