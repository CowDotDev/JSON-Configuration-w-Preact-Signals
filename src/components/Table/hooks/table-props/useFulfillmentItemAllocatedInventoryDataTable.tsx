import { DeleteOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AllocatedLicensePlateFragment,
  useAllocateInventoryToFulfillmentItemMutation,
  useGetAllocatedInventoryForFulfillmentItemQuery,
} from '@/graphql/defs/components/modals/__generated__/fulfillment-item-allocation-modal.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import IconButton from '@components/styled/IconButton';
import Tooltip from '@components/styled/Tooltip';
import QuantityConversionsTooltip from '@components/tooltips/quantity-conversions';
import { useSnackbar } from '@context/snackbar';

const useFulfillmentItemAllocatedInventoryDataTable = (
  fulfillmentItemId: string,
  refetchAllocableLps: () => void,
) => {
  const { t } = useTranslation('components');
  const { showMessage } = useSnackbar();

  const dataTestId = DataTableIds.FulfillmentItemAllocatedInventory;

  const [loading, setLoading] = useState(true);

  const [allocatedLicensePlates, setAllocatedLicensePlates] = useState<
    AllocatedLicensePlateFragment[]
  >([]);
  const { refetch: refetchAllocatedLps } = useGetAllocatedInventoryForFulfillmentItemQuery({
    variables: {
      fulfillmentItemId,
    },
    onCompleted: ({ internalStockOrderAssignedInventory: { nodes } }) => {
      setAllocatedLicensePlates(nodes);
      setLoading(false);
    },
    onError: (e) => {
      showMessage({
        type: 'error',
        message: e.message,
      });
      setLoading(false);
    },
  });

  const [deallocateLicensePlates] = useAllocateInventoryToFulfillmentItemMutation({
    onCompleted: () => {
      showMessage({
        type: 'success',
        message: t('modal.fulfillmentItem.allocation.deallocateSuccess'),
      });
      setLoading(false);
      refetchAllocableLps();
      refetchAllocatedLps();
    },
    onError: (e) => {
      showMessage({
        type: 'error',
        message: e.message,
      });
      setLoading(false);
    },
  });

  const columns = useCreateDataTableColumns<AllocatedLicensePlateFragment>(
    (columnHelper) => [
      columnHelper.display({
        id: DataTableDisplayColumns.Delete,
        header: '',
        cell: ({ row }) => (
          <Box position="relative" width="100%" data-testid={`${dataTestId}-delete-line`}>
            <Tooltip
              title={
                row.original.activeOrCompletedPickTask
                  ? t('modal.fulfillmentItem.allocation.openTasksError')
                  : ''
              }
              placement="right"
              arrow
              styledVariant="primaryBg"
            >
              {/* Using `disabled` prop breaks tooltip from showing... so this seems easiest for now ~ Zach 1/5/24 */}
              {row.original.activeOrCompletedPickTask ? (
                <IconButton styledVariant="dataGridDisabled" size="small">
                  <DeleteOutline data-testid="remove-review-task-disabled" />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    setLoading(true);
                    deallocateLicensePlates({
                      variables: {
                        input: {
                          unassign: [{ licensePlateId: row.original.licensePlateId }],
                          fulfillmentItemId: row.original.fulfillmentItemId,
                        },
                      },
                    });
                  }}
                  styledVariant="dataGrid"
                  size="small"
                >
                  <DeleteOutline data-testid="remove-review-task" />
                </IconButton>
              )}
            </Tooltip>
          </Box>
        ),
        size: 40,
        enableColumnFilter: false,
        enableHiding: false,
        enableResizing: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
      columnHelper.accessor('licensePlateCode', {
        header: t('columns.licensePlateCode'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
        size: 200,
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
        cell: ({ getValue }) => getValue() || '',
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('unitOfMeasure', {
        header: t('columns.qtyUom'),
        cell: ({ getValue }) => getValue() || '',
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('quantity', {
        header: t('columns.assignedQty'),
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
    ],
    [],
  );

  return {
    allocatedLicensePlates,
    dataTableProps: validateDataTableProps<AllocatedLicensePlateFragment>({
      type: 'data',
      tableId: DataTableIds.FulfillmentItemAllocatedInventory,
      tableHeader: t('modal.fulfillmentItem.allocation.allocatedTableTitle'),
      columns,
      data: allocatedLicensePlates,
      isDataLoading: loading,
    }),
  };
};

export default useFulfillmentItemAllocatedInventoryDataTable;
