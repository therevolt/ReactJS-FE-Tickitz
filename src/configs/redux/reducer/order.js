const initState = {
  order: null,
  loading: false,
  error: null,
};

const orderReducer = (state = initState, action) => {
  if (action.type === "SET_ORDER") {
    return {
      ...state,
      user: action.payload,
    };
  } else {
    return state;
  }
};

export default orderReducer;
