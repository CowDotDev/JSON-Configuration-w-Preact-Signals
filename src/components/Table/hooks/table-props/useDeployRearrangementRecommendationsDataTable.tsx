import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSlottingConfigurationsQuery } from '@/graphql/defs/list/__generated__/list-slotting-configuration.generated';
import { SlottingConfigurations_defaultData } from '@/graphql/defs/list/list-slotting-configuration';
import { RearrangementRecommendationSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateRearrangementRecommendationColumns, {
  REARRANGEMENT_HOOK,
  TRearrangementRecommendationDataType,
  TRearrangementRecommendationFieldNames,
  TRearrangementRecommendationFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateRearrangementRecommendationColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { removeSwapColumns } from '@/components/Table/utils';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

interface IUseRearrangementRecommendationsDataTableProps {
  runId: string;
}

const useDeployRearrangementRecommendationsDataTable = ({
  runId,
}: IUseRearrangementRecommendationsDataTableProps) => {
  const { t } = useTranslation('components');
  const { selectedWarehouseId } = useWarehouseUtils();

  const {
    data: {
      slottingConfigurations: {
        slottingConfigurations: [slottingConfiguration],
      },
    } = SlottingConfigurations_defaultData,
  } = useSlottingConfigurationsQuery({
    variables: {
      filter: {
        warehouseId: {
          eq: selectedWarehouseId,
        },
      },
    },
  });

  const removeColumns = useMemo(
    () =>
      removeSwapColumns<(keyof TRearrangementRecommendationDataType)[]>(
        slottingConfiguration?.configuration?.showSwaps,
      ),
    [slottingConfiguration?.configuration?.showSwaps],
  );

  const rearrangementRecommendationColumns = useCreateRearrangementRecommendationColumns({
    removeColumns,
  });
  const columns = useCreateDataTableColumns<TRearrangementRecommendationDataType>(
    rearrangementRecommendationColumns,
  );

  const { selection, rowSelection } = useDataTableSelection<TRearrangementRecommendationDataType>(
    SelectionType.multi,
    'id',
  );

  const [selectionOverride, setSelectionOverride] = useState<
    TRearrangementRecommendationDataType[]
  >([]);
  const handleRemoveApproved = (id: string) => {
    const updatedApprovedMovements = selection.filter((movement) => movement.id !== id);
    setSelectionOverride(updatedApprovedMovements);
  };

  const baseFilter = useMemo<ColumnFilter<TRearrangementRecommendationFieldNames>[]>(
    () => [
      {
        columnId: RearrangementRecommendationSortFields.RunId,
        operator: FilterOperator.eq,
        value: runId,
      },
    ],
    [runId],
  );

  const defaultSorting = useMemo<IDataTableSort<TRearrangementRecommendationFieldNames>[]>(
    () => [
      {
        id: RearrangementRecommendationSortFields.SourceBin,
        desc: false,
      },
    ],
    [],
  );

  return {
    approvedRecommendations: selection,
    setCurrentlyApprovedRecommendations: setSelectionOverride,
    handleRemoveApproved,
    dataTableProps: validateDataTableProps<
      TRearrangementRecommendationDataType,
      TRearrangementRecommendationFilterType,
      TRearrangementRecommendationFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.DeployRearrangementRecommendations,
      tableHeader: t('slotting.rearrangementRecommendations'),
      columns,
      queryHook: REARRANGEMENT_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection: {
        ...rowSelection,
        selectionOverride,
      },
    }),
  };
};

export default useDeployRearrangementRecommendationsDataTable;
