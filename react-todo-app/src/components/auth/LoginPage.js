import React, { Component } from "react";
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {
  state = {
    errors: {},
    user: {
      email: "",
      password: ""
    }
  };

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  /** Process the form.  **/

  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

export default LoginPage;
