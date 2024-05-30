import { ColumnDef } from '@tanstack/react-table';
import { DateTime } from 'luxon';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DataTableBusinessPartnerEnumFragment } from '@/graphql/defs/hooks/__generated__/useDataTableEnumList.generated';
import {
  useDeliveriesFulfillmentsOverviewTableFilterValuesLazyQuery,
  useDeliveriesFulfillmentsOverviewTableLazyQuery,
} from '@/graphql/defs/hooks/table-props/__generated__/useDeliveriesFulfillmentsOverviewDataTable.generated';
import {
  DeliveryCategory,
  DeliveryCompletionStatus,
  DeliveryType,
  TaskStatus,
  ViewDeliverySortFields,
} from '@/graphql/types.generated';
import DeprecatedWarehouseFeatureFlagToggles from '@/signals/configuration/deprecatedWarehouseFeatureFlagToggles/DeprecatedWarehouseFeatureFlagToggles';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useCreateLinkedDateRangeFilter from '@/components/Table/hooks/useCreateLinkedDateRangeFilter';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort, RowSelectionEnabledFilter } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import DeliveryTypeCell from '@/components/Table/table/cells/DeliveryTypeCell';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import {
  ColumnFilter,
  ColumnFilterEnumOption,
  ColumnType,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';
import ProgressBar from '@components/progress-bar';
import Typography from '@components/styled/Typography';
import { BUSINESS_PARTNER_DETAILS, INBOUND_DELIVERY, OUTBOUND_DELIVERY } from '@constants/routes';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { useSnackbar } from '@context/snackbar';
import { useWarehouseUtils } from '@context/warehouse-utils';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';
import { ModalTypes } from '@models/modal';

const LAZY_QUERY_HOOK = useDeliveriesFulfillmentsOverviewTableLazyQuery;
export type DeliveryFulfillmentDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useDeliveriesFulfillmentsOverviewDataTable = (linkedDateRange: [DateTime, DateTime]) => {
  const { t } = useTranslation('pages', { keyPrefix: 'deliveries' });
  const { t: tC } = useTranslation('components');
  const { displayDate, displayDateTime } = useDateTime();
  const warehouseFeatureFlags = DeprecatedWarehouseFeatureFlagToggles;
  const { selectedWarehouseId } = useWarehouseUtils();
  const { showMessage } = useSnackbar();
  const { openModal } = useModalToggle();

  const [businessPartnerList, setBusinessPartnerList] = useState<
    DataTableBusinessPartnerEnumFragment[]
  >([]);
  const [fulfillmentBlockList, setFulfillmentBlockList] = useState<ColumnFilterEnumOption[]>([]);
  const [uomList, setUomList] = useState<ColumnFilterEnumOption[]>([]);
  const [fetchFilterValues] = useDeliveriesFulfillmentsOverviewTableFilterValuesLazyQuery({
    onCompleted: ({ businessPartners, fulfillmentBlocks, unitOfMeasureGlossaries }) => {
      const _fulfillmentBlockList = fulfillmentBlocks.nodes.map<ColumnFilterEnumOption>(
        (block) => ({
          value: block.label,
          display: block.label,
        }),
      );
      const _uomList = unitOfMeasureGlossaries.nodes.map<ColumnFilterEnumOption>((uom) => ({
        value: uom.code,
        display: uom.code,
      }));

      setBusinessPartnerList(businessPartners.nodes);
      setFulfillmentBlockList(_fulfillmentBlockList);
      setUomList(_uomList);
    },
    onError: (error) => {
      showMessage({
        type: 'error',
        message: error.message,
      });
    },
  });
  useEffect(() => {
    fetchFilterValues();
  }, []);

  const deliveryActionsAvailable = useMemo(
    () =>
      warehouseFeatureFlags.value.deliveries.assignDoor ||
      warehouseFeatureFlags.value.deliveries.unassignDoor,
    [
      warehouseFeatureFlags.value.deliveries.assignDoor,
      warehouseFeatureFlags.value.deliveries.unassignDoor,
    ],
  );

  const { selection, clearSelection, rowSelection } =
    useDataTableSelection<DeliveryFulfillmentDataType>(
      deliveryActionsAvailable ? SelectionType.multi : undefined,
      deliveryActionsAvailable ? 'id' : undefined,
    );

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const columns = useCreateDataTableColumns<DeliveryFulfillmentDataType>(
    (columnHelper) => {
      const partnersByName = businessPartnerList
        .map<ColumnFilterEnumOption>((partner) => ({
          value: partner.name,
          display: partner.name,
        }))
        .sort((a, b) => {
          if (a.display < b.display) {
            return -1;
          }
          if (a.display > b.display) {
            return 1;
          }
          return 0;
        });
      const partnersByCode = businessPartnerList
        .map<ColumnFilterEnumOption>((partner) => ({
          value: partner.code,
          display: partner.code,
        }))
        .sort((a, b) => {
          if (a.display < b.display) {
            return -1;
          }
          if (a.display > b.display) {
            return 1;
          }
          return 0;
        });

      const columns: ColumnDef<DeliveryFulfillmentDataType>[] = [
        columnHelper.accessor('erpCode', {
          header: t('columns.ibdObfCode'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(
                `${
                  row.original.type === DeliveryType.Delivery ? INBOUND_DELIVERY : OUTBOUND_DELIVERY
                }/${row.original.id}`,
              )}
              text={getValue()}
              dataTestId="deliveries-fulfillments-overview-delivery-link"
            />
          ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('type', {
          header: t('columns.ibdObfType'),
          cell: ({ getValue }) => <DeliveryTypeCell deliveryType={getValue()} />,
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(DeliveryType).map((type) => ({
              value: DeliveryType[type],
              display: tC(`common.${DeliveryType[type]}`, { count: 1 }),
            })),
            exportFormatter: (value) => tC(`common.${value}`, { count: 1 }),
          },
        }),
        warehouseFeatureFlags.value.deliveries.showCategory
          ? columnHelper.accessor('category', {
              header: tC('common.category'),
              cell: ({ getValue }) => (getValue() ? tC(`common.${getValue()}`) : ''),
              meta: {
                columnType: ColumnType.enum,
                options: enumKeys(DeliveryCategory).map((category) => ({
                  value: DeliveryCategory[category],
                  display: tC(`common.${DeliveryCategory[category]}`),
                })),
                exportFormatter: (value) => (value ? tC(`common.${value}`) : ''),
              },
            })
          : null,
        columnHelper.accessor('deliveryDocumentType', {
          header: tC('columns.documentType'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('deliveryStatus', {
          header: t('columns.deliveryStatus'),
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
        columnHelper.accessor('itemCount', {
          header: t('columns.numberOfItems'),
          cell: ({ row, getValue }) => {
            return (
              <Typography
                styledVariant="inlineLink"
                onClick={() =>
                  openModal({
                    type:
                      row.original.type === DeliveryType.Delivery
                        ? ModalTypes.deliveryItems
                        : ModalTypes.fulfillmentItems,
                    delivery:
                      row.original.type === DeliveryType.Delivery ? row.original : undefined,
                    fulfillment:
                      row.original.type === DeliveryType.Fulfillment ? row.original : undefined,
                  })
                }
              >
                {getValue()}
              </Typography>
            );
          },
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value) => value?.toString() || '',
          },
        }),
        columnHelper.accessor('dueDate', {
          header: t('columns.dueDate'),
          cell: ({ getValue }) => displayDate({ date: getValue() }),
          meta: {
            columnType: ColumnType.date,
            exportFormatter: (value) => displayDate({ date: value }),
          },
        }),
        warehouseFeatureFlags.value.outboundDeliveries.showPromiseDate
          ? columnHelper.accessor('promiseDate', {
              header: t('columns.promisedDate'),
              cell: ({ getValue }) => displayDateTime({ date: getValue() }),
              meta: {
                columnType: ColumnType.dateTime,
                exportFormatter: (value) => displayDateTime({ date: value }),
              },
            })
          : null,
        columnHelper.accessor('doorCode', {
          header: t('columns.doorAssigned'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        warehouseFeatureFlags.value.deliveries.showERPBlock
          ? columnHelper.accessor('blockStatus', {
              header: t('columns.block'),
              cell: ({ getValue }) => getValue(),
              meta: {
                columnType: ColumnType.string,
              },
            })
          : null,
        columnHelper.accessor('fulfillmentBlockLabel', {
          header: t('columns.fulfillmentBlock'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: fulfillmentBlockList,
          },
        }),
        warehouseFeatureFlags.value.deliveries.showERPBlock
          ? columnHelper.accessor('erpBlockingReason', {
              header: t('columns.blockingReason'),
              cell: ({ getValue }) => getValue(),
              meta: {
                columnType: ColumnType.string,
              },
            })
          : null,
        columnHelper.accessor('progressString', {
          header: t('columns.progress'),
          cell: ({ getValue }) => tC(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(TaskStatus).map((status) => ({
              value: TaskStatus[status],
              display: tC(`common.${TaskStatus[status]}`),
            })),
            exportFormatter: (value) => tC(`common.${value}`),
          },
        }),
        columnHelper.accessor('progress', {
          header: t('columns.progressPercent'),
          cell: ({ getValue }) => <ProgressBar percent={getValue()} />,
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value) => `${value}%`,
          },
        }),
        warehouseFeatureFlags.value.deliveries.showAvailability
          ? columnHelper.accessor('availability', {
              header: t('columns.availability'),
              cell: ({ row, getValue }) =>
                row.original.type === DeliveryType.Fulfillment ? (
                  <ProgressBar percent={getValue()} />
                ) : (
                  ''
                ),
              meta: {
                columnType: ColumnType.number,
                exportFormatter: (value, row) =>
                  row.type === DeliveryType.Fulfillment ? `${value}%` : '',
              },
            })
          : null,
        columnHelper.accessor('pickOrPutawayStatus', {
          header: t('columns.pickPutawayStatus'),
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
          ? columnHelper.accessor('loadOrUnloadStatus', {
              header: t('columns.loadUnloadStatus'),
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
        warehouseFeatureFlags.value.deliveries.showGoodsIssueReceipt
          ? columnHelper.accessor('goodsReceiptOrIssueStatus', {
              header: t('columns.goodsIssueReceiptStatus'),
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
        columnHelper.accessor('totalWeightUOMCode', {
          header: t('columns.weightUnitOfMeasureAbbr'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: uomList,
          },
        }),
        columnHelper.accessor('totalGrossWeight', {
          header: t('columns.grossWeight'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('totalNetWeight', {
          header: t('columns.netWeight'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('totalVolumeUOMCode', {
          header: t('columns.volumeUnitOfMeasureAbbr'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: uomList,
          },
        }),
        columnHelper.accessor('totalVolume', {
          header: t('columns.volume'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('erpSalesOrder', {
          header: t('columns.salesOrder'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('soldToBusinessPartnerName', {
          header: t('columns.soldTo'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BUSINESS_PARTNER_DETAILS}/${row.original.soldToId}`)}
              text={getValue()}
              dataTestId="deliveries-fulfillments-overview-sold-to-name-link"
            />
          ),
          meta: {
            columnType: ColumnType.enum,
            options: partnersByName,
          },
        }),
        columnHelper.accessor('soldToBusinessPartnerCode', {
          header: t('columns.soldToCode'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BUSINESS_PARTNER_DETAILS}/${row.original.soldToId}`)}
              text={getValue()}
              dataTestId="deliveries-fulfillments-overview-sold-to-code-link"
            />
          ),
          meta: {
            columnType: ColumnType.enum,
            options: partnersByName,
          },
        }),
        columnHelper.accessor('shipToBusinessPartnerName', {
          header: t('columns.shipTo'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BUSINESS_PARTNER_DETAILS}/${row.original.shipToId}`)}
              text={getValue()}
              dataTestId="deliveries-fulfillments-overview-ship-to-name-link"
            />
          ),
          meta: {
            columnType: ColumnType.enum,
            options: partnersByName,
          },
        }),
        columnHelper.accessor('shipToBusinessPartnerCode', {
          header: t('columns.shipToCode'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BUSINESS_PARTNER_DETAILS}/${row.original.shipToId}`)}
              text={getValue()}
              dataTestId="deliveries-fulfillments-overview-ship-to-code-link"
            />
          ),
          meta: {
            columnType: ColumnType.enum,
            options: partnersByCode,
          },
        }),
        columnHelper.accessor('erpPurchaseOrder', {
          header: tC('common.purchaseOrder'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('supplierBusinessPartnerName', {
          header: t('columns.supplier'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BUSINESS_PARTNER_DETAILS}/${row.original.supplierId}`)}
              text={getValue()}
              dataTestId="deliveries-fulfillments-overview-supplier-name-link"
            />
          ),
          meta: {
            columnType: ColumnType.enum,
            options: partnersByName,
          },
        }),
        columnHelper.accessor('supplierBusinessPartnerCode', {
          header: t('columns.supplierCode'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BUSINESS_PARTNER_DETAILS}/${row.original.supplierId}`)}
              text={getValue()}
              dataTestId="deliveries-fulfillments-overview-supplier-code-link"
            />
          ),
          meta: {
            columnType: ColumnType.enum,
            options: partnersByCode,
          },
        }),
        columnHelper.accessor('billOfLading', {
          header: t('columns.billOfLad'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('createdAt', {
          header: t('columns.createdDateTime'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('updatedAt', {
          header: t('columns.updatedDateTime'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        warehouseFeatureFlags.value.deliveries.showERPDates
          ? columnHelper.accessor('erpCreated', {
              header: t('columns.erpCreatedDateTime'),
              cell: ({ getValue }) => displayDateTime({ date: getValue() }),
              meta: {
                columnType: ColumnType.dateTime,
                exportFormatter: (value) => displayDateTime({ date: value }),
              },
            })
          : null,
        warehouseFeatureFlags.value.deliveries.showERPDates
          ? columnHelper.accessor('erpLastChanged', {
              header: t('columns.erpUpdatedDateTime'),
              cell: ({ getValue }) => displayDateTime({ date: getValue() }),
              meta: {
                columnType: ColumnType.dateTime,
                exportFormatter: (value) => displayDateTime({ date: value }),
              },
            })
          : null,
        columnHelper.accessor('warehouseCode', {
          header: tC('common.warehouse'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('export', {
          header: t('columns.export'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.boolean,
          },
        }),
      ];
      return columns.filter((c) => !!c);
    },
    [businessPartnerList, fulfillmentBlockList, uomList, displayDate, displayDateTime],
  );

  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: ViewDeliverySortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const linkedFilter = useCreateLinkedDateRangeFilter<_TFieldNames>(
    ViewDeliverySortFields.DueDate,
    linkedDateRange,
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: ViewDeliverySortFields.DueDate,
        desc: false,
      },
    ],
    [],
  );

  const rowSelectionEnabledFilter = useCallback<
    RowSelectionEnabledFilter<DeliveryFulfillmentDataType>
  >((row) => row.original.pickOrPutawayStatus === DeliveryCompletionStatus.NotStarted, []);

  return {
    selectedDeliveries: selection,
    triggerDeliveriesRefetch: triggerDataTableRefetch,
    deliveriesFulfillmentOverviewDataTableProps: validateDataTableProps<
      DeliveryFulfillmentDataType,
      _TFilterType,
      _TFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.DeliveriesFulfillmentsOverview,
      tableHeader: t('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      linkedFilter,
      defaultSorting,
      rowSelection: deliveryActionsAvailable
        ? {
            ...rowSelection,
            rowSelectionEnabledFilter,
          }
        : undefined,
      refetchTrigger,
    }),
  };
};

export default useDeliveriesFulfillmentsOverviewDataTable;
