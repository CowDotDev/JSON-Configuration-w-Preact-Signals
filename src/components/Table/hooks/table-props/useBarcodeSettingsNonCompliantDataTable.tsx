import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useBarcodeSettingsNonCompliantTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useBarcodeSettingsNonCompliantDataTable.generated';
import { NonCompliantBarcodeSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import {
  ColumnFilter,
  ColumnType,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';
import useDateTime from '@hooks/useDateTime';

const LAZY_QUERY_HOOK = useBarcodeSettingsNonCompliantTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useBarcodeSettingsNonCompliantDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'barcodes' });
  const { t: tC } = useTranslation('components');
  const { displayDateTime } = useDateTime();

  const { selection, clearSelection, rowSelection } = useDataTableSelection<_TDataType>(
    SelectionType.multi,
    'id',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      columnHelper.accessor('createdAt', {
        header: tC('common.date'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
      columnHelper.accessor('vendor', {
        header: tC('common.vendor'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('vendorCode', {
        header: tC('common.vendorCode'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('symbology', {
        header: tC('common.symbology'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('scanData', {
        header: tC('common.rawBarcode'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
    ],
    [],
  );

  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: NonCompliantBarcodeSortFields.Resolved,
        operator: FilterOperator.is,
        value: false,
      },
    ],
    [],
  );

  const defaultSorting: IDataTableSort<_TFieldNames>[] = useMemo(
    () => [
      {
        id: NonCompliantBarcodeSortFields.CreatedAt,
        desc: true,
      },
      {
        id: NonCompliantBarcodeSortFields.Vendor,
        desc: false,
      },
    ],
    [],
  );

  return {
    selectedNonCompliantBarcodes: selection,
    triggerNonCompliantRefetch: triggerDataTableRefetch,
    nonCompliantDataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.BarcodeSettingsNonCompliant,
      tableHeader: t('nonCompliantBarcodes'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection,
      refetchTrigger,
    }),
  };
};

export default useBarcodeSettingsNonCompliantDataTable;
