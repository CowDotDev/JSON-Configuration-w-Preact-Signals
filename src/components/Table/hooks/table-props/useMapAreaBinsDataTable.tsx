import { Box } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useMapAreaBinsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useMapAreaBinsDataTable.generated';
import { AreaStatus, BinBlockState, ViewMapBinSortFields } from '@/graphql/types.generated';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import {
  ColumnFilter,
  ColumnType,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';
import { BIN_DETAILS, MAP } from '@constants/routes';
import { useWarehouseUtils } from '@context/warehouse-utils';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

const LAZY_QUERY_HOOK = useMapAreaBinsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useMapAreaBinsDataTable = (
  areaColorMapping: Record<string, string>,
  opts: { aisleId?: string } = {},
) => {
  const { t } = useTranslation('pages', { keyPrefix: 'maps' });
  const { t: tC } = useTranslation('components');
  const { displayDateTime } = useDateTime();
  const { selectedWarehouseId } = useWarehouseUtils();

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      columnHelper.accessor('areaName', {
        header: t('columns.area'),
        cell: ({ row, getValue }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            <Box
              sx={{
                height: '24px',
                minWidth: '24px',
                marginRight: '10px',
                backgroundColor: areaColorMapping[row.original.areaId],
              }}
            />
            <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
              {getValue()}
            </Box>
          </Box>
        ),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('aisleCode', {
        header: t('columns.aisle'),
        cell: ({ getValue }) => (
          <LinkCell
            href={warehouseRoute(`/${MAP}`)}
            text={getValue()}
            dataTestId="map-area-bins-aisle-map-link"
          />
        ),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('aisleColumnCode', {
        header: t('columns.column'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('level', {
        header: t('columns.level'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('binCode', {
        header: t('columns.bin'),
        cell: ({ row, getValue }) => (
          <LinkCell
            href={warehouseRoute(`${BIN_DETAILS}/${row.original.binId}`)}
            text={getValue()}
            dataTestId="map-area-bins-bin-link"
          />
        ),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('status', {
        header: t('columns.status'),
        cell: ({ getValue }) => tC(`common.${getValue()}`),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(AreaStatus).map((status) => ({
            value: AreaStatus[status],
            display: tC(`common.${AreaStatus[status]}`),
          })),
          exportFormatter: (value) => tC(`common.${value}`),
        },
      }),
      columnHelper.accessor('sourceBinBlock', {
        header: t('columns.removal'),
        cell: ({ getValue }) => tC(`common.${getValue()}`),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(BinBlockState).map((state) => ({
            value: BinBlockState[state],
            display: tC(`common.${BinBlockState[state]}`),
          })),
          exportFormatter: (value) => tC(`common.${value}`),
        },
      }),
      columnHelper.accessor('destinationBinBlock', {
        header: t('columns.placement'),
        cell: ({ getValue }) => tC(`common.${getValue()}`),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(BinBlockState).map((state) => ({
            value: BinBlockState[state],
            display: tC(`common.${BinBlockState[state]}`),
          })),
          exportFormatter: (value) => tC(`common.${value}`),
        },
      }),
      columnHelper.accessor('lastCount', {
        header: t('columns.lastCounted'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
      columnHelper.accessor('lastMovement', {
        header: t('columns.lastMoved'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
    ],
    [t, tC, displayDateTime, areaColorMapping],
  );

  const aisleBaseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: ViewMapBinSortFields.AisleId,
        operator: FilterOperator.eq,
        value: opts?.aisleId,
      },
    ],
    [opts?.aisleId],
  );

  const defaultBaseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: ViewMapBinSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  return {
    mapAreaBinsDataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.MapAreaBins,
      tableHeader: t('mapAreaBinsTitle'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter: opts?.aisleId ? aisleBaseFilter : defaultBaseFilter,
    }),
  };
};

export default useMapAreaBinsDataTable;
