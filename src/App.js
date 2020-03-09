import React, { Component } from "react";
import "./App.css";
import "./Home.scss";
import MyHeader from "./components/MyHeader";
import MyLogin from "./components/MyLogin";
import MyRegistration from "./components/MyRegistration";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import MyChat from "./components/MyChat";
import CreatePost from "./components/CreatePost";
import IndexPage from "./components/Index";
import MyPostEdit from "./components/MyPostEdit";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MyHeader />
          <Route exact path="/" component={IndexPage} />
          <Route path="/MyLogin" component={MyLogin} />
          <Route path="/MyRegistration" component={MyRegistration} />
          <Route path="/MyChat" component={MyChat} />
          <Route path="/Home" component={Home} />
          <Route path="/LandingPage" component={LandingPage} />
          <Route path="/CreatePost" component={CreatePost} />
          <Route path="/Logout" component={MyLogin} />
          <Route path="/MyPostEdit" component={MyPostEdit} />
        </Router>
      </div>
    );
  }
}

export default App;
