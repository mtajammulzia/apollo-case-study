import { useEffect, useState } from "react";
import { IApiAlbum } from "../utilities/types/albums";
import { getAllAlbums } from "../api/albums";

export const useListAlbum = () => {
  const [data, setData] = useState<IApiAlbum[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const _albums = await getAllAlbums();
      const parsedAlbums = _albums.map((album) => {
        return {
          ...album,
        };
      });
      setData(parsedAlbums);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      await fetchData();
      setLoading(false);
    })();
  }, []);

  const updateData = async () => {
    await fetchData();
  };

  return {
    albumList: data,
    isLoading: loading,
    updateAlbumList: updateData,
  };
};
