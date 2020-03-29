import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Messages from "./Messages";
import * as Actions from "../../redux/actions";

function MessagesList() {
  let messages = useSelector(state => state.chatReducer.messages);
  const dispatch = useDispatch();
  console.log("message before", messages);
  if (Object.keys(messages).length < 1 && sessionStorage.getItem("messages")) {
    messages = JSON.parse(sessionStorage.getItem("messages"));
    dispatch(Actions.MessageLists(messages));
  }
  if (Object.keys(messages).length > 1) {
    sessionStorage.setItem("messages", JSON.stringify(messages));
  }
  console.log("message After", messages);

  return (
    <section id="messages-list">
      <ul>
        {messages.map(message => (
          <Messages key={message.id} {...message}></Messages>
        ))}
      </ul>
    </section>
  );
}
export default MessagesList;
