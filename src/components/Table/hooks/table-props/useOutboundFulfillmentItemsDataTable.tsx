import { AssignmentOutlined } from '@mui/icons-material';
import { Box, Tooltip } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { DeliveryCompletionStatus, ViewFulfillmentItemSortFields } from '@/graphql/types.generated';
import DeprecatedWarehouseFeatureFlagToggles from '@/signals/configuration/deprecatedWarehouseFeatureFlagToggles/DeprecatedWarehouseFeatureFlagToggles';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateOutboundFulfillmentItemColumns, {
  FULFILLMENT_ITEMS_HOOK,
  TFulfillmentItemsDataType,
  TFulfillmentItemsFieldNames,
  TFulfillmentItemsFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateOutboundFulfillmentItemColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { IDropdownMenuItem } from '@components/dropdown-menu';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import IconButton from '@components/styled/IconButton';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { ModalTypes } from '@models/modal';
import { OutboundDetailsWithProgress } from '@pages/deliveries/outbound-fulfillments/FulfillmentDetailsActions';
import { OutboundDeliveryItemsView } from '@pages/deliveries/outbound-fulfillments/tables/OutboundFulfillmentItemsInvDataTables';

const useOutboundFulfillmentItemsDataTable = (
  fulfillmentId: string,
  fulfillmentItemViews: IDropdownMenuItem<OutboundDeliveryItemsView>[] | undefined,
  fulfillmentDetails: OutboundDetailsWithProgress,
) => {
  const { t } = useTranslation('pages');
  const warehouseFeatureFlags = DeprecatedWarehouseFeatureFlagToggles;

  const { selection, clearSelection, rowSelection } =
    useDataTableSelection<TFulfillmentItemsDataType>(SelectionType.multi, 'id');
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const addAllocateInventoryButton: TColumnFactory<TFulfillmentItemsDataType> = useCallback(
    (columnHelper) => {
      return [
        columnHelper.display({
          id: DataTableDisplayColumns.Action,
          header: '',
          cell: ({ row }) => {
            return row.original.pickStatus !== DeliveryCompletionStatus.Complete ? (
              <FulfillmentItemAllocationAction
                fulfillmentItem={row.original}
                fulfillmentDetails={fulfillmentDetails}
                tooltipTitle={
                  !fulfillmentDetails?.door?.id
                    ? t('deliveries.fulfillmentItems.doorAssignedWarning')
                    : ''
                }
              />
            ) : (
              ''
            );
          },
          size: 40,
          enableColumnFilter: false,
          enableHiding: false,
          enableResizing: false,
          enableSorting: false,
          enableMultiSort: false,
        }),
      ];
    },
    [fulfillmentDetails],
  );
  const createFulfillmentItemColumns = useCreateOutboundFulfillmentItemColumns({
    dataTestId: 'fulfillment-items',
    addColumnsToStart:
      warehouseFeatureFlags.value.outboundDeliveries.pickTaskCreation === 'allocation'
        ? addAllocateInventoryButton
        : undefined,
    removeColumns: ['fulfillmentCode', 'fulfillmentDueDate'],
  });
  const columns = useCreateDataTableColumns<TFulfillmentItemsDataType>(
    createFulfillmentItemColumns,
  );

  const baseFilter = useMemo<ColumnFilter<TFulfillmentItemsFieldNames>[]>(
    () => [
      {
        columnId: ViewFulfillmentItemSortFields.DeliveryId,
        operator: FilterOperator.eq,
        value: fulfillmentId,
      },
    ],
    [fulfillmentId],
  );

  const defaultSorting = useMemo<IDataTableSort<TFulfillmentItemsFieldNames>[]>(
    () => [
      {
        id: ViewFulfillmentItemSortFields.Item,
        desc: false,
      },
    ],
    [],
  );

  return {
    selectedFulfillmentItems: selection,
    triggerItemsDataTableRefetch: triggerDataTableRefetch,
    fulfillmentItemsDataTableProps: validateDataTableProps<
      TFulfillmentItemsDataType,
      TFulfillmentItemsFilterType,
      TFulfillmentItemsFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.OutboundFulfillmentItems,
      tableHeader: t(`deliveries.fulfillmentItems.${OutboundDeliveryItemsView.FulfillmentItem}`),
      layoutDropdownAddtOptions: fulfillmentItemViews || undefined,
      layoutDropdownAddtOptionLabel: fulfillmentItemViews
        ? t('deliveries.fulfillmentItemViews')
        : undefined,
      columns,
      queryHook: FULFILLMENT_ITEMS_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
      rowSelection,
    }),
  };
};

export default useOutboundFulfillmentItemsDataTable;

const FulfillmentItemAllocationAction = ({
  fulfillmentItem,
  fulfillmentDetails,
  tooltipTitle,
}: {
  fulfillmentItem: TFulfillmentItemsDataType;
  fulfillmentDetails: OutboundDetailsWithProgress;
  tooltipTitle: string;
}) => {
  const { openModal } = useModalToggle();

  return (
    <Tooltip
      title={tooltipTitle}
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: (theme) => theme.palette.primary.main,
            '& .MuiTooltip-arrow': {
              color: (theme) => theme.palette.primary.main,
            },
          },
        },
      }}
    >
      <Box position="relative" width="100%">
        <IconButton
          onClick={() => {
            fulfillmentDetails?.door?.id &&
              openModal({
                type: ModalTypes.fulfillmentItemAllocation,
                fulfillmentItem,
              });
          }}
          styledVariant="dataGrid"
          size="small"
          sx={{
            '& svg': {
              color: (theme) =>
                fulfillmentDetails?.door?.id
                  ? theme.palette.secondary.main
                  : theme.palette.slateGrey.light,
            },
          }}
        >
          <AssignmentOutlined data-testid="assign-inventory" />
        </IconButton>
      </Box>
    </Tooltip>
  );
};
