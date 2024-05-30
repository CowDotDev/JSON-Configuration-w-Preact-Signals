import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ViewBinSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateBinColumns, {
  BINS_LAZY_HOOK,
  TBinsDataType,
  TBinsFieldNames,
  TBinsFilterType,
} from '@/components/Table/hooks/shared-columns/useCreateBinColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';

const useBinSizeBinsDataTable = (binSizeId: string) => {
  const { t: tP } = useTranslation('pages', { keyPrefix: 'bin-size-details' });

  const createBinColumns = useCreateBinColumns({
    dataTestId: 'bin-size-bins',
    removeColumns: [
      'binSizeCode',
      'binSizeDepth',
      'binSizeWidth',
      'binSizeHeight',
      'binSizeWeightCapacity',
    ],
  });
  const columns = useCreateDataTableColumns(createBinColumns);

  const baseFilter = useMemo<ColumnFilter<TBinsFieldNames>[]>(
    () => [
      {
        columnId: ViewBinSortFields.BinSizeId,
        operator: FilterOperator.eq,
        value: binSizeId,
      },
    ],
    [binSizeId],
  );

  const defaultSorting = useMemo<IDataTableSort<TBinsFieldNames>[]>(
    () => [
      {
        id: ViewBinSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    dataTableProps: validateDataTableProps<TBinsDataType, TBinsFilterType, TBinsFieldNames>({
      type: 'query',
      tableId: DataTableIds.BinSizeBins,
      tableHeader: tP('bins'),
      columns,
      queryHook: BINS_LAZY_HOOK,
      baseFilter,
      defaultSorting,
    }),
  };
};

export default useBinSizeBinsDataTable;
