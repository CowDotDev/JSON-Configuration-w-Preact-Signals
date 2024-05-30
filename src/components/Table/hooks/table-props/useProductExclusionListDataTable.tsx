import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewSlottingExclusionSortFields } from '@/graphql/types.generated';
import useCreateProductExclusionListColumns, {
  _TProductExclusionDataType,
  _TProductExclusionFieldNames,
  _TProductExclusionFilterType,
  PRODUCT_EXCLUSIONS_QUERY_HOOK,
} from '@/components/Table/hooks/shared-columns/useCreateProductExclusionListColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';

const useProductExclusionListDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.slotting-product-exclusions' });

  const { selection, clearSelection, rowSelection } =
    useDataTableSelection<_TProductExclusionDataType>(SelectionType.multi, 'id');

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const productExclusionsColumns = useCreateProductExclusionListColumns();
  const columns = useCreateDataTableColumns<_TProductExclusionDataType>(productExclusionsColumns);

  const defaultSorting = useMemo<IDataTableSort<_TProductExclusionFieldNames>[]>(
    () => [
      {
        id: ViewSlottingExclusionSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    selectedProducts: selection,
    clearSelection,
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<
      _TProductExclusionDataType,
      _TProductExclusionFilterType,
      _TProductExclusionFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.ProductExclusionListSettings,
      tableHeader: t('title'),
      columns,
      queryHook: PRODUCT_EXCLUSIONS_QUERY_HOOK,
      defaultSorting,
      refetchTrigger,
      rowSelection,
    }),
  };
};

export default useProductExclusionListDataTable;
