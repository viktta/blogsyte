import React, { Component } from "react";
import "../Style/main.css";
import Dropdown from "./Dropdown";
import Post from "./Post";
import Fetch from "./fetch";
import { BrowserRouter as Router } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <Dropdown />
          <Post />
          <Fetch />
        </Router>
      </div>
    );
  }
}

export default Home;
