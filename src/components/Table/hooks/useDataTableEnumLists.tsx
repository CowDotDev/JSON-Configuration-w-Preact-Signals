import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  DataTableBusinessPartnerEnumFragment,
  DataTableStockStatusTypeEnumFragment,
  DataTableTaskTypeEnumFragment,
  DataTableTeamEnumFragment,
  DataTableUomEnumFragment,
  useFetchDataTableEnumListsLazyQuery,
} from '@/graphql/defs/hooks/__generated__/useDataTableEnumList.generated';
import { ColumnFilterEnumOption } from '@components/filter-builder/filter-definitions';
import { useSnackbar } from '@context/snackbar';
import { useWarehouseUtils } from '@context/warehouse-utils';

const sortEnumListByDisplay = (a: ColumnFilterEnumOption, b: ColumnFilterEnumOption) => {
  if (a.display < b.display) {
    return -1;
  }
  if (a.display > b.display) {
    return 1;
  }
  return 0;
};

// Ideally, we will update tables using this hook to use the ID column for each entity type as the accessor column
// This will allow use to remove all the option properties that decide what to use for `value` in the enum lists.
interface IUseDataTableFilterList {
  fetchBusinessPartnerList?: boolean;
  fetchStockStatusTypeList?: boolean;
  fetchTaskTypesList?: boolean;
  fetchTeamsList?: boolean;
  fetchUoMList?: boolean;
  businessPartnerValueKey?: keyof DataTableBusinessPartnerEnumFragment;
  businessPartnerLabelKey?: keyof DataTableBusinessPartnerEnumFragment;
  stockStatusTypeValueKey?: keyof DataTableStockStatusTypeEnumFragment;
  stockStatusTypeLabelKey?: keyof DataTableStockStatusTypeEnumFragment;
  taskTypeValueKey?: keyof DataTableTaskTypeEnumFragment;
  taskTypeLabelKey?: keyof DataTableTaskTypeEnumFragment;
  teamValueKey?: keyof DataTableTeamEnumFragment;
  teamLabelKey?: keyof DataTableTeamEnumFragment;
  uomValueKey?: keyof DataTableUomEnumFragment;
  uomLabelKey?: keyof DataTableUomEnumFragment;
}
const useDataTableEnumList = ({
  fetchBusinessPartnerList = false,
  fetchStockStatusTypeList = false,
  fetchTaskTypesList = false,
  fetchTeamsList = false,
  fetchUoMList = false,
  businessPartnerValueKey = 'name',
  businessPartnerLabelKey = 'name',
  stockStatusTypeValueKey = 'label',
  stockStatusTypeLabelKey = 'label',
  taskTypeValueKey = 'label',
  taskTypeLabelKey = 'label',
  teamValueKey = 'name',
  teamLabelKey = 'name',
  uomValueKey = 'code',
  uomLabelKey = 'code',
}: IUseDataTableFilterList) => {
  const { t } = useTranslation('components');
  const { showMessage } = useSnackbar();
  const { selectedWarehouseId } = useWarehouseUtils();

  const [businessPartnerEnumList, setBusinessPartnerEnumList] = useState<ColumnFilterEnumOption[]>(
    [],
  );
  const [stockStatusTypeEnumList, setStockStatusTypeEnumList] = useState<ColumnFilterEnumOption[]>(
    [],
  );
  const [taskTypeEnumList, setTaskTypeEnumList] = useState<ColumnFilterEnumOption[]>([]);
  const [teamEnumList, setTeamEnumList] = useState<ColumnFilterEnumOption[]>([]);
  const [unitOfMeasureEnumList, setUnitOfMeasureEnumList] = useState<ColumnFilterEnumOption[]>([]);

  const [fetchDataTableEnumList] = useFetchDataTableEnumListsLazyQuery({
    fetchPolicy: 'cache-first',
    onCompleted: ({
      businessPartnerEnumList: businessPartnerEnumListRes,
      stockStatusTypeEnumList: stockStatusTypeEnumListRes,
      taskTypeEnumList: taskTypeEnumListRes,
      teamEnumList: teamEnumListRes,
      uomEnumList: uomEnumListRes,
    }) => {
      if (fetchBusinessPartnerList) {
        const _businessPartners = businessPartnerEnumListRes?.nodes;
        const _businessPartnerEnumList = _businessPartners
          .map((partner) => ({
            value: partner[businessPartnerValueKey],
            display: partner[businessPartnerLabelKey],
          }))
          .sort(sortEnumListByDisplay);
        setBusinessPartnerEnumList(_businessPartnerEnumList);
      }

      if (fetchStockStatusTypeList) {
        const _stockStatusTypes = stockStatusTypeEnumListRes?.nodes;
        const _stockStatusTypeEnumList = _stockStatusTypes
          .map((type) => ({
            value: type[stockStatusTypeValueKey],
            display: type[stockStatusTypeLabelKey],
          }))
          .sort(sortEnumListByDisplay);
        setStockStatusTypeEnumList(_stockStatusTypeEnumList);
      }

      if (fetchTaskTypesList) {
        const _taskTypes = taskTypeEnumListRes?.nodes;
        const _taskTypeEnumList = _taskTypes
          .map((type) => ({
            value: type[taskTypeValueKey],
            display: type[taskTypeLabelKey],
          }))
          .sort(sortEnumListByDisplay);
        setTaskTypeEnumList(_taskTypeEnumList);
      }

      if (fetchTeamsList) {
        const _teams = teamEnumListRes?.nodes;
        const _teamEnumList = _teams
          .map((team) => ({
            value: team[teamValueKey],
            display: team[teamLabelKey],
          }))
          .sort(sortEnumListByDisplay);
        setTeamEnumList(_teamEnumList);
      }

      if (fetchUoMList) {
        const _uoms = uomEnumListRes?.nodes;
        const _uomEnumList = _uoms
          .map((uom) => ({
            value: uom[uomValueKey],
            display: uom[uomLabelKey],
          }))
          .sort(sortEnumListByDisplay);
        setUnitOfMeasureEnumList(_uomEnumList);
      }
    },
    onError: (error) => {
      showMessage({
        type: 'error',
        message: t('dataTable.errorFetchEnumList', { errorMessage: error.message }),
      });
    },
  });

  useEffect(() => {
    fetchDataTableEnumList({
      variables: {
        fetchBusinessPartnerList,
        fetchStockStatusTypeList,
        fetchTaskTypesList,
        fetchTeamsList,
        fetchUoMList,
        warehouseId: selectedWarehouseId,
      },
    });
  }, [
    fetchBusinessPartnerList,
    fetchStockStatusTypeList,
    fetchTaskTypesList,
    fetchTeamsList,
    fetchUoMList,
    selectedWarehouseId,
  ]);

  return {
    businessPartnerEnumList,
    stockStatusTypeEnumList,
    taskTypeEnumList,
    teamEnumList,
    unitOfMeasureEnumList,
  };
};

export default useDataTableEnumList;
