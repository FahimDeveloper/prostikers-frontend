import { clientApiSlice } from "../../api/httpsSlice";

const clientApi = clientApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    client: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["client"],
    }),
    updateClient: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/update/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["client"],
    }),
  }),
});

export const { useClientQuery, useUpdateClientMutation } = clientApi;
