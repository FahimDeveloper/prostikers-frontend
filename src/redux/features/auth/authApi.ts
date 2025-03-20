import { authApiSlice } from "../../api/httpsSlice";

const authApi = authApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/user/login",
        method: "POST",
        body: credentials,
      }),
    }),
    continueWithSocial: builder.mutation({
      query: (credentials) => ({
        url: "/auth/user/continue-social-login",
        method: "POST",
        body: credentials,
      }),
    }),
    registration: builder.mutation({
      query: (credentials) => ({
        url: "/auth/user/registration",
        method: "POST",
        body: credentials,
      }),
    }),
    fogotPassword: builder.mutation({
      query: (credentials) => ({
        url: "/auth/user/forgot-password",
        method: "POST",
        body: credentials,
      }),
    }),
    linkVerify: builder.query({
      query: ({ token }) => ({
        url: `/auth/forgot-password/link-verify/${token}`,
        method: "GET",
      }),
    }),
    paymentlinkVerify: builder.query({
      query: ({ id }) => ({
        url: `/temp-booking/verify/${id}`,
        method: "GET",
      }),
    }),
    sendVerifyCode: builder.mutation({
      query: (credentials) => ({
        url: "/auth/forgot-password/send-code",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyCode: builder.mutation({
      query: (credentials) => ({
        url: "/auth/forgot-password/code-verify",
        method: "POST",
        body: credentials,
      }),
    }),
    ResetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/auth/user/reset-password",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyUser: builder.query({
      query: ({ token }) => ({
        url: `/auth/email-verify/${token}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useFogotPasswordMutation,
  useLinkVerifyQuery,
  useSendVerifyCodeMutation,
  useRegistrationMutation,
  useResetPasswordMutation,
  useVerifyCodeMutation,
  useContinueWithSocialMutation,
  useVerifyUserQuery,
  usePaymentlinkVerifyQuery,
} = authApi;
