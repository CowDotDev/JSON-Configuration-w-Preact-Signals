import { DeleteOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useSlottingConfigurationsQuery } from '@/graphql/defs/list/__generated__/list-slotting-configuration.generated';
import { SlottingConfigurations_defaultData } from '@/graphql/defs/list/list-slotting-configuration';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateRearrangementRecommendationColumns, {
  TRearrangementRecommendationDataType,
} from '@/components/Table/hooks/shared-columns/useCreateRearrangementRecommendationColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { removeSwapColumns } from '@/components/Table/utils';
import IconButton from '@components/styled/IconButton';
import { useWarehouseUtils } from '@context/warehouse-utils';

interface IUseDeployRearrangementApprovedDataTableProps {
  handleRemoveApproved?: (id: string) => void;
  approvedRecommendations: TRearrangementRecommendationDataType[];
}

const useDeployRearrangementRecommendationsApprovedDataTable = ({
  handleRemoveApproved,
  approvedRecommendations,
}: IUseDeployRearrangementApprovedDataTableProps) => {
  const { t } = useTranslation('components');
  const { selectedWarehouseId } = useWarehouseUtils();

  const addRemoveApprovedColumnAction: TColumnFactory<TRearrangementRecommendationDataType> = (
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
            <DeleteOutline data-testid="remove-approved-recommendation" />
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

  const {
    data: {
      slottingConfigurations: {
        slottingConfigurations: [slottingConfiguration],
      },
    } = SlottingConfigurations_defaultData,
  } = useSlottingConfigurationsQuery({
    variables: {
      filter: {
        warehouseId: {
          eq: selectedWarehouseId,
        },
      },
    },
  });

  const removeColumns = removeSwapColumns<(keyof TRearrangementRecommendationDataType)[]>(
    slottingConfiguration?.configuration?.showSwaps,
  );

  const rearrangementRecommendationColumns = useCreateRearrangementRecommendationColumns({
    removeColumns,
    addColumnsToStart: handleRemoveApproved ? addRemoveApprovedColumnAction : undefined,
  });
  const columns = useCreateDataTableColumns<TRearrangementRecommendationDataType>(
    rearrangementRecommendationColumns,
  );

  return {
    dataTableProps: validateDataTableProps<TRearrangementRecommendationDataType>({
      type: 'data',
      tableId: DataTableIds.RunDeployMovementsApprovedMovements,
      tableHeader: t('slotting.acceptedRecommendations'),
      columns,
      data: approvedRecommendations,
      isDataLoading: false,
      disableExport: true,
    }),
  };
};

export default useDeployRearrangementRecommendationsApprovedDataTable;
