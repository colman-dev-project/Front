import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const DEMO_LOADING_DELAY_MS = 800;
import { ROUTES as ROUTER_PATHS } from '../constants/routerPaths';

export const demoApi = createApi({
  reducerPath: 'demoApi',
  baseQuery: fetchBaseQuery({ baseUrl: ROUTER_PATHS.HOME }),
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
