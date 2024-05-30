import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useIntegrationLogsDataTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useIntegrationLogsDataTable.generated';
import {
  ErrorCodes,
  IntegrationLogSortFields,
  ProcessingOperation,
  ProcessingStatus,
} from '@/graphql/types.generated';
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
import { INTEGRATION_LOG_DETAILS } from '@constants/routes';
import { useWarehouseUtils } from '@context/warehouse-utils';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

const LAZY_QUERY_HOOK = useIntegrationLogsDataTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useIntegrationLogsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.integration-logs' });
  const { t: tC } = useTranslation('components');
  const { selectedWarehouseId } = useWarehouseUtils();
  const { displayDateTime } = useDateTime();

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      columnHelper.accessor('updatedAt', {
        header: tC('columns.updatedAt'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
      columnHelper.accessor('id', {
        header: tC('columns.logId'),
        cell: ({ getValue }) => (
          <LinkCell
            href={warehouseRoute(`${INTEGRATION_LOG_DETAILS}/${getValue()}`)}
            text={getValue()}
            dataTestId={`integration-log-id-link`}
          />
        ),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('jobId', {
        header: tC('columns.jobId'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('entityName', {
        header: tC('columns.entityName'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('entityLabel', {
        header: tC('columns.entityLabel'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('processingOperation', {
        header: tC('columns.processingOperation'),
        cell: ({ getValue }) => tC(`enums.processingOperations.${getValue()}`),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(ProcessingOperation).map((operation) => ({
            value: ProcessingOperation[operation],
            display: tC(`enums.processingOperations.${ProcessingOperation[operation]}`),
          })),
          exportFormatter: (value) => tC(`enums.processingOperations.${value}`),
        },
      }),
      columnHelper.accessor('operationStart', {
        header: tC('columns.operationStart'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
      columnHelper.accessor('operationComplete', {
        header: tC('columns.operationComplete'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
      columnHelper.accessor('processingStatus', {
        header: tC('columns.processingStatus'),
        cell: ({ getValue }) => tC(`enums.processingStatus.${getValue()}`),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(ProcessingStatus).map((status) => ({
            value: ProcessingStatus[status],
            display: tC(`enums.processingStatus.${ProcessingStatus[status]}`),
          })),
          exportFormatter: (value) => tC(`enums.processingStatus.${value}`),
        },
      }),
      columnHelper.accessor('errorCode', {
        header: tC('columns.errorCode'),
        cell: ({ getValue }) => (getValue() ? tC(`enums.errorCodes.${getValue()}`) : ''),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(ErrorCodes).map((code) => ({
            value: ErrorCodes[code],
            display: tC(`enums.errorCodes.${ErrorCodes[code]}`),
          })),
          exportFormatter: (value) => (value ? tC(`enums.errorCodes.${value}`) : ''),
        },
      }),
      columnHelper.accessor('errorMessage', {
        header: tC('columns.errorMessage'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
        minSize: 850,
      }),
    ],
    [tC],
  );

  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: IntegrationLogSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: IntegrationLogSortFields.UpdatedAt,
        desc: true,
      },
    ],
    [],
  );

  return {
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.IntegrationLogs,
      tableHeader: t('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      defaultSorting,
    }),
  };
};

export default useIntegrationLogsDataTable;
