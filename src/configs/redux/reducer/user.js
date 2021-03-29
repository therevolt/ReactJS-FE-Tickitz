const initState = {
  user: null,
  loading: false,
  error: null,
};

const userReducer = (state = initState, action) => {
  if (action.type === "LOGIN_USER") {
    return {
      ...state,
      user: action.payload,
    };
  } else {
    return state;
  }
};

export default userReducer;
