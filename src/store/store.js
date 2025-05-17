import { configureStore } from '@reduxjs/toolkit';
import { demoApi } from '../services/demoApi';

export const store = configureStore({
  reducer: {
    [demoApi.reducerPath]: demoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(demoApi.middleware),
});
