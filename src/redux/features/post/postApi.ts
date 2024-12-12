/* eslint-disable @typescript-eslint/no-explicit-any */
import { IncomingQueryType } from "../../../types/index.types";
import { IPost, IPostParams } from "../../../types/post.types";
import { trainerApiSlice } from "../../api/httpsSlice";

const postApi = trainerApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    posts: builder.query<IncomingQueryType<IPost>, IPostParams>({
      query: (params) => ({
        url: "/posts",
        method: "GET",
        params,
      }),
    }),
    post: builder.query<any, string | undefined>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { usePostsQuery, usePostQuery } = postApi;
