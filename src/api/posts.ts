import { axiosClient } from ".";
import { IApiComment, IApiPost } from "../utilities/types/posts";

export const getAllPosts = async () => {
  const response = await axiosClient.get<IApiPost[]>("/posts");
  return response.data;
};

export const getPostComments = async (postId: string) => {
  const response = await axiosClient.get<IApiComment[]>(`/posts/${postId}/comments`);
  return response.data;
};
