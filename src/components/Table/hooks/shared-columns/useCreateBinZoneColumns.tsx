import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useBinsTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateBinColumns.generated';
import { BinActiveState, BinBlockState } from '@/graphql/types.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { BINS, BIN_SIZES } from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

export const BINS_LAZY_HOOK = useBinsTableLazyQuery;
export type TBinsDataType = TExtractLazyHookDataType<typeof BINS_LAZY_HOOK>;
export type TBinsFilterType = TExtractLazyHookFetchFilterType<typeof BINS_LAZY_HOOK>;
export type TBinsFieldNames = TExtractLazyHookFieldNames<typeof BINS_LAZY_HOOK>;

interface IUseCreateBinZoneColumns {
  dataTestId: string;
  removeColumns?: (keyof TBinsDataType)[];
}

const useCreateBinZoneColumns = ({ dataTestId, removeColumns = [] }: IUseCreateBinZoneColumns) => {
  const { t } = useTranslation('components');

  const { displayDateTime } = useDateTime();

  const createBinZoneColumns = useCallback<TColumnFactory<TBinsDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('zoneCode', {
          header: t('common.zone'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('code', {
          header: t('common.code'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BINS}/${row.original.id}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-bin-details-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('inactive', {
          header: t('common.status'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(BinActiveState).map((state) => ({
              value: BinActiveState[state],
              display: t(`common.${BinActiveState[state]}`),
            })),
            exportFormatter: (value) => t(`common.${value}`),
          },
        }),
        columnHelper.accessor('sourceBinBlock', {
          header: t('common.removal'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(BinBlockState).map((state) => ({
              value: BinBlockState[state],
              display: t(`common.${BinBlockState[state]}`),
            })),
            exportFormatter: (value) => t(`common.${value}`),
          },
        }),
        columnHelper.accessor('destinationBinBlock', {
          header: t('common.placement'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(BinBlockState).map((state) => ({
              value: BinBlockState[state],
              display: t(`common.${BinBlockState[state]}`),
            })),
            exportFormatter: (value) => t(`common.${value}`),
          },
        }),

        columnHelper.accessor('areaCode', {
          header: t('bins.columns.areaCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('level', {
          header: t('common.level'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('verificationCode', {
          header: t('bins.columns.verification'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
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
        columnHelper.accessor('lastMovement', {
          header: t('common.lastMovement'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('lastCount', {
          header: t('common.lastCounted'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('hasOpenTasks', {
          header: t('common.hasOpenTasks'),
          cell: ({ getValue }) => (getValue() ? t('common.yes') : t('common.no')),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => (value ? t('common.yes') : t('common.no')),
          },
        }),
        columnHelper.accessor('containsProducts', {
          header: t('bins.columns.containsProducts'),
          cell: ({ getValue }) => (getValue() ? t('common.yes') : t('common.no')),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => (value ? t('common.yes') : t('common.no')),
          },
        }),
        columnHelper.accessor('binSizeCode', {
          header: t('bins.columns.binSize'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BIN_SIZES}/${row.original.binSizeId}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-bin-size-details-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('binSizeWeightCapacity', {
          header: t('common.weightCapacity'),
          cell: ({ row, getValue }) => `${getValue()} ${row.original.weightCapacityUomCode}`,
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value, row) => `${value} ${row.weightCapacityUomCode}`,
          },
        }),
        columnHelper.accessor('binSizeDepth', {
          header: t('common.depth'),
          cell: ({ row, getValue }) => `${getValue()} ${row.original.distanceUomCode}`,
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value, row) => `${value} ${row.distanceUomCode}`,
          },
        }),
        columnHelper.accessor('binSizeWidth', {
          header: t('common.width'),
          cell: ({ row, getValue }) => `${getValue()} ${row.original.distanceUomCode}`,
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value, row) => `${value} ${row.distanceUomCode}`,
          },
        }),
        columnHelper.accessor('binSizeHeight', {
          header: t('common.height'),
          cell: ({ row, getValue }) => `${getValue()} ${row.original.distanceUomCode}`,
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value, row) => `${value} ${row.distanceUomCode}`,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TBinsDataType>(removeColumns));
    },
    [t, displayDateTime, ...removeColumns],
  );

  return createBinZoneColumns;
};

export default useCreateBinZoneColumns;
