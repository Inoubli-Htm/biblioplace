import { combineReducers } from "redux";
import authReducer from "./authReducer";
import allertReducer from "./allertReducer";
import userReducer from "./userReducer";
import livreReducer from "./livreReducer";

const rootReducers = combineReducers({
  authReducer,
  allertReducer,
  userReducer,
  livreReducer,
});
export default rootReducers;
