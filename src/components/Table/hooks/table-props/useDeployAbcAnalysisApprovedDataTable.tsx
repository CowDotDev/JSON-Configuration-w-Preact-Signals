import { DeleteOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateSlottingAbcAnalysisColumns, {
  TABCAnalysisDataType,
} from '@/components/Table/hooks/shared-columns/useCreateSlottingAbcAnalysisColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import IconButton from '@components/styled/IconButton';

interface IUseRunDeployApprovedAbcAnalysisDataTableProps {
  handleRemoveApproved?: (id: string) => void;
  approvedAbcAnalysisData: TABCAnalysisDataType[];
}

const useDeployAbcAnalysisApprovedDataTable = ({
  handleRemoveApproved,
  approvedAbcAnalysisData,
}: IUseRunDeployApprovedAbcAnalysisDataTableProps) => {
  const { t } = useTranslation('components');

  const addRemoveApprovedColumnAction: TColumnFactory<TABCAnalysisDataType> = (columnHelper) => {
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
    });

    return [removeApprovedColumnAction];
  };

  const abcAnalysisColumns = useCreateSlottingAbcAnalysisColumns({
    addColumnsToStart: handleRemoveApproved ? addRemoveApprovedColumnAction : undefined,
  });
  const columns = useCreateDataTableColumns<TABCAnalysisDataType>(abcAnalysisColumns);

  return {
    dataTableProps: validateDataTableProps<TABCAnalysisDataType>({
      type: 'data',
      tableId: DataTableIds.RunDeployApprovedAbcAnalysis,
      tableHeader: t('slotting.abcDataAcceptedRecommendations'),
      columns,
      data: approvedAbcAnalysisData,
      isDataLoading: false,
      disableExport: true,
    }),
  };
};

export default useDeployAbcAnalysisApprovedDataTable;
