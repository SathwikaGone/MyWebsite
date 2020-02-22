import * as Types from "./types";

export const loginUser = (uemail, upassword) => {
  return {
    type: Types.LOGIN_USER,
    email: uemail,
    password: upassword
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
