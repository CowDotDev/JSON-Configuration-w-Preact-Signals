import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useTaskGroupsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useTaskGroupsDataTable.generated';
// import useCreateLinkedDateRangeFilter from '@components/data-table/hooks/useCreateLinkedDateRangeFilter';
import { ViewTaskGroupSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import {
  ColumnFilter,
  ColumnType,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';
import ProgressBar from '@components/progress-bar';
import { TASK_GROUP_DETAILS } from '@constants/routes';
import { useWarehouseUtils } from '@context/warehouse-utils';
import useDateTime from '@hooks/useDateTime';
import { warehouseRoute } from '@lib/routes-utils';
// import { ViewTaskGroupSortFields } from '@/graphql/types.generated';

const _LAZY_HOOK = useTaskGroupsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof _LAZY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof _LAZY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof _LAZY_HOOK>;

const deduplicateCodes = (codes = []) => {
  return Array.from(new Set(codes));
};

const useTaskGroupsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'tasks' });
  const { t: tC } = useTranslation('components');
  const { selectedWarehouseId } = useWarehouseUtils();
  const { displayDateTime } = useDateTime();

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      columnHelper.accessor('warehouseName', {
        header: tC('common.warehouse'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('code', {
        header: tC('taskGroups.groupCode'),
        cell: ({ row, getValue }) => (
          <LinkCell
            href={warehouseRoute(`${TASK_GROUP_DETAILS}/${row.original.id}`)}
            text={getValue()}
            dataTestId="task-groups-task-group-link"
          />
        ),
        meta: {
          columnType: ColumnType.string,
          exportFormatter: (value) => value,
        },
      }),
      columnHelper.accessor('progress', {
        header: tC('taskGroups.groupStatus'),
        cell: ({ getValue }) => <ProgressBar percent={getValue()} />,
        meta: {
          columnType: ColumnType.number,
          exportFormatter: (value) => `${value}%`,
        },
        enableColumnFilter: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
      columnHelper.accessor('areaCodes', {
        id: 'sourceAreaCodes',
        header: tC('taskGroups.sourceAreaCodes'),
        cell: ({ getValue }) => {
          const codes = deduplicateCodes(getValue()?.map(({ sourceCode }) => sourceCode) || []);
          return codes.length > 1 ? tC('taskGroups.multiple') : codes[0];
        },
        meta: {
          columnType: ColumnType.number,
          exportFormatter: (value, { areaCodes }) => {
            const codes = deduplicateCodes(areaCodes?.map(({ sourceCode }) => sourceCode) || []);
            return codes.join(', ');
          },
        },
        enableColumnFilter: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
      columnHelper.accessor('areaCodes', {
        id: 'destinationAreaCodes',
        header: tC('taskGroups.destinationAreaCodes'),
        cell: ({ getValue }) => {
          const codes = deduplicateCodes(
            getValue()?.map(({ destinationCode }) => destinationCode) || [],
          );
          return codes.length > 1 ? tC('taskGroups.multiple') : codes[0];
        },
        meta: {
          columnType: ColumnType.number,
          exportFormatter: (value, { areaCodes }) => {
            const codes = deduplicateCodes(
              areaCodes?.map(({ destinationCode }) => destinationCode) || [],
            );
            return codes.join(', ');
          },
        },
        enableColumnFilter: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
      columnHelper.accessor('assignedUserFirstName', {
        header: tC('taskGroups.assignedUser'),
        cell: ({ row, getValue }) =>
          row?.original?.assignedUserLastName
            ? `${getValue()} ${row.original.assignedUserLastName.charAt(0)}.`
            : getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('workingUserFirstName', {
        header: tC('taskGroups.workingUser'),
        cell: ({ row, getValue }) =>
          row?.original?.workingUserLastName
            ? `${getValue()} ${row.original.workingUserLastName.charAt(0)}.`
            : getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('completedUserFirstName', {
        header: tC('taskGroups.completionUser'),
        cell: ({ row, getValue }) =>
          row?.original?.completedUserLastName
            ? `${getValue()} ${row.original.completedUserLastName.charAt(0)}.`
            : getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('assignedTeamName', {
        header: tC('taskGroups.assignedTeam'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('workingTeamName', {
        header: tC('taskGroups.workingTeam'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('completedTeamName', {
        header: tC('taskGroups.completionTeam'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),

      columnHelper.accessor('plannedStartAt', {
        header: tC('taskGroups.plannedStart'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.string,
        },
        enableColumnFilter: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
      columnHelper.accessor('startedAt', {
        header: tC('taskGroups.actualStart'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.string,
        },
        enableColumnFilter: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
      columnHelper.accessor('plannedCompletionAt', {
        header: tC('taskGroups.plannedCompletion'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.string,
        },
        enableColumnFilter: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
      columnHelper.accessor('completedAt', {
        header: tC('taskGroups.actualCompletion'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.string,
        },
        enableColumnFilter: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
      columnHelper.display({
        id: 'estimatedDuration', // TODO: 'estimatedDuration
        header: tC('taskGroups.estimatedDuration'),
        cell: () => '',
        meta: {
          columnType: ColumnType.string,
        },
        enableColumnFilter: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
    ],
    [],
  );

  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: ViewTaskGroupSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [{ id: ViewTaskGroupSortFields.Code, desc: false }],
    [],
  );

  return {
    taskGroupsDataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.TaskGroups,
      tableHeader: t('taskGroups'),
      columns,
      queryHook: _LAZY_HOOK,
      baseFilter,
      defaultSorting,
    }),
  };
};

export default useTaskGroupsDataTable;
