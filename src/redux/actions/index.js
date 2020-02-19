import * as Types from "./types";

export const loginUser = (uemail, upassword) => {
  return {
    type: Types.LOGIN_USER,
    email: uemail,
    password: upassword
  };
};

const createpost = obj => {
  return {
    type: Types.CREATE_POST,
    payload: obj
  };
};

export default createpost;
