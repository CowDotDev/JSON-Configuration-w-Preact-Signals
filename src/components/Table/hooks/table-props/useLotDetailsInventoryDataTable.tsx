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
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useLotDetailsInventoryDataTable = (lotId: string) => {
  const { t } = useTranslation('pages', { keyPrefix: 'lot-details' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const createInventoryColumns = useCreateBaseInventoryColumns({ dataTestId: 'lot-inventory' });
  const columns = useCreateDataTableColumns<TBaseInvDataType>(createInventoryColumns);

  const baseFilter = useMemo<ColumnFilter<TBaseInvFieldNames>[]>(
    () => [
      {
        columnId: InventoryBaseQueryShapeSortFields.LotId,
        operator: FilterOperator.eq,
        value: lotId,
      },
      {
        columnId: InventoryBaseQueryShapeSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [lotId, selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TBaseInvFieldNames>[]>(
    () => [
      {
        id: InventoryBaseQueryShapeSortFields.BinCode,
        desc: false,
      },
      {
        id: InventoryBaseQueryShapeSortFields.LotCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    lotDetailsInventoryDataTableProps: validateDataTableProps<
      TBaseInvDataType,
      TBaseInvFilterType,
      TBaseInvFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.LotDetailsInventory,
      tableHeader: t('lotInventory'),
      columns,
      queryHook: BASE_INV_HOOK,
      baseFilter,
      defaultSorting,
    }),
  };
};

export default useLotDetailsInventoryDataTable;
