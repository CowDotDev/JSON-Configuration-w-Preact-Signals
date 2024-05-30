import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
  useBaseInventoryBinLevelTableLazyQuery,
  useBaseInventoryTableLazyQuery,
} from '@/graphql/defs/hooks/shared-columns/__generated__/useBaseInventoryColumns.generated';
import { LicensePlateStatusState } from '@/graphql/types.generated';
import DeprecatedWarehouseFeatureFlagToggles from '@/signals/configuration/deprecatedWarehouseFeatureFlagToggles/DeprecatedWarehouseFeatureFlagToggles';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableEnumList from '@/components/Table/hooks/useDataTableEnumLists';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import ErpSalesOrderLinkCell from '@/components/Table/table/cells/ErpSalesOrderLinkCell';
import LicensePlateLinkCell from '@/components/Table/table/cells/LicensePlateLinkCell';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import QuantityConversionsTooltip from '@components/tooltips/quantity-conversions';
import {
  BIN_DETAILS,
  BUSINESS_PARTNER_DETAILS,
  INBOUND_DELIVERY,
  LOT_DETAILS,
  OUTBOUND_DELIVERY,
  PRODUCT_DETAILS,
} from '@constants/routes';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';
import translateLpStatus from '@lib/translateLpStatus';

export const BASE_INV_HOOK = useBaseInventoryBinLevelTableLazyQuery;
export const BASE_INV_ALL_HOOK = useBaseInventoryTableLazyQuery;
export type TBaseInvDataType = TExtractLazyHookDataType<typeof BASE_INV_HOOK>;
export type TBaseInvFilterType = TExtractLazyHookFetchFilterType<typeof BASE_INV_HOOK>;
export type TBaseInvFieldNames = TExtractLazyHookFieldNames<typeof BASE_INV_HOOK>;

interface ICreatedBaseInventoryColumns {
  dataTestId: string;
  removeColumns?: (keyof TBaseInvDataType)[];
}
const useCreateBaseInventoryColumns = ({
  dataTestId,
  removeColumns = [],
}: ICreatedBaseInventoryColumns) => {
  const { t } = useTranslation('pages', { keyPrefix: 'inventory' });
  const { t: tC } = useTranslation('components');
  const warehouseFeatureFlags = DeprecatedWarehouseFeatureFlagToggles;

  const { stockStatusTypeEnumList, unitOfMeasureEnumList } = useDataTableEnumList({
    fetchStockStatusTypeList: true,
    fetchUoMList: true,
  });

  const createBaseInventoryColumns = useCallback<TColumnFactory<TBaseInvDataType>>(
    (columnHelper) => {
      const columns = [
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
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
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
        columnHelper.accessor('productDescription', {
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
        columnHelper.accessor('unitOfMeasure', {
          header: t('columns.uom'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: unitOfMeasureEnumList,
          },
        }),
        columnHelper.accessor('openTaskCount', {
          header: t('columns.openTaskCount'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
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
        columnHelper.accessor('lotRestricted', {
          header: t('columns.lotRestricted'),
          cell: ({ getValue }) => (getValue() ? tC('common.true') : tC('common.false')),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => (value ? tC('common.true') : tC('common.false')),
          },
        }),
        columnHelper.accessor('licensePlateCode', {
          header: t('columns.licensePlateCode'),
          cell: ({ row, getValue }) => (
            <LicensePlateLinkCell
              lpId={row.original.licensePlateId}
              lpStatus={row.original.licensePlateStatus}
              value={getValue()}
              dataTestId={dataTestId}
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
          size: 200,
        }),
        columnHelper.accessor('licensePlateDescription', {
          header: tC('common.licensePlateDescription'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('licensePlateStatus', {
          header: tC('common.licensePlateStatus'),
          cell: ({ getValue, row }) =>
            row.original.licensePlateId ? translateLpStatus(getValue()) : '',
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(LicensePlateStatusState).map((status) => ({
              value: LicensePlateStatusState[status],
              display: translateLpStatus(LicensePlateStatusState[status]),
            })),
            exportFormatter: (value, row) => (row.licensePlateId ? translateLpStatus(value) : ''),
          },
        }),
        warehouseFeatureFlags.value.inventory.deliveryAssociated
          ? columnHelper.accessor('erpSalesOrder', {
              header: tC('common.salesOrder'),
              cell: ({ getValue }) => (
                <ErpSalesOrderLinkCell erpSalesOrder={getValue()} dataTestId={dataTestId} />
              ),
              meta: {
                columnType: ColumnType.string,
              },
            })
          : null,
        warehouseFeatureFlags.value.inventory.deliveryAssociated
          ? columnHelper.accessor('stockDeliveryCode', {
              header: tC('common.deliveryCode'),
              cell: ({ row, getValue }) => (
                <LinkCell
                  href={warehouseRoute(`${INBOUND_DELIVERY}/${row.original.stockDeliveryId}`)}
                  text={getValue()}
                  dataTestId={`${dataTestId}-delivery-link`}
                />
              ),
              meta: {
                columnType: ColumnType.string,
              },
            })
          : null,
        warehouseFeatureFlags.value.inventory.deliveryAssociated
          ? columnHelper.accessor('deliveryItem', {
              header: tC('common.deliveryItem'),
              cell: ({ getValue }) => getValue(),
              meta: {
                columnType: ColumnType.string,
              },
            })
          : null,
        warehouseFeatureFlags.value.inventory.deliveryAssociated
          ? columnHelper.accessor('stockFulfillmentCode', {
              header: tC('common.fulfillmentCode'),
              cell: ({ row, getValue }) => (
                <LinkCell
                  href={warehouseRoute(`${OUTBOUND_DELIVERY}/${row.original.stockFulfillmentId}`)}
                  text={getValue()}
                  dataTestId={`${dataTestId}-fulfillment-link`}
                />
              ),
              meta: {
                columnType: ColumnType.string,
              },
            })
          : null,
        warehouseFeatureFlags.value.inventory.deliveryAssociated
          ? columnHelper.accessor('fulfillmentItem', {
              header: tC('common.fulfillmentItem'),
              cell: ({ getValue }) => getValue(),
              meta: {
                columnType: ColumnType.string,
              },
            })
          : null,
        warehouseFeatureFlags.value.inventory.deliveryAssociated
          ? columnHelper.accessor('soldToBusinessPartnerName', {
              header: tC('common.soldTo'),
              cell: ({ row, getValue }) => (
                <LinkCell
                  href={warehouseRoute(
                    `${BUSINESS_PARTNER_DETAILS}/${row.original.soldToBusinessPartnerId}`,
                  )}
                  text={getValue()}
                  dataTestId={`${dataTestId}-partner-link`}
                />
              ),
              meta: {
                columnType: ColumnType.string,
              },
            })
          : null,
      ];

      return columns.filter(filterDataTableColumnDefs<TBaseInvDataType>(removeColumns));
    },
    [stockStatusTypeEnumList, unitOfMeasureEnumList, ...removeColumns],
  );

  return createBaseInventoryColumns;
};

export default useCreateBaseInventoryColumns;
