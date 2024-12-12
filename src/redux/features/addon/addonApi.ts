/* eslint-disable @typescript-eslint/no-explicit-any */
import { addonApislice } from "../../api/httpsSlice";

const addonApi = addonApislice.injectEndpoints({
  endpoints: (builder) => ({
    getSportAddons: builder.query<any, { sport: string }>({
      query: (params) => ({
        url: `/addons/sport-addon`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetSportAddonsQuery } = addonApi;
