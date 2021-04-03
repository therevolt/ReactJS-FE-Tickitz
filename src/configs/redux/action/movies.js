import axiosApiInstance from "../../../helper/axiosInstance";

export const getMovies = () => {
  return (dispatch) => {
    axiosApiInstance
      .get(`${process.env.REACT_APP_URL_API}/v1/movies`)
      .then((res) => {
        dispatch({ type: "GET_MOVIE", payload: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
