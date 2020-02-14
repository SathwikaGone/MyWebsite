import React, { Component } from "react";
// import { useHistory } from "react-router-dom";

class MyRegistration extends Component {
  state = {
    uname: "",
    uemail: "",
    uphonenumber: "",
    upassword: "",
    urepassword: "",
    res: ""
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
    let err = [];
    if (this.state.uname.length < 6) {
      console.log("name length");
      err.push({ message: "length of the name must be more than 5" });
      alert("length of the name must be more than 5");
    }
    if (this.state.uphonenumber.length !== 10) {
      console.log("Phone number");
      err.push({ message: " Phone number length is more then 10 digtes" });
      alert(" Phone number length is more then 10 digtes");
    }
    if (this.state.upassword !== this.state.urepassword) {
      console.log("password");
      err.push({ message: "Password and re-password doesnt match" });
      alert("Password and re-password doesnt match");
    }
    if (!err.length >= 0) {
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
        {this.state.res}
      </div>
    );
  }
}

export default MyRegistration;
