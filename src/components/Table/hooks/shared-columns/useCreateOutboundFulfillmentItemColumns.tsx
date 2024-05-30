import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useOutboundFulfillmentItemsTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateOutboundFulfillmentItemColumns.generated';
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
import ProgressBar from '@components/progress-bar';
import QuantityConversionsTooltip from '@components/tooltips/quantity-conversions';
import {
  LICENSE_PLATE_DETAILS,
  LOT_DETAILS,
  OUTBOUND_DELIVERY,
  PRODUCT_DETAILS,
} from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

export const FULFILLMENT_ITEMS_HOOK = useOutboundFulfillmentItemsTableLazyQuery;
export type TFulfillmentItemsDataType = TExtractLazyHookDataType<typeof FULFILLMENT_ITEMS_HOOK>;
export type TFulfillmentItemsFilterType = TExtractLazyHookFetchFilterType<
  typeof FULFILLMENT_ITEMS_HOOK
>;
export type TFulfillmentItemsFieldNames = TExtractLazyHookFieldNames<typeof FULFILLMENT_ITEMS_HOOK>;

interface IUseCreateOutboundFulfillmentItemColumns {
  dataTestId: string;
  addColumnsToStart?: TColumnFactory<TFulfillmentItemsDataType>;
  removeColumns?: (keyof TFulfillmentItemsDataType)[];
}
const useCreateOutboundFulfillmentItemColumns = ({
  dataTestId,
  addColumnsToStart,
  removeColumns = [],
}: IUseCreateOutboundFulfillmentItemColumns) => {
  const { t } = useTranslation('pages');
  const { t: tC } = useTranslation('components');
  const { displayDate, displayDateTime } = useDateTime();
  const warehouseFeatureFlags = DeprecatedWarehouseFeatureFlagToggles;

  const { unitOfMeasureEnumList } = useDataTableEnumList({
    fetchUoMList: true,
  });

  const createInboundDeliveryItemColumns = useCallback<TColumnFactory<TFulfillmentItemsDataType>>(
    (columnHelper) => {
      const columns = [
        ...(addColumnsToStart ? addColumnsToStart(columnHelper) : []),
        columnHelper.accessor('fulfillmentCode', {
          header: t('deliveries.fulfillmentCodeAbbr'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${OUTBOUND_DELIVERY}/${row.original.deliveryId}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-fulfillment-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('fulfillmentDueDate', {
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
        columnHelper.accessor('storageLocation', {
          header: tC('columns.availabilityCategory'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('licensePlateCode', {
          header: tC('common.licensePlate'),
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
          header: tC('common.licensePlateDescription'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
            exportOnly: true,
          },
        }),
        columnHelper.accessor('productCode', {
          header: t('deliveries.columns.productCode'),
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
          header: tC('common.productDescription'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('stockStatus', {
          header: tC('common.stockStatus'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('lotCode', {
          header: t('deliveries.columns.lotCode'),
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
        columnHelper.accessor('dateAvailable', {
          header: t('deliveries.dateAvailableAbbr'),
          cell: ({ getValue }) => displayDate({ date: getValue() }),
          meta: {
            columnType: ColumnType.date,
            exportFormatter: (value) => displayDate({ date: value }),
          },
        }),
        warehouseFeatureFlags.value.deliveries.showAvailability
          ? columnHelper.accessor('availability', {
              header: t('deliveries.columns.availability'),
              cell: ({ getValue }) => <ProgressBar percent={getValue()} />,
              meta: {
                columnType: ColumnType.number,
                exportFormatter: (value) => `${value}%`,
              },
            })
          : null,
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
            columnType: ColumnType.enum,
            options: unitOfMeasureEnumList,
          },
        }),
        warehouseFeatureFlags.value.deliveries.showLoadUnload
          ? columnHelper.accessor('loadStatus', {
              header: t('deliveries.loadStatus'),
              cell: ({ getValue }) => (getValue() ? tC(`tasks.status.${getValue()}`) : ''),
              meta: {
                columnType: ColumnType.enum,
                options: enumKeys(DeliveryCompletionStatus).map((status) => ({
                  value: DeliveryCompletionStatus[status],
                  display: tC(`tasks.status.${DeliveryCompletionStatus[status]}`),
                })),
                exportFormatter: (value) => (value ? tC(`tasks.status.${value}`) : ''),
              },
            })
          : null,
        columnHelper.accessor('pickStatus', {
          header: t('deliveries.pickStatus'),
          cell: ({ getValue }) => (getValue() ? tC(`tasks.status.${getValue()}`) : ''),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(DeliveryCompletionStatus).map((status) => ({
              value: DeliveryCompletionStatus[status],
              display: tC(`tasks.status.${DeliveryCompletionStatus[status]}`),
            })),
            exportFormatter: (value) => (value ? tC(`tasks.status.${value}`) : ''),
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
        columnHelper.accessor('salesOrderCode', {
          header: t('deliveries.shippingOrderCodeAbbr'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('salesOrderItem', {
          header: t('deliveries.shippingOrderItemAbbr'),
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

      return columns.filter(filterDataTableColumnDefs<TFulfillmentItemsDataType>(removeColumns));
    },
    [displayDate, displayDateTime, addColumnsToStart, ...removeColumns],
  );

  return createInboundDeliveryItemColumns;
};

export default useCreateOutboundFulfillmentItemColumns;
