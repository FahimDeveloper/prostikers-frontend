import { orderApiSlice } from "../../api/httpsSlice";

const orderApi = orderApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (order) => ({
        url: "/orders/create",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["orders"],
    }),
    orders: builder.query({
      query: ({ email, params }) => ({
        url: `/orders/${email}`,
        method: "GET",
        params,
      }),
      providesTags: ["orders"],
    }),
    cancelOrder: builder.mutation<any, any>({
      query: ({ id, body }) => ({
        url: `/orders/${id}/cancel`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const { usePlaceOrderMutation, useOrdersQuery, useCancelOrderMutation } =
  orderApi;
