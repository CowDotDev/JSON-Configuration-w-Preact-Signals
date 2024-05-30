import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { LicensePlateDetailQueryModelSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateLicensePlateLevelInventoryColumns, {
  LICENSE_PLATE_INV_HOOK,
  TLicensePlateInvDataType,
  TLicensePlateInvFieldNames,
  TLicensePlateInvFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateLicensePlateLevelInventoryColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import { useInventoryLevelAdditionalOptions } from '@components/inventory/inventory-level-additional-options';
import { useWarehouseUtils } from '@context/warehouse-utils';
import { InventoryLevel } from '@models/inventory';

const useInventoryLicensePlateLevelDataTable = (
  setInventoryLevel: (level: InventoryLevel) => void,
) => {
  const { t } = useTranslation('components', { keyPrefix: 'inventory' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const inventoryLevelViews = useInventoryLevelAdditionalOptions(
    InventoryLevel.LP,
    setInventoryLevel,
  );

  const { selection, clearSelection, rowSelection } =
    useDataTableSelection<TLicensePlateInvDataType>(SelectionType.multi, 'id');
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const createLicensePlateInventoryColumns = useCreateLicensePlateLevelInventoryColumns({
    dataTestId: 'license-plate-level-inventory',
  });

  const columns = useCreateDataTableColumns<TLicensePlateInvDataType>(
    createLicensePlateInventoryColumns,
  );

  const baseFilter = useMemo<ColumnFilter<TLicensePlateInvFieldNames>[]>(
    () => [
      {
        columnId: LicensePlateDetailQueryModelSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<TLicensePlateInvFieldNames>[]>(
    () => [
      {
        id: LicensePlateDetailQueryModelSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    selectedLicensePlates: selection,
    triggerLicensePlateInventoryDataTableRefetch: triggerDataTableRefetch,
    licensePlateInventoryDataTableProps: validateDataTableProps<
      TLicensePlateInvDataType,
      TLicensePlateInvFilterType,
      TLicensePlateInvFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InventoryLicensePlateLevel,
      tableHeader: t(`${InventoryLevel.LP}Level`),
      layoutDropdownAddtOptions: inventoryLevelViews,
      layoutDropdownAddtOptionLabel: t('inventoryLevels'),
      columns,
      queryHook: LICENSE_PLATE_INV_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection,
      refetchTrigger,
    }),
  };
};

export default useInventoryLicensePlateLevelDataTable;
