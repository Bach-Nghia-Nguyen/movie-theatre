import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_MOVIEDB_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
  },
});

// Add a request interceptor
api.interceptors.request.use(
  function (request) {
    // Do something before request is sent
    console.log("whats my api key", process.env.REACT_APP_MOVIEDB_API_KEY);
    console.log("Starting request: ", request);
    return request;
  },
  function (error) {
    // Do something with request error
    console.log("REQUEST ERROR: ", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that ranges within 2xx will cause this function to trigger
    // Do something with response data
    console.log("Response is: ", response);
    return response;
  },
  function (error) {
    // Any status code that falls outside the range of 2xx will cause this function to trigger
    // Do something with response error
    console.log("RESPONSE ERROR: ", error);
    return Promise.reject(error);
  }
);

export default api;
