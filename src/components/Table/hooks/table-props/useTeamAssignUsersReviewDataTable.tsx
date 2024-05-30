import { useTranslation } from 'react-i18next';

import { AssignUserFragment } from '@/graphql/defs/shared-fragments/__generated__/assign-user.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateTeamAssignUsersColumns, {
  TAssignUserDataType,
} from '@/components/Table/hooks/shared-columns/useCreateTeamAssignUsersColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';

const useTeamAssignUsersReviewDataTable = (selectedUsers: AssignUserFragment[]) => {
  const { t: tP } = useTranslation('pages', { keyPrefix: 'teams' });

  const createTeamAssignUsersColumns = useCreateTeamAssignUsersColumns();
  const columns = useCreateDataTableColumns<TAssignUserDataType>(createTeamAssignUsersColumns);

  return {
    dataTableProps: validateDataTableProps<TAssignUserDataType>({
      type: 'data',
      tableId: DataTableIds.TeamAssignUsers,
      tableHeader: tP('assignedUsersTitle'),
      columns,
      data: selectedUsers,
      isDataLoading: false,
    }),
  };
};

export default useTeamAssignUsersReviewDataTable;
