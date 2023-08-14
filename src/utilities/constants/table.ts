import { AlbumTableFields, IColumn, TodoTableFields, UserTableFields } from "../types/table";

export const USER_TABLE_COLUMNS: IColumn<UserTableFields>[] = [
  { id: "id", name: "Id", isSortable: true },
  { id: "name", name: "Name", isSortable: true },
  { id: "username", name: "Username", isSortable: true },
  { id: "email", name: "Email", isSortable: false },
  { id: "address", name: "Address", isSortable: true },
  { id: "phone", name: "Phone", isSortable: false },
  { id: "website", name: "Website", isSortable: false },
  { id: "company", name: "Company", isSortable: true },
  { id: "action-detailView", name: "Action", isSortable: false },
];

export const TODO_TABLE_COLUMNS: IColumn<TodoTableFields>[] = [
  { id: "id", name: "Id", isSortable: true },
  { id: "userId", name: "User Id", isSortable: true },
  { id: "title", name: "Title", isSortable: true },
  { id: "completed", name: "Is Completed", isSortable: false },
  // { id: "action-detailView", name: "Action", isSortable: false },
];

export const ALBUM_TABLE_COLUMNS: IColumn<AlbumTableFields>[] = [
  { id: "id", name: "Id", isSortable: true },
  { id: "userId", name: "User Id", isSortable: true },
  { id: "title", name: "Title", isSortable: true },
  { id: "action-detailView", name: "Action", isSortable: false },
];
