import React, { Component } from "react";
// import logo from "../Asserts/3ccacf2c-48d1-4e4e-b3be-e804a590f636_200x200.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginStatus } from "../redux/actions/index";

class MyHeader extends Component {
  Signout = () => {
    let p = false;
    this.props.dispatch(loginStatus(p));
  };
  render() {
    let nav;
    if (this.props.loggedin === true) {
      nav = (
        <div className="linkright">
          <Link className="headerLink" to="/Home">
            Home
          </Link>
          <Link className="headerLink" to="/MyChat">
            Chat
          </Link>
          <Link className="headerLink" to="/CreatePost">
            CreatePost
          </Link>
          <Link className="headerLink" to="/" onClick={this.Signout.bind(this)}>
            Signout
          </Link>
        </div>
      );
    } else {
      nav = (
        <div className="linkright">
          <Link className="headerLink" to="/MyLogin">
            Signin
          </Link>
          <Link className="headerLink" to="/MyRegistration">
            Register
          </Link>
        </div>
      );
    }
    return (
      <div>
        <header>
          {/**<img id="logo" src={logo} alt="working on it" /> */}
          <h1 style={{ marginLeft: "2em" }}>
            <Link className="CYCNav" to="/">
              CYC
            </Link>
          </h1>
          <nav>{nav}</nav>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedin: state.login.loggedIn
  };
};
export default connect(mapStateToProps)(MyHeader);
