import * as Types from "./types";

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
