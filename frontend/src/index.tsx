import ReactDOM from 'react-dom';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { GlobalStyles } from '@mui/styled-engine';

import App from './App';
import { scrollbarStyle } from 'utils/ScrollbarTheme';

import reportWebVitals from './reportWebVitals';
import './index.css';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

ReactDOM.render(
  <>
    <GlobalStyles styles={scrollbarStyle} />
    <CacheProvider value={muiCache}>
      <App />
    </CacheProvider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
