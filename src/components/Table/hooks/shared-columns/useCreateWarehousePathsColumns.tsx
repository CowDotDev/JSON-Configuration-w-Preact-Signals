import { EditOutlined } from '@mui/icons-material';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetWarehousePathsLazyQuery } from '@/graphql/defs/pages/__generated__/warehouse-paths.generated';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import Box from '@components/styled/Box';
import IconButton from '@components/styled/IconButton';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { ModalTypes } from '@models/modal';

export const WAREHOUSE_PATHS_HOOK = useGetWarehousePathsLazyQuery;
export type TWarehousePathsDataType = TExtractLazyHookDataType<typeof WAREHOUSE_PATHS_HOOK>;
export type TWarehousePathsFilterType = TExtractLazyHookFetchFilterType<
  typeof WAREHOUSE_PATHS_HOOK
>;
export type TWarehousePathsFieldNames = TExtractLazyHookFieldNames<typeof WAREHOUSE_PATHS_HOOK>;

interface ICreateWarehousePathsColumns {
  dataTestId: string;
  triggerDataTableRefetch?: () => void;
  removeColumns?: (keyof TWarehousePathsDataType)[];
}

const EditButton = ({
  path,
  triggerDataTableRefetch,
}: {
  path: TWarehousePathsDataType;
  triggerDataTableRefetch?: () => void;
}) => {
  const { openModal } = useModalToggle();

  return (
    <Box>
      <IconButton
        onClick={() => {
          openModal(
            {
              type: ModalTypes.warehousePathUpdate,
              path,
            },
            {
              afterClose: (success) => {
                if (success) triggerDataTableRefetch();
              },
            },
          );
        }}
        styledVariant="dataGrid"
        size="small"
      >
        <EditOutlined data-testid="edit-modal-button" />
      </IconButton>
    </Box>
  );
};

const useCreateWarehousePathsColumns = ({
  dataTestId,
  triggerDataTableRefetch,
  removeColumns = [],
}: ICreateWarehousePathsColumns) => {
  const { t } = useTranslation('components');

  const createWarehousePathsColumns = useCallback<TColumnFactory<TWarehousePathsDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.display({
          id: DataTableDisplayColumns.Options,
          cell: ({ row }) => (
            <Box position="relative" width="100%" data-testid={`${dataTestId}-edit-warehouse-path`}>
              <EditButton triggerDataTableRefetch={triggerDataTableRefetch} path={row.original} />
            </Box>
          ),
          size: 20,
          enableColumnFilter: false,
          enableHiding: false,
          enableResizing: false,
          enableSorting: false,
          enableMultiSort: false,
        }),

        columnHelper.accessor('sourceAreaCode', {
          header: t('common.sourceArea'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('destinationAreaCode', {
          header: t('common.destinationArea'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('internalStockOrderTypeLabel', {
          header: t('common.internalStockOrderType'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TWarehousePathsDataType>(removeColumns));
    },
    [triggerDataTableRefetch, ...removeColumns],
  );

  return createWarehousePathsColumns;
};

export default useCreateWarehousePathsColumns;
