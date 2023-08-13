import { axiosClient } from ".";
import { IApiAlbum } from "../utilities/types/albums";

export const getAllAlbums = async () => {
  const users = await axiosClient.get<IApiAlbum[]>("/albums");
  return users.data;
};
