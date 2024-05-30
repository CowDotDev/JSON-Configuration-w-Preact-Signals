import { styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const DataTableNoResults = ({ dataTestId }: { dataTestId: string }) => {
  const { t } = useTranslation('components');

  return (
    <NoResultsWrapper>
      <td>
        <Typography
          sx={{ padding: (theme) => theme.spacing(3, 0, 3, 9), fontWeight: 700 }}
          data-testid={`${dataTestId}-noResults`}
        >
          {t('common.noResults')}
        </Typography>
      </td>
    </NoResultsWrapper>
  );
};

export default DataTableNoResults;

const NoResultsWrapper = styled('tr')(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 4,
  backgroundColor: '#ffffffaa',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));
