const axios = require("axios");
const axiosApiInstance = axios.create();
const Swal = require("sweetalert2");

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.message === "Token Expired") {
      Swal.fire("Token Expired", "Please Login Again", "info");
      localStorage.removeItem("user");
    } else {
      localStorage.removeItem("user");
    }
    return Promise.reject(new Error("Token Expired").message);
  }
);

export default axiosApiInstance;
