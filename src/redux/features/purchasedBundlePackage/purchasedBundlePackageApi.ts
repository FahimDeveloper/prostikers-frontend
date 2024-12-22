/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IBundleCreditPackResponse,
  IPurchasedBundleCreditPackParams,
} from "../../../types/bundle-package.types";
import { IncomingQueryType } from "../../../types/index.types";
import { purchasedBundlePackageApiSlice } from "../../api/httpsSlice";

export const purchasedBundlePackageApi =
  purchasedBundlePackageApiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getPurchasedBundlePackages: builder.query<
        IncomingQueryType<IBundleCreditPackResponse>,
        { email: string; params: IPurchasedBundleCreditPackParams }
      >({
        query: ({ email, params }) => ({
          url: `/bundle-credit-package/${email}`,
          method: "GET",
          params,
        }),
        providesTags: ["packages"],
      }),
      purchaseCreditPack: builder.mutation({
        query: (body) => ({
          url: "/bundle-credit-package/create",
          method: "POST",
          body,
        }),
      }),
    }),
  });

export const {
  useGetPurchasedBundlePackagesQuery,
  usePurchaseCreditPackMutation,
} = purchasedBundlePackageApi;
