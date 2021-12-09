import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, CircularProgress } from '@material-ui/core';
import FoodPost from './FoodPost/FoodPost';

const FoodPosts = () => {
  const foodPosts = useSelector((state) => state.foodPosts);
  console.log(foodPosts);

  return !foodPosts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      // className={classes.container}
      container
      alignItems='Stretch'
      spacing='4'
    >
      {foodPosts.map((foodPost) => (
        <Grid key={foodPost._id} item xs={12} sm={6}>
          <FoodPost foodPost={foodPost} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FoodPosts;
