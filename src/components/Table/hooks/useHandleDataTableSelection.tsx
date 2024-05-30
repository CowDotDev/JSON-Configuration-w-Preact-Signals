import { RowSelectionState } from '@tanstack/react-table';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { SelectionType } from '@/components/Table/hooks/useDataTableSelection';
import { DefaultDataType } from '@/components/Table/types/data-table';

type IUseHandledatatableSelectionResponse = {
  persistedSelectedRows: Record<string, DefaultDataType>;
  clearSelection: () => void;
};

type IUseHandleQueryBasedSelectionProps = {
  data: DefaultDataType[];
  selectionType: SelectionType;
  selectionDataKey: string;
  selectionOverride: DefaultDataType[];
  selectedVisibleRows: RowSelectionState;
  setSelectedVisibleRows: Dispatch<SetStateAction<RowSelectionState>>;
  setSelectedRowsData: Dispatch<SetStateAction<DefaultDataType | DefaultDataType[]>>;
  hasCompletedFirstFetch: boolean;
  clearSelectionTrigger: boolean;
};

const useHandleDataTableSelection = ({
  data,
  selectionType,
  selectionDataKey,
  selectionOverride,
  selectedVisibleRows,
  setSelectedVisibleRows,
  setSelectedRowsData,
  hasCompletedFirstFetch,
  clearSelectionTrigger,
}: IUseHandleQueryBasedSelectionProps): IUseHandledatatableSelectionResponse => {
  const [selectedVisibleRowKeys, setSelectedVisibleRowKeys] = useState<string[]>([]);

  // TODO: Potenitally look at refactoring the whole rowSelection to only store the row's PK value.
  // I don't love storing the whole row in state, but it makes it easier and is how it has been used in the past.
  // Refactor would have to include updating any usages that use more than just the selctions PK value. ~Zach
  const [persistedSelectedRows, setPersistedSelectedRows] = useState<
    Record<string, DefaultDataType>
  >({});

  const clearSelection = () => {
    setSelectedVisibleRowKeys(() => {
      setSelectedVisibleRows({});
      setPersistedSelectedRows({});
      return [];
    });
  };

  const resetVisibleSelection = (_overrides?: Record<string, DefaultDataType>) => {
    if (selectionType) {
      const _visibleKeys = [];
      const _visibleRows = {};
      const _selectedRowsData = _overrides || persistedSelectedRows;
      data.forEach((_row, _index) => {
        const _key = _row[selectionDataKey];
        if (_key && !!_selectedRowsData[_key]) {
          _visibleKeys.push(_key);
          _visibleRows[_index] = true;
        }
      });

      setSelectedVisibleRowKeys(() => {
        setSelectedVisibleRows(_visibleRows);
        return _visibleKeys;
      });
    }
  };

  // When selectedVisibleRows updates
  useEffect(() => {
    if (selectionType) {
      const _persistedSelectedRows = { ...persistedSelectedRows };
      const _visibleKeys = [];
      Object.keys(selectedVisibleRows).forEach((selectedRowIndex) => {
        if (!!data[selectedRowIndex] && data[selectedRowIndex][selectionDataKey]) {
          const _key = data[selectedRowIndex][selectionDataKey];
          if (!_persistedSelectedRows[_key]) {
            _persistedSelectedRows[_key] = data[selectedRowIndex];
          }
          _visibleKeys.push(_key);
        }
      });

      if (selectedVisibleRowKeys.length > 0) {
        selectedVisibleRowKeys.forEach((key) => {
          // Selection was removed, remove key from _persistedSelectedRows
          if (!_visibleKeys.includes(key) && _persistedSelectedRows[key]) {
            delete _persistedSelectedRows[key];
          }
        });
      }

      setSelectedVisibleRowKeys(_visibleKeys);
      setPersistedSelectedRows(_persistedSelectedRows);
    }
  }, [selectedVisibleRows, selectionType]);

  useEffect(() => {
    if (selectionType && setSelectedRowsData)
      setSelectedRowsData(Object.values(persistedSelectedRows));
  }, [persistedSelectedRows]);

  useEffect(() => {
    // Re-calculate if any selected rows are visible.
    if (selectionType && hasCompletedFirstFetch) {
      resetVisibleSelection();
    }
  }, [data, selectionType]);

  useEffect(() => {
    // Reset selected rows to the selection override.
    if (hasCompletedFirstFetch && selectionOverride) {
      const _overridenSelectedRows = {};
      selectionOverride.forEach((_row) => {
        if (_row[selectionDataKey]) _overridenSelectedRows[_row[selectionDataKey]] = _row;
      });

      setPersistedSelectedRows(_overridenSelectedRows);
      resetVisibleSelection(_overridenSelectedRows);
    }
  }, [hasCompletedFirstFetch, selectionOverride]);

  const [hasSelectionInitialized, setHasSelectionInitialized] = useState(false);
  useEffect(() => {
    if (selectionType) {
      if (hasSelectionInitialized) {
        clearSelection();
      } else {
        setHasSelectionInitialized(true);
      }
    }
  }, [clearSelectionTrigger]);

  return { persistedSelectedRows, clearSelection };
};

export default useHandleDataTableSelection;
