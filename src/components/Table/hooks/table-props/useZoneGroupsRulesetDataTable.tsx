import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateZoneGroupsColumns from '@/components/Table/hooks/shared-columns/useCreateZoneGroupsColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants } from '@/components/Table/types/data-table';
import Box from '@components/styled/Box';
import IconButton from '@components/styled/IconButton';
import { IZoneGroup } from '@hooks/form/ruleset/useRulesetForm';

const useZoneGroupsRulesetDataTable = (
  zoneGroups: IZoneGroup[],
  review: boolean,
  onEditZoneGroup: (zoneGroup: IZoneGroup) => void,
  onDeleteZoneGroup: (zoneGroup: IZoneGroup) => void,
) => {
  const { t } = useTranslation('components');

  const addZoneGroupsActions: TColumnFactory<IZoneGroup> = (columnHelper) => {
    return [
      columnHelper.display({
        id: DataTableDisplayColumns.Options,
        cell: ({ row }) => (
          <Box>
            <IconButton onClick={() => onEditZoneGroup(row.original)} styledVariant="dataGrid">
              <EditOutlined data-testid="edit-zone-group-ruleset" />
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
      columnHelper.display({
        id: DataTableDisplayColumns.Delete,
        header: '',
        cell: ({ row }) => (
          <Box position="relative" width="100%">
            <IconButton styledVariant="dataGrid" onClick={() => onDeleteZoneGroup(row.original)}>
              <DeleteOutline data-testid="remove-zone-group-ruleset" />
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

  const createZoneGroupsColumns = useCreateZoneGroupsColumns({
    addColumnsToStart: !review ? addZoneGroupsActions : undefined,
  });
  const columns = useCreateDataTableColumns<IZoneGroup>(createZoneGroupsColumns);

  return {
    dataTableProps: validateDataTableProps<IZoneGroup>({
      type: 'data',
      variant: DataTableVariants.BasicBordered,
      tableHeader: t('common.zoneGroups'),
      tableId: DataTableIds.RulesetZoneGroups,
      columns,
      data: zoneGroups,
      isDataLoading: false,
      disableQuickFilters: true,
    }),
  };
};

export default useZoneGroupsRulesetDataTable;
