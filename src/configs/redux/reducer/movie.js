const initState = {
  movie: null,
  loading: false,
  error: null,
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return {
        ...state,
        movie: action.payload,
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
