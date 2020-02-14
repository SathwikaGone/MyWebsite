import React, { Component } from "react";
// import Facebook from "./Facebook";
// import FacebookLogin from "react-facebook-login";

class MyLogin extends Component {
  state = {
    uemail: "",
    upassword: "",
    res: []
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
      res: []
    });
  };

  onSubmit = () => {
    console.log("in OnSubmit");
    if (this.state.upassword.length < 6) {
      console.log("password");
      alert("Password length must be more that 5");
    } else {
      //Get Details
      fetch("http://localhost:5000/getuser", {
        method: "GET", //  mode: "no-cors", // this is not required, this will disallow cors requests. this is the error
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          console.log(data);
          this.setState({
            res: data
          });
          // console.log(this.state.res);
        })
        .catch(error => {
          console.log(error);
        });
      console.log("res", this.state.res);
      // this.onChangePage();
    }
  };

  // onChangePage() {
  //   console.log("res val in on change page ", this.state.res);
  //   if (this.state.res.length > 0) {
  //     let data = this.state.res;
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
  render() {
    return (
      <div>
        <form id="logform">
          <h2>Login Form</h2>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="ulemail"
              name="email"
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

export default MyLogin;
