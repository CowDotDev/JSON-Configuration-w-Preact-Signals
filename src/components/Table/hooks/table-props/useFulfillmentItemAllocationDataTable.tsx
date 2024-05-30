import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AllocableLicensePlateFragment,
  AllocatedLicensePlateFragment,
} from '@/graphql/defs/components/modals/__generated__/fulfillment-item-allocation-modal.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { IDataTableSort } from '@/components/Table/types/data-table';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import QuantityConversionsTooltip from '@components/tooltips/quantity-conversions';
import useDateTime from '@hooks/useDateTime';

const useFulfillmentItemAllocationDataTable = (
  isLoading: boolean,
  fulfillmentItemQuantity: number,
  availableLicensePlates: AllocableLicensePlateFragment[],
  allocatedLicensePlates: AllocatedLicensePlateFragment[],
  autoSelectedLicensePlates?: AllocableLicensePlateFragment[],
) => {
  const { t } = useTranslation('components');
  const { displayDate } = useDateTime();

  const dataTestId = DataTableIds.FulfillmentItemAllocation;

  const [selectionType, setSelectionType] = useState<SelectionType>(SelectionType.multiNoAll);
  const selectionOverride = autoSelectedLicensePlates;
  const { selection, rowSelection } = useDataTableSelection<AllocableLicensePlateFragment>(
    selectionType,
    'licensePlateId',
  );

  const allocatedQuantity = allocatedLicensePlates.reduce(
    (acc, lp) => acc + Number.parseFloat(lp.quantity),
    0,
  );
  const selectionQuantity = selection.reduce(
    (prev, curr) => prev + Number.parseFloat(curr.availableQuantity),
    0,
  );

  useEffect(() => {
    if (allocatedQuantity + selectionQuantity >= fulfillmentItemQuantity) {
      setSelectionType(SelectionType.disabledAllowDeselect);
    } else {
      setSelectionType(SelectionType.multiNoAll);
    }
  }, [allocatedQuantity, selectionQuantity, fulfillmentItemQuantity]);

  const columns = useCreateDataTableColumns<AllocableLicensePlateFragment>(
    (columnHelper) => [
      columnHelper.accessor('licensePlateCode', {
        header: t('columns.licensePlateCode'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
        size: 200,
      }),
      columnHelper.accessor('productCode', {
        header: t('columns.productCode'),
        cell: ({ getValue }) => getValue(),
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
      columnHelper.accessor('lotRestricted', {
        header: t('columns.lotRestricted'),
        cell: ({ getValue }) => (getValue() ? t('common.true') : t('common.false')),
        meta: {
          columnType: ColumnType.boolean,
          exportFormatter: (value) => (value ? t('common.true') : t('common.false')),
        },
      }),
      columnHelper.accessor('lotExpirationDate', {
        header: t('columns.expirationDateAbbr'),
        cell: ({ getValue }) => displayDate({ date: getValue() }),
        meta: {
          columnType: ColumnType.date,
        },
      }),
      columnHelper.accessor('lpLastMovement', {
        header: t('columns.lastMovement'),
        cell: ({ getValue }) => displayDate({ date: getValue() }),
        meta: {
          columnType: ColumnType.date,
        },
      }),
      columnHelper.accessor('binCode', {
        header: t('columns.binCode'),
        cell: ({ getValue }) => getValue() || '',
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('quantityUOMCode', {
        header: t('columns.qtyUom'),
        cell: ({ getValue }) => getValue() || '',
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('lineItemQuantity', {
        header: t('columns.lineItemQty'),
        cell: ({ row, getValue }) =>
          row.original.quantityUOMId ? (
            <QuantityConversionsTooltip
              quantity={getValue() || '0'}
              unitOfMeasureId={row.original.quantityUOMId}
              dataTestId={dataTestId}
            />
          ) : (
            getValue() || '0'
          ),
        meta: {
          columnType: ColumnType.stringRange,
        },
      }),
      columnHelper.accessor('quantity', {
        header: t('columns.assignedQty'),
        cell: ({ row, getValue }) =>
          row.original.quantityUOMId ? (
            <QuantityConversionsTooltip
              quantity={getValue() || '0'}
              unitOfMeasureId={row.original.quantityUOMId}
              dataTestId={dataTestId}
            />
          ) : (
            getValue() || '0'
          ),
        meta: {
          columnType: ColumnType.stringRange,
        },
      }),
      columnHelper.accessor('availableQuantity', {
        header: t('columns.availableQty'),
        cell: ({ row, getValue }) =>
          row.original.quantityUOMId ? (
            <QuantityConversionsTooltip
              quantity={getValue() || '0'}
              unitOfMeasureId={row.original.quantityUOMId}
              dataTestId={dataTestId}
            />
          ) : (
            getValue() || '0'
          ),
        meta: {
          columnType: ColumnType.stringRange,
        },
      }),
      columnHelper.accessor('areaCode', {
        header: t('columns.areaCode'),
        cell: ({ getValue }) => getValue() || '',
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('stockStatusCode', {
        header: t('columns.stockStatus'),
        cell: ({ getValue }) => getValue() || '',
        meta: {
          columnType: ColumnType.string,
        },
      }),
      columnHelper.accessor('ledgerSyncStatus', {
        header: t('columns.ledgerSyncStatus'),
        cell: ({ getValue }) => (getValue() ? t(`enums.ledgerSyncStatus.${getValue()}`) : ''),
        meta: {
          columnType: ColumnType.string,
          exportFormatter: (value) => (value ? t(`enums.ledgerSyncStatus.${value}`) : ''),
        },
      }),
      columnHelper.accessor('licensePlateStatus', {
        header: t('columns.licensePlateStatus'),
        cell: ({ getValue }) => (getValue() ? t(`common.${getValue()}`) : ''),
        meta: {
          columnType: ColumnType.string,
          exportFormatter: (value) => (value ? t(`common.${value}`) : ''),
        },
      }),
      columnHelper.accessor('openTaskCount', {
        header: t('columns.openTaskCount'),
        cell: ({ getValue }) => getValue() || 0,
        meta: {
          columnType: ColumnType.number,
        },
      }),
    ],
    [],
  );

  const defaultSorting: IDataTableSort<keyof AllocableLicensePlateFragment>[] = useMemo(
    () => [
      {
        id: 'lotExpirationDate',
        desc: false,
      },
      {
        id: 'binCode',
        desc: false,
      },
      {
        id: 'lpLastMovement',
        desc: true,
      },
    ],
    [],
  );

  return {
    selectedLicensePlates: selection,
    dataTableProps: validateDataTableProps<AllocableLicensePlateFragment>({
      type: 'data',
      tableId: DataTableIds.FulfillmentItemAllocation,
      tableHeader: t('modal.fulfillmentItem.allocation.tableTitle'),
      columns,
      defaultSorting,
      data: availableLicensePlates,
      isDataLoading: isLoading,
      rowSelection: {
        ...rowSelection,
        selectionOverride,
      },
    }),
  };
};

export default useFulfillmentItemAllocationDataTable;
