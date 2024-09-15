/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IAppointment,
  IAppointmentDetail,
  IAppointmentParams,
} from "../../../types/appointment.types";
import { IncomingQueryType } from "../../../types/index.types";
import { appointmentApiSlice } from "../../api/httpsSlice";

const appointmentApi = appointmentApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    groupAppointments: builder.query<
      IncomingQueryType<IAppointmentDetail>,
      any
    >({
      query: (params) => ({
        url: `/schedule/appointments/group/by-query-date`,
        method: "GET",
        params,
      }),
      providesTags: ["group-appointments"],
    }),
    groupAppointment: builder.query({
      query: (id) => ({
        url: `/schedule/appointments/group/${id}`,
        method: "GET",
      }),
      providesTags: ["group-appointment"],
    }),
    oneAppointments: builder.query<
      IncomingQueryType<IAppointment>,
      IAppointmentParams
    >({
      query: (params) => ({
        url: `/schedule/appointments/one-on-one`,
        method: "GET",
        params,
      }),
      providesTags: ["one-appointments"],
    }),
    oneAppointment: builder.query({
      query: (id) => ({
        url: `/schedule/appointments/one-on-one/${id}`,
        method: "GET",
      }),
      providesTags: ["one-appointment"],
    }),
    getUserAppointmentGroupReservationList: builder.query({
      query: (params) => ({
        url: `/reservations/appointments/group/user`,
        method: "GET",
        params,
      }),
      providesTags: ["group-appointment-reservations"],
    }),
    getUserAppointmentOneReservationList: builder.query({
      query: (params) => ({
        url: `/reservations/appointments/one-on-one/user`,
        method: "GET",
        params,
      }),
      providesTags: ["one-appointment-reservations"],
    }),
    createAppointmentGroupReservation: builder.mutation({
      query: (payload) => ({
        url: `/reservations/appointments/group/user/create`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [
        "group-appointments",
        "group-appointment",
        "group-appointment-reservations",
      ],
    }),
    createAppointmentOneOnOneReservation: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/reservations/appointments/one-on-one/user/create/${id}`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [
        "one-appointments",
        "one-appointment",
        "one-appointment-reservations",
      ],
    }),
  }),
});

export const {
  useGroupAppointmentsQuery,
  useGroupAppointmentQuery,
  useOneAppointmentsQuery,
  useOneAppointmentQuery,
  useCreateAppointmentGroupReservationMutation,
  useCreateAppointmentOneOnOneReservationMutation,
  useGetUserAppointmentGroupReservationListQuery,
  useGetUserAppointmentOneReservationListQuery,
} = appointmentApi;
