import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useSystemConnectionsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useSystemConnectionsDataTable.generated';
import { SystemConnectionSortFields, SystemConnectionType } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import enumKeys from '@lib/enum-keys';

const LAZY_QUERY_HOOK = useSystemConnectionsTableLazyQuery;
export type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
export type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useSystemConnectionsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.system-connections' });
  const { t: tC } = useTranslation('components');

  const { selection, clearSelection, rowSelection } = useDataTableSelection<_TDataType>(
    SelectionType.multi,
    'id',
  );

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      columnHelper.accessor('code', {
        header: tC('columns.code'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('description', {
        header: tC('columns.description'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('systemType', {
        header: tC('columns.systemType'),
        cell: ({ getValue }) => tC(`enums.systemTypes.${getValue()}`),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(SystemConnectionType).map((type) => ({
            value: SystemConnectionType[type],
            display: tC(`enums.systemTypes.${SystemConnectionType[type]}`),
          })),
          exportFormatter: (value) => tC(`enums.systemTypes.${value}`),
        },
      }),
      columnHelper.accessor('baseUrl', {
        header: tC('columns.baseUrl'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('urlHeaders', {
        header: tC('columns.urlHeaders'),
        cell: ({ getValue }) => JSON.stringify(getValue()),
        meta: {
          columnType: ColumnType.string,
          exportFormatter: (value) => JSON.stringify(value),
        },
        enableColumnFilter: false,
        enableGlobalFilter: false,
      }),
      columnHelper.accessor('timezone', {
        header: tC('columns.timezone'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('active', {
        header: tC('columns.systemMode'),
        cell: ({ getValue }) => (getValue() ? tC('common.active') : tC('common.paused')),
        meta: {
          columnType: ColumnType.boolean,
          exportFormatter: (value) => (value ? tC('common.active') : tC('common.paused')),
          booleanLabels: [tC('common.paused'), tC('common.active')],
        },
      }),
    ],
    [tC],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: SystemConnectionSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    selectedSystemConnections: selection,
    clearSelection,
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.SystemConnections,
      tableHeader: t('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      defaultSorting,
      refetchTrigger,
      rowSelection,
    }),
  };
};

export default useSystemConnectionsDataTable;
