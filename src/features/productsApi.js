import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/products" }),
  endpoints: (build) => ({
    getProductsByCategoryId: build.query({
      query: (categoryId) => `?categoryId=${categoryId}`,
    }),
    getProductById: build.query({
      query: (id) => id,
    }),
    searchProducts: build.query({
      query: (searchTerm) => `?q=${searchTerm}`,
    }),
  }),
});

export const {
  useGetProductsByCategoryIdQuery,
  useGetProductByIdQuery,
  useSearchProductsQuery,
} = productsApi;
