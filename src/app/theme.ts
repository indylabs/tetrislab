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
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          "&:hover": {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: '1rem',
          color: '#ffffff80',
          "&.Mui-active": {
            color: THEME_PRIMARY_MAIN_COLOR
          },
          "&.Mui-completed": {
            color: '#ffffff80',
          },
        }
      }
    }
  },
});

export default tetrisLabTheme;