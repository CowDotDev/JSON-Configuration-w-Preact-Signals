import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Typography from '@components/styled/Typography';

type ICurrentlySelectedProps = {
  currentlySelected: number;
  clearSelection: () => void;
};
const CurrentlySelected = ({ currentlySelected, clearSelection }: ICurrentlySelectedProps) => {
  const { t } = useTranslation('components');
  return (
    <Box
      display="flex"
      gap={2}
      alignItems="center"
      sx={{ padding: (theme) => theme.spacing(2, 3) }}
    >
      <Typography variant="body2">
        {t('dataTable.currentlySelected', {
          count: currentlySelected,
        })}
      </Typography>
      <Typography
        variant="body2"
        color="primary"
        sx={{ cursor: 'pointer' }}
        styledVariant="inlineLink"
        onClick={clearSelection}
      >
        {t('dataTable.clear')}
      </Typography>
    </Box>
  );
};

export default CurrentlySelected;
