import * as Types from "./types";
let nextMessageId = 0;
let nextUserId = 0;

export const loginUser = () => {
  return {
    type: Types.LOGIN_USER
  };
};

export const registerUser = obj => {
  return {
    type: Types.REGISTER_USER,
    payload: obj
  };
};

export const createpost = obj => {
  return {
    type: Types.CREATE_POST,
    payload: obj
  };
};

export const readpost = () => {
  return {
    type: Types.READ_POST
  };
};

export const deletepost = id => {
  return {
    type: Types.DELETE_POST,
    payload: id
  };
};
export const editpost = obj => {
  return {
    type: Types.EDIT_POST,
    payload: obj
  };
};

export const loginStatus = p => {
  return {
    type: "LOGIN_STATUS",
    payload: p
  };
};

export const addMessage = (message, author) => {
  return {
    type: Types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
  };
};

export const addUser = name => {
  return { type: Types.ADD_USER, id: nextUserId++, name };
};

export const messageReceived = (message, author) => {
  return {
    type: Types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
  };
};

export const usersList = users => {
  return {
    type: Types.USERS_LIST,
    users
  };
};
