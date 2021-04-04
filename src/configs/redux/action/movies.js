import axiosApiInstance from "../../../helper/axiosInstance";

export const getMovies = () => {
  return (dispatch) => {
    axiosApiInstance
      .get(`${process.env.REACT_APP_URL_API}/v1/movies`)
      .then((res) => {
        dispatch({ type: "GET_MOVIE", payload: res.data.data });
      })
      .catch(() => {
        dispatch({ type: "LOGIN_USER", payload: "" });
      });
  };
};

export const getMoviesHome = () => {
  return (dispatch) => {
    axiosApiInstance
      .get(`${process.env.REACT_APP_URL_API}/v1/movies?page=1&limit=12`)
      .then((res) => {
        dispatch({ type: "GET_MOVIE_HOME", payload: res.data.data.result });
      })
      .catch(() => {
        dispatch({ type: "LOGIN_USER", payload: "" });
      });
  };
};
