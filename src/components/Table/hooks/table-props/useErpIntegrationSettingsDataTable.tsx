import { useTranslation } from 'react-i18next';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateErpIntegrationColumns, {
  TErpIntegrationDataType,
} from '@/components/Table/hooks/shared-columns/useCreateErpIntegrationColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';

const useErpIntegrationSettingsDataTable = (sapMappings: TErpIntegrationDataType[]) => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.erp-integration' });

  const createErpIntegrationColumns = useCreateErpIntegrationColumns({});
  const columns = useCreateDataTableColumns<TErpIntegrationDataType>(createErpIntegrationColumns);

  return {
    dataTableProps: validateDataTableProps<TErpIntegrationDataType>({
      type: 'data',
      tableHeader: t('erpIntegration'),
      tableId: DataTableIds.ErpIntegrationSettings,
      columns,
      data: sapMappings,
      isDataLoading: false,
    }),
  };
};

export default useErpIntegrationSettingsDataTable;
