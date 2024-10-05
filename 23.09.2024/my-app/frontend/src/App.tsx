import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import "./App.css";
import { theme1, theme2, theme3, theme4, theme5 } from './style/Palettes';
import Sitecontent from './components/Sitecontent';

const theme = theme3;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Sitecontent />
      </ThemeProvider>
    </>
  );
}

export default App;