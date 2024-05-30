import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useZoneAreasSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useZoneAreasSettingsDataTable.generated';
import { ViewZoneAreaSortFields } from '@/graphql/types.generated';
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

const LAZY_QUERY_HOOK = useZoneAreasSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useZoneAreasSettingsDataTable = ({ zoneId, version = ZoneEntityTableVersion.Display }) => {
  const { t } = useTranslation('components');
  const { selectedWarehouseId } = useWarehouseUtils();

  const { selection, clearSelection, rowSelection } = useDataTableSelection<_TDataType>(
    version === ZoneEntityTableVersion.Display ? undefined : SelectionType.multi,
    version === ZoneEntityTableVersion.Display ? undefined : 'areaId',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      columnHelper.accessor('areaCode', {
        header: t('common.code'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('areaName', {
        header: t('common.name'),
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
        columnId: ViewZoneAreaSortFields.Mapped,
        operator: FilterOperator.is,
        value: version === ZoneEntityTableVersion.Add ? false : true,
      },
      {
        columnId: ViewZoneAreaSortFields.ZoneId,
        operator: FilterOperator.eq,
        value: zoneId,
      },
      {
        columnId: ViewZoneAreaSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId, zoneId, version],
  );

  const defaultSorting: IDataTableSort<_TFieldNames>[] = useMemo(
    () => [
      {
        id: ViewZoneAreaSortFields.AreaCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    selectedAreas: version === ZoneEntityTableVersion.Display ? undefined : selection,
    zoneAreasSettingsDataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>(
      {
        variant:
          version === ZoneEntityTableVersion.Display
            ? DataTableVariants.Collapsible
            : DataTableVariants.Basic,
        type: 'query',
        tableId: setTableId(version),
        tableHeader: t('zone.zoneAreas.title'),
        columns,
        queryHook: LAZY_QUERY_HOOK,
        baseFilter,
        defaultSorting,
        refetchTrigger,
        rowSelection,
      },
    ),
  };
};
const setTableId = (version) => {
  switch (version) {
    case ZoneEntityTableVersion.Display:
      return DataTableIds.ZoneAreasSettingsDisplay;
    case ZoneEntityTableVersion.Add:
      return DataTableIds.ZoneAreasSettingsAdd;
    case ZoneEntityTableVersion.Remove:
      return DataTableIds.ZoneAreasSettingsRemove;
  }
};

export default useZoneAreasSettingsDataTable;
