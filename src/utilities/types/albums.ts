import { IApiUser } from "./user";

export type IApiAlbum = {
  userId: number;
  id: number;
  title: string;
};

export type IApiPhoto = {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export interface IAlbumWithPhotos extends IApiAlbum {
  photos: IApiPhoto[];
}

export interface IAlbumData extends IAlbumWithPhotos {
  userDetails: IApiUser;
}
