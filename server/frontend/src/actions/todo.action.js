import { todoConstants } from "./constants/todo.constants";
import { todoService } from "../services/todo.service";
import { alertActions } from "./alert.action";

export function getTodo() {
  return dispatch => {
    dispatch(request());
    todoService.getTodo().then(
      todos => {
        dispatch(success(todos));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request() {
    return { type: todoConstants.TODO_GET_REQUEST, isRequesting: true };
  }
  function success(todos) {
    return { type: todoConstants.TODO_GET_SUCCESS, todos };
  }
  function failure(error) {
    return { type: todoConstants.TODO_GET_FAILURE, error };
  }
}
