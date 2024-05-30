import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSlottingAbcAnalysisDataTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateSlottingAbcAnalysisColumns.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import useDateTime from '@hooks/useDateTime';

export const ABC_ANALYSIS_HOOK = useSlottingAbcAnalysisDataTableLazyQuery;
export type TABCAnalysisDataType = TExtractLazyHookDataType<typeof ABC_ANALYSIS_HOOK>;
export type TABCAnalysisFilterType = TExtractLazyHookFetchFilterType<typeof ABC_ANALYSIS_HOOK>;
export type TABCAnalysisFieldNames = TExtractLazyHookFieldNames<typeof ABC_ANALYSIS_HOOK>;

interface IUseCreateSlottingAbcAnalysisColumns {
  addColumnsToStart?: TColumnFactory<TABCAnalysisDataType>;
  removeColumns?: (keyof TABCAnalysisDataType)[];
}
const useCreateSlottingAbcAnalysisColumns = ({
  addColumnsToStart,
  removeColumns = [],
}: IUseCreateSlottingAbcAnalysisColumns = {}) => {
  const { t } = useTranslation('components');
  const { displayDateTime } = useDateTime();

  const createSlottingAbcAnalysisColumns = useCallback<TColumnFactory<TABCAnalysisDataType>>(
    (columnHelper) => {
      const columns = [
        ...(addColumnsToStart ? addColumnsToStart(columnHelper) : []),
        columnHelper.accessor('deployed', {
          header: t('slotting.deployed'),
          cell: ({ getValue }) => (getValue() ? t('common.yes') : t('common.no')),
          meta: {
            columnType: ColumnType.boolean,
            exportFormatter: (value) => (value ? t('common.yes') : t('common.no')),
            booleanLabels: [t('common.no'), t('common.yes')],
          },
        }),
        columnHelper.accessor('material', {
          header: t('slotting.material'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('material_description', {
          header: t('slotting.materialDescription'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('current_abc_indicator', {
          header: t('slotting.currentAbcIndicator'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('proposed_abc_indicator', {
          header: t('slotting.proposedAbcIndicator'),
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
      return columns.filter(filterDataTableColumnDefs<TABCAnalysisDataType>(removeColumns));
    },
    [t, displayDateTime, addColumnsToStart, ...removeColumns],
  );

  return createSlottingAbcAnalysisColumns;
};

export default useCreateSlottingAbcAnalysisColumns;
