import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/routerPaths';

export const demoApi = createApi({
  reducerPath: 'demoApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    AddToCart: builder.mutation({
      query: (product) => ({
        url: '/cart',
        method: 'POST',
        body: product,
      }),
    }),
  }),
});

export const { useAddToCartMutation } = demoApi;
