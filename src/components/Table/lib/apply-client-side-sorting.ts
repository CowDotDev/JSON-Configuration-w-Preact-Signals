import { DefaultDataType, IAPISort } from '@/components/Table/types/data-table';

const applyClientSideSorting = (
  sorting: IAPISort<string> | IAPISort<string>[],
  data: DefaultDataType[],
) => {
  if (!sorting || (Array.isArray(sorting) && !sorting.length)) {
    return data;
  }

  const sortedData = [...data].sort((a, b) => {
    const performSort = (sort) => {
      const aValue = a[sort.field];
      const bValue = b[sort.field];
      if (aValue === null || aValue === undefined) {
        return sort.nulls === 'NULLS_LAST' ? 1 : -1;
      }
      if (bValue === null || bValue === undefined) {
        return sort.nulls === 'NULLS_LAST' ? -1 : 1;
      }
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const compareResult = aValue.localeCompare(bValue);
        if (compareResult !== 0) {
          return sort.direction === 'ASC' ? compareResult : -compareResult;
        }
      } else {
        const compareResult = aValue - bValue;
        if (compareResult !== 0) {
          return sort.direction === 'ASC' ? compareResult : -compareResult;
        }
      }
    };

    if (Array.isArray(sorting)) {
      for (const _sort of sorting) {
        const _sortValue = performSort(_sort);
        if (_sortValue !== undefined) {
          return _sortValue;
        }
      }
    } else {
      const _sortValue = performSort(sorting);
      if (_sortValue !== undefined) {
        return _sortValue;
      }
    }

    return 0;
  });

  return sortedData;
};

export default applyClientSideSorting;
