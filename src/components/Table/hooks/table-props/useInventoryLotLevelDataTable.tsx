import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { InventoryLotQueryShapeSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateLotLevelInventoryColumns, {
  LOT_INV_HOOK,
  TLotInvDataType,
  TLotInvFieldNames,
  TLotInvFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateLotLevelInventoryColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useInventoryLevelAdditionalOptions } from '@components/inventory/inventory-level-additional-options';
import { useWarehouseUtils } from '@context/warehouse-utils';
import { InventoryLevel } from '@models/inventory';

const useInventoryLotLevelDataTable = (setInventoryLevel: (level: InventoryLevel) => void) => {
  const { t } = useTranslation('components', { keyPrefix: 'inventory' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const inventoryLevelViews = useInventoryLevelAdditionalOptions(
    InventoryLevel.Lot,
    setInventoryLevel,
  );

  const createLotInventoryColumns = useCreateLotLevelInventoryColumns({ dataTestId: 'lot-level' });
  const columns = useCreateDataTableColumns<TLotInvDataType>(createLotInventoryColumns);

  const baseFilter = useMemo<ColumnFilter<TLotInvFieldNames>[]>(
    () => [
      {
        columnId: InventoryLotQueryShapeSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TLotInvFieldNames>[]>(
    () => [
      {
        id: InventoryLotQueryShapeSortFields.ProductCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    lotInventoryDataTableProps: validateDataTableProps<
      TLotInvDataType,
      TLotInvFilterType,
      TLotInvFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InventoryLotLevel,
      tableHeader: t(`${InventoryLevel.Lot}Level`),
      layoutDropdownAddtOptions: inventoryLevelViews,
      layoutDropdownAddtOptionLabel: t('inventoryLevels'),
      columns,
      queryHook: LOT_INV_HOOK,
      baseFilter,
      defaultSorting,
    }),
  };
};

export default useInventoryLotLevelDataTable;
