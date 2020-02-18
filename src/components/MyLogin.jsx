import React, { Component } from "react";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import { loginUser } from "../redux/actions/index";
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

  componentDidMount() {}

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

  onSubmit = () => {
    console.log("in OnSubmit");
    if (this.state.upassword.length < 6) {
      this.setState({
        isValid: false,
        error: "Phone number length is more then 10 digtes"
      });
    } else {
      const { uemail, upassword } = this.state;
      // this.props.history.push("/Home");
      this.props.dispatch(loginUser(uemail, upassword));
      //   //Get Details
      //   fetch("http://localhost:5000/getuser", {
      //     method: "GET", //  mode: "no-cors", // this is not required, this will disallow cors requests. this is the error
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   })
      //     .then(response => {
      //       console.log(response);
      //       return response.json();
      //     })
      //     .then(data => {
      //       console.log(data);
      //       this.setState({
      //         res: data
      //       });
      //       // console.log(this.state.res);
      //     })
      //     .catch(error => {
      //       console.log(error);
      //     });
      //   console.log("res", this.state.res);
      //   // this.onChangePage();
    }
  };

  // onChangePage() {
  //   console.log("res val in on change page ", this.state.res);
  //   if (this.state.result.length > 0) {
  //     let data = this.state.result;
  //     console.log("data ", data);
  //     const val = data.filter(record => {
  //       console.log("record email" + record.email);
  //       if (
  //         record.email === this.state.uemail &&
  //         record.password === this.state.upassword
  //       ) {
  //         return record;
  //       }
  //     });
  //     console.log("val" + val);
  //   }
  // }

  componentDidUpdate(newProps, prevState) {
    if (newProps.result !== prevState.result) {
      console.log("in component did mount", newProps.result);
      this.setState({ result: newProps.result });
      console.log("result in state", this.state.result);
    }
  }

  static getDerivedStateFromProps(newProps, prevState) {
    console.log(newProps.result);
    if (newProps.result !== prevState.result) {
      console.log(" in Derived state newprops from result", newProps.result);
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
        {console.log(this.state.result)}
        {/** <Facebook />*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.login.result
  };
};

export default connect(mapStateToProps)(MyLogin);

// export default MyLogin;
