import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Send our token to the backend middelware to verify the user
axios.interceptors.request.use((req) => {
  const token = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
  req.headers.Authorization = token;

  return req;
});

export const fetchFoodPosts = () => axios.get('/food-posts');
export const createFoodPost = (newFoodPost) =>
  axios.post('/food-posts', newFoodPost);
export const updateFoodPost = (id, updatedFoodPost) =>
  axios.patch(`/food-posts/${id}`, updatedFoodPost);
export const deleteFoodPost = (id) =>
  axios.delete(`/food-posts/${id}`, deleteFoodPost);
export const likeFoodPost = (id) =>
  axios.patch(`/food-posts/${id}/likeFoodPost`, likeFoodPost);

export const login = (userData) => API.post('/user/login', userData);
export const register = (userData) => API.post('/user/register', userData);
