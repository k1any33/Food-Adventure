import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const register = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(userData);

    dispatch({ type: AUTH, data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const login = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(userData);
    dispatch({ type: AUTH, data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
