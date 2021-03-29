import { createStore } from "redux";
import rootReducer from "./reducer/index";
const createStored = createStore;

export default createStored(rootReducer);
