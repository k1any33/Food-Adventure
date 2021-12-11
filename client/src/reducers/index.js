import { combineReducers } from 'redux';
import foodPosts from './foodPosts';
import auth from './auth';

export default combineReducers({
  foodPosts,
  auth,
});
