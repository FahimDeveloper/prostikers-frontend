/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBootcamp } from "../../../types/bootcamp.types";
import { bootcampReservationApiSlice } from "../../api/httpsSlice";

const boocampReservationApi = bootcampReservationApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBootcampReservation: builder.mutation<any, IBootcamp>({
      query: (payload) => ({
        url: "/reservations/courses/create",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useCreateBootcampReservationMutation } = boocampReservationApi;
