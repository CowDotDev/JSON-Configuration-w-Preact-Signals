import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewHistoryFieldDiffSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateEntityHistoryColumns, {
  TEntityHistoryDataType,
  TEntityHistoryFilterType,
  TEntityHistoryFieldNames,
  ENTITY_HISTORY_HOOK,
} from '@/components/Table/hooks/shared-columns/useCreateEntityHistoryColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';

const useBinSizeChangeHistoryDataTable = (binSizeId: string) => {
  const { t: tP } = useTranslation('pages', { keyPrefix: 'bin-size-details' });

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createEntityHistoryColumns = useCreateEntityHistoryColumns({
    removeColumns: ['entity', 'code'],
  });
  const columns = useCreateDataTableColumns<TEntityHistoryDataType>(createEntityHistoryColumns);

  const baseFilter = useMemo<ColumnFilter<TEntityHistoryFieldNames>[]>(
    () => [
      {
        columnId: ViewHistoryFieldDiffSortFields.EntityId,
        operator: FilterOperator.eq,
        value: binSizeId,
      },
      {
        columnId: ViewHistoryFieldDiffSortFields.Field,
        operator: FilterOperator.notIn,
        value: ['id', 'createdAt', 'deletedAt'],
      },
    ],
    [binSizeId],
  );

  const defaultSorting: IDataTableSort<TEntityHistoryFieldNames>[] = useMemo(
    () => [
      {
        id: ViewHistoryFieldDiffSortFields.Date,
        desc: true,
      },
      {
        id: ViewHistoryFieldDiffSortFields.FieldType,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerBinHistoryDataTableRefetch: triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<
      TEntityHistoryDataType,
      TEntityHistoryFilterType,
      TEntityHistoryFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.BinSizeChangeHistory,
      tableHeader: tP('changeHistory'),
      queryHook: ENTITY_HISTORY_HOOK,
      columns,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useBinSizeChangeHistoryDataTable;
