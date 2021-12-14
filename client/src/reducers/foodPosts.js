import {
  CREATE,
  DELETE,
  END_LOADING,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  LIKE,
  START_LOADING,
  UPDATE,
} from '../constants/actionTypes';

const foodPosts = (state = { isLoading: true, foodPosts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        foodPosts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return {
        ...state,
        foodPosts: action.payload,
      };
    case CREATE:
      return { ...state, foodPosts: [...state.foodPosts, action.payload] };
    case UPDATE:
    case LIKE:
      return {
        ...state,
        foodPosts: state.foodPosts.map((foodPost) =>
          foodPost._id === action.payload._id ? action.payload : foodPost
        ),
      };
    case DELETE:
      return {
        ...state,
        foodPosts: state.foodPosts.filter(
          (foodPost) => foodPost._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default foodPosts;
