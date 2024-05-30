import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  EquipmentSettingsModelFilterFragment,
  EquipmentSettingsTypeFilterFragment,
  useEquipmentSettingsTableFilterValuesQuery,
  useEquipmentSettingsTableLazyQuery,
} from '@/graphql/defs/hooks/table-props/__generated__/useEquipmentSettingsDataTable.generated';
import { EquipmentStatus, ViewEquipmentSortFields } from '@/graphql/types.generated';
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

const LAZY_QUERY_HOOK = useEquipmentSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useEquipmentSettingsDataTable = () => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages', { keyPrefix: 'settings.equipment-settings' });
  const { openModal } = useModalToggle();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const [equipmentModels, setEquipmentModels] = useState<EquipmentSettingsModelFilterFragment[]>(
    [],
  );
  const [equipmentTypes, setEquipmentTypes] = useState<EquipmentSettingsTypeFilterFragment[]>([]);
  useEquipmentSettingsTableFilterValuesQuery({
    onCompleted: ({
      equipmentModels: { nodes: _equipmentModels },
      equipmentTypes: { nodes: _equipmentTypes },
    }) => {
      setEquipmentModels(_equipmentModels);
      setEquipmentTypes(_equipmentTypes);
    },
  });

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => {
      const columns = [
        createEditRowColumnDef(columnHelper, (equipment) => {
          openModal(
            {
              type: ModalTypes.equipmentUpdate,
              equipment,
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
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('label', {
          header: t('common.label'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('description', {
          header: t('common.description'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('typeLabel', {
          header: t('common.type'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: equipmentTypes.map((type) => ({
              value: type.label,
              display: `${type.code}: ${type.label}`,
            })),
          },
        }),
        columnHelper.accessor('modelLabel', {
          header: t('common.model'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: equipmentModels.map((model) => ({
              value: model.label,
              display: `${model.code}: ${model.label}`,
            })),
          },
        }),
        columnHelper.accessor('tagId', {
          header: t('common.tagId'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('status', {
          header: t('common.status'),
          cell: ({ getValue }) => t(`common.${getValue<EquipmentStatus>()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumValues(EquipmentStatus).map((status) => ({
              value: status,
              display: t(`common.${status}`),
            })),
            exportFormatter: (value) => t(`common.${value as 'active' | 'inactive' | 'planned'}`),
          },
        }),
      ];

      return columns;
    },
    [t, openModal, triggerDataTableRefetch, equipmentModels, equipmentTypes],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: ViewEquipmentSortFields.TypeLabel,
        desc: false,
      },
      {
        id: ViewEquipmentSortFields.ModelLabel,
        desc: false,
      },
      {
        id: ViewEquipmentSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.EquipmentSettings,
      tableHeader: tP('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useEquipmentSettingsDataTable;
