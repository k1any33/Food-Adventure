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
import AddIcon from '@material-ui/icons/Add';
import useStyles from './NavBarStyles';
import foodIcon from '../../assets/foodIcon.png';
import Search from './Search';

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
      {user?.newUser ? (
        <div className={classes.navBarRight}>
          <div className={classes.searchField}>
            <Search />
          </div>
          <Link to='/add-post' className={classes.link}>
            <AddIcon className={classes.icon} />
          </Link>

          <div className={classes.profile}>
            <Avatar alt={user.newUser.name} src={user.newUser.imageUrl}>
              {user.newUser.name.charAt(0)}
            </Avatar>
            {/* <Typography variant='h6' className={classes.name}>
              {user.newUser.name}
            </Typography> */}
          </div>
          <Button
            onClick={logout}
            className={classes.button}
            variant='contained'
          >
            Log Out
          </Button>
        </div>
      ) : (
        <Link to='/auth' className={classes.link}>
          <Box className={classes.navBarRight}>
            <Button className={classes.button} variant='contained'>
              Log in
            </Button>
          </Box>
        </Link>
      )}
    </AppBar>
  );
};

export default NavBar;
