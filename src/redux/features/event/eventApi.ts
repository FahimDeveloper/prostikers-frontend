/* eslint-disable @typescript-eslint/no-explicit-any */
import { IEvent, IEventParams } from "../../../types/event.types";
import { IncomingQueryType } from "../../../types/index.types";
import { eventApiSlice } from "../../api/httpsSlice";

const eventApi = eventApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<IncomingQueryType<IEvent>, IEventParams>({
      query: (params) => ({
        url: "/events",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetEventsQuery } = eventApi;
