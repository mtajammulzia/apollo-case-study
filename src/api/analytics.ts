import { IAnalytics } from "../utilities/types/analytics";

// JSON placeholder API does not have any analytics, we can mock this call with dummy data.
export const getAnalytics = (pass: boolean): Promise<IAnalytics> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pass) {
        resolve({
          users: { count: 20, change: 14 },
          posts: { count: 400, change: -8 },
          todos: { count: 250, change: 2 },
        });
      }
      reject("Failed to fetch analytics");
    }, 700);
  });
};
