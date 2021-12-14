import React from 'react';
import { Grid, Container, Grow, Paper } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import FoodPosts from '../FoodPosts/FoodPosts';
import Pagination from '../Pagination/Pagination';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = ({ setCurrentId }) => {
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
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
            <Pagination page={page} />
          </Paper>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
