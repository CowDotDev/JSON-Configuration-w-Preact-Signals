import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SlottingDataFrameSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDatasetChangeLogColumns, {
  DATAFRAMES_HOOK,
  TDataFramesDataType,
  TDataFramesFieldNames,
  TDataFramesFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateDatasetChangeLogColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useDatasetsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'datasets' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createDatasetColumns = useCreateDatasetChangeLogColumns();
  const columns = useCreateDataTableColumns(createDatasetColumns);

  const baseFilter = useMemo<ColumnFilter<TDataFramesFieldNames>[]>(
    () => [
      {
        columnId: SlottingDataFrameSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<
      TDataFramesDataType,
      TDataFramesFilterType,
      TDataFramesFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.Datasets,
      tableHeader: t('datasetChangeLog'),
      columns,
      baseFilter,
      queryHook: DATAFRAMES_HOOK,
      refetchTrigger,
    }),
  };
};

export default useDatasetsDataTable;
