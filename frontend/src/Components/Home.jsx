import React, { Component } from "react";
import "../Style/main.css";
import Dropdown from "./Dropdown";
import Fetch from "./fetch";
import Post from "./Post";
class Home extends Component {
  render() {
    return (
      <div>
        <Dropdown />
        <Post />
        <Fetch />
      </div>
    );
  }
}

export default Home;
