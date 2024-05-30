import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { SelectedWarehouseFragment } from '@/graphql/defs/context/__generated__/warehouse-utils.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import { ColumnType } from '@components/filter-builder/filter-definitions';

export type TErpIntegrationDataType = SelectedWarehouseFragment['sapMappings'][number];

interface IUseCreateErpIntegrationColumns {
  removeColumns?: (keyof TErpIntegrationDataType)[];
}
const useCreateErpIntegrationColumns = ({
  removeColumns = [],
}: IUseCreateErpIntegrationColumns) => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.erp-integration' });

  const createErpIntegrationColumns = useCallback<TColumnFactory<TErpIntegrationDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('plant', {
          header: t('plant'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('storageLocations', {
          header: t('storageLocation'),
          cell: ({ getValue }) => (getValue() ? getValue().join(', ') : ''),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value.join(', '),
          },
        }),
        columnHelper.accessor('shippingPoints', {
          header: t('shippingPoints'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('erpWarehouseCode', {
          header: t('erpWarehouseCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TErpIntegrationDataType>(removeColumns));
    },
    [...removeColumns],
  );

  return createErpIntegrationColumns;
};

export default useCreateErpIntegrationColumns;
