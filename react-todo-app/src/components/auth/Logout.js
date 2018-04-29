import React, { Component } from "react";
import { IconButton } from "material-ui";
import ExitIcon from "material-ui/svg-icons/action/exit-to-app";
import "./Auth.css";

class Logout extends Component {
  render() {
    return (
      <IconButton tooltip="Logout">
        <ExitIcon className="Auth__exit-icon" />
      </IconButton>
    );
  }
}

export default Logout;
