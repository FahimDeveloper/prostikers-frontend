/* eslint-disable @typescript-eslint/no-explicit-any */
import { trainerApiSlice } from "../../api/httpsSlice";

const trainerApi = trainerApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    trainers: builder.query<any, any>({
      query: (params) => ({
        url: "/admins/trainers",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useTrainersQuery } = trainerApi;
