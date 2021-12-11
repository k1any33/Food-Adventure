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
  },
  title: {
    fontWeight: 'Bold',
    fontSize: 23,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  icons: {
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
  // imageIcon: {
  //   display: 'flex',
  //   height: 'inherit',
  //   width: 'inherit',
  // },
}));

export default useStyles;
