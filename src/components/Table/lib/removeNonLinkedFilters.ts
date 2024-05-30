import { ColumnFilter } from '@components/filter-builder/filter-definitions';

const removeNonLinkedFilters = (filters: ColumnFilter[]) =>
  [...filters].filter((filter) => 'linked' in filter);

export default removeNonLinkedFilters;
