export type IApiPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type IApiComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export interface IPostWithComments extends IApiPost {
  comments: IApiComment[];
}
