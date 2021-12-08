import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import NavBar from './components/NavBar/NavBar';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#ffe9ec',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
    </MuiThemeProvider>
  );
}

export default App;
