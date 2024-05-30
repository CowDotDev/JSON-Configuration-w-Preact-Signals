import { DeleteOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseInventoryFragment } from '@/graphql/defs/shared-fragments/__generated__/inventory.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreatePutawayLicensePlateColumns from '@/components/Table/hooks/shared-columns/useCreatePutawayLicensePlateColumns';
import { TBaseInvStockDataType } from '@/components/Table/hooks/shared-columns/useCreateStockRequestColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import IconButton from '@components/styled/IconButton';

const useCreatePutawayLicensePlateDataTable = (baseInventory: BaseInventoryFragment[]) => {
  const { t } = useTranslation('components');

  const [data, setData] = useState(baseInventory);

  const addRemoveLicensePlateAction: TColumnFactory<TBaseInvStockDataType> = (columnHelper) => {
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

  const createPutawayLicensePlate = useCreatePutawayLicensePlateColumns({
    dataTestId: 'create-putaway-license-plate-task',
    addColumnsToStart: addRemoveLicensePlateAction,
  });
  const columns = useCreateDataTableColumns<TBaseInvStockDataType>(createPutawayLicensePlate);

  useEffect(() => {
    setData(baseInventory);
  }, [baseInventory]);

  return {
    selectedInventory: data,
    dataTableProps: validateDataTableProps<TBaseInvStockDataType>({
      type: 'data',
      tableId: DataTableIds.LicensePlatePutawayTasks,
      tableHeader: t('licensePlateActions.putaway.generate.putawayLicensePlates'),
      columns,
      data,
      isDataLoading: false,
    }),
  };
};

export default useCreatePutawayLicensePlateDataTable;
