import { QueryLazyOptions } from '@apollo/client';
import { DateTime } from 'luxon';
import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { OffsetPageInfo, OffsetPaging } from '@/graphql/types.generated';

import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import applyClientSideFilter from '@/components/Table/lib/apply-client-side-filter';
import applyClientSidePagination from '@/components/Table/lib/apply-client-side-pagination';
import applyClientSideSorting from '@/components/Table/lib/apply-client-side-sorting';
import {
  DefaultDataType,
  DefaultFilterType,
  IAPISort,
  IDataTableData,
  IDataTablePagination,
  IFetchResponseData,
  TFetchDataVariables,
  TGoToPageActions,
  TLazyQueryHook,
} from '@/components/Table/types/data-table';
import { useSnackbar } from '@context/snackbar';
import { useWarehouseUtils } from '@context/warehouse-utils';
import useDebouncedEffect from '@hooks/useDebouncedEffect';
import DeprecatedApplicationFeatureFlagToggles from '@/signals/configuration/deprecatedApplicationFeatureFlagToggles/DeprecatedApplicationFeatureFlagToggles';

const DEFAULT_QUERY_RES: IFetchResponseData<DefaultDataType> = {
  __typename: 'Query',
  query: {
    __typename: 'defaultResponse',
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
    nodes: [],
    totalCount: 0,
  },
};

const SAVED_PAGINATION_PREFIX = 'savedDataTablePagination';
interface ISavedPagination {
  dataTablePagination: OffsetPaging;
  lastUpdated: number;
}
const checkForSavedPagination = (
  tableId: string,
  warehouseId: string,
  savedPaginationTTL: number,
) => {
  const _savedPaginationStringified = sessionStorage.getItem(
    `${SAVED_PAGINATION_PREFIX}-${tableId}-${warehouseId}`,
  );
  if (_savedPaginationStringified) {
    const timeMs = DateTime.now().toMillis();
    const _savedPagination = JSON.parse(_savedPaginationStringified) as ISavedPagination;
    if (timeMs - _savedPagination.lastUpdated <= savedPaginationTTL) {
      sessionStorage.setItem(
        `${SAVED_PAGINATION_PREFIX}-${tableId}-${warehouseId}`,
        JSON.stringify({
          dataTablePagination: _savedPagination.dataTablePagination,
          lastUpdated: DateTime.now().toMillis(),
        }),
      );
      return _savedPagination.dataTablePagination;
    } else {
      sessionStorage.removeItem(`${SAVED_PAGINATION_PREFIX}-${tableId}-${warehouseId}`);
    }
  }
  return null;
};

export const DEFAULT_DATA_TABLE_PAGINATION: IDataTablePagination = {
  disablePagination: false,
  offset: 0,
  limit: 0,
  startIndex: 0,
  endIndex: 0,
  pageCount: 0,
  totalCount: 0,
  isLoadingTotalCount: false,
  perPageOptions: [10],
  goToPage: () => {},
  setPageLimit: () => {},
  canPreviousPage: false,
  canNextPage: false,
  goToFirstPage: () => {},
  goToPrevPage: () => {},
  goToNextPage: () => {},
  goToLastPage: () => {},
};

interface IDataTableDataProps {
  type: 'query' | 'data';
  tableId: DataTableIds;
  clientSideData: DefaultDataType[];
  clientSideDataLoading: boolean;
  queryHook: TLazyQueryHook;
  suppressDataFetch: boolean;
  disablePagination: boolean;
  perPageOptions: number[];
  filter: DefaultFilterType;
  sorting: IAPISort[];
  onFetchComplete?: (data: DefaultDataType) => void;
  hasInitializedLayouts: boolean;
}

