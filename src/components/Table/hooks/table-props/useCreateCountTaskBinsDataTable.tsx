import { DeleteOutline } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CountInventoryBinFragment } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateCountingInventoryColumns.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateCountingInventoryColumns, {
  TCountInvDataType,
} from '@/components/Table/hooks/shared-columns/useCreateCountingInventoryColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import IconButton from '@components/styled/IconButton';

const useCreateCountTaskBinsDataTable = (bins: CountInventoryBinFragment[]) => {
  const { t } = useTranslation('components');

  const [data, setData] = useState(bins);
  const addRemoveBinAction: TColumnFactory<TCountInvDataType> = (columnHelper) => {
    return [
      columnHelper.display({
        id: DataTableDisplayColumns.Delete,
        header: '',
        cell: ({ row }) => (
          <Box position="relative" width="100%">
            <IconButton
              onClick={() => {
                setData((_prev) => _prev.filter((_bin) => _bin.id !== row.original.id));
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

  const createCountInventoryColumns = useCreateCountingInventoryColumns({
    dataTestId: 'create-bin-count',
    addColumnsToStart: addRemoveBinAction,
    removeDeepLinks: true,
    removeColumns: ['aisleCode', 'aisleColumnCode', 'level', 'areaCode', 'countTaskCode'],
  });
  const columns = useCreateDataTableColumns<TCountInvDataType>(createCountInventoryColumns);

  return {
    selectedBins: data,
    dataTableProps: validateDataTableProps<TCountInvDataType>({
      type: 'data',
      tableId: DataTableIds.CreateCountTaskBins,
      tableHeader: t('common.bins'),
      columns,
      data,
      isDataLoading: false,
    }),
  };
};

export default useCreateCountTaskBinsDataTable;
