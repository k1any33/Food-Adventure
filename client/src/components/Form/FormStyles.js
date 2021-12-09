import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: '20px 20%',
  },
  formTitle: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },

  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  file: {
    width: '95%',
    margin: '10px 0',
  },
}));
