import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

class Home extends Component {
  state = {
    userId: "",
    pid: "",
    title: "",
    body: "",
    posts: [],
    obj: []
  };
  componentDidMount() {
    //https://jsonplaceholder.typicode.com/posts?_limit=7
    // fetch("https://jsonplaceholder.typicode.com/posts?_limit=7", {
    //   method: "GET",
    //   header: { "Content-Type": "application/json" }
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       posts: data
    //     });
    //     console.log(data);
    //   });
    // console.log(this.state.posts);
    // this.props.dispatch(Actions.readpost());
    console.log("readpost in component did mount ", this.state.posts);
  }

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
  };

  componentDidUpdate(newProps, prevState) {
    if (newProps.list !== prevState.posts) {
      console.log("in component will update", newProps.result);
      this.setState({ posts: newProps.list });
      console.log("result in state", this.state.posts);
    }
  }

  deletePost = (e, pid) => {
    e.preventDefault();
    this.props.dispatch(Actions.deletepost(pid));
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
            <input
              name="title"
              value={this.state.title || ""}
              onChange={this.onChange}
            ></input>
          </label>
          <label>
            Body
            <input
              name="body"
              value={this.state.body || ""}
              onChange={this.onChange}
            ></input>
          </label>
          <button onClick={this.onSubmit}>Submit</button>
        </form>
        <div>
          <p>Posts:</p>
          <div className="allposts">
            {this.state.posts.map(post => (
              <div className="singlepost">
                <p>Title: {post.title}</p>
                <br /> <p>Body: {post.body}!</p>
                <br />
                <button
                  style={{ maxWidth: "50px" }}
                  onClick={e => this.deletePost(e, post.pid)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    result: state.postReducer.post,
    list: state.postReducer.list
  };
};

// const mapDispatchToState = dispatch => {
//   return {
//     createpost: () => dispatch(Actions.createpost())
//   };
// };

export default connect(mapStateToProps)(Home);

// export default Home;
