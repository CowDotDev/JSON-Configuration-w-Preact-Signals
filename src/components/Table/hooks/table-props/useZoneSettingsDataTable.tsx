import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useZoneSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useZoneSettingsDataTable.generated';
import { ViewZoneSortFields } from '@/graphql/types.generated';
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
import LinkCell from '@/components/Table/table/cells/LinkCell';
import {
  ColumnFilter,
  ColumnType,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';
import { ZONE_DETAILS } from '@constants/routes';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { useWarehouseUtils } from '@context/warehouse-utils';
import { warehouseRoute } from '@lib/routes-utils';
import { ModalTypes } from '@models/modal';

const useZoneSettingsDataTable = () => {
  const { t } = useTranslation('components');
  const { openModal } = useModalToggle();
  const { selectedWarehouseId } = useWarehouseUtils();

  const LAZY_QUERY_HOOK = useZoneSettingsTableLazyQuery;
  type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
  type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
  type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();
  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      createEditRowColumnDef(columnHelper, (zone) => {
        openModal(
          {
            type: ModalTypes.zoneUpdate,
            zone,
          },
          {
            afterClose: (success) => {
              if (success) triggerDataTableRefetch();
            },
          },
        );
      }),
      columnHelper.accessor('code', {
        header: t('common.code'),
        cell: ({ row, getValue }) => (
          <LinkCell
            href={warehouseRoute(`${ZONE_DETAILS}/${row.original.id}`)}
            text={getValue()}
            dataTestId="zone-settings-zone-link"
          />
        ),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('name', {
        header: t('common.name'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('description', {
        header: t('common.description'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('warehouseName', {
        header: t('common.warehouse'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('areaCount', {
        header: t('zones.columns.areaCount'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('aisleCount', {
        header: t('zones.columns.aisleCount'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('aisleColumnCount', {
        header: t('zones.columns.columnCount'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('binCount', {
        header: t('zones.columns.binCount'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('pickingUomRestrictionLabel', {
        header: t('zones.columns.uomRestriction'),
        cell: ({ getValue }) => getValue() || '',
        meta: {
          columnType: ColumnType.string,
        },
      }),
    ],
    [triggerDataTableRefetch],
  );
  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: ViewZoneSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting: IDataTableSort<_TFieldNames>[] = useMemo(
    () => [
      {
        id: ViewZoneSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    zoneSettingsDataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.ZoneSettings,
      tableHeader: t('zones.title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useZoneSettingsDataTable;
