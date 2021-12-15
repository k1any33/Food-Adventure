import { FoodApi } from '../api/FoodApi';
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
    const { data } = await FoodApi.fetchFoodPosts(page);
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
    } = await FoodApi.fetchFoodPostsBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createFoodPost = (foodPost) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await FoodApi.createFoodPost(foodPost);
    dispatch({ type: CREATE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateFoodPost = (id, foodPost) => async (dispatch) => {
  try {
    const { data } = await FoodApi.updateFoodPost(id, foodPost);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFoodPost = (id) => async (dispatch) => {
  try {
    await FoodApi.deleteFoodPost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likeFoodPost = (id) => async (dispatch) => {
  try {
    const { data } = await FoodApi.likeFoodPost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
