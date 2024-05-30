import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useUomGlossaryTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useUnitOfMeasureGlossaryDataTable.generated';
import { UnitOfMeasureGlossarySortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import {
  ColumnFilter,
  ColumnType,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { ModalTypes } from '@models/modal';

const LAZY_QUERY_HOOK = useUomGlossaryTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useUnitOfMeasureGlossaryDataTable = (selectedCompanyId: string) => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.uomGlossary' });
  const { t: tC } = useTranslation('components', { keyPrefix: 'common' });
  const { openModal } = useModalToggle();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const openUoMGlossaryModal = useCallback(
    (unitOfMeasure: _TDataType) => {
      openModal(
        {
          type: ModalTypes.unitOfMeasureGlossary,
          unitOfMeasure,
        },
        {
          afterClose: (success) => {
            if (success) triggerDataTableRefetch();
          },
        },
      );
    },
    [openModal, triggerDataTableRefetch],
  );

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => {
      const _columns = [
        // createEditRowColumnDef(columnHelper, (uom) => {
        //   openUoMGlossaryModal(uom);
        // }),
        columnHelper.accessor('code', {
          header: tC('uomCode'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('label', {
          header: tC('label'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('description', {
          header: tC('description'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('measurementSystem', {
          header: tC('measurementSystem'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('category', {
          header: tC('category'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return _columns;
    },
    [tC, openUoMGlossaryModal],
  );

  const baseFilter = useMemo<ColumnFilter<_TFieldNames>[]>(
    () => [
      {
        or: [
          {
            columnId: UnitOfMeasureGlossarySortFields.CompanyId,
            operator: FilterOperator.eq,
            value: selectedCompanyId,
          },
          {
            columnId: UnitOfMeasureGlossarySortFields.MeasurementSystem,
            operator: FilterOperator.isNotEmpty,
          },
        ],
      },
    ],
    [selectedCompanyId],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: UnitOfMeasureGlossarySortFields.Code,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.UnitOfMeasureGlossary,
      tableHeader: t('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      baseFilter,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useUnitOfMeasureGlossaryDataTable;
