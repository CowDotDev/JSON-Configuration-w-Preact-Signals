import { LockOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';

import { LicensePlateStatusState } from '@/graphql/types.generated';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { LICENSE_PLATE_DETAILS } from '@constants/routes';
import { warehouseRoute } from '@lib/routes-utils';

interface ILicensePlateLinkCell {
  value: string;
  lpId: string;
  lpStatus: LicensePlateStatusState;
  dataTestId: string;
}
const LicensePlateLinkCell = ({ lpId, lpStatus, value, dataTestId }: ILicensePlateLinkCell) => (
  <Box display="flex" alignItems="center">
    <LinkCell
      href={warehouseRoute(`${LICENSE_PLATE_DETAILS}/${lpId}`)}
      text={value}
      dataTestId={`${dataTestId}-lp-link`}
    />
    {lpStatus === LicensePlateStatusState.Inactive && (
      <LockOutlined
        sx={{ color: (theme) => theme.palette.info.main, marginLeft: (theme) => theme.spacing(2) }}
      />
    )}
  </Box>
);

export default LicensePlateLinkCell;
