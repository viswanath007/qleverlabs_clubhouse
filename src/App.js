import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6515dd'
    }
  },
});

function App() {
  return (
    <div style={{ backgroundColor: `#fff` }}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <NavBar />
        {/* The rest of your application */}
      </MuiThemeProvider>
    </div>
  );
}

export default App;
