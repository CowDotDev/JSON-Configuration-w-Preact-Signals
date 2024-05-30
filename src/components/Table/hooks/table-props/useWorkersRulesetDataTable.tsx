import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateWorkersColumns from '@/components/Table/hooks/shared-columns/useCreateWorkersColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants } from '@/components/Table/types/data-table';
import { IRuleset, IWorkers } from '@hooks/form/ruleset/useRulesetForm';

const useWorkersRulesetDataTable = (
  workers: IWorkers[],
  review: boolean,
  control: Control<IRuleset>,
) => {
  const { t } = useTranslation('components');

  const createWorkersColumns = useCreateWorkersColumns({
    dataTestId: 'workers-ruleset',
    review,
    control,
  });
  const columns = useCreateDataTableColumns<IWorkers>(createWorkersColumns);

  return {
    dataTableProps: validateDataTableProps<IWorkers>({
      type: 'data',
      variant: DataTableVariants.BasicBordered,
      tableHeader: t('modal.ruleset.create.workers.title'),
      tableId: DataTableIds.RulesetWorkers,
      columns,
      data: workers,
      isDataLoading: false,
      disableQuickFilters: true,
    }),
  };
};

export default useWorkersRulesetDataTable;
