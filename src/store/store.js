import { configureStore } from '@reduxjs/toolkit';
import { demoApi } from '../services/demoApi';
import { productApi } from '../services/productApi';

export const store = configureStore({
  reducer: {
    [demoApi.reducerPath]: demoApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(demoApi.middleware, productApi.middleware),
});
