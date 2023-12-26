import { apiSlice } from "../apiSlice/apiSlice";
export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (query) => {
        return {
          url: `/users?${query}`,
        };
      },
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    addUser: builder.mutation({
      query: (info) => {
        return {
          url: "/user",
          method: "POST",
          body: info,
        };
      },
    }),
    editUser: builder.mutation({
      query: (info) => {
        return {
          url: `/users/${info.id}`,
          method: "PATCH",
          body: info,
        };
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
export const {
  useGetUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useEditUserMutation,
  useGetUserByIdQuery,
} = userApi;
