import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import InventoryConflictCell from '@/components/Table/table/cells/InventoryConflictCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { TReconciliationDetailDataType } from '@/pages/reconciliation/conflict';

const useInventoryReconciliationDetailsDataTable = (
  inventoryReconciliation: TReconciliationDetailDataType[],
) => {
  const dataTestId = DataTableIds.SystemComparison;

  const [data, setData] = useState<TReconciliationDetailDataType[]>(inventoryReconciliation);

  const { t: tP } = useTranslation('pages', { keyPrefix: 'settings.reconciliation.conflict' });

  const columns = useCreateDataTableColumns<TReconciliationDetailDataType>(
    (columnHelper) => [
      columnHelper.accessor('field', {
        header: tP('systemComparison.columns.field'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('ffValue', {
        header: tP('systemComparison.columns.ffValue'),
        cell: ({ row, getValue }) =>
          row.original.hasConflict ? (
            <InventoryConflictCell
              ffValue={getValue()}
              erpValue={row.original.sapValue}
              displayValue={getValue()}
              dataTestId={dataTestId}
            />
          ) : (
            getValue()
          ),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('sapValue', {
        header: tP('systemComparison.columns.sapValue'),
        cell: ({ row, getValue }) =>
          row.original.hasConflict ? (
            <InventoryConflictCell
              ffValue={row.original.ffValue}
              erpValue={getValue() || ''}
              displayValue={getValue() || ''}
              dataTestId={dataTestId}
            />
          ) : (
            getValue()
          ),
        meta: {
          columnType: ColumnType.string,
        },
      }),
    ],
    [inventoryReconciliation],
  );

  useEffect(() => {
    setData(inventoryReconciliation);
  }, [inventoryReconciliation]);

  return {
    dataTableProps: validateDataTableProps<TReconciliationDetailDataType>({
      type: 'data',
      tableId: DataTableIds.SystemComparison,
      tableHeader: tP('systemComparison.title'),
      columns,
      isDataLoading: false,
      data,
    }),
  };
};

export default useInventoryReconciliationDetailsDataTable;
