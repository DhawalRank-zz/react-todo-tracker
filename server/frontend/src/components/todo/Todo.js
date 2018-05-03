import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import { blue500, red500 } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import EditIcon from "material-ui/svg-icons/editor/mode-edit";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import ToggleIcon from "../component-helpers/ToggleIcon";
import NotificationIcon from "material-ui/svg-icons/social/notifications";
import NotificationOffIcon from "material-ui/svg-icons/social/notifications-off";

class Todo extends Component {
  state = {
    toggleIcon: this.props.alert
  };
  render() {
    return (
      <div className="Todo__container">
        <Card>
          <CardHeader title={this.props.title} subtitle={this.props.date} />
          <CardText>
            <CardActions>
              <IconButton
                key={1}
                tooltip="Toggle Alert"
                onClick={() =>
                  this.setState({ toggleIcon: !this.state.toggleIcon })
                }
              >
                <ToggleIcon
                  on={this.state.toggleIcon}
                  onIcon={<NotificationIcon />}
                  offIcon={<NotificationOffIcon />}
                />
              </IconButton>
              <IconButton tooltip="Edit Todo">
                <EditIcon color={blue500} />
              </IconButton>
              <IconButton tooltip="Delete Todo">
                <DeleteIcon color={red500} />
              </IconButton>
            </CardActions>
          </CardText>
        </Card>
      </div>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  alert: PropTypes.bool.isRequired
};

export default Todo;
