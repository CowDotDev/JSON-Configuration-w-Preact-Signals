import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { InventoryReconciliationQueryModelSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateInventoryReconciliationColumns, {
  RECONCILIATION_LAZY_HOOK,
  TReconciliationDataType,
  TReconciliationFieldNames,
  TReconciliationFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateInventoryReconciliationColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  ColumnFilter,
  FilterOperator,
  LinkedColumnFilter,
} from '@components/filter-builder/filter-definitions';
import { useWarehouseUtils } from '@context/warehouse-utils';

const useInventoryReconciliationDataTable = (
  filterFieldName?: InventoryReconciliationQueryModelSortFields,
) => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages', { keyPrefix: 'settings.reconciliation' });
  const { selectedWarehouseId } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createInventoryReconciliationColumns = useCreateInventoryReconciliationColumns({
    dataTestId: 'inventory-reconciliation-settings',
  });
  const columns = useCreateDataTableColumns(createInventoryReconciliationColumns);

  const defaultSorting = useMemo<IDataTableSort<TReconciliationFieldNames>[]>(
    () => [
      {
        id: InventoryReconciliationQueryModelSortFields.LicensePlateCode,
        desc: false,
      },
    ],
    [],
  );

  const requiredFilter = useMemo<ColumnFilter<TReconciliationFieldNames>[]>(
    () => [
      {
        columnId: InventoryReconciliationQueryModelSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const linkedFilter = useMemo<LinkedColumnFilter<TReconciliationFieldNames>[]>(() => {
    return filterFieldName
      ? [
          {
            linked: true,
            columnId: filterFieldName,
            operator: FilterOperator.is,
            value: true,
            linkedTooltip: t('dataTable.linkedFilterTooltips.pageDateRange'),
          },
        ]
      : [];
  }, [filterFieldName]);

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<
      TReconciliationDataType,
      TReconciliationFilterType,
      TReconciliationFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InventoryConflicts,
      tableHeader: tP('inventoryConflicts'),
      queryHook: RECONCILIATION_LAZY_HOOK,
      columns,
      linkedFilter,
      requiredFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useInventoryReconciliationDataTable;
