import { Box } from '@mui/material';
import { Row } from '@tanstack/react-table';
import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import { SelectionBox } from '@/components/Table/columnDefs/rowSelection';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { QuantityInput } from '@components/form-util/input/quantity-input';
import {
  ICountBinFormData,
  ICountBinTaskItem,
} from '@components/modal/task/complete-count-bin-modal';

const ReactiveQuantityInput = ({ row }: { row: Row<ICountBinTaskItem> }) => {
  const { control, watch } = useFormContext<ICountBinFormData>();

  const empty = watch(`expectedItems.${row.index}.empty`);

  return (
    <QuantityInput
      control={control}
      name={`expectedItems.${row.index}.quantity`}
      disabled={!!row.original.licensePlateId || empty}
      castToString={true}
      dataTestId="count-bin-complete"
    />
  );
};

const ReactiveEmptyCheckbox = ({ row }: { row: Row<ICountBinTaskItem> }) => {
  const { control, watch, setValue } = useFormContext<ICountBinFormData>();

  const empty = watch(`expectedItems.${row.index}.empty`);
  const quantity = watch(`expectedItems.${row.index}.quantity`);

  useEffect(() => {
    if (quantity === '0' && !empty) {
      setValue(`expectedItems.${row.index}.empty`, true);
    }
  }, [quantity]);

  return (
    <Box position="relative" width="100%">
      <Controller
        control={control}
        name={`expectedItems.${row.index}.empty`}
        render={({ field }) => (
          <SelectionBox
            checked={field.value}
            onChange={(e) => {
              if (e.target.checked) {
                if (!row.original.licensePlateId)
                  setValue(`expectedItems.${row.index}.quantity`, '0');
                setValue(`expectedItems.${row.index}.empty`, true);
              } else {
                setValue(`expectedItems.${row.index}.empty`, false);
              }
            }}
            size="small"
          />
        )}
      />
    </Box>
  );
};

const useCompleteCountBinExpectedItemsDataTable = ({
  binCode,
  data,
  isDataLoading,
}: {
  binCode: string;
  data: ICountBinTaskItem[];
  isDataLoading: boolean;
}) => {
  const { t } = useTranslation('components');

  const columns = useCreateDataTableColumns<ICountBinTaskItem>(
    (columnHelper) => [
      columnHelper.accessor('binCode', {
        header: t('columns.binCode'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('licensePlateCode', {
        header: t('columns.licensePlateCode'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('productCode', {
        header: t('columns.productCode'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('lotCode', {
        header: t('columns.lotCode'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('stockStatus', {
        header: t('columns.stockStatus'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('uomCode', {
        header: t('columns.uom'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.display({
        id: DataTableDisplayColumns.InlineEdit + '-quantity',
        header: t('columns.quantity'),
        cell: ({ row }) => <ReactiveQuantityInput row={row} />,
        meta: {
          columnType: ColumnType.string,
        },
        size: 100,
        enableResizing: false,
      }),
      columnHelper.display({
        id: DataTableDisplayColumns.InlineEdit + '-empty',
        header: t('columns.empty'),
        cell: ({ row }) => <ReactiveEmptyCheckbox row={row} />,
        meta: {
          columnType: ColumnType.string,
        },
        size: 60,
        enableResizing: false,
      }),
    ],
    [],
  );

  return {
    dataTableProps: validateDataTableProps<ICountBinTaskItem>({
      type: 'data',
      tableId: DataTableIds.CompleteCountBinExpectedItems,
      tableHeader: t('modal.countBin.complete.binExpectedItems', {
        binCode,
        interpolation: { escapeValue: true },
      }),
      columns,
      data: data || [],
      isDataLoading,
    }),
  };
};

export default useCompleteCountBinExpectedItemsDataTable;
