import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useRulesetsTableLazyQuery } from '@/graphql/defs/hooks/shared-columns/__generated__/useCreateRulesetColumns.generated';
import { RulesetStatus } from '@/graphql/types.generated';
import { TColumnFactory } from '@/components/Table/hooks/useCreateDataTableColumns';
import filterDataTableColumnDefs from '@/components/Table/lib/filterDataTableColumnDefs';
import {
  TExtractLazyHookDataType,
  TExtractLazyHookFetchFilterType,
  TExtractLazyHookFieldNames,
} from '@/components/Table/types/extract-query-hook-types';
import LinkCell from '@/components/Table/table/cells/LinkCell';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import RulesetStatusCell from '@components/slotting/rulesets/ruleset-status-cell';
import { SLOTTING_RULESET } from '@constants/routes';
import useDateTime from '@hooks/useDateTime';
import enumKeys from '@lib/enum-keys';
import { warehouseRoute } from '@lib/routes-utils';

export const RULE_SETS_HOOK = useRulesetsTableLazyQuery;
export type TRulesetsDataType = TExtractLazyHookDataType<typeof RULE_SETS_HOOK>;
export type TRulesetsFilterType = TExtractLazyHookFetchFilterType<typeof RULE_SETS_HOOK>;
export type TRulesetsFieldNames = TExtractLazyHookFieldNames<typeof RULE_SETS_HOOK>;

interface ICreatedRulesetColumns {
  triggerDataTableRefetch?: () => void;
  removeColumns?: (keyof TRulesetsDataType)[];
}
const useCreateRulesetColumns = ({
  triggerDataTableRefetch,
  removeColumns = [],
}: ICreatedRulesetColumns = {}) => {
  const { t } = useTranslation('pages', { keyPrefix: 'rulesets' });
  const { t: tC } = useTranslation('components');

  const { displayDateTime } = useDateTime();

  const createRulesetColumns = useCallback<TColumnFactory<TRulesetsDataType>>(
    (columnHelper) => {
      const columns = [
        columnHelper.accessor('name', {
          header: t('columns.ruleset'),
          cell: ({ row, getValue }) => (
            <LinkCell
              href={warehouseRoute(`${SLOTTING_RULESET}/${row.original.id}`)}
              text={getValue()}
              dataTestId="ruleset-name"
            />
          ),
          meta: {
            columnType: ColumnType.string,
          },
        }),
        columnHelper.accessor('rulesetStatus', {
          header: t('columns.status'),
          cell: ({ getValue, row }) => (
            <RulesetStatusCell
              rulesetId={row.original.id}
              status={getValue()}
              triggerDataTableRefetch={triggerDataTableRefetch}
              dataTestId="ruleset-status"
            />
          ),
          meta: {
            columnType: ColumnType.enum,
            options: enumKeys(RulesetStatus).map((status) => ({
              value: RulesetStatus[status],
              display: tC(`common.${RulesetStatus[status]}`),
            })),
            exportFormatter: (value) => tC(`common.${value}`),
          },
        }),
        columnHelper.accessor('lastUpdated', {
          header: t('columns.lastUpdated'),
          cell: ({ getValue }) => displayDateTime({ date: getValue() }),
          meta: {
            columnType: ColumnType.dateTime,
            exportFormatter: (value) => displayDateTime({ date: value }),
          },
        }),
        columnHelper.accessor('runCount', {
          header: t('columns.runCount'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.number,
          },
        }),
        columnHelper.accessor('createdBy', {
          header: t('columns.createdBy'),
          cell: ({ getValue }) => getValue(),
          meta: {
            columnType: ColumnType.string,
          },
        }),
      ];

      return columns.filter(filterDataTableColumnDefs<TRulesetsDataType>(removeColumns));
    },
    [...removeColumns],
  );

  return createRulesetColumns;
};

export default useCreateRulesetColumns;
