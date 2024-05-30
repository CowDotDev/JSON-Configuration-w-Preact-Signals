import { EditOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateZonesColumns from '@/components/Table/hooks/shared-columns/useCreateZonesColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants } from '@/components/Table/types/data-table';
import Box from '@components/styled/Box';
import IconButton from '@components/styled/IconButton';
import { IZone } from '@hooks/form/ruleset/useRulesetForm';

const useZonesRulesetDataTable = (
  zones: IZone[],
  review: boolean,
  onEditZone: (zone: IZone) => void,
) => {
  const { t } = useTranslation('components');

  const addEditZoneAction: TColumnFactory<IZone> = (columnHelper) => {
    return [
      columnHelper.display({
        id: DataTableDisplayColumns.Options,
        cell: ({ row }) => (
          <Box>
            <IconButton styledVariant="dataGrid" onClick={() => onEditZone(row.original)}>
              <EditOutlined data-testid="edit-zone-ruleset" />
            </IconButton>
          </Box>
        ),
        size: 30,
        enableColumnFilter: false,
        enableHiding: false,
        enableResizing: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
    ];
  };

  const createZonesColumns = useCreateZonesColumns({
    addColumnsToStart: !review ? addEditZoneAction : undefined,
  });
  const columns = useCreateDataTableColumns<IZone>(createZonesColumns);

  return {
    dataTableProps: validateDataTableProps<IZone>({
      type: 'data',
      variant: DataTableVariants.BasicBordered,
      tableHeader: t('zones.title'),
      tableId: DataTableIds.RulesetZones,
      columns,
      data: zones,
      isDataLoading: false,
      disableQuickFilters: true,
    }),
  };
};

export default useZonesRulesetDataTable;
