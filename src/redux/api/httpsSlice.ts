import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithRefreshToken } from "./baseApi";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export const eventApiSlice = createApi({
  reducerPath: "eventApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["events"],
  endpoints: () => ({}),
});

export const bootcampApiSlice = createApi({
  reducerPath: "bootcampApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["bootcamps"],
  endpoints: () => ({}),
});

export const trainerApiSlice = createApi({
  reducerPath: "trainerApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export const postApiSlice = createApi({
  reducerPath: "postApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export const facilityApiSlice = createApi({
  reducerPath: "facilityApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export const facilityReservationCartApiSlice = createApi({
  reducerPath: "facilityReservatioCartApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["carts"],
  endpoints: () => ({}),
});

export const appointmentApiSlice = createApi({
  reducerPath: "appointmentApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export const slotBookingApiSlice = createApi({
  reducerPath: "slotBookingApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [
    "carts",
    "group-training-booked",
    "one-training-booked",
    "facility-booked",
  ],
  endpoints: () => ({}),
});