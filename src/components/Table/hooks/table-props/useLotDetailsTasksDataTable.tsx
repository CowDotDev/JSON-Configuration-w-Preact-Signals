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
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useLotDetailsTasksDataTable = (lotId: string) => {
  const { t } = useTranslation('pages', { keyPrefix: 'lot-details' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const createTaskColumns = useCreateTaskColumns({ dataTestId: 'lot-details-tasks' });
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
            columnId: ViewTaskSortFields.SourceLotId,
            operator: FilterOperator.eq,
            value: lotId,
          },
          {
            columnId: ViewTaskSortFields.DestinationLotId,
            operator: FilterOperator.eq,
            value: lotId,
          },
        ],
      },
    ],
    [lotId, selectedWarehouseId],
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
    lotDetailsTasksDataTableProps: validateDataTableProps<
      TTasksDataType,
      TTasksFilterType,
      TTasksFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.LotDetailsTasks,
      tableHeader: t('lotTasks'),
      columns,
      queryHook: TASKS_HOOK,
      baseFilter,
      defaultSorting,
    }),
  };
};

export default useLotDetailsTasksDataTable;
