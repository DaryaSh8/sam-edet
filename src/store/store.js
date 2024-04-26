import { configureStore } from "@reduxjs/toolkit";
import { categoriesApi } from "../features/categoriesApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "../features/cartSlice";
import { productsApi } from "../features/productsApi";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      productsApi.middleware,
    ),
});

setupListeners(store.dispatch);
