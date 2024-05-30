import { EditOutlined } from '@mui/icons-material';
import { Box, Tooltip } from '@mui/material';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useBinsTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateBinColumns.generated';
import { BinActiveState, BinBlockState, BinType } from '@/graphql/types.generated';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import IconButton from '@components/styled/IconButton';
import { BIN_DETAILS, BIN_SIZE_DETAILS } from '@constants/routes';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';
import { ModalTypes } from '@models/modal';

export const BINS_LAZY_HOOK = useBinsTableLazyQuery;
export type TBinsDataType = TExtractLazyHookDataType<typeof BINS_LAZY_HOOK>;
export type TBinsFilterType = TExtractLazyHookFetchFilterType<typeof BINS_LAZY_HOOK>;
export type TBinsFieldNames = TExtractLazyHookFieldNames<typeof BINS_LAZY_HOOK>;

interface IUseCreateBinColumns {
  dataTestId: string;
  triggerDataTableRefetch?: () => void;
  allowEdit?: boolean;
  removeColumns?: (keyof TBinsDataType)[];
}

const EditButton = ({
  bin,
  triggerDataTableRefetch,
}: {
  bin: TBinsDataType;
  triggerDataTableRefetch?: () => void;
}) => {
  const { openModal } = useModalToggle();

  const isSystemBinType = bin.type !== BinType.Default && Object.values(BinType).includes(bin.type);

  return (
    !isSystemBinType && (
      <Box position="relative" width="100%">
        <IconButton
          onClick={() => {
            openModal(
              {
                type: ModalTypes.binUpdate,
                bin,
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
    )
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <IconButton
          disabled
          size="small"
          sx={{
            '& svg': {
              fontSize: 24,
            },
          }}
        >
          <EditOutlined />
        </IconButton>
      </Box>
    </Tooltip>
  );
};

const useCreateBinColumns = ({
  dataTestId,
  triggerDataTableRefetch = () => {},
  allowEdit = false,
  removeColumns = [],
}: IUseCreateBinColumns) => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages');

  const { displayDateTime } = useDateTime();

  const createBinColumns = useCallback<TColumnFactory<TBinsDataType>>(
    (columnHelper) => {
      const columns = [
        allowEdit
          ? columnHelper.display({
              id: DataTableDisplayColumns.Options,
              cell: ({ row }) => (
                <Box>
                  {!row.original.containsProducts ? (
                    <EditButton
                      triggerDataTableRefetch={triggerDataTableRefetch}
                      bin={row.original}
                    />
                  ) : (
                    <DisabledEditButton tooltipTitle={tP('settings.bin-settings.editBinTooltip')} />
                  )}
                </Box>
              ),
              size: 30,
              enableColumnFilter: false,
              enableHiding: false,
              enableResizing: false,
              enableSorting: false,
              enableMultiSort: false,
            })
          : null,

        columnHelper.accessor('code', {
          header: t('common.code'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BIN_DETAILS}/${row.original.id}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-bin-details-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('inactive', {
          header: t('common.status'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(BinActiveState).map((state) => ({
              value: BinActiveState[state],
              display: t(`common.${BinActiveState[state]}`),
            })),
            exportFormatter: (value) => t(`common.${value}`),
          },
        }),
        columnHelper.accessor('sourceBinBlock', {
          header: t('common.removal'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(BinBlockState).map((state) => ({
              value: BinBlockState[state],
              display: t(`common.${BinBlockState[state]}`),
            })),
            exportFormatter: (value) => t(`common.${value}`),
          },
        }),
        columnHelper.accessor('destinationBinBlock', {
          header: t('common.placement'),
          cell: ({ getValue }) => t(`common.${getValue()}`),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(BinBlockState).map((state) => ({
              value: BinBlockState[state],
              display: t(`common.${BinBlockState[state]}`),
            })),
            exportFormatter: (value) => t(`common.${value}`),
          },
        }),
        columnHelper.accessor('zoneCode', {
          header: t('common.zone'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('areaCode', {
          header: t('bins.columns.areaCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('level', {
          header: t('common.level'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('verificationCode', {
          header: t('bins.columns.verification'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('x', {
          header: t('common.x'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('y', {
          header: t('common.y'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('lastMovement', {
          header: t('common.lastMovement'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('lastCount', {
          header: t('common.lastCounted'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('hasOpenTasks', {
          header: t('common.hasOpenTasks'),
          cell: ({ getValue }) => (getValue() ? t('common.yes') : t('common.no')),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => (value ? t('common.yes') : t('common.no')),
          },
        }),
        columnHelper.accessor('containsProducts', {
          header: t('bins.columns.containsProducts'),
          cell: ({ getValue }) => (getValue() ? t('common.yes') : t('common.no')),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => (value ? t('common.yes') : t('common.no')),
          },
        }),
        columnHelper.accessor('binSizeCode', {
          header: t('bins.columns.binSize'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${BIN_SIZE_DETAILS}/${row.original.binSizeId}`)}
              text={getValue()}
              dataTestId={`${dataTestId}-bin-size-details-link`}
            />
          ),
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => value,
          },
        }),
        columnHelper.accessor('binSizeWeightCapacity', {
          header: t('common.weightCapacity'),
          cell: ({ row, getValue }) => `${getValue()} ${row.original.weightCapacityUomCode}`,
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value, row) => `${value} ${row.weightCapacityUomCode}`,
          },
        }),
        columnHelper.accessor('binSizeDepth', {
          header: t('common.depth'),
          cell: ({ row, getValue }) => `${getValue()} ${row.original.distanceUomCode}`,
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value, row) => `${value} ${row.distanceUomCode}`,
          },
        }),
        columnHelper.accessor('binSizeWidth', {
          header: t('common.width'),
          cell: ({ row, getValue }) => `${getValue()} ${row.original.distanceUomCode}`,
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value, row) => `${value} ${row.distanceUomCode}`,
          },
        }),
        columnHelper.accessor('binSizeHeight', {
          header: t('common.height'),
          cell: ({ row, getValue }) => `${getValue()} ${row.original.distanceUomCode}`,
          meta: {
            columnType: ColumnType.number,
            exportFormatter: (value, row) => `${value} ${row.distanceUomCode}`,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TBinsDataType>(removeColumns));
    },
    [t, displayDateTime, triggerDataTableRefetch, ...removeColumns],
  );

  return createBinColumns;
};

export default useCreateBinColumns;
