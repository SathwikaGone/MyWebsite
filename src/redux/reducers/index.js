import { combineReducers } from "redux";
import login from "./login";
import postReducer from "./postReducer";

export default combineReducers({
  login,
  postReducer

  //timesheet: CreatTimeSheet, another way of creating reducers
});
