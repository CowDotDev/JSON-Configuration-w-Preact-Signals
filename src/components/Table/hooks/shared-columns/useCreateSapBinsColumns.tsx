import { EditOutlined } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ViewSapBinFfAreaFragment,
  useSapBinFfAreasTableLazyQuery,
} from '@/graphql/defs/pages/__generated__/inventory-integration.generated';
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
import { useWarehouseUtils } from '@context/warehouse-utils';
import { ModalTypes } from '@models/modal';

export const SAP_BINS_LAZY_HOOK = useSapBinFfAreasTableLazyQuery;
export type TSapBinsDataType = TExtractLazyHookDataType<typeof SAP_BINS_LAZY_HOOK>;
export type TSapBinsFilterType = TExtractLazyHookFetchFilterType<typeof SAP_BINS_LAZY_HOOK>;
export type TSapBinsFieldNames = TExtractLazyHookFieldNames<typeof SAP_BINS_LAZY_HOOK>;

interface IUseCreateSapBinFFAreasColumns {
  dataTestId: string;
  triggerDataTableRefetch?: () => void;
  removeColumns?: (keyof TSapBinsDataType)[];
}

const EditButton = ({
  areaMapping,
  refetch,
  systemConnectionId,
  warehouseId,
}: {
  areaMapping: ViewSapBinFfAreaFragment;
  systemConnectionId: string;
  warehouseId: string;
  refetch: () => void;
}) => {
  const { openModal } = useModalToggle();

  return (
    <IconButton
      onClick={() =>
        openModal(
          {
            type: ModalTypes.areaMappingUpdate,
            areaMapping: areaMapping,
            warehouseId,
            systemConnectionId,
          },
          {
            afterClose: (success) => {
              if (success) {
                refetch();
              }
            },
          },
        )
      }
      size="small"
    >
      <EditOutlined color="primary" />
    </IconButton>
  );
};

const DisabledEditButton = ({ tooltipTitle }: { tooltipTitle: string }) => {
  return (
    <Tooltip
      title={tooltipTitle}
      placement="right"
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: (theme) => theme.palette.primary.main,
            '& .MuiTooltip-arrow': {
              color: (theme) => theme.palette.primary.main,
            },
          },
        },
      }}
    >
      <Box>
        <IconButton disabled size="small">
          <EditOutlined />
        </IconButton>
      </Box>
    </Tooltip>
  );
};

const useCreateSapBinsColumns = ({
  dataTestId,
  triggerDataTableRefetch = () => {},
  removeColumns = [],
}: IUseCreateSapBinFFAreasColumns) => {
  const { t } = useTranslation('components');

  const { selectedWarehouse } = useWarehouseUtils();

  const createSapBinsColumns = useCallback<TColumnFactory<TSapBinsDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.display({
          id: DataTableDisplayColumns.Options,
          cell: ({ row }) => (
            <Box data-testid={`${dataTestId}-edit-sap-bin`}>
              {row.original.isAreaEmpty ? (
                <EditButton
                  refetch={triggerDataTableRefetch}
                  areaMapping={row.original}
                  warehouseId={selectedWarehouse?.id}
                  systemConnectionId={selectedWarehouse?.systemConnection?.id}
                />
              ) : (
                <DisabledEditButton tooltipTitle={t('modal.areaMapping.editWarning')} />
              )}
            </Box>
          ),
          size: 30,
          enableColumnFilter: false,
          enableHiding: false,
          enableResizing: false,
          enableSorting: false,
          enableMultiSort: false,
        }),
        columnHelper.accessor('areaCode', {
          header: t('common.code', { prefix: t('common.area') }),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('sapBinCode', {
          header: t('modal.areaMapping.sapBin'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('sapStorageTypeCode', {
          header: t('modal.areaMapping.storageType'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TSapBinsDataType>(removeColumns));
    },
    [t, triggerDataTableRefetch, ...removeColumns],
  );

  return createSapBinsColumns;
};

export default useCreateSapBinsColumns;
