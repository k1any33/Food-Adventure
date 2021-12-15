import axios from './index';

export class FoodApi {
  static ENDPOINT = '/food-posts';

  fetchFoodPosts = async (page) => axios.get(`${FoodApi.ENDPOINT}?page=${page}`)

  fetchFoodPostsBySearch = async (searchQuery) => axios.get(`${FoodApi.ENDPOINT}/search?searchQuery=${searchQuery.search || 'none'}`)

  createFoodPost = async (foodPost) => axios.post(`'${FoodApi.ENDPOINT}'`, foodPost);

  updateFoodPost = async (id, foodPost) => axios.patch(`${FoodApi.ENDPOINT}/${id}`, foodPost);

  deleteFoodPost = async (id, foodPost) => axios.delete(`${FoodApi.ENDPOINT}/${id}`, foodPost);

  likeFoodPost = async (id, foodPost) => axios.patch(`${FoodApi.ENDPOINT}/${id}/likeFoodPost`, foodPost);
}
