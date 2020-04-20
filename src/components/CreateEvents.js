import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as Actions from "../redux/actions/index";

// let fetchfunction = (requestbody) => {
//   fetch("http://localhost:5000/graphql", {
//     method: "POST",
//     body: JSON.stringify(requestbody),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((result) => result.json())
//     .then((res) => {
//       console.log("res", res);
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
class CreateEvents extends Component {
  state = {
    title: "",
    description: "",
    price: 0.0,
    posts: [],
    obj: [],
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
    };
    console.log("submitted");
    // this.props.dispatch(Actions.createpost(obj));
    // console.log("submitted");
    // alert("Your new post was created. Thank you");
    // this.props.history.push("/Home");
    console.log("obj", obj);
    let requestbody = {
      query: `
        mutation {
            createEvent( eventInput: { title: "${this.state.title}",
              description: "${this.state.description}",
              price:${this.state.price}}){
                title
                description
            }
        }
        `,
    };
    // fetchfunction(requestbody);
  };

  async componentDidMount() {
    let requestbody = {
      query: `
      query {
        events{
         title,
         description,
         price,
         date
       }
       }
        `,
    };
    await fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(requestbody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((res) => {
        console.log("res", res);

        this.setState({
          posts: res.data.events,
        });
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { posts } = this.state;
    console.log("posts in render", posts.events);

    let valll;
    if (posts.length > 0) {
      let p = posts;
      console.log("p", p);
      valll = p.map((item) => (
        <p>
          {" "}
          title: {item.title} , description: {item.description}{" "}
        </p>
      ));
    }
    return (
      <div>
        <form>
          <p style={{ textAlign: "center" }}> create new post</p>
          <label>
            Title
            <textarea
              style={{ height: "3.5em" }}
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            ></textarea>
          </label>
          <label>
            Description
            <textarea
              name="description"
              placeholder="Maximum of 200 characters"
              value={this.state.description}
              onChange={this.onChange}
            ></textarea>
          </label>
          <label>
            Price
            <textarea
              name="price"
              value={this.state.price}
              onChange={this.onChange}
            ></textarea>
          </label>
          <button type="reset">Clear</button>
          <button onClick={this.onSubmit}>Submit</button>
        </form>
        title: {this.state.title}
        description: {this.state.description}
        {valll}
      </div>
    );
  }
}

export default CreateEvents;

//
//export default connect()(CreatePost);
