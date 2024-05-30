import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { CountArtifactQueryModelSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateInventoryCountingAdjustmentsColumns, {
  COUNT_INV_ADJUSTMENTS_HOOK,
  TCountInvAdjustmentDataType,
  TCountInvAdjustmentFieldNames,
  TCountInvAdjustmentFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateInventoryCountingAdjustmentsColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';

const useInventoryCountingAdjustmentsDataTable = () => {
  const { t } = useTranslation('pages');

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createCountInventoryColumns = useCreateInventoryCountingAdjustmentsColumns({
    dataTestId: 'inventory-counting-adjustments',
  });
  const columns = useCreateDataTableColumns<TCountInvAdjustmentDataType>(
    createCountInventoryColumns,
  );

  const defaultSorting = useMemo<IDataTableSort<TCountInvAdjustmentFieldNames>[]>(
    () => [
      {
        id: CountArtifactQueryModelSortFields.CountTaskCompletedAt,
        desc: true,
      },
      {
        id: CountArtifactQueryModelSortFields.CountTaskCode,
        desc: true,
      },
      {
        id: CountArtifactQueryModelSortFields.BinCode,
        desc: false,
      },
      {
        id: CountArtifactQueryModelSortFields.LicensePlateCode,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<
      TCountInvAdjustmentDataType,
      TCountInvAdjustmentFilterType,
      TCountInvAdjustmentFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.InventoryCountingAdjustments,
      tableHeader: t(`inventory.counting.adjustments`),
      columns,
      queryHook: COUNT_INV_ADJUSTMENTS_HOOK,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useInventoryCountingAdjustmentsDataTable;
