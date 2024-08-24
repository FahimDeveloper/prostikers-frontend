import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config";
import { baseQueryWithRefreshToken } from "./baseApi";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl.BASE_URL,
  }),
  endpoints: () => ({}),
});

export const eventApiSlice = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl.BASE_URL,
  }),
  endpoints: () => ({}),
});

export const eventReservationApiSlice = createApi({
  reducerPath: "eventReservationApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export const bootcampApiSlice = createApi({
  reducerPath: "bootcampApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl.BASE_URL,
  }),
  endpoints: () => ({}),
});
export const bootcampReservationApiSlice = createApi({
  reducerPath: "bootcampReservationApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export const trainerApiSlice = createApi({
  reducerPath: "trainerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl.BASE_URL,
  }),
  endpoints: () => ({}),
});

export const facilityApiSlice = createApi({
  reducerPath: "facilityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl.BASE_URL,
  }),
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
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl.BASE_URL,
  }),
  endpoints: () => ({}),
});
