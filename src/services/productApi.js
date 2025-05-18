import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),

    getNewestProducts: builder.query({
      query: () => '/products?limit=8&sort=newest', 
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetNewestProductsQuery,
} = productApi;
