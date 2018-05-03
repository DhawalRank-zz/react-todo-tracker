import { API_ROOT } from "../apiconfig";

export const todoService = {
  getTodo
};
function getTodo() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };
  return fetch(`${API_ROOT}/todo`, requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }

      return response.json();
    })
    .then(todos => {
      return todos;
    });
}
