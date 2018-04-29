import React, { Component } from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import Todo from "./Todo";
import "./Todo.css";

class TodoList extends Component {
  state = {
    todo: []
  };
  render() {
    return (
      <div>
        <div className="App__div-center Todo__todo-width">
          <FloatingActionButton
            secondary={true}
            className="Todo__floating-add-button"
          >
            <ContentAdd />
          </FloatingActionButton>
          <Todo title="Go Grocery Shopping" date="2018-04-22" alert={true} />
        </div>
      </div>
    );
  }
}

export default TodoList;
