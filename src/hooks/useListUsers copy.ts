import { useEffect, useState } from "react";
import { getUserData } from "../api/users";
import { IUserData } from "../utilities/types/user";

export const useUserData = (userId: string) => {
  const [data, setData] = useState<IUserData>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!userId || userId === "") return;
    try {
      const _userData = await getUserData(userId);
      setData(_userData);
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
    userData: data,
    isLoading: loading,
  };
};
