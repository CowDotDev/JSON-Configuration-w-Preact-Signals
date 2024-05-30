import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { BusinessPartnerSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateBusinessPartnerColumns, {
  BUSINESS_PARTNERS_HOOK,
  TBusinessPartnersDataType,
  TBusinessPartnersFieldNames,
} from '@/components/Table/hooks/shared-columns/useCreateBusinessPartnerColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';

const useBusinessPartnerSettingsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'businessPartners' });

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createBusinessPartnerColumns = useCreateBusinessPartnerColumns({
    dataTestId: 'business-partner-settings',
    triggerDataTableRefetch,
  });
  const columns = useCreateDataTableColumns<TBusinessPartnersDataType>(
    createBusinessPartnerColumns,
  );

  const defaultSorting = useMemo<IDataTableSort<TBusinessPartnersFieldNames>[]>(
    () => [
      {
        id: BusinessPartnerSortFields.Name,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps({
      type: 'query',
      tableId: DataTableIds.BusinessPartnerSettings,
      tableHeader: t('title'),
      columns,
      queryHook: BUSINESS_PARTNERS_HOOK,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useBusinessPartnerSettingsDataTable;
