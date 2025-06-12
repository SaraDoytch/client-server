


import ApiSlice from "./ApiSlice";
import { Comment } from "../../interfaces/Interface";

const apiCommentSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllcomments: builder.query<Comment[], void>({
      query: () => "/comments",
      providesTags: ["Comment"],
    }),
    addcomment: builder.mutation<Comment, Comment>({
      query: (newComment) => ({
        url: "/comments",
        method: "POST",
        body: newComment,
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const { useGetAllcommentsQuery, useAddcommentMutation } = apiCommentSlice;
