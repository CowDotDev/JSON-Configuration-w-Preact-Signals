import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useEquipmentTypeSettingsTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useEquipmentTypeSettingsDataTable.generated';
import { EquipmentMobility, EquipmentTypeQueryShapeSortFields } from '@/graphql/types.generated';
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
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import enumValues from '@lib/enum-values';
import { ModalTypes } from '@models/modal';

const LAZY_QUERY_HOOK = useEquipmentTypeSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useEquipmentTypeSettingsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.equipment-type-settings' });
  const { t: tC } = useTranslation('components');
  const { openModal } = useModalToggle();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => {
      const columns = [
        createEditRowColumnDef(columnHelper, (equipmentType) => {
          openModal(
            {
              type: ModalTypes.equipmentType,
              equipmentType,
            },
            {
              afterClose: (success) => {
                if (success) triggerDataTableRefetch();
              },
            },
          );
        }),
        columnHelper.accessor('code', {
          header: tC('common.code'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('label', {
          header: tC('common.label'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('description', {
          header: tC('common.description'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('mobility', {
          header: tC('common.mobility'),
          cell: ({ getValue }) => tC(`common.${getValue<EquipmentMobility>()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumValues(EquipmentMobility).map((mobility) => ({
              value: mobility,
              display: tC(`common.${mobility}`),
            })),
            exportFormatter: (value) =>
              tC(`common.${value as EquipmentMobility.Dynamic | EquipmentMobility.Static}`),
          },
        }),
        columnHelper.accessor('heightMax', {
          header: tC('common.heightMax'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('heightUOMCode', {
          header: tC('common.unitOfMeasureAbbrSuffix', { prefix: tC('common.height') }),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('weightMax', {
          header: tC('common.weightMax'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('weightUOMCode', {
          header: tC('common.unitOfMeasureAbbrSuffix', { prefix: tC('common.weight') }),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('volumeMax', {
          header: tC('common.volumeMax'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('volumeUOMCode', {
          header: tC('common.unitOfMeasureAbbrSuffix', { prefix: tC('common.volume') }),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('velocity', {
          header: tC('common.averagOperatingSpeed'),
          cell: ({ getValue }) => getValue(),
          minSize: 220,
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('verticalVelocity', {
          header: tC('common.verticalVelocity'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('velocityUOMCode', {
          header: tC('common.unitOfMeasureAbbrSuffix', { prefix: tC('common.velocity') }),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('cost', {
          header: tC('common.costHour'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('currency', {
          header: tC('common.unitOfMeasureAbbrSuffix', { prefix: tC('common.currency') }),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns;
    },
    [tC, openModal, triggerDataTableRefetch],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: EquipmentTypeQueryShapeSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.EquipmentTypeSettings,
      tableHeader: t('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useEquipmentTypeSettingsDataTable;
