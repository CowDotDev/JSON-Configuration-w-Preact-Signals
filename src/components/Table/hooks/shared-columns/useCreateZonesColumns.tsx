import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ZoneConfiguration } from '@/graphql/types.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { FixedBins, IZone } from '@hooks/form/ruleset/useRulesetForm';

interface IUseCreateZonesColumns {
  removeColumns?: (keyof IZone)[];
  addColumnsToStart?: TColumnFactory<IZone>;
}
const useCreateZonesColumns = ({
  removeColumns = [],
  addColumnsToStart,
}: IUseCreateZonesColumns) => {
  const { t } = useTranslation('components');

  const createZonesColumns = useCallback<TColumnFactory<IZone>>(
    (columnHelper) => {
      const columns = [
        ...(addColumnsToStart ? addColumnsToStart(columnHelper) : []),
        columnHelper.accessor('groupName', {
          header: t('common.zoneGroup'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('code', {
          header: t('common.zone'),
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
        columnHelper.accessor('zoneConfiguration', {
          header: t('common.restrictions'),
          cell: ({ getValue }) => {
            return t(`common.${getValue()}`);
          },
          meta: {
            columnType: ColumnType.enum,
            options: Object.values(ZoneConfiguration).map((value) => ({
              value,
              display: t(`common.${value}`),
            })),
          },
        }),
        columnHelper.accessor('optimizeZoneEnum', {
          header: t('modal.ruleset.optimizeZone'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: Object.values(FixedBins).map((value) => ({
              value,
              display: t(`common.${value}`),
            })),
          },
        }),
        columnHelper.accessor('isParentZone', {
          header: t('common.isParentZone'),
          cell: ({ getValue }) => (getValue() ? t('common.yes') : t('common.no')),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('childZoneCodes', {
          header: t('common.childZones'),
          cell: ({ getValue }) => getValue().join(', ') || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<IZone>(removeColumns));
    },
    [addColumnsToStart, ...removeColumns],
  );

  return createZonesColumns;
};

export default useCreateZonesColumns;
