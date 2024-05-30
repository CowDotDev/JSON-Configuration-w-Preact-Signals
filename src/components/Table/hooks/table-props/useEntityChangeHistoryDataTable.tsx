import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewHistoryFieldDiffSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateEntityHistoryColumns, {
  ENTITY_HISTORY_HOOK,
  TEntityHistoryDataType,
  TEntityHistoryFieldNames,
  TEntityHistoryFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateEntityHistoryColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';

const useEntityChangeHistoryDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.entity-history' });

  const createEntityChangeHistoryColumns = useCreateEntityHistoryColumns();
  const columns = useCreateDataTableColumns<TEntityHistoryDataType>(
    createEntityChangeHistoryColumns,
  );

  const defaultSorting = useMemo<IDataTableSort<TEntityHistoryFieldNames>[]>(
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
    dataTableProps: validateDataTableProps<
      TEntityHistoryDataType,
      TEntityHistoryFilterType,
      TEntityHistoryFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.EntityChangeHistory,
      tableHeader: t('title'),
      columns,
      queryHook: ENTITY_HISTORY_HOOK,
      defaultSorting,
    }),
  };
};

export default useEntityChangeHistoryDataTable;
