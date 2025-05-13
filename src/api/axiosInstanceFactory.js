import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { HEADERS } from '../constants/http.constants';

export const createAxiosInstance = ({ getToken, onUnauthorized }) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_SERVER_URL,
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = getToken();
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

      if (status === StatusCodes.UNAUTHORIZED) {
        onUnauthorized?.();
      }

      return Promise.reject(error);
    }
  );

  return instance;
};
