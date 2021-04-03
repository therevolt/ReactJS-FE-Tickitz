const initState = {
  order: null,
  loading: false,
  error: null,
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_ORDER":
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
