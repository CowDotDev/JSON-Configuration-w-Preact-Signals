import { DeleteOutlined, Star, StarBorder, Warehouse } from '@mui/icons-material';
import { Box, styled } from '@mui/material';

import { DataTableLayoutFragment } from '@/graphql/defs/hooks/__generated__/useDataTableLayouts.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { useDataTable } from '@/components/Table/context/DataTableProvider';
import DataTableLayoutDropdownLabel from '@/components/Table/controls/layout/layout-dropdown-label';
import { TDeleteLayoutMethod } from '@/components/Table/hooks/useDataTableLayouts';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { usePermissions } from '@context/permissions';
import { ModalTypes } from '@models/modal';

interface DeleteLayoutProps {
  tableId: DataTableIds;
  layout: DataTableLayoutFragment;
  handleDelete: TDeleteLayoutMethod;
}

interface LayoutVariantProps {
  layout: DataTableLayoutFragment;
}

const DeleteLayout = ({ tableId, layout, handleDelete }: DeleteLayoutProps) => {
  const { openModal } = useModalToggle();

  const openDeleteModal = () => {
    openModal({
      type: ModalTypes.tableLayoutDelete,
      tableId,
      layout: { id: layout.id, variant: layout.variant, label: layout.label },
      handleDelete,
    });
  };

  return (
    <Box
      display="inline-flex"
      onClick={(e) => {
        e.stopPropagation();
        openDeleteModal();
      }}
      sx={{ padding: (theme) => theme.spacing(0, 3), marginLeft: 'auto' }}
    >
      <DeleteOutlined color="error" />
    </Box>
  );
};

const WarehouseDefault = () => {
  return (
    <Box display="inline-flex" sx={{ padding: (theme) => theme.spacing(0, 3), marginLeft: 'auto' }}>
      <Warehouse color="primary" />
    </Box>
  );
};

const SharedLayoutVariant = ({ layout }: LayoutVariantProps) => {
  const { tableId, layoutProps } = useDataTable();
  const { permissions } = usePermissions();

  return (
    <StyledLayoutOption className={layout.userDefault ? 'defaultLayout' : 'nonDefaultLayout'}>
      <Box
        className="defaultToggle"
        onClick={(e) => {
          e.stopPropagation();
          layoutProps.markLayoutAsUserDefault(layout.id, !layout.userDefault);
        }}
      >
        <Star color="primary" />
        <StarBorder color="primary" />
      </Box>
      <DataTableLayoutDropdownLabel
        title={layout.label}
        nonDefaultAndPermissionless={!layout.sharedDefault && !permissions['shared-layout.delete']}
      >
        {layout.label}
      </DataTableLayoutDropdownLabel>
      {!layout.sharedDefault ? (
        permissions['shared-layout.delete'] ? (
          <DeleteLayout tableId={tableId} layout={layout} handleDelete={layoutProps.deleteLayout} />
        ) : null
      ) : (
        <WarehouseDefault />
      )}
    </StyledLayoutOption>
  );
};

export default SharedLayoutVariant;

const StyledLayoutOption = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  '.defaultToggle': {
    position: 'relative',
    display: 'inline-flex',
    padding: theme.spacing(0, 3),
  },
  '&.defaultLayout': {
    '.defaultToggle': {
      '[data-testid="StarBorderIcon"]': {
        position: 'absolute',
        visibility: 'hidden',
        top: 0,
        left: theme.spacing(3),
      },
      '[data-testid="StarIcon"]': {
        visibility: 'visible',
      },
      '&:hover': {
        '[data-testid="StarBorderIcon"]': {
          visibility: 'visible',
        },
        '[data-testid="StarIcon"]': {
          visibility: 'hidden',
        },
      },
    },
  },
  '&.nonDefaultLayout': {
    '& .defaultToggle': {
      '[data-testid="StarIcon"]': {
        position: 'absolute',
        visibility: 'hidden',
        top: 0,
        left: theme.spacing(3),
      },
      '[data-testid="StarBorderIcon"]': {
        visibility: 'hidden',
      },
      '&:hover': {
        '[data-testid="StarBorderIcon"]': {
          visibility: 'hidden',
        },
        '[data-testid="StarIcon"]': {
          visibility: 'visible',
        },
      },
    },
    '&:hover': {
      '[data-testid="StarBorderIcon"]': {
        visibility: 'visible',
      },
    },
  },
}));
