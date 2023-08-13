import { useEffect, useState } from "react";
import { getAllTodos } from "../api/todos";
import { IApiTodo } from "../utilities/types/todos";

export const useListTodos = () => {
  const [data, setData] = useState<IApiTodo[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const _todos = await getAllTodos();
      const parsedTodos = _todos.map((todo) => {
        return {
          ...todo,
        };
      });
      setData(parsedTodos);
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
    todosList: data,
    isLoading: loading,
    updateTodosList: updateData,
  };
};
