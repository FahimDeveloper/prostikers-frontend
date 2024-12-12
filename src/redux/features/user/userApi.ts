import { userApiSlice } from "../../api/httpsSlice";

const userApi = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createMembership: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/create-membership/${id}`,
        method: "POST",
        body: payload,
      }),
    }),
    changePassword: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/auth/user/${id}/change-password`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useCreateMembershipMutation, useChangePasswordMutation } =
  userApi;
