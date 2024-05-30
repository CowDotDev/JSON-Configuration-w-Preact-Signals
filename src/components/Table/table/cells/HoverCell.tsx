import { BoxProps, Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import { HoverPopover } from '@components/hover-popover';

interface IHoverCellCell extends BoxProps {
  hoverText: string;
  text: string;
}
const HoverCell = ({ hoverText, text, ...boxProps }: IHoverCellCell) => {
  const ref = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [barcodesEnabled] = useState(true);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <>
      <Box
        ref={ref}
        onMouseOver={() => {
          if (text && barcodesEnabled) {
            setTimeoutId(
              setTimeout(() => {
                setAnchorEl(ref.current);
              }, 1000),
            );
          }
        }}
        onMouseLeave={() => {
          if (text && barcodesEnabled) {
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
          }
        }}
        {...boxProps}
        sx={{
          lineHeight: 1.22,
          boxSizing: 'content-box',
          padding: '12px 8px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          cursor: 'pointer',
        }}
      >
        {text}
      </Box>
      <HoverPopover onClose={() => setAnchorEl(null)} anchorEl={anchorEl} text={hoverText} />
    </>
  );
};

export default HoverCell;
