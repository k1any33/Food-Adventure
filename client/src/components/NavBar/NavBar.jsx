import React from 'react';
import { Link } from 'react-router-dom';

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
  const user = null;
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
