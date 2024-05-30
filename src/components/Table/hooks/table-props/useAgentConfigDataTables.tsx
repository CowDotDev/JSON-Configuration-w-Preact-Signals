import { ApolloQueryResult } from '@apollo/client';
import { DeleteForever, EditOutlined } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AgentConfigurationsQuery,
  useAgentConfigurationsLazyQuery,
  useDeleteOneAgentConfigurationMutation,
} from '@/graphql/defs/hooks/table-props/__generated__/useAgentListDataTable.generated';
import {
  AgentConfigStatus,
  AgentConfiguration,
  AgentConfigurationAccessPolicy,
  AgentConfigurationHost,
} from '@/graphql/types.generated';
import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import { DataTableDisplayColumns } from '@/components/Table/columnDefs/displayColumns';
import useCreateDataTableColumns from '@/components/Table/hooks/useCreateDataTableColumns';
import useDataTableSelection, {
  SelectionType,
} from '@/components/Table/hooks/useDataTableSelection';
import { validateDataTableProps } from '@/components/Table/lib/validateDataTableProps';
import { ColumnType } from '@components/filter-builder/filter-definitions';
import { useModalToggle } from '@context/modal/ModalToggleProvider';
import { useSnackbar } from '@context/snackbar';
import enumKeys from '@lib/enum-keys';
import { ModalTypes } from '@models/modal';

const EditAgentButton = ({
  agent,
  refetch,
}: {
  agent: AgentConfiguration;
  refetch: (...args) => Promise<ApolloQueryResult<AgentConfigurationsQuery>>;
}) => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.agentConfig' });
  const { openModal } = useModalToggle();

  return (
    <IconButton
      onClick={() =>
        openModal(
          {
            type: ModalTypes.agentConfig,
            agentConfig: agent,
            title: t('agentConfiguration'),
          },
          {
            afterClose: (success) => {
              if (success) {
                refetch();
              }
            },
          },
        )
      }
      size="small"
    >
      <EditOutlined color="primary" />
    </IconButton>
  );
};

const DeleteAgentButton = ({
  agent,
  refetch,
}: {
  agent: AgentConfiguration;
  refetch: (...args) => Promise<ApolloQueryResult<AgentConfigurationsQuery>>;
}) => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.agentConfig' });
  const { openModal } = useModalToggle();
  const { showMessage } = useSnackbar();
  const [deleteAgent] = useDeleteOneAgentConfigurationMutation();

  return (
    <IconButton
      onClick={() => {
        openModal(
          {
            type: ModalTypes.confirmation,
            title: t('deleteAgent'),
            message: t('areYouSureYouWantToDeleteAnAgent'),
            confirmButtonColor: 'error',
            onConfirm: (closeModal) => {
              deleteAgent({
                variables: { agentId: agent.agentId },
                onCompleted: () => {
                  closeModal({ bypassLoading: true, success: true });
                },
                onError: (error) => {
                  showMessage({ type: 'error', message: error.message });
                  closeModal({ bypassLoading: true, success: false });
                },
              });
            },
            onCancel: (closeModal) => {
              closeModal();
            },
          },
          {
            afterClose: (success) => {
              if (success) {
                refetch();
              }
            },
          },
        );
      }}
      size="small"
    >
      <DeleteForever color="primary" />
    </IconButton>
  );
};

const useAgentConfigDataTables = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'settings.agentConfig' });
  const { t: tC } = useTranslation('components');
  const { showMessage } = useSnackbar();

  const [agentList, setAgentList] = useState<AgentConfiguration[]>([]);
  const [proxyUrl, setProxyUrl] = useState<string>('');
  const [fetchAgentList, { loading, refetch }] = useAgentConfigurationsLazyQuery({
    fetchPolicy: 'cache-first',
    onCompleted: ({ agentConfigurations: { agents: _agents, proxyUrl: _proxyUrl } }) => {
      setAgentList(_agents);
      setProxyUrl(_proxyUrl);
    },
    onError: (error) => {
      showMessage({
        type: 'error',
        message: error.message,
      });
    },
  });
  useEffect(() => {
    fetchAgentList();
  }, []);

  const { selection: selectedAgent, rowSelection } = useDataTableSelection<AgentConfiguration>(
    SelectionType.single,
    'agentId',
  );

  const agentListColumns = useCreateDataTableColumns<AgentConfiguration>(
    (alColumnHelper) => [
      alColumnHelper.display({
        id: DataTableDisplayColumns.Options,
        header: tC('common.actions'),
        cell: ({ row }) => (
          <Box>
            <EditAgentButton agent={row.original} refetch={refetch} />
            <DeleteAgentButton agent={row.original} refetch={refetch} />
          </Box>
        ),
        size: 105,
        enableColumnFilter: false,
        enableHiding: false,
        enableResizing: false,
        enableSorting: false,
        enableMultiSort: false,
      }),
      alColumnHelper.accessor('status', {
        header: tC('common.status'),
        cell: ({ getValue }) => t(`status.${getValue()}`),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(AgentConfigStatus).map((status) => ({
            value: AgentConfigStatus[status],
            display: t(`status.${AgentConfigStatus[status]}`),
          })),
          exportFormatter: (value) => t(`status.${value}`),
        },
      }),
      alColumnHelper.accessor('agentName', {
        header: t('columns.agentName'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      alColumnHelper.accessor('version', {
        header: t('columns.version'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      alColumnHelper.accessor('agentId', {
        header: t('columns.agentId'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
    ],
    [refetch],
  );

  const agentHostColumns = useCreateDataTableColumns<AgentConfigurationHost>(
    (ahColumnHelper) => [
      ahColumnHelper.accessor('hostname', {
        header: t('columns.erpHost'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      ahColumnHelper.accessor('port', {
        header: t('columns.erpPort'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      ahColumnHelper.accessor('path', {
        header: t('columns.uriPath'),
        cell: ({ getValue }) => getValue(),
        meta: {
          columnType: ColumnType.string,
        },
      }),
      ahColumnHelper.accessor('accessPolicy', {
        header: t('columns.access'),
        cell: ({ getValue }) => t(`${getValue()}`),
        meta: {
          columnType: ColumnType.enum,
          options: enumKeys(AgentConfigurationAccessPolicy).map((policy) => ({
            value: AgentConfigurationAccessPolicy[policy],
            display: t(`${AgentConfigurationAccessPolicy[policy]}`),
          })),
          exportFormatter: (value) => t(`${value}`),
        },
      }),
    ],
    [],
  );

  const selectionOverride = useMemo<AgentConfiguration[]>(() => {
    if (agentList.length > 0) {
      return [agentList[0]];
    }
    return [];
  }, [agentList]);

  return useMemo(
    () => ({
      selectedAgent,
      refetchAgents: refetch,
      proxyUrl: proxyUrl,
      agentListProps: validateDataTableProps<AgentConfiguration>({
        type: 'data',
        tableId: DataTableIds.AgentList,
        tableHeader: t('agentList'),
        columns: agentListColumns,
        data: agentList,
        isDataLoading: loading,
        rowSelection: {
          ...rowSelection,
          selectionOverride,
        },
      }),
      agentHostProps: validateDataTableProps<AgentConfigurationHost>({
        type: 'data',
        tableId: DataTableIds.AgentHost,
        tableHeader: selectedAgent?.[0]?.agentName || t('selectAgentToViewHosts'),
        columns: agentHostColumns,
        data: selectedAgent?.[0]?.hosts || [],
        isDataLoading: loading,
      }),
    }),
    [agentList, proxyUrl, selectedAgent, loading, agentListColumns, agentHostColumns],
  );
};

export default useAgentConfigDataTables;
