import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useLatestInventoryReconciliationLazyQuery } from '@/graphql/defs/pages/__generated__/inventory-reconciliation.generated';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import InventoryConflictCell from '@/components/Table/table/cells/InventoryConflictCell';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import LinkIcon from '@components/icons/link';
import Link from '@components/styled/Link';
import QuantityConversionsTooltip from '@components/tooltips/quantity-conversions';
import {
  BIN_DETAILS,
  INVENTORY_RECONCILIATION_CONFLICT,
  LICENSE_PLATE_DETAILS,
  LOT_DETAILS,
  PRODUCT_DETAILS,
} from '@constants/routes';
import { warehouseRoute } from '@lib/routes-utils';

export const RECONCILIATION_LAZY_HOOK = useLatestInventoryReconciliationLazyQuery;
export type TReconciliationDataType = TExtractLazyHookDataType<typeof RECONCILIATION_LAZY_HOOK>;
export type TReconciliationFilterType = TExtractLazyHookFetchFilterType<
  typeof RECONCILIATION_LAZY_HOOK
>;
export type TReconciliationFieldNames = TExtractLazyHookFieldNames<typeof RECONCILIATION_LAZY_HOOK>;

interface IUseCreateInventoryReconciliationColumns {
  dataTestId: string;
  triggerDataTableRefetch?: () => void;
  removeColumns?: (keyof TReconciliationDataType)[];
}

const useCreateInventoryReconciliationColumns = ({
  dataTestId,
  triggerDataTableRefetch = () => {},
  removeColumns = [],
}: IUseCreateInventoryReconciliationColumns) => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages');

  const createInventoryReconciliationColumns = useCallback<TColumnFactory<TReconciliationDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.display({
          id: DataTableDisplayColumns.Options,
          cell: ({ row }) => (
            <Link
              href={warehouseRoute(
                `${INVENTORY_RECONCILIATION_CONFLICT}/${row.original.licensePlateId}`,
              )}
            >
              <LinkIcon fillColor={(theme) => theme.palette.slateGrey.main} />
            </Link>
          ),
          size: 50,
          enableColumnFilter: false,
          enableHiding: false,
          enableResizing: false,
          enableSorting: false,
          enableMultiSort: false,
        }),
        columnHelper.accessor('licensePlateCode', {
          header: t('columns.licensePlateCode'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${LICENSE_PLATE_DETAILS}/${row.original.licensePlateId}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-reconciliation-conflict-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
          minSize: 200,
        }),
        columnHelper.accessor('erpLicensePlateCode', {
          header: tP('settings.reconciliation.columns.sapHuNumber'),
          cell: ({ row, getValue }) => (
            <InventoryConflictCell
              displayValue={getValue()}
              erpValue={getValue()}
              ffValue={row.original.licensePlateCode}
              dataTestId={dataTestId}
            />
          ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
          minSize: 150,
        }),
        columnHelper.accessor('productCode', {
          header: t('common.productCode'),
          cell: ({ row, getValue }) =>
            !row.original.productConflict ? (
              getValue()
            ) : (
              <LinkCell
                href={warehouseRoute(`${PRODUCT_DETAILS}/${row.original.productId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-reconciliation-product-conflict-link`}
                styledVariant="inventoryConflict"
              />
            ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('lotCode', {
          header: t('columns.lotCode'),
          cell: ({ row, getValue }) =>
            !row.original.lotConflict ? (
              getValue()
            ) : (
              <LinkCell
                href={warehouseRoute(`${LOT_DETAILS}/${row.original.lotId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-reconciliation-conflict-link`}
                styledVariant="inventoryConflict"
              />
            ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('binCode', {
          header: t('columns.binCode'),
          cell: ({ row, getValue }) =>
            !row.original.binConflict ? (
              getValue()
            ) : (
              <LinkCell
                href={warehouseRoute(`${BIN_DETAILS}/${row.original.binId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-reconciliation-conflict-link`}
                styledVariant="inventoryConflict"
              />
            ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('unitOfMeasureCode', {
          header: t('common.uom'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('quantity', {
          header: t('common.qty'),
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
        columnHelper.accessor('storageLocation', {
          header: t('columns.availability'),
          cell: ({ row, getValue }) => (
            <InventoryConflictCell
              ffValue={getValue()}
              erpValue={row.original.erpStorageLocation}
              dataTestId={dataTestId}
            />
          ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('stockStatusTypeLabel', {
          header: t('columns.stockStatus'),
          cell: ({ row, getValue }) => (
            <InventoryConflictCell
              ffValue={getValue()}
              erpValue={row.original.erpStockStatusTypeLabel}
              dataTestId={dataTestId}
            />
          ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('binConflict', {
          header: tP('settings.reconciliation.binConflicts'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => value,
            exportOnly: true,
          },
        }),
        columnHelper.accessor('licensePlateConflict', {
          header: tP('settings.reconciliation.licensePlateConflicts'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => value,
            exportOnly: true,
          },
        }),
        columnHelper.accessor('productConflict', {
          header: tP('settings.reconciliation.productConflicts'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => value,
            exportOnly: true,
          },
        }),
        columnHelper.accessor('lotConflict', {
          header: tP('settings.reconciliation.lotConflicts'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => value,
            exportOnly: true,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TReconciliationDataType>(removeColumns));
    },
    [t, triggerDataTableRefetch, ...removeColumns],
  );

  return createInventoryReconciliationColumns;
};

export default useCreateInventoryReconciliationColumns;
