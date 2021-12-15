import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Send our token to the backend middelware to verify the user
API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    const token = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    req.headers.Authorization = token;
  }
  return req;
});

// imo, maybe it's possible to spread this out into several different classes
// as you can see, this page will not scale well and if you have like 10 
// sections, it becomes hundreds of lines
// I would recommend putting each file into its own class, extending a 
// base API class
export const fetchFoodPosts = (page) => API.get(`/food-posts?page=${page}`);
export const fetchFoodPostsBySearch = (searchQuery) =>
  API.get(`/food-posts/search?searchQuery=${searchQuery.search || 'none'}`);
export const createFoodPost = (newFoodPost) =>
  API.post('/food-posts', newFoodPost);
export const updateFoodPost = (id, updatedFoodPost) =>
  API.patch(`/food-posts/${id}`, updatedFoodPost);
export const deleteFoodPost = (id) =>
  API.delete(`/food-posts/${id}`, deleteFoodPost);
export const likeFoodPost = (id) =>
  API.patch(`/food-posts/${id}/likeFoodPost`, likeFoodPost);

export const login = (userData) => API.post('/user/login', userData);
export const register = (userData) => API.post('/user/register', userData);
