import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeContextProvider from './context/ThemeContext';
import App from './App.tsx';
import { GlobalStyles } from './styled/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <GlobalStyles />
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
