import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useRearrangementRecommendationDataTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateRearrangementRecommendationColumns.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import StatusTypography from '@components/status-typography';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { SwapSource } from '@models/slotting';

export const REARRANGEMENT_HOOK = useRearrangementRecommendationDataTableLazyQuery;
export type TRearrangementRecommendationDataType = TExtractLazyHookDataType<
  typeof REARRANGEMENT_HOOK
>;
export type TRearrangementRecommendationFilterType = TExtractLazyHookFetchFilterType<
  typeof REARRANGEMENT_HOOK
>;
export type TRearrangementRecommendationFieldNames = TExtractLazyHookFieldNames<
  typeof REARRANGEMENT_HOOK
>;

interface IUseCreateRearrangementRecommendationColumns {
  addColumnsToStart?: TColumnFactory<TRearrangementRecommendationDataType>;
  removeColumns?: (keyof TRearrangementRecommendationDataType)[];
}
const useCreateRearrangementRecommendationColumns = ({
  addColumnsToStart,
  removeColumns = [],
}: IUseCreateRearrangementRecommendationColumns = {}) => {
  const { t } = useTranslation('components');
  const { displayDateTime } = useDateTime();

  const createRearrangementRecommendationColumns = useCallback<
    TColumnFactory<TRearrangementRecommendationDataType>
  >(
    (columnHelper) => {
      const columns = [
        ...(addColumnsToStart ? addColumnsToStart(columnHelper) : []),
        columnHelper.accessor('deployed', {
          header: t('common.deployed'),
          cell: ({ getValue }) => (getValue() ? t('common.yes') : t('common.no')),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => (value ? t('common.yes') : t('common.no')),
            booleanLabels: [t('common.no'), t('common.yes')],
          },
        }),
        columnHelper.accessor('material', {
          header: t('common.productCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('material_description', {
          header: t('common.productDescription'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('movement_reason', {
          header: t('common.reason'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('swap_id', {
          header: t('slotting.swapGroup'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('swap_source', {
          header: t('slotting.swapDependency'),
          cell: ({ getValue }) => {
            const status =
              { Primary: SwapSource.Movement, Secondary: SwapSource.Replacement }[getValue()] ||
              SwapSource.Movement;
            return (
              <StatusTypography
                status={status}
                display={t(`common.${status}`)}
                bold={true}
                uppercase={true}
              />
            );
          },
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(SwapSource).map((status) => ({
              value: SwapSource[status],
              display: t(`common.${status as SwapSource}`),
            })),
            exportFormatter: (value) => {
              const status =
                { Primary: SwapSource.Movement, Secondary: SwapSource.Replacement }[value] ||
                SwapSource.Movement;

              return t(`common.${status as SwapSource}`);
            },
          },
        }),
        columnHelper.accessor('trend_uom', {
          header: t('slotting.orderUom'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('trend_all_quantity', {
          header: t('slotting.orderQuantityCumulative'),
          cell: ({ getValue }) => {
            const v = getValue();
            return v !== null ? Math.round(v * 100) / 100 : null;
          },
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('trend_7_day_quantity', {
          header: t('slotting.orderQuantity7Days'),
          cell: ({ getValue }) => {
            const v = getValue();
            return v !== null ? Math.round(v * 100) / 100 : null;
          },
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('distance_saved', {
          header: t('slotting.distanceSaved'),
          cell: ({ getValue }) => (getValue() || 0).toFixed(2),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('distance_uom', {
          header: t('common.distanceUOM'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('time_saved', {
          header: t('slotting.timeSaved'),
          cell: ({ getValue }) => (getValue() || 0).toFixed(2),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('time_uom', {
          header: t('common.timeUOM'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('cost_saved', {
          header: t('common.costSavedPerDay'),
          cell: ({ getValue }) => `$${(getValue() || 0).toFixed(2)}`,
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('quantity', {
          header: t('common.quantity'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('source_bin', {
          header: t('common.sourceBin'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('destination_bin', {
          header: t('common.destinationBin'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('source_zone_code', {
          header: t('common.sourceZone'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('destination_zone_code', {
          header: t('common.destinationZone'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('deployed_at', {
          header: t('slotting.deployedDate'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('run_name', {
          header: t('slotting.simulation'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('dataset_start_date', {
          header: t('slotting.datasetStartDate'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          minSize: 180,
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('dataset_end_date', {
          header: t('slotting.datasetEndDate'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          minSize: 180,
          meta: {
            columnType: ColumnType.string,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('ruleset_name', {
          header: t('slotting.ruleset'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];
      return columns.filter(
        filterDataTableColumnDefs<TRearrangementRecommendationDataType>(removeColumns),
      );
    },
    [t, displayDateTime, addColumnsToStart, removeColumns],
  );

  return createRearrangementRecommendationColumns;
};

export default useCreateRearrangementRecommendationColumns;
