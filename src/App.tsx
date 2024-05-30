import './i18n';

import { ErrorBoundary } from './components/ErrorBoundary';
import { Router } from './components/Router';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
