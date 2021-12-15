import axios from './index';

export class FoodApi {
  static ENDPOINT = '/food-posts';

  async fetchFoodPosts(page) {
    axios.get(`${FoodApi.ENDPOINT}?page=${page}`);
  }
  async fetchFoodPostsBySearch(searchQuery) {
    axios.get(
      `${FoodApi.ENDPOINT}/search?searchQuery=${searchQuery.search || 'none'}`
    );
  }
  async createFoodPost(newFoodPost) {
    axios.post(`'${FoodApi.ENDPOINT}'`, newFoodPost);
  }
  async updateFoodPost(id, updatedFoodPost) {
    axios.patch(`${FoodApi.ENDPOINT}/${id}`, updatedFoodPost);
  }
  async deleteFoodPost(id) {
    axios.delete(`${FoodApi.ENDPOINT}/${id}`, deleteFoodPost);
  }
  async likeFoodPost(id) {
    axios.patch(`${FoodApi.ENDPOINT}/${id}/likeFoodPost`, likeFoodPost);
  }
}
