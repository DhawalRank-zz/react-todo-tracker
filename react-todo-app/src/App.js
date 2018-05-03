import React, { Component } from "react";
import { connect } from "react-redux";
import { Loading } from "./components/component-helpers/Loading";
import Logout from "./components/auth/Logout";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TodayIcon from "material-ui/svg-icons/action/today";
import { AppBar } from "material-ui";
import TodoList from "./components/todo/TodoList";
import Login from "./components/auth/Login";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: false,
    loggingIn: false
  };

  static getDerivedStateFromProps(newProps, oldState) {
    if (newProps.auth.loggingIn) return { isLoggedIn: false, loggingIn: true };
    else if (newProps.auth.user) return { isLoggedIn: true, loggingIn: false };
    else return { isLoggedIn: false, loggingIn: false };
  }
  render() {
    return (
      <MuiThemeProvider>
        {this.state.loggingIn ? (
          <Loading />
        ) : (
          <div>
            {!this.state.isLoggedIn ? (
              <Login />
            ) : (
              <div>
                <AppBar
                  title="TODO"
                  iconElementLeft={<TodayIcon className="App__today-icon" />}
                  iconElementRight={<Logout />}
                />
                <TodoList />
              </div>
            )}
          </div>
        )}
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    alert: state.alert
  };
};

export default connect(mapStateToProps)(App);
