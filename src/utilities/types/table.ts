import { CSSProperties } from "react";

export type IColumn<Type> = {
  id: Type;
  name: string;
  isSortable: boolean;
  styles?: CSSProperties;
};

export type IRow<Type extends string> = {
  [Property in Type]: string | number;
};

export type UserTableFields =
  | "id"
  | "name"
  | "username"
  | "email"
  | "address"
  | "phone"
  | "website"
  | "company"
  | "action-detailView";
