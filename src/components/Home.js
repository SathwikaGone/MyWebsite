import React, { Component } from "react";
// import { connect } from "react-redux";
// import createpost from "../redux/actions/index";

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
    fetch("https://jsonplaceholder.typicode.com/posts", {
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
    // e.preventDefault();
    // this.setState();
    // const obj = {
    //   userId: this.state.userid,
    //   id: this.state.itemid,
    //   title: this.state.title,
    //   body: this.state.body
    // };
    // this.props.dispatch(createpost(obj));
    console.log("submitted");
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
          <button onSubmit={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
// const mapPropsToState=(state)=>{
//   return

// }

// const mapDispatchToState = dispatch => {
//   return {
//     createpost: () => dispatch(createpost())
//   };
// };

// export default connect(mapDispatchToState)(Home);

export default Home;
