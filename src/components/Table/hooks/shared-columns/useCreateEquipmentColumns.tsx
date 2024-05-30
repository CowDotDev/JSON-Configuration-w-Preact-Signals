import { useCallback } from 'react';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import currencyColumn from '@/components/Table/columnDefs/currency';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { QuantityInput } from '@components/form-util/input/quantity-input';
import { useWarehouseUtils } from '@context/warehouse-utils';
import { IEquipment, IRuleset } from '@hooks/form/ruleset/useRulesetForm';

interface IUseCreateEquipmentColumns {
  dataTestId: string;
  review: boolean;
  control: Control<IRuleset>;
  removeColumns?: (keyof IEquipment)[];
}
const useCreateEquipmentColumns = ({
  dataTestId,
  review,
  control,
  removeColumns = [],
}: IUseCreateEquipmentColumns) => {
  const { t } = useTranslation('components');

  const {
    selectedWarehouse: {
      displayPreference: { currency },
    },
  } = useWarehouseUtils();

  const createEquipmentColumns = useCallback<TColumnFactory<IEquipment>>(
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
                name={`equipment.${index}.quantity`}
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
          size: 100,
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
        columnHelper.accessor('code', {
          header: t('common.type'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
          id: 'type-code',
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

      return columns.filter(filterDataTableColumnDefs<IEquipment>(removeColumns));
    },
    [...removeColumns],
  );

  return createEquipmentColumns;
};

export default useCreateEquipmentColumns;
