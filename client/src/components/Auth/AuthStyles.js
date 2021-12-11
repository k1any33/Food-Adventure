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
  },
  paperButton: {
    textTransform: 'none',
  },
}));
