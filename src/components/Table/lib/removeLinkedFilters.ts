import { ColumnFilter } from '@components/filter-builder/filter-definitions';

const removeLinkedFilters = (filters: ColumnFilter[] = []) =>
  [...filters].filter((filter) => !('linked' in filter));

export default removeLinkedFilters;
