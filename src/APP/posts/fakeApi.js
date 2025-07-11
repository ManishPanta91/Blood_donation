// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fake } from "../Consants/api_urls";
// Define a service using a base URL and expected endpoints
export const fakeApi = createApi({
  reducerPath: "fakeApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${fake}` }),
  endpoints: (builder) => ({
    getsfake: builder.query({
      query: () => "/products",
    }),

    getsfakebyid: builder.query({
      query: (id) => `/products/${id}`,
    }),
     updateproduct: builder.mutation({
      query: (q) => ({
        url: `/products/${q.id}`,
        method:"PUT",
        body: q,
        headers: {
          "Content-type": "application/json",
        },
      }),
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetsfakeQuery, useGetsfakebyidQuery,useUpdateproductMutation } = fakeApi;

// HTTP METHODS
// GET    query
// POST  --MUTATION
// delete--MUTATION
// PUT  --MUTATION
