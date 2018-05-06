import { todoConstants } from "./constants/todo.constants";
import { todoService } from "../services/todo.service";
import { alertActions } from "./alert.action";
import { logout } from "./auth.action";

export function getTodo() {
  return dispatch => {
    dispatch(request());
    todoService.getTodo().then(
      todos => {
        dispatch(success(todos));
      },
      error => {
        if (error.status === 401) {
          dispatch(logout());
        }
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
