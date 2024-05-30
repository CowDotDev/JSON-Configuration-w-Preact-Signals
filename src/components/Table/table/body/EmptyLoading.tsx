import CellLoading from '@/components/Table/table/cells/CellLoading';
import StyledCell from '@/components/Table/table/shared-styled/StyledCell';
import StyledRow from '@/components/Table/table/shared-styled/StyledRow';

const DataTableEmptyLoading = ({ numberOfColumns }: { numberOfColumns: number }) => {
  const columnsRowOne = [];
  const columnsRowTwo = [];

  for (let i = 0; i < numberOfColumns; i++) {
    columnsRowOne.push(
      <StyledCell key={`rowOne-${i}`}>
        <CellLoading />
      </StyledCell>,
    );
    columnsRowTwo.push(
      <StyledCell key={`rowTwo-${i}`}>
        <CellLoading />
      </StyledCell>,
    );
  }

  return (
    <>
      <StyledRow>{columnsRowOne}</StyledRow>
      <StyledRow>{columnsRowTwo}</StyledRow>
    </>
  );
};

export default DataTableEmptyLoading;
