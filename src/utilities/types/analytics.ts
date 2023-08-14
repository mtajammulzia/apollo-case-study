export type IAnalytic = {
  count: number;
  change: number;
};

export type IAnalytics = {
  users: IAnalytic;
  posts: IAnalytic;
  todos: IAnalytic;
};
