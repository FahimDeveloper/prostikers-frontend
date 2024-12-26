import {
  IncomingQueryType,
  IncomingSingleQueryType,
} from "../../../types/index.types";
import {
  IStoreProductsParams,
  TProductResponse,
} from "../../../types/store.types";
import { storeApiSlice } from "../../api/httpsSlice";

export const storeApi = storeApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStoreProducts: builder.query<
      IncomingQueryType<TProductResponse>,
      IStoreProductsParams
    >({
      query: (params) => ({
        url: `/store/products`,
        method: "GET",
        params,
      }),
      providesTags: ["products"],
    }),
    getStoreSingleProducts: builder.query<
      IncomingSingleQueryType<TProductResponse>,
      { id: string | undefined }
    >({
      query: ({ id }) => ({
        url: `/store/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const { useGetStoreProductsQuery, useGetStoreSingleProductsQuery } =
  storeApi;
