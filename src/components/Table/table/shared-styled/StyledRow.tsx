import { styled } from '@mui/material';

const StyledRow = styled('tr')(({ theme }) => ({
  position: 'relative',
  height: theme.spacing(12),
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.common.white,
  },
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.offwhite.main,
  },
}));

export default StyledRow;
