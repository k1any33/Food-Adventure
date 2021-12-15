import { Container, Grid, Grow, Paper } from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router-dom';
import FoodPosts from '../FoodPosts/FoodPosts';
import Pagination from '../Pagination/Pagination';
import useStyles from './HomeStyles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = ({ setCurrentId }) => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  return (
    <Grow in>
      <Container>
        <Grid container justifyContent='center' spacing={3}>
          <Grid item xs={10} sm={10} md={10} lg={11}>
            <FoodPosts setCurrentId={setCurrentId} />
          </Grid>
          <div className={classes.parentDiv}>
            {!searchQuery && (
              <Paper className={classes.pagination}>
                <Pagination page={page} color='secondary' />
              </Paper>
            )}
          </div>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
