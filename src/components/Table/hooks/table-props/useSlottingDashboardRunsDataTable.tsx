import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SlottingRunSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateSlottingRunsColumns, {
  SLOTTING_RUNS_HOOKS,
  TSlottingRunsDataType,
  TSlottingRunsFieldNames,
  TSlottingRunsFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateSlottingRunsColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants, IDataTableSort } from '@/components/Table/types/data-table';
import { FilterOperator, ColumnFilter } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useSlottingDashboardRunsDataTable = (userId?: string) => {
  const { t } = useTranslation('components');
  const { selectedWarehouseId } = useWarehouseUtils();

  const createSlottingRunsColumns = useCreateSlottingRunsColumns({
    dataTestId: 'slotting-dashboard-runs',
  });
  const columns = useCreateDataTableColumns(createSlottingRunsColumns);

  const baseFilter = useMemo<ColumnFilter<TSlottingRunsFieldNames>[]>(
    () =>
      [
        {
          columnId: SlottingRunSortFields.WarehouseId,
          operator: FilterOperator.eq,
          value: selectedWarehouseId,
        },
        {
          columnId: SlottingRunSortFields.Name,
          operator: FilterOperator.neq,
          value: '',
        },
        userId
          ? {
              columnId: SlottingRunSortFields.CreatedByUserId,
              operator: FilterOperator.eq,
              value: userId,
            }
          : null,
      ].filter((v) => !!v),
    [selectedWarehouseId, userId],
  );

  const defaultSorting = useMemo<IDataTableSort<TSlottingRunsFieldNames>[]>(
    () => [
      {
        id: SlottingRunSortFields.DeployedAt,
        desc: true,
      },
      {
        id: SlottingRunSortFields.CreatedAt,
        desc: true,
      },
    ],
    [],
  );

  return {
    dataTableProps: validateDataTableProps<
      TSlottingRunsDataType,
      TSlottingRunsFilterType,
      TSlottingRunsFieldNames
    >({
      type: 'query',
      variant: DataTableVariants.Collapsible,
      tableId: DataTableIds.SlottingDashboardRuns,
      tableHeader: t('common.run', { count: 2 }),
      queryHook: SLOTTING_RUNS_HOOKS,
      perPageOptions: [5],
      disablePagination: true,
      columns,
      baseFilter,
      defaultSorting,
    }),
  };
};

export default useSlottingDashboardRunsDataTable;
