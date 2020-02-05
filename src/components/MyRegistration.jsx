import React, { Component } from "react";

class MyRegistration extends Component {
  constructor() {
    super();
    this.state = {
      uname: "",
      uemail: "",
      uphonenumber: "",
      upassword: "",
      urepassword: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log([e.target.name] + " is " + e.target.value);
  };

  onClear = e => {
    console.log("in clear");
    this.setState({
      uname: "",
      uemail: "",
      uphonenumber: "",
      upassword: "",
      urepassword: ""
    });
  };

  onSubmit = () => {
    console.log("in OnSubmit");
    if (this.state.uname.length < 6) {
      console.log("name length");
      alert("length of the name must be more than 5");
    }
    if (this.state.uphonenumber.length !== 10) {
      console.log("Phone number");
      alert(" Phone number length is more then 10 digtes");
    }
    if (this.state.upassword !== this.state.urepassword) {
      console.log("password");
      alert("Password and re-password doesnt match");
    }
  };

  render() {
    return (
      <form id="regform">
        <h2>Registration Form</h2>
        <label for="name"> Name:</label>
        <input
          type="text"
          id="name"
          name="uname"
          value={this.state.uname}
          onChange={this.onChange}
        />

        <label>Email:</label>
        <input
          type="email"
          id="email"
          name="uemail"
          value={this.state.uemail}
          onChange={this.onChange}
        />

        <label>Phone Number:</label>
        <input
          type="phonenumber"
          id="uphonenumber"
          name="uphonenumber"
          value={this.state.uphonenumber}
          onChange={this.onChange}
        />

        <label>Password:</label>
        <input
          type="password"
          id="upassword"
          name="upassword"
          value={this.state.upassword}
          onChange={this.onChange}
        />

        <label>Re-Password:</label>
        <input
          type="password"
          id="urepassword"
          name="urepassword"
          value={this.state.urepassword}
          onChange={this.onChange}
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

export default MyRegistration;
