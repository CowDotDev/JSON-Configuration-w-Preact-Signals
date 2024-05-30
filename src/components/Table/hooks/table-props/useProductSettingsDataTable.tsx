import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useProductSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useProductSettingsDataTable.generated';
import { ProductAvailability, ProductQueryShapeSortFields } from '@/graphql/types.generated';
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
import { PRODUCT_DETAILS } from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

const LAZY_QUERY_HOOK = useProductSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useProductSettingsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.product-settings' });
  const { t: tC } = useTranslation('components');
  const { displayDateTime } = useDateTime();

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('code', {
          header: t('columns.productCode'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${PRODUCT_DETAILS}/${row.original.id}`)}
              text={getValue()}
              dataTestId="product-settings-product-link"
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('description', {
          header: t('columns.description'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('baseUOMCode', {
          header: tC('common.erpBaseUom'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
          enableColumnFilter: false,
          enableGlobalFilter: false,
        }),
        columnHelper.accessor('status', {
          header: t('columns.status'),
          cell: ({ getValue }) =>
            getValue() ? tC(`common.${getValue()}`) : tC(`common.${ProductAvailability.Available}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(ProductAvailability).map((status) => ({
              value: ProductAvailability[status],
              display: tC(`common.${ProductAvailability[status]}`),
            })),
            exportFormatter: (value) =>
              value ? tC(`common.${value}`) : tC(`common.${ProductAvailability.Available}`),
          },
        }),
        columnHelper.accessor('createdAt', {
          header: t('columns.created'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('erpUpdatedAt', {
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
        columnHelper.accessor('gtin', {
          header: t('columns.gtin'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('grossWeight', {
          header: t('columns.grossWt'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('netWeight', {
          header: t('columns.netWt'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('totalWeightUOMCode', {
          header: t('columns.wtUnit'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('volume', {
          header: t('columns.vol'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('volumeUOMCode', {
          header: t('columns.volUnit'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns;
    },
    [t, tC, displayDateTime],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: ProductQueryShapeSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.ProductSettings,
      tableHeader: t('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      defaultSorting,
    }),
  };
};

export default useProductSettingsDataTable;
