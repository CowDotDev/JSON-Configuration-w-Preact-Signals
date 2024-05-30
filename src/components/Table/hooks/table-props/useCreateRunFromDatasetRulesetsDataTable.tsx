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
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useCreateRunFromDatasetRulesetsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'rulesets' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const { selection, rowSelection } = useDataTableSelection<TRulesetsDataType>(
    SelectionType.single,
    'id',
  );

  const createRulesetColumns = useCreateRulesetColumns();
  const columns = useCreateDataTableColumns(createRulesetColumns);

  const baseFilter = useMemo<ColumnFilter<TRulesetsFieldNames>[]>(
    () => [
      {
        columnId: ViewSlottingRulesetSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

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
    selectedRulesets: selection,
    dataTableProps: validateDataTableProps<
      TRulesetsDataType,
      TRulesetsFilterType,
      TRulesetsFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.CreateRunFromDatasetRulesets,
      tableHeader: t('title'),
      columns,
      queryHook: RULE_SETS_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection,
    }),
  };
};

export default useCreateRunFromDatasetRulesetsDataTable;
