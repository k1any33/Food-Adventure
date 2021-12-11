import React from 'react';
import { Grid, InputAdornment, TextField, IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const AuthInput = ({
  name,
  label,
  type,
  autoFocus,
  showPasswordHandler,
  valueChangeHandler,
}) => {
  return (
    <Grid item xs={12} sm={12}>
      <TextField
        name={name}
        label={label}
        type={type}
        onChange={valueChangeHandler}
        variant='outlined'
        required
        fullWidth
        autoFocus={autoFocus}
        InputProps={
          name === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={showPasswordHandler}>
                      {type === 'password' ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default AuthInput;
