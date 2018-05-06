import React, { Component } from "react";
import { connect } from "react-redux";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import { getTodo } from "../../actions/todo.action";
import { JsonHelper } from "../../helpers/JsonHelper";
import { StringHelper } from "../../helpers/StringHelper";
import { Loading } from "../component-helpers/Loading";
import Todo from "./Todo";
import "./Todo.css";

class TodoList extends Component {
  state = {
    todo: []
  };
  componentDidMount() {
    this.props.getTodo();
  }
  render() {
    console.log(this.props.todos);
    return (
      <div>
        {JsonHelper.isEmpty(this.props.todos) || this.props.todos.requested ? (
          <Loading />
        ) : (
          <div>
            {this.props.todos.failed ? (
              <h2>Failed to load data</h2>
            ) : (
              <div className="App__div-center Todo__todo-width">
                <FloatingActionButton
                  secondary={true}
                  className="Todo__floating-add-button"
                >
                  <ContentAdd />
                </FloatingActionButton>
                {this.props.todos.map(aTodo => (
                  <Todo
                    key={aTodo._id}
                    title={aTodo.title}
                    date={aTodo.date}
                    alert={StringHelper.convertStringToBoolean(aTodo.alert)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    auth: state.auth,
    alert: state.alert,
    todos: state.todos
  };
};

export default connect(mapStateToProps, { getTodo })(TodoList);
