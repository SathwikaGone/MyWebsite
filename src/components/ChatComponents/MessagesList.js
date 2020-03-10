import React from "react";
import { useSelector } from "react-redux";
import Messages from "./Messages";

function MessagesList() {
  const messages = useSelector(state => state.chatReducer.messages);
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
