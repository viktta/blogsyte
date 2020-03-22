import React, { Component } from "react";
import "../Style/main.css";
import { Link } from 'react-router-dom';

class Dropdown extends Component {
  state = {};
  render() {
    return (
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="about">about</a>
        </div>
      </div>
    );
  }
}

export default Dropdown;
