import { apiSlice } from "../apiSlice/apiSlice";

export const creationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCreations: builder.query({
      query: (query) => {
        return {
          url: `/creation?${query}`,
        };
      },
    }),
    getCreationById: builder.query({
      query: (id) => `/creations/${id}`,
    }),
    addCreation: builder.mutation({
      query: (info) => {
        return {
          url: "/creations",
          method: "POST",
          body: info,
        };
      },
    }),
    editCreation: builder.mutation({
      query: (info) => {
        return {
          url: `/creations/${info._id}`,
          method: "PATCH",
          body: info,
        };
      },
    }),
    deleteCreation: builder.mutation({
      query: (id) => {
        return {
          url: `/creations/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
export const {
  useGetCreationsQuery,
  useAddCreationMutation,
  useDeleteCreationMutation,
  useEditCreationMutation,
  useGetCreationByIdQuery,
} = creationApi;
