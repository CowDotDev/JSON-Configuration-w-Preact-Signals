import { useCallback } from 'react';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import currencyColumn from '@/components/Table/columnDefs/currency';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { QuantityInput } from '@components/form-util/input/quantity-input';
import { useWarehouseUtils } from '@context/warehouse-utils';
import { IRuleset, IWorkers } from '@hooks/form/ruleset/useRulesetForm';

interface IUseCreateWorkersColumns {
  dataTestId: string;
  review: boolean;
  control: Control<IRuleset>;
  removeColumns?: (keyof IWorkers)[];
}
const useCreateWorkersColumns = ({
  dataTestId,
  review,
  control,
  removeColumns = [],
}: IUseCreateWorkersColumns) => {
  const { t } = useTranslation('components');

  const {
    selectedWarehouse: {
      displayPreference: { currency },
    },
  } = useWarehouseUtils();

  const createWorkersColumns = useCallback<TColumnFactory<IWorkers>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('quantity', {
          header: t('common.quantity'),
          cell: ({
            row: {
              original: { quantity, index },
            },
          }) => {
            return review ? (
              quantity
            ) : (
              <QuantityInput
                control={control}
                name={`workers.${index}.quantity`}
                quantity={quantity}
                dataTestId={dataTestId}
              />
            );
          },
          meta: {
            columnType: ColumnType.string,
          },
          size: 70,
          enableColumnFilter: false,
        }),
        columnHelper.accessor('code', {
          header: t('common.code'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('label', {
          header: t('common.label'),
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
        columnHelper.accessor('cost', {
          header: t('common.costPerHour'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
          size: 70,
        }),
        currencyColumn(columnHelper, t('common.currency'), 100, currency),
      ];

      return columns.filter(filterDataTableColumnDefs<IWorkers>(removeColumns));
    },
    [...removeColumns],
  );

  return createWorkersColumns;
};

export default useCreateWorkersColumns;
