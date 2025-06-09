import { createApi } from '@reduxjs/toolkit/query/react';
import { HTTP_METHODS } from '../constants/httpMethods';
import { loginSuccess } from '../store/authSlice';
import { ROUTES } from '../constants/routerPaths';
import { AUTH_ERRORS } from '../constants/auth.constants';
import { decodeJWT } from '../utils/jwt';
import { baseQueryWithReauth } from './baseQueryWithReauth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
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
          const { accessToken } = data;

          const payload = decodeJWT(accessToken);
          if (!payload) throw new Error(AUTH_ERRORS.INVALID_TOKEN);

          const user = { id: payload.userId, username: payload.username };
          dispatch(loginSuccess({ user, accessToken }));
        } catch (err) {
          console.error(AUTH_ERRORS.LOGIN_FAILED, err);
        }
      },
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: ROUTES.LOGOUT,
        method: HTTP_METHODS.POST,
      }),
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

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
} = authApi;
