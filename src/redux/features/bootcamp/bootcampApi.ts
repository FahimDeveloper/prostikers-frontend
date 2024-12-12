/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IBootcamp,
  IBootcampParams,
  IBootcampReservationParams,
} from "../../../types/bootcamp.types";
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
    getUserbootcampReservationList: builder.query<
      IncomingQueryType<IBootcamp>,
      IBootcampReservationParams
    >({
      query: (params) => ({
        url: `/reservations/courses/user`,
        method: "GET",
        params,
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

export const {
  useBootcampsQuery,
  useCreateBootcampReservationMutation,
  useGetUserbootcampReservationListQuery,
} = boocampApi;
