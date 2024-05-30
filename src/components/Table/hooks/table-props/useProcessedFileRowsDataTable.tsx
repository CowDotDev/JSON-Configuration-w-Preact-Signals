import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useProcessedFileRowsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useProcessedFileRowsDataTable.generated';
import { WarehouseOpFileRowSortFields, WarehouseOpFileRowStatus } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import StatusTypography from '@components/status-typography';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';

const LAZY_QUERY_HOOK = useProcessedFileRowsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useProcessedFileRowsDataTable = () => {
  const { t } = useTranslation('components');
  const { displayDateTime } = useDateTime();

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('warehouseOpFileId', {
          header: t('common.fileId'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('createdAt', {
          header: t('common.dateTime'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('rowNumber', {
          header: t('common.lineNumberSymbol'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('warehouseOpFileRowStatus', {
          header: t('common.processingStatus'),
          cell: ({ getValue }) => (
            <StatusTypography
              status={getValue()}
              display={t(`common.${getValue()}`)}
              bold={true}
              uppercase={true}
            />
          ),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(WarehouseOpFileRowStatus).map((status) => ({
              value: WarehouseOpFileRowStatus[status],
              display: t(`common.${WarehouseOpFileRowStatus[status]}`),
            })),
            exportFormatter: (value) => t(`common.${value}`),
          },
        }),
        columnHelper.accessor('rowData', {
          header: t('common.contents'),
          cell: ({ getValue }) => JSON.stringify(getValue()),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => JSON.stringify(value),
          },
          enableSorting: false,
          enableColumnFilter: false,
        }),
      ];

      return columns;
    },
    [t, displayDateTime],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: WarehouseOpFileRowSortFields.CreatedAt,
        desc: true,
      },
      {
        id: WarehouseOpFileRowSortFields.RowNumber,
        desc: true,
      },
    ],
    [],
  );

  return {
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.ProcessedFileRows,
      tableHeader: t('common.entries'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      defaultSorting,
    }),
  };
};

export default useProcessedFileRowsDataTable;
