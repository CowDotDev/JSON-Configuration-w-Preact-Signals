import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { BinActiveState, ViewBinSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateCountingInventoryColumns, {
  COUNT_INV_HOOK,
  TCountInvDataType,
  TCountInvFieldNames,
  TCountInvFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateCountingInventoryColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useInventoryCountingBinsDataTable = () => {
  const { t } = useTranslation('pages');
  const { selectedWarehouseId } = useWarehouseUtils();

  const { selection, clearSelection, rowSelection } = useDataTableSelection<TCountInvDataType>(
    SelectionType.multi,
    'id',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const createCountInventoryColumns = useCreateCountingInventoryColumns({
    dataTestId: 'bin-count',
  });
  const columns = useCreateDataTableColumns<TCountInvDataType>(createCountInventoryColumns);

  const baseFilter = useMemo<ColumnFilter<TCountInvFieldNames>[]>(
    () => [
      {
        columnId: ViewBinSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
      {
        columnId: ViewBinSortFields.Inactive,
        operator: FilterOperator.eq,
        value: BinActiveState.Active,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TCountInvFieldNames>[]>(
    () => [
      {
        id: ViewBinSortFields.LastCount,
        desc: false,
      },
      {
        id: ViewBinSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    selectedBins: selection,
    triggerCountInventoryDataTableRefetch: triggerDataTableRefetch,
    countInventoryDataTableProps: validateDataTableProps<
      TCountInvDataType,
      TCountInvFilterType,
      TCountInvFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InventoryCountingBins,
      tableHeader: t(`inventory.counting.binLevelCounting`),
      columns,
      queryHook: COUNT_INV_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection,
      refetchTrigger,
    }),
  };
};

export default useInventoryCountingBinsDataTable;
