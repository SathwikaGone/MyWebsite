import React, { Component } from "react";

export default class Test extends Component {
  state = {
    email: "",
    uname: "",
    arr: []
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    let p = this.state.arr;
    let q = p.concat({ email: this.state.email, name: this.state.uname });
    this.setState({ arr: q });
  };
  render() {
    return (
      <div>
        <form>
          <label>
            email
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            ></input>
          </label>
          <label>
            name
            <input
              type="text"
              name="uname"
              value={this.state.uname}
              onChange={this.onChange}
            ></input>
          </label>
          <button onClick={this.onSubmit}> submit</button>
        </form>
        {this.state.arr.map(item => (
          <p>
            name: {item.name}, email: {item.email}
          </p>
        ))}
      </div>
    );
  }
}
