import { styled } from '@mui/material';
import { memo } from 'react';

const Resizer = styled('div')<{ canResize: boolean }>(({ canResize, theme }) => ({
  position: 'absolute',
  right: 0,
  top: theme.spacing(2),
  bottom: theme.spacing(2),
  zIndex: 1,
  width: '2px',
  borderRadius: '1px',
  backgroundColor: theme.palette.gainsboro.main,
  cursor: canResize ? 'ew-resize' : 'default',
  userSelect: 'none',
  touchAction: 'none',
}));

const DataTableHeaderResizer = memo(
  ({
    canResize,
    handleMouseDown,
    handleTouchStart,
    dataTestId,
  }: {
    canResize: boolean;
    handleMouseDown: (event: unknown) => void;
    handleTouchStart: (event: unknown) => void;
    dataTestId: string;
  }) => (
    <Resizer
      className="data-table-resizer"
      canResize={canResize}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      data-testid={dataTestId}
    />
  ),
);

export default DataTableHeaderResizer;
