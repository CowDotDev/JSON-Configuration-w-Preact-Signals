import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  PermissionFragment,
  useLoadPermissionsLazyQuery,
} from '@/graphql/defs/pages/__generated__/roles-and-permissions.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { useSnackbar } from '@context/snackbar';

export type TPendingPermissionChanges = (PermissionFragment & { active: boolean })[];

const useRolesAndPermissionsSettingsDataTable = (activeRolePermissions: string[]) => {
  const { t } = useTranslation('components', { keyPrefix: 'permissions' });
  const { t: tC } = useTranslation('components', { keyPrefix: 'common' });
  const { t: tP } = useTranslation('pages', { keyPrefix: 'rolesAndPermissions' });
  const { showMessage } = useSnackbar();

  const [selectionOverride, setSelectionOverride] = useState<PermissionFragment[]>([]);
  const { selection, rowSelection } = useDataTableSelection<PermissionFragment>(
    SelectionType.multi,
    'id',
  );

  const [isLoadingPermissions, setIsLoadingPermissions] = useState(true);
  const [permissions, setPermissions] = useState<PermissionFragment[]>(null);
  const [getPermissions] = useLoadPermissionsLazyQuery({
    onCompleted: ({ permissions: { nodes: _permissions } }) => {
      const _activePermissions: PermissionFragment[] = [];
      _permissions.forEach((permission) => {
        const active = activeRolePermissions.indexOf(permission.id) > -1;
        if (active) {
          _activePermissions.push(permission);
        }
      });

      setPermissions(_permissions);
      setSelectionOverride(_activePermissions);
      setIsLoadingPermissions(false);
    },
    onError: (error) => {
      setIsLoadingPermissions(false);
      showMessage({
        type: 'error',
        message: tP('errorLoadingPermissions', { errorMessage: error.message }),
      });
    },
  });

  const [pendingPermissionChanges, setPendingPermissionChanges] =
    useState<TPendingPermissionChanges>([]);
  useMemo(() => {
    if (permissions !== null) {
      const _pendingPermissionChanges = permissions.map((permission) => {
        const active = selection.some(({ id }) => id === permission.id);
        return { ...permission, active };
      });
      setPendingPermissionChanges(_pendingPermissionChanges);
    }
  }, [permissions, selection]);

  const columns = useCreateDataTableColumns<PermissionFragment>(
    (columnHelper) => [
      columnHelper.display({
        id: 'permissionEnabled',
        header: t('enabled'),
        cell: () => '',
        meta: {
          columnType: ColumnType.string,
          exportOnly: true,
          exportFormatter: (_, row) =>
            activeRolePermissions.indexOf(row.id) > -1 ? tC('yes') : tC('no'),
        },
        enableColumnFilter: false,
        enableGlobalFilter: false,
        enableGrouping: false,
        enableSorting: false,
        enableHiding: false,
        enableMultiSort: false,
        enablePinning: false,
        enableResizing: false,
      }),
      columnHelper.accessor('code', {
        header: t('permission'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('grouping', {
        header: t('grouping'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('description', {
        header: t('description'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
    ],
    [t, activeRolePermissions],
  );

  const defaultSorting = useMemo<IDataTableSort<keyof PermissionFragment>[]>(
    () => [
      {
        id: 'code',
        desc: false,
      },
    ],
    [],
  );

  useEffect(() => {
    if (activeRolePermissions) getPermissions();
  }, [activeRolePermissions]);

  return {
    pendingPermissionChanges,
    dataTableProps: validateDataTableProps<PermissionFragment>({
      type: 'data',
      tableId: DataTableIds.RolesAndPermissionsSettings,
      tableHeader: tP('title'),
      columns,
      data: permissions,
      isDataLoading: isLoadingPermissions,
      defaultSorting,
      rowSelection: {
        ...rowSelection,
        selectionOverride,
      },
    }),
  };
};

export default useRolesAndPermissionsSettingsDataTable;
