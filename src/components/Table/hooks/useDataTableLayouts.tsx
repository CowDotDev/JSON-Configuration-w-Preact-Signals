import { ApolloError } from '@apollo/client';
import {
  Column,
  ColumnOrderState,
  ColumnSizingState,
  Updater,
  VisibilityState,
} from '@tanstack/react-table';
import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import isEqual from 'react-fast-compare';
import { useTranslation } from 'react-i18next';

import {
  DataTableLayoutFragment,
  useCreateDataTableSharedLayoutMutation,
  useCreateDataTableUserLayoutMutation,
  useDeleteDataTableSharedLayoutMutation,
  useDeleteDataTableUserLayoutMutation,
  useGetDataTableLayoutsLazyQuery,
  useMarkLayoutAsUserDefaultMutation,
  useUpdateDataTableSharedLayoutMutation,
  useUpdateDataTableUserLayoutMutation,
} from '@/graphql/defs/hooks/__generated__/useDataTableLayouts.generated';
import { LayoutVariant } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import {
  DefaultDataType,
  IDataTableSort,
  TFilterSetter,
} from '@/components/Table/types/data-table';
import { ColumnFilter, LinkedColumnFilter } from '@components/filter-builder/filter-definitions';
import { useAuth } from '@context/auth';
import { useSnackbar } from '@context/snackbar';
import { useWarehouseUtils } from '@context/warehouse-utils';
import useDebouncedEffect from '@hooks/useDebouncedEffect';

interface IDataTableLayoutsProps {
  tableId: DataTableIds;
  isLayoutsDisabled: boolean;
  allTableColumns: Column<DefaultDataType>[];
  linkedFilter: LinkedColumnFilter[];
  defaultSorting: IDataTableSort[];
  defaultPageSize: number;
  currentFilterWithoutLinks: ColumnFilter[];
  currentSorting: IDataTableSort[];
  currentColumnOrder: ColumnOrderState;
  currentColumnSizing: ColumnSizingState;
  currentPageSize: number;
  setFilter: TFilterSetter;
  setSorting: Dispatch<SetStateAction<IDataTableSort[]>>;
  setColumnOrder: (updater: Updater<ColumnOrderState>) => void;
  setColumnVisibility: (updater: Updater<VisibilityState>) => void;
  setColumnSizing: (updater: Updater<ColumnSizingState>) => void;
  setPageSize: (limit: number) => void;
  hasInitializedLayouts: boolean;
  setHasInitializedLayouts: Dispatch<SetStateAction<boolean>>;
}

export type TAddLayoutMethod = (
  layoutOptions: {
    layoutLabel: string;
    sharedDefault: boolean;
    userDefault: boolean;
    variant: LayoutVariant;
  },
  runAfter?: () => void,
) => void;

export type TUpdateLayoutMethod = (runAfter?: () => void) => void;

export type TDeleteLayoutMethod = (
  layoutId: string,
  layoutVariant: LayoutVariant,
  runAfter?: () => void,
) => void;

export type TMarkLayoutAsDefaultMethod = (
  layoutId: string,
  markAsDefault: boolean,
  runAfter?: () => void,
) => void;

export interface IDataTableLayouts {
  isLoadingLayouts: boolean;
  activeLayout: DataTableLayoutFragment | null;
  hasUnsavedChanges: boolean;
  layouts: DataTableLayoutFragment[];
  defaultLayout: DataTableLayoutFragment;
  setActiveLayout: (layoutId: string) => void;
  addLayout: TAddLayoutMethod;
  updateLayout: TUpdateLayoutMethod;
  deleteLayout: TDeleteLayoutMethod;
  markLayoutAsUserDefault: TMarkLayoutAsDefaultMethod;
}

export const DEFAULT_LAYOUT_ID = 'defaultLayout';
const SELECTED_LAYOUT_PREFIX = 'selectedDataTableLayoutId';
const LOCAL_CHANGES_PREFIX = `localDataTableChanges`;

