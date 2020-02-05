import React from "react";
import "./App.css";
import MyHeader from "./components/MyHeader";
import MyLogin from "./components/MyLogin";
import MyRegistration from "./components/MyRegistration";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MyHeader />
        <Route path="/MyLogin" component={MyLogin} />
        <Route path="/MyRegistration" component={MyRegistration} />
      </div>
    </Router>
  );
}

export default App;
