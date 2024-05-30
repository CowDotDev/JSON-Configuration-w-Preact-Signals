// import { useMemo } from 'react';
// import { useTranslation } from 'react-i18next';

// import { useContractorValidationLogTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useContractorValidationLogDataTable.generated';
// import {
//   ComplianceStatus,
//   ViewBusinessPartnerComplianceSortFields,
// } from '@/graphql/types.generated';
// import { ColumnType } from '@components/data-table/controls/filter/filter-definitions';
// import useCreateDataTableColumns from '@components/data-table/hooks/useCreateDataTableColumns';
// import { validateDataTableProps } from '@components/data-table/lib/validateDataTableProps';
// import { IDataTableSort } from '@components/data-table/model/data-table';
// import {
//   TExtractLazyHookDataType,
//   TExtractLazyHookFetchFilterType,
//   TExtractLazyHookFieldNames,
// } from '@components/data-table/model/extract-query-hook-types';
// import DataTableIds from '@components/data-table/model/DataTableIds';
// import LinkCell from '@components/data-table/table/cells/LinkCell';
// import { OUTBOUND_DELIVERY } from '@constants/routes';
// import { useDateTime } from '@context/date-time';
// import enumKeys from '@lib/enum-keys';

// const LAZY_QUERY_HOOK = useContractorValidationLogTableLazyQuery;
// type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
// type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
// type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useContractorValidationLogDataTable = () => {
  // const { t } = useTranslation('components');
  // const { t: tP } = useTranslation('pages', { keyPrefix: 'settings.contractor-validation-log' });
  // const { displayDate, displayDateTime } = useDateTime();
  // const columns = useCreateDataTableColumns<_TDataType>(
  //   (columnHelper) => [
  //     columnHelper.accessor('name', {
  //       header: t('common.name'),
  //       cell: ({ getValue }) => getValue(),
  //       meta: {
  //         columnType: ColumnType.string,
  //       },
  //     }),
  //     columnHelper.accessor('badgeNumber', {
  //       header: t('common.badgeNumberSymbol'),
  //       cell: ({ getValue }) => getValue(),
  //       meta: {
  //         columnType: ColumnType.string,
  //       },
  //     }),
  //     columnHelper.accessor('createdAt', {
  //       header: t('common.dateTime'),
  //       cell: ({ getValue }) => displayDateTime({ date: getValue() }),
  //       meta: {
  //         columnType: ColumnType.dateTime,
  //         exportFormatter: (value) => displayDateTime({ date: value }),
  //       },
  //     }),
  //     columnHelper.accessor('credentialsExpireOn', {
  //       header: t('common.credentialExpiry'),
  //       cell: ({ getValue }) => displayDate({ date: getValue() }),
  //       meta: {
  //         columnType: ColumnType.date,
  //         exportFormatter: (value) => displayDate({ date: value }),
  //       },
  //     }),
  //     columnHelper.accessor('vendor', {
  //       header: t('common.partnerName'),
  //       cell: ({ getValue }) => getValue(),
  //       meta: {
  //         columnType: ColumnType.string,
  //       },
  //     }),
  //     columnHelper.accessor('complianceStatus', {
  //       header: t('common.compliance'),
  //       cell: ({ getValue }) => t(`common.${getValue()}`),
  //       meta: {
  //         columnType: ColumnType.enum,
  //         options: enumKeys(ComplianceStatus).map((status) => ({
  //           value: ComplianceStatus[status],
  //           display: t(`common.${ComplianceStatus[status]}`),
  //         })),
  //         exportFormatter: (value) => t(`common.${value}`),
  //       },
  //     }),
  //     columnHelper.accessor('fulfillmentCode', {
  //       header: t('common.fulfillment', { count: 1 }),
  //       cell: ({ row, getValue }) => (
  //         <LinkCell href={`${OUTBOUND_DELIVERY}/${row.original.fulfillmentId}`} text={getValue()} />
  //       ),
  //       meta: {
  //         columnType: ColumnType.string,
  //       },
  //     }),
  //   ],
  //   [t, displayDate, displayDateTime],
  // );
  // const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
  //   () => [
  //     {
  //       id: ViewBusinessPartnerComplianceSortFields.CreatedAt,
  //       desc: true,
  //     },
  //   ],
  //   [],
  // );
  // return {
  //   dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
  //     type: 'query',
  //     tableId: DataTableIds.ContractorValidationLog,
  //     tableHeader: tP('title'),
  //     columns,
  //     queryHook: LAZY_QUERY_HOOK,
  //     defaultSorting,
  //   }),
  // };
};

export default useContractorValidationLogDataTable;