type TSelectedLayoutSrc = 'user' | 'shared' | 'previous';
const findBestDefaultLayout = (
  tableId,
  warehouseId: string,
  layouts: DataTableLayoutFragment[],
): [TSelectedLayoutSrc, DataTableLayoutFragment] => {
  let selectedLayout: DataTableLayoutFragment = null;
  let selectedLayoutSrc: TSelectedLayoutSrc = null;
  const previouslySelectedLayoutId = sessionStorage.getItem(
    `${SELECTED_LAYOUT_PREFIX}-${tableId}-${warehouseId}`,
  );

  for (let i = 0; i < layouts.length; i++) {
    const layout = layouts[i];
    if (!!previouslySelectedLayoutId && layout.id === previouslySelectedLayoutId) {
      selectedLayout = layout;
      selectedLayoutSrc = 'previous';
      break;
    } else if (layout.userDefault && selectedLayoutSrc !== 'previous') {
      selectedLayout = layout;
      selectedLayoutSrc = 'user';
    } else if (layout.sharedDefault && selectedLayoutSrc === null) {
      selectedLayout = layout;
      selectedLayoutSrc = 'shared';
    }
  }

  return [selectedLayoutSrc, selectedLayout];
};

function useDataTableLayouts({
  tableId,
  isLayoutsDisabled = false,
  allTableColumns,
  linkedFilter,
  defaultSorting,
  defaultPageSize,
  currentFilterWithoutLinks,
  currentSorting,
  currentColumnOrder,
  currentColumnSizing,
  currentPageSize,
  setFilter,
  setSorting,
  setColumnOrder,
  setColumnVisibility,
  setColumnSizing,
  setPageSize,
  hasInitializedLayouts,
  setHasInitializedLayouts,
}: IDataTableLayoutsProps): IDataTableLayouts {
  const { t } = useTranslation('components', { keyPrefix: 'dataTable' });
  const { t: tC } = useTranslation('components');
  const { user } = useAuth();
  const { selectedWarehouseId } = useWarehouseUtils();
  const { showMessage } = useSnackbar();

  const DEFAULT_LAYOUT: DataTableLayoutFragment = {
    id: DEFAULT_LAYOUT_ID,
    tableId,
    warehouseId: selectedWarehouseId,
    variant: null,
    label: null,
    columns: [],
    columnSizes: {},
    filter: [],
    sorting: defaultSorting,
    pageSize: defaultPageSize,
    userId: null,
    sharedDefault: false,
    userDefault: false,
  };

  const pendingLayoutChange = useRef(true);
  const [activeLayout, setActiveLayout] = useState<DataTableLayoutFragment>(null);

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const removeLocalChanges = () => {
    sessionStorage.removeItem(`${LOCAL_CHANGES_PREFIX}-${tableId}-${selectedWarehouseId}`);
    setHasUnsavedChanges(false);
  };
  const recordLocalChanges = () => {
    if (!sessionStorage.getItem(`${SELECTED_LAYOUT_PREFIX}-${tableId}-${selectedWarehouseId}`)) {
      sessionStorage.setItem(
        `${SELECTED_LAYOUT_PREFIX}-${tableId}-${selectedWarehouseId}`,
        activeLayout.id,
      );
    }

    const _localChanges: DataTableLayoutFragment = {
      id: activeLayout.id,
      tableId: tableId,
      userId: user?.id,
      warehouseId: selectedWarehouseId,
      columnSizes: currentColumnSizing,
      columns: currentColumnOrder,
      filter: currentFilterWithoutLinks,
      pageSize: currentPageSize,
      sorting: currentSorting,
      label: activeLayout.label,
      sharedDefault: activeLayout.sharedDefault,
      userDefault: activeLayout.userDefault,
      variant: activeLayout.variant,
    };

    sessionStorage.setItem(
      `${LOCAL_CHANGES_PREFIX}-${tableId}-${selectedWarehouseId}`,
      JSON.stringify(_localChanges),
    );
    setHasUnsavedChanges(true);
  };

  const handleCreateOnCompleted = (layout: DataTableLayoutFragment) => {
    showMessage({
      type: 'success',
      message: tC('modal.tableLayout.create.success', { layoutName: layout.label }),
    });

    sessionStorage.setItem(
      `${SELECTED_LAYOUT_PREFIX}-${tableId}-${selectedWarehouseId}`,
      layout.id,
    );

    removeLocalChanges();
    setActiveLayout(layout);

    refetchLayouts();
  };
  const handleCreateOnError = (error: ApolloError) => {
    showMessage({
      type: 'error',
      message: t('errorCreatingLayout', { errorMessage: error.message }),
    });
  };
  const [createDataTableSharedLayout] = useCreateDataTableSharedLayoutMutation({
    onCompleted: ({ createOneSharedLayout: layout }) => {
      handleCreateOnCompleted(layout);
    },
    onError: handleCreateOnError,
  });
  const [createDataTableUserLayout] = useCreateDataTableUserLayoutMutation({
    onCompleted: ({ createOneUserLayout: layout }) => {
      handleCreateOnCompleted(layout);
    },
    onError: handleCreateOnError,
  });

  const handleUpdateOnCompleted = (layout: DataTableLayoutFragment) => {
    showMessage({
      type: 'success',
      message: tC('modal.tableLayout.overwrite.success', { layoutName: layout.label }),
    });
  };
  const handleUpdateOnError = (error: ApolloError) => {
    showMessage({
      type: 'error',
      message: t('errorUpdatingLayout', { errorMessage: error.message }),
    });
  };
  const [updateDataTableSharedLayout] = useUpdateDataTableSharedLayoutMutation({
    onCompleted: ({ updateOneSharedLayout: layout }) => {
      handleUpdateOnCompleted(layout);
    },
    onError: handleUpdateOnError,
  });
  const [updateDataTableUserLayout] = useUpdateDataTableUserLayoutMutation({
    onCompleted: ({ updateOneUserLayout: layout }) => {
      handleUpdateOnCompleted(layout);
    },
    onError: handleUpdateOnError,
  });

  const [markLayoutAsUserDefaultMutation] = useMarkLayoutAsUserDefaultMutation({
    onCompleted: ({
      setUserDefaultLayout: { label: _layoutLabel, userDefault: _markedAsDefault },
    }) => {
      showMessage({
        type: 'success',
        message: t(
          _markedAsDefault
            ? 'markLayoutAsUserDefault_success'
            : 'removeLayoutAsUserDefault_success',
          { layoutLabel: _layoutLabel },
        ),
      });
    },
    onError: (error) => {
      showMessage({
        type: 'error',
        message: t('markLayoutAsUserDefault_error', { errorMessage: error.message }),
      });
    },
  });

  const handleDeleteOnError = (error: ApolloError) => {
    showMessage({
      type: 'error',
      message: t('errorDeletingLayout', { errorMessage: error.message }),
    });
  };
  const [deleteDataTableSharedLayout] = useDeleteDataTableSharedLayoutMutation({
    onError: handleDeleteOnError,
  });
  const [deleteDataTableUserLayout] = useDeleteDataTableUserLayoutMutation({
    onError: handleDeleteOnError,
  });

  const [fetchDataTableLayouts, { data, loading, refetch: refetchLayouts }] =
    useGetDataTableLayoutsLazyQuery({
      variables: {
        tableId,
        userId: user?.id,
        warehouseId: selectedWarehouseId,
      },
      onCompleted: ({ GetDataTableLayouts: { layouts } }) => {
        if (!hasInitializedLayouts) {
          const [selectedLayoutSrc, selectedLayout] = findBestDefaultLayout(
            tableId,
            selectedWarehouseId,
            [DEFAULT_LAYOUT, ...layouts],
          );

          if (selectedLayoutSrc !== 'previous' || !selectedLayout) {
            updateActiveLayout(selectedLayout ? selectedLayout.id : null);
          } else {
            updateActiveLayoutWithLocalChanges(selectedLayout);
          }
        }
      },
      onError: (error) => {
        showMessage({
          type: 'error',
          message: t('errorFetchLayouts', { errorMessage: error.message }),
        });
      },
    });
  const layouts = useMemo(() => data?.GetDataTableLayouts?.layouts || [], [data]);

  const getColumnVisibilityFromColumnOrder = (columnOrder: string[]) => {
    return allTableColumns.reduce((curr, column) => {
      curr[column.id] = columnOrder.length > 0 ? columnOrder.includes(column.id) : true;
      return curr;
    }, {} as VisibilityState);
  };

  const updateActiveLayoutWithLocalChanges = (layout: DataTableLayoutFragment) => {
    const savedLocalChangesStringified = sessionStorage.getItem(
      `${LOCAL_CHANGES_PREFIX}-${tableId}-${selectedWarehouseId}`,
    );

    if (savedLocalChangesStringified) {
      const savedLocalChanges = JSON.parse(savedLocalChangesStringified) as DataTableLayoutFragment;
      if (
        savedLocalChanges.id === layout.id &&
        savedLocalChanges.warehouseId === layout.warehouseId
      ) {
        setFilter([...savedLocalChanges.filter, ...linkedFilter]);
        setSorting(savedLocalChanges.sorting);
        setColumnOrder(savedLocalChanges.columns);
        setColumnVisibility(getColumnVisibilityFromColumnOrder(savedLocalChanges.columns));
        setColumnSizing(savedLocalChanges.columnSizes);
        setPageSize(savedLocalChanges.pageSize);
        setActiveLayout(layout);
        setHasUnsavedChanges(true);
        if (!hasInitializedLayouts) setHasInitializedLayouts(true);
      } else {
        // Local Changes Layout ID or Warehouse ID do not match provided layout, remove local changes from session and update layout normally.
        updateActiveLayout(layout.id);
      }
    } else {
      // No local changes found for tableId, update layout normally.
      updateActiveLayout(layout.id);
    }
  };

  const updateActiveLayout = useCallback(
    (layoutId: string) => {
      // User selected their currently active layout, and has no unsaved changes, we don't need to do anything.
      if (layoutId === activeLayout?.id && !hasUnsavedChanges) return;

      removeLocalChanges();
      pendingLayoutChange.current = true;

      const _DEFAULT_MATCH = { ...DEFAULT_LAYOUT };
      let layoutMatch = _DEFAULT_MATCH;
      if (layoutId) {
        const _layoutMatchFound = [_DEFAULT_MATCH, ...layouts].find((l) => l.id === layoutId);
        if (_layoutMatchFound) {
          layoutMatch = _layoutMatchFound;
          sessionStorage.setItem(
            `${SELECTED_LAYOUT_PREFIX}-${tableId}-${selectedWarehouseId}`,
            layoutMatch.id,
          );
        } else {
          sessionStorage.removeItem(`${SELECTED_LAYOUT_PREFIX}-${tableId}-${selectedWarehouseId}`);
        }
      } else {
        sessionStorage.removeItem(`${SELECTED_LAYOUT_PREFIX}-${tableId}-${selectedWarehouseId}`);
      }

      setFilter([...layoutMatch.filter, ...linkedFilter]);
      setSorting(layoutMatch.sorting);
      setColumnOrder(layoutMatch.columns);
      setColumnVisibility(getColumnVisibilityFromColumnOrder(layoutMatch.columns));
      setColumnSizing(layoutMatch.columnSizes);
      setPageSize(layoutMatch.pageSize);
      setActiveLayout(layoutMatch);

      if (!hasInitializedLayouts) setHasInitializedLayouts(true);
    },
    [hasInitializedLayouts, hasUnsavedChanges, layouts, activeLayout?.id],
  );

  const addLayout: TAddLayoutMethod = (_layoutOptions, _runAfter) => {
    const handleThen = () => {
      if (_runAfter && typeof _runAfter === 'function') _runAfter();
    };

    if (_layoutOptions.variant === LayoutVariant.User) {
      createDataTableUserLayout({
        variables: {
          newLayout: {
            tableId: tableId,
            warehouseId: selectedWarehouseId,
            label: _layoutOptions.layoutLabel,
            columnSizes: currentColumnSizing,
            columns: currentColumnOrder,
            filter: currentFilterWithoutLinks,
            pageSize: currentPageSize,
            sorting: currentSorting,
            userDefault: _layoutOptions.userDefault,
          },
        },
      }).then(handleThen);
    } else if (_layoutOptions.variant === LayoutVariant.Shared) {
      createDataTableSharedLayout({
        variables: {
          newLayout: {
            tableId: tableId,
            warehouseId: selectedWarehouseId,
            label: _layoutOptions.layoutLabel,
            columnSizes: currentColumnSizing,
            columns: currentColumnOrder,
            filter: currentFilterWithoutLinks,
            pageSize: currentPageSize,
            sorting: currentSorting,
            sharedDefault: _layoutOptions.sharedDefault,
            userDefault: _layoutOptions.userDefault,
          },
        },
      }).then(handleThen);
    }
  };

  const updateLayout: TUpdateLayoutMethod = (_runAfter) => {
    if (activeLayout?.id) {
      const updateMutation =
        activeLayout?.variant === LayoutVariant.User
          ? updateDataTableUserLayout
          : updateDataTableSharedLayout;
      updateMutation({
        variables: {
          layoutId: activeLayout?.id,
          updatedLayout: {
            columnSizes: currentColumnSizing,
            columns: currentColumnOrder,
            filter: currentFilterWithoutLinks,
            pageSize: currentPageSize,
            sorting: currentSorting,
          },
        },
      }).then(({ errors }) => {
        if (!errors || errors.length === 0) {
          removeLocalChanges();
        }
        refetchLayouts();
        if (_runAfter && typeof _runAfter === 'function') _runAfter();
      });
    }
  };

  const deleteLayout: TDeleteLayoutMethod = (_layoutId, _layoutVariant, _runAfter) => {
    const deleteMethod =
      _layoutVariant === LayoutVariant.User
        ? deleteDataTableUserLayout
        : deleteDataTableSharedLayout;
    deleteMethod({ variables: { layoutId: _layoutId } }).then(() => {
      refetchLayouts().then(() => {
        if (_layoutId === activeLayout.id) updateActiveLayout(null);
        if (_runAfter && typeof _runAfter === 'function') _runAfter();
      });
    });
  };

  const markLayoutAsUserDefault: TMarkLayoutAsDefaultMethod = (
    _layoutId,
    _markAsDefault,
    _runAfter,
  ) => {
    markLayoutAsUserDefaultMutation({
      variables: {
        layoutId: _layoutId,
        markAsDefault: _markAsDefault,
      },
    }).then(() => {
      refetchLayouts();
      if (_runAfter && typeof _runAfter === 'function') _runAfter();
    });
  };

  useEffect(() => {
    if (!isLayoutsDisabled) {
      fetchDataTableLayouts();
    } else {
      setActiveLayout(DEFAULT_LAYOUT);
      setHasInitializedLayouts(true);
    }
  }, []);

  useDebouncedEffect(
    () => {
      if (hasInitializedLayouts && !pendingLayoutChange.current) {
        if (
          !isEqual(activeLayout?.filter, currentFilterWithoutLinks) ||
          !isEqual(activeLayout?.columnSizes, currentColumnSizing) ||
          !isEqual(activeLayout?.columns, currentColumnOrder) ||
          !isEqual(activeLayout?.pageSize, currentPageSize) ||
          !isEqual(activeLayout?.sorting, currentSorting)
        ) {
          recordLocalChanges();
        } else if (hasUnsavedChanges) {
          removeLocalChanges();
        }
      } else if (hasInitializedLayouts && pendingLayoutChange.current) {
        pendingLayoutChange.current = false;
      }
    },
    250,
    [
      hasInitializedLayouts,
      currentColumnSizing,
      currentColumnOrder,
      currentFilterWithoutLinks,
      currentPageSize,
      currentSorting,
    ],
  );

  return {
    isLoadingLayouts: loading,
    hasUnsavedChanges,
    activeLayout,
    layouts,
    defaultLayout: DEFAULT_LAYOUT,
    setActiveLayout: updateActiveLayout,
    addLayout,
    updateLayout,
    deleteLayout,
    markLayoutAsUserDefault,
  };
}

export default useDataTableLayouts;
