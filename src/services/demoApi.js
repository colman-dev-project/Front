import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ROUTES as ROUTER_PATHS } from '../constants/routerPaths';

export const demoApi = createApi({
  reducerPath: 'demoApi',
  baseQuery: fetchBaseQuery({ baseUrl: ROUTER_PATHS.HOME }),
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
