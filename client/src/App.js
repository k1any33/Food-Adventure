import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';
import { getFoodPosts } from './actions/foodPosts';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Form from './components/Form/Form';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodPosts());
  }, [dispatch, currentId]);

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home setCurrentId={setCurrentId} />} />
          <Route
            path='/add-post'
            element={<Form currentId={currentId} setCurrentId={setCurrentId} />}
          />
        </Routes>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
