import { createAxiosInstance } from './axiosInstanceFactory';
import { STORAGE_KEYS, ROUTES } from '../constants/auth.constants';

const getToken = () => localStorage.getItem(STORAGE_KEYS.TOKEN);

const onUnauthorized = () => {
  localStorage.removeItem(STORAGE_KEYS.TOKEN);
  window.location.href = ROUTES.LOGIN;
};

const axiosInstance = createAxiosInstance({ getToken, onUnauthorized });

export default axiosInstance;
