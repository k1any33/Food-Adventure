import {
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKE,
  UPDATE,
} from '../constants/actionTypes';

const foodPosts = (foodPosts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...foodPosts, action.payload];
    case UPDATE:
    case LIKE:
      return foodPosts.map((foodPost) =>
        foodPost._id === action.payload._id ? action.payload : foodPost
      );

    case DELETE:
      return foodPosts.filter((foodPost) => foodPost._id !== action.payload);
    default:
      return foodPosts;
  }
};

export default foodPosts;
