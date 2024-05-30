import { DateTime } from 'luxon';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useLicensePlateInventoryTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateLicensePlateLevelInventoryColumns.generated';
import {
  LedgerSyncStatus,
  LicensePlatePartial,
  LicensePlateStatusState,
} from '@/graphql/types.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableEnumList from '@/components/Table/hooks/useDataTableEnumLists';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LicensePlateLinkCell from '@/components/Table/table/cells/LicensePlateLinkCell';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { BIN_DETAILS, INVENTORY_RECONCILIATION_CONFLICT } from '@constants/routes';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import useDateTime from '@hooks/useDateTime';
import { displayDuration } from '@lib/date';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

export const LICENSE_PLATE_INV_HOOK = useLicensePlateInventoryTableLazyQuery;
export type TLicensePlateInvDataType = TExtractLazyHookDataType<typeof LICENSE_PLATE_INV_HOOK>;
export type TLicensePlateInvFilterType = TExtractLazyHookFetchFilterType<
  typeof LICENSE_PLATE_INV_HOOK
>;
export type TLicensePlateInvFieldNames = TExtractLazyHookFieldNames<typeof LICENSE_PLATE_INV_HOOK>;

const useCreateLicensePlateLevelInventoryColumns = ({
  dataTestId,
  removeColumns = [],
}: {
  dataTestId: string;
  removeColumns?: (keyof TLicensePlateInvDataType)[];
}) => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages', { keyPrefix: 'inventory' });
  const { displayDateTime, displayDate } = useDateTime();
  const { openModal } = useModalToggle();

  const { unitOfMeasureEnumList } = useDataTableEnumList({
    fetchUoMList: true,
  });

  const createLicensePlateInventoryColumns = useCallback<TColumnFactory<TLicensePlateInvDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('code', {
          header: tP('columns.licensePlateCode'),
          cell: ({ row, getValue }) => (
            <LicensePlateLinkCell
              lpId={row.original.id}
              lpStatus={row.original.licensePlateStatus}
              value={getValue()}
              dataTestId={dataTestId}
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
          size: 200,
        }),
        columnHelper.accessor('description', {
          header: t('common.licensePlateDescription'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
            exportOnly: true,
          },
        }),
        columnHelper.accessor('licensePlateStatus', {
          header: tP('columns.licensePlateStatus'),
          cell: ({ getValue }) =>
            getValue() === LicensePlateStatusState.Active
              ? t('common.active')
              : t('common.blocked'),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(LicensePlateStatusState).map((status) => ({
              value: LicensePlateStatusState[status],
              display:
                LicensePlateStatusState[status] === LicensePlateStatusState.Active
                  ? t('common.active')
                  : t('common.blocked'),
            })),
            exportFormatter: (value) =>
              value === LicensePlateStatusState.Active ? t('common.active') : t('common.blocked'),
          },
        }),
        columnHelper.accessor('licensePlateContentsUoMCode', {
          header: t('common.licensePlateType'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.enum,
            options: unitOfMeasureEnumList,
          },
        }),
        columnHelper.accessor('partial', {
          header: t('common.partial'),
          cell: ({ getValue }) => (getValue() ? t(`enums.licensePlatePartial.${getValue()}`) : ''),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(LicensePlatePartial).map((partial) => ({
              value: LicensePlatePartial[partial],
              display: t(`enums.licensePlatePartial.${LicensePlatePartial[partial]}`),
            })),
          },
        }),
        columnHelper.accessor('storageLocation', {
          header: t('columns.availabilityCategory'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('openTaskCount', {
          header: t('columns.openTaskCount'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('binCode', {
          header: t('common.codeSuffix', { prefix: t('common.bin') }),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BIN_DETAILS}/${row.original.binId}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-bin-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('grossWeight', {
          header: t('common.grossWeight'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('volume', {
          header: t('common.grossVolume'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('freshnessClock', {
          id: 'timeOutsideFreezer',
          header: tP('columns.timeOutsideFreezer'),
          cell: ({ getValue }) => {
            return displayDuration(getValue(), DateTime.now().toISO());
          },
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => displayDuration(value, DateTime.now().toISO()),
            sortingField: 'freshnessClock',
            reverseSorting: true,
          },
          enableColumnFilter: false,
        }),
        columnHelper.accessor('freshnessClock', {
          header: tP('columns.freezerExitTime'),
          cell: ({ getValue }) => {
            return displayDateTime({ date: getValue() });
          },
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('lastCount', {
          header: tP('columns.lastCount'),
          cell: ({ getValue }) => {
            return displayDate({ date: getValue() || '' });
          },
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value || '' }),
          },
        }),
        columnHelper.accessor('ledgerSyncStatus', {
          header: t('columns.ledgerSyncStatus'),
          cell: ({ row, getValue }) =>
            getValue() ? (
              getValue() === 'failed' || getValue() === 'unknown' ? (
                <LinkCell
                  href={warehouseRoute(`${INVENTORY_RECONCILIATION_CONFLICT}/${row.original.id}`)}
                  text={t(`enums.ledgerSyncStatus.${getValue()}`)}
                  dataTestId={`${dataTestId}-ledger-sync.status-link`}
                />
              ) : (
                t(`enums.ledgerSyncStatus.${getValue()}`)
              )
            ) : (
              ''
            ),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(LedgerSyncStatus).map((status) => ({
              value: LedgerSyncStatus[status],
              display: t(`enums.ledgerSyncStatus.${LedgerSyncStatus[status]}`),
            })),
            exportFormatter: (value) => (value ? t(`enums.ledgerSyncStatus.${value}`) : ''),
          },
          minSize: 160,
        }),
        columnHelper.accessor('ledgerSyncStatusReason', {
          header: t('columns.ledgerSyncStatusReason'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
          size: 650,
        }),
        columnHelper.accessor('createdAt', {
          header: t('common.created'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
          size: 170,
        }),
        columnHelper.accessor('updatedAt', {
          header: t('common.lastChanged'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
          size: 170,
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TLicensePlateInvDataType>(removeColumns));
    },
    [t, displayDateTime, openModal, ...removeColumns],
  );

  return createLicensePlateInventoryColumns;
};

export default useCreateLicensePlateLevelInventoryColumns;
