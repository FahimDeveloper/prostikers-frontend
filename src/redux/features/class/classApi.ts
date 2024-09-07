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
    classReservationList: builder.query({
      query: (email) => ({
        url: `/reservations/classes/user/${email}`,
        method: "GET",
      }),
      providesTags: ["class-reservation-list"],
    }),
    createClassReservation: builder.mutation({
      query: (payload) => ({
        url: `/reservations/classes/user/create`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["classes", "class-reservation-list"],
    }),
  }),
});

export const {
  useClassReservationListQuery,
  useCreateClassReservationMutation,
  useClassesQuery,
} = classApi;
