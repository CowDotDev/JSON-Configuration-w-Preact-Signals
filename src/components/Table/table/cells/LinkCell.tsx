import { LinkProps } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BarcodePopover } from '@components/barcode';
import Link, { StyledLinkVariants } from '@styled/Link';

interface ILinkCell extends LinkProps {
  href: string;
  text: string;
  dataTestId: string;
  styledVariant?: StyledLinkVariants;
  disabled?: boolean;
}
const LinkCell = ({
  href,
  text,
  dataTestId,
  styledVariant = 'dataGrid',
  ...linkProps
}: ILinkCell) => {
  const { pathname, search } = useLocation();

  const ref = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [barcodesEnabled] = useState(true);

  const encodedReference = encodeURIComponent(pathname + search);
  const referrer = `${href.includes('?') ? '&' : '?'}referrer=${encodedReference}`;

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <>
      <Link
        href={`${href}${referrer}`}
        styledVariant={styledVariant}
        ref={ref}
        onMouseOver={() => {
          if (text && barcodesEnabled) {
            setTimeoutId(
              setTimeout(() => {
                setAnchorEl(ref.current);
              }, 2000),
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
        data-testid={dataTestId}
        {...linkProps}
      >
        {text}
      </Link>
      <BarcodePopover onClose={() => setAnchorEl(null)} anchorEl={anchorEl} code={text} />
    </>
  );
};

export default LinkCell;
