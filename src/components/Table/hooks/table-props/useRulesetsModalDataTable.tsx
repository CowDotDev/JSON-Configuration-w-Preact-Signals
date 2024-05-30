import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateRulesetColumns, {
  TRulesetsDataType,
} from '@/components/Table/hooks/shared-columns/useCreateRulesetColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';

const useRulesetsModalDataTable = (data: TRulesetsDataType[]) => {
  const createRulesetColumns = useCreateRulesetColumns();
  const columns = useCreateDataTableColumns(createRulesetColumns);

  return {
    dataTableProps: validateDataTableProps<TRulesetsDataType>({
      type: 'data',
      tableId: DataTableIds.RulesetsModal,
      columns,
      data,
      isDataLoading: false,
    }),
  };
};

export default useRulesetsModalDataTable;
