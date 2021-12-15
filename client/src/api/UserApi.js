import axios from './index';

export class UserApi {
  static ENDPOINT = '/user';

  static login = (userData) => axios.post(`${UserApi.ENDPOINT}/login`, userData);

  static register = (userData) => axios.post(`${UserApi.ENDPOINT}/register`, userData);
}
