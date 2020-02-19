import {
  takeEvery,
  call,
  put,
  select,
  take,
  fork,
  all,
  takeLatest
} from "redux-saga/effects";
import * as Types from "../actions/types";
import { GetDataFromServer, deleteTodoAPI } from "../service";

function* fetchLoginUser(action) {
  try {
    const baseUrl = "http://localhost:5000/getuser";

    console.log("Action in fetchloginUser at sagas->" + JSON.stringify(action));
    let formBody = {};
    formBody.email = action.email; //action.code;
    formBody.password = action.password; //action.provider;
    // formBody.age = "34";
    //const reqMethod = "POST";
    const reqMethod = "";
    // const loginUrl = baseUrl + "/view";
    const response = yield call(GetDataFromServer, baseUrl, reqMethod, "");

    const result = yield response.json();
    console.log("ADS" + result.workingdetails);
    console.log("Result ->" + JSON.stringify(result));
    console.log("Result Json" + result);
    if (result.error) {
      yield put({
        type: "LOGIN_USER_SERVER_REPONSE_ERROR",
        error: result.error
      });
    } else {
      yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }
}

function* createpost(action) {
  try {
    const reqMethod = "POST";
    const baseUrl = "https://jsonplaceholder.typicode.com/posts";
    let formBody = action.payload;

    console.log("Action in createpost saga->" + JSON.stringify(action));
    const response = yield call(
      GetDataFromServer,
      baseUrl,
      reqMethod,
      formBody
    );
    const result = yield response.json();
    if (result.error) {
      yield put({
        type: Types.CREATE_POST_SERVER_RESPONSE_ERROR,
        error: result.error
      });
    } else {
      yield put({ type: Types.CREATE_POST_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    console.log("error at saga createpost", error);
  }
}

export default function* rootSaga(params) {
  yield takeLatest(Types.LOGIN_USER, fetchLoginUser);
  yield takeLatest(Types.CREATE_POST, createpost);

  console.log("ROOT SAGA");
}
