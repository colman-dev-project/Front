import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQueryWithReauth';
import { ROUTES } from '../constants/routerPaths';
import { HTTP_METHODS } from '../constants/httpMethods';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (productId) => ({
        url: `${ROUTES.PRODUCTS}/${productId}/add-to-cart`,
        method: HTTP_METHODS.PATCH,
      }),
    }),

    // ✅ Get user cart
    getCart: builder.query({
      query: () => ROUTES.CART,
    }),

    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `${ROUTES.PRODUCTS}/${productId}/remove-from-cart`,
        method: HTTP_METHODS.PATCH,
      }),
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
} = cartApi;
