import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { BusinessPartnerSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateBusinessPartnerColumns, {
  BUSINESS_PARTNERS_HOOK,
  TBusinessPartnersDataType,
  TBusinessPartnersFieldNames,
  TBusinessPartnersFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateBusinessPartnerColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { FilterOperator, LinkedColumnFilter } from '@components/filter-builder/filter-definitions';

const useBarcodeEnrollmentPartnersListDataTable = (search: string) => {
  const { t } = useTranslation('pages', { keyPrefix: 'barcodeEnrollment' });
  const { t: tC } = useTranslation('components');

  const { selection, rowSelection } = useDataTableSelection<TBusinessPartnersDataType>(
    SelectionType.multi,
    'id',
  );

  const createBusinessPartnerColumns = useCreateBusinessPartnerColumns({
    dataTestId: 'barcode-enrollment-partners-list',
    removeColumns: [DataTableDisplayColumns.Edit],
  });
  const columns = useCreateDataTableColumns<TBusinessPartnersDataType>(
    createBusinessPartnerColumns,
  );

  const linkedFilter = useMemo<LinkedColumnFilter<TBusinessPartnersFieldNames>[]>(() => {
    if (search) {
      return [
        {
          linked: true,
          or: [
            {
              columnId: BusinessPartnerSortFields.Name,
              operator: FilterOperator.iLike,
              value: `%${search}%`,
            },
            {
              columnId: BusinessPartnerSortFields.Code,
              operator: FilterOperator.iLike,
              value: `%${search}%`,
            },
          ],
          linkedTooltip: tC('dataTable.linkedFilterTooltips.pageSearch'),
        },
      ];
    } else {
      return [];
    }
  }, [search]);

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
    selectedPartners: selection,
    partnersListDataTableProps: validateDataTableProps<
      TBusinessPartnersDataType,
      TBusinessPartnersFilterType,
      TBusinessPartnersFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.BarcodeEnrollmentPartnersList,
      tableHeader: t('vendorTableTitle'),
      columns,
      queryHook: BUSINESS_PARTNERS_HOOK,
      linkedFilter,
      defaultSorting,
      rowSelection,
    }),
  };
};

export default useBarcodeEnrollmentPartnersListDataTable;
