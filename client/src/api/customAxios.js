import axios from 'axios'

const customAxios = axios.create({
  baseURL: process.env.API_URL
})

customAxios.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    const token = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    req.headers.Authorization = token;
  }
  return req;
})

export default customAxios