import { useEffect, useState } from "react";
import { IAlbumData } from "../utilities/types/albums";
import { getAlbumData } from "../api/albums";

export const useAlbumDetails = (albumId: string) => {
  const [data, setData] = useState<IAlbumData>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getAlbumData(albumId);
      setData(data);
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

  return {
    albumData: data,
    isLoading: loading,
  };
};
