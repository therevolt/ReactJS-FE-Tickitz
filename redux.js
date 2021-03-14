const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  user: "Rama Seft",
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        user: "Rama Gans",
      };
    case "ADD_NAME":
      return {
        ...state,
        user: `${state.user} ${action.addName}`,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);
// console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log("State Change: ", store.getState());
});

// Dispatching Action
// store.dispatch({ type: "CHANGE_NAME" });
store.dispatch({ type: "ADD_NAME", addName: "Gans Bgt" });
console.log(store.getState());
