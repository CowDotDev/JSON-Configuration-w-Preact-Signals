import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AssignUserFragment } from '@/graphql/defs/shared-fragments/__generated__/assign-user.generated';
import { ViewUserSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateTeamAssignUsersColumns, {
  TAssignUserDataType,
  TAssignUserFieldNames,
  TAssignUserFilterType,
  TEAM_ASSIGN_USERS_HOOK,
} from '@/components/Table/hooks/shared-columns/useCreateTeamAssignUsersColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';

const useTeamAssignUsersDataTable = (preselectedUsers: AssignUserFragment[]) => {
  const { t: tP } = useTranslation('pages', { keyPrefix: 'teams' });

  const { selection, rowSelection } = useDataTableSelection<TAssignUserDataType>(
    SelectionType.multi,
    'id',
  );
  const selectionOverride = useMemo<AssignUserFragment[]>(() => preselectedUsers, []);

  const createTeamAssignUsersColumns = useCreateTeamAssignUsersColumns();
  const columns = useCreateDataTableColumns<TAssignUserDataType>(createTeamAssignUsersColumns);

  const baseFilter = useMemo<ColumnFilter<TAssignUserFieldNames>[]>(
    () => [
      {
        columnId: ViewUserSortFields.Status,
        operator: FilterOperator.eq,
        value: 'active',
      },
    ],
    [],
  );

  const defaultSorting = useMemo<IDataTableSort<TAssignUserFieldNames>[]>(
    () => [
      {
        id: ViewUserSortFields.LastName,
        desc: false,
      },
      {
        id: ViewUserSortFields.FirstName,
        desc: false,
      },
    ],
    [],
  );

  return {
    selectedUsers: selection,
    dataTableProps: validateDataTableProps<
      TAssignUserDataType,
      TAssignUserFilterType,
      TAssignUserFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.TeamAssignUsers,
      tableHeader: tP('assignUsersTitle'),
      columns,
      queryHook: TEAM_ASSIGN_USERS_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection: {
        selectionOverride,
        ...rowSelection,
      },
    }),
  };
};

export default useTeamAssignUsersDataTable;
