import { axiosClient } from "..";
import { IApiUser } from "../../utilities/types/user";

export const getAllUsers = async () => {
  const users = await axiosClient.get<IApiUser[]>("/users");
  return users.data;
};
