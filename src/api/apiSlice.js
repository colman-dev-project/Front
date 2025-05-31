import { createApi } from '@reduxjs/toolkit/query/react';
import axiosInstance from './axios';
import { API_PATHS } from '../constants/auth.constants';

const axiosBaseQuery = ({ baseUrl = '' } = {}) => async ({ url, method, data, params }) => {
  try {
    const result = await axiosInstance({
      url: baseUrl + url,
      method,
      data,
      params,
    });
    return { data: result.data };
  } catch (error) {
    return {
      error: {
        status: error.response?.status,
        data: error.response?.data || error.message,
      },
    };
  }
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: '' }), 
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: API_PATHS.LOGIN,
        method: 'post',
        data: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: API_PATHS.REGISTER,
        method: 'post',
        data: userData,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: API_PATHS.LOGOUT,
        method: 'post',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} = apiSlice;
