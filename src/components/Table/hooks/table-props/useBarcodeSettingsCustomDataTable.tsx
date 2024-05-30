import { DeleteForever, EditOutlined } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  useBarcodeSettingsCustomTableLazyQuery,
  useDeleteOneBarcodeMutation,
} from '@/graphql/defs/hooks/table-props/__generated__/useBarcodeSettingsCustomDataTable.generated';
import { TaskStatus, ViewBarcodeSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { BARCODE_ENROLLMENT } from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

const LAZY_QUERY_HOOK = useBarcodeSettingsCustomTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useBarcodeSettingsCustomDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'barcodes' });
  const { t: tC } = useTranslation('components');
  const navigate = useNavigate();
  const { displayDateTime } = useDateTime();

  const { selection, rowSelection } = useDataTableSelection<_TDataType>(
    SelectionType.multi,
    'barcodeId',
  );

  const [deleteBarcode, { loading: isDeletingBarcode }] = useDeleteOneBarcodeMutation();
  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      columnHelper.display({
        id: DataTableDisplayColumns.Options,
        header: tC('common.actions'),
        cell: ({ row }) => {
          return (
            <Box>
              <IconButton
                onClick={() => {
                  navigate(warehouseRoute(BARCODE_ENROLLMENT), {
                    state: { selectedBarcodes: [row.original] },
                  });
                }}
                size="small"
              >
                <EditOutlined color="secondary" fontSize="medium" />
              </IconButton>
              <IconButton
                onClick={() => {
                  deleteBarcode({ variables: { input: { id: row.original.barcodeId } } });
                }}
                size="small"
              >
                <DeleteForever color="secondary" fontSize="medium" />
              </IconButton>
            </Box>
          );
        },
        size: 105,
        enableColumnFilter: false,
        enableHiding: false,
        enableResizing: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
      columnHelper.accessor('adminTaskStatus', {
        header: tC('common.status'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(TaskStatus).map((status) => ({
            value: TaskStatus[status],
            display: tC(`common.${TaskStatus[status]}`),
          })),
        },
      }),
      columnHelper.accessor('barcodeCode', {
        header: t('barcodeLabel'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('businessPartnerName', {
        header: tC('common.vendor'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('businessPartnerCode', {
        header: tC('common.vendorCode'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('userFirstName', {
        header: tC('common.firstName'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('userLastName', {
        header: tC('common.lastName'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('barcodeCreatedAt', {
        header: t('uploadDate'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
    ],
    [deleteBarcode],
  );

  const defaultSorting: IDataTableSort<_TFieldNames>[] = useMemo(
    () => [
      {
        id: ViewBarcodeSortFields.BarcodeCreatedAt,
        desc: false,
      },
    ],
    [],
  );

  return {
    isDeletingBarcode,
    selectedCustomBarcodes: selection,
    customDataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.BarcodeSettingsCustom,
      tableHeader: t('customBarcodes'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      defaultSorting,
      rowSelection,
    }),
  };
};

export default useBarcodeSettingsCustomDataTable;
