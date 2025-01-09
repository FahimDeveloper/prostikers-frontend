import {
  IncomingQueryType,
  IncomingSingleQueryType,
} from "../../../types/index.types";
import {
  IProductsParams,
  TProductResponse,
} from "../../../types/product.types";
import { productApiSlice } from "../../api/httpsSlice";

export const storeApi = productApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query<
      IncomingQueryType<TProductResponse>,
      IProductsParams
    >({
      query: (params) => ({
        url: `/products/web`,
        method: "GET",
        params,
      }),
      providesTags: ["products"],
    }),
    product: builder.query<
      IncomingSingleQueryType<TProductResponse>,
      { id: string | undefined }
    >({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const { useProductsQuery, useProductQuery } = storeApi;
