import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useAreaSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useAreaSettingsDataTable.generated';
import { AreaStatus } from '@/graphql/types.generated';
import DeprecatedWarehouseFeatureFlagToggles from '@/signals/configuration/deprecatedWarehouseFeatureFlagToggles/DeprecatedWarehouseFeatureFlagToggles';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import useDisplayTemperature from '@hooks/useDisplayTemperature';
import enumKeys from '@lib/enum-keys';

export const LAZY_QUERY_HOOK = useAreaSettingsTableLazyQuery;
export type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
export type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
export type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

interface ICreateAreasColumns {
  dataTestId: string;
  addColumnsToStart?: TColumnFactory<_TDataType>;
  removeColumns?: (keyof _TDataType)[];
}

const useCreateAreasColumns = ({ addColumnsToStart, removeColumns = [] }: ICreateAreasColumns) => {
  const { t } = useTranslation('components');
  const { temperatureSuffix, displayTemperature } = useDisplayTemperature();

  const warehouseFeatureFlags = DeprecatedWarehouseFeatureFlagToggles;

  const createAreasColumns = useCallback<TColumnFactory<_TDataType>>(
    (columnHelper) => {
      const columns = [
        ...(addColumnsToStart ? addColumnsToStart(columnHelper) : []),
        columnHelper.accessor('code', {
          header: t('common.code'),
          cell: ({ getValue }) => getValue(),
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
        warehouseFeatureFlags.value.areas.showStorageLocationOptions
          ? columnHelper.accessor('storageLocation', {
              header: t('common.storageLocation'),
              cell: ({ getValue }) => getValue(),
              meta: {
                columnType: ColumnType.string,
              },
            })
          : null,
        columnHelper.accessor('description', {
          header: t('common.description'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('exitPoint', {
          header: t('common.issueNewStock'),
          cell: ({ getValue }) => (getValue() !== null ? t(`common.${getValue()}`) : ''),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => (value ? t(`common.${value}`) : ''),
          },
        }),
        columnHelper.accessor('entryPoint', {
          header: t('common.receiveNewStock'),
          cell: ({ getValue }) => (getValue() !== null ? t(`common.${getValue()}`) : ''),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => (value ? t(`common.${value}`) : ''),
          },
        }),
        columnHelper.accessor('status', {
          header: t('common.status'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(AreaStatus).map((status) => ({
              value: AreaStatus[status],
              display: t(`common.${AreaStatus[status]}`),
            })),
            exportFormatter: (value) => t(`common.${value}`),
          },
        }),
        columnHelper.accessor('targetTemperature', {
          header: t('columns.targetTemperature', { temperatureSuffix }),
          cell: ({ getValue }) => displayTemperature(getValue()),
          meta: {
            columnType: ColumnType.temperature,
            exportFormatter: (value) => displayTemperature(value),
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<_TDataType>(removeColumns));
    },
    [addColumnsToStart, ...removeColumns],
  );

  return createAreasColumns;
};

export default useCreateAreasColumns;
