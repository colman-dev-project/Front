import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/routerPaths';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    AddToCart: builder.mutation({
      query: (product) => ({
        url: '/cart',
        method: 'POST',
        body: product,
      }),
    }),
    getCart: builder.query({
      query: () => '/cart',
    }),

    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `/cart/${productId}`, 
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
} = cartApi;
