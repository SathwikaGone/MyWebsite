import { combineReducers } from "redux";
import login from "./login";
import createpost from "./createpost";

export default combineReducers({
  login,
  createpost

  //timesheet: CreatTimeSheet, another way of creating reducers
});
