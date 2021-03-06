import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'TTNorms-Regular',
  },
  palette: {
    mode: 'dark',
    error: {
      main: '#eb510a',
    },
    primary: {
      main: '#1A1A2E',
    },
  },
});
