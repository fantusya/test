import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import theme from 'globalStyles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <BrowserRouter basename="/test"> */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
