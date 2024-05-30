import { useTranslation } from 'react-i18next';

import { LicensePlateInventoryBaseFragment } from '@/graphql/defs/pages/__generated__/inventory-reconciliation.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import useCreateCancelLicensePlateColumns, {
  TLpBaseInvDataType,
} from '@/components/Table/hooks/shared-columns/useCreateCancelLicensePlateColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { DataTableVariants } from '@/components/Table/types/data-table';

const useCancelLicensePlateDataTable = (
  licensePlateBaseInv: LicensePlateInventoryBaseFragment[],
  licensePlateCode: string,
) => {
  const { t } = useTranslation('components');

  // const addRemoveLicensePlateAction: TColumnFactory<TLpBaseInvDataType> = (columnHelper) => {
  //   return [
  //     columnHelper.display({
  //       id: DataTableDisplayColumns.Delete,
  //       header: '',
  //       cell: ({ row }) => (
  //         <Box position="relative" width="100%">
  //           <IconButton
  //             onClick={() => {
  //               setData((_prev) =>
  //                 _prev.filter((_data) => _data.licensePlateId !== row.original.licensePlateId),
  //               );
  //             }}
  //             styledVariant="dataGrid"
  //             size="small"
  //           >
  //             <DeleteOutline data-testid="remove-license-plate-item" />
  //           </IconButton>
  //         </Box>
  //       ),
  //       size: 40,
  //       enableColumnFilter: false,
  //       enableHiding: false,
  //       enableResizing: false,
  //       enableSorting: false,
  //       enableMultiSort: false,
  //     }),
  //   ];
  // };

  const createCancelLicensePlateColumns = useCreateCancelLicensePlateColumns({
    dataTestId: 'inv-rec-cancel-license-plate',
    //addColumnsToStart: addRemoveLicensePlateAction,
  });
  const columns = useCreateDataTableColumns<TLpBaseInvDataType>(createCancelLicensePlateColumns);

  return {
    dataTableProps: validateDataTableProps<TLpBaseInvDataType>({
      type: 'data',
      tableId: DataTableIds.InvRecCancelLicensePlate,
      tableHeader: `${t('common.licensePlate')} ${licensePlateCode}`,
      columns,
      data: licensePlateBaseInv,
      isDataLoading: false,
      variant: DataTableVariants.BasicBordered,
    }),
  };
};

export default useCancelLicensePlateDataTable;
