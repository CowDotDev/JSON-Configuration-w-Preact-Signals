import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useLotInventoryTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateLotLevelInventoryColumns.generated';
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
import { LOT_DETAILS, PRODUCT_DETAILS } from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import { warehouseRoute } from '@lib/routes-utils';

export const LOT_INV_HOOK = useLotInventoryTableLazyQuery;
export type TLotInvDataType = TExtractLazyHookDataType<typeof LOT_INV_HOOK>;
export type TLotInvFilterType = TExtractLazyHookFetchFilterType<typeof LOT_INV_HOOK>;
export type TLotInvFieldNames = TExtractLazyHookFieldNames<typeof LOT_INV_HOOK>;

const useCreateLotLevelInventoryColumns = ({
  dataTestId,
  removeColumns = [],
}: {
  dataTestId: string;
  removeColumns?: (keyof TLotInvDataType)[];
}) => {
  const { t } = useTranslation('pages', { keyPrefix: 'inventory' });
  const { displayDate } = useDateTime();

  const { stockStatusTypeEnumList, unitOfMeasureEnumList } = useDataTableEnumList({
    fetchStockStatusTypeList: true,
    fetchUoMList: true,
  });

  const createLotInventoryColumns = useCallback<TColumnFactory<TLotInvDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('lotCode', {
          header: t('columns.lotCode'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${LOT_DETAILS}/${row.original.lotId}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-lot-link`}
            />
          ),
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
        columnHelper.accessor('productionDate', {
          header: t('columns.productionDate'),
          cell: ({ getValue }) => displayDate({ date: getValue() }),
          meta: {
            columnType: ColumnType.date,
            exportFormatter: (value) => displayDate({ date: value }),
          },
        }),
        columnHelper.accessor('expirationDate', {
          header: t('columns.expirationDate'),
          cell: ({ getValue }) => displayDate({ date: getValue() }),
          meta: {
            columnType: ColumnType.date,
            exportFormatter: (value) => displayDate({ date: value }),
          },
        }),
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
        columnHelper.accessor('openTaskCount', {
          header: t('columns.openTaskCount'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TLotInvDataType>(removeColumns));
    },
    [t, displayDate, stockStatusTypeEnumList, unitOfMeasureEnumList, ...removeColumns],
  );

  return createLotInventoryColumns;
};

export default useCreateLotLevelInventoryColumns;
