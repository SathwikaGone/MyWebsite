import React, { Component } from "react";
import "../Chat.css";
import SideBar from "./ChatComponents/SideBar";
import MessagesList from "./ChatComponents/MessagesList";
import AddMessage from "./ChatComponents/AddMessage";

export default class MyChat extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <section id="main">
          <MessagesList />
          hey
          <AddMessage />
        </section>
      </div>
    );
  }
}
