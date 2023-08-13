import React, { useMemo } from "react";
import { HeadSection, Heading } from "../../../utilities/styles/conmon";
import { IApiTodo } from "../../../utilities/types/todos";
import { IRow, TodoTableFields } from "../../../utilities/types/table";
import { Table } from "../../../UI";
import { TODO_TABLE_COLUMNS } from "../../../utilities/constants/table";

type TodosProps = {
  todos: IApiTodo[];
};

export function TodosSection(props: TodosProps) {
  const { todos } = props;

  const rows = useMemo<IRow<TodoTableFields>[]>(() => {
    // We can use rest operator or directly pass userList to Table since
    // all fields are same here as well, but this way enforces type safety.
    return todos.map((item) => {
      const row: IRow<TodoTableFields> = {
        id: item.id,
        userId: item.userId,
        title: item.title,
        completed: item.completed,
        "action-detailView": item.id,
      };
      return row;
    });
  }, [todos]);

  return (
    <>
      <HeadSection>
        <Heading variant="h4">User Todos</Heading>
      </HeadSection>
      <Table columns={TODO_TABLE_COLUMNS} data={rows} />
    </>
  );
}
