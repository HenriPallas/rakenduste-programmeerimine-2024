import { createTheme } from '@mui/material/styles';

export const theme1 = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#607D8B',
    },
    secondary: {
      main: '#FF7043',
    },
    background: {
      default: '#F5F5F5',
      paper: '#ECEFF1',
    },
    text: {
      primary: '#37474F',
      secondary: '#78909C',
    },
    success: {
      main: '#66BB6A',
    },
    warning: {
      main: '#FFA726',
    },
    error: {
      main: '#EF5350',
    },
    info: {
      main: '#29B6F6',
    },
  },
});

export const theme2 = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#546E7A',
    },
    secondary: {
      main: '#FFB74D',
    },
    background: {
      default: '#FAFAFA',
      paper: '#ECEFF1',
    },
    text: {
      primary: '#263238',
      secondary: '#8D8D8D',
    },
    success: {
      main: '#26A69A',
    },
    warning: {
      main: '#FF7043',
    },
    error: {
      main: '#D32F2F',
    },
    info: {
      main: '#42A5F5',
    },
  },
});

export const theme3 = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#FFC107',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#263238',
      secondary: '#757575',
    },
    success: {
      main: '#81C784',
    },
    warning: {
      main: '#FF7043',
    },
    error: {
      main: '#E57373',
    },
    info: {
      main: '#64B5F6',
    },
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#263238',  // Set button text color to Light Grey
        },
      },
    },
  }
});

export const theme4 = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#FF7043',
    },
    background: {
      default: '#F4F5F7',
      paper: '#FFFFFF',
    },
    text: {
      secondary: '#78909C',
      primary: '#37474F',
    },
    success: {
      main: '#8BC34A',
    },
    warning: {
      main: '#FFA726',
    },
    error: {
      main: '#F44336',
    },
    info: {
      main: '#42A5F5',
    },
  },
});

export const theme5 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#80CBC4',
    },
    secondary: {
      main: '#FF7043',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      secondary: '#B0BEC5',
      primary: '#E0E0E0',
    },
    success: {
      main: '#66BB6A',
    },
    warning: {
      main: '#FFB74D',
    },
    error: {
      main: '#EF5350',
    },
    info: {
      main: '#42A5F5',
    },
  },
}); 