const initState = {
  movie: null,
  movie_home: null,
  loading: true,
  error: null,
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return {
        ...state,
        movie: action.payload,
      };
    case "GET_MOVIE_HOME":
      return {
        ...state,
        movie_home: action.payload,
      };
    case "SET_LOAD_MOVIE":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
