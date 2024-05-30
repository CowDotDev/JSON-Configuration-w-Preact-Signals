import { DeleteOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateProductExclusionsColumns, {
  _TProductExclusionDataType,
} from '@/components/Table/hooks/shared-columns/useCreateProductExclusionListColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import IconButton from '@components/styled/IconButton';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';

interface IUseProductExclusionsApprovedDataTableProps {
  approvedProductExclusions: _TProductExclusionDataType[];
  handleRemoveApproved?: (id: string) => void;
}

const useProductExclusionsApprovedDataTable = ({
  approvedProductExclusions,
  handleRemoveApproved,
}: IUseProductExclusionsApprovedDataTableProps) => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.slotting-product-exclusions' });

  const addRemoveApprovedColumnAction: TColumnFactory<_TProductExclusionDataType> = (
    columnHelper,
  ) => {
    const removeApprovedColumnAction = columnHelper.display({
      id: DataTableDisplayColumns.Delete,
      header: '',
      cell: ({ row }) => (
        <Box position="relative" width="100%">
          <IconButton
            onClick={() => {
              handleRemoveApproved(row.original.id);
            }}
            styledVariant="dataGrid"
            size="small"
          >
            <DeleteOutline data-testid="remove-approved-product-exclusion" />
          </IconButton>
        </Box>
      ),
      size: 40,
      enableColumnFilter: false,
      enableHiding: false,
      enableResizing: false,
      enableSorting: false,
      enableMultiSort: false,
    });

    return [removeApprovedColumnAction];
  };

  const productExclusionsColumns = useCreateProductExclusionsColumns({
    addColumnsToStart: handleRemoveApproved ? addRemoveApprovedColumnAction : undefined,
  });

  const columns = useCreateDataTableColumns<_TProductExclusionDataType>(productExclusionsColumns);

  return {
    dataTableProps: validateDataTableProps<_TProductExclusionDataType>({
      type: 'data',
      tableId: DataTableIds.ProductExclusionsApproved,
      tableHeader: t('title'),
      columns,
      data: approvedProductExclusions,
      isDataLoading: false,
      disableExport: true,
    }),
  };
};

export default useProductExclusionsApprovedDataTable;
