import { paymentApiSlice } from "../../api/httpsSlice";

const paymentApi = paymentApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    payment: builder.mutation({
      query: (body) => ({
        url: "/stripe-payment/create-payment-intent",
        method: "POST",
        body,
      }),
    }),
    paymentList: builder.query({
      query: ({ id, params }) => ({
        url: `/payments/${id}`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { usePaymentMutation, usePaymentListQuery } = paymentApi;
