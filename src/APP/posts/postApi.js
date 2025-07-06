// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../Consants/api_urls";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getsPosts: builder.query({
      query: () => "/posts",
    }),

    getsPostsbyid: builder.query({
      query: (id) => `/posts/${id}`,
    }),

    addPost: builder.mutation({
      query: (q) => ({
        url: "/posts",
        method:"POST",
        body: q,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetsPostsQuery, useGetsPostsbyidQuery,useAddPostMutation } = postApi;

// HTTP METHODS
// GET    query
// POST  --MUTATION
// delete--MUTATION
// PUT  --MUTATION
