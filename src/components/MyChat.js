import React, { Component } from "react";
import "../Chat.css";
import SideBar from "./ChatComponents/SideBar";
import MessagesList from "./ChatComponents/MessagesList";
import AddMessage from "./ChatComponents/AddMessage";

function MyChat() {
  return (
    <div id="container">
      <SideBar />
      <section id="main">
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  );
}

export default MyChat;
