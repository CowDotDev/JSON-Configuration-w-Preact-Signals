import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { _TProductExclusionDataType } from '@/components/Table/hooks/shared-columns/useCreateProductExclusionListColumns';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import { ColumnType } from '@components/filter-builder/filter-definitions';

interface IUseCreateProductExclusionsColumns {
  addColumnsToStart?: TColumnFactory<_TProductExclusionDataType>;
  removeColumns?: (keyof _TProductExclusionDataType)[];
}
const useCreateProductExclusionsColumns = ({
  addColumnsToStart,
  removeColumns = [],
}: IUseCreateProductExclusionsColumns = {}) => {
  const { t } = useTranslation('components');

  const createProductExclusionsColumns = useCallback<TColumnFactory<_TProductExclusionDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('code', {
          header: t('columns.productCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('description', {
          header: t('columns.description'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('baseUOMCode', {
          header: t('common.erpBaseUom'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
          enableColumnFilter: false,
          enableGlobalFilter: false,
        }),
      ];
      return columns.filter(filterDataTableColumnDefs<_TProductExclusionDataType>(removeColumns));
    },
    [t, addColumnsToStart, removeColumns],
  );

  return createProductExclusionsColumns;
};

export default useCreateProductExclusionsColumns;
