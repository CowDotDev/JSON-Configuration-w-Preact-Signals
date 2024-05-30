import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useInboundDeliveryItemsTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateInboundDeliveryItemColumns.generated';
import { DeliveryCompletionStatus } from '@/graphql/types.generated';
import DeprecatedWarehouseFeatureFlagToggles from '@/signals/configuration/deprecatedWarehouseFeatureFlagToggles/DeprecatedWarehouseFeatureFlagToggles';
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
import {
  INBOUND_DELIVERY,
  LICENSE_PLATE_DETAILS,
  LOT_DETAILS,
  PRODUCT_DETAILS,
} from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

export const DELIVERY_ITEMS_HOOK = useInboundDeliveryItemsTableLazyQuery;
export type TDeliveryItemsDataType = TExtractLazyHookDataType<typeof DELIVERY_ITEMS_HOOK>;
export type TDeliveryItemsFilterType = TExtractLazyHookFetchFilterType<typeof DELIVERY_ITEMS_HOOK>;
export type TDeliveryItemsFieldNames = TExtractLazyHookFieldNames<typeof DELIVERY_ITEMS_HOOK>;

interface IUseCreateInboundDeliveryItemColumns {
  dataTestId: string;
  removeColumns?: (keyof TDeliveryItemsDataType)[];
  removeDeepLinks?: boolean;
}
const useCreateInboundDeliveryItemColumns = ({
  dataTestId,
  removeColumns = [],
  removeDeepLinks = false,
}: IUseCreateInboundDeliveryItemColumns) => {
  const { t } = useTranslation('pages');
  const { t: tC } = useTranslation('components');
  const { displayDate, displayDateTime } = useDateTime();
  const warehouseFeatureFlags = DeprecatedWarehouseFeatureFlagToggles;

  const { unitOfMeasureEnumList } = useDataTableEnumList({
    fetchUoMList: true,
  });

  const createInboundDeliveryItemColumns = useCallback<TColumnFactory<TDeliveryItemsDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('deliveryCode', {
          header: t('deliveries.deliveryCodeAbbr'),
          cell: ({ row, getValue }) =>
            !removeDeepLinks ? (
              <LinkCell
                href={warehouseRoute(`${INBOUND_DELIVERY}/${row.original.deliveryId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-delivery-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('deliveryDueDate', {
          header: t('deliveries.columns.dueDate'),
          cell: ({ getValue }) => displayDate({ date: getValue() }),
          meta: {
            columnType: ColumnType.date,
            exportFormatter: (value) => displayDate({ date: value }),
          },
        }),
        columnHelper.accessor('item', {
          header: t('deliveries.item'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('licensePlateCode', {
          header: tC('common.licensePlate'),
          cell: ({ row, getValue }) =>
            !removeDeepLinks ? (
              <LinkCell
                href={warehouseRoute(`${LICENSE_PLATE_DETAILS}/${row.original.licensePlateId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-lp-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('licensePlateDescription', {
          header: tC('common.licensePlateDescription'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('productCode', {
          header: t('deliveries.columns.productCode'),
          cell: ({ row, getValue }) =>
            !removeDeepLinks ? (
              <LinkCell
                href={warehouseRoute(`${PRODUCT_DETAILS}/${row.original.productId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-product-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('productDescription', {
          header: tC('common.productDescription'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('lotCode', {
          header: t('deliveries.columns.lotCode'),
          cell: ({ row, getValue }) =>
            !removeDeepLinks ? (
              <LinkCell
                href={warehouseRoute(`${LOT_DETAILS}/${row.original.lotId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-lot-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        warehouseFeatureFlags.value.inboundDeliveries.showPGR
          ? columnHelper.accessor('receiptStatus', {
              header: t('deliveries.receiptStatus'),
              cell: ({ getValue }) => tC(`tasks.status.${getValue()}`),
              meta: {
                columnType: ColumnType.enum,
                options: enumKeys(DeliveryCompletionStatus).map((status) => ({
                  value: DeliveryCompletionStatus[status],
                  display: tC(`tasks.status.${DeliveryCompletionStatus[status]}`),
                })),
                exportFormatter: (value) => tC(`tasks.status.${value}`),
              },
            })
          : null,
        columnHelper.accessor('putawayStatus', {
          header: t('deliveries.putaway'),
          cell: ({ getValue }) => tC(`tasks.status.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(DeliveryCompletionStatus).map((status) => ({
              value: DeliveryCompletionStatus[status],
              display: tC(`tasks.status.${DeliveryCompletionStatus[status]}`),
            })),
            exportFormatter: (value) => tC(`tasks.status.${value}`),
          },
        }),
        warehouseFeatureFlags.value.deliveries.showLoadUnload
          ? columnHelper.accessor('unloadStatus', {
              header: t('deliveries.unloadStatus'),
              cell: ({ getValue }) => tC(`tasks.status.${getValue()}`),
              meta: {
                columnType: ColumnType.enum,
                options: enumKeys(DeliveryCompletionStatus).map((status) => ({
                  value: DeliveryCompletionStatus[status],
                  display: tC(`tasks.status.${DeliveryCompletionStatus[status]}`),
                })),
                exportFormatter: (value) => tC(`tasks.status.${value}`),
              },
            })
          : null,
        columnHelper.accessor('advancedShipmentNotificationFileCode', {
          header: t('deliveries.asnId'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('quantity', {
          header: t('deliveries.quantityAbbr'),
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
        columnHelper.accessor('unitOfMeasure', {
          header: tC('common.unitOfMeasureAbbr'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('supplierLotCode', {
          header: t('deliveries.supplierLotAbbr'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('erpLastChanged', {
          header: t('deliveries.updatedERP'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('updatedAt', {
          header: t('deliveries.updatedFF'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('erpPurchaseOrder', {
          header: tC('common.purchaseOrder'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('erpPurchaseOrderItem', {
          header: t('deliveries.purchaseOrderItemAbbr'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('volume', {
          header: tC('common.volume'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('volumeUOMCode', {
          header: tC('common.unitOfMeasureAbbrSuffix', { prefix: tC('common.volume') }),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: unitOfMeasureEnumList,
          },
        }),
        columnHelper.accessor('grossWeight', {
          header: t('deliveries.grossWeightAbbr'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('weightUOMCode', {
          id: 'grossWeightUOMCode',
          header: tC('common.unitOfMeasureAbbrSuffix', { prefix: t('deliveries.grossWeightAbbr') }),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: unitOfMeasureEnumList,
          },
        }),
        columnHelper.accessor('netWeight', {
          header: t('deliveries.netWeightAbbr'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('weightUOMCode', {
          id: 'netWeightUOMCode',
          header: tC('common.unitOfMeasureAbbrSuffix', { prefix: t('deliveries.netWeightAbbr') }),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: unitOfMeasureEnumList,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TDeliveryItemsDataType>(removeColumns));
    },
    [unitOfMeasureEnumList, ...removeColumns],
  );

  return createInboundDeliveryItemColumns;
};

export default useCreateInboundDeliveryItemColumns;
