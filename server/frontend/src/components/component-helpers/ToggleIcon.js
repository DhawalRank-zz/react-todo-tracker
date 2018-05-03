import { Component } from "react";
import PropTypes from "prop-types";

class ToggleIcon extends Component {
  render() {
    if (this.props.on) {
      return this.props.onIcon;
    } else {
      return this.props.offIcon;
    }
  }
}

ToggleIcon.propTypes = {
  on: PropTypes.bool.isRequired,
  onIcon: PropTypes.element.isRequired,
  offIcon: PropTypes.element.isRequired
};

export default ToggleIcon;
