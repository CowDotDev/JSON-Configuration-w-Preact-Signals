import { DataTableIds } from '@/signals/configuration/enums/DataTableIds';
import PaginationPageControls from '@/components/Table/pagination/controls/PageControls';
import PaginationPageCountInfo from '@/components/Table/pagination/controls/PageCountInfo';
import PaginationResultsPerPage from '@/components/Table/pagination/controls/ResultsPerPage';

const PaginationControls = ({
  tableId,
  hasCompletedFirstFetch,
  perPageOptions,
  limit,
  setPageLimit,
  startIndex,
  endIndex,
  isLoadingTotalCount,
  totalCount,
  canNextPage,
  canPreviousPage,
  goToFirstPage,
  goToLastPage,
  goToNextPage,
  goToPrevPage,
}: {
  tableId: DataTableIds;
  hasCompletedFirstFetch: boolean;
  perPageOptions: number[];
  limit: number;
  setPageLimit: (limit: number) => void;
  startIndex: number;
  endIndex: number;
  isLoadingTotalCount: boolean;
  totalCount: number;
  canNextPage: boolean;
  canPreviousPage: boolean;
  goToFirstPage: () => void;
  goToLastPage: () => void;
  goToNextPage: () => void;
  goToPrevPage: () => void;
}) => {
  return (
    <>
      <PaginationResultsPerPage
        tableId={tableId}
        perPageOptions={perPageOptions}
        limit={limit}
        setPageLimit={setPageLimit}
      />
      <PaginationPageCountInfo
        tableId={tableId}
        hasCompletedFirstFetch={hasCompletedFirstFetch}
        startIndex={startIndex}
        endIndex={endIndex}
        isLoadingTotalCount={isLoadingTotalCount}
        totalCount={totalCount}
      />
      <PaginationPageControls
        tableId={tableId}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
      />
    </>
  );
};

export default PaginationControls;
