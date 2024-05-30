import { useDataTable } from '@/components/Table/context/DataTableProvider';
import PaginationControls from '@/components/Table/pagination/controls';
import PaginationDisabledState from '@/components/Table/pagination/disabled-pagination';
import FooterWrapper from '@/components/Table/pagination/FooterWrapper';
import PaginationLastFetched from '@/components/Table/pagination/last-fetched';

const DataTablePagination = () => {
  const {
    type,
    tableId,
    pagination: {
      disablePagination,
      limit,
      startIndex,
      endIndex,
      totalCount,
      isLoadingTotalCount,
      perPageOptions,
      setPageLimit,
      canPreviousPage,
      canNextPage,
      goToFirstPage,
      goToPrevPage,
      goToNextPage,
      goToLastPage,
    },
    hasCompletedFirstFetch,
    isDataTableLoading,
    dataLastFetched,
    refetchData,
    refetchTotalCount,
  } = useDataTable();

  return (
    <FooterWrapper data-testid={`data-table-${tableId}-pagination-container`}>
      {type === 'query' && (
        <PaginationLastFetched
          dataLastFetched={dataLastFetched}
          isDataTableLoading={isDataTableLoading}
          refetchData={refetchData}
          refetchTotalCount={refetchTotalCount}
          dataTestId={`data-table-${tableId}`}
        />
      )}
      {!hasCompletedFirstFetch || totalCount === 0 ? null : disablePagination ? (
        <PaginationDisabledState
          tableId={tableId}
          isLoadingTotalCount={isLoadingTotalCount}
          totalCount={totalCount}
        />
      ) : (
        <PaginationControls
          tableId={tableId}
          hasCompletedFirstFetch={hasCompletedFirstFetch}
          perPageOptions={perPageOptions}
          limit={limit}
          setPageLimit={setPageLimit}
          startIndex={startIndex}
          endIndex={endIndex}
          isLoadingTotalCount={isLoadingTotalCount}
          totalCount={totalCount}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
        />
      )}
    </FooterWrapper>
  );
};

export default DataTablePagination;
