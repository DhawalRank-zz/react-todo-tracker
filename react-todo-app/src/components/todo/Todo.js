import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import { blue500, red500 } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import EditIcon from "material-ui/svg-icons/editor/mode-edit";
import DeleteIcon from "material-ui/svg-icons/action/delete";

class Todo extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.title}
          subtitle=""
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <CardActions>
            <IconButton tooltip="Edit Todo">
              <EditIcon color={blue500} />
            </IconButton>
            <IconButton tooltip="Delete Todo">
              <DeleteIcon color={red500} />
            </IconButton>
          </CardActions>
        </CardText>
      </Card>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired
};

export default Todo;
