import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useZoneBinsAddTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useZoneBinsAddDataTable.generated';
import {
  BinActiveState,
  BinBlockState,
  BinType,
  ViewZoneBinUnmappedSortFields,
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

const LAZY_QUERY_HOOK = useZoneBinsAddTableLazyQuery;
type _TAddDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TAddFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TAddFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useZoneBinsAddDataTable = () => {
  const { t } = useTranslation('components');
  const { selectedWarehouseId } = useWarehouseUtils();
  const { selection, rowSelection } = useDataTableSelection<_TAddDataType>(
    SelectionType.multi,
    'binId',
  );

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();
  const columns = useCreateDataTableColumns<_TAddDataType>(
    (columnHelper) => [
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

  const baseFilter = useMemo<ColumnFilter<_TAddFieldNames>[]>(
    () => [
      {
        columnId: ViewZoneBinUnmappedSortFields.BinType,
        operator: FilterOperator.notIn,
        value: ['disposition', 'lostAndFound', 'planned'],
      },
      {
        columnId: ViewZoneBinUnmappedSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting: IDataTableSort<_TAddFieldNames>[] = useMemo(
    () => [
      {
        id: ViewZoneBinUnmappedSortFields.BinCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    selectedBins: selection,
    zoneBinsSettingsDataTableProps: validateDataTableProps<
      _TAddDataType,
      _TAddFilterType,
      _TAddFieldNames
    >({
      variant: DataTableVariants.Basic,
      type: 'query',
      tableId: DataTableIds.ZoneBinsSettingsAdd,
      tableHeader: t('zone.zoneBins.title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
      defaultCollapsed: false,
      rowSelection,
    }),
  };
};

export default useZoneBinsAddDataTable;
