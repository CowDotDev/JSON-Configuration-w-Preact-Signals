import { OffsetPaging } from '@/graphql/types.generated';
import { DefaultDataType } from '@/components/Table/types/data-table';

const applyClientSidePagination = (pagination: OffsetPaging, data: DefaultDataType[]) => {
  if (!pagination) {
    return data;
  }

  const { limit, offset } = pagination;
  return data.slice(offset, offset + limit);
};

export default applyClientSidePagination;
