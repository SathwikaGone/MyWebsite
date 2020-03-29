import React, { Component } from "react";
import "./App.css";
import "./Home.scss";
import MyHeader from "./components/MyHeader";
import MyLogin from "./components/MyLogin";
import MyRegistration from "./components/MyRegistration";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import MyChat from "./components/MyChat";
import CreatePost from "./components/CreatePost";
import IndexPage from "./components/Index";
import Test from "./components/Test";
import MyPostEdit from "./components/MyPostEdit";
import NoMatch from "./components/NoMatch";
import { connect } from "react-redux";
import LazyLoadingPage from "./components/LazyLoadingPage";

class App extends Component {
  render() {
    var ele = "";
    let data = sessionStorage.getItem("Token");

    if (this.props.loggedin || data === "true") {
      ele = (
        <React.Fragment>
          <Route exact path="/MyChat" component={MyChat} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/LandingPage" component={LandingPage} />
          <Route exact path="/CreatePost" component={CreatePost} />
          <Route exact path="/MyPostEdit" component={MyPostEdit} />
        </React.Fragment>
      );
    }
    return (
      <div className="App">
        <Router>
          <MyHeader />
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/MyLogin" component={MyLogin} />
            <Route exact path="/MyRegistration" component={MyRegistration} />
            <Route exact path="/LazyLoadingPage" component={LazyLoadingPage} />
            {ele}
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedin: state.login.loggedIn
  };
};

export default connect(mapStateToProps)(App);
