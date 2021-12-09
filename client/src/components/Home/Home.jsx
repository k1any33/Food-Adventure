import React from 'react';
import { Grid, Container, Grow } from '@material-ui/core';

import Form from '../Form/Form';
import FoodPosts from '../FoodPosts/FoodPosts';

const Home = () => {
  return (
    <Grow in>
      <Container>
        <Grid
        //   container
        //   justifyContent='space-between'
        //   alignItems='stretch'
        //   spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <FoodPosts />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
