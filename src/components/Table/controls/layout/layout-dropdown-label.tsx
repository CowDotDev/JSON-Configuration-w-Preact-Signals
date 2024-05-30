import { styled } from '@mui/material';

const DataTableLayoutDropdownLabel = styled('span')<{ nonDefaultAndPermissionless?: boolean }>(
  ({ theme, nonDefaultAndPermissionless = false }) => ({
    maxWidth: 300,
    fontSize: '18px',
    fontWeight: 600,
    color: theme.palette.text.primary,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingRight: nonDefaultAndPermissionless ? theme.spacing(8) : undefined,
  }),
);

export default DataTableLayoutDropdownLabel;
