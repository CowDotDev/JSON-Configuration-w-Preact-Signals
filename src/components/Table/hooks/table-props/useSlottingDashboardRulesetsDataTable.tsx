import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewSlottingRulesetSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateRulesetColumns, {
  RULE_SETS_HOOK,
  TRulesetsDataType,
  TRulesetsFieldNames,
  TRulesetsFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateRulesetColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants, IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useSlottingDashboardRulesetsDataTable = (userId?: string) => {
  const { t } = useTranslation('pages', { keyPrefix: 'rulesets' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const createRulesetColumns = useCreateRulesetColumns();
  const columns = useCreateDataTableColumns(createRulesetColumns);

  const baseFilter = useMemo<ColumnFilter<TRulesetsFieldNames>[]>(() => {
    return [
      userId
        ? {
            columnId: ViewSlottingRulesetSortFields.CreatedByUserId,
            operator: FilterOperator.eq,
            value: userId,
          }
        : null,
      {
        columnId: ViewSlottingRulesetSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ].filter((v) => !!v);
  }, [selectedWarehouseId, userId]);

  const defaultSorting = useMemo<IDataTableSort<TRulesetsFieldNames>[]>(
    () => [
      {
        id: ViewSlottingRulesetSortFields.LastUpdated,
        desc: true,
      },
    ],
    [],
  );

  return {
    dataTableProps: validateDataTableProps<
      TRulesetsDataType,
      TRulesetsFilterType,
      TRulesetsFieldNames
    >({
      type: 'query',
      variant: DataTableVariants.Collapsible,
      tableId: DataTableIds.SlottingDashboardRuleSets,
      tableHeader: t('title'),
      columns,
      queryHook: RULE_SETS_HOOK,
      baseFilter,
      defaultSorting,
    }),
  };
};

export default useSlottingDashboardRulesetsDataTable;
