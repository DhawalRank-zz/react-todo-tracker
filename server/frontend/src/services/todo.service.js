import { API_ROOT } from "../apiconfig";

export const todoService = {
  getTodo
};
function getTodo() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("user")
    }
  };
  return fetch(`${API_ROOT}/todo`, requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject({
          status: response.status,
          message: response.statusText
        });
      }

      return response.json();
    })
    .then(todos => {
      return todos;
    });
}
