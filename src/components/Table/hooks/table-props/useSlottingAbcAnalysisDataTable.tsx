import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SlottingAbcAnalysisSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateSlottingAbcAnalysisColumns, {
  ABC_ANALYSIS_HOOK,
  TABCAnalysisDataType,
  TABCAnalysisFieldNames,
  TABCAnalysisFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateSlottingAbcAnalysisColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants, IDataTableSort } from '@/components/Table/types/data-table';
import { FilterOperator, ColumnFilter } from '@components/filter-builder/filter-definitions';

const useSlottingAbcAnalysisDataTable = ({ runId }) => {
  const { t } = useTranslation('components');

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const abcAnalysisColumns = useCreateSlottingAbcAnalysisColumns();
  const columns = useCreateDataTableColumns<TABCAnalysisDataType>(abcAnalysisColumns);

  const baseFilter = useMemo<ColumnFilter<TABCAnalysisFieldNames>[]>(
    () => [
      {
        columnId: SlottingAbcAnalysisSortFields.RunId,
        operator: FilterOperator.eq,
        value: runId,
      },
    ],
    [runId],
  );

  const defaultSorting = useMemo<IDataTableSort<TABCAnalysisFieldNames>[]>(
    () => [
      {
        id: SlottingAbcAnalysisSortFields.Deployed,
        desc: true,
      },
      {
        id: SlottingAbcAnalysisSortFields.CurrentAbcIndicator,
        desc: false,
      },
      {
        id: SlottingAbcAnalysisSortFields.Material,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<
      TABCAnalysisDataType,
      TABCAnalysisFilterType,
      TABCAnalysisFieldNames
    >({
      type: 'query',
      variant: DataTableVariants.Collapsible,
      tableId: DataTableIds.SlottingAbcAnalysis,
      tableHeader: t('slotting.abcDataRecommendations'),
      columns,
      queryHook: ABC_ANALYSIS_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useSlottingAbcAnalysisDataTable;
