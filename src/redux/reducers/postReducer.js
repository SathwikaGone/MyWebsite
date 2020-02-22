import * as Types from "../actions/types";

const initialstate = {
  post: [],
  list: []
};

// handle success

const createPostSuccess = (state = initialstate, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      post: Object.assign([], action.result)
    });
    return { ...newState };
  }
};

// handle error
const createPostError = (state, action) => {
  let newState = { ...state };
  return { ...newState };
};

const readPostSuccess = (state, action) => {
  console.log("REdux in responce success" + JSON.stringify(action));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      list: Object.assign([], action.result)
    });
  }
  console.log("STATE ->" + JSON.stringify(newState));
  return { ...newState };
};
const readPostError = (state, action) => {
  let newState = { ...state };
  return { ...newState };
};

const deletePostSuccess = (state, action) => {
  console.log("REdux in responce success" + JSON.stringify(action));
  let newState = { ...state };
  if (action.result !== undefined) {
    let listV = state.list;
    //let obj = listV.filter(item  => item.id === action.formbody);
    let res = listV.reducer((prev, cv) => {
      if (prev.id !== action.formbody) return prev.push(it);
    });
    newState = Object.assign({}, state, {
      list: Object.assign([], res)
    });
  }
  console.log("STATE ->" + JSON.stringify(newState));
  return { ...newState };
};

const deletePostError = state => {
  let newState = { ...state };
  return { ...newState };
};

// method
const postReducer = (state = initialstate, action) => {
  switch (action.type) {
    case Types.CREATE_POST:
      return { post: [...state.post.concat(action.payload)] };

    case Types.CREATE_POST_SERVER_RESPONSE_ERROR:
      return createPostError(state);

    case Types.CREATE_POST_SERVER_RESPONSE_SUCCESS:
      return createPostSuccess(state, action);
    case Types.DELETE_POST:
      return {
        post: [
          ...state.post.slice(0, action.payload),
          ...state.post.slice(action.payload + 1)
        ]
      };
    case Types.DELETE_POST_SUCCESS:
      return deletePostSuccess(state, action);
    case Types.DELETE_POST_ERROR:
      return deletePostError(state);
    case Types.READ_POST:
      return state;
    case Types.READ_POST_SERVER_RESPONSE_ERROR:
      return readPostError(state);
    case Types.READ_POST_SERVER_RESPONSE_SUCCESS:
      return readPostSuccess(state, action);
    default:
      return state;
  }
};

export default postReducer;
