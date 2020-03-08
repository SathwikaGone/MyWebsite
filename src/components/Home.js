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
    this.props.dispatch(Actions.readpost());
    console.log("readpost in component did mount ", this.state.posts);
  }

  componentDidUpdate(newProps, prevState) {
    if (newProps.result !== prevState.posts) {
      console.log("in component will update", newProps.result);
      this.setState({ posts: newProps.result });
      console.log("result in state", this.state.posts);
    }
  }

  deletePost = (e, pid) => {
    e.preventDefault();
    this.props.dispatch(Actions.deletepost(pid));
  };
  editPost = (e, post) => {
    e.preventDefault();
    this.props.dispatch(Actions.editpost(post));
    this.props.history.push("/MyPostEdit");
  };

  render() {
    let post = this.state.posts;
    let posts = post.reverse();
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>
          <i>POSTS</i>
        </h2>
        <div className="allposts">
          {posts.map(post => (
            <div className="singlepost">
              <p id="post-title">
                <b>{post.title}</b>
              </p>
              <br /> <p> {post.body}!</p>
              <button
                style={{ maxWidth: "50px", bottom: "10px" }}
                onClick={e => this.deletePost(e, post.id)}
              >
                Delete
              </button>
              <button
                style={{ maxWidth: "50px", bottom: "10px" }}
                onClick={e => this.editPost(e, post)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    result: state.postReducer.post
  };
};

// const mapDispatchToState = dispatch => {
//   return {
//     createpost: () => dispatch(Actions.createpost())
//   };
// };

export default connect(mapStateToProps)(Home);

// export default Home;
