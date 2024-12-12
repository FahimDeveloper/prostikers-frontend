/* eslint-disable @typescript-eslint/no-explicit-any */
import { IncomingQueryType } from "../../../types/index.types";
import { slotBookingApiSlice } from "../../api/httpsSlice";

const slotBookingApi = slotBookingApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCartSlot: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/reservations/slot-bookings/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [
        "carts",
        "group-training-booked",
        "one-training-booked",
      ],
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
      query: (id) => ({
        url: `/reservations/slot-bookings/delete/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["carts"],
    }),
    groupTrainingBookedSlots: builder.query<
      IncomingQueryType<{
        date: string;
        training: string;
        time_slot: string;
      }>,
      { date: string; training: string }
    >({
      query: (params) => ({
        url: "/reservations/appointments/group/slots",
        method: "GET",
        params,
      }),
      providesTags: ["group-training-booked"],
    }),
    facilityBookedSlots: builder.query<
      IncomingQueryType<{
        date: string;
        training: string;
        time_slot: string;
        lane: string;
      }>,
      { date: string; training: string; lane: string | undefined }
    >({
      query: (params) => ({
        url: "/reservations/facilities/slots",
        method: "GET",
        params,
      }),
      providesTags: ["facility-booked"],
    }),
    oneTrainingBookedSlots: builder.query<
      IncomingQueryType<{
        date: string;
        training: string;
        time_slot: string;
      }>,
      { date: string; training: string }
    >({
      query: (params) => ({
        url: "/reservations/appointments/one-on-one/slots",
        method: "GET",
        params,
      }),
      providesTags: ["one-training-booked"],
    }),
  }),
});

export const {
  useAddToCartSlotMutation,
  useDeleteBookingSlotMutation,
  useGetBookingSlotsQuery,
  useGroupTrainingBookedSlotsQuery,
  useFacilityBookedSlotsQuery,
  useOneTrainingBookedSlotsQuery,
  useDeleteBookingSlotsMutation,
} = slotBookingApi;
