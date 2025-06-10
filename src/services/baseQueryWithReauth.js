import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loginSuccess, logout } from '../store/authSlice';
import { decodeJWT } from '../utils/jwt';
import { ROUTES } from '../constants/routerPaths';
import { HEADERS } from '../constants/http.constants';
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_SERVER_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState, endpoint }) => {
    if (!['loginUser', 'registerUser'].includes(endpoint)) {
      const token = getState().auth.accessToken;
      if (token) {
        headers.set(HEADERS.AUTHORIZATION, `${HEADERS.BEARER} ${token}`);
      }
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery(ROUTES.AUTH_REFRESH, api, extraOptions);

    if (refreshResult?.data?.accessToken) {
      const newAccessToken = refreshResult.data.accessToken;
      const payload = decodeJWT(newAccessToken);
      if (!payload) return refreshResult;

      const user = { id: payload.userId, username: payload.username };
      api.dispatch(loginSuccess({ user, accessToken: newAccessToken }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};