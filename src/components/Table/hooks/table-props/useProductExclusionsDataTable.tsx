import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useCreateProductExclusionsColumns, {
  _TProductExclusionDataType,
} from '@/components/Table/hooks/shared-columns/useCreateProductExclusionListColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';

const useProductExclusionsDataTable = (selectedProducts: _TProductExclusionDataType[]) => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.slotting-product-exclusions' });

  const { selection, rowSelection } = useDataTableSelection<_TProductExclusionDataType>(
    SelectionType.multi,
    'id',
  );

  const [selectionOverride, setSelectionOverride] = useState<_TProductExclusionDataType[]>([]);

  const handleRemoveApproved = (id: string) => {
    const updatedApprovedExclusions = selection.filter((product) => product.id !== id);
    setSelectionOverride(updatedApprovedExclusions);
  };

  const productExclusionsColumns = useCreateProductExclusionsColumns();

  const columns = useCreateDataTableColumns<_TProductExclusionDataType>(productExclusionsColumns);

  return {
    approvedProductExclusions: selection,
    setProductExclusions: setSelectionOverride,
    handleRemoveApproved,
    dataTableProps: validateDataTableProps<_TProductExclusionDataType>({
      type: 'data',
      data: selectedProducts,
      isDataLoading: false,
      tableId: DataTableIds.ProductExclusions,
      tableHeader: t('title'),
      columns,
      rowSelection: {
        ...rowSelection,
        selectionOverride,
      },
    }),
  };
};

export default useProductExclusionsDataTable;
