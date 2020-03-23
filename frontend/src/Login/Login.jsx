import React, { Component } from "react";
import fire from "../../config/fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      user: "",
      password: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form className="Main-login">
        <input
          type="email"
          value={this.state.email}
          onChange={this.changeHandler}
        >
          email
        </input>
        <br /> <br /> <br />
        <input
          type="password"
          value={this.state.password}
          onChange={this.changeHandler}
        >
          password
        </input>
        <button type="submit">login</button>
      </form>
    );
  }
}

export default Login;
