import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useBinsTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateBinColumns.generated';
import { BinActiveState, BinBlockState, ViewBinSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import createEditRowColumnDef from '@/components/Table/columnDefs/editRow';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
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
import { BIN_DETAILS, AREAS } from '@constants/routes';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { useWarehouseUtils } from '@context/warehouse-utils';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';
import { ModalTypes } from '@models/modal';

const LAZY_QUERY_HOOK = useBinsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useBinSettingsDataTable = () => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages', { keyPrefix: 'settings.bin-settings' });
  const { openModal } = useModalToggle();
  const { displayDateTime } = useDateTime();
  const { selectedWarehouseId } = useWarehouseUtils();

  const { selection, clearSelection, rowSelection } = useDataTableSelection<_TDataType>(
    SelectionType.multi,
    'id',
  );
  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch({
    triggerCallback: clearSelection,
  });

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      createEditRowColumnDef(columnHelper, (bin) => {
        openModal(
          {
            type: ModalTypes.binUpdate,
            bin,
          },
          {
            afterClose: (success) => {
              if (success) triggerDataTableRefetch();
            },
          },
        );
      }),
      columnHelper.accessor('code', {
        header: t('common.code'),
        cell: ({ row, getValue }) => (
          <LinkCell
            href={warehouseRoute(`${BIN_DETAILS}/${row.original.id}`)}
            text={getValue()}
            dataTestId="bin-settings-bin-link"
          />
        ),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('inactive', {
        header: t('common.status'),
        cell: ({ getValue }) => t(`common.${getValue()}`),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(BinActiveState).map((state) => ({
            value: BinActiveState[state],
            display: t(`common.${BinActiveState[state]}`),
          })),
          exportFormatter: (value) => t(`common.${value}`),
        },
      }),
      columnHelper.accessor('sourceBinBlock', {
        header: t('common.removal'),
        cell: ({ getValue }) => t(`common.${getValue()}`),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(BinBlockState).map((state) => ({
            value: BinBlockState[state],
            display: t(`common.${BinBlockState[state]}`),
          })),
          exportFormatter: (value) => t(`common.${value}`),
        },
      }),
      columnHelper.accessor('destinationBinBlock', {
        header: t('common.placement'),
        cell: ({ getValue }) => t(`common.${getValue()}`),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(BinBlockState).map((state) => ({
            value: BinBlockState[state],
            display: t(`common.${BinBlockState[state]}`),
          })),
          exportFormatter: (value) => t(`common.${value}`),
        },
      }),
      columnHelper.accessor('areaCode', {
        header: t('bins.columns.areaCode'),
        cell: ({ row, getValue }) => (
          <LinkCell
            href={warehouseRoute(`${AREAS}/${row.original.areaId}`)}
            text={getValue()}
            dataTestId="bin-settings-area-link"
          />
        ),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('level', {
        header: t('common.level'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('verificationCode', {
        header: t('bins.columns.verification'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('x', {
        header: t('common.x'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('y', {
        header: t('common.y'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('lastMovement', {
        header: t('common.lastMovement'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
      columnHelper.accessor('lastCount', {
        header: t('common.lastCounted'),
        cell: ({ getValue }) => displayDateTime({ date: getValue() }),
        meta: {
          columnType: ColumnType.dateTime,
          exportFormatter: (value) => displayDateTime({ date: value }),
        },
      }),
      columnHelper.accessor('hasOpenTasks', {
        header: t('common.hasOpenTasks'),
        cell: ({ getValue }) => (getValue() ? t('common.yes') : t('common.no')),
        meta: {
          columnType: ColumnType.boolean,
          exportFormatter: (value) => (value ? t('common.yes') : t('common.no')),
        },
      }),
      columnHelper.accessor('containsProducts', {
        header: t('bins.columns.containsProducts'),
        cell: ({ getValue }) => (getValue() ? t('common.yes') : t('common.no')),
        meta: {
          columnType: ColumnType.boolean,
          exportFormatter: (value) => (value ? t('common.yes') : t('common.no')),
        },
      }),
    ],
    [t, openModal, displayDateTime, triggerDataTableRefetch],
  );
  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: ViewBinSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );
  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: ViewBinSortFields.Code,
        desc: false,
      },
    ],
    [],
  );
  return {
    triggerDataTableRefetch,
    selectedBins: selection,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.BinSettings,
      tableHeader: tP('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      defaultSorting,
      rowSelection,
      refetchTrigger,
    }),
  };
};

export default useBinSettingsDataTable;
