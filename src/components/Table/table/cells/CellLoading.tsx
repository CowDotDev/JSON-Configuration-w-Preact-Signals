import LoadingBlob from '@components/loading-indicator/LoadingBlob';

const CellLoading = () => {
  return (
    <LoadingBlob
      sx={{
        width: '66%',
        height: (theme) => theme.spacing(4),
        borderRadius: (theme) => theme.spacing(4),
      }}
    />
  );
};

export default CellLoading;
