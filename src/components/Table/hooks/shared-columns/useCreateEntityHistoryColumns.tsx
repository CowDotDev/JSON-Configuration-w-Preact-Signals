import { ColumnMeta } from '@tanstack/react-table';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useEntityHistoryTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateEntityHistoryColumns.generated';
import { EntityChangeType } from '@/graphql/types.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import { DefaultDataType } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';

export const ENTITY_HISTORY_HOOK = useEntityHistoryTableLazyQuery;
export type TEntityHistoryDataType = TExtractLazyHookDataType<typeof ENTITY_HISTORY_HOOK>;
export type TEntityHistoryFilterType = TExtractLazyHookFetchFilterType<typeof ENTITY_HISTORY_HOOK>;
export type TEntityHistoryFieldNames = TExtractLazyHookFieldNames<typeof ENTITY_HISTORY_HOOK>;

export interface IIdentifierColumn<
  EntityType extends DefaultDataType = DefaultDataType,
  EntityColumns extends keyof EntityType = keyof EntityType,
  EntityLabelColumn extends keyof EntityType = keyof EntityType,
> {
  columnHeader: string;
  entityDefs: EntityType[];
  entityIdField: EntityColumns;
  entityLabelField: EntityLabelColumn;
  entityLabelMeta: ColumnMeta<EntityType, EntityType[EntityLabelColumn]>;
}
interface IUseCreateEntityHistoryColumns {
  identifierColumn?: IIdentifierColumn;
  removeColumns?: (keyof TEntityHistoryDataType)[];
}
const useCreateEntityHistoryColumns = ({
  identifierColumn,
  removeColumns = [],
}: IUseCreateEntityHistoryColumns = {}) => {
  const { t } = useTranslation('components');
  const { displayDateTime } = useDateTime();

  const createEntityHistoryColumns = useCallback<TColumnFactory<TEntityHistoryDataType>>(
    (columnHelper) => {
      const columns = [
        identifierColumn
          ? columnHelper.accessor('entityId', {
              header: identifierColumn.columnHeader,
              cell: ({ getValue }) => {
                const entityDef = identifierColumn.entityDefs.find(
                  (entity) => entity[identifierColumn.entityIdField] === getValue(),
                );
                return !!entityDef && entityDef[identifierColumn.entityLabelField]
                  ? entityDef[identifierColumn.entityLabelField]
                  : null;
              },
              meta: identifierColumn.entityLabelMeta,
            })
          : null,
        columnHelper.accessor('entity', {
          header: t('common.entity'),
          cell: ({ getValue }) => getValue().charAt(0).toUpperCase() + getValue().slice(1),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('code', {
          header: t('common.code'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('field', {
          header: t('common.field'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('old', {
          header: t('common.oldValue'),
          cell: ({ row: { original: rowValues }, getValue }) =>
            rowValues.fieldType === 'date' ? displayDateTime({ date: getValue() }) : getValue(),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value, rowData) =>
              rowData.fieldType === 'date' ? displayDateTime({ date: value }) : value,
          },
        }),
        columnHelper.accessor('new', {
          header: t('common.newValue'),
          cell: ({ row: { original: rowValues }, getValue }) =>
            rowValues.fieldType === 'date' ? displayDateTime({ date: getValue() }) : getValue(),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value, rowData) =>
              rowData.fieldType === 'date' ? displayDateTime({ date: value }) : value,
          },
        }),
        columnHelper.accessor('date', {
          header: t('common.date'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('changeType', {
          header: t('common.changeType'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(EntityChangeType).map((changeType) => ({
              value: EntityChangeType[changeType],
              display: t(`common.${EntityChangeType[changeType]}`),
            })),
            exportFormatter: (value) => t(`common.${value}`),
          },
        }),
        columnHelper.accessor('name', {
          header: t('common.user'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TEntityHistoryDataType>(removeColumns));
    },
    [identifierColumn, ...removeColumns],
  );

  return createEntityHistoryColumns;
};

export default useCreateEntityHistoryColumns;
