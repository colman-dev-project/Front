import { createAxiosInstance } from './axiosInstanceFactory';
import { ROUTES } from '../constants/auth.constants';
import { getToken, removeToken } from '../services/authStorageService';

const onUnauthorized = () => {
  removeToken();
  window.location.href = ROUTES.LOGIN;
  };

const axiosInstance = createAxiosInstance({ getToken, onUnauthorized });

export default axiosInstance;
