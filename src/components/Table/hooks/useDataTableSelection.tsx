import { useCallback, useMemo, useState } from 'react';

import { DefaultDataType, IDataTableRowSelection } from '@/components/Table/types/data-table';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiNoAll = 'multiNoAll',
  disabled = 'disabled',
  disabledAllowDeselect = 'disabledAllowDeselect',
}
interface IUseDataTableSelection<DataType extends DefaultDataType = DefaultDataType> {
  selection: DataType[];
  clearSelection: () => void;
  rowSelection: IDataTableRowSelection<DataType>;
}

function useDataTableSelection<DataType extends DefaultDataType = DefaultDataType>(
  selectionType: SelectionType,
  selectionDataKey: keyof DataType,
): IUseDataTableSelection<DataType>;

function useDataTableSelection<DataType extends DefaultDataType = DefaultDataType>(
  selectionType: SelectionType,
  selectionDataKey: keyof DataType,
): IUseDataTableSelection<DataType> {
  // Some implementations of useDataTableSection will not have a selectionType or selectionDataKey, if the selectionType is dynamic.
  // In this case, we want to return an empty selection and a noop clearSelection function.
  const [selection, setSelection] = useState<DataType | DataType[]>(null);
  const memoizedSelection = useMemo(() => selection, [selection]);

  const [clearSelectionTrigger, setClearSelectionTrigger] = useState(false);
  const triggerClearSelection = useCallback(() => {
    setClearSelectionTrigger((trigger) => !trigger);
  }, []);

  if (!selectionType || !selectionDataKey)
    return {
      selection: [],
      clearSelection: () => {},
      rowSelection: undefined,
    };

  return {
    selection: (memoizedSelection as DataType[]) || [],
    clearSelection: triggerClearSelection,
    rowSelection: {
      selectionType,
      setSelectedRowsData: setSelection,
      selectionDataKey,
      clearSelectionTrigger,
    },
  };
}

export default useDataTableSelection;
