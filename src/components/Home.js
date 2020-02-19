import React, { Component } from "react";
import { connect } from "react-redux";
import createpost from "../redux/actions/index";

class Home extends Component {
  state = {
    userId: "",
    id: "",
    title: "",
    body: "",
    posts: [],
    obj: []
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=7", {
      method: "GET",
      header: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data
        });
        console.log(data);
      });
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
      id: this.state.id,
      title: this.state.title,
      body: this.state.body
    };
    this.props.dispatch(createpost(obj));
    console.log("submitted");
  };

  render() {
    {
      const p = this.state.posts.map(post => {
        return [
          <p>
            Title: {post.title} Body:{post.body}
          </p>
        ];
      });
    }
    return (
      <div>
        <form>
          <p style={{ textAlign: "center" }}> create new post</p>
          <label>
            User Id
            <input
              name="userId"
              value={this.state.userId}
              onChange={this.onChange}
            ></input>
          </label>
          <label>
            Item Id
            <input
              name="id"
              value={this.state.id}
              onChange={this.onChange}
            ></input>
          </label>
          <label>
            Title
            <input
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            ></input>
          </label>
          <label>
            Body
            <input
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            ></input>
          </label>
          <button onClick={this.onSubmit}>Submit</button>
        </form>

        <div>
          <p>Posts:</p>
          {this.state.posts.map(post => (
            <p>
              Hello, {post.title} from {post.body}!
            </p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.login.result
  };
};

const mapDispatchToState = dispatch => {
  return {
    createpost: () => dispatch(createpost())
  };
};

export default connect(mapDispatchToState)(Home);

// export default Home;
