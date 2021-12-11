import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../constants/actionTypes';
import { useDispatch } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

import useStyles from './NavBarStyles';
import foodIcon from '../../assets/foodIcon.png';

const NavBar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    // JWT

    setUser(JSON.parse(localStorage.getItem('user')));
  }, [location]);
  return (
    <AppBar className={classes.appBar} position='static'>
      <div>
        <Link to='/' className={classes.link}>
          <Toolbar>
            <img alt='foodIcon' height='40' src={foodIcon} />
            <Box sx={{ m: 2 }} />
            <Typography className={classes.title}>Food Adventure</Typography>
          </Toolbar>
        </Link>
      </div>
      {user ? (
        <div className={classes.icons}>
          <Link to='/add-post' className={classes.link}>
            <AddIcon className={classes.icon} />
          </Link>
          <SearchIcon className={classes.icon} />
          <FavoriteBorderIcon className={classes.icon} />
          <Avatar
            className={classes.avatar}
            alt={user.result.name}
            src={user.result.imageUrl}
          >
            {user.result.name.charAt(0)}
          </Avatar>
          <Typography variant='h6'>{user.result.name}</Typography>
          <Button
            onClick={logout}
            className={classes.button}
            variant='contained'
            color='secondary'
          >
            Log Out
          </Button>
        </div>
      ) : (
        <Link to='/auth' className={classes.link}>
          <Box textAlign='center'>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
            >
              Log In
            </Button>
          </Box>
        </Link>
      )}
    </AppBar>
  );
};

export default NavBar;
