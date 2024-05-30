import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useSlottingInventoryDataTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useSlottingInventoryDataTable.generated';
import { SlottingInventorySortFields } from '@/graphql/types.generated';
// import { ABC_CRITERIA } from '@components/data-table/hooks/table-props/useSlottingRunsDataTable';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants, IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
// import HoverCell from '@components/data-table/table/cells/HoverCell';

const LAZY_QUERY_HOOK = useSlottingInventoryDataTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useSlottingInventoryDataTable = () => {
  const { t } = useTranslation('components');

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();
  /**
   *  binCode
      rank
      zone
      productNumber
      productName
      productGroup
      eaQtyPerCase
      quantity
      uom
   */
  const columns = useCreateDataTableColumns<_TDataType>((columnHelper) => [
    columnHelper.accessor('binCode', {
      header: 'Bin Code',
      cell: ({ getValue }) => getValue(),
      meta: {
        columnType: ColumnType.string,
      },
    }),
    columnHelper.accessor('zone', {
      header: t('common.zone'),
      cell: ({ getValue }) => getValue(),
      meta: {
        columnType: ColumnType.string,
      },
    }),
    columnHelper.accessor('productNumber', {
      header: t('common.productCode'),
      cell: ({ getValue }) => getValue(),
      meta: {
        columnType: ColumnType.string,
      },
    }),
    columnHelper.accessor('productName', {
      header: t('common.product'),
      cell: ({ getValue }) => getValue(),
      meta: {
        columnType: ColumnType.string,
      },
    }),
    // columnHelper.accessor('productGroup', {
    //   header: t('common.group'),
    //   cell: ({ getValue }) => getValue(),
    //   meta: {
    //     columnType: ColumnType.string,
    //   },
    // }),
    columnHelper.accessor('quantity', {
      header: t('common.quantity'),
      cell: ({ getValue }) => getValue(),
      meta: {
        columnType: ColumnType.number,
      },
    }),
    columnHelper.accessor('uom', {
      header: t('common.uom'),
      cell: ({ getValue }) => getValue(),
      meta: {
        columnType: ColumnType.string,
      },
    }),
  ]);

  // const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
  //   () => [
  //     {
  //       columnId: SlottingInventorySortFields.BinCode,
  //       operator: FilterOperator.eq,
  //       value: configurationRunId,
  //     },
  //   ],
  //   [configurationRunId, version],
  // );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: SlottingInventorySortFields.BinCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      variant: DataTableVariants.Collapsible,
      tableId: DataTableIds.SlottingInventory,
      tableHeader: t('slotting.slottingInventory'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      // baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useSlottingInventoryDataTable;
