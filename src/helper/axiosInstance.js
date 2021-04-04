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
    if (error) {
      Swal.fire("Token Expired", `Pelase Login Again! ${process.env.REACT_APP_URL_API}`, "info");
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
