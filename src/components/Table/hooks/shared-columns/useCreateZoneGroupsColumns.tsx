import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ZoneConfiguration } from '@/graphql/types.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { IZoneGroup, MaxMovements } from '@hooks/form/ruleset/useRulesetForm';

interface IUseCreateZoneGroupsColumns {
  removeColumns?: (keyof IZoneGroup)[];
  addColumnsToStart?: TColumnFactory<IZoneGroup>;
}
const useCreateZoneGroupsColumns = ({
  removeColumns = [],
  addColumnsToStart,
}: IUseCreateZoneGroupsColumns) => {
  const { t } = useTranslation('components');

  const createZoneGroupsColumns = useCallback<TColumnFactory<IZoneGroup>>(
    (columnHelper) => {
      const columns = [
        ...(addColumnsToStart ? addColumnsToStart(columnHelper) : []),
        columnHelper.accessor('name', {
          header: t('columns.zoneGroupName'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
          enableColumnFilter: true,
          enableSorting: true,
        }),
        columnHelper.accessor('zoneConfiguration', {
          header: t('columns.restrictions'),
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
          header: t('columns.maxMovements'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,

            options: Object.values(MaxMovements).map((value) => ({
              value,
              display: t(`common.${value}`),
            })),
          },
          size: 90,
        }),
        columnHelper.accessor('zonesInGroupByCode', {
          header: t('columns.zonesIncluded'),
          cell: ({ getValue }) => getValue().join(', '),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<IZoneGroup>(removeColumns));
    },
    [addColumnsToStart, ...removeColumns],
  );

  return createZoneGroupsColumns;
};

export default useCreateZoneGroupsColumns;
