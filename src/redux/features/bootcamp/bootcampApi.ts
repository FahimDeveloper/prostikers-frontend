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
    createBootcampReservation: builder.mutation<any, IBootcamp>({
      query: (payload) => ({
        url: "/reservations/courses/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["bootcamps"],
    }),
  }),
});

export const { useBootcampsQuery, useCreateBootcampReservationMutation } =
  boocampApi;
