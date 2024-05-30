import { Box, styled } from '@mui/material';

const ExportingOverlay = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 'calc(50vh - 100px)',
  left: 'calc(50vw - 125px)',
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '200px',
  width: '250px',
  borderRadius: '10px',
  boxShadow: '0px 5px 5px rgb(0 0 0 / 25%)',
  backgroundColor: theme.palette.common.white,
}));

export default ExportingOverlay;
