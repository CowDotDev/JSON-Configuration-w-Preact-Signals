import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useTasksTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateTaskColumns.generated';
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
import QuantityConversionsTooltip from '@components/tooltips/quantity-conversions';
import {
  BIN_DETAILS,
  LICENSE_PLATE_DETAILS,
  LOT_DETAILS,
  PRODUCT_DETAILS,
  TASK_DETAILS,
  TASK_GROUP_DETAILS,
} from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

export const TASKS_HOOK = useTasksTableLazyQuery;
export type TTasksDataType = TExtractLazyHookDataType<typeof TASKS_HOOK>;
export type TTasksFilterType = TExtractLazyHookFetchFilterType<typeof TASKS_HOOK>;
export type TTasksFieldNames = TExtractLazyHookFieldNames<typeof TASKS_HOOK>;

interface IUseCreateTaskColumns {
  dataTestId: string;
  removeColumns?: (keyof TTasksDataType)[];
  disableDeepLinks?: boolean;
}
const useCreateTaskColumns = ({
  dataTestId,
  removeColumns = [],
  disableDeepLinks = false,
}: IUseCreateTaskColumns) => {
  const { t } = useTranslation('pages', { keyPrefix: 'tasks' });
  const { t: tC } = useTranslation('components');
  const { displayDate, displayDateTime } = useDateTime();

  const { stockStatusTypeEnumList, taskTypeEnumList, teamEnumList, unitOfMeasureEnumList } =
    useDataTableEnumList({
      fetchStockStatusTypeList: true,
      fetchTaskTypesList: true,
      fetchTeamsList: true,
      fetchUoMList: true,
    });

  const createTaskColumns = useCallback<TColumnFactory<TTasksDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('taskCode', {
          header: t('columns.taskCode'),
          cell: ({ row, getValue }) =>
            !disableDeepLinks ? (
              <LinkCell
                href={warehouseRoute(`${TASK_DETAILS}/${row.original.id}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-task-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('taskType', {
          header: t('columns.taskType'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: taskTypeEnumList,
          },
        }),
        columnHelper.accessor('internalStockOrderReferenceDocument', {
          header: t('columns.referenceDocument'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('taskStatus', {
          header: t('columns.taskStatus'),
          cell: ({ getValue }) => tC(`tasks.status.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(TaskStatus).map((status) => ({
              value: TaskStatus[status],
              display: tC(`tasks.status.${TaskStatus[status]}`),
            })),
            exportFormatter: (value) => tC(`tasks.status.${value}`),
          },
        }),
        columnHelper.accessor('taskGroupCode', {
          header: t('columns.taskGroup'),
          cell: ({ row, getValue }) =>
            row.original.taskGroupId ? (
              !disableDeepLinks ? (
                <LinkCell
                  href={warehouseRoute(`${TASK_GROUP_DETAILS}/${row.original.taskGroupId}`)}
                  text={getValue()}
                  dataTestId={`${dataTestId}-task-group-link`}
                />
              ) : (
                getValue()
              )
            ) : (
              ''
            ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('taskGroupStatus', {
          header: t('columns.taskGroupStatus'),
          cell: ({ row, getValue }) =>
            row.original.taskGroupId && getValue() !== null ? tC(`tasks.status.${getValue()}`) : '',
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(TaskStatus).map((status) => ({
              value: TaskStatus[status],
              display: tC(`tasks.status.${TaskStatus[status]}`),
            })),
            exportFormatter: (value, row) =>
              row.taskGroupId && value !== null ? tC(`tasks.status.${value}`) : '',
          },
        }),
        columnHelper.accessor('teamName', {
          header: t('columns.team'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: teamEnumList,
          },
        }),
        columnHelper.accessor('completedByUserFirstName', {
          header: tC('common.firstName'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('completedByUserLastName', {
          header: tC('common.lastName'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('dueDate', {
          header: t('columns.dueDate'),
          cell: ({ getValue }) => displayDate({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDate({ date: value }),
          },
        }),
        columnHelper.accessor('createdAt', {
          header: t('columns.createdDateTime'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('productCode', {
          header: t('columns.productCode'),
          cell: ({ row, getValue }) =>
            !disableDeepLinks ? (
              <LinkCell
                href={warehouseRoute(`${PRODUCT_DETAILS}/${row.original.productId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-product-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('unitOfMeasure', {
          header: t('columns.unitOfMeasureAbbr'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: unitOfMeasureEnumList,
          },
        }),
        columnHelper.accessor('quantity', {
          header: t('columns.qty'),
          cell: ({ row, getValue }) => (
            <QuantityConversionsTooltip
              quantity={getValue()}
              unitOfMeasureId={row.original.unitOfMeasureId}
              dataTestId={dataTestId}
            />
          ),
          meta: {
            columnType: ColumnType.stringRange,
          },
        }),
        columnHelper.accessor('fulfillmentAndLineItemCode', {
          header: tC('columns.fulfillmentAndLineItemCode'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value || '',
          },
        }),
        columnHelper.accessor('sourceStatus', {
          header: t('columns.srcStatus'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: stockStatusTypeEnumList,
          },
        }),
        columnHelper.accessor('sourceBinCode', {
          header: t('columns.srcBin'),
          cell: ({ row, getValue }) =>
            !disableDeepLinks ? (
              <LinkCell
                href={warehouseRoute(`${BIN_DETAILS}/${row.original.sourceBinId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-source-bin-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('sourceAreaCode', {
          header: t('columns.srcArea'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('sourceLotCode', {
          header: t('columns.srcLot'),
          cell: ({ row, getValue }) =>
            !disableDeepLinks ? (
              <LinkCell
                href={warehouseRoute(`${LOT_DETAILS}/${row.original.sourceLotId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-source-lot-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('sourceLicensePlateCode', {
          header: t('columns.srcLicensePlate'),
          cell: ({ row, getValue }) =>
            !disableDeepLinks ? (
              <LinkCell
                href={warehouseRoute(
                  `${LICENSE_PLATE_DETAILS}/${row.original.sourceLicensePlateId}`,
                )}
                text={getValue()}
                dataTestId={`${dataTestId}-source-lp-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
          size: 200,
        }),
        columnHelper.accessor('sourceLicensePlateDescription', {
          header: t('columns.srcLicensePlateDescription'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
            exportOnly: true,
          },
        }),
        columnHelper.accessor('destinationStatus', {
          header: t('columns.desStatus'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: stockStatusTypeEnumList,
          },
        }),
        columnHelper.accessor('destinationBinCode', {
          header: t('columns.desBin'),
          cell: ({ row, getValue }) =>
            !disableDeepLinks ? (
              <LinkCell
                href={warehouseRoute(`${BIN_DETAILS}/${row.original.destinationBinId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-dest-bin-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('destinationAreaCode', {
          header: t('columns.desArea'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('destinationLotCode', {
          header: t('columns.desLot'),
          cell: ({ row, getValue }) =>
            !disableDeepLinks ? (
              <LinkCell
                href={warehouseRoute(`${LOT_DETAILS}/${row.original.destinationLotId}`)}
                text={getValue()}
                dataTestId={`${dataTestId}-dest-lot-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('destinationLicensePlateCode', {
          header: t('columns.desLicensePlate'),
          cell: ({ row, getValue }) =>
            !disableDeepLinks ? (
              <LinkCell
                href={warehouseRoute(
                  `${LICENSE_PLATE_DETAILS}/${row.original.destinationLicensePlateId}`,
                )}
                text={getValue()}
                dataTestId={`${dataTestId}-dest-lp-link`}
              />
            ) : (
              getValue()
            ),
          meta: {
            columnType: ColumnType.string,
          },
          size: 210,
        }),
        columnHelper.accessor('destinationLicensePlateDescription', {
          header: t('columns.desLicensePlateDescription'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
            exportOnly: true,
          },
        }),
        columnHelper.accessor('completionDate', {
          header: t('columns.completionDateTime'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
          size: 200,
        }),
        columnHelper.accessor('updatedAt', {
          header: tC('common.lastUpdatedDateTime'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
          size: 210,
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TTasksDataType>(removeColumns));
    },
    [stockStatusTypeEnumList, taskTypeEnumList, teamEnumList, ...removeColumns],
  );

  return createTaskColumns;
};

export default useCreateTaskColumns;
