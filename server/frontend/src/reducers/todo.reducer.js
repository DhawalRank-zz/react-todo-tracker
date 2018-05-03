import { todoConstants } from "../actions/constants/todo.constants";

export function todos(state = {}, action) {
  switch (action.type) {
    case todoConstants.TODO_GET_REQUEST:
      return {
        requested: true
      };
    case todoConstants.TODO_GET_SUCCESS:
      return action.todos;
    case todoConstants.TODO_GET_FAILURE:
      return {
        failed: true,
        error: action.error
      };
    default:
      return state;
  }
}
