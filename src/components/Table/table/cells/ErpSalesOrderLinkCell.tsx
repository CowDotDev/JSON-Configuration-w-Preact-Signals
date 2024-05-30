import LinkCell from '@/components/Table/table/cells/LinkCell';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { ModalTypes } from '@models/modal';

interface IErpSalesOrderLinkCell {
  erpSalesOrder: string;
  dataTestId: string;
}
const ErpSalesOrderLinkCell = ({ erpSalesOrder, dataTestId }: IErpSalesOrderLinkCell) => {
  const { openModal } = useModalToggle();

  return (
    <LinkCell
      href={''}
      text={erpSalesOrder}
      onClick={(e) => {
        e.preventDefault();
        openModal({
          type: ModalTypes.salesOrderList,
          salesOrder: erpSalesOrder,
        });
      }}
      dataTestId={`${dataTestId}-sales-order-link`}
    />
  );
};

export default ErpSalesOrderLinkCell;
