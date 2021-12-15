import axios from './index';

export class UserApi {
  static ENDPOINT = '/user';

  login = (userData) => axios.post(`${UserApi.ENDPOINT}/login`, userData);
  register = (userData) => axios.post(`${UserApi.ENDPOINT}/register`, userData);
}
