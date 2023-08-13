import { axiosClient } from ".";
import { IApiTodo } from "../utilities/types/todos";

export const getAllTodos = async () => {
  const users = await axiosClient.get<IApiTodo[]>("/todos");
  return users.data;
};
