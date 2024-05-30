import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useBaseInventoryBinLevelTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useBaseInventoryColumns.generated';
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

export const BASE_INV_STOCK_HOOK = useBaseInventoryBinLevelTableLazyQuery;
export type TBaseInvStockDataType = TExtractLazyHookDataType<typeof BASE_INV_STOCK_HOOK>;
export type TBaseInvStockFilterType = TExtractLazyHookFetchFilterType<typeof BASE_INV_STOCK_HOOK>;
export type TBaseInvStockFieldNames = TExtractLazyHookFieldNames<typeof BASE_INV_STOCK_HOOK>;

const useCreateStockRequestColumns = ({
  addColumnsToStart,
  dataTestId,
  removeColumns = [],
}: {
  addColumnsToStart?: TColumnFactory<TBaseInvStockDataType>;
  dataTestId: string;
  removeColumns?: (keyof TBaseInvStockDataType)[];
}) => {
  const { t } = useTranslation('components');

  const { unitOfMeasureEnumList } = useDataTableEnumList({
    fetchStockStatusTypeList: true,
    fetchUoMList: true,
  });

  const createStockRequestColumns = useCallback<TColumnFactory<TBaseInvStockDataType>>(
    (columnHelper) => {
      const columns = [
        ...(addColumnsToStart ? addColumnsToStart(columnHelper) : []),
        columnHelper.accessor('licensePlateCode', {
          header: t('common.code', { prefix: t('common.licensePlate') }),
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
        columnHelper.accessor('lotCode', {
          header: t('columns.lotCode'),
          cell: ({ getValue }) => getValue() ?? '',
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
      ];

      return columns.filter(filterDataTableColumnDefs<TBaseInvStockDataType>(removeColumns));
    },
    [t, addColumnsToStart, unitOfMeasureEnumList, ...removeColumns],
  );

  return createStockRequestColumns;
};

export default useCreateStockRequestColumns;
