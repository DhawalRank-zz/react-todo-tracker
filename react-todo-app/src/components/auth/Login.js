import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth.action";
import LoginPage from "./LoginPage";

class Login extends Component {
  state = {
    errors: {},
    user: {
      email: "",
      password: ""
    }
  };
  static getDerivedStateFromProps(newProps, oldState) {
    if (newProps.auth.loggedIn !== undefined && !newProps.auth.loggedIn) {
      return {
        errors: {
          summary: "Invalid username or password"
        },
        user: {
          email: "",
          password: ""
        }
      };
    } else {
      return {
        errors: {},
        user: {
          email: "",
          password: ""
        }
      };
    }
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({
      user
    });
  }
  onClick() {
    if (this.state.user.email === "") {
      this.setState({ errors: { email: "This field is required" } });
    } else if (this.state.user.password === "") {
      this.setState({ errors: { password: "This field is required" } });
    } else {
      this.props.login(this.state.user.email, this.state.user.password);
    }
  }

  render() {
    return (
      <LoginPage
        onClick={() => this.onClick()}
        onChange={e => this.changeUser(e)}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    alert: state.alert
  };
};

export default connect(mapStateToProps, { login })(Login);
