import React, { Component } from "react";
import fire from "../config/fire";
import "../Style/Login_main.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.register = this.register.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
  }

  register(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handlechange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="Main">
        <form className="Login-page">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter email address"
            onChange={this.handlechange}
            value={this.state.email}
          ></input>
          <br /> <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter password"
            onChange={this.handlechange}
            value={this.state.password}
          ></input>
          <br /> <br />
          <button onClick={this.login} id="Login">
            Login
          </button>
          <br /> <br />
          <button onClick={this.register} id="Signup">
            Signup
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
