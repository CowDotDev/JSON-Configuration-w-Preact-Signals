import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useDoorSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useDoorSettingsDataTable.generated';
import { DoorDirection, ViewDoorSortFields } from '@/graphql/types.generated';
import DeprecatedWarehouseFeatureFlagToggles from '@/signals/configuration/deprecatedWarehouseFeatureFlagToggles/DeprecatedWarehouseFeatureFlagToggles';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import createEditRowColumnDef from '@/components/Table/columnDefs/editRow';
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
import { BIN_DETAILS } from '@constants/routes';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { useWarehouseUtils } from '@context/warehouse-utils';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';
import { ModalTypes } from '@models/modal';

const LAZY_QUERY_HOOK = useDoorSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useDoorSettingsDataTable = () => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages', { keyPrefix: 'settings.door-settings' });
  const { openModal } = useModalToggle();
  const warehouseFeatureFlags = DeprecatedWarehouseFeatureFlagToggles;
  const { selectedWarehouseId } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => {
      const columns = [
        warehouseFeatureFlags.value.doors.allowEdit
          ? createEditRowColumnDef(columnHelper, (door) => {
              openModal(
                {
                  type: ModalTypes.doorUpdate,
                  door,
                },
                {
                  afterClose: (success) => {
                    if (success) triggerDataTableRefetch();
                  },
                },
              );
            })
          : null,
        columnHelper.accessor('code', {
          header: t('common.code'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('areaCode', {
          header: t('common.area'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('binCode', {
          header: t('common.bin'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BIN_DETAILS}/${row.original.binId}`)}
              text={getValue()}
              dataTestId="door-settings-bin-link"
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('direction', {
          header: t('doors.columns.direction'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(DoorDirection).map((direction) => ({
              value: DoorDirection[direction],
              display: t(`common.${DoorDirection[direction]}`),
            })),
            exportFormatter: (value) => t(`common.${value}`),
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
      ];

      return columns.filter((c) => !!c);
    },
    [t, openModal, triggerDataTableRefetch],
  );

  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: ViewDoorSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: ViewDoorSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.DoorSettings,
      tableHeader: tP('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useDoorSettingsDataTable;
