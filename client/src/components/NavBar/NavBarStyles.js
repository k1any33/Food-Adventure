import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    background: '#FFD0D7',
    color: '#000000',
    margin: '0 0 40px 0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  title: {
    fontWeight: 'Bold',
    fontSize: 23,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  navBarRight: {
    margin: '5px 0',
    padding: '10px 30px',
    display: 'flex',
  },
  icon: {
    fontSize: 30,
    margin: '5px 15px',
  },
  button: {
    justifyContent: 'center',
    margin: '0 40px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '160x',
    margin: '0 0 0 15px ',
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 4px 7px 12px',
  },
}));

export default useStyles;
