import React, { Component } from "react";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import { loginUser, loginStatus } from "../redux/actions/index";
// import Facebook from "./Facebook";
// import FacebookLogin from "react-facebook-login";

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
class MyLogin extends Component {
  state = {
    uemail: "",
    upassword: "",
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
      uemail: "",
      upassword: "",
      error: "",
      isValid: true
    });
  };
  componentDidMount = () => {
    this.props.dispatch(loginUser());
  };

  onSubmit = () => {
    console.log("in OnSubmit");
    this.setState({ error: "" });
    if (this.state.upassword.length < 6) {
      this.setState({
        isValid: false,
        error: "Password length must be more than 5 characters"
      });
    } else {
      this.onChangePage();
    }
  };

  onChangePage = () => {
    if (this.state.result.length > 0) {
      let data = this.state.result;
      console.log("data ", data);
      const val = data.filter(record => {
        console.log("record email" + record.email);
        if (
          record.email === this.state.uemail &&
          record.password === this.state.upassword
        ) {
          return record;
        }
        return null;
      });
      console.log("val" + val);
      if (val.length > 0) {
        this.props.history.push("./Home");
        console.log(this.props.history);
        let p = {
          status: true,
          user: this.state.uemail,
          pwd: this.state.upassword
        };
        this.props.dispatch(loginStatus(p));
      } else {
        this.setState({
          isValid: false,
          error: "Login failed"
        });
      }
    }
  };

  // componentDidUpdate(newProps, prevState) {
  //   if (newProps.result !== prevState.result) {
  //     console.log("in component did mount", newProps.result);
  //     this.setState({ result: newProps.result });
  //     console.log("result in state", this.state.result);
  //   }
  // }

  static getDerivedStateFromProps(newProps, prevState) {
    console.log("new props in derived state", newProps.result);
    if (newProps.result !== prevState.result) {
      console.log(" in Derived state newprops from result", newProps.result);
      return { result: newProps.result };
    }
    return null;
  }
  render() {
    const renderValidationError = this.state.isValid ? (
      ""
    ) : (
      <ErrorValidationLabel txtLbl={this.state.error} />
    );
    return (
      <div>
        <form id="logform">
          <h2>Login Form</h2>
          {renderValidationError}
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="ulemail"
              name="uemail"
              value={this.state.uname}
              onChange={this.onChange}
            />
          </label>

          <label htmlFor="upassword">
            Password:
            <input
              type="password"
              id="ulpassword"
              name="upassword"
              value={this.state.upassword}
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
        {/** <Facebook />*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.login.signUpUsersList
  };
};

export default connect(mapStateToProps)(MyLogin);

// export default MyLogin;
