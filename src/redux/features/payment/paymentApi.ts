import { paymentApiSlice } from "../../api/httpsSlice";

const paymentApi = paymentApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    payment: builder.mutation({
      query: (body) => ({
        url: "/payments/create-payment-intent",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { usePaymentMutation } = paymentApi;
