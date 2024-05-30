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

const useDatasetAdditionalRunsDataTable = (datasetId: string) => {
  const { t: tP } = useTranslation('pages', { keyPrefix: 'dataset-run-summaries' });

  const [refetchTrigger, triggerRefetch] = useTriggerDataTableRefetch();

  const createSlottingRunsColumns = useCreateSlottingRunsColumns({
    dataTestId: 'dataset-additional-runs',
    removeColumns: ['dataset_name', 'status', 'variant'],
  });
  const columns = useCreateDataTableColumns(createSlottingRunsColumns);

  const baseFilter = useMemo<ColumnFilter<TSlottingRunsFieldNames>[]>(
    () => [
      {
        columnId: SlottingRunSortFields.DatasetId,
        operator: FilterOperator.eq,
        value: datasetId,
      },
    ],
    [datasetId],
  );

  // TODO: Update DeployedAt to UpdatedAt when available
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
    triggerRefetch,
    dataTableProps: validateDataTableProps<
      TSlottingRunsDataType,
      TSlottingRunsFilterType,
      TSlottingRunsFieldNames
    >({
      type: 'query',
      variant: DataTableVariants.Collapsible,
      tableId: DataTableIds.DatasetAdditionalRuns,
      tableHeader: tP('additionalRuns'),
      queryHook: SLOTTING_RUNS_HOOKS,
      columns,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useDatasetAdditionalRunsDataTable;
