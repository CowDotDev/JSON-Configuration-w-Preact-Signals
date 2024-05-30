import { Tune } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { LayoutVariant } from '@/graphql/types.generated';
import { useDataTable } from '@/components/Table/context/DataTableProvider';
import SharedLayoutVariant from '@/components/Table/controls/layout/shared-layout-variant';
import UnsavedChangesRevert from '@/components/Table/controls/layout/unsaved-changes-revert';
import UserLayoutVariant from '@/components/Table/controls/layout/user-layout-variant';
import { DEFAULT_LAYOUT_ID } from '@/components/Table/hooks/useDataTableLayouts';
import DropdownMenu, { IDropdownMenuItem, IDropdownMenuSection } from '@components/dropdown-menu';

const ActiveLayoutLabel = memo(
  ({
    dataTestId,
    activeLayoutId,
    activeLayoutLabel,
  }: {
    dataTestId: string;
    activeLayoutId: string;
    activeLayoutLabel: string;
  }) => {
    return activeLayoutId && activeLayoutId !== DEFAULT_LAYOUT_ID ? (
      <Box display="inline-flex" alignItems="center" gap={2}>
        <Tune sx={{ color: (theme) => theme.palette.slateGrey.main }} />
        <Typography
          fontWeight={600}
          maxWidth={300}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          <span title={activeLayoutLabel} data-testid={`${dataTestId}-label`}>
            {activeLayoutLabel}
          </span>
        </Typography>
      </Box>
    ) : null;
  },
);

interface DataTableLayoutDropdownProps {
  tableHeader?: string;
  additionalOptions?: IDropdownMenuItem[];
  additionalOptionsSectionLabel?: string;
}
const DataTableLayoutDropdown = ({
  tableHeader,
  additionalOptions,
  additionalOptionsSectionLabel,
}: DataTableLayoutDropdownProps) => {
  const { t } = useTranslation('components');
  const {
    tableId,
    layoutProps: {
      isLoadingLayouts,
      layouts,
      defaultLayout,
      activeLayout,
      setActiveLayout,
      hasUnsavedChanges,
    },
  } = useDataTable();

  const [sharedLayoutVariants, userLayoutVariants] = useMemo<
    [IDropdownMenuItem<string>[], IDropdownMenuItem<string>[]]
  >(() => {
    const _sharedLayoutVariants: IDropdownMenuItem<string>[] = [];
    const _userLayoutVariants: IDropdownMenuItem<string>[] = [];

    layouts.forEach((layout) => {
      if (layout.variant === LayoutVariant.User) {
        _userLayoutVariants.push({
          value: layout.id,
          selected: !tableHeader && activeLayout?.id === layout.id,
          component: <UserLayoutVariant layout={layout} />,
          optionSx: { paddingLeft: 0, paddingRight: 0 },
        });
      } else {
        _sharedLayoutVariants.push({
          value: layout.id,
          selected: !tableHeader && activeLayout?.id === layout.id,
          component: <SharedLayoutVariant layout={layout} />,
          optionSx: { paddingLeft: 0, paddingRight: 0 },
        });
      }
    });

    return [_sharedLayoutVariants, _userLayoutVariants];
  }, [layouts]);

  const optionSections = useMemo<IDropdownMenuSection<string>[]>(() => {
    const _tableHeaderOption = [];

    const _optionSections = [];

    if (additionalOptions && additionalOptions.length > 0) {
      _optionSections.push({
        label: additionalOptionsSectionLabel || undefined,
        options: additionalOptions,
      });
    }

    if (tableHeader) {
      _tableHeaderOption.push({
        item: defaultLayout.id,
        selected: true,
        component: tableHeader,
        optionSx:
          sharedLayoutVariants.length > 0 || userLayoutVariants.length > 0
            ? { paddingLeft: '54px' }
            : {},
      });
      _optionSections.push({
        label: t('dataTable.layoutLabels.defaultLayout'),
        options: _tableHeaderOption,
      });
    }

    if (sharedLayoutVariants.length > 0) {
      _optionSections.push({
        label: t('dataTable.layoutLabels.sharedLayouts'),
        options: sharedLayoutVariants,
      });
    }

    if (
      userLayoutVariants.length > 0 ||
      (userLayoutVariants.length <= 0 && sharedLayoutVariants.length <= 0)
    ) {
      _optionSections.push({
        label: t('dataTable.layoutLabels.userLayouts'),
        emptyMessage: t('tableLayout.noSavedLayouts'),
        options: userLayoutVariants,
      });
    }

    return _optionSections;
  }, [sharedLayoutVariants, userLayoutVariants, additionalOptions]);

  const revertUnsavedChanges = useCallback(() => {
    setActiveLayout(activeLayout?.id ? activeLayout.id : null);
  }, [setActiveLayout, activeLayout?.id]);

  const handleSelect = useCallback(
    (option: IDropdownMenuItem<string>) => {
      if (typeof option?.onSelect === 'function') {
        option.onSelect();
      } else {
        setActiveLayout(option.value);
      }
    },
    [setActiveLayout],
  );

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      gap={3}
      data-testid="data-table-layout-dropdown-container"
    >
      <DropdownMenu
        dataTestId={`dataTableLayoutDropdown-${tableId}`}
        optionSections={optionSections}
        handleSelect={handleSelect}
        loading={!tableHeader && additionalOptions.length === 0 ? isLoadingLayouts : false}
        maxMenuHeight={275}
        anchorLeft
      />

      <ActiveLayoutLabel
        dataTestId={`dataTableActiveLayout-${tableId}`}
        activeLayoutId={activeLayout?.id}
        activeLayoutLabel={activeLayout?.label}
      />

      <UnsavedChangesRevert
        dataTestId={`dataTableRevertChanges-${tableId}`}
        hasUnsavedChanges={hasUnsavedChanges}
        revertUnsavedChanges={revertUnsavedChanges}
      />
    </Box>
  );
};

export default DataTableLayoutDropdown;
