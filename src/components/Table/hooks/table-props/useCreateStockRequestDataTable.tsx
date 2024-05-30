import { DeleteOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseInventoryFragment } from '@/graphql/defs/shared-fragments/__generated__/inventory.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateStockRequestColumns, {
  TBaseInvStockDataType,
} from '@/components/Table/hooks/shared-columns/useCreateStockRequestColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import IconButton from '@components/styled/IconButton';

const useCreateReworkStockRequestDataTable = (baseInventory: BaseInventoryFragment[]) => {
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

  const createReworkStockRequestColumns = useCreateStockRequestColumns({
    dataTestId: 'create-rework-stock-request',
    addColumnsToStart: addRemoveLicensePlateAction,
  });
  const columns = useCreateDataTableColumns<TBaseInvStockDataType>(createReworkStockRequestColumns);

  useEffect(() => {
    setData(baseInventory);
  }, [baseInventory]);

  return {
    selectedInventory: data,
    dataTableProps: validateDataTableProps<TBaseInvStockDataType>({
      type: 'data',
      tableId: DataTableIds.CreateStockRequestDataTable,
      tableHeader: t('licensePlateActions.reworkLicensePlates'),
      columns,
      data,
      isDataLoading: false,
    }),
  };
};

export default useCreateReworkStockRequestDataTable;
