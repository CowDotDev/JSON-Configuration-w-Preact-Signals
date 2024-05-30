import { EditOutlined } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewAreaSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateAreasColumns, {
  _TDataType,
  _TFieldNames,
  _TFilterType,
  LAZY_QUERY_HOOK,
} from '@/components/Table/hooks/shared-columns/useCreateAreasColumns';
import useCreateDataTableColumns, {
  TColumnFactory,
} from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';
import Box from '@components/styled/Box';
import IconButton from '@components/styled/IconButton';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { useWarehouseUtils } from '@context/warehouse-utils';
import { ModalTypes } from '@models/modal';

const EditButton = ({
  area,
  triggerDataTableRefetch,
}: {
  area: _TDataType;
  triggerDataTableRefetch?: () => void;
}) => {
  const { openModal } = useModalToggle();

  return (
    <Box>
      <IconButton
        onClick={() => {
          openModal(
            {
              type: ModalTypes.areaUpdate,
              area,
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

const useAreaSettingsDataTable = () => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages');
  const { selectedWarehouseId } = useWarehouseUtils();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const addEditAreaAction: TColumnFactory<_TDataType> = (columnHelper) => {
    return [
      columnHelper.display({
        id: DataTableDisplayColumns.Options,
        cell: ({ row }) => (
          <Box position="relative" width="100%">
            {row.original.isEmpty ? (
              <EditButton triggerDataTableRefetch={triggerDataTableRefetch} area={row.original} />
            ) : (
              <DisabledEditButton tooltipTitle={tP('settings.areas.editAreaTooltip')} />
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
    ];
  };

  const areasColumns = useCreateAreasColumns({
    dataTestId: 'areas-settings',
    addColumnsToStart: addEditAreaAction,
  });

  const columns = useCreateDataTableColumns(areasColumns);

  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        columnId: ViewAreaSortFields.WarehouseId,
        operator: FilterOperator.eq,
        value: selectedWarehouseId,
      },
    ],
    [selectedWarehouseId],
  );

  const defaultSorting: IDataTableSort<_TFieldNames>[] = useMemo(
    () => [
      {
        id: ViewAreaSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    areaSettingsDataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.AreaSettings,
      tableHeader: t('areas.title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useAreaSettingsDataTable;
