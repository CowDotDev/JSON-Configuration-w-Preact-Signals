import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProductWarehouseUoMFragment } from '@/graphql/defs/pages/__generated__/product.generated';
import { ViewUnitOfMeasureProductConversionSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateUnitOfMeasurementColumns, {
  TUomDataType,
  TUomFieldNames,
  TUomFilterType,
  UOM_HOOK,
} from '@/components/Table/hooks/shared-columns/useCreateUnitOfMeasurementColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnFilter, FilterOperator } from '@components/filter-builder/filter-definitions';

const useProductDetailsUOMDataTable = (productId: string, whUom: ProductWarehouseUoMFragment) => {
  const { t } = useTranslation('pages', { keyPrefix: 'product-details' });

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const createUomColumns = useCreateUnitOfMeasurementColumns({ whUomId: whUom?.unitOfMeasureId });
  const columns = useCreateDataTableColumns<TUomDataType>(createUomColumns);

  const baseFilter = useMemo<ColumnFilter<TUomFieldNames>[]>(
    () => [
      {
        columnId: ViewUnitOfMeasureProductConversionSortFields.ProductId,
        operator: FilterOperator.eq,
        value: productId,
      },
    ],
    [productId],
  );

  const defaultSorting = useMemo<IDataTableSort<TUomFieldNames>[]>(
    () => [
      {
        id: ViewUnitOfMeasureProductConversionSortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerProductDetailsUOMDataTableRefetch: triggerDataTableRefetch,
    productDetailsUOMDataTableProps: validateDataTableProps<
      TUomDataType,
      TUomFilterType,
      TUomFieldNames
    >({
      type: 'query',
      tableId: DataTableIds.ProductDetailsUOM,
      tableHeader: t('uomDimensions'),
      columns,
      queryHook: UOM_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useProductDetailsUOMDataTable;
