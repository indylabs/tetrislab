import { createTheme } from '@mui/material/styles';

import { THEME_PRIMARY_MAIN_COLOR, THEME_SECONDARY_MAIN_COLOR } from '@/constants';

const tetrisLabTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: THEME_PRIMARY_MAIN_COLOR,
    },
    secondary: {
      main: THEME_SECONDARY_MAIN_COLOR,
    },
  },
  zIndex: {
    modal: 1100,
    appBar: 1300
  }
});

export default tetrisLabTheme;