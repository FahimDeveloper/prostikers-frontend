/* eslint-disable @typescript-eslint/no-explicit-any */
import { facilityReservationCartApiSlice } from "../../api/httpsSlice";

const facilityReservationCartApi =
  facilityReservationCartApiSlice.injectEndpoints({
    endpoints: (builder) => ({
      addToCartFacility: builder.mutation<any, any>({
        query: (payload) => ({
          url: "/reservations/carts/facilities/create",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["carts"],
      }),
      getFacilityReservationCart: builder.query<any, any>({
        query: (params) => ({
          url: "/reservations/carts/facilities",
          method: "GET",
          params,
        }),
        providesTags: ["carts"],
      }),
      deleteUserCartsFacility: builder.mutation({
        query: (id) => ({
          url: `/reservations/carts/facilities/delete/all/${id}`,
          method: "DELETE",
        }),
      }),
      deleteCartFacility: builder.mutation({
        query: (id) => ({
          url: `/reservations/carts/facilities/delete/single/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["carts"],
      }),
    }),
  });

export const {
  useAddToCartFacilityMutation,
  useGetFacilityReservationCartQuery,
  useDeleteUserCartsFacilityMutation,
  useDeleteCartFacilityMutation,
} = facilityReservationCartApi;
