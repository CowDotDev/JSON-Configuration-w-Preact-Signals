import { IDisplayFunc } from '@lib/date';

export const formatDate = (displayDateTime: IDisplayFunc) => (row, column) =>
  displayDateTime({ date: row[column.accessor] });
