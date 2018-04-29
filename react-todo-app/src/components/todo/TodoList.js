import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  state = {
    todo: []
  };
  render() {
    return <Todo title="Go Grocery Shopping" />;
  }
}

export default TodoList;
