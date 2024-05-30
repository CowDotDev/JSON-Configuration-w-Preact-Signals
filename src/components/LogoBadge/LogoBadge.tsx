import { LogoWithName } from '@/components/icons/LogoWithName';
import { Box, SxProps } from '@mui/material';

type LogoBadgeProps = {
  sx?: SxProps;
};

export const LogoBadge = ({ sx = {} }: LogoBadgeProps) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        borderRadius: '50%',
        padding: (theme) => theme.spacing(10),
        backgroundColor: (theme) => theme.palette.lightGrey.main,
        ...sx,
      }}
    >
      <LogoWithName />
    </Box>
  );
};
