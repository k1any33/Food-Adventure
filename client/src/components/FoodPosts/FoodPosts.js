import React from 'react';
import { useSelector } from 'react-redux';

import { CircularProgress, Grid } from '@material-ui/core';
import FoodPost from './FoodPost/FoodPost';
import useStyles from './FoodPost/FoodPostStyles';

const FoodPosts = ({ setCurrentId }) => {
  const classes = useStyles();
  const { foodPosts, isLoading } = useSelector((state) => state.foodPosts);

  if (!foodPosts.length && !isLoading) return 'There are no food posts';

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      alignItems='stretch'
      spacing={4}
      className={classes.container}
    >
      {foodPosts.map((foodPost) => (
        <Grid key={foodPost._id} item xs={12} sm={6} md={4} lg={3}>
          <FoodPost foodPost={foodPost} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FoodPosts;
