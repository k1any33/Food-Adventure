import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, CircularProgress } from '@material-ui/core';
import FoodPost from './FoodPost/FoodPost';

const FoodPosts = ({ setCurrentId }) => {
  const foodPosts = useSelector((state) => state.foodPosts);
  console.log(foodPosts);

  return !foodPosts.length ? (
    'There are no posts available'
  ) : (
    <Grid
      // className={classes.container}
      container
      alignItems='stretch'
      spacing={4}
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
