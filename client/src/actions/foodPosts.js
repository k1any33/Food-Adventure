import * as api from '../api';
import { CREATE, FETCH_ALL, UPDATE } from '../constants/actionTypes';

export const getFoodPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFoodPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createFoodPost = (foodPost) => async (dispatch) => {
  try {
    const { data } = await api.createFoodPost(foodPost);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateFoodPost = (id, foodPost) => async (dispatch) => {
  try {
    const { data } = await api.updateFoodPost(id, foodPost);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
