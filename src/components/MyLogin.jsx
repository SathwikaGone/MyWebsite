import React, { Component } from "react";
import Facebook from "./Facebook";
// import FacebookLogin from "react-facebook-login";

class MyLogin extends Component {
  state = {
    uname: "",
    upassword: ""
  };

  onSubmit = () => {
    console.log("in OnSubmit");
    if (this.state.uname.length < 6) {
      console.log("name length");
      alert("length of the name must be more than 5");
    }

    if (this.state.upassword.length < 6) {
      console.log("password");
      alert("Password length must be more that 5");
    }
  };
  render() {
    return (
      <div>
        <form id="logform">
          <h2>Login Form</h2>

          <label for="email">
            Email:
            <input
              type="email"
              id="ulemail"
              name="email"
              value={this.state.uname}
            />
          </label>

          <label for="upassword">
            Password:
            <input
              type="password"
              id="ulpassword"
              name="upassword"
              value={this.state.uname}
            />
          </label>

          <button type="button" onClick={this.onClear}>
            Clear
          </button>
          <button type="button" onClick={this.onSubmit}>
            Submit
          </button>
        </form>

        {/** <Facebook />*/}
      </div>
    );
  }
}

export default MyLogin;
