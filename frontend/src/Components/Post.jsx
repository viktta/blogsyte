import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    post: "",
    author: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://127.0.0.1:8000/posts/", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { post, author } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="post"
            value={post}
            onChange={this.changeHandler}
          ></input>
          <br /> <br />
          <input
            type="text"
            name="author"
            value={author}
            onChange={this.changeHandler}
          ></input>
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}

export default Post;
