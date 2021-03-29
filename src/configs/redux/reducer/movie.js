const initState = {
  movie: null,
  loading: false,
  error: null,
};

const movieReducer = (state = initState, action) => {
  if (action.type === "GET_MOVIE") {
    return {
      ...state,
      movie: action.payload,
    };
  } else if (action.type === "SET_LOAD_MOVIE") {
    return {
      ...state,
      loading: action.payload,
    };
  } else {
    return state;
  }
};

export default movieReducer;
