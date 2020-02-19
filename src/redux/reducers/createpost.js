import * as Types from "../actions/types";

const initialstate = {
  post: {
    userId: "",
    id: "",
    title: "",
    body: ""
  }
};

const handleCreatepostServerResponseSuccess = (state, action) => {
  console.log("REdux in responce success" + JSON.stringify(action));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      result: Object.assign({}, action.result)
    });
  }
  console.log("STATE ->" + JSON.stringify(newState));
  return { ...newState };
};
const handlecreatepostServerResponseError = (state, action) => {
  let newState = { ...state };
  return { ...newState };
};
const createpost = (state = initialstate, action) => {
  switch (action.type) {
    case Types.CREATE_POST:
      return { post: [...state.post.concat(action.payload)] };
      break;
    case Types.LOGIN_USER_SERVER_RESPONSE_ERROR:
      return handlecreatepostServerResponseError(state);
      break;
    case Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS:
      return handleCreatepostServerResponseSuccess(state, action);
  }
};

export default createpost;
