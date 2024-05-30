import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useBarcodeSettingsPreEnrolledTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useBarcodeSettingsPreEnrolledDataTable.generated';
import { BarcodeTemplateSortFields } from '@/graphql/types.generated';
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
import useDateTime from '@hooks/useDateTime';

const LAZY_QUERY_HOOK = useBarcodeSettingsPreEnrolledTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useBarcodeSettingsPreEnrolledDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'barcodes' });
  const { t: tC } = useTranslation('components');
  const { displayDateTime } = useDateTime();

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      columnHelper.accessor('configurationName', {
        header: tC('common.name'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('createdAt', {
        header: tC('dates.createdAt'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
      columnHelper.accessor('updatedAt', {
        header: tC('dates.updatedAt'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
    ],
    [],
  );

  const defaultSorting: IDataTableSort<_TFieldNames>[] = useMemo(
    () => [
      {
        id: BarcodeTemplateSortFields.UpdatedAt,
        desc: false,
      },
    ],
    [],
  );

  return validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
    type: 'query',
    tableId: DataTableIds.BarcodeSettingsPreEnrolled,
    tableHeader: t('preEnrolledBarcodes'),
    columns,
    queryHook: LAZY_QUERY_HOOK,
    defaultSorting,
  });
};

export default useBarcodeSettingsPreEnrolledDataTable;
