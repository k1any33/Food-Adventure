import React from 'react';
import { Grid, Container, Grow, Paper } from '@material-ui/core';
// import { useNavigate, useLocation } from 'react-router-dom';
// import ChipInput from 'material-ui-chip-input';

import FoodPosts from '../FoodPosts/FoodPosts';
import Pagination from '../Pagination/Pagination';

const Home = ({ setCurrentId }) => {
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent='center'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={10} sm={10} md={10} lg={11}>
            <FoodPosts setCurrentId={setCurrentId} />
          </Grid>
          <Paper>
            <Pagination />
          </Paper>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
