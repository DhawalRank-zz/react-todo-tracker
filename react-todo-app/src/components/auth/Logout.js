import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth.action";
import { IconButton } from "material-ui";
import ExitIcon from "material-ui/svg-icons/action/exit-to-app";
import "./Auth.css";

class Logout extends Component {
  onClick() {
    this.props.logout();
  }
  render() {
    return (
      <IconButton onClick={() => this.onClick()} tooltip="Logout">
        <ExitIcon className="Auth__exit-icon" />
      </IconButton>
    );
  }
}

export default connect(null, { logout })(Logout);
