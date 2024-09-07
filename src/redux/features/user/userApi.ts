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
  }),
});

export const { useCreateMembershipMutation } = userApi;
