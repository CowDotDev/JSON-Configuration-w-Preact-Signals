import { DeleteOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CountArtifactFragment } from '@/graphql/defs/pages/__generated__/inventory-counting.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateInventoryCountingAdjustmentsColumns, {
  TCountInvAdjustmentDataType,
} from '@/components/Table/hooks/shared-columns/useCreateInventoryCountingAdjustmentsColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import IconButton from '@components/styled/IconButton';

const useReviewInventoryCountingAdjustmentDataTable = (countArtifacts: CountArtifactFragment[]) => {
  const { t } = useTranslation('pages', { keyPrefix: 'inventory.counting' });
  const [data, setData] = useState(countArtifacts);

  const addRemoveItemAction: TColumnFactory<TCountInvAdjustmentDataType> = (columnHelper) => {
    return [
      columnHelper.display({
        id: DataTableDisplayColumns.Delete,
        header: '',
        cell: ({ row }) => (
          <Box position="relative" width="100%">
            <IconButton
              onClick={() => {
                setData((_prev) =>
                  _prev.filter((_data) => _data.licensePlateId !== row.original.licensePlateId),
                );
              }}
              styledVariant="dataGrid"
              size="small"
            >
              <DeleteOutline data-testid="remove-approved-abc-analysis" />
            </IconButton>
          </Box>
        ),
        size: 40,
        enableColumnFilter: false,
        enableHiding: false,
        enableResizing: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
    ];
  };

  const createInvetoryCountingAdjustmentReviewColumns =
    useCreateInventoryCountingAdjustmentsColumns({
      dataTestId: 'inventory-counting-adjustment-review',
      addColumnsToStart: addRemoveItemAction,
      removeColumns: [
        'createdAt',
        'status',
        'countTaskCode',
        'licensePlateCode',
        'countTaskCompletedByUserFirstName',
      ],
    });
  const columns = useCreateDataTableColumns<TCountInvAdjustmentDataType>(
    createInvetoryCountingAdjustmentReviewColumns,
  );

  useEffect(() => {
    setData(countArtifacts);
  }, [countArtifacts]);

  return {
    selectedItems: data,
    dataTableProps: validateDataTableProps<TCountInvAdjustmentDataType>({
      type: 'data',
      tableId: DataTableIds.InventoryCountingAdjustmentsReview,
      tableHeader: t('adjustments'),
      columns,
      data,
      isDataLoading: false,
    }),
  };
};

export default useReviewInventoryCountingAdjustmentDataTable;
