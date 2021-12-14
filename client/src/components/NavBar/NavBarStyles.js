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
    height: '80px',
  },
  title: {
    fontWeight: 'Bold',
    fontSize: 23,
  },
  navBarRight: {
    margin: '5px 0',
    padding: '10px 30px',
    display: 'flex',
  },
  searchField: {
    marginRight: '2px',
    marginTop: '3px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  icon: {
    fontSize: 30,
    margin: '5px 15px',
  },
  button: {
    width: '100px',
    height: '40px',
    justifyContent: 'center',
    margin: '0 40px',
    backgroundColor: '#EC407A',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#EC407A',
    },
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
