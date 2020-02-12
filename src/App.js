import React from "react";
import "./App.css";
import MyHeader from "./components/MyHeader";
import MyLogin from "./components/MyLogin";
import MyRegistration from "./components/MyRegistration";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <MyHeader />
        <Route path="/MyLogin" component={MyLogin} />
        <Route path="/MyRegistration" component={MyRegistration} />
      </Router>
      <br />
    </div>
  );
}

export default App;
