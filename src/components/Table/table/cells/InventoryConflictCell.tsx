import { Typography } from '@mui/material';

const InventoryConflictCell = ({
  ffValue,
  erpValue,
  displayValue = ffValue,
  dataTestId,
}: {
  ffValue: string | number;
  erpValue: string | number;
  displayValue?: string | number;
  dataTestId: string;
}) => {
  const conflictCondition = ffValue && erpValue && ffValue !== erpValue;

  return (
    <Typography
      color={
        conflictCondition
          ? (theme) => theme.palette.error.main
          : (theme) => theme.palette.text.primary
      }
      fontWeight={conflictCondition ? 600 : 400}
      data-testid={`${dataTestId}-inventory-conflict-cell`}
    >
      {displayValue}
    </Typography>
  );
};

export default InventoryConflictCell;
