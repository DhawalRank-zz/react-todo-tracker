import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TodayIcon from "material-ui/svg-icons/action/today";
import ExitIcon from "material-ui/svg-icons/action/exit-to-app";
import { AppBar, FlatButton } from "material-ui";
import TodoList from "./components/todo/TodoList";
import "./App.css";

const todayIconStyle = {
  marginLeft: 12,
  marginTop: 11
};
const exitIconStyle = {
  marginTop: 4
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="TODO"
            iconElementLeft={<TodayIcon style={todayIconStyle} />}
            iconElementRight={
              <FlatButton>
                <ExitIcon style={exitIconStyle} />
              </FlatButton>
            }
          />
          <TodoList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
