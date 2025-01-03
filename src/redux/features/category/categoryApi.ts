import { TCategory, TCategoryParams } from "../../../types/category.types";
import { IncomingQueryType } from "../../../types/index.types";
import { categoryApiSlice } from "../../api/httpsSlice";

const categoryApi = categoryApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    categories: builder.query<IncomingQueryType<TCategory>, TCategoryParams>({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
  }),
});

export const { useCategoriesQuery } = categoryApi;
