import { UserApi } from '../api/UserApi';
import { AUTH } from '../constants/actionTypes';

export const register = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await UserApi.register(userData);

    dispatch({ type: AUTH, data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const login = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await UserApi.login(userData);
    dispatch({ type: AUTH, data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
