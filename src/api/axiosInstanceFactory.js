import axios from 'axios';
import { HTTP_STATUS, HEADERS } from '../constants/http.constants';

export const createAxiosInstance = ({ getToken, onUnauthorized }) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = getToken?.();
      if (token) {
        config.headers[HEADERS.AUTHORIZATION] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response?.status;

      if (status === HTTP_STATUS.UNAUTHORIZED) {
        onUnauthorized?.();
      }

      return Promise.reject(error);
    }
  );

  return instance;
};
