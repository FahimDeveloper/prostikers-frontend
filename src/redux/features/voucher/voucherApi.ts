import { voucherApiSlice } from "../../api/httpsSlice";

const voucherApi = voucherApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    voucher: builder.mutation({
      query: (body) => ({
        url: "/vouchers/use",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useVoucherMutation } = voucherApi;
