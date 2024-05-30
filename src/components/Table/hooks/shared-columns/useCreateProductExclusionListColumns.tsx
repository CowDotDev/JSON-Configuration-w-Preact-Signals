import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useProductExclusionListLazyQuery } from '@/graphql/defs/pages/__generated__/slotting-product-exclusions.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { warehouseRoute } from '@lib/routes-utils';
import { PRODUCT_DETAILS } from '@/constants/routes';

export const PRODUCT_EXCLUSIONS_QUERY_HOOK = useProductExclusionListLazyQuery;
export type _TProductExclusionDataType = TExtractLazyHookDataType<
  typeof PRODUCT_EXCLUSIONS_QUERY_HOOK
>;
export type _TProductExclusionFilterType = TExtractLazyHookFetchFilterType<
  typeof PRODUCT_EXCLUSIONS_QUERY_HOOK
>;
export type _TProductExclusionFieldNames = TExtractLazyHookFieldNames<
  typeof PRODUCT_EXCLUSIONS_QUERY_HOOK
>;

interface IUseCreateProductExclusionsColumns {
  addColumnsToStart?: TColumnFactory<_TProductExclusionDataType>;
  removeColumns?: (keyof _TProductExclusionDataType)[];
}

const useCreateProductExclusionListColumns = ({
  addColumnsToStart,
  removeColumns = [],
}: IUseCreateProductExclusionsColumns = {}) => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.slotting-product-exclusions' });
  const { t: tC } = useTranslation('components');

  const createProductExclusionsColumns = useCallback<TColumnFactory<_TProductExclusionDataType>>(
    (columnHelper) => {
      const columns = [
        ...(addColumnsToStart ? addColumnsToStart(columnHelper) : []),
        columnHelper.accessor('code', {
          header: tC('columns.productCode'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${PRODUCT_DETAILS}/${row.original.id}`)}
              text={getValue()}
              dataTestId="product-exclusions-product-link"
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('description', {
          header: tC('columns.description'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('baseUOMCode', {
          header: tC('common.erpBaseUom'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
          enableColumnFilter: false,
          enableGlobalFilter: false,
        }),
        columnHelper.accessor('excludedBy', {
          header: t('columns.excludedBy'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];
      return columns.filter(filterDataTableColumnDefs<_TProductExclusionDataType>(removeColumns));
    },
    [t, addColumnsToStart, ...removeColumns],
  );

  return createProductExclusionsColumns;
};

export default useCreateProductExclusionListColumns;
