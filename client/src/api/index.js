import axios from 'axios';

const url = 'http://localhost:5000/food-posts';

export const fetchFoodPosts = () => axios.get(url);
export const createFoodPost = (newFoodPost) => axios.post(url, newFoodPost);
export const updateFoodPost = (id, updatedFoodPost) =>
  axios.patch(`${url}/${id}`, updatedFoodPost);
export const deleteFoodPost = (id) =>
  axios.delete(`${url}/${id}`, deleteFoodPost);
export const likeFoodPost = (id) =>
  axios.patch(`${url}/${id}/likeFoodPost`, likeFoodPost);
