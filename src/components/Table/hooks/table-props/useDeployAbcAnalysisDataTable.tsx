import { useMemo, useState } from 'react';
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
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { FilterOperator, ColumnFilter } from '@components/filter-builder/filter-definitions';

interface IUseRunDeployAbcAnalysisDataTableProps {
  runId: string;
}

const useDeployAbcAnalysisDataTable = ({ runId }: IUseRunDeployAbcAnalysisDataTableProps) => {
  const { t } = useTranslation('components');

  const abcAnalysisColumns = useCreateSlottingAbcAnalysisColumns();
  const columns = useCreateDataTableColumns<TABCAnalysisDataType>(abcAnalysisColumns);

  const { selection, rowSelection } = useDataTableSelection<TABCAnalysisDataType>(
    SelectionType.multi,
    'id',
  );

  const [selectionOverride, setSelectionOverride] = useState<TABCAnalysisDataType[]>([]);
  const handleRemoveApproved = (id: string) => {
    const updatedApprovedAbcAnalysis = selection.filter((abcAnalysis) => abcAnalysis.id !== id);
    setSelectionOverride(updatedApprovedAbcAnalysis);
  };

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
    approvedAbcAnalysis: selection,
    setCurrentlyApprovedAbcAnalysis: setSelectionOverride,
    handleRemoveApproved,
    dataTableProps: validateDataTableProps<
      TABCAnalysisDataType,
      TABCAnalysisFilterType,
      TABCAnalysisFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.RunDeployProposedAbcAnalysis,
      tableHeader: t('slotting.abcDataRecommendations'),
      columns,
      queryHook: ABC_ANALYSIS_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection: {
        ...rowSelection,
        selectionOverride,
      },
    }),
  };
};

export default useDeployAbcAnalysisDataTable;
