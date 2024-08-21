/* eslint-disable @typescript-eslint/no-explicit-any */
import { eventReservationApiSlice } from "../../api/httpsSlice";

const eventReservationApi = eventReservationApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createIndividualEventReservation: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/reservations/events/individual/create",
        method: "POST",
        body: payload,
      }),
    }),
    createGroupEventReservation: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/reservations/events/group/create",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useCreateGroupEventReservationMutation,
  useCreateIndividualEventReservationMutation,
} = eventReservationApi;
