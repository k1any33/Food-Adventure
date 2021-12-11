import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  TextField,
  Button,
  Paper,
  Typography,
  Grow,
  Box,
  Grid,
  Container,
} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createFoodPost, updateFoodPost } from '../../actions/foodPosts';

import useStyles from './FormStyles';

const Form = ({ currentId, setCurrentId }) => {
  const [foodPostData, setFoodPostData] = useState({
    author: '',
    title: '',
    description: '',
    tags: '',
    selectedFile: '',
  });
  const foodPost = useSelector((state) =>
    currentId ? state.foodPosts.find((post) => post._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (foodPost) setFoodPostData(foodPost);
  }, [foodPost]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateFoodPost(currentId, foodPostData));
    } else {
      // rmb to call the function createFoodPost() and not createFoodPost
      dispatch(createFoodPost(foodPostData));
    }
    clearHandler();
    navigate('/');
  };
  const clearHandler = () => {
    setCurrentId(null);
    setFoodPostData({
      author: '',
      title: '',
      description: '',
      tags: '',
      selectedFile: '',
    });
  };
  return (
    <Grow in>
      <Container maxWidth='xs'>
        <Paper className={classes.paper}>
          <form
            classes={classes.form}
            autoComplete='off'
            noValidate
            onSubmit={submitHandler}
          >
            <Typography variant='h6' className={classes.formTitle}>
              {currentId ? 'Editing my' : 'Create a'} Food Post
            </Typography>
            <Box sx={{ m: 3 }} />
            <TextField
              name='author'
              variant='outlined'
              label='Author'
              fullWidth
              value={foodPostData.author}
              onChange={(e) =>
                setFoodPostData({ ...foodPostData, author: e.target.value })
              }
            />
            <Box sx={{ m: 3 }} />
            <TextField
              name='title'
              variant='outlined'
              label='Title'
              fullWidth
              value={foodPostData.title}
              onChange={(e) =>
                setFoodPostData({ ...foodPostData, title: e.target.value })
              }
            />
            <Box sx={{ m: 3 }} />
            <TextField
              name='description'
              variant='outlined'
              label='Description'
              fullWidth
              value={foodPostData.description}
              onChange={(e) =>
                setFoodPostData({
                  ...foodPostData,
                  description: e.target.value,
                })
              }
            />
            <Box sx={{ m: 3 }} />
            <TextField
              name='tags'
              variant='outlined'
              label='Tags'
              fullWidth
              value={foodPostData.tags}
              onChange={(e) =>
                setFoodPostData({
                  ...foodPostData,
                  tags: e.target.value.split(','),
                })
              }
            />
            <Box sx={{ m: 3 }} />
            <div className={classes.file}>
              <FileBase
                type='file'
                multiple={false}
                onDone={({ base64 }) =>
                  setFoodPostData({ ...foodPostData, selectedFile: base64 })
                }
              />
            </div>
            <Grid container justify='flex-end'>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                type='submit'
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Grow>
  );
};

export default Form;
