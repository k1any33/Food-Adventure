import { CREATE, FETCH_ALL } from '../constants/actionTypes';

const foodPosts = (foodPosts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...foodPosts, action.payload];
    default:
      return foodPosts;
  }
};

export default foodPosts;
