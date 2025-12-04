import { clientApiSlice } from "../../api/httpsSlice";

const clientApi = clientApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    client: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["client"],
      keepUnusedDataFor: 0,
    }),
    updateClient: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/update/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["client"],
    }),
    addCredit: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/add-credit/${id}`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["client"],
    }),
  }),
});

export const { useClientQuery, useUpdateClientMutation, useAddCreditMutation } =
  clientApi;
