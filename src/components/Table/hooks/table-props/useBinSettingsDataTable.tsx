import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewBinSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateBinColumns, {
  BINS_LAZY_HOOK,
  TBinsDataType,
  TBinsFieldNames,
  TBinsFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateBinColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useBinSettingsDataTable = () => {
  const { t: tP } = useTranslation('pages', { keyPrefix: 'settings.bin-settings' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const { selection, clearSelection, rowSelection } = useDataTableSelection<TBinsDataType>(
    SelectionType.multi,
    'id',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const createBinColumns = useCreateBinColumns({
    dataTestId: 'bin-settings',
    triggerDataTableRefetch,
    allowEdit: true,
  });
  const columns = useCreateDataTableColumns(createBinColumns);

  const baseFilter = useMemo<ColumnFilter<TBinsFieldNames>[]>(
    () => [
      {
        columnId: ViewBinSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TBinsFieldNames>[]>(
    () => [
      {
        id: ViewBinSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    selectedBins: selection,
    clearSelectedBins: clearSelection,
    dataTableProps: validateDataTableProps<TBinsDataType, TBinsFilterType, TBinsFieldNames>({
      type: 'query',
      tableId: DataTableIds.BinSettings,
      tableHeader: tP('title'),
      columns,
      queryHook: BINS_LAZY_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection,
      refetchTrigger,
    }),
  };
};

export default useBinSettingsDataTable;
