import { DateTime } from 'luxon';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useDataFramesTableLazyQuery } from '@/graphql/defs/pages/__generated__/datasets.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import useDateTime from '@hooks/useDateTime';

export const DATAFRAMES_HOOK = useDataFramesTableLazyQuery;
export type TDataFramesDataType = TExtractLazyHookDataType<typeof DATAFRAMES_HOOK>;
export type TDataFramesFilterType = TExtractLazyHookFetchFilterType<typeof DATAFRAMES_HOOK>;
export type TDataFramesFieldNames = TExtractLazyHookFieldNames<typeof DATAFRAMES_HOOK>;

enum SlottingDataFrameStatus {
  Created = 'created',
  Complete = 'complete',
  Deleted = 'deleted',
  Failed = 'failed',
  InProgress = 'inProgress',
  NotStarted = 'notStarted',
}

interface ICreatedDataFramesColumns {
  removeColumns?: (keyof TDataFramesDataType)[];
}
const useCreateDatasetChangeLogColumns = ({
  removeColumns = [],
}: ICreatedDataFramesColumns = {}) => {
  const { t } = useTranslation('pages', { keyPrefix: 'datasets' });
  const { t: tC } = useTranslation('components');

  const { displayDateTime } = useDateTime();

  const createDatasetColumns = useCallback<TColumnFactory<TDataFramesDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('last_import', {
          header: t('columns.startDate'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('import_date', {
          header: t('columns.endDate'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('status', {
          header: tC('columns.status'),
          cell: ({ getValue }) => tC(`common.${getValue() as SlottingDataFrameStatus}`) || '',
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => tC(`common.${value as SlottingDataFrameStatus}`),
          },
        }),
        columnHelper.accessor('id', {
          header: t('columns.duration'),
          enableColumnFilter: false,
          cell: ({ row }) => {
            const datasetStartDate = DateTime.fromISO(row.original.last_import);
            const datasetEndDate = DateTime.fromISO(row.original.import_date);
            const datasetDuration = datasetEndDate.diff(datasetStartDate, ['days']).toObject();

            return datasetDuration.days
              ? `${Math.floor(datasetDuration?.days)} ${tC('dates.day', {
                  count: Math.floor(datasetDuration?.days),
                })}`
              : '';
          },
          meta: {
            columnType: ColumnType.string,
            enableExport: false,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TDataFramesDataType>(removeColumns));
    },
    [...removeColumns],
  );

  return createDatasetColumns;
};

export default useCreateDatasetChangeLogColumns;
