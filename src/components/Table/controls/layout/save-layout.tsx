import { SaveOutlined } from '@mui/icons-material';
import { Badge, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { LayoutVariant } from '@/graphql/types.generated';
import { useDataTable } from '@/components/Table/context/DataTableProvider';
import { DEFAULT_LAYOUT_ID } from '@/components/Table/hooks/useDataTableLayouts';
import Button from '@components/styled/Button';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { usePermissions } from '@context/permissions';
import { ModalTypes } from '@models/modal';

const DataTableSaveLayoutControls = () => {
  const {
    tableId,
    hasCompletedFirstFetch,
    layoutProps: { activeLayout, addLayout, updateLayout, hasUnsavedChanges },
  } = useDataTable();
  const { t } = useTranslation('components');
  const { openModal } = useModalToggle();
  const { permissions } = usePermissions();

  const openSaveLayoutModal = () => {
    if (
      activeLayout?.id &&
      activeLayout.id !== DEFAULT_LAYOUT_ID &&
      (activeLayout.variant === LayoutVariant.User ||
        (activeLayout.variant === LayoutVariant.Shared && permissions['shared-layout.update']))
    ) {
      openModal({
        type: ModalTypes.tableLayoutOverwrite,
        tableId: tableId,
        layout: {
          id: activeLayout.id,
          label: activeLayout.label,
        },
        handleCreate: addLayout,
        handleOverwrite: updateLayout,
      });
    } else {
      openModal({
        type: ModalTypes.tableLayoutCreate,
        tableId: tableId,
        handleCreate: addLayout,
      });
    }
  };

  return (
    <Box>
      <Button
        variant="text"
        styledVariant="tableControl"
        onClick={openSaveLayoutModal}
        disabled={!hasCompletedFirstFetch}
        data-testid={`data-table-${tableId}-save-layout-button`}
      >
        <Badge badgeContent={hasUnsavedChanges ? '!' : 0} color="info">
          <Box display="flex" alignItems="center">
            <SaveOutlined />
            {t('common.saveLayout').toUpperCase()}
          </Box>
        </Badge>
      </Button>
    </Box>
  );
};

export default DataTableSaveLayoutControls;