const useDataTableData = ({
  type,
  tableId,
  clientSideData,
  clientSideDataLoading,
  queryHook,
  suppressDataFetch,
  disablePagination,
  perPageOptions,
  filter,
  sorting,
  onFetchComplete,
  hasInitializedLayouts,
}: IDataTableDataProps): {
  dataTableData: IDataTableData;
  pagination: IDataTablePagination;
} => {
  const { t } = useTranslation('components', { keyPrefix: 'dataTable' });
  const { selectedWarehouseId } = useWarehouseUtils();
  const applicationFeatureFlags = DeprecatedApplicationFeatureFlagToggles;
  const { showMessage } = useSnackbar();

  const hasCompletedFirstFetch = useRef(false);
  const [isFetchPendingDebounce, setFetchPendingDebounce] = useState(false);

  perPageOptions = perPageOptions.length > 0 ? perPageOptions : [10];
  const [dataTablePagination, setDataTablePagination] = useState<OffsetPaging>({
    offset: 0,
    limit: perPageOptions[0],
  });

  const recordPaginationState = (updateLastUpdatedOnly: boolean = false) => {
    const _stringifiedPagination = sessionStorage.getItem(
      `${SAVED_PAGINATION_PREFIX}-${tableId}-${selectedWarehouseId}`,
    );

    if (updateLastUpdatedOnly && !!_stringifiedPagination) {
      const _pagination = JSON.parse(_stringifiedPagination) as ISavedPagination;
      sessionStorage.setItem(
        `${SAVED_PAGINATION_PREFIX}-${tableId}-${selectedWarehouseId}`,
        JSON.stringify({
          dataTablePagination: _pagination.dataTablePagination,
          lastUpdated: DateTime.now().toMillis(),
        }),
      );
    } else if (!updateLastUpdatedOnly) {
      sessionStorage.setItem(
        `${SAVED_PAGINATION_PREFIX}-${tableId}-${selectedWarehouseId}`,
        JSON.stringify({
          dataTablePagination,
          lastUpdated: DateTime.now().toMillis(),
        }),
      );
    }
  };

  const [persistedTotalCount, setPersistedTotalCount] = useState(0);
  const [isLoadingTotalCount, setIsLoadingTotalCount] = useState(false);
  const [totalCountLastFetched, setTotalCountLastFetched] = useState<number>(null);
  const [fetchServerSideTotalCount] = queryHook({
    onCompleted: ({ query: { totalCount: _totalCount } }) => {
      setPersistedTotalCount(_totalCount || DEFAULT_QUERY_RES?.query?.totalCount);
      setTotalCountLastFetched(new Date().getTime());
    },
    onError: (error) => {
      showMessage({
        type: 'error',
        message: t('errorFetchTotalCount', { errorMessage: error.message }),
      });
    },
    fetchPolicy: 'no-cache',
  });

  const fetchTotalCount = async (opts?: QueryLazyOptions<TFetchDataVariables>) => {
    if (type === 'query') {
      setIsLoadingTotalCount(true);
      await fetchServerSideTotalCount(opts);
      setIsLoadingTotalCount(false);
    }
  };
  const refetchTotalCount = async () => {
    if (type === 'query') {
      await fetchTotalCount({
        variables: {
          includeTotalCount: true,
          includeNodes: false,
          includePageInfo: false,
          filter,
        },
      });
    }
  };

  const [persistedData, setPersistedData] = useState<DefaultDataType[]>([]);
  const [{ hasNextPage, hasPreviousPage }, setPersistedPageInfo] = useState<OffsetPageInfo>(
    DEFAULT_QUERY_RES?.query?.pageInfo,
  );
  const [dataLastFetched, setDataLastFetched] = useState<number>(null);

  const [isLoadingNodes, setIsLoadingNodes] = useState(false);
  const fetchClientSideData = async () => {
    const filteredData = applyClientSideFilter(filter, clientSideData);
    const filteredSortedData = applyClientSideSorting(sorting, filteredData);

    const paginatedData = !disablePagination
      ? applyClientSidePagination(dataTablePagination, filteredSortedData)
      : filteredSortedData;
    setPersistedData(paginatedData || DEFAULT_QUERY_RES?.query?.nodes);
    setPersistedPageInfo(
      (dataTablePagination?.offset || dataTablePagination?.offset === 0) &&
        (dataTablePagination?.limit || dataTablePagination?.limit === 0) &&
        Array.isArray(filteredSortedData) &&
        filteredSortedData.length >= 0
        ? {
            hasNextPage:
              dataTablePagination.offset + dataTablePagination.limit < filteredSortedData.length,
            hasPreviousPage: dataTablePagination.offset > 0,
          }
        : DEFAULT_QUERY_RES?.query?.pageInfo,
    );
    setDataLastFetched(new Date().getTime());

    if (!hasCompletedFirstFetch.current) hasCompletedFirstFetch.current = true;

    setPersistedTotalCount(filteredSortedData.length || DEFAULT_QUERY_RES?.query?.totalCount);
    setTotalCountLastFetched(new Date().getTime());

    if (onFetchComplete) onFetchComplete(filteredSortedData);

    setIsLoadingNodes(false);
  };
  const [fetchServerSideData] = queryHook({
    onCompleted: ({ query: { nodes: _nodes, pageInfo: _pageInfo } }) => {
      setPersistedData(_nodes || DEFAULT_QUERY_RES?.query?.nodes);
      setPersistedPageInfo(_pageInfo || DEFAULT_QUERY_RES?.query?.pageInfo);
      setDataLastFetched(new Date().getTime());

      if (
        !totalCountLastFetched ||
        new Date().getTime() - totalCountLastFetched >=
          applicationFeatureFlags.value.dataTables.totalCountRefreshMs
      ) {
        fetchTotalCount({
          variables: {
            filter: filter,
            includePageInfo: false,
            includeNodes: false,
            includeTotalCount: true,
          },
        });
      }

      if (onFetchComplete) onFetchComplete(_nodes);
      if (!hasCompletedFirstFetch.current) hasCompletedFirstFetch.current = true;

      setIsLoadingNodes(false);
    },
    onError: (error) => {
      showMessage({
        type: 'error',
        message: t('errorFetchData', { errorMessage: error.message }),
      });
    },
    fetchPolicy: 'no-cache',
  });

  const fetchData = async (opts?: QueryLazyOptions<TFetchDataVariables>) => {
    setIsLoadingNodes(true);
    if (type === 'data') {
      await fetchClientSideData();
    } else {
      await fetchServerSideData(opts);
    }
  };
  const refetchData = async () => {
    setIsLoadingNodes(true);
    if (type === 'data') {
      await fetchClientSideData();
    } else {
      await fetchServerSideData({
        variables: {
          includeNodes: true,
          includePageInfo: true,
          includeTotalCount: false,
          filter: filter,
          sorting: sorting,
          paging: dataTablePagination,
        },
      });
    }
  };

  const [fetchServerSideExportData] = queryHook({
    onError: (error) => {
      showMessage({
        type: 'error',
        message: t('errorFetchExport', { errorMessage: error.message }),
      });
    },
    fetchPolicy: 'no-cache',
  });
  const getExportData = useCallback(async () => {
    if (type === 'data') {
      const filteredData = applyClientSideFilter(filter, clientSideData);
      const filteredSortedData = applyClientSideSorting(sorting, filteredData);
      return filteredSortedData;
    } else {
      const { data } = await fetchServerSideExportData({
        variables: {
          filter: filter,
          sorting: sorting,
          includePageInfo: false,
          includeNodes: true,
          includeTotalCount: false,
        },
      });

      return data?.query?.nodes || [];
    }
  }, [clientSideData, fetchServerSideExportData, filter, sorting]);

  const pageCount = Math.ceil(persistedTotalCount / dataTablePagination.limit);
  const goToPage = useCallback(
    (action: TGoToPageActions) => {
      setDataTablePagination((old) => {
        const currPage = Math.ceil(old.offset / old.limit);
        const lastPage = pageCount - 1;
        let newPage;
        switch (action) {
          case 'first':
            newPage = 0;
            break;
          case 'prev':
            newPage = currPage - 1;
            break;
          case 'next':
            newPage = currPage + 1;
            break;
          case 'last':
            newPage = lastPage;
            break;
        }

        if (newPage > lastPage) newPage = lastPage;
        if (newPage < 0) newPage = 0; // Needs to be the last check, so other checks don't potentially set newPage < 0 after this

        return {
          ...old,
          offset: newPage * old.limit,
        };
      });
    },
    [pageCount],
  );

  const setPageLimit = useCallback((limit: number) => {
    setDataTablePagination({
      offset: 0,
      limit,
    });
  }, []);

  const startIndex = dataTablePagination.offset + 1;
  let endIndex = dataTablePagination.offset + dataTablePagination.limit;
  if (endIndex > persistedTotalCount) endIndex = persistedTotalCount;

  const goToFirstPage = useCallback(() => {
    if (!hasPreviousPage) return;
    goToPage('first');
  }, [goToPage, hasPreviousPage]);

  const goToPrevPage = useCallback(() => {
    if (!hasPreviousPage) return;
    goToPage('prev');
  }, [goToPage, hasPreviousPage]);

  const goToNextPage = useCallback(() => {
    if (!hasNextPage) return;
    goToPage('next');
  }, [goToPage, hasNextPage]);

  const goToLastPage = useCallback(() => {
    if (!hasNextPage || !pageCount) return;
    goToPage('last');
  }, [goToPage, hasNextPage, pageCount]);

  useDebouncedEffect(
    () => {
      setIsLoadingNodes(true);
      fetchData({
        variables: {
          paging: {
            offset: dataTablePagination.offset,
            limit: dataTablePagination.limit,
          },
          filter: filter,
          sorting: sorting,
        },
      });
    },
    500,
    [sorting, filter, dataTablePagination, clientSideData],
    {
      shouldRun: !suppressDataFetch && hasCompletedFirstFetch.current,
      setDebouncePending: setFetchPendingDebounce,
    },
  );

  useDebouncedEffect(
    () => {
      if (type === 'query') {
        fetchTotalCount({
          variables: {
            filter: filter,
            includePageInfo: false,
            includeNodes: false,
            includeTotalCount: true,
          },
        });
      }
    },
    500,
    [filter],
    {
      shouldRun: !suppressDataFetch && hasCompletedFirstFetch.current,
    },
  );

  useEffect(() => {
    if (hasCompletedFirstFetch.current && startIndex > endIndex && endIndex > 0) {
      goToPage('last');
    }
  }, [startIndex, endIndex, goToPage]);

  useEffect(() => {
    if (hasCompletedFirstFetch.current) recordPaginationState();
  }, [dataTablePagination]);

  useEffect(() => {
    if (hasCompletedFirstFetch.current) {
      goToFirstPage();
    }
  }, [filter, sorting]);

  useEffect(() => {
    if (
      hasInitializedLayouts &&
      !clientSideDataLoading &&
      !suppressDataFetch &&
      !hasCompletedFirstFetch.current
    ) {
      setIsLoadingNodes(true);
      fetchData({
        variables: {
          paging: {
            offset: dataTablePagination.offset,
            limit: dataTablePagination.limit,
          },
          filter: filter,
          sorting: sorting,
        },
      });
    }
  }, [hasInitializedLayouts, suppressDataFetch, clientSideDataLoading]);

  useEffect(() => {
    const _savedPagination = checkForSavedPagination(
      tableId,
      selectedWarehouseId,
      applicationFeatureFlags.value.dataTables.savedPaginationTTL,
    );
    if (_savedPagination) setDataTablePagination(_savedPagination);

    window.onbeforeunload = () => {
      sessionStorage.removeItem(`${SAVED_PAGINATION_PREFIX}-${tableId}-${selectedWarehouseId}`);
    };

    return () => {
      window.onbeforeunload = null;
      recordPaginationState(true);
    };
  }, []);

  const isDataTableLoading = useMemo(() => {
    if (!hasInitializedLayouts || !hasCompletedFirstFetch.current) return true;
    if (isFetchPendingDebounce || isLoadingNodes) return true;
    if (clientSideDataLoading) return true;

    return false;
  }, [
    type,
    !hasInitializedLayouts,
    !hasCompletedFirstFetch.current,
    isFetchPendingDebounce,
    isLoadingNodes,
    clientSideDataLoading,
  ]);

  return {
    dataTableData: {
      data: persistedData,
      isDataTableLoading,
      hasCompletedFirstFetch: hasCompletedFirstFetch.current,
      dataLastFetched,
      refetchData,
      refetchTotalCount: type === 'query' ? refetchTotalCount : () => {},
      getExportData,
    },
    pagination: {
      disablePagination,
      offset: dataTablePagination.offset,
      limit: dataTablePagination.limit,
      startIndex,
      endIndex,
      pageCount: pageCount,
      totalCount: persistedTotalCount,
      isLoadingTotalCount: isLoadingTotalCount || !totalCountLastFetched,
      perPageOptions,
      goToPage,
      setPageLimit,
      canPreviousPage: hasPreviousPage,
      canNextPage: hasNextPage,
      goToFirstPage,
      goToPrevPage,
      goToNextPage,
      goToLastPage,
    },
  };
};

export default useDataTableData;
