import { axiosClient } from ".";
import { IApiAlbum, IApiPhoto } from "../utilities/types/albums";

export const getAllAlbums = async () => {
  const users = await axiosClient.get<IApiAlbum[]>("/albums");
  return users.data;
};

export const getAlbumPhotos = async (albumId: string) => {
  const albumPhotos = await axiosClient.get<IApiPhoto[]>(`/albums/${albumId}/photos`);
  return albumPhotos.data;
};
