import { CircularProgress } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;