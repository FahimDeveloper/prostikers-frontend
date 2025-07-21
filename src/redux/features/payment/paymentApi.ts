import { paymentApiSlice } from "../../api/httpsSlice";

const paymentApi = paymentApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    paymentIntent: builder.mutation({
      query: (body) => ({
        url: "/stripe-payment/create-payment-intent",
        method: "POST",
        body,
      }),
    }),
    createSubscription: builder.mutation({
      query: (body) => ({
        url: "/stripe-payment/create-subscription",
        method: "POST",
        body,
      }),
    }),
    facilityPayments: builder.query({
      query: ({ email, params }) => ({
        url: `/facility/payments/${email}`,
        method: "GET",
        params,
      }),
    }),
    membershipPayments: builder.query({
      query: ({ email, params }) => ({
        url: `/membership/payments/${email}`,
        method: "GET",
        params,
      }),
    }),
    shopPayments: builder.query({
      query: ({ email, params }) => ({
        url: `/shop/payments/${email}`,
        method: "GET",
        params,
      }),
    }),
    tournamentPayments: builder.query({
      query: ({ email, params }) => ({
        url: `/tournament/payments/${email}`,
        method: "GET",
        params,
      }),
    }),
    classPayments: builder.query({
      query: ({ email, params }) => ({
        url: `/class/payments/${email}`,
        method: "GET",
        params,
      }),
    }),
    bootcampPayments: builder.query({
      query: ({ email, params }) => ({
        url: `/bootcamp/payments/${email}`,
        method: "GET",
        params,
      }),
    }),
    appoinmentPayments: builder.query({
      query: ({ email, params }) => ({
        url: `/appointment/payments/${email}`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  usePaymentIntentMutation,
  useCreateSubscriptionMutation,
  useAppoinmentPaymentsQuery,
  useBootcampPaymentsQuery,
  useClassPaymentsQuery,
  useFacilityPaymentsQuery,
  useMembershipPaymentsQuery,
  useShopPaymentsQuery,
  useTournamentPaymentsQuery,
} = paymentApi;
