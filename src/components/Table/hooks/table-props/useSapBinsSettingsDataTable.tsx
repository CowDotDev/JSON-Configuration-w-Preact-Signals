import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewSapBinFfAreaSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateSapBinsColumns, {
  SAP_BINS_LAZY_HOOK,
  TSapBinsDataType,
  TSapBinsFieldNames,
  TSapBinsFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateSapBinsColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useSapBinSettingsDataTable = () => {
  const { t: tP } = useTranslation('pages', { keyPrefix: 'settings.inventory-integration' });
  const { selectedWarehouse } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createSapBinFFAreasColumns = useCreateSapBinsColumns({
    dataTestId: 'sap-bin-ff-areas-settings',
    triggerDataTableRefetch,
  });
  const columns = useCreateDataTableColumns(createSapBinFFAreasColumns);

  const baseFilter = useMemo<ColumnFilter<TSapBinsFieldNames>[]>(
    () => [
      {
        columnId: ViewSapBinFfAreaSortFields.SystemConnectionId,
        operator: FilterOperator.eq,
        value: selectedWarehouse?.systemConnection?.id,
      },
      {
        columnId: ViewSapBinFfAreaSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouse?.id,
      },
    ],
    [selectedWarehouse],
  );

  const defaultSorting = useMemo<IDataTableSort<TSapBinsFieldNames>[]>(
    () => [
      {
        id: ViewSapBinFfAreaSortFields.SapBinCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<
      TSapBinsDataType,
      TSapBinsFilterType,
      TSapBinsFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.SapBinSettings,
      tableHeader: tP('areasMapping.title'),
      columns,
      queryHook: SAP_BINS_LAZY_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useSapBinSettingsDataTable;
