import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DeliveryType } from '@/graphql/types.generated';

const DeliveryTypeCell = ({ deliveryType }: { deliveryType: DeliveryType }) => {
  const { t } = useTranslation('components', { keyPrefix: 'common' });

  return (
    <Typography
      color={(theme) =>
        deliveryType === DeliveryType.Delivery
          ? theme.palette.success.main
          : theme.palette.info.main
      }
    >
      {t(deliveryType, { count: 1 })}
    </Typography>
  );
};

export default DeliveryTypeCell;
