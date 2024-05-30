import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useStockStatusSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useStockStatusSettingsDataTable.generated';
import {
  StockStatusTypeStatus,
  SystemStockStatusSetting,
  ViewStockStatusSortFields,
} from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableEnumList from '@/components/Table/hooks/useDataTableEnumLists';
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
import { useWarehouseUtils } from '@context/warehouse-utils';

const LAZY_QUERY_HOOK = useStockStatusSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useStockStatusSettingsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.stock-status-settings' });
  const { t: tC } = useTranslation('components');
  const { selectedWarehouseId, selectedWarehouse } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const { stockStatusTypeEnumList } = useDataTableEnumList({
    fetchStockStatusTypeList: true,
  });

  // const openCopyStockStatus = useCallback(
  //   (stockStatusMapping: _TDataType) => {
  //     openModal(
  //       {
  //         type: ModalTypes.stockStatusCopy,
  //         title: t('copyStatus'),
  //         stockStatusMapping,
  //       },
  //       {
  //         afterClose: (success) => {
  //           if (success) triggerDataTableRefetch();
  //         },
  //       },
  //     );
  //   },
  //   [t, triggerDataTableRefetch],
  // );

  // const openEditStockStatus = useCallback(
  //   (stockStatusMapping: _TDataType) => {
  //     openModal(
  //       {
  //         type: ModalTypes.stockStatusEdit,
  //         title: t('editStatus'),
  //         stockStatusMapping,
  //       },
  //       {
  //         afterClose: (success) => {
  //           if (success) triggerDataTableRefetch();
  //         },
  //       },
  //     );
  //   },
  //   [t, triggerDataTableRefetch],
  // );

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => {
      const _columns = [
        // applicationFeatureFlags.stockStatuses.allowCreate ||
        // applicationFeatureFlags.stockStatuses.allowEdit
        //   ? columnHelper.display({
        //       id: DataTableDisplayColumns.Options,
        //       header: '',
        //       cell: ({ row }) => (
        //         <Box
        //           display="flex"
        //           sx={{
        //             position: 'absolute',
        //             top: '50%',
        //             left: '50%',
        //             transform: 'translate(-50%, -50%)',
        //           }}
        //         >
        //           {applicationFeatureFlags.stockStatuses.allowEdit && (
        //             <IconButton
        //               onClick={() => openEditStockStatus(row.original)}
        //               sx={{ width: 35, height: 35 }}
        //             >
        //               <EditOutlined color="secondary" sx={{ fontSize: 24 }} />
        //             </IconButton>
        //           )}
        //           {applicationFeatureFlags.stockStatuses.allowCreate && (
        //             <IconButton
        //               onClick={() => openCopyStockStatus(row.original)}
        //               sx={{ width: 35, height: 35 }}
        //             >
        //               <ContentCopy color={'secondary'} sx={{ fontSize: 20 }} />
        //             </IconButton>
        //           )}
        //         </Box>
        //       ),
        //       meta: {
        //         columnType: ColumnType.string,
        //         enableExport: false,
        //       },
        //       size: 125,
        //       enableColumnFilter: false,
        //       enableHiding: false,
        //       enableSorting: false,
        //       enableMultiSort: false,
        //       enableResizing: false,
        //     })
        //   : null,
        columnHelper.accessor('code', {
          header: t('columns.ffCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('label', {
          header: t('columns.ffLabel'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: stockStatusTypeEnumList.map((status) => ({
              value: status.value,
              display: status.display,
            })),
          },
        }),
        columnHelper.accessor('description', {
          header: tC('common.description'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('sapStockStatusLabel', {
          header: tC('columns.erpStockType'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        selectedWarehouse?.systemConnection?.stockStatusSetting ===
        SystemStockStatusSetting.StockStatusAndHuStatus
          ? columnHelper.accessor('sapHuUserStatusCode', {
              header: tC('columns.huUserStatus'),
              cell: ({ getValue }) => getValue(),
              meta: {
                columnType: ColumnType.string,
              },
            })
          : null,
        columnHelper.accessor('stockStatusTypeStatus', {
          header: t('columns.status'),
          cell: ({ getValue }) => tC(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: Object.keys(StockStatusTypeStatus).map((status) => ({
              value: StockStatusTypeStatus[status],
              display: status,
            })),
            exportFormatter: (value) => tC(`common.${value}`),
          },
        }),
      ];

      return _columns.filter((c) => !!c);
    },
    [t, tC, stockStatusTypeEnumList, triggerDataTableRefetch, selectedWarehouse],
  );

  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: ViewStockStatusSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: ViewStockStatusSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.StockStatusSettings,
      tableHeader: t('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useStockStatusSettingsDataTable;
