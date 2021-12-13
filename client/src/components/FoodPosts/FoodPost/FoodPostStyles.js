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
  leftOverlay: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    color: 'white',
  },
  rightOverlay: {
    position: 'absolute',
    top: '15px',
    right: '15px',
  },
  button: {
    color: 'white',
    minHeight: 0,
    minWidth: 0,
  },
  favButton: {
    color: 'black',
  },
  title: {
    padding: '10px 15px 0 15px',
  },
  tags: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2px 15px',
  },
  align: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
