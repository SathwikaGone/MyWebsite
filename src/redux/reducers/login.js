import * as Types from "../actions/types";

// Some of the properties are redundant.
const initialUserObj = {
  signUpUsersList: [],
  pending: false,
  loggedIn: false,
  isValidToken: false,
  isBusiness: false,
  empDetails: {},
  registeredUserDetails: {},
  result: {},
  user: {
    email: "",
    displayName: "",
    registered: false,
    refreshToken: "",
    expiresIn: "",
    emailVerified: false,
    validSince: "",
    disabled: false,
    lastLoginAt: "",
    createdAt: ""
  }
};

//storing fetched users to redux store
const handleLoginSuccess = (state, action) => {
  console.log("REdux" + JSON.stringify(action));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      signUpUsersList: Object.assign([], action.result)
    });
  }
  console.log("STATE->" + JSON.stringify(newState));
  return { ...newState };
};
const handleLoginError = (state, action) => {
  let newState = { ...state };
  return { ...newState };
};

//storing Registered details

const registernewUser = (state, action) => {
  let newState = { ...state };
  if (action.payload !== undefined) {
    newState = Object.assign({}, state, {
      registeredUserDetails: Object.assign([], action.payload)
    });
  }
  console.log("STATE->" + JSON.stringify(newState));
  return { ...newState };
};
const registerUserSuccess = (state, action) => {
  let newState = { ...state };
  return { ...newState };
};
const registerUserError = state => {
  let newState = { ...state };
  return { ...newState };
};

export default (state = initialUserObj, action) => {
  switch (action.type) {
    case Types.LOGIN_USER:
      return state;
    case Types.LOGIN_USER_SERVER_RESPONSE_ERROR:
      return handleLoginError(state);
    case Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS:
      return handleLoginSuccess(state, action);
    case Types.REGISTER_USER:
      return registernewUser(state, action);
    case Types.REGISTER_USER_SUCCESS:
      return registerUserSuccess(state, action);
    case Types.REGISTER_USER_ERROR:
      return registerUserError(state);
    case "LOGIN_STATUS":
      let newState = { ...state };
      newState = Object.assign({}, state, {
        loggedIn: action.payload.status,
        presentUser: action.payload.user,
        presentUserPWD: action.payload.pwd
      });
      console.log("STATE->" + JSON.stringify(newState));
      return { ...newState };
    default:
      return state;
  }
};
