import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HTTP_METHODS } from '../constants/httpMethods';
import { loginSuccess } from '../store/authSlice';
import { ROUTES } from '../constants/routerPaths';
import storageService from './storageService';
import { STORAGE_KEYS, HEADERS } from '../constants/http.constants';
import { AUTH_ERRORS } from '../constants/auth.constants';
import { decodeJWT } from '../utils/jwt';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_SERVER_URL,
    prepareHeaders: (headers) => {
      const token = storageService.getParsedItem(STORAGE_KEYS.TOKEN);
      if (token) {
        headers.set(HEADERS.AUTHORIZATION, `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: ROUTES.LOGIN,
        method: HTTP_METHODS.POST,
        body: credentials,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { accessToken, refreshToken } = data;

          const payload = decodeJWT(accessToken);
          if (!payload) throw new Error(AUTH_ERRORS.INVALID_TOKEN);

          const user = { id: payload.userId, username: payload.username };

          dispatch(loginSuccess({ user, accessToken, refreshToken }));

          storageService.setParsedItem(STORAGE_KEYS.TOKEN, accessToken);
          storageService.setParsedItem(
            STORAGE_KEYS.REFRESH_TOKEN,
            refreshToken,
          );
        } catch (err) {
          console.error(AUTH_ERRORS.LOGIN_FAILED, err);
        }
      },
    }),

    registerUser: builder.mutation({
      query: (newUser) => ({
        url: ROUTES.REGISTER,
        method: HTTP_METHODS.POST,
        body: newUser,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
