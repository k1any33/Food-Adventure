import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

import useStyles from './NavBarStyles';
import foodIcon from '../../assets/foodIcon.png';

const NavBar = () => {
  const classes = useStyles();
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
      <div className={classes.icons}>
        <Link to='/add-post' className={classes.link}>
          <AddIcon className={classes.icon} />
        </Link>
        <SearchIcon className={classes.icon} />
        <FavoriteBorderIcon className={classes.icon} />
        <Box textAlign='center'>
          <Button
            className={classes.button}
            variant='contained'
            color='secondary'
          >
            Log In
          </Button>
        </Box>
      </div>
    </AppBar>
  );
};

export default NavBar;
