import React, { Component } from "react";
import logo from "../Asserts/3ccacf2c-48d1-4e4e-b3be-e804a590f636_200x200.png";
import { Link } from "react-router-dom";

class MyHeader extends Component {
  render() {
    return (
      <div>
        <header>
          <img id="logo" src={logo} alt="working on it" />

          <h2>Shopping Buddy</h2>

          <nav>
            <div className="linkright">
              <Link className="headerLink" to="/MyLogin">
                Login
              </Link>
              <Link className="headerLink" to="/MyRegistration">
                Register
              </Link>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default MyHeader;
