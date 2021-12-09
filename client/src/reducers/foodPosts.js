import { CREATE, FETCH_ALL, UPDATE } from '../constants/actionTypes';

const foodPosts = (foodPosts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...foodPosts, action.payload];
    case UPDATE:
      return foodPosts.map((foodPost) =>
        foodPost.__id === action.payload._id ? action.payload : foodPost
      );
    default:
      return foodPosts;
  }
};

export default foodPosts;
