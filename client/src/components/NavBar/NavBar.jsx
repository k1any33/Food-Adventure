import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './NavBarStyles';
import foodIcon from '../../assets/foodIcon.png';

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <div>
        <Toolbar>
          <img alt='foodIcon' height='40' src={foodIcon} />
          <Box sx={{ m: 2 }} />
          <Typography className={classes.title}>Food Adventure</Typography>
        </Toolbar>
      </div>
      <div className={classes.icons}>
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
