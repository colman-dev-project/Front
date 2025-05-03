import axios from '../api/axios';
import {
  AUTH_ENDPOINTS,
  AUTH_RESPONSE_KEYS,
  AUTH_ERRORS,
  STORAGE_KEYS,
} from '../constants/auth.constants';
import { HTTP_STATUS } from '../constants/http.constants';

const login = async (credentials) => {
  try {
    const response = await axios.post(AUTH_ENDPOINTS.LOGIN, credentials);

    const token = response.data?.[AUTH_RESPONSE_KEYS.TOKEN];
    const user = response.data?.[AUTH_RESPONSE_KEYS.USER];

    if (!token || !user) {
      throw new Error(AUTH_ERRORS.INVALID_LOGIN_RESPONSE);
    }

    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
    return { token, user };
  } catch (error) {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (status === HTTP_STATUS.UNAUTHORIZED) {
      throw new Error(AUTH_ERRORS.UNAUTHORIZED_LOGIN);
    }

    if (message) {
      throw new Error(message);
    }

    throw new Error(AUTH_ERRORS.GENERAL_LOGIN_ERROR);
  }
};

const logout = async () => {
  try {
    const response = await axios.post(AUTH_ENDPOINTS.LOGOUT);

    const success = response.data?.[AUTH_RESPONSE_KEYS.SUCCESS];
    if (!success) {
      throw new Error(AUTH_ERRORS.LOGOUT_FAILED);
    }

    return response.data;
  } catch (error) {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (status === HTTP_STATUS.UNAUTHORIZED) {
      throw new Error(AUTH_ERRORS.UNAUTHORIZED_LOGOUT);
    }

    if (message) {
      throw new Error(message);
    }

    throw new Error(AUTH_ERRORS.GENERAL_LOGOUT_ERROR);
  }
};

const authService = {
  login,
  logout,
};

export default authService;
