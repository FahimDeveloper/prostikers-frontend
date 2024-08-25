/* eslint-disable @typescript-eslint/no-explicit-any */
import { slotBookingApiSlice } from "../../api/httpsSlice";

const slotBookingApi = slotBookingApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCartSlot: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/reservations/slot-bookings/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["carts"],
    }),
    getBookingSlots: builder.query<any, any>({
      query: (params) => ({
        url: "/reservations/slot-bookings",
        method: "GET",
        params,
      }),
      providesTags: ["carts"],
    }),
    deleteBookingSlot: builder.mutation({
      query: (id) => ({
        url: `/reservations/slot-bookings/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["carts"],
    }),
    deleteBookingSlots: builder.mutation({
      query: (payload) => ({
        url: `/reservations/slot-bookings/delete/slots`,
        method: "DELETE",
        body: payload,
      }),
    }),
  }),
});

export const {
  useAddToCartSlotMutation,
  useDeleteBookingSlotMutation,
  useGetBookingSlotsQuery,
  useDeleteBookingSlotsMutation,
} = slotBookingApi;
