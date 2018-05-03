import { combineReducers } from "redux";
import { auth } from "./auth.reducer";
import { alert } from "./alert.reducer";
import { todos } from "./todo.reducer";

export default combineReducers({
  auth,
  alert,
  todos
});
