import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetPutawayTasksDetailsLazyQuery } from '@/graphql/defs/components/modals/__generated__/putaway-task-review-modal.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableEnumList from '@/components/Table/hooks/useDataTableEnumLists';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import QuantityConversionsTooltip from '@components/tooltips/quantity-conversions';

export const TASK_HOOK = useGetPutawayTasksDetailsLazyQuery;
export type TTaskDataType = TExtractLazyHookDataType<typeof TASK_HOOK>;
export type TTaskFilterType = TExtractLazyHookFetchFilterType<typeof TASK_HOOK>;
export type TTaskFieldNames = TExtractLazyHookFieldNames<typeof TASK_HOOK>;

const useCreateReviewPutawayTasksLPColumns = ({
  dataTestId,
  addColumnsToStart,
  removeColumns = [],
}: {
  dataTestId: string;
  addColumnsToStart?: TColumnFactory<TTaskDataType>;
  removeColumns?: (keyof TTaskDataType)[];
}) => {
  const { t } = useTranslation('components');

  const { unitOfMeasureEnumList } = useDataTableEnumList({
    fetchStockStatusTypeList: true,
    fetchUoMList: true,
  });

  const createReviewPutawaysTasksColumns = useCallback<TColumnFactory<TTaskDataType>>(
    (columnHelper) => {
      const columns = [
        ...(addColumnsToStart ? addColumnsToStart(columnHelper) : []),
        columnHelper.accessor('taskCode', {
          header: t('columns.taskCode'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('sourceLicensePlateCode', {
          header: t('columns.licensePlateCode'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
          size: 200,
        }),
        columnHelper.accessor('sourceAreaCode', {
          header: t('common.sourceArea'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('sourceBinCode', {
          header: t('common.sourceBin'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('destinationAreaCode', {
          header: t('columns.destArea'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('destinationBinCode', {
          header: t('columns.destBin'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('productCode', {
          header: t('common.productCode'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('lotCode', {
          header: t('columns.lotCode'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('unitOfMeasure', {
          header: t('columns.uom'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.enum,
            options: unitOfMeasureEnumList,
          },
        }),
        columnHelper.accessor('quantity', {
          header: t('columns.qty'),
          cell: ({ row, getValue }) => (
            <QuantityConversionsTooltip
              quantity={getValue()}
              unitOfMeasureId={row.original.unitOfMeasureId}
              dataTestId={dataTestId}
            />
          ),
          meta: {
            columnType: ColumnType.stringRange,
          },
        }),
        columnHelper.accessor('teamName', {
          header: t('common.team'),
          cell: ({ getValue }) => getValue() || '',
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TTaskDataType>(removeColumns));
    },
    [t, addColumnsToStart, unitOfMeasureEnumList, ...removeColumns],
  );

  return createReviewPutawaysTasksColumns;
};

export default useCreateReviewPutawayTasksLPColumns;
