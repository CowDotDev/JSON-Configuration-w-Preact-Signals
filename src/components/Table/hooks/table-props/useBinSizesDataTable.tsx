import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  useBinSizeTableLazyQuery,
  useDeleteBinSizeMutation,
} from '@/graphql/defs/hooks/table-props/__generated__/useBinSizesDataTable.generated';
import { ViewBinSizeSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import createDeleteRowColumnDef from '@/components/Table/columnDefs/deleteRow';
import createEditRowColumnDef from '@/components/Table/columnDefs/editRow';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableEnumList from '@/components/Table/hooks/useDataTableEnumLists';
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
import { BIN_SIZE_DETAILS } from '@constants/routes';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { useSnackbar } from '@context/snackbar';
import { useWarehouseUtils } from '@context/warehouse-utils';
import { warehouseRoute } from '@lib/routes-utils';
import { ModalTypes } from '@models/modal';

const LAZY_QUERY_HOOK = useBinSizeTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useBinSizesDataTable = () => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages', { keyPrefix: 'settings.bin-sizes' });
  const { selectedWarehouseId } = useWarehouseUtils();
  const { openModal } = useModalToggle();
  const { showMessage } = useSnackbar();

  const [deleteBinSize] = useDeleteBinSizeMutation();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const { unitOfMeasureEnumList } = useDataTableEnumList({
    fetchUoMList: true,
  });

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => [
      createEditRowColumnDef(columnHelper, (binSize) => {
        openModal(
          {
            type: ModalTypes.binSizeUpdate,
            binSize,
          },
          {
            afterClose: (success) => {
              if (success) triggerDataTableRefetch();
            },
          },
        );
      }),
      createDeleteRowColumnDef(columnHelper, (binSize) => {
        openModal(
          {
            type: ModalTypes.confirmation,
            title: t('modal.binSizes.delete.title', {
              binSizeLabel: binSize.label,
              interpolation: { escapeValue: false },
            }),
            message: t('modal.binSizes.delete.text', {
              binSizeLabel: binSize.label,
              interpolation: { escapeValue: false },
            }),
            onCancel: (closeModal) => closeModal(),
            onConfirm: (closeModal) => {
              deleteBinSize({
                variables: {
                  id: binSize.id,
                },
                onCompleted: ({ deleteOneBinSize: { label } }) => {
                  showMessage({
                    type: 'success',
                    message: t('modal.binSizes.delete.success', {
                      binSizeLabel: label,
                    }),
                  });
                  closeModal({ bypassLoading: true, success: true });
                },
                onError: (error) => {
                  showMessage({
                    type: 'error',
                    message: t('modal.binSizes.delete.error', {
                      errorMessage: error.message,
                    }),
                  });
                  closeModal({ bypassLoading: true, success: false });
                },
              });
            },
            cancelButtonText: t('modal.binSizes.delete.cancelButtonText'),
            confirmButtonText: t('modal.binSizes.delete.deleteButtonText'),
            confirmButtonColor: 'error',
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
            href={warehouseRoute(`${BIN_SIZE_DETAILS}/${row.original.id}`)}
            text={getValue()}
            dataTestId="bin-sizes-storage-type-link"
          />
        ),
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
      columnHelper.accessor('weightCapacityUomCode', {
        header: t('common.weightUOM'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.enum,
          options: unitOfMeasureEnumList,
        },
      }),
      columnHelper.accessor('weightCapacity', {
        header: t('common.weightCapacity'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('distanceUomCode', {
        header: t('common.dimensionUOM'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.enum,
          options: unitOfMeasureEnumList,
        },
      }),
      columnHelper.accessor('depth', {
        header: t('common.depth'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('width', {
        header: t('common.width'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('height', {
        header: t('common.height'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('volumeUomCode', {
        id: 'volume',
        header: t('common.volumeUom'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.enum,
          options: unitOfMeasureEnumList,
        },
      }),
      columnHelper.accessor('productLengthLimit', {
        header: t('common.productLengthLimit'),
        minSize: 170,
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('productWidthLimit', {
        header: t('common.productWidthLimit'),
        minSize: 170,
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('productHeightLimit', {
        header: t('common.productHeightLimit'),
        minSize: 170,
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.number,
        },
      }),
      columnHelper.accessor('productLimitUomCode', {
        header: t('common.maximumProductUoM'),
        minSize: 200,
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.enum,
          options: unitOfMeasureEnumList,
        },
      }),
      columnHelper.accessor('createdByUserFirstName', {
        header: t('common.createdBy'),
        cell: ({ getValue, row }) =>
          `${getValue() || ''} ${row.original.createdByUserLastName || ''}`,
        minSize: 150,
        meta: {
          columnType: ColumnType.string,
          exportFormatter: (value, row) => `${value || ''} ${row.createdByUserLastName || ''}`,
        },
      }),
    ],
    [t],
  );

  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: ViewBinSizeSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: ViewBinSizeSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.BinSizes,
      tableHeader: tP('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useBinSizesDataTable;
