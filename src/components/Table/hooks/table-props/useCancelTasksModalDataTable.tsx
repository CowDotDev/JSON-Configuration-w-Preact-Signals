import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateTaskColumns, {
  TTasksDataType,
} from '@/components/Table/hooks/shared-columns/useCreateTaskColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';

const useCancelTasksModalDataTable = (tasks: TTasksDataType[]) => {
  const createCountInventoryColumns = useCreateTaskColumns({
    dataTestId: 'cancel-tasks',
    disableDeepLinks: true,
    removeColumns: [
      'taskTypeReferenceCategory',
      'productCode',
      'unitOfMeasure',
      'quantity',
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
  });
  const columns = useCreateDataTableColumns<TTasksDataType>(createCountInventoryColumns);

  return {
    dataTableProps: validateDataTableProps<TTasksDataType>({
      type: 'data',
      tableId: DataTableIds.CancelTasks,
      columns,
      data: tasks,
      isDataLoading: false,
    }),
  };
};

export default useCancelTasksModalDataTable;
