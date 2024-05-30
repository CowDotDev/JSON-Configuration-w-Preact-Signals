import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useTaskTypeStockStatusMappingsTableQuery } from '@/graphql/defs/hooks/table-props/__generated__/useTaskTypesStockStatusMappingsDataTable.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import createEditRowColumnDef from '@/components/Table/columnDefs/editRow';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DefaultDataType } from '@/components/Table/types/data-table';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { useWarehouseUtils } from '@context/warehouse-utils';
import { ModalTypes } from '@models/modal';

const useTaskTypesStockStatusMappingsDataTable = () => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages', { keyPrefix: 'taskTypeStockStatusMappings' });
  const { openModal } = useModalToggle();
  const { selectedWarehouseId } = useWarehouseUtils();

  const [hasInitializedMappings, setHasInitializedMappings] = useState(false);
  const [stockStatuses, setStockStatuses] = useState<string[]>([]);
  const [formattedMappings, setFormattedMappings] = useState<any[]>([]);

  const { loading: isLoading, refetch: refetchMappings } = useTaskTypeStockStatusMappingsTableQuery(
    {
      variables: { warehouseId: selectedWarehouseId },
      onCompleted: ({ view: { nodes: _mappings } }) => {
        const _data =
          _mappings?.map((mapping) => {
            return {
              ...mapping,
              ...mapping.stockStatusMappings.reduce((acc, { stockStatusLabel, mapped }) => {
                acc[stockStatusLabel] = mapped;
                return acc;
              }, {}),
            };
          }) || [];

        setStockStatuses(
          _mappings[0].stockStatusMappings.map(({ stockStatusLabel }) => stockStatusLabel),
        );
        setFormattedMappings(_data);
        setHasInitializedMappings(true);
      },
    },
  );

  const columns = useCreateDataTableColumns<DefaultDataType>(
    (columnHelper) => {
      const _columns = [
        createEditRowColumnDef(columnHelper, (mapping) => {
          openModal(
            {
              type: ModalTypes.taskTypeStockStatusMapping,
              title: t('taskTypeStockStatusMapping.editTaskTypeConfigurationByStockStatus'),
              mapping: {
                stockStatuses: mapping?.stockStatuses,
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
        ...stockStatuses.reduce((acc, stockStatusLabel) => {
          acc.push(
            columnHelper.accessor(stockStatusLabel, {
              header: stockStatusLabel,
              cell: ({ getValue }) => (getValue() ? t('common.enabled') : t('common.disabled')),
              meta: {
                columnType: ColumnType.string,
                exportFormatter: (value) => (value ? t('common.enabled') : t('common.disabled')),
              },
              enableColumnFilter: false,
              enableSorting: false,
              enableMultiSort: false,
            }),
          );
          return acc;
        }, []),
      ];

      return _columns;
    },
    [t, openModal, refetchMappings, stockStatuses],
  );

  return {
    isLoadingAfterFirst: hasInitializedMappings && isLoading,
    dataTableProps: validateDataTableProps({
      type: 'data',
      tableId: DataTableIds.TaskTypesStockStatusMappings,
      tableHeader: tP('title'),
      columns,
      data: formattedMappings,
      isDataLoading: !hasInitializedMappings || (hasInitializedMappings && isLoading),
    }),
  };
};

export default useTaskTypesStockStatusMappingsDataTable;
