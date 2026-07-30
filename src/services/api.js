import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",

  timeout: 15000,

  headers: {
    "Content-Type": "application/json",
  },
});

/*
|--------------------------------------------------------------------------
| Request Interceptor
|--------------------------------------------------------------------------
*/

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        import.meta.env.VITE_AUTH_TOKEN_KEY ||
          "hacksprint_access_token"
      );

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

/*
|--------------------------------------------------------------------------
| Response Interceptor
|--------------------------------------------------------------------------
*/

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem(
            import.meta.env.VITE_AUTH_TOKEN_KEY ||
              "hacksprint_access_token"
          );

          localStorage.removeItem("hacksprint_user");

          window.location.href = "/login";
          break;

        case 403:
          console.error("Permission denied.");
          break;

        case 404:
          console.error("Resource not found.");
          break;

        case 500:
          console.error("Internal server error.");
          break;

        default:
          console.error(
            error.response.data?.message ||
              "Something went wrong."
          );
      }
    } else if (error.request) {
      console.error("Network error. Please check your connection.");
    } else {
      console.error(error.message);
    }

    return Promise.reject(error);
  }
);

export default api;