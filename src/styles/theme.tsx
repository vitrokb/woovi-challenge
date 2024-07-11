import { createTheme } from '@mui/material';

const Theme = createTheme({
  typography: {
    fontFamily: 'Nunito',
  },
  palette: {
    primary: {
      main: '#4D4D4D',
      contrastText: '#03D69D',
    },
  },
});

export default Theme;
