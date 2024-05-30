import { Undo } from '@mui/icons-material';
import { Typography, IconButton, Tooltip } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const UnsavedChangesRevert = memo(
  ({
    dataTestId,
    hasUnsavedChanges,
    revertUnsavedChanges,
  }: {
    dataTestId: string;
    hasUnsavedChanges: boolean;
    revertUnsavedChanges: () => void;
  }) => {
    const { t } = useTranslation('components');

    const handleUndoClick = () => {
      revertUnsavedChanges();
    };

    return hasUnsavedChanges ? (
      <>
        <Typography variant="body3" fontStyle="italic">
          ({t('dataTable.unsavedChanges')})
        </Typography>
        <Tooltip title={t('dataTable.revertChanges')} placement="right" arrow>
          <IconButton size="small" onClick={handleUndoClick} data-testid={`${dataTestId}-button`}>
            <Undo fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </>
    ) : null;
  },
);

export default UnsavedChangesRevert;
