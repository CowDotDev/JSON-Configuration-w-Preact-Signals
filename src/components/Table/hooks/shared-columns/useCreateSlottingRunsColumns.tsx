import { DateTime } from 'luxon';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSlottingRunsDataTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateSlottingRunsColumns.generated';
import { RunStatus, SortNulls } from '@/graphql/types.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import StatusTypography from '@components/status-typography';
import { SLOTTING_RULESET, SLOTTING_RUN } from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';
import { convertDuration } from '@/pages/slotting/runs/details';

export const SLOTTING_RUNS_HOOKS = useSlottingRunsDataTableLazyQuery;
export type TSlottingRunsDataType = TExtractLazyHookDataType<typeof SLOTTING_RUNS_HOOKS>;
export type TSlottingRunsFilterType = TExtractLazyHookFetchFilterType<typeof SLOTTING_RUNS_HOOKS>;
export type TSlottingRunsFieldNames = TExtractLazyHookFieldNames<typeof SLOTTING_RUNS_HOOKS>;

interface IUseCreateSlottingRunsColumns {
  dataTestId: string;
  removeColumns?: (keyof TSlottingRunsDataType)[];
}
const useCreateSlottingRunsColumns = ({
  dataTestId,
  removeColumns = [],
}: IUseCreateSlottingRunsColumns) => {
  const { t } = useTranslation('components');
  const { displayDateTime } = useDateTime();

  const createSlottingRunsColumns = useCallback<TColumnFactory<TSlottingRunsDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('name', {
          header: t('slotting.simulation'),
          cell: ({ row, getValue }) => (
            <LinkCell
              styledVariant={row.original.status !== RunStatus.Complete ? 'disabled' : undefined}
              href={warehouseRoute(`${SLOTTING_RUN}/${row.original.id}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-run-name`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
            enableExport: false,
          },
        }),
        columnHelper.accessor('created_at', {
          header: t('dates.createdAt'),
          cell: ({ getValue }) =>
            displayDateTime({
              date: getValue(),
            }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) =>
              displayDateTime({
                date: value,
              }),
          },
        }),
        columnHelper.accessor('updated_dt', {
          header: t('dates.updatedAt'),
          cell: ({ getValue }) =>
            displayDateTime({
              date: getValue(),
            }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) =>
              displayDateTime({
                date: value,
              }),
          },
        }),
        columnHelper.accessor('run_duration', {
          header: t('slotting.analysisDuration'),
          cell: ({ getValue }) => {
            const val = getValue();
            return convertDuration(val || 0, t);
          },
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value) => (value ? convertDuration(value, t) : ''),
          },
        }),
        columnHelper.accessor('deployed_at', {
          header: t('dates.deployedAt'),
          cell: ({ getValue }) =>
            displayDateTime({
              date: getValue(),
            }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) =>
              displayDateTime({
                date: value,
              }),
            descSortingNulls: SortNulls.NullsLast,
          },
        }),
        columnHelper.accessor('deployment_ended_at', {
          header: t('dates.deploymentEndedAt'),
          cell: ({ getValue }) =>
            displayDateTime({
              date: getValue(),
            }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) =>
              displayDateTime({
                date: value,
              }),
          },
        }),
        columnHelper.accessor('status', {
          header: t('slotting.status'),
          cell: ({ getValue }) => {
            const status: RunStatus = getValue();
            return (
              <StatusTypography
                status={status}
                display={t(`common.${status}`)}
                bold={true}
                uppercase={true}
              />
            );
          },
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(RunStatus).map((status) => ({
              value: RunStatus[status],
              display: t(`common.${status as RunStatus}`),
            })),
            exportFormatter: (value) => t(`common.${value as RunStatus}`),
          },
        }),
        columnHelper.accessor('status_description', {
          header: t('slotting.statusDescription'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
            enableExport: false,
          },
        }),
        columnHelper.accessor('created_by_user_name', {
          header: t('common.createdBy'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('overall', {
          header: t('slotting.efficiencyScore'),
          cell: ({ getValue }) => getValue()?.toFixed(2) || 0,
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value) => value?.toFixed(2) || 0,
          },
        }),
        columnHelper.accessor('ruleset_name', {
          header: t('slotting.ruleset'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${SLOTTING_RULESET}/${row.original.ruleset_id}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-ruleset-name`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
            enableExport: false,
          },
        }),
        columnHelper.accessor('dataset_name', {
          header: t('slotting.datasetDuration'),
          enableColumnFilter: false,
          cell: ({ row }) => {
            const datasetStartDate = DateTime.fromISO(row.original.dataset_start);
            const datasetEndDate = DateTime.fromISO(row.original.dataset_end);
            const datasetDuration = datasetEndDate.diff(datasetStartDate, ['days']).toObject();

            return datasetDuration.days
              ? `${Math.floor(datasetDuration?.days)} ${t('dates.day', {
                  count: Math.floor(datasetDuration?.days),
                })}`
              : '';
          },
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('dataset_start', {
          header: t('slotting.datasetStartDate'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          minSize: 180,
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('dataset_end', {
          header: t('slotting.datasetEndDate'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          minSize: 180,
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('id', {
          header: t('slotting.simulationId'),
          cell: ({ getValue }) => getValue(),
          minSize: 250,
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
      ];
      return columns.filter(filterDataTableColumnDefs<TSlottingRunsDataType>(removeColumns));
    },
    [t, displayDateTime, ...removeColumns],
  );

  return createSlottingRunsColumns;
};

export default useCreateSlottingRunsColumns;
