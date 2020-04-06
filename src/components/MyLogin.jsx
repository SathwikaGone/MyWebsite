import React, { Component } from "react";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import * as Actions from "../redux/actions/index";
import { userInfo } from "os";
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
      marginTop: "5px",
    }}
  >
    {txtLbl}
  </label>
);
// interface IState {
//   uemail: string;
//   upassword: string;
//   error: string;
//   isValid: boolean;
//   result: [];
// }
// interface Props {
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
// }

export class MyLogin extends Component {
  state = {
    uemail: "",
    upassword: "",
    error: "",
    isValid: true,
    result: [],
    token: "",
    Failed: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log([e.target.name] + " is " + e.target.value);
  };

  onClear = (e) => {
    console.log("in clear");
    this.setState({
      uemail: "",
      upassword: "",
      error: "",
      isValid: true,
    });
  };

  onSubmit = () => {
    let userInfo = { email: this.state.uemail, password: this.state.upassword };
    console.log("in OnSubmit");
    this.setState({ error: "" });
    if (this.state.upassword.length < 6) {
      this.setState({
        isValid: false,
        error: "Password length must be more than 5 characters",
      });
    } else {
      this.props.dispatch(Actions.checkUsers(userInfo));

      this.onChangePage();
    }
  };

  onChangePage = () => {
    if (this.state.Failed === "Login Failed") {
      this.setState({
        isValid: false,
        error: "Login failed",
      });
    } else {
      this.props.dispatch(Actions.loginStatus("true"));

      this.props.history.push("./Home");
      sessionStorage.setItem("Token", this.state.token);
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
    if (
      newProps.result !== prevState.result ||
      newProps.Failed !== prevState.Failed
    ) {
      console.log(" in Derived state newprops from result", newProps.result);
      return {
        result: newProps.result,
        token: newProps.token,
        Failed: newProps.LoginUnsuccessfull,
      };
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
              data-test="email"
              type="email"
              id="ulemail"
              name="uemail"
              value={this.state.uemail}
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

const mapStateToProps = (state) => {
  return {
    result: state.login.CurrentUser,
    token: state.login.token,
    Failed: state.login.LoginUnsuccessfull,
  };
};

export default connect(mapStateToProps)(MyLogin);

// export default MyLogin;
