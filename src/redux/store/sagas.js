import {
  takeEvery,
  call,
  put,
  select,
  take,
  fork,
  all,
  takeLatest,
} from "redux-saga/effects";
import * as Types from "../actions/types";
import {
  GetDataFromServer,
  deletePost,
  GetDataFromServerToPost,
} from "../service";

function* fetchLoginUser(action) {
  try {
    const baseUrl = "http://localhost:8000/getuser";
    // "https://ojpkbkzf91.execute-api.us-east-2.amazonaws.com/devp/getuser";

    console.log("Action in fetchloginUser at sagas->" + JSON.stringify(action));
    const reqMethod = "";
    const response = yield call(GetDataFromServer, baseUrl, reqMethod, "");

    const result = yield response.json();
    console.log("ADS" + result.workingdetails);
    console.log("Result ->" + JSON.stringify(result));
    console.log("Result Json" + result);
    if (result.error) {
      yield put({
        type: "LOGIN_USER_SERVER_REPONSE_ERROR",
        error: result.error,
      });
    } else {
      yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }
}

function* validateUser(action) {
  try {
    const baseUrl = "http://localhost:8000/checkUser";
    // "https://ojpkbkzf91.execute-api.us-east-2.amazonaws.com/devp/getuser";

    const reqMethod = "POST";
    const response = yield call(
      GetDataFromServer,
      baseUrl,
      reqMethod,
      action.payload
    );
    const result = yield response.json();
    console.log(result);
    if (result.error) {
      yield put({
        type: "LOGIN_USER_SERVER_REPONSE_ERROR",
        error: result.error,
      });
    } else if (result.failed) {
      yield put({
        type: "LOGIN_FAIL",
      });
    } else {
      yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }
}

function* registerNewUser(action) {
  try {
    const baseUrl =
      // "https://ojpkbkzf91.execute-api.us-east-2.amazonaws.com/devp/adduser";
      "http://localhost:8000/adduser";
    const formBody = action.payload;
    const reqMethod = "POST";
    const response = yield call(
      GetDataFromServer,
      baseUrl,
      reqMethod,
      formBody
    );
    const result = yield response.text();
    console.log("result in json", result);
    if (result.error) {
      console.log("not added to db", result.error);
      yield put({ type: Types.REGISTER_USER_ERROR, error: result.error });
    } else {
      console.log("added to db", result);
      yield put({ type: Types.REGISTER_USER_SUCCESS, result });
    }
  } catch (error) {
    console.log("error in sagas registerNewUser method: ", error);
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
        error: result.error,
      });
    } else {
      yield put({ type: Types.CREATE_POST_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    console.log("error at saga createpost", error);
  }
}

function* deletepost(action) {
  try {
    const baseUrl = "https://jsonplaceholder.typicode.com/posts";
    let formBody = action.payload;
    const mustUrl = baseUrl + "/" + formBody;

    const response = yield call(deletePost, mustUrl);
    const result = yield response;
    if (result.error) {
      yield put({
        type: Types.DELETE_POST_ERROR,
        error: result.error,
      });
    } else {
      yield put({
        type: Types.DELETE_POST_SUCCESS,
        result,
      });
    }
  } catch (error) {
    console.log("error at saga deletepost", error);
  }
}

function* readallpost(action) {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  const reqMethod = "";
  const response = yield call(GetDataFromServer, baseUrl, reqMethod, "");
  const result = yield response.json();
  if (result.error) {
    yield put({
      type: Types.READ_POST_SERVER_RESPONSE_ERROR,
      error: result.error,
    });
  } else {
    yield put({ type: Types.READ_POST_SERVER_RESPONSE_SUCCESS, result });
  }
}

function* editMyPost(action) {
  try {
    const baseUrl = "https://jsonplaceholder.typicode.com/posts";
    let formBody = action.payload;
    const mustUrl = baseUrl + "/" + formBody.id;
    const reqMethod = "PUT";

    const response = yield call(
      GetDataFromServerToPost,
      mustUrl,
      reqMethod,
      formBody
    );
    const result = yield response.json();
    if (result.error) {
      yield put({
        type: Types.EDIT_POST_ERROR,
        error: result.error,
      });
    } else {
      yield put({
        type: Types.EDIT_POST_SUCCESS,
        result,
      });
    }
  } catch (error) {
    console.log("error at saga editpost", error);
  }
}

export default function* rootSaga(params) {
  console.log("params", params);
  yield takeLatest(Types.LOGIN_USER, validateUser);
  yield takeLatest(Types.REGISTER_USER, registerNewUser);
  yield takeLatest(Types.CREATE_POST, createpost);
  yield takeLatest(Types.DELETE_POST, deletepost);
  yield takeLatest(Types.READ_POST, readallpost);
  yield takeLatest(Types.EDIT_POST, editMyPost);
  yield takeEvery(Types.ADD_MESSAGE, (action) => {
    action.author = params.username;
    params.socket.send(JSON.stringify(action));
  });
}
