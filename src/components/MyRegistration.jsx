import React, { Component } from "react";
// import { useHistory } from "react-router-dom";

const ErrorValidationLabel = ({ txtLbl }) => (
  <label htmlFor="" style={{ color: "red", display: "block" }}>
    {txtLbl}
  </label>
);
var err = [];
class MyRegistration extends Component {
  state = {
    uname: "",
    uemail: "",
    uphonenumber: "",
    upassword: "",
    urepassword: "",
    res: []
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log([e.target.name] + " is " + e.target.value);
  };

  onClear = e => {
    console.log("in clear");
    this.setState({
      uname: "",
      uemail: "",
      uphonenumber: "",
      upassword: "",
      urepassword: "",
      isValid: true,
      error: "",
      res: []
    });
  };

  onSubmit = e => {
    const newUser = {
      name: this.state.uname,
      email: this.state.uemail,
      phonenumber: this.state.uphonenumber,
      password: this.state.upassword
    };

    console.log("in OnSubmit");

    if (this.state.uname.length < 6) {
      console.log("name length");
      // alert("length of the name must be more than 5");
      this.setState({
        isValid: false,
        error: "length of the name must be more than 5"
      });
    }
    if (this.state.uphonenumber.length !== 10) {
      console.log("Phone number");
      // alert(" Phone number length is more then 10 digtes");
      this.setState({
        isValid: false,
        error: "Phone number length is more then 10 digtes"
      });
    }
    if (this.state.upassword !== this.state.urepassword) {
      console.log("password");
      // alert("Password and re-password doesnt match");
      this.setState({
        isValid: false,
        error: "Password and re-password doesnt match"
      });
    }
    if (err === "") {
      fetch("http://localhost:5000/adduser", {
        method: "POST",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
        .then(response => {
          console.log("res", response);
          return response.json();
        })
        .catch(err => console.log(err));
      this.onClear();
    }
  };

  render() {
    const renderValidationError = this.state.isValid ? (
      ""
    ) : (
      <ErrorValidationLabel txtLbl={this.state.error} />
    );
    return (
      <div>
        <form id="regform">
          <h2>Registration Form</h2>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="uname"
              value={this.state.uname}
              onChange={this.onChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              id="email"
              name="uemail"
              value={this.state.uemail}
              onChange={this.onChange}
            />
          </label>

          <label>
            Phone Number:
            <input
              type="phonenumber"
              id="uphonenumber"
              name="uphonenumber"
              value={this.state.uphonenumber}
              onChange={this.onChange}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              id="upassword"
              name="upassword"
              value={this.state.upassword}
              onChange={this.onChange}
            />
          </label>

          <label>
            Re-Password:
            <input
              type="password"
              id="urepassword"
              name="urepassword"
              value={this.state.urepassword}
              onChange={this.onChange}
            />
          </label>

          <button type="button" onClick={this.onClear}>
            Clear
          </button>
          <button type="button" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
        {renderValidationError}
      </div>
    );
  }
}

export default MyRegistration;
