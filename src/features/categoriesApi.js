import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/categories" }),
  endpoints: (build) => ({
    getCategory: build.query({
      query: (id) => `${id}?_embed=products`,
    }),
    getCategories: build.query({
      query: () => "",
      transformResponse: (response) => {
        return response
          .filter(
            (item) => item.parentId === "b6b90490-9525-82a5-1bbd-1057eed67ebe",
          )
          .map((item) => ({
            ...item,
            items: response.filter((prod) => prod.parentId === item.id),
          }))
          .filter((item) => item.items.length);
      },
    }),
    getCategoryById: build.query({
      query: (categoryId) => "",
      transformResponse: (response, _, categoryId) => {
        const category = response.find((item) => item.id === categoryId);
        const subCategories = response.filter(
          (item) => item.parentId === categoryId,
        );

        return { ...category, children: subCategories };
      },
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
} = categoriesApi;
