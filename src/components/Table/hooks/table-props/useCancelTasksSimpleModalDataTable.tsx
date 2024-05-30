import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateTaskColumns from '@/components/Table/hooks/shared-columns/useCreateTaskColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';

interface ISimpleTaskDataType {
  __typename?: 'ViewTask';
  id: string;
  taskCode: string;
}

const useCancelTasksSimpleModalDataTable = (tasks: ISimpleTaskDataType[]) => {
  const createCountInventoryColumns = useCreateTaskColumns({
    dataTestId: 'cancel-tasks-simple',
    disableDeepLinks: true,
    removeColumns: [
      'taskType',
      'taskTypeReferenceCategory',
      'taskStatus',
      'taskGroupCode',
      'taskGroupStatus',
      'teamName',
      'dueDate',
      'createdAt',
      'productCode',
      'unitOfMeasure',
      'quantity',
      'completionDate',
      'updatedAt',
      'sourceBinCode',
      'sourceAreaCode',
      'sourceStatus',
      'sourceLotCode',
      'sourceLicensePlateCode',
      'sourceLicensePlateDescription',
      'destinationBinCode',
      'destinationAreaCode',
      'destinationStatus',
      'destinationLotCode',
      'destinationLicensePlateCode',
      'destinationLicensePlateDescription',
    ],
  }) as TColumnFactory<ISimpleTaskDataType>;
  const columns = useCreateDataTableColumns<ISimpleTaskDataType>(createCountInventoryColumns);

  return {
    dataTableProps: validateDataTableProps<ISimpleTaskDataType>({
      type: 'data',
      tableId: DataTableIds.CancelTasks,
      columns,
      data: tasks,
      isDataLoading: false,
    }),
  };
};

export default useCancelTasksSimpleModalDataTable;
