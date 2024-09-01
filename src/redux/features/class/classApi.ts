/* eslint-disable @typescript-eslint/no-explicit-any */
import { IClass } from "../../../types/class.types";
import { IncomingQueryType } from "../../../types/index.types";
import { classApiSlice } from "../../api/httpsSlice";

const classApi = classApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    classes: builder.query<IncomingQueryType<IClass>, any>({
      query: (params) => ({
        url: `/schedule/classes/by-query-date`,
        method: "GET",
        params,
      }),
      providesTags: ["classes"],
    }),
    class: builder.query({
      query: (id) => ({
        url: `/schedule/classes/${id}`,
        method: "GET",
      }),
      providesTags: ["class"],
    }),
    createClassReservation: builder.mutation({
      query: (payload) => ({
        url: `/reservations/classes/create`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["classes", "class"],
    }),
  }),
});

export const {
  useClassQuery,
  useCreateClassReservationMutation,
  useClassesQuery,
} = classApi;
