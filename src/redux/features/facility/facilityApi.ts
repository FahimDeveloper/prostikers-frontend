/* eslint-disable @typescript-eslint/no-explicit-any */
import { facilityApiSlice } from "../../api/httpsSlice";

const facilityApi = facilityApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    rentalFacility: builder.query<any, any>({
      query: (params) => ({
        url: "/schedule/facilities/by-query",
        method: "GET",
        params,
      }),
    }),
    createFacilityReservation: builder.mutation<any, any>({
      query: ({ id, payload }) => ({
        url: `/reservations/facilities/user/create/${id}`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useRentalFacilityQuery, useCreateFacilityReservationMutation } =
  facilityApi;
