import * as api from '../api';
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

export const getFoodPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchFoodPosts(page);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getFoodPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchFoodPostsBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createFoodPost = (foodPost) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createFoodPost(foodPost);
    dispatch({ type: CREATE, payload: data });
    dispatch({ type: END_LOADING });
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

export const deleteFoodPost = (id) => async (dispatch) => {
  try {
    await api.deleteFoodPost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likeFoodPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeFoodPost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
