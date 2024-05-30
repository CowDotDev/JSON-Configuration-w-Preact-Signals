import { styled } from '@mui/material';

const StyledCell = styled('td')(({ theme }) => ({
  ...theme.typography.body1,
  position: 'relative',
  boxSizing: 'content-box',
  padding: theme.spacing(3, 2),
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&:first-of-type': {
    paddingLeft: theme.spacing(6),
  },
  '&:last-of-type': {
    paddingRight: theme.spacing(6),
  },
}));

export default StyledCell;
