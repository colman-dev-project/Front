import { createAxiosInstance } from './axiosInstanceFactory';
import { ROUTES } from '../constants/auth.constants';
import storageService from '../services/storageService';

const getToken = () => storageService.getToken();

const onUnauthorized = () => {
  storageService.removeToken();
  window.location.href = ROUTES.LOGIN;
  };

const axiosInstance = createAxiosInstance({ getToken, onUnauthorized });

export default axiosInstance;
