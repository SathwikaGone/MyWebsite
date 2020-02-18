import * as Types from "./types";

export const loginUser = (uemail, upassword) => {
  return {
    type: Types.LOGIN_USER,
    email: uemail,
    password: upassword
  };
};
