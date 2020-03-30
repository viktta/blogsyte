import React, { Component } from "react";
import axios from "axios";
import "../Style/Fetch_main.css";
class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Posts: []
    };
  }

  componentDidMount() {
    axios
      .get(" http://127.0.0.1:8000/posts/ ")
      .then(response => {
        console.log(response);
        this.setState({ Posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { Posts } = this.state;
    return (
      <div>
        <h1>
          {Posts.map(post => (
            <ul key={post.name} id="Post">
              <li>{post.post}</li>
              <li>{post.author}</li>
            </ul>
          ))}
        </h1>
      </div>
    );
  }
}

export default Fetch;
