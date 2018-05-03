import { userConstants } from "./constants/user.constants";
import { userService } from "../services/auth.service";
import { alertActions } from "./alert.action";

export function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));
    userService.login(username, password).then(
      user => {
        dispatch(success(user));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}
export function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}
