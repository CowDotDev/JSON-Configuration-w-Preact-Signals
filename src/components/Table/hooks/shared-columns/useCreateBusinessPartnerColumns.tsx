import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useBusinessPartnersTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateBusinessPartnerColumns.generated';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import createEditRowColumnDef from '@/components/Table/columnDefs/editRow';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { BUSINESS_PARTNER_DETAILS } from '@constants/routes';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import usePermsAndFlagsCheck from '@hooks/usePermsAndFlagsCheck';
import { warehouseRoute } from '@lib/routes-utils';
import { ModalTypes, TRefetchDataTable } from '@models/modal';

export const BUSINESS_PARTNERS_HOOK = useBusinessPartnersTableLazyQuery;
export type TBusinessPartnersDataType = TExtractLazyHookDataType<typeof BUSINESS_PARTNERS_HOOK>;
export type TBusinessPartnersFilterType = TExtractLazyHookFetchFilterType<
  typeof BUSINESS_PARTNERS_HOOK
>;
export type TBusinessPartnersFieldNames = TExtractLazyHookFieldNames<typeof BUSINESS_PARTNERS_HOOK>;

const useCreateBusinessPartnerColumns = ({
  dataTestId,
  removeColumns = [],
  triggerDataTableRefetch,
}: {
  dataTestId: string;
  removeColumns?: (keyof TBusinessPartnersDataType | DataTableDisplayColumns.Edit)[];
  triggerDataTableRefetch?: TRefetchDataTable;
}) => {
  const { t: tC } = useTranslation('components');
  const { openModal } = useModalToggle();
  const checkPermsAndFlags = usePermsAndFlagsCheck();

  const [updateAllowed] = checkPermsAndFlags({
    requiredPermissions: ['business-partner.update'],
    requiredWhFlags: [{ flag: 'businessPartners.allowUpdate', value: true }],
  });

  const createBusinessPartnerColumns = useCallback<TColumnFactory<TBusinessPartnersDataType>>(
    (columnHelper) => {
      const columns = [
        updateAllowed &&
          createEditRowColumnDef(columnHelper, (businessPartner) => {
            openModal(
              {
                type: ModalTypes.businessPartnerUpdate,
                businessPartner,
              },
              {
                afterClose: (success) => {
                  if (success && !!triggerDataTableRefetch) triggerDataTableRefetch();
                },
              },
            );
          }),
        columnHelper.accessor('name', {
          header: tC('common.name'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BUSINESS_PARTNER_DETAILS}/${row.original.id}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-business-partner-name-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('code', {
          header: tC('common.code'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BUSINESS_PARTNER_DETAILS}/${row.original.id}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-business-partner-code-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('cityName', {
          header: tC('common.city'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('region', {
          header: tC('common.region'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('postalCode', {
          header: tC('common.zipCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('country', {
          header: tC('common.country'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TBusinessPartnersDataType>(removeColumns));
    },
    [tC, triggerDataTableRefetch, updateAllowed, ...removeColumns],
  );

  return createBusinessPartnerColumns;
};

export default useCreateBusinessPartnerColumns;
