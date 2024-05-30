import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useProductUoMTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateUnitOfMeasurementColumns.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';

export const UOM_HOOK = useProductUoMTableLazyQuery;
export type TUomDataType = TExtractLazyHookDataType<typeof UOM_HOOK>;
export type TUomFilterType = TExtractLazyHookFetchFilterType<typeof UOM_HOOK>;
export type TUomFieldNames = TExtractLazyHookFieldNames<typeof UOM_HOOK>;

const useCreateUnitOfMeasurementColumns = ({
  whUomId,
  removeColumns = [],
}: {
  whUomId: string;
  removeColumns?: (keyof TUomDataType | 'ProductUomType')[];
}) => {
  const { t: tC } = useTranslation('components', { keyPrefix: 'common' });

  const createUnitOfMeasurementColumns = useCallback<TColumnFactory<TUomDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.display({
          id: 'ProductUomType',
          header: tC('type'),
          cell: ({ row }) => {
            const types = [];

            if (row.original.isBaseUom) {
              types.push(tC('erpBaseUom'));
            }
            if (row.original.id === whUomId) {
              types.push(tC('warehouseUom'));
            }

            return types.join(' & ');
          },
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (_, row) => {
              const types = [];

              if (row.isBaseUom) {
                types.push(tC('erpBaseUom'));
              }
              if (row.id === whUomId) {
                types.push(tC('warehouseUom'));
              }

              return types.join(' & ');
            },
          },
          enableColumnFilter: false,
          enableHiding: false,
          enableResizing: false,
          enableSorting: false,
          enableMultiSort: false,
        }),
        columnHelper.accessor('code', {
          header: tC('uomCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('label', {
          header: tC('label'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('conversionFactor', {
          header: tC('conversion'),
          cell: ({ getValue }) => `${getValue()} ${tC('unit', { count: getValue() })}`,
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value) => `${value} ${tC('unit', { count: value })}`,
          },
        }),
        columnHelper.accessor('volume', {
          header: tC('volume'),
          cell: ({ row, getValue }) =>
            getValue() ? `${getValue()} ${row.original.volumeUOMCode}` : '',
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value, row) => (value ? `${value} ${row.volumeUOMCode}` : ''),
          },
        }),
        columnHelper.accessor('length', {
          header: tC('length'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('width', {
          header: tC('width'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('height', {
          header: tC('height'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('dimensionUOMCode', {
          header: tC('unit', { count: 2 }),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('grossWeight', {
          header: tC('grossWeight'),
          cell: ({ row, getValue }) =>
            getValue() ? `${getValue()} ${row.original.weightUOMCode}` : '',
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value, row) => (value ? `${value} ${row.weightUOMCode}` : ''),
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TUomDataType>(removeColumns));
    },
    [tC, whUomId, ...removeColumns],
  );

  return createUnitOfMeasurementColumns;
};

export default useCreateUnitOfMeasurementColumns;
