import { axiosClient } from ".";
import { IAlbumWithPhotos, IApiAlbum } from "../utilities/types/albums";
import { IApiPost, IPostWithComments } from "../utilities/types/posts";
import { IApiTodo } from "../utilities/types/todos";
import { IApiUser, IUserData } from "../utilities/types/user";
import { getAlbumPhotos } from "./albums";
import { getPostComments } from "./posts";

export const getAllUsers = async () => {
  const response = await axiosClient.get<IApiUser[]>("/users");
  return response.data;
};

export const getUserDetails = async (userId: string) => {
  const response = await axiosClient.get<IApiUser>(`/users/${userId}`);
  return response.data;
};

export const getUserAlbums = async (userId: string) => {
  const response = await axiosClient.get<IApiAlbum[]>(`/users/${userId}/albums`);
  return response.data;
};

export const getUserPosts = async (userId: string) => {
  const response = await axiosClient.get<IApiPost[]>(`/users/${userId}/posts`);
  return response.data;
};

export const getUserTodos = async (userId: string) => {
  const response = await axiosClient.get<IApiTodo[]>(`/users/${userId}/todos`);
  return response.data;
};

export const getUserData = async (userId: string): Promise<IUserData> => {
  const [userDetails, userAlbums, userPosts, userTodos] = await Promise.all([
    getUserDetails(userId),
    getUserAlbumWithPhotos(userId),
    getUserPostsWithComments(userId),
    getUserTodos(userId),
  ]);
  return {
    userDetails,
    userAlbums,
    userPosts,
    userTodos,
  };
};

export const getUserAlbumWithPhotos = async (userId: string) => {
  const userAlbums = await getUserAlbums(userId);
  const userPhotosByAlbums: IAlbumWithPhotos[] = await Promise.all(
    userAlbums.map(async (album) => {
      const photos = await getAlbumPhotos(album.id.toString());
      return {
        ...album,
        photos,
      };
    })
  );
  return userPhotosByAlbums;
};

export const getUserPostsWithComments = async (userId: string) => {
  const userPosts = await getUserPosts(userId);
  const userPostsByComments: IPostWithComments[] = await Promise.all(
    userPosts.map(async (post) => {
      const comments = await getPostComments(post.id.toString());
      return {
        ...post,
        comments,
      };
    })
  );
  return userPostsByComments;
};
