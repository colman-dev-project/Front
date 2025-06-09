// import axios from '../api/axios';
// import {
//   AUTH_ENDPOINTS,
//   AUTH_RESPONSE_KEYS,
//   AUTH_ERRORS,
// } from '../constants/auth.constants';
// import { StatusCodes } from 'http-status-codes';
// import { setToken } from './authStorageService';
// import createError from 'http-errors';

// const login = async (credentials) => {
//   try {
//     const response = await axios.post(AUTH_ENDPOINTS.LOGIN, credentials);

//     const token = response.data?.[AUTH_RESPONSE_KEYS.TOKEN];
//     const user = response.data?.[AUTH_RESPONSE_KEYS.USER];

//     if (!token || !user) {
//       throw createError(500, AUTH_ERRORS.INVALID_LOGIN_RESPONSE);
//     }

//     setToken(token);
//     return { token, user };
//   } catch (error) {
//     const status = error.response?.status;
//     const message = error.response?.data?.message;

//     if (status === StatusCodes.UNAUTHORIZED) {
//       throw createError(StatusCodes.UNAUTHORIZED, AUTH_ERRORS.UNAUTHORIZED_LOGIN);
//     }

//     if (message) {
//       throw createError(status || 500, message);
//     }

//     throw createError(500, AUTH_ERRORS.GENERAL_LOGOUT_ERROR);
//   }
// };

// const logout = async () => {
//   try {
//     const response = await axios.post(AUTH_ENDPOINTS.LOGOUT);

//     const success = response.data?.[AUTH_RESPONSE_KEYS.SUCCESS];
//     if (!success) {
//       throw createError(500, AUTH_ERRORS.LOGOUT_FAILED);
//     }

//     return response.data;
//   } catch (error) {
//     const status = error.response?.status;
//     const message = error.response?.data?.message;

//     if (status === StatusCodes.UNAUTHORIZED) {
//       throw createError(StatusCodes.UNAUTHORIZED, AUTH_ERRORS.UNAUTHORIZED_LOGOUT);
//     }

//     if (message) {
//       throw createError(status || 500, message);
//     }

//     throw createError(500, AUTH_ERRORS.GENERAL_LOGOUT_ERROR);
//   }
// };

// const authService = {
//   login,
//   logout,
// };

// export default authService;
