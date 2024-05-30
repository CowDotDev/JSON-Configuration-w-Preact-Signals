import { Divider, Tooltip } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useUserAdminSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useUserAdminSettingsDataTable.generated';
import { ViewUserSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import createEditRowColumnDef from '@/components/Table/columnDefs/editRow';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import HoverCell from '@/components/Table/table/cells/HoverCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import Typography from '@components/styled/Typography';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { ModalTypes } from '@models/modal';

const LAZY_QUERY_HOOK = useUserAdminSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const TeamsTooltip = ({ teams, rowTitle }: { teams: string[]; rowTitle: string }) => {
  const styledTeams = teams.map((team, i) => {
    return (
      <>
        <Typography sx={{ padding: '10px 0px', fontSize: '14px', fontWeight: 700 }}>
          {team}
        </Typography>
        {i !== teams.length - 1 && <Divider sx={{ background: 'white' }} />}
      </>
    );
  });

  return (
    <Tooltip
      title={styledTeams}
      placement="left"
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: (theme) => theme.palette.primary.main,
            '& .MuiTooltip-arrow': {
              color: (theme) => theme.palette.primary.main,
            },
          },
        },
      }}
    >
      <Typography styledVariant="inlineLink">{rowTitle}</Typography>
    </Tooltip>
  );
};

const useUserAdminSettingsDataTable = () => {
  const { t } = useTranslation('pages');
  const { t: tC } = useTranslation('components');
  const { openModal } = useModalToggle();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const columns = useCreateDataTableColumns<_TDataType>((columnHelper) => {
    const _columns = [
      createEditRowColumnDef(columnHelper, (user) => {
        openModal(
          {
            type: ModalTypes.userUpdate,
            title: tC('modal.users.update.title'),
            user,
          },
          {
            afterClose: (success) => {
              if (success) triggerDataTableRefetch();
            },
          },
        );
      }),
      columnHelper.accessor('firstName', {
        header: t('settings.user-admin.columns.firstName'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('lastName', {
        header: t('settings.user-admin.columns.lastName'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('email', {
        header: t('settings.user-admin.columns.email'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('phone', {
        header: t('settings.user-admin.columns.phone'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('userTeams', {
        header: t('settings.user-admin.columns.teams'),
        cell: ({ getValue }) => {
          const teams = getValue();

          if (teams.length === 0) {
            return '';
          }

          const userTeams = teams.map((team) => team.teamName);

          return teams.length === 1 ? (
            userTeams
          ) : (
            <TeamsTooltip teams={userTeams} rowTitle={t('settings.user-admin.multiple')} />
          );
        },
        meta: {
          columnType: ColumnType.string,
          exportFormatter: (teams) => teams.map((team) => team.teamName).join(', '),
        },
        enableSorting: false,
        enableMultiSort: false,
        enableColumnFilter: false,
        enableGlobalFilter: false,
      }),
      columnHelper.accessor('userGroups', {
        header: t('settings.user-admin.columns.userGroup'),
        cell: ({ getValue }) => {
          const val = getValue();
          const userGroups = val.map((items) => items.name).join(', ');
          return <HoverCell hoverText={userGroups} text={userGroups} />;
        },
        meta: {
          columnType: ColumnType.string,
          exportFormatter: (value) => value.map((items) => items.name).join(', '),
        },
        enableSorting: false,
        enableMultiSort: false,
        enableColumnFilter: false,
        enableGlobalFilter: false,
      }),
      columnHelper.accessor('status', {
        header: t('settings.user-admin.columns.status'),
        cell: ({ getValue }) => tC(`common.${getValue() as 'inactive' | 'active'}`),
        meta: {
          columnType: ColumnType.enum,
          options: [
            { value: 'inactive', display: tC('common.inactive') },
            { value: 'active', display: tC('common.active') },
          ],
          exportFormatter: (value) => tC(`common.${value as 'inactive' | 'active'}`),
        },
      }),
    ];

    return _columns;
  }, []);

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
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
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.UserAdminSettings,
      tableHeader: t('settings.user-admin.title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useUserAdminSettingsDataTable;
