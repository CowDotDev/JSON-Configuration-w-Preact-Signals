import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useTaskTypeBinStatusMappingsTableQuery } from '@/graphql/defs/hooks/table-props/__generated__/useTaskTypeBinStatusMappingsDataTable.generated';
import { BinStatusCode } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import createEditRowColumnDef from '@/components/Table/columnDefs/editRow';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { useWarehouseUtils } from '@context/warehouse-utils';
import { ModalTypes } from '@models/modal';

const useTaskTypeBinStatusMappingsDataTable = () => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages', { keyPrefix: 'settings.bin-settings' });
  const { openModal } = useModalToggle();
  const { selectedWarehouseId } = useWarehouseUtils();

  interface IFormattedMappings {
    taskTypeCode?: string;
    taskTypeId?: string;
    taskTypeLabel?: string;
    binStatusMappings?: {
      __typename?: string;
      binStatusId?: string;
      binStatusLabel?: string;
      binStatusCode?: string;
      editable?: boolean;
      mapped?: boolean;
    }[];
    [BinStatusCode.BinStatusDestinationBlock]?: boolean;
    [BinStatusCode.BinStatusInactive]?: boolean;
    [BinStatusCode.BinStatusSourceBlock]?: boolean;
  }

  const [hasInitializedMappings, setHasInitializedMappings] = useState(false);
  const [formattedMappings, setFormattedMappings] = useState<IFormattedMappings[]>([]);
  const { loading: isLoading, refetch: refetchMappings } = useTaskTypeBinStatusMappingsTableQuery({
    variables: { warehouseId: selectedWarehouseId },
    onCompleted: ({ query: { nodes: _mappings } }) => {
      const _data: IFormattedMappings[] =
        _mappings?.map<IFormattedMappings>((mapping) => {
          return {
            taskTypeCode: mapping.taskTypeCode,
            taskTypeId: mapping.taskTypeId,
            taskTypeLabel: mapping.taskTypeLabel,
            binStatusMappings: mapping.binStatusMappings,
            ...mapping.binStatusMappings.reduce(
              (acc, { binStatusCode, mapped }) => {
                acc[binStatusCode] = mapped;
                return acc;
              },
              {} as Record<string, boolean>,
            ),
          };
        }) || [];

      setFormattedMappings(_data);
      setHasInitializedMappings(true);
    },
  });

  const columns = useCreateDataTableColumns<IFormattedMappings>(
    (columnHelper) => {
      const _columns = [
        createEditRowColumnDef(columnHelper, (mapping) => {
          openModal(
            {
              type: ModalTypes.taskTypeBinStatusMapping,
              title: t('taskTypeBinStatusMapping.modal.title'),
              mapping: {
                binStatuses: mapping?.binStatusMappings,
                taskTypeCode: mapping?.taskTypeCode,
                taskTypeId: mapping?.taskTypeId,
                taskTypeLabel: mapping?.taskTypeLabel,
              },
            },
            {
              afterClose: (success) => {
                if (success) refetchMappings();
              },
            },
          );
        }),
        columnHelper.accessor('taskTypeCode', {
          header: t('common.code'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('taskTypeLabel', {
          header: t('common.task'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor(BinStatusCode.BinStatusInactive, {
          header: tP('columns.inactive'),
          cell: ({ getValue }) => (getValue() ? t('common.enabled') : t('common.disabled')),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => (value ? t('common.enabled') : t('common.disabled')),
          },
          enableColumnFilter: false,
          enableSorting: false,
          enableMultiSort: false,
        }),
        columnHelper.accessor(BinStatusCode.BinStatusDestinationBlock, {
          header: tP('columns.destinationBinBlock'),
          cell: ({ getValue }) => (getValue() ? t('common.enabled') : t('common.disabled')),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => (value ? t('common.enabled') : t('common.disabled')),
          },
          enableColumnFilter: false,
          enableSorting: false,
          enableMultiSort: false,
        }),
        columnHelper.accessor(BinStatusCode.BinStatusSourceBlock, {
          header: tP('columns.sourceBinBlock'),
          cell: ({ getValue }) => (getValue() ? t('common.enabled') : t('common.disabled')),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => (value ? t('common.enabled') : t('common.disabled')),
          },
          enableColumnFilter: false,
          enableSorting: false,
          enableMultiSort: false,
        }),
      ];

      return _columns;
    },
    [t, tP, openModal, refetchMappings],
  );

  return {
    isLoadingData: hasInitializedMappings && isLoading,
    dataTableProps: validateDataTableProps({
      type: 'data',
      tableId: DataTableIds.TaskTypeBinStatusMappings,
      tableHeader: tP('title'),
      columns,
      data: formattedMappings,
      isDataLoading: !hasInitializedMappings,
    }),
  };
};

export default useTaskTypeBinStatusMappingsDataTable;
