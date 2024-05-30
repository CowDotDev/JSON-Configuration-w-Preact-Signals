import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { InventoryProductQueryShapeSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateProductLevelInventoryColumns, {
  PRODUCT_INV_HOOK,
  TProductInvDataType,
  TProductInvFieldNames,
  TProductInvFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateProductLevelInventoryColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useInventoryLevelAdditionalOptions } from '@components/inventory/inventory-level-additional-options';
import { useWarehouseUtils } from '@context/warehouse-utils';
import { InventoryLevel } from '@models/inventory';

const useInventoryProductLevelDataTable = (setInventoryLevel: (level: InventoryLevel) => void) => {
  const { t } = useTranslation('components', { keyPrefix: 'inventory' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const inventoryLevelViews = useInventoryLevelAdditionalOptions(
    InventoryLevel.Product,
    setInventoryLevel,
  );

  const createProductInventoryColumns = useCreateProductLevelInventoryColumns({
    dataTestId: 'product-level-inventory',
  });
  const columns = useCreateDataTableColumns<TProductInvDataType>(createProductInventoryColumns);

  const baseFilter = useMemo<ColumnFilter<TProductInvFieldNames>[]>(
    () => [
      {
        columnId: InventoryProductQueryShapeSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TProductInvFieldNames>[]>(
    () => [
      {
        id: InventoryProductQueryShapeSortFields.ProductCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    productInventoryDataTableProps: validateDataTableProps<
      TProductInvDataType,
      TProductInvFilterType,
      TProductInvFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InventoryProductLevel,
      tableHeader: t(`${InventoryLevel.Product}Level`),
      layoutDropdownAddtOptions: inventoryLevelViews,
      layoutDropdownAddtOptionLabel: t('inventoryLevels'),
      columns,
      queryHook: PRODUCT_INV_HOOK,
      baseFilter,
      defaultSorting,
    }),
  };
};

export default useInventoryProductLevelDataTable;
