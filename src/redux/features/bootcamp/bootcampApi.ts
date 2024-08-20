/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBootcamp, IBootcampParams } from "../../../types/bootcamp.types";
import { IncomingQueryType } from "../../../types/index.types";
import { bootcampApiSlice } from "../../api/httpsSlice";

const boocampApi = bootcampApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    bootcamps: builder.query<IncomingQueryType<IBootcamp>, IBootcampParams>({
      query: (params) => ({
        url: "/schedule/courses",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useBootcampsQuery } = boocampApi;
