import React, { Component } from "react";
import Logout from "./components/auth/Logout";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TodayIcon from "material-ui/svg-icons/action/today";
import { AppBar } from "material-ui";
import TodoList from "./components/todo/TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="TODO"
            iconElementLeft={<TodayIcon className="App__today-icon" />}
            iconElementRight={<Logout />}
          />
          <TodoList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
