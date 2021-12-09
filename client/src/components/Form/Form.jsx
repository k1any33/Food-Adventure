import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography, Grow } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createFoodPost } from '../../actions/foodPosts';

import useStyles from './FormStyles';

const Form = () => {
  const [foodPostData, setFoodPostData] = useState({
    author: '',
    title: '',
    description: '',
    tags: '',
    selectedFile: '',
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitted');
    // rmb to call the function createFoodPost() and not createFoodPost
    dispatch(createFoodPost(foodPostData));
    navigate('/');
  };
  const clearHandler = () => {};
  return (
    <Grow in>
      <Paper className={classes.paper}>
        <form
          classes={classes.form}
          autoComplete='off'
          noValidate
          onSubmit={submitHandler}
        >
          <Typography variant='h6'>Create a Food Post</Typography>
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
          <TextField
            name='description'
            variant='outlined'
            label='Description'
            fullWidth
            value={foodPostData.description}
            onChange={(e) =>
              setFoodPostData({ ...foodPostData, description: e.target.value })
            }
          />
          <TextField
            name='tags'
            variant='outlined'
            label='Tags'
            fullWidth
            value={foodPostData.tags}
            onChange={(e) =>
              setFoodPostData({ ...foodPostData, tags: e.target.value })
            }
          />
          <div className={classes.file}>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) =>
                setFoodPostData({ ...foodPostData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            type='submit'
          >
            Submit
          </Button>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            onClick={clearHandler}
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Grow>
  );
};

export default Form;
