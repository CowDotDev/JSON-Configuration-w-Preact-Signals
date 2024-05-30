import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import { Box, Popover, PopoverOrigin } from '@mui/material';
import { Column } from '@tanstack/react-table';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { useDataTable } from '@/components/Table/context/DataTableProvider';
import isDisplayColumn from '@/components/Table/lib/isDisplayColumn';
import { DefaultDataType } from '@/components/Table/types/data-table';
import TransferList, {
  ITransferItem,
  TTransferListUpdate,
} from '@components/form-util/transfer-list';
import Button from '@components/styled/Button';

const MemoizedPopover = memo(Popover);
const MemoizedTransferList = memo(TransferList);
const ColumnButton = memo(
  ({
    handleClick,
    hasCompletedFirstFetch,
    popoverId,
    tableId,
  }: {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    hasCompletedFirstFetch: boolean;
    popoverId?: string;
    tableId: DataTableIds;
  }) => {
    const { t } = useTranslation('components');
    return (
      <Button
        styledVariant="tableControl"
        variant="text"
        onClick={handleClick}
        disabled={!hasCompletedFirstFetch}
        aria-describedby={popoverId}
        data-testid={`data-table-${tableId}-column-control-button`}
      >
        <ViewColumnOutlinedIcon /> {t('common.columns').toUpperCase()}
      </Button>
    );
  },
);

type ColumnTransferItem = ITransferItem<Column<DefaultDataType, unknown>>;

const generateTransferItem = (column: Column<DefaultDataType, unknown>): ColumnTransferItem => ({
  id: column.id,
  display: column.columnDef.header as string,
  item: column,
  disableLeftRight: !column.getCanHide(),
});

const DataTableColumnControls = () => {
  const { t } = useTranslation('components');
  const {
    tableId,
    allColumns,
    setColumnOrder,
    setColumnVisibility,
    hasCompletedFirstFetch,
    layoutProps: { activeLayout, hasUnsavedChanges },
  } = useDataTable();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const memoizedAnchorEl = useMemo(() => anchorEl, [anchorEl]);

  const popoverId = memoizedAnchorEl ? 'column-popover' : undefined;
  const memoizedPopoverOrigin = useMemo<PopoverOrigin>(
    () => ({
      vertical: 'bottom',
      horizontal: 'left',
    }),
    [],
  );

  const [{ displayColumns, visibleColumns, hiddenColumns }, setColumnGroups] = useState<{
    displayColumns: ColumnTransferItem[];
    visibleColumns: ColumnTransferItem[];
    hiddenColumns: ColumnTransferItem[];
  }>({
    displayColumns: [] as ColumnTransferItem[],
    visibleColumns: [] as ColumnTransferItem[],
    hiddenColumns: [] as ColumnTransferItem[],
  });
  const memoizedDisplayColumns = useMemo(() => displayColumns, [displayColumns]);
  const memoizedVisibleColumns = useMemo(() => visibleColumns, [visibleColumns]);
  const memoizedHiddenColumns = useMemo(() => hiddenColumns, [hiddenColumns]);

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleTransferListUpdate: TTransferListUpdate<Column<DefaultDataType, unknown>> =
    useCallback(
      ({ active: updatedVisibleColumns, inactive: updatedHiddenColumns }) => {
        const orderedVisibleColumnIds = updatedVisibleColumns.map((c) => c.id);

        // Set New Column Order (Reverse Display columns so we splice to the front in the correct order)
        const reverseOrderedDisplayColumns = [...memoizedDisplayColumns].reverse();
        reverseOrderedDisplayColumns.forEach((c) => {
          orderedVisibleColumnIds.splice(0, 0, c.id);
        });
        setColumnOrder(orderedVisibleColumnIds);

        // Update Visibility
        setColumnVisibility({
          ...updatedVisibleColumns.reduce((acc, c) => ({ ...acc, [c.id]: true }), {}),
          ...updatedHiddenColumns.reduce((acc, c) => ({ ...acc, [c.id]: false }), {}),
        });

        setColumnGroups((old) => ({
          ...old,
          visibleColumns: updatedVisibleColumns,
          hiddenColumns: updatedHiddenColumns,
        }));
      },
      [memoizedDisplayColumns],
    );

  useEffect(() => {
    const _displayCols: ColumnTransferItem[] = [];
    const _visibleCols: ColumnTransferItem[] = [];
    const _hiddenCols: ColumnTransferItem[] = [];

    if (hasCompletedFirstFetch) {
      for (let i = 0; i < allColumns.length; i++) {
        const col = allColumns[i];
        if (col.columnDef.meta?.exportOnly) {
          continue;
        } else if (!isDisplayColumn(col.id)) {
          if (col.getIsVisible()) {
            _visibleCols.push(generateTransferItem(col));
          } else {
            _hiddenCols.push(generateTransferItem(col));
          }
        } else {
          _displayCols.push(generateTransferItem(col));
        }
      }
    }

    setColumnGroups({
      displayColumns: _displayCols,
      visibleColumns: _visibleCols,
      hiddenColumns: _hiddenCols,
    });
  }, [hasCompletedFirstFetch, hasUnsavedChanges, activeLayout?.id]);

  return (
    <Box>
      <ColumnButton
        popoverId={popoverId}
        hasCompletedFirstFetch={hasCompletedFirstFetch}
        handleClick={handleClick}
        tableId={tableId}
      />
      <MemoizedPopover
        id={popoverId}
        open={!!memoizedAnchorEl}
        anchorEl={memoizedAnchorEl}
        onClose={handleClose}
        anchorOrigin={memoizedPopoverOrigin}
        data-testid={`data-table-${tableId}-column-control-popover`}
      >
        <MemoizedTransferList
          activeHeader={t('common.visibleColumns')}
          inactiveHeader={t('common.hiddenColumns')}
          activeList={memoizedVisibleColumns}
          inactiveList={memoizedHiddenColumns}
          handleTransferListUpdate={handleTransferListUpdate}
          dataTestId={`data-table-${tableId}-column-transfer-list`}
        />
      </MemoizedPopover>
    </Box>
  );
};

export default DataTableColumnControls;
