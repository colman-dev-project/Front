import axios from '../api/axios';
import { AUTH_ENDPOINTS, AUTH_RESPONSE_KEYS, AUTH_ERRORS } from '../constants/auth.constants';

const login = async (credentials) => {
  try {
    const response = await axios.post(AUTH_ENDPOINTS.LOGIN, credentials);

    const token = response.data?.[AUTH_RESPONSE_KEYS.TOKEN];
    const user = response.data?.[AUTH_RESPONSE_KEYS.USER];

    if (!token || !user) {
      throw new Error(AUTH_ERRORS.INVALID_LOGIN_RESPONSE);
    }

    return { token, user };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
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
    console.error('Logout error:', error);
    throw error;
  }
};

const authService = {
  login,
  logout,
};

export default authService;
