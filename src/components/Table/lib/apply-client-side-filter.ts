import { DefaultDataType } from '@/components/Table/types/data-table';
import {
  ColumnFilterBetweenValue,
  ColumnFilterValue,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';

const validateFilter = (
  data: DefaultDataType,
  filterProperty: string,
  filterOperator: FilterOperator,
  filterValue: ColumnFilterValue,
): boolean => {
  switch (filterOperator) {
    case FilterOperator.eq:
    case FilterOperator.is:
      return data[filterProperty] === filterValue;
    case FilterOperator.neq:
    case FilterOperator.isNot:
      return data[filterProperty] !== filterValue;
    case FilterOperator.gt:
      return data[filterProperty] > filterValue;
    case FilterOperator.gte:
      return data[filterProperty] >= filterValue;
    case FilterOperator.lt:
      return data[filterProperty] < filterValue;
    case FilterOperator.lte:
      return data[filterProperty] <= filterValue;
    case FilterOperator.between:
      return (
        data[filterProperty] >= (filterValue as ColumnFilterBetweenValue).lower &&
        data[filterProperty] <= (filterValue as ColumnFilterBetweenValue).upper
      );
    case FilterOperator.notBetween:
      return (
        data[filterProperty] < (filterValue as ColumnFilterBetweenValue).lower ||
        data[filterProperty] > (filterValue as ColumnFilterBetweenValue).upper
      );
    case FilterOperator.iLike:
      return (
        typeof filterValue === 'string' &&
        data[filterProperty].toLowerCase().includes(filterValue.replace(/%/g, '').toLowerCase())
      );
    case FilterOperator.notILike:
      return (
        typeof filterValue === 'string' &&
        !data[filterProperty].toLowerCase().includes(filterValue.replace(/%/g, '').toLowerCase())
      );
    case FilterOperator.in:
      return Array.isArray(filterValue) && filterValue.includes(data[filterProperty]);
    case FilterOperator.notIn:
      return Array.isArray(filterValue) && !filterValue.includes(data[filterProperty]);
    case FilterOperator.isEmpty:
      return data[filterProperty] === null || data[filterProperty] === '';
    case FilterOperator.isNotEmpty:
      return data[filterProperty] !== null && data[filterProperty] !== '';
    default:
      return false;
  }
};

const applyClientSideFilter = (filter: Record<string, any>, data: DefaultDataType[]) => {
  if (!filter) {
    return data;
  }

  const filterKeys = Object.keys(filter);
  if (filterKeys.length === 0) {
    return data;
  }

  const runFilterOnKey = (
    item: DefaultDataType,
    key: string,
    scopedFilter: Record<string, any>,
  ) => {
    if (key === 'and') {
      const _andArray = scopedFilter;
      return _andArray.every((_andFilter) => {
        const _andFilterKey = Object.keys(_andFilter)[0];
        return runFilterOnKey(item, _andFilterKey, _andFilter[_andFilterKey]);
      });
    } else if (key === 'or') {
      const _orArray = scopedFilter;
      return _orArray.some((_orFilter) => {
        const _orFilterKey = Object.keys(_orFilter)[0];
        return runFilterOnKey(item, _orFilterKey, _orFilter[_orFilterKey]);
      });
    } else {
      const _filter = scopedFilter;
      const _filterOperator = Object.keys(_filter)[0] as FilterOperator;
      const _filterValue = _filter[_filterOperator] as ColumnFilterValue;
      return validateFilter(item, key, _filterOperator, _filterValue);
    }
  };

  return data.filter((item) => {
    return filterKeys.every((key) => {
      return runFilterOnKey(item, key, filter[key]);
    });
  });
};

export default applyClientSideFilter;
