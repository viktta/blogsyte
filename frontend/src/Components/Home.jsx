import React, { Component } from "react";
import "../Style/main.css";
import Dropdown from "./Dropdown";
import Post from "./Post";

class Home extends Component {
  render() {
    return (
      <div>
        <Dropdown />
        <Post />
      </div>
    );
  }
}

export default Home;
