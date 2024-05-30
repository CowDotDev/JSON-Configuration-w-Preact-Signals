import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useLpDetailsNestedLPsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useLicensePlateDetailsNestedLPsDataTable.generated';
import {
  LedgerSyncStatus,
  LicensePlateDetailQueryModelSortFields,
} from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import {
  ColumnFilter,
  ColumnType,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';
import { LICENSE_PLATE_DETAILS } from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

const NESTED_LPS_HOOK = useLpDetailsNestedLPsTableLazyQuery;
type _TNestedLpsDataType = TExtractLazyHookDataType<typeof NESTED_LPS_HOOK>;
type _TNestedLpsFilterType = TExtractLazyHookFetchFilterType<typeof NESTED_LPS_HOOK>;
type _TNestedLpsFieldNames = TExtractLazyHookFieldNames<typeof NESTED_LPS_HOOK>;

const useLicensePlateDetailsNestedLPsDataTable = (
  licensePlateId: string,
  lpHierarchy: string[] = [],
) => {
  const { t } = useTranslation('pages', { keyPrefix: 'license-plate-details' });
  const { t: tC } = useTranslation('components');
  const { displayDateTime } = useDateTime();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const columns = useCreateDataTableColumns<_TNestedLpsDataType>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('code', {
          header: tC('common.code'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${LICENSE_PLATE_DETAILS}/${row.original.id}`)}
              text={getValue()}
              dataTestId="nested-lps-lp-link"
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('grossWeight', {
          header: tC('common.totalWeight'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('volume', {
          header: tC('common.totalVolume'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('ledgerSyncStatus', {
          header: tC('columns.ledgerSyncStatus'),
          cell: ({ getValue }) => (getValue() ? tC(`enums.ledgerSyncStatus.${getValue()}`) : ''),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(LedgerSyncStatus).map((status) => ({
              value: LedgerSyncStatus[status],
              display: tC(`enums.ledgerSyncStatus.${LedgerSyncStatus[status]}`),
            })),
            exportFormatter: (value) => (value ? tC(`enums.ledgerSyncStatus.${value}`) : ''),
          },
        }),
        columnHelper.accessor('ledgerSyncStatusReason', {
          header: tC('columns.ledgerSyncStatusReason'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
          size: 450,
        }),
        columnHelper.accessor('createdAt', {
          header: tC('common.created'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
          size: 170,
        }),
        columnHelper.accessor('updatedAt', {
          header: tC('common.lastChanged'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
          size: 170,
        }),
      ];

      return columns;
    },
    [tC, displayDateTime],
  );

  const baseFilter = useMemo<ColumnFilter<_TNestedLpsFieldNames>[]>(() => {
    const nestedLPIds = lpHierarchy.filter((id) => id !== licensePlateId); // Filter out current license plate
    // We have to do this in order for the filter to not return every license plate, in the case nestedLPIds array is empty.
    return nestedLPIds.length > 0
      ? [
          {
            or: nestedLPIds.map((id) => ({
              columnId: LicensePlateDetailQueryModelSortFields.Id,
              operator: FilterOperator.eq,
              value: id,
            })),
          },
        ]
      : [
          {
            columnId: LicensePlateDetailQueryModelSortFields.Id,
            operator: FilterOperator.eq,
            value: 'noNestedLPs',
          },
        ];
  }, [licensePlateId, lpHierarchy]);

  const defaultSorting = useMemo<IDataTableSort<_TNestedLpsFieldNames>[]>(
    () => [
      {
        id: LicensePlateDetailQueryModelSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerLpDetailsNestedLpsDataTableRefetch: triggerDataTableRefetch,
    lpDetailsNestedLpsDataTableProps: validateDataTableProps<
      _TNestedLpsDataType,
      _TNestedLpsFilterType,
      _TNestedLpsFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.LicensePlateDetailsNestedLPs,
      tableHeader: t('nested-license-plates-title'),
      columns,
      queryHook: NESTED_LPS_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useLicensePlateDetailsNestedLPsDataTable;
