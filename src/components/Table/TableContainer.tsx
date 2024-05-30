import { Paper, styled } from '@mui/material';

const TableContainer = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'borderedContainer',
})<{ borderedContainer: boolean }>(({ borderedContainer, theme }) => ({
  position: 'relative',
  maxWidth: '100%',
  overflow: 'hidden',
  backgroundColor: theme.palette.common.white,
  border: borderedContainer ? `1px solid ${theme.palette.gainsboro.main}` : undefined,
  borderRadius: borderedContainer ? theme.spacing(1) : undefined,
}));

export default TableContainer;
