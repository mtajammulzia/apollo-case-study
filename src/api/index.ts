import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

// axios config
export const axiosClient = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // For example; get tokens from cookies, refresh auth token etc
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
