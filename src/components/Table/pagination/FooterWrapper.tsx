import { Box, styled } from '@mui/material';

const FooterWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: theme.spacing(12),
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: theme.spacing(0, 4),
  boxSizing: 'border-box',
  backgroundColor: theme.palette.white.main,
}));

export default FooterWrapper;
