import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CreateIcon from '@material-ui/icons/Create';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteFoodPost, likeFoodPost } from '../../../actions/foodPosts';

import useStyles from './FoodPostStyles';

const FoodPost = ({ foodPost, setCurrentId }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));

  const Likes = () => {
    if (foodPost.likes.length > 0) {
      return foodPost.likes.find((like) => like === user?.newUser?._id) ? (
        <div className={classes.align}>
          <FavoriteIcon fontSize='small' />
          &nbsp;
          {foodPost.likes.length > 2
            ? `You and ${foodPost.likes.length - 1} others`
            : `${foodPost.likes.length} like${
                foodPost.likes.length > 1 ? 's' : ''
              }`}
        </div>
      ) : (
        <div className={classes.align}>
          <FavoriteBorderIcon fontSize='small' />
          &nbsp;{foodPost.likes.length}{' '}
          {foodPost.likes.length === 1 ? 'Like' : 'Likes'}
        </div>
      );
    }

    return (
      <div className={classes.align}>
        <FavoriteBorderIcon fontSize='small' />
        &nbsp;Like
      </div>
    );
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={foodPost.selectedFile}
        title={foodPost.title}
      />
      <div className={classes.leftOverlay}>
        <Typography variant='h6'>{foodPost.name}</Typography>
        <Typography variant='body2'>
          {moment(foodPost.createdAt).fromNow()}
        </Typography>
      </div>
      {user?.newUser?._id === foodPost?.author && (
        <div className={classes.rightOverlay}>
          <Button
            className={classes.button}
            onClick={() => {
              navigate('/add-post');
              setCurrentId(foodPost._id);
            }}
          >
            <CreateIcon />
          </Button>
          <Button
            className={classes.button}
            onClick={() => dispatch(deleteFoodPost(foodPost._id))}
          >
            <DeleteIcon />
          </Button>
        </div>
      )}

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
      <CardActions>
        <Button
          className={classes.favButton}
          disabled={!user?.newUser}
          onClick={() => dispatch(likeFoodPost(foodPost._id))}
        >
          <Likes />
        </Button>
      </CardActions>
    </Card>
  );
};

export default FoodPost;
