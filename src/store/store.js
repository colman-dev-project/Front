import { configureStore } from '@reduxjs/toolkit';
import { cartApi } from '../services/cartApi';
import { productApi } from '../services/productApi';

export const store = configureStore({
  reducer: {
    [cartApi.reducerPath]: cartApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware, productApi.middleware),
});
