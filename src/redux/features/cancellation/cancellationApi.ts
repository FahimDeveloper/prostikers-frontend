import { cancellationApiSlice } from "../../api/httpsSlice";

const cancellationApi = cancellationApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createMembershipCancellation: builder.mutation({
      query: (payload) => ({
        url: `/cancellation/memberships/create`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useCreateMembershipCancellationMutation } = cancellationApi;
