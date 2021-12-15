import { combineReducers } from 'redux';
import auth from './auth';
import foodPosts from './foodPosts';

export default combineReducers({
  foodPosts,
  auth,
});
