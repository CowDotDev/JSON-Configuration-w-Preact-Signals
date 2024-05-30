import { DateTime } from 'luxon';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { DefaultFieldNames } from '@/components/Table/types/data-table';
import { FilterOperator, LinkedColumnFilter } from '@components/filter-builder/filter-definitions';

function useCreateLinkedDateRangeFilter<_TFieldNames = DefaultFieldNames>(
  columnId: _TFieldNames,
  linkedDateRange: [DateTime, DateTime],
) {
  const { t } = useTranslation('components');

  return useMemo<LinkedColumnFilter<_TFieldNames>[]>(() => {
    const isValidLowerBound =
      !!linkedDateRange[0] && DateTime.isDateTime(linkedDateRange[0]) && linkedDateRange[0].isValid;
    const isValidUpperBound =
      !!linkedDateRange[1] && DateTime.isDateTime(linkedDateRange[1]) && linkedDateRange[1].isValid;
    if (isValidLowerBound && isValidUpperBound) {
      return [
        {
          linked: true,
          columnId,
          operator: FilterOperator.between,
          value: {
            lower: linkedDateRange[0],
            upper: linkedDateRange[1],
          },
          linkedTooltip: t('dataTable.linkedFilterTooltips.pageDateRange'),
        },
      ];
    } else if (isValidLowerBound && !isValidUpperBound) {
      return [
        {
          linked: true,
          columnId,
          operator: FilterOperator.gte,
          value: linkedDateRange[0],
          linkedTooltip: t('dataTable.linkedFilterTooltips.pageDateRange'),
        },
      ];
    } else if (!isValidLowerBound && isValidUpperBound) {
      return [
        {
          linked: true,
          columnId,
          operator: FilterOperator.lte,
          value: linkedDateRange[1],
          linkedTooltip: t('dataTable.linkedFilterTooltips.pageDateRange'),
        },
      ];
    }
    return [];
  }, [linkedDateRange]);
}

export default useCreateLinkedDateRangeFilter;
