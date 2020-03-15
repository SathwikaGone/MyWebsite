import { combineReducers } from "redux";
import login from "./login";
import postReducer from "./postReducer";
import chatReducer from "./messages";

export default combineReducers({
  login,
  postReducer,
  chatReducer

  //timesheet: CreatTimeSheet, another way of creating reducers
});
