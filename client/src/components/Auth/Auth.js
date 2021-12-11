import React, { useState } from 'react';

import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Box,
} from '@material-ui/core';
import useStyles from './AuthStyles';
import AuthInput from './AuthInput';

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const submitHandler = () => {};
  const showPasswordHandler = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const valueChangeHandler = () => {};
  const switchAuthPage = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    showPasswordHandler(false);
  };
  return (
    <Container maxWidth='xs'>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.formTitle} variant='h6'>
          {isSignUp ? 'Sign Up' : 'Log in'}
        </Typography>
        <form className={classes.form} onSubmit={submitHandler}>
          <Grid>
            {isSignUp && (
              <div>
                <AuthInput
                  name='firstName'
                  label='First Name'
                  autoFocus
                  valueChangeHandler={valueChangeHandler}
                />
                <Box sx={{ m: 3 }} />
                <AuthInput
                  name='lastName'
                  label='Last Name'
                  valueChangeHandler={valueChangeHandler}
                />
              </div>
            )}
            <Box sx={{ m: 3 }} />
            <AuthInput
              name='email'
              label='Email Address'
              type='email'
              valueChangeHandler={valueChangeHandler}
            />
            <Box sx={{ m: 3 }} />
            <AuthInput
              name='password'
              label='Password'
              type={showPassword ? 'text' : 'password'}
              showPasswordHandler={showPasswordHandler}
              valueChangeHandler={valueChangeHandler}
            />
            <Box sx={{ m: 3 }} />
            {isSignUp && (
              <AuthInput
                name='confirmPassword'
                type='password'
                label='Confirm your passsword'
                valueChangeHandler={valueChangeHandler}
              />
            )}
            <Button
              className={classes.submitButton}
              type='submit'
              fullWidth
              variant='contained'
              color='secondary'
            >
              {isSignUp ? 'Sign Up' : 'Log In'}
            </Button>
          </Grid>
        </form>
        <Button className={classes.paperButton} onClick={switchAuthPage}>
          <Typography>
            {isSignUp
              ? 'Not on Food Adventure yet? Sign up'
              : 'Already have an account? Sign in'}
          </Typography>
        </Button>
      </Paper>
    </Container>
  );
};

export default Auth;
