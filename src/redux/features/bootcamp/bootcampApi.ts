/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBootcamp, IBootcampParams } from "../../../types/bootcamp.types";
import { IncomingQueryType } from "../../../types/index.types";
import { bootcampApiSlice } from "../../api/httpsSlice";

const boocampApi = bootcampApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    bootcamps: builder.query<IncomingQueryType<IBootcamp>, IBootcampParams>({
      query: (params) => ({
        url: "/schedule/courses",
        method: "GET",
        params,
      }),
      providesTags: ["bootcamps"],
    }),
    bootcampReservationList: builder.query<
      IncomingQueryType<IBootcamp>,
      IBootcampParams
    >({
      query: (email) => ({
        url: `/reservations/courses/user/${email}`,
        method: "GET",
      }),
      providesTags: ["bootcamp-reservation-list"],
    }),
    createBootcampReservation: builder.mutation({
      query: (payload) => ({
        url: "/reservations/courses/user/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["bootcamp-reservation-list", "bootcamps"],
    }),
  }),
});

export const { useBootcampsQuery, useCreateBootcampReservationMutation } =
  boocampApi;
