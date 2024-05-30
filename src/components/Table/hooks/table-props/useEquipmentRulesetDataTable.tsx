import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateEquipmentColumns from '@/components/Table/hooks/shared-columns/useCreateEquipmentColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants } from '@/components/Table/types/data-table';
import { IEquipment, IRuleset } from '@hooks/form/ruleset/useRulesetForm';

const useEquipmentRulesetDataTable = (
  equipment: IEquipment[],
  review: boolean,
  control: Control<IRuleset>,
) => {
  const { t } = useTranslation('components');

  const createEquipmentColumns = useCreateEquipmentColumns({
    dataTestId: 'equipment-ruleset',
    review,
    control,
  });
  const columns = useCreateDataTableColumns<IEquipment>(createEquipmentColumns);

  return {
    dataTableProps: validateDataTableProps<IEquipment>({
      type: 'data',
      variant: DataTableVariants.BasicBordered,
      tableHeader: t('modal.ruleset.create.equipment.title'),
      tableId: DataTableIds.RulesetEquipment,
      columns,
      data: equipment,
      isDataLoading: false,
      disableQuickFilters: true,
    }),
  };
};

export default useEquipmentRulesetDataTable;
