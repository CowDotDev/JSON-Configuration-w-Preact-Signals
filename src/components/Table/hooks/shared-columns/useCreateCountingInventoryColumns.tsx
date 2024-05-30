import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useCountInventoryTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateCountingInventoryColumns.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { BIN_DETAILS, TASK_DETAILS } from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import { warehouseRoute } from '@lib/routes-utils';

export const COUNT_INV_HOOK = useCountInventoryTableLazyQuery;
export type TCountInvDataType = TExtractLazyHookDataType<typeof COUNT_INV_HOOK>;
export type TCountInvFilterType = TExtractLazyHookFetchFilterType<typeof COUNT_INV_HOOK>;
export type TCountInvFieldNames = TExtractLazyHookFieldNames<typeof COUNT_INV_HOOK>;

const useCreateCountingInventoryColumns = ({
  addColumnsToStart,
  dataTestId,
  removeColumns = [],
  removeDeepLinks = false,
}: {
  addColumnsToStart?: TColumnFactory<TCountInvDataType>;
  dataTestId: string;
  removeColumns?: (keyof TCountInvDataType)[];
  removeDeepLinks?: boolean;
}) => {
  const { t } = useTranslation('components');
  const { displayDateTime } = useDateTime();

  const createCountInventoryColumns = useCallback<TColumnFactory<TCountInvDataType>>(
    (columnHelper) => {
      const columns = [
        ...(addColumnsToStart ? addColumnsToStart(columnHelper) : []),
        columnHelper.accessor('code', {
          header: t('common.codeSuffix', { prefix: t('common.bin') }),
          cell: ({ row, getValue }) =>
            !removeDeepLinks ? (
              <LinkCell
                href={warehouseRoute(`${BIN_DETAILS}/${row.original.id}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-bin-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('countTaskCode', {
          header: t('tasks.countTask'),
          cell: ({ row, getValue }) =>
            !removeDeepLinks && !!getValue() ? (
              <LinkCell
                href={warehouseRoute(`${TASK_DETAILS}/${row.original.countTaskId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-count-task-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('lastCount', {
          header: t('common.lastCounted'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('lastMovement', {
          header: t('common.lastMovement'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('hasOpenTasks', {
          header: t('common.hasOpenTasks'),
          cell: ({ getValue }) => (getValue() ? t('common.true') : t('common.false')),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => (value ? t('common.true') : t('common.false')),
          },
        }),
        columnHelper.accessor('areaCode', {
          header: t('bins.columns.areaCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('aisleCode', {
          header: t('common.aisle'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('aisleColumnCode', {
          header: t('common.column'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('level', {
          header: t('common.level'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('empty', {
          header: t('common.empty'),
          cell: ({ getValue }) => (getValue() ? t('common.true') : t('common.false')),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => (value ? t('common.true') : t('common.false')),
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TCountInvDataType>(removeColumns));
    },
    [t, displayDateTime, addColumnsToStart, removeDeepLinks, ...removeColumns],
  );

  return createCountInventoryColumns;
};

export default useCreateCountingInventoryColumns;
