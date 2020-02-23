import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../redux/actions";

const ErrorValidationLabel = ({ txtLbl }) => (
  <label
    htmlFor=""
    style={{
      color: "red",
      display: "block",
      backgroundColor: "#eedc82",
      textAlign: "center",
      width: "86%",
      minHeight: "30px",
      marginTop: "5px"
    }}
  >
    {txtLbl}
  </label>
);
class MyRegistration extends Component {
  state = {
    uname: "",
    uemail: "",
    uphonenumber: "",
    upassword: "",
    urepassword: "",
    error: "",
    isValid: true,
    result: []
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
      result: []
    });
  };

  componentDidMount = () => {
    this.props.dispatch(Actions.loginUser());
  };

  static getDerivedStateFromProps(newProps, prevState) {
    console.log("new props in derived state", newProps.result);
    if (newProps.result !== prevState.result) {
      console.log(" in Derived state newprops from result", newProps.result);
      return { result: newProps.result };
    }
    return null;
  }

  onSubmit = e => {
    this.setState({ error: "" });
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
    if (this.state.error === "" || this.state.error === "undefined") {
      let Unique = this.state.result.filter(record => {
        if (record.email === this.state.uemail) {
          return "Duplicate";
        }
        return "";
      });
      if (Unique.length > 0) {
        this.setState({
          isValid: false,
          error: "Email already exist"
        });
      } else {
        this.props.dispatch(Actions.registerUser(newUser));
        this.onClear();
        this.props.history.push("./MyLogin");
      }
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
          {renderValidationError}
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
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    result: state.login.signUpUsersList
  };
};

export default connect(MapStateToProps)(MyRegistration);
// export default MyRegistration;
