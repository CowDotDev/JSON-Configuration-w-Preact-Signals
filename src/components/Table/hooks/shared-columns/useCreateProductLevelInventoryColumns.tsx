import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useProductInventoryTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateProductLevelInventoryColumns.generated';
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
import QuantityConversionsTooltip from '@components/tooltips/quantity-conversions';
import { PRODUCT_DETAILS } from '@constants/routes';
import { warehouseRoute } from '@lib/routes-utils';

export const PRODUCT_INV_HOOK = useProductInventoryTableLazyQuery;
export type TProductInvDataType = TExtractLazyHookDataType<typeof PRODUCT_INV_HOOK>;
export type TProductInvFilterType = TExtractLazyHookFetchFilterType<typeof PRODUCT_INV_HOOK>;
export type TProductInvFieldNames = TExtractLazyHookFieldNames<typeof PRODUCT_INV_HOOK>;

const useCreateProductLevelInventoryColumns = ({
  dataTestId,
  removeColumns = [],
}: {
  dataTestId: string;
  removeColumns?: (keyof TProductInvDataType)[];
}) => {
  const { t } = useTranslation('pages', { keyPrefix: 'inventory' });

  const { stockStatusTypeEnumList, unitOfMeasureEnumList } = useDataTableEnumList({
    fetchStockStatusTypeList: true,
    fetchUoMList: true,
  });

  const createProductInventoryColumns = useCallback<TColumnFactory<TProductInvDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('productCode', {
          header: t('columns.productCode'),
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
        columnHelper.accessor('description', {
          header: t('columns.productDescription'),
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
        columnHelper.accessor('openTaskCount', {
          header: t('columns.openTaskCount'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
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
          header: t('columns.qtyOnHand'),
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
        columnHelper.accessor('availableQuantity', {
          header: t('columns.availableQty'),
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
      ];

      return columns.filter(filterDataTableColumnDefs<TProductInvDataType>(removeColumns));
    },
    [t, stockStatusTypeEnumList, unitOfMeasureEnumList, ...removeColumns],
  );

  return createProductInventoryColumns;
};

export default useCreateProductLevelInventoryColumns;
