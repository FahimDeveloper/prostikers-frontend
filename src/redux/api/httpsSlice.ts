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
  tagTypes: [
    "events",
    "group-event-reservations",
    "individual-event-reservations",
  ],
  endpoints: () => ({}),
});

export const bootcampApiSlice = createApi({
  reducerPath: "bootcampApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["bootcamps", "bootcamp-reservation-list"],
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
  tagTypes: [
    "group-appointments",
    "group-appointment",
    "one-appointments",
    "one-appointment",
    "one-appointment-reservations",
    "group-appointment-reservations",
  ],
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

export const paymentApiSlice = createApi({
  reducerPath: "paymentApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export const classApiSlice = createApi({
  reducerPath: "classApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["classes", "class-reservation-list"],
});

export const clientApiSlice = createApi({
  reducerPath: "clientApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["client"],
});

export const voucherApiSlice = createApi({
  reducerPath: "voucherApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export const addonApislice = createApi({
  reducerPath: "addonApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
