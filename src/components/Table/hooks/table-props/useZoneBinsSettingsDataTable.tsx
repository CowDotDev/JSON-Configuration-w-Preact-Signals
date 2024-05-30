import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useZoneBinsSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useZoneBinsSettingsDataTable.generated';
import {
  BinActiveState,
  BinBlockState,
  BinType,
  ViewZoneBinMappedSortFields,
} from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
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
import LinkCell from '@/components/Table/table/cells/LinkCell';
import {
  ColumnFilter,
  ColumnType,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';
import { BIN_DETAILS } from '@constants/routes';
import { useWarehouseUtils } from '@context/warehouse-utils';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

const LAZY_QUERY_HOOK = useZoneBinsSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

export enum ZoneEntityTableVersion {
  Display,
  Add,
  Remove,
}

const useZoneBinsSettingsDataTable = ({
  zoneId,
  version = ZoneEntityTableVersion.Display,
}: {
  zoneId: string;
  version?: ZoneEntityTableVersion;
}) => {
  const { t } = useTranslation('components');
  const { selectedWarehouseId } = useWarehouseUtils();

  const { selection, clearSelection, rowSelection } = useDataTableSelection<_TDataType>(
    version === ZoneEntityTableVersion.Display ? undefined : SelectionType.multi,
    version === ZoneEntityTableVersion.Display ? undefined : 'binId',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      columnHelper.accessor('zoneCode', {
        header: t('common.zone'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
          exportOnly: true,
        },
      }),
      columnHelper.accessor('binCode', {
        header: t('common.code'),
        cell: ({ row, getValue }) => (
          <LinkCell
            href={warehouseRoute(`${BIN_DETAILS}/${row.original.binId}`)}
            text={getValue()}
            dataTestId="zone-bins-settings-bin-link"
          />
        ),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('binType', {
        header: t('common.type'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(BinType).map((status) => ({
            value: BinType[status],
            display: t(`common.${BinType[status]}`),
          })),
        },
      }),
      columnHelper.accessor('inactive', {
        header: t('common.inactive'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(BinActiveState).map((state) => ({
            value: BinActiveState[state],
            display: t(`common.${BinActiveState[state]}`),
          })),
        },
      }),
      columnHelper.accessor('sourceBinBlock', {
        header: t('common.sourceBinBlock'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(BinBlockState).map((state) => ({
            value: BinBlockState[state],
            display: t(`common.${BinBlockState[state]}`),
          })),
        },
      }),
      columnHelper.accessor('destinationBinBlock', {
        header: t('common.destinationBinBlock'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(BinBlockState).map((state) => ({
            value: BinBlockState[state],
            display: t(`common.${BinBlockState[state]}`),
          })),
        },
      }),
      columnHelper.accessor('level', {
        header: t('common.level'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('x', {
        header: t('common.x'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('y', {
        header: t('common.y'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('z', {
        header: t('common.z'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
    ],
    [],
  );

  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: ViewZoneBinMappedSortFields.BinType,
        operator: FilterOperator.notIn,
        value: ['disposition', 'lostAndFound', 'planned'],
      },
      {
        columnId: ViewZoneBinMappedSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
      {
        columnId: ViewZoneBinMappedSortFields.ZoneId,
        operator: FilterOperator.eq,
        value: zoneId,
      },
    ],
    [selectedWarehouseId, version],
  );

  const defaultSorting: IDataTableSort<_TFieldNames>[] = useMemo(
    () => [
      {
        id: ViewZoneBinMappedSortFields.BinCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    selectedBins: version === ZoneEntityTableVersion.Display ? undefined : selection,
    zoneBinsSettingsDataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      variant:
        version === ZoneEntityTableVersion.Display
          ? DataTableVariants.Collapsible
          : DataTableVariants.Basic,
      type: 'query',
      tableId: setTableId(version),
      tableHeader: t('zone.zoneBins.title'),
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
      return DataTableIds.ZoneBinsSettingsDisplay;
    case ZoneEntityTableVersion.Remove:
      return DataTableIds.ZoneBinsSettingsRemove;
  }
};

export default useZoneBinsSettingsDataTable;
