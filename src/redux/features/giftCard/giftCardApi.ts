import { giftCardApiSlice } from "../../api/httpsSlice";

const giftCardApi = giftCardApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    purchaseGiftCard: builder.mutation({
      query: (body) => ({
        url: `/gift-cards/purchase`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { usePurchaseGiftCardMutation } = giftCardApi;
