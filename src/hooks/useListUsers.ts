import { useEffect, useState } from "react";
import { getAllUsers } from "../api/users";
import { IParsedUser } from "../utilities/types/user";

export const useListUsers = () => {
  const [data, setData] = useState<IParsedUser[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const _users = await getAllUsers();
      const parsedUsers = _users.map((user) => {
        const { address, company } = user;
        const { city, street, suite } = address;
        return {
          ...user,
          address: `${city}, ${street}, ${suite}`,
          company: company.name,
        };
      });
      setData(parsedUsers);
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
    userList: data,
    isLoading: loading,
    updateUserList: updateData,
  };
};
