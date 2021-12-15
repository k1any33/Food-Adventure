import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.API_URL,
});

// Send our token to the backend middelware to verify the user
customAxios.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    const token = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    req.headers.Authorization = token;
  }
  return req;
});

export default customAxios;
