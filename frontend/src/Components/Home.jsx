import React, { Component } from "react";
import "../Style/main.css";
import Dropdown from "./Dropdown";
import Post from "./Post";
import Fetch from "./fetch";
import fire from "../config/fire";
import Login from "../Login/Login";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this, setState({ user });
        //  localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        //  localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <div>
        <Dropdown />
        <Post />
        <Fetch />
        <div className="user">{this.state.user ? <Home /> : <Login />}</div>
      </div>
    );
  }
}

export default Home;
