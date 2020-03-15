import * as Types from "../actions/types";

var initialState = {
  messages: [],
  users: []
};
const messages = (state = initialState, action) => {
  let newArray = {};
  switch (action.type) {
    case Types.ADD_MESSAGE:
    case Types.MESSAGE_RECEIVED:
      newArray = Object.assign({}, state, {
        messages: [
          ...state.messages.concat({
            message: action.message,
            author: action.author,
            id: action.id
          })
        ]
      });
      return newArray;
    case Types.ADD_USER:
      newArray = Object.assign({}, state, {
        users: [
          ...state.concat({
            name: action.name,
            id: action.id
          })
        ]
      });
      return newArray;
    case Types.USERS_LIST:
      return Object.assign({}, state, {
        users: [action.users]
      });
    default:
      return state;
  }
};
export default messages;
