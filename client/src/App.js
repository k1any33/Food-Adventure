import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

const theme = createTheme({
  palette: {
    background: {
      default: '#ffe9ec',
    },
    text: {
      primary: '#000000',
    },
  },
});

function App() {
  const [currentId, setCurrentId] = useState(null);

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Routes>
          <Route path='/' element={<Navigate to='/food-posts' />} />
          <Route path='/food-posts' element={<Home setCurrentId={setCurrentId} />} />
          <Route path='/add-post' element={<Form currentId={currentId} setCurrentId={setCurrentId} />} />
          <Route path='/food-posts/search' element={<Home setCurrentId={setCurrentId} />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
