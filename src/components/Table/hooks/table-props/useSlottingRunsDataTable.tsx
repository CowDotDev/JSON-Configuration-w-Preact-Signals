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
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants, IDataTableSort } from '@/components/Table/types/data-table';
import { FilterOperator, ColumnFilter } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useSlottingRunsDataTable = () => {
  const { t } = useTranslation('components', { keyPrefix: 'slotting' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createSlottingRunsColumns = useCreateSlottingRunsColumns({
    dataTestId: 'slotting-runs',
  });
  const columns = useCreateDataTableColumns(createSlottingRunsColumns);

  const baseFilter = useMemo<ColumnFilter<TSlottingRunsFieldNames>[]>(
    () => [
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
    ],
    [selectedWarehouseId],
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
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<
      TSlottingRunsDataType,
      TSlottingRunsFilterType,
      TSlottingRunsFieldNames
    >({
      type: 'query',
      variant: DataTableVariants.Collapsible,
      tableId: DataTableIds.SlottingRuns,
      tableHeader: t('simulations'),
      queryHook: SLOTTING_RUNS_HOOKS,
      columns,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useSlottingRunsDataTable;
