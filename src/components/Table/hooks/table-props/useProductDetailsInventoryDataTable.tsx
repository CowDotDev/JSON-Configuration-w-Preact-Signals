import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { InventoryBaseQueryShapeSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateBaseInventoryColumns, {
  BASE_INV_HOOK,
  TBaseInvDataType,
  TBaseInvFieldNames,
  TBaseInvFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateBaseInventoryColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useProductDetailsInventoryDataTable = (productId: string) => {
  const { t } = useTranslation('pages', { keyPrefix: 'product-details' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createInventoryColumns = useCreateBaseInventoryColumns({ dataTestId: 'product-inventory' });
  const columns = useCreateDataTableColumns<TBaseInvDataType>(createInventoryColumns);

  const baseFilter = useMemo<ColumnFilter<TBaseInvFieldNames>[]>(
    () => [
      {
        columnId: InventoryBaseQueryShapeSortFields.ProductId,
        operator: FilterOperator.eq,
        value: productId,
      },
      {
        columnId: InventoryBaseQueryShapeSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [productId, selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TBaseInvFieldNames>[]>(
    () => [
      {
        id: InventoryBaseQueryShapeSortFields.BinCode,
        desc: false,
      },
      {
        id: InventoryBaseQueryShapeSortFields.ProductCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerProductInventoryDataTableRefetch: triggerDataTableRefetch,
    productInventoryDataTableProps: validateDataTableProps<
      TBaseInvDataType,
      TBaseInvFilterType,
      TBaseInvFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.ProductDetailsInventory,
      tableHeader: t('productInventory'),
      columns,
      queryHook: BASE_INV_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useProductDetailsInventoryDataTable;
