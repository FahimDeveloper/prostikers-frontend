/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IEvent,
  IEventIndividualReservation,
  IEventParams,
  IEventReservationParams,
  IEventTeamReservation,
} from "../../../types/event.types";
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
    getUserIndividualEventReservation: builder.query<
      IncomingQueryType<IEventIndividualReservation>,
      IEventReservationParams
    >({
      query: (params) => ({
        url: `/reservations/events/individual/user`,
        method: "GET",
        params,
      }),
      providesTags: ["group-event-reservations"],
    }),

    getUserGroupEventReservation: builder.query<
      IncomingQueryType<IEventTeamReservation>,
      IEventReservationParams
    >({
      query: (params) => ({
        url: `/reservations/events/individual/user`,
        method: "GET",
        params,
      }),
      providesTags: ["individual-event-reservations"],
    }),
    createIndividualEventReservation: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/reservations/events/individual/user/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["events", "individual-event-reservations"],
    }),
    createGroupEventReservation: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/reservations/events/group/user/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["events", "group-event-reservations"],
    }),
  }),
});

export const {
  useGetEventsQuery,
  useCreateGroupEventReservationMutation,
  useCreateIndividualEventReservationMutation,
  useGetUserGroupEventReservationQuery,
  useGetUserIndividualEventReservationQuery,
} = eventApi;
