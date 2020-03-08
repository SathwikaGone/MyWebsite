import * as Types from "../actions/types";

const initialstate = {
  post: []
};

// method
const postReducer = (state = initialstate, action) => {
  switch (action.type) {
    case Types.CREATE_POST:
      return state;
    case Types.CREATE_POST_SERVER_RESPONSE_ERROR:
      return createPostError(state);
    case Types.CREATE_POST_SERVER_RESPONSE_SUCCESS:
      return createPostSuccess(state, action);
    case Types.DELETE_POST:
      return { ...state, Deleteid: action.payload };
    //{
    //   post: [
    //     ...state.post.slice(0, action.payload),
    //     ...state.post.slice(action.payload + 1)
    //   ]
    // };
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
    case Types.EDIT_POST:
      return { ...state, editpostclick: action.payload };
    case Types.EDIT_POST_ERROR:
      return editPostError(state);
    case Types.EDIT_POST_SUCCESS:
      return editPostSuccess(state, action);
    default:
      return state;
  }
};

// handle create post success
const createPostSuccess = (state = initialstate, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      post: [...state.post.concat(action.result)]
    });
    return { ...newState };
  }
};

// handle create post error
const createPostError = (state, action) => {
  let newState = { ...state };
  return { ...newState };
};

// handle read post success
const readPostSuccess = (state, action) => {
  console.log("REdux in responce success" + JSON.stringify(action));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      post: Object.assign([], action.result)
    });
  }
  console.log("STATE ->" + JSON.stringify(newState));
  return { ...newState };
};

// handle read post error
const readPostError = (state, action) => {
  let newState = { ...state };
  return { ...newState };
};

// handle edit post success
const editPostSuccess = (state, action) => {
  return state;
};

// handle edit post error
const editPostError = state => {
  return state;
};

// handle delete post success
const deletePostSuccess = (state, action) => {
  console.log("REdux in responce success" + JSON.stringify(action));
  let newState = { ...state };
  // if (action.result !== undefined) {
  // let listV = state.post;
  // let p = listV.filter(item => {
  //   if (item.id !== state.Deleteid) return item;
  // });
  //let obj = listV.filter(item  => item.id === action.formbody);
  // let res = listV.reduce((prev, cv) => {
  //   if (cv.id !== state.Deleteid) prev.push(cv);
  //   return prev;
  // }, []);
  newState = Object.assign({}, state, {
    post: [
      ...state.post.slice(0, state.Deleteid - 1),
      ...state.post.slice(state.Deleteid)
    ]
  });
  // newState = Object.assign({}, state, {
  //   post: Object.assign([], res)
  // });
  // }
  console.log("STATE ->" + JSON.stringify(newState));
  return { ...newState };
};

// handle delete post error
const deletePostError = state => {
  let newState = { ...state };
  return { ...newState };
};

export default postReducer;
