import axiosApiInstance from "../../../helper/axiosInstance";
import Swal from "sweetalert2";

export const getUser = () => {
  return (dispatch) => {
    dispatch({ type: "LOAD_USER" });
    axiosApiInstance
      .get(`${process.env.REACT_APP_URL_API}/v1/users/profile`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
        },
      })
      .then((res) => {
        if (result.data.status) {
          dispatch({ type: "LOGIN_USER", payload: res.data.data });
          dispatch({ type: "LOAD_USER" });
        } else {
          if (result.data.message === "Token Expired") {
            Swal.fire("TOKEN EXPIRED!", "Please Login Again!", "warning");
            localStorage.removeItem("user");
          }
        }
      })
      .catch(() => {
        Swal.fire("TOKEN EXPIRED", "Please Login Again", "info");
        localStorage.removeItem("user");
      });
  };
};
