import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useWarehouseRoleTypeSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useWarehouseRoleTypeSettingsDataTable.generated';
import { WarehouseRoleTypeQueryShapeSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import createEditRowColumnDef from '@/components/Table/columnDefs/editRow';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { ModalTypes } from '@models/modal';

const LAZY_QUERY_HOOK = useWarehouseRoleTypeSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useWarehouseRoleTypeSettingsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.warehouse-role-types' });
  const { t: tC } = useTranslation('components');
  const { openModal } = useModalToggle();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => {
      const columns = [
        createEditRowColumnDef(columnHelper, (warehouseRoleType) => {
          openModal(
            {
              type: ModalTypes.warehouseRoleType,
              warehouseRoleType,
            },
            {
              afterClose: (success) => {
                if (success) triggerDataTableRefetch();
              },
            },
          );
        }),
        columnHelper.accessor('code', {
          header: tC('common.code'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('label', {
          header: tC('common.label'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('description', {
          header: tC('common.description'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('velocity', {
          header: tC('common.velocity'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('velocityUOMCode', {
          header: tC('common.velocityUOM'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('weightMax', {
          header: tC('common.weightMax'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('weightUOMCode', {
          header: tC('common.weightUOM'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('cost', {
          header: tC('common.costHour'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('currency', {
          header: tC('common.currency'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns;
    },
    [tC, openModal, triggerDataTableRefetch],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: WarehouseRoleTypeQueryShapeSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.WarehouseRoleTypeSettings,
      tableHeader: t('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      // baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useWarehouseRoleTypeSettingsDataTable;
