import React, { Component } from "react";
import "../Style/main.css";

class Fetch extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/posts/");
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.todos.map(item => (
          <div key={item.id} className="main">
            <h1>{item.post}</h1>
            <p>{item.author}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Fetch;
