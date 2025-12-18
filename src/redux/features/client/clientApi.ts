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
    addGeneralCredit: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/add-general-credit/${id}`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["client"],
    }),
    addAcademyCredit: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/add-academy-credit/${id}`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["client"],
    }),
  }),
});

export const {
  useClientQuery,
  useUpdateClientMutation,
  useAddGeneralCreditMutation,
  useAddAcademyCreditMutation,
} = clientApi;
