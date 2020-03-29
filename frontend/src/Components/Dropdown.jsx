import React, { Component } from "react";
import "../Style/main.css";
import fire from "../config/fire";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <button onClick={this.Logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Dropdown;
