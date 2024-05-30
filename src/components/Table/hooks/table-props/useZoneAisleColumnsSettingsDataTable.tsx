import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useZoneAisleColumnsSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useZoneAisleColumnsSettingsDataTable.generated';
import { ViewZoneAisleColumnSortFields } from '@/graphql/types.generated';
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

const LAZY_QUERY_HOOK = useZoneAisleColumnsSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useZoneAisleColumnsSettingsDataTable = ({
  zoneId,
  version = ZoneEntityTableVersion.Display,
}) => {
  const { t } = useTranslation('components');
  const { selectedWarehouseId } = useWarehouseUtils();

  const { selection, clearSelection, rowSelection } = useDataTableSelection<_TDataType>(
    version === ZoneEntityTableVersion.Display ? undefined : SelectionType.multi,
    version === ZoneEntityTableVersion.Display ? undefined : 'aisleColumnId',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      columnHelper.accessor('aisleColumnCode', {
        header: t('common.code'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('aisleColumnName', {
        header: t('common.name'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('aisleColumnDescription', {
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
        columnId: ViewZoneAisleColumnSortFields.Mapped,
        operator: FilterOperator.is,
        value: version === ZoneEntityTableVersion.Add ? false : true,
      },
      {
        columnId: ViewZoneAisleColumnSortFields.ZoneId,
        operator: FilterOperator.eq,
        value: zoneId,
      },
      {
        columnId: ViewZoneAisleColumnSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId, version, zoneId],
  );

  const defaultSorting: IDataTableSort<_TFieldNames>[] = useMemo(
    () => [
      {
        id: ViewZoneAisleColumnSortFields.AisleColumnCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    selectedAisleColumns: version === ZoneEntityTableVersion.Display ? undefined : selection,
    zoneAisleColumnsSettingsDataTableProps: validateDataTableProps<
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
      tableHeader: t('zone.zoneAisleColumns.title'),
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
      return DataTableIds.ZoneAisleColumnsSettingsDisplay;
    case ZoneEntityTableVersion.Add:
      return DataTableIds.ZoneAisleColumnsSettingsAdd;
    case ZoneEntityTableVersion.Remove:
      return DataTableIds.ZoneAisleColumnsSettingsRemove;
  }
};

export default useZoneAisleColumnsSettingsDataTable;
