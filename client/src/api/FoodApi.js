import axios from './customAxios'

export class FoodApi {
  static ENDPOINT = "/food-posts"

  async fetchFoodPosts(page) {
    return axios.get(`${FoodApi.ENDPOINT}?page=${page}`)
  }

  // ...
}