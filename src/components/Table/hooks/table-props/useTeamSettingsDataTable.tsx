import { Box } from '@mui/material';
import { createColumnHelper } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  useGetAssignedUsersDetailsLazyQuery,
  useGetTeamAssignedUsersQuery,
} from '@/graphql/defs/components/modals/__generated__/team-update-assigned-users-modal.generated';
import { useTeamSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useTeamSettingsDataTable.generated';
import { AssignUserFragment } from '@/graphql/defs/shared-fragments/__generated__/assign-user.generated';
import { TeamStatus, ViewTeamSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import DataTable from '@/components/Table';
import useCreateTaskColumns, {
  TTasksDataType,
} from '@/components/Table/hooks/shared-columns/useCreateTaskColumns';
import useTeamAssignUsersReviewDataTable from '@/components/Table/hooks/table-props/useTeamAssignUsersReviewDataTable';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants, IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import FilterBuilder from '@components/filter-builder';
import {
  ColumnFilter,
  ColumnType,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';
import formatFilterColumns from '@components/filter-builder/format-filter-columns';
import StatusTypography from '@components/status-typography';
import Typography from '@components/styled/Typography';
import { useModalContent } from '@context/modal/ModalContentProvider';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { useSnackbar } from '@context/snackbar';
import { useWarehouseUtils } from '@context/warehouse-utils';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { ModalTypes } from '@models/modal';

const LAZY_QUERY_HOOK = useTeamSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useTeamSettingsDataTable = () => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages', { keyPrefix: 'teams' });
  const { selectedWarehouseId } = useWarehouseUtils();
  const { displayDateTime } = useDateTime();
  const { openModal } = useModalToggle();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();
  const { selection, clearSelection, rowSelection } = useDataTableSelection<_TDataType>(
    SelectionType.single,
    'id',
  );

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      columnHelper.accessor('name', {
        header: t('columns.label'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('description', {
        header: t('columns.description'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('status', {
        header: t('columns.status'),
        cell: ({ getValue }) => <StatusTypography status={getValue()} />,
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(TeamStatus).map((state) => ({
            value: TeamStatus[state],
            display: t(`common.${TeamStatus[state]}`),
          })),
        },
      }),
      columnHelper.accessor('userCount', {
        header: t('columns.numberOfMembers'),
        cell: ({ row, getValue }) => {
          return getValue() && getValue() > 0 ? (
            <Typography
              styledVariant="inlineLink"
              onClick={() =>
                openModal({
                  type: ModalTypes.confirmation,
                  title: '',
                  message: <TeamUsersModalContent teamId={row.original?.id} />,
                  onConfirm: (closeModal) => {
                    closeModal();
                  },
                  hideCancelButton: true,
                })
              }
            >
              {getValue()}
            </Typography>
          ) : (
            0
          );
        },
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('taskFilterArray', {
        header: t('columns.taskFilters'),
        cell: ({ row, getValue }) => {
          const array = getValue() && JSON.parse(getValue() as string);
          const filterCount = getValue() && Array.isArray(array) ? array.length : 0;

          return filterCount > 0 ? (
            <Typography
              styledVariant="inlineLink"
              onClick={() =>
                openModal({
                  type: ModalTypes.confirmation,
                  title: tP('taskFilters'),
                  message: (
                    <TeamTaskFiltersModalContent
                      taskFilters={JSON.parse(row.original?.taskFilterArray)}
                    />
                  ),
                  onConfirm: (closeModal) => {
                    closeModal();
                  },
                  hideCancelButton: true,
                })
              }
            >
              {filterCount}
            </Typography>
          ) : (
            filterCount
          );
        },
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('createdAt', {
        header: t('columns.createdAt'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
      columnHelper.accessor('updatedAt', {
        header: t('columns.updatedAt'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
    ],
    [t],
  );

  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: ViewTeamSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: ViewTeamSortFields.Name,
        desc: false,
      },
    ],
    [],
  );

  return {
    selectedTeam: selection[0],
    clearSelection,
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.TeamSettings,
      tableHeader: tP('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
      rowSelection,
    }),
  };
};

export default useTeamSettingsDataTable;

const TeamUsersModalContent = ({ teamId }) => {
  const { closeModal } = useModalContent();
  const { showMessage } = useSnackbar();

  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState<AssignUserFragment[]>([]);
  const [getAssignedUsersDetails] = useGetAssignedUsersDetailsLazyQuery({
    onCompleted: ({ viewUsers: { nodes } }) => {
      setUsers(nodes);
      setLoading(false);
    },
    onError: (error) => {
      showMessage({
        type: 'error',
        message: error.message,
      });
      closeModal();
    },
  });

  useGetTeamAssignedUsersQuery({
    variables: {
      teamId,
    },
    onCompleted: ({ userTeamMappings: { nodes } }) => {
      if (nodes.length > 0) {
        getAssignedUsersDetails({
          variables: {
            userIds: nodes.map((node) => node.userId),
          },
        });
      } else {
        setLoading(false);
      }
    },
    onError: (error) => {
      showMessage({
        type: 'error',
        message: error.message,
      });
      closeModal();
    },
  });

  const { dataTableProps } = useTeamAssignUsersReviewDataTable(users);

  return (
    <Box sx={{ paddingTop: (theme) => theme.spacing(8) }}>
      <DataTable
        {...dataTableProps}
        isDataLoading={loading}
        variant={DataTableVariants.BasicBordered}
      />
    </Box>
  );
};

const TeamTaskFiltersModalContent = ({ taskFilters }: { taskFilters: ColumnFilter[] }) => {
  const taskColumns = useCreateTaskColumns({
    dataTestId: 'team-task-filters',
    removeColumns: [
      'taskCode',
      'taskGroupCode',
      'teamName',
      'teamDescription',
      'dueDate',
      'createdAt',
      'updatedAt',
      'taskStatus',
      'taskGroupStatus',
    ],
  })(createColumnHelper<TTasksDataType>());
  const filterableColumns = formatFilterColumns(taskColumns);

  const addFilter = () => {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- removeFilter is not implemented as it is not used in this context, but we need to provide the function to the FilterBuilder
  const removeFilter = (index: number) => {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- setFilterAtIndex is not implemented as it is not used in this context, but we need to provide the function to the FilterBuilder
  const setFilterAtIndex = (index: number, input: ColumnFilter) => {};

  return (
    <Box
      sx={{
        position: 'relative',
        padding: (theme) => theme.spacing(4),
        border: (theme) => `1px solid ${theme.palette.gainsboro.main}`,
        borderRadius: (theme) => theme.spacing(1),
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: (theme) => theme.zIndex.modal + 1,
        }}
      />
      <FilterBuilder
        filters={taskFilters}
        filterableColumns={filterableColumns}
        filterableColumnEnumOptions={[]} // Empty array, as it is only used if we include any filters
        includeAnyFilter={false}
        setInputAtIndex={(index, input) => setFilterAtIndex(index, input)}
        addInput={addFilter}
        removeFilter={(index) => removeFilter(index)}
        hideAddFilterButton={true}
        hideRemoveFilterIcon={true}
        dataTestId="team-settings-table"
      />
    </Box>
  );
};
