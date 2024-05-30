import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetLicensePlateInventoryBaseLazyQuery } from '@/graphql/defs/pages/__generated__/inventory-reconciliation.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableEnumList from '@/components/Table/hooks/useDataTableEnumLists';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import QuantityConversionsTooltip from '@components/tooltips/quantity-conversions';

export const LP_BASE_INV_HOOK = useGetLicensePlateInventoryBaseLazyQuery;
export type TLpBaseInvDataType = TExtractLazyHookDataType<typeof LP_BASE_INV_HOOK>;
export type TLpBaseInvFilterType = TExtractLazyHookFetchFilterType<typeof LP_BASE_INV_HOOK>;
export type TLpBaseInvFieldNames = TExtractLazyHookFieldNames<typeof LP_BASE_INV_HOOK>;

interface ICreateCancelLicensePlateColumns {
  dataTestId: string;
  addColumnsToStart?: TColumnFactory<TLpBaseInvDataType>;
  removeColumns?: (keyof TLpBaseInvDataType)[];
}
const useCreateCancelLicensePlateColumns = ({
  dataTestId,
  addColumnsToStart,
  removeColumns = [],
}: ICreateCancelLicensePlateColumns) => {
  const { t } = useTranslation('pages', { keyPrefix: 'inventory' });

  const { stockStatusTypeEnumList, unitOfMeasureEnumList } = useDataTableEnumList({
    fetchStockStatusTypeList: true,
    fetchUoMList: true,
  });

  const createCancelLicensePlateColumns = useCallback<TColumnFactory<TLpBaseInvDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('binCode', {
          header: t('columns.binCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('productCode', {
          header: t('columns.productCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('unitOfMeasure', {
          header: t('columns.uom'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: unitOfMeasureEnumList,
          },
        }),
        columnHelper.accessor('quantity', {
          header: t('columns.qty'),
          cell: ({ row, getValue }) => (
            <QuantityConversionsTooltip
              quantity={getValue()}
              unitOfMeasureId={row.original.unitOfMeasureId}
              dataTestId={dataTestId}
            />
          ),
          meta: {
            columnType: ColumnType.stringRange,
          },
        }),
        columnHelper.accessor('lotCode', {
          header: t('columns.lotCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('licensePlateStorageLocation', {
          header: t('columns.availability'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('stockStatus', {
          header: t('columns.stockStatus'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: stockStatusTypeEnumList,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TLpBaseInvDataType>(removeColumns));
    },
    [t, addColumnsToStart, stockStatusTypeEnumList, unitOfMeasureEnumList, ...removeColumns],
  );

  return createCancelLicensePlateColumns;
};

export default useCreateCancelLicensePlateColumns;
