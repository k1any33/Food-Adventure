import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CreateIcon from '@material-ui/icons/Create';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import useStyles from './FoodPostStyles';

const FoodPost = ({ foodPost, setCurrentId }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={foodPost.selectedFile}
        title={foodPost.title}
      />
      <div className={classes.leftOverlay}>
        <Typography variant='h6'>{foodPost.author}</Typography>
        <Typography variant='body2'>
          {moment(foodPost.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.rightOverlay}>
        <Button
          className={classes.button}
          onClick={() => {
            navigate('add-post');
            setCurrentId(foodPost._id);
          }}
        >
          <CreateIcon />
        </Button>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        component='h2'
      >
        {foodPost.title}
      </Typography>
      <div className={classes.tags}>
        <Typography variant='body2' component='h2'>
          {foodPost.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography variant='body2' component='p'>
          {foodPost.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FoodPost;
