import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useLotSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useLotSettingsDataTable.generated';
import { ViewLotSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { LOT_DETAILS, PRODUCT_DETAILS } from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import { warehouseRoute } from '@lib/routes-utils';

const LAZY_QUERY_HOOK = useLotSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useLotSettingsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.lot-settings' });
  const { t: tC } = useTranslation('components', { keyPrefix: 'common' });
  const { displayDate, displayUTCDate, displayDateTime } = useDateTime();

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('code', {
          header: t('columns.code'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${LOT_DETAILS}/${row.original.id}`)}
              text={getValue()}
              dataTestId="lot-settings-lot-link"
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('productCode', {
          header: t('columns.product'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${PRODUCT_DETAILS}/${row.original.productId}`)}
              text={getValue()}
              dataTestId="lot-settings-product-link"
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('erpCreatedOn', {
          header: t('columns.created'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('erpUpdatedOn', {
          header: t('columns.changedERP'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('updatedAt', {
          header: t('columns.changedFF'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('restricted', {
          header: t('columns.restricted'),
          cell: ({ getValue }) => (getValue() ? tC('true') : tC('false')),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => (value ? tC('true') : tC('false')),
          },
        }),
        columnHelper.accessor('productionDate', {
          header: t('columns.production'),
          cell: ({ getValue }) => displayUTCDate({ date: getValue() }),
          meta: {
            columnType: ColumnType.date,
            exportFormatter: (value) => displayUTCDate({ date: value }),
          },
        }),
        columnHelper.accessor('expiration', {
          header: t('columns.expiration'),
          cell: ({ getValue }) => displayUTCDate({ date: getValue() }),
          meta: {
            columnType: ColumnType.date,
            exportFormatter: (value) => displayUTCDate({ date: value }),
          },
        }),
        columnHelper.accessor('supplierLotNumber', {
          header: t('columns.supplier'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns;
    },
    [t, displayDate, displayDateTime],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: ViewLotSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.LotSettings,
      tableHeader: t('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      defaultSorting,
    }),
  };
};

export default useLotSettingsDataTable;
