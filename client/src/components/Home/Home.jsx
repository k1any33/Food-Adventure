import React from 'react';
import { Grid, Container, Grow } from '@material-ui/core';

import FoodPosts from '../FoodPosts/FoodPosts';

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
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
