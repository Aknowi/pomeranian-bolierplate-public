import React from 'react';
import ReactDOM from 'react-dom/client';

import { store } from './store';
import { Provider } from 'react-redux';

import './index.css';
import { App } from './App';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#bdeefa',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#3D9E1E',
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
