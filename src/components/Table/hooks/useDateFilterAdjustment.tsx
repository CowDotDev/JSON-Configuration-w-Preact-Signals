import { DateTime } from 'luxon';
import { useEffect } from 'react';

import {
  ColumnFilterBetweenValue,
  ColumnFilterValue,
  FilterOperator,
} from '@components/filter-builder/filter-definitions';
import useDateTime from '@hooks/useDateTime';

const useDateFilterAdjustment = (
  inputValue: ColumnFilterValue,
  operator: FilterOperator,
  setValue: (value: ColumnFilterValue) => void,
  isDateTime: boolean = false,
) => {
  const { dateTimeToWHTimezone, todaysDateTimeRange } = useDateTime();

  useEffect(() => {
    const today = todaysDateTimeRange[0];
    const typedInputValue = inputValue as ColumnFilterBetweenValue;

    const isBetweenOperatorWithBadInput =
      [FilterOperator.eq, FilterOperator.between, FilterOperator.notBetween].includes(operator) &&
      (!inputValue ||
        inputValue instanceof DateTime ||
        !typedInputValue.lower ||
        !typedInputValue.upper);
    const isNotBetweenOperatorWithBadInput =
      ![FilterOperator.eq, FilterOperator.between, FilterOperator.notBetween].includes(operator) &&
      (!inputValue || !(inputValue instanceof DateTime));

    if (isBetweenOperatorWithBadInput) {
      if (typedInputValue?.lower === null || typedInputValue?.upper === null) {
        setAdjustedValue(today);
      } else {
        setAdjustedValue(inputValue || today);
      }
    } else if (isNotBetweenOperatorWithBadInput) {
      setAdjustedValue(typedInputValue?.lower || today);
    }
  }, [operator]);

  const setAdjustedValue = (date) => {
    const newDate: DateTime = dateTimeToWHTimezone(date);
    if ([FilterOperator.gt, FilterOperator.lte].includes(operator)) {
      setValue(isDateTime ? newDate : newDate.endOf('day'));
    } else if ([FilterOperator.lt, FilterOperator.gte].includes(operator)) {
      setValue(isDateTime ? newDate : newDate.startOf('day'));
    } else if (
      [
        FilterOperator.eq,
        FilterOperator.neq,
        FilterOperator.between,
        FilterOperator.notBetween,
      ].includes(operator)
    ) {
      setValue({
        lower: isDateTime ? newDate : newDate.startOf('day'),
        upper: newDate.endOf('day'),
      });
    }
  };

  return setAdjustedValue;
};

export default useDateFilterAdjustment;
