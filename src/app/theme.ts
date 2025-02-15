import { createTheme } from '@mui/material/styles';

const tetrisLabTheme = createTheme({
  


  palette: {
    mode: 'dark',
    primary: {
      main: '#BE22ED',
    },
    secondary: {
      main: '#00FFFF',
    },
  },
  zIndex: {
    modal: 1100,
    appBar: 1300
  }
});

export default tetrisLabTheme;