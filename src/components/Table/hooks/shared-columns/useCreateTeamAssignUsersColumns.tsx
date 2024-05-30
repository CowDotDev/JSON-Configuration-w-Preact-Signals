import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useTeamAssignUsersTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateTeamAssignUsersColumns.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';

export const TEAM_ASSIGN_USERS_HOOK = useTeamAssignUsersTableLazyQuery;
export type TAssignUserDataType = TExtractLazyHookDataType<typeof TEAM_ASSIGN_USERS_HOOK>;
export type TAssignUserFilterType = TExtractLazyHookFetchFilterType<typeof TEAM_ASSIGN_USERS_HOOK>;
export type TAssignUserFieldNames = TExtractLazyHookFieldNames<typeof TEAM_ASSIGN_USERS_HOOK>;

const useCreateTeamAssignUsersColumns = () => {
  const { t } = useTranslation('components');

  const createTeamAssignUsersColumns = useCallback<TColumnFactory<TAssignUserDataType>>(
    (columnHelper) => [
      columnHelper.accessor('firstName', {
        header: t('columns.firstName'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('lastName', {
        header: t('columns.lastName'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('email', {
        header: t('columns.email'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
    ],
    [t],
  );

  return createTeamAssignUsersColumns;
};

export default useCreateTeamAssignUsersColumns;
