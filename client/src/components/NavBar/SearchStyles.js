import { makeStyles } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.4),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.6),
    },
  },
  searchIcon: {
    position: 'absolute',
    height: '100%',
    padding: theme.spacing(0, 1.2),
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  input: {
    padding: theme.spacing(1, 1, 1, 4.7),
  },
}));

export default useStyles;
