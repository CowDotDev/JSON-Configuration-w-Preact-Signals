import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useZoneAislesSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useZoneAislesSettingsDataTable.generated';
import { ViewZoneAisleSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { ZoneEntityTableVersion } from '@/components/Table/hooks/table-props/useZoneBinsSettingsDataTable';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants, IDataTableSort } from '@/components/Table/types/data-table';
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

const LAZY_QUERY_HOOK = useZoneAislesSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useZoneAislesSettingsDataTable = ({ zoneId, version = ZoneEntityTableVersion.Display }) => {
  const { t } = useTranslation('components');
  const { selectedWarehouseId } = useWarehouseUtils();

  const { selection, clearSelection, rowSelection } = useDataTableSelection<_TDataType>(
    version === ZoneEntityTableVersion.Display ? undefined : SelectionType.multi,
    version === ZoneEntityTableVersion.Display ? undefined : 'aisleId',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      columnHelper.accessor('aisleCode', {
        header: t('common.code'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('aisleName', {
        header: t('common.name'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('aisleDescription', {
        header: t('common.description'),
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
        columnId: ViewZoneAisleSortFields.Mapped,
        operator: FilterOperator.is,
        value: version === ZoneEntityTableVersion.Add ? false : true,
      },
      {
        columnId: ViewZoneAisleSortFields.ZoneId,
        operator: FilterOperator.eq,
        value: zoneId,
      },
      {
        columnId: ViewZoneAisleSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId, version, zoneId],
  );

  const defaultSorting: IDataTableSort<_TFieldNames>[] = useMemo(
    () => [
      {
        id: ViewZoneAisleSortFields.AisleCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    selectedAisles: version === ZoneEntityTableVersion.Display ? undefined : selection,
    zoneAislesSettingsDataTableProps: validateDataTableProps<
      _TDataType,
      _TFilterType,
      _TFieldNames
    >({
      variant:
        version === ZoneEntityTableVersion.Display
          ? DataTableVariants.Collapsible
          : DataTableVariants.Basic,
      type: 'query',
      tableId: setTableId(version),
      tableHeader: t('zone.zoneAisles.title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
      rowSelection,
    }),
  };
};

const setTableId = (version) => {
  switch (version) {
    case ZoneEntityTableVersion.Display:
      return DataTableIds.ZoneAislesSettingsDisplay;
    case ZoneEntityTableVersion.Add:
      return DataTableIds.ZoneAislesSettingsAdd;
    case ZoneEntityTableVersion.Remove:
      return DataTableIds.ZoneAislesSettingsRemove;
  }
};

export default useZoneAislesSettingsDataTable;
