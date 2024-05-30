import { Box, styled } from '@mui/material';

const DataTableControlsWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 3, 2),
}));

export default DataTableControlsWrapper;
