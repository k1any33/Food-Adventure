import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(9),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  formTitle: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },

  form: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
  submitButton: {
    margin: theme.spacing(3, 0, 3),
    backgroundColor: '#EC407A',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#EC407A',
    },
  },
  paperButton: {
    textTransform: 'none',
  },
}));
