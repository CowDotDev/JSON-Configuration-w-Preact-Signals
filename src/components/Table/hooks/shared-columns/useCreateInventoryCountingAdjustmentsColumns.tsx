import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useInventoryCountingAdjustmentsTableLazyQuery } from '@/graphql/defs/pages/__generated__/inventory-counting.generated';
import { LedgerSyncStatus } from '@/graphql/types.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import Typography from '@components/styled/Typography';
import { AREAS, BIN_DETAILS, LICENSE_PLATE_DETAILS, PRODUCT_DETAILS } from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

export const COUNT_INV_ADJUSTMENTS_HOOK = useInventoryCountingAdjustmentsTableLazyQuery;
export type TCountInvAdjustmentDataType = TExtractLazyHookDataType<
  typeof COUNT_INV_ADJUSTMENTS_HOOK
>;
export type TCountInvAdjustmentFilterType = TExtractLazyHookFetchFilterType<
  typeof COUNT_INV_ADJUSTMENTS_HOOK
>;
export type TCountInvAdjustmentFieldNames = TExtractLazyHookFieldNames<
  typeof COUNT_INV_ADJUSTMENTS_HOOK
>;

const useCreateInventoryCountingAdjustmentsColumns = ({
  addColumnsToStart,
  dataTestId,
  removeColumns = [],
  removeDeepLinks = false,
}: {
  addColumnsToStart?: TColumnFactory<TCountInvAdjustmentDataType>;
  dataTestId: string;
  removeColumns?: (keyof TCountInvAdjustmentDataType)[];
  removeDeepLinks?: boolean;
}) => {
  const { t } = useTranslation('components');
  const { displayDate, displayTime, displayDateTime } = useDateTime();

  const createInventoryCountingColumns = useCallback<TColumnFactory<TCountInvAdjustmentDataType>>(
    (columnHelper) => {
      const columns = [
        ...(addColumnsToStart ? addColumnsToStart(columnHelper) : []),
        columnHelper.accessor('countTaskCode', {
          header: t('columns.referenceCount'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('binCode', {
          header: t('columns.binCode'),
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
        columnHelper.accessor('areaCode', {
          header: t('columns.areaCode'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${AREAS}/${row.original.areaId}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-area-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('licensePlateCode', {
          header: t('columns.licensePlateCode'),
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
          minSize: 200,
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
        columnHelper.accessor('lotCode', {
          header: t('columns.lotCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('countedQuantityUOMCode', {
          header: t('columns.uom'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('quantityDifference', {
          header: t('columns.diff'),
          cell: ({ getValue }) => (
            <Typography
              variant="body1"
              fontWeight={600}
              color={(theme) =>
                Number(getValue()) >= 0 ? theme.palette.success.main : theme.palette.error.main
              }
            >
              {Number.parseFloat(getValue())}
            </Typography>
          ),
          meta: {
            columnType: ColumnType.stringRange,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('stockStatusLabel', {
          header: t('columns.stockStatus'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),

        columnHelper.accessor('countTaskCompletedByUserFirstName', {
          header: t('columns.countUser'),
          cell: ({ getValue, row }) => {
            return `${getValue()} ${row.original.countTaskCompletedByUserLastName}`;
          },
          meta: {
            columnType: ColumnType.string,
          },
          minSize: 200,
        }),
        columnHelper.accessor('countTaskCompletedAt', {
          header: t('columns.countDateTime'),
          cell: ({ getValue }) => {
            const date = getValue() ? new Date(Number(getValue())).toISOString() : '';

            return displayDateTime({ date });
          },
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => {
              const date = value ? new Date(Number(value)).toISOString() : '';

              return displayDateTime({ date });
            },
          },
        }),
        columnHelper.accessor('licensePlateLedgerSyncStatus', {
          header: t('columns.ledgerSyncStatus'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          minSize: 200,
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(LedgerSyncStatus).map((status) => ({
              value: LedgerSyncStatus[status],
              display: t(`common.${LedgerSyncStatus[status]}`),
            })),
            exportFormatter: (value) => t(`common.${value}`),
          },
        }),
        columnHelper.accessor('licensePlateLedgerSyncStatusReason', {
          header: t('columns.ledgerSyncStatusReason'),
          cell: ({ getValue }) => getValue(),
          minSize: 850,
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TCountInvAdjustmentDataType>(removeColumns));
    },
    [t, displayDate, displayTime, addColumnsToStart, removeDeepLinks, ...removeColumns],
  );

  return createInventoryCountingColumns;
};

export default useCreateInventoryCountingAdjustmentsColumns;
