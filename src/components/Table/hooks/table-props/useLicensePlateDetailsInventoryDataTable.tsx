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

const useLicensePlateDetailsInventoryDataTable = (licensePlateId: string) => {
  const { t } = useTranslation('pages', { keyPrefix: 'license-plate-details' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createInventoryColumns = useCreateBaseInventoryColumns({ dataTestId: 'lp-details-inv' });
  const columns = useCreateDataTableColumns<TBaseInvDataType>(createInventoryColumns);

  const baseFilter = useMemo<ColumnFilter<TBaseInvFieldNames>[]>(
    () => [
      {
        columnId: InventoryBaseQueryShapeSortFields.LicensePlateId,
        operator: FilterOperator.eq,
        value: licensePlateId,
      },
      {
        columnId: InventoryBaseQueryShapeSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [licensePlateId, selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TBaseInvFieldNames>[]>(
    () => [
      {
        id: InventoryBaseQueryShapeSortFields.LicensePlateCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerLpDetailsInventoryDataTableRefetch: triggerDataTableRefetch,
    lpDetailsInventoryDataTableProps: validateDataTableProps<
      TBaseInvDataType,
      TBaseInvFilterType,
      TBaseInvFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.LicensePlateDetailsInventory,
      tableHeader: t('items-title'),
      columns,
      queryHook: BASE_INV_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useLicensePlateDetailsInventoryDataTable;
