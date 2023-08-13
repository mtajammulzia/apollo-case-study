import { axiosClient } from ".";
import { IAlbumData, IApiAlbum, IApiPhoto } from "../utilities/types/albums";
import { getUserDetails } from "./users";

export const getAllAlbums = async () => {
  const users = await axiosClient.get<IApiAlbum[]>("/albums");
  return users.data;
};

export const getAlbumPhotos = async (albumId: string) => {
  const albumPhotos = await axiosClient.get<IApiPhoto[]>(`/albums/${albumId}/photos`);
  return albumPhotos.data;
};

export const getAlbumDetails = async (albumId: string) => {
  const response = await axiosClient.get<IApiAlbum>(`/albums/${albumId}`);
  return response.data;
};

export const getAlbumData = async (albumId: string): Promise<IAlbumData> => {
  const [albumDetails, albumPhotos] = await Promise.all([
    getAlbumDetails(albumId),
    getAlbumPhotos(albumId),
  ]);
  const userDetails = await getUserDetails(albumDetails.userId.toString());
  return {
    ...albumDetails,
    photos: albumPhotos,
    userDetails,
  };
};
