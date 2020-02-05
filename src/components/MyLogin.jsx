import React, { Component } from "react";

class MyLogin extends Component {
  state = {
    uname: "",
    password: ""
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
      <form id="logform">
        <h2>Login Form</h2>

        <label for="email">Email:</label>
        <input
          type="email"
          id="ulemail"
          name="email"
          value={this.state.uname}
        />

        <label for="upassword">Password:</label>
        <input
          type="password"
          id="ulpassword"
          name="upassword"
          value={this.state.uname}
        />

        <button type="button" onClick={this.onClear}>
          Clear
        </button>
        <button type="button" onClick={this.onSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default MyLogin;
