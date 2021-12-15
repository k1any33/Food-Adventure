import axios from './index';

export class FoodApi {
  static ENDPOINT = '/food-posts';

  static fetchFoodPosts = async (page) => axios.get(`${FoodApi.ENDPOINT}?page=${page}`)

  static fetchFoodPostsBySearch = async (searchQuery) => axios.get(`${FoodApi.ENDPOINT}/search?searchQuery=${searchQuery.search || 'none'}`)

  static createFoodPost = async (foodPost) => axios.post(`'${FoodApi.ENDPOINT}'`, foodPost);

  static updateFoodPost = async (id, foodPost) => axios.patch(`${FoodApi.ENDPOINT}/${id}`, foodPost);

  static deleteFoodPost = async (id, foodPost) => axios.delete(`${FoodApi.ENDPOINT}/${id}`, foodPost);

  static likeFoodPost = async (id, foodPost) => axios.patch(`${FoodApi.ENDPOINT}/${id}/likeFoodPost`, foodPost);
}
