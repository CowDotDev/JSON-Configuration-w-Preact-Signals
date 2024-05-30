import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useLostAndFoundInventoryTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateLostAndFoundInventoryColumns.generated';
import { LicensePlateStatusState } from '@/graphql/types.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableEnumList from '@/components/Table/hooks/useDataTableEnumLists';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { BIN_DETAILS, LICENSE_PLATE_DETAILS, PRODUCT_DETAILS } from '@constants/routes';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

export const LOST_AND_FOUND_INV_HOOK = useLostAndFoundInventoryTableLazyQuery;
export type TLostAndFoundInvDataType = TExtractLazyHookDataType<typeof LOST_AND_FOUND_INV_HOOK>;
export type TLostAndFoundInvFilterType = TExtractLazyHookFetchFilterType<
  typeof LOST_AND_FOUND_INV_HOOK
>;
export type TLostAndFoundInvFieldNames = TExtractLazyHookFieldNames<typeof LOST_AND_FOUND_INV_HOOK>;

const useCreateLostAndFoundInventoryColumns = ({
  dataTestId,
  removeColumns = [],
}: {
  dataTestId: string;
  removeColumns?: (keyof TLostAndFoundInvDataType)[];
}) => {
  const { t } = useTranslation('components');

  const { stockStatusTypeEnumList, unitOfMeasureEnumList } = useDataTableEnumList({
    fetchStockStatusTypeList: true,
    fetchUoMList: true,
  });

  const createLostAndFoundInventoryColumns = useCallback<TColumnFactory<TLostAndFoundInvDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('binCode', {
          header: t('common.bin'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BIN_DETAILS}/${row.original.binId}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-bin-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('productCode', {
          header: t('common.product'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${PRODUCT_DETAILS}/${row.original.productId}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-product-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('productDescription', {
          header: t('common.productDescription'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('licensePlateCode', {
          header: t('common.licensePlate'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${LICENSE_PLATE_DETAILS}/${row.original.licensePlateId}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-lp-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('licensePlateDescription', {
          header: t('common.licensePlateDescription'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('licensePlateStatus', {
          header: t('common.licensePlateStatus'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(LicensePlateStatusState).map((status) => ({
              value: LicensePlateStatusState[status],
              display: t(`common.${LicensePlateStatusState[status]}`),
            })),
            exportFormatter: (value) => t(`common.${value}`),
          },
        }),
        columnHelper.accessor('quantity', {
          header: t('common.quantity'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.stringRange,
          },
        }),
        columnHelper.accessor('lotCode', {
          header: t('common.lot'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('areaCode', {
          header: t('common.area'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('areaCode', {
          header: t('common.area'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('stockStatusLabel', {
          header: t('common.stockStatus'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: stockStatusTypeEnumList,
          },
        }),
        columnHelper.accessor('unitOfMeasureCode', {
          header: t('common.unitOfMeasureAbbr'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: unitOfMeasureEnumList,
          },
        }),
        columnHelper.accessor('warehouseCode', {
          header: t('common.warehouse'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TLostAndFoundInvDataType>(removeColumns));
    },
    [t, stockStatusTypeEnumList, unitOfMeasureEnumList, ...removeColumns],
  );

  return createLostAndFoundInventoryColumns;
};

export default useCreateLostAndFoundInventoryColumns;
