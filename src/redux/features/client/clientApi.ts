import { clientApiSlice } from "../../api/httpsSlice";

const clientApi = clientApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    client: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 0,
    }),
    updateClient: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/update/${id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});

export const { useClientQuery, useUpdateClientMutation } = clientApi;
