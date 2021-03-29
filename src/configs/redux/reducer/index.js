import { combineReducers } from "redux";
import user from "./user";
import order from "./order";
import movie from "./movie";

export default combineReducers({ user, order, movie });
