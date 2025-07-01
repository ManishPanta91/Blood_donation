import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../posts/postApi";
import { fakeApi } from "../posts/fakeApi";
// Or from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [fakeApi.reducerPath]: fakeApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware, fakeApi.middleware),
});
