import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

class CreatePost extends Component {
  state = {
    userId: "",
    pid: "",
    title: "",
    body: "",
    posts: [],
    obj: []
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const obj = {
      userId: this.state.userId,
      pid: this.state.pid,
      title: this.state.title,
      body: this.state.body
    };
    this.props.dispatch(Actions.createpost(obj));
    console.log("submitted");
    alert("Your new post was created. Thank you");
    this.props.history.push("/Home");
  };

  render() {
    return (
      <div>
        <form>
          <p style={{ textAlign: "center" }}> create new post</p>
          <label>
            User Id
            <input
              name="userId"
              value={this.state.userId || ""}
              onChange={this.onChange}
            ></input>
          </label>
          <label>
            Item Id
            <input
              name="pid"
              value={this.state.pid || ""}
              onChange={this.onChange}
            ></input>
          </label>
          <label>
            Title
            <textarea
              style={{ height: "3.5em" }}
              name="title"
              value={this.state.title || ""}
              onChange={this.onChange}
            ></textarea>
          </label>
          <label>
            Body
            <textarea
              name="body"
              placeholder="Maximum of 200 characters"
              value={this.state.body || ""}
              onChange={this.onChange}
            ></textarea>
          </label>
          <button type="reset">Clear</button>
          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(CreatePost);
