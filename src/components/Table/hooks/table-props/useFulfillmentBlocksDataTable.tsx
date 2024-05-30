import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useFulfillmentBlocksTableLazyQuery } from '@/graphql/defs/hooks/table-props/__generated__/useFulfillmentBlocksDataTable.generated';
import { FulfillmentBlockSortFields } from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import createEditRowColumnDef from '@/components/Table/columnDefs/editRow';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useTriggerDataTableRefetch from '@/components/Table/hooks/useTriggerDataTableRefetch';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { ModalTypes } from '@models/modal';

const LAZY_QUERY_HOOK = useFulfillmentBlocksTableLazyQuery;
type _TDataType = TExtractLazyHookDataType<typeof LAZY_QUERY_HOOK>;
type _TFilterType = TExtractLazyHookFetchFilterType<typeof LAZY_QUERY_HOOK>;
type _TFieldNames = TExtractLazyHookFieldNames<typeof LAZY_QUERY_HOOK>;

const useFulfillmentBlocksDataTable = () => {
  const { t } = useTranslation('components');
  const { t: tP } = useTranslation('pages', { keyPrefix: 'settings.fulfillment-block-settings' });
  const { openModal } = useModalToggle();

  const [refetchTrigger, triggerDataTableRefetch] = useTriggerDataTableRefetch();

  const columns = useCreateDataTableColumns<_TDataType>(
    (columnHelper) => {
      const columns = [
        createEditRowColumnDef(columnHelper, (fulfillmentBlock) => {
          openModal(
            {
              type: ModalTypes.fulfillmentBlockUpdate,
              fulfillmentBlock,
            },
            {
              afterClose: (success) => {
                if (success) triggerDataTableRefetch();
              },
            },
          );
        }),
        columnHelper.accessor('label', {
          header: t('common.label'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('description', {
          header: t('common.description'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns;
    },
    [t, openModal, triggerDataTableRefetch],
  );

  const defaultSorting = useMemo<IDataTableSort<_TFieldNames>[]>(
    () => [
      {
        id: FulfillmentBlockSortFields.Label,
        desc: false,
      },
    ],
    [],
  );

  return {
    triggerDataTableRefetch,
    dataTableProps: validateDataTableProps<_TDataType, _TFilterType, _TFieldNames>({
      type: 'query',
      tableId: DataTableIds.FulfillmentBlocks,
      tableHeader: tP('title'),
      columns,
      queryHook: LAZY_QUERY_HOOK,
      defaultSorting,
      refetchTrigger,
    }),
  };
};

export default useFulfillmentBlocksDataTable;
