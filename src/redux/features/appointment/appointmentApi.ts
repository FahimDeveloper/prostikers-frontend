/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IAppointment,
  IAppointmentParams,
} from "../../../types/appointment.types";
import { IncomingQueryType } from "../../../types/index.types";
import { appointmentApiSlice } from "../../api/httpsSlice";

const appointmentApi = appointmentApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    appointments: builder.query<
      IncomingQueryType<IAppointment>,
      IAppointmentParams
    >({
      query: (params) => ({
        url: `/schedule/appointments`,
        method: "GET",
        params,
      }),
    }),
    appointment: builder.query({
      query: (id) => ({
        url: `/schedule/appointments/${id}`,
        method: "GET",
      }),
    }),
    createAppointmentReservation: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/reservations/appointments/group/create/${id}`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useAppointmentsQuery,
  useAppointmentQuery,
  useCreateAppointmentReservationMutation,
} = appointmentApi;
