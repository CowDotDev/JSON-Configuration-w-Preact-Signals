import { useMemo } from 'react';
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
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants, IDataTableSort } from '@/components/Table/types/data-table';
import { removeSwapColumns } from '@/components/Table/utils';
import { FilterOperator, ColumnFilter } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useRearrangementRecommendationDataTable = ({ runId }) => {
  const { t } = useTranslation('components');
  const { selectedWarehouseId } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();
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

  const removeColumns = removeSwapColumns<(keyof TRearrangementRecommendationDataType)[]>(
    slottingConfiguration?.configuration?.showSwaps,
  );

  const rearrangementRecommendationColumns = useCreateRearrangementRecommendationColumns({
    removeColumns,
  });
  const columns = useCreateDataTableColumns<TRearrangementRecommendationDataType>(
    rearrangementRecommendationColumns,
  );

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
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<
      TRearrangementRecommendationDataType,
      TRearrangementRecommendationFilterType,
      TRearrangementRecommendationFieldNames
    >({
      type: 'query',
      variant: DataTableVariants.Collapsible,
      tableId: DataTableIds.RearrangementRecommendation,
      tableHeader: t('slotting.rearrangementRecommendations'),
      columns,
      queryHook: REARRANGEMENT_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useRearrangementRecommendationDataTable;
