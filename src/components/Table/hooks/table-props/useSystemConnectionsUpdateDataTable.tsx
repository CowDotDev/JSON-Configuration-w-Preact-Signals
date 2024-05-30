import { DeleteOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SystemConnectionFragment } from '@/graphql/defs/hooks/table-props/__generated__/useSystemConnectionsDataTable.generated';
import { SystemConnectionSortFields, SystemConnectionType } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import {
  _TDataType,
  _TFieldNames,
} from '@/components/Table/hooks/table-props/useSystemConnectionsDataTable';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import IconButton from '@components/styled/IconButton';
import enumKeys from '@lib/enum-keys';

const useSystemConnectionsUpdateDataTable = (systemConnections: SystemConnectionFragment[]) => {
  const { t: tC } = useTranslation('components');

  const [data, setData] = useState<SystemConnectionFragment[]>(systemConnections);

  const addRemoveSystemConnectionAction: TColumnFactory<_TDataType> = (columnHelper) => {
    return [
      columnHelper.display({
        id: DataTableDisplayColumns.Delete,
        header: '',
        cell: ({ row }) => (
          <Box position="relative" width="100%">
            <IconButton
              onClick={() => {
                setData((_prev) => _prev.filter((_data) => _data.id !== row.original.id));
              }}
              styledVariant="dataGrid"
              size="small"
            >
              <DeleteOutline data-testid="remove-approved-abc-analysis" />
            </IconButton>
          </Box>
        ),
        size: 40,
        enableColumnFilter: false,
        enableHiding: false,
        enableResizing: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
    ];
  };

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      ...addRemoveSystemConnectionAction(columnHelper),
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

  useEffect(() => {
    setData(systemConnections);
  }, [systemConnections]);

  return {
    systemConnections: data,
    dataTableProps: validateDataTableProps<_TDataType>({
      type: 'data',
      tableId: DataTableIds.SystemConnectionsUpdate,
      tableHeader: tC('modal.systemConnection.title'),
      columns,
      defaultSorting,
      data,
      isDataLoading: false,
    }),
  };
};

export default useSystemConnectionsUpdateDataTable;
