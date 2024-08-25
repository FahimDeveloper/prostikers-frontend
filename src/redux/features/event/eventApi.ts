/* eslint-disable @typescript-eslint/no-explicit-any */
import { IEvent, IEventParams } from "../../../types/event.types";
import { IncomingQueryType } from "../../../types/index.types";
import { eventApiSlice } from "../../api/httpsSlice";

const eventApi = eventApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<IncomingQueryType<IEvent>, IEventParams>({
      query: (params) => ({
        url: "/events",
        method: "GET",
        params,
      }),
      providesTags: ["events"],
    }),
    createIndividualEventReservation: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/reservations/events/individual/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["events"],
    }),
    createGroupEventReservation: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/reservations/events/group/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["events"],
    }),
  }),
});

export const {
  useGetEventsQuery,
  useCreateGroupEventReservationMutation,
  useCreateIndividualEventReservationMutation,
} = eventApi;
