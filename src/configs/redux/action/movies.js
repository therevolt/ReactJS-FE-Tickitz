import axiosApiInstance from "../../../helper/axiosInstance";

export const getMovies = () => {
  return (dispatch) => {
    dispatch({ type: "SET_LOAD_MOVIE", payload: true });
    axiosApiInstance
      .get(`${process.env.REACT_APP_URL_API}/v1/movies`)
      .then((res) => {
        dispatch({ type: "GET_MOVIE", payload: res.data.data });
        dispatch({ type: "SET_LOAD_MOVIE", payload: false });
      })
      .catch(() => {
        dispatch({ type: "LOGIN_USER", payload: "" });
        dispatch({ type: "SET_LOAD_MOVIE", payload: false });
      });
  };
};

export const getMoviesHome = () => {
  return (dispatch) => {
    dispatch({ type: "SET_LOAD_MOVIE", payload: true });
    axiosApiInstance
      .get(`${process.env.REACT_APP_URL_API}/v1/movies?page=1&limit=12`)
      .then((res) => {
        dispatch({ type: "GET_MOVIE_HOME", payload: res.data.data.result });
        dispatch({ type: "SET_LOAD_MOVIE", payload: false });
      })
      .catch(() => {
        dispatch({ type: "LOGIN_USER", payload: "" });
        dispatch({ type: "SET_LOAD_MOVIE", payload: false });
      });
  };
};
