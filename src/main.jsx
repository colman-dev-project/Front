import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { router } from './Router';
import { ThemeProvider } from '@mui/system';
import theme from './theme/theme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { initializeAuth } from './utils/jwt';

initializeAuth(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
