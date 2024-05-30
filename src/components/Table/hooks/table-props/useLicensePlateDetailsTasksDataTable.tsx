import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewTaskSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateTaskColumns, {
  TASKS_HOOK,
  TTasksDataType,
  TTasksFieldNames,
  TTasksFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateTaskColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useLicensePlateDetailsTasksDataTable = (licensePlateId: string) => {
  const { t } = useTranslation('pages', { keyPrefix: 'license-plate-details' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createTaskColumns = useCreateTaskColumns({ dataTestId: 'license-plate-details-tasks' });
  const columns = useCreateDataTableColumns<TTasksDataType>(createTaskColumns);

  const baseFilter = useMemo<ColumnFilter<TTasksFieldNames>[]>(
    () => [
      {
        columnId: ViewTaskSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
      {
        or: [
          {
            columnId: ViewTaskSortFields.SourceLicensePlateId,
            operator: FilterOperator.eq,
            value: licensePlateId,
          },
          {
            columnId: ViewTaskSortFields.DestinationLicensePlateId,
            operator: FilterOperator.eq,
            value: licensePlateId,
          },
        ],
      },
    ],
    [licensePlateId, selectedWarehouseId],
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

  return {
    triggerLpDetailsTasksDataTableRefetch: triggerDataTableRefetch,
    lpDetailsTasksDataTableProps: validateDataTableProps<
      TTasksDataType,
      TTasksFilterType,
      TTasksFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.LicensePlateDetailsTasks,
      tableHeader: t('tasks-title'),
      columns,
      queryHook: TASKS_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useLicensePlateDetailsTasksDataTable;
