import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  EquipmentModelTypeFilterFragment,
  useEquipmentModelSettingsTableFilterValuesLazyQuery,
  useEquipmentModelSettingsTableLazyQuery,
} from '@/graphql/defs/hooks/table-props/__generated__/useEquipmentModelSettingsDataTable.generated';
import { ViewEquipmentModelSortFields } from '@/graphql/types.generated';
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
import { ModalTypes } from '@models/modal';

const LAZY_QUERY_HOOK = useEquipmentModelSettingsTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useEquipmentModelSettingsDataTable = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.equipment-model-settings' });
  const { t: tC } = useTranslation('components');
  const { openModal } = useModalToggle();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const [equipmentTypes, setEquipmentTypes] = useState<EquipmentModelTypeFilterFragment[]>([]);
  useEquipmentModelSettingsTableFilterValuesLazyQuery({
    onCompleted: ({ equipmentTypes: { nodes: equipmentTypes } }) => {
      setEquipmentTypes(equipmentTypes);
    },
  });

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => {
      const columns = [
        createEditRowColumnDef(columnHelper, (equipmentModel) => {
          openModal(
            {
              type: ModalTypes.equipmentModelUpdate,
              equipmentModel,
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
        columnHelper.accessor('typeLabel', {
          header: tC('common.type'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.enum,
            options: equipmentTypes.map((type) => ({
              value: type.label,
              display: type.label,
            })),
          },
        }),
      ];

      return columns;
    },
    [tC, openModal, triggerDataTableRefetch, equipmentTypes],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: ViewEquipmentModelSortFields.TypeLabel,
        desc: false,
      },
      {
        id: ViewEquipmentModelSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.EquipmentModelSettings,
      tableHeader: t('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useEquipmentModelSettingsDataTable;
