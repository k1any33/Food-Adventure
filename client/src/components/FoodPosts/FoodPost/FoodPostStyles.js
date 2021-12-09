import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
  },
  cardMedia: {
    paddingTop: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backgroundBlendMode: 'darken',
  },
  overlay: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    color: 'white',
  },
  title: {
    padding: '10px 15px 0 15px',
  },
  tags: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2px 15px',
  },
}));

export default useStyles;
