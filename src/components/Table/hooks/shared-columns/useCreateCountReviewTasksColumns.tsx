import { Typography } from '@mui/material';
import { DateTime } from 'luxon';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetCountApprovalTasksTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateCountReviewTasksColumns.generated';
import { TaskStatus } from '@/graphql/types.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableEnumList from '@/components/Table/hooks/useDataTableEnumLists';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import StatusTypography from '@components/status-typography';
import { BIN_DETAILS, LICENSE_PLATE_DETAILS, LOT_DETAILS, PRODUCT_DETAILS, TASK_DETAILS } from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import { displayDuration } from '@lib/date';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

export const COUNT_REVIEW_TASKS_HOOK = useGetCountApprovalTasksTableLazyQuery;
export type TCountReviewTaskDataType = TExtractLazyHookDataType<typeof COUNT_REVIEW_TASKS_HOOK>;
export type TCountReviewTaskFilterType = TExtractLazyHookFetchFilterType<
  typeof COUNT_REVIEW_TASKS_HOOK
>;
export type TCountReviewTaskFieldNames = TExtractLazyHookFieldNames<typeof COUNT_REVIEW_TASKS_HOOK>;

const useCreateCountReviewTasksColumns = ({
  dataTestId,
  addColumnsToStart,
  removeColumns = [],
  removeDeepLinks = false,
}: {
  dataTestId: string;
  addColumnsToStart?: TColumnFactory<TCountReviewTaskDataType>;
  removeColumns?: (keyof TCountReviewTaskDataType | 'reviewDuration')[];
  removeDeepLinks?: boolean;
}) => {
  const { t: tC } = useTranslation('components');
  const { displayDateTime } = useDateTime();

  const { unitOfMeasureEnumList, stockStatusTypeEnumList } = useDataTableEnumList({
    fetchUoMList: true,
    fetchStockStatusTypeList: true,
  });
  const columns = useCallback<TColumnFactory<TCountReviewTaskDataType>>(
    (columnHelper) =>
      [
        ...(addColumnsToStart ? addColumnsToStart(columnHelper) : []),
        columnHelper.accessor('taskCode', {
          header: tC('columns.reviewTaskCode'),
          cell: ({ getValue, row }) => {
            return !removeDeepLinks ? (
              <LinkCell
                dataTestId={`${dataTestId}-review-task-code`}
                href={warehouseRoute(`${TASK_DETAILS}/${row.original.id}`)}
                text={getValue()}
              />
            ) : (
              getValue()
            );
          },
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('taskCreatedAt', {
          id: 'reviewDuration',
          header: tC('columns.reviewDuration'),
          cell: ({ getValue }) => {
            return displayDuration(getValue(), DateTime.now().toISO());
          },
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => displayDuration(value, DateTime.now().toISO()),
            sortingField: 'taskCreatedAt',
            reverseSorting: true,
          },
          enableColumnFilter: false,
        }),
        columnHelper.accessor('taskStatus', {
          header: tC('columns.reviewStatus'),
          cell: ({ getValue }) => {
            return <StatusTypography status={getValue()} />;
          },
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(TaskStatus).map((status) => ({
              value: TaskStatus[status],
              display: tC(`tasks.status.${TaskStatus[status]}`),
            })),
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('refCountTaskCode', {
          header: tC('columns.referenceCount'),
          cell: ({ getValue, row }) => {
            return !removeDeepLinks ? (
              <LinkCell
                dataTestId={`${dataTestId}-review-reference-task-code`}
                href={warehouseRoute(`${TASK_DETAILS}/${row.original.refCountTaskId}`)}
                text={getValue()}
              />
            ) : (
              getValue()
            );
          },
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('binCode', {
          header: tC('columns.binCode'),
          cell: ({ getValue, row }) => {
            return !removeDeepLinks ? (
              <LinkCell
                dataTestId={`${dataTestId}-review-task-bin-code`}
                href={warehouseRoute(`${BIN_DETAILS}/${row.original.binId}`)}
                text={getValue()}
              />
            ) : (
              getValue()
            );
          },
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('licensePlateCode', {
          header: tC('columns.licensePlateCode'),
          cell: ({ getValue, row }) => {
            return !removeDeepLinks ? (
              <LinkCell
                dataTestId={`${dataTestId}-review-task-license-plate-code`}
                href={warehouseRoute(`${LICENSE_PLATE_DETAILS}/${row.original.licensePlateId}`)}
                text={getValue()}
              />
            ) : (
              getValue()
            );
          },
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
          size: 200,
        }),
        columnHelper.accessor('productCode', {
          header: tC('columns.productCode'),
          cell: ({ getValue, row }) => {
            return !removeDeepLinks ? (
              <LinkCell
                dataTestId={`${dataTestId}-review-task-product-code`}
                href={warehouseRoute(`${PRODUCT_DETAILS}/${row.original.productId}`)}
                text={getValue()}
              />
            ) : (
              getValue()
            );
          },
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('lotCode', {
          header: tC('columns.lotCode'),
          cell: ({ getValue, row }) => {
            return !removeDeepLinks ? (
              <LinkCell
                dataTestId={`${dataTestId}-review-task-lot-code`}
                href={warehouseRoute(`${LOT_DETAILS}/${row.original.lotId}`)}
                text={getValue()}
              />
            ) : (
              getValue()
            );
          },
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('stockStatusLabel', {
          header: tC('columns.stockStatus'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: stockStatusTypeEnumList,
          },
        }),
        columnHelper.accessor('quantityUOMCode', {
          header: tC('columns.uom'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: unitOfMeasureEnumList,
          },
        }),
        columnHelper.accessor('quantityDifference', {
          header: tC('columns.diff'),
          cell: ({ getValue }) => (
            <Typography
              variant="body1"
              fontWeight={600}
              color={(theme) =>
                Number(getValue()) >= 0 ? theme.palette.success.main : theme.palette.error.main
              }
            >
              {Number.parseFloat(getValue())}
            </Typography>
          ),
          meta: {
            columnType: ColumnType.stringRange,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('refCountTaskCompletedByUserFirstName', {
          header: tC('columns.countUser'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('taskCreatedAt', {
          header: tC('columns.countDateTime'),
          cell: ({ getValue }) => {
            return displayDateTime({ date: getValue() });
          },
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
      ].filter(filterDataTableColumnDefs<TCountReviewTaskDataType>(removeColumns)),
    [
      tC,
      addColumnsToStart,
      displayDuration,
      displayDateTime,
      unitOfMeasureEnumList,
      stockStatusTypeEnumList,
      ...removeColumns,
    ],
  );

  return columns;
};

export default useCreateCountReviewTasksColumns;
