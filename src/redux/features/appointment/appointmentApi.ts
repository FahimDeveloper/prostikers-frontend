/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IAppointment,
  IAppointmentParams,
} from "../../../types/appointment.types";
import { IncomingQueryType } from "../../../types/index.types";
import { appointmentApiSlice } from "../../api/httpsSlice";

const appointmentApi = appointmentApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    groupAppointments: builder.query<IncomingQueryType<IAppointment>, any>({
      query: (params) => ({
        url: `/schedule/appointments/group/by-date`,
        method: "GET",
        params,
      }),
    }),
    groupAppointment: builder.query({
      query: (id) => ({
        url: `/schedule/appointments/group/${id}`,
        method: "GET",
      }),
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
    }),
    oneAppointment: builder.query({
      query: (id) => ({
        url: `/schedule/appointments/one-on-one/${id}`,
        method: "GET",
      }),
    }),
    createAppointmentGroupReservation: builder.mutation({
      query: (payload) => ({
        url: `/reservations/appointments/group/create`,
        method: "POST",
        body: payload,
      }),
    }),
    createAppointmentOneOnOneReservation: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/reservations/appointments/one-on-one/create/${id}`,
        method: "POST",
        body: payload,
      }),
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
} = appointmentApi;
