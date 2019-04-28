import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import NavBar from './modules/NavBar';
import LandingPage from './containers/LandingPage/';
import theme from './theme';


function App() {
  return (
    <div style={{ backgroundColor: `#fff`, height: '100vh' }}>
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NavBar />
        <LandingPage />
        {/* The rest of your application */}
      </MuiThemeProvider>
    </div>
  );
}

export default App;
