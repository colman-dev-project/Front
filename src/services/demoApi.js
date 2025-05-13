import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const DEMO_LOADING_DELAY_MS = 800;

export const demoApi = createApi({
  reducerPath: 'demoApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    AddToCart: builder.mutation({
      async queryFn() {
        return new Promise((resolve) =>
          setTimeout(() => {
            resolve({ data: {} });
          }, DEMO_LOADING_DELAY_MS),
        );
      },
    }),
  }),
});

export const { useAddToCartMutation } = demoApi;
