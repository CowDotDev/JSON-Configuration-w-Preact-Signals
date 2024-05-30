import { Row } from '@tanstack/react-table';
import { useEffect, useState } from 'react';

import { DefaultDataType } from '@/components/Table/types/data-table';

interface IUseDebounceDataTableLoading {
  isDataTableLoading: boolean;
  dataRows: Row<DefaultDataType>[];
}
function useDebounceDataTableLoading({
  isDataTableLoading,
  dataRows,
}: IUseDebounceDataTableLoading): [boolean, Row<DefaultDataType>[]] {
  const [debouncedDataTableLoading, setDebouncedDataTableLoading] = useState(isDataTableLoading);
  const [debouncedDataDataRows, setDebouncedDataDataRows] =
    useState<Row<DefaultDataType>[]>(dataRows);

  let debounceTimer = null;
  useEffect(() => {
    clearTimeout(debounceTimer);

    if (isDataTableLoading) setDebouncedDataTableLoading(true);
    if (!isDataTableLoading && debouncedDataTableLoading) {
      debounceTimer = setTimeout(() => {
        setDebouncedDataDataRows(() => {
          setTimeout(() => {
            setDebouncedDataTableLoading(false);
          }, 250);
          return dataRows;
        });
      }, 500);

      return () => {
        clearTimeout(debounceTimer);
      };
    }
  }, [isDataTableLoading, dataRows]);

  return [debouncedDataTableLoading, debouncedDataDataRows];
}

export default useDebounceDataTableLoading;
